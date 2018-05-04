<template lang="pug">
.release(v-if="artistPage")
  .release__top
    .release__top__imagesCount 1 - 1
    .release__top__ref DRWT001
  img.release__img(:src="imagePath(imgRelease)")
  .release__bottom
    .release__bottom__name Molecular Engine
    //- .release__bottom__options
    //-   .release__bottom__options__prev <--
    //-   .release__bottom__options__next -->
        
.release(v-else-if="releasePage")
  router-link(to="/release/grayumbersky" class="no-link")
    .release__top
      .release__top__imagesCount {{numberCount}} - {{releases.length}}
      .release__top__ref {{currentRelease.ref}}
    img.release__img(:src="imagePath(currentRelease.img)")
    .release__bottom
      .release__bottom__name {{currentRelease.artist}}
      .release__bottom__name {{currentRelease.name}}
  .release__options
    .release__options__item.release__options__item--prev(@click="previousRelease")
    .release__options__item.release__options__item--next(@click="nextRelease")
                    
.release(v-else)
  .release__banner
    .release__banner__item {{currentRelease.name}}
    .release__banner__text
      .release__banner__text__item {{currentRelease.ref}}
      .release__banner__text__item {{currentRelease.artist}}
      .release__banner__text__item {{currentRelease.date}}
  img.release__img(:src="imagePath(currentRelease.img)")
</template>

<script>
export default {
    name: 'Release',
    props: {
        "artistPage": false,
        "releasePage": false,
        "imgRelease": null
    },
    data () {
        return {
            "numberCount": 1,
            "releases": [
                {"name": "Molecular Engine", "artist": "Gray Umber Sky", "ref": "DRWT001", "img":"grayumbersky/release.jpg", "date": "2018"},
                {"name": "Coming soon", "artist": "coming soon", "ref": "DRWT002", "img":"comingsoon.jpg", "date": "2018"},
                {"name": "Coming soon", "artist": "coming soon", "ref": "DRWT003", "img":"comingsoon.jpg", "date": "2018"}
            ]
        }
    },
    computed: {
        currentRelease () {
            return this.releases[this.numberCount - 1]
        }
    },
    methods: {
        nextRelease () {
            this.numberCount < this.releases.length ? this.numberCount++ : this.numberCount = 1
        },
        previousRelease () {
            this.numberCount > 1 ? this.numberCount-- : this.numberCount = this.releases.length
        },
        imagePath (path) {
            return require("../assets/img/" + path)
        }
    }
}
</script>

<style lang="stylus">
.release
  font-family 'muller_narrowlight_italic'
  text-transform uppercase
  display grid
  grid-template-rows 25% 50% 25%
  grid-gap 10px 0
  width 400px
  letter-spacing 4px

  &__top, &__bottom, .release__bottom__options
    display flex
    justify-content space-between
    align-items center

  &__img
    max-width 100%

  &__top,
  &__img,
  &__bottom
    user-select none

  &__bottom
    &__options
      width 55px

  &__options
    display flex
    justify-content space-between
    position absolute
    width 900px
    top 50%
    left 50%
    transform translate3D(-50%, -50%, 0)
    z-index -1

    &__item
      width 50px
      height 50px
      background no-repeat url("../assets/img/right-arrow.svg") center/100%

      &--next:hover,
      &--prev:hover
        cursor pointer

      &--prev
        transform rotate(180deg)

  &__banner
    position absolute
    top 45px
    left 200px
    width 80vw
    text-align right

    &__item
      font-size 6em
      letter-spacing 8px
      font-family 'muller_narrowextrabold_italic'

    &__text
      margin-left auto
      width 350px
      display flex
      justify-content space-between
      align-items center

@media (max-width: 1030px)
  .release
    &__banner
      width 90vw
      right 20px
      left 0
      &__item
        font-size 4.5em

@media (max-width: 920px)
  .release
    &__options
      width 600px


@media (max-width: 880px)
  .release
    &__banner
      width 95vw
      right 10px
      &__item
        font-size 3.5em

@media (max-width: 680px)
  .release
    &__banner
      right 5px
      &__item
        font-size 2.5em
      &__text
        width 300px
        font-size 1em
    

@media (max-width: 576px)
  .release
    width 300px
    &__banner
      &__item
        font-size 1.8em
      &__text
        width 300px
        font-size 1em

    &__options
      width 450px

</style>
