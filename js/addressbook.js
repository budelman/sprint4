(function( $ ) {
  $.fn.jasonBoomerang = function(options) { //runn the function with the settings of "options"
  
    // Define the default options for the plugin.
    var defaults = $.extend( { // extend the plugin by passing these values as default settings or "options"
            output: "#output",
            url: "data/contacts.json",
            searchField: "#q"
    }, options); // End the setting of your options
    
  };
})( jQuery );

// Ready the document and get the JSON
$(document).ready(function() {
    
    var searchField = $('#q');

    /* start the Ajax call */
    $.getJSON('data/contacts.json', function (data) {

    // save the input value, contacts length and i to variables
    var addrBook = data.addressBook,
        count = addrBook.length,
        i;

    var addr = {
        
        search : function(event){
            
            // take the value of the search field and return it to all lowercase and then set it so we can check it later for content.
            var searchValue = searchField.val().toLowerCase();
            
            // empty the output field before we dump things in!
            $('#output').empty();
  
            // stop the default behavior
            event.preventDefault();
    
            // check the count, of course
            if(count > 0 && searchValue !== ""){
            
                // loop through the contacts
                $.each(addrBook, function (i, obj) {
                
                    // look through the name value to see if it contains the searchterm string
                    var obj = addrBook[i],
                        isItFound = obj.name.indexOf(searchValue);
    
                    // anything other than -1 means we found a match
                    if(isItFound !== -1) {
                        
                        $('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a></p>').hide().fadeIn();
                        
                    } // end if
    
                }); // end .each loop
    
            } // end count check
    
        } // end search function
    
    }; // end addr object
    // activate auto complete on keyUp
    $('#q').keyup(function(event) {
        addr.search(event);
    });

}); // end json

}); // end document.ready function