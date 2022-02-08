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
  locationImg.src = "../dist/img/location.png";
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
  chefImg.src = "../dist/img/chef.png";
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
    createMenuItems("Tasty noodles", "../dist/img/food-img/noodles.jpg")
  );
  menu.appendChild(
    createMenuItems("Some tasty looking dish", "../dist/img/food-img/tasty.jpg")
  );
  menu.appendChild(
    createMenuItems("Tasty salad", "../dist/img/food-img/salad.jpg")
  );
  menu.appendChild(
    createMenuItems("Soothing tea", "../dist/img/food-img/tea.jpg")
  );
  menu.appendChild(
    createMenuItems("Yummy pancakes", "../dist/img/food-img/pancake.jpg")
  );
  menu.appendChild(
    createMenuItems("Tasty omelet", "../dist/img/food-img/egg.jpg")
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQWU7QUFDckM7QUFDQSxJQUFJLDJEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVE7QUFDVjs7QUFFcUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQlM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQWUsSUFBSSxTQUFTO0FBQ25ELG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ2xDeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yRDtBQUNwQjtBQUNFO0FBQ047QUFDbkMsMERBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCLFFBQVE7QUFDUjtBQUNBLFFBQVEseURBQVc7QUFDbkIsUUFBUTtBQUNSO0FBQ0EsUUFBUSxzREFBUTtBQUNoQjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQYXJhZ3JhcGggfSBmcm9tIFwiLi9ob21lLXBhZ2VcIjtcbmZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoXCLwn5OeIDEyMyA0NTYgNzg5XCIpKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQYXJhZ3JhcGgoXCLwn4+gIEhvbGx5d29vZCBCb3VsZXZhcmQgNDIsIExvcyBBbmdlbGVzLCBVU0FcIilcbiAgKTtcbiAgY29uc3QgbG9jYXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2NhdGlvbkltZy5zcmMgPSBcIi4uL2Rpc3QvaW1nL2xvY2F0aW9uLnBuZ1wiO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGxvY2F0aW9uSW1nKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0QnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xuIiwiZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIkJlc3QgUmVzdGF1cmFudCBpbiB0aGUgd29yZFwiKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTk5OVwiKSk7XG4gIGNvbnN0IGNoZWZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjaGVmSW1nLnNyYyA9IFwiLi4vZGlzdC9pbWcvY2hlZi5wbmdcIjtcbiAgaG9tZS5hcHBlbmRDaGlsZChjaGVmSW1nKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoXCJPcmRlciBvbmxpbmUgb3IgdmlzaXQgdXNcIikpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVCdG5cIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0KSB7XG4gIGNvbnN0IHBhcmFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJhRGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcGFyYURpdi5jbGFzc0xpc3QuYWRkKFwicGFyYVwiKTtcbiAgcmV0dXJuIHBhcmFEaXY7XG59XG5leHBvcnQgeyBob21lUGFnZSwgY3JlYXRlUGFyYWdyYXBoIH07XG4iLCJpbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWUtcGFnZVwiO1xuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCByZXN0YXVyYW50TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICByZXN0YXVyYW50TmFtZURpdi50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudFwiO1xuICByZXN0YXVyYW50TmFtZURpdi5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1uYW1lXCIpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImhvbWVCdG5cIik7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0QnRuXCIpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWVEaXYpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbn1cbmZ1bmN0aW9uIGluaXRpYWxQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgaG9tZVBhZ2UoKTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbFBhZ2UsIGNyZWF0ZUhlYWRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYWdyYXBoIH0gZnJvbSBcIi4vaG9tZS1wYWdlXCI7XG5mdW5jdGlvbiBtZW51UGFnZSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW1zKFwiVGFzdHkgbm9vZGxlc1wiLCBcIi4uL2Rpc3QvaW1nL2Zvb2QtaW1nL25vb2RsZXMuanBnXCIpXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW1zKFwiU29tZSB0YXN0eSBsb29raW5nIGRpc2hcIiwgXCIuLi9kaXN0L2ltZy9mb29kLWltZy90YXN0eS5qcGdcIilcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbXMoXCJUYXN0eSBzYWxhZFwiLCBcIi4uL2Rpc3QvaW1nL2Zvb2QtaW1nL3NhbGFkLmpwZ1wiKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtcyhcIlNvb3RoaW5nIHRlYVwiLCBcIi4uL2Rpc3QvaW1nL2Zvb2QtaW1nL3RlYS5qcGdcIilcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbXMoXCJZdW1teSBwYW5jYWtlc1wiLCBcIi4uL2Rpc3QvaW1nL2Zvb2QtaW1nL3BhbmNha2UuanBnXCIpXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW1zKFwiVGFzdHkgb21lbGV0XCIsIFwiLi4vZGlzdC9pbWcvZm9vZC1pbWcvZWdnLmpwZ1wiKVxuICApO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xufVxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW1zKGl0ZW1OYW1lLCBsb2NhdGlvbikge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudWl0ZW1cIik7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChgJHtpdGVtTmFtZX1gKSk7XG4gIG1lbnVJbWcuc3JjID0gYCR7bG9jYXRpb259YDtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUltZyk7XG4gIHJldHVybiBtZW51SXRlbTtcbn1cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0aWFsUGFnZSwgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWUtcGFnZVwiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3QtcGFnZVwiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnUtcGFnZVwiO1xuaW5pdGlhbFBhZ2UoKTtcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKTtcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXRhYi5jbGFzc0xpc3RbMl0pIHtcbiAgICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGlmICh0YWIuY2xhc3NMaXN0WzBdID09PSBcImhvbWVCdG5cIikge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGhvbWVQYWdlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhYi5jbGFzc0xpc3RbMF0gPT09IFwiY29udGFjdEJ0blwiKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGFjdFBhZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAodGFiLmNsYXNzTGlzdFswXSA9PT0gXCJtZW51QnRuXCIpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBtZW51UGFnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==