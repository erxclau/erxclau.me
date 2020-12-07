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

    let images = new Array();

    sources.forEach(file => {
        let tmp = new Image();
        tmp.src = `img/computer_graphics_gallery/${file}`;
        tmp.alt = file;
        tmp.className = "project-visual";
        tmp.id = "engine-gallery";
        images.push(tmp);
    });

    let gallery = document.getElementById("engine-gallery");
    let container = gallery.parentElement;
    let i = 1;
    setInterval(() => {
        container.removeChild(container.lastElementChild);
        container.appendChild(images[i]);
        i++;
        if(i == sources.length) {
            i = 0;
        }
    }, 2500)

}