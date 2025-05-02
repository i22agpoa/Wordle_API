WordleES-API
🧩 Descripción
API para el proyecto WordleES en español.
Incluye funcionalidades extendidas como gestión de usuarios, autenticación, historial de partidas, estadísticas, personalización y más.

🌐 Demo
En desarrollo — próximamente disponible en producción (Vercel / Render / Railway / etc.).

📌 Funcionalidades principales
🟢 Juego
GET /api/wordle/
Devuelve la palabra diaria:
→ { dailyWord: "cañón" }

GET /api/wordle/checkword/:word
Verifica si la palabra es igual a la palabra diaria:
→ { status: "correct" } o { status: "incorrect" }

POST /api/wordle/updateword
Selecciona una nueva palabra diaria aleatoria.

POST /api/wordle/setword/:word
Fija manualmente la palabra diaria.

GET /api/wordle/random
Devuelve una palabra aleatoria (no diaria):
→ { word: "campo" }

🔐 Autenticación
POST /api/auth/register
Registra un nuevo usuario con username, email y password.

POST /api/auth/login
Inicia sesión y devuelve un token JWT.

GET /api/auth/me
Devuelve los datos del usuario autenticado (requiere header Authorization: Bearer <token>).

🎮 Partidas y estadísticas (próximamente)
Guardado automático de partidas (modo diario o libre).

Acceso al historial de partidas jugadas.

Estadísticas personales (racha, porcentaje de victoria, distribución de intentos).

Configuración de perfil (idioma, tema, dificultad).

Rankings globales y entre amigos.

Posibilidad de compartir resultados.

✅ TO-DO
 Guardar y consultar historial de partidas por usuario.

 Personalización de interfaz (modo oscuro, color de teclado).

 Compartir resultados (copiar resumen al portapapeles, enlace de compartir).

 Ranking de mejores jugadores.

 Agregar/amigos (seguir y comparar estadísticas).

 Autenticación con JWT y MongoDB.

 Registro e inicio de sesión.

 Crear endpoints REST para estadísticas y rankings.

 Evitar repetir palabras diarias recientes.

 Cifrar palabra diaria para evitar filtraciones.

🛠️ Tecnologías
Node.js + Express

MongoDB + Mongoose

JSON Web Tokens (JWT)

Bcrypt.js (hashing de contraseñas)

Cors, dotenv, nodemon

