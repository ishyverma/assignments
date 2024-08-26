function calculateTotalSpentByCategory(transactions) {
  if (transactions.length === 0) {
    return [];
  }

  const categoryTotals = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;
    if (category in categoryTotals) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }

  const result = Object.entries(categoryTotals).map(([category, totalSpent]) => ({
    category,
    totalSpent
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;