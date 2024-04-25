# Use node:18-alpine as the base image for subsequent stages
FROM node:18-alpine as base 

# For alpine we need python installed
RUN apk add --no-cache g++ make py3-pip libc6-compat

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Expose port 3000 for the app
EXPOSE 3000

# Create a new stage for building the app, using the base stage as a starting point
FROM base as builder

# Set the working directory in the builder stage to /app
WORKDIR /app

# Copy all files from the current directory to the working directory in the builder stage
COPY . .

# Build the app
RUN npm run build

# Create a new stage for the production environment, using the base stage as a starting point
FROM base as production

# Set the working directory in the production stage to /app
WORKDIR /app

# Set the NODE_ENV environment variable to 'production'
ENV NODE_ENV=production

# Install only the production dependencies
RUN npm ci 

# Create a new group and user for running the app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change to the new user
USER nextjs

# Copy the built app, node_modules, package.json, and public directory from the builder stage to the production stage
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Start the app
CMD npm start

# Create a new stage for the development environment, using the base stage as a starting point
FROM base as dev

# # Set the NODE_ENV environment variable to 'development'
# ENV NODE_ENV=development

# # Install all dependencies
# RUN npm install 

# # Copy all files from the current directory to the working directory in the dev stage
# COPY . .

# # Start the app in development mode
# CMD npm run dev