<template>
  <div class="watermark-container">
    <el-card class="box-card" ref='card'>
    <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in 20" :key="o" class="text item">
        {{'列表内容 ' + o }}
    </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        defaultOption: {
            id: "watermark-1",
            width: 200,
            height: 200,
            text: "野猪佩奇 2021-09-22",
            font: "24px Times New Roman",
            rotateDegree: (30 * Math.PI) / 180
        },
      }
    },
    mounted(){
        this.createImageUrl(this.defaultOption); 
    },
    methods: {
          // 水印
        createImageUrl(options) {
            let canvas = document.createElement("canvas");
            let text = options.text;
            canvas.width = options.width;
            canvas.height = options.height;
            let ctx = canvas.getContext("2d");
            ctx.font = options.font;
            ctx.fillStyle = "rgba(204,204,204,0.65)";
            ctx.rotate(options.rotateDegree);
            ctx.textAlign = "left";
            ctx.fillText(text, 35, 32); // 实体文字
            const url =  canvas.toDataURL("image/png");
            this.$refs.card.$el.style.background = `url('${url}') repeat top left`;  
        },
    }
  }
</script>

<style lang="scss" scoped>
    .watermark-container{
        padding: 20px;
        .text {
            font-size: 14px;
        }

        .item {
            margin-bottom: 18px;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        .clearfix:after {
            clear: both
        }

        .box-card {
            width: 600px;
        }
    }
</style>
