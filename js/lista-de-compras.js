var shopping = [];

shopping[0] = "Sandwitch";
shopping[1] = "Jitomates";
shopping[2] = "Cebolla";
shopping[3] = "Cereal";
shopping[4] = "Leche";
shopping[5] = "Huevo";
// $('#agregar').on('click',function(){})

function escribeLista(){
  var elemento = prompt("Ingresa el nuevo ingrediente");
  if( elemento ){
    shopping.push( elemento );
    renderizaLista();

  }
}
function renderizaLista(){
  var indice = 0;
  var indice_maximo = shopping.length;

  document.getElementById('lista').innerHTML = "";

  // shopping.foreach(function(){})
  // for( indice = 0; indice < indice_maximo; indice++ )
  while( indice < indice_maximo ){

    $('#lista').append(
      "<li class='list-group-item'>" +
        shopping[ indice ] +
        "<button class='btn btn-danger btn-sm float-right eliminar'><i class='fas fa-times-circle'></i></button>" +
      "</li>"
    );

    indice++;
  }

}
$(document).ready(function(){

  $('#lista')
  .delegate('li','mouseenter',function( event ){
    event.preventDefault();
    $(this).addClass('resaltado');
  });

  $('#lista')
  .delegate('li','mouseleave',function( event ){
    event.preventDefault();
    $(this).removeClass('resaltado');
  });

  $('#lista')
  .delegate('button.eliminar','mouseenter',function( event ){
    event.preventDefault();
    $(this).parent().addClass('bg-warning');
  });

  $('#lista')
  .delegate('button.eliminar','mouseleave',function( event ){
    event.preventDefault();
    $(this).parent().removeClass('bg-warning');
  });

  $('#lista')
  .delegate('button.eliminar','click',function( event ){
    event.preventDefault();
    var indice = $(this).parent().index();
    // shopping = shopping.slice( indice );
    renderizaLista();
  });



})
document.getElementById('agregar').addEventListener('click', escribeLista);
renderizaLista();
