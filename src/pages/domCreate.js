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

class ElementImg extends ElementObj {
    constructor(elType, elClass, elText, elSrc, elAlt) {
        super(elType, elClass, elText);
        this.elSrc = elSrc;
        this.elAlt = elAlt;
    }

    static createDOM(el) {
        const element = super.createDOM(el);
        element.src = el.elSrc;
        element.alt = el.elAlt;
        return element;
    }
}


export { mainNodes, ElementObj, ElementImg };