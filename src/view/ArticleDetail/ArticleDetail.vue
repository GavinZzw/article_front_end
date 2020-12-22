<template>
  <div class="layout" style="width: 1000px;margin: 0 auto">
    <div>
      <common-header></common-header>
    </div>
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 5px 0 ">
      banner
    </div>
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


    <div class="flex">
      <div>
        <p>免责声明</p>

        <p>文章来源于网络、免费共享、仅供学习和研究，版权归原作者所有！</p>

      </div>

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
