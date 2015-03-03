class ContactsController < ApplicationController

  def index
    @contacts = Contact.all
  end

  def show
    @contact = Contact.find params[:id]
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new contact_params
    @contact.save
    redirect_to contacts_path
  end

  def edit
    @contact = Contact.find params[:id]
  end

  def update
    @contact = Contact.find params[:id]
    @contact.update contact_params
    redirect_to contact_path(@contact)
  end

  def destroy
    @contact = Contact.find params[:id]
    @contact.destroy
    redirect_to contacts_path
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
