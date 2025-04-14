// Function to format a date
export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

// Function to calculate the total price with tax
export function calculateTotalPrice(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}
