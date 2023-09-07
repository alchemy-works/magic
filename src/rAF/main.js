document.addEventListener('DOMContentLoaded', () => {
    const duration = 1000

    const boxRef = document.querySelector('.box')

    let start = undefined
    let down = true

    function step(timestamp) {
        if (start === undefined) {
            start = timestamp
        }
        const elapsed = timestamp - start
        if (down) {
            boxRef.style.top = `${Math.min((elapsed / duration) * 400, 400)}px`
        } else {
            boxRef.style.top = `${Math.max(((duration - elapsed) / duration) * 400, 0)}px`
        }
        if (elapsed < duration) {
            requestAnimationFrame(step)
        } else {
            start = undefined
            down = !down
            requestAnimationFrame(step)
        }
    }

    requestAnimationFrame(step)
})