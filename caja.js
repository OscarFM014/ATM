var imagenes = [];
imagenes["1000"] = "mil.png";
imagenes["500"] = "quinientos.png";
imagenes["200"] = "doscientos.png";
imagenes["100"] = "cien.png";
imagenes["50"] = "cincuenta.png";
imagenes["20"] = "veinte.png";

class Billete
{
  constructor (v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var caja = []; // caja del atm
var entregado = []; // billetes que se entregan
caja.push(new Billete ( 1000, 5));
caja.push(new Billete ( 500, 5));
caja.push(new Billete ( 200, 10));
caja.push(new Billete ( 100, 20));
caja.push(new Billete ( 50, 20));//push para acomodar los billes
caja.push(new Billete ( 20, 30));// (valor del billete, cantidad de los billetes)
//console.log(Billete);

var dinero;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
  var dibujando = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  dinero_prueba = parseFloat(t.value);
  var r = dinero_prueba - Math.floor(dinero_prueba);

  if (isNaN(dinero) || dinero<0)
  {
    resultado.innerHTML = "<strong>Ponga una cantidad válida por favor </strong>";
  }
  else
  {
    if ( r > 0 )
    {
      resultado.innerHTML = "<strong>Ingrese solo números enteros</strong>";
    }
    else if (r == 0)
    {
      if (dinero>7000)
      {
        resultado.innerHTML = "<strong>No puedo entregar esa cantidad de dinero</strong>";
      }
      else
      {
        for(var bi of caja)
        {
          if(dinero>0)
            {
              div = Math.floor(dinero/bi.valor);
              if(div>bi.cantidad)
              {
                papeles = bi.cantidad;
              }
              else
              {
                papeles = div;
              }
              for (var i = 0; i < papeles; i++)
              {
                dibujando.push ( new Billete(bi.valor, 1) );
              }
              dinero = dinero - (papeles * bi.valor);
            }
        }
        if(dinero > 0)
        {
          resultado.innerHTML = "<strong>No puedo dar esa cantida de dinero</strong>";
        }
        else
        {
        resultado.innerHTML += "<strong>Se ha retirado:</strong> <br /> <br />";
          for (var e of dibujando)
            {
              if (e.cantidad > 0)
              {
                resultado.innerHTML += "<img src=" + e.imagen.src + " /> \n";
              }
            }
        }
            resultado.innerHTML += "<hr />";
      }
    }
  }
}
