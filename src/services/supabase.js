import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://vtizktwefsvknnprfsyr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0aXprdHdlZnN2a25ucHJmc3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3NDkzOTQsImV4cCI6MjAxMjMyNTM5NH0.m7msH6HwsTx8MZ3btIBemNQYZcvoRNsNjuwd8ClfKyo"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase