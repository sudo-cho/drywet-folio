<template lang="pug">
.dwmenu(:class="{'dwmenu--header': menu}")
  router-link(v-for="item in currentMenu" :to="item.src" :key="`key-${item.title}`" class="no-link")
    .dwmenu__item(:class="{'dwmenu__item--header': menu}") {{ item.title }}
      .dwmenu__item--header__separator(v-if="menu" :class="{'dwmenu__item--header__separator--active': $route.name === item.title}")
</template>

<script>
export default {
    name: 'DwMenu',
    props: {
        "menu": false
    },
    created () {
        this.checkUrl()
    },
    watch: {
        '$route': 'checkUrl'
    },
    data () {
        return {
            "currentMenu": null,
            "menus": [
                {"title": "home", "src": "/"},
                {"title": "artists", "src": "/artists"},
                {"title": "releases", "src": "/releases"},
                // {"title": "videos", "src": "/videos"},
                {"title": "about", "src": "/about"}
            ],
            "menus2": [
                {"title": "artists", "src": "/artists"},
                {"title": "releases", "src": "/releases"},
                // {"title": "videos", "src": "/videos"},
                {"title": "about", "src": "/about"}
            ]
        }
    },
    methods: {
        checkUrl () {
            this.currentMenu = this.$route.name === "home" ? this.menus2 : this.menus
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

    &--header
      position initial
      bottom initial
      flex-direction column
      align-items center
      font-size 5em
      width initial

    &:hover
      cursor pointer

    &__item
     &:hover
        .dwmenu__item--header__separator
          opacity 1  

      &--header
        margin-bottom 10px
        position relative

        &__separator
          position absolute
          left -110px
          width 430px
          height 25px
          top 50%
          opacity 0

          &--active
            opacity 1

          &:before, &:after
            content ''
            display block
            width 45px
            height 1px
            background #1e1e1c
            position absolute
            top 50%

          &:before
            left 0

          &:after
            right 0

@media (max-width: 992px)
  .dwmenu
    width 70%

@media (max-width: 640px)
  .dwmenu
    &--header
      font-size 4em
    &__item
      &--header
        &__separator
          width 300px
          left -76px
</style>

