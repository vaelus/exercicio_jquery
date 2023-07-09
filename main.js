$(document).ready(function(){
    $('header button').click(function(){
        $('.container').slideDown();
    })

    $('#btn-fechar').click(function(){
        $('.container').slideUp();
    })
    

    $('form').on('submit' , function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<h3>${nomeTarefa}</h3>`).appendTo(novoItem);
        $(`<img src="./images/uncheck.png">`).appendTo(novoItem);

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#nome-tarefa').val('');

        
    })
    $('ul').on('click','li', function(e){
        e.preventDefault();
        $('img',this).attr('src', './images/check.png')
        $('h3',this).attr('class', 'finalizado')
    })
    
})