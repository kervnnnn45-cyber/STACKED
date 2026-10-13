// No backend is connected, so nothing is ever sent. Replace these two functions with
// real calls (your own API, Formspree, a payment provider...) and return { sent: true } only on success.
export async function submitOrder(order) {
  // e.g. const res = await fetch("YOUR_ORDER_ENDPOINT", { method: "POST", body: JSON.stringify(order) });
  return { sent: false };
}
export async function submitMessage(message) {
  // e.g. const res = await fetch("YOUR_FORM_ENDPOINT", { method: "POST", body: JSON.stringify(message) });
  return { sent: false };
}
