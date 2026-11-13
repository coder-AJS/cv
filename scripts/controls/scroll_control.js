import { config } from "./../config.js"

export const init = (reactives, helper) => {
    /* statics */
    const scrollLimit = getScrollLimits(helper)

    window.addEventListener("wheel", (e) => {
        const distance = Math.sign(e.deltaY) === 1
            ? 100 / config.wheelSteps
            : 100 / -config.wheelSteps 
        updateReactive(reactives, distance, scrollLimit)
    })

    window.addEventListener("resize", () => {
        reactives.viewPort.width = window.innerWidth
    })
}

const updateReactive = (reactives, distance, scrollLimit) => {
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

const sections = [
    { name: "wellcome", ref: document.querySelector("#wellcome-section"), start: 0, end: 100 },
    { name: "section1", ref: document.querySelector("#section1"), start: 100, end: 200 }
]

export const detectSection = (v, reactives) => {
    const detected = sections.find(item => v >= item.start && v < item.end)?.name || "body"
    const lastSection = reactives.viewPort.onSection
    lastSection !== detected && (reactives.viewPort.onSection = detected)
}