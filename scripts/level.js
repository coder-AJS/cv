const levelVersion = "c768cb77baa7d8136ed04a8edfc28f2d7e6161c2"
const serverUrl = `https://cdn.jsdelivr.net/gh/coder-ajs/lev@${levelVersion}`

let levelHelpers = [
    "resolver",
    "reactive",
    "viewPort"
]

export const init = async () => {
    let loader = serverUrl + "/runtime/loader.js"
    loader = await import(loader)

    return {
        helper: await loader.get({mode: "helpers", items: levelHelpers})
    }
}
