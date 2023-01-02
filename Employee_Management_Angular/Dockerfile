# stage1
#FROM node:latest as node
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build --prod

# stage2
#FROM nginx:alpine
#COPY --from=node /app/dist/angular-frontend /user/share/nginx/html


#FROM nginx:1.17.1-alpine
#COPY /dist/angular-frontend /user/share/nginx/html

FROM node:11.6.0-alpine AS builder
COPY . ./Employee_Management_Angular
WORKDIR /Employee_Management_Angular
RUN npm i

FROM nginx:1.15.8-alpine
COPY --from=builder /Employee_Management_Angular/dist/Employee_Management_Angular/ /usr/share/nginx/html