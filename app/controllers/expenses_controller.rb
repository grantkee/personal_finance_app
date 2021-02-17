class ExpensesController < ApplicationController
  def index
    @expenses = Expense.all
  end

  def show
    @expense = Expense.find(params[:id])
  end
  
  def new
    @expense = Expense.new
  end

  def create
    @expense = Expense.new(name: "school", budget_total: 123.45, current_total: 0.00, color: "red", icon: "1", history: "")

    if @expense.save
      redirect_to @expense
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
    def expense_params
      params.require(:expense).permit(:name, :budget_total, :current_total, :color, :icon)
    end
end
