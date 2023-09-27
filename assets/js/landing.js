function showDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.animation = 'fadeIn 0.3s';
    dropdown.style.display = "block";
}

function hideDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.animation = 'fadeOut 0.3s';
    setTimeout(function() {
        dropdown.style.display = "none";
    }, 300);
}
