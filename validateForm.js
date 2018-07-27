function validateForm() {
    var x = docunebt.forms["contactForm"]["name"].value;
    if (x == "") {
        alert("name must be filled out");
        return false;
    }
}