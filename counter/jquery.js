$(document).ready(function(){
    var counter = 0

    // Decrement values
    $('#btn-decrement').click(function(){
        --counter
        if(counter > 0){
            $('#valor').html(counter)
        } else {
            alert('Não é permitido número negativo')
        }        
    })

    // Increment values
    $('#btn-increment').click(function(){
        ++counter
        $('#valor').html(counter)
    })
})