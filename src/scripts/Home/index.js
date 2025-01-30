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
            <div class="my-5 min-h-100" >
                <div class="card" style="min-height:300px;">
                    <h2 class="text-purly text-center pb-2">${ele.title}</h2>
                    <p>${ele.introduction.content}</p>
                    <button type="buton" class="btn btn-purly my-3 text-gray" onclick="findContent()">Find Our More..</button>
                </div>
            </div>
        `;
    });

    root.innerHTML = rootContent;
}