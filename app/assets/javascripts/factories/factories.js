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

  contactData.addContact = function(contact) {
    $http.post("/contacts.json", contact).success(function(contactFromServer){
      contactData.pushContact(contactFromServer);
    })
  }

  contactData.pushContact = function(contact) {
    contactData.data.contacts.push(contact);
  }

  contactData.deleteContact = function(contactId) {
    $http.delete("/contacts/" + contactId + ".json").success(function(data){
      console.log("Success");
      var deletedContact = _.findWhere( contactData.data.contacts, {id: parseInt(contactId)})
      console.log(contactData.data.contacts)
      contactData.data.contacts = _.without(contactData.data.contacts, deletedContact)
      console.log(contactData.data.contacts)
    })
  }

  contactData.editContact = function(contact, $scope) {
    console.log(contact)
    console.log(contact.contact.id)
    $http.patch("/contacts/" + contact.contact.id + ".json", contact).success(function(data){
      var foundContact = _.findWhere( contactData.data.contacts, {id: parseInt(contact.contact.id)})
      foundContact.first_name = data.first_name
      foundContact.last_name = data.last_name
      foundContact.email = data.email
      foundContact.phone_number = data.phone_number
    })
  }

return contactData;
});


