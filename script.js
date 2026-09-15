const envelopeScreen =
    document.getElementById("envelopeScreen");

const envelope =
    document.querySelector(".envelope");

const openButton =
    document.getElementById("openButton");

const greeting =
    document.getElementById("greeting");

const photos =
    document.getElementById("photos");

const final =
    document.getElementById("final");

const photosButton =
    document.getElementById("photosButton");

const finalButton =
    document.getElementById("finalButton");


/* Показываем только
   первый экран */

greeting.style.display = "none";
photos.style.display = "none";
final.style.display = "none";


/* ОТКРЫТИЕ КОНВЕРТА */

openButton.addEventListener("click", () => {

    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    openButton.style.opacity = "0";
    openButton.style.pointerEvents = "none";

    setTimeout(() => {
        envelopeScreen.classList.add(
            "swipe-away"
        );
    }, 1900);

    setTimeout(() => {

        envelopeScreen.style.display = "none";

        greeting.style.display = "flex";

        greeting.classList.add(
            "section-show"
        );

    }, 3150);
});

/* ПЕРЕХОД К ФОТО */

photosButton.addEventListener("click", () => {

    greeting.classList.add("section-hide");

    setTimeout(() => {

        greeting.style.display = "none";

        photos.style.display = "flex";

        photos.classList.add(
            "section-show"
        );

    }, 700);
});


/* ФИНАЛ */

finalButton.addEventListener("click", () => {

    photos.classList.add("section-hide");

    setTimeout(() => {

        photos.style.display = "none";

        final.style.display = "flex";

        final.classList.add(
            "section-show"
        );

    }, 700);
});

/* 💗 СОЗДАЁМ БОЛЬШОЙ ФОТОКОЛЛАЖ */

const collagePhotos = [
    "IMG_1493.jpeg",
    "IMG_1492.jpeg",
    "IMG_0691.jpeg",
    "IMG_0682.jpeg",
    "IMG_0674.jpeg",
    "IMG_0692.jpeg",
    "IMG_0598.jpeg",
    "IMG_0511.jpeg",
    "IMG_0510.jpeg",
    "IMG_0372.jpeg"
];

const photoGrid = document.querySelector(".photo-grid");

if (photoGrid) {
    photoGrid.innerHTML = "";

    collagePhotos.forEach((photo, index) => {
        const box = document.createElement("div");
        box.className = "photo";

        const img = document.createElement("img");
        img.src = "photos/" + photo;
        img.alt = "Наш момент ❤️";

        box.appendChild(img);
        photoGrid.appendChild(box);
    });
}

const myPhotos = [
    "IMG_0372.jpeg.png",
    "IMG_0510.jpeg.png",
    "IMG_0511.jpeg.png",
    "IMG_0598.jpeg.png",
    "IMG_0674.jpeg.png",
    "IMG_0682.jpeg.png",
    "IMG_0691.jpeg.png",
    "IMG_0692.jpeg.png",
    "IMG_1492.jpeg.png",
    "IMG_1493.jpeg.png"
];

const photoImages = document.querySelectorAll(".photo img");

photoImages.forEach((img, index) => {
    if (myPhotos[index]) {
        img.src = "photos/" + myPhotos[index];
    }
});

// Секретный вход
const secretScreen = document.createElement("div");
secretScreen.className = "secret-screen";

secretScreen.innerHTML = `
    <div class="secret-box">
        <div class="secret-flower">✿</div>

        <h2>Для тебя, Илоночка ♡</h2>

        <p>Введи наше секретное слово</p>

        <input
            class="secret-input"
            type="password"
            placeholder="Секретное слово"
        >

        <br>

        <button class="secret-button">
            Открыть ♡
        </button>

        <div class="secret-error"></div>
    </div>
`;

document.body.appendChild(secretScreen);

const secretInput = secretScreen.querySelector(".secret-input");
const secretButton = secretScreen.querySelector(".secret-button");
const secretError = secretScreen.querySelector(".secret-error");

// ЗДЕСЬ МОЖНО ПОМЕНЯТЬ ПАРОЛЬ
const secretPassword = "071225";

function checkSecret() {
    if (secretInput.value === secretPassword) {
        secretScreen.style.opacity = "0";

        setTimeout(() => {
            secretScreen.remove();
        }, 800);
    } else {
        secretError.textContent = "Неверное слово ♡";
        secretInput.value = "";
    }
}

secretButton.addEventListener("click", checkSecret);

secretInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkSecret();
    }
});

