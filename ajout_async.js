const fs = require('fs').promises; // L'utilisation de '.promises' indique que la version du module avec des méthodes basées sur des promesses est utilisée, permettant une gestion asynchrone des opérations de système de fichiers avec le modèle async/await ou les promesses.


async function ajouterLignes(contenu) { // Fonction qui sert de "constructeur" pour ajouter du contenu dans mon fichier txt pour ensuite l'appeler dans mon main.js et lui âsser en paramètre le contenu que je désire tant que ça correspond à une string

    try {
        if (typeof contenu !== 'string') { // Vérifier si le contenu à ajouter est une chaîne de caractères
            throw new Error('\n Le contenu doit être une chaîne de caractères. \n'); // Si ce n'est pas le cas, indiquer un message d'erreur
        }
        await fs.appendFile('async.txt', contenu, 'utf8'); // Sinon, il continu la lecture du code si le contenu correspond à une chaine de caractères - Ajouter le contenu dans le fichier ('async.txt') grace à la méthode appendFile de FS
        console.log('Contenu ajouté avec succès. \n'); // Si le contenu est ajouté avec succès, indiquer un message 
    } catch (err) { //L'utilisation de err.message dans les messages d'erreur permet d'afficher uniquement le message d'erreur, fournissant ainsi des informations plus précises sur la nature de l'erreur.
        console.error(`Erreur lors de l'ajout de contenu : \n `, err.message);
    }
}

module.exports = ajouterLignes; // J'exporte ma fonction pour pouvoir l'utiliser dans le main.js