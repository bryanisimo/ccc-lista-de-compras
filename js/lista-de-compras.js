var shopping = [];



shopping[0] = "Sandwitch";
shopping[1] = "Jitomates";
shopping[2] = "Cebolla";
shopping[3] = "Cereal";
shopping[4] = "Leche";
shopping[5] = "Huevo";
shopping[6] = "Catsup";
shopping[7] = "Carne";
shopping[8] = "Pan";
shopping[9] = "Yogurth";
shopping[10] = "Cerveza";
shopping[11] = "Shampoo";
shopping[12] = "Limones";
shopping[13] = "Café";
shopping[14] = "Azucar";
shopping[15] = "Té";

// $('#agregar').on('click',function(){})

function escribeLista(){
  var elemento = prompt("Ingresa el nuevo ingrediente");
  if( elemento ){
    shopping.push( elemento );
  }

  var indice = 0;
  var indice_maximo = shopping.length;

  document.getElementById('lista').innerHTML = "";
  while( indice < indice_maximo ){

    // ESCRBIR EN LA LISTA
    document.getElementById('lista').innerHTML =
                document.getElementById('lista').innerHTML +
                "<li>" + shopping[ indice ] + "</li>"
    indice++;
  }

}


document.getElementById('agregar').addEventListener('click', escribeLista);
escribeLista();
