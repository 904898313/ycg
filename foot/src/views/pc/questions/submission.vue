<template>
  <div>
                    <div class="pcEject-text-box">
                        <div class="pcEject-content-box">
                            <p>标题</p>
                            <input type="text" maxlength="30" placeholder="请输入标题(30个字内)" autofocus>
                        </div>
                        <div class="pcEject-content-box">
                            <p>内容</p>
                            <textarea   cols="2" @input="descInput" v-model="desc" placeholder="对问题补充说明，可以更快获得解答哦"  rows="6" maxlength="200"  class="pcEject-content-text"></textarea>

                            <span class="numberV">{{txtVal}}/200</span>
                        </div>
                        <div class="pcEject-content-box">
                            <p>栏目选择</p>
                            <div class="fenclass">
                                <div class="fenclass-box" v-for="(item) in fenclasslist" :key="item.text" @click="fenclassfun(item.text)"  :class="[fenclasstext!=item.text?'fenclass-box':'selection1']">{{item.text}}</div>
                            </div>
                        </div>
                        <div class="bigSub">
                            <div class="Sub" >提交</div>
                        </div>

                    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          fenclasslist:[
              {text:"足球小白"},
              {text:"赛事交流"},
              {text:"欧亚揭秘"},
              {text:"大小博弈"},
              {text:"滚球妙招"},
              {text:"球队球员"},
              {text:"其他问答"},
          ],
          fenclasstext:"足球小白",
          txtVal: 0,
          desc:"",
      };
    },
    created() {

    },
    methods: {
      fenclassfun(k){
            this.fenclasstext = k;
        },
      descInput(){
            this.txtVal = this.desc.length;
        },
    }
  };
</script>

<style src="@/assets/css/pc/questions/submission.scss" lang="scss" scoped></style>
