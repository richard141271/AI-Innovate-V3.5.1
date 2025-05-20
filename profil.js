function visProfil() {
  const data = JSON.parse(localStorage.getItem('bruker')) || {};
  document.getElementById('profil-navn').textContent = data.fornavn + " " + data.etternavn;
  document.getElementById('profil-epost').textContent = data.epost || '';
  document.getElementById('profil-telefon').textContent = data.telefon || '';
  document.getElementById('profil-vervet').textContent = data.vervet || '';
  document.getElementById('profil-kontonr').textContent = data.kontonr || '';
  document.getElementById('profil-registrert').textContent = data.registrert || '';
}
function åpneInnstillinger() {
  alert("Innstillinger kommer senere!");
}
document.addEventListener("DOMContentLoaded", visProfil);
