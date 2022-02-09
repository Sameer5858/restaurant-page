/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");

function contactPage() {
  const contentContainer = document.getElementById("content");
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.appendChild((0,_home_page__WEBPACK_IMPORTED_MODULE_0__.createParagraph)("📞 123 456 789"));
  contact.appendChild(
    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.createParagraph)("🏠 Hollywood Boulevard 42, Los Angeles, USA")
  );
  const locationImg = document.createElement("img");
  locationImg.src = "./img/location.png";
  contact.appendChild(locationImg);
  contentContainer.appendChild(contact);
  document.querySelector(".contactBtn").classList.add("active");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);


/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage),
/* harmony export */   "createParagraph": () => (/* binding */ createParagraph)
/* harmony export */ });
function homePage() {
  const contentContainer = document.getElementById("content");
  const home = document.createElement("div");
  home.classList.add("home");
  home.appendChild(createParagraph("Best Restaurant in the word"));
  home.appendChild(createParagraph("Made with passion since 1999"));
  const chefImg = document.createElement("img");
  chefImg.src = "./img/chef.png";
  home.appendChild(chefImg);
  home.appendChild(createParagraph("Order online or visit us"));
  contentContainer.appendChild(home);
  document.querySelector(".homeBtn").classList.add("active");
}
function createParagraph(text) {
  const paraDiv = document.createElement("div");
  paraDiv.textContent = text;
  paraDiv.classList.add("para");
  return paraDiv;
}



/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialPage": () => (/* binding */ initialPage),
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");


function createHeader() {
  const header = document.createElement("header");
  const restaurantNameDiv = document.createElement("div");
  const nav = document.createElement("nav");
  const homeBtn = document.createElement("button");
  const contactBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  document.getElementById("body").appendChild(header);
  restaurantNameDiv.textContent = "Restaurant";
  restaurantNameDiv.classList.add("restaurant-name");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("homeBtn");
  homeBtn.classList.add("tab");
  contactBtn.textContent = "Contact";
  contactBtn.classList.add("contactBtn");
  contactBtn.classList.add("tab");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("menuBtn");
  menuBtn.classList.add("tab");
  header.appendChild(restaurantNameDiv);
  header.appendChild(nav);
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
}
function initialPage() {
  createHeader();
  (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homePage)();
}




/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");

function menuPage() {
  const contentContainer = document.getElementById("content");
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(
    createMenuItems("Tasty noodles", "./img/food-img/noodles.jpg")
  );
  menu.appendChild(
    createMenuItems("Some tasty looking dish", "./img/food-img/tasty.jpg")
  );
  menu.appendChild(createMenuItems("Tasty salad", "./img/food-img/salad.jpg"));
  menu.appendChild(createMenuItems("Soothing tea", "./img/food-img/tea.jpg"));
  menu.appendChild(
    createMenuItems("Yummy pancakes", "./img/food-img/pancake.jpg")
  );
  menu.appendChild(createMenuItems("Tasty omelet", "./img/food-img/egg.jpg"));
  contentContainer.appendChild(menu);
}
function createMenuItems(itemName, location) {
  const menuItem = document.createElement("div");
  const menuImg = document.createElement("img");
  menuItem.classList.add("menuitem");
  menuItem.appendChild((0,_home_page__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(`${itemName}`));
  menuImg.src = `${location}`;
  menuItem.appendChild(menuImg);
  return menuItem;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");




(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.initialPage)();
const tabs = document.querySelectorAll(".tab");
const contentContainer = document.getElementById("content");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (!tab.classList[2]) {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      if (tab.classList[0] === "homeBtn") {
        contentContainer.innerHTML = "";
        (0,_home_page__WEBPACK_IMPORTED_MODULE_1__.homePage)();
      } else if (tab.classList[0] === "contactBtn") {
        contentContainer.innerHTML = "";
        (0,_contact_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
      } else if (tab.classList[0] === "menuBtn") {
        contentContainer.innerHTML = "";
        (0,_menu_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
      }
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQWU7QUFDckM7QUFDQSxJQUFJLDJEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJFOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFRO0FBQ1Y7O0FBRXFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJEQUFlLElBQUksU0FBUztBQUNuRCxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUM1QnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDTjtBQUNFO0FBQ047QUFDbkMsMERBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCLFFBQVE7QUFDUjtBQUNBLFFBQVEseURBQVc7QUFDbkIsUUFBUTtBQUNSO0FBQ0EsUUFBUSxzREFBUTtBQUNoQjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQYXJhZ3JhcGggfSBmcm9tIFwiLi9ob21lLXBhZ2VcIjtcbmZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoXCLwn5OeIDEyMyA0NTYgNzg5XCIpKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQYXJhZ3JhcGgoXCLwn4+gIEhvbGx5d29vZCBCb3VsZXZhcmQgNDIsIExvcyBBbmdlbGVzLCBVU0FcIilcbiAgKTtcbiAgY29uc3QgbG9jYXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2NhdGlvbkltZy5zcmMgPSBcIi4vaW1nL2xvY2F0aW9uLnBuZ1wiO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGxvY2F0aW9uSW1nKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0QnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xuIiwiZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIkJlc3QgUmVzdGF1cmFudCBpbiB0aGUgd29yZFwiKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTk5OVwiKSk7XG4gIGNvbnN0IGNoZWZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjaGVmSW1nLnNyYyA9IFwiLi9pbWcvY2hlZi5wbmdcIjtcbiAgaG9tZS5hcHBlbmRDaGlsZChjaGVmSW1nKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoXCJPcmRlciBvbmxpbmUgb3IgdmlzaXQgdXNcIikpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVCdG5cIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0KSB7XG4gIGNvbnN0IHBhcmFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJhRGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcGFyYURpdi5jbGFzc0xpc3QuYWRkKFwicGFyYVwiKTtcbiAgcmV0dXJuIHBhcmFEaXY7XG59XG5leHBvcnQgeyBob21lUGFnZSwgY3JlYXRlUGFyYWdyYXBoIH07XG4iLCJpbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWUtcGFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHJlc3RhdXJhbnROYW1lRGl2LnRleHRDb250ZW50ID0gXCJSZXN0YXVyYW50XCI7XG4gIHJlc3RhdXJhbnROYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZUJ0blwiKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RCdG5cIik7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZURpdik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xufVxuZnVuY3Rpb24gaW5pdGlhbFBhZ2UoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBob21lUGFnZSgpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsUGFnZSwgY3JlYXRlSGVhZGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhZ3JhcGggfSBmcm9tIFwiLi9ob21lLXBhZ2VcIjtcbmZ1bmN0aW9uIG1lbnVQYWdlKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbXMoXCJUYXN0eSBub29kbGVzXCIsIFwiLi9pbWcvZm9vZC1pbWcvbm9vZGxlcy5qcGdcIilcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbXMoXCJTb21lIHRhc3R5IGxvb2tpbmcgZGlzaFwiLCBcIi4vaW1nL2Zvb2QtaW1nL3Rhc3R5LmpwZ1wiKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtcyhcIlRhc3R5IHNhbGFkXCIsIFwiLi9pbWcvZm9vZC1pbWcvc2FsYWQuanBnXCIpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbXMoXCJTb290aGluZyB0ZWFcIiwgXCIuL2ltZy9mb29kLWltZy90ZWEuanBnXCIpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbXMoXCJZdW1teSBwYW5jYWtlc1wiLCBcIi4vaW1nL2Zvb2QtaW1nL3BhbmNha2UuanBnXCIpXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1zKFwiVGFzdHkgb21lbGV0XCIsIFwiLi9pbWcvZm9vZC1pbWcvZWdnLmpwZ1wiKSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG59XG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbXMoaXRlbU5hbWUsIGxvY2F0aW9uKSB7XG4gIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51aXRlbVwiKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKGAke2l0ZW1OYW1lfWApKTtcbiAgbWVudUltZy5zcmMgPSBgJHtsb2NhdGlvbn1gO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgcmV0dXJuIG1lbnVJdGVtO1xufVxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxQYWdlIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWUtcGFnZVwiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3QtcGFnZVwiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnUtcGFnZVwiO1xuaW5pdGlhbFBhZ2UoKTtcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKTtcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXRhYi5jbGFzc0xpc3RbMl0pIHtcbiAgICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGlmICh0YWIuY2xhc3NMaXN0WzBdID09PSBcImhvbWVCdG5cIikge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGhvbWVQYWdlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhYi5jbGFzc0xpc3RbMF0gPT09IFwiY29udGFjdEJ0blwiKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGFjdFBhZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAodGFiLmNsYXNzTGlzdFswXSA9PT0gXCJtZW51QnRuXCIpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBtZW51UGFnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==