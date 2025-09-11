import { NextResponse } from 'next/server';
import { generateRegistrationOptions } from '@simplewebauthn/server';
import { userStore } from '../store';

const rpName = 'Aidigi Website';
const rpID = process.env.RP_ID || 'localhost';

export async function POST() {
  const username = 'default-user';
  const userId = 'default-user-id';
  if (!userStore[username]) {
    userStore[username] = { id: userId, username, credentials: [] };
  }

  const options = await generateRegistrationOptions({
    rpName,
    rpID,
    userID: new TextEncoder().encode(userStore[username].id),
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


