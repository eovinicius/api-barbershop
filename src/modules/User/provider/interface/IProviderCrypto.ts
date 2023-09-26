export interface IProviderCrypto {
  hash(password: string): Promise<string>;
  compare(password: string, hashPassword: string): Promise<boolean>;
}
