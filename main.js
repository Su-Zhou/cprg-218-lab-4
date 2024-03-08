console.log('Hello, World!');


document.addEventListener ("DOMContentLoaded", function() { /*footer dynamic date*/
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
});


