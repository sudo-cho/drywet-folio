<template lang="pug">
.home
  img.home__logo(src="../assets/img/drywetlogo.svg")
  DwMenu
</template>

<script>
import DwMenu from "@/components/DwMenu"
export default {
    name: "Home",
    components: {
        DwMenu
    }
}
</script>

<style lang="stylus">
.home
  background hsla(0, 0%, 98%, 100%)
  width 100vw
  height 100vh
  margin 0
  padding 0
  display flex
  flex-direction column
  align-items center
  justify-content center

  &__logo
    width 350px
    height auto
</style>
