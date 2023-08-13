# Patrón AAA (Arrange, Act, Assert)

En este capítulo vamos a aprender sobre el patrón AAA (Arrange, Act, Assert) para escribir pruebas unitarias. Pero, ¿por qué es importante este patrón? Porque nos ayuda a escribir pruebas unitarias más legibles y fáciles de mantener.

## Arrange

En esta sección vamos a preparar todo lo necesario para ejecutar la prueba unitaria. Por ejemplo, si vamos a probar una función, en esta sección vamos a definir los argumentos que le vamos a pasar a la función.

## Act

En esta sección vamos a ejecutar la prueba unitaria. Por ejemplo, si vamos a probar una función, en esta sección vamos a ejecutar la función con los argumentos que definimos en la sección anterior.

## Assert

En esta sección vamos a verificar que el resultado de la prueba unitaria sea el esperado. Por ejemplo, si vamos a probar una función, en esta sección vamos a verificar que el resultado de la función sea el esperado.


## Ejemplo


```js

describe('Comparadores comunes', () => {
  const user = {
    name: "oscar",
    lastname: "barajas"
  }
  const user2 = {
    name: "oscar",
    lastname: "barajas"
  }
  const user3 = {
    name: "oscar",
    lastname: "barajut"
  }
  test('igualdad de elementos', () => {
    expect(user).toEqual(user2)
  })
  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user3)
  })
})
```


