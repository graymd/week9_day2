require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
  
  let!(:contact) { FactoryGirl.create(:contact) }

  describe 'GET #index' do
    it 'should return all contacts' do
      xhr :get, :index
      expect(assigns(:contacts)).not_to eq(nil)
      expect(assigns(:contacts).length).to eq(1)
      expect(assigns(:contacts)).to include(contact)
    end
  end

  describe 'GET #show' do
    it 'should return contact object' do
      xhr :get, :show, id: contact
      expect(assigns(:contact)).to eq(contact)
    end
  end

  describe 'GET #new' do
    it 'should initialize contact object' do
      xhr :get, :new
      expect(assigns(:contact).class).to eq(Contact)
      expect(assigns(:contact).new_record?).to eq(true)
    end
  end

  describe 'POST #create' do
    it 'should create a contact object successfully' do
      xhr :post, :create, contact:{ first_name: 'kitter' }
      expect(assigns(:contact).class).to eq(Contact)
      expect(assigns(:contact)).not_to be_new_record
      # expect(response).to redirect_to contacts_path
    end
  end

  describe 'GET #edit' do
    it 'should show edit for contact object' do
      xhr :get, :edit, id: contact
      expect(assigns(:contact)).to eq(contact)
    end
  end

  describe 'PATCH #update' do
    it 'should update contact object successfully' do
      xhr :patch, :update, id: contact, :contact=>contact.attributes = { :first_name=> "Updated Name" }
      expect(assigns(:contact)).to eq(contact)
      expect(contact.first_name).to eq('Updated Name')
      # expect(response).to redirect_to contact_path(contact)
    end
  end

  describe 'DELETE #destroy' do
    
    let!(:contact1){ FactoryGirl.create(:contact) }
    
    it 'should delete contact object' do
     expect{
        xhr :delete, :destroy, id: contact1
      }.to change(Contact, :count).by(-1)
      # expect(response).to redirect_to contacts_path
    end
  end



end
