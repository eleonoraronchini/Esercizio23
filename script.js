class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location; 
    }
isSameAge (userToCompare) {
    return this.age >= userToCompare.age ? `${this.firstName} è più vecchio di ${userToCompare.firstName}` :
    `${this.firstName} è più giovane di ${userToCompare.firstName}`
}
}

const User1 = new User ("Eleonora", "Ronchini", 27, "Riccione");
const User2 = new User ("Rosa", "Caldari", 30, "Pesaro");
const User3 = new User ("Marco", "Morena", 18, "Montescudo");
const User4 = new User ("Alberto", "Fraternali", 29, "Riccione");

console.log (User1.isSameAge(User2));
console.log (User1.isSameAge(User3));
console.log (User1.isSameAge(User4));

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    // Metodo per verificare se due animali appartengono allo stesso padrone
    isSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

// Array per memorizzare gli oggetti Pet creati
let pets = [];

// Funzione per aggiornare la lista degli animali
function updatePetList() {
    const petListDiv = document.getElementById('petList');
    petListDiv.innerHTML = ''; // Pulisce la lista prima di aggiornarla

    // Aggiunge ogni animale nella lista
    for(let i =0; i< pets.length; i++) {
        const petDiv = document.createElement('div');
        petDiv.classList.add('pet-item');
        petDiv.innerHTML = `
            <strong>Nome Animale:</strong> ${pets[i].petName}<br>
            <strong>Nome Padrone:</strong> ${pets[i].ownerName}<br>
            <strong>Specie:</strong> ${pets[i].species}<br>
            <strong>Razza:</strong> ${pets[i].breed}<br>
        `;
        petListDiv.appendChild(petDiv);
    };
}

// Gestione dell'invio del form
document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio del form (rinfrescamento della pagina)

    // Raccogli i dati dal form
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    // Crea una nuova istanza della classe Pet
    const newPet = new Pet(petName, ownerName, species, breed);

    // Aggiungi l'animale all'array di pets
    pets.push(newPet);

    // Aggiorna la lista visibile degli animali
    updatePetList();

    // Pulisce il form
    document.getElementById('petForm').reset();
});



