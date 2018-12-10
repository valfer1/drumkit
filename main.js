function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if(!audio) return;

        audio.currentTime = 0;
        audio.play();

        keys.classList.add("playing");
    }

    const keys = document.querySelectorAll(".key");

    function removeTransition(e) {

        if (e.propertyName !== "transform") return;
        this.classList.remove("playing");
    }

    window.addEventListener("keydown", playSound);

    keys.forEach(key => key.addEventListener("transitionend", removeTransition));