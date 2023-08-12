# Introducción a las pruebas unitarias

Las pruebas unitarias o Unit Test son parte del proceso de desarrollo del software, estas nos permiten corroborar que el código que estamos escribiendo funciona correctamente. Además, nos permiten detectar errores en el código antes de que estos lleguen a producción o evitar que se produzcan errores cuando se realizan cambios en el código.

Las pruebas unitarias garantizan que el código cumpla con las expectativas que se tienen sobre él. Por ejemplo, si tenemos una función que suma dos números, las pruebas unitarias nos permitirán corroborar que la función suma dos números correctamente.

Realizar pruebas a nuestro código es la mejor forma de reducir lo más posible los errores en el código. Además, nos permite tener un código más limpio y fácil de mantener.

## ¿Qué es una prueba unitaria?

Una prueba unitaria es una prueba que se realiza a una unidad de código, por ejemplo, una función, una clase, un componente, etc. El objetivo de una prueba unitaria es verificar que la unidad de código funcione correctamente.

Las pruebas unitarias forman parte de un conjunto de pruebas del software, estas pruebas se conocen como pruebas de software. Las pruebas de software se dividen en tres tipos:

- **Pruebas unitarias**: Estas pruebas se realizan a una unidad de código, por ejemplo, una función, una clase, un componente, etc. El objetivo de estas pruebas es verificar que la unidad de código funcione correctamente.
- **Pruebas de integración**: Estas pruebas se realizan a un conjunto de unidades de código, por ejemplo, un conjunto de funciones, clases, componentes, etc. El objetivo de estas pruebas es verificar que las unidades de código funcionen correctamente cuando se integran entre sí.
- **Pruebas de UI**: Estas pruebas se realizan a la interfaz de usuario, por ejemplo, a una página web, a una aplicación móvil, etc. El objetivo de estas pruebas es verificar que la interfaz de usuario funcione correctamente.

En este caso nos dedicaremos pura y exclusivamente a las pruebas unitarias. 


## Configuración del entorno de desarrollo

Para este curso utilizaremos el siguiente entorno de desarrollo:

- NODEJS: 16 o superior
- NPM: 7 o superior
- Visual Studio Code: 1.60 o superior
- Sistema operativo: Windows 10 o superior
- Navegador: Google Chrome
- Vanilla-JS armado usando ViteJS
- Jest: 27 o superior

Deberás clonar el repositorio del curso siguiendo los siguientes pasos:

1. Abre una terminal y ejecuta el siguiente comando:

```bash
git clone
```

2. Luego, ingresa a la carpeta del proyecto:

```bash
cd vanilla-js-unit-test
```

3. Instala las dependencias del proyecto:

```bash
npm install
```

4. Ejecuta el proyecto:

```bash
npm run dev
```

5. Abre el navegador y ve a la siguiente URL:

```bash
http://localhost:3000
```

6. Corre las pruebas unitarias:

```bash
npm run test
```
