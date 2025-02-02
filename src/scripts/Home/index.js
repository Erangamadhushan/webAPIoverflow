import {apicontent} from '../Data/content.js';
window.addEventListener("DOMContentLoaded", () => {
    renderPageContent(apicontent);
    renderIntroContent();
});

function renderIntroContent() {
    const introContainer = document.querySelector(".introContainer");
    let introContent = `
        <div class="my-10">
            <h1 class="text-[2em] text-amber-400 text-center md:text-justify my-10">Exploring Browser Web APIs: Your Gateway to Powerful Web Features<h1>
            <p class="text-amber-400 text-lg text-center md:text-justify">Ever wondered how websites remember your preferences, check your battery status, or know your location? The answer lies in Browser Web APIs - powerful tools built right into your web browser that give websites amazing capabilities.</p>
        </div>
        <div class="my-10">
            <h1 class="text-[2em] text-amber-400 text-center md:text-justify my-10">What are Browser Web APIs?</h1>
            <p class="text-amber-400 text-lg text-center md:text-justify">Browser Web APIs (also called Web APIs or DOM APIs) are built-in features in modern web browsers that allow websites to interact with your device, store data, and access browser features. Think of them as special powers that transform simple websites into powerful applications.</p>
        </div>
        <div class="my-10 w-[90%] mx-auto" data-aos="fade-up" data-aos-duration="1000">
            <h1 class="text-[2em] text-amber-400 text-center md:text-justify my-10">Why Learn Browser Web APIs?</h1>

            <h3 class="text-[1.5em] py-3 text-white text-center md:text-justify" data-aos="fade-left" data-aos-duration="1000">Enhanced User Experience:</h3>
            <p class="text-amber-400 text-lg text-center md:text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Create websites that work offline, remember user preferences, and adapt to device conditions</p>

            <h3 class="text-[1.5em] py-3 text-white text-center md:text-justify" data-aos="fade-left" data-aos-duration="1000">Device Integration:</h3>
            <p class="text-amber-400 text-lg text-center md:text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Access device features like camera, battery status, and geolocation.</p>

            <h3 class="text-[1.5em] py-3 text-white text-center md:text-justify" data-aos="fade-left" data-aos-duration="1000">Better Performance: </h3>
            <p class="text-amber-400 text-lg text-center md:text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Optimize your web applications with efficient storage and caching</p>

            <h3 class="text-[1.5em] py-3 text-white text-center md:text-justify" data-aos="fade-left" data-aos-duration="1000">Modern Web Development: </h3>
            <p class="text-amber-400 text-lg text-center md:text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Build professional-grade web applications using standard browser features</p>
        </div>
        <div>
            <h1 class="text-[2em] text-amber-400 text-center  my-5">Common Browser APIs You'll Use</h1>
        </div>

    `;
    introContainer.innerHTML = introContent;
}

function renderPageContent(apicontents) {
    
    const apiContentContainer = document.querySelector('.apiContentContainer');
    apiContentContainer.innerHTML = '';
    let apiContent = " ";
    //console.log(apicontents);
    apicontents.forEach((apicontent,$index) => {
        console.log(apicontent.title);
        apiContent += `
            <div class="border border-amber-400 p-10 my-[20px]  hover:translate-y-[-10px]" data-aos="fade-up" data-aos-duration="1000" >
                <h2 class="text-white text-[1.5em] font-bold text-center py-5">${apicontent.title}</h2>
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
});
