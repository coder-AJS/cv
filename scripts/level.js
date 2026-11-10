const levelVersion = "7402e6a9c41659d059ab68734e58ef26b36c0ce1"
const serverUrl = `https://cdn.jsdelivr.net/gh/coder-ajs/lev@${levelVersion}`

let levelHelpers = [
    "resolve",
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
