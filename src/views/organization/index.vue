<template>
  <div class="organization">
    <!-- <el-button type="primary" size="default" @click="showDialog = true"
      >组织架构</el-button
    > -->
          <el-tree
            ref="tree"
            :data="flattenedData"
            class="tree"
            show-checkbox
            node-key="id"
            @node-click="handleTreeNodeClick"
            :default-expanded-keys="['1']"
            :props="defaultTreeProps"
            :expand-on-click-node="true"
          >
          </el-tree>
    <!-- <el-dialog
      :visible.sync="showDialog"
      :before-close="handlerCloseDialog"
      class="c_modal"
    >
      <div class="dialogBody">
        <div class="orgtree">
          <el-tree
            ref="tree"
            :data="flattenedData"
            class="tree"
            show-checkbox
            node-key="id"
            @node-click="handleTreeNodeClick"
            :default-expanded-keys="['1']"
            :props="defaultTreeProps"
            :expand-on-click-node="true"
          >
          </el-tree>
        </div>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showDialog: false,
      flattenedData: [],
      defaultTreeProps: {
        label: "name",
        children: "children"
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 组织选择器 弹窗关闭
    handlerCloseDialog() {
      this.showDialog = false;
    },
    async init() {
      let res = await axios.get(
        "api/api/search/api/Department/SearchDepartment",
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxODcyNzYyMzIzMCIsImp0aSI6ImEzYzVhZmI2LTBmYTAtNDVmMy1hMDMwLWRjNzU4YzFkMzRlOSIsImlhdCI6IjIxLTktNiDkuIrljYg4OjU1OjI4IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IuadjuS5ieaWhyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjE4NzI3NjIzMjMwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6IjY2IiwibmJmIjoxNjMwOTE4NTI4LCJleHAiOjE2MzE1MjMzMjgsImlzcyI6InRlc3QiLCJhdWQiOiJ0ZXN0In0.Lwjt2Gz6hLoWgelihOfDhDJlzpSU1Xj4hJYZ9XJa_Cw"
          }
        }
      );
      const data = res.data.data;
      if (data) {
        let tdata = data;
        for (let i = 0; i < tdata.length; i++) {
          tdata[i].sort = tdata[i].sort ? parseFloat(tdata[i].sort) : 0;
        }
        tdata.sort(this.compare("sort"));
        let newTree = this.listToTree(tdata);
        this.flattenedData = newTree;
        this.handleTreeNodeClick(this.flattenedData[0]);
      } else {
        this.$message({
          type: "warning",
          message: error
        });
        this.flattenedData = [];
      }
    },
    // 排序
    compare(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      };
    },
    // 处树形数据的方法
    listToTree(list) {
      return list.filter(e => {
        let pid = e.parent_id;
        e.type = "organization";
        let newArr = list.filter(ele => {
          if (ele.id === pid) {
            if (!ele.children) {
              ele.children = [];
            }
            ele.children.push(e);
            return true;
          }
        });
        return newArr.length === 0;
      });
    },
    async handleTreeNodeClick(data, checked, node) {
      console.log(node,checked)
      const { expanded } = node;
      // console.log(expanded);
      if (expanded) return;
      if (data.type === "organization") {
        let res = await axios.get("api/api/search/api/Manage/GetUserlist", {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxODcyNzYyMzIzMCIsImp0aSI6ImEzYzVhZmI2LTBmYTAtNDVmMy1hMDMwLWRjNzU4YzFkMzRlOSIsImlhdCI6IjIxLTktNiDkuIrljYg4OjU1OjI4IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IuadjuS5ieaWhyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjE4NzI3NjIzMjMwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6IjY2IiwibmJmIjoxNjMwOTE4NTI4LCJleHAiOjE2MzE1MjMzMjgsImlzcyI6InRlc3QiLCJhdWQiOiJ0ZXN0In0.Lwjt2Gz6hLoWgelihOfDhDJlzpSU1Xj4hJYZ9XJa_Cw"
          },
          params: {
            PageIndex: 1,
            PageSize: 999,
            department: data.id
          }
        });

        if (res.data) {
          let pdata = res.data.data.data;
          console.log(pdata);
          if (!data.children) {
            this.$set(data, "children", []);
          }
          if (
            !data.isLoadPeople &&
            pdata.length > 0 &&
            data.children.length === 0
          ) {
            data.isLoadPeople = true;
            let pArray = [...data.children];
            for (let i = 0; i < pdata.length; i++) {
              pdata[i].type = "person";
              pdata[i].id = pdata[i].user_id;
              pArray.push(pdata[i]);
            }
            // data.children = pArray;
            this.$refs["tree"].updateKeyChildren(data.id, pArray);
          }
        }
        if (this.$refs.tree && !expanded) {
          this.$refs.tree.store.nodesMap[data.id].expanded = true;
        }
      }
    },
  }
};
</script>

<style>
  .organization{
    padding: 20px;
  }
</style>
