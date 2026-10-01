# 🚀 ROADMAP AUM-IC 7: De Cero a Dios (Manual de Ensamblaje)

Este documento es la guía práctica y secuencial para humanos Junior y Agentes de Inteligencia Artificial. Si sigues estos 5 pasos de manera literal, el resultado inevitable será una plataforma de grado militar certificable bajo estándares ISO.

## Paso 1: Instalación del Universo (Estructura Física)
Antes de escribir una sola línea de lógica, crea tu sistema solar.
1. Crea tu carpeta `src/`.
2. Genera estrictamente los directorios: `1-atoms`, `2-molecules`, `3-cells`, `4-organisms`, `5-planets`, `6-layouts`.
3. Todo componente visual debe ser un Átomo (ej. `Boton.tsx`) o una Molécula. Ninguno puede conectarse a internet ni hacer `fetch`. 

## Paso 2: Encendiendo los Campos Magnéticos (Protección Anti-Ataques)
Sin importar si creas una web, un Punto de Venta (POS) de escritorio o una App Móvil, los inputs del usuario son radiación mortal.
1. **El Campo Perimetral (Filtro Invisible):** En web instala **filtros de desafío invisible anti-bots** anti-bots. En Móvil/Desktop, activa validadores biométricos (FaceID) o *Certificate Pinning*.
2. **El Escudo de Datos (ORM):** Instala tu ORM (Prisma, Entity Framework, CoreData). Está estrictamente prohibido usar "Raw SQL". El ORM atrapará cualquier intento de Inyección SQL local o remota.
3. **El Validador Atmosférico:** Usa librerías (Zod, FluentValidation) para purificar cadenas, evitar Cross-Site Scripting (XSS) o Buffer Overflows.

## Paso 3: Firmas Espectrales y Agujeros de Gusano (Auth y Caché)
1. **Autenticación (Firmas):** Configura la generación de **Firmas Espectrales** criptográficas (JWT en web, o uso del `Keychain/Credential Manager` nativo en Móvil/Desktop). Jamás guardes secretos en texto plano.
2. **Caché (Agujeros de Gusano):** Para uso rudo o arquitecturas *Offline-First* (POS/Móvil), configura **SQLite local o Redis**. Si el servidor central cae, el sistema debe sobrevivir leyendo y guardando datos en este agujero de gusano local para sincronizarse después.

## Paso 4: Construcción de la Materia (Controladores y APIs)
1. Los Endpoints (Planetas) solo deben recibir la petición, validar la firma espectral, y delegar la lógica a un Organismo (Servicio).
2. Recuerda la **Velocidad de la Luz**: Diseña tus frontends con *UI Optimista*. Muestra la acción de carga y éxito al instante en pantalla mientras los datos viajan al servidor en segundo plano.

## Paso 5: El Motor de Ejecución en Acción (Día a Día)
Cuando construyas una nueva *feature* o mutación en el código, es OBLIGATORIO seguir este ciclo de 7 operaciones:

**Fase 1: Mutación Segura**
1. **Identificación:** Mapea qué Átomos, Moléculas o Planetas vas a afectar y sus dependencias.
2. **Línea Base (Colisionador):** Escribe una prueba automatizada (Vitest, Jest) y fíjate que pase con el código actual.
3. **Refactorización:** Construye la nueva lógica asegurándote de no romper la estructura numérica fractal (1 a 6) ni el campo magnético.
4. **Checkpoint Temporal:** Genera un `commit` (Punto de control en el Multiverso).
5. **Fichas de Anatomía:** Comenta tu código con JSDoc explicando el propósito exacto de tu creación para futuras inteligencias artificiales o ingenieros.

**Fase 2: Observabilidad y Respuesta**
6. **Telemetría Atómica:** Inyecta logs estructurados en las funciones críticas. Asegúrate de que tu componente actúe como una caja negra, dejando un rastro forense ante cualquier desviación.
7. **Alerta de Supernova:** Configura o verifica que si tu componente genera un `Warn`, `Error` o `Fatal Error`, el sistema emita instantáneamente la alerta vía Webhook (NTFY, Discord, SMS) al equipo de desarrollo.

---

## 🛠️ CHEAT SHEET DE HERRAMIENTAS (¿Cómo logro todo esto?)
Para el desarrollador Junior que se pregunta *"¿Cómo implemento estas físicas cósmicas en la vida real?"*, aquí están las tecnologías recomendadas según tu lenguaje:

* **Para el Campo Magnético (ORMs):** Usa `Prisma` o `Drizzle` (TypeScript), `Entity Framework` (C#), `SQLAlchemy` (Python) o `Eloquent` (PHP).
* **Para los Filtros y Seguridad (CSP/WAF):** Usa `Cloudflare Turnstile` en el frontend y librerías como `Helmet` (Node.js) para inyectar cabeceras CSP.
* **Para el Agujero de Gusano (Caché):** `Redis` (para servidores), `SQLite` o `MMKV` (para persistencia móvil Offline-First).
* **Para el Colisionador (Testing y CVEs):** `Vitest` o `Jest` para código, `Playwright` para E2E, y siempre corre `npm audit` o `pip audit` en tu GitHub Actions.
* **Para la Radiación y Telemetría (RUM/Logs):** `Sentry` o `Datadog` para atrapar excepciones en tiempo real. Usa `NTFY`, un Bot de Telegram o `Discord Webhooks` para que tu servidor te envíe un mensaje al celular si detecta un `Fatal Error`.
* **Para la Malla Cósmica (Circuit Breakers):** Librerías como `Opossum` (Node.js) o `Polly` (.NET) para aislar servicios caídos.

---

## ⚙️ TOOLING: ¿Cómo forzar el estándar en tu proyecto?
El repositorio incluye archivos de configuración (Artefactos) diseñados para forzar matemáticamente el cumplimiento del estándar AUM-IC en tu entorno de desarrollo.

### 1. La Ley para IAs (`aumic.cursorrules`)
Las IAs tienden a generar código espagueti si no se les controla. Este archivo somete a tu agente local a las leyes de AUM-IC.
* **¿Cómo usarlo?** Copia el archivo `aumic.cursorrules` a la carpeta raíz de tu proyecto y renómbralo exactamente a `.cursorrules`.
* **Efecto:** Tu IDE con Inteligencia Artificial (Cursor, Windsurf, Copilot) leerá las reglas automáticamente. Se le prohibirá usar "Raw SQL", se le exigirá dividir la UI en Átomos/Moléculas y aplicará la seguridad del Horizonte de Sucesos.

### 2. El Colisionador Automatizado (`aumic-pipeline.yml`)
Plantilla de Integración Continua (CI/CD) para asegurar que el caos no entre a Producción.
* **¿Cómo usarlo?** En tu proyecto, crea la ruta de carpetas `.github/workflows/` y pega este archivo allí dentro.
* **Efecto:** Cada vez que intentes subir código (`git push`) a la rama `main`, GitHub Actions encenderá el Colisionador. Revisará si instalaste librerías con malware (CVE Audits) y correrá tus tests. Si hay peligro, cancelará el despliegue de inmediato.
