"use strict";
class Multimedia {
  // #_url;
  constructor(url) {
    // permite que al instanciar la clase se puedan pasar parametros para definir la caracteristicas de la instancia 
    this._url = url; //se activa la propiedad de la clase -> instanciaDeMultimedia._url
  }

  //un get y un set por propiedad
  get url() {
    return this._url;
  }

  setInicio() {
    console.log(',,,,')
  }
}

class Reproductor extends Multimedia {
  // al reproductor se le pasa la url embebida y el id del html
  constructor(url, id) {
    super(url); //llama al constructor desde el que extiende
    this._id = id;
  }

  // get url() {
  //   return this._url;
  // }

  // set url(nuevaurl) {
  //   this._url = nuevaurl;
  // }

  setInicio(time) {
    // agregar set inicio para tiempo de youtube: a la url le agrega? y tiempo
    this._url += `?start=${time}`;
  }

  playMultimedia() { 
    const newiframe = document.querySelector(this._id);
    // console.log('iframe1', newiframe)
    newiframe.setAttribute("src", this._url);
    // console.log('iframe2', newiframe)

  }

}

const reproductorMusica = new Reproductor("https://www.youtube.com/embed/ReJH1psuB1Q", "#musica");

const reproductorPelicula = new Reproductor("https://www.youtube.com/embed/bb2LX01k-fQ", "#peliculas");

const reproductorSeries = new Reproductor("https://www.youtube.com/embed/rt_IFI_Apq8", "#series");

////////////////////

//
reproductorMusica.setInicio(5);
reproductorPelicula.setInicio(10);
reproductorSeries.setInicio(15);

const collapseOneElement = document.querySelector("#headingOne");
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


