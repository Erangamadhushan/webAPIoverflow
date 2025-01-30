import {apicontent} from './content.js';

window.addEventListener("DOMContentLoaded", () => {
    renderPageContent(apicontent);
});

function renderPageContent(content) {
    const root = document.querySelector(".root");
    root.innerHTML = " ";
    let rootContent = " ";
    content.forEach((ele) => {
        rootContent += `
            <div class="my-5">
                <div class="card">
                    <h2 class="text-purly text-center">${ele.title}</h2>
                    <p>${ele.introduction.content}</p>
                </div>
            </div>
        `;
    });

    root.innerHTML = rootContent;
}