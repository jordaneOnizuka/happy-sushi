$(document).ready(function(){


 function egal(){

if(champNom==champPrenom){

alert("Distinguer le nom du prenom");
objMess.innerText="distinguer nom et prenom"

}
 }


function mdpMin (){

if(mdpCli<6){

alert("choisissez un mot de passe de plus de 6 lettres svp");


}

}


function birthday(){

if(birthday==dateDuJour){

alert("C'est votre anniversaire!!!! Vous bénéficier d'une remise de -20% sur votre commande sur présentation de votre crate d'identité lors de la livraison");


}

}



function valideForm(){


if(form==valideForm){

alert("Vous avez bien été enregistré votre carte fidélité est activée, et vous bénéficierez de -20% sur la totalité de votre commande pour votre anniversaire ");


}

}






});
