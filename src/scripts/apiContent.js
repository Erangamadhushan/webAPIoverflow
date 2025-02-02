import { pageContent } from "./Data/pageContent.js";
window.addEventListener("DOMContentLoaded", () => {
    renderAPIcontent(pageContent);
});

function renderAPIcontent(apiDetails) {
    console.log(apiDetails);

    const apiContentContainer = document.querySelector('.apiContentContainer');
    apiContentContainer.innerHTML = '';
    let apiContent = '';

    apiContent += `
        <div class="text-white">
            <h1 class="text-white text-3xl">${apiDetails[0].title}</h1> 
            <p class="text-white">${apiDetails[0].introduction}</p><br/>
            <h1 class="text-white text-2xl">Usage</h1>

        `;

    apiDetails[0].usage.forEach(usage => {
        apiContent += `
            <h1 class="text-xl text-white ml-10">${usage.title}</h1>
            <p class="text-white ml-20">${usage.introduction}</p>
            <ul class="text-white ml-30 list-disc">
        `;

        usage.content.forEach(content => {
            apiContent += `
                <li>${content}</li>
            `;
        })

        apiContent += '</ul><br/>'
    })

    apiContent += `
        <h1 class="text-white text-2xl">Interfaces</h1>
    `;


    if (apiDetails[0].interface_mode === 1) {
        apiDetails[0].interfaces.forEach(Interface => {
            apiContent += `
                <h1 class="text-xl text-white ml-10">${Interface.title}</h1>
            `;

            Interface.sub_interfaces.forEach(sub_interface => {
                apiContent += `
                    <h2 class="text-lg ml-20 text-white">${sub_interface.title}</h2>
                    <p class="ml-30 text-white">${sub_interface.content}</p><br/>
                `;
            })
        });
    } else {

    }

    apiContent += `
        <h1 class="text-white text-2xl">Requirements</h1>
    `;

    apiDetails[0].requirements.forEach(requirement => {
        apiContent += `
            <h1 class="text-xl text-white ml-10">${requirement.title}</h1>
            <ul class="text-white ml-30 list-disc">
        `;

        requirement.content.forEach(content => {
            apiContent += `
                <li>${content}</li>
            `;
        })

        apiContent += '</ul><br/>'
    })

    apiContent += '</div>'

    apiContentContainer.innerHTML = apiContent;
}