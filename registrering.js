
function registrer(event) {
  event.preventDefault();
  localStorage.setItem("fornavn", document.getElementById("fornavn").value);
  localStorage.setItem("etternavn", document.getElementById("etternavn").value);
  localStorage.setItem("epost", document.getElementById("epost").value);
  localStorage.setItem("telefon", document.getElementById("telefon").value);
  localStorage.setItem("verver", document.getElementById("verver").value);
  localStorage.setItem("konto", document.getElementById("konto").value);
  window.location.href = "modul-profil.html";
}
function toggleMeny() {
  const meny = document.getElementById("meny");
  meny.style.display = (meny.style.display === "none") ? "block" : "none";
}
