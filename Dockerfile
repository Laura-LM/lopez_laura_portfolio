FROM node:20 AS build

WORKDIR /lopez_laura_ui_garden_build_checks

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Run quality checks - estos fallarán si el código no cumple los estándares
RUN npm run lint
RUN npm run format:check
RUN npm run test:ci

# Build Storybook
RUN npm run build-storybook

# Production stage
FROM nginx:alpine

WORKDIR /lopez_laura_ui_garden_build_checks

# Copy built storybook
COPY --from=build /lopez_laura_ui_garden_build_checks/storybook-static /usr/share/nginx/html

# Configure nginx port
RUN sed -i 's/80;/8018;/' /etc/nginx/conf.d/default.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]