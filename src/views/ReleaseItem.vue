<template lang="pug">
.releaseItem
  Release.releaseItem__release
  .releaseItem__content 
    .releaseItem__content__lineseparator
    .releaseItem__content--left
      .releaseItem__content__title Listen
    .releaseItem__content--right
      .releaseItem__content__title Infos
      p.releaseItem__text__description Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec? Posuere morbi leo urna, molestie! Lacus vel facilisis volutpat, est velit egestas dui, id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing! Et, sollicitudin ac orci phasellus egestas tellus rutrum.
</template>

<script>
import Release from "@/components/Release"

export default {
    name: "ReleaseItem",
    components: {
        Release
    },
    created () {
        this.checkRouteArtist()
    },
    watch: {
        '$route': 'checkRouteArtist'
    },
    methods: {
        checkRouteArtist () {
            switch (this.$route.params.artistname) {
            case 'grayumbersky':
                // this.currentArtist = this.artists[0]
                break
            }
        }
    }
}
</script>

<style lang="stylus">
.releaseItem
  width 95vw
  margin 0 auto

  &__release
    padding 275px 0 0 0
    margin 0 auto
  
  &__text
    text-align right

    &__title
      font 3em 'muller_narrowextrabold'
    &__description
      font 1.8em 'muller_narrowlight'
      width 450px

  &__content
    display flex
    width 100%
    justify-content space-between
    align-items flex-start
    position relative
    margin-top 100px
    
    &__lineseparator
      width 3px
      background #1e1e1c
      height 95%
      position absolute
      top -200px
      left 50%
      transform translate3d(-50%, 0, 0)
      z-index -2

    &__title
      font 15em 'muller_narrowextrabold_italic'
      opacity 0.3
      text-align center
      text-transform uppercase
</style>
