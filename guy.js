document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    const guy = document.querySelector(".guy");

    setTimeout(() => {
        preloader.classList.add("hidden");
        setTimeout(() => {
            preloader.style.display = "none";
            content.style.display = "block";
            guy.classList.add("show");
        }, 1); 
    }, 2);

    window.addEventListener("scroll", () => {

        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = Math.min(window.scrollY / maxScroll, 1);

        guy.style.opacity = 1 - progress * 0.5;
    });
});