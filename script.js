document.addEventListener("DOMContentLoaded", function() {
    var acceptButton = document.getElementById("accept-button");
    var privacyPolicy = document.getElementById("privacy-policy");

    acceptButton.addEventListener("click", function() {
        privacyPolicy.style.display = "none";
    });
});
