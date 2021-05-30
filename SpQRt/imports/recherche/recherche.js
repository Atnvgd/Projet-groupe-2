import './recherche.html';

Template.recherche.events ({
    'click #go': function(event) {
        event.preventDefault();
        const input1 = document.getElementById("inputTexte");
        const leP = document.getElementById("zoneReponse");
        const contenu = input1.value;
        const Swal = require('sweetalert2')

        if (contenu == "") {
            leP.innerHTML = "Veuillez rechercher quelque chose";
            Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Oops...',
                  text: `Votre recherche est vide.`,
                  showConfirmButton: false,
                  timer: 1400
                })
                
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
                    |  contenu == "tous muscles" |  contenu == "tout" |  contenu == "tous"
                    | contenu == "Tout le corps" | contenu == "Muscles corps" | contenu == "Tous les muscles" 
                    |  contenu == "Tous muscles" |  contenu == "Tout" |  contenu == "Tous"
                    | contenu == "TOUT LE CORPS" | contenu == "MUSCLES CORPS" | contenu == "TOUS LES MUSCLES" 
                    |  contenu == "TOUS MUSCLES" |  contenu == "TOUT" |  contenu == "TOUS" ) {
              FlowRouter.go('exercicesTout');
              leP.innerHTML = "";

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

            } else {
            leP.innerHTML = "Votre recherche n'a rien donné. Veuillez essayer une autre recherche ou vérifiez l'orthographe";
            Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Oops...',
                  text: `Votre recherche n'a rien donné.`,
                  showConfirmButton: false,
                  timer: 1400
                })
          }
  
          input1.value = "";
    }
})