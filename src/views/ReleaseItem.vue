<template lang="pug">
.releaseItem
  Release.releaseItem__release
  .releaseItem__content 
    .releaseItem__content__lineseparator
    .releaseItem__content--left
      .releaseItem__content__title Listen
      iframe(src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/205575529&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" frameborder="0" allowfullscreen width="100%" height="166")
    .releaseItem__content--right
      .releaseItem__content__title Infos
      p.releaseItem__content__text Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec? Posuere morbi leo urna, molestie! Lacus vel facilisis volutpat, est velit egestas dui, id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing! Et, sollicitudin ac orci phasellus egestas tellus rutrum.
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
  

  &__content
    display flex
    width 100%
    justify-content space-between
    align-items flex-start
    position relative
    
    &__text
      font 1.8em 'muller_narrowlight'
      width 450px
      text-align right

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
      margin 100px 0 30px 0

@media (max-width: 1280px)
  .releaseItem
    &__content
      flex-direction column
      justify-content center
      align-items center
      &__lineseparator
        display none
      &__text
        text-align center

@media (max-width: 675px)
  .releaseItem
    &__release
      padding 180px 0 0 0 
    &__content
      &__title
        margin 50px 0 30px 0
        font 8em 'muller_narrowextrabold_italic'
</style>
