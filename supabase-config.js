/* =====================================================================
   Supabase connection for the Bookmark Standard-Setting Tool
   ---------------------------------------------------------------------
   These two values are safe to keep in the app (they are public,
   client-side credentials). Do NOT put the Secret / service_role key
   or the database password here.
   ===================================================================== */
window.SUPABASE_CONFIG = {
  url:            "https://foashhoadldxaepgsxig.supabase.co",
  publishableKey: "sb_publishable_3CHA9ElFaBc5q4ihuBLXFw_PE8u3mli",

  // The workshop this app instance points at (created by seed.sql).
  workshopId:     "00000000-0000-4000-8000-000000000001",

  // Branding shown on the login screen (the specific workshop name appears after sign-in).
  appTitle:       "EdMetric Standard Setting",
  appTagline:     "Sign in to begin"
};
