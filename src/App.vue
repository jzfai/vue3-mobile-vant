<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cachedViews">
      <component :is="Component" :key="key" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
let store = useStore()
let route = useRoute()

// cachePage: is true, keep-alive this Page
// leaveRmCachePage: is true, keep-alive remote when page leave
let oldRoute = null
const key = computed({
  get() {
    //setting title
    if (route.meta && route.meta.title) {
      document.title = route.meta.title
    }

    if (oldRoute?.name) {
      if (oldRoute.meta?.leaveRmCachePage && oldRoute.meta?.cachePage) {
        store.commit('app/M_DEL_CACHED_VIEW', oldRoute.name)
      }
    }
    if (route.name) {
      if (route.meta?.cachePage) {
        store.commit('app/M_ADD_CACHED_VIEW', route.name)
      }
    }
    oldRoute = JSON.parse(JSON.stringify({ name: route.name, meta: route.meta }))
    return route.path
  }
})

const cachedViews = computed(() => {
  return store.state.app.cachedViews
})
</script>

<style scoped lang="scss"></style>
