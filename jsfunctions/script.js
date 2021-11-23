function fillHeader(text) {
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(text));
    header = document.getElementById('header');
    header.appendChild(h1);
}
fillHeader("My Animal Soul");
function fillFooter(text) {
    let span = document.createElement('span');
    span.appendChild(document.createTextNode(text));
    footer = document.getElementById('footer');
    footer.appendChild(span);
}
fillFooter("That's me")
fillFooter("That's my favorite animal!");