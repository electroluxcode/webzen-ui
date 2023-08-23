FROM nginx


RUN rm -rf /usr/share/nginx/html
RUN rm /etc/nginx/nginx.conf

# 从构建阶段复制构建后的文件到Nginx镜像的HTML目录
COPY html /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf 
# COPY nginx.conf etc/nginx/conf.d/default.conf
RUN echo "nginx 开始构建"

# 暴露端口80供外部访问
EXPOSE 81

# docker ps(容器)  docker images
# docker run edca794d6acd imageid
# docker exec -it edca794d6acd  /bin/bash
# cd /usr/share/nginx/html