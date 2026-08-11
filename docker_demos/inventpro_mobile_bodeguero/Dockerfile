FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8005

CMD ["npx", "expo", "start", "--web", "--port", "8005", "--non-interactive"]
