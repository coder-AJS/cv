import * as scroll from "./scroll_control.js"

export const init = (helper) => {
    const reactives = {}

    reactives.viewPort = helper.reactive.newReactive()
    reactives.viewPort.add({
        name:  "dynamicScroll",
        value: 0,
        listeners: (v) => {
            console.log(v, "v")
            scroll.moveLayer(helper, v)
        }
    })

    return reactives
}