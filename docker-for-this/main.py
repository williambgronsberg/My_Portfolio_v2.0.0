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
MODEL_NAME = os.getenv("MODEL_NAME", "wbg-bot:latest")

@app.post("/chat")
async def chat(body: dict):
    messages = body.get("messages", [])
    if not messages:
        prompt = body.get("message", "")
        messages = [{"role": "user", "content": prompt}]

    async def stream():
        async with httpx.AsyncClient(timeout=60) as client:
            async with client.stream("POST", f"{OLLAMA_HOST}/api/chat", json={
                "model": MODEL_NAME,
                "stream": True,
                "messages": messages,
            }) as r:
                async for line in r.aiter_lines():
                    if line:
                        try:
                            data = json.loads(line)
                            chunk = data.get("message", {}).get("content", "")
                            if chunk:
                                yield chunk
                            if data.get("done"):
                                break
                        except json.JSONDecodeError:
                            continue

    return StreamingResponse(stream(), media_type="text/plain")