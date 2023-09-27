import { IProviderCrypto } from '../interface/IProviderCrypto';
import { hash, compare } from 'bcrypt';

export class ProviderCrypto implements IProviderCrypto {
  async hash(password: string): Promise<string> {
    const Hashpassword = await hash(password, 10);
    return Hashpassword;
  }
  async compare(password: string, hashPassword: string): Promise<boolean> {
    const equals = await compare(password, hashPassword);
    return equals;
  }
}
