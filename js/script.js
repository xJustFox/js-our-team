let peoplesTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: '<img src="./imgs/wayne-barnett-founder-ceo.jpg" alt="">'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: '<img src="./imgs/angela-caroll-chief-editor.jpg" alt="">'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: '<img src="./imgs/walter-gordon-office-manager.jpg" alt="">'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: '<img src="./imgs/angela-lopez-social-media-manager.jpg" alt="">'
    },
    {
        name: 'Scott Estrda',
        role: 'Developer',
        img: '<img src="./imgs/scott-estrada-developer.jpg" alt="">'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: '<img src="./imgs/barbara-ramos-graphic-designer.jpg" alt="">'
    } 
]

for (let i = 0; i < peoplesTeam.length; i++) {
    console.log(peoplesTeam[i]);
    let peopleData = peoplesTeam[i];

    let listPeoples = document.getElementById("list-people");
    let col = document.createElement("div");
    col.classList.add("col-4", "p-4", "text-center");

    col.innerHTML = `${peopleData.img} <h3>${peopleData.name}</h3>  <p>${peopleData.role}</p>`;
    listPeoples.appendChild(col);
}