<script>
  export default {
    data() {
      return {
        navsData: [
          {
            name: "Deepexi",
            href: "http://levy.ren/"
          },
          {
            name: "使用指南",
            children: [
              {
                path: "/introduction",
                name: "介绍"
              },
              {
                path: "/markdown",
                name: "Markdown"
              },
              {
                path: "/side-nav",
                name: "导航菜单"
              }
            ]
          },
          {
            name: "组件",
            groups: [
              {
                groupName: "Basic",
                children: [
                  {
                    path: "/button",
                    title: "Button 按钮"
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  };
</script>

## SideNav 左侧导航菜单

展厅左侧的导航栏菜单。

### 示例

:::demo 可配置一级菜单，次级菜单，次级菜单可以按组组织

```html
<template>
  <side-nav :data="navsData" :base="`/component`"></side-nav>
</template>
<script>
  export default {
    data() {
      return {
        navsData: [
          {
            name: "Deepexi",
            href: "http://levy.ren/"
          },
          {
            name: "使用指南",
            children: [
              {
                path: "/introduction",
                name: "介绍"
              },
              {
                path: "/markdown",
                name: "Markdown"
              },
              {
                path: "/side-nav",
                name: "导航菜单"
              }
            ]
          },
          {
            name: "组件",
            groups: [
              {
                groupName: "Basic",
                children: [
                  {
                    path: "/button",
                    title: "Button 按钮"
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  };
</script>
```

:::

### Attributes

| 参数 | 说明     | 类型   | 可选值                | 默认值 |
| ---- | -------- | ------ | --------------------- | ------ |
| base | 路由前缀 | string | medium / small / mini | —      |
| data | 菜单配置 | array  | -                     | —      |

#### 菜单项属性

| 参数     | 说明                               | 类型   | 可选值 | 默认值 |
| -------- | ---------------------------------- | ------ | ------ | ------ |
| name     | 菜单名                             | string | -      | —      |
| href     | 外链地址                           | string | -      | —      |
| path     | 文档地址，匹配 docs 目录对应的文件 | string | -      | —      |
| children | 次级菜单列表                       | array  | -      | —      |
| groups   | 次级菜单组                         | array  | -      | —      |

#### groups 子项配置

| 参数      | 说明         | 类型   | 可选值 | 默认值 |
| --------- | ------------ | ------ | ------ | ------ |
| groupName | 组名         | string | -      | —      |
| children  | 次级菜单列表 | array  | -      | —      |

#### children 子项配置

| 参数 | 说明                               | 类型   | 可选值 | 默认值 |
| ---- | ---------------------------------- | ------ | ------ | ------ |
| name | 菜单名                             | string | -      | —      |
| path | 文档地址，匹配 docs 目录对应的文件 | string | -      | —      |
