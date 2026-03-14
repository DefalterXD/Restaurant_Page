import { mainNodes, ElementObj, createMenu, ElementImg } from "./domCreate.js";
import mainMenuImg from "../img/main__menu.jpg";
import drinkMenuImg from "../img/drinks__menu.jpg";
import desertMenuImg from "../img/deserts__menu.jpg";


const mainMenuData = {
    title: 'Main Course',
    menu: [{
        foodTitle: 'Steak',
        foodPrice: '$12.20'
    },
    {
        foodTitle: 'Lobster',
        foodPrice: '$20.00'
    },
    {
        foodTitle: 'Fish',
        foodPrice: '$15.50',
    },
    {
        foodTitle: 'Barbecue',
        foodPrice: '$25.00'
    },
    {
        foodTitle: 'Spaghetti',
        foodPrice: '$20.00'
    }],
};

const drinksMenuData = {
    title: 'Drinks',
    menu: [{
        foodTitle: 'Orange Juice',
        foodPrice: '$4.20'
    },
    {
        foodTitle: 'Apple Juice',
        foodPrice: '$4.20'
    },
    {
        foodTitle: 'Lemon-Lime Juice',
        foodPrice: '$4.20',
    },
    {
        foodTitle: 'Mango Juice',
        foodPrice: '$5.50'
    },
    {
        foodTitle: 'Hot Chocolate',
        foodPrice: '$3.00'
    }],
};

const desertsMenuData = {
    title: 'Deserts',
    menu: [{
        foodTitle: 'Cheesecake',
        foodPrice: '$16.00'
    },
    {
        foodTitle: 'Chocolate lava cake',
        foodPrice: '$15.00'
    },
    {
        foodTitle: 'Blueberry Muffin',
        foodPrice: '$10.00',
    },
    {
        foodTitle: 'Banana Nut Muffin',
        foodPrice: '$10.00'
    },
    {
        foodTitle: 'Vanilla Ice Cream',
        foodPrice: '$15.00'
    }],
};

const menuTitle = ElementObj.createDOM(new ElementObj("h1", "menu__title", 'Our menu'));
const menu = ElementObj.createDOM(new ElementObj("section", "menu__container"));

const mainMenuContainer = ElementObj.createDOM(new ElementObj("div", "main__container"));
const mainMenu = createMenu(mainMenuData);
const mainMenuImgElement = ElementImg.createDOM(new ElementImg("img", "menu__img", "", mainMenuImg, 'Main course menu'));



const createMenuPage = function createMenuPageWithinTheContent() {
    mainNodes.body.style.backgroundImage = '';

    
    
}

export { createMenuPage };