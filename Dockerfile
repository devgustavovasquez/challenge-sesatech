# Stage 1: Build Stage
FROM node:18.16-alpine as build

# Set working directory
WORKDIR /app

# Copy from current directory to WORKDIR
COPY . .  

# Install dependencies
RUN npm install  

# Build the application 
RUN npm run build  

# Stage 2: Final Stage
FROM node:18.16-alpine as final

# Set working directory
WORKDIR /app

# Copy from current directory to WORKDIR
COPY --from=build /app/build ./
COPY --from=build /app/.env.example ./.env

# Install dependencies
RUN npm ci --production

# Expose port
EXPOSE ${PORT}

# Run the application
CMD ["npm", "run", "start"]