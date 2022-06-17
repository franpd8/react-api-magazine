#  React Magazine

## Índice

* Sobre el proyecto
    * Instalación y despliegue
    * Tecnologías usadas
    * Origen
    * Objetivos
    * Concepto e inspiración

* Retos presentados

* Agradecimientos

* Autores

## Sobre el proyecto

### 💫 Instalación y despliegue

Para descargarte el repositorio, en Visual Studio, abre una terminal y ejecuta el comando siguiente:

```
$ git clone https://github.com/franpd8/react-api-magazine
```
 
Seguidamente tendrás que descargar los módulos externos con node (Axios, Sass). Para ello, realiza el siguiente comando.

```
$ npm i
```

Después, correr la aplicación de React en nuestro navegador a través de:

```
$ npm start
```


### 💻 Tecnologías usadas

* HTML
* CSS
* Sass
* Javascript
* React
* React-GlobalContext
* React-Router

### Origen

Este proyecto está pensado como un ejercicio en The Bridge que nos permita poner en práctica los nuevos conocimientos adquiridos sobre React, concretamente utilizando React Router y Sass. Vienen de la mano el familizarnos con crear diversos componentes en React y poder acceder de forma global al contenido de ciertas funciones que nos han ayudado a desarrollar el proyecto. 

### ⚔️ Objetivos

Crear una API REST que sea capaz de lo siguiente:
* Un mini-proyecto de React para practicar todos los elementos básicos de React ya vistos.
* Implementar una "web de noticias", en este caso una revista digital.
* Uso de [NYT News API](https://developer.nytimes.com/apis) (puedes leer su [documentación aquí ↗](https://developer.nytimes.com/get-started))
* Uso del router React
* Utilizar componentes anidados (cabecera, home, pie de página, formulario, lista de noticias).
* Utilizar React Context
* Utilizar SASS


### ⚔️ Funciones

En esta revista digital, tenemos dos elementos principales: <u>home</u> y <u>submit</u>. En el primer elemento podemos leer los artículos recogidos por la API y en el segundo, podemos enviar artículos al <i>localStorage</i>

### ⚔️ React Router

Gracias a React Router podemos crear diferentes rutas dentro de nuestra aplicación de React en una SPA y navegar entre componentes (artículos y formulario).

 * [x] /home. Donde vemos los artículos traídos por la API.
 * [x] /submit. 


### ⚔️ Sass

Implementando Sass, podemos hacer uso de variables para los colores, tipografías y anchos de los diversos elementos durante la maquetación, de cara a poder reutilizarlos y modificarlos más adelante. 


## 🔜 Futuras Implementaciones

* Diseño responsive. 
* Crear una variable para permitir distintas llamadas a la API y variar el contenido de la revista. 
* Borrar imágenes antiguas una vez son actualizadas. 
* Permitir subir varias imágenes a cada post.


##  ♥️ Agradecimientos

A todos los compis([Mike](https://github.com/MrSetOne),[Xavi](https://github.com/xavi-mat),[Germán](https://github.com/Molerog),[Vane](https://github.com/vaneebg/) y profes en general: ([Sofía](https://github.com/SofiaPinilla), [Geer](https://github.com/GeerDev) e [Iván](https://github.com/ivanpuebla10)]).


## Autor

### 🐱[Fran](https://github.com/franpd8)🐱
