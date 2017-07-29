const process = word => {
    let elem = document.createElement("SPAN"), wordLength;
          switch (word.length) {
              case 1:
                wordLength = 'single';
              break;
              
              case 2:
              case 3:
                wordLength = 'short';

              break;
              
              case 4:
              case 5:
              case 6:
                wordLength = 'medium'; 
              break;
              
              default:
                  wordLength = 'long';
              break;
          }
        elem.classList.add("word");
        elem.classList.add(wordLength);
        wordLength !== 'short' ?
            elem.appendChild(document.createTextNode(word))
            : elem.appendChild(shortProcess(word));
    return elem;
}

const shortProcess = word => {
    let choppedWord = document.createElement('SPAN');
        choppedWord.classList.add('short');
    word.split('').forEach(letter=>{
        let elem = document.createElement('SPAN');
            elem.classList.add("character");
            elem.appendChild(document.createTextNode(letter));
        choppedWord.appendChild(elem)   
    });
    
    return choppedWord
}

const setter =  phrases => { 
    let documentBody = document.querySelector('body');
    phrases.forEach(phrase=>{
        let words = phrase.text.split(' ');
        let target = document.createElement('DIV');
            target.classList.add('sentence');
            
        words.map( word => { 
            target.appendChild(process(word));
        })

        documentBody.appendChild(target);

    })
}

export default setter