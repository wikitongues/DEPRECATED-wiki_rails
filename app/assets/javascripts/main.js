$(function(){
	var clickOut = $('#overlay').on('click', function(e){
						if (e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA') {
							$('#contact-form').animate({ marginTop : '-725px' }, 300)
							$(this).fadeOut(300)
							$('body').css('overflow', 'visible')
						}
					}),
		escOut = $('body').on('keydown', function(e){
					if ((e.keyCode || e.which) == 27)
				    {
				    	$('#contact-form').animate({ marginTop : '-725px' })
				        $('#overlay').fadeOut(300)
				        $('body').css('overflow', 'visible')
				    }
				})

	function contactResize () {
		var screenHeight = $(window).innerHeight(),
		modalHeight = screenHeight - (246)
		mobileModalHeight = screenHeight - (246)

		if($(window).width() > 480) {
				$('#overlay #contact-form #message').css('height',modalHeight)
			} else {
				$('#overlay #contact-form #message').css('height',mobileModalHeight)
			}
	}

	$(window).resize(function(){
		contactResize()
	})

	$('button#get-involved').on('click', function(){
		contactResize()
		$('#overlay').fadeIn(150)
		$('#contact-form').animate({ marginTop : '0px' })
		$('body').css('overflow', 'hidden')
		clickOut()
		escOut()
	})

	$('.language-options li button').on('click', function(){

		var activeLanguage = $(this).text(),
			rightToLeft = $('ul.language-options, h1.logotype, h4, #summary, #contact-form input, #contact-form textarea'),
			rightToLeftCenterAlign = $('#get-involved, footer')

		if(activeLanguage === 'עברית'){
			if($(rightToLeft).hasClass('rtl')) {
			} else {
				$(rightToLeft).addClass('rtl')
			}
			if($(rightToLeftCenterAlign).hasClass('rtl-center')) {
			} else {
				$(rightToLeftCenterAlign).addClass('rtl-center')
			}
		} else if (activeLanguage === 'العربية') {
			if($(rightToLeft).hasClass('rtl')) {
			} else {
				$(rightToLeft).addClass('rtl')
			}
			if($(rightToLeftCenterAlign).hasClass('rtl-center')) {
			} else {
				$(rightToLeftCenterAlign).addClass('rtl-center')
			}
		} else {
			if($(rightToLeft).hasClass('rtl')) {
				$(rightToLeft).removeClass('rtl')
				$(rightToLeft).css('direction','ltr')
			} else { }
			if($(rightToLeftCenterAlign).hasClass('rtl-center')) {
				$(rightToLeftCenterAlign).removeClass('rtl-center')
				$(rightToLeftCenterAlign).css('direction','ltr')
			} else { }
		}

		$('#active').removeAttr('id','active')
		$(this).attr('id','active')
		if(activeLanguage === 'Español'){
			$('h4').text('Todos los idiomas del mundo, para todos.')
			$('#summary').text('Wikitongues es un esfuerzo comunitario para que todas las personas puedan acceder a las 7.000 lenguas que existen y también las historias y los sentimientos detrás de ellas. Coordinados con una red de voluntarios, nos dedicamos a enseñar al mundo el verdadero significado de diversidad.')
			$('#get-involved').text('Involúcrate.')
			$('.first').text('Hecho con amor internacional por ')
			$('.second').text(' y')
			$('footer p:last-child').text('© 2014 Wikitongues, todos los derechos reservados.')
			$('#name').attr('placeholder','¿Cómo te llamas?')
			$('#email').attr('placeholder','¿Qué es tu correo electrónico?')
			$('#message').attr('placeholder','¿Qué tal?')
			$('#submit').attr('value','Enviar')
		} else if (activeLanguage === 'Català') {
			$('h4').text('Tots els idiomes del món, per a tothom.')
			$('#summary').text('Wikitongues és un esforç comunitari perquè totes les persones puguin accedir a les 7.000 llengües que existeixen i també les històries i els sentiments darrere d\'elles. Coordinats amb una xarxa de voluntaris, ens dediquem a ensenyar al món el veritable significat de diversitat.')
			$('#get-involved').text('Involucra\'t.')
			$('.first').text('Fet amb amor internacional per ')
			$('.second').text(' i')
			$('footer p:last-child').text('© 2014 Wikitongues, tots els drets reservats.')
			$('#name').attr('placeholder','Com et dius?')
			$('#email').attr('placeholder','Què es el teu mail?')
			$('#message').attr('placeholder','Què tal?')
			$('#submit').attr('value','Enviar')
		} else if (activeLanguage === 'Italiano') {
			$('h4').text('Ogni lingua del mondo, per tutti.')
			$('#summary').text('Wikitongues è una comunità che prova a dare accesso a tutte le persone del mondo a tutte le 7.000 lingue del mondo — storie e sentimenti nascosti dietro ognuna. Con l\'aiuto di una rete di volontari, ci dedichiamo a mostrare al mondo il vero significato di diversità.')
			$('#get-involved').text('Resta coinvolto.')
			$('.first').text('Fatto con amore internazionale da ')
			$('.second').text(' e')
			$('footer p:last-child').text('© 2014 Wikitongues, tutti i diritti riservati.')
			$('#name').attr('placeholder','Qual è il tuo nome?')
			$('#email').attr('placeholder','Qual è il tuo indirizzo email?')
			$('#message').attr('placeholder','Il tuo messaggio?')
			$('#submit').attr('value','Inviare')
		} else if (activeLanguage === 'Deutsch') {
			$('h4').text('Jede Sprache der Welt, für alle.')
			$('#summary').text('Wikitongues ist eine Gemeinschaft deren Anstrengung es ist den Menschen in der Welt Zugang zu allen 7000 Sprachen in der Welt zu geben - die Geschichte und die Gefühle dahinter. In Zusammenarbeit mit einem Netzwerk von Freiwilligen bemühen wir uns der Welt die wahre Bedeutung von Diversität zu zeigen.')
			$('#get-involved').text('Mach mit!')
			$('.first').text('Mit internationaler Liebe gemacht ')
			$('.second').text(' und')
			$('footer p:last-child').text('© 2014 Wikitongues, All Rights Reserved.')
			$('#name').attr('placeholder', 'Wie ist Ihr Name?')
			$('#email').attr('placeholder','Was ist Ihre E-Mail?')
			$('#message').attr('placeholder','Wie geht\'s?')
			$('#submit').attr('value','Senden')
		} else if (activeLanguage === 'Lietuvių') {
			$('h4').text('Visos pasaulio kalbos - kiekvienam.')
			$('#summary').text('Wikitongues tai organizacija, siekianti suteikti žmonėms prieigą prie visų - 7000 pasaulio kalbų, jas išgirsti ir pajausti. Bendradarbiaujant su gausybę savanorių es dirbame tam, kad parodytume koks įvairus yra pasaulis.')
			$('#get-involved').text('Prisijunk ir Tu!')
			$('.first').text('Tarptautiškumą mylintys ')
			$('.second').text(' ir')
			$('footer p:last-child').text('© 2014 Wikitongues, Visos teisės saugomos.')
			$('#name').attr('placeholder','Koks tavo vardas?')
			$('#email').attr('placeholder','Koks jūsų elektroninio pašto?')
			$('#message').attr('placeholder','Kaip reikalai?')
			$('#submit').attr('value','Siųsti')
		} else if (activeLanguage === 'עברית') {
			$('h4').text('כל שפה בעולם, לכולם.')
			$('#summary').text('Wikitongues הינו מאמץ קהילתי שמטרתו לאפשר לכל אדם בעולם גישה לכל 7,000 השפות הקיימות בעולם – הסיפורים והרגש שעומד מאחוריהם. בתיאום עם קהילת מתנדבים, אנחנו מחוייבים להראות לעולם את משמעותו האמיתי של הגִּוּוּן.')
			$('#get-involved').text('הצטרפו אלינו.')
			$('.first').text('נעשה באהבה ')
			$('.second').text(' ו -')
			$('footer p:last-child').text('© 2014 Wikitongues, כל הזכויות שמורות.')
			$('#name').attr('placeholder','מה שמך?')
			$('#email').attr('placeholder','מה הדוא"ל שלך?')
			$('#message').attr('placeholder','מה קורה?')
			$('#submit').attr('value','מה קורה?')
		} else if (activeLanguage === 'العربية') {
			$('h4').text('أي لغة في العالم هي لغة للجميع و')
			$('#summary').text('ويكي تونق هي مجموعة تسعي لمنح كل الناس في العالم امكانية التعرف علي كل لغات العالم و هي سبعة الف لغة \(7000\) و ما ورائها من قصص و احاسيس بالتنسيق مع مجموعة من المتطوعين نحن نركز علي تعريف العالم بالمعني الحقيقي للتنوع')
			$('#get-involved').text('الانضمام إلينا.')
			$('.first').text('شارك و نظم بواسطة ')
			$('.second').text(' ')
			$('footer p:last-child').text('© 2014 جميع الحقوق محفوظة لويكي تونق')
			$('#name').attr('placeholder','ما اسمك?')
			$('#email').attr('placeholder','ما هو بريدك الإلكتروني؟?')
			$('#message').attr('placeholder','ما الأمر؟?')
			$('#submit').attr('value','إرسال?')
		} else if (activeLanguage === 'Português') {
			$('h4').text('Todas as linguas do mundo, para todos.')
			$('#summary').text('Wikitongues é uma comunidade com o fim de trazer accesso para as quase 7000 linguas do mundo à todas as pessoas - suas histórias e emoções. Em conjunto a uma rede de voluntários, nos dedicamos a mostrar ao mundo o verdadeiro significado de diversidade.')
			$('#get-involved').text('Participe.')
			$('.first').text('Feito com amor internacional por ')
			$('.second').text(' e')
			$('footer p:last-child').text('© 2014 Wikitongues, Todos os direitos reservados.')
			$('#name').attr('placeholder','Qual é o seu nome?')
			$('#email').attr('placeholder','Qual é o seu email?')
			$('#message').attr('placeholder','A sua mensagem?')
			$('#submit').attr('value','Enviar')
		} else if (activeLanguage === 'Русский') {
			$('h4').text('Каждый язык в мире для всех.')
			$('#summary').text('Wikitongues является результатом коллективного усилия дать всем людям в мире доступ к 7000 языкам мира - к их историям и чувствам, стоящими за ними. Работая с сетью добровольцов, мы стремимся показать миру истинное значение разнообразия.')
			$('#get-involved').text('Примите участие.')
			$('.first').text('Организаторы ')
			$('.second').text(' и')
			$('footer p:last-child').text('© 2014 Wikitongues, Все права защищены')
			$('#name').attr('placeholder','как вас зовут?')
			$('#email').attr('placeholder','электронный адрес?')
			$('#message').attr('placeholder','как дела?')
			$('#submit').attr('value','послать')
		} else {
			$('h4').text('Every language in the world, for everyone.')
			$('#summary').text('Wikitongues is a community effort to give all the world’s people access to all the world’s 7,000 languages — the stories and the feelings behind them. In coordination with a network of volunteers, we\'re dedicated to showing the world the true meaning of diversity.')
			$('#get-involved').text('Get involved.')
			$('.first').text('Made with international love ')
			$('.second').text(' by')
			$('footer p:last-child').text('© 2014 Wikitongues, All Rights Reserved.')
			$('#name').attr('placeholder','What\'s your name?')
			$('#email').attr('placeholder','What\'s your email?')
			$('#message').attr('placeholder','What\'s up?')
			$('#submit').attr('value','Send')
		}

	})

})
