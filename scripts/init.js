const isLocal = window.location.hostname === "localhost" || "127.0.0.1"
const base = isLocal ? window.location.origin : window.location.origin + "/cv"

const alertBase = () => { console.info("local mode") }

const controls = {
    animation: base + "/scripts/controls/animation_control.js",
    reactives: base + "/scripts/controls/reactives_control.js",
    scroll: base + "/scripts/controls/scroll_control.js"
}

const controlInit = (controls, helper) => {
    /* prepare */
    controls.animation.init()
    const reactives = controls.reactives.init(helper)
    controls.scroll.init(reactives, helper)
}

const init = async () => {
    base === "" && alertBase()

    let level = await import(base + "/scripts/level.js")
    level = await level.init()

    await level.helper.resolver.paths(controls)
    controlInit(controls, level.helper)
}

init()