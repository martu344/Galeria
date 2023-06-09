
let gallery = document.getElementById('galeria')
let galleryBig = document.getElementById('grande')

function galeriaGrande() {
  for(let j = 0; j <= 6;j++){
            for(let i = 1 ; i <=5; i++){
              let srcc= 'imagenes/imagen' + i + '.jpg';
              var imgp = document.createElement("img")
              imgp.src = srcc;
              imgp.className = "imgg";
              gallery.appendChild(imgp);

            }
          }

        }

        galeriaGrande();

let imgGallery = document.getElementsByClassName('imgg')
let img= document.getElementById('imagen')
let identificador;

    const zoom = (ruta)=>{
        galleryBig.style.display= "flex";
        gallery.style.display = "none"
        img.src = ruta.target.src
        identificador = ruta.target.id
          
      }
       
        for(let h = 0; h < imgGallery.length;h++){
          imgGallery[h].addEventListener('click',zoom)
          imgGallery[h].id=[h]
        }

let atras = document.getElementById("btn1")
let adelante = document.getElementById("btn3")
let close = document.getElementById("btn2")
  
    const retroceder = () => {
      if (identificador > 0){
        identificador--;
      }
      const preimg = document.getElementById(identificador)
      img.src = preimg.src
      
    }

    atras.addEventListener("click",retroceder)

    const adelantar = () => {
      if (identificador < imgGallery.length-1){
        identificador++;
      }
      const preimg = document.getElementById(identificador)
      img.src = preimg.src
     
    }

    adelante.addEventListener("click",adelantar)

    const cerrar = () => {
      galleryBig.style.display= "none";
      gallery.style.display = "flex";
    }

    close.addEventListener("click",cerrar)