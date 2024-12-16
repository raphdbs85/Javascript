class Guerrier {
    constructor(nom, hp, attaque, precision) {
        this.nom = nom;
        this.hp = hp;
        this.attaque = attaque;
        this.precision = precision;
    }
    

    attaquer(adversaire) {
        if (Math.random() < this.precision) {
            adversaire.hp -= this.attaque;
            console.log(this.nom + " attaque " + adversaire.nom + " et lui inflige " + this.attaque + " points de dégâts !");
        } else {
            console.log(this.nom + " attaque " + adversaire.nom + " mais manque sa cible !");
        }
    }

    estVivant() {
        return this.hp > 0;
    }
}


let guerrier1 = new Guerrier("Mirmillon", 40, 10, 0.5);
let guerrier2 = new Guerrier("Rétiaire", 50, 12, 0.4);


console.log("C'est parti !");
while (guerrier1.estVivant() && guerrier2.estVivant()) {
    guerrier1.attaquer(guerrier2);
    if (!guerrier2.estVivant()) break;

    guerrier2.attaquer(guerrier1);
}


if (guerrier1.estVivant()) {
    console.log(guerrier1.nom + " est le vainqueur avec " + guerrier1.hp + " points de vie restants !");
} else if (guerrier2.estVivant()) {
    console.log(guerrier2.nom + " est le vainqueur avec " + guerrier2.hp + " points de vie restants !");
} else {
    console.log("Égalité ! Les deux guerriers sont morts...");
}

