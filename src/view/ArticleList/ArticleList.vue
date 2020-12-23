<template>
  <div class="layout" style="width: 1000px;margin: 0 auto">
    <div class="list">
      <router-link v-for="item in articleList" :key="item.id"
                    :to="{path:'/articleDetail', query: {article_id:item.id}}">
          <div style="margin-bottom:10px;padding:5px 0;border-bottom:1px solid #ccc;">
            <div style="width: 200px;font-size:15px;margin: 10px 0;display:inline-block">
              <p>{{item.updated}}</p>
              <p class="nomoreFont">{{item.title}}</p>
            </div>
            <div class="nomoreFont" style="width: 600px;max-height:45px;font-size:16px;margin: 10px 0;display:inline-block">
              <!-- {{item.content}} -->
              这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
            </div>
          </div>
        </router-link>
        <Page :total="articleList.length" size="small"
          @onChange="pageChange"
          :current="pageInfo.page"
          @onPageSizeChange="onPageSizeChange"
         show-elevator show-sizer show-total/>
    </div>
    <div class="empty" style="font-size:20px;" v-if="articleList.length === 0">
      暂无文章
    </div>
  </div>
</template>

<script>
    import CommonHeader from "../../components/CommonHeader";
    import {getArticle, getArticleTypeDetail} from "../../api/getData";

    export default {

        components: {
            CommonHeader,

        },
        data() {
            return {
                articleList: [],
                articleTypeDetail: {},
                pageInfo:{
                  page:1,
                  pageSize:10,
                },
            };
        },
        methods: {
            onPageSizeChange(size){
              this.pageInfo.pageSize = size;
              this.pageInfo.page = 1;
              this.getArticleTypeDetailFun();
            },
            pageChange(page){
              this.pageInfo.page = page;
              this.getArticleTypeDetailFun();
            },
            async getArticleTypeDetailFun() {
              const {articleType} = this.$route.query;
                try {
                    const articleTypeInfo = await getArticleTypeDetail("", articleType,this.pageInfo);
                    this.articleTypeDetail = articleTypeInfo.data.data[0];
                    const articleInfo = await getArticle(articleType)
                    this.articleList = articleInfo.data.data.results;
                } catch (error) {
                    console.log(error)
                }

            }
        },
        mounted() {
            this.getArticleTypeDetailFun()
        },
        watch:{
          $route:{
            deep:true,
            handler(n){
              this.getArticleTypeDetailFun()
            }
          },
        },
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
  .nomoreFont{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
