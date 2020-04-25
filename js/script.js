class Character {
    constructor(id,name,energy){
        this.id = id;
        this.name = name;
        this.energy = energy;
    }

    // display()
    display = function() {
        // console.log(`${this.name} ${this.energy}`)
        // Display on HTML
        document.getElementById("info-" + this.id).innerHTML = `
        <p>
            <b>Name:</b>${this.name} <br>
            <b>Energy:</b>${this.energy}
        </p>
        `;
    }
    // attack()
    attack = function(opponent) {
        let newEnergy = opponent.energy - 20;
        opponent.energy = newEnergy;
        opponent.display();
        console.log(`${opponent.name} ${opponent.energy}`);
    }
}

const c1 = new Character('c1','Bowser',100);
const c2 = new Character('c2','Mario',100);

c1.display();
c2.display();
