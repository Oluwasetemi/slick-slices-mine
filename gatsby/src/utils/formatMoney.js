const formatter = Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
