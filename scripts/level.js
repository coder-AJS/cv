const levelVersion = "47d4a823b697de4259134818c73b8a61adb84414"
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
