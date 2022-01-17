class TransactionsController < ApplicationController
  def create
    @expense = Expense.find(params[:expense_id])
    @transaction = @expense.transactions.create(transaction_params)

    redirect_to expense_path(@expense)
  end

  def destroy
    @expense = Expense.find(params[:expense_id])
    @transaction = @expense.transactions.find(params[:id])
    @transaction.destroy

    redirect_to expense_path(@expense)
  end

  private
    def transaction_params
      params.require(:transaction).permit(:amount)
    end
end
