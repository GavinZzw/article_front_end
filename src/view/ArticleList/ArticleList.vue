<template>
  <div class="layout" style="width: 1000px;margin: 0 auto">
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 5px 0">
      banner4
    </div>
    <div style="clear: both">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>{{articleTypeDetail.name}}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="list">
      <router-link v-for="item in articleList" :key="item.id"
                   :to="{path:'/articleDetail', query: {article_id:item.id}}">
        <div style="margin-bottom:10px;padding:5px 0;border-bottom:1px solid #ccc;height: 71px;">

          <div style="height: 60px;width: 60px;background: chocolate;color: white;font-weight: bold;text-align: center;float: left">
            <div style="line-height: 40px;height: 40px;float: bottom;font-size: 20px">
              <p>{{item.updated.substring(8,10)}}</p>
            </div>
            <div style="line-height: 20px;height: 20px;float: bottom">
              <p>{{item.updated.substring(0,7)}}</p>
            </div>

          </div>
          <div style="height: 60px;width: 800px;float: right;">
            <div class="nomoreFont" style="line-height: 40px;height: 40px;float: bottom;font-size: 16px;color: black">
              <p>{{item.title}}</p>
            </div>
            <div style="line-height: 20px;height: 20px;float: bottom;color: #cccccc;font-size: 14px;overflow: hidden">
              <p>{{item.summary}}</p>
            </div>
          </div>



          <!--          <div style="width: 200px;font-size:15px;margin: 10px 0;display:inline-block">-->
          <!--            <p>{{item.updated}}</p>-->
          <!--            <p class="nomoreFont">{{item.title}}</p>-->
          <!--          </div>-->
          <!--          <div class="nomoreFont"-->
          <!--               style="width: 600px;max-height:45px;font-size:16px;margin: 10px 0;display:inline-block">-->
          <!--            &lt;!&ndash; {{item.content}} &ndash;&gt;-->
          <!--            这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容-->
          <!--          </div>-->
        </div>
      </router-link>
      <div class="empty" style="font-size:20px;" v-if="articleList.length === 0">
        暂无文章
      </div>

      <div style="float: right">
        <Page :total="articleList.length" size="small"
              @onChange="pageChange"
              :current="pageInfo.page"
              @onPageSizeChange="onPageSizeChange"
              show-elevator show-sizer show-total/>
      </div>

    </div>

    <Footer></Footer>

  </div>
</template>

<script>
    import Footer from "../../components/Footer";
    import {getArticle, getArticleTypeDetail} from "../../api/getData";

    export default {

        components: {
            Footer,

        },
        data() {
            return {
                articleList: [],
                articleTypeDetail: {},
                pageInfo: {
                    page: 1,
                    pageSize: 10,
                },
            };
        },
        methods: {
            onPageSizeChange(size) {
                this.pageInfo.pageSize = size;
                this.pageInfo.page = 1;
                this.getArticleTypeDetailFun();
            },
            pageChange(page) {
                this.pageInfo.page = page;
                this.getArticleTypeDetailFun();
            },
            async getArticleTypeDetailFun() {
                const {articleType} = this.$route.query;
                try {
                    const articleTypeInfo = await getArticleTypeDetail("", articleType, this.pageInfo);
                    this.articleTypeDetail = articleTypeInfo.data.data[0];
                    const articleInfo = await getArticle(articleType);
                    this.articleList = articleInfo.data.data.results;
                } catch (error) {
                    console.log(error)
                }

            }
        },
        mounted() {
            this.getArticleTypeDetailFun()
        },
        watch: {
            $route: {
                deep: true,
                handler(n) {
                    this.getArticleTypeDetailFun()
                }
            },
        },
    }
</script>

<style scoped>
  .nomoreFont {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
