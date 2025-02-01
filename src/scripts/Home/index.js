//import {apicontent} from './content.js';

window.addEventListener("DOMContentLoaded", () => {
    renderPageContent();
});

function renderPageContent() {
    // const root = document.querySelector(".mainContent");
    // //root.innerHTML = " ";
    // let rootContent = `
        
    // `;
    
    root.innerHTML = rootContent;
}

document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert("Search Something here ...!");
})