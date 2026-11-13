# 🚀 Tugas Praktikum: 4 Pilar Object-Oriented Programming (OOP) JavaScript

Dokumentasi ini berisi panduan pengerjaan tugas pemrograman berorientasi objek (**OOP**) menggunakan JavaScript Modern (ES6+). Tugas ini dirancang untuk menguji pemahaman konsep **Encapsulation**, **Inheritance**, **Polymorphism**, dan **Abstraction**.

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan tugas ini, peserta didik diharapkan mampu:
1. Membuat kerangka objek menggunakan `class` dan `constructor`.
2. Melindungi data sensitif menggunakan *private property* (`#`) serta mengatur aksesnya melalui *Getter* dan *Setter* (**Encapsulation**).
3. Mewariskan sifat dan perilaku dari *Parent Class* ke *Child Class* menggunakan `extends` dan `super()` (**Inheritance**).
4. Menimpa (*override*) method milik induk agar menghasilkan perilaku yang sesuai dengan masing-masing class anak (**Polymorphism**).
5. Menyembunyikan logika perhitungan yang rumit di dalam *private method* dan menyediakan satu fungsi publik yang mudah digunakan (**Abstraction**).

---

## 📚 Ringkasan Konsep 4 Pilar OOP

| Pilar OOP | Kata Kunci / Sintaks JS | Peran Utama dalam Program |
| :--- | :--- | :--- |
| **1. Encapsulation** | `#namaProperti` | Mengunci properti penting agar tidak bisa diubah sembarangan dari luar class. |
| **2. Inheritance** | `extends`, `super()` | Mewariskan properti dan method dari Class Induk ke Class Anak agar tidak menulis kode berulang. |
| **3. Polymorphism** | *Method Overriding* | Membuat method dengan nama yang sama pada beberapa Class Anak, tetapi menghasilkan output berbeda. |
| **4. Abstraction** | `#namaMethod()` | Menyembunyikan proses perhitungan internal yang rumit dan hanya menampilkan method siap pakai. |

---

## 🛠️ Cara Menjalankan Kode

Kamu dapat mengerjakan dan menguji kode tugas ini menggunakan salah satu dari dua cara berikut:

### Opsi 1: Menggunakan Browser Console
1. Buat satu file `index.html` dan hubungkan dengan file `script.js`.
2. Buka `index.html` di browser, klik kanan, pilih **Inspect**, lalu buka tab **Console**.

### Opsi 2: Menggunakan Node.js (Terminal / VS Code)
1. Simpan kode di dalam file bernama `tugas-oop.js`.
2. Buka terminal di VS Code dan jalankan perintah berikut:
   ```bash
   node tugas-oop.js
   ```

---

## 📝 Bagian A: Latihan Pemanasan (Mandiri per Pilar)

Kerjakan 4 soal singkat di bawah ini untuk memantapkan pemahaman dasar setiap pilar sebelum masuk ke proyek utama:

- [ ] **Soal 1 — Encapsulation (`DompetDigital`):**
  Buat class `DompetDigital` dengan properti publik `namaPemilik` serta properti private `#pin` dan `#saldo`. Buat method `tarikSaldo(inputPin, nominal)` yang menolak transaksi jika `inputPin` tidak cocok dengan `#pin` atau jika `nominal` melebihi `#saldo`.
- [ ] **Soal 2 — Inheritance (`User` & `Admin`):**
  Buat class induk `User` dengan properti `username` dan method `login()`. Buat class anak `Admin` yang mewarisi `User` (`extends`), tambahkan properti `levelAkses`, serta buat method khusus `hapusUser(namaUser)`.
- [ ] **Soal 3 — Polymorphism (`Notifikasi`):**
  Buat class induk `Notifikasi` dengan method `kirim(pesan)`. Buat dua class anak `NotifikasiEmail` dan `NotifikasiWhatsApp` yang menimpa (*override*) method `kirim(pesan)` agar mencetak format pesan yang berbeda sesuai platformnya.
- [ ] **Soal 4 — Abstraction (`MesinKopi`):**
  Buat class `MesinKopi` dengan properti `jenisKopi`. Buat dua method private `#panaskanAir()` dan `#gilingKopi()`, lalu panggil keduanya di dalam satu method publik `buatKopi()`.

---

## 💻 Bagian B: Tugas Proyek Terpadu (Sistem Manajemen Pegawai)

Buatlah sebuah program **Sistem Manajemen Pegawai Startup IT** yang menggabungkan keempat pilar OOP di dalam satu kesatuan alur program.

### Spesifikasi Teknis

#### 1. Class Induk: `Pegawai` (Encapsulation & Abstraction)
* **Properti:**
  * `nama` (Publik)
  * `#gajiPokok` (Private — **Encapsulation**)
* **Method Getter & Setter (Encapsulation):**
  * `lihatGajiPokok()`: Mengembalikan nilai `#gajiPokok` saat ini.
  * `ubahGajiPokok(nominalBaru)`: Memvalidasi input. Jika $\text{nominalBaru} \le 0$, cetak pesan `"Gagal: Gaji tidak valid!"`. Jika valid, perbarui nilai `#gajiPokok`.
* **Method Perhitungan Gaji (Abstraction):**
  * `#hitungPotonganPajak()`: Method *private* yang mengembalikan potongan pajak sebesar $5\%$ ($\text{gajiPokok} \times 0.05$).
  * `hitungGajiBersih()`: Method *publik* yang mengembalikan hasil pengurangan `#gajiPokok` dengan `#hitungPotonganPajak()`.
* **Method Umum:**
  * `infoKerja()`: Mengembalikan teks `"${this.nama} sedang bekerja di kantor."`.

#### 2. Class Anak: `Programmer` & `Designer` (Inheritance & Polymorphism)
* **Pewarisan (`extends` & `super`):**
  * `Programmer` mewarisi `Pegawai` dan memiliki properti tambahan `bahasaPemrograman`.
  * `Designer` mewarisi `Pegawai` dan memiliki properti tambahan `toolsDesain`.
* **Perubahan Perilaku (`infoKerja()` — Polymorphism):**
  * Pada `Programmer`, kembalikan: `"👨‍💻 [nama] sedang menulis kode menggunakan [bahasaPemrograman]."`
  * Pada `Designer`, kembalikan: `"🎨 [nama] sedang merancang antarmuka menggunakan [toolsDesain]."`

---

### 🧩 Kerangka Kode (Starter Code)

Salin kode di bawah ini ke dalam file JavaScript kamu, lalu lengkapi bagian yang ditandai dengan komentar `// TODO`:

```javascript
// ==========================================
// 1. CLASS INDUK: Encapsulation & Abstraction
// ==========================================
class Pegawai {
  // TODO: Deklarasikan properti private #gajiPokok

  constructor(nama, gajiPokokAwal) {
    this.nama = nama;
    // TODO: Isi properti #gajiPokok dengan gajiPokokAwal
  }

  // ENCAPSULATION: Getter & Setter dengan validasi
  lihatGajiPokok() {
    // TODO: Kembalikan nilai #gajiPokok
  }

  ubahGajiPokok(nominalBaru) {
    // TODO: Validasi jika nominalBaru <= 0 tampilkan pesan gagal, jika aman ubah #gajiPokok
  }

  // ABSTRACTION: Sembunyikan rumus pajak di method private
  #hitungPotonganPajak() {
    // TODO: Kembalikan 5% dari #gajiPokok (kalikan dengan 0.05)
  }

  hitungGajiBersih() {
    // TODO: Kurangi #gajiPokok dengan hasil dari #hitungPotonganPajak()
  }

  infoKerja() {
    return `${this.nama} sedang bekerja di kantor.`;
  }
}

// ==========================================
// 2. CLASS ANAK 1: Inheritance & Polymorphism
// ==========================================
class Programmer extends Pegawai {
  constructor(nama, gajiPokokAwal, bahasaPemrograman) {
    // TODO: Panggil super() dan simpan properti bahasaPemrograman
  }

  // POLYMORPHISM: Timpa method infoKerja()
  infoKerja() {
    // TODO: Kembalikan teks sesuai spesifikasi Programmer
  }
}

// ==========================================
// 3. CLASS ANAK 2: Inheritance & Polymorphism
// ==========================================
class Designer extends Pegawai {
  constructor(nama, gajiPokokAwal, toolsDesain) {
    // TODO: Panggil super() dan simpan properti toolsDesain
  }

  // POLYMORPHISM: Timpa method infoKerja()
  infoKerja() {
    // TODO: Kembalikan teks sesuai spesifikasi Designer
  }
}

// ==========================================
// PENGUJIAN PROGRAM (JANGAN UBAH BAGIAN INI)
// ==========================================
const dev1 = new Programmer("Andi", 10000000, "JavaScript");
const ui1 = new Designer("Siti", 8000000, "Figma");

console.log(dev1.infoKerja());
console.log(`Gaji Bersih ${dev1.nama}: Rp${dev1.hitungGajiBersih()}`);

console.log(ui1.infoKerja());
ui1.ubahGajiPokok(-5000);   // Harus ditolak karena bernilai negatif
ui1.ubahGajiPokok(9000000); // Berhasil menaikkan gaji pokok
console.log(`Gaji Bersih ${ui1.nama} setelah naik: Rp${ui1.hitungGajiBersih()}`);
```

---

### ✅ Target Output (Expected Output)

Pastikan hasil yang muncul di *console* sama persis dengan output berikut:

```text
👨‍💻 Andi sedang menulis kode menggunakan JavaScript.
Gaji Bersih Andi: Rp9500000
🎨 Siti sedang merancang antarmuka menggunakan Figma.
Gagal: Gaji tidak valid!
Gaji Bersih Siti setelah naik: Rp8550000
```

---

## 📊 Rubrik Penilaian

| Komponen Penilaian | Bobot | Indikator Keberhasilan |
| :--- | :---: | :--- |
| **Encapsulation** | $25\%$ | Properti `#gajiPokok` menggunakan tanda `#` dan validasi pada `ubahGajiPokok()` berfungsi menolak angka $\le 0$. |
| **Inheritance** | $25\%$ | Class `Programmer` dan `Designer` menggunakan `extends Pegawai` serta memanggil `super()` dengan benar. |
| **Polymorphism** | $25\%$ | Method `infoKerja()` pada kedua class anak berhasil menimpa method induk menggunakan *Template Literals* (`` ` ``). |
| **Abstraction** | $25\%$ | Perhitungan pajak dipisahkan ke dalam *private method* `#hitungPotonganPajak()` dan dipanggil di dalam `hitungGajiBersih()`. |