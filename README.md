# 📋 Registro de Servicios

PWA (Progressive Web App) para registrar horas de servicio hotelero.  
Funciona sin internet y se puede instalar en el celular como una app.

## ✨ Funciones

- Agregar y eliminar filas de registro
- Guarda los datos automáticamente en el celular (localStorage)
- Suma automática de horas
- Exportar a CSV
- Funciona sin conexión (offline)
- Instalable en pantalla de inicio (Android e iOS)

## 🚀 Cómo subir a GitHub Pages

1. Crear un repositorio nuevo en GitHub (ej: `registro-servicios`)
2. Subir todos los archivos:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - `icon-192.png` *(ver nota abajo)*
   - `icon-512.png` *(ver nota abajo)*
3. Ir a **Settings → Pages → Source: main branch / root**
4. La app quedará en: `https://tu-usuario.github.io/registro-servicios/`

## 📱 Cómo instalar en el celular

### Android (Chrome):
1. Abrir el link en Chrome
2. Aparecerá un banner "Agregar a pantalla de inicio" — tocar ✓
3. O ir al menú (⋮) → "Instalar app"

### iPhone (Safari):
1. Abrir el link en Safari
2. Tocar el botón compartir (□↑)
3. Seleccionar "Agregar a pantalla de inicio"

## 🖼️ Íconos (importante)

El manifest necesita dos íconos PNG:
- `icon-192.png` (192×192 px)
- `icon-512.png` (512×512 px)

Podés crearlos gratis en: https://www.favicon.io/ o usar cualquier imagen verde de 📋.

---
*Hecho con 💚*
