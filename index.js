//buat class terlebih dahulu
class Siswa {
    constructor(namaInput, kelasInput, jurusanInput) {
        this.nama = namaInput;
        this.kelas = kelasInput;
        this.jurusan = jurusanInput;
    }

    //buat method perkenalan
    perkenalan() {
        return `Halo! Nama saya ${this.nama} dari kelas ${this.kelas} ${this.jurusan}.`;
    }
}

//buat object dari class Siswa
const siswa1 = new Siswa("Andi JOMOK", 11, "RPL");
const siswa2 = new Siswa("Asep JOMOK", 12, "RPL");

//menampilkan nama dan perkenalan dari siswa1
console.log(siswa1.nama);
console.log(siswa1.perkenalan());

//menampilkan nama dan perkenalan dari siswa2
console.log(siswa2.nama);
console.log(siswa2.perkenalan());