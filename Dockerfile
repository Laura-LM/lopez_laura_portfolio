FROM node:20 AS build

WORKDIR /lopez_laura_ui_garden_build_checks

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Auto-format code before checks (this ensures it always passes)
RUN npm run format

# Run quality checks
RUN npm run lint
RUN npm run test:ci

# Build Storybook
RUN npm run build-storybook

# Production stage
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /lopez_laura_ui_garden_build_checks/storybook-static /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]