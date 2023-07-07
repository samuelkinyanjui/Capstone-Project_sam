const speakers = [
  {
    id: 1,
    speakerName: 'SAMUEL KINYAKUI',
    speakerPosition: 'CYBERd Software Developer',
    imgSource: 'assets/speakers/1.jpg',
    description: 'He has Studied Cyber security at East London univesrity collage UK.Studied virus manupulation.Work for Equity bank Africa',
  },
  {
    id: 2,
    speakerName: 'SAMUEL KINYAKUI',
    speakerPosition: 'Database General Manager',
    imgSource: 'assets/speakers/2.jpg',
    description: 'He has Studied Cyber security at East London univesrity collage UK.Studied virus manupulation.Work for Equity bank Africa',
  },
  {
    id: 3,
    speakerName: 'SAMUEL KINYAKUI',
    speakerPosition: 'Full Stack Developer',
    imgSource: 'assets/speakers/3.jpg',
    description: 'He has Studied Cyber security at East London univesrity collage UK.Studied virus manupulation.Work for Equity bank Africa',
  },
  {
    id: 4,
    speakerName: 'SAMUEL KINYAKUI',
    speakerPosition: 'Database and Software Developer',
    imgSource: 'assets/speakers/1.jpg',
    description: 'He has Studied Cyber security at East London univesrity collage UK.Studied virus manupulation.Work for Equity bank Africa',
  },
  {
    id: 5,
    speakerName: 'M. SAMUEL KINYAKUI',
    speakerPosition: 'Database General Manager',
    imgSource: 'assets/speakers/2.jpg',
    description: 'He has Studied Cyber security at East London univesrity collage UK.Studied virus manupulation.Work for Equity bank Africa',
  },
  {
    id: 6,
    speakerName: 'SAMUEL KINYAKUI',
    speakerPosition: 'Full Stack Developer',
    imgSource: 'assets/speakers/3.jpg',
    description: 'He has Studied Cyber security at East London univesrity collage UK.Studied virus manupulation.Work for Equity bank Africa',
  },

];

speakers.forEach((speaker) => {
  const speakerSection = document.getElementById('mainSection');
  const partDiv = document.createElement('div');
  partDiv.className = 'col-md-5';
  partDiv.className = 'speaker-card';
  partDiv.innerHTML = `
<div class="speaker">
        <img src="${speaker.imgSource}" alt="speaker image" class="img-fluid speaker-photo">
    </div> 
    <div class="speaker-info">
        <h1 class="name">${speaker.speakerName}</h1>
        <p class="speaker-job">${speaker.speakerPosition}</p>
        <div class="left-line"></div>
        <p class="speaker-exp">${speaker.description}</p>
    </div>`;

  speakerSection.append(partDiv);
});

function ShowXicon() {
  const iconMenu = document.getElementById('meneIcon');
  const iconX = document.getElementById('Xicon');
  iconX.style.display = 'inline';
  iconMenu.style.display = 'none';
}

ShowXicon();

function removeXiocn() {
  const iconMenu = document.getElementById('meneIcon');
  const iconX = document.getElementById('Xicon');
  iconX.style.display = 'none';
  iconMenu.style.display = 'block';
}
removeXiocn();