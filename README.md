# 飞行史上的今天 (Aviation History Today)

这是一个展示航空历史上重大事件（如空难、首飞、航空公司成立等）的静态网站。

## 功能特点
- **每日更新**：自动显示当天的历史事件（基于 Wikipedia API）。
- **实时资讯**：集成了 Google News 航空板块，实时获取最新行业动态。
- **动态背景**：根据用户当地时间（早晨/白天/黄昏/夜晚）自动切换天空背景。
- **多语言支持**：内容主要基于 Wikipedia（中英文），并提供自动翻译功能。
- **响应式设计**：适配桌面和移动设备。

## 在手机浏览器上预览 (Preview on Mobile)

如果您不想安装 App，只是想在手机浏览器中查看效果，可以使用内置的静态服务器。

1.  **启动服务**：
    在电脑终端运行：
    ```bash
    npm run serve
    ```

2.  **手机访问**：
    终端会显示类似 `👉 http://192.168.1.5:3000` 的地址。
    确保手机和电脑连接同一个 WiFi，然后在手机浏览器输入该地址即可访问。

## 构建移动应用 (Build Mobile App)

本项目使用 Capacitor 将网页打包成原生 Android 和 iOS 应用。

### 前置要求

- Node.js (已安装)
- Android Studio (用于构建 Android 应用)
- Xcode (仅限 macOS，用于构建 iOS 应用)

### 快速开始

1.  **安装依赖**：
    ```bash
    npm install
    ```

2.  **同步项目**：
    每次修改 `www` 目录下的代码后，都需要运行此命令将改动同步到原生项目：
    ```bash
    npx cap sync
    ```

### Android 构建指南

1.  **直接安装到手机 (推荐)**：
    连接手机并开启 USB 调试模式，然后运行：
    ```bash
    npm run android
    ```
    Android Studio 启动后，点击顶部的绿色 **Play (运行)** 按钮，应用会自动安装到手机并启动。

2.  **生成 APK 安装包文件**：
    如果您需要生成 `.apk` 文件发送给其他人安装：
    - 在 Android Studio 中，点击菜单栏 **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**。
    - 等待右下角提示 "APK(s) generated successfully"。
    - 点击提示中的 **locate** 链接，或者在文件管理器中打开：
      `android/app/build/outputs/apk/debug/app-debug.apk`
    - 这个文件就是安卓安装包，可以直接发送到手机安装。

### iOS 构建指南 (需要 macOS)

1.  **打开 iOS 项目**：
    ```bash
    npx cap open ios
    ```
    这会自动启动 Xcode。

2.  **构建应用**：
    - 在 Xcode 中选择连接的真机或模拟器。
    - 点击左上角的 **Play** 按钮 (Run)。
    - 若要发布，请使用 **Product** > **Archive** 进行归档。

## 构建桌面应用 (Build Desktop App)

本项目使用 Electron 将网页打包成 Windows、macOS 和 Linux 的本地桌面应用。

### 快速开始

1.  **启动开发模式**：
    在本地直接运行桌面应用进行调试：
    ```bash
    npm start
    ```

2.  **构建安装包**：
    生成可分发的安装包（如 Windows 的 `.exe`，macOS 的 `.dmg`）：
    ```bash
    npm run dist
    ```
    构建完成后，安装包位于 `dist` 目录下。

## 部署到 GitHub Pages (Deploy to GitHub Pages)

本项目已配置自动化部署脚本，您可以一键将网站发布到 GitHub Pages。

### 前置准备

1.  **拥有 GitHub 账号**：如果没有，请先注册 [GitHub](https://github.com/)。
2.  **安装 Git**：确保电脑上安装了 Git 工具。

### 部署步骤

1.  **初始化 Git 仓库 (如果尚未初始化)**：
    在项目根目录打开终端，运行：
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **在 GitHub 上创建仓库**：
    - 登录 GitHub，点击右上角的 **+** 号 -> **New repository**。
    - Repository name 输入 `aviation-history` (或者您喜欢的名字)。
    - 保持 Public (公开)，点击 **Create repository**。

3.  **关联远程仓库**：
    复制 GitHub 页面上提供的命令（类似 `git remote add origin ...`），在终端运行：
    ```bash
    # 请将下面的 URL 替换为您自己的仓库地址
    git remote add origin https://github.com/YOUR_USERNAME/aviation-history.git
    git branch -M main
    git push -u origin main
    ```

4.  **一键部署**：
    在终端运行以下命令，脚本会自动将 `www` 目录部署到 GitHub Pages：
    ```bash
    npm run deploy
    ```
    *如果提示 "Published"，说明部署成功！*

5.  **访问网站**：
    - 进入 GitHub 仓库的 **Settings** > **Pages**。
    - 确保 **Source** 选择的是 `gh-pages` 分支。
    - 您会在页面顶部看到生成的网址（通常是 `https://YOUR_USERNAME.github.io/aviation-history/`）。
    - 点击链接即可访问您的在线网站！

## 其他部署方式

### 使用 Vercel / Netlify (推荐)
这两个平台提供更快的全球访问速度和自动化 CI/CD。
1.  注册并登录 [Vercel](https://vercel.com) 或 [Netlify](https://netlify.com)。
2.  点击 **Add New Project**，导入您的 GitHub 仓库。
3.  **Build Settings** 配置：
    - **Framework Preset**: Other
    - **Output Directory**: `www` (这一步很重要！)
4.  点击 **Deploy** 即可。

### 本地开发 (Local Development)

如果您想在本地修改代码并预览：

1.  **启动本地服务器**：
    ```bash
    npm run serve
    ```
2.  在浏览器访问显示的地址 (例如 `http://localhost:3000`)。

## 数据来源
- **历史事件**：Wikipedia "On This Day" API.
- **新闻资讯**：Google News RSS (通过 AllOrigins 代理)。
- **背景图片**：Unsplash API.

---
© 2026 飞行史上的今天
