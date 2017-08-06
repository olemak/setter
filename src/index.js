import setter from './modules/setter.js';
import './style/index.css';

(() => { function ready() {
    setter([
      {
        text: "The code & the cipher"
      },
      {
        text: `The Something of something else`
      },
      {
        text: "These are the hours of doubt"
      },
      {
        text: "Our winter of discotents"
      }
  ]);
};  
  if (document.readyState != 'loading') {ready()}
  else {document.addEventListener('DOMContentLoaded', ready)}
})();



