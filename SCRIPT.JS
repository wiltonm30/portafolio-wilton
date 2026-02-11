

console.log("Scroll script activo");
const elements = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.classList.add("animate");
});
const images = document.querySelectorAll(".portfolio-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});
const chatToggle = document.getElementById("chat-toggle");
const chatbot = document.getElementById("chatbot");
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");

chatToggle.onclick = () => {
    chatbot.style.display =
        chatbot.style.display === "flex" ? "none" : "flex";
};

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    chatBody.innerHTML += `<p class="user">${message}</p>`;
    userInput.value = "";

    setTimeout(() => {
        let response = "Gracias por escribirnos 👋";

        if (message.toLowerCase().includes("precio")) {
            response = "Nuestros precios se ajustan a tu negocio 💼. Escríbenos por WhatsApp.";
        } else if (message.toLowerCase().includes("servicio")) {
            response = "Ofrecemos producción audiovisual, marketing digital y contenido para redes 📸🎬.";
        } else if (message.toLowerCase().includes("contacto")) {
            response = "Puedes contactarnos por WhatsApp o Instagram 📲.";
        }

        chatBody.innerHTML += `<p class="bot">${response}</p>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);
}
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // para que cargue bien al inicio

// ===== SCROLL ANIMATIONS (Intersection Observer) =====



const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // anima una sola vez
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(section => {
    observer.observe(section);
});
