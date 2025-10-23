# 🧼 Shoe Laundry API

REST API sederhana untuk layanan **daftar barang cuci sepatu**, dibangun menggunakan **Node.js + Express.js** dan **Supabase** sebagai database.

---

## 📘 Deskripsi Umum Proyek

**Shoe Laundry API** digunakan untuk mengelola data sepatu yang sedang dicuci di sebuah layanan laundry sepatu.  
API ini memungkinkan pengguna untuk **menambah, membaca, memperbarui, dan menghapus (CRUD)** data sepatu.  
Selain itu, API juga mendukung **filter berdasarkan status sepatu**, seperti **Sedang Dicuci** atau **Selesai**.

---

## 🎯 Tujuan

1. Mengimplementasikan REST API menggunakan **Node.js + Express.js**.  
2. Menggunakan **Supabase** sebagai backend database.  
3. Menyediakan **endpoint CRUD** untuk data sepatu laundry.  
4. Mendukung **filter berdasarkan status cucian**.

---

## ⚙️ Fitur Utama

| Metode | Endpoint | Deskripsi |
|---------|-----------|-----------|
| **POST** | `/api/items` | Tambah data sepatu baru |
| **GET** | `/api/items` | Ambil semua data sepatu atau filter berdasarkan status |
| **GET** | `/api/items/:id` | Ambil data sepatu tertentu berdasarkan ID |
| **PUT** | `/api/items/:id` | Ubah status atau detail sepatu |
| **DELETE** | `/api/items/:id` | Hapus data sepatu dari database |

---

## 🗂️ Struktur Data

| Kolom | Tipe Data | Keterangan |
|--------|------------|------------|
| `id` | bigint | Primary key |
| `nama` | text | Nama sepatu |
| `status` | text | Status cucian |
| `tanggalMasuk` | date | Tanggal sepatu masuk laundry |
| `tanggalSelesai` | text | Tanggal sepatu selesai dicuci |

---

## 📩 Contoh Request & Response

Berikut adalah contoh penggunaan endpoint pada **Shoe Laundry API**.

---

### 🧾 1. POST – Tambah Data Sepatu

**Endpoint:**
POST http://localhost:3000/api/items

**Body Request:**
```json
{
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}

{
  "message": "Data sepatu berhasil ditambahkan."
}
