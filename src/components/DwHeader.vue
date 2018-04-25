<template lang="pug">
.dwheader(v-if="$route.name !== 'home'")
  .dwheader__logo(@click="openMenu")
    .dwheader__logo__item
    p.dwheader__logo__text(v-if="$route.name !== 'artist'") {{$route.name}}
    p.dwheader__logo__text(v-else) test
  .dwheader__menu(:class="{'dwheader__menu--active': toggleMenu}")
    .dwheader__menu__exit(@click="closeMenu")
    .dwheader__menu__list(@click="closeMenu")
      DwMenu(:menu="true")
</template>

<script>
import DwMenu from "@/components/DwMenu"
export default {
    name: 'DwHeader',
    components: {
        DwMenu
    },
    data () {
        return {
            "toggleMenu": false
        }
    },
    methods: {
        openMenu () {
            this.toggleMenu = true
        },
        closeMenu () {
            this.toggleMenu = false
        }
    }
}
</script>

<style lang="stylus">
.dwheader
  position fixed
  top 45px
  left 45px
  z-index 5

  &__logo
    display flex
    flex-direction column
    align-items center

    &__item
      width 55px
      height 55px
      border-radius 50%
      border 2px solid #1e1e1c

    &:hover
      cursor pointer
  
  &__menu
    width 100vw
    height 100vh
    z-index 88
    position fixed
    top 0
    left 0
    background #e8e8e8
    display flex
    flex-direction column
    align-items center
    justify-content center
    display none

    &--active
      display flex

    &__exit
      position absolute
      top 49px
      left 45px
      width 50px
      height 50px

      &:header
        cursor: pointer

      &:before, &:after
        position absolute
        content ''
        display block
        width 50px
        height 2px
        background #1e1e1c
        transform-origin center center
        top 23px

      &:before
        transform rotate(45deg)
      
      &:after
        transform rotate(-45deg)


</style>
