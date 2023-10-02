// testimoni.js

const testimonialSlider = document.getElementById("testimonial-slider");

function loadTestimonials() {
    // Memuat data testimoni dari API
    fetch('https://651a8471340309952f0d72a6.mockapi.io/testimonial')
        .then(response => response.json())
        .then(data => {
            // Memproses data testimoni dari API
            data.forEach(testimonial => {
                const testimonialDiv = document.createElement("div");
                testimonialDiv.classList.add("testimonial");

                const testimonialImage = document.createElement("img");
                testimonialImage.src = testimonial.image; // Ganti dengan URL gambar profil pelanggan dari API

                const testimonialContent = document.createElement("div");
                testimonialContent.classList.add("content");
                testimonialContent.textContent = testimonial.content;

                const testimonialRating = document.createElement("div");
                testimonialRating.classList.add("rating");
                testimonialRating.innerHTML = "&#9733;".repeat(testimonial.rating);

                testimonialDiv.appendChild(testimonialImage);
                testimonialDiv.appendChild(testimonialContent);
                testimonialDiv.appendChild(testimonialRating);

                testimonialSlider.appendChild(testimonialDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}

function scrollTestimonials(direction) {
    const slider = document.getElementById("testimonial-slider");
    const scrollAmount = 550;
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

// Memanggil fungsi untuk memuat testimoni dari API
loadTestimonials();
