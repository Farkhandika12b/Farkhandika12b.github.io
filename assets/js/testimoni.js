const testimonials = [
    {
        name: "X_Player",
        rating: 5,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis elit sit amet odio malesuada ultrices.",
    },
    {
        name: "Varthrax069",
        rating: 4,
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
        name: "HeavenSmith",
        rating: 3,
        content: "Aliquam ac mauris non ligula sagittis dignissim. Morbi vel nisi et ex mollis tempus.",
    },
];

const testimonialSlider = document.getElementById("testimonial-slider");

testimonials.forEach(testimonial => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.classList.add("testimonial");

    const testimonialImage = document.createElement("img");
    testimonialImage.src = "/assets/user-icon.png"; // Ganti dengan URL gambar profil pelanggan

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


function scrollTestimonials(direction) {
    const slider = document.getElementById("testimonial-slider");
    const scrollAmount = 550;
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}