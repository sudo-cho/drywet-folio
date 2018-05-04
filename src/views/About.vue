<template lang="pug">
.about
  //- full-page
  .about__section.about__section.section
    .about__section__content.about__section__content--1
      h3.about__section__content__sub few words
      h2.about__section__content__title about us
      .about__section__content__arrow
  .about__section.about__section.section
    .about__section__content.about__section__content--2
      .about__section__content__left
        .about__section__content__left__content
          h3.about__section__content__left__content__title {{title[0]}}
          img.about__section__content__left__content__img(src="../assets/img/drywetlogo.svg")
      .about__section__content__right
        p.about__section__content__right__description We care about the sound we produce. We are a french label. We are DRYWET.
  .about__section.about__section.section
    .about__section__content.about__section__content--3
      .about__section__content__left
        .about__section__content__left__content
          h3.about__section__content__left__content__title {{title[1]}}
          img.about__section__content__left__content__img(src="../assets/img/drywetlogo.svg")
      .about__section__content__right
        .about__section__content__right__location
        h3.about__section__content__right__location__item(v-for="item in locations") {{item}}.
</template>

<script>
// import FullPage from 'vue-fullpage.js/src/FullPage.vue'
export default {
    name: "About",
    components: {
        // FullPage
    },
    beforeDestroy () {
        // this.enableScroll()
    },
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
    },
    methods: {
        preventDefault(e) {
            e = e || window.event
            if (e.preventDefault)
                e.preventDefault()
            e.returnValue = false
        },
        enableScroll() {
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', this.preventDefault, false)
            window.onmousewheel = document.onmousewheel = null
            window.onwheel = null
            window.ontouchmove = null  
            document.onkeydown = null 
        }
    }
}
</script>

<style lang="stylus">
.page-container {
  position absolute
  left 0
  top 0
  width 100%
  height 100%
}

.about
  &__section
    &__content
      width 100vw
      height 100vh
      display flex
      flex-direction column
      align-items center
      justify-content center
      font-family 'Playfair Display', serif
      position relative
    
      &--2,
      &--3
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

@media (max-width: 1270px)
  .about
    &__section
      &__content
        &__right
          font-size 2.5em
          padding 0 100px

@media (max-width: 992px)
  .about
    &__section
      &__content
        &__sub
          font-size 2em
        &__title
          font-size 8em
        &__arrow
          height 80px

@media (max-width: 912px)
  .about
    &__section
      &__content
        &__right
          font-size 2em
          padding 0 70px

@media (max-width: 640px)
  .about
    &__section
      &__content
        &__left
          &__content
            &__img
              width 200px
              margin -100px
        &__right
          font-size 1.75em
          padding 0 45px

@media (max-width: 480px)
  .about
    &__section
      &__content
        &--2,
        &--3
          flex-direction column
        &__left,
        &__right
          flex-basis content


        &__left
          &__content
            &__img
              width 200px
              margin -100px
        &__right
          font-size 1.25em
          padding 0 25px
          &__location
            display flex
            align-items center
            &__item
              margin 0 15px
</style>
