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

  .dwmenu
    position absolute
    bottom 90px
    font-family "SnellRoundHand" 
    font-weight 400
    font-size 1.4em
    display flex
    width 40%
    justify-content space-between
</style>
