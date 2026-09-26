const galleryItems =
    document.querySelectorAll(".gallery-item");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const imageTitle =
    document.getElementById("imageTitle");

const imageCategory =
    document.getElementById("imageCategory");

const closeBtn =
    document.getElementById("closeBtn");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const images = [

    {
        src: "images/water lily.jpg",
        title: "Water Lily",
        category: "Nature"
    },

    {
        src: "images/london.jpg",
        title: "London",
        category: "Cities"
    },

    {
        src: "images/dog.jpg",
        title: "Dog",
        category: "Animals"
    },

    {
        src: "images/beach.jpg",
        title: "Beach",
        category: "Nature"
    },

    {
        src: "images/turtle.jpg",
        title: "Turtle",
        category: "Animals"
    },

    {
        src: "images/hibiscus.jpg",
        title: "Hibiscus",
        category: "Nature"
    },

    {
        src: "images/duck.jpg",
        title: "Duck",
        category: "Animals"
    },

    {
        src: "images/cliff.jpg",
        title: "Cliff",
        category: "Nature"
    },

    {
        src: "images/tulips.jpg",
        title: "Field of Tulips",
        category: "Nature"
    },

    {
        src: "images/bear.jpg",
        title: "Bear",
        category: "Animals"
    },

    {
        src: "images/mountain.jpg",
        title: "Mountain Sunset",
        category: "Nature"
    },

    {
        src: "images/chicago.jpg",
        title: "Chicago Skyline",
        category: "Cities"
    }

];

let currentIndex = 0;

function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("show");
}

function updateLightbox() {

    const image = images[currentIndex];

    lightboxImage.src = image.src;

    lightboxImage.alt = image.title;

    imageTitle.textContent =
        image.title;

    imageCategory.textContent =
        image.category;
}

function closeLightbox() {

    lightbox.classList.remove("show");
}

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateLightbox();
}

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateLightbox();
}

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const index =
            Number(item.dataset.index);

        openLightbox(index);

    });

});


closeBtn.addEventListener(
    "click",
    closeLightbox
);


nextBtn.addEventListener(
    "click",
    nextImage
);


prevBtn.addEventListener(
    "click",
    previousImage
);

lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});

document.addEventListener("keydown", event => {

    if (!lightbox.classList.contains("show")) {
        return;
    }


    if (event.key === "ArrowRight") {
        nextImage();
    }


    if (event.key === "ArrowLeft") {
        previousImage();
    }


    if (event.key === "Escape") {
        closeLightbox();
    }

});

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;


        // Update active button

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Filter images

        galleryItems.forEach(item => {

            const itemCategory =
                item.dataset.category;


            if (
                category === "all" ||
                category === itemCategory
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});