// On "cast" import.meta en 'any' pour que TS ignore l'erreur
export const ADMIN_BASE_URL = (import.meta as any).env.VITE_ADMIN_BASE_URL || "http://localhost:8000/admin/";
export const API_BASE_URL = (import.meta as any).env.VITE_API_URL || "http://localhost:8000/api/";