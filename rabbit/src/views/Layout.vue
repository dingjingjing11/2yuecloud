<template>
    <div class="bigbox">
        <!-- layout容器 -->
        <header1></header1>
        <header2></header2>
        <nav1></nav1>
        <nav2></nav2>
        <transition>
            <keep-alive>
                <router-view :key="key" v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition>
            <router-view :key="key" v-if="$route.meta.keepAlive == false"></router-view>
        </transition>
        <footer1></footer1>
    </div>
</template>
<script>
import header1 from '../assets/header.vue'
import header2 from '../components/app-header-nav.vue'
import nav1 from '../assets/nav.vue'
import nav2 from '../assets/nav2.vue'
import footer1 from '../assets/footer.vue'
export default {
    components: {
        header1,
        header2,
        nav1,
        nav2,
        footer1
    },
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
        key() {
            return this.$router.id
        }
    },
    methods: {
    },
}
</script>
<style >
.bigbox {
    width: 100%;
}
</style>
