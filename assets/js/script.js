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
});