

function convert(degree) {
    var deg;
    if (degree == "C") {
        deg = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(deg);

    }

    else {

        deg = (document.getElementById("f").value - 32) * 5 / 9;
        document.getElementById("c").value = Math.round(deg);
    }

    if (isNaN(deg.value)) { 
        deg.value = "Enter a valid number";
}}





