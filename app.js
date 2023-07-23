const pokemons = [
  {
    id: 1,
    name: "Bulbasour",
    genre: "Grass",
    hp: "20",
    attack: "35",
    defence: "40",
    speed: "20",
    img: "assets/img/Bulbasour-1.png",
    // experience: Math.random() * 100,
    color: "126, 216, 118",
  },
  // {
  //   id: 2,
  //   name: "Squirlte",
  //   genre: "Water",
  //   hp: "30",
  //   attack: "20",
  //   defence: "35",
  //   speed: "25",
  //   img: "assets/img/Squirlte-1.png",
  //   // experience: Math.random() * 100,
  //   color: "99, 219, 243",
  // },
  // {
  //   id: 3,
  //   name: "Charmander",
  //   genre: "Fire",
  //   hp: "20",
  //   attack: "15",
  //   defence: "25",
  //   speed: "10",
  //   img: "assets/img/Charmander-1.png",
  //   // experience: Math.random() * 100,
  //   color: "243, 118, 0",
  // },
  // {
  //   id: 4,
  //   name: "Pikachu",
  //   genre: "Electric",
  //   hp: "30",
  //   attack: "40",
  //   defence: "25",
  //   speed: "20",
  //   img: "assets/img/Pikachu-1.png",
  //   // experience: Math.random() * 100,
  //   color: "255, 213, 6",
  // },
];

const body = document.body;
body.innerHTML = pokemons
  .map((pokemon) => {
    return `<div class="card active">
        <div class="avatar">
            <div class="experience">
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <filter id='inset-shadow'>
                        <feOffset dx='1' dy='1' />
                        <feGaussianBlur stdDeviation='1.5' result='offset-blur' />
                        <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse' />
                        <feFlood flood-color='black' flood-opacity='.95' result='color' />
                        <feComposite operator='in' in='color' in2='inverse' result='shadow' />
                        <feComposite operator='over' in='shadow' in2='SourceGraphic' />
                    </filter>
                    <circle cx="10" cy="10" r="9" stroke="rgb(${
                      pokemon.color
                    })" stroke-dasharray="calc(${
      Math.random() * 100
    } * 56.556 / 100) 56.556"></circle>
                </svg>
            </div>
            <div class="avatar-img">
                <img src="${pokemon.img}" alt="">
            </div>
        </div>
        <div class="info">
            <h3 class="name">${pokemon.name}</h3>
            <span class="proffession">${pokemon.genre}</span>
            <div class="abilities">
            <div class="ability">
                <h5 class="ability-name">HP</h5>
                <div class="bar">
                    <div class="bar-fill bar-fill-hp" style="width:${
                      pokemon.hp
                    }%; background-color:rgba(${pokemon.color});"></div>
                </div>
            </div>
            <div class="ability">
                <h5 class="ability-name">Attack</h5>
                <div class="bar">
                    <div class="bar-fill bar-fill-attack" style="width:${
                      pokemon.attack
                    }%; background-color:rgba(${pokemon.color});"></div>
                </div>
            </div>
            <div class="ability">
                <h5 class="ability-name">Defence</h5>
                <div class="bar">
                    <div class="bar-fill bar-fill-defence" style="width:${
                      pokemon.defence
                    }%; background-color:rgba(${pokemon.color});"></div>
                </div>
            </div>
            <div class="ability">
                <h5 class="ability-name">Speed</h5>
                <div class="bar">
                    <div class="bar-fill bar-fill-speed" style="width:${
                      pokemon.speed
                    }%; background-color:rgba(${pokemon.color});"></div>
                </div>
            </div>
        </div>
        </div>
        
    </div>`;
  })
  .join("");
