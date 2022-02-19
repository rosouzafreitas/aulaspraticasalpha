$(document).ready(function () {
    $('#searchbtn').on('click', searchZipCode)
    $('#zipcode').keypress(function (e) {
        var key = e.which;
        if(key == 13)
         {
           $('#searchbtn').click();
           return false;  
         }
       });   
    function searchZipCode () {
        const zipcode = $("#zipcode").val();
        zipcode.replace('-','');
        let isNum = /^\d+$/.test(zipcode);
        if ((zipcode.length == 8 && isNum) || (zipcode.length == 9 && zipcode.includes("-"))) {
            $.ajax({url: `https://cep.awesomeapi.com.br/${zipcode}`})
            .done ((data) => {
                $("#result").html(`${data.address}, ${data.district}, ${data.city}, ${data.state}`)
                /*Object.entries(data).forEach((coin) => {
                  $("#coins").append(`<option>${coin[0]}</option>`);
                })*/
                const iframe = document.getElementById('iframe')
                iframe.setAttribute("src", `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15925.896816606784!2d${data.lng}!3d${data.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1645289242860!5m2!1spt-BR!2sbr`)
            })
            .fail (() => {
                $("#result").html(`CEP não encontrado`)
                console.log("CEP NÃO ENCONTRADO")
            })
        } else {
            $("#result").html(`Por favor, digite um CEP válido`)
        }
    }
})