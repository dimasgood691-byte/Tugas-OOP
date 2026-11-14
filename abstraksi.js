class KasirToko {
    constructor(namaBarang, hargaSatuan, jumlahBeli) {
        this.namaBarang = namaBarang;
        this.hargaSatuan = hargaSatuan;
        this.jumlahBeli = jumlahBeli;
    }

    #hitungPajak(subtotal) {
        return subtotal * 0.11;
    }

    #hitungDiskon(subtotal) {
        return subtotal >= 100000 ? 15000 : 0;
    }

    cetakTotalBayar() {
        const subtotal = this.hargaSatuan * this.jumlahBeli;
        const pajak = this.#hitungPajak(subtotal);
        const diskon = this.#hitungDiskon(subtotal);
        const totalAkhir = subtotal + pajak - diskon;

        return `Barang: ${this.namaBarang} | Total Bersih (termasuk pajak & diskon): Rp${totalAkhir}`;
    }
}

const transaksi1 = new KasirToko("Mouse Gaming", 120000, 1);
console.log(transaksi1.cetakTotalBayar());