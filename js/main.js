let links = ['facebook', 'github', 'spotify', 'instagram', 'twitter', 'linkedin'];

for (let i = 0; i < links.length; i++) {
    let el = document.getElementById(links[i]);
    let color = getComputedStyle(document.documentElement).getPropertyValue(`--${links[i]}-color`);
    el.style.borderBottomColor = color;
    el.addEventListener('mouseover', () => {
        el.style.backgroundColor = color;
    });
    el.addEventListener('mouseout', () => {
        el.style.backgroundColor = 'transparent';
    });
}