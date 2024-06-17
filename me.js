$(".card").on("click", function(){
    $(".detail").addClass("active");
});

$(".close-detail").on("click", function(){
    $(".detail").removeClass("active");
})

$(".menu-bar").on("click", function(){
    $(".sidebar").addClass("active");
})

$(".close-bar").on("click", function(){
    $(".sidebar").removeClass("active");
})

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "deepakhakhladeveloper@gmail.com",
        Password : "8416D60ABDC4956B2AD8D10BB4EC78FBF03F",
        To : "deepakhakhla@gmail.com",
        From : document.getElementById('email').value,
        Subject : "New Contact from Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
