export interface ProviderCrypto {
  hash(password: string): Promise<string>;
  compare(password: string, hashPassword: string): Promise<boolean>;
}
