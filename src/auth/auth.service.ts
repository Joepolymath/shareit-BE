import { Injectable } from '@nestjs/common';
import admin from '../common/firebase/firebase';

@Injectable()
export class AuthService {
  async verifyToken(
    idToken: string,
  ): Promise<admin.auth.DecodedIdToken | null> {
    try {
      return await admin.auth().verifyIdToken(idToken);
    } catch (error) {
      return null;
    }
  }
}
