// Random Selection

function Select(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
}

//  Refresh Function

function Refresh(){
    location.reload();
}

// Character Constructor 

class Character {
    constructor(id,name,energy){
        this.id = id;
        this.name = name;
        this.energy = energy;
    }

    // display function()

    display = function() {
        console.log(`${this.name} ${this.energy}`)

        // Display on HTML

        document.getElementById("info-" + this.id).innerHTML = `
        <p>
            ${this.name}<br>
            Energy:  ${this.energy}
        </p>
        `;
    }

    // attack function()

    attack = function(opponent,item) {
        let newEnergy = opponent.energy - item.iPoints;
        opponent.energy = newEnergy;
        opponent.display();

        // CR challenge: Ex. bowser is attacking mario with item image

        document.getElementById('console').innerHTML = `
            <h2> ${this.name} is attacking ${opponent.name}!
             He used <img class="item" src="${item.iImg}"> for -${item.iPoints} energy!</h2>
        `;
        // display Game Over

        if (newEnergy <= 0 ) {
            document.getElementById('console').innerHTML = `
            <h1>Game Over ${this.name} Wins!</h1>
            `;
            setTimeout(function(){
                alert('Restart?');    
            }, 0);
            setTimeout(function(){
                Refresh();    
            }, 1000);
        }     
    }      
    
}

// Create Character

const c1 = new Character('c1','Bowser',100);
const c2 = new Character('c2','Mario',100);

c1.display();
c2.display();

// Create items constructor/characteristics

class Items {
    constructor(iName,iPoints,iImg) {
        this.iName = iName;
        this.iPoints = iPoints;
        this.iImg = iImg;
    }
}

// Create items

const item1 = new Items("Sword",20,"img/item1.png");
const item2 = new Items("Bowling Ball",10,"img/item2.png");
const item3 = new Items("Banana",5,"img/item3.png");

let items = [item1, item2, item3];




