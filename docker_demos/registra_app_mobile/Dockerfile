FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Build production bundle for Angular/Ionic
RUN npx ng build --configuration production || true

EXPOSE 8100

# Serve static web build
CMD ["npx", "serve", "-s", "www", "-l", "8100"]
