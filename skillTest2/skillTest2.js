let bandInfo = {
    name: 'Lamb of God',
    nationality: 'Norte-Americana',
    genre: 'Groove Metal',
    members: 5,
    formed: 1994,
    split: false,
    albums:[
        {name: 'Burn the Priest',
         release: 1999},
        {name: 'New American Gospel',
         release: 2000},
        {name: 'As the Palaces Burn',
         release: 2003},
        {name: 'Ashes of the Wake',
         release: 2004},
        {name: 'Sacrament',
         release: 2006},
        {name: 'Wrath',
         release: 2009}  
    ], 
}

let para1 = document.getElementById('info')
para1.textContent = `A banda ${bandInfo.nationality} ${bandInfo.name} foi criada em ${bandInfo.formed}, e esta na ativa desde então, pioneiros do ${bandInfo.genre}, seu primeiro album foi ${bandInfo.albums[0].name} de ${bandInfo.albums[0].release}  `;
section.appendChild(para1);


