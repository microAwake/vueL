<template>
    <div class="app-total">
        <!--顶部header区域-->
        <!--fixed后，元素脱离标准流-->
        <mt-header fixed title="Vue cms小项目"></mt-header>
        <!--中间区域-->
        <h1>this is app.vue</h1>
        <!--底部tabBar区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopCar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>


</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>
 div.app-total{
     padding-top: 40px;
 }
</style>