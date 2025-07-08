export async function getAnnounce() {
    const rep = await fetch('/data/annonces.json')
    if(!rep) throw new Error('Erreur lors du chargement des annonces')
        return rep.json();
}