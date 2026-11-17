import * as animation from "./../../moveToLevel/animation.js"

export const init = async (helper, base) => {
    const preAnimations = await animation.detect(document.body, helper, base)
    console.log(preAnimations)

    section1_title()
}

export const section1_title = () => {
    
}