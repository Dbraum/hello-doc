<style>
</style>

## 介绍

组件展厅用于收集组件的使用文档，提供 markdown 的语法编写文档。

### Markdown 语法

文档支持所有的 markdown 语法，同时拓展三种新的语法：

- tip：用于高亮核心概念
- warning：用于高亮注意事项
- demo：用于 demo 例如的渲染

:::tip
[拓展语法示例请查看](#/component/markdown)
:::

### 新建文档

建立组件文档包括的步骤：

- 安装组件（通过 yarn 安装）
- 在`/src/docs`建立 md 文件并编写文档
- 在`/src/router/nav.config.js` 文件配置路由以及菜单名，配置后在左边菜单栏会显示入口

:::tip
[导航配置请查看](#/component/side-nav)
:::

### 约定

#### 文档存放

文档统一存放在 `/src/docs` 目录。

#### 组件安装与引用

在展厅展示的组件需要在项目安装，同时组件的使用采用局部注册的方式，仅引入需要的组件。

:::warning
组件的安装通过 yarn 安装。
:::

#### 命名

markdown 文件命名使用 `kebab-case` 的风格。例如

```html
- button.md
- side-nav.md
```
