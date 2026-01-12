1. 每日“开启”与“闭环”
开启：每天开发前，打开 TODO.md，确认今天要做的 1-2 个核心小任务。
闭环：每天结束前，花 5 分钟更新 docs/dev-log/。记录你今天改了哪个配置，或者解决了哪个奇怪的 Bug。这是防止忘掉进度的最有效手段。

2. 文档同步更新
如果你修改了数据库字段，必须同步更新 docs/db/schema.md。
如果你增加了一个接口，必须先在 NestJS 中用 Swagger 生成文档，或者写在 docs/api/ 里。
3. 强制使用 Git 分支
不要在 main 分支乱写。

开发功能：git checkout -b feature/poem-list
修复 Bug：git checkout -b fix/font-size
这种方式强迫你思考当前正在处理的是哪一个具体模块。

4. 视觉对齐 (Figma to Code)
在 docs/design/ 下放一个 links.md，存好 Figma 的链接。
遵循 “先设计，后代码”。不要在写代码的时候去想这个按钮该多大，这会极大消耗你的认知带宽，导致疲劳。

# 任务清单 (TODO)

## 阶段一：基础设施 (Infrastructure)

- [ ] 初始化 Git 仓库
- [ ] 配置 NestJS 基础框架 (Database, Logger, Swagger)
- [ ] 配置 Vue 3 + Vant + TailwindCSS 基础框架
- [ ] 配置 Capacitor 安卓开发环境

## 阶段二：后端开发 (Backend)

- [ ] 数据库模型设计 (Poem, Author, Category)
- [ ] 编写诗词爬取/导入脚本
- [ ] 实现诗词列表与详情接口
- [ ] 鉴权系统 (如果需要收藏功能)

## 阶段三：设计与前端 (Design & Frontend)

- [ ] Figma 导出 UI 设计稿原型
- [ ] 实现首页与列表页
- [ ] 实现详情页（支持排版切换）
- [ ] 实现搜索与分类筛选

## 阶段四：跨端与部署 (Mobile & Deploy)

- [ ] 适配安卓状态栏与手势
- [ ] 打包 APK 并进行真机测试
- [ ] 部署后端至阿里云 (Docker)
- [ ] 配置 Nginx 与 SSL 证书