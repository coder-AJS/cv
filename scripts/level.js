const levelVersion = "60b0739283783da04cb5469dc9e21d496f85262a"
const serverUrl = `https://cdn.jsdelivr.net/gh/coder-ajs/lev@${levelVersion}`

let levelHelpers = [
    "css",
    "reactive",
    "resolver",
    "viewPort"
]

export const init = async () => {
    let loader = serverUrl + "/runtime/loader.js"
    loader = await import(loader)

    return {
        helper: await loader.get({ mode: "helpers", items: levelHelpers })
    }
}
