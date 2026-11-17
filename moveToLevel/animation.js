export const detect = async (container, helper, base) => {
    const list = {
        text: {
            appearBlur: base + "/moveToLevel/text.js"
        }
    }

    const animations = Array.from(container.querySelectorAll("[data-animation]"))
    let prepare = {}
    let error = {}

    await helper.resolver.imports(list)

    animations.forEach(item => {

        if (!item.id) {
            console.error("HELPER ANIMATIONS ERROR: not id in", item)
            return
        }

        const data = item.dataset.animation?.split(".") || null
        if (!data) console.error("HELPER ANIMATIONS ERROR: no data-animation", item)

        const type = list[data?.[0]] ? data[0] : null
        const animation = list[data?.[0]] ? data[1] : null


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

    })

    if (Object.keys(error).length) {
        console.error("HELPER ANIMATION ERROR:", error)
        return error
    }
    return prepare
}