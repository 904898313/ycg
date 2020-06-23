<template>
  <div class="ideaBack">
    <div class="title">
      <i class="line"></i>
      <span>上传图片</span>
      <i class="str">*</i>
      <p>建议格式png/jpg</p>
    </div>
    <div class="uploadimg">
      <el-upload
        :action="apiUrl()"
        list-type="picture-card"
        :on-remove="handleRemove"
        :on-success="upload"
        name="files"
        enctype="multipart/form-data"
        ref="upload"
      >
        <img src="@/assets\images\mine\add-photo_i@2x.png" alt />
      </el-upload>
    </div>
    <div class="Backtext">
      <div class="title">
        <i></i>
        <span>意见或者建议</span>
      </div>
      <div class="textarea">
        <el-input
          type="textarea"
          :rows="8"
          placeholder="请输入您的意见或者建议..."
          v-model="textarea"
          ref="textarea"
        ></el-input>
      </div>
      <div class="btns" @click="submitFun">
        <span>完成</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  name: "ideaBack",
  data() {
    return {
      textarea: "",
      fileList: []
    };
  },
  created() {},
  methods: {
    handleRemove(file, fileList) {},
    // 上传成功钩子
    upload(file, fileList) {
      this.fileList = file.data;
    },
    // 提交
    submitFun() {
      let data = {
        description: this.textarea,
        screenshot: this.fileList[0].minImageUrl
      };
      mine.submitInfo(data).then(res => {
        const data = res.data;
        if (data.code === 1) {
          this.$message({
            message: data.msg,
            type: "success"
          });
          this.textarea = "";
          this.$refs.upload.clearFiles();
        }
        console.log(res);
      });
    },
    // 获取baseurl
    apiUrl() {
      var url = process.env.VUE_APP_BASE_API + "/file/uploadFiles";
      return url;
    }
  }
};
</script>

<style src="../../../../assets/css/pc/mine/ideaBack.scss" lang="scss" scoped></style>

<style lang="scss">
.uploadimg .el-upload--picture-card {
  width: 100px;
  height: 100px;
  line-height: 100px;
}
.uploadimg .el-upload-list--picture-card .el-upload-list__item {
  width: 100px;
  height: 100px;
  line-height: 100px;
}
</style>