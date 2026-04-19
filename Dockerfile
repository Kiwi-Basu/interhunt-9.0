# Multi-stage build for Vite React Frontend using Bun
FROM oven/bun:alpine AS builder

WORKDIR /app

# Copy package files first
COPY package.json bun.lock ./

# Install dependencies using Bun
RUN bun install --frozen-lockfile

# Copy all source code
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:alpine AS final

WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Create system user and group for security
RUN addgroup -S appgroup && adduser -S -G appgroup -h /home/appuser appuser

# Change ownership of app directory
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 3000

# Serve the built application using Bun
# We use bunx to run the 'serve' package without installing it globally
CMD ["bun", "x", "serve", "-s", "dist", "-l", "3000"]