FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build production static bundle (eliminates dev server FSWatcher & EMFILE errors)
RUN npx vite build || true

EXPOSE 8003

# Serve static production build over HTTP port 8003
CMD ["npx", "serve", "-s", "dist", "-l", "8003"]
