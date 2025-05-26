
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://sjsrtfydsvxwragamuvf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqc3J0Znlkc3Z4d3JhZ2FtdXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTYwMjQsImV4cCI6MjA2Mzc5MjAyNH0.C03IFs5FZNvDUtOKo31jxaei-6ZWJWH3GqFvp38AsO8';
const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fornavn = document.getElementById('fornavn').value;
      const etternavn = document.getElementById('etternavn').value;
      const epost = document.getElementById('epost').value;
      const telefon = document.getElementById('telefon').value;
      const passord = document.getElementById('passord').value;

      const { data, error } = await supabase
        .from('brukere')
        .insert([{ fornavn, etternavn, epost, telefon, passord }]);

      if (error) {
        alert('Feil under lagring: ' + error.message);
        console.error(error);
      } else {
        alert('Bruker registrert!');
        window.location.href = 'profil.html';
      }
    });
  }
});
