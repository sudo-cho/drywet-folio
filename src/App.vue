
<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: "App"
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

*,
*::before,
*::after 
  box-sizing inherit
</style>
