<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">role: {{ roles }}</div>
    <transition name="fade">
      <div v-if="show" class="area" />
    </transition>
    <el-button type="primary" size="default" @click="changeTitle"
      >切换显示</el-button
    >
    <div style="width:600px;height:600px;">
      <vue-cropper
        ref="cropper"
        :img="option.img"
        :output-size="option.outputSize"
        :output-type="option.outputType"
        :info="true"
        :full="option.full"
        :can-move="option.canMove"
        :can-move-box="option.canMoveBox"
        :fixed-box="option.fixedBox"
        :original="option.original"
        :auto-crop="option.autoCrop"
        :auto-crop-width="option.autoCropWidth"
        :auto-crop-height="option.autoCropHeight"
        :center-box="option.centerBox"
        :high="option.high"
        :info-true="option.infoTrue"
        :enlarge="option.enlarge"
        @realTime="realTime"
        @imgLoad="imgLoad"
        @cropMoving="cropMoving"
      />
    </div>
    <el-tree
      :props="props"
      :load="loadNode"
      lazy
      show-checkbox>
    </el-tree>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { VueCropper } from "vue-cropper";
export default {
  name: "Dashboard",
  components: {
    VueCropper
  },
  computed: {
    ...mapGetters(["name", "roles"])
  },
  data() {
    return {
      show: true,
      option: {
        img:
          "http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png", // 裁剪图片的地址
        outputSize: 1, // 裁剪生成图片的质量
        full: false, // 输出原图比例截图 props名full
        autoCrop: true, //    是否默认生成截图框
        outputType: "jpeg || png || webp", // 裁剪生成图片的格式
        canMove: true, // 上传图片是否可以移动
        canMoveBox: true, // 截图框能否拖动
        fixedBox: true, // 固定截图框大小 不允许改变
        original: false, // 上传图片按照原始比例渲染
        autoCropWidth: "100", // 默认生成截图框宽度
        autoCropHeight: "100", // 默认生成截图框高度
        centerBox: true, // 截图框是否被限制在图片里面
        high: true, // 是否按照设备的dpr 输出等比例图片
        infoTrue: false, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
        enlarge: 1, // 图片根据截图框输出比例倍数
        maxImgSize: 2000, // 限制图片最大宽度和高度
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
      }
    };
  },
  methods: {
    changeTitle() {
      this.show = !this.show;
    },
    realTime() {},
    imgLoad() {},
    cropMoving() {},
    loadNode(node, resolve) {
      console.log(node,'-----------------------');
      if (node.level === 0) {
        return resolve([{ name: 'region' }]);
      }
      if (node.level > 1) return resolve([]);

      setTimeout(() => {
        const data = [{
          name: 'leaf',
          leaf: true
        }, {
          name: 'zone'
        }];

        resolve(data);
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.area {
  background: pink;
  width: 500px;
  height: 300px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
