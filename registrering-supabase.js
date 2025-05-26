
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrerForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.opprettet = new Date().toISOString();

    if (data.passord !== data.gjenta_passord) {
      alert("Passordene matcher ikke!");
      return;
    }

    delete data.gjenta_passord;

    const { error } = await supabase.from('brukere').insert([data]);
    if (error) {
      console.error(error);
      alert("Noe gikk galt. Prøv igjen.");
    } else {
      alert("Registrering vellykket!");
      window.location.hash = "#profil";
    }
  });
});
