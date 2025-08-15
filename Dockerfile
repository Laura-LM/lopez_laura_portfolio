
FROM node:20 AS build

WORKDIR /lopez_laura_final_site

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Run quality checks
RUN npm run lint
RUN npm run format:check
RUN npm run test:ci

# Build React app (not Storybook)
RUN npm run build

# Production stage
FROM nginx:alpine

WORKDIR /lopez_laura_final_site

# Copy built React app
COPY --from=build /lopez_laura_final_site/build /usr/share/nginx/html

# Configure nginx port
RUN sed -i 's/80;/5575;/' /etc/nginx/conf.d/default.conf

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]