    # Stage 1: Build the Angular application
    FROM node:18-alpine AS builder

    WORKDIR /app

    # Copy package files first for better caching
    COPY package.json package-lock.json ./
    RUN npm ci --legacy-peer-deps

    # Copy all other files
    COPY . .

    # Verify environment files (Good for debugging, keep this)
    # RUN ls -la src/environments/ && \
    #     cat src/environments/environment.prod.ts

    # --- ADD THIS LINE TO BUST CACHE ---
    RUN echo "Forcing rebuild due to environment changes $(date +%s)"
    # --- END CACHE BUSTER ---

    # Build with production configuration
    RUN npm run build -- --configuration production

    # Stage 2: Serve using Nginx
    FROM nginx:alpine

    # Remove default nginx content
    RUN rm -rf /usr/share/nginx/html/*

    # Copy built files (must match angular.json outputPath)
    COPY --from=builder /app/dist/project-name /usr/share/nginx/html

    # Copy custom nginx config
    COPY nginx.conf /etc/nginx/conf.d/default.conf

    EXPOSE 8080
    CMD ["nginx", "-g", "daemon off;"]
    