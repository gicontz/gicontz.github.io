// window.scrollTo(0, );
window.onscroll = function(){
	console.log(window.pageYOffset);
};		

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth' });
	});
});

var heading_text = new Typed("#main-text", {
	strings: ["Elegant Code.", "Luxurius Design.", "are things I want."],
	typeSpeed: 30,
	loop: 1
});

/*SkillSets*/

$(document).ready(function(){
	$("a[href='#webdev-skills'").click(function(){
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width: $(this).attr('data-percent')
			},3000);
		});
	});

	$("#about").load("contents/about.html");

	$("#webdev-skills").load("contents/webdev-skills.html");

	$("#webframeworks-skills").load("contents/webfw-skills.html");

	$(".inline_section, .port-content").height(window.innerHeight);
	$(".inline_section").width(window.innerWidth + 15);
	$(".horizontal_content").width((window.innerWidth + 15) * 2);

	$(".gallery-image").on('mouseover', function(){
		$(".gallery-image span").remove();
		$(this).append("<span>" + $(this).attr("data-caption") + "</span>");
		$(this).addClass("active");
	});
	$(".gallery-image").on('mouseleave', function(){
		$(".gallery-image span").remove();
		$(this).removeClass("active");
	});
});