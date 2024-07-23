import { getPoolPromise } from '../db';

interface User {
  id: number;
  email: string;
  password: string;
  role: 'citizen' | 'gov_official' | 'admin';
  created_at: Date;
}

export async function registerUser(email: string, password: string, role: 'citizen' | 'gov_official' | 'admin'): Promise<void> {
  const pool = await getPoolPromise();
  await pool.request().input('Email', email).input('Password', password).input('Role', role).execute('RegisterUser');
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const pool = await getPoolPromise();
  const result = await pool.request().input('Email', email).input('Password', password).execute('AuthenticateUser');
  return result.recordset[0] || null;
}

export async function getUserDetails(userId: number): Promise<User | null> {
  const pool = await getPoolPromise();
  const result = await pool.request().input('UserId', userId).execute('GetUserDetails');
  return result.recordset[0] || null;
}
