import express from "express";
import connection from "./db.js";

const app = express();
app.use(express.json());

// Endpoint de prueba
app.get("/productos", (req, res) => {
  connection.query("SELECT * FROM productos", (err, results) => {
    if (err) return res.status(500).json({ error: "Error en la consulta" });
    res.json(results);
  });
});

// 📌 Obtener producto por ID
app.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM productos WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Error en la consulta" });
    if (results.length === 0) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(results[0]);
  });
});

// 📌 Crear un nuevo producto
app.post("/productos", (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: "Nombre y precio son obligatorios" });
  }
  const query = "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)";
  connection.query(query, [nombre, descripcion, precio, stock || 0], (err, result) => {
    if (err) return res.status(500).json({ error: "Error al crear producto" });
    res.status(201).json({ id: result.insertId, nombre, descripcion, precio, stock: stock || 0 });
  });
});

// 📌 Actualizar un producto por ID
app.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock } = req.body;
  const query = "UPDATE productos SET nombre=?, descripcion=?, precio=?, stock=? WHERE id=?";
  connection.query(query, [nombre, descripcion, precio, stock, id], (err, result) => {
    if (err) return res.status(500).json({ error: "Error al actualizar producto" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Producto no encontrado" });
    res.json({ message: "Producto actualizado correctamente" });
  });
});

// 📌 Eliminar un producto por ID
app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM productos WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Error al eliminar producto" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Producto no encontrado" });
    res.json({ message: "Producto eliminado correctamente" });
  });
});

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
