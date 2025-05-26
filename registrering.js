
document.getElementById("regForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const fornavn = document.getElementById("fornavn").value;
  const etternavn = document.getElementById("etternavn").value;
  const epost = document.getElementById("epost").value;
  const telefon = document.getElementById("telefon").value;
  const vervet = document.getElementById("vervet").value;

  const { data, error } = await supabase.from("brukere").insert([
    {
      fornavn: fornavn,
      etternavn: etternavn,
      epost: epost,
      telefon: telefon,
      vervet_av: vervet,
      opprettet: new Date().toISOString()
    }
  ]);

  if (error) {
    console.error("Feil:", error.message);
    alert("Registrering feilet. Prøv igjen.");
  } else {
    alert("Registrert!");
    document.getElementById("regForm").reset();
  }
});
