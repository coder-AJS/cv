const onError = () => {
    return console.trace("error in required parametres")
}

const addStyles = () => {
    const textStyle = document.head.appendChild(document.createElement("style"))
    textStyle.classList.add("motion-textStyle")
    textStyle.textContent = `
        .textMotion-charCont {
            width: 100%;
            min-width: 0;
            height: 100%;
            min-height: 0;

            .charBox {
                width: fit-content;
                height: fit-content;
                border: 1px solid green;
            }
        }

        .FCenter { display: flex; align-items: center; justify-content: center; }
    `
}

const addBoxes = (box, text, helper) => {
    if (!document.head.querySelector("motion-textStyle")) addStyles()

    box.textContent = ""
    for (const item of Array.from(text)) {
        const charCont = helper.dom.inject({
            tag: "div",
            parent: box,
            className: "textMotion-charCont FCenter"
        })

        helper.dom.inject({
            tag: "span",
            parent: charCont,
            className: "charBox FCenter",
            content: item === " " ? "\u00A0" : item
        })
    }
    return box.querySelectorAll(".charBox")
}

const frames = async (frames) => { for (let i = frames; i >= 0; i--) { await new Promise(requestAnimationFrame) }; return }

const isNumber = (number) => { return typeof (number) === "number" }

const updateProps = (element, props) => {
    Object.entries(props).forEach(([key, value]) => element.style[key] = value)
}

/* appear blur */
export const appearBlur = async ({
    box = null,
    text = null,
    blur = 100,
    scale = 3,
    transition = 500,
    delay = 200,
    mode = "prepare",

    helper = null
} = {}) => {

    helper.dom.info()
    if (!box || !text || !isNumber(blur) || !isNumber(scale) || !isNumber(transition) || !isNumber(delay)) return onError()

    if (mode === "prepare") {
        const boxes = addBoxes(box, text, helper)
        boxes.forEach(item => updateProps(item, {
            userSelect: "none",
            opacity: 0,
            transition: transition + "ms",
            filter: `blur(${blur}px)`,
            transform: `scale(${scale})`
        }))
        await frames(4)
    }

    if (mode === "init") {
        for (const item of boxes) {
            updateProps(item, { opacity: 1, filter: "blur(0px)", transform: `scale(1)` })
            await new Promise(resolve => setTimeout(resolve, delay))
        }
        await new Promise(resolve => setTimeout(resolve, transition))
    }
    return
}

/* move right */
export const toRigthSeq = async ({
    box = null,
    transition = 500,
    delay = 200
} = {}) => {
    if (!box || !isNumber(transition) || !isNumber(delay)) return onError()

    const charBoxes = Array.from(box.querySelectorAll("span"))
    const boxesWidth = charBoxes.map(item => item.offsetWidth)
    const charsSum = boxesWidth.reduce((acumulador, actual) => acumulador + actual, 0)

    charBoxes.forEach(item => updateProps(item, { transition: transition + "ms", left: "0px", position: "relative" }))
    await frames(4)

    for (let i = charBoxes.length - 1; i >= 0; i--) {
        updateProps(charBoxes[i], { left: `calc(100% - ${charsSum}px)` })
        await new Promise(resolve => setTimeout(resolve, delay))
    }
    await new Promise(resolve => setTimeout(resolve, transition))
    return
}

/* type effect */
export const typeWriter = async ({
    box = null,
    text = null,
    delay = 200
} = {}) => {
    if (!box || typeof text !== "string" || !isNumber(delay)) return onError()

    const boxes = addText(box, text)
    boxes.forEach(item => updateProps(item, { opacity: 0 }))
    await frames(4)

    for (const item of boxes) {
        updateProps(item, { opacity: 1 })
        await new Promise(resolve => setTimeout(resolve, delay))
    }
    return
}