$(document).ready(function() {
    $("#homeLink").on("click", function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
    $("#lightOrDark").on("click", function() {
        var text = document.getElementById("lightOrDark");
        if(text.innerText == "Light") {
            $("body").removeClass("bg-dark");
            $("section").removeClass("text-white");
            $("nav").removeClass("bg-secondary");
            $("footer").removeClass("bg-secondary");
            text.innerText = "Dark";
            $("body").addClass("bg-body");
            $("section").addClass("text-black");
            $("nav").addClass("bg-light");
            $("footer").addClass("bg-light");
        } else {
            text.innerText = "Light";
            $("body").removeClass("bg-body");
            $("section").removeClass("text-black");
            $("nav").removeClass("bg-light");
            $("footer").removeClass("bg-light");
            $("body").addClass("bg-dark");
            $("section").addClass("text-white");
            $("nav").addClass("bg-secondary");
            $("footer").addClass("bg-secondary");
        }
    });
})