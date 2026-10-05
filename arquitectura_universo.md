# 🌌 AUM-IC (Arquitectura de Universos Multidimensionales de Ingeniería Creativa)

**Versión:** 1.0.0
**Autor:** Ingeniería Creativa (IC)
**Naturaleza:** Manifiesto Arquitectónico y Estándar de Programación (Clean Architecture)

---

## 1. Introducción: ¿Qué es AUM-IC?

**AUM-IC** no es un framework ni una librería; es un **estándar arquitectónico estricto** diseñado para construir aplicaciones web de grado empresarial (Enterprise) que sean infinitamente escalables, predecibles y mantenibles. 

Nace de la necesidad de resolver problemas endémicos en el desarrollo web moderno:
*   **HTML Ilegible:** Creado por el abuso de frameworks basados en utilidades (como Tailwind CSS) que mezclan el estilo con la estructura.
*   **Acoplamiento Fuerte:** Componentes que mezclan consultas a bases de datos (SQL/APIs) con renderizado visual.
*   **Caos de Directorios:** Proyectos donde es imposible saber dónde se ubica un componente o cuál es su nivel de complejidad.
*   **Mantenimiento Imposible:** Donde cambiar un color corporativo o un texto multi-idioma obliga a reescribir cientos de archivos.

AUM-IC resuelve esto fusionando tres de los conceptos más robustos de la ingeniería de software: **El Patrón MVC (Modelo-Vista-Controlador)**, **Atomic Design (Diseño Atómico)** y **Clean Code (Código Limpio)**, llevándolos a una analogía universal que cualquier desarrollador o Inteligencia Artificial puede comprender al instante.

---

## 2. La Escala Cósmica (Estructura de la Vista / Front-end)

El renderizado de interfaces (La "Vista" en MVC) abandona el desorden y adopta un ensamblaje jerárquico estricto. Un componente superior puede contener a uno inferior, **pero jamás al revés.**

Para garantizar el ordenamiento perfecto en cualquier editor de código, los directorios utilizan prefijos numéricos:

```text
src/
├── components/
│   ├── 1-atoms/         (⚛️ Átomos)
│   ├── 2-molecules/      (🧬 Moléculas)
│   ├── 3-cells/          (🦠 Células)
│   ├── 4-organisms/      (🦖 Seres Vivos)
│   └── 5-planets/        (🌍 Planetas)
├── layouts/              (☀️ Sistemas Solares)
└── pages/                (🌌 Galaxias)
```

### ⚛️ Nivel 1: Átomos (`1-atoms/`)
*   **Definición:** La unidad visual más pequeña e indivisible.
*   **Ejemplos:** `<Boton />`, `<InputTexto />`, `<Etiqueta />`, `<IconoSVG />`.
*   **Regla de Oro:** Son 100% ignorantes. No saben en qué página están, no hacen peticiones web, no traducen idiomas. Solo reciben datos visuales (*props*) y los dibujan. Tienen su propio estilo SCSS aislado.

### 🧬 Nivel 2: Moléculas (`2-molecules/`)
*   **Definición:** La unión de dos o más átomos para construir un componente con propósito.
*   **Ejemplos:** `<CampoFormulario />` (Combina un Átomo `Etiqueta` + Átomo `InputTexto` + Átomo `TextoError`).
*   **Regla de Oro:** Comienzan a tener encapsulamiento de interfaz, pero siguen sin poseer lógica de negocio compleja.

### 🦠 Nivel 3: Células (`3-cells/`)
*   **Definición:** Contenedores funcionales completos compuestos por moléculas y átomos.
*   **Ejemplos:** `<ContactForm />` (Formulario con validación visual y botón de envío).
*   **Regla de Oro:** Manejan eventos de usuario (clicks, submits) pero delegan el procesamiento profundo a capas superiores.

### 🦖 Nivel 4: Seres Vivos (`4-organisms/`)
*   **Definición:** Bloques interactivos complejos y altamente independientes. 
*   **Ejemplos:** `<BloqueSuscripcion />` (Texto de marketing, imagen promocional, y la Célula del formulario).
*   **Regla de Oro:** Son piezas de software que pueden ser movidas de una página a otra y seguirán funcionando como un organismo autónomo.

### 🌍 Nivel 5: Planetas (`5-planets/`)
*   **Definición:** Grandes macro-secciones que marcan la división estructural de una página. Corresponden a las etiquetas HTML semánticas (`<header>`, `<footer>`, `<section>`).
*   **Ejemplos:** `<MainHeader />`, `<HeroSection />`, `<ServicesGrid />`.
*   **Regla de Oro:** Son el "hogar" de los Seres Vivos y Células. Estructuran la cuadrícula (Grid/Flexbox) general de la sección.

### ☀️ Nivel 6: Sistemas Solares (`layouts/`)
*   **Excepción Astro:** Por convención nativa del framework, este nivel omite el prefijo numérico para no romper integraciones de terceros.
*   **Definición:** Las plantillas maestras o el esqueleto gravitacional. 
*   **Ejemplos:** `<BaseLayout />`, `<DashboardLayout />`.
*   **Regla de Oro:** Son los únicos archivos autorizados para contener las etiquetas de raíz HTML (`<html>`, `<head>`, `<body>`). Manejan los metadatos SEO, la importación de tipografías y abren el espacio (el `<slot />`) para que las Galaxias inyecten sus Planetas.

---

## 3. La Fuerza de Gravedad: Lógica y Datos (MVC Estricto)

Bajo AUM-IC, está **estrictamente prohibido** que un componente visual consulte una base de datos. La arquitectura debe mantener la filosofía "Clean":

### 💾 El Modelo (`src/models/` o `src/services/`)
El ADN del universo. Aquí viven las clases, funciones y repositorios de TypeScript puro que interactúan con el mundo exterior (APIs externas, bases de datos SQL/NoSQL, Stripe, etc.). 
*   **Por qué:** Si el día de mañana Ingeniería Creativa cambia la base de datos de PostgreSQL a MongoDB, solo se modifican los archivos del Modelo. La Vista no se entera ni se rompe.

### 🌌 El Controlador (`src/pages/` - Galaxias)
En Astro, las páginas actúan como Controladores. 
*   Su único trabajo es recibir la petición web, llamar al **Modelo** para extraer los datos, inicializar las variables de entorno, decidir qué **Sistema Solar** usar, y pasarle la información. Las Galaxias tienen muy poco código, actuando como directores de orquesta.

---

## 4. La Física del Universo: Estilos y SCSS

AUM-IC prohíbe las clases utilitarias aglomeradas en el HTML (Tailwind). En su lugar, utiliza el poder de SCSS y los "Scoped Styles" (Estilos Encapsulados) de Astro.

1.  **Aislamiento (Scoped CSS):** Cada componente (del 1 al 5) maneja su propio estilo. Al compilar, el motor le asigna un código hash único (ej. `class="btn-submit astro-XYZ123"`). **Por qué:** Garantiza matemáticamente que los estilos de un Átomo jamás colisionen con los de otro componente.
2.  **El Núcleo Global (`src/styles/`):** Existe un único centro de gravedad para el diseño general:
    *   `_variables.scss`: Colores hex, tipografías, variables de espaciado.
    *   `_mixins.scss`: Funciones de SCSS para Media Queries (Responsive) y animaciones.
    *   **Regla:** Prohibido usar colores quemados (`#FFF`) en los componentes. Deben invocar las variables (`$color-primary`). Si la marca hace un rediseño corporativo, se cambia un solo archivo y todo el universo muta instantáneamente.

---

## 5. Multidimensionalidad: Internacionalización (i18n)

Hacer una aplicación multi-idioma (multidimensional) suele ser destructivo para el código. AUM-IC lo soluciona aislando los diccionarios.

1.  **Diccionarios (`src/i18n/`):** Todos los textos viven en formatos JSON o TS (ej. `en.json`, `es.json`).
2.  **Agnosticismo Atómico:** Un Átomo no puede traducir. Si un Botón necesita decir "Enviar", el Planeta o Célula que lo invoca es quien debe leer el diccionario y pasarle la palabra "Enviar" como prop.
3.  **Consciencia Espacial (Rutas):** Las Galaxias (`/es/contacto`, `/en/contact`) saben en qué idioma están. Utilizan un "Traductor Universal" (`useTranslations(lang)`) para inyectar el idioma correcto hacia abajo, evitando pasar variables en cascada por 6 niveles (Prop Drilling).

---

## 6. Estándares Técnicos Inquebrantables

Cualquier proyecto bajo AUM-IC debe pasar por estos filtros de calidad:

*   **Fichas de Anatomía (JSDoc Invisibles):** Todo archivo `.astro` debe iniciar con un comentario explicativo (Tipo, Propósito, Composición). Al escribirse en el bloque del Servidor, este comentario es destruido en la compilación y **jamás llega al HTML del cliente**, protegiendo la propiedad intelectual y reduciendo el peso de transferencia.
*   **Contratos TypeScript (Interfaces):** Todo componente que reciba datos (Props) debe definir una `interface Props {}` estricta. Si una Molécula exige recibir un `string`, el motor lanzará error si se le pasa un número. Cero sorpresas en producción.
*   **Alias Absolutos (Path Aliases):** El archivo `tsconfig.json` debe definir atajos (ej. `@atoms/`, `@layouts/`). Está prohibido usar rutas relativas destructivas como `../../../../1-atoms/Boton.astro`.
*   **Islas de Interatividad (Cero JS por defecto):** El código compilará en HTML/CSS puro ultra rápido. Solo se enviará JavaScript al navegador del usuario usando directivas estrictas (`client:load`, `client:visible`) en los Seres Vivos o Células que realmente lo requieran.

---

> *"AUM-IC no es solo escribir código limpio. Es estructurar el universo digital para que escale durante décadas sin colapsar bajo su propia gravedad."*
> — **Ingeniería Creativa**
