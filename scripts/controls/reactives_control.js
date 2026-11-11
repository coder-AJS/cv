export const init = (helper) => {
    const reactives = {}

    reactives.viewPort = helper.reactive.newReactive()
    reactives.viewPort.add({
        name:  "dynamicScroll",
        value: 0,
        listeners: (v) => {
            console.log(v, "v")
        }
    })

    return reactives
}