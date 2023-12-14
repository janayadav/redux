export function deposite(amount) {
  return { type: "deposite", payload: amount };
}
export function withdraw(amount) {
  return { type: "withdraw", payload: amount };
}
export function nameUpadate(fullName) {
  return { type: "nameUpadate", payload: fullName };
}
export function mobileUpdate(mobile) {
  return { type: "mobileUpdate", payload: mobile };
}
export function reset(reset) {
  return { type: "reset" };
}
