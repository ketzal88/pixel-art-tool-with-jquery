var nombreColores = [
  "White",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "Khaki",
  "Yellow",
  "Gold",
  "Orange",
  "DarkOrange",
  "OrangeRed",
  "Tomato",
  "Coral",
  "DarkSalmon",
  "LightSalmon",
  "LightCoral",
  "Salmon",
  "PaleVioletRed",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Maroon",
  "Brown",
  "Sienna",
  "SaddleBrown",
  "IndianRed",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "DarkKhaki",
  "DarkSeaGreen",
  "MediumAquaMarine",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "YellowGreen",
  "LawnGreen",
  "Chartreuse",
  "GreenYellow",
  "Lime",
  "SpringGreen",
  "LimeGreen",
  "LightGreen",
  "PaleGreen",
  "PaleTurquoise",
  "AquaMarine",
  "Cyan",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "DeepSkyBlue",
  "LightSeaGreen",
  "CadetBlue",
  "DarkCyan",
  "Teal",
  "Steelblue",
  "LightSteelBlue",
  "Honeydew",
  "LightCyan",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "RoyalBlue",
  "SlateBlue",
  "MediumSlateBlue",
  "DarkSlateBlue",
  "Indigo",
  "Purple",
  "DarkMagenta",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "DarkOrchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "MediumPurple",
  "Lavender",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "DarkSlateGray",
  "Black"
];

var grillapixeles = $("#grilla-pixeles");
var paleta = $("#paleta");

// Funcion que crea la paleta de colores
$(document).ready(function() {
  for (var i = 0; i < nombreColores.length; i++) {
    let elementoColor = $("<div></div>");
    elementoColor.css({ backgroundColor: nombreColores[i] });
    elementoColor.addClass("color-paleta");
    elementoColor.appendTo($("#paleta"));
  }
});

// Funcion que crea la grilla para pintar
$(document).ready(function() {
  for (var i = 0; i < 1750; i++) {
    grillapixeles.append("<div></div>");
  }
});

var colorAUsarGlobal = ""; // color a usar global para ambas funciones de cambio de color (rueda y paleta)

// Funcion que selecciona un color de la paleta y lo muestra como seleccionado
$(document).ready(function() {
  $("div.color-paleta").click(function(e) {
    colorAUsarGlobal = $(e.target).css("background-color");
    $("#indicador-de-color").css({ backgroundColor: colorAUsarGlobal });
  });
});

// Funcion que pinta un pixel de la grilla
$(document).ready(function() {
  $("#grilla-pixeles").click(function(e) {
    $(e.target).css({ backgroundColor: colorAUsarGlobal });
  });
});

// Variable para guardar el elemento 'color-personalizado', Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById("color-personalizado");
$(document).ready(function() {
  colorPersonalizado.addEventListener("change", function() {
    // Se guarda el color de la rueda en colorActual
    colorAUsarGlobal = colorPersonalizado.value;
    $("#color-personalizado").css({ backgroundColor: colorAUsarGlobal });
  });
});

var movimientoMouse = "";

// Funcion que guarda el movimiento del mouse
$(document).ready(function() {
  $("#grilla-pixeles").mousedown(function() {
    movimientoMouse = true;
  });
  $("#grilla-pixeles").mouseup(function() {
    movimientoMouse = false;
  });
});

// Funcion pintar en movimiento
$(document).ready(function() {
  $("#grilla-pixeles").mouseover(function(e) {
    if (movimientoMouse == true) {
      $(e.target).css({ backgroundColor: colorAUsarGlobal });
    }
  });
});

// Funcion borrar pixeles
$(document).ready(function() {
  $("#borrar").click(function() {
    $("#grilla-pixeles")
      .children()
      .animate({ "background-color": "white" }, 1000);
  });
});

// Funcion cargar superheroes
$(document).ready(function() {
  $("#batman").click(function() {
    cargarSuperheroe(batman);
  });
  $("#wonder").click(function() {
    cargarSuperheroe(wonder);
  });
  $("#flash").click(function() {
    cargarSuperheroe(flash);
  });
  $("#invisible").click(function() {
    cargarSuperheroe(invisible);
  });
});

// Funcion guardar la grilla
$(document).ready(function() {
  $("#guardar").click(function(e) {
    guardarPixelArt(e);
  });
});
