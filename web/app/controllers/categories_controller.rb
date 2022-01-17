class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories, include: :expenses
  end

  def show
    @category = Category.find(params[:id])
  end
  
  def new
    @category = Category.new
  end

  def create
    @category = Category.new(category_params)

    if @category.save
      # redirect_to @category
      render json: @category, status: :created, location: @category
    else
      # render :new, status: :unprocessable_entity
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def edit
    @category = Category.find(params[:id])
  end

  def update
    @category = Category.find(params[:id])

    if @category.update(category_params)
      redirect_to @category
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy

    redirect_to expenses_path
  end

  private
    def category_params
      params.require(:category).permit(:name, :budget_total, :current_total, :color, :icon, :income)
    end
end