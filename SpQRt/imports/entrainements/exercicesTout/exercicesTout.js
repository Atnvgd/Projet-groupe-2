import { Exercices } from '../../api/exercices.js';

import './exercicesTout.html';
import '../exercices/exerciceSelection.html';

Template.exercicesTout.helpers({
    exercices: function() {
        return Exercices.find( { type: 'tout' } )
    }
});

Template.exercicesTout.events({
    'click .bouton': function(event) {
        event.preventDefault();
        FlowRouter.go('exercices', { idExercice: this._id })
    },
    'click #ajouter': function(event) {
        event.preventDefault();
        // CODE A EXECUTER TOUT DE SUITE
        /*const test = Exercices.find({}).fetch()
        console.log(test)
        test.forEach(ex => Exercices.remove(ex._id))*/

        const exercices = [
            {
            "titre": "L'exercice de la chaise",
            "muscle": "Les cuisses",
            "difficulte": 2,
            "duree": "entre 30 sec et 1 min",
            "description": "Placez-vous le dos appuyé contre un mur. Veillez à garder vos pieds bien sur le sol. Glissez le long du mur jusqu'à avoir vos cuisses parrallèles au sol. Faites attention d'avoir vos genoux alignés avec vos chevilles. Vous devez avoir la même position que lorsque vous êtes assis sur une chaise. ",
            "image": "https://assets-api.familiprix.com/uploads/uploaded_images/images/d1ba3363-9704-43d9-a6c4-4e614eb92dbf/original_chaise-chair.png?v=63723337125",
            "qrCode": "https://i.imgur.com/6E74bLl.png",
            "type": "bas"
            },
            {
            "titre": "Deux exercices faciles avec des escaliers",
            "muscle": "Les jambes",
            "difficulte": 3,
            "duree": "1 min (ou + selon la forme)",
            "description": "Ici deux exercices faciles vous sont proposés. Il vous faut seulement avoir un escalier. 1er exercice : Monter vos escaliers en marchant ou en courant. L'exercice est plus simple à faire avec un grand escalier, ce qui évitera de devoir descendre et remonter sans cesse les marches. Une fois que vous arriverez ceci sans soucis, vous pouvez augmenter la difficulté en montant deux marches par deux. 2ème exercice : Monter vos escaliers en sautant. Vous pouvez monter les marches en sautant sur vos deux pieds ensemble, ou sur un pied à la fois. ",
            "image": "https://www.wikihow.com/images_en/thumb/6/67/Exercise-Using-Your-Stairs-Step-4.jpg/v4-460px-Exercise-Using-Your-Stairs-Step-4.jpg.webp",
            "qrCode": "https://i.imgur.com/99jjxTb.png",
            "type": "bas"
            },
            {
            "titre": "Un exercice facile avec un muret",
            "muscle": "Les jambes",
            "difficulte": 3,
            "duree": "entre 30 sec et 1 min",
            "description": "Mettez vous face à un petit muret. Sautez pieds joints sur le muret. Puis redescendez du muret toujours en sautant pieds joints. Répétez l'exercice plusieurs fois. ",
            "image": " https://entrainement-sportif.fr/poids-de-corps-sauts.png",
            "qrCode": "https://i.imgur.com/AHdfnxd.png",
            "type": "bas"
            },
            {
            "titre": "L'exercice de fentes",
            "muscle": "Les jambes",
            "difficulte": 2,
            "duree": "1 min",
            "description": "Débutez l'exercice en vous tenant debout, le dos bien droit. Avancez un de vos pieds de sorte à faire un grand pas en avant. Le dos reste droit et l'autre pied reste à sa place. Pliez votre genou de manière à descendre, jusqu'à ce que votre genou qui est resté derrière frôle presque le sol. Attention ! Votre genou à l'avant ne doit pas dépacer verticalement vos orteils. Revenez à votre position de départ en sautant verticalement. Répétez l'exercice plusieurs fois en changeant de jambe d'appui. ",
            "image": "https://entrainement-sportif.fr/poids-de-corps-fentes.gif",
            "qrCode": "https://i.imgur.com/SFUUUCI.png",
            "type": "bas"
            },
            {
            "titre": "Un enchaînement de trois exercices",
            "muscle": "Les jambess",
            "difficulte": 5,
            "duree": "1 min",
            "description": "Placez-vous debout, le dos bien droit et les pieds sur le sol ouverts parallèles à vos épaules. Pliez les genous de sorte à descendre jusqu'à avoir les cuisses parallèles au sol et restez ainsi pendant 10 secondes. Vos genoux ne doivent pas dépasser verticalement vos orteils. Ensuite mettez-vous accroupi et sauter verticalement le plus haut possible. Une fois votre saut effectué, revenez acccroupi. Répétez ce saut 10 fois. Finalement effectuez votre meilleur sprint sur une distance de 10 mètres. Vous pouvez répéter l'enchaînement d'exercices plusieurs fois. ",
            "image": "https://entrainement-sportif.fr/poids-de-corps-saut-sprint.gif",
            "qrCode": "https://i.imgur.com/2ypcjTS.png",
            "type": "bas"
            },
            {
            "titre": "Un exercice avec un banc",
            "muscle": "Les jambes",
            "difficulte": 2,
            "duree": "entre 30 sec et 1 min",
            "description": " Placez-vous face à un banc. Montez un de vos pieds sur le banc. Puis mettez-vous debout sur le banc en levant votre jambe qui était encore au sol. Votre genou de la jambe qui n'est pas en appui sur le banc doit être levé à angle droit. Redescendez du banc toujours en gardant un pied sur le banc. Finalement redescendez ce pied au sol également. Répétez l'exercice plusieurs fois en changeant de pied d'appui. Vos bras accompagnent le mouvement. ",
            "image": "https://www.gofitnessplan.fr/images/exercises/female/step-up-lunge.jpg",
            "qrCode": "https://i.imgur.com/2l8sBsE.png ",
            "type": "bas"
            },
            {
            "titre": "L'exercice des pompes avec des escaliers",
            "muscle": "Le haut du corps et les bras",
            "difficulte": 4,
            "duree": "entre 30 sec et 1 min",
            "description": "Placez-vous face à vos escaliers et mettez vos mains sur la première ou la seconde marche. (Vous pouvez même mettre vos mains sur de plus hautes marches, ce qui facilitera l'exercice.) Gardez vos jambes tendues et votre dos bien droit. Vos mains doivent être écartées à la largeur des épaules. Pliez vos coudes pour descendre en gardant toujours votre dos droit.Restez quelques secondes en bas, puis remontez en tendant vos bras. Répétez l'exercice plusieurs fois. ",
            "image": "https://www.wikihow.com/images_en/thumb/c/ce/Exercise-Using-Your-Stairs-Step-7.jpg/v4-460px-Exercise-Using-Your-Stairs-Step-7.jpg.webp",
            "qrCode": "https://i.imgur.com/VJ31qXI.png",
            "type": "haut"
            },
            {
            "titre": "Un exercice de tractions",
            "muscle": "Les bras et le dos",
            "difficulte": 5,
            "duree": "environ 5 min",
            "description": "Commencez l'exercice en hissant votre menton au niveau de la barre de traction en pliant les coudes. Tenez ainsi pendant 5 secondes avant de redescendre en tendant les bras. Puis remontez directement, le menton à la hauteur de la barre de traction et recommencez l'exercice. Répétez l'exercice plusieurs fois.",
            "image": "https://entrainement-sportif.fr/traction-stato-pliometrique.gif",
            "qrCode": "https://i.imgur.com/JfnxjPo.png",
            "type": "haut"
            },
            {
            "titre": "L'exercice du gainage",
            "muscle": " Les abdominaux et le dos",
            "difficulte": 2,
            "duree": "1 min par planche",
            "description": "Placez vos avant-bras sur le sol. Mettez vos jambes tendues derrière vous. Gardez votre dos bien droit, votre corps doit faire une ligne droite. ",
            "image": "https://www.mobilesport.ch/assets/lbwp-cdn/mobilesport/files/2011/02/L_A1_6.SJ_A_T1.gif",
            "qrCode": "https://i.imgur.com/KNjm3Tt.png ",
            "type": "haut"
            },
            {
            "titre": "L'exercice des dips avec des escaliers",
            "muscle": "Les bras",
            "difficulte": 3,
            "duree": "entre 30 sec et 1 min",
            "description": "Placez-vous de dos à vos escaliers. Posez vos mains sur la deuxième ou la troisième marche des escaliers. Vos mains doivent être écartées à la largeur de vos épaules. Gardez vos jambes tendues devant vous. Tendez vos bras en soulevant vos hanches. Descendez en pliant vos bras jusqu'à former un angle droit avec vos bras. Remontez bras tendus comme au départ. Répétez l'exercice plusieurs fois. ",
            "image": "https://www.wikihow.com/images_en/thumb/0/08/Exercise-Using-Your-Stairs-Step-6.jpg/v4-460px-Exercise-Using-Your-Stairs-Step-6.jpg.webp",
            "qrCode": "https://i.imgur.com/VXSNoei.png ",
            "type": "haut"
            },
            {
            "titre": "Un entraînement circuit training pour le dos",
            "muscle": " Le dos",
            "difficulte": 1,
            "duree": "8 min le tour",
            "description": "Suivez les exercices proposés sur l'image. Effectuez chaque exercice pendant 30 secondes. Entre chaque exercice vous pouvez prendre une pause de 10 secondes. Si vous voulez faire plusieurs séries du circuit à la suite, vous pouvez prendre une pause de 2 minutes entre chaque série. ",
            "image": "https://entrainement-sportif.fr/exercice-dos-circuit-3-p.jpg",
            "qrCode": "https://i.imgur.com/ddx4Cw9.png ",
            "type": "haut"
            },
            {
            "titre": "L'exercice du \"jumping jack\"",
            "muscle": "Les mollets, les cuisses, les épaules, les abdominaux et les lombaires",
            "difficulte": 4,
            "duree": "entre 30 sec et 1 min",
            "description": "Commencez l'exercice en vous tenant droit debout, les pieds fermés et les bras le long du corps. Puis sautez en écartant le jambes et en levant les bras au ciel. Finalement revenez dans la position de départ en sautant. Répétez l'exercice plusieurs fois. ",
            "image": "https://www.triatlonnoticias.com/wp-content/uploads/2020/10/image001.jpg",
            "qrCode": "https://i.imgur.com/o7dPucx.png",
            "type": "tout"
            },
            {
            "titre": "Un entraînement circuit training",
            "muscle": "Une grande partie des muscles du corps",
            "difficulte": 4,
            "duree": "environ 5 min le tour",
            "description": "Suivez les exercices proposés sur l'image. Entre chaque exercice vous pouvez prendre 15 secondes de repos. Si vous voulez faire plusieurs séries du circuit à la suite, vous pouvez prendre une pause de 2 minutes entre chaque série. ",
            "image": "https://frequence-running.com/blog/wp-content/uploads/2020/04/se%CC%81ance-circuit-training.jpg",
            "qrCode": "https://i.imgur.com/Z0i4K0v.png",
            "type": "tout"
            },
            {
            "titre": "Un entraînement circuit training",
            "muscle": "Une grande partie des muscles du corps",
            "difficulte": 4,
            "duree": "7 min 30 le tour",
            "description": "Suivez les exercices proposés sur l'image. Effectuez chaque exercice pendant 30 secondes. Entre chaque exercice vous pouvez prendre une pause de 10 secondes. Si vous voulez faire plusieurs séries du circuit à la suite, vous pouvez prendre une pause de 2 minutes entre chaque série. ",
            "image": "https://www.epsregal.fr/wp-content/uploads/2020/03/eps-continuite-pedagogique.jpg",
            "qrCode": "https://i.imgur.com/HhjBlC0.png ",
            "type": "tout"
            },
            {
            "titre": "L'exercice des burpees",
            "muscle": "Une grande partie des muscles du corps",
            "difficulte": 5,
            "duree": "entre 30 sec et 1 min",
            "description": "Placez-vous debout les pieds légèrement écartés. Descendez en pliant vos genoux (comme pour faire un squat) puis posez vos mains sur le sol. Lancez vos jambes derrière vous et gardez vos bras tendus. Votre corps doit faire une ligne droite. Descendez en pliant vos coudes (comme pour faire une pompe). Puis remontez en tendant le bras. Ensuite ramenez vos pieds sous votre corps. Finalement sautez verticalement les bras tendus vers le ciel. Répétez l'exercice plusieurs fois. ",
            "image": "https://i.pinimg.com/originals/c4/cd/3d/c4cd3de835c9d3df08c6a976f315b5b9.jpg",
            "qrCode": "https://i.imgur.com/iLLVygm.png ",
            "type": "tout"
            },
            {
            "titre": "Un exercice avec une corde à sauter",
            "muscle": "Les mollets, les cuisses, les épaules, les muscles du poignet",
            "difficulte": 5,
            "duree": "entre 5 et 30 min (selon votre forme physique)",
            "description": "Sautez à la corde pendant 5 à 15 minutes d'affilée (en fonction de votre niveau). Vous pouvez sauter sur place, en avançant, sur un pied, sur deux pieds, etc. Vous pouvez compléxifier l'exercice en ajoutant des doubles-sauts ou des sauts croisés-décroisés.Et pour faire monter votre cardio, il suffit d'accélérer la fréquence de vos sauts !",
            "image": "https://www.mobilesport.ch/assets/lbwp-cdn/mobilesport/files/2013/08/L_D2_6.SJ_A_T1.png",
            "qrCode": "https://i.imgur.com/qfHV6Ej.png",
            "type": "tout"
            }
        ]
        
        // Executer ce code
        /*exercices.forEach(ex => {
            Exercices.insert(ex)
        })*/
    }
})



Template.app_body.events({
    'click #exercice2' (event) {
        event.preventDefault();
        FlowRouter.go('exercice2');
    },

    'click #exercice4' (event) {
        event.preventDefault();
        FlowRouter.go('exercice4');
    },

    'click #exercice6' (event) {
        event.preventDefault();
        FlowRouter.go('exercice6');
    },

    'click #exercice12' (event) {
        event.preventDefault();
        FlowRouter.go('exercice12');
    },

    'click #exercice16' (event) {
        event.preventDefault();
        FlowRouter.go('exercice16');
    },
});