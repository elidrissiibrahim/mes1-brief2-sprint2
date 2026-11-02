// const { createElement } = require("react");

// Données de départ : utilisez ce tableau comme source de votre affichage.
let participants = [
  { id: 101, nom: "Salma Bennani", statut: "Inscrit" },
  { id: 102, nom: "Youssef Amrani", statut: "Présent" },
  { id: 103, nom: "Lina Idrissi", statut: "Inscrit" }
];
const section = document.getElementById("liste-participants");
const inputname = document.getElementById("nom");
const btn = document.querySelector("button-primary");

function afficher(){
      section.textContent ="";
  participants.forEach(participant => {

    const liste = document.createElement("li")
          liste.className = "participant";
    const info = document.createElement("div");
          info.classList.add("participant-info");
    const id = document.createElement("span");
          id.textContent= `#${participant.id +1}`;
          id.className("participant-id");
    const div = document.createElement("div");

    const name = document.createElement("h3")
          name.classList.add("participant-name");
          name.textContent= `${participant.nom}`;
    
    const badge = document.createElement("span");
          badge.classList= "badge", "badge-inscrit";
          badge.textContent = "Inscrit";
      
    const actions = document.createElement("div");
          actions.classList.add("participant-actions");

    const btnpresence = document.createElement("button");
          btnpresence.textContent = "Marquer présent" 

    const btnsupprimer = document.createElement("button");
          btnsupprimer.textContent = "Supprimer"
          btnsupprimer.addEventListener("click" , ()=>{
            supprimer(participant.id);
          })


          liste.append(info);
          liste.append(id);
          liste.append(div);
          liste.append(name);
          liste.append(badge);
          actions.append(btnpresence , btnsupprimer);
          liste.append(actions);
          section.append(liste);
  });
}

function Ajouter(event){
event.preventDefault();
  let parti = {
    id : participants.length+1,
    nom : inputname.value ,
    statut : "Inscrit"
  }
  participants.push(parti);
  afficher();
}

function supprimer(id){
    let index = participants.findIndex(participant => participant.id == id)
    if (index != -1){
        participants.splice(index , 1);
        afficher();
    }
}
btn.addEventListener("click" , Ajouter);
afficher();


          // <li class="participant">
          //   <div class="participant-info">
          //     <span class="participant-id">#101</span>
          //     <div>
          //       <h3 class="participant-name">Salma Bennani</h3>
          //       <span class="badge badge-inscrit">Inscrit</span>
          //     </div>
          //   </div>
          //   <div class="participant-actions">
          //     <button
          //       type="button"
          //       class="button button-presence"
          //       aria-label="Marquer Salma Bennani présente"
          //     >
          //       Marquer présent
          //     </button>
          //     <button
          //       type="button"
          //       class="button button-delete"
          //       aria-label="Supprimer Salma Bennani"
          //     >
          //       Supprimer
          //     </button>
          //   </div>
          // </li>













// À réaliser :
// 1. Afficher les participants à partir de ce tableau.
// 2. Ajouter un participant avec un id unique et le statut "Inscrit".
// 3. Changer le statut du participant choisi dans les deux sens.
// 4. Supprimer le participant choisi après confirmation.
// 5. Actualiser l'affichage après chaque action.

// Écrivez votre JavaScript ci-dessous.
