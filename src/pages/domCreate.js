const mainNodes = {
    body: document.querySelector('body'),
    nav: document.querySelector('nav'),
    content: {
        divContent: document.querySelector("#content"),
        clear() {
            document.querySelector("#content").textContent = '';
        }
    },
};

class ElementObj {
    constructor(elType, elClass, elText) {
        this.elType = elType;
        this.elClass = elClass;
        this.elText = elText;
    }

    static createDOM(el) {
        const element = document.createElement(`${el.elType}`);
        element.classList.add(`${el.elClass}`);
        element.textContent = el.elText;
        return element;
    }
}


export { mainNodes, ElementObj };