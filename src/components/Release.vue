<template lang="pug">
.release(v-if="artistPage")
  .release__top
    .release__top__imagesCount 1 - 4
    .release__top__ref DW0001
  img.release__img(src="https://f4.bcbits.com/img/a2844472041_16.jpg")
  .release__bottom
    .release__bottom__name Inner Calm
    .release__bottom__options
      .release__bottom__options__prev <--
      .release__bottom__options__next -->
        
.release(v-else-if="releasePage")
  .release__top
    .release__top__imagesCount {{numberCount}} - {{releases.length}}
    .release__top__ref {{currentRelease.ref}}
  img.release__img(:src="currentRelease.img")
  .release__bottom
    .release__bottom__name {{currentRelease.artist}}
    .release__bottom__name {{currentRelease.name}}
  .release__options
    .release__options__item.release__options__item--prev(@click="previousRelease")
    .release__options__item.release__options__item--next(@click="nextRelease")
                    
.release(v-else)
  .release__banner
    .release__banner__item {{currentRelease.ref}}
    .release__banner__item.release__banner__item--bold {{currentRelease.artist}}
    .release__banner__item {{currentRelease.name}}
  img.release__img(:src="currentRelease.img")

</template>

<script>
export default {
    name: 'Release',
    props: {
        "artistPage": false,
        "releasePage": false
    },
    data () {
        return {
            "numberCount": 1,
            "releases": [
                {"name": "Inner Calm", "artist": "Monoclaus", "ref": "DW001", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "2", "artist": "Monoclaus2", "ref": "DW002", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "House du Ghetto", "artist": "Bpouille", "ref": "DW003", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "Germany Mix", "artist": "Aleqsandr", "ref": "DW004", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "Voyage voyage", "artist": "Gray Umber Sky", "ref": "DW005", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "SkateBoard Mix", "artist": "JSTN", "ref": "DW006", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"}
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
  grid-gap: 10px 0;
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

    &__item
      width 50px
      height 50px
      background no-repeat url("../assets/img/right-arrow.svg") center/100%

      &--prev
        transform rotate(180deg)

  &__banner
    position absolute
    top 45px
    left 200px
    width 60vw
    display flex
    justify-content space-between

    &__item
      font-size 3.5em
      letter-spacing 4px

      &--bold
        font-family 'muller_narrowextrabold_italic'
</style>
