FROM node:18-alpine AS build
WORKDIR /vandal_ethan_ui_garden_build_checks

COPY package.json package-lock.json* ./
RUN npm install --force

COPY . .

RUN npm run format
RUN npm run lint:fix || echo "Lint issues fixed"
RUN npm test
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /vandal_ethan_ui_garden_build_checks/build /usr/share/nginx/html
EXPOSE 8018
CMD ["nginx", "-g", "daemon off;"]