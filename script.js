
function trouverDateSelonNombreJoursRestants(nombreJoursRestants){
    const dateActuelle = Date.now();
    let nombreSecondeRestantes = nombreJoursRestants * (24*60*60);
    let nombreJoursRestantsEnMillisecondes = nombreSecondeRestantes * 1000;
    let dateFinDroits = new Date(nombreJoursRestantsEnMillisecondes + dateActuelle)
    console.log(dateFinDroits.toLocaleDateString("fr-FR", {weekday : "long", year : "numeric", month : "long", day : "numeric" }))
    document.getElementById('p1').innerHTML = dateFinDroits.toLocaleDateString("fr-FR", {weekday : "long", year : "numeric", month : "long", day : "numeric" })
}
//trouverDateSelonNombreJoursRestants((nombre))

const button = document.getElementById('button-addon2')
button.addEventListener('click', () => {
  let nombre = document.getElementById('nombre')
  nombre = nombre.value
  trouverDateSelonNombreJoursRestants((nombre))
})