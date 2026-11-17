import * as animation from "./../../moveToLevel/animation.js"

export const init = async (helper, base) => {
    const animationsPre = await animation.detect(document.body, helper, base)
    console.log(animationsPre)
}

export const section1_title = () => {

}