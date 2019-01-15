		$('.estilo-barra').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="barra" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="barra" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});

	$('.idioma').each(function() {
		var progress = $(this).data("lanprogesss");
		var ele      = '<span></span>';
		var ele_fade = '<span class="fade-ele"></span>';
		
		for (var i = 1; i <= 5; i++) {
			if(i <= progress){
				$(this).append(ele);
			} else {
				$(this).append(ele_fade);
			}
		}
	});

