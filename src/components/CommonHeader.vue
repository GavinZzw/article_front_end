<template>
  <div>
    <top :daohang1List="daohang1List"></top>
    <div style="text-align: center;line-height:80px;background: cornflowerblue;height: 80px;width: 100%;margin: 0 0">
      banner
    </div>
    <end :daohang2List="daohang2List"></end>
    <div style="clear:both;height:32px;line-height:32px;font-size: 14px;font-weight: bold;">
      <div style="float:left;height:32px;width:30px">
        <img src="../assets/lb.png" width="30px" height="28px;" style="margin: 2px 0">
      </div>
      <div style="float:right ;height:32px; width:970px">
        <marquee direction="left" scrollamount="5" behavior="scroll"  onmouseover="stop()" onmouseout="start()">
          欢迎来到985论文网，本站提供硕博论文、研究生论文、专本论文、毕业论文、职称论文及期刊论文等服务，详情请咨询在线老师。
        </marquee>
      </div>

    </div>
  </div>


</template>

<script>
    import top from '../view/header/daohang1'
    import end from '../view/header/daohang2'
    import {getArticleType} from "@/api/getData.js"

    export default {
        components: {
            top,
            end
        },
        name: "CommonHeader",
        data() {
            return {
                daohang1List: [],
                daohang2List: [],
            };
        },
        methods: {
            async getArticleTypeData() {
                try {
                    const result = await getArticleType();
                    this.daohang1List = result.data.data.slice(0, 5);
                    this.daohang2List = result.data.data.slice(5, 50);
                } catch (error) {
                    console.log(error)
                }

            }

        },
        mounted() {
            this.getArticleTypeData()
        }
    }
</script>

<style scoped>

</style>
