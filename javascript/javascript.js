function validationform(){
    var firstname=document.validateform.firstname.value;
    var lastname=document.validateform.lastname.value;
    var city=document.validateform.city.value;
    var phonenumber=document.validateform.phonenumber.value;
    
    if(firstname==null ||firstname==""){
        alert("enter firstname")
        return false;
    }
    else if(lastname==null||lastname=="")
    {
        alert("enter lastname")
    return false;
}
    else if(city==null||city==""){
        alert("enter the city");
return false;
    }
    else if(phonenumber==null || phonenumber==""){
        alert("enter phonenumber")
    return false;
}
else if(address==null||address==""){
    alert("enter address")
    return false;
}
else{
    alert("form submitted successfully")
}
}



