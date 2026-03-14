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


export { createAboutPage };