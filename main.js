const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('h2')

//Cuando haga CLICK en h2
  //quitar la clase activo de todos los bloques
  //vamos a añadir la clase activo del bloque con la posicion del h2

h2.forEach( ( cadaH2 , i ) => {

  
  h2[i].addEventListener('click', ()=>{
    
    bloque.forEach( ( cadaBloque , i )=>{
      bloque[i].classList.remove('activo')
    } )

    bloque[i].classList.add('activo')

  })
})