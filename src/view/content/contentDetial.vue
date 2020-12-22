<template>
  <div>

    <div class="box">
      <div class="a">
        <articleClass :articleTypeDetail="articleTypeDetail1" :articleList="articleList1"></articleClass>
      </div>
      <div class="b">
        <articleClass :articleTypeDetail="articleTypeDetail2" :articleList="articleList2"></articleClass>
      </div>
      <div class="c">
        <articleClass :articleTypeDetail="articleTypeDetail3" :articleList="articleList3"></articleClass>
      </div>
    </div>
    <div class="box" style="margin-top: 5px">
      <div class="a">
        <articleClass :articleTypeDetail="articleTypeDetail4" :articleList="articleList4"></articleClass>
      </div>
      <div class="b">
        <articleClass :articleTypeDetail="articleTypeDetail5" :articleList="articleList5"></articleClass>
      </div>
      <div class="c">
        <articleClass :articleTypeDetail="articleTypeDetail6" :articleList="articleList6"></articleClass>
      </div>
    </div>
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 5px 0 ">
      banner
    </div>
    <div class="box">
      <div class="a">
        <articleClass :articleTypeDetail="articleTypeDetail7" :articleList="articleList7"></articleClass>
      </div>
      <div class="b">
        <articleClass :articleTypeDetail="articleTypeDetail8" :articleList="articleList8"></articleClass>
      </div>
      <div class="c">
        <articleClass :articleTypeDetail="articleTypeDetail9" :articleList="articleList9"></articleClass>
      </div>
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
                articleTypeDetail1: {},
                articleTypeDetail2: {},
                articleTypeDetail3: {},
                articleTypeDetail4: {},
                articleTypeDetail5: {},
                articleTypeDetail6: {},
                articleTypeDetail7: {},
                articleTypeDetail8: {},
                articleTypeDetail9: {},
                articleList1: [],
                articleList2: [],
                articleList3: [],
                articleList4: [],
                articleList5: [],
                articleList6: [],
                articleList7: [],
                articleList8: [],
                articleList9: [],
            }
        },
        methods: {
            async getArticleTypeDetailFun1() {
                try {
                    const articleTypeInfo1 = await getArticleTypeDetail(6);
                    this.articleTypeDetail1 = articleTypeInfo1.data.data[0];
                    const articleInfo1 = await getArticle(this.articleTypeDetail1['id']);
                    this.articleList1 = articleInfo1.data.data;


                } catch (error) {
                    console.log(error)
                }

            },
            async getArticleTypeDetailFun2() {
                try {

                    const articleTypeInfo2 = await getArticleTypeDetail(1);
                    this.articleTypeDetail2 = articleTypeInfo2.data.data[0];
                    const articleInfo2 = await getArticle(this.articleTypeDetail2['id']);
                    this.articleList2 = articleInfo2.data.data;


                } catch (error) {
                    console.log(error)
                }

            },
            async getArticleTypeDetailFun3() {
                try {

                    const articleTypeInfo3 = await getArticleTypeDetail(6);
                    this.articleTypeDetail3 = articleTypeInfo3.data.data[0];
                    const articleInfo3 = await getArticle(this.articleTypeDetail3['id']);
                    this.articleList3 = articleInfo3.data.data;


                } catch (error) {
                    console.log(error)
                }

            },
            async getArticleTypeDetailFun4() {
                try {


                    const articleTypeInfo4 = await getArticleTypeDetail(6);
                    this.articleTypeDetail4 = articleTypeInfo4.data.data[0];
                    const articleInfo4 = await getArticle(this.articleTypeDetail4['id']);
                    this.articleList4 = articleInfo4.data.data;


                } catch (error) {
                    console.log(error)
                }

            },
            async getArticleTypeDetailFun5() {
                try {


                    const articleTypeInfo5 = await getArticleTypeDetail(6);
                    this.articleTypeDetail5 = articleTypeInfo5.data.data[0];
                    const articleInfo5 = await getArticle(this.articleTypeDetail5['id']);
                    this.articleList5 = articleInfo5.data.data;


                } catch (error) {
                    console.log(error)
                }

            },
            async getArticleTypeDetailFun6() {
                try {

                    const articleTypeInfo6 = await getArticleTypeDetail(6);
                    this.articleTypeDetail6 = articleTypeInfo6.data.data[0];
                    const articleInfo6 = await getArticle(this.articleTypeDetail6['id']);
                    this.articleList6 = articleInfo6.data.data;


                } catch (error) {
                    console.log(error)
                }

            },
            async getArticleTypeDetailFun7() {
                try {

                    const articleTypeInfo7 = await getArticleTypeDetail(6);
                    this.articleTypeDetail7 = articleTypeInfo7.data.data[0];
                    const articleInfo7 = await getArticle(this.articleTypeDetail7['id']);
                    this.articleList7 = articleInfo7.data.data;


                } catch (error) {
                    console.log(error)
                }

            },
            async getArticleTypeDetailFun8() {
                try {


                    const articleTypeInfo8 = await getArticleTypeDetail(6);
                    this.articleTypeDetail8 = articleTypeInfo8.data.data[0];
                    const articleInfo8 = await getArticle(this.articleTypeDetail8['id']);
                    this.articleList8 = articleInfo8.data.data;


                } catch (error) {
                    console.log(error)
                }

            },
            async getArticleTypeDetailFun9() {
                try {


                    const articleTypeInfo9 = await getArticleTypeDetail(6);
                    this.articleTypeDetail9 = articleTypeInfo9.data.data[0];
                    const articleInfo9 = await getArticle(this.articleTypeDetail9['id']);
                    this.articleList9 = articleInfo9.data.data;


                } catch (error) {
                    console.log(error)
                }

            }

        },
        mounted() {
            this.getArticleTypeDetailFun1();
            this.getArticleTypeDetailFun2();
            this.getArticleTypeDetailFun3();
            this.getArticleTypeDetailFun4();
            this.getArticleTypeDetailFun5();
            this.getArticleTypeDetailFun6();
            this.getArticleTypeDetailFun7();
            this.getArticleTypeDetailFun8();
            this.getArticleTypeDetailFun9()

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
    background: #087ccc;
    color: black;
  }

  .box .b {
    margin: 0 5px;
  }

</style>
