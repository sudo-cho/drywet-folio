<template lang="pug">
.artists(ref="artists")
  .artists__names
    router-link(class="no-link" :to="`/artist/${artist.link}`" v-for="(artist, key) in artists" :key="`key-${artist}`")
      h2.artists__names__item( @mouseover="moveFonts($event)" @mouseleave="endMoveFonts" ref="myFont") {{ artist.name }}
    h2.artists__names__item COMING SOON
    h2.artists__names__item COMING SOON
    h2.artists__names__item COMING SOON
    h2.artists__names__item COMING SOON
    h2.artists__names__item COMING SOON
    h2.artists__names__item COMING SOON
</template>

<script>
export default {
    name: 'Artists',
    data () {
        return {
            "artists": [
                {"name": "Gray Umber sky", "link": "grayumbersky"}
            ],
            "myInterval": null
        }
    },
    mounted () {
        this.loopAnimationFonts(this.$refs.myFont[0])
        setTimeout ( _ => {
            this.showContent()
        }, 1000)
    },
    methods: {
        showContent () {
            this.$refs.artists.style.visibility = "visible"
        },
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
            const self = this
            this.loopAnimationFonts(target)
            this.myInterval = setInterval( function () {
                self.loopAnimationFonts(target)
            }, 1000)
        },
        endMoveFonts () {
            clearInterval(this.myInterval)
        }
    }
}
</script>

<style lang="stylus">
.artists
  visibility hidden
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
      margin-top 0px
      display inline-block
      min-height 180px
      line-height auto

      &--bolditalic
        font-family 'muller_narrowextrabold_italic'
      &--bold
        font-family 'muller_narrowextrabold'
      &--normal
        font-family 'muller_narrowlight'

@media (max-width: 1180px)
  .artists
    &__names
      font-size 5em
    
@media (max-width: 930px)
  .artists
    &__names
      font-size 4em

@media (max-width: 780px)
  .artists
    &__names
      font-size 3em
      &__item 
        min-height 140px

@media (max-width: 640px)
  .artists
    padding 30px 35px 0 0
    &__names
      font-size 2em
      &__item 
        min-height 100px

@media (max-width: 480px)
  .artists
    padding 30px 35px 0 0
    &__names
      &__item 
        min-height 80px


</style>
