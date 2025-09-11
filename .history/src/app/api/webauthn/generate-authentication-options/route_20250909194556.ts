import { NextResponse } from 'next/server';
import { generateAuthenticationOptions } from '@simplewebauthn/server';
import { userStore } from '../store';

export async function POST() {
  const username = 'default-user';
  const user = userStore[username];
  const options = await generateAuthenticationOptions({
    allowCredentials: (user?.credentials || []).map((cred) => ({
      id: Buffer.from(cred.credentialID, 'base64url'),
      transports: ['internal', 'hybrid'],
      type: 'public-key',
    })),
    userVerification: 'preferred',
  });
  if (user) user.currentChallenge = options.challenge;
  return NextResponse.json(options);
}


