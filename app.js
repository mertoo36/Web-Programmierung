var slideIndex = 0;
      showSlides();
      
      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
        setTimeout(showSlides, 4000); // Change image every 2 seconds
      }
      var slideIndex2 = 0;
      showSlides2();
      
      function showSlides2() {
        var i2;
        var slides2 = document.getElementsByClassName("mySlides2");
        for (i2 = 0; i2 < slides2.length; i2++) {
          slides2[i2].style.display = "none"; 
        }
        slideIndex2++;
        if (slideIndex2 > slides2.length) {slideIndex2 = 1} 
        slides2[slideIndex2-1].style.display = "block"; 
        setTimeout(showSlides2, 4000); // Change image every 2 seconds
      }
      var slideIndex = 0;
      showSlides3();
      
      function showSlides3() {
        var i;
        var slides = document.getElementsByClassName("mySlides3");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
        setTimeout(showSlides, 4000); // Change image every 2 seconds
      }

      var slideIndex = 0;
      showSlides4();
      
      function showSlides4() {
        var i;
        var slides = document.getElementsByClassName("mySlides4");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
        setTimeout(showSlides, 4000); // Change image every 2 seconds
      }

