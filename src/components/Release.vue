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
        
.release(v-else)
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
</template>

<script>
export default {
    name: 'Release',
    props: {
        "artistPage": false
    },
    data () {
        return {
            "numberCount": 1,
            "releases": [
                {"name": "Inner Calm", "artist": "Monoclaus", "ref": "DW0001", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "2", "artist": "Monoclaus2", "ref": "DW0002", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "House du Ghetto", "artist": "Bpouille", "ref": "DW0003", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "Germany Mix", "artist": "Aleqsandr", "ref": "DW0004", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "Voyage voyage", "artist": "Gray Umber Sky", "ref": "DW0005", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"},
                {"name": "SkateBoard Mix", "artist": "JSTN", "ref": "DW0006", "img":"https://f4.bcbits.com/img/a2844472041_16.jpg"}
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
</style>
