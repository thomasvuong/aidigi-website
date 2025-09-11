export interface StoredCredential {
  credentialID: string; // base64url
  credentialPublicKey: string; // base64url
  counter: number;
}

export interface StoredUser {
  id: string;
  username: string;
  credentials: StoredCredential[];
  currentChallenge?: string;
}

export const userStore: Record<string, StoredUser> = {};


