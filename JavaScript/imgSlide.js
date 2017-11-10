	var slideIndex = 0;
	showSlide(slideIndex);
	
	function plusSlides(n){
							showSlide(slideIndex += n);
							
						}
	

function currentSlide(n) {
							showSlide(slideIndex = n);
							
						}

function showSlide(n){
						var i;
						var slides = document.getElementsByClassName("myslides");
						var dots = document.getElementsByClassName("dots");
						if (n > slides.length) { slideIndex = 1};
						if (n < 1) { slideIndex = slides.length};
						
						for (i=0;i<slides.length;i++) 
														{
															slides[i].style.display = "none";
														};
						
						for (i=0;i<dots.length;i++) 
													{
														dots[i].className = dots[i].className.replace(" active","");
													};
													
						slides[slideIndex-1].style.display = "block";
						dots[slideIndex-1].className += " active";
						
					};

	
autoSlide();
function autoSlide(){
	
						
				
						var i;
						var slides = document.getElementsByClassName("myslides");
						var dots = document.getElementsByClassName("dots");
						
						
						for (i=0; i<slides.length; i++) 
						{
							slides[i].style.display = "none";
						};
						
						
						for (i=0;i<dots.length;i++) 
						{
							dots[i].className = dots[i].className.replace(" active","");
						};
						
						
						
						slideIndex++;
						if( slideIndex > slides.length) {slideIndex = 1}
						slides[slideIndex-1].style.display = "block";
						dots[slideIndex-1].className += " active";
						
						
					
						setTimeout(autoSlide , 2000);
						
					}
						
					
