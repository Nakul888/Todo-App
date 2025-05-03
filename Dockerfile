# Dockerfile for package.json
# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy source files and build
COPY . .
RUN npm run build

# Stage 2: Production environment
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx configuration for SPA routing
RUN echo "server {" > /etc/nginx/conf.d/default.conf && \
    echo "    listen       80;" >> /etc/nginx/conf.d/default.conf && \
    echo "    server_name  localhost;" >> /etc/nginx/conf.d/default.conf && \
    echo "    location / {" >> /etc/nginx/conf.d/default.conf && \
    echo "        root   /usr/share/nginx/html;" >> /etc/nginx/conf.d/default.conf && \
    echo "        try_files \$uri \$uri/ /index.html;" >> /etc/nginx/conf.d/default.conf && \
    echo "    }" >> /etc/nginx/conf.d/default.conf && \
    echo "}" >> /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]