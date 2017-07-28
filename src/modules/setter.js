const phrases = () => document.querySelectorAll('[data-target]')

const setter =  ()=> { 
    console.log(phrases());

    phrases().forEach(phrase=>{
        let words = phrase.innerHTML.split(' ');
        let target = document.querySelector(`[data-name="${phrase.dataset.target}"]`)
            
        words.map(word=>{
            target.appendChild(target, document.createElement("SPAN").classList.add(word.length > 3 ? 'long' : "short"));
        })
        console.log("Target: ", target)
    })
}

export default setter