<template>
  <div class="bigbox">
        <div class="tou">
            <img src="@/assets/images/footballdata/back_i2@2x.png" alt="" @click="go">
            <span>问答详情</span>
            <img src="" alt="">
        </div>
                    <div class="pcEject-text-box">
                        <div class="pcEject-content-box">
                            <p>标题</p>
                            <input type="text" maxlength="30" placeholder="请输入标题(30个字内)" autofocus v-model="title">
                        </div>
                        <div class="pcEject-content-box">
                            <p>内容</p>
                            <textarea cols="2" @input="descInput" v-model="desc" placeholder="对问题补充说明，可以更快获得解答哦"  rows="6" maxlength="200"  class="pcEject-content-text"></textarea>

                            <span class="numberV">{{txtVal}}/200</span>
                        </div>
                        <div class="pcEject-content-box">
                            <p>栏目选择</p>
                            <div class="fenclass">
                                <div 
                                    class="fenclass-box" 
                                    v-for="(item,index) in fenclasslist" 
                                    :key="index" 
                                    @click="fenclassfun(index,item.classifyId)" 
                                    :class="[fenclasstext===index?'selection1':'fenclass-box']"
                                >
                                    {{item.classifyName}}
                                </div>
                            </div>
                        </div>
                        <div class="bigSub">
                            <div class="Sub" @click="question">提交</div>
                        </div>

                    </div>
  </div>
</template>

<script>
import * as questions from "@/api/questions.js"


import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);



  export default {
    data() {
      return {
          fenclasslist:[],
          fenclasstext:'',
          txtVal: 0,
          desc:"",
          id:null,
          title:'',
      };
    },
    created() {
        this.getrecordsList();
    },
    methods: {
        fenclassfun(k,id){
                this.fenclasstext = k;
                this.id = id;
        },
        descInput(){
                this.txtVal = this.desc.length;
        },
        //接口
        //获取栏目列表
        getrecordsList(){
            questions.getrecordsList().then((res)=>{
                this.fenclasslist = res.data.data;
            })
        },

        //提出问题
        question(){
            let datas = {
                classifyId: this.id,//分类栏目id
                details: this.desc,//内容
                title: this.title//标题
            }
            if(datas.classifyId === null){
                Toast('请选择栏目');
            }else if(datas.title.match(/^[ ]*$/)){
                Toast('请输入标题');
            }else if(datas.details.match(/^[ ]*$/)){
                Toast('请输入内容');
            }else{
                questions.question(datas).then((res)=>{
                    Toast('提问成功');
                    // this.$router.go(-1);
                })
            }

        },
        go(){
            this.$router.go(-1)
        }
    }
  };
</script>

<style src="@/assets/css/ph/questions/submission.scss" lang="scss" scoped></style>
