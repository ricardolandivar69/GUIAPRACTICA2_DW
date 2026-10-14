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

## Instalación local

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Vite mostrará una dirección local, normalmente:

```text
http://localhost:5173/
```

## Compilación de producción

```bash
npm run build
npm run preview
```

`npm run build` genera la carpeta `dist/` con la versión compilada del proyecto.

## Integración de Bootstrap

Bootstrap está declarado como dependencia del proyecto y se importa desde `src/main.jsx`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

La interfaz utiliza clases y componentes de Bootstrap junto con estilos propios definidos en `src/styles.css`.

## GitHub Pages

Repositorio:

```text
https://github.com/ricardolandivar69/GUIAPRACTICA2_DW
```

Sitio publicado:

```text
https://ricardolandivar69.github.io/GUIAPRACTICA2_DW/
```

`vite.config.js` debe utilizar:

```js
base: '/GUIAPRACTICA2_DW/'
```

La publicación se realiza mediante el workflow ubicado en `.github/workflows/`, por lo que en GitHub debe configurarse:

**Settings → Pages → Source → GitHub Actions**

## Integrantes

- Miguel Peñafiel
- Ricardo Landívar
- Mariana Reyes
- Carlos Llivisupa
- Jackson Reyes

## Entrega

La entrega de la Práctica Experimental 2 incluye:

1. informe en PDF;
2. video demostrativo en Google Drive;
3. repositorio de GitHub con el proyecto completo;
4. enlace de GitHub Pages como evidencia adicional de la Landing Page publicada.
