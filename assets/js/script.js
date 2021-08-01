"use strict";

class Multimedia {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url
  }

  setInicio() {
    console.log(',,,,')

  }
}

class Reproductor extends Multimedia {
  // al reproductor se le pasa la url embebida y el id del html
  constructor(url, id) {
    super(url);
    this.id = id;
  }

  setInicio(time) {
    // agregar set inicio para tiempo de youtube
    super._url += `?start=${time}` 
    // a la url le agrega?ytiempo
    // this._url += `?start=${time}`
    // la url original
  }

  playMultimedia() {
    //obtener url y id 

    const iframe = document.querySelector(this.id);
    iframe.setAttribute("src", this.url)
  }

}

////////////////////

//
const reproductorMusica = new Reproductor("https://www.youtube.com/embed/dQw4w9WgXcQ", "#musica");

const reproductorPelicula = new Reproductor("https://www.youtube.com/embed/jeI992mvlEY", "#peliculas");

const reproductorSeries = new Reproductor("https://www.youtube.com/embed/jeI992mvlEY", "#series");

//
reproductorMusica.setInicio(1);
reproductorPelicula.setInicio(2);
reproductorSeries.setInicio(2);

//
const collapseOneElement = document.querySelector('#headingOne');
collapseOneElement.addEventListener("click", function () {
  reproductorMusica.playMultimedia();
})

const collapseTwoElement = document.querySelector('#headingTwo');
collapseTwoElement.addEventListener("click", function () {
  reproductorPelicula.playMultimedia();
})

const collapseThreeElement = document.querySelector('#headingThree');
collapseThreeElement.addEventListener("click", function () {
  reproductorSeries.playMultimedia();
})


// const iframemusica = document.querySelector('#musica')
// const iframepelicula = document.querySelector('#pelicula')
// const iframeserie = document.querySelector('#serie')


//que se carguen:
// reproductorPelicula.playMultimedia();
// reproductorSeries.playMultimedia();


