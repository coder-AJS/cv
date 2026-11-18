const levelVersion = "b2c33ee75098b7cae69ac326abb14a63a88dc331"
const serverUrl = `https://cdn.jsdelivr.net/gh/coder-ajs/lev@${levelVersion}`

let levelHelpers = [
    "css",
    "dom",
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
