import { mainNodes, ElementObj, ElementImg, createCard } from "./domCreate.js";
import restaurantImg from "../img/restaurant__preview.jpg";

const workData = {
    title: 'Clock Work',
    info: [
        { text: 'Monday - Saturday', class: 'work__date' },
        { text: '8:00 - 24:00', class: 'work__time'},
    ]
};

const locationData = {
    title: 'Location',
    info: [
        { text: '425 N Washington St, Junction City', class: 'location__desc' },
    ]
};

const contactData = {
    title: 'Contacts',
    info: [
        { text: 'restaurant@company.com', class: 'email__desc' },
        { text: '+1-(100)-100-2534', class: 'tel__desc' },
    ]
};

const aboutTitle = ElementObj.createDOM(new ElementObj("h1", "about__title", 'About'));
const about = ElementObj.createDOM(new ElementObj("section", "about__container"));
const cardsContainer = ElementObj.createDOM(new ElementObj("div", "cards__container"));
const aboutImg = ElementImg.createDOM(new ElementImg("img", "about__img", "", restaurantImg, 'Restaurant preview picture'));

const workContainer = createCard(workData);
const locationContainer = createCard(locationData);
const contactContainer = createCard(contactData);


const createAboutPage = function createAboutPageWithinTheContent() {
    mainNodes.body.style.backgroundImage = '';

    cardsContainer.append(workContainer, locationContainer, contactContainer);
    
    about.append(aboutImg, cardsContainer);
    
    mainNodes.content.divContent.append(aboutTitle, about);
}

export { createAboutPage };