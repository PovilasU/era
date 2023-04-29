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

const openChat = () =>{
    alert("Open chat");
}

for(let i = 0;i<skills.length;i++){
    let skill = skills[i]
    // template literal ${}
    skillsElement.innerHTML += `
        <figure>
            <img src="${skill.icon}" alt="${skill.name}" >
            <figcaption>${skill.name}</figcaption>
        </figure>
    `
}