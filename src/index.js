import setter from './modules/setter.js'

(() => { function ready() {
    setter();
};  
  if (document.readyState != 'loading') {ready()}
  else {document.addEventListener('DOMContentLoaded', ready)}
})();



