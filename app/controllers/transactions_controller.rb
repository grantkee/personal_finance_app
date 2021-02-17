class TransactionsController < ApplicationController
  def create
    @expense = Expense.find(params[:expense_id])
    @transaction = @expense.transactions.create(comment_params)

    redirect_to expense_path(@expense)
  end

  def destroy
    @expense = Expense.find(params[:expense_id])
    @transaction = @expense.transactions.find(params[:id])
    @transaction.destroy

    redirect_to expense_path(@expense)
  end

  private
    def comment_params
      params.require(:comment).permit(:amount)
    end
end
