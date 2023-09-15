function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    var dropbtn = document.querySelector(".dropbtn");

    if (dropdown.style.display === "block") {
        dropdown.style.animation = 'fadeOut 0.3s';
        setTimeout(function() {
            dropdown.style.display = "none";
            dropbtn.style.display = "inline-block"; // Mengubah dari "block" ke "inline-block"
        }, 300);
    } else {
        dropdown.style.animation = 'fadeIn 0.3s';
        dropdown.style.display = "block";
        dropbtn.style.display = "none";
    }
}
