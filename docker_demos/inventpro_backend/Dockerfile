FROM node:20-alpine

WORKDIR /app

# Install dependencies first (layer caching)
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Create .env file for Docker environment (overrides will come from compose env)
RUN echo "DB_NAME=inventpro" > src/.env && \
    echo "DB_USER=inventpro_user" >> src/.env && \
    echo "DB_PASSWORD=inventpro_pass" >> src/.env && \
    echo "DB_HOST=postgres" >> src/.env && \
    echo "DB_PORT=5432" >> src/.env && \
    echo "DB_SCHEMA=inventpro_user" >> src/.env && \
    echo "JWT_SECRET=demo_jwt_secret_portfolio_2024" >> src/.env && \
    echo "PORT=3001" >> src/.env

EXPOSE 3001

# Wait for postgres and start server
CMD ["node", "src/server.js"]
