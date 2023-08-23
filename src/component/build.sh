#!/bin/bash
find . -type f -iname \*.js -delete

echo -e "\e[91m --本地ts-build中--"
tsc --project ./


echo "编译ts成功"


echo -e "\e[0m"


echo -e "\e[92m --本地less-build中--"

# 指定要编译的 LESS 文件所在的文件夹路径
folder_path="./"

# 遍历文件夹中的所有 LESS 文件
find "$folder_path" -type f -name "*.less" | while read -r file_path; do
  # 检查文件是否存在
  if [ -f "$file_path" ]; then
    # 获取文件相对路径（相对于文件夹路径）
    relative_path="${file_path#$folder_path/}"
    # 提取文件名（不包含扩展名）
    file_name=$(basename "$relative_path" .less)
    # 构建输出 CSS 文件的路径
    # output_file="${folder_path}/${file_name}.css"
    dir_path=$(dirname "$file_path")
    # 构建输出 CSS 文件的路径
    output_file="${dir_path}/${file_name}.css"
    # 执行 LESS 编译命令
    lessc "$file_path" "$output_file"

    # 检查编译是否成功
    if [ $? -eq 0 ]; then
      echo "编译成功: ${relative_path} -> ${file_name}.css"
    else
      echo "编译失败: ${relative_path}"
    fi
  fi
done