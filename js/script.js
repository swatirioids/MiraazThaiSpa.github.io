document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("appointment-form").addEventListener("submit", function(event) {
        event.preventDefault();
        showPopup();
    });
    
    document.getElementById("close-popup").addEventListener("click", function() {
        closePopup();
    });
    
    function showPopup() {
        document.getElementById("success-popup").style.display = "flex";
    }
    
    function closePopup() {
        document.getElementById("success-popup").style.display = "none";
    }
    
});

