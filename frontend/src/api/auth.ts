import { API_BASE_URL } from '../env'; // Vérifie bien le chemin vers ton fichier env.ts
interface User {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
}

interface AuthResponse {
  token: string;
  user: User;
}

interface AuthError {
  error: string;
}

export async function login(username: string, password: string): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error((data as AuthError).error || 'Login failed');
  }

  return data as AuthResponse;
}

export async function register(username: string, email: string, password: string): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error((data as AuthError).error || 'Registration failed');
  }

  return data as AuthResponse;
}

export async function getMe(token: string): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/auth/me/`, {
    headers: {
      'Authorization': `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Token validation failed');
  }

  return response.json();
}
