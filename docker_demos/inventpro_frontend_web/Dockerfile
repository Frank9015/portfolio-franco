FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

ENV CHOKIDAR_USEPOLLING=false
ENV WATCHPACK_POLLING=false

EXPOSE 8003

CMD ["npx", "vite", "--host", "0.0.0.0", "--port", "8003"]
