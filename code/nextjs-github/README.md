# Nextjs-Github
**Nextjs构建的服务端渲染（SSR）项目-Github**

**React+Hooks+Next.js+Koa2 仿Github开发**

> 本项目用到的技术栈

* React 系列
  * React
  * Redux
  * Redux-Thunk
  * Next.js
  * Antd
* Node 系列
  * Koa2
* Redis
* Oauth

### Demo

<https://examples.silinchen.com/nextjs-github>

可以使用你的github账号进行第三方授权登录，登录后可以看到你的仓库，你关注的仓库。可以看仓库等 readme 详情，可以搜索github上面的项目等。



### 功能

1. 接入Github 的 Oauth 授权登录

2. 个人中心：你的仓库，你关注的仓库

3. 项目的 README 详情页
4. 项目的 issues 页面
5. Github 项目搜索：编程语言过滤，排序
6. ...



### 安装

仓库地址 https://github.com/silinchen/examples/code/nextjs-github

进入仓库下载 zip 包到本地解压

或直接克隆项目

```shell
$ git clone https://github.com/silinchen/examples/code/nextjs-github
$ cd nextjs-github
$ npm install
# 开发模式
$ npm run dev 
# 生产模式
$ npm run build
$ npm start
```

**需要安装并启动 redis **

最后，访问 http://localhost:3000



###Github Oauth授权

> 授权步骤：<https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/>

申请 Github Oauth App 授权

Github -》点击右上角头像 -》选Settings -》进入设置页面后选 Developer settings -》选 Oauth Apps -》点击New Oauth App

> Application name：App 的名称

> Homepage URL：App 主页，填项目主页地址。例如：http://localhost:3000 或 https://nextjs-github.csl.xyz

> Authorization callback URL: 回调接口地址，Oauth 认证授权成功后会跳转到这个地址。填项目对应的接口地址。例如：http://localhost:3000/auth 或 https://nextjs-github.csl.xyz/auth

点 `Register application` 完成 App 创建

取得 `Client ID` 跟 `Client Secret`  

替换到 ./config.js 文件中对应的参数，重启项目，则可以使用自己的 Github Oauth App 进行授权登录。



### 打包分析

`npm run analyze:browser`





