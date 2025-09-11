import { NextRequest, NextResponse } from 'next/server';
import { verifyRegistrationResponse } from '@simplewebauthn/server';
import { userStore } from '../store';

const rpID = process.env.RP_ID || 'localhost';
const origin = process.env.RP_ORIGIN || 'http://localhost:3000';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const username = 'default-user';
  const expectedChallenge = userStore[username]?.currentChallenge;
  if (!expectedChallenge) {
    return NextResponse.json({ verified: false, error: 'Missing challenge' }, { status: 400 });
  }

  const verification = await verifyRegistrationResponse({
    response: body,
    expectedChallenge,
    expectedOrigin: origin,
    expectedRPID: rpID,
  });

  if (verification.verified && verification.registrationInfo) {
    const { credentialPublicKey, credentialID, counter } = verification.registrationInfo;
    userStore[username].credentials.push({
      credentialID: Buffer.from(credentialID).toString('base64url'),
      credentialPublicKey: Buffer.from(credentialPublicKey).toString('base64url'),
      counter,
    });
  }

  return NextResponse.json({ verified: verification.verified });
}


