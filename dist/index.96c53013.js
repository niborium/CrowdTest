// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index/business-plan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Businessplan = void 0;

var _index = require("./index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Businessplan = /*#__PURE__*/function () {
  function Businessplan() {
    _classCallCheck(this, Businessplan);

    this.businessname = "CrowdTest";
    this.businessplanlink = "src/index/docs/CrowdTest-Businessplan.pdf";
  }

  _createClass(Businessplan, [{
    key: "changeTitle",
    value: function changeTitle() {
      _index.pagetitle.innerHTML = "<h2>Aff\xE4rsplan</h2>";
    }
  }, {
    key: "render",
    value: function render() {
      _index.main.innerHTML = "\n        <div class=\"flex.container\">\n        <div id=\"div\">\n            <p>\n            ".concat(this.businessname, " \xE4r en Crowdsourcing-plattform f\xF6r att s\xF6ka testare till sin webbapplikation eller mobilapplikation. N\xE4r du skapar en ny applikation s\xE5 vill du f\xE5 n\xE5gra initiala anv\xE4ndare som testar din produkt och utv\xE4rderar den innan lansering.\n            <br>\n            Det kan vara sv\xE5rt att hitta testare bortsett fr\xE5n n\xE4ra anh\xF6riga (familj & v\xE4nner) eller kollegor som kan testa din applikation.<br><br> \n            Man beh\xF6ver f\xE5 en bredare grupp av testare som kan testa  p\xE5 olika enheter och ge \xE4rlig feedback av produkten. Du kan via plattformen v\xE4lja krav, \xE5ldersgrupp, intressen, v\xE4lja fr\xE5n olika yrkesroller och enhets specifikt f\xF6r att f\xE5 en bra test grupp.\n            <br><br>\n            <div class=\"m-4\">\n            <div class=\"table-responsive\"> \n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>N\xE4r du publicerar och s\xF6ker testare s\xE5 kan du (som f\xF6retag):</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>1</td>\n                            <td>Best\xE4mma din budget</td>\n                        </tr>\n                        <tr>\n                            <td>2</td>\n                            <td>Hur m\xE5nga testare du beh\xF6ver</td>\n                        </tr>\n                        <tr>\n                            <td>3</td>\n                            <td>Kraven p\xE5 p\xE5 testet</td>\n                        </tr>\n                        <tr>\n                            <td>4</td>\n                            <td>Hur mycket man f\xE5r betalt f\xF6r utf\xF6rt arbete</td>\n                        </tr>\n                        <tr>\n                            <td>5</td>\n                            <td>Slut datum och tidpunkt f\xF6r testet (Testperiod)</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div> \n            </div>\n            <div class=\"m-4\">\n            <div class=\"table-responsive\"> \n                <table class=\"table\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Testare kan ge feedback p\xE5 exempelvis:</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>Buggar/errors</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>Anv\xE4ndbarhet</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td>Anv\xE4ndargr\xE4nssnitt</td>\n                </tr>\n                <tr>\n                    <td>4</td>\n                    <td>Generella f\xF6rb\xE4ttringsf\xF6rslag</td>\n                </tr>\n                </tbody>\n                </table>\n                </div> \n            </div>\n            <div class=\"m-4\">\n            <div class=\"table-responsive\"> \n            <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><b>\xC5terrapportering till best\xE4llare</b></td>\n                    <td>N\xE4r testperioden \xE4r slut s\xE5 \xE5terf\xE5r du en rapport fr\xE5n dina testare och du kan d\xE5 betygs\xE4tta dem (bra testare kan f\xE5 mer pengar genom att skriva bra rapporter).</td>\n                </tr>\n                <tr>\n                    <td><b>S\xE4kerhet f\xF6r k\xF6pare och testare</b></td>\n                    <td>Efter du valt vilka testare du vill anlita (\u2019testare som ans\xF6kt om att bli testare\u2019) s\xE5 betalar du och d\xE5 h\xE5lls pengarna i deposition (escrow) hos oss tills testperioden \xE4r \xF6ver, detta \xE4r dels f\xF6r att skydda dig som k\xF6pare av tj\xE4nsten men \xE4ven f\xF6r att skydda testarna s\xE5 att b\xE4gge parter fullf\xF6ljer uppdraget.<br><br>\n                    N\xE4r uppdraget \xE4r slutf\xF6rt och du \xE4r n\xF6jd s\xE5 distribueras utbetalningarna till testarna.<br>\n                    \xC4r ni inte n\xF6jd med resultatet av en specifik testare s\xE5 kan du markera den som \u2019dispyt\u2019 och ha direktkontakt med testaren f\xF6r att l\xF6sa problemet.<br>\n                    Kan varken ni som f\xF6retag eller testare komma \xF6verens s\xE5 kan ni markera den f\xF6r utredning s\xE5 hoppar v\xE5r kundtj\xE4nst (").concat(this.businessname, ") in och hj\xE4lper er i det enskilda fallet.</td>\n                </tr>\n                <tr>\n                    <td><b>Hur tj\xE4nar ").concat(this.businessname, " pengar?</b></td>\n                    <td>Vi tar en serviceavgift f\xF6r varje order och tar 10% av den totala ordern.<br>\n                    Exempel: du har ett enklare test som du erbjuder 1000 kronor f\xF6r 2 testare s\xE5 tar vi 100kr (10% av detta i avgift) som vi till\xE4gger. Vilket resulterar i kostnad 1000+100 (i detta fall) = 1100 kr.<br><br>\n                    Vi kommer \xE4ven erbjuda att man kan hyra en testare per timme (timpris) d\xE4r man sj\xE4lv som testare s\xE4tter timpriset, \xE4ven fr\xE5n dessa s\xE5 tar vi 10% service avgift.</td>\n                </tr>\n            </tbody>\n            </table>\n            </div> \n            </div>\n            <hr>\n            <img src=\"src/index/imgs/Anbud.png\" class=\"responsive\"><br><br>\n            <img src=\"src/index/imgs/Per-timme.png\" class=\"responsive\">\n            <p>En annan typ vi erbjuder \xE4r att anlita specifik testare per timme.<br>\n            Detta fl\xF6de skiljer sig inget mer \xE4n att det \xE4r en enskild testare som accepterar uppdraget (man f\xE5r best\xE4mma timspriset och antal timmar).<br>\n            Denna annonsen listas inte publikt utan \xE4r ett direktkontrakt mellan f\xF6retaget och testaren.</p>\n            <img src=\"src/index/imgs/Avgifter.png\" class=\"responsive\">\n            </p>\n            <hr>\n        </div>\n        </div>\n        <a href=\"").concat(this.businessplanlink, "\" type=\"application/pdf\" runat=\"server\" button type=\"button\" class=\"btn btn-primary\">L\xE4s hela aff\xE4rsplanen</a>\n    </div>");
    }
  }]);

  return Businessplan;
}();

exports.Businessplan = Businessplan;
},{"./index.js":"src/index/index.js"}],"src/index/product-idea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderProductidea = renderProductidea;

var _index = require("./index.js");

var _businessPlan = require("./business-plan.js");

function renderProductidea() {
  var businessplan = new _businessPlan.Businessplan();
  _index.pagetitle.innerHTML = "<h2>Produktid\xE9<h2>";
  _index.main.innerHTML = "\n    <div class=\"flex.container\">\n        <div id=\"div\">\n            <div>\n                <p>\n                    Den produktid\xE9 jag vill bygga under denna kurs \xE4r \"lighweight\"-prototyp av den fullst\xE4ndiga applikationen som beskrivs i <a href=\"".concat(businessplan.businessplanlink, "\" type=\"application/pdf\" runat=\"server\" button type=\"button\" class=\"btn btn-primary\">Aff\xE4rsplanen</a>.<br>\n                    Fokus ligger p\xE5 frontend-delen av applikationen f\xF6r att f\xE5 en bra presentation av hur applikationen kommer att t\xE4nkas fungera.<br>\n                    Detta \xE4r en del av f\xF6rberedande (2.3 & 2.31 i Aff\xE4rsplanen) och \xE4r en f\xF6ruts\xE4ttning f\xF6r 4.3 (att utveckla den fullst\xE4ndiga webbapplikationen). <br>\n                </p>\n                <div class=\"m-4\">\n    <div class=\"table-responsive\"> \n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Arbetspaket prototyp:</th>\n                    <th>Beskrivning:</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td><b>Responsiv webbdesign (RWD)</b></td>\n                    <td>Sidan m\xE5ste se bra ut b\xE5de f\xF6r mobila enheter och datorer. Anv\xE4nder Bootstrap & Media Queries.</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td><b>[F\xF6retag/Testare] Profilsida</b></td>\n                    <td>Man ska kunna redigera sin profil uppe till. H\xE4r kan man se en \xF6verblick p\xE5 sina uppgifter.<br>\n                    Som testare kan man v\xE4lja alla enhetsmodeller man har tillg\xE4nglig f\xF6r testning.</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td><b>[Publik] P\xE5g\xE5ende annonser</b></td>\n                    <td>Listar samtliga annonser som \xE4r aktiva (Anbud) och visar p\xE5 sidan.</td>\n                </tr>\n                <tr>\n                    <td>4</td>\n                    <td><b>[F\xF6retag] L\xE4gg till annons</b></td>\n                    <td>F\xF6retag kan l\xE4gga till nya annonser med: Budget f\xF6r projektet, antal testare, kraven f\xF6r testet (beskrivning), hur mycket man f\xE5r betalt f\xF6r arbetet, slut datum och tidpunkt f\xF6r testet (testperiod).</td>\n                </tr>\n                <tr>\n                    <td>5</td>\n                    <td><b>[F\xF6retag] Redigera annons</b></td>\n                    <td>F\xF6retag kan redigera befintlig annons (exempelvis redigera beskrivningen eller vilka modeller man vill testa p\xE5).</td>    \n                </tr>\n                <tr>\n                    <td>6</td>\n                    <td><b>[F\xF6retag] Radera annons</b></td>\n                    <td>F\xF6retag kan radera en annons (f\xF6rutsatt att man inte valt n\xE5gon testare \xE4nnu eller testperiod startat).</td>\n                </tr>\n                <tr>\n                    <td>7</td>\n                    <td><b>[F\xF6retag] V\xE4lja testare f\xF6r uppdrag</b></td>\n                    <td>Se vilka som l\xE4mnat anbud p\xE5 uppdragt och v\xE4lj testare fr\xE5n listan.</td>\n                </tr>\n                <tr>\n                    <td>8</td>\n                    <td><b>[Testare] L\xE4mna anbud</b></td>\n                    <td>En knapp f\xF6r att l\xE4mna anbud, d\xE5 f\xE5r man en dialog f\xF6r att l\xE4mna meddelande och ange sitt timpris + antal timmar.</td>\n                </tr>\n                <tr>\n                    <td>9</td>\n                    <td><b>[Backend] Datalagring</b></td>\n                    <td>Lagra data i JSON, localStorage eller med hj\xE4lp av MockAPI f\xF6r att efterlikna ett riktigt backend.</td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n        <p class=\"mt-4\"><strong><u>Observera (Avgr\xE4nsningar fr\xE5n projektm\xE5l):</u></strong><br>\n            1) Prototypen kommer inte att inkludera betall\xF6sning (Deposition eller betalgateway) eller autentisering.<br>\n            2) Prototypen kommer inte att inkludera riktigt backend (se 9 ovan).<br>\n            3) Prototypen kommer inte att inkludera hanteringssystem f\xF6r dispyter.<br>\n            4) Prototypen kommer inte att inkludera betygss\xE4ttningssystem (betygs\xE4tta testare).<br>\n            5) Prototypen kommer inte ha n\xE5gon fungerande adminpanel.\n        </p>\n        </div>\n        </div>\n        </div>\n    </div>");
}
},{"./index.js":"src/index/index.js","./business-plan.js":"src/index/business-plan.js"}],"src/index/contact-info.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = void 0;

var _index = require("./index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Contact = /*#__PURE__*/function () {
  function Contact() {
    _classCallCheck(this, Contact);

    this.name = "Robin";
    this.email = "robink90@gmail.com";
    this.linkedin = "https://www.linkedin.com/in/robin-karlsson-81aa1b20b/";
    this.github = "https://github.com/niborium/CrowdTest";
  }

  _createClass(Contact, [{
    key: "changeTitle",
    value: function changeTitle() {
      _index.pagetitle.innerHTML = "<h2>Kontakt</h2>";
    }
  }, {
    key: "render",
    value: function render() {
      _index.main.innerHTML = "<div class=\"flex-container\">\n        <div id=\"div\">\n        <h2>\xC4r du intresserad av CrowdTest?</h2><br>\n        Kontakta ".concat(this.name, " som \xE4r grundare av CrowdTest f\xF6r att veta mer:<br><br>\n        <a href=\"").concat(this.linkedin, "\" target=\"_blank\" button type=\"button\" class=\"btn btn-success\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">\n            <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"></path>\n            </svg>\n            Kontakta ").concat(this.name, " @ LinkedIn\n        </a><br><br>\n        <a href=\"mailto:").concat(this.email, "\" button type=\"button\" class=\"btn btn-success\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-envelope\" viewBox=\"0 0 16 16\">\n            <path d=\"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z\"></path>\n            </svg>\n            Kontakta ").concat(this.name, " @ E-post\n        </a><br><br>\n        <hr>\n        <a href=\"").concat(this.github, "\" target=\"_blank\" button type=\"button\" class=\"btn btn-outline-danger\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-github\" viewBox=\"0 0 16 16\">\n            <path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path>\n            </svg>\n            Se k\xE4llkoden f\xF6r CrowdTest p\xE5 Github\n        </a>\n        </div>\n    </div>");
    }
  }]);

  return Contact;
}();

exports.Contact = Contact;
},{"./index.js":"src/index/index.js"}],"src/index/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagetitle = exports.main = void 0;

var _businessPlan = require("./business-plan.js");

var _productIdea = require("./product-idea.js");

var _contactInfo = require("./contact-info.js");

var main = document.getElementById('main');
exports.main = main;
var pagetitle = document.getElementById('pagetitle');
exports.pagetitle = pagetitle;
var businessplanBtn = document.getElementById('businessplan');
var productideaBtn = document.getElementById('productidea');
var contactBtn = document.getElementById('contact');
businessplanBtn.addEventListener('click', function () {
  var businessplan = new _businessPlan.Businessplan();
  businessplan.changeTitle();
  businessplan.render();
});
productideaBtn.addEventListener('click', function () {
  (0, _productIdea.renderProductidea)();
});
contactBtn.addEventListener('click', function () {
  var contact = new _contactInfo.Contact();
  contact.changeTitle();
  contact.render();
});
},{"./business-plan.js":"src/index/business-plan.js","./product-idea.js":"src/index/product-idea.js","./contact-info.js":"src/index/contact-info.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60790" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index/index.js"], null)
//# sourceMappingURL=/index.96c53013.js.map