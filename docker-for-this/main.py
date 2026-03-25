from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import httpx, json, os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://localhost:11434")

@app.post("/chat")
async def chat(body: dict):
    prompt = body.get("message", "")

    async def stream():
        async with httpx.AsyncClient(timeout=60) as client:
            async with client.stream("POST", f"{OLLAMA_HOST}/api/generate", json={
                "model": "wbg-bot:latest",
                "prompt": prompt,
                "stream": True
            }) as r:
                async for line in r.aiter_lines():
                    if line:
                        data = json.loads(line)
                        yield data.get("response", "")
                        if data.get("done"):
                            break

    return StreamingResponse(stream(), media_type="text/plain")