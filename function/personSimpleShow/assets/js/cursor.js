class Cursor {
    constructor() {
        this.cursor = document.createElement('div')
        this.cursor.className = 'cursor'
        document.body.appendChild(this.cursor)

        this.pos = { curr: null, prev: null }
        this.pt = []

        this.init()
        this.render()
    }

    init() {
        document.addEventListener('mouseover', (e) => {
            if (this.pt.includes(e.target.outerHTML)) {
                this.cursor.classList.add('hover')
            }
        })

        document.addEventListener('mouseout', (e) => {
            if (this.pt.includes(e.target.outerHTML)) {
                this.cursor.classList.remove('hover')
            }
        })

        document.addEventListener('mousemove', (e) => {
            if (this.pos.curr == null) {
                this.move(e.clientX - 8, e.clientY - 8)
            }
            this.pos.curr = { x: e.clientX - 8, y: e.clientY - 8 }
            this.cursor.classList.remove('hidden')
        })

        document.addEventListener('mouseenter', () => {
            this.cursor.classList.remove('hidden')
        })

        document.addEventListener('mouseleave', () => {
            this.cursor.classList.add('hidden')
        })

        document.addEventListener('mousedown', () => {
            this.cursor.classList.add('active')
        })

        document.addEventListener('mouseup', () => {
            this.cursor.classList.remove('active')
        })
    }

    render() {
        if (this.pos.prev) {
            this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15)
            this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15)
            this.move(this.pos.prev.x, this.pos.prev.y)
        } else {
            this.pos.prev = this.pos.curr
        }
        requestAnimationFrame(() => this.render())
    }

    move(x, y) {
        this.cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
}

(() => {
    const CURSOR = new Cursor()
    // 需要重新获取列表时，使用 CURSOR.refresh()
})()
