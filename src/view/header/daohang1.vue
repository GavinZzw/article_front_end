<template>
  <div style="height: 29px; line-height:29px">
    <div style="float:left;font-size: 14px;font-weight: bold">你好，欢迎来到论文网</div>
    <div style="float:right;width:700px;height:29px">
      <router-link :to="{path: '/'}">
        <div class="dorpmenu">
          首页
        </div>
      </router-link>
      <router-link v-for="item in daohang1List" :key="item.id"
                   :to="{path:'/articleList', query: {articleType:item.id}}">
        <div class="dorpmenu"> {{item.name}}</div>
      </router-link>
      <router-link :to="{path: '/'}">
        <div class="dorpmenu">
          关于我们
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "top",
        props: {
            daohang1List: {
                type: Array,
                required: true
            }
        },

        data() {
            return {};
        }
    }
</script>

<style scoped>
  .dorpmenu {
    float: left;
    width: 99px;
    margin-left: 1px;
    background: #79cae5;
    color: white;
    text-align: center;
    font-size: 14px;
    font-weight: bold
  }
</style>
