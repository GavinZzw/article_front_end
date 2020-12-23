<template>
  <div class="warp">
    <div class="a" v-for="(item,index) in listT" :key="item.id" :class="{'noMargin':(index+1)%3===0}">
      <articleClass :info="item" :key="item.id"></articleClass>
      </div>
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 5px 0 ">
      banner
    </div>
    <div class="a" v-for="(item,index) in listB" :key="item.id" :class="{'noMargin':(index+1)%3===0}">
        <articleClass :info="item" :key="item.id"></articleClass>
      </div>
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 5px 0">
      banner
    </div>
  </div>
</template>

<script>
    import articleClass from "./articleClass";
    import {getHomeData} from "../../api/getData";

    export default {
        components: {
            articleClass
        },
        name: "contentDetial",
        data() {
            return {
              listT:[],
              listB:[],
            }
        },
        methods: {
          
        },
        created(){
          getHomeData().then(res=>{
            let result = res.data.data;
            this.listT = result.splice(0,6);
            this.listB = result
          });
        },
        mounted() {
        }
    }
</script>

<style scoped>
.warp{
  width: 1000px;
  margin: 0 auto;
}
.noMargin{
  margin: 0!important;
}

  .a {
    width: 330px;
    height: 300px;
    display: inline-block;
    background: #087ccc;
    color: black;
    margin-top: 5px;
    margin-right: 5px;
  }
</style>
