<h1>Jogo da Velha 2</h1>

Iniciado repositório

<h2>Diretórios e arquivos iniciais</h2>

<pre>
jogo_da_velha_2
	assets
		css
			style.css
		img
			O.png
			X.png
			O_64.ico
			X_64.ico
		js
			jquery-3.3.1.min.js
			script.js
	index.html
	README.MD
</pre>

<p>
	<b>obs:</b> Para o funcionamento do sistema é preciso seguir o padrão dos diretórios e arquivos conforme está descrito acima, caso contrário será necessário fazer alterações no fonte.
</p>

<h2>Objetivo</h2> 
<p>
	A idéia do projeto é criar um jogo clássico chamado de "Jogo da Velha".
</p>

<h2>Funcionamento</h2>

<b>1 -</b> Na div '.cabecalho' irá ficar as informações em relação ao jogo, quem é a vez de jogar, o vencedor', recomeçar o jogo, etc.
<br>

<b>2 -</b> Na div '.area' irá ficar o jogo, onde que, terá nove areas para ser escolhida, sendo que cada area poderá ser marcada com 'X' ou 'O', respectivamente e alternativamente.
<br>

<b>3 -</b> O jogo acaba quando uma sequência igual, combinada com um padrão de três opções, na vertical, diagonal ou horizontal for atendida.
<br>

<h2>Alterações no Projeto</h2>

<p>
	Foi criado a função para as areas do jogo que irá mudar a seta do mouse de acordo com quem é a vez de jogar.
</p>

<b>script.js - </b>criado função de mouseMove para a div '.areaInt'. Ele irá alterar o cursor para 'X' ou 'O' dependendo de quem for a vez de jogar.
<br>

<b>style.js - </b>removido a propriedade cursor da div '.areaInt'. Ele será tratado pelo JQuery.
<br>

<p>
	Foi criado a função para as areas do jogo que ao clicar irá marcar a área com 'O' ou 'X' de acordo de quem for a vez.
</p>

<b>script.js - </b>criado evento de click para a div '.areaInt'. Ele irá alterar o html inserindo uma tag img com as imagens 'X.png' ou 'O.png' dependendo de quem for a vez de jogar. Logo em seguida altera o cursor do mouse, chama a função de atualizarVez e verificarGanhador.
<br>