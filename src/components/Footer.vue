<template>
  <div class="flex">
    <div>
      <p>免责声明</p>

      <p>文章来源于网络、免费共享、仅供学习和研究，版权归原作者所有！</p>

    </div>

  </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {};
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
    margin-top: 40px;
    color: #fff;
  }

</style>
