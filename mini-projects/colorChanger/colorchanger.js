const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function(btn) {
    console.log(btn);
    btn.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = "grey"
                break;
            case "pink":
                body.style.backgroundColor = "pink"
                break;
            case "orange":
                body.style.backgroundColor = "orange"
                break;
            case "green":
                body.style.backgroundColor = "green"
                break;
        
            default:
                body.style.backgroundColor = "transparent"
                break;
        }
        
    })
    
})
