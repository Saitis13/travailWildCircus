function squareDigits(num){
  //may the code be with you
  alert(num);
  var newchaine;
  newchaine="";
  // decomposition du nombre
  var chaine = num+"";
  alert(chaine);
  for (var i=0 ; i<chaine.length; i++)
  {
  // je coupe  la chaine 
  var lettre=chaine[i];
  var nombre=parseInt(lettre);
    // calcul
  nombre=nombre *nombre;
  var newelement=String(nombre);  
  newchaine= newchaine + newelement;
  alert(newchaine);
  }
  return newchaine;

  // sortie du nombre
  
}
var num = 9119;

var result =  squareDigits(num);
alert(result);
result = parseInt(result);



