let character = document.getElementById("character");
let block = document.getElementById("block");
let count = 0;
function jump() {
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
        count++;
    },500)

}
let checkDead = setInterval(function () {
    let characterTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    let blockLeft= parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    if (blockLeft < 20 && blockLeft> 0 && characterTop >= 130) {
        block.style.animation = "none"
        block.style.display = "none"
        alert("you lose. Score " + count )
        count = 0;
        // block.style.animation = "block 1s infinite linear"
    }else{
        count++;
        document.getElementById("scoreSpan").innerHTML = count;
    }
},10)






