const story = {
    "introduction": {
        text: "Je wordt wakker in een slecht verlichte kamer. De deur is op slot. Wat ga je doen?",
        image: "assets/images/gesloten-kamer.png",
        choices: [
            { text: "Doorzoek de kamer", next: "searchRoom" },
            { text: "Roep om hulp", next: "callForHelp" }
        ]
    },
    "searchRoom": {
        text: "Je vindt een roestige sleutel onder het bed. Die zou de deur kunnen openen.",
        image: "assets/images/sleutel-gevonden.png",
        choices: [
            { text: "Gebruik de sleutel op de deur", next: "hallway" },
            { text: "Blijf zoeken", next: "keepSearching" }
        ]
    },
    "callForHelp": {
        text: "Je roept om hulp, maar niemand antwoordt. Je voelt een rilling over je rug.",
        image: "assets/images/lege-kamer.png",
        choices: [
            { text: "Doorzoek de kamer", next: "searchRoom" },
            { text: "Wacht bij de deur", next: "waitByDoor" }
        ]
    },
    "waitByDoor": {
        text: "Je wacht urenlang bij de deur. Uiteindelijk hoor je voetstappen, maar het is te laat. De deur gaat open en er verschijnt een schaduwfiguur. Je bent aan je einde gekomen.",
        image: "assets/images/lege-kamer.png",
        choices: [
            { text: "Opnieuw proberen", next: "introduction" }
        ]
    },
    "hallway": {
        text: "De sleutel werkt! Je stapt een amper verlichte gang binnen. Er zijn twee kanten.",
        image: "assets/images/gang.png",
        choices: [
            { text: "Ga naar links", next: "leftPath" },
            { text: "Ga naar rechts", next: "rightPath" }
        ]
    },
    "keepSearching": {
        text: "Je zoekt nog wat verder, maar vindt niets anders interessants. Je hoort vreemde geluiden. De Mansion leeft.",
        image: "assets/images/niets-gevonden.jpg",
        choices: [
            { text: "Gebruik de sleutel op de deur", next: "hallway" },
            { text: "Zit en wacht", next: "gameOver" }
        ]
    },
    "leftPath": {
        text: "Je vindt een trap die omhoog leidt. Je bereikt de zolder. Er is iets vreemds in de hoek.",
        image: "assets/images/zolder.png",
        choices: [
            { text: "Doorzoek de zolder", next: "exploreAttic" },
            { text: "Ga terug naar beneden", next: "hallway" },
            { text: "Klop op de deur in de zolder", next: "knockAtticDoor" }
        ]
    },
    "knockAtticDoor": {
        text: "Je klopt op de zolderdeur. Een stem antwoordt, maar het is een verdraaid gefluister dat je huid opnieuw doet rillen. Je doet de deur open en ziet een spiegel. Je wordt naar binnen getrokken en bent voor altijd verloren.",
        image: "assets/images/spiegel.png",
        choices: [
            { text: "Opnieuw proberen", next: "introduction" }
        ]
    },
    "rightPath": {
        text: "Je stuit op een valluik. Het is op slot, maar er is misschien een manier om het te openen.",
        image: "assets/images/lege-kamer.png",
        choices: [
            { text: "Zoek een sleutel", next: "searchKey" },
            { text: "Ga terug naar de gang", next: "hallway" },
            { text: "Probeer het slot te breken", next: "breakLock" }
        ]
    },
    "breakLock": {
        text: "Je probeert het slot te breken, maar het luik gaat open en er komt een giftig gas vrij. Je stort in, niet in staat ooit nog op te staan.",
        image: "assets/images/vergiftigd.jpg",
        choices: [
            { text: "Opnieuw proberen", next: "introduction" }
        ]
    },
    "exploreAttic": {
        text: "Op zolder vind je een kist. Je opent hem en vindt een vervloekte pop. Zodra je het aanraakt, verlaat je ziel je lichaam.",
        image: "assets/images/pop.png",
        choices: [
            { text: "Opnieuw proberen", next: "introduction" }
        ]
    },
    "searchKey": {
        text: "Je vindt de sleutel verstopt achter een losse steen. Hij past in het luik!",
        image: "assets/images/lege-kamer.png",
        choices: [
            { text: "Open het luik", next: "exploreSecretRoom" },
            { text: "Doorzoek de kamer opnieuw", next: "keepSearching" }
        ]
    },
    "exploreSecretRoom": {
        text: "Je daalt af in een verborgen kamer. Het is donker, maar je hoort gefluister. Opeens verschijnt er een spookachtig figuur en je wordt verzwolgen door de duisternis.",
        image: "assets/images/geest.png",
        choices: [
            { text: "Opnieuw proberen", next: "introduction" }
        ]
    },
    "gameOver": {
        text: "Je bent dood. De Mansion neemt opnieuw een ziel.",
        image: "assets/images/game-over.jpg",
        choices: [
            { text: "Opnieuw proberen", next: "introduction" }
        ]
    }
};
