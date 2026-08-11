FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Export static web bundle for Expo
RUN npx expo export --platform web || true

EXPOSE 8005

# Serve static web build
CMD ["npx", "serve", "-s", "dist", "-l", "8005"]
