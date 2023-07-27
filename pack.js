;(async function () {
    function loadJs(url, module = false) {
        return new Promise((resolve, reject) => {
            const scriptRef = document.createElement('script')
            scriptRef.src = url
            if (module) {
                scriptRef.type = 'module'
            }
            scriptRef.addEventListener('load', (ev) => {
                resolve(ev)
            })
            scriptRef.addEventListener('error', (err) => {
                reject(err)
            })
            document.body.appendChild(scriptRef)
        })
    }

    await Promise.all([
        loadJs('https://unpkg.com/vue@3.3.4/dist/vue.global.prod.js'),
        loadJs('https://unpkg.com/@emotion/css@11.11.2/dist/emotion-css.umd.min.js'),
    ])
})();