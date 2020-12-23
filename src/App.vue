<template>
  <div class="layout" style="width: 1000px;margin: 0 auto">
    <div>
      <common-header></common-header>
    </div>
    <div style="clear: both">
      <router-view/>
    </div>
    <div>Footer</div>
    <!--    <Layout>-->
    <!--      <Header style="height: 100px; width:100%;background: none">-->
    <!--        <common-header></common-header>-->
    <!--      </Header>-->
    <!--      <Content>Content</Content>-->
    <!--      <Footer>Footer</Footer>-->
    <!--    </Layout>-->
  </div>
</template>

<script>
    
    import CommonHeader from "./components/CommonHeader";

    export default {
        name:'App',
        components: {
            CommonHeader,
        },
        data() {
            return {};
        }
    }
</script>

<style scoped>

</style>
