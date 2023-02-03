export const isValidEmail = ((email: string) => {
  return email.length > 4 && email.includes('@');
})