class CreateReoccurings < ActiveRecord::Migration[6.0]
  def change
    create_table :reoccurings do |t|
      t.datetime :date
      t.references :transaction, null: false, foreign_key: true

      t.timestamps
    end
  end
end
