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

// 💗 СЧЁТЧИК НАШИХ ОТНОШЕНИЙ

const relationshipStart = new Date("2025-12-07T07:30:00+03:00");

function updateRelationshipCounter() {
    const now = new Date();

    let difference = now - relationshipStart;

    if (difference < 0) difference = 0;

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;

    document.getElementById("counterDays").textContent = days;
    document.getElementById("counterHours").textContent = hours;
    document.getElementById("counterMinutes").textContent = minutes;
    document.getElementById("counterSeconds").textContent = seconds;
}

updateRelationshipCounter();

setInterval(updateRelationshipCounter, 1000);

// 🎂 ФИНАЛЬНОЕ ПОЗДРАВЛЕНИЕ

const birthdayButton = document.getElementById("birthdayButton");

if (birthdayButton) {

    birthdayButton.addEventListener("click", () => {

        const celebration = document.createElement("div");

        celebration.id = "birthdayCelebration";

        celebration.innerHTML = `
            <div class="confetti-container"></div>

            <div class="birthday-message">

                <div class="birthday-small">
                    14.01.2009 ♡
                </div>

                <h2>
                    В этот день появилась
                    самая прекрасная девушка —
                    ты, моя Илоночка ♡
                </h2>

                <div class="birthday-line">♡</div>

                <p>
                    Я хочу поздравить тебя с днём рождения
                    и пожелать тебе бесконечного счастья,
                    улыбок и исполнения самых заветных желаний.
                </p>

                <p>
                    Спасибо тебе за то, что ты появилась
                    в моей жизни. За каждый разговор,
                    каждую улыбку и каждый момент,
                    который мы разделили вместе.
                </p>

                <p>
                    Я очень ценю тебя и хочу,
                    чтобы ты всегда помнила:
                    <strong>ты для меня особенная.</strong>
                </p>

                <p>
                    Пусть впереди тебя ждёт огромное
                    количество счастливых дней,
                    а рядом всегда будут люди,
                    которые любят тебя.
                </p>

                <div class="birthday-line">♡</div>

                <p>
                    <strong>
                        С днём рождения,
                        моя любимая Илоночка. ❤️
                    </strong>
                </p>

                <p>
                    Я тебя очень люблю. ♡
                </p>

            </div>
        `;

        document.body.appendChild(celebration);

        requestAnimationFrame(() => {
            celebration.classList.add("show");
        });

        const container =
            celebration.querySelector(".confetti-container");

        for (let i = 0; i < 80; i++) {

            const piece = document.createElement("span");

            piece.className = "confetti";

            piece.style.left =
                Math.random() * 100 + "%";

            piece.style.animationDuration =
                (3 + Math.random() * 4) + "s";

            piece.style.animationDelay =
                Math.random() * 1.5 + "s";

            piece.style.width =
                (5 + Math.random() * 5) + "px";

            piece.style.height =
                (8 + Math.random() * 7) + "px";

            container.appendChild(piece);
        }
    });
}