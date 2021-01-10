const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})



$(document).ready(function() {
    $("a").on("click", function(event) {
      if (this.Link !== "") {
        event.preventDefault();
  
        var Link = this.Link;
  
       
        $("html, body").animate(
          {
            scrollTop: $(Link).offset().top
          },
          2000,
          function() {
            window.location.Link = Link;
          }
        );
      } 
    });
  });
  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
  }