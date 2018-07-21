<style>
</style>

## Markdown

:::tip
该页面假设你已经了解了[Markdown 使用](http://younghz.github.io/markdown/)。如果你还对 Markdown 不太了解，推荐你先阅读它。
:::

### Tip

#### 使用：

```html
:::tip
tip 包裹的内容会高亮显示，类似于引用。
:::
```

#### 效果：

:::tip
tip 包裹的内容会高亮显示，类似于引用。
:::

### Warning

#### 使用：

```html
:::warning
注意事项可以用warning使用包裹，会红色提醒。
:::
```

#### 效果：

:::warning
注意事项可以用 warning 使用包裹，会红色提醒。
:::

### Demo

#### 使用：

````html
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
</el-row>
```

:::
````

#### 效果：

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
</el-row>
```

:::

:::warning
demo 语法中 demo 的说明的内容不能换行，直接在紧跟在 demo 后面
:::
