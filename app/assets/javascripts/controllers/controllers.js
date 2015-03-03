var indexCtrl = addressBook.controller('indexCtrl', function($scope, contactData){
    
    $scope.some_text = {quote: "yippy kiyay", quoteMaster: "Bruce"};
    
    $scope.contacts = contactData.data;

    contactData.loadContacts();

    $scope.submitForm = function() {
      contactData.addContact(
        {
          contact: {
            first_name: $scope.formFirstName, last_name: $scope.formLastName, email: $scope.formEmail, phone_number: $scope.formPhoneNumber 
          }
        }
      );
      $scope.formFirstName = ''
      $scope.formLastName = ''
      $scope.formEmail = ''
      $scope.formPhoneNumber = ''
    };

    $scope.deleteContact = function(contactId) {
      contactData.deleteContact(contactId);
    }

    $scope.editContact = function(contact) {
      
      $scope.formFirstName = contact.first_name
      $scope.formLastName = contact.last_name
      $scope.formEmail = contact.email
      $scope.formPhoneNumber = contact.phone_number
      // contactData.deleteEditedContact(contact);
    }
});
