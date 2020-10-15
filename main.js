window.onload = () => {
    let sources = [
        "clapping_hands.gif",
        "mr_holmes_hanoi_set.png",
        "poor_man_mit.png",
        "poor_man_pink_floyd.png",
        "poor_man_pollock.png",
        "poor_man_rothko.png",
        "poor_man_unknown_pleasures.png",
        "smooth_brain.gif"
    ]

    let gallery = document.getElementById("engine-gallery");
    let i = 1;
    setInterval(() => {
        gallery.src = `img/computer_graphics_gallery/${sources[i]}`;
        i++;
        if(i == sources.length) {
            i = 0;
        }
    }, 2500)

}