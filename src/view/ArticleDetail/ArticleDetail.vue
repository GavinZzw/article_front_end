<template>
  <div class="layout" style="width: 1000px;margin: 0 auto">
    <div>
      <div style="font-size: 20px;font-weight: bold;text-align: center">{{articleInfo.title}}</div>
      <div style="font-size: 14px;font-weight: bold;text-align: center">作者：{{articleInfo.author}} 发布于：{{articleInfo.updated}}</div>
      <div>
        <br>
      </div>
      <div v-html="articleInfo.content"></div>
    </div>
  </div>
</template>

<script>
    import CommonHeader from "../../components/CommonHeader";
    import {getArticleDetail} from "../../api/getData";

    export default {
        components: {
            CommonHeader,

        },
        name: "ArticleDetail",
        data() {
            return {
                articleInfo: {}
            };
        },
        methods: {
            async getArticleDetailFun(article_id) {
                try {
                    const articleInfo = await getArticleDetail(article_id);
                    this.articleInfo = articleInfo.data.data;
                    console.log(this.articleInfo)
                } catch (error) {
                    console.log(error)
                }

            }
        },
        mounted() {
            this.getArticleDetailFun(this.$route.query.article_id)
        }
    }
</script>

<style scoped>
  .flex {
    /*flex 布局*/
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;

    text-align: center;
    width: 100%;
    height: 100px;
    background: darkgray;
    margin: 0 auto;
    color: #fff;
  }
</style>
