const skills = [
    {
        name: 'HTML',
        icon: './images/64x64.png'
    },
    {
        name: 'CSS',
        icon: './images/64x64.png'
    }
]

const skillsElement = document.querySelector('.skills')


for (let i = 0; i < skills.length; i++) {
    let skill = skills[i]
    // template literal ${}
    skillsElement.innerHTML += `
    <figure>
    <img src="${skill.icon}" alt="${skill.name}" >
    <figcaption>${skill.name}</figcaption>
    </figure>
    `
}
const openChat = () => {
    alert("Open chat");
}

let elemDiv = document.createElement("div");
elemDiv.id = "chatButtonId";
let buttonEl = document.createElement("button");
let buttonTextEl = document.createElement("span");
buttonTextEl.innerText = "Chat with us";
buttonEl.className="chat-button";
buttonEl.appendChild(buttonTextEl);
elemDiv.appendChild(buttonEl);
document.body.appendChild(elemDiv);
const chatButton = document.querySelector("chat-button");
chatButton.addEventListener("click", openChat);




//TODO: write function to close chat



// const chatDiv = document.getElementById("chat2");
// chatDiv.appendChild(btn);



