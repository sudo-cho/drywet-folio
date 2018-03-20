
<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@font-face 
    font-family "SnellRoundhand"
    src url("/assets/fonts/snellRoundHand/SnellRoundHand.ttf")
    font-weight 400

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
