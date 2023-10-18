import { hash, compare } from 'bcrypt';
import { ProviderCrypto } from '../../../application/ports/providers/provider-crypto';

export class BcryptProviderCrypto implements ProviderCrypto {
  async hash(password: string): Promise<string> {
    const Hashpassword = await hash(password, 10);
    return Hashpassword;
  }
  async compare(password: string, hashPassword: string): Promise<boolean> {
    const equals = await compare(password, hashPassword);
    return equals;
  }
}
