import './recherche.html';

Template.recherche.events ({
    'click #go': function(event) {
        event.preventDefault();
        const input1 = document.getElementById("inputTexte");
        const leP = document.getElementById("zoneReponse");
        const contenu = input1.value;

        if (contenu == "") {
            leP.innerHTML = "Veuillez recherchez quelque chose";
  
          } else if (contenu == "bras" | contenu == "dos" | contenu == "abdominaux"
                    | contenu == "épaules" | contenu == "haut du corps" | contenu == "haut"
                    | contenu == "Bras" | contenu == "Dos" | contenu == "Abdominaux"
                    | contenu == "Epaules" | contenu == "Haut du corps" | contenu == "Haut"
                    | contenu == "BRAS" | contenu == "DOS" | contenu == "ABDOMINAUX"
                    | contenu == "EPAULES" | contenu == "HAUT DU CORPS" | contenu == "HAUT") {
              FlowRouter.go('exercicesHaut');
              leP.innerHTML = "";
  
          } else if (contenu == "jambe" | contenu == "jambes" | contenu == "cuisses" 
                    |  contenu == "cuisse" | contenu == "mollet" | contenu == "mollets" 
                    | contenu == "bas du corps" | contenu == "bas"
                    | contenu == "Jambe" | contenu == "Jambes" | contenu == "Cuisses" 
                    |  contenu == "Cuisse" | contenu == "Mollet" | contenu == "Mollets" 
                    | contenu == "Bas du corps" | contenu == "Bas"
                    | contenu == "JAMBE" | contenu == "JAMBES" | contenu == "CUISSES" 
                    |  contenu == "CUISSE" | contenu == "MOLLET" | contenu == "MOLLETS" 
                    | contenu == "BAS DU CORPS" | contenu == "BAS") {
              FlowRouter.go('exercicesBas');
              leP.innerHTML = "";
  
          } else if (contenu == "entrainement" | contenu == "entrainements" | contenu == "exercice" 
                    |  contenu == "exercices" | contenu == "sport" | contenu == "muscles"
                    | contenu == "Entrainement" | contenu == "Entrainements" | contenu == "Exercice" 
                    |  contenu == "Exercices" | contenu == "Sport" | contenu == "Muscles"
                    | contenu == "ENTRAINEMENT" | contenu == "ENTRAINEMENTS" | contenu == "EXERCICE" 
                    |  contenu == "EXERCICES" | contenu == "SPORT" | contenu == "MUSCLES") {
              FlowRouter.go('entrainements');
              leP.innerHTML = "";
          } else if (contenu == "tout le corps" | contenu == "muscles corps" | contenu == "tous les muscles" 
                    |  contenu == "tous muscles" |  contenu == "tout" |  contenu == "tous" ) {
              FlowRouter.go('exercicesTout');
              leP.innerHTML = "";
  
          } else if (contenu == "tout le corps" | contenu == "muscles corps" | contenu == "tous les muscles" 
                    |  contenu == "tous muscles" |  contenu == "tout" |  contenu == "tous"
                    | contenu == "Tout le corps" | contenu == "Muscles corps" | contenu == "Tous les muscles" 
                    |  contenu == "Tous muscles" |  contenu == "Tout" |  contenu == "Tous"
                    | contenu == "TOUT LE CORPS" | contenu == "MUSCLES CORPS" | contenu == "TOUS LES MUSCLES" 
                    |  contenu == "TOUS MUSCLES" |  contenu == "TOUT" |  contenu == "TOUS" ) {
              FlowRouter.go('exercicesTout');
  
          } else if (contenu == "carte" | contenu == "lieux sport" | contenu == "lieu sport" 
                    |  contenu == "lieu" | contenu == "endroits sport" | contenu == "endroit sport" 
                    | contenu == "endroit" | contenu == "map" | contenu == "lieux"
                    | contenu == "endroits" 
                    | contenu == "Carte" | contenu == "Lieux sport" | contenu == "Lieu sport" 
                    |  contenu == "Lieu" | contenu == "Endroits sport" | contenu == "Endroit sport" 
                    | contenu == "Endroit" | contenu == "Map" | contenu == "Lieux"
                    | contenu == "Endroits"
                    | contenu == "CARTE" | contenu == "LIEUX SPORT" | contenu == "LIEU SPORT" 
                    |  contenu == "LIEU" | contenu == "ENDROITS SPORT" | contenu == "ENDROIT SPORT" 
                    | contenu == "ENDROIT" | contenu == "MAP" | contenu == "LIEUX"
                    | contenu == "ENDROITS") {
              FlowRouter.go('map');
              leP.innerHTML = "";
  
            } else if (contenu == "profil" | contenu == "Profil" | contenu == "PROFIL" 
                    |  contenu == "SON PROFIL" | contenu == "son profil" | contenu == "Son profil" 
                    | contenu == "mon profil" | contenu == "Mon profil" | contenu == "MON PROFIL"
                    | contenu == "moi" | contenu == "mes infos" | contenu == "Mes infos" | contenu == "Mes informations" 
                    |  contenu == "moi" | contenu == "MOI" | contenu == "Moi" | contenu == "mes informations" | contenu == "MES INFOS" | contenu == "MES INFORMATIONS") {
              FlowRouter.go('profil');
              leP.innerHTML = "";
  
          } else if (contenu == "jumping jacks" | contenu == "jumping jacks" | contenu == "Jumping Jacks" 
                    |  contenu == "Jumping jacks" | contenu == "Jumping jack" | contenu == "JUMPING JACK" 
                    | contenu == "JUMPING JACKS") {
              FlowRouter.go('exercice2');
              leP.innerHTML = "";
  
            } else if (contenu == "corde à sauter" | contenu == "Corde à sauter" | contenu == "CORDE A SAUTER" 
                    |  contenu == "corde a sauter" | contenu == "Corde a sauter") {
              FlowRouter.go('exercice12');
              leP.innerHTML = "";
          
            } else if (contenu == "burpees" | contenu == "burpee" | contenu == "Burpees" 
                    |  contenu == "Burpee" | contenu == "BURPEES" | contenu == "BURPEE") {
              FlowRouter.go('exercice16');
              leP.innerHTML = "";    
     
            } else if (contenu == "chaise" | contenu == "CHAISE" | contenu == "Chaise" 
                    |  contenu == "exercice de la chaise" | contenu == "Exercice de la chaise" | contenu == "exercice chaise" 
                    | contenu == "Exercice chaise" | contenu == "EXERCICE CHAISE" | contenu == "EXERCICE DE LA CHAISE") {
              FlowRouter.go('exercice1');
              leP.innerHTML = "";
         
            } else if (contenu == "fentes" | contenu == "Fentes" | contenu == "FENTES" 
                    |  contenu == "fente" | contenu == "Fente" | contenu == "FENTE" 
                    | contenu == "faire des fentes" | contenu == "Faire des fentes") {
              FlowRouter.go('exercice7');
              leP.innerHTML = "";
  
            } else if (contenu == "squat" | contenu == "Squat" | contenu == "SQUAT" 
                    |  contenu == "squats" | contenu == "Squats" | contenu == "SQUATS" 
                    | contenu == "faire des squats" | contenu == "Faire des squats" | contenu == "FAIRE DES SQUATS"
                    | contenu == "squatter" 
                    | contenu == "Squatter" | contenu == "SQUATTER") {
              FlowRouter.go('exercice8');
              leP.innerHTML = "";
  
            } else if (contenu == "pompe" | contenu == "Pompe" | contenu == "POMPE" 
                    |  contenu == "pompes" | contenu == "Pompes" | contenu == "POMPES" 
                    | contenu == "faire des pompes" | contenu == "Faire des pompes" | contenu == "FAIRE DES POMPES"
                    | contenu == "exercice pompes" 
                    | contenu == "Exercice pompes" | contenu == "EXERCICE POMPES" | contenu == "EXERCICE POMPE" 
                    |  contenu == "Exercice pompe" | contenu == "exercice pompe") {
              FlowRouter.go('exercice10');
              leP.innerHTML = "";
  
            } else if (contenu == "tractions" | contenu == "Tractions" | contenu == "TRACTIONS" 
                    |  contenu == "traction" | contenu == "Traction" | contenu == "TRACTION" 
                    | contenu == "faire des tractions" | contenu == "Faire des tractions" | contenu == "FAIRE DES TRACTIONS"
                    | contenu == "exercice traction" 
                    | contenu == "Exercice traction" | contenu == "EXERCICE TRACTIONS" | contenu == "Exercice tractions" 
                    |  contenu == "exercice tractions" | contenu == "EXERCICE TRACTIONS" | contenu == "faire des tractions" 
                    | contenu == "Faire des tractions" | contenu == "FAIRE DES TRACTIONS") {
              FlowRouter.go('exercice11');
              leP.innerHTML = "";
  
            } else if (contenu == "gainage" | contenu == "Gainage" | contenu == "GAINAGE" 
                    |  contenu == "planche" | contenu == "PLANCHE" | contenu == "Planche" 
                    | contenu == "exercice de gainage" | contenu == "Exercice de gainage" | contenu == "EXERCICE DE GAINAGE"
                    | contenu == "faire la planche" 
                    | contenu == "Faire la planche" | contenu == "FAIRE LA PLANCHE") {
              FlowRouter.go('exercice13');
              leP.innerHTML = "";
  
            } else if (contenu == "dips" | contenu == "Dips" | contenu == "DIPS" ) {
              FlowRouter.go('exercice14');
              leP.innerHTML = "";
  
            } else if (contenu == "circuit training dos" | contenu == "Circuit training dos" | contenu == "CIRCUIT TRAINING DOS" 
                    |  contenu == "circuit training pour le dos" | contenu == "Circuit training pour le dos" | contenu == "CIRCUIT TRAINING POUR LE DOS" 
                    | contenu == "exercices pour le dos" | contenu == "Exercice pour le dos" | contenu == "EXERCICES POUR LE DOS"
                    | contenu == "exercice dos" 
                    | contenu == "Exercice dos" | contenu == "EXERCICE DOS" | contenu == "exercice pour le dos" 
                    |  contenu == "Exercice pour le dos" | contenu == "EXERCICE POUR LE DOS") {
              FlowRouter.go('exercice15');
              leP.innerHTML = "";
  
            } else {
            leP.innerHTML = "Votre recherche n'a rien donné. Veuillez essayer une autre recherche ou vérifiez l'orthographe";
          }
  
          input1.value = "";
    }
})