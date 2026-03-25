# WIG-CMD: Ollama Model for William's Portfolio

## Quick Start with Docker

### Option 1: Build and Run (Manual)
```bash
cd components/cmd
docker build -t wig-cmd .
docker run -d -p 11434:11434 --name wig-cmd-ollama wig-cmd
```

### Option 2: Using Docker Compose (Recommended)
```bash
cd components/cmd
docker-compose up -d
```

## Usage

Once the container is running, the model will be available at:
- URL: `http://localhost:11434`
- Model Name: `wig-cmd:latest`

### Test the Model
```bash
curl http://localhost:11434/api/generate -d '{
  "model": "wig-cmd:latest",
  "prompt": "Hello!",
  "stream": false
}'
```

## Stopping the Container

```bash
# Using docker-compose
docker-compose down

# Or using docker
docker stop wig-cmd-ollama
docker rm wig-cmd-ollama
```

## View Logs
```bash
docker logs -f wig-cmd-ollama
```

## Rebuild After Modifications
```bash
docker-compose build --no-cache
docker-compose up -d
```

## The Model

The `wig-cmd` model is trained on `qwen2.5:7b` and configured to act as an AI assistant for William B. Groensberg's portfolio terminal.

### Capabilities:
- Answer questions about William and his projects
- Help with coding questions
- Provide technical assistance
- Communicate professionally or casually as needed

### System Prompt Includes:
- William's background and skills
- Project descriptions
- Contact information
- Guidelines for tone and response style
