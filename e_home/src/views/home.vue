<template>
    <div class="home">
        <router-view></router-view>
        <BottomBar></BottomBar>
    </div>
</template>

<script>
import BottomBar from '@/components/BottomBar'

export default {
 data() {
 return {

 }
 },
 components: {
    BottomBar
 }
}
</script>

<style scoped lang="scss">
</style>
