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
            $("div.card").removeClass("bg-dark");
            $("button.accordion-button").removeClass("bg-secondary");
            $("button.accordion-button").removeClass("text-white");
            $("footer").removeClass("text-white");
            text.innerText = "Dark";
            $("body").addClass("bg-body");
            $("section").addClass("text-black");
            $("nav").addClass("bg-light");
            $("footer").addClass("bg-light");
            $("div.card").addClass("bg-light");
            $("button.accordion-button").addClass("bg-light");
            $("button.accordion-button").addClass("text-black");
            $("footer").addClass("text-black");
        } else {
            text.innerText = "Light";
            $("body").removeClass("bg-body");
            $("section").removeClass("text-black");
            $("nav").removeClass("bg-light");
            $("footer").removeClass("bg-light");
            $("div.card").removeClass("bg-light");
            $("button.accordion-button").removeClass("bg-light");
            $("button.accordion-button").removeClass("text-black");
            $("footer").removeClass("text-black");
            $("body").addClass("bg-dark");
            $("section").addClass("text-white");
            $("nav").addClass("bg-secondary");
            $("footer").addClass("bg-secondary");
            $("div.card").addClass("bg-secondary");
            $("button.accordion-button").addClass("bg-secondary");
            $("button.accordion-button").addClass("text-white");
            $("footer").addClass("text-white");
        }
    });
})