# setter
Whimsical experiments with automated web typography

## Usage
1. Clone the repo
2. npm install
3. npm start

Look at the pretties on localhost:8080

Add or change the texts in the setter config object in  /src/index.js

Change things as desired in the css, if you like. The class structure is very simple:
.sentence
  .word
  .short.word
  .medium.word
  .long.word
  
  .single.word // denotes a single character word, like "&" or "I". Could be more semantic
  
  
## What's next?
This was just a fun little experiment; I might work some more on it if the mood strikes. Some things I'd like to add:

1. *Automatic font-size* Have font-size adjust to the size of the containing element, so it adjusts and fills the negative space more effetively.
2. *Adjust vertical alignment* The vertical short words just don't look quite right.
3. *Responsive tweaks* There are currently no media queries (which I like), buut responsiveness must improve, also on browser resize
4. *Better usage interface* It should perhaps be possible to import the setter module, and then init it by feeding it a a config object including a node element and maybe some options, and then the setter module will transform the HTML of the passed element accordingly. That's pretty cool.
5. *Module on NPM* Maybe rework it a bit and publish as a proper module on npm (see point 4), manybe with additional interface scenarios.
6. *Inline the css* Most of it, anyway. It makes more sense.

