// Edit SUPABASE_URL and SUPABASE_ANON_KEY after creating your Supabase project.
// Both qa.html (audience) and keynote.html (speaker) read from this file.
window.QA_CONFIG = {
  // From Supabase dashboard → Project Settings → API
  SUPABASE_URL: 'https://fspylcsgsriidbfkidsa.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcHlsY3Nnc3JpaWRiZmtpZHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2ODkxNjIsImV4cCI6MjA5NDI2NTE2Mn0.xVREDwekVxUGNJV1IjOZIhcHE2G9F2vZRNnHyEXsog4',

  // Talk identity
  TALK_SLUG:    'speedrun-empresa-era-ia',
  TALK_TITLE:   'Speedrun · Empresa en la era de IA',
  TALK_EVENT:   'Playas on Tech · 14·05·2026',
  TOTAL_SLIDES: 37,

  // Public audience URL (what the QR encodes and what gets read aloud)
  QA_URL: 'https://overw0rked.github.io/stage/speedrun-empresa-era-ia/qa.html'
};
