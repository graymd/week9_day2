class ContactsController < ApplicationController

  def index
    @contacts = Contact.all
    respond_to do |format|
      format.json {render json: @contacts }
    end
  end

  def show
    @contact = Contact.find params[:id]
    respond_to do |format|
      format.json {render json: @contact }
    end
  end

  def new
    @contact = Contact.new
    respond_to do |format|
      format.json {render json: @contact }
    end
  end

  def create
    @contact = Contact.new contact_params
    @contact.save
    respond_to do |format|
      format.json { render json: @contact }
    end
  end

  def edit
    @contact = Contact.find params[:id]
    respond_to do |format|
      format.json {render json: @contact }
    end
  end

  def update
    @contact = Contact.find params[:id]
    @contact.update contact_params
    respond_to do |format|
      format.json { render json: @contact }
    end
  end

  def destroy
    @contact = Contact.find params[:id]
    @contact.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end


private
  def contact_params
    params.require(:contact).permit(
      :first_name,
      :last_name,
      :email,
      :phone_number
      )
  end

end
