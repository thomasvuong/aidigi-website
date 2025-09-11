import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthenticationResponse } from '@simplewebauthn/server';
import { userStore } from '../generate-registration-options/route';

const rpID = process.env.RP_ID || 'localhost';
const origin = process.env.RP_ORIGIN || 'http://localhost:3000';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const username = 'default-user';
  const user = userStore[username];
  const expectedChallenge = user?.currentChallenge;

  const dbCred = user?.credentials.find((c) => c.credentialID === body.id);

  const verification = await verifyAuthenticationResponse({
    response: body,
    expectedRPID: rpID,
    expectedOrigin: origin,
    expectedChallenge,
    authenticator: dbCred
      ? {
          credentialID: Buffer.from(dbCred.credentialID, 'base64url'),
          credentialPublicKey: Buffer.from(dbCred.credentialPublicKey, 'base64url'),
          counter: dbCred.counter,
          transports: ['internal', 'hybrid'],
        }
      : undefined,
  });

  if (verification.verified && verification.authenticationInfo && dbCred) {
    dbCred.counter = verification.authenticationInfo.newCounter;
  }

  return NextResponse.json({ verified: verification.verified });
}


