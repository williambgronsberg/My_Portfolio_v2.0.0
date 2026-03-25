FROM ollama/ollama:latest

# Copy the Modelfile
COPY Modelfile /root/Modelfile

# Build the model
RUN ollama create wig-cmd:latest -f /root/Modelfile

# Expose Ollama API
EXPOSE 11434

# Run Ollama
CMD ["serve"]
