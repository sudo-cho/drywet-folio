<template lang="pug">
.about
  .about__section
    h3.about__section__sub few words
    h2.about__section__title about us
    .about__section__arrow
  .about__section.about__section--2
    .about__section__left
      .about__section__left__content
        h3.about__section__left__content__title {{title[0]}}
        img.about__section__left__content__img(src="../assets/img/drywetlogo.svg")
    .about__section__right
      p.about__section__right__description We care about the sound we produce. We are a french label. We are DRYWET.
      .about__section__right__location
        h3.about__section__right__location__item(v-for="item in locations") {{item}}.
</template>

<script>
export default {
    name: "About",
    data () {
        return {
            "title": [
                "what is",
                "where is"
            ],
            "locations": [
                "Paris",
                "Marseille",
                "Lille"
            ]
        }
    }
}
</script>

<style lang="stylus">
.about
  &__section
    width 100vw
    height 100vh
    display flex
    flex-direction column
    align-items center
    justify-content center
    font-family 'Playfair Display', serif
    position relative
    
    &--2
      flex-direction row
      
    &__sub,
    &__title
      margin 0

    &__sub
      font-size 2.5em
      margin-top 50px

    &__title
      margin-top -50px
      font-size 13em

    &__arrow
      width 3px
      height 105px
      background black
      position absolute
      bottom 0
      margin-bottom 45px

    &__left,
    &__right
      flex-basis 50%
            
    &__right
      font-size 3em
      padding 0 160px
      
      &__location
        &__item
          font-size 2em
          text-align right
          margin 50px 0
      
    &__left
      &__content
        display flex
        flex-direction column
        align-items center
        justify-content center
      
        &__title
          font-size 2em
        &__img
          width 300px
          margin-top -130px
</style>
