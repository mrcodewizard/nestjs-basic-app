export interface AuthenticationInterface {
   username: string,
   password: string
}
export interface TokenizeAuthentication extends AuthenticationInterface {
   token: string
}