const list = {
    text: {
        appearBlur: "./text.js"
    }
}

export const detect = (container) => {
    const animations = Array.from(container.querySelectorAll("[data-animation]"))
    let prepare = {}

    animations.forEach(item => {
        let error = {}

        if (!item.id) {
            console.error("HELPER ANIMATIONS ERROR: not id in", item)
            return
        }

        const data = item.dataset.animation?.split(".") || null
        if (!data) console.error("HELPER ANIMATIONS ERROR: no data-animation", item)

        const type = list[data?.[0]] ? data[0] : null
        const animation = list[data?.[0]]?.[data?.[1]] ? data[1] : null

        if (!type || !animation) {
            error[item.id] = {}
            error[item.id]["type"] = type
            error[item.id]["animation"] = animation
        } else {
            const reg = prepare[item.id] = {}
            reg["ref"] = item
            reg["type"] = data[0]
            reg["animation"] = data[1]
        }

        if (Object.keys(error).length) console.error("HELPER ANIMATION ERROR:", error)
    })
    return prepare
}