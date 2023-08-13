# Jest

Es probable que la mayoría de proyectos con los que trabajes usen Jest para correr las pruebas unitarias. Jest es un framework de pruebas unitarias desarrollado por Facebook, y es el framework de pruebas unitarias más popular para JavaScript.

## Instalación de Jest

Para instalar Jest en tu proyecto, debes ejecutar el siguiente comando:

```bash
npm install --save-dev jest
```

## Configuración de Jest

Si bien este repositorio ya cuenta con la ultima versión de Jest, es necesario que sepas como configurar Jest en tu proyecto.
Antiguamente tenías que crear un archivo de configuración para Jest, pero ahora Jest funciona sin necesidad de un archivo de configuración. Sin embargo, si quieres configurar Jest, puedes hacerlo creando un archivo `jest.config.js` en la raíz de tu proyecto.

Lo que sí es necesario es que agregues un script en el archivo `package.json` para ejecutar Jest. Para ello, debes agregar el siguiente script:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Ejecución de las pruebas unitarias

Para ejecutar las pruebas unitarias, debes ejecutar el siguiente comando:

```bash
npm run test
```

## Estructura de un proyecto de pruebas unitarias

Un proyecto de pruebas unitarias tiene la siguiente estructura:

```bash

├── src
│   ├── index.js
│   └── index.test.js
├── package.json
└── package-lock.json
```

## Estructura de un proyecto de pruebas unitarias con Vanilla-JS propuesta por el autor

Para este curso, se propone la siguiente estructura:

```bash

├── src
│   ├── functions
│   │   ├── 01-sum.js
│   └── tests
│       ├── 01-sum.test.js
├── main.js
├── package.json
└── package-lock.json
```

Como se puede observar, se propone que las pruebas unitarias se encuentren en la carpeta `tests`, y que los archivos de las funciones se encuentren en la carpeta `functions`.

Cuando ejecutemos el comando `npm run test`, Jest buscará todos los archivos que terminen con `.test.js` y los ejecutará, a su vez estos archivos para test importarán las funciones que se encuentran en la carpeta `functions` para poder ejecutar las pruebas unitarias.

La idea de tener una carpeta para tests es que esta refleja la estructura de la carpeta `src`, de esa manera es más fácil encontrar los archivos de las pruebas unitarias.


## Estructura de un archivo de pruebas unitarias

Un archivo de pruebas unitarias tiene la siguiente estructura:

```js
describe('Nombre de la prueba unitaria', () => {
  test('Nombre de la prueba unitaria', () => {
    // Código de la prueba unitaria
  });
});
```

- `describe`: Agrupa una serie de pruebas unitarias.
- `test`: Define una prueba unitaria.


En el siguiente capítulo veremos cómo escribir pruebas unitarias con Jest paso a paso. 



