import { IProviderCrypto } from '../interface/IProviderCrypto';
import bcrypt from 'bcrypt';
export class ProviderCrypto implements IProviderCrypto {
  async hash(password: string): Promise<string> {
    const Hashpassword = await bcrypt.hash(password, 10);
    return Hashpassword;
  }
  async compare(password: string, hashPassword: string): Promise<boolean> {
    const equals = await bcrypt.compare(password, hashPassword);
    return equals;
  }
}
