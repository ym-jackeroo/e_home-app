<template>
  <div id="app">
    <router-view/>
    <Loading v-if="this.$store.state.loading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Loading
  },
  methods: {
    
  },
  created() {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.fll {
  float: left;
}

.flr {
  float: right;
}

.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
</style>
