class Kendaraan {
    constructor(merk, kecepatanMaks) {
        this.merk = merk;
        this.kecepatanMaks = kecepatanMaks;
    }

    klakson() {
        console.log(`${this.merk} membunyikan klakson: Tin! Tin!`);
    }
}

class MobilSport extends Kendaraan {
    constructor(merk, kecepatanMaks, punyaTurbo) {
        super(merk, kecepatanMaks);
        this.punyaTurbo = punyaTurbo;
    }

    aktifkanTurbo() {
        if (this.punyaTurbo) {
            console.log(`${this.merk} mengaktifkan Turbo! Melaju di atas ${this.kecepatanMaks} km/jam!`);
        }
    }
}

const ferari = new MobilSport("Ferrari", 320, false);
ferari.klakson();
ferari.aktifkanTurbo();

const motuba = new Kendaraan("Toyota Kijang", 80);
motuba.klakson();