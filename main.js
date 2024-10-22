const addListButton = document.getElementById("addListButton");

function addNewList() {
  const listName = prompt("Entrez le nom de la nouvelle liste :");

  if (listName) {
    const newList = document.createElement("div"); // Crée un nouvel élément <div>
    const listTitle = document.createElement("h2"); // Crée un titre pour la liste
    listTitle.textContent = listName; // Définit le texte du titre

    const ul = document.createElement("ul"); // Crée une balise <ul> pour les éléments de la liste

    newList.appendChild(listTitle); // Ajoute le titre au <div>
    newList.appendChild(ul); // Ajoute la balise <ul> au <div>

    // Ajoute la nouvelle liste au conteneur principal
    document.getElementById("listsContainer").appendChild(newList);
  } else {
    alert("Veuillez entrer un nom valide.");
  }
}
addListButton.addEventListener("click", addNewList);
