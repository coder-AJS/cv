const levelVersion = "c834929472e589c22e172a03aa502f6a28ffc7af"
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
