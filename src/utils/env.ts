// Default: local. Use ENV variable: ENV=dev or ENV=prod
import * as dotenv from 'dotenv';
dotenv.config();

export function getBaseUrl(): string {
  const env = process.env.ENV || 'local';

  switch (env) {
    case 'local':
      return 'https://the-internet.herokuapp.com';
    case 'dev':
      return 'Put the Development environment URL here';
    case 'prod':
      return 'Put the Production environment URL here';
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
}

// Secure credentials
export function getCredentials() {
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  if (!username || !password) {
    throw new Error('Missing USERNAME or PASSWORD environment variables');
  }

  return { username, password };
}