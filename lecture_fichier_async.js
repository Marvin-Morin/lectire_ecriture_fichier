const fs = require('fs').promises; // J'importe la méthode /moduke / bibliotèque fs (file system) afin d'acceder au gestionnaire de fichier sur lequel node.js est executé - L'utilisation de '.promises' indique que la version du module avec des méthodes basées sur des promesses est utilisée, permettant une gestion asynchrone des opérations de système de fichiers avec le modèle async/await ou les promesses.
const ajouterLignes = require('./ajout_async');  // J'importe ma fonction ajouterLignes pour pouvoir lutiliser afin d'ajouter du contenu dans ma fonction main


async function main() { // fonction asynchrone afin de s'assurer que chaque ajout de ligne grâce à await est bien terminé avant de passer à la suivante
    try {
        await ajouterLignes(`\n N'hésitez pas à visiter mon portfolio : \n`); // Ajout du contenu dans le fichier - await : je m'assure que chaque ajout de ligne est terminée avant de passer à la suivante
        await ajouterLignes(`\n https://marvin.fronthub.fr \n`); // Ajout du contenu dans le fichier - await : je m'assure que chaque ajout de ligne est terminée avant de passer à la suivante
        console.log("\n Ajout de lignes terminé avec succès.\n"); // message pour vérifier si tout c'est bien déroulé
        await lireFichier('async.txt'); // J'appel ma fonction lireFichier afin d'executer la lecture du fichier txt après les opérations - await : j'attend que les opérations précédentes soient terminés avant de lire mon fichier
    } catch (err) { //L'utilisation de err.message dans les messages d'erreur permet d'afficher uniquement le message d'erreur, fournissant ainsi des informations plus précises sur la nature de l'erreur.
        console.error("\n Erreur lors de l'ajout de lignes : \n ", err.message);
    }
}

main(); // Exécution de la fonction main qui va ajouter du contenu dans mon fichier txt

async function lireFichier(chemin) { // Fonction pour lire ensuite dans la console mon fichier txt
    try { // J'essaye de lire le chemin de mon fichier txt
        const data = await fs.readFile(chemin, 'utf8'); // await : j'attend que la lecture s'execute correctement avant de log le contenu (data)
        console.log("\n Contenu du fichier : \n"); // Si tu se passe bien, j'execute un message 
        console.log(data); // puis je log le contenu (data)
    } catch (err) { // S'il y a des erreurs, je les catch
        console.error("\n Erreur lors de la lecture du fichier : \n", err.message); // puis je les logs - L'utilisation de err.message dans les messages d'erreur permet d'afficher uniquement le message d'erreur, fournissant ainsi des informations plus précises sur la nature de l'erreur.
    }
}