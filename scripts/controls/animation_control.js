import * as animation from "./../../moveToLevel/animation.js"

export const init = async (helper, base) => {
    const motions = await animation.detect(document.body, helper, base)

    section1_title(motions, helper)
}

const section1_title = async (motions, helper) => {
    console.log(motions.section1_title)
    await motions.section1_title.mod({
        box: motions.section1_title.ref,
        text: motions.section1_title.ref.textContent,
        helper: helper
    })
}