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

    $scope.deleteContact = function(quoteId) {
      contactData.deleteContact(quoteId);
    };
});





// var indexCtrl = addressBook.controller('indexCtrl', function($scope, quoteData) {
//     $scope.some_text = {quote: "'eeeeeeyyyyyy!", quoteMaster: "The Fonz"};
//     $scope.quotes = quoteData.data;
//     $scope.formQuote = '';
//     $scope.formQuoteMaster = '';
//     quoteData.loadQuotes();
//     $scope.changeQuote = function() {      
//       $scope.some_text = _.sample($scope.quotes.quotes);
//     };

//     $scope.submitForm = function() {
//       quoteData.addQuote(
//         {
//           quote: {
//             quote: $scope.formQuote, quote_master: $scope.formQuoteMaster 
//           }
//         }
//       );
//       $scope.formQuote = '';
//       $scope.formQuoteMaster = '';
//     };

//     $scope.deleteQuote = function(quoteId) {
//       quoteData.deleteQuote(quoteId);
//     }
// });