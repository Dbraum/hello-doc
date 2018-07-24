## 使用 storybook 为组件编写用例

这篇文件基于 [vue-sfc-cli](https://github.com/FEMessage/vue-sfc-cli) 这个组件打包脚手架。脚手架整合了 [storybook](https://storybook.js.org/)，用于为组件添加用例。

### 快速上手

在 src 目录为组件添加同名的以 stories.js 结尾的文件

例如：

```html
├── src
│   ├── range-input.vue
│   ├── range-input.stories.js
```

在 stories.js 文件上编写用例，编写用例的格式如下：
:::tip
参考链接: [write your stories](https://storybook.js.org/basics/guide-vue/#write-your-stories)
:::

```html
storiesOf('一级目录', module)
  .add('二级目录', () => ({
    components: {
      Component
    },
    template: `
      ...
    `,
    data: function() {
      return {
        ...
      }
    }
  }))
```

需要关注俩个 api：`storiesOf` 和 `add`

- storiesOf: 会以一级目录作为标题，一个文件可以多个
- add: 会关联在 storiesOf 下，作为二级标题，可以添加多个，add 的第二个参数是函数，返回 vue demo

启动服务查看效果：

```html
yarn storybook //访问：http://localhost:9001/
```

### 扩展

如果需要添加全局配置以及依赖，例如添加 axios，或者 ElementUI，则需要关注`.storybook`文件夹

```html
├── .storybook
│   ├── config.js           //依赖配置在这个文件添加
│   ├── preview-head.html   //这个文件用于添加第三方样式或者头部标签
│   └── webpack.config.js   //webpack配置扩展在这个文件增加
```
