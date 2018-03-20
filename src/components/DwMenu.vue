<template lang="pug">
.dwmenu
  .dwmenu__item(v-for="title in menus") {{ title }}
</template>

<script>
export default {
    name: 'DwMenu',
    data () {
        return {
            "menus": [
                "artists",
                "releases",
                "videos",
                "about"
            ]
        }
    }
    
}
</script>

<style lang="stylus">
@font-face 
    font-family "SnellRoundhand"
    src url("../assets/fonts/snellRoundHand/SnellRoundHand.ttf")
    font-weight 400

  .dwmenu
    position absolute
    bottom 90px
    font-family "snellRoundHand" 
    font-weight 400
    font-size 1.4em
    display flex
    width 50%
    justify-content space-between
</style>
