<template>
  <div>
    <div style="width: 310px; height: 30px;margin: 0 10px">
      <div style="float: left;height:100%;line-height:30px;color: white;font-size: 16px;font-weight: bold">
        {{info.name}}
      </div>

      <router-link :to="{path: '/articleList', query: {articleType:info.id}}">
        <div style="float: right;height:100%;line-height:30px;color: white;font-size: 12px;font-weight: bold">
          查看更多>>
        </div>
      </router-link>
    </div>
    <div style="width: 310px; height: 250px;margin: 0 10px;background:#ffffff">

      <router-link v-for="item in info.articles" :key="item.id" :to="{path:'/articleDetail', query: {article_id:item.id}}">
        <div style="height:30px;line-height:30px;border-bottom:1px dashed #000000;margin: 4px 4px">
          <div class="hoverALL" :title=item.title style="float: left;width: 220px">
            <div class="circle"></div>
            {{item.title}}
          </div>
          <!-- <div style="float: right">[{{item.updated}}]</div> -->
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
    export default {
        name: "articleClass",
        props: {
            info: {
                type: Object,
                required: true
            },
        },
        watch:{
          articleTypeDetail(){
          },
        },
        data() {
            return {};
        }
    }
</script>

<style scoped>

  .circle {
    width: 5px;
    height: 5px;
    background-color: red;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }

  .hoverALL {
    overflow: hidden; /*自动隐藏文字*/
    text-overflow: ellipsis; /*文字隐藏后添加省略号*/
    white-space: nowrap; /*强制不换行*/
    width: 10em; /*不允许出现半汉字截断*/
    color: black;
  }
</style>
