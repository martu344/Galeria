
const gallery = document.getElementById('galeria')
const galleryBig = document.getElementById('grande')
const nombreimg =document.getElementById('nombredelaimg')
let nombreimagen = []
//si agrego mas imagenes tengo que seguir la secuencia imagen1,imagen2,imagen3...
function galeriaGrande() {
  for(let j = 0; j <= 15;j++){
            for(let i = 1 ; i <=5; i++){
              let srcc= 'imagenes/imagen' + i + '.jpg';
              var divp = document.createElement("div")
              divp.className = "divimg"
              var imgp = document.createElement("img")
              imgp.src = srcc;
              imgp.className = "imgg";
              gallery.appendChild(divp);
              divp.appendChild(imgp);
            }
          }

        }

        galeriaGrande();

const imgGallery = document.getElementsByClassName('imgg')
const img= document.getElementById('imagen')
let identificador;

    const zoom = (ruta)=>{
        galleryBig.style.display= "flex";
        gallery.style.display = "none"
        img.src = ruta.target.src
        identificador = ruta.target.id
        nombreimg.innerHTML = nombreimagen[identificador]
        
      }
       
        for(let h = 0; h < imgGallery.length;h++){
          imgGallery[h].addEventListener('click',zoom)
          imgGallery[h].id=[h]
          nombreimagen.push( 'imagen' + h + '.jpg') 
        }

const atras = document.getElementById("btn1")
const adelante = document.getElementById("btn3")
const close = document.getElementById("btn2")
  
    const retroceder = () => {
      if (identificador > 0){
        identificador--;
      }
      const preimg = document.getElementById(identificador)
      img.src = preimg.src
      nombreimg.innerHTML = nombreimagen[identificador]
      
    }

    atras.addEventListener("click",retroceder)

    const adelantar = () => {
      if (identificador < imgGallery.length-1){
        identificador++;
      }
      const preimg = document.getElementById(identificador)
      img.src = preimg.src
      nombreimg.innerHTML = nombreimagen[identificador]
    }

    adelante.addEventListener("click",adelantar)

    const cerrar = () => {
      galleryBig.style.display= "none";
      gallery.style.display = "flex";
    }

    close.addEventListener("click",cerrar)