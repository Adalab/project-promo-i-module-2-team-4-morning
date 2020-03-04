![Adalab](_src/assets/images/logo-adalab-80px.png)

# Awesome Profile-Cards

Awesome Profile-Cards es una aplicación web que nos permite crear una tarjeta de visita personalizada de forma instantanea.

## Cómo funciona

Necesitarás acceder a [nuestra web](https://nodejs.org/), leer las instrucciones y comenzar a personalizar tu tarjeta.

1. Selecciona qué colores quieres que predominen en el diseño
2. Rellena tus datos, ¡no te olvides de comprobar que son los correctos!
3. Añade tu mejor foto
4. ...Y tus redes sociales para que puedan encontrarte
5. ¿Listo? Comparte tu tarjeta mediante un link o directamente a través de Twitter

## ¿Quieres saber más sobre cada sección?

> ### Diseña:

- Nuestro equipo de diseñadores ha elegido los colores que mejor se adaptan para cada tipo de situación (grandes empresas, tarjeta personal, freelancer,...). Selecciona qué gama cromatica quieres que te identifique y visualizalo en tiempo real en la vista preeliminar.

> ### Rellena

- Para que otros puedan contactarte, rellena todos los datos que quieras que aparezcan en tu tarjeta. No te olvides de tu sitio web y redes sociales, son los primeros canales de toma de contacto a los que accederan tus clientes potenciales. Añade tu mejor foto para que todo el mundo sepa quién eres y no haya confusiones. Comprueba siempre tus datos de contacto en la vista preeliminar.

> ### Comparte

- Una vez terminada tu tarjeta guarda tus cambios. Nuestra app generará un link único para tu tarjeta que podrás compartir donde quieras.

## El proyecto

A continuación se muestra cómo se ha realizado la web.

## Estructura del proyecto

Nuestro **gulpfile.js** usa un JSON de configuración con las rutas de los archivos a generar/vigilar.

La estructura de carpetas:

```
/
`- _src
   |- api
   |  |- data.json
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |        |- variables
   |        |- reset
   |         |- interactions
   |
   |- components
   |     |- preview-section
   |     |- main-landing
   |     |- main-app
   |     |- design-section
   |     |- fill-section
   |     |- share-section
   |     |- footer
   |
   `- templates
      `- index
      `- app
      `- partials
         |- header
         |- preview-section
         |- main-landing
         |- main-app
         |- design-section
         |- fill-section
         |- share-section
         |- footer

```

## HTML

Viene incluído el paquete [**gulp-html-partial**](https://www.npmjs.com/package/gulp-html-partial) que nos va a permitir tener un sistema de plantillas html

## Imágenes e iconos

Tenemos en **\_src/** una carpeta para las imágenes del proyecto y una para los iconos como el favicon o los iconos de dispositivos móviles. Estos últimos se generan en la raíz de las carpetas **public/** y **docs/**

## CSS

Viene incluído el paquete [**gulp-combine-mq**](https://www.npmjs.com/package/gulp-combine-mq) que agrupa todas las mediaqueries al final del documento css.

## JS

Podemos usar parciales de JS: en el JSON de configuración, **config.json** especificamos los archivos JS que utilizamos y en el orden que deben procesarse.

## ¿Cómo actualizo si tengo una versión anterior?

En principio puedes descargar todos los archivos fuera de **\_src/** y sustituir los de tu proyecto. Además deberías replicar la estructura de carpetas dentro de **\_src/**.

## Falta algo?

Echas de menos que el kit haga algo en concreto? Pidelo sin problema a través de los Issues o si te animas a mejorarlo mándanos un PR :)
