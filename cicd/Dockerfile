FROM nginx:latest

COPY ./build /www
COPY ./cicd/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
