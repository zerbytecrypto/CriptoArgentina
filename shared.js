// shared.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { SUPABASE_URL, SUPABASE_ANON } from './config.js';


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
export const ARS = n => '$ ' + Number(n || 0).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Devuelve el usuario + perfil, o redirige al login
export async function requireAuth(redirect = 'login.html') {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) { location.href = redirect; return null; }
  const { data: profile } = await supabase
    .from('profiles').select('*').eq('id', session.user.id).single();
  return { user: session.user, profile };
}

// Igual que requireAuth pero exige rol admin
export async function requireAdmin(redirect = 'login.html') {
  const ctx = await requireAuth(redirect);
  if (!ctx) return null;
  if (ctx.profile?.role !== 'admin') {
    alert('Acceso restringido: se requiere rol de administrador.');
    location.href = 'dashboard.html';
    return null;
  }
  return ctx;
}

export async function signOut() {
  await supabase.auth.signOut();
  location.href = 'login.html';
}
