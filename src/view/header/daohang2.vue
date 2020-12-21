<template>
  <div style="height: 30px; line-height:30px">
    <router-link v-for="item in daohang2List" :key="item.id"
                 :to="{path:'/articleList', query: {articleType:item.id}}">
      <div class="dorpmenu"> {{item.name}}</div>
    </router-link>

  </div>
</template>

<script>
    export default {
        props: {
            daohang2List: {
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
