import * as scroll from "./scroll_control.js"
import * as wellcome from "./wellcome.js"

export const init = (helper) => {
    const reactives = {}

    reactives.viewPort = helper.reactive.newReactive()
    reactives.viewPort.add({
        name: "dynamicScroll",
        value: 0,
        listeners: (v) => {
            scroll.moveLayer(helper, v)

            if (v > 0 && v <= 100) {
                wellcome.setBackSize(helper, v)
            }
        }
    })

    return reactives
}