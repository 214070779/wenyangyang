#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# # 生成静态文件
npm run build

# # 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'b.xugaoyi.com' > CNAME

# if [ -z "$GITHUB_TOKEN" ]; then
#   msg='deploy'
#   githubUrl = git@github.com:214070779/214070779.github.io.git
# else
#   msg='来自github actions的自动部署'
#   # githubUrl=https://xugaoyi:${GITHUB_TOKEN}@github.com/xugaoyi/vuepress-theme-vdoing.git
#   # git config --global user.name "xugaoyi"
#   # git config --global user.email "894072666@qq.com"
#   githubUrl = git@github.com:214070779/214070779.github.io.git
# fi
# git config --global user.name "214070779"
# git config --global user.email "214070779@qq.com"
# git config --global init.defaultBranch master 
git init
git add .
# git commit -m "${msg}"
git commit -m "博客更新啦"  # git push -f $githubUrl master # 推送到github gh-pages分支
git push -f git@github.com:214070779/214070779.github.io.git master
# deploy to coding pages
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:xgy/xgy.git
# else
#   codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

cd -
# rm -rf docs/.vuepress/dist
