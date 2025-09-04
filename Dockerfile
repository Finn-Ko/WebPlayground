# Use official Node.js image
FROM node:24.7-alpine3.21 AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Production image
FROM node:24.7-alpine3.21

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./

EXPOSE 3000

CMD ["node", "--env-file", ".env", "dist/server/index.js"]