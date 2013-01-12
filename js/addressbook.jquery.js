(function( $ ) {
    $.fn.jasonBoomerang = function(options) { // when the function is called use the default "options"
      
        /* Define the default options ("settings") for the plugin */
        var settings = $.extend( { 
                /* extend the plugin by passing these values as default settings ("options") */
                "output" : "#output",           // the element where you want to dump the data
                "url" : "data/contacts.json",   // the place to find the data
                "searchField" : "#q"            // the ID of the searchfield you are targeting
        }, options); // End default options
        
        return this.each (function() { // do this each time the function is called and return it...
        
            /* start the Ajax call */
            $.getJSON(options.url, function (data) {
        
            // save the input value, contacts length, searchField ID, and i to variables
            var addrBook = data.addressBook,
                count = addrBook.length,
                searchField = $(options.searchField),
                i;
            
                searchField.keyup (function(event){
                    
                    // take the value of the search field and return it to all lowercase and then set it so we can check it later for content.
                    var searchValue = searchField.val().toLowerCase();
                    
                    // empty the output field before we dump things in!
                    $(options.output).empty();
          
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
                                
                                $(options.output).append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a></p>').hide().fadeIn(300);
                                
                            } // end if
            
                        }); // end .each loop
            
                    } // end count check
            
                }) // end searchField on Keyup function
        
            }); // end the  getJSON Function
        
        }); // close return this.each   
        
    } // End jasonBoomerang Functions
    
})( jQuery ); // close the new jQuery Plugin