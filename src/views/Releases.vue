<template lang="pug">
.releases
  router-link(to="/release" class="no-link")
    Release(:releasePage="true")
</template>

<script>
import Release from "@/components/Release"

export default {
    name: "Releases",
    components: {
        Release
    }
}
</script>

<style lang="stylus">
.releases
  height 100vh
  display flex
  align-items center
  justify-content center
</style>

