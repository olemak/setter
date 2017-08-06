const adjustFontSize = elem => {
    if (elem.classList.contains('medium') || elem.classList.contains('long')) {
        console.info('LONG!')
        setTimeout(function() {
            let innerSpan = elem.firstChild
            let parentWidth = elem.clientWidth;
            let innerWidth = innerSpan.offsetWidth;
            let difference = parentWidth - innerWidth;
            let fontSizeModifier = 1;
            let i = 1;
            do {
                fontSizeModifier += 0.2
            
                innerSpan.style.fontSize = `${fontSizeModifier}em`;
                console.info("There's a difference!")
                console.dir(innerSpan)
                console.log("FontSize: ", innerSpan.style.fontSize)
                difference = parentWidth - innerWidth; 
                console.log("Difference: ", difference)
                i++
            } while (difference > 16 && i < 5);
        }, 500);
    }

return elem;
}

export default adjustFontSize;