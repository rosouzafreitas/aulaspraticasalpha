$(document).ready(function () {
    function eval(number) {
        return new Function('return ' + number)();
    }

    $(".operator, .number").on("click", function () {
        $("#result").val($("#result").val() + $(this).val())
    })
    $(".equals").on("click", function () {
        $("#result").val(eval($("#result").val()))
    })
})