const alertBase = (base) => {
    console.info(base === "" ? "local" : "gitPages")
}

const init = async () => {
    const isLocal = window.location.hostname === "127.0.0.1"
    const base = isLocal ? "" : "/cv"
    alertBase(base)

    let level = await import(base + "/scripts/level.js")
    level = await level.init()
    console.log(level)
}

init()