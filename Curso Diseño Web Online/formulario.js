var	$form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido')
	$post = $('.item').first();

function mostrarFormulario(){
	$form.slideToggle() //Logro que el formulario aparezca cuando le doy click al boton
}


//Eventos
$button.click( mostrarFormulario )

	