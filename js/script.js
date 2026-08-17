/* STIL x Architektur - Entwurf 3
   Eine einzige Aufgabe: das Menue auf schmalen Bildschirmen. Ohne Javascript
   bleibt es offen stehen, damit die Seite bedienbar bleibt. */

(function () {
  "use strict";

  document.documentElement.classList.remove("kein-js");

  var knopf = document.querySelector(".menueknopf");
  var menue = document.getElementById("hauptmenue");

  if (!knopf || !menue) { return; }

  knopf.setAttribute("aria-expanded", "false");
  menue.removeAttribute("data-offen");

  knopf.addEventListener("click", function () {
    var offen = knopf.getAttribute("aria-expanded") === "true";
    knopf.setAttribute("aria-expanded", offen ? "false" : "true");
    if (offen) {
      menue.removeAttribute("data-offen");
    } else {
      menue.setAttribute("data-offen", "ja");
    }
  });
})();
