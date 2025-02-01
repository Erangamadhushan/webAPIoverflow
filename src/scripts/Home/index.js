import {apicontent} from '../Data/content.js';
window.addEventListener("DOMContentLoaded", () => {
    renderPageContent(apicontent);
});

function renderPageContent(apicontents) {
    const apiContentContainer = document.querySelector('.apiContentContainer');
    apiContentContainer.innerHTML = '';
    let apiContent = " ";
    //console.log(apicontents);
    apicontents.forEach((apicontent,$index) => {
        console.log(apicontent.title);
        apiContent += `
            <div class="border border-amber-400 p-10 my-[20px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <h2 class="text-white text-xl text-center py-5">${apicontent.title}</h2>
                <p class="text-white text-lg pb-10">${apicontent.introduction.content}</p>
                <button type="button" class="border border-amber-400 text-amber-400 p-3 rounded-xl cursor-pointer hover:bg-amber-400 hover:text-black" onclick="explorerAPIContent('${apicontent.title}')">Explorer More ..</button>
            </div>
        `
    })
    apiContentContainer.innerHTML = apiContent;
}

document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert("Search Something here ...!");
})