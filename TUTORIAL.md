# Portfolio Website - Tutorial Edit Konten

## Struktur Folder

```
portfolio/
├── data/                    <-- EDIT KONTEN DI SINI
│   ├── profile.json         <-- nama, bio, foto, CV
│   ├── content.json         <-- expertise & portfolio projects
│   ├── experience.json      <-- pengalaman kerja
│   ├── skills.json          <-- skills & sertifikasi
│   └── contact.json         <-- email, social links
│
├── public/
│   ├── images/              <-- TARUH GAMBAR DI SINI
│   │   ├── profile.jpg      <-- foto profil
│   │   ├── projects/        <-- gambar project
│   │   │   ├── education-1.jpg
│   │   │   ├── research-1.jpg
│   │   │   ├── data-1.jpg
│   │   │   ├── web-1.jpg
│   │   │   └── ...
│   │   └── certs/           <-- gambar sertifikat
│   │       ├── cert-1.jpg
│   │       └── ...
│   └── files/
│       └── cv.pdf           <-- TARUH CV PDF DI SINI
```

---

## 1. Ganti Foto Profil

1. Siapkan foto (format: JPG/PNG/WebP, ukuran: 400x400 px)
2. Rename jadi `profile.jpg`
3. Taruh di: `public/images/profile.jpg`
4. Selesai! Foto otomatis muncul di Hero section

## 2. Ganti CV (Download CV)

1. Export CV kamu sebagai PDF
2. Rename jadi `cv.pdf`
3. Taruh di: `public/files/cv.pdf`
4. Tombol "Download CV" otomatis mendownload file ini

## 3. Edit Nama & Bio

Buka `data/profile.json` dan edit:

```json
{
  "name": "Nama Kamu",                          <-- ganti nama
  "tagline": "Tagline kamu...",                  <-- ganti tagline
  "description": "Deskripsi singkat tentang...",  <-- ganti bio
  "photo": "/images/profile.jpg",                <-- path foto
  "cvFile": "/files/cv.pdf",                     <-- path CV
  "education": {
    "degree": "S.Pd. Pendidikan Biologi",        <-- ganti jurusan
    "university": "Universitas Kamu",            <-- ganti kampus
    "gpa": "3.75 / 4.00"                        <-- ganti IPK
  }
}
```

## 4. Tambah/Edit Portfolio Project

Buka `data/content.json`, cari bagian `projects`:

```json
{
  "title": "Judul Project",
  "description": "Deskripsi singkat project",
  "category": "Web Development",        <-- pilih: Education, Research, Data Management, Web Development
  "tags": ["HTML", "CSS", "JavaScript"],
  "image": "/images/projects/web-1.jpg",
  "links": {
    "view": "#",                        <-- link detail project
    "document": null,                   <-- untuk Education/Research/Data (link Google Docs, PDF, dll)
    "github": "https://github.com/...", <-- HANYA untuk Web Development
    "demo": "https://..."               <-- HANYA untuk Web Development
  }
}
```

**PERHATIAN:**
- **Web Development**: pakai `github` dan `demo`, set `document` ke `null`
- **Education/Research/Data**: pakai `document` (link Google Docs, Drive, PDF), set `github` dan `demo` ke `null`
- Kalau tidak ada link, set ke `null` (tombol tidak muncul)

## 5. Tambah Gambar Project

1. Siapkan gambar (format: JPG/PNG, ukuran: 800x450 px)
2. Taruh di: `public/images/projects/`
3. Update path di `data/content.json`:
   `"image": "/images/projects/nama-file.jpg"`

## 6. Edit Pengalaman Kerja

Buka `data/experience.json`:

```json
{
  "title": "Posisi",
  "institution": "Nama Instansi",
  "duration": "2023 - 2024",
  "description": "Deskripsi pekerjaan",
  "achievement": "Pencapaian"
}
```

## 7. Edit Skills

Buka `data/skills.json`, cari bagian `categories`:

```json
{
  "title": "Nama Kategori",
  "skills": ["Skill 1", "Skill 2", "Skill 3"]
}
```

## 8. Edit Contact Info

Buka `data/contact.json`:

```json
{
  "email": "email.kamu@gmail.com",
  "linkedin": "https://linkedin.com/in/profil-kamu",
  "github": "https://github.com/username-kamu",
  "portfolio": "https://portfolio-kamu.com"
}
```

## 9. Tambah Sertifikasi

Buka `data/skills.json`, cari bagian `certifications`:

```json
{
  "title": "Nama Sertifikat",
  "issuer": "Penerbit",
  "date": "2024",
  "description": "Deskripsi singkat",
  "credential": "https://link-credential.com",
  "image": "/images/certs/cert-1.jpg"
}
```

Gambar sertifikat taruh di: `public/images/certs/`

---

## Menjalankan Website

```bash
cd portfolio
npm run dev
```

Buka: http://localhost:3000

## Build Production

```bash
npm run build
npm start
```

---

## FAQ

**Q: Gambar tidak muncul?**
A: Pastikan file ada di folder `public/images/` dan path di JSON benar.

**Q: Download CV tidak jalan?**
A: Pastikan file `cv.pdf` ada di `public/files/cv.pdf`

**Q: Tombol tidak muncul di project?**
A: Cek `links` di JSON. Set ke `null` kalau tidak ada, bukan string kosong `""`.

**Q: Cara tambah kategori portfolio baru?**
A: Tambah project baru di `content.json` dengan category yang sama. Filter otomatis mendeteksi kategori baru.
