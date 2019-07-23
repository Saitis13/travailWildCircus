function maxNumber(n){
  //your code here
   var chaine = n+"";
   var tab=[];
   var nombrefinal=[];
  for (var i=0;i<chaine.length; i++)
  {
  var nombre = chaine[i];
  tab[i] = parseInt(nombre);
  } 
  tab.sort(compare);
  // creation nouvellechaine
  var newChaine="";
  for( i=0;i<tab.length; i++)
  {
  var ajout= tab[i]+"";
  newChaine= newChaine + ajout;
  }
  // conversion chaine en nombre
  nombrefinal=parseInt(newChaine);
  // alert (nombrefinal);
  return nombrefinal
  }// function fin 
  
  // Pour trier par ordre décroissant, on definira autrement la fonction compare :

 function compare(x, y) {
    return y - x;
  }
  var n=213;
  var result =maxNumber(n);
