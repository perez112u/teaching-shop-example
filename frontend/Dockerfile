# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . . 

ARG VITE_ADMIN_BASE_URL
ENV VITE_ADMIN_BASE_URL=$VITE_ADMIN_BASE_URL

RUN npm run build

# Stage 2: Production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80