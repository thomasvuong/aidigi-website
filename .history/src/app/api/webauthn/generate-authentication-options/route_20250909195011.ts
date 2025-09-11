import { NextResponse } from 'next/server';
import { generateAuthenticationOptions } from '@simplewebauthn/server';
import { userStore } from '../store';

export async function POST() {
  const rpID = process.env.RP_ID || 'localhost';
  const username = 'default-user';
  const user = userStore[username];
  const options = await generateAuthenticationOptions({
    rpID,
    allowCredentials: (user?.credentials || []).map((cred) => ({
      id: cred.credentialID, // base64url string
      transports: ['internal', 'hybrid'],
    })),
    userVerification: 'preferred',
  });
  if (user) user.currentChallenge = options.challenge;
  return NextResponse.json(options);
}


