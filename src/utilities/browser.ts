export const __screenHeight = () => {
    return window.innerHeight;
}

export const __isVisible = (el: HTMLElement, offset: number = 0) => {
    if (!el) return false;
    const top = el.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
}