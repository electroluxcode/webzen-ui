<script setup>
import DefaultTheme from "vitepress/theme"
// import Giscus from '@giscus/vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
     
    </template>
  </Layout>
</template>

<script>
import { watch } from 'vue'
import { useRoute, useData } from 'vitepress'

export default {
  mounted() {
    const vitePressData = useData()
    // console.log(vitePressData,"ss")
    this.isDark = vitePressData.isDark

    const route = useRoute() 
    
  },
  data() {
    return {
      
      isDark: false
    }
  }
}
</script>

<style>
img.pv {
  margin-top: 1em;
}



</style>