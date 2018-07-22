<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<script>
import ElDataTable from "el-data-table";

export default {
  name: "common-data-table",
  components: { ElDataTable },
  data: function() {
    return {
      imageUrl: "",
      dataPath: "data",
      extraParams: { logoUrl: "" },
      formAttrs:{ labelWidth: '80px' },
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
      headerButtons: [
        {
          text: '批量导出',
          disabled: selected => selected.length == 0,
          atClick: selected => {
            let ids = selected.map(s => s.id)
            this.$alert(ids)
          }
        }
      ],
      extraButtons: [
        {
          type: 'primary',
          text: '跳转',
          atClick: selected => {
            this.$alert(`hello ${selected.name}`)
          }
        }
      ],
      searchForm: [
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
    };
  },
  computed: {
    labelWidth() {
      return this.formAttrs && this.formAttrs.labelWidth
        ? this.formAttrs.labelWidth
        : "80px";
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.extraParams = {
        logoUrl: URL.createObjectURL(file.raw)
      };
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    clearExtraParams() {
      this.extraParams = {};
    },
    setExtraParams(row) {
      console.info(row);
      console.info(row.logoUrl);
      this.extraParams = {
        logoUrl: row.logoUrl
      };
      console.info(this.extraParams.logoUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }

      return isJPG && isLt2M;
    }
  }
};
</script>

## ElDataTable

基于 Vue2.x, element-ui 2.x，以及开源组件 [el-form-renderer](https://github.com/leezng/el-form-renderer) 封装了一个业务组件 [el-data-table](https://github.com/FEMessage/el-data-table)，已在[github 开源](https://github.com/FEMessage/el-data-table)，其目标是：

:::tip
makes restful api crud easily
:::

### 安装

```js
yarn add el-data-table
```

### 默认配置

:::demo 通过`url`属性定义表单数据源，`data-path`属性定义对应数据源的字段，`columns`属性配置 table 的列，`form`属性新增和修改的属性 。

```html
<template>
  <el-data-table
      url="https://cnodejs.org/api/v1/topics"
      data-path="data"
      :form-attrs="{ labelWidth: '80px' }"
      :custom-query="{ limit: 5 }"
      :pagination-sizes="[5,10,15]"
      :pagination-size='5'
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
  <el-data-table
    url="https://cnodejs.org/api/v1/topics"
    data-path="data"
    :form-attrs="{ labelWidth: '80px' }"
    :custom-query="{ limit: 5 }"
    :pagination-size='5'
    :pagination-sizes="[5,10,15]"
    :columns="columns"
    :form="form"
    :search-form="searchForm">
  </el-data-table>
</template>
```

:::

### 自定义表格

:::demo 通过 `slot=form`扩展新增编辑表格，通过 `extraParams` 注入额外的表格数据，通过 `new` 事件监听表格新增事件，通过 `edit` 事件监听表格编辑事件。

```html
<template>
  <el-data-table
      url="https://cnodejs.org/api/v1/topics"
      :form-attrs="{ labelWidth: '80px' }"
      :custom-query="{ limit: 5 }"
      :pagination-size='5'
      :pagination-sizes="[5,10,15]"
      :columns="columns"
      :form="form"
      :form-attrs="formAttrs"
      :data-path="dataPath"
      @new="clearExtraParams"
      @edit="setExtraParams"
      >
        <div slot='form' prop="logo" class="el-form-item is-required">
          <div class="el-form-item__label" :style="{width:labelWidth}">品牌logo</div>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-error="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="extraParams.logoUrl" :src="extraParams.logoUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </el-data-table>
</template>
<script>
import ElDataTable from "el-data-table";

export default {
  name: "common-data-table",
  components: { ElDataTable },
  data: function() {
    return {
      imageUrl: "",
      dataPath: "data",
      extraParams: { logoUrl: "" },
      formAttrs: { labelWidth: "80px" },
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
    };
  },
  computed: {
    labelWidth() {
      return this.formAttrs && this.formAttrs.labelWidth
        ? this.formAttrs.labelWidth
        : "80px";
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.extraParams = {
        logoUrl: URL.createObjectURL(file.raw)
      };
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    clearExtraParams() {
      this.extraParams = {};
    },
    setExtraParams(row) {
      console.info(row);
      console.info(row.logoUrl);
      this.extraParams = {
        logoUrl: row.logoUrl
      };
      console.info(this.extraParams.logoUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }

      return isJPG && isLt2M;
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
```

:::

### 自定义操作

:::demo 通过 `headerButtons` 添加头部的自定义按钮，通过 `extraButtons` 添加操作列的自定义按钮。

```html
<template>
  <el-data-table
      url="https://cnodejs.org/api/v1/topics"
      :form-attrs="{ labelWidth: '80px' }"
      :custom-query="{ limit: 5 }"
      :pagination-size='5'
      :header-buttons="headerButtons"
      :extra-buttons="extraButtons"
      :pagination-sizes="[5,10,15]"
      :columns="[{type: 'selection'}].concat(columns)"
      :form="form"
      :form-attrs="formAttrs"
      :data-path="dataPath"
      >
      </el-data-table>
</template>
<script>
import ElDataTable from "el-data-table";

export default {
  name: "custom-operation-data-table",
  components: { ElDataTable },
  data: function() {
    return {
      imageUrl: "",
      dataPath: "data",
      extraParams: { logoUrl: "" },
      formAttrs: { labelWidth: "80px" },
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
      headerButtons: [
        {
          text: "批量导出",
          disabled: selected => selected.length == 0,
          atClick: selected => {
            let ids = selected.map(s => s.id);
            this.$alert(ids);
          }
        }
      ],
      extraButtons: [
        {
          type: "primary",
          text: "跳转",
          atClick: selected => {
            this.$alert(`hello ${selected.name}`);
          }
        }
      ],
      searchForm: [
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
    };
  },
};
</script>
```

:::

### Attributes

:::tip
[属性查看](https://femessage.github.io/el-data-table/)
:::
