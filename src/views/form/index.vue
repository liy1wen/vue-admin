<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="default" @click="showModal">弹框</el-button>
    <div class="modal" ref='modal' v-if="show" @click="show = false">
      <div class="content" v-click-outside ref="content">
        <el-button type="primary" size="default">按钮</el-button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  directives: {  
    autoFocus:{
      inserted(el,bindings,vnode) {
        el.children[0].focus()
      } 
    },
    clickOutside:{
      bind(el,bindings,vnode) {
        // console.log(vnode.context.$refs,vnode.context.$refs.modal);
        vnode.context.$refs.content.addEventListener('click',(e)=>{
          e.stopPropagation();       
          if(el.contains(e.target)) {
            // console.log('属于');
            vnode.context.show = true
          }else{
            // console.log('不属于');
            vnode.context.show = false
          }
        })
      }
    }
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      inputText: '',
      show: false
    } 
  },
  mounted() {

  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    showModal() {
      this.show = true;
    }
  }
}
</script> 

<style scoped lang="scss">
.line{
  text-align: center;
}
.modal{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 600px;
    height: 400px;
    background: #fff;
    text-align: center;
  }
}
</style>

