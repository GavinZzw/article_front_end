<template>
  <div class="layout" style="width: 1000px;margin: 0 auto">
    <div style="clear: both">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>{{articleInfo.article_type}}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div>
      <div style="font-size: 20px;font-weight: bold;text-align: center">{{articleInfo.title}}</div>
      <div style="font-size: 14px;font-weight: bold;text-align: center">作者：{{articleInfo.author}} 发布于：{{articleInfo.updated}}</div>
      <div>
        <br>
      </div>
      <div v-html="articleInfo.content"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Footer from "../../components/Footer";
    import {getArticleDetail} from "../../api/getData";

    export default {
        components: {
            Footer,

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

</style>
