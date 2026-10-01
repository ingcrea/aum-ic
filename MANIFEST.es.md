# 📜 MANIFIESTO ARQUITECTÓNICO: ESTÁNDAR AUM-IC 7

> 🌍 **Navegación:** 🇲🇽 [Leer en Español](./MANIFEST.es.md) | 🇺🇸 [Read in English](./MANIFEST.md) | 📖 [README (ES)](./README.es.md)

Este documento rige el **Paradigma de Universos Multidimensionales de Ingeniería Creativa (Estándar AUM-IC 7)**. No es solo una guía de carpetas; es una estructura física, matemática y de ingeniería de software diseñada para cumplir de manera nativa con las normativas internacionales de calidad **ISO/IEC 25010** e **ISO 27001**.

---


> 🏆 **LA VISIÓN AUM-IC:** Todo proyecto creado desde su inicio o migrado íntegramente al Paradigma AUM-IC es un proyecto que aspira al cumplimiento nativo de los más altos estándares globales. Al adoptar esta arquitectura, el sistema hereda las aristas de calidad de software (**ISO/IEC 25010**), blinda su infraestructura bajo máxima seguridad y privacidad corporativa (**ISO 27001, ISO 27701, SOC 2**), garantiza su testabilidad (**ISO 29119**) y asegura la inclusión y posicionamiento absoluto mediante un código semánticamente perfecto (**ISO 40500 / WCAG / SEO**).


## 🌌 El Porqué Fundamental: Entropía vs. Perfección Matemática

**La programación creada por humanos es entropía pura.** Es energía caótica que se dispersa: código espagueti, dependencias circulares, sistemas que se degradan con el tiempo y lógicas que colapsan. 

El Universo real, aunque a simple vista parece caótico, es **brutal y matemáticamente preciso**. Desde la física cuántica hasta la mecánica celeste, todo obedece a un diseño quirúrgico impecable. 

**El Paradigma AUM-IC nace para llevar la programación a esta perfección matemática universal.** Somete el caos del código a las leyes de la física cósmica. Es un modelo mental absoluto, **100% agnóstico al lenguaje** (TypeScript, Python, Rust, Go, C#), que divide el desarrollo en Materia Observable, Fuerzas Invisibles y Leyes del Tiempo.

---

## PARTE I: LA MATERIA OBSERVABLE (Estructura Fractal)

El Principio Hermético dicta: *"Como es arriba, es abajo"*. El ensamblaje de componentes sigue un ordenamiento jerárquico estricto. **Esta regla aplica simétricamente para la Interfaz (UI), las APIs (Controladores) y las Bases de Datos (Modelos).**

Para detener la entropía, los directorios utilizan obligatoriamente prefijos numéricos:

### ⚛️ Nivel 1: Átomos (`1-atoms/`)
* **Concepto:** La unidad base indivisible (Botones en UI / Helpers y Utils puros en Backend).
* **Regla:** 100% ignorantes. No importan otros archivos, no hacen peticiones, no tienen estado.

### 🧬 Nivel 2: Moléculas (`2-molecules/`)
* **Concepto:** La unión de dos o más átomos (Campos de formulario en UI / Middlewares y Validadores en Backend).
* **Regla:** Tienen propósito específico pero carecen de lógica de negocio profunda.

### 🦠 Nivel 3: Células (`3-cells/`)
* **Concepto:** Contenedores funcionales interactivos (Formularios completos en UI / Entidades ORM o Servicios unitarios en Backend).
* **Regla:** Manejan eventos de usuario pero delegan el procesamiento masivo a capas superiores.

### 🦎 Nivel 4: Organismos (`4-organisms/`)
* **Concepto:** Bloques complejos y autónomos (Secciones dinámicas en UI / Casos de Uso y Orquestadores en Backend).
* **Regla:** Agrupan células. Pueden ser inyectados en diferentes planetas y funcionar de manera independiente.

### 🌍 Nivel 5: Planetas (`5-planets/`)
* **Concepto:** Macro-secciones semánticas (Headers/Footers en UI / Endpoints y Controladores API en Backend).
* **Regla:** Son el "hogar" de los organismos. Estructuran y enrutan la información.

### 🌌 Nivel 6: Sistemas Solares y Galaxias (`6-layouts/`)
* **Concepto:** El esqueleto gravitacional maestro (Plantillas maestras en UI / Configuración de Servidores y App Modules en Backend).
* **Regla:** Manejan los metadatos y abren el "espacio" para que los planetas existan.

---

## PARTE II: LAS FUERZAS INVISIBLES Y LA CINEMÁTICA (Datos y Flujos)

Un universo estático está muerto. Estas leyes dictan cómo interactúa la materia.

### 🌑 1. Materia Oscura (Manejo del Estado Global)
* **El Concepto:** Son los datos globales de la aplicación en memoria (Redux, Zustand, Daemons).
* **Uso Práctico:** En lugar de pasar un dato bajando por 10 archivos distintos (*Prop Drilling*), guardas ese dato en la "Materia Oscura". Cualquier archivo lo absorbe directamente. Es la **Fuente Única de Verdad**.
* **Estándar ISO:** Mantenibilidad y Modularidad.

### 🧲 2. Gravedad Cero (Acoplamiento)
* **El Concepto:** Nivel de Acoplamiento (Dependency Injection).
* **Uso Práctico:** Un Átomo debe tener "Gravedad Cero". No puede importar conexiones a Base de Datos. La gravedad pesada (lógica compleja) se reserva solo para los Organismos y Planetas.
* **Estándar ISO:** Reusabilidad y Portabilidad (Principios SOLID).

### ⚡ 3. Velocidad de la Luz y Agujeros de Gusano (Latencia y Caché)
* **El Concepto:** Peticiones de red, tiempos de espera y memoria a corto plazo.
* **Uso Práctico:** Superamos el límite de la velocidad de la luz mediante **UI Optimista** (mostrar resultados al instante mientras el dato viaja). Además, utilizamos **Agujeros de Gusano (Redis, Caché de Navegador, CDNs)** para doblar el espacio-tiempo, entregando información frecuente instantáneamente desde la memoria sin tener que hacer el viaje completo hasta la Base de Datos.
* **Estándar ISO:** Eficiencia de Rendimiento y Escalabilidad.

### 🕸️ 4. La Malla Cósmica (Microservicios e Interoperabilidad)
* **El Concepto:** Distintas aplicaciones o módulos se comunican a través de "hilos" de energía (APIs, Webhooks, gRPC).
* **Uso Práctico:** Dos galaxias distintas no comparten bases de datos. Si una galaxia explota, el resto sobrevive ignorando ese hilo cortado (Circuit Breaker).
* **Estándar ISO:** Tolerancia a Fallos e Interoperabilidad.

### ☄️ 5. Órbitas Cerradas (Ciclo de Vida)
* **El Concepto:** Los Listeners, WebSockets y procesos en segundo plano.
* **Uso Práctico:** Todo proceso cíclico debe ser destruido explícitamente al dejar de usarse (Limpieza / Unmount). Una órbita abierta es un planeta rebelde que consume RAM hasta destruir el dispositivo (Memory Leak).
* **Estándar ISO:** Utilización Eficiente de Recursos.

---

## PARTE III: LEYES DEL TIEMPO Y EL MULTIVERSO (Control de Versiones)

### ⏱️ El Multiverso y las Líneas Temporales (Git)
* **El Concepto:** El control de versiones no es una herramienta, es la manipulación del espaciotiempo.
* **Uso Práctico:** Un `commit` congela el universo en el tiempo. Un `branch` crea un Universo Paralelo para experimentar. Jamás se altera el Universo Real (`main`) sin que el Paralelo sea matemáticamente perfecto. Si algo falla, se colapsa la línea temporal (`git revert`).

---

## PARTE IV: CERTIFICACIÓN Y SUPERVIVENCIA (Estándares ISO y Cumplimiento)

Para que un proyecto sea considerado formalmente AUM-IC, debe cumplir con los 4 pilares de supervivencia cósmica. Estos garantizan que la plataforma cumpla de forma automatizada y nativa con los estándares más estrictos del mundo corporativo (**ISO 25010, ISO 27001, ISO 27701, ISO 40500, ISO 29119 y SOC 2**).

### 🛡️ 1. Horizonte de Sucesos, Firmas Espectrales y Campos Magnéticos (Seguridad Total)
* **Las Normas:** ISO/IEC 27001 (Seguridad) e ISO/IEC 27701 (Privacidad de la Información).
* **El Horizonte y La Singularidad:** Las contraseñas y secretos viven en el Backend (Horizonte). La "Privacy by Design" comprime y cifra identidades para que nadie pueda ver datos en claro (Singularidad).
* **Firmas Espectrales (Auth y JWT):** Cada petición debe portar una "Firma Espectral" validada criptográficamente (JWT, Sesiones con Cookies `HttpOnly`). Si un viajero presenta una firma alterada, el Middleware rechaza la conexión instantáneamente.
* **Campos Magnéticos (ORMs y Sanitización):** Así como el campo magnético de la Tierra desvía la radiación solar mortal, el uso estricto de **ORMs (Object-Relational Mapping)** y validadores (ej. Zod) actúa como un escudo magnético. Atrapa, filtra y desvía caracteres maliciosos e Inyecciones SQL o XSS antes de que toquen el núcleo de la base de datos. Está estrictamente prohibido apagar el campo magnético ejecutando "Raw SQL" con inputs de usuario.

### 💥 2. El Colisionador de Hadrones (Testing y Calidad)
* **La Norma:** ISO/IEC/IEEE 29119 (Pruebas de Software).
* **Uso Práctico:** Todo Átomo y Organismo debe sobrevivir a colisiones a alta velocidad en ambientes controlados (Unit Testing, E2E, TDD). Si el código se rompe bajo estrés simulado en el pipeline automatizado (CI/CD), el Universo rechaza el despliegue. El caos no entra a Producción.

### 📡 3. Radiación de Fondo Cósmica (Observabilidad y Auditoría)
* **La Norma:** SOC 2 Tipo II (Integridad de Procesamiento y Disponibilidad).
* **Uso Práctico:** El Big Bang dejó un rastro que nos cuenta la historia del universo. Del mismo modo, todo error, acción del usuario o caída del servidor deja un **Rastro Radiactivo inmutable** (Telemetría, Sentry, Datadog, Audit Logs). Es imposible silenciar fallos; todo debe ser rastreable forensemente. Esto incluye la observabilidad del cliente (**RUM - Real User Monitoring**), capturando globalmente excepciones del navegador, recursos rotos (404) y *Dead Clicks* (botones inactivos) enviando el rastro instantáneamente al centro de mando.

### 🌍 4. La Biósfera y el Espectro Invisible (Accesibilidad y SEO)
* **La Norma:** ISO/IEC 40500 (Pautas de Accesibilidad WCAG) y Directrices de Motores de Búsqueda (SEO).
* **Uso Práctico:** La **Biósfera** exige que el ecosistema visual soporte toda forma de vida humana (validación matemática de contraste de colores, navegación por teclado). Sin embargo, el **Espectro Invisible** (Infrarrojo/Ultravioleta) es como las máquinas ven tu aplicación. Motores de búsqueda (Googlebots) y Tecnologías de Asistencia (Screen Readers) consumen tu código a través de etiquetas Semánticas, *ARIA-labels* y metadatos. Si tu planeta no emite en el espectro invisible, no existe en la web.

## PARTE V: EL MOTOR DE EJECUCIÓN (Protocolo de Creación y Telemetría)

Para garantizar que el universo no colapse al expandirse (desarrollo de nuevas *features*) o mutar (refactorización), todo arquitecto AUM-IC debe regirse por el siguiente flujo de operaciones inquebrantable.

### Fase 1: El Protocolo de Mutación Segura
1. **Identificar Comportamientos:** Mapear la gravedad (dependencias) y las órbitas (ciclo de vida) del componente antes de alterar su código.
2. **Línea Base en el Colisionador:** Escribir los tests automatizados y comprobar que pasan en verde con el código *actual*. Esta es la red de seguridad matemática.
3. **Refactorización AUM-IC:** Aplicar la simetría fractal (mover de 1-atoms a 6-layouts, aplicar gravedad cero, aislar lógicas).
4. **Punto de Control Temporal (Checkpoint):** Congelar la línea de tiempo en el Multiverso (Commit en Git). Si la entropía ataca, se colapsa la línea temporal sin daños.
5. **Fichas de Anatomía:** Comentar el código (JSDoc invisible en producción) explicando el *porqué* atómico para futuras inteligencias artificiales o humanos.

### Fase 2: Observabilidad y Respuesta Inmediata (Telemetría de Supernova)
6. **Caja Negra de Logs Atómicos:** Se debe programar un sistema interno de trazabilidad. Toda interacción crítica, desde un fallo silencioso en un Átomo hasta un *Fatal Error* en una Galaxia, genera un Log estructurado. Se establecen *breakpoints* y *checkpoints* internos en la ejecución para permitir análisis forense forense y gestión de fallos.
7. **Alarma de Supernova (Intercepción y Alerta en Tiempo Real):** El sistema de logs no es pasivo; es proactivo. Al interceptar un fallo (Warn, Error, Fatal), el paradigma exige emitir un pulso a la Velocidad de la Luz al Centro de Mando de Desarrollo. A través de NTFY, Webhooks (Discord/Telegram), SMS o bots de WhatsApp, el equipo de ingeniería es notificado en el milisegundo exacto del fallo, garantizando soporte técnico preventivo antes de que el usuario final lo reporte.



## PARTE VI: LA LEY DE CORRESPONDENCIA (Escalabilidad y Plataformas Agnósticas)

El argumento de *"Este paradigma es demasiada sobreingeniería"* nace de la incomprensión de las leyes del universo. **Como es arriba, es abajo.** El estándar AUM-IC 7 obedece a la **Ley de Correspondencia del Kybalión**: un asteroide obedece la misma física que una galaxia, y una App Móvil obedece la misma arquitectura que un ERP de escritorio o una web en la nube. Las fuerzas solo se encienden en proporción a su Masa Crítica.

Para mantener la velocidad de desarrollo sin sacrificar las certificaciones ISO, el arquitecto debe clasificar su proyecto:

### 🪨 Nivel 1: El Asteroide (Sistemas de Propósito Único)
* **Ejemplos:** Landing Pages, Scripts CLI, Apps Móviles unidireccionales (Calculadora, Lector QR), Utilidades Desktop pequeñas.
* **Materia Observable:** Solo carpetas `1-atoms` a `4-organisms`.
* **Materia Oscura (Estado Global):** **APAGADA.** No necesitas Redux, Vuex ni Singletons pesados. El estado vive localmente (Energía Cinética).
* **Campo Magnético Perimetral:** **ENCENDIDO.** Todo input externo es un rayo cósmico mortal. En Web, usas filtros de desafío invisible anti-bots. En Móvil/Desktop, usas validadores biométricos (FaceID) o sanitización estricta (Zod/Regex) para evitar *Buffer Overflows* o ejecución de macros maliciosos.
* **La Biósfera (Accesibilidad):** **MÁXIMA.** En web es SEO semántico. En Móvil/Desktop, obligas el uso de APIs nativas (*VoiceOver, TalkBack*) para que la tecnología de asistencia pueda "leer" tu interfaz.

### 🌍 Nivel 2: El Planeta (Sistemas Transaccionales y Puntos de Venta)
* **Ejemplos:** E-Commerce, Puntos de Venta locales (Sistemas de Punto de Venta (POS) locales), Apps Móviles transaccionales.
* **Agujeros de Gusano (Caché y Offline-First):** **ENCENDIDO.** En la nube usas Redis. En POS Desktop o Móvil, enciendes bases de datos locales incrustadas (SQLite, Realm, CoreData). Si el internet se cae, el planeta sigue girando y facturando gracias al Agujero de Gusano.
* **Firmas Espectrales (Seguridad de Sesión):** **ENCENDIDO.** Implementas JWT para web, o el **Keychain / Windows Credential Manager** para proteger contraseñas localmente en Desktop/Móvil. Jamás se guarda texto plano en disco.

### 🌌 Nivel 3: La Galaxia (Ecosistemas Masivos y Distribuidos)
* **Ejemplos:** Sistemas ERP distribuidos en la nube, Core Bancario, Suites de Escritorio pesadas (Suites de escritorio de alto rendimiento).
* **Malla Cósmica (Microservicios / IPC):** **ENCENDIDA.** En la nube, las galaxias se comunican por APIs REST/gRPC. En Desktop, se comunican mediante hilos aislados (IPC - Inter-Process Communication). Si un hilo colapsa, el programa no se cierra. La arquitectura implementa **Circuit Breakers (Disyuntores)** para cortar comunicación con APIs externas caídas y **Bucles de Auto-Sanación (Exponential Reconnects)** para revivir conexiones a bases de datos sin intervención humana.
* **Materia Oscura y Telemetría:** **MÁXIMA POTENCIA.** El estado global dicta todo. El sistema de Logs (Radiación de Fondo) reporta cada *Fatal Error* de inmediato vía Sentry, Datadog o Webhooks (NTFY/Discord) al centro de mando.

---

## GLOSARIO TÁCTICO: EL PORQUÉ DE LAS COSAS (Respuestas para la Élite)

Para que AUM-IC 7 no sea visto como un capricho estético, todo arquitecto debe saber defender la física de sus decisiones en *cualquier* lenguaje (C#, Python, JS, Swift):

* **¿Por qué y cuándo encender el Campo Magnético (ORMs o Query Builders)?**
  * *Cuándo:* Siempre que el software (Web, POS o App) interactúe con una base de datos o sistema de archivos.
  * *Por qué:* Escribir consultas "Raw SQL" (SQL crudo) combinadas con variables del usuario es apagar el campo magnético de tu planeta. Los rayos cósmicos (Inyecciones SQL) freirán tu núcleo, ya sea en un clúster en la nube o en la base local de SQLite de la caja registradora. El ORM actúa como una magnetósfera que purifica los comandos maliciosos antes de que toquen el disco. Además, la materia nunca se destruye: se exige el **Borrado Lógico (Soft Deletes)** y el control estricto de esquemas mediante Archivos de Migración.

* **¿Por qué y cuándo hacer un Commit (Punto de Control en el Multiverso)?**
  * *Cuándo:* Jamás al final del día por costumbre. Se hace **cada vez que un átomo o ruta alcanza la estabilidad matemática (Test en verde)**.
  * *Por qué:* El desarrollo es una lucha contra la entropía (el caos). Si en la siguiente hora tu código colapsa, el *commit* te permite colapsar esa línea temporal fallida y regresar instantáneamente al último punto donde el universo era estable.

* **¿Por qué destruir los Listeners (Órbitas Cerradas)?**
  * *Cuándo:* Cuando una ventana modal, un componente o una sub-rutina se cierra o destruye.
  * *Por qué:* Un Webhook, un proceso *Background Worker* en C#, o un WebSocket que no se destruye explícitamente se convierte en un "Planeta Errante". Seguirá orbitando invisible en la memoria RAM (Memory Leak) hasta destruir la capacidad del dispositivo, forzando al usuario a reiniciar su computadora o teléfono.
