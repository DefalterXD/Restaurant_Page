import "./reset.css";
import "./style.css";
import { mainNodes } from "./pages/domCreate.js";
import { createHomePage } from "./pages/home.js";
import { createMenuPage } from "./pages/menu.js";
import { createAboutPage } from "./pages/about.js";

mainNodes.nav.addEventListener('click', (e) => {
    const headerLink = e.target;

    if (headerLink.tagName !== 'BUTTON') return;

    if (headerLink.className === 'home') {
        mainNodes.content.clear();
        createHomePage();
    } else if (headerLink.className === 'menu') {
        mainNodes.content.clear();
        createMenuPage();
    } else {
        mainNodes.content.clear();
        createAboutPage();
    }
});


createHomePage();