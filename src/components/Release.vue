<template lang="pug">
.release
  .release__top
    .release__top__imagesCount 1 - 4
    .release__top__ref DW0001
  img.release__img(src="https://f4.bcbits.com/img/a2844472041_16.jpg")
  .release__bottom
    .release__bottom__name Inner Calm
    .release__bottom__options
      .release__bottom__options__prev <--
      .release__bottom__options__next -->
</template>

<script>
export default {
    name: 'Release'
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

  &__bottom
    &__options
      width 55px

</style>
