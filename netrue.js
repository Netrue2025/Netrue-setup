$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".nav-links").toggleClass("active");
  });

  // Smooth scrolling
  $("a[href^='#']").click(function (e) {
    e.preventDefault();
    let target = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      800
    );
  });

  // Scroll animations
  function revealOnScroll() {
    $(".animate-on-scroll").each(function () {
      let elementTop = $(this).offset().top;
      let viewportBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < viewportBottom - 50) {
        $(this).addClass("visible");
      }
    });
  }
  $(window).on("scroll load", revealOnScroll);

  // Newsletter form
  $("#newsletter-form").submit(function (e) {
    e.preventDefault();
    let email = $("#newsletter-email").val();
    if (email) {
      $("#newsletter-msg").text("Thank you for subscribing!").css("color", "#00eaff");
      $("#newsletter-email").val("");
    } else {
      $("#newsletter-msg").text("Please enter a valid email.").css("color", "red");
    }
  });
});
