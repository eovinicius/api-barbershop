import { sign } from 'jsonwebtoken';
import { ProviderAuthenticate, signConfigProps } from '../../../application/ports/providers/provider-authenticate';

export class JwtProviderAuthencicate implements ProviderAuthenticate {
  sign(data: signConfigProps): string {
    const token = sign(data.payload, data.secret, {
      subject: data.options?.subject,
      expiresIn: data.options?.expiresIn,
    });

    return token;
  }
}
