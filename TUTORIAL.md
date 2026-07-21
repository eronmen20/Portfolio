# TUTORIAL LENGKAP PORTFOLIO WEBSITE

## Daftar Isi
1. [Cara Preview / Lihat Perubahan](#1-cara-preview--lihat-perubahan)
2. [Cara Edit Konten (Tanpa Ngoding)](#2-cara-edit-konten-tanpa-ngoding)
3. [Cara Tambah Gambar](#3-cara-tambah-gambar)
4. [Cara Tambah / Hapus Project](#4-cara-tambah--hapus-project)
5. [Cara Tambah / Hapus Sertifikasi](#5-cara-tambah--hapus-sertifikasi)
6. [Cara Tambah Gambar Banyak per Project (Gallery)](#6-cara-tambah-gambar-banyak-per-project-gallery)
7. [Cara Edit CV Download](#7-cara-edit-cv-download)
8. [Cara Deploy ke Vercel (Online)](#8-cara-deploy-ke-vercel-online)

---

## 1. Cara Preview / Lihat Perubahan

### Langkah 1: Buka Terminal di VS Code
- Tekan `` Ctrl + ` `` (backtick) atau menu `Terminal > New Terminal`

### Langkah 2: Masuk ke folder project
```bash
cd portfolio
```

### Langkah 3: Jalankan server
```bash
npm run dev
```

### Langkah 4: Buka browser
- Buka http://localhost:3000

### Langkah 5: Edit & Lihat Perubahan
- Buka file apapun di VS Code (misal `src/data/profile.json`)
- Edit isinya, tekan `Ctrl + S` untuk save
- **LANGSUNG LIAT DI BROWSER** - perubahan muncul otomatis (hot reload)!
- Tidak perlu restart server, tidak perlu refresh manual

### Cara Berhenti Server
- Di terminal, tekan `Ctrl + C`

---

## 2. Cara Edit Konten (Tanpa Ngoding)

Semua konten ada di folder `src/data/`. Cukup edit file JSON seperti edit text biasa.

### Ganti Nama & Bio
**File:** `src/data/profile.json`
```json
{
  "name": "Nama Kamu",                    <-- GANTI INI
  "tagline": "Tagline kamu di sini",      <-- GANTI INI
  "description": "Deskripsi singkat...",   <-- GANTI INI
  "education": {
    "degree": "S.Pd. Pendidikan Biologi",  <-- GANTI INI
    "university": "Universitas Kamu",      <-- GANTI INI
    "gpa": "3.75 / 4.00"                  <-- GANTI INI
  }
}
```

### Edit Contact Info
**File:** `src/data/contact.json`
```json
{
  "email": "email.asli.kamu@gmail.com",           <-- GANTI
  "linkedin": "https://linkedin.com/in/kamu",     <-- GANTI
  "github": "https://github.com/kamu",            <-- GANTI
  "portfolio": "https://portfoliokamu.com"         <-- GANTI
}
```

### Edit Pengalaman Kerja
**File:** `src/data/experience.json`
```json
{
  "experience": [
    {
      "title": "Posisi Kamu",              <-- GANTI
      "institution": "Nama Instansi",      <-- GANTI
      "duration": "2023 - 2024",           <-- GANTI
      "description": "Apa yang kamu lakukan",  <-- GANTI
      "achievement": "Pencapaian kamu"     <-- GANTI
    }
  ]
}
```

### Edit Skills
**File:** `src/data/skills.json`, bagian `categories`:
```json
{
  "title": "Nama Kategori",
  "skills": ["Skill 1", "Skill 2", "Skill 3"]   <-- TAMBAH/HAPUS skill di array ini
}
```

---

## 3. Cara Tambah Gambar

### Folder Tujuan
```
public/images/
├── profile.svg              <-- Foto profil
├── projects/
│   ├── bio-learning/        <-- Gambar per project
│   │   ├── thumb.svg        <-- Thumbnail (gambar utama)
│   │   ├── screen-1.svg     <-- Screenshot 1
│   │   ├── screen-2.svg     <-- Screenshot 2
│   │   └── ...
│   ├── micro-lab/
│   │   ├── thumb.svg
│   │   └── ...
│   └── ...
└── certs/
    ├── cert-1.svg           <-- Foto sertifikat 1
    ├── cert-2.svg
    └── ...
```

### Langkah-langkah:

#### A. Ganti Foto Profil
1. Siapkan foto (format: JPG, PNG, atau WebP)
2. **Rename** jadi `profile.jpg` (atau `.png`)
3. **Taruh di:** `public/images/`
4. **Update** di `src/data/profile.json`:
   ```json
   "photo": "/images/profile.jpg"
   ```
5. Save -> otomatis muncul di browser

#### B. Gambar untuk Project
1. Siapkan gambar screenshot project kamu
2. Buat folder sesuai slug project di `public/images/projects/`
   - Contoh: project slug `biology-learning-module` -> folder `bio-learning`
3. Taruh gambar di folder itu
4. Update path di `src/data/content.json`

#### C. Gambar Sertifikat
1. Foto/scan sertifikat
2. Rename: `cert-1.jpg`, `cert-2.jpg`, dst
3. Taruh di: `public/images/certs/`
4. Update path di `src/data/skills.json` bagian `certifications`

---

## 4. Cara Tambah / Hapus Project

**File:** `src/data/content.json`, bagian `projects`

### Tambah Project Baru:

1. Buka `src/data/content.json`
2. Cari bagian `"projects": [`
3. Tambah object baru (copy-paste salah satu yang sudah ada, lalu edit):

```json
{
  "slug": "project-baru-kamu",           <-- URL-friendly, tanpa spasi
  "title": "Judul Project Baru",         <-- Judul yang muncul
  "description": "Deskripsi singkat",    <-- Yang muncul di card
  "category": "Education",              <-- Pilih: Education, Research, Data Management, Web Development
  "tags": ["Tag1", "Tag2"],             <-- Keywords
  "image": "/images/projects/nama-folder/thumb.svg",
  "links": {
    "github": null,                      <-- null kalau tidak ada
    "demo": null                         <-- null kalau tidak ada
  },
  "details": {
    "overview": "Deskripsi lengkap project...",
    "challenge": "Masalah yang dihadapi...",
    "solution": "Solusi yang diberikan...",
    "results": [
      "Hasil 1",
      "Hasil 2"
    ],
    "technologies": ["Tech1", "Tech2"],
    "gallery": [
      "/images/projects/nama-folder/thumb.svg",
      "/images/projects/nama-folder/screen-1.svg",
      "/images/projects/nama-folder/screen-2.svg"
    ]
  }
}
```

4. **PENTING:** Taruh koma `,` di object sebelumnya (jika bukan item terakhir)
5. Buat folder gambar di `public/images/projects/nama-folder/`
6. Taruh gambar `thumb.svg` (thumbnail) dan screenshot lainnya
7. Save -> project baru langsung muncul di website

### Hapus Project:

1. Buka `src/data/content.json`
2. Cari project yang mau dihapus
3. **Hapus seluruh object** termasuk `{ }` dan isinya
4. Pastikan koma antar project tetap rapi
5. Save

**Contoh sebelum hapus:**
```json
"projects": [
  { ... project 1 ... },    <-- hapus koma ini kalau ini yang dihapus
  { ... project 2 ... },
  { ... project 3 ... }
]
```

**Contoh sesudah hapus project 1:**
```json
"projects": [
  { ... project 2 ... },
  { ... project 3 ... }
]
```

---

## 5. Cara Tambah / Hapus Sertifikasi

**File:** `src/data/skills.json`, bagian `certifications`

### Tambah Sertifikasi:

```json
{
  "title": "Nama Sertifikat Baru",
  "issuer": "Penerbit",
  "date": "2024",
  "description": "Deskripsi singkat",
  "credential": "https://link-credential.com",
  "image": "/images/certs/cert-7.svg"
}
```

### Hapus Sertifikasi:
Hapus seluruh object `{ }` yang mau dihapus dari array `certifications`.

---

## 6. Cara Tambah Gambar Banyak per Project (Gallery)

Setiap project bisa punya BANYAK gambar. Ini yang muncul di halaman detail project.

### Struktur:
```
public/images/projects/
└── nama-project/
    ├── thumb.svg      <- Thumbnail (WAJIB, ini yang muncul di card)
    ├── screen-1.svg   <- Screenshot 1
    ├── screen-2.svg   <- Screenshot 2
    ├── screen-3.svg   <- Screenshot 3
    └── ...            <- Bisa sebanyak yang kamu mau
```

### Cara Tambah:

1. **Siapkan gambar** screenshot project kamu (JPG/PNG)
2. **Rename** jadi `screen-1.jpg`, `screen-2.jpg`, dst
3. **Taruh di** folder project: `public/images/projects/nama-project/`
4. **Update** `src/data/content.json` di bagian `gallery`:

```json
"gallery": [
  "/images/projects/nama-project/thumb.jpg",
  "/images/projects/nama-project/screen-1.jpg",
  "/images/projects/nama-project/screen-2.jpg",
  "/images/projects/nama-project/screen-3.jpg",
  "/images/projects/nama-project/screen-4.jpg"
]
```

5. **Save** -> gallery langsung muncul di halaman detail project

### Fitur Gallery:
- Grid layout (2 kolom mobile, 3 kolom desktop)
- Klik gambar -> buka lightbox (fullscreen)
- Navigasi panah kiri/kanan di lightbox
- Counter "1 / 5" di bawah gambar
- Klik X atau area luar untuk tutup lightbox

---

## 7. Cara Edit CV Download

1. **Export** CV kamu sebagai PDF
2. **Rename** jadi `cv.pdf`
3. **Taruh di:** `public/files/cv.pdf`
4. Tombol "Download CV" di Hero section otomatis download file ini
5. Untuk ganti nama file, edit `src/data/profile.json`:
   ```json
   "cvFile": "/files/cv.pdf"
   ```

---

## 8. Cara Deploy ke Vercel (Online)

### Langkah 1: Buat akun Vercel
- Buka https://vercel.com
- Login dengan GitHub

### Langkah 2: Push ke GitHub
```bash
cd portfolio
git remote add origin https://github.com/kamu/portfolio.git
git push -u origin main
```

### Langkah 3: Import ke Vercel
- Buka https://vercel.com/new
- Pilih repository "portfolio"
- Klik "Deploy"
- Selesai! Website kamu online di `https://portfolio.vercel.app`

### Update Website Online:
Setiap kali edit, cukup:
```bash
git add -A
git commit -m "update konten"
git push
```
Vercel otomatis deploy ulang!

---

## FAQ

**Q: Edit di VS Code tapi browser tidak berubah?**
A: Pastikan server `npm run dev` masih jalan di terminal. Kalau tidak, jalankan lagi.

**Q: Gambar tidak muncul?**
A: Cek 3 hal:
1. File gambar ada di folder `public/images/...`
2. Path di JSON benar (awali dengan `/images/...`)
3. Format file benar (`.jpg`, `.png`, `.svg`)

**Q: JSON error / website blank?**
A: Cek apakah JSON valid:
- Pastikan ada koma `,` antar item
- Pastikan tidak ada koma di item terakhir
- Pastikan semua `{` punya pasangan `}`
- Cek di https://jsonlint.com

**Q: Cara tambah kategori portfolio baru?**
A: Tidak perlu setup apapun. Cukup ganti `category` di project:
```json
"category": "Kategori Baru"
```
Filter tabs otomatis mendeteksi kategori baru.

**Q: Cara ganti warna?**
A: Edit `src/app/globals.css`, cari bagian `:root`:
```css
--primary: #3b82f6;      <-- Warna utama (biru)
--accent: #8b5cf6;       <-- Warna aksen (ungu)
--secondary: #f97316;    <-- Warna sekunder (orange)
```

**Q: Dark mode gimana?**
A: Klik ikon moon/sun di navbar. Otomatis tersimpan di browser.

---

## Shortcut VS Code yang Berguna

| Shortcut | Fungsi |
|----------|--------|
| `Ctrl + S` | Save file (trigger hot reload) |
| `Ctrl + `` ` `` | Buka/tutup terminal |
| `Ctrl + P` | Buka file cepat |
| `Ctrl + Shift + F` | Search di semua file |
| `Ctrl + /` | Comment/uncomment |
