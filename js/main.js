const handleClick = () => {
    const buttons = document.querySelectorAll('.button');
    for (var i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', function() {
            console.log(this.innerHTML);
        }) 
    }
}



