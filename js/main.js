// Ready the document and run the jasonBoomerang function in the output element of your choice.
$(document).ready( function () {
    $("#output").jasonBoomerang ( {
        "output" : "#output",           
        "url" : "data/contacts.json",   
        "searchField" : "#q"            
    });
}); // close document.ready function