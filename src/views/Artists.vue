<template lang="pug">
.artists
  h1.artists__title artists
  .artists__content
    .artists__content__names
      h2.artists__content__names__item(v-for="(artist, key) in artists", @click="changePicture(key)") {{ artist.name }}
    img.artists__content__picture(:src="currentPicture")
</template>

<script>
export default {
    name: 'Artists',
    data () {
        return {
            "currentPicture": "https://i1.sndcdn.com/avatars-000231968890-bzwwp6-t500x500.jpg",
            "artists": [
                {"name": "Gray Umber sky", "img": ""},
                {"name": "Voyana", "img": ""},
                {"name": "Bpouille", "img": ""},
                {"name": "Yamee", "img": ""},
                {"name": "0-Gravité", "img": ""},
                {"name": "Aleqsandr", "img": ""}
            ]
        }
    },
    methods: {
        imagePath (path) {
            return require("../assets/" + path)
        },
        changePicture(key) {
            return this.currentPicture = artists[key].img;
        }
     }
}
</script>

<style lang="stylus">
.artists
.artists__content
  display flex
  align-items center
  justify-content center
  
.artists
  background hsla(0, 0%, 98%, 100%)
  width 100vw
  height 100vh
  margin 0
  padding 0
  flex-direction column

  &__title
    font-size 4em
    letter-spacing 15px

  &__content
    flex-direction row

    &__names
      text-align right
      font-size 1.5em

    &__picture
      background red
  
</style>
