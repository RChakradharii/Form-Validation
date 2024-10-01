document.getElementById("contactForm").addEventListener("submit", function(event) {
   
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    

    
    if (name === "" || age === "" || email === "" || message === "") {
       

        
        alert("Please fill in all fields before submitting the form.");

    }

    alert("Form submitted successfully");
});







 