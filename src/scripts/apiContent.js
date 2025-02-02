import { pageContent } from "./Data/pageContent.js";
window.addEventListener("DOMContentLoaded", () => {
    renderAPIcontent(pageContent);
});

function renderAPIcontent(apiDetails) {
    console.log(apiDetails[0]);
}