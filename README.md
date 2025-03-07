### SetUp

#npm
npm install
npm start

#yarn
yarn install
yarn start

===Recursos y librerías incluídas===

### Expo

Expo es una plataforma que proporciona un conjunto completo de herramientas para simplificar desde el desarrollo inicial hasta el despliegue de aplicaciones móviles utilizando JavaScript y React Native

### React-native-elements

Esta librería proporciona una colección de componentes predefinidos que facilitan la creación de
interfaces de usuario consistentes. Actualmente, los componentes están envueltos en un tema que proporciona
estilos universales

- Este tema está disponible para su modificación en src\utils\RNEtheme.js

La apariencia de los componentes puede consultarse en todo momento en la pantalla de screens\Home.js
Además, existen temas en la red creados por terceros de los que puede hacerse uso. Es posible sobrescribir propiedades
de los componentes directamente, remplazando el estilo establecido en el tema por el nuevo valor,
como en el siguiente ejemplo de un botón con fondo rojo:

- <Button
- title="Presionar"
- onPress={() => alert('¡Botón presionado!')}
- buttonStyle={{ backgroundColor: 'red' }}
- />

El nuevo valor se superpone al valor establecido en el tema para esa propiedad, pero las demás propiedades siguen tomando los estilos del tema.
Aunque react-native-elements ofrece una amplia gama de componentes, puede ser que el proyecto requiera uno específico que no provea.
En esos casos, se puede considerar utilizar otras librerías como React Native Paper o NativeBase cuya
instalación y configuración es similar a RNE

- Catálogo de componentes y sus propiedades disponible en [](https://reactnativeelements.com/docs)

### Jest

Jest es un framework de pruebas de JavaScript utilizado para realizar pruebas unitarias y de integración

- Estructura inicial en **tests**\funciones\example.test.js

### Redux

Redux es una biblioteca de gestión del estado que facilita el manejo de datos compartidos entre múltiples componentes

- Configuración básica disponible en \src\contexts\store.js

### react-native-async-storage

React-native-async-storage es una solución sencilla para almacenar datos persistentes en aplicaciones React Native. Nos permite guardar información localmente, como configuraciones de usuario o datos de sesión

### Prettier

Prettier es una herramienta de formateo de código que garantiza que el código JavaScript en el proyecto siga un estilo consistente y legible automáticamente, mejorando la mantenibilidad del código y la colaboración en equipo

- Reglas disponibles en .prettierrc. Se recomienda instalar la extensión Prettier - Code formatter para mayor eficiencia

### Nativewind

NativeWind es una biblioteca CSS optimizada para el diseño de interfaces de usuario en aplicaciones móviles nativas. Se basa en clases utilitarias al estilo de Tailwind CSS

- Configuración inicial en ./tailwind.config.js

### Axios 

Axios es una biblioteca JavaScript que proporciona métodos asíncronos como axios.get, axios.post, axios.put, y axios.delete para realizar operaciones HTTP
- Configuración inicial en src\api\config.js, implementados métodos GET, POST, PUT y DELETE para consumo de API de pruebas
- Ejemplo de un servicio para manejar las operaciones de un controlador en \src\services\exampleService.js
#   W a b e - A p p  
 