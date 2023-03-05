"use strict"

const time = document.getElementById("time")
const pajarito = document.getElementById("pajarito")
const audio = document.getElementById("audio")
 
let entero 
let frecuency 
let tiempo = 1500;

function aceptar(){
             entero = String(time.value)
             console.log(entero)
             frecuency =  Number(entero[0]+ entero[1])
             console.log(frecuency)
             
             
             if(frecuency >= 8 && frecuency <= 22){
                if(frecuency > 12){
                    frecuency = frecuency - 12
                }

                let lanzamiento = setInterval(()=>{
                
                    
                    pajarito.setAttribute("class", "pajarito")
                    audio.play()
                    frecuency --
                    
                    
                   setTimeout(function(){
                        pajarito.removeAttribute("class", "pajarito")
                    }, 700)
                    
                   tiempo += 700
                   
                   if(frecuency === 0){
                    clearInterval(lanzamiento)
                   tiempo = 1500
                   frecuency = 0
                  }
                }, tiempo);
             }

             
}


