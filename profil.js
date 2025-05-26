
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("profil-navn").textContent = (localStorage.getItem("fornavn") || "") + " " + (localStorage.getItem("etternavn") || "");
  document.getElementById("profil-epost").textContent = localStorage.getItem("epost") || "-";
  document.getElementById("profil-telefon").textContent = localStorage.getItem("telefon") || "-";
  document.getElementById("profil-vervet").textContent = localStorage.getItem("verver") || "-";
  document.getElementById("profil-konto").textContent = localStorage.getItem("konto") || "-";
  document.getElementById("profil-dato").textContent = new Date().toLocaleDateString("no-NO");
});
function toggleMeny() {
  const meny = document.getElementById("meny");
  meny.style.display = (meny.style.display === "none") ? "block" : "none";
}
