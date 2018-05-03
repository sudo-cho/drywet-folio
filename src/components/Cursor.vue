<template lang="pug">
.cursor
  //- .cursor__small(ref="cursor")
  canvas.cursor__big
</template>

<script>
import SimplexNoise from "simplex-noise"
export default {
    name: 'cursorElm',
    mounted () {
	      // window.onmousemove = this.updateCursorPosition
        this.setup()
        this.draw()
    },
    watch: {
        '$route': 'reset'
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
            "then": 0,
            "appElement": null,
            "dx": [0, 0, 0],
            "dy": [0, 0, 0],
            "xPos": [0, 0, 0],
            "yPos": [0, 0, 0]
        }
    },
    methods: {
        updateCursorPosition (e) {
            this.$refs.cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        },
        setup () {
            this.canvas = document.querySelector(".cursor__big")
            this.appElement = document.querySelector("#app")
            this.ctx = this.canvas.getContext("2d")
            this.reset()
            window.addEventListener("resize", this.reset)
            this.appElement.addEventListener("mousemove", this.mousemove)
        },
        mousemove (event) {
            this.mx = event.pageX + 1
            this.my = event.pageY + 1
        },
        reset () {
            this.simplex = new SimplexNoise()
            this.ticker = 0
            this.w = this.canvas.width = this.appElement.offsetWidth
            this.h = this.canvas.height = this.appElement.offsetHeight
            this.m = Math.min(this.w, this.h)
        },
        draw () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            requestAnimationFrame(this.draw)
            let now = Date.now()
            let delta = (now - this.then) / 1000;
            this.ticker += delta
            this.then = now
            
            this.ctx.globalCompositeOperation = "destination-over"
            this.drawCircle(80, "blue", 14, 0)
            this.drawCircle(80, "rgba(255,0,0,0.4)", 16, 1)
            this.drawCircle(80, "rgba(0,0,255,0.3)", 18, 2)
        },
        drawCircle (r, colour, latency, nb) {
            this.dx[nb] = this.mx - this.xPos[nb]
            this.dy[nb] = this.my - this.yPos[nb]
            this.xPos[nb] += (this.dx[nb] / latency)
            this.yPos[nb] += (this.dy[nb] / latency)

            this.ctx.beginPath()
            let point, x, y
            let deltaAngle = Math.PI * 2 / 400

            for(let angle = 0; angle < Math.PI * 2; angle += deltaAngle) {
                point = this.calcPoint(angle, r, nb)
                x = point[0]
                y = point[1]
                this.ctx.lineTo(x, y)
            }
            this.ctx.strokeStyle = colour
            this.ctx.stroke()
            this.ctx.fillStyle = colour
            this.ctx.fill()    
            this.ctx.closePath()
        },
        calcPoint (angle, r, nb) {
            let noiseFactor = 10
            let zoom = 250
            
            let x = Math.cos(angle) * r + this.xPos[nb]
            let y = Math.sin(angle) * r + this.yPos[nb]
            let n = (this.simplex.noise3D(x / zoom, y / zoom, this.ticker)) * noiseFactor
            x = Math.cos(angle) * (r + n) + this.xPos[nb]
            y = Math.sin(angle) * (r + n) + this.yPos[nb]
            return [x, y]
        }
    }
}
</script>

<style lang="stylus">
.cursor
  user-select none

  &__small,
  &__big
    position absolute
    top 0
    left 0
    transform translate3d(0,0,0)
  &__big
    z-index 1
   
  &__small 
    background #000
    width 16px
    height 16px
    border-radius 50%
    z-index 1000

</style>
