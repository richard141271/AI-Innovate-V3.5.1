function registrerBruker() {
  const fornavn = document.getElementById("fornavn").value;
  const etternavn = document.getElementById("etternavn").value;
  const epost = document.getElementById("epost").value;
  const telefon = document.getElementById("telefon").value;
  const vervet = document.getElementById("vervet").value;
  const kontonr = document.getElementById("kontonr").value;
  const passord = document.getElementById("passord").value;
  const gjenta = document.getElementById("gjenta").value;

  if (!fornavn || !etternavn || !epost || !passord || passord !== gjenta) {
    alert("Fyll ut alle felt riktig.");
    return;
  }

  const bruker = {
    fornavn, etternavn, epost, telefon, vervet, kontonr,
    registrert: new Date().toLocaleString()
  };
  localStorage.setItem("bruker", JSON.stringify(bruker));
  alert("Registrert!");
  visModul('modul-profil');
}
