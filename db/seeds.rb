3.times do |i|
  Expense.create(
    name: "Expense #{i + 1}",
    budget_total: 123.45
    current_total: 0.00
    color: "#{i}"
    icon: "#{i + 1}"
  )
end
