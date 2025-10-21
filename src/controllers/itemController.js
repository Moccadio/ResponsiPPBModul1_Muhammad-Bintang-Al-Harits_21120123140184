import { ItemModel } from "../models/itemModel.js";

export const ItemController = {
  // --- GET semua data atau filter status ---
  async getAll(req, res) {
    try {
      const items = await ItemModel.getAll(req.query.status);
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // --- GET berdasarkan ID ---
  async getById(req, res) {
    try {
      const item = await ItemModel.getById(req.params.id);
      if (!item) {
        return res.status(404).json({ message: "Data sepatu tidak ditemukan." });
      }
      res.status(200).json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  // --- POST: Tambah data baru ---
  async create(req, res) {
    try {
      const { nama, status, tanggalMasuk, tanggalSelesai } = req.body;

      // Validasi input
      if (!nama || !status || !tanggalMasuk) {
        return res.status(400).json({
          error: "Kolom 'nama', 'status', dan 'tanggalMasuk' wajib diisi.",
        });
      }

      await ItemModel.create({ nama, status, tanggalMasuk, tanggalSelesai });
      res.status(201).json({ message: "Data sepatu berhasil ditambahkan." });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // --- PUT: Update data berdasarkan ID ---
  async update(req, res) {
    try {
      const { nama, status, tanggalMasuk, tanggalSelesai } = req.body;
      const { id } = req.params;

      const updated = await ItemModel.update(id, {
        nama,
        status,
        tanggalMasuk,
        tanggalSelesai,
      });

      if (!updated) {
        return res.status(404).json({ message: "Data sepatu tidak ditemukan." });
      }

      // ✅ Kalau hanya update status, respons seperti yang kamu mau
      if (status) {
        return res.status(200).json({
          message: "Status sepatu berhasil diperbarui.",
        });
      }

      res.status(200).json({
        message: "Data sepatu berhasil diperbarui.",
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // --- DELETE: Hapus data berdasarkan ID ---
  async remove(req, res) {
    try {
      const { id } = req.params;

      const result = await ItemModel.remove(id);
      if (!result) {
        return res.status(404).json({ message: "Data sepatu tidak ditemukan." });
      }

      // ✅ Respons sesuai permintaan kamu
      res.status(200).json({ message: "Data sepatu berhasil dihapus." });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
