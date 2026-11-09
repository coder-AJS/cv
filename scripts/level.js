const levelVersion = "debe54d792df8016f90240e8247926fcd9484c99"
const serverUrl = `https://cdn.jsdelivr.net/gh/coder-ajs/lev@${levelVersion}`

let levelHelpers = [
    "dom"
]

export const init = async () => {
    let loader = serverUrl + "/runtime/loader.js"
    loader = await import(loader)

    return {
        helpers: await loader.get({mode: "helpers", items: levelHelpers})
    }
}
