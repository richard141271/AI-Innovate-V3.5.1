
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient('https://sjsrtfydsvxwragamuvf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqc3J0Znlkc3Z4d3JhZ2FtdXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTYwMjQsImV4cCI6MjA2Mzc5MjAyNH0.C03IFs5FZNvDUtOKo31jxaei-6ZWJWH3GqFvp38AsO8');

document.addEventListener('DOMContentLoaded', async () => {
  const epost = localStorage.getItem('epost');
  if (!epost) {
    document.body.innerHTML = "<h2>Ingen bruker registrert</h2>";
    return;
  }

  const { data, error } = await supabase
    .from('brukere')
    .select('*')
    .eq('epost', epost)
    .single();

  if (error || !data) {
    document.body.innerHTML = "<h2>Fant ikke bruker i Supabase</h2>";
    return;
  }

  // Sett inn i eksisterende felter
  document.getElementById('navn').textContent = data.fornavn || 'Ukjent';
  document.getElementById('navn-full').textContent = (data.fornavn || '') + ' ' + (data.etternavn || '');
  document.getElementById('epost').textContent = data.epost || '-';
  document.getElementById('telefon').textContent = data.telefon || '-';
  document.getElementById('verver').textContent = data.vervetAv || '-';
  document.getElementById('konto').textContent = data.kontonummer || '-';
});
