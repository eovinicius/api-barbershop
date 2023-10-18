export interface signConfigProps {
  payload: string | object
  secret: string
  options?: {
    subject?: string
    expiresIn?: string | number
  }
}

export interface ProviderAuthenticate {
  sign(sing: signConfigProps): string;
}
