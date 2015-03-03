var indexCtrl = addressBook.controller('indexCtrl', function($scope, contactData){
    
    $scope.some_text = {quote: "yippy kiyay", quoteMaster: "Bruce"};
    
    $scope.contacts = contactData.data;

    $scope.newContact = true

    contactData.loadContacts();

    $scope.submitForm = function(contact) {
      console.log($scope.newContact)
      if ($scope.newContact){
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
        $scope.newContact = true
        console.log($scope.newContact)
      }
      else{
        contactData.editContact(
          {
            contact: {
              id: $scope.formContactId, first_name: $scope.formFirstName, last_name: $scope.formLastName, email: $scope.formEmail, phone_number: $scope.formPhoneNumber 
            }
          }
        );
        $scope.formFirstName = ''
        $scope.formLastName = ''
        $scope.formEmail = ''
        $scope.formPhoneNumber = ''
        $scope.newContact = true
        console.log($scope.newContact)
      }
    };

    $scope.deleteContact = function(contactId) {
      contactData.deleteContact(contactId);
    }

    $scope.editContact = function(contact) {
      console.log(contact.id)
      $scope.formFirstName = contact.first_name
      $scope.formLastName = contact.last_name
      $scope.formEmail = contact.email
      $scope.formPhoneNumber = contact.phone_number
      $scope.formContactId = contact.id
      $scope.newContact = false
      // contactData.deleteEditedContact(contact);
    }
});
