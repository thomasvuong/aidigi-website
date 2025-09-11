import { NextResponse } from 'next/server';
import { generateRegistrationOptions } from '@simplewebauthn/server';

// Simple in-memory store (per server instance)
const rpName = 'Aidigi Website';
const rpID = process.env.RP_ID || 'localhost';

interface StoredCredential {
  credentialID: string; // base64url
  credentialPublicKey: string; // base64url
  counter: number;
}

// In-memory user and challenge store
// In real apps, persist to DB
export const userStore: Record<string, { id: string; username: string; credentials: StoredCredential[]; currentChallenge?: string } > = {};

export async function POST() {
  const username = 'default-user';
  const userId = 'default-user-id';
  if (!userStore[username]) {
    userStore[username] = { id: userId, username, credentials: [] };
  }

  const options = await generateRegistrationOptions({
    rpName,
    rpID,
    userID: userStore[username].id,
    userName: userStore[username].username,
    attestationType: 'none',
    authenticatorSelection: {
      residentKey: 'preferred',
      userVerification: 'preferred',
    },
    excludeCredentials: userStore[username].credentials.map((cred) => ({
      id: Buffer.from(cred.credentialID, 'base64url'),
      type: 'public-key',
    })),
  });

  userStore[username].currentChallenge = options.challenge;
  return NextResponse.json(options);
}


