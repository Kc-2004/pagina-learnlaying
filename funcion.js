	//Funciones para el nivel Básico
	//funciones para los botones de la primera imagen
	function correcto() {//boton que tiene la respuesta correcta  de la primera imagen
		document.getElementById('correcto').style.backgroundColor= "#58FA58"//pone el boton en color verde
		document.getElementById("parte1").style.display="block "//muestra el mensaje correcto
	//los siguientes document serviran para dejar los demás botones sin color, en caso de que ya se haya equivocado, se quitara el colo de ese boton
		document.getElementById("incorrecto").style.backgroundColor= "white"
		document.getElementById("distractor1").style.backgroundColor="white"
		document.getElementById("distractor2").style.backgroundColor="white"
		document.getElementById("distractor3").style.backgroundColor="white"
		document.getElementById("prueba2").style.display="block"//muestra la siguiente imagen
		document.getElementById("parte1i").style.display="none "//oculta el mensaje incorrecto

	}
	function incorrecto() {// boton de respuesta incorrecta
		document.getElementById('incorrecto').style.backgroundColor= "#FF7777"
		document.getElementById("parte1i").style.display="block "
				document.getElementById("correcto").style.backgroundColor= "white"
				document.getElementById("parte1").style.display="none "
				document.getElementById("distractor1").style.backgroundColor="white"
				document.getElementById("distractor2").style.backgroundColor="white"
				document.getElementById("distractor3").style.backgroundColor="white"
	}
	function distractor1(){
		document.getElementById('distractor1').style.backgroundColor="#FF7777"
		document.getElementById('parte1i').style.display="block"
		document.getElementById("parte1").style.display="none"
		document.getElementById('correcto').style.backgroundColor="white"
		document.getElementById('incorrecto').style.backgroundColor="white"
		document.getElementById("distractor2").style.backgroundColor="white"
		document.getElementById("distractor3").style.backgroundColor="white"
	}
	function distractor2(){
		document.getElementById('distractor2').style.backgroundColor="#FF7777"
		document.getElementById('parte1i').style.display="block"
 		document.getElementById("correcto").style.backgroundColor="white"
		document.getElementById("incorrecto").style.backgroundColor="white"
       	document.getElementById("distractor1").style.backgroundColor="white"           
		document.getElementById("parte1").style.display="none"
		document.getElementById("distractor3").style.backgroundColor="white"
	}
		function distractor3(){
		document.getElementById('distractor3').style.backgroundColor="#FF7777"
 		document.getElementById("correcto").style.backgroundColor="white"
		document.getElementById("incorrecto").style.backgroundColor="white"
       	document.getElementById("distractor1").style.backgroundColor="white"  
       	document.getElementById("distractor2").style.backgroundColor="white"         
		document.getElementById("parte1i").style.display="block"
		document.getElementById("parte1").style.display="none"
	}
	//Funciones para los botones de la segunda imagen
	function parte2_mal1(){
				document.getElementById('parte2_mal1').style.backgroundColor="#FF7777"
			document.getElementById('parte2i').style.display="block"
		document.getElementById('parte2_mal2').style.backgroundColor="white"
        document.getElementById('parte2_mal3').style.backgroundColor="white"
	    document.getElementById('parte2_mal4').style.backgroundColor="white"
		document.getElementById('parte2_correcto').style.backgroundColor="white"
		 document.getElementById('parte2').style.display="none"
	}
	function parte2_mal2(){
				document.getElementById('parte2_mal2').style.backgroundColor="#FF7777"
			document.getElementById('parte2i').style.display="block"
		document.getElementById('parte2_mal1').style.backgroundColor="white"
        document.getElementById('parte2_mal3').style.backgroundColor="white"
	    document.getElementById('parte2_mal4').style.backgroundColor="white"
		document.getElementById('parte2_correcto').style.backgroundColor="white"
 document.getElementById('parte2').style.display="none"
	}
	function parte2_mal3(){
				document.getElementById('parte2_mal3').style.backgroundColor="#FF7777"
			document.getElementById('parte2i').style.display="block"
		document.getElementById('parte2_mal2').style.backgroundColor="white"
        document.getElementById('parte2_mal1').style.backgroundColor="white"
	    document.getElementById('parte2_mal4').style.backgroundColor="white"
		document.getElementById('parte2_correcto').style.backgroundColor="white"
 document.getElementById('parte2').style.display="none"
	}
	function parte2_correcto(){//boton que tiene la respuesta correcta  de la primera imagen
		document.getElementById('parte2_correcto').style.backgroundColor= "#58FA58"//pone el boton en color verde
		document.getElementById("parte2").style.display="block "//muestra el mensaje correcto
	//los siguientes document serviran para dejar los demás botones sin color, en caso de que ya se haya equivocado, se quitara el colo de ese boton
		document.getElementById("parte2_mal1").style.backgroundColor= "white"
		document.getElementById("parte2_mal2").style.backgroundColor="white"
		document.getElementById("parte2_mal3").style.backgroundColor="white"
		document.getElementById("parte2_mal4").style.backgroundColor="white"
		document.getElementById("prueba3").style.display="block"//muestra la siguiente imagen
		document.getElementById("parte2i").style.display="none "//oculta el mensaje incorrecto
	}
function parte2_mal4(){
				document.getElementById('parte2_mal4').style.backgroundColor="#FF7777"
			document.getElementById('parte2i').style.display="block"
		document.getElementById('parte2_mal2').style.backgroundColor="white"
        document.getElementById('parte2_mal3').style.backgroundColor="white"
	    document.getElementById('parte2_mal1').style.backgroundColor="white"
		document.getElementById('parte2_correcto').style.backgroundColor="white"
		document.getElementById('parte2').style.display="none"
	}
		//Funciones para los botones de la tercera imagen
	function parte3_mal1(){
				document.getElementById('parte3_mal1').style.backgroundColor="#FF7777"
			document.getElementById('parte3i').style.display="block"
		document.getElementById('parte3_mal2').style.backgroundColor="white"
        document.getElementById('parte3_mal3').style.backgroundColor="white"
	    document.getElementById('parte3_mal4').style.backgroundColor="white"
		document.getElementById('parte3_correcto').style.backgroundColor="white"
		 document.getElementById('parte3').style.display="none"
	}	
	function parte3_correcto(){//boton que tiene la respuesta correcta  de la primera imagen
		document.getElementById('parte3_correcto').style.backgroundColor= "#58FA58"//pone el boton en color verde
		document.getElementById("parte3").style.display="block "//muestra el mensaje correcto
	//los siguientes document serviran para dejar los demás botones sin color, en caso de que ya se haya equivocado, se quitara el colo de ese boton
		document.getElementById("parte3_mal1").style.backgroundColor= "white"
		document.getElementById("parte3_mal2").style.backgroundColor="white"
		document.getElementById("parte3_mal3").style.backgroundColor="white"
		document.getElementById("parte3_mal4").style.backgroundColor="white"
		document.getElementById("prueba4").style.display="block"//muestra la siguiente imagen
		document.getElementById("parte3i").style.display="none "//oculta el mensaje incorrecto
	}
	function parte3_mal2(){
				document.getElementById('parte3_mal2').style.backgroundColor="#FF7777"
			document.getElementById('parte3i').style.display="block"
		document.getElementById('parte3_mal1').style.backgroundColor="white"
        document.getElementById('parte3_mal3').style.backgroundColor="white"
	    document.getElementById('parte3_mal4').style.backgroundColor="white"
		document.getElementById('parte3_correcto').style.backgroundColor="white"
	 document.getElementById('parte3').style.display="none"
	}
	function parte3_mal3(){
				document.getElementById('parte3_mal3').style.backgroundColor="#FF7777"
			document.getElementById('parte3i').style.display="block"
		document.getElementById('parte3_mal2').style.backgroundColor="white"
        document.getElementById('parte3_mal1').style.backgroundColor="white"
	    document.getElementById('parte3_mal4').style.backgroundColor="white"
		document.getElementById('parte3_correcto').style.backgroundColor="white"
 	document.getElementById('parte3').style.display="none"
	}

function parte3_mal4(){
				document.getElementById('parte3_mal4').style.backgroundColor="#FF7777"
			document.getElementById('parte3i').style.display="block"
		document.getElementById('parte3_mal2').style.backgroundColor="white"
        document.getElementById('parte3_mal3').style.backgroundColor="white"
	    document.getElementById('parte3_mal1').style.backgroundColor="white"
		document.getElementById('parte3_correcto').style.backgroundColor="white"
		document.getElementById('parte3').style.display="none"
	}
		//Funciones para los botones de la cuarta imagen
	function parte4_mal1(){
			document.getElementById('parte4_mal1').style.backgroundColor="#FF7777"
			document.getElementById('parte4i').style.display="block"
		document.getElementById('parte4_mal2').style.backgroundColor="white"
        document.getElementById('parte4_mal3').style.backgroundColor="white"
	    document.getElementById('parte4_mal4').style.backgroundColor="white"
		document.getElementById('parte4_correcto').style.backgroundColor="white"
		 document.getElementById('parte4').style.display="none"
	}
	function parte4_mal2(){
				document.getElementById('parte4_mal2').style.backgroundColor="#FF7777"
			document.getElementById('parte4i').style.display="block"
		document.getElementById('parte4_mal1').style.backgroundColor="white"
        document.getElementById('parte4_mal3').style.backgroundColor="white"
	    document.getElementById('parte4_mal4').style.backgroundColor="white"
		document.getElementById('parte4_correcto').style.backgroundColor="white"
 document.getElementById('parte4').style.display="none"
	}
	function parte4_mal3(){
				document.getElementById('parte4_mal3').style.backgroundColor="#FF7777"
			document.getElementById('parte4i').style.display="block"
		document.getElementById('parte4_mal2').style.backgroundColor="white"
        document.getElementById('parte2_mal1').style.backgroundColor="white"
	    document.getElementById('parte2_mal4').style.backgroundColor="white"
		document.getElementById('parte2_correcto').style.backgroundColor="white"
 document.getElementById('parte4').style.display="none"
	}
function parte4_mal4(){
				document.getElementById('parte4_mal4').style.backgroundColor="#FF7777"
			document.getElementById('parte4i').style.display="block"
		document.getElementById('parte4_mal2').style.backgroundColor="white"
        document.getElementById('parte4_mal3').style.backgroundColor="white"
	    document.getElementById('parte4_mal1').style.backgroundColor="white"
		document.getElementById('parte4_correcto').style.backgroundColor="white"
		document.getElementById('parte4').style.display="none"
	}
	function parte4_correcto(){//boton que tiene la respuesta correcta  de la primera imagen
		document.getElementById('parte4_correcto').style.backgroundColor= "#58FA58"//pone el boton en color verde
		document.getElementById("parte4").style.display="block "//muestra el mensaje correcto
	//los siguientes document serviran para dejar los demás botones sin color, en caso de que ya se haya equivocado, se quitara el colo de ese boton
		document.getElementById("parte4_mal1").style.backgroundColor= "white"
		document.getElementById("parte4_mal2").style.backgroundColor="white"
		document.getElementById("parte4_mal3").style.backgroundColor="white"
		document.getElementById("parte4_mal4").style.backgroundColor="white"
		document.getElementById("prueba5").style.display="block"//muestra la siguiente imagen
		document.getElementById("parte4i").style.display="none "//oculta el mensaje incorrecto
	}
		//Funciones para los botones de la quinta imagen
	function parte5_mal1(){
			document.getElementById('parte5_mal1').style.backgroundColor="#FF7777"
			document.getElementById('parte5i').style.display="block"
		document.getElementById('parte5_mal2').style.backgroundColor="white"
        document.getElementById('parte5_mal3').style.backgroundColor="white"
	    document.getElementById('parte5_mal4').style.backgroundColor="white"
		document.getElementById('parte5_correcto').style.backgroundColor="white"
		 document.getElementById('parte5').style.display="none"
	}
	function parte5_mal2(){
				document.getElementById('parte5_mal2').style.backgroundColor="#FF7777"
			document.getElementById('parte5i').style.display="block"
		document.getElementById('parte5_mal1').style.backgroundColor="white"
        document.getElementById('parte5_mal3').style.backgroundColor="white"
	    document.getElementById('parte5_mal4').style.backgroundColor="white"
		document.getElementById('parte5_correcto').style.backgroundColor="white"
 document.getElementById('parte5').style.display="none"
	}
		function parte5_correcto(){//boton que tiene la respuesta correcta  de la primera imagen
		document.getElementById('parte5_correcto').style.backgroundColor= "#58FA58"//pone el boton en color verde
		document.getElementById("parte5").style.display="block "//muestra el mensaje correcto
	//los siguientes document serviran para dejar los demás botones sin color, en caso de que ya se haya equivocado, se quitara el colo de ese boton
		document.getElementById("parte5_mal1").style.backgroundColor= "white"
		document.getElementById("parte5_mal2").style.backgroundColor="white"
		document.getElementById("parte5_mal3").style.backgroundColor="white"
		document.getElementById("parte5_mal4").style.backgroundColor="white"
		document.getElementById("parte5i").style.display="none "//oculta el mensaje incorrecto
		//Ocultara los ejercicios resueltos y mostrara las felicitaciones
		document.getElementById("last").style.display="block"
		document.getElementById("prueba1").style.display="none"
		document.getElementById("prueba2").style.display="none"
		document.getElementById("prueba3").style.display="none"
		document.getElementById("prueba4").style.display="none"
		document.getElementById("prueba5").style.display="none"
		document.getElementById("Directions").style.display="none"
	}
	function parte5_mal3(){
				document.getElementById('parte5_mal3').style.backgroundColor="#FF7777"
			document.getElementById('parte5i').style.display="block"
		document.getElementById('parte5_mal2').style.backgroundColor="white"
        document.getElementById('parte5_mal1').style.backgroundColor="white"
	    document.getElementById('parte5_mal4').style.backgroundColor="white"
		document.getElementById('parte5_correcto').style.backgroundColor="white"
 document.getElementById('parte5').style.display="none"
	}
function parte5_mal4(){
				document.getElementById('parte5_mal4').style.backgroundColor="#FF7777"
			document.getElementById('parte5i').style.display="block"
		document.getElementById('parte5_mal2').style.backgroundColor="white"
        document.getElementById('parte5_mal3').style.backgroundColor="white"
	    document.getElementById('parte5_mal1').style.backgroundColor="white"
		document.getElementById('parte5_correcto').style.backgroundColor="white"
		document.getElementById('parte5').style.display="none"
	}
//FUNCION PARA EL NIVEL INTERMEDIO
//Botones de la primera Oracion a adivinar
var totalpuntos;
function oracion1i(){
	document.getElementById('oracion1i').style.backgroundColor="#FF7777"
document.getElementById('oracion2i').style.backgroundColor="white"
document.getElementById('oracioncorrecta').style.backgroundColor="white"
document.getElementById('oracion3i').style.backgroundColor="white"	
document.getElementById('parte1c').style.display="none"
document.getElementById('parte1i').style.display="block"

}
function oracion2i(){
	document.getElementById('oracion2i').style.backgroundColor="#FF7777"
document.getElementById('oracion1i').style.backgroundColor="white"
document.getElementById('oracioncorrecta').style.backgroundColor="white"
document.getElementById('oracion3i').style.backgroundColor="white"	
document.getElementById('parte1c').style.display="none"
document.getElementById('parte1i').style.display="block"

}
function oracioncorrecta(){
	document.getElementById('oracioncorrecta').style.backgroundColor="#58FA58"
document.getElementById('oracion2i').style.backgroundColor="white"
document.getElementById('oracion1i').style.backgroundColor="white"
document.getElementById('oracion3i').style.backgroundColor="white"	
document.getElementById('parte1c').style.display="block"
document.getElementById('parte1i').style.display="none"
document.getElementById('prueba_de_oracion_2').style.display="block"
alert("Ganaste 2 puntos, sigue así.")
totalpuntos=2;
}
function oracion3i(){
	document.getElementById('oracion3i').style.backgroundColor="#FF7777"
document.getElementById('oracion2i').style.backgroundColor="white"
document.getElementById('oracioncorrecta').style.backgroundColor="white"
document.getElementById('oracion1i').style.backgroundColor="white"	
document.getElementById('parte1c').style.display="none"
document.getElementById('parte1i').style.display="block"
}
//Botones para la segunda oración
function parte2_oracioncorrecta(){
	document.getElementById('parte2_oracioncorrecta').style.backgroundColor="#58FA58"
document.getElementById('parte2_oracion2').style.backgroundColor="white"
document.getElementById('parte2_oracion1').style.backgroundColor="white"
document.getElementById('parte2_oracion3').style.backgroundColor="white"	
document.getElementById('parte2c').style.display="block"
document.getElementById('parte2i').style.display="none"
document.getElementById('prueba_de_oracion_3').style.display="block"
totalpuntos+=2
}
function parte2_oracion1(){
	document.getElementById('parte2_oracion1').style.backgroundColor="#FF7777"
document.getElementById('parte2_oracion2').style.backgroundColor="white"
document.getElementById('parte2_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte2_oracion3').style.backgroundColor="white"	
document.getElementById('parte2c').style.display="none"
document.getElementById('parte2i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{
 	totalpuntos-=1
 	
 }
}
function parte2_oracion2(){
	document.getElementById('parte2_oracion2').style.backgroundColor="#FF7777"
document.getElementById('parte2_oracion1').style.backgroundColor="white"
document.getElementById('parte2_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte2_oracion3').style.backgroundColor="white"	
document.getElementById('parte2c').style.display="none"
document.getElementById('parte2i').style.display="block"
if (totalpuntos<=0) {
 totalpuntos-=0
}
 else{
 	
 	totalpuntos-=1
 	
 }
}

function parte2_oracion3(){
	document.getElementById('parte2_oracion3').style.backgroundColor="#FF7777"
document.getElementById('parte2_oracion2').style.backgroundColor="white"
document.getElementById('parte2_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte2_oracion1').style.backgroundColor="white"	
document.getElementById('parte2c').style.display="none"
document.getElementById('parte2i').style.display="block"
if (totalpuntos<=0) {
 totalpuntos-=0
}
 else{
 	
 	totalpuntos-=1
  }
}
//Botones para la tercer Oración 

function parte3_oracion1(){
	document.getElementById('parte3_oracion1').style.backgroundColor="#FF7777"
document.getElementById('parte3_oracion2').style.backgroundColor="white"
document.getElementById('parte3_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte3_oracion3').style.backgroundColor="white"	
document.getElementById('parte3c').style.display="none"
document.getElementById('parte3i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{
 	totalpuntos-=1
 }
}
function parte3_oracion2(){
	document.getElementById('parte3_oracion2').style.backgroundColor="#FF7777"
document.getElementById('parte3_oracion1').style.backgroundColor="white"
document.getElementById('parte3_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte3_oracion3').style.backgroundColor="white"	
document.getElementById('parte3c').style.display="none"
document.getElementById('parte3i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{
 	totalpuntos-=1
 }
}

function parte3_oracion3(){
	document.getElementById('parte3_oracion3').style.backgroundColor="#FF7777"
document.getElementById('parte3_oracion2').style.backgroundColor="white"
document.getElementById('parte3_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte3_oracion1').style.backgroundColor="white"	
document.getElementById('parte3c').style.display="none"
document.getElementById('parte3i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{
 	totalpuntos-=1
  }
}
function parte3_oracioncorrecta(){
	document.getElementById('parte3_oracioncorrecta').style.backgroundColor="#58FA58"
document.getElementById('parte3_oracion2').style.backgroundColor="white"
document.getElementById('parte3_oracion1').style.backgroundColor="white"
document.getElementById('parte3_oracion3').style.backgroundColor="white"	
document.getElementById('parte3c').style.display="block"
document.getElementById('parte3i').style.display="none"
document.getElementById('prueba_de_oracion_4').style.display="block"

totalpuntos+=2
}
//Botones para la cuarta Oración 

function parte4_oracion1(){
	document.getElementById('parte4_oracion1').style.backgroundColor="#FF7777"
document.getElementById('parte4_oracion2').style.backgroundColor="white"
document.getElementById('parte4_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte4_oracion3').style.backgroundColor="white"	
document.getElementById('parte4c').style.display="none"
document.getElementById('parte4i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{
 	totalpuntos-=1
 }
}
function parte4_oracioncorrecta(){
	document.getElementById('parte4_oracioncorrecta').style.backgroundColor="#58FA58"
document.getElementById('parte4_oracion2').style.backgroundColor="white"
document.getElementById('parte4_oracion1').style.backgroundColor="white"
document.getElementById('parte4_oracion3').style.backgroundColor="white"	
document.getElementById('parte4c').style.display="block"
document.getElementById('parte4i').style.display="none"
document.getElementById('prueba_de_oracion_5').style.display="block"

totalpuntos+=2
}		
function parte4_oracion2(){
	document.getElementById('parte4_oracion2').style.backgroundColor="#FF7777"
document.getElementById('parte4_oracion1').style.backgroundColor="white"
document.getElementById('parte4_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte4_oracion3').style.backgroundColor="white"	
document.getElementById('parte4c').style.display="none"
document.getElementById('parte4i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{
 	totalpuntos-=1
 	
 }
}

function parte4_oracion3(){
	document.getElementById('parte4_oracion3').style.backgroundColor="#FF7777"
document.getElementById('parte4_oracion2').style.backgroundColor="white"
document.getElementById('parte4_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte4_oracion1').style.backgroundColor="white"	
document.getElementById('parte4c').style.display="none"
document.getElementById('parte4i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{ 
 	totalpuntos-=1
  }
}
//Funciones para la 5 oracion
function parte5_oracion1(){
	document.getElementById('parte5_oracion1').style.backgroundColor="#FF7777"
document.getElementById('parte5_oracion2').style.backgroundColor="white"
document.getElementById('parte5_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte5_oracion3').style.backgroundColor="white"	
document.getElementById('parte5c').style.display="none"
document.getElementById('parte5i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{
 	totalpuntos-=1	
 }
}
function parte5_oracion2(){
	document.getElementById('parte5_oracion2').style.backgroundColor="#FF7777"
document.getElementById('parte5_oracion1').style.backgroundColor="white"
document.getElementById('parte5_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte5_oracion3').style.backgroundColor="white"	
document.getElementById('parte5c').style.display="none"
document.getElementById('parte5i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{
 	totalpuntos-=1
 	
 }
}
function  parte5_oracioncorrecta(){
	document.getElementById('parte5_oracioncorrecta').style.backgroundColor="#58FA58"
document.getElementById('parte5_oracion2').style.backgroundColor="white"
document.getElementById('parte5_oracion1').style.backgroundColor="white"
document.getElementById('parte5_oracion3').style.backgroundColor="white"	
document.getElementById('parte5c').style.display="block"
document.getElementById('parte5i').style.display="none"
document.getElementById('prueba_de_oracion_1').style.display="none"
document.getElementById('prueba_de_oracion_2').style.display="none"
document.getElementById('prueba_de_oracion_3').style.display="none"
document.getElementById('prueba_de_oracion_4').style.display="none"
document.getElementById('prueba_de_oracion_5').style.display="none"
document.getElementById("instruc").style.display="none"
totalpuntos+=2
if (totalpuntos>=7) {
	document.getElementById("barra").value=totalpuntos;
document.getElementById("barra").style.backgroundColor="green"
document.getElementById('last_one').style.display="block"
document.getElementById("last_one_h").append("Obtuviste "+ totalpuntos+"/10 puntos")
}
else{
document.getElementById('barra2').value=totalpuntos
	document.getElementById("barra2").style.backgroundColor="red"
	document.getElementById("last_inco").style.display="block"
	document.getElementById("last_inco_h").append("Obtuviste "+ totalpuntos+"/10 puntos")
	}
}
function parte5_oracion3(){
	document.getElementById('parte5_oracion3').style.backgroundColor="#FF7777"
document.getElementById('parte5_oracion2').style.backgroundColor="white"
document.getElementById('parte5_oracioncorrecta').style.backgroundColor="white"
document.getElementById('parte5_oracion1').style.backgroundColor="white"	
document.getElementById('parte5c').style.display="none"
document.getElementById('parte5i').style.display="block"
if (totalpuntos<=0) {
totalpuntos-=0
}
 else{
 	totalpuntos-=1

 }
}
//FUNCIONES PARA EL NIVEL AVANZADO

//Funciones para la primera palabra 	
var intentos1=3;
function palabra1_evaluar(){
	var palabra1=document.getElementById('Palabra1').value;

	if(palabra1=="bed" || palabra1=="Bed"){
	document.getElementById('Palabra1').style.backgroundColor="#58FA58";
	document.getElementById('palabra1c').style.display="block";
	document.getElementById('palabra1i').style.display="none";
	document.getElementById("parte2_palabra").style.display="block"
  }
  else{
  	document.getElementById('Palabra1').style.backgroundColor="#FF7777";
  	document.getElementById('palabra1c').style.display="none";
  	document.getElementById('palabra1i').style.display="block";
intentos1-=1;  
	if (intentos1>=1 && intentos1<=3) {
  			
  	alert("Te quedan "+intentos1+" intentos");
  	}
  else if(intentos1==0){
  		document.getElementById('palabra5').style.backgroundColor="#58FA58";
	document.getElementById('palabra5c').style.display="block";
	document.getElementById('palabra5i').style.display="none";
	document.getElementById("instruct").style.display="none";
	document.getElementById("congrat").style.display="none";
	document.getElementById("fallo").style.display="block"
	document.getElementById("parte1_palabra").style.display="none"
 	document.getElementById("parte2_palabra").style.display="none"
 	document.getElementById("parte3_palabra").style.display="none"
 	document.getElementById("parte4_palabra").style.display="none"
 	document.getElementById("parte5_palabra").style.display="none"
  }

  }
}
//Segunda palabra
var intentos2=3;
function palabra2_evaluar(){
	var palabra2=document.getElementById('palabra2').value;

	if(palabra2=="bottle" || palabra2=="Bottle"){
	document.getElementById('palabra2').style.backgroundColor="#58FA58";
	document.getElementById('palabra2c').style.display="block";
	document.getElementById('palabra2i').style.display="none";
	document.getElementById("parte3_palabra").style.display="block"
  }
  else{
  	document.getElementById('palabra2').style.backgroundColor="#FF7777";
  	document.getElementById('palabra2c').style.display="none";
  	document.getElementById('palabra2i').style.display="block";
intentos2-=1;  
	if (intentos2>=1 && intentos2<=3) {
  			
  	alert("Te quedan "+intentos2+" intentos");
  	}
  else if(intentos2==0){
  		document.getElementById('palabra5').style.backgroundColor="#58FA58";
	document.getElementById('palabra5c').style.display="block";
	document.getElementById('palabra5i').style.display="none";
	document.getElementById("instruct").style.display="none";
	document.getElementById("congrat").style.display="none";
	document.getElementById("fallo").style.display="block"
	document.getElementById("parte1_palabra").style.display="none"
 	document.getElementById("parte2_palabra").style.display="none"
 	document.getElementById("parte3_palabra").style.display="none"
 	document.getElementById("parte4_palabra").style.display="none"
 	document.getElementById("parte5_palabra").style.display="none"
  }
  }
}
//Tercer palabra
var intentos3=3;
function palabra3_evaluar(){
	var palabra3=document.getElementById('palabra3').value;

	if(palabra3=="Door" || palabra3=="door"){
	document.getElementById('palabra3').style.backgroundColor="#58FA58";
	document.getElementById('palabra3c').style.display="block";
	document.getElementById('palabra3i').style.display="none";
 	document.getElementById("parte4_palabra").style.display="block"
  }
  else{
  	document.getElementById('palabra3').style.backgroundColor="#FF7777";
  	document.getElementById('palabra3c').style.display="none";
  	document.getElementById('palabra3i').style.display="block";
intentos3-=1;  
	if (intentos3>=1 && intentos3<=3) {
  			
  	alert("Te quedan "+intentos3+" intentos");
  	}
  else if(intentos3==0){
  		document.getElementById('palabra5').style.backgroundColor="#58FA58";
	document.getElementById('palabra5c').style.display="block";
	document.getElementById('palabra5i').style.display="none";
	document.getElementById("instruct").style.display="none";
	document.getElementById("congrat").style.display="none";
	document.getElementById("fallo").style.display="block"
	document.getElementById("parte1_palabra").style.display="none"
 	document.getElementById("parte2_palabra").style.display="none"
 	document.getElementById("parte3_palabra").style.display="none"
 	document.getElementById("parte4_palabra").style.display="none"
 	document.getElementById("parte5_palabra").style.display="none"
  }
  }
}
//Cuarta palabra
var intentos4=3;
function palabra4_evaluar(){
	var palabra4=document.getElementById('palabra4').value;

	if(palabra4=="Computer" || palabra4=="computer"){
	document.getElementById('palabra4').style.backgroundColor="#58FA58";
	document.getElementById('palabra4c').style.display="block";
	document.getElementById('palabra4i').style.display="none";
 	document.getElementById("parte5_palabra").style.display="block"
  }
  else{
  	document.getElementById('palabra4').style.backgroundColor="#FF7777";
  	document.getElementById('palabra4c').style.display="none";
  	document.getElementById('palabra4i').style.display="block";
intentos4-=1;  
	if (intentos4>=1 && intentos4<=3) {
  			
  	alert("Te quedan "+intentos4+" intentos");
  	}
  else if(intentos4==0){
  	document.getElementById('palabra5').style.backgroundColor="#58FA58";
	document.getElementById('palabra5c').style.display="block";
	document.getElementById('palabra5i').style.display="none";
	document.getElementById("instruct").style.display="none";
	document.getElementById("congrat").style.display="none";
	document.getElementById("fallo").style.display="block"
	document.getElementById("parte1_palabra").style.display="none"
 	document.getElementById("parte2_palabra").style.display="none"
 	document.getElementById("parte3_palabra").style.display="none"
 	document.getElementById("parte4_palabra").style.display="none"
 	document.getElementById("parte5_palabra").style.display="none"
  }
  }
}
//Quinta palabra
var intentos5=3;
function palabra5_evaluar(){
	var palabra5=document.getElementById('palabra5').value;

	if(palabra5=="Pencil sharpener" || palabra5=="pencil sharpener"){
	document.getElementById('palabra5').style.backgroundColor="#58FA58";
	document.getElementById('palabra5c').style.display="block";
	document.getElementById('palabra5i').style.display="none";
	document.getElementById("instruct").style.display="none";
	document.getElementById("congrat").style.display="block";
	document.getElementById("fallo").style.display="none"
	document.getElementById("parte1_palabra").style.display="none"
 	document.getElementById("parte2_palabra").style.display="none"
 	document.getElementById("parte3_palabra").style.display="none"
 	document.getElementById("parte4_palabra").style.display="none"
 	document.getElementById("parte5_palabra").style.display="none"
  }
  else{
  	document.getElementById('palabra5').style.backgroundColor="#FF7777";
  	document.getElementById('palabra5c').style.display="none";
  	document.getElementById('palabra5i').style.display="block";
intentos5-=1;  
	if (intentos5>=1 && intentos5<=3) {
  			
  	alert("Te quedan "+intentos5+" intentos");
  	}
  else if(intentos5==0){
  	document.getElementById('palabra5').style.backgroundColor="#58FA58";
	document.getElementById('palabra5c').style.display="block";
	document.getElementById('palabra5i').style.display="none";
	document.getElementById("instruct").style.display="none";
	document.getElementById("congrat").style.display="none";
	document.getElementById("fallo").style.display="block"
	document.getElementById("parte1_palabra").style.display="none"
 	document.getElementById("parte2_palabra").style.display="none"
 	document.getElementById("parte3_palabra").style.display="none"
 	document.getElementById("parte4_palabra").style.display="none"
 	document.getElementById("parte5_palabra").style.display="none"
  }
  }
}