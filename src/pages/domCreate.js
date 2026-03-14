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

const createMenu = function createMenuBasedOnObjectsInfo(menuObj) {
    const ul = document.createElement('ul');
    ul.classList.add('menu');
    
    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('title');
    menuTitle.textContent = menuObj.title;

    const listOfItems = [];
    
    menuObj.menu.forEach((element) => {
        const li = document.createElement('li');
        li.classList.add('food');

        const foodTitleElement = document.createElement('span');
        foodTitleElement.classList.add('food__title');
        foodTitleElement.textContent = element.foodTitle;

        const foodFillElement = document.createElement('div');
        foodFillElement.classList.add('fill');

        const foodPriceElement = document.createElement('span');
        foodPriceElement.classList.add('food__price');
        foodPriceElement.textContent = element.foodPrice;

        li.append(foodTitleElement, foodFillElement, foodPriceElement);

        listOfItems.push(li);
    });

    ul.append(menuTitle, ...listOfItems);

    return ul;
}

const createCard = function createCardForAboutPage(cardObj) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = cardObj.title;

    const listOfItems = [];

    cardObj.info.forEach((element) => {
        const span = document.createElement('span');
        span.classList.add(`${element.class}`);
        span.textContent = element.text;
        listOfItems.push(span);
    });

    cardContainer.append(cardTitle, ...listOfItems);

    return cardContainer;
}

export { mainNodes, ElementObj, ElementImg, createMenu, createCard };