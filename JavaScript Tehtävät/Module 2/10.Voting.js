'use strict';
let moduuli = "Moduuli ";
let tehtava = "Tehtävä ";
let tehtavananto = `
Write a voting program as described below for small-scale meeting use. (8p)
The program asks for the number of candidates.
Then the program asks for the names of the candidates: 'Name for candidate 1
Store the candidates' names and initial vote count in objects like this:
[
    {
        name: 'ellie',
        votes: 0,
    },
    {
        name: 'frank',
        votes: 0,
    },
    {
        name: 'pamela',
        votes: 0,
    },
]
The program asks for the number of voters.
The program asks each voter in turn who they will vote for. Voter shoud enter candidate name. 
If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
The program announces the name of the winner and the results by printing it to the console:
The winner is pamela with 3 votes.
results:
pamela: 3 votes
frank: 1 votes
ellie: 1 votes
`

let candi_amount = prompt("Anna ehdokkaiden määrä: ")

//Ehdokkaat listaan:
let candidates = [];
  for (let n= 0; n < candi_amount; n++) {
    let name = prompt(`Ehdokkaan ${n+1}. nimi:`)
    let candi = {"name" : name, "votes" : 0};
    candidates.push(candi)

  }



//Äänestäjien määrä
let voter_amount = parseInt(prompt("Äänestäjien määrä: "));

//Äänestys
for (let n = 0; n < voter_amount; n++) {
  let vote = parseInt(prompt(`Anna ehdokkaan numero väliltä: 1-${candi_amount}: `));
  //Ääni lasketaan vain jos parseInt palauttaa numeron:
  if (isNaN(vote) === false )candidates[vote-1].votes += 1;
}

//Järjestetään äänijärjestykseen ja tulostetaan:

candidates.sort((b, a) => a.votes - b.votes);
//Testaukseen: Toimii !
console.log(candidates);

let tuloste = `${candidates[0].name} on voittanut ${candidates[0].votes} äänellä.
Tulokset:
`


//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;