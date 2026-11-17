const levelVersion = "43298d5d38d2463731f011e46cb175a5ee430f18"
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
