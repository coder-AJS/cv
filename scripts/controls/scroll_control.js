import { config } from "./../config.js"

export const init = (reactives, helper) => {
    helper.viewPort.blockScroll(document.body, true)

    window.addEventListener("wheel", (e) => {
        const distance = Math.sign(e.deltaY) === 1
            ? -config.wheelStep
            : config.wheelStep

        reactives.viewPort.dynamicScroll += distance
        console.log(reactives.viewPort.dynamicScroll)
    })
}