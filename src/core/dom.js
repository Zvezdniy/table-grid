class Dom {
    constructor(selector) {

    }
}

export function $(selector) {
    return new Dom(selector);
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);

    if (classes)
    {
        el.classList.add(classes);
    }

    return el;
}