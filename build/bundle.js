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
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_PartieService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var inputReader = function (question) { return __awaiter(void 0, void 0, void 0, function () {
    var response, rl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                rl = readline__WEBPACK_IMPORTED_MODULE_0__["createInterface"]({
                    input: process.stdin,
                    output: process.stdout,
                    terminal: false
                });
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        rl.question(question, function (answer) {
                            resolve(answer);
                        });
                    }).then(function (onfull) {
                        response = onfull;
                        rl.close();
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
// Méthode création personnage
var createPerso = function () { return __awaiter(void 0, void 0, void 0, function () {
    var choixNom, choixArme;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputReader('Nommez votre gentil : ')];
            case 1:
                choixNom = _a.sent();
                console.log('nom du gentil : ' + choixNom);
                return [4 /*yield*/, inputReader('Choisissez votre arme : 1 [ou] 2 : ')];
            case 2:
                choixArme = _a.sent();
                console.log('choix arme : ' + choixArme);
                // Appel à la méthode du service
                // Stringify nom & number arme (sinon type undefined)
                Object(_Services_PartieService__WEBPACK_IMPORTED_MODULE_1__["startGame"])(JSON.stringify(choixNom), Number(choixArme));
                return [2 /*return*/];
        }
    });
}); };
createPerso();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony import */ var _Classes_PersonnageGentil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Classes_PersonnageMechant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


function startGame(nom, arme) {
    var gentils = [];
    var mechants = [];
    var gentil = new _Classes_PersonnageGentil__WEBPACK_IMPORTED_MODULE_0__["PersonnageGentil"](nom, 100, 100, 50, arme);
    gentils.push(gentil);
    console.log(gentils);
    if (gentil) {
        var mechant = new _Classes_PersonnageMechant__WEBPACK_IMPORTED_MODULE_1__["PersonnageMechant"]('Mechant', 100, 100, 50, 0);
        mechants.push(mechant);
        console.log(mechants);
    }
}
;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnageGentil", function() { return PersonnageGentil; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnage", function() { return Personnage; });
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

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
        console.log('choisirArme : ' + nb);
        if (nb === 1) {
            return new _Arme__WEBPACK_IMPORTED_MODULE_0__["Arme1"]();
        }
        ;
        if (nb === 2) {
            return new _Arme__WEBPACK_IMPORTED_MODULE_0__["Arme2"]();
        }
        else {
            return new _Arme__WEBPACK_IMPORTED_MODULE_0__["Arme"](2, 5, 7);
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
/* 5 */
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
        this._minDegat = minDegat;
        this._maxDegat = maxDegat;
        this._chanceCC = chanceCC;
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
    function Arme1(minDegat, maxDegat, chanceCC) {
        if (minDegat === void 0) { minDegat = 2; }
        if (maxDegat === void 0) { maxDegat = 10; }
        if (chanceCC === void 0) { chanceCC = 20; }
        return _super.call(this, minDegat, maxDegat, chanceCC) || this;
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
    Arme1.prototype.setMinDegat = function (minDegat) {
        this._minDegat = minDegat;
    };
    Arme1.prototype.setMaxDegat = function (maxDegat) {
        this._maxDegat = maxDegat;
    };
    Arme1.prototype.setChanceCC = function (chanceCC) {
        this._chanceCC = chanceCC;
    };
    return Arme1;
}(Arme));

var Arme2 = /** @class */ (function (_super) {
    __extends(Arme2, _super);
    function Arme2(minDegat, maxDegat, chanceCC) {
        if (minDegat === void 0) { minDegat = 2; }
        if (maxDegat === void 0) { maxDegat = 20; }
        if (chanceCC === void 0) { chanceCC = 10; }
        return _super.call(this, minDegat, maxDegat, chanceCC) || this;
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
    Arme2.prototype.setMinDegat = function (minDegat) {
        this._minDegat = minDegat;
    };
    Arme2.prototype.setMaxDegat = function (maxDegat) {
        this._maxDegat = maxDegat;
    };
    Arme2.prototype.setChanceCC = function (chanceCC) {
        this._chanceCC = chanceCC;
    };
    return Arme2;
}(Arme));



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnageMechant", function() { return PersonnageMechant; });
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWRsaW5lXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL1BhcnRpZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NsYXNzZXMvUGVyc29ubmFnZUdlbnRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xhc3Nlcy9QZXJzb25uYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9DbGFzc2VzL0FybWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NsYXNzZXMvUGVyc29ubmFnZU1lY2hhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZxQztBQUVnQjtBQUVy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R0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxRQUFnQjtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRUQsMkJBQVcsR0FBWCxVQUFZLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxDQTlCMEIsSUFBSSxHQThCOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR3lDO0FBRzFDO0lBQXVDLHFDQUFVO0lBRTdDLDJCQUFZLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxJQUFZO2VBQ2pGLGtCQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDNUMsQ0FBQztJQUVELHNDQUFzQztJQUMvQiw0Q0FBZ0IsR0FBdkI7SUFFQSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLENBVnNDLHNEQUFVLEdBVWhEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIHJlYWRsaW5lIGZyb20gJ3JlYWRsaW5lJztcblxuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4vU2VydmljZXMvUGFydGllU2VydmljZVwiO1xuXG5jb25zdCBpbnB1dFJlYWRlciA9IGFzeW5jIChxdWVzdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlO1xuXG4gICAgY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xuICAgICAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcbiAgICAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcbiAgICAgICAgdGVybWluYWw6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJsLnF1ZXN0aW9uKHF1ZXN0aW9uLCAoYW5zd2VyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoYW5zd2VyKTtcbiAgICAgICAgfSlcbiAgICB9KS50aGVuKG9uZnVsbCA9PiB7XG4gICAgICAgIHJlc3BvbnNlID0gb25mdWxsO1xuICAgICAgICBybC5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZTtcbn07XG5cbi8vIE3DqXRob2RlIGNyw6lhdGlvbiBwZXJzb25uYWdlXG5jb25zdCBjcmVhdGVQZXJzbyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBMaXQgbCdpbnB1dCBub21cbiAgICBsZXQgY2hvaXhOb20gPSBhd2FpdCBpbnB1dFJlYWRlcignTm9tbWV6IHZvdHJlIGdlbnRpbCA6ICcpO1xuICAgIGNvbnNvbGUubG9nKCdub20gZHUgZ2VudGlsIDogJyArIGNob2l4Tm9tKTtcbiAgICAvLyBMaXQgbCdpbnB1dCBhcm1lXG4gICAgbGV0IGNob2l4QXJtZSA9IGF3YWl0IGlucHV0UmVhZGVyKCdDaG9pc2lzc2V6IHZvdHJlIGFybWUgOiAxIFtvdV0gMiA6ICcpO1xuICAgIGNvbnNvbGUubG9nKCdjaG9peCBhcm1lIDogJyArIGNob2l4QXJtZSlcbiAgICAvLyBBcHBlbCDDoCBsYSBtw6l0aG9kZSBkdSBzZXJ2aWNlXG4gICAgLy8gU3RyaW5naWZ5IG5vbSAmIG51bWJlciBhcm1lIChzaW5vbiB0eXBlIHVuZGVmaW5lZClcbiAgICBzdGFydEdhbWUoSlNPTi5zdHJpbmdpZnkoY2hvaXhOb20pLCBOdW1iZXIoY2hvaXhBcm1lKSk7XG59O1xuXG5jcmVhdGVQZXJzbygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7IiwiaW1wb3J0IHsgUGVyc29ubmFnZUdlbnRpbCB9IGZyb20gXCIuLi9DbGFzc2VzL1BlcnNvbm5hZ2VHZW50aWxcIjtcbmltcG9ydCB7IFBlcnNvbm5hZ2VNZWNoYW50IH0gZnJvbSBcIi4uL0NsYXNzZXMvUGVyc29ubmFnZU1lY2hhbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShub206IHN0cmluZywgYXJtZTogbnVtYmVyKSB7XG4gICAgbGV0IGdlbnRpbHM6IFBlcnNvbm5hZ2VHZW50aWxbXSA9IFtdO1xuICAgIGxldCBtZWNoYW50czogUGVyc29ubmFnZU1lY2hhbnRbXSA9IFtdO1xuXG4gICAgbGV0IGdlbnRpbCA9IG5ldyBQZXJzb25uYWdlR2VudGlsKG5vbSwgMTAwLCAxMDAsIDUwLCBhcm1lKTtcbiAgICBnZW50aWxzLnB1c2goZ2VudGlsKTtcbiAgICBjb25zb2xlLmxvZyhnZW50aWxzKTtcbiAgICBpZiAoZ2VudGlsKSB7XG4gICAgICAgIGxldCBtZWNoYW50ID0gbmV3IFBlcnNvbm5hZ2VNZWNoYW50KCdNZWNoYW50JywgMTAwLCAxMDAsIDUwLCAwKTtcbiAgICAgICAgbWVjaGFudHMucHVzaChtZWNoYW50KTtcbiAgICAgICAgY29uc29sZS5sb2cobWVjaGFudHMpO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gXCIuL1BlcnNvbm5hZ2VcIjtcbmltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi9Bcm1lXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBlbnVtIFJvbGUge1xuLy8gICAgIEEgPSAnU29pZ25ldXInLFxuLy8gICAgIEIgPSAnQ2xhc3NpcXVlJyxcbi8vICAgICBDID0gJ1RhbmsnLFxuLy8gICAgIEQgPSAnQXNzYXNzaW4nXG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25uYWdlR2VudGlsIGV4dGVuZHMgUGVyc29ubmFnZSB7XG5cbiAgICAvLyByb2xlOiBSb2xlO1xuXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcsIG5iUFY6IG51bWJlciwgbmJQVk1heDogbnVtYmVyLCBkZWZlbnNlOiBudW1iZXIsIGFybWU6IG51bWJlcikge1xuICAgICAgICBzdXBlcihub20sIG5iUFYsIG5iUFZNYXgsIGRlZmVuc2UsIGFybWUpO1xuICAgICAgICAvLyB0aGlzLnJvbGUgPSByb2xlO1xuICAgIH1cblxuXG4gICAgZ2V0Tm9tKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9tO1xuICAgIH1cblxuICAgIGdldE5iUFYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYlBWO1xuICAgIH1cblxuICAgIGdldE5iUFZNYXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYlBWTWF4O1xuICAgIH1cblxuICAgIGdldERlZmVuc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZlbnNlO1xuICAgIH1cblxuICAgIGdldEFybWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcm1lO1xuICAgIH1cblxuICAgIC8vIGdldFJvbGUoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnJvbGU7XG4gICAgLy8gfVxuXG4gICAgc2V0Tm9tKG5vbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25vbSA9IG5vbVxuICAgIH1cblxuICAgIHNldE5iUFYobmJQVjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX25iUFYgPSBuYlBWXG4gICAgfVxuXG4gICAgc2V0TmJQVk1heChuYlBWTWF4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbmJQVk1heCA9IG5iUFZNYXg7XG4gICAgfVxuXG4gICAgc2V0RGVmZW5zZShkZWZlbnNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XG4gICAgfVxuXG4gICAgc2V0QXJtZShhcm1lOiBBcm1lKSB7XG4gICAgICAgIHRoaXMuX2FybWUgPSBhcm1lO1xuICAgIH1cblxuICAgIC8vIHNldFJvbGUocm9sZTogUm9sZSkge1xuICAgIC8vICAgICB0aGlzLnJvbGUgPSByb2xlO1xuICAgIC8vIH1cblxuICAgIC8vIFRPRE86IE3DqXRob2RlIHBvdXIgc29pZ25lclxufVxuXG4iLCJpbXBvcnQgeyBBcm1lLCBBcm1lMSwgQXJtZTIgfSBmcm9tIFwiLi9Bcm1lXCI7XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25uYWdlIHtcblxuICAgIF9ub206IHN0cmluZztcbiAgICBfbmJQVjogbnVtYmVyO1xuICAgIF9uYlBWTWF4OiBudW1iZXI7XG4gICAgX2RlZmVuc2U6IG51bWJlcjtcbiAgICBfYXJtZTogQXJtZTtcblxuICAgIGNvbnN0cnVjdG9yKG5vbTogc3RyaW5nLCBuYlBWID0gMTAsIG5iUFZNYXggPSAxMCwgZGVmZW5zZSA9IDIsIGFybWVOYjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX25vbSA9IG5vbTtcbiAgICAgICAgdGhpcy5fbmJQViA9IG5iUFY7XG4gICAgICAgIHRoaXMuX25iUFZNYXggPSBuYlBWTWF4O1xuICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcbiAgICAgICAgdGhpcy5fYXJtZSA9IHRoaXMuY2hvaXNpckFybWUoYXJtZU5iKTtcbiAgICB9XG5cbiAgICBnZXROb20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub207XG4gICAgfVxuXG4gICAgZ2V0TmJQVigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25iUFY7XG4gICAgfVxuXG4gICAgZ2V0TmJQVk1heCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25iUFZNYXg7XG4gICAgfVxuXG4gICAgZ2V0RGVmZW5zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XG4gICAgfVxuXG4gICAgZ2V0QXJtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FybWU7XG4gICAgfVxuXG4gICAgc2V0Tm9tKG5vbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25vbSA9IG5vbVxuICAgIH1cblxuICAgIHNldE5iUFYobmJQVjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX25iUFYgPSBuYlBWXG4gICAgfVxuXG4gICAgc2V0TmJQVk1heChuYlBWTWF4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbmJQVk1heCA9IG5iUFZNYXg7XG4gICAgfVxuXG4gICAgc2V0RGVmZW5zZShkZWZlbnNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XG4gICAgfVxuXG4gICAgc2V0QXJtZShhcm1lOiBBcm1lKSB7XG4gICAgICAgIHRoaXMuX2FybWUgPSBhcm1lO1xuICAgIH1cblxuICAgIC8vIE3DqXRob2RlIGNob2l4IGQnYXJtZVxuICAgIHB1YmxpYyBjaG9pc2lyQXJtZShuYjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaG9pc2lyQXJtZSA6ICcgKyBuYik7XG4gICAgICAgIGlmIChuYiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcm1lMSgpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAobmIgPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJtZTIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJtZSgyLCA1LCA3KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy8gVE9ETzogTcOpdGhvZGUgdGFyZ2V0IChwb3VyIMOpdml0ZXIgZGUgdGFwZXIgdG91am91cnMgbGUgbcOqbWUpXG4gICAgcHVibGljIHRhcmdldChjaWJsZTogUGVyc29ubmFnZSkge1xuXG4gICAgfTtcblxuICAgIC8vIFRPRE86IE3DqXRob2RlIGF0dGFja1xuICAgIHB1YmxpYyBhdHRhY2soKSB7XG5cbiAgICB9O1xufTtcbiIsImV4cG9ydCBjbGFzcyBBcm1lIHtcbiAgICBfbWluRGVnYXQ6IG51bWJlcjtcbiAgICBfbWF4RGVnYXQ6IG51bWJlcjtcbiAgICBfY2hhbmNlQ0M6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1pbkRlZ2F0OiBudW1iZXIsIG1heERlZ2F0OiBudW1iZXIsIGNoYW5jZUNDOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWluRGVnYXQgPSBtaW5EZWdhdDtcbiAgICAgICAgdGhpcy5fbWF4RGVnYXQgPSBtYXhEZWdhdDtcbiAgICAgICAgdGhpcy5fY2hhbmNlQ0MgPSBjaGFuY2VDQztcbiAgICB9XG5cbiAgICBnZXRNaW5EZWdhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRlZ2F0O1xuICAgIH1cblxuICAgIGdldE1heERlZ2F0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGVnYXQ7XG4gICAgfVxuXG4gICAgZ2V0Q2hhbmNlQ0MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFuY2VDQztcbiAgICB9XG5cbiAgICBzZXRNaW5EZWdhdChtaW5EZWdhdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21pbkRlZ2F0ID0gbWluRGVnYXQ7XG4gICAgfVxuXG4gICAgc2V0TWF4RGVnYXQobWF4RGVnYXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhEZWdhdCA9IG1heERlZ2F0O1xuICAgIH1cblxuICAgIHNldENoYW5jZUNDKGNoYW5jZUNDOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2hhbmNlQ0MgPSBjaGFuY2VDQztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcm1lMSBleHRlbmRzIEFybWUge1xuXG4gICAgY29uc3RydWN0b3IobWluRGVnYXQgPSAyLCBtYXhEZWdhdCA9IDEwLCBjaGFuY2VDQyA9IDIwKSB7XG4gICAgICAgIHN1cGVyKG1pbkRlZ2F0LCBtYXhEZWdhdCwgY2hhbmNlQ0MpO1xuICAgIH1cblxuICAgIGdldE1pbkRlZ2F0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWluRGVnYXQ7XG4gICAgfVxuXG4gICAgZ2V0TWF4RGVnYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEZWdhdDtcbiAgICB9XG5cbiAgICBnZXRDaGFuY2VDQygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5jZUNDO1xuICAgIH1cblxuICAgIHNldE1pbkRlZ2F0KG1pbkRlZ2F0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWluRGVnYXQgPSBtaW5EZWdhdDtcbiAgICB9XG5cbiAgICBzZXRNYXhEZWdhdChtYXhEZWdhdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21heERlZ2F0ID0gbWF4RGVnYXQ7XG4gICAgfVxuXG4gICAgc2V0Q2hhbmNlQ0MoY2hhbmNlQ0M6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jaGFuY2VDQyA9IGNoYW5jZUNDO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFybWUyIGV4dGVuZHMgQXJtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtaW5EZWdhdCA9IDIsIG1heERlZ2F0ID0gMjAsIGNoYW5jZUNDID0gMTApIHtcbiAgICAgICAgc3VwZXIobWluRGVnYXQsIG1heERlZ2F0LCBjaGFuY2VDQyk7XG4gICAgfVxuXG5cbiAgICBnZXRNaW5EZWdhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRlZ2F0O1xuICAgIH1cblxuICAgIGdldE1heERlZ2F0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGVnYXQ7XG4gICAgfVxuXG4gICAgZ2V0Q2hhbmNlQ0MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFuY2VDQztcbiAgICB9XG5cbiAgICBzZXRNaW5EZWdhdChtaW5EZWdhdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21pbkRlZ2F0ID0gbWluRGVnYXQ7XG4gICAgfVxuXG4gICAgc2V0TWF4RGVnYXQobWF4RGVnYXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhEZWdhdCA9IG1heERlZ2F0O1xuICAgIH1cblxuICAgIHNldENoYW5jZUNDKGNoYW5jZUNDOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2hhbmNlQ0MgPSBjaGFuY2VDQztcbiAgICB9XG59IiwiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gXCIuL1BlcnNvbm5hZ2VcIjtcbmltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi9Bcm1lXCI7XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25uYWdlTWVjaGFudCBleHRlbmRzIFBlcnNvbm5hZ2Uge1xuXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcsIG5iUFY6IG51bWJlciwgbmJQVk1heDogbnVtYmVyLCBkZWZlbnNlOiBudW1iZXIsIGFybWU6IG51bWJlcikge1xuICAgICAgICBzdXBlcihub20sIG5iUFYsIG5iUFZNYXgsIGRlZmVuc2UsIGFybWUpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IEfDqW7DqXJhdGV1ciBkZSBub21zIGFsw6lhdG9pcmVzXG4gICAgcHVibGljIGNyZWF0ZU5vbU1lY2hhbnQoKSB7XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==