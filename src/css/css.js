const classNameSet = new Set()

function getRandomClassName() {
    const className = Math.random().toString(36).substring(2)
    if (classNameSet.has(className)) {
        return getRandomClassName()
    }
    classNameSet.add(className)
    return `css-${className}`
}

function injectStyle(cssText) {
    const styleRef = document.createElement('style')
    styleRef.innerHTML = cssText
    document.head.appendChild(styleRef)
}

export default function css(strings, ...keys) {
    const className = getRandomClassName()
    const cssText = strings.map((s, i) => s + (keys[i] ?? '')).join('').replace(/&/g, `.${className}`)
    injectStyle(cssText)
    return className
}
