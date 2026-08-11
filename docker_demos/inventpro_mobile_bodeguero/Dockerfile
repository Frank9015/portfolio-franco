FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

ENV CHOKIDAR_USEPOLLING=false
ENV WATCHPACK_POLLING=false

EXPOSE 8005

CMD ["npx", "expo", "start", "--web", "--port", "8005", "--non-interactive"]
