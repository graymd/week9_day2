addressBook.factory('contactData', function($http) {
  contactData = {
    data: {
      contacts: [
      ]
    }
  }

  contactData.loadContacts = function() {
    $http.get("/contacts.json").success(function(contactsFromServer){
      // console.log(contactsFromServer);
      _.each(contactsFromServer, function(contact){
        contactData.pushContact(contact)
      })
    });
  }

  contactData.pushContact = function(contact) {
    contactData.data.contacts.push(contact);
  }

return contactData;
});