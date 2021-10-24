# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_24_185738) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "budget_total", default: 0
    t.integer "color", default: 0
    t.integer "icon", default: 0
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_categories_on_user_id"
  end

  create_table "due_dates", force: :cascade do |t|
    t.datetime "date"
    t.bigint "category_expense_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_expense_id"], name: "index_due_dates_on_category_expense_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.string "name", null: false
    t.integer "expected_total", default: 0, null: false
    t.text "notes"
    t.boolean "fund", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "category_id", null: false
    t.index ["category_id"], name: "index_expenses_on_category_id"
  end

  create_table "reoccurings", force: :cascade do |t|
    t.datetime "date"
    t.bigint "transaction_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["transaction_id"], name: "index_reoccurings_on_transaction_id"
  end

  create_table "transactions", force: :cascade do |t|
    t.bigint "category_expense_id", null: false
    t.string "name", null: false
    t.integer "amount", default: 0, null: false
    t.text "note"
    t.boolean "deleted"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "expense_id", null: false
    t.datetime "transaction_date", precision: 6, null: false
    t.index ["category_expense_id"], name: "index_transactions_on_category_expense_id"
    t.index ["expense_id"], name: "index_transactions_on_expense_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "categories", "users"
  add_foreign_key "due_dates", "expenses", column: "category_expense_id"
  add_foreign_key "expenses", "categories"
  add_foreign_key "reoccurings", "transactions"
  add_foreign_key "transactions", "expenses"
  add_foreign_key "transactions", "expenses", column: "category_expense_id"
end
