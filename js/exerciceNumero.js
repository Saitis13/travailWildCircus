//Javascript***********BR septembre  2018********************
// le client saisie son nom et son prenom et le systeme fait le calcul 
// affiche le resultat
 const btn = document.querySelector('input');
 var Nom="";
 var Prenom="";
 var valeurTotale =0;
 
 

//FONCTIONS   ************

function calculvaleurlettre(lettre){
    // ici on fait le calcul et on retourne le nombre de 1 à 9 
    var valeurLettre =0 ;
   if (lettre=="a" || lettre=="j" || lettre=="s"|| lettre=="à"|| lettre=="ä") {
      valeurLettre = 1; 
   }
   else if (lettre=="b" || lettre=="k" || lettre=="t") {
      valeurLettre = 2; 
   }
   else if (lettre=="c" || lettre=="ç" || lettre=="l" || lettre=="u") {
      valeurLettre = 3; 
   }
   else if (lettre=="d" || lettre=="m" || lettre=="v") {
      valeurLettre = 4; 
   }
   else if (lettre=="e" || lettre=="n" || lettre=="w"|| lettre=="é" ||lettre=="è" ||lettre=="ë") {
      valeurLettre = 5; 
   }
   else if (lettre=="f" || lettre=="o" || lettre=="x") {
      valeurLettre = 6; 
   }
   else if (lettre=="g" || lettre=="p" || lettre=="y") {
      valeurLettre = 7; 
   }
   else if (lettre=="h" || lettre=="q" || lettre=="z") {
      valeurLettre = 8; 
   }
   else if (lettre=="i" || lettre=="r" ) {
      valeurLettre = 9; 
   }
   else  {
       // securité
      valeurLettre = 0; 
   }
   
    return valeurLettre
}
//
function affiche(texte3){
    // ici on fait l'affichage dans l element  p 
    var phrase;
	phrase="Le chiffre est : "+ texte3  ;
	document.getElementById("resultat").innerHTML = phrase; 
	
}

// on calcule pour le nom 
function onCalcule(){
    var valeurTotale=0  ;// celle qui sera affichée 
    var i=0;
    var valeur =0;
    var valeurNomPrenom=0;
    var lettre="";
    var Motadecouper="";
    var texteValeurTotale ="";
    
     Prenom=document.forms["calcul"].elements[0].value;
     // on passe en minuscule pour homogeneiser les données de saisie
     Prenom=Prenom.toLowerCase();
     Motadecouper=Prenom ;
     
    for (i=1;i<= Prenom.length;i++){
        // on decoupe la chaine en lettre 1 par une 
        lettre = Motadecouper.slice(i-1,i);
        //on calcule la valeur
        valeur= valeur + calculvaleurlettre(lettre);
    }
    
    valeurNomPrenom= valeur;
    Nom=document.forms["calcul"].elements[1].value;
    // on passe en minuscule pour homogeneiser les données de saisie
    Nom=Nom.toLowerCase();
    Motadecouper=Nom ;
    valeur =0;
    for(i=1;i<=Nom.length;i++){
        // on decoupe la chaine en lettre 1 par une 
        lettre = Motadecouper.slice(i-1,i);
        //on calcule la valeur
        valeur= valeur + calculvaleurlettre(lettre);
    }
    valeurNomPrenom= valeurNomPrenom + valeur;
    
    // je transforme le chiffre en la somme de ses elements et je renvoie un chiffre
    valeurTotale= additiondeselementsdunombre(valeurNomPrenom);
    // on affiche le resultat dans le paragraphe 
    affiche(valeurTotale); 

}

function additiondeselementsdunombre(valeur){
  // transformation d'un nombre en un chiffre 
  var chiffre=11 ;
 var chaineChiffre="";
 var chaineNombredizaine ="";
 var chaineNombreunite="";
  
  
  if (valeur >10){
      while (chiffre >10 ){
      chiffre =valeur.toString() ;
      chaineNombredizaine =chiffre.charAt(0);
      chaineNombreunite=chiffre.charAt(1);
      
      chiffre =parseInt(chaineNombredizaine)+parseInt(chaineNombreunite);
       valeur= chiffre; 
      }
      }
  
  else {
  chiffre =valeur;
  }
  
  return chiffre
}

function onRemetaZero(){
     // je remets les deux champs à vide 
    var valeurTotale= "";
   
    document.forms["calcul"].elements[0].value ="";
    document.forms["calcul"].elements[1].value ="";
    // je remets le texte a vide
    affiche(valeurTotale);
    
}

