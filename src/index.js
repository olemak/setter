import setter from './modules/setter.js';
import './style/index.css';

(() => { function ready() {
    setter();
};  
  if (document.readyState != 'loading') {ready()}
  else {document.addEventListener('DOMContentLoaded', ready)}
})();



