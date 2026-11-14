class RekeningBank {
    #saldo = 0;

    constructor(pemilik, saldoAwal) {
        this.pemilik = pemilik;
        this.#saldo = saldoAwal;
    }

    cekSaldo() {
        return `Saldo ${this.pemilik} saat ini: Rp${this.#saldo}`;
    }

    setorTunai(jumlah) {
        if (jumlah <= 0) {
            console.log("Gagal: Jumlah setoran harus lebih dari 0!");
        } else {
            this.#saldo += jumlah;
            console.log(`Berhasil menyetor Rp${jumlah}`);
        }
    }
}

const akunBudi = new RekeningBank("Budi", 100000);
akunBudi.setorTunai(50000);
console.log(akunBudi.cekSaldo());