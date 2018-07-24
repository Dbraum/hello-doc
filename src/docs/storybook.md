## Storybook

Storybook 提供了一种列出故事并将其可视化的方法，支持 vue 的语法，可以方便的展示组件。

<img src="https://raw.githubusercontent.com/storybooks/storybook/master/app/react/docs/demo.gif" alt="drawing" width="800px"/>

### 为组件编写 Story

Story 是 Storybook 的概念，每个 demo 即一个 Story。Storybook 提供了指定的 api，基于 api 即可编写 Story。

下面教程基于 [vue-sfc-cli](https://github.com/FEMessage/vue-sfc-cli) 这个组件打包脚手架，脚手架整合了 [storybook](https://storybook.js.org/) 配置，只需要直接编写 story 即可。

### 快速上手

在 stories 目录为组件添加同名的以 stories.js 结尾的文件

例如：

```html
├── src
│   ├── range-input.vue
├── stories
│   ├── range-input.stories.js
```

在 {component}.stories.js 文件上编写 Story，demo 如下：
:::tip
参考链接: [write your stories](https://storybook.js.org/basics/guide-vue/#write-your-stories)
:::

```html
import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import MyButton from './Button.vue';

storiesOf('MyButton', module)
  .add('story as a template', () => '<my-button :rounded="true">story as a function template</my-button>')
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }));
```

需要关注俩个 api：`storiesOf` 和 `add`

- storiesOf: 会作为一级目录，一个文件可以出现多个
- add: 会关联在 storiesOf 下，作为二级标题，可以添加多个，add 的第二个参数是函数，返回 vue demo

启动服务查看效果：

```html
yarn storybook //访问：http://localhost:9001/
```

### 扩展

如果需要添加全局配置以及依赖，例如添加 axios，或者 ElementUI，则需要关注`.storybook`文件夹

```html
├── .storybook
│   ├── config.js           //全局依赖配置在这个文件添加
│   ├── addons.js           //插件注册文件
│   ├── preview-head.html   //这个文件用于添加第三方样式或者头部标签
│   └── webpack.config.js   //webpack配置扩展在这个文件增加
```

#### config.js

config.js 文件告诉 Storybook 需要初始化什么以及怎么加载故事。

在这里可以注入全局组件，设置全局依赖。
脚手架默认配置如下：

```html
import {configure} from '@storybook/vue'
import {setOptions} from '@storybook/addon-options'

import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

setOptions({
  showAddonPanel: false
})

const req = require.context('../stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
```

#### addons（插件）

Storybook addons 提供通用服务，为故事服务。

脚手架使用的的 addon 有：

- [storybook-addon-vue-info](https://github.com/pocka/storybook-addon-vue-info)
- [storybook-options-addon](https://github.com/storybooks/storybook/tree/release/3.4/addons/options)
