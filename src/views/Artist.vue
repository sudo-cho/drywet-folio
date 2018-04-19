<template lang="pug">
.artist
  .artist__top
    h1.artist__top__title Gray Umber Sky
    p.artist__top__location paris paris paris paris paris paris paris paris paris paris paris paris paris paris paris paris paris paris paris paris paris paris
  .artist__releases
    Release(:artistPage="true")
  .artist__content
    .artist__content__lineseparator
    .artist__content__img
    p.artist__content__text.artist__content__text--left Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim, sit. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta? Montes, nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel? Urna, molestie at elementum eu, facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing.
    .artist__content__quote
      p.artist__content__quote__text.artist__content__quote__text--default Artist's chosen quote
      p.artist__content__quote__text.artist__content__quote__text--bold Artist's chosen quote
      p.artist__content__quote__text.artist__content__quote__text--outlineBold Artist's chosen quote
      p.artist__content__quote__text.artist__content__quote__text--outline Artist's chosen quote
    p.artist__content__text.artist__content__text--right Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim, sit. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta? Montes, nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel? Urna, molestie at elementum eu, facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing.
    .artist__content__bottom
      Carousel(:perPage="3" :paginationEnabled="false")
        Slide(v-for="(slide, key) in slides" :key="`slide-${key}`")
          .artist__content__bottom__slide {{slide}}
  .artist__footer
    h2.artist__footer__title Also Discover
    .artist__footer__line.artist__footer__line--top
      p.artist__footer__line__text Bpouille
      p.artist__footer__line__text Yamee
      p.artist__footer__line__text Monoclaus
      p.artist__footer__line__text Aleqsandr
      p.artist__footer__line__text 0-gravité
      p.artist__footer__line__text JSTN
    .artist__footer__line.artist__fotter__line--bottom
      p.artist__footer__line__text Bpouille
      p.artist__footer__line__text Yamee
      p.artist__footer__line__text Monoclaus
      p.artist__footer__line__text Aleqsandr
      p.artist__footer__line__text 0-gravité
      p.artist__footer__line__text JSTN
</template>

<script>
import Release from "@/components/Release"
import { Carousel, Slide } from 'vue-carousel'

export default {
    name: 'Artist',
    components: {
        Release,
        Carousel,
        Slide
    },
    data () {
        return {
            "slides": [
                "slide1",
                "slide2",
                "slide3",
                "slide4",
                "slide5"
            ]
        }
    }
}
</script>

<style lang="stylus">
.artist
  &__top
    text-transform uppercase
    position relative
    overflow hidden

    &__title
      font 5.5em 'muller_narrowextrabold_italic'
      text-align right
      margin 0
      padding 55px 55px 0 0
      letter-spacing 15px
    &__location
      font 1.2em 'muller_narrowlight_italic'
      letter-spacing 5px
      word-spacing 40px
      white-space nowrap

  &__releases, &__content
    padding 85px 0
    display flex
    flex-direction column
    align-items center
    justify-content center

  &__content
    position relative

    &__lineseparator
      width 3px
      background #1e1e1c
      height 95%
      position absolute
      top 0
      left 50%
      transform translate3d(-50%, 0, 0)
      z-index -2
      &:before
        content ''
        display block
        background #1e1e1c
        width 12px
        height 12px
        border-radius 50%
        position absolute
        left -4.5px
        top -4px

    &__img,
    .artist__content__img:before,
    .artist__content__img:after,
    .artist__content__quote,
    .artist__content__quote:before,
    .artist__content__quote:after
      border 3px solid #1e1e1c
      
    .artist__content__img:before,
    .artist__content__img:after,
    .artist__content__quote:before,
    .artist__content__quote:after
      content ''
      display block
      position absolute
      width 100%
      height 100%
      background #fff

    .artist__content__img:before,
    .artist__content__quote:before
      top 10px
      left 10px
      z-index -1

    .artist__content__img:after,
    .artist__content__quote:after
      top 17px
      left 17px
      z-index -2


    &__img
      width 400px
      height 400px
      margin-top 50px
      background no-repeat url("https://f4.bcbits.com/img/a2844472041_16.jpg") 
      position relative

    &__quote
      width 800px
      display flex
      flex-direction column
      align-items flex-start
      justify-content center
      margin-top 50px
      padding 40px 0 30px 80px
      background #fff
      position relative

      &__text
        font-size 3em
        margin -15px 0 0 0
        text-transform uppercase
        letter-spacing 10px

        &--default
          font-family 'muller_narrowlight'
        &--bold
          font-family 'muller_narrowextrabold_italic'
        &--outlineBold
          font-family 'muller_narrowextrabold'
        &--outline
          font-family 'muller_narrowlight_italic'

        &--outline,
        &--outlineBold
          color white
          text-shadow -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000  

    &__text
      margin-top 50px
      font-size 1.5em
      max-width 750px

      &--left
        text-align right
        align-self flex-start
        padding 50px 0 0 150px

      &--right
        text-align left
        align-self flex-end
        padding 50px 150px 0 0
        
    &__bottom 
      margin-top 50px
      width 100%
      padding 0 5px 

      &__slide
        background #fff
        width 550px
        height 300px
        border 2px solid #1e1e1c

  &__footer
    display flex
    flex-direction column
    align-items center
    justify-content center
    text-transform uppercase 

    &__title
      font 2em 'muller_narrowlight_italic'
      letter-spacing 5px

    &__line
      width 100%
      display flex
      align-items center
      justify-content space-between

      &__text
        margin 0
        font 4em 'muller_narrowextrabold_italic'
        letter-spacing 5px
</style>
