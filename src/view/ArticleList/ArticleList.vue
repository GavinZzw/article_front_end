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
        <BreadcrumbItem>{{articleTypeDetail.name}}</BreadcrumbItem>
      </Breadcrumb>
    </div>

    <div>
      <router-link v-for="item in articleList" :key="item.id"
                   :to="{path:'/articleDetail', query: {article_id:item.id}}">
        <div style="height: 50px">
          <div style="float: left;width: 200px;font-size:20px;margin: 10px 0">
            {{item.updated}}
          </div>
          <div style="float: right;width: 600px;font-size:16px;margin: 10px 0">
            {{item.title}}
            <!--          <br>-->
            <!--          {{item.content}}-->
          </div>
        </div>
      </router-link>
    </div>

    <!--    <List>-->
    <!--      -->
    <!--      -->
    <!--      <ListItem>-->
    <!--        <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"-->
    <!--                      title="This is title" description="This is description, this is description."/>-->
    <!--      </ListItem>-->

    <!--    </List>-->
    <div style="clear: both">
      <div style="float: right">
        <!--      <Page :total="40" size="small" />-->
        <Page :total="articleList.length" size="small" show-elevator show-sizer/>
        <!--      <Page :total="40" size="small" show-total />-->
      </div>
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
    import {getArticle, getArticleTypeDetail} from "../../api/getData";

    export default {

        components: {
            CommonHeader,

        },
        data() {
            return {
                articleList: [],
                articleTypeDetail: {}
            };
        },
        methods: {
            async getArticleTypeDetailFun(article_type) {
                try {
                    const articleTypeInfo = await getArticleTypeDetail("", article_type);
                    this.articleTypeDetail = articleTypeInfo.data.data[0];
                    const articleInfo = await getArticle(article_type)
                    this.articleList = articleInfo.data.data;
                } catch (error) {
                    console.log(error)
                }

            }
        },
        mounted() {
            this.getArticleTypeDetailFun(this.$route.query.articleType)
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
