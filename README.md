# FormLab · Práctica Experimental 2

FormLab es una Landing Page desarrollada para la **Práctica Experimental 2 de Desarrollo Web**. El proyecto utiliza React, JSX, Bootstrap y Vite para construir una interfaz responsive organizada mediante componentes funcionales, con un formulario dinámico de registro e inicio de sesión, manejo de estado, eventos y validaciones del lado del cliente.

## Tecnologías

- **React** para componentes funcionales y manejo de estado.
- **JSX** para estructurar la interfaz dentro de los componentes.
- **Bootstrap** para grid responsive, navegación, formularios, botones, cards, alertas y utilidades.
- **CSS personalizado** para conservar la identidad visual de FormLab y complementar Bootstrap.
- **Vite** como entorno de desarrollo y compilación.
- **GitHub Actions** para compilar y publicar la aplicación en GitHub Pages.

## Componentes principales

- `SiteNavbar`: navegación responsive y selector de tema claro/oscuro.
- `Hero`: presentación principal y llamados a la acción.
- `Features`: tarjetas informativas sobre React, Bootstrap y validaciones.
- `AuthSection`: alterna dinámicamente entre registro e inicio de sesión.
- `RegisterForm`: formulario controlado con `useState` y validaciones.
- `LoginForm`: inicio de sesión de demostración basado en la cuenta creada durante la sesión.
- `StatusAlert`: mensajes dinámicos de éxito y error.
- `Team`: integrantes del grupo.
- `Footer`: cierre de la Landing Page.

## Validaciones

El formulario de registro valida:

- nombre y apellido;
- formato correcto de correo electrónico;
- edad entre 18 y 99 años;
- teléfono de 7 a 15 dígitos;
- selección de perfil;
- contraseña de mínimo 8 caracteres con mayúscula, minúscula y número;
- confirmación de contraseña;
- aceptación de términos.

El inicio de sesión es una demostración del lado del cliente. La cuenta creada se mantiene en el estado de React mientras la aplicación permanece abierta; no existe backend ni autenticación real.

## Ejecución local

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir una terminal dentro de la carpeta donde se encuentra `package.json`.
3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección que muestre Vite, normalmente:

```text
http://localhost:5173/
```

## Compilación de producción

Para generar y comprobar la versión final del proyecto:

```bash
npm run build
npm run preview
```

`npm run build` genera la carpeta `dist/`, que contiene la aplicación compilada.

## Integración de Bootstrap

Bootstrap está declarado como dependencia del proyecto y se importa desde `src/main.jsx`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

La interfaz utiliza clases y componentes de Bootstrap junto con estilos propios definidos en `src/styles.css`.

## Publicación en GitHub Pages

1. Crear o utilizar un repositorio público en GitHub.
2. Subir todos los archivos del proyecto, sin incluir `node_modules` ni `dist`.
3. Verificar que `vite.config.js` tenga configurada la ruta base del repositorio:

```js
base: '/GUIAPRACTICA2_DW/'
```

4. Entrar a **Settings → Pages**.
5. En **Build and deployment**, seleccionar **GitHub Actions**.
6. El workflow ubicado en `.github/workflows/` instala las dependencias, ejecuta `npm run build` y publica la carpeta `dist/`.
7. Esperar a que el proceso de **Actions** finalice correctamente y abrir el enlace público.

## Integrantes

- Miguel Peñafiel
- Ricardo Landívar
- Mariana Reyes
- Carlos Llivisupa
- Jackson Reyes

## Enlaces de entrega

- **Repositorio de GitHub:** [GUIAPRACTICA2_DW](https://github.com/ricardolandivar69/GUIAPRACTICA2_DW)
- **GitHub Pages:** [Ver aplicación publicada](https://ricardolandivar69.github.io/GUIAPRACTICA2_DW/)
- **Video demostrativo:** [Ver video en Google Drive](https://drive.google.com/drive/folders/1eSyUK2AHLn4H4Qs30AXZ1dEjfvRK14W3?hl=es)

## Entrega

La entrega de la Práctica Experimental 2 incluye el informe en PDF, el video demostrativo, el repositorio de GitHub y el enlace de GitHub Pages como evidencia adicional de la aplicación publicada.
