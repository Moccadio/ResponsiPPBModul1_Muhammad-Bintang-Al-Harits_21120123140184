# Shoe Laundry API

REST API sederhana untuk layanan **daftar barang cuci sepatu**, dibangun menggunakan **Node.js + Express.js** dan **Supabase** sebagai database.

# Deskripsi Umum Proyek

**Shoe Laundry API** digunakan untuk mengelola data sepatu yang sedang dicuci di sebuah layanan laundry sepatu.  
API ini memungkinkan pengguna untuk **menambah, membaca, memperbarui, dan menghapus (CRUD)** data sepatu.  
Selain itu, API juga mendukung **filter berdasarkan status sepatu**, seperti **Sedang Dicuci** atau **Selesai**.

# Tujuan

1. Mengimplementasikan REST API menggunakan **Node.js + Express.js**.  
2. Menggunakan **Supabase** sebagai backend database.  
3. Menyediakan **endpoint CRUD** untuk data sepatu laundry.  
4. Mendukung **filter berdasarkan status cucian**.

# ⚙️ Fitur Utama

| Metode | Endpoint | Deskripsi |
|---------|-----------|-----------|
| **POST** | `/api/items` | Tambah data sepatu baru |
| **GET** | `/api/items` | Ambil semua data sepatu atau filter berdasarkan status |
| **GET** | `/api/items/:id` | Ambil data sepatu tertentu berdasarkan ID |
| **PUT** | `/api/items/:id` | Ubah status atau detail sepatu |
| **DELETE** | `/api/items/:id` | Hapus data sepatu dari database |

# Struktur Data

| Kolom | Tipe Data | Keterangan |
|--------|------------|------------|
| `id` | bigint | Primary key |
| `nama` | text | Nama sepatu |
| `status` | text | Status cucian |
| `tanggalMasuk` | date | Tanggal sepatu masuk laundry |
| `tanggalSelesai` | text | Tanggal sepatu selesai dicuci |

# Contoh Request & Response (Lengkap)

## 1. POST – Tambah Data Sepatu
POST http://localhost:3000/api/items

Body Request :
```
{
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}
```

Response :
```
{
  "message": "Data sepatu berhasil ditambahkan."
}
```


## 2. GET – Ambil Semua Data Sepatu
GET http://localhost:3000/api/items

Response :
```
[
  {
    "id": 2,
    "nama": "Nike Air Force 1",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-08",
    "tanggalSelesai": "2025-10-11"
  },
  {
    "id": 3,
    "nama": "Nike Air Force 1",
    "status": "Sedang Dicuci",
    "tanggalMasuk": "2025-10-08",
    "tanggalSelesai": "-"
  },
  {
    "id": 4,
    "nama": "Nike Air Max",
    "status": "Sedang Dicuci",
    "tanggalMasuk": "2025-10-08",
    "tanggalSelesai": "-"
  }
]
```

## 3. GET – Ambil Data Sepatu Berdasarkan ID
GET http://localhost:3000/api/items/2

Response :
```
{
  "id": 2,
  "nama": "Nike Air Force 1",
  "status": "Selesai",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "2025-10-11"
}
```

## 4. PUT – Perbarui Status atau Detail Sepatu
PUT http://localhost:3000/api/items/2

Body Request :
```
{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-11"
}
```

Response :
```
{
  "message": "Status sepatu berhasil diperbarui."
}
```

## 5. DELETE – Hapus Data Sepatu
DELETE http://localhost:3000/api/items/1

Response :
```
{
  "message": "Data sepatu berhasil dihapus."
}
```

# Langkah Instalasi & Menjalankan API
## 1. Clone repository

```
git clone https://github.com/Moccadio/ResponsiPPBModul1_Muhammad-Bintang-Al-Harits_21120123140184
```
## 2. Masuk ke folder proyek

```
cd ResponsiPPBModul1_Muhammad-Bintang-Al-Harits_21120123140184
```
## 3. Install dependencies

```
npm install
```
## 4. Buat file .env dengan isi berikut

| Variabel | Nilai |
|-----------|--------|
| **SUPABASE_URL** | `https://sjrvfzgfiwursswjbgae.supabase.co` |
| **SUPABASE_ANON_KEY** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcnZmemdmaXd1cnNzd2piZ2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTY3MzAsImV4cCI6MjA3NjU3MjczMH0.h5TRu-w92LvWrGKGApjePZGOVkR21bxam-4T7VV8ZD8` |
| **PORT** | `3000` |

## 5. Jalankan server
```
npm run dev
```
## 6. Akses API melalui browser atau Postman
```
http://localhost:3000/api/items
```

# 🌐 Link Deploy
[Shoe Laundry API - Vercel Deploy](https://responsi-ppb-modul1-muhammad-bintang-al-harits-21120-6uc005ika.vercel.app/)
