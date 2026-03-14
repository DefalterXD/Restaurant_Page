import { mainNodes, ElementObj } from "./domCreate.js";
import background from "../img/background.jpg";

const homeElementsData = [];
homeElementsData.push(ElementObj.createDOM(new ElementObj("section", "title__container")));
homeElementsData.push(ElementObj.createDOM(new ElementObj("h2", "greeting", 'Welcome to')));
homeElementsData.push(ElementObj.createDOM(new ElementObj("h1", "restaurant__title", 'Restaurant')));
homeElementsData.push(ElementObj.createDOM(new ElementObj("button", "menu", 'See menu')));

const section = homeElementsData[0];
const mainMenuButton = homeElementsData[3];

const createHomePage = function createHomePageWithinTheContent() {
    mainNodes.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${background})`;

    homeElementsData.forEach((element) => {
        if (element !== section) {
            section.appendChild(element);
        }
    });
        
    mainNodes.content.divContent.appendChild(section);
    
};


export { createHomePage, mainMenuButton};