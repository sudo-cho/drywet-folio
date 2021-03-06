<template lang="pug">
.artist
  .artist__top
    h1.artist__top__title {{ currentArtist.name }}
    p.artist__top__location.artist__marquee 
      span.artist__top__location__item {{locations}}
      span.artist__top__location__item {{locations}}
      span.artist__top__location__item {{locations}}
  .artist__content__img
  .artist__content
    .artist__content__lineseparator
    .artist__releases
      Release(:artistPage="true" :imgRelease="currentArtist.releaseImg")
    p.artist__content__text.artist__content__text--left {{ currentArtist.descLeft }}
    .artist__content__quote
      p.artist__content__quote__text.artist__content__quote__text--default {{ currentArtist.quote }}
      p.artist__content__quote__text.artist__content__quote__text--bold {{ currentArtist.quote }}
      p.artist__content__quote__text.artist__content__quote__text--outlineBold {{ currentArtist.quote }}
      p.artist__content__quote__text.artist__content__quote__text--outline {{ currentArtist.quote }}
    p.artist__content__text.artist__content__text--right {{ currentArtist.descRight }}
    .artist__content__bottom
      Carousel(:perPage="2" :paginationEnabled="false")
        Slide(v-for="(slide, key) in currentArtist.slides" :key="`slide-${key}`")
          .artist__content__bottom__slide 
            iframe.artist__content__bottom__slide__video(:src="slide" frameborder="0" allowfullscreen width="560" height="315")
  .artist__footer
    h2.artist__footer__title Also Discover
    .artist__footer__line.artist__footer__line--top
      p.artist__footer__line__text.artist__marquee
        span.artist__footer__line__text__item {{ comingSoon }}
        span.artist__footer__line__text__item {{ comingSoon }}
        span.artist__footer__line__text__item {{ comingSoon }}
    .artist__footer__line.artist__footer__line--bottom
      p.artist__footer__line__text.artist__marqueeReversed
        span.artist__footer__line__text__item {{ comingSoon }}
        span.artist__footer__line__text__item {{ comingSoon }}
        span.artist__footer__line__text__item {{ comingSoon }}
</template>

<script>
import Release from "@/components/Release"
import { Carousel, Slide } from 'vue-carousel'
import * as R from "ramda"

export default {
    name: 'Artist',
    components: {
        Release,
        Carousel,
        Slide
    },
    created () {
        this.checkRouteArtist()
    },
    watch: {
        '$route': 'checkRouteArtist'
    },
    data () {
        return {
            
            "currentArtist": null,
            "artists": [
                {
                    "name": "Gray Umber Sky",
                    "location": "SOMEWHERE IN THE FRENCH ALPS",
                    "quote": "artist chosen quote",
                    "descLeft": "Gray Umber Sky delivers us some deep melodic and atmospheric techno which only him knows the secret. 12 years of classical and jazz piano background gives him the opportunity to shape metodically his music's melodic melodic parts.",
                    "descRight": "Thanks to his dad's friend, Gray Umber Sky owned a JUNO 106 for a short period when he was younger. This object is his first step into synthesizer and electronic music in general.",
                    "slides": [
                        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/205575529&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
                        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261172226&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    ],
                    "releaseImg": "grayumbersky/release.jpg"
                }
            ]
        }
    },
    computed: {
        locations () {
            return R.join(" ", R.repeat(this.currentArtist.location, 5))
        },
        comingSoon () {
            return R.join(" ", R.repeat("coming soon", 6))
        }
    },
    methods: {
        checkRouteArtist () {
            switch (this.$route.params.artistname) {
            case 'grayumbersky':
                this.currentArtist = this.artists[0]
                break
            }
        }
    }
    
}
</script>

<style lang="stylus">
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}

@keyframes marqueeReversed {
    0%   { transform: translate(-100%, 0); }
    100% { transform: translate(0, 0); }
}

.artist
  &__marquee
    animation: marquee 50s linear infinite
  &__marqueeReversed
    animation: marqueeReversed 50s linear infinite

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

      &__item
        padding-right 55px

  &__releases
    padding 35px 0

  &__content
    padding 85px 0

  &__releases,
  &__content
    display flex
    flex-direction column
    align-items center
    justify-content center


  .artist__content__img:before,
  .artist__content__img:after
    border 3px solid #1e1e1c
    content ''
    display block
    position absolute
    width 100%
    height 100%
    background #fff

  .artist__content__img:before
    top 10px
    left 10px
    z-index -1

  .artist__content__img:after
    top 17px
    left 17px
    z-index -2

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

    .artist__content__quote:before
      top 10px
      left 10px
      z-index -1

    .artist__content__quote:after
      top 17px
      left 17px
      z-index -2


    &__img
      width 400px
      height 400px
      background no-repeat url("../assets/img/grayumbersky/profile.jpg") center/100%
      position relative
      margin 130px auto

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
        width 100%
        height auto
        border 2px solid #1e1e1c

        &__video
          width 100%
          height 100%

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
      overflow hidden
      position relative

      &__text
        margin 0
        font 4em 'muller_narrowextrabold_italic'
        letter-spacing 5px
        white-space nowrap

        &__item
          padding-right 15px

@media (max-width: 992px)
  .artist
    &__top
      &__title
        font-size 4em


@media (max-width: 850px)
  .artist
    &__content
      &__quote
        width 500px
        padding 40px 0 30px 40px
        &__text
          font-size 1.8em
        
@media (max-width: 810px)
  .artist
    &__top
      &__title
        font-size 3em
        padding 55px 15px 0 0
    &__content
      &__text
        &--left
          margin-right 60px
        &--right 
          margin-left 60px


@media (max-width: 640px)
  .artist
    &__top
      &__title
        padding 35px 15px 0 0

@media (max-width: 570px)
  .artist
    &__top
      &__title
        font-size 2em
    &__content
      &__text
        &--left
          margin-right 40px
          padding 50px 0 0 80px

        &--right 
          margin-left 40px
          padding 50px 80px 0 0


</style>
