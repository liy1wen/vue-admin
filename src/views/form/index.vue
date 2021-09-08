<template>
  <div class="mavonEditor">
    <mavon-editor
      :toolbars="markdownOption"
      v-model="handbook"
      :ishljs="true"
      ref="md"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
    />
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      handbook: ""
    };
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      const formdata = new FormData();
      formdata.append("avatar", $file);
      formdata.append("uid", 1024);
      // this.img_file[pos] = $file;
      axios({
        url:
          "http://employee-idcard.yz-intelligence.com:8082/v1/employee/uploadAvatar",
        method: "post",
        data: formdata,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(res => {
        console.log(res, "11111111111111111");
        // let _res = res.data;
        // // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // this.$refs.md.$img2Url(pos, _res.url);
      });
    },
    $imgDel(pos) {
      // delete this.img_file[pos];
    }
  }
};
</script>

<style scoped>
.mavonEditor {
  padding: 20px;
  width: 100%;
  height: 100%;
}
</style>
