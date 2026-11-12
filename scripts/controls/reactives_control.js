import * as scroll from "./scroll_control.js"
import * as wellcome from "./wellcome.js"

export const init = (helper) => {
    const reactives = {}
    /* viewPort */
    reactives.viewPort = helper.reactive.newReactive()

    reactives.viewPort.add({
        name: "dynamicScroll",
        value: 0,
        listeners: (v) => {
            scroll.moveLayer(helper, v)
            scroll.detectSection(v, reactives)
            if (v > 0 && v <= 100) {
/*                 wellcome.setBackSize(helper, v, wellcome_backSize)
 */            }
        }
    })

    reactives.viewPort.add({
        name: "onSection",
        value: "wellcome",
        listeners: (v) => {console.log(v)}
    })

    return reactives
}