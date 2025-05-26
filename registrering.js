
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient('https://sjsrtfydsvxwragamuvf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqc3J0Znlkc3Z4d3JhZ2FtdXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTYwMjQsImV4cCI6MjA2Mzc5MjAyNH0.C03IFs5FZNvDUtOKo31jxaei-6ZWJWH3GqFvp38AsO8');

window.registrer = async function(e) {
  e.preventDefault();
  const fornavn = document.getElementById('fornavn').value;
  const etternavn = document.getElementById('etternavn').value;
  const epost = document.getElementById('epost').value;
  const telefon = document.getElementById('telefon').value;
  const vervetAv = document.getElementById('verver').value;
  const kontonummer = document.getElementById('konto').value;
  const passord = document.getElementById('passord').value;
  const gjenta = document.getElementById('gjenta').value;

  if (passord !== gjenta) {
    alert('Passordene matcher ikke!');
    return;
  }

  const { error } = await supabase.from('brukere').insert([{
    fornavn, etternavn, epost, telefon, vervetAv, kontonummer, passord
  }]);

  if (error) {
    alert('Feil ved lagring: ' + error.message);
    return;
  }

  localStorage.setItem('fornavn', fornavn);
  localStorage.setItem('etternavn', etternavn);
  localStorage.setItem('epost', epost);
  localStorage.setItem('telefon', telefon);
  localStorage.setItem('verver', vervetAv);
  localStorage.setItem('konto', kontonummer);

  window.location.href = 'profil.html';
}
