import axios from 'axios'

const service = axios.create({
  baseURL: "/api",
  timeout: 5000
});

//文章类别列表接口
export const getArticleType = () => service.get("/articleType");


export const getHomeData = () => service.get("/articleType/show?ids=4,7,8,9,10,13,14,15,16");

//获取指定priority/id的文章分类详情
export const getArticleTypeDetail = (priority, id, pageInfo) => service.get("/articleType?", {
  params: {
    priority: priority,
    id: id,
    ...pageInfo,
  }
});


//指定类别的文章信息
export const getArticle = (article_type) => service.get("/article?", {
  params: {
    article_type: article_type
  }
});

//指定指定id文章
export const getArticleDetail = (id) => service.get("/article/" + id)
