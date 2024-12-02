import { compare } from "bcryptjs";

const ADMIN_USERNAME = "nallamala";
const ADMIN_PASSWORD = "sweet@2523";

export async function authenticate(username: string, password: string) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return true;
  }
  return false;
}