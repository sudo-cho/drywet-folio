<template lang="pug">
.releaseItem
  .releaseItem__text
    h1.releaseItem__text__title A simple world
    p.releaseItem__text__description Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec? Posuere morbi leo urna, molestie! Lacus vel facilisis volutpat, est velit egestas dui, id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing! Et, sollicitudin ac orci phasellus egestas tellus rutrum.
  Release.releaseItem__release
  .releaseItem__tracklist
</template>

<script>
import Release from "@/components/Release"

export default {
    name: "ReleaseItem",
    components: {
        Release
    }
}
</script>

<style lang="stylus">
.releaseItem
  height 100vh
  display flex
  align-items center
  width 95vw
  margin 0 auto

  &__release
    margin 21px 146px 0 148px

  &__text
    text-align right

    &__title
      font 3em 'muller_narrowextrabold'
    &__description
      font 1.8em 'muller_narrowlight'
      width 450px

  &__tracklist
    border 1px solid #1e1e1c
    width 200px
    height 450px
</style>
