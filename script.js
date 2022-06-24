// Creare un piccolo counter
// Partiamo dal solo body in HTML

// Generiamo da JS due bottoni ed un DIV
// Inseriamo gli elementi a schermo
// Ne div avremo sempre a schermo lo stato del nostro counter ("1" oppure "2" oppure "3", ...)
// Aggiungere al primo bottone la funzionalità di incremento
// Aggiungere al secondo bottone la funzionalità di decremento
// Bonus:

// mettiamo un limite di decremento a 0
// mettiamo un limite di incremento a 10
// Super bonus:

// Rimuovere il codice duplicato
(function () {
  const $div = document.createElement("div");
  $div.innerText = "0";
  $div.setAttribute("id", "counter");
  document.body.append($div);

  const $plus = document.createElement("button");
  $plus.innerText = "+";
  $plus.setAttribute("id", "plus");
  $div.append($plus);

  const $minus = document.createElement("button");
  $minus.innerText = "-";
  $minus.setAttribute("id", "minus");
  $div.append($minus);

  let $add = document.getElementById("plus");
  let $remove = document.getElementById("minus");

  let $counter = document.getElementById("counter");
  let $count = 0;

  $add.addEventListener("click", function () {
    $count++;
    $counter.innerText = $count;
  });

  $remove.addEventListener("click", function () {
    $count--;
    $counter.innerText = $count;
  });

  $minus.disabled = $count < 1;
  $plus.disabled = $count >= 10;
})();