<template lang="pug">
.cursor
  .cursor__small(ref="cursor")
  //- canvas.cursor__big
</template>

<script>
import SimplexNoise from "simplex-noise"
export default {
    name: 'cursorElm',
    mounted () {
	      window.onmousemove = this.updateCursorPosition
        // this.setup()
        // this.draw()
    },
    data () {
        return {
            "canvas": null,
            "ctx": null,
            "w": null,
            "h": null,
            "m": null,
            "simplex": null,
            "ticker": 0,
            "mx": null,
            "my": null,
            "then": 0
        }
    },
    methods: {
        updateCursorPosition (e) {
            this.$refs.cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        },
        setup () {
            this.canvas = document.querySelector(".cursor__big")
            this.ctx = this.canvas.getContext("2d")
            this.reset()
            window.addEventListener("resize", this.reset)
        },
        reset () {
            this.simplex = new SimplexNoise()
            this.ticker = 0
            this.w = this.canvas.width = window.innerWidth
            this.h = this.canvas.height = window.innerHeight
            this.m = Math.min(this.w, this.h)
        },
        draw () {
            requestAnimationFrame(this.draw)
            let now = Date.now()
            let delta = (now - this.then) / 1000;
            this.ticker += delta
            this.then = now
            this.ctx.fillStyle = "#aeaeae";
            this.ctx.fill();
            this.drawCircle(100)
        },
        drawCircle (r) {
            this.ctx.beginPath()
            let point, x, y
            let deltaAngle = Math.PI * 2 / 400
            for(let angle = 0; angle < Math.PI * 2; angle += deltaAngle) {
                point = this.calcPoint(angle, r)
                x = point[0]
                y = point[1]
                this.ctx.lineTo(x, y)
            }
            this.ctx.stroke()
        },
        calcPoint (angle, r) {
            let noiseFactor = 5
            let zoom = 250
            let x = Math.cos(angle) * r + this.w / 2
            let y = Math.sin(angle) * r + this.h / 2
            let n = (this.simplex.noise3D(x / zoom, y / zoom, this.ticker)) * noiseFactor
            x = Math.cos(angle) * (r + n) + this.w / 2
            y = Math.sin(angle) * (r + n) + this.h / 2
            return [x, y]
        }
    }
}
</script>

<style lang="stylus">
.cursor
  z-index 999

  &__small,
  &__big
    position absolute
    top 0
    left 0
    transform translate3d(0,0,0)

  &__small 
    background #000
    width 16px
    height 16px
    border-radius 50%
    z-index 1000

</style>
