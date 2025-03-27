# Install dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Build app
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app ./
COPY . .
RUN npm run build

# Serve app
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
