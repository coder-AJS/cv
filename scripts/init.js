const isLocal = window.location.hostname === "localhost" || "127.0.0.1"
const base = isLocal ? window.location.origin : window.location.origin + "/cv"

const alertBase = () => { console.info("local mode") }

const controls = {
    reactives: base + "/scripts/controls/reactives_control.js"
}

const controlInit = () => {

}

const init = async () => {
    base === "" && alertBase()

    let level = await import(base + "/scripts/level.js")
    level = await level.init()

    await level.helper.resolve.paths(controls)
    console.log(controls)
}

init()