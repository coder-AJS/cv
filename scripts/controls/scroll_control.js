import { config } from "./../config.js"

export const init = (reactives, helper) => {
    helper.viewPort.blockScroll(document.body, true)
    const scrollLimit = getScrollLimits(helper)

    window.addEventListener("wheel", (e) => {
        const distance = Math.sign(e.deltaY) === 1
            ? config.wheelStep
            : -config.wheelStep
        updateReactive(reactives, distance, scrollLimit)
    })
}

const updateReactive = (reactives, distance, scrollLimit) => {
    console.log(distance)
    let nextStep = distance
    const calculedStep = reactives.viewPort.dynamicScroll + distance
    if (calculedStep < 0 || calculedStep > scrollLimit) nextStep = 0
    reactives.viewPort.dynamicScroll += nextStep
}

const getScrollLimits = (helper) => {
    const wellcomeHeight = parseFloat(helper.css.getVar("wellcomeHeight"))
    const scrollHeight = parseFloat(helper.css.getVar("scrollHeight"))
    const footerHeight = parseFloat(helper.css.getVar("footerHeight"))
    return (wellcomeHeight + scrollHeight + footerHeight)
}

export const moveLayer = (helper, v) => { helper.css.setVar("scrollPos", v + "vh") }