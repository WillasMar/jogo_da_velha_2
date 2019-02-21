$(function(){
	var vez = 0;

	atualizarVez();

	function atualizarVez(){
		if(vez == 0){
			$('#vez').html('<img src="assets/img/O.png" width="70">');
		}else{
			$('#vez').html('<img src="assets/img/X.png" width="70">');
		}		
	}

	function verificarGanhador(){

	}

	/* ao setar a imagem no ponteiro do mouse usa-se esse caminho
	por que ele inserido no arquivo html, e esse arquivo fica antes da
	pasta assets. */
	$('.areaInt').bind('mousemove', function(){
		if($(this).find('img').length == 0){
			if(vez == 0){
				$(this).css('cursor','url("assets/img/O_64.ico"), default');
			}else{
				$(this).css('cursor','url("assets/img/X_64.ico"), default');
			}
		}else{
			$(this).css('cursor','auto');
		}
	});

	/* insere um evento de click para que adiciona uma tag img apontando para O.png ou X.png */
	$('.areaInt').bind('click', function(){
		if($(this).find('img').length == 0){
			if(vez == 0){
				$(this).html('<img src="assets/img/O.png" width="50">');
				vez = 1;
				$(this).css('cursor','auto');
				atualizarVez();
				verificarGanhador();
			}else if(vez == 1){
				$(this).html('<img src="assets/img/X.png" width="50">');
				vez = 0;
				$(this).css('cursor','auto');
				atualizarVez();
				verificarGanhador();
			}
		}
	});
});