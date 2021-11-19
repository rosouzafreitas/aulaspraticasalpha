function insertText () {
    let body_style = document.getElementById('body').style;
    body_style.maxWidth = "100vw";
    body_style.backgroundColor = "#eaeaea";
    body_style.color = "#FFFFFF";
    body_style.fontFamily = "Helvetica, sans-serif";
    let hdr_style = document.getElementById('header').style;
    hdr_style.textAlign = "center";
    hdr_style.width = "90vw";
    hdr_style.backgroundColor = "#606060";
    let header_txt = document.getElementById('headertxt');
    header_txt.innerHTML = "Rodrigo Souza de Freitas";
    header_txt.style.paddingTop = "5vh";
    let subtitle_txt = document.getElementById('subtitle');
    subtitle_txt.innerHTML = "My Hobby";
    subtitle_txt.style.paddingBottom = "5vh";
    let main_style = document.getElementById('main').style;
    main_style.display = "flex";
    main_style.width = "90vw";
    main_style.backgroundColor = "#dedede";
    main_style.paddingTop = "10vh"
    main_style.paddingBottom = "10vh"
    main_style.color = "#000000"
    main_style.textAlign = "center"
    let prof_pic_style = document.getElementById('profpic').style
    prof_pic_style.width = "8vw"
    prof_pic_style.height = "20vh"
    document.getElementById('myname').innerHTML = "Rodrigo Souza de Freitas"
    document.getElementById('mylocation').innerHTML = "Fortaleza - Ceará"
    document.getElementById('myage').innerHTML = "18 anos"
    let hobby_pic_style = document.getElementById('hobbypic').style
    hobby_pic_style.width = "8vw"
    hobby_pic_style.height = "20vh"
    document.getElementById('hobbytxt').innerHTML = "Tocar Guitarra/Violão"
    document.getElementById('hobbyabout').innerHTML = "Instrumentos de corda"
    document.getElementById('hobbylink').innerHTML = "Saiba mais"
}