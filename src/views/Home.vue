<template lang="pug">
.home
  img.home__logo(src="../assets/img/drywetlogo.svg")
  transition(name="fade")
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
.fade-enter-active,
.fade-leave-active
  transition opacity .5s

.fade-enter,
.fade-leave-to 
  opacity: 0

.home
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
