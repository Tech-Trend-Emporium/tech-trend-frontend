# Stage 1: Build (Node + Vite)
FROM node:20-alpine AS builder

# 1) Define build arguments for Vite (only variables prefixed with VITE_ are injected)
ARG VITE_API_BASE_URL=http://localhost:8080/api

WORKDIR /app

# 2) Copy package manifests first to leverage Docker cache
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# 3) Install dependencies (using npm here, but yarn/pnpm is fine too)
RUN npm ci --no-audit --no-fund

# 4) Copy the rest of the application code
COPY . .

# 5) Create .env.production file with runtime environment variables for Vite
RUN printf "VITE_API_BASE_URL=%s\n" "$VITE_API_BASE_URL" > .env.production

# 6) Build production-ready static assets
RUN npm run build

# Stage 2: Runtime (Nginx)
FROM nginx:1.27-alpine AS runtime

# 7) Copy the compiled static files to Nginx's web root
COPY --from=builder /app/dist /usr/share/nginx/html

# 8) Copy custom Nginx configuration (SPA fallback handling)
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 9) Expose HTTP port
EXPOSE 80

# 10) Start Nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]