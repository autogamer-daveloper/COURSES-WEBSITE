document.querySelectorAll(".faq-item").forEach(item=>{

    const button=item.querySelector(".faq-question");
    const answer=item.querySelector(".faq-answer");
    const text=item.querySelector(".question-text");

    button.addEventListener("click",()=>{

        const opened=item.classList.toggle("opened");

        answer.style.maxHeight=
            opened ? answer.scrollHeight+"px" : "0";

        text.textContent=
            opened
            ? text.dataset.open
            : text.dataset.close;

    });

});