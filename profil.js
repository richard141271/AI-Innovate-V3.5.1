function hentProfil() {
  const bruker = JSON.parse(localStorage.getItem("brukerdata"));
  if (!bruker) return;
  document.getElementById("profil-navn").textContent = bruker.fornavn + " " + bruker.etternavn;
  document.getElementById("profil-epost").textContent = bruker.epost || "-";
  document.getElementById("profil-telefon").textContent = bruker.telefon || "-";
  document.getElementById("profil-vervet").textContent = bruker.vervet || "-";
  document.getElementById("profil-konto").textContent = bruker.kontonummer || "-";
  document.getElementById("profil-dato").textContent = bruker.dato || "-";
}
function loggUt() {
  alert("Denne funksjonen er ikke aktiv ennå.");
}
document.addEventListener("DOMContentLoaded", hentProfil);