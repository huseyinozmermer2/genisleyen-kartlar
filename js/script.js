const panels = document.querySelectorAll(".panel");

panels.forEach(function(e) {
    e.addEventListener("click", function() {
        removeActive();
        e.classList.add("active");
    });
});
function removeActive(){
    panels.forEach(function(e) {
        e.classList.remove("active");
    });
}