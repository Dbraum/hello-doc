<script>
import ElDataTable from 'el-data-table'

export default {
  name:'common-data-table',
  components: {ElDataTable},
  data: function() {
    return {
      form: [
        {
          $type: "input",
          $id: "title",
          label: "标题",
          rules: [
            {
              required: true,
              message: "请输入标题",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入标题" }
        },
        {
          $type: "input",
          $id: "tab",
          label: "类别",
          rules: [
            {
              required: true,
              message: "请输入类别",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入类别" }
        },
        {
          $type: "input",
          $id: "content",
          label: "内容",
          rules: [
            {
              required: true,
              message: "请输入内容",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: {
            placeholder: "请输入内容",
            type: "textarea",
            rows: 3
          }
        }
      ],
      columns: [
        { prop: "id", label: "ID" },
        { prop: "title", label: "标题" },
        { prop: "tab", label: "类别", width: 100 }
      ],
      searchForm:[
        {
          $type: "input",
          $id: "tab",
          label: "类别",
          rules: [
            {
              required: true,
              message: "请输入类别",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入类别" }
        }
      ]
    }
  }
}
</script>

## ElDataTable

基于 Vue2.x, element-ui 2.x，以及开源组件 el-form-renderer 封装了一个业务组件 el-data-table，已在 github 开源，其目标是：makes restful api crud easily

### 默认配置

:::demo 通过`url`属性定义表单数据源，`data-path`属性定义对应数据源的字段，`columns`属性配置 table 的列，`form`属性新增和修改的属性 。

```html
<template>
  <el-data-table
      url="https://cnodejs.org/api/v1/topics"
      data-path="data"
      :form-attrs="{ labelWidth: '80px' }"
      :custom-query="{ limit: 5 }"
      :columns="columns"
      :form="form"
      >
      </el-data-table>
</template>

<script>
import ElDataTable from 'el-data-table'

export default {
  name:'common-data-table',
  components: {ElDataTable},
  data: function() {
    return {
      form: [
        {
          $type: "input",
          $id: "title",
          label: "标题",
          rules: [
            {
              required: true,
              message: "请输入标题",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入标题" }
        },
        {
          $type: "input",
          $id: "tab",
          label: "类别",
          rules: [
            {
              required: true,
              message: "请输入类别",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入类别" }
        },
        {
          $type: "input",
          $id: "content",
          label: "内容",
          rules: [
            {
              required: true,
              message: "请输入内容",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: {
            placeholder: "请输入内容",
            type: "textarea",
            rows: 3
          }
        }
      ],
      columns: [
        { prop: "id", label: "ID" },
        { prop: "title", label: "标题" },
        { prop: "tab", label: "类别", width: 100 }
      ]
    }
  }
}
</script>
```

:::

### 查询表单

:::demo 配置`searchForm`定义查询表单，通过 `slot=search`扩展查询表单，通过 `customQuery` 注入额外的查询参数 。

```html
<template>
  <el-data-table url="https://cnodejs.org/api/v1/topics"
    data-path="data"
    :form-attrs="{ labelWidth: '80px' }"
    :custom-query="{ limit: 5 }"
    :columns="columns"
    :form="form"
    :search-form="searchForm">
  </el-data-table>
</template>

<script>
import ElDataTable from 'el-data-table'

export default {
  name:'common-data-table',
  components: {ElDataTable},
  data: function() {
    return {
      form: [
        {
          $type: "input",
          $id: "title",
          label: "标题",
          rules: [
            {
              required: true,
              message: "请输入标题",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入标题" }
        },
        {
          $type: "input",
          $id: "tab",
          label: "类别",
          rules: [
            {
              required: true,
              message: "请输入类别",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入类别" }
        },
        {
          $type: "input",
          $id: "content",
          label: "内容",
          rules: [
            {
              required: true,
              message: "请输入内容",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: {
            placeholder: "请输入内容",
            type: "textarea",
            rows: 3
          }
        }
      ],
      columns: [
        { prop: "id", label: "ID" },
        { prop: "title", label: "标题" },
        { prop: "tab", label: "类别", width: 100 }
      ],
      searchForm:[
        {
          $type: "input",
          $id: "tab",
          label: "类别",
          rules: [
            {
              required: true,
              message: "请输入类别",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入类别" }
        }
      ]
    }
  }
}
</script>
```

:::
