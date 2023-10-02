import {$} from "@core/dom";

export class Excel {
    constructor(selector, options) {
        this.$wrapper = document.querySelector(selector);
        this.components = options.components || [];
    }

    getRoot()
    {
        const $rootElement = $.create('div', 'excel');
        this.components.forEach(Component => {
            const $wrapper = $.create('div', Component.className);
            const component = new Component($wrapper);
            $wrapper.innerHTML = component.toHTML();
            $rootElement.append($wrapper);
        });
        return $rootElement;
    }
    render() {
        this.$wrapper.append(this.getRoot());
    }
}