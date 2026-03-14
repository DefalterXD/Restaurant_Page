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


export { mainNodes };