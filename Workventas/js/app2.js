const fecha = ["13/02/2022","13/02/2022","13/02/2022"];
const mes = ["Febrero","Febrero","Febrero"];
const desc = ["Ventas","Capital","Otros Cargos"];
const Montos = ["650.000.000","250.000.000","100.000.000"];
const desc2 = ["Ventas","Capital","Otros Cargos"];
const Montos2 = ["650.000.000","250.000.000","100.000.000"];

function fecha1() {
    const A1 = fecha;
    const A2 = document.getElementById("1");
    const B1 = mes;
    const B2 = document.getElementById("2");
    const C1 = desc;
    const C2 = document.getElementById("3");
    const D1 = Montos;
    const D2 = document.getElementById("4");
    const ganan = document.getElementById("A").innerHTML = "Ganancias$: 1.000.000.000";
    const E1 = fecha;
    const E2 = document.getElementById("5");
    const F1 = mes;
    const F2 = document.getElementById("6");
    const G1 = desc2;
    const G2 = document.getElementById("7");
    const H1 = Montos2;
    const H2 = document.getElementById("8");
    for (contador = 0; contador < fecha.length; contador++) {
        A2.innerHTML += "<br>"+(A1[contador]);
        B2.innerHTML += "<br>"+(B1[contador]);
        C2.innerHTML += "<br>"+(C1[contador]);
        D2.innerHTML += "<br>"+(D1[contador]);
        E2.innerHTML += "<br>"+(E1[contador]);
        F2.innerHTML += "<br>"+(F1[contador]);
        G2.innerHTML += "<br>"+(G1[contador]);
        H2.innerHTML += "<br>"+(H1[contador]);
    }
}

function barritas(){
  const bar = document.getElementById("bar1");
  const bar1 = document.getElementById("bar2");
  const bar2= document.getElementById("bar3");
  const bar3 = document.getElementById("bar4");
  const bar4 = document.getElementById("bar5");
  const bar5 = document.getElementById("bar6");
  const bar6 = document.getElementById("bar7");
  const bar7 = document.getElementById("bar8");
  bar.style="--bar-value:5%;"
  bar1.style="--bar-value:10%;"
  bar2.style="--bar-value:15%;"
  bar3.style="--bar-value:20%;"
  bar4.style="--bar-value:25%;"
  bar5.style="--bar-value:30%;"
  bar6.style="--bar-value:35%;"
  bar7.style="--bar-value:40%;"
}