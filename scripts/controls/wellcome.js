import { config } from "./../config.js"

export const setBackSize = (helper, v, size) => {
    const step = (size - 1) / (100 / (100 / config.wheelSteps))
    const resize = size - (step * (v / (100 / config.wheelSteps)))
    helper.css.setVar("wellcome_BGsize", resize)
}