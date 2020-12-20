<template>
  <div>

    <div class="box">
      <div class="a">A</div>
      <div class="b">B</div>
      <div class="c">C</div>
    </div>
    <div class="box" style="margin-top: 5px">
      <div class="a">A</div>
      <div class="b">B</div>
      <div class="c">C</div>
    </div>
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 5px 0 ">
      banner
    </div>
    <div class="box">
      <div class="a">A</div>
      <div class="b">B</div>
      <div class="c">C</div>
    </div>
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 5px 0">
      banner
    </div>
  </div>
</template>

<script>
    export default {
        name: "contentDetial",
        data() {
            return {};
        }
    }
</script>

<style scoped>
  .box {
    width: 1000px;
    height: 300px;
  }

  .box .a, .box .b, .box .c {
    width: 330px;
    height: 300px;
    float: left;
    background: #087ccc
  }

  .box .b {
    margin: 0 5px;
  }

</style>
