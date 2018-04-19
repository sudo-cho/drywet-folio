<template lang="pug">
#app
  DwHeader
  router-view
</template>

<script>
import DwHeader from "@/components/DwHeader"
export default {
    name: "App",
    components: {
        DwHeader
    }
}
</script>

<style lang="stylus">
@import "./styles/fonts"

html 
  box-sizing border-box

html, body
  margin 0
  padding 0

body
  font-size 14px
  color #1e1e1c

.no-link:link,
.no-link:visited
    text-decoration inherit
    color inherit
    cursor pointer
    
*,
*::before,
*::after 
  box-sizing inherit
</style>
