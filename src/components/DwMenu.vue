<template lang="pug">
.dwmenu
  router-link(v-for="item in menus" :to="item.src" :key="`key-${item.title}`" class="no-link")
    .dwmenu__item {{ item.title }}
</template>

<script>
export default {
    name: 'DwMenu',
    data () {
        return {
            "menus": [
                {"title": "artists", "src": "/artists"},
                {"title": "releases", "src": "/releases"},
                {"title": "videos", "src": "/videos"},
                {"title": "about", "src": "/about"}
            ]
        }
    }
}
</script>

<style lang="stylus">
  .dwmenu
    position absolute
    bottom 90px
    font-weight 400
    display flex
    width 40%
    justify-content space-between
    font 1.4em 'Playfair Display', serif

    &:hover
      cursor pointer
</style>
