var form = document.getElementById("form");
form.noValidate = true;

form.onsubmit = function(e) {
    e.preventDefault();
    this.reportValidity();

    if (this.checkValidity()) {
        document.getElementById("rating-card").style.display = "none";
        document.getElementById("ty-card").style.display = "flex";
        document.getElementById("num").innerHTML = document.querySelector('input[name="rate"]:checked').value;
    }
}