# 3.times do |i|
#   Expense.create(
#     name: "Expense #{i + 1}",
#     budget_total: 123.45,
#     current_total: 0.00,
#     color: "#{i}",
#     icon: "#{i + 1}",
#   )
# end
# Expense.create(
#   name: "Income",
#   budget_total: 3000.00,
#   current_total: 0.00,
#   color: "0",
#   icon: "0",
#   income: true
# )
# Expense.create(
#   name: "Giving",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "1",
#   icon: "1",
#   income: false,
# )
# Expense.create(
#   name: "Savings",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "2",
#   icon: "2",
#   income: false,
# )
# Expense.create(
#   name: "Housing",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "3",
#   icon: "3",
#   income: false,
# )
# Expense.create(
#   name: "Transportation",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "4",
#   icon: "4",
#   income: false,
# )
# Expense.create(
#   name: "Food",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "5",
#   icon: "5",
#   income: false,
# )
# Expense.create(
#   name: "Personal",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "6",
#   icon: "6",
#   income: false,
# )
# Expense.create(
#   name: "Lifestyle",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "0",
#   icon: "0",
#   income: false,
# )
# Expense.create(
#   name: "Health",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "1",
#   icon: "1",
#   income: false,
# )
# Expense.create(
#   name: "Insurance",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "2",
#   icon: "2",
#   income: false,
# )
# Expense.create(
#   name: "Debt",
#   budget_total: 123.45,
#   current_total: 0.00,
#   color: "3",
#   icon: "3",
#   income: false,
# )

categories = %w(Income Giving Savings Investing Housing Transportation Food Personal Lifestyle Health Insurance Debt Subscriptions)

categories.each { |cat| Category.create(name: cat)}