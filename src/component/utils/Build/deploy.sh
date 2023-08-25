#!/bin/bash

# 有错误直接退出
set -e
# step1：初始化变量
start_time=$(date +%s) # 记录脚本开始时间
docker_image_version=${1:-1.1} # Docker镜像版本
docker_image_name=${2:-bimddp_image} # Docker 仓库 image 名字
docker_hub_username=${3:-electroluxcode} # Docker Hub 用户名
container_name=${4:-bimddp_container} # 容器名字
container_expose_port=${5:-82} # 容器暴露的端口

server_username=${6:-root} # Linux服务器用户名
server_address=${7:-192.168.80.133} # Linux服务器地址



# step2：没登陆首先登录一下
# docker login -u 3451613934@qq.com -p 
# yarn build

# step3： 注意这个 image 应该要提前构建
# -t 指定构建镜像的名字和版本  -f 这个好像是错的
echo -e "\e[91m --本地build中--"
docker build  --platform linux/amd64 -t $docker_hub_username/$docker_image_name:$docker_image_version  . 
docker push $docker_hub_username/$docker_image_name:$docker_image_version
echo -e "\e[0m"

# 34---a48042d416af


# step4:这一步可以 ssh-copy-id 去除登录  
# 加上双引号是在服务器中执行命令,不然就是在本机执行命令
echo -e "\e[92m --服务器部署中--"
ssh -t $server_username@$server_address << EOF

docker ps
docker stop $container_name
docker rm $container_name

echo 要删除的镜像id:"\$(docker images -q $docker_hub_username/$docker_image_name:$docker_image_version)"
if [ -n "\$(docker images -q $docker_hub_username/$docker_image_name:$docker_image_version)" ]; then
  docker rmi "\$(docker images -q $docker_hub_username/$docker_image_name:$docker_image_version)"
  echo "删除旧镜像成功"
fi


docker pull $docker_hub_username/$docker_image_name:$docker_image_version
if [ $? -ne 0 ]; then
  echo "Docker镜像拉取失败,脚本被终止."
  exit 1
fi

docker run -d --name $container_name -p $container_expose_port:80 $docker_hub_username/$docker_image_name:$docker_image_version
docker ps
exit

EOF


echo -e "\e[0m"

# docker images |  docker rmi  id id | docker rmi $(docker images -q)
# 计算整个脚本的用时
end_time=$(date +%s)
duration=$((end_time - start_time))
formatted_duration=$(date -u -d @"$duration" +"%H:%M:%S")

echo "✨🎉🎈恭喜您, 部署成功!"
echo "整个过程花费 $formatted_duration"