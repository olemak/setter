/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_setter_js__ = __webpack_require__(1);


(() => { function ready() {
    Object(__WEBPACK_IMPORTED_MODULE_0__modules_setter_js__["a" /* default */])();
};  
  if (document.readyState != 'loading') {ready()}
  else {document.addEventListener('DOMContentLoaded', ready)}
})();





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const phrases = () => document.querySelectorAll('[data-target]')

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
    

//    choppedWord = document.createTextNode(word);

    console.dir(choppedWord)

    return choppedWord
}

const setter =  ()=> { 
    phrases().forEach(phrase=>{
        let words = phrase.innerText.split(' ');
        let target = document.querySelector(`[data-name="${phrase.dataset.target}"]`)
            
        words.map( word => { 
            target.appendChild(process(word));
        })
    })
}

/* harmony default export */ __webpack_exports__["a"] = (setter);

/***/ })
/******/ ]);