var nom=  document.forms["nom"];
var bouton= document.getElementById("valider");

bouton.addEventListener("click", function() {
	alert("Nom :"+document.getElementById("nom").value+"\n"+"Prenom : "+document.getElementById("prenom").value+"\n"+"Ville : "+document.getElementById("ville").value);
});