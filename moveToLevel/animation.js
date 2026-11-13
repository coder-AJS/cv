export const detect = (container) => {
    const animations = Array.from(container.querySelectorAll("[data-animation]"))
    console.log(animations)
}