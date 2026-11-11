export const setBackSize = (helper, v) => {
    const originBackSize = parseFloat(helper.css.getVar("wellcomeBackSize"))
    const resize = (originBackSize / 100) * (100 - v) + 100
    helper.css.setVar("wellcomeBackSize", resize + "%")
}