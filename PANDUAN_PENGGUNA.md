# PANDUAN LENGKAP PENGELOLAAN WEBSITE FIRST STEP

Dokumen ini adalah panduan teknis yang dirancang khusus untuk pemilik website atau admin (non-programmer) agar dapat mengelola, mengedit konten, dan memperbarui informasi di website First Step secara mandiri.

---

## DAFTAR ISI
1. [Persiapan Awal (Instalasi)](#1-persiapan-awal)
2. [Cara Menjalankan Website](#2-cara-menjalankan-website)
3. [PANDUAN EDIT: Bagian Demi Bagian](#3-panduan-edit-bagian-demi-bagian)
    - [A. Menu Navigasi (Navbar)](#a-menu-navigasi-navbar)
    - [B. Halaman Utama (Hero Section)](#b-halaman-utama-hero-section)
    - [C. Layanan & Harga (Services)](#c-layanan--harga-services)
    - [D. Cara Kerja (How It Works)](#d-cara-kerja-how-it-works)
    - [E. Galeri Foto (Real Results)](#e-galeri-foto-real-results)
    - [F. Daftar Material](#f-daftar-material)
    - [G. Lokasi, Testimoni & Form Booking](#g-lokasi-testimoni--form-booking)
    - [H. Footer (Kontak & Alamat Bawah)](#h-footer-kontak--alamat-bawah)
4. [Panduan Mengganti Gambar](#4-panduan-mengganti-gambar)
5. [Cara Upload ke Internet (Deploy)](#5-cara-upload-ke-internet-deploy)

---

## 1. Persiapan Awal

Anda memerlukan dua aplikasi utama di komputer Anda:

1.  **Node.js** (Mesin untuk menjalankan website)
    *   Download: [https://nodejs.org/](https://nodejs.org/) (Pilih versi **LTS**).
    *   Install seperti biasa (Next sampai selesai).
2.  **Visual Studio Code (VS Code)** (Alat untuk edit teks/kode)
    *   Download: [https://code.visualstudio.com/](https://code.visualstudio.com/)
    *   Install seperti biasa.

---

## 2. Cara Menjalankan Website

Setiap kali Anda ingin melihat atau mengedit website di komputer Anda:

1.  Buka folder proyek **First Step** (klik kanan folder -> *Open with Code*, atau buka VS Code lalu *File > Open Folder*).
2.  Di VS Code, buka **Terminal** (Klik menu di atas: `Terminal` > `New Terminal`).
3.  **Hanya Pertama Kali**: Ketik `npm install` lalu tekan Enter. Tunggu sampai selesai.
4.  **Setiap Mau Edit**: Ketik `npm run dev` lalu tekan Enter.
5.  Akan muncul tulisan `Local: http://localhost:5173/`. Klik link tersebut sambil menahan tombol `Ctrl` di keyboard.
6.  Website akan terbuka di browser. *Biarkan terminal tetap menyala selama Anda mengedit.*

---

## 3. PANDUAN EDIT: Bagian Demi Bagian

Semua file yang akan diedit berada di dalam folder **`src/components/`**.

> **Tips:** Gunakan fitur PENCARIAN (`Ctrl + F`) di dalam file untuk menemukan teks yang ingin diubah dengan cepat.

### A. Menu Navigasi (Navbar)
*   **File**: `src/components/Navbar.tsx`
*   **Apa yang bisa diedit**: Nama menu, Link Logo.
*   **Caranya**:
    *   Cari bagian `const navLinks = [...]`.
    *   Ubah teks di dalam tanda kutip `"label": "Home"`, `"label": "About"`, dsb.
    *   Untuk Logo: Cari `<img src="/FIRST STEP LOGO PNG.png" ... />`. Jika ingin ganti logo, ganti file gambar di folder `public` (lihat Bab 4).

### B. Halaman Utama (Hero Section)
*   **File**: `src/components/Hero.tsx`
*   **Apa yang bisa diedit**: Judul Besar, Teks promo, Tombol CTA.
*   **Caranya**:
    *   **Judul Besar**: Cari teks "Simple", "Care", "for everyday", "Steps". Ubah kata-katanya.
    *   **Teks Kecil**: Cari teks "Because every great journey begins with a First Step."
    *   **Review/Bintang**: Cari teks "4.9 / 399 Review" untuk update angka rating.
    *   **Testimoni Kecil**: Cari teks "Comfort, Style, Versatility, Quality" atau ulasan di bawahnya.

### C. Layanan & Harga (Services)
*   **File**: `src/components/Services.tsx`
*   **Apa yang bisa diedit**: Gambar Pricelist.
*   **Caranya**:
    *   Halaman ini menampilkan gambar **Pricelist**.
    *   Cari kode: `src="/Pricelist.jpeg"`.
    *   Untuk mengupdate harga, Anda cukup mengganti file gambar `Pricelist.jpeg` di folder `public` dengan gambar pricelist yang baru (pastikan nama file SAMA PERSIS).

### D. Cara Kerja (How It Works)
*   **File**: `src/components/HowItWorks.tsx`
*   **Apa yang bisa diedit**: Langkah-langkah, Nomor WhatsApp, Alamat.
*   **Caranya**:
    *   Cari bagian `const steps = [...]`.
    *   Di situ ada daftar langkah (Step 1, Step 2, dst).
    *   **PENTING**: Di bagian teks deskripsi, ada nomor WhatsApp. Cari `href="https://wa.me/628..."` dan ubah angkanya jika nomor berubah. Ubah juga tampilan nomor yang terlihat di layar.
    *   Ubah alamat drop-off di bagian deskripsi Step 1.

### E. Galeri Foto (Real Results)
*   **File**: `src/components/Gallery.tsx`
*   **Apa yang bisa diedit**: Foto Sebelum/Sesudah.
*   **Caranya**:
    *   Lihat bagian paling atas file (baris `import`).
    *   Contoh: `import sneakerDirty from "@/assets/sneaker-dirty.jpg";`
    *   Ganti nama file gambar sesuai file baru Anda yang sudah dimasukkan ke folder `src/assets`.

### F. Daftar Material
*   **File**: `src/components/Materials.tsx`
*   **Apa yang bisa diedit**: Nama bahan sepatu, Gambar background bahan.
*   **Caranya**:
    *   Cari `const materials = [...]`.
    *   Anda bisa mengubah `name` (misal: "SUEDE") atau mengganti gambarnya di bagian `import` di atas file.

### G. Lokasi, Testimoni & Form Booking
*   **File**: `src/components/Locations.tsx`
*   **Apa yang bisa diedit**: Testimoni user, Form Booking (Nomor WA tujuan).
*   **Caranya**:
    *   **Testimoni**: Cari `const testimonials = [...]`. Ubah nama, role, dan isi teks testimoninya sesuka hati.
    *   **Nomor WA Booking**: Cari baris `const phone = "6281313255076";`. Ganti nomor ini agar pesan booking masuk ke nomor admin yang benar.
    *   **Peta**: Gambar peta diatur di `import mapImage from "@/assets/map.webp";`. Ganti gambar peta di folder assets jika lokasi pindah.

### H. Footer (Kontak & Alamat Bawah)
*   **File**: `src/components/Footer.tsx`
*   **Apa yang bisa diedit**: Link Sosmed, Alamat, Copyright.
*   **Caranya**:
    *   **Link WA & IG**: Cari `const footerLinks = [...]`. Ubah link `https://wa.me/...` atau `instagram.com/...`.
    *   **Alamat**: Cari teks "Jl. Maleer 2..." dan ubah sesuai alamat baru.
    *   **Hak Cipta**: Cari "© 2026 First Step Inc." untuk ganti tahun atau nama.

---

## 4. Panduan Mengganti Gambar

Ada dua tempat penyimpanan gambar di proyek ini. Anda harus tahu bedanya:

### Folder `public/`
*   Isi: Gambar yang tidak butuh diproses (Logo, Pricelist, Favicon).
*   **Cara Ganti**:
    1.  Siapkan file baru.
    2.  Beri nama **SAMA PERSIS** dengan file lama (misal: `Pricelist.jpeg`).
    3.  Timpa file lama di folder `public`. Selesai.

### Folder `src/assets/`
*   Isi: Gambar desain (Background, Foto Sepatu, Ikon Material).
*   **Cara Ganti**:
    1.  Masukkan file gambar baru ke folder `src/assets`.
    2.  Buka file komponen yang menggunakannya (misal `Hero.tsx`).
    3.  Ubah baris `import` di paling atas file agar menunjuk ke nama file baru Anda.
        *   Contoh: Ubah `import img from "@/assets/lama.jpg"` menjadi `import img from "@/assets/baru.jpg"`.

---

## 5. Cara Upload ke Internet (Deploy)

Jika Anda sudah selesai melakukan revisi dan ingin menayangkannya secara online:

1.  Pastikan tidak ada error di terminal.
2.  Matikan server dev (`Ctrl + C` di terminal).
3.  Ketik perintah:
    ```bash
    npm run build
    ```
4.  Tunggu proses selesai. Akan muncul folder baru bernama **`dist`** di daftar folder proyek Anda.
5.  Folder **`dist`** inilah yang berisi website final.
6.  Upload **seluruh isi** folder `dist` tersebut ke penyedia hosting Anda (bisa via File Manager cPanel, atau drag-and-drop di Netlify/Vercel).

---
*Dokumen ini dibuat secara otomatis untuk First Step - 2026*
