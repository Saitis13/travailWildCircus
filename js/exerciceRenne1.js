//Javascript***********BR Avril 2018********************
// On affiche la date du jour.
// On va calculer  le nb de jours avant Noël
// la detection du passage sur le bouton par   l'event click- 
// affiche le resultat

 const zoneaffiche  = document.querySelector('figcaption');
 const zoneaffiche2 = document.querySelector('p'); 
 const btn = document.querySelector('input');
 var texte="";
 var texte2="";

//FONCTIONS   ************
function madate(){
    var actu = new Date();
    var ladate = actu.getDate();
    var lemois = actu.getMonth();
      //mets le mois en lettre
    switch (lemois) {
        case 0:
            lemois ="janvier"
            break;
        case 1:
            lemois ="février"
            break;
        case 2:
            lemois ="mars"
            break;
        case 3:
            lemois ="avril "
            break;  
        case 4:
            lemois ="mai"
            break;
        case 5:
            lemois ="juin"
            break;
        case 6:
            lemois ="juillet"
            break;
        case 7:
            lemois ="aout"
            break; 
        case 8:
            lemois ="septembre"
            break;
        case 9:
            lemois ="octobre"
            break;
        case 10:
            lemois ="novembre"
            break;   
        case 11:
            lemois ="décembre"
            break;  
        default:
            lemois ="bug"// code
                      }
    var datecomplete = ladate + " " + lemois;
    texte="Aujourd'hui, mon calendrier indique  que nous sommes le " + datecomplete ;
    return texte
}

function calculjouravantNoel(){
    // ici on fait le calcul et on retourne le nb de jours
    var actu = new Date();
    var annee = actu.getFullYear();
    var noel = new Date("25 decembre, " + annee);
    var ladate = actu.getDate();
    var lemois = actu.getMonth();
    var intervalleenjours = Math.floor((noel.getTime() - actu.getTime()) / (1000 * 3600 * 24));
    return intervalleenjours
}

function affiche(texte1,texte2){
    // ici on fait l'affichage dans l element figcaption et p   
	zoneaffiche.innerHTML = texte1;
    zoneaffiche2.innerHTML = texte2;
}

// on calcule la date via la fonction 
texte = madate();
texte2= "";

// on affiche le premier texte dans le figcaption et le second est vide 
affiche(texte,texte2); 

texte= "*";
// on construit le texte2
texte2 = "Alors, il ne reste plus que " + calculjouravantNoel() + " jours avant Noël!";

// met les affichages avec le nouveau texte  "Alors, il ne reste plus que " + intervalleenjours + " jours avant Noël!");
btn.addEventListener('click', function() {affiche(texte, texte2)  } ) ;
// Ne pas oublier ! addEventListener('click', function() { } ) elle prend une fonction 