class KarakterGame {
    constructor(nama) {
        this.nama = nama;
    }

    serang() {
        console.log(`${this.nama} melakukan serangan dasar.`);
    }
}

class Ksatria extends KarakterGame {
    serang() {
        console.log(`⚔️ ${this.nama} menebas musuh dengan pedang!`);
    }
}

class Penyihir extends KarakterGame {
    serang() {
        console.log(`🔥 ${this.nama} menembakkan bola api sihir!`);
    }
}

const pahlawan1 = new Ksatria("Arthur");
const pahlawan2 = new Penyihir("Merlin");

pahlawan1.serang();
pahlawan2.serang();