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

ActiveRecord::Schema.define(version: 2021_03_28_203219) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "category_expenses", force: :cascade do |t|
    t.bigint "expense_category_id", null: false
    t.string "name"
    t.integer "expected_total"
    t.text "notes"
    t.boolean "fund"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["expense_category_id"], name: "index_category_expenses_on_expense_category_id"
  end

  create_table "due_dates", force: :cascade do |t|
    t.datetime "date"
    t.bigint "category_expense_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_expense_id"], name: "index_due_dates_on_category_expense_id"
  end

  create_table "expense_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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
    t.string "name"
    t.integer "amount"
    t.text "note"
    t.boolean "deleted"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_expense_id"], name: "index_transactions_on_category_expense_id"
  end

  add_foreign_key "category_expenses", "expense_categories"
  add_foreign_key "due_dates", "category_expenses"
  add_foreign_key "reoccurings", "transactions"
  add_foreign_key "transactions", "category_expenses"
end
