const clickArea = document.querySelector(".innerdiv");
const countArea = document.querySelector(".clickCount");
// <!-- <i class="fa-solid fa-heart"></i> -->
const showHeart = (e) => {
    const heart = document.createElement("i");
    heart.classList.add("fa-solid");
    heart.classList.add("fa-heart");
    clickArea.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 800);
}
let likeCount = 0;
clickArea.addEventListener("dblclick",(e) => {
    countArea.innerHTML = ++likeCount;
    showHeart(e);
});

