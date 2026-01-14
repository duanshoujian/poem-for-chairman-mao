# NestJS Backend

这是一个基础的 NestJS 项目示例。

## 项目结构

```
backend/
├── src/
│   ├── config/          # 配置文件
│   │   └── configuration.ts
│   ├── user/            # 用户模块示例
│   │   ├── user.module.ts
│   │   ├── user.controller.ts
│   │   └── user.service.ts
│   ├── app.module.ts    # 根模块
│   └── main.ts          # 应用入口
├── .env.example         # 环境变量示例
├── package.json
└── tsconfig.json
```

## 安装依赖

```bash
npm install
# 或
pnpm install
```

## 运行项目

### 开发模式
```bash
npm run start:dev
```

### 生产模式
```bash
npm run build
npm run start:prod
```

## 环境变量

复制 `.env.example` 为 `.env` 并修改配置：

```bash
cp .env.example .env
```

## API 文档

启动项目后，访问 Swagger 文档：
- http://localhost:3000/api-docs

## API 端点

### 用户接口

- `GET /users` - 获取所有用户
- `GET /users/:id` - 根据ID获取用户
- `POST /users` - 创建用户
- `PUT /users/:id` - 更新用户
- `DELETE /users/:id` - 删除用户

## 示例请求

### 创建用户
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"王五","email":"wangwu@example.com"}'
```

### 获取所有用户
```bash
curl http://localhost:3000/users
```

### 获取单个用户
```bash
curl http://localhost:3000/users/1
```

