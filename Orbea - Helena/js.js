//IMG MENU

var cambioimg=document.getElementById('img_change');

//CARRETERA
document.getElementById('carretera').addEventListener('mouseover',nextimg1);
function nextimg1 () {
	cambioimg.src="img/menu/general_road.jpg";
}
document.getElementById('carretera').addEventListener('mouseout',noimg1);
function noimg1 () {
	cambioimg.src="";
}
//ORCA
document.getElementById('orca').addEventListener('mouseover',nextimg2);
function nextimg2 () {
	cambioimg.src="img/menu/avant.jpg";
}
document.getElementById('orca').addEventListener('mouseout',noimg2);
function noimg2 () {
	cambioimg.src="";
}
//ORCAAERO
document.getElementById('orcaaero').addEventListener('mouseover',nextimg3);
function nextimg3 () {
	cambioimg.src="img/menu/OrcaAero.jpg";
}
document.getElementById('orcaaero').addEventListener('mouseout',noimg3);
function noimg3 () {
	cambioimg.src="";
}
//AVANT
document.getElementById('avant').addEventListener('mouseover',nextimg4);
function nextimg4 () {
	cambioimg.src="img/menu/avant.jpg";
}
document.getElementById('avant').addEventListener('mouseout',noimg4);
function noimg4 () {
	cambioimg.src="";
}
//TERRA
document.getElementById('terra').addEventListener('mouseover',nextimg5);
function nextimg5 () {
	cambioimg.src="img/menu/terra.jpg";
}
document.getElementById('terra').addEventListener('mouseout',noimg5);
function noimg5 () {
	cambioimg.src="";
}
//PER_ORCA
document.getElementById('per_orca').addEventListener('mouseover',nextimg6);
function nextimg6 () {
	cambioimg.src="img/menu/personalizar-menu-orca.png";
}

document.getElementById('per_orca').addEventListener('mouseout',noimage6);
function noimage6 () {
   cambioimg.src="";
}

//PER_ORCAAERO
document.getElementById('per_orcaaero').addEventListener('mouseover',nextimg7);
function nextimg7 () {
	cambioimg.src="img/menu/menu-personalizar-orcaaero.png";
}

document.getElementById('per_orca').addEventListener('mouseout',noimage7);
function noimage7 () {
   cambioimg.src="";
}

//PER_TERRA
document.getElementById('per_terra').addEventListener('mouseover',nextimg8);
function nextimg8 () {
	cambioimg.src="img/menu/menu-personalizar-terra.jpg";
}

document.getElementById('per_orca').addEventListener('mouseout',noimage8);
function noimage8 () {
   cambioimg.src="";
}

//COLORES BICI
var cambiocolor=document.getElementsByClassName('grande');

document.getElementById('azul').addEventListener('click',azul);
	function azul(){
		document.getElementById('grande').src="img/orcaero/ORCA_AREO_M21eTEAMA.jpg";
	}
document.getElementById('negro').addEventListener('click',negro);
	function negro(){
		document.getElementById('grande').src="img/orcaero/ORCA_AREO_M21eTEAMB.jpg";
	}
document.getElementById('blanco').addEventListener('click',blanco);
	function blanco(){
		document.getElementById('grande').src="img/orcaero/ORCA_AREO_M21eTEAM.jpg";
	}