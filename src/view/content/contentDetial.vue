<template>
  <div>

    <div class="box">
      <div class="a">
        <articleClass :articleTypeDetail="articleTypeDetail" :articleList="articleList"></articleClass>
      </div>
      <div class="b">B</div>
      <div class="c">C</div>
    </div>
    <div class="box" style="margin-top: 5px">
      <div class="a">A</div>
      <div class="b">B</div>
      <div class="c">C</div>
    </div>
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 5px 0 ">
      banner
    </div>
    <div class="box">
      <div class="a">A</div>
      <div class="b">B</div>
      <div class="c">C</div>
    </div>
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 5px 0">
      banner
    </div>
  </div>
</template>

<script>
    import articleClass from "./articleClass";
    import {getArticle, getArticleTypeDetail} from "../../api/getData";

    export default {
        components: {
            articleClass
        },
        name: "contentDetial",
        data() {
            return {
                articleTypeDetail: {},
                articleList: []
            }
        },
        methods: {
            async getArticleTypeDetailFun1() {
                try {
                    const articleTypeInfo = await getArticleTypeDetail(6);
                    console.log(articleTypeInfo)
                    this.articleTypeDetail = articleTypeInfo.data.data[0];
                    const articleInfo = await getArticle(this.articleTypeDetail['id'])
                    this.articleList = articleInfo.data.data.results;
                    console.log(articleInfo)
                } catch (error) {
                    console.log(error)
                }

            }

        },
        mounted() {
            this.getArticleTypeDetailFun1()
        }
    }
</script>

<style scoped>
  .box {
    width: 1000px;
    height: 300px;
  }

  .box .a, .box .b, .box .c {
    width: 330px;
    height: 300px;
    float: left;
    background: #087ccc
  }

  .box .b {
    margin: 0 5px;
  }

</style>
