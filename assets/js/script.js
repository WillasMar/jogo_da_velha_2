$(function(){
	var vez = 0;
	var jogar = 1; //inicia ou para o jogo | 1 = iniciar, 0 = parar

	atualizarVez();

	function atualizarVez(){
		if(vez == 0){
			$('#vez').html('<img src="assets/img/O.png" width="70">');
		}else{
			$('#vez').html('<img src="assets/img/X.png" width="70">');
		}		
	}

	function verificarGanhador(){
		var ganhador = '';
		var op = '';

		var a1 = $('.a1').attr('data-op');
		var b1 = $('.b1').attr('data-op');
		var c1 = $('.c1').attr('data-op');	
		var a2 = $('.a2').attr('data-op');
		var b2 = $('.b2').attr('data-op');
		var c2 = $('.c2').attr('data-op');		
		var a3 = $('.a3').attr('data-op');
		var b3 = $('.b3').attr('data-op');
		var c3 = $('.c3').attr('data-op');

		for(i = 0; i<=1; i++){
			if(i == 0){
				op = '0';
			}else{
				op = '1';
			}

			if(a1 == op && b1 == op && c1 == op){ //gorizontal
				ganhador = op;	
				$('.a1, .b1, .c1').addClass('padrao');	
			} else if(a2 == op && b2 == op && c2 == op){
				ganhador = op;	
				$('.a2, .b2, .c2').addClass('padrao');		
			} else if(a3 == op && b3 == op && c3 == op){
				ganhador = op;
				$('.a3, .b3, .c3').addClass('padrao');

			} else if(a1 == op && a2 == op && a3 == op){ //vertical
				ganhador = op;
				$('.a1, .a2, .a3').addClass('padrao');
			} else if(b1 == op && b2 == op && b3 == op){
				ganhador = op;
				$('.b1, .b2, .b3').addClass('padrao');
			} else if(c1 == op && c2 == op && c3 == op){
				ganhador = op;
				$('.c1, .c2, .c3').addClass('padrao');

			} else if(a1 == op && b2 == op && c3 == op){ //diagonal
				ganhador = op;
				$('.a1, .b2, .c3').addClass('padrao');
			} else if(c1 == op && b2 == op && a3 == op){
				ganhador = op;
				$('.c1, .b2, .a3').addClass('padrao');

			} else if(a1 != '' && a2 != '' && a3 != '' &&
				b1 != '' && b2 != '' && b3 != '' &&
				c1 != '' && c2 != '' && c3 != ''){
				ganhador = 'Empate!';
				$('.areaInt').addClass('empate');
			}
		}

		if(ganhador != ''){
			$('.cab1').css('display','none');
			$('.cab2').css('display','flex');
			$('.cab3').css('display','flex');

			$('.areaInt').css('cursor','auto');
			$('.areaInt').attr('data-op','');

			jogar = 0; //para o jogo

			switch(ganhador){
				case '0':
					$('#vencedor').html('<img src="assets/img/O.png" width="50">');
					break;
				case '1':
					$('#vencedor').html('<img src="assets/img/X.png" width="50">');
					break;
				default:
					$('#vencedor').html(ganhador);	
					$('#vencedor').css('color','green');
					$('#vencedor').css('font-weigth','bold');
					$('#vencedor').css('font-size','20px');
			}	
		}			
	}

	/* ao setar a imagem no ponteiro do mouse usa-se esse caminho
	por que ele inserido no arquivo html, e esse arquivo fica antes da
	pasta assets. */
	$('.areaInt').bind('mousemove', function(){
		if(jogar == 1){
				if($(this).find('img').length == 0){
					if(vez == 0){
						$(this).css('cursor','url("assets/img/O_64.ico"), default');
					}else{
						$(this).css('cursor','url("assets/img/X_64.ico"), default');
					}
				}else{
					$(this).css('cursor','auto');
				}
		}		
	});

	/* insere um evento de click para que adiciona uma tag img apontando para O.png ou X.png */
	$('.areaInt').bind('click', function(){
		if(jogar == 1){
			if($(this).find('img').length == 0){
				if(vez == 0){	
					$(this).css('cursor','auto');			
					$(this).html('<img src="assets/img/O.png" width="50">');
					$(this).attr('data-op','0');
					vez = 1;					
					atualizarVez();
					verificarGanhador();
				}else if(vez == 1){	
					$(this).css('cursor','auto');			
					$(this).html('<img src="assets/img/X.png" width="50">');
					$(this).attr('data-op','1');
					vez = 0;
					atualizarVez();
					verificarGanhador();
				}
			}	
		}		
	});

	/* botão que reinicia o jogo */
	$('#jogar').bind('click', function(){
		vez = 0;
		jogar = 1;

		atualizarVez();

		$('.cab1').css('display','flex');
		$('.cab2').css('display','none');
		$('.cab3').css('display','none');

		$('.areaInt').html('');
		$('.areaInt').removeClass('padrao');

	});
});