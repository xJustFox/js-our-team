let peoplesTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: './imgs/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: './imgs/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: './imgs/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: './imgs/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrda',
        role: 'Developer',
        img: './imgs/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: './imgs/barbara-ramos-graphic-designer.jpg'
    } 
]

for (let i = 0; i < peoplesTeam.length; i++) {
    console.log(peoplesTeam[i]);
    let peopleData = peoplesTeam[i];

    const listPeoples = document.getElementById("list-people");
    let col = document.createElement("div");
    col.classList.add("col-4", "p-4", "text-center");

    col.innerHTML = `<img src="${peopleData.img}" alt=""> <h3>${peopleData.name}</h3>  <p>${peopleData.role}</p>`;
    listPeoples.appendChild(col);
}