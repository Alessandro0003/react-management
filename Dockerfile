FROM node:16 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

COPY server.json /usr/share/nginx/html/server.json

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]