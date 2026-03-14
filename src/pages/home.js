import { mainNodes, ElementObj } from "./domCreate.js";
import background from "../img/background.jpg";



const createHomePage = function createHomePageWithinTheContent() {
    mainNodes.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${background})`;

        
    
};

export { createHomePage };