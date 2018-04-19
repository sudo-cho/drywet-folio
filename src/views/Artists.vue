<template lang="pug">
.artists
  .artists__names
    router-link(class="no-link" to="/artist" v-for="(artist, key) in artists")
      h2.artists__names__item( @mouseover="moveFonts($event)") {{ artist }}
</template>

<script>
export default {
    name: 'Artists',
    data () {
        return {
            "artists": [
                "Gray Umber sky",
                "Voyana",
                "Bpouille",
                "Yamee",
            ],
            "loop": false
        }
    },
    methods: {
        loopAnimationFonts (target) {
            target.classList.add("artists__names__item--bolditalic")
            setTimeout( _ => {
                target.classList.remove("artists__names__item--bolditalic")
                target.classList.add("artists__names__item--bold")
            }, 250)
            setTimeout( _ => {
                target.classList.remove("artists__names__item--bold")
                target.classList.add("artists__names__item--normal")
            }, 500)
            setTimeout( _ => {
                target.classList.remove("artists__names__item--normal")
            }, 750)
        },
        moveFonts (event) {
            const target = event.target
            setInterval(this.loopAnimationFonts(target), 1000)
        },
        endMoveFonts () {
            clearInterval(this.loopAnimationFonts)
        }
    }
}
</script>

<style lang="stylus">
.artists
  width 100vw
  min-height 100vh
  margin 0
  padding 100px 75px 0 0

  &__names
    display flex
    flex-direction column
    align-items flex-end
    text-transform uppercase
    text-align right
    font-size 6.5em
    font-family 'muller_narrowlight_italic'

    &__item
      margin 0
      margin-top -35px
      display inline-block

      &--bolditalic
        font-family 'muller_narrowextrabold_italic'
      &--bold
        font-family 'muller_narrowextrabold'
      &--normal
        font-family 'muller_narrowlight'

      &:hover
        cursor pointer
</style>
