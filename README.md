# Tutorial Interactivo sobre APIs


## Descripción del Proyecto
Este proyecto es un sitio web educativo diseñado para presentar un tutorial sobre qué son las Interfaces de Programación de Aplicaciones (APIs), su funcionamiento básico, su utilidad y su importancia en el mundo tecnológico actual. El objetivo principal fue aplicar los conceptos fundamentales de HTML, CSS y JavaScript para crear una experiencia de usuario clara, informativa, accesible y visualmente agradable.

## Tecnologías Utilizadas
-   **HTML5:** Para la estructuración semántica del contenido.
-   **CSS3:** Para el diseño visual, la maquetación, la responsividad (Media Queries) y los estilos del modo oscuro/claro.
-   **JavaScript (ES6+):** Para la lógica del interruptor de Modo Oscuro/Claro, la manipulación del DOM y la gestión de `localStorage`.
-   **Font Awesome:** Para los iconos vectoriales (sol/luna) utilizados en el interruptor de modo.

El tutorial está estructurado en un formato de múltiples páginas:
1.  Una página principal (`index.html`) que sirve como índice y presenta los temas.
2.  Páginas individuales para cada uno de los cinco temas del tutorial, permitiendo al usuario enfocarse en un concepto a la vez.

## Características Implementadas
El proyecto cumple con los siguientes requisitos y funcionalidades clave:

### 1. Estructura HTML Semántica
-   Uso correcto de etiquetas HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<ul>`, `<ol>`, etc.) para una clara definición de la estructura del contenido en todas las páginas.
-   La página principal (`index.html`) contiene una lista ordenada que enlaza a las páginas de cada tema.
-   Cada página de tema (`que-es-api.html`, `analogia-mesero.html`, etc.) presenta el contenido específico del tema, incluyendo títulos, párrafos, listas e imágenes ilustrativas.
-   Se incluye un enlace "Volver al Índice" en cada página de tema para facilitar la navegación.

### 2. Estilos y Diseño con CSS
-   Se utiliza una hoja de estilos externa (`css/style.css`) vinculada a todas las páginas HTML para mantener una apariencia visual consistente.
-   Diseño limpio, con foco en la legibilidad, utilizando una paleta de colores armónica y tipografía adecuada.
-   Estilización de los principales elementos de contenido (encabezados, cuerpo de texto, listas, imágenes, enlaces).
-   Las principales secciones de la página (encabezado, contenido principal, pie de página) están estructuradas en cajas centradas con un ancho máximo para mejorar la lectura en pantallas amplias.

### 3. Diseño Responsivo
-   Implementación de Media Queries en `css/style.css` para asegurar que el sitio web se adapte a diferentes tamaños de pantalla (móviles, tablets y escritorio).
-   Ajustes específicos en márgenes, rellenos, tamaños de fuente y disposición de elementos para optimizar la experiencia en dispositivos con pantallas más pequeñas.

### 4. Interactividad con JavaScript
-   **Interruptor de Modo Oscuro/Claro Global:**
    -   Un botón flotante está presente en todas las páginas del sitio.
    -   El botón utiliza iconos de Font Awesome (un sol para modo claro y una luna para modo oscuro) que cambian dinámicamente según el modo activo.
    -   La preferencia del usuario por el modo oscuro o claro se guarda en `localStorage`, permitiendo que la selección persista entre sesiones de navegación y al cambiar de página.
    -   La funcionalidad está implementada en `js/script.js` y se basa en añadir/quitar una clase (`dark-mode`) al elemento `<body>`, lo que activa diferentes reglas CSS definidas para cada modo.



## Estructura de Archivos del Proyecto

````plaintext
mi-tutorial-api/
├── index.html              # Página principal del índice del tutorial
├── que-es-api.html         # Página del tema 1: ¿Qué es API?
├── analogia-mesero.html    # Página del tema 2: Analogía del Mesero
├── para-que-sirven.html    # Página del tema 3: ¿Para Qué Sirven?
├── ejemplos-accion.html    # Página del tema 4: APIs en Acción
├── importancia-futuro.html # Página del tema 5: Importancia y Futuro
│
├── css/
│   └── style.css           # Hoja de estilos principal
│
├── js/
│   └── script.js           # Lógica de JavaScript
│
└── images/                 # Carpeta para las imágenes del tutorial
├── api_enchufe.webp
├── Api_meseros.jpeg
├── Api_uso.png
├── APIs.png
└── api_futuro.webp
└── README.md               # Documentación
````

## Cómo Visualizar el Proyecto
1.  Asegurar que todos los archivos y carpetas del proyecto estén en el mismo directorio.
2.  Abrir el archivo `index.html` en cualquier navegador web moderno (por ejemplo, Google Chrome, Firefox, Microsoft Edge, Safari).
3.  Navegar a través de los diferentes temas utilizando los enlaces proporcionados en la página de índice.
4.  Probar el interruptor de Modo Oscuro/Claro.
