# Pruebas unitarias con Jest

Una de las definiciones clásicas de una prueba unitaria describe que es una pieza de código que invoca a otra pieza de código y verifica si el resultado es el esperado. Si bien esta definición es correcta, es un poco abstracta y no nos dice mucho sobre cómo escribir una prueba unitaria o más aún, cómo escribir una buena prueba unitaria usando Jest.

Para escribir una buena prueba unitaria, debemos tener en cuenta los siguientes puntos:

- **Aislada**: Una prueba unitaria no debe depender de ninguna otra prueba unitaria, ni de ningún otro recurso externo como una base de datos, un servicio web, un archivo, etc. Si una prueba unitaria depende de otro recurso externo, entonces no es una prueba unitaria, sino una prueba de integración.

- **Repetible**: Una prueba unitaria debe poder ejecutarse una y otra vez, y siempre debe dar el mismo resultado. Si una prueba unitaria no es repetible, entonces no es una prueba unitaria, sino una prueba de humo.

- **Rápida**: Una prueba unitaria debe ejecutarse en milisegundos, si una prueba unitaria tarda más de un segundo en ejecutarse, entonces no es una prueba unitaria, sino una prueba de carga.

- **Auto-verificable**: Una prueba unitaria debe poder determinar si pasó o falló sin intervención humana. Si una prueba unitaria requiere que un humano verifique el resultado, entonces no es una prueba unitaria, sino una prueba de aceptación.

- **Independiente del entorno**: Una prueba unitaria debe poder ejecutarse en cualquier entorno, ya sea en un entorno de desarrollo, en un entorno de pruebas, en un entorno de producción, etc. Si una prueba unitaria no se puede ejecutar en cualquier entorno, entonces no es una prueba unitaria, sino una prueba de sistema.

- **Independiente del orden**: Una prueba unitaria debe poder ejecutarse en cualquier orden, ya sea que se ejecute primero, segundo, tercero, etc. Si una prueba unitaria no se puede ejecutar en cualquier orden, entonces no es una prueba unitaria, sino una prueba de integración.

- **Incrementable**: Una prueba unitaria debe poder ejecutarse en cualquier conjunto, ya sea que se ejecute solo, en conjunto con otras pruebas unitarias, en conjunto con otras pruebas de integración, etc. Si una prueba unitaria no se puede ejecutar en cualquier conjunto, entonces no es una prueba unitaria, sino una prueba de sistema.

- **Fácil de escribir**: Una prueba unitaria debe ser fácil de escribir, si una prueba unitaria es difícil de escribir, entonces no es una prueba unitaria, sino una prueba de estrés.

- **Fácil de mantener**: Una prueba unitaria debe ser fácil de mantener, si una prueba unitaria es difícil de mantener, entonces no es una prueba unitaria, sino una prueba de regresión.

- **Escrita por un desarrollador**: Una prueba unitaria debe ser escrita por un desarrollador, si una prueba unitaria es escrita por un tester, entonces no es una prueba unitaria, sino una prueba de aceptación.


## Escribiendo nuestra primera prueba unitaria

Retomando el tema de las pruebas unitarias con Jest, en este capítulo vamos a escribir nuestra primera prueba unitaria. Si bien en el capítulo anterior ya escribimos una prueba unitaria, en este capítulo vamos a escribir una prueba unitaria desde cero, para que puedas ver el proceso completo. También me gustaría recomendar dos interesantes extensiones para Visual Studio Code que nos ayudarán a escribir pruebas unitarias con Jest:

- [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets): Esta extensión nos permite escribir código de Jest de manera más rápida, ya que nos provee snippets para las funciones más comunes de Jest.
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner): Esta extensión nos permite ejecutar nuestras pruebas unitarias desde Visual Studio Code, sin necesidad de abrir una terminal.
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest): Esta extensión nos permite ejecutar nuestras pruebas unitarias desde Visual Studio Code, sin necesidad de abrir una terminal.


### Función sumar()

Para escribir nuestra primera prueba unitaria, vamos a crear una función llamada `sum()` que recibe dos números y retorna la suma de ambos números. Para ello, vamos a crear un archivo llamado `sum.js` en la carpeta `src/functions` con el siguiente contenido:

```js
function sumar(a, b) {
  return a + b;
}

module.exports = sumar;
```

Como puedes ver, la función `sum()` recibe dos parámetros `a` y `b` y retorna la suma de ambos parámetros. Ahora, vamos a crear un archivo llamado `sum.test.js` en la carpeta `src/tests` con el siguiente contenido:

```js
const sumar = require('../functions/sum');

test('sumar 1 + 2 es igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});
```

- `require()`: Esta función nos permite importar un módulo de Node.js.
- `test()`: Esta función nos permite escribir una prueba unitaria. Recibe dos parámetros, el primero es una descripción de la prueba unitaria y el segundo es una función que contiene el código de la prueba unitaria.
- `expect()`: Esta función nos permite definir el valor que queremos verificar.
- `toBe()`: Esta función nos permite definir el valor esperado.

Como puedes ver, en este archivo estamos importando la función `sum()` y estamos escribiendo una prueba unitaria que verifica que la suma de 1 y 2 es igual a 3. Para ejecutar esta prueba unitaria, vamos a abrir una terminal en la carpeta raíz del proyecto y vamos a ejecutar el siguiente comando:

```bash
npm run test
```
O también puedes ejecutar la extensión Jest Runner desde Visual Studio Code. Si todo salió bien, deberías ver el siguiente resultado:

```bash
 PASS  src/tests/sum.test.js
  ✓ sumar 1 + 2 es igual a 3 (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.864s, estimated 1s
Ran all test suites.
```

Como puedes ver, la prueba unitaria pasó exitosamente. Ahora, vamos a modificar la prueba unitaria para que falle. Para ello, vamos a modificar el archivo `sum.test.js` de la siguiente forma:

```js
const sumar = require('../functions/sum');

test('sumar 1 + 2 es igual a 3', () => {
  expect(sumar(1, 2)).toBe(4);
});
```

Ahora, vamos a ejecutar la prueba unitaria nuevamente. Si todo salió bien, deberías ver el siguiente resultado:

```bash
 FAIL  src/tests/sum.test.js
  ✕ sumar 1 + 2 es igual a 3 (2ms)

  ● sumar 1 + 2 es igual a 3
    
    expect(received).toBe(expected) // Object.is equality

    Expected: 4
    Received: 3

      2 | 
      3 | test('sumar 1 + 2 es igual a 3', () => {
    > 4 |   expect(sumar(1, 2)).toBe(4);
        |                      ^
      5 | });

      at Object.<anonymous> (src/tests/sum.test.js:4:22)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.864s, estimated 1s
Ran all test suites.
```

Como puedes ver, la prueba unitaria falló.



### Actividad

- En el archivo *02-subtract.js* crea una función llamada `subtract()` que reciba dos números y retorne la resta de ambos números. (No olvides exportar la función)
- En el archivo *02-subtract.test.js* escribe una prueba unitaria que verifique que la resta de 1 y 2 es igual a -1.
- Ejecuta la prueba unitaria y verifica que la misma pase exitosamente.



## Anatomía de una prueba unitaria

En el punto anterior escribimos nuestra primera prueba unitaria, en esta sección vamos a profundizar en la anatomía de una prueba unitaria. Como ya sabemos, una prueba unitaria es una función que verifica que una función o un módulo se comporte de la forma esperada. En este capítulo vamos a ver los diferentes componentes de una prueba unitaria.

### Descripción

La descripción de una prueba unitaria es una cadena de texto que describe el comportamiento que estamos probando. Por ejemplo, si estamos probando una función que suma dos números, la descripción de la prueba unitaria podría ser `sumar 1 + 2 es igual a 3`. La descripción de una prueba unitaria es muy importante, ya que nos permite saber qué es lo que estamos probando.  

### Bloque de código

El bloque de código de una prueba unitaria es una función que contiene el código que queremos probar. Por ejemplo, si estamos probando una función que suma dos números, el bloque de código de la prueba unitaria podría ser `sumar(1, 2)`. El bloque de código de una prueba unitaria es muy importante, ya que nos permite saber qué es lo que estamos probando.

### Expectativa

La expectativa de una prueba unitaria es una función que define el valor que queremos verificar. Por ejemplo, si estamos probando una función que suma dos números, la expectativa de la prueba unitaria podría ser `expect(sumar(1, 2))`. La expectativa de una prueba unitaria es muy importante, ya que nos permite saber qué es lo que estamos probando.

### Valor esperado

El valor esperado de una prueba unitaria es el valor que esperamos que retorne el bloque de código de la prueba unitaria. Por ejemplo, si estamos probando una función que suma dos números, el valor esperado de la prueba unitaria podría ser `toBe(3)`. El valor esperado de una prueba unitaria es muy importante, ya que nos permite saber qué es lo que estamos probando.


