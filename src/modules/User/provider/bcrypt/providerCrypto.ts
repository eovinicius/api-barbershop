import { IProviderCrypto } from '../interface/IProviderCrypto';
import bcrypt from 'bcrypt';
export class ProviderCrypto implements IProviderCrypto {
  async hash(password: string): Promise<string> {
    const Hashpassword = await bcrypt.hash(password, 10);
    return Hashpassword;
  }
  compare(password: string, hashPassword: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
