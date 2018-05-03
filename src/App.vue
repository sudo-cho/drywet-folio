<template lang="pug">
#app
  CursorElm
  DwHeader
  router-view
</template>

<script>
import DwHeader from "@/components/DwHeader"
import CursorElm from "@/components/Cursor"
export default {
    name: "App",
    components: {
        DwHeader,
        CursorElm
    }
}
</script>

<style lang="stylus">
@import "./styles/fonts"

html 
  box-sizing border-box
  // cursor none

html, body
  margin 0
  padding 0

body
  font-size 14px
  color #1e1e1c
  background #e8e8e8

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
