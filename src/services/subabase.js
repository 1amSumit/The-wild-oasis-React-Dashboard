import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dlznoniyykfdgnuzhpyg.supabase.co";
//activated Row level Security so safe as we did not allowed to mainipulate data
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsem5vbml5eWtmZGdudXpocHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODczNDUzMzEsImV4cCI6MjAwMjkyMTMzMX0.hYbeC4gZjZXAMJL680DJtgQTcP35f8gEerz0MUq5ZqM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
