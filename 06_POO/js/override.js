function over(){
    var alert = function(message) {  
        document.write(message);  
    }  
    // The following calls will invoke the overridden alert() function  
    alert("Learn ");  
    alert("JavaScript");  
}