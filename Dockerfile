FROM node:20 AS build

WORKDIR /lopez_laura_ui_garden

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build-storybook

FROM nginx:alpine

WORKDIR /lopez_laura_ui_garden

COPY --from=build /lopez_laura_ui_garden/storybook-static /usr/share/nginx/html

RUN sed -i 's/80;/8083;/' /etc/nginx/conf.d/default.conf

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]