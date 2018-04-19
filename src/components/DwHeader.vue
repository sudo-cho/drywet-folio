<template lang="pug">
.dwheader(v-if="$route.name !== 'Home'")
  router-link(class="no-link" to="/")
    .dwheader__logo
</template>

<script>
export default {
    name: 'DwHeader'
}
</script>

<style lang="stylus">
.dwheader
  position absolute
  top 45px
  left 45px
  z-index 5

  &__logo
    width 55px
    height 55px
    border-radius 50%
    border 2px solid #1e1e1c

    &:hover
      cursor pointer
</style>
