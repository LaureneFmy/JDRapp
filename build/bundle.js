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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_PartieService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
// import * as readline from 'readline';

// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Voulez-vous créer un personnage ? [y/n]', (answerCreate) => {
//     if (answerCreate === 'y') {
//         rl.question('Nommez votre personnage : ', (answerNom) => {
//             console.log(`Votre personnage s'appelle : ${answerNom}`);
//         });
//         rl.question('Choisissez une arme : [1 : Epee / 2 : Fusil]', (answer) => {
//         });
//     } else {
//         rl.close();
//     }
// });
Object(_Services_PartieService__WEBPACK_IMPORTED_MODULE_0__["startGame"])();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnageGentil", function() { return PersonnageGentil; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// export const enum Role {
//     A = 'Soigneur',
//     B = 'Classique',
//     C = 'Tank',
//     D = 'Assassin'
// }
var PersonnageGentil = /** @class */ (function (_super) {
    __extends(PersonnageGentil, _super);
    // role: Role;
    function PersonnageGentil(nom, nbPV, nbPVMax, defense, arme) {
        return _super.call(this, nom, nbPV, nbPVMax, defense, arme) || this;
        // this.role = role;
    }
    PersonnageGentil.prototype.getNom = function () {
        return this._nom;
    };
    PersonnageGentil.prototype.getNbPV = function () {
        return this._nbPV;
    };
    PersonnageGentil.prototype.getNbPVMax = function () {
        return this._nbPVMax;
    };
    PersonnageGentil.prototype.getDefense = function () {
        return this._defense;
    };
    PersonnageGentil.prototype.getArme = function () {
        return this._arme;
    };
    // getRole() {
    //     return this.role;
    // }
    PersonnageGentil.prototype.setNom = function (nom) {
        this._nom = nom;
    };
    PersonnageGentil.prototype.setNbPV = function (nbPV) {
        this._nbPV = nbPV;
    };
    PersonnageGentil.prototype.setNbPVMax = function (nbPVMax) {
        this._nbPVMax = nbPVMax;
    };
    PersonnageGentil.prototype.setDefense = function (defense) {
        this._defense = defense;
    };
    PersonnageGentil.prototype.setArme = function (arme) {
        this._arme = arme;
    };
    return PersonnageGentil;
}(_Personnage__WEBPACK_IMPORTED_MODULE_0__["Personnage"]));



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnage", function() { return Personnage; });
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var Personnage = /** @class */ (function () {
    function Personnage(nom, nbPV, nbPVMax, defense, armeNb) {
        if (nbPV === void 0) { nbPV = 10; }
        if (nbPVMax === void 0) { nbPVMax = 10; }
        if (defense === void 0) { defense = 2; }
        this._nom = nom;
        this._nbPV = nbPV;
        this._nbPVMax = nbPVMax;
        this._defense = defense;
        this._arme = this.choisirArme(armeNb);
    }
    Personnage.prototype.getNom = function () {
        return this._nom;
    };
    Personnage.prototype.getNbPV = function () {
        return this._nbPV;
    };
    Personnage.prototype.getNbPVMax = function () {
        return this._nbPVMax;
    };
    Personnage.prototype.getDefense = function () {
        return this._defense;
    };
    Personnage.prototype.getArme = function () {
        return this._arme;
    };
    Personnage.prototype.setNom = function (nom) {
        this._nom = nom;
    };
    Personnage.prototype.setNbPV = function (nbPV) {
        this._nbPV = nbPV;
    };
    Personnage.prototype.setNbPVMax = function (nbPVMax) {
        this._nbPVMax = nbPVMax;
    };
    Personnage.prototype.setDefense = function (defense) {
        this._defense = defense;
    };
    Personnage.prototype.setArme = function (arme) {
        this._arme = arme;
    };
    // Méthode choix d'arme
    Personnage.prototype.choisirArme = function (nb) {
        if (nb === 1) {
            return new _Arme__WEBPACK_IMPORTED_MODULE_0__["Arme1"](10, 20, 20);
        }
        ;
        if (nb === 2) {
            return new _Arme__WEBPACK_IMPORTED_MODULE_0__["Arme2"](10, 20, 20);
        }
        else {
            return new _Arme__WEBPACK_IMPORTED_MODULE_0__["Arme"](10, 20, 20);
        }
        ;
    };
    ;
    // TODO: Méthode target (pour éviter de taper toujours le même)
    Personnage.prototype.target = function (cible) {
    };
    ;
    // TODO: Méthode attack
    Personnage.prototype.attack = function () {
    };
    ;
    return Personnage;
}());

;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arme", function() { return Arme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arme1", function() { return Arme1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arme2", function() { return Arme2; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Arme = /** @class */ (function () {
    function Arme(minDegat, maxDegat, chanceCC) {
        this._minDegat = Math.floor(Math.random() * 10) + 1;
        this._maxDegat = Math.floor(Math.random() * 10) + 11;
        this._chanceCC = Math.floor(Math.random() * 20) + 1;
    }
    Arme.prototype.getMinDegat = function () {
        return this._minDegat;
    };
    Arme.prototype.getMaxDegat = function () {
        return this._maxDegat;
    };
    Arme.prototype.getChanceCC = function () {
        return this._chanceCC;
    };
    Arme.prototype.setMinDegat = function (minDegat) {
        this._minDegat = minDegat;
    };
    Arme.prototype.setMaxDegat = function (maxDegat) {
        this._maxDegat = maxDegat;
    };
    Arme.prototype.setChanceCC = function (chanceCC) {
        this._chanceCC = chanceCC;
    };
    return Arme;
}());

var Arme1 = /** @class */ (function (_super) {
    __extends(Arme1, _super);
    function Arme1(minDegat, maxDegat, chanceCC, chanceCCSupp) {
        if (chanceCCSupp === void 0) { chanceCCSupp = 20; }
        var _this = _super.call(this, minDegat, maxDegat, chanceCC) || this;
        _this._chanceCCSupp = chanceCCSupp;
        return _this;
    }
    Arme1.prototype.getMinDegat = function () {
        return this._minDegat;
    };
    Arme1.prototype.getMaxDegat = function () {
        return this._maxDegat;
    };
    Arme1.prototype.getChanceCC = function () {
        return this._chanceCC;
    };
    Arme1.prototype.getChanceCCSupp = function () {
        return this._chanceCCSupp;
    };
    Arme1.prototype.setMinDegat = function (minDegat) {
        this._minDegat = minDegat;
    };
    Arme1.prototype.setMaxDegat = function (maxDegat) {
        this._maxDegat = maxDegat;
    };
    Arme1.prototype.setChanceCC = function (chanceCC) {
        this._chanceCC = chanceCC;
    };
    Arme1.prototype.setChanceCCSupp = function (chanceCCSupp) {
        this._chanceCCSupp = chanceCCSupp;
    };
    return Arme1;
}(Arme));

var Arme2 = /** @class */ (function (_super) {
    __extends(Arme2, _super);
    function Arme2(minDegat, maxDegat, chanceCC, maxDegatSupp) {
        if (maxDegatSupp === void 0) { maxDegatSupp = 20; }
        var _this = _super.call(this, minDegat, maxDegat, chanceCC) || this;
        _this._maxDegatSupp = maxDegatSupp;
        return _this;
    }
    Arme2.prototype.getMinDegat = function () {
        return this._minDegat;
    };
    Arme2.prototype.getMaxDegat = function () {
        return this._maxDegat;
    };
    Arme2.prototype.getChanceCC = function () {
        return this._chanceCC;
    };
    Arme2.prototype.getMaxDegatSupp = function () {
        return this._maxDegatSupp;
    };
    Arme2.prototype.setMinDegat = function (minDegat) {
        this._minDegat = minDegat;
    };
    Arme2.prototype.setMaxDegat = function (maxDegat) {
        this._maxDegat = maxDegat;
    };
    Arme2.prototype.setChanceCC = function (chanceCC) {
        this._chanceCC = chanceCC;
    };
    Arme2.prototype.setMaxDegatSupp = function (maxDegatSupp) {
        this._maxDegatSupp = maxDegatSupp;
    };
    return Arme2;
}(Arme));



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnageMechant", function() { return PersonnageMechant; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PersonnageMechant = /** @class */ (function (_super) {
    __extends(PersonnageMechant, _super);
    function PersonnageMechant(nom, nbPV, nbPVMax, defense, arme) {
        return _super.call(this, nom, nbPV, nbPVMax, defense, arme) || this;
    }
    // TODO: Générateur de noms aléatoires
    PersonnageMechant.prototype.createNomMechant = function () {
    };
    return PersonnageMechant;
}(_Personnage__WEBPACK_IMPORTED_MODULE_0__["Personnage"]));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony import */ var _Classes_PersonnageGentil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Classes_PersonnageMechant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function startGame() {
    var gentils = [];
    var mechants = [];
    var gentil = new _Classes_PersonnageGentil__WEBPACK_IMPORTED_MODULE_0__["PersonnageGentil"]('Lolo', 100, 100, 50, 1);
    gentils.push(gentil);
    console.log(gentils);
    if (gentil) {
        var mechant = new _Classes_PersonnageMechant__WEBPACK_IMPORTED_MODULE_1__["PersonnageMechant"]('Mechant', 100, 100, 50, 0);
        mechants.push(mechant);
        console.log(mechants);
    }
}
;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9DbGFzc2VzL1BlcnNvbm5hZ2VHZW50aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NsYXNzZXMvUGVyc29ubmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xhc3Nlcy9Bcm1lLnRzIiwid2VicGFjazovLy8uL3NyYy9DbGFzc2VzL1BlcnNvbm5hZ2VNZWNoYW50LnRzIiwid2VicGFjazovLy8uL3NyYy9TZXJ2aWNlcy9QYXJ0aWVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQSx3Q0FBd0M7QUFFYTtBQUVyRCxzQ0FBc0M7QUFDdEMsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3QixNQUFNO0FBRU4sNkVBQTZFO0FB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LE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLElBQUksTUFBTSxFQUFFO1FBQ1IsSUFBSSxPQUFPLEdBQUcsSUFBSSw0RUFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0wsQ0FBQztBQUFBLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gaW1wb3J0ICogYXMgcmVhZGxpbmUgZnJvbSAncmVhZGxpbmUnO1xuXG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9TZXJ2aWNlcy9QYXJ0aWVTZXJ2aWNlXCI7XG5cbi8vIGxldCBybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XG4vLyAgICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXG4vLyAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxuLy8gfSk7XG5cbi8vIHJsLnF1ZXN0aW9uKCdWb3VsZXotdm91cyBjcsOpZXIgdW4gcGVyc29ubmFnZSA/IFt5L25dJywgKGFuc3dlckNyZWF0ZSkgPT4ge1xuLy8gICAgIGlmIChhbnN3ZXJDcmVhdGUgPT09ICd5Jykge1xuLy8gICAgICAgICBybC5xdWVzdGlvbignTm9tbWV6IHZvdHJlIHBlcnNvbm5hZ2UgOiAnLCAoYW5zd2VyTm9tKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVm90cmUgcGVyc29ubmFnZSBzJ2FwcGVsbGUgOiAke2Fuc3dlck5vbX1gKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIHJsLnF1ZXN0aW9uKCdDaG9pc2lzc2V6IHVuZSBhcm1lIDogWzEgOiBFcGVlIC8gMiA6IEZ1c2lsXScsIChhbnN3ZXIpID0+IHtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgcmwuY2xvc2UoKTtcbi8vICAgICB9XG4vLyB9KTtcblxuc3RhcnRHYW1lKCk7IiwiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gXCIuL1BlcnNvbm5hZ2VcIjtcbmltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi9Bcm1lXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBlbnVtIFJvbGUge1xuLy8gICAgIEEgPSAnU29pZ25ldXInLFxuLy8gICAgIEIgPSAnQ2xhc3NpcXVlJyxcbi8vICAgICBDID0gJ1RhbmsnLFxuLy8gICAgIEQgPSAnQXNzYXNzaW4nXG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25uYWdlR2VudGlsIGV4dGVuZHMgUGVyc29ubmFnZSB7XG5cbiAgICAvLyByb2xlOiBSb2xlO1xuXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcsIG5iUFY6IG51bWJlciwgbmJQVk1heDogbnVtYmVyLCBkZWZlbnNlOiBudW1iZXIsIGFybWU6IG51bWJlcikge1xuICAgICAgICBzdXBlcihub20sIG5iUFYsIG5iUFZNYXgsIGRlZmVuc2UsIGFybWUpO1xuICAgICAgICAvLyB0aGlzLnJvbGUgPSByb2xlO1xuICAgIH1cblxuXG4gICAgZ2V0Tm9tKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9tO1xuICAgIH1cblxuICAgIGdldE5iUFYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYlBWO1xuICAgIH1cblxuICAgIGdldE5iUFZNYXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYlBWTWF4O1xuICAgIH1cblxuICAgIGdldERlZmVuc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZlbnNlO1xuICAgIH1cblxuICAgIGdldEFybWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcm1lO1xuICAgIH1cblxuICAgIC8vIGdldFJvbGUoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnJvbGU7XG4gICAgLy8gfVxuXG4gICAgc2V0Tm9tKG5vbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25vbSA9IG5vbVxuICAgIH1cblxuICAgIHNldE5iUFYobmJQVjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX25iUFYgPSBuYlBWXG4gICAgfVxuXG4gICAgc2V0TmJQVk1heChuYlBWTWF4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbmJQVk1heCA9IG5iUFZNYXg7XG4gICAgfVxuXG4gICAgc2V0RGVmZW5zZShkZWZlbnNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XG4gICAgfVxuXG4gICAgc2V0QXJtZShhcm1lOiBBcm1lKSB7XG4gICAgICAgIHRoaXMuX2FybWUgPSBhcm1lO1xuICAgIH1cblxuICAgIC8vIHNldFJvbGUocm9sZTogUm9sZSkge1xuICAgIC8vICAgICB0aGlzLnJvbGUgPSByb2xlO1xuICAgIC8vIH1cblxuICAgIC8vIFRPRE86IE3DqXRob2RlIHBvdXIgc29pZ25lclxufVxuXG4iLCJpbXBvcnQgeyBBcm1lLCBBcm1lMSwgQXJtZTIgfSBmcm9tIFwiLi9Bcm1lXCI7XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25uYWdlIHtcblxuICAgIF9ub206IHN0cmluZztcbiAgICBfbmJQVjogbnVtYmVyO1xuICAgIF9uYlBWTWF4OiBudW1iZXI7XG4gICAgX2RlZmVuc2U6IG51bWJlcjtcbiAgICBfYXJtZTogQXJtZTtcblxuICAgIGNvbnN0cnVjdG9yKG5vbTogc3RyaW5nLCBuYlBWID0gMTAsIG5iUFZNYXggPSAxMCwgZGVmZW5zZSA9IDIsIGFybWVOYjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX25vbSA9IG5vbTtcbiAgICAgICAgdGhpcy5fbmJQViA9IG5iUFY7XG4gICAgICAgIHRoaXMuX25iUFZNYXggPSBuYlBWTWF4O1xuICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcbiAgICAgICAgdGhpcy5fYXJtZSA9IHRoaXMuY2hvaXNpckFybWUoYXJtZU5iKTtcbiAgICB9XG5cbiAgICBnZXROb20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub207XG4gICAgfVxuXG4gICAgZ2V0TmJQVigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25iUFY7XG4gICAgfVxuXG4gICAgZ2V0TmJQVk1heCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25iUFZNYXg7XG4gICAgfVxuXG4gICAgZ2V0RGVmZW5zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XG4gICAgfVxuXG4gICAgZ2V0QXJtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FybWU7XG4gICAgfVxuXG4gICAgc2V0Tm9tKG5vbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25vbSA9IG5vbVxuICAgIH1cblxuICAgIHNldE5iUFYobmJQVjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX25iUFYgPSBuYlBWXG4gICAgfVxuXG4gICAgc2V0TmJQVk1heChuYlBWTWF4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbmJQVk1heCA9IG5iUFZNYXg7XG4gICAgfVxuXG4gICAgc2V0RGVmZW5zZShkZWZlbnNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XG4gICAgfVxuXG4gICAgc2V0QXJtZShhcm1lOiBBcm1lKSB7XG4gICAgICAgIHRoaXMuX2FybWUgPSBhcm1lO1xuICAgIH1cblxuICAgIC8vIE3DqXRob2RlIGNob2l4IGQnYXJtZVxuICAgIHB1YmxpYyBjaG9pc2lyQXJtZShuYjogbnVtYmVyKSB7XG4gICAgICAgIGlmIChuYiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcm1lMSgxMCwgMjAsIDIwKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG5iID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFybWUyKDEwLCAyMCwgMjApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcm1lKDEwLCAyMCwgMjApO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBUT0RPOiBNw6l0aG9kZSB0YXJnZXQgKHBvdXIgw6l2aXRlciBkZSB0YXBlciB0b3Vqb3VycyBsZSBtw6ptZSlcbiAgICBwdWJsaWMgdGFyZ2V0KGNpYmxlOiBQZXJzb25uYWdlKSB7XG5cbiAgICB9O1xuXG4gICAgLy8gVE9ETzogTcOpdGhvZGUgYXR0YWNrXG4gICAgcHVibGljIGF0dGFjaygpIHtcblxuICAgIH07XG59O1xuIiwiZXhwb3J0IGNsYXNzIEFybWUge1xuICAgIF9taW5EZWdhdDogbnVtYmVyO1xuICAgIF9tYXhEZWdhdDogbnVtYmVyO1xuICAgIF9jaGFuY2VDQzogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobWluRGVnYXQ6IG51bWJlciwgbWF4RGVnYXQ6IG51bWJlciwgY2hhbmNlQ0M6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9taW5EZWdhdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICAgIHRoaXMuX21heERlZ2F0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTE7XG4gICAgICAgIHRoaXMuX2NoYW5jZUNDID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApICsgMTtcbiAgICB9XG5cbiAgICBnZXRNaW5EZWdhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRlZ2F0O1xuICAgIH1cblxuICAgIGdldE1heERlZ2F0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGVnYXQ7XG4gICAgfVxuXG4gICAgZ2V0Q2hhbmNlQ0MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFuY2VDQztcbiAgICB9XG5cbiAgICBzZXRNaW5EZWdhdChtaW5EZWdhdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21pbkRlZ2F0ID0gbWluRGVnYXQ7XG4gICAgfVxuXG4gICAgc2V0TWF4RGVnYXQobWF4RGVnYXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhEZWdhdCA9IG1heERlZ2F0O1xuICAgIH1cblxuICAgIHNldENoYW5jZUNDKGNoYW5jZUNDOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2hhbmNlQ0MgPSBjaGFuY2VDQztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcm1lMSBleHRlbmRzIEFybWUge1xuICAgIF9jaGFuY2VDQ1N1cHA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1pbkRlZ2F0OiBudW1iZXIsIG1heERlZ2F0OiBudW1iZXIsIGNoYW5jZUNDOiBudW1iZXIsIGNoYW5jZUNDU3VwcCA9IDIwKSB7XG4gICAgICAgIHN1cGVyKG1pbkRlZ2F0LCBtYXhEZWdhdCwgY2hhbmNlQ0MpO1xuICAgICAgICB0aGlzLl9jaGFuY2VDQ1N1cHAgPSBjaGFuY2VDQ1N1cHA7XG4gICAgfVxuXG4gICAgZ2V0TWluRGVnYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EZWdhdDtcbiAgICB9XG5cbiAgICBnZXRNYXhEZWdhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heERlZ2F0O1xuICAgIH1cblxuICAgIGdldENoYW5jZUNDKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhbmNlQ0M7XG4gICAgfVxuXG4gICAgZ2V0Q2hhbmNlQ0NTdXBwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhbmNlQ0NTdXBwO1xuICAgIH1cblxuICAgIHNldE1pbkRlZ2F0KG1pbkRlZ2F0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWluRGVnYXQgPSBtaW5EZWdhdDtcbiAgICB9XG5cbiAgICBzZXRNYXhEZWdhdChtYXhEZWdhdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21heERlZ2F0ID0gbWF4RGVnYXQ7XG4gICAgfVxuXG4gICAgc2V0Q2hhbmNlQ0MoY2hhbmNlQ0M6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jaGFuY2VDQyA9IGNoYW5jZUNDO1xuICAgIH1cblxuICAgIHNldENoYW5jZUNDU3VwcChjaGFuY2VDQ1N1cHA6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jaGFuY2VDQ1N1cHAgPSBjaGFuY2VDQ1N1cHA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJtZTIgZXh0ZW5kcyBBcm1lIHtcbiAgICBfbWF4RGVnYXRTdXBwOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihtaW5EZWdhdDogbnVtYmVyLCBtYXhEZWdhdDogbnVtYmVyLCBjaGFuY2VDQzogbnVtYmVyLCBtYXhEZWdhdFN1cHAgPSAyMCkge1xuICAgICAgICBzdXBlcihtaW5EZWdhdCwgbWF4RGVnYXQsIGNoYW5jZUNDKTtcbiAgICAgICAgdGhpcy5fbWF4RGVnYXRTdXBwID0gbWF4RGVnYXRTdXBwO1xuICAgIH1cblxuXG4gICAgZ2V0TWluRGVnYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EZWdhdDtcbiAgICB9XG5cbiAgICBnZXRNYXhEZWdhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heERlZ2F0O1xuICAgIH1cblxuICAgIGdldENoYW5jZUNDKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhbmNlQ0M7XG4gICAgfVxuXG4gICAgZ2V0TWF4RGVnYXRTdXBwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGVnYXRTdXBwO1xuICAgIH1cblxuICAgIHNldE1pbkRlZ2F0KG1pbkRlZ2F0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWluRGVnYXQgPSBtaW5EZWdhdDtcbiAgICB9XG5cbiAgICBzZXRNYXhEZWdhdChtYXhEZWdhdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21heERlZ2F0ID0gbWF4RGVnYXQ7XG4gICAgfVxuXG4gICAgc2V0Q2hhbmNlQ0MoY2hhbmNlQ0M6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jaGFuY2VDQyA9IGNoYW5jZUNDO1xuICAgIH1cblxuICAgIHNldE1heERlZ2F0U3VwcChtYXhEZWdhdFN1cHA6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhEZWdhdFN1cHAgPSBtYXhEZWdhdFN1cHA7XG4gICAgfVxufSIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9QZXJzb25uYWdlXCI7XG5pbXBvcnQgeyBBcm1lIH0gZnJvbSBcIi4vQXJtZVwiO1xuXG5leHBvcnQgY2xhc3MgUGVyc29ubmFnZU1lY2hhbnQgZXh0ZW5kcyBQZXJzb25uYWdlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5vbTogc3RyaW5nLCBuYlBWOiBudW1iZXIsIG5iUFZNYXg6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLCBhcm1lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIobm9tLCBuYlBWLCBuYlBWTWF4LCBkZWZlbnNlLCBhcm1lKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBHw6luw6lyYXRldXIgZGUgbm9tcyBhbMOpYXRvaXJlc1xuICAgIHB1YmxpYyBjcmVhdGVOb21NZWNoYW50KCkge1xuXG4gICAgfVxufSIsImltcG9ydCB7IFBlcnNvbm5hZ2VHZW50aWwgfSBmcm9tIFwiLi4vQ2xhc3Nlcy9QZXJzb25uYWdlR2VudGlsXCI7XG5pbXBvcnQgeyBQZXJzb25uYWdlTWVjaGFudCB9IGZyb20gXCIuLi9DbGFzc2VzL1BlcnNvbm5hZ2VNZWNoYW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgbGV0IGdlbnRpbHM6IFBlcnNvbm5hZ2VHZW50aWxbXSA9IFtdO1xuICAgIGxldCBtZWNoYW50czogUGVyc29ubmFnZU1lY2hhbnRbXSA9IFtdO1xuXG4gICAgbGV0IGdlbnRpbCA9IG5ldyBQZXJzb25uYWdlR2VudGlsKCdMb2xvJywgMTAwLCAxMDAsIDUwLCAxKTtcbiAgICBnZW50aWxzLnB1c2goZ2VudGlsKTtcbiAgICBjb25zb2xlLmxvZyhnZW50aWxzKTtcbiAgICBpZiAoZ2VudGlsKSB7XG4gICAgICAgIGxldCBtZWNoYW50ID0gbmV3IFBlcnNvbm5hZ2VNZWNoYW50KCdNZWNoYW50JywgMTAwLCAxMDAsIDUwLCAwKTtcbiAgICAgICAgbWVjaGFudHMucHVzaChtZWNoYW50KTtcbiAgICAgICAgY29uc29sZS5sb2cobWVjaGFudHMpO1xuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==