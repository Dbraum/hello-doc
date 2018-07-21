<template>
  <el-data-table url="https://cnodejs.org/api/v1/topics" data-path="data" :form-attrs="{ labelWidth: '80px' }" :custom-query="{ limit: 5 }" :columns="columns" :form="form" :search-form="form">
  </el-data-table>
</template>
<script>
import ElDataTable from "el-data-table";

export default {
  name: "search-data-table",
  components: { ElDataTable },
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
          label: "栏目",
          rules: [
            {
              required: true,
              message: "请输入栏目",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入栏目" }
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
        { prop: "tab", label: "栏目", width: 100 }
      ],
      searchForm: [
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
          label: "栏目",
          rules: [
            {
              required: true,
              message: "请输入栏目",
              trigger: "blur",
              transform: v => v && v.trim()
            }
          ],
          $el: { placeholder: "请输入栏目" }
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
      ]
    };
  }
};
</script>