// import axios from '../request'
import axios from 'axios'

const service = axios.create({
  baseURL: "/api",
  timeout: 5000
})

//文章类别接口
export const getArticleType = () => service.get("/articleType")

//文章分类详情
export const getArticleTypeDetail = (priority) => service.get("/articleType?", {
  params: {
    priority: priority
  }
})

//文章分类详情
export const getArticle = (article_type) => service.get("/article?", {
  params: {
    article_type: article_type
  }
})
