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

  // contactData.editContact = function(contact) {
  //   console.log(contact.id)
  //   $http.patch("/contacts" + contact.id + ".json").success(function(data){
      
  //   })
  // }

return contactData;
});