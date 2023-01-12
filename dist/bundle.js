/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/image-quote.png */ "./src/images/image-quote.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Aclonica&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mukta:wght@200;300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --bg-body: #d7cfc3;\r\n  --bg-container: #f8f0e8;\r\n  --font-color: #605a56;\r\n  --underline-color: #b46e53;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  font-family: \"mukta\", sans-serif;\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100vh;\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n  background-size: cover;\r\n  background-position: center;\r\n  grid-template-areas:\r\n    \"header header header header header\"\r\n    \"aside main main main main\"\r\n    \"footer footer footer footer footer\";\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  text-align: center;\r\n  background-color: var(--bg-container);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 2px 0;\r\n  position: relative;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  font-family: \"Aclonica\", sans-serif;\r\n  font-size: 26px;\r\n}\r\n\r\n.image-logo {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.image-logo img {\r\n  width: 100%;\r\n}\r\n\r\naside {\r\n  width: 320px;\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  grid-area: aside;\r\n  gap: 15px;\r\n}\r\n\r\n.top {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: 100%;\r\n  gap: 15px;\r\n}\r\n\r\n.message {\r\n  background-color: var(--bg-container);\r\n  display: flex;\r\n  border-radius: 10px;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.day-message {\r\n  font-size: 15px;\r\n}\r\n\r\n#day-number {\r\n  font-size: 36px;\r\n  margin-top: -16px;\r\n  position: relative;\r\n}\r\n\r\n#day-number:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 6px;\r\n  width: 20px;\r\n  height: 5px;\r\n  background-color: var(--underline-color);\r\n  left: 0;\r\n}\r\n\r\n.image {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  height: auto;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  background-size: cover;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.bottom {\r\n  background-color: var(--bg-container);\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.home,\r\n.projects {\r\n  font-size: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.home span,\r\n.projects span {\r\n  position: relative;\r\n}\r\n\r\n.home span:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 0;\r\n  width: 59px;\r\n  height: 3px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n.home-inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.projects {\r\n  margin-top: 15px;\r\n}\r\n\r\n.projects span:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 0;\r\n  width: 79px;\r\n  height: 3px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n.project-container {\r\n  flex: 1;\r\n}\r\n\r\n.project-container > div {\r\n  transition: all 0.3s ease-in;\r\n  padding-left: 5px;\r\n}\r\n\r\n.project-container > div:hover {\r\n  background-color: var(--bg-body);\r\n}\r\n\r\n.today,\r\n.important,\r\n.all-tasks,\r\n.week-tasks {\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n  padding-left: 5px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n.today:hover,\r\n.important:hover,\r\n.all-tasks:hover,\r\n.week-tasks:hover {\r\n  background-color: var(--bg-body);\r\n}\r\n\r\n.week-tasks span i {\r\n  padding-left: 2px;\r\n}\r\n\r\n.list-item {\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.edit-project {\r\n  cursor: pointer;\r\n  border: none;\r\n  background: transparent;\r\n  color: var(--font-color);\r\n}\r\n\r\n.project-name {\r\n  flex: 1;\r\n}\r\n\r\n.remove-li {\r\n  cursor: pointer;\r\n  border: none;\r\n  background: transparent;\r\n  color: var(--font-color);\r\n}\r\n\r\n.btn-open-modal {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: none;\r\n  font-size: 18px;\r\n}\r\n\r\n.btn-open-modal span {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.btn-open-modal span:hover {\r\n  color: var(--underline-color);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n  min-height: 90vh;\r\n  position: relative;\r\n  grid-area: main;\r\n  padding: 12px 25px;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  min-height: 100%;\r\n  background-color: var(--bg-container);\r\n  border-radius: 10px;\r\n  position: relative;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.container-inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 20px;\r\n  min-height: inherit;\r\n}\r\n\r\n#tasks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n#btn-close {\r\n  display: none;\r\n}\r\n\r\n.title-project {\r\n  font-size: 24px;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  font-family: \"Aclonica\", sans-serif;\r\n}\r\n\r\n.tasks-container {\r\n  flex: 1;\r\n}\r\n\r\n.task-element {\r\n  display: flex;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.258);\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  gap: 10px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.task-element:hover {\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n}\r\n\r\n.task-details {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.remove-task {\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n  color: var(--font-color);\r\n}\r\n\r\n.add-task {\r\n  justify-content: center;\r\n  display: flex;\r\n  font-size: 20px;\r\n}\r\n\r\n.add-task span {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.add-task span:hover {\r\n  color: var(--underline-color);\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  grid-area: footer;\r\n}\r\n\r\nfooter a {\r\n  color: var(--underline-color);\r\n}\r\n\r\n/* form to add project */\r\n.form-modal {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  transform: scale(0);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  background-color: var(--underline-color);\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.open {\r\n  display: flex;\r\n  transform: scale(1);\r\n}\r\n\r\n.add-project {\r\n  padding: 6px 19px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: var(--font-color);\r\n  color: var(--bg-body);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.add-project:hover {\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n}\r\n\r\n.close-modal {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n/* form to edit project */\r\n\r\n.form-edit-project {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  transform: scale(0);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.open-form {\r\n  display: flex;\r\n  transform: scale(1);\r\n}\r\n\r\n#form-edit {\r\n  background-color: var(--underline-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.add-edited-project {\r\n  padding: 8px 18px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: var(--font-color);\r\n  color: var(--bg-body);\r\n  transition: all 0.3s ease-in;\r\n}\r\n.add-edited-project:hover {\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n}\r\n\r\n.close-edit-form {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  font-size: 22px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* form to add tasks */\r\n\r\n.taskForm {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  transform: scale(0);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n#formForTasks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  width: 300px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n#formForTasks input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.add-task-to-list {\r\n  padding: 8px 18px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: var(--font-color);\r\n  color: var(--bg-body);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.add-task-to-list:hover {\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n}\r\n\r\n#close-task {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n}\r\n\r\n.open-task-form {\r\n  display: flex;\r\n  transform: scale(1);\r\n}\r\n\r\n/* form to edit task */\r\n.edit-task-modal {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  transform: scale(0);\r\n}\r\n\r\n.edit-task-modal form {\r\n  width: 300px;\r\n  background-color: var(--underline-color);\r\n  display: flex;\r\n  border-radius: 10px;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n.edit-task-modal form input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.add-task-changes {\r\n  padding: 8px 18px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: var(--font-color);\r\n  color: var(--bg-body);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.add-task-changes:hover {\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n}\r\n\r\n#close-edit-task {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n#close-edit-task i {\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-task-modal.open {\r\n  display: flex;\r\n  transform: scale(1);\r\n}\r\n\r\n/* blur and hidden class */\r\n.blur {\r\n  filter: blur(3px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.task-notes {\r\n  display: none;\r\n}\r\n\r\n.active {\r\n  background-color: #d7cfc3;\r\n}\r\n\r\n.mobile-nav {\r\n  display: none;\r\n  position: fixed;\r\n  left: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.mobile-nav > div {\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px;\r\n  background-color: #b46e53;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .mobile-nav {\r\n    display: block;\r\n  }\r\n  .wrapper {\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-areas:\r\n      \"header header\"\r\n      \"aside main\"\r\n      \"footer footer\";\r\n  }\r\n\r\n  main {\r\n    grid-column: 1/-1;\r\n  }\r\n  aside {\r\n    width: 100%;\r\n    grid-column: 1/-1;\r\n    transform: translateX(-100%);\r\n    background-color: #d7cfc3;\r\n  }\r\n\r\n  .slide-in {\r\n    transform: translateX(0);\r\n    z-index: 10;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Aclonica&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Mukta:wght@200;300&display=swap\");\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --bg-body: #d7cfc3;\r\n  --bg-container: #f8f0e8;\r\n  --font-color: #605a56;\r\n  --underline-color: #b46e53;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  font-family: \"mukta\", sans-serif;\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100vh;\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n  background-size: cover;\r\n  background-position: center;\r\n  grid-template-areas:\r\n    \"header header header header header\"\r\n    \"aside main main main main\"\r\n    \"footer footer footer footer footer\";\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  text-align: center;\r\n  background-color: var(--bg-container);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 2px 0;\r\n  position: relative;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  font-family: \"Aclonica\", sans-serif;\r\n  font-size: 26px;\r\n}\r\n\r\n.image-logo {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.image-logo img {\r\n  width: 100%;\r\n}\r\n\r\naside {\r\n  width: 320px;\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  grid-area: aside;\r\n  gap: 15px;\r\n}\r\n\r\n.top {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: 100%;\r\n  gap: 15px;\r\n}\r\n\r\n.message {\r\n  background-color: var(--bg-container);\r\n  display: flex;\r\n  border-radius: 10px;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.day-message {\r\n  font-size: 15px;\r\n}\r\n\r\n#day-number {\r\n  font-size: 36px;\r\n  margin-top: -16px;\r\n  position: relative;\r\n}\r\n\r\n#day-number:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 6px;\r\n  width: 20px;\r\n  height: 5px;\r\n  background-color: var(--underline-color);\r\n  left: 0;\r\n}\r\n\r\n.image {\r\n  background-image: url(\"../images/image-quote.png\");\r\n  height: auto;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  background-size: cover;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.bottom {\r\n  background-color: var(--bg-container);\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.home,\r\n.projects {\r\n  font-size: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.home span,\r\n.projects span {\r\n  position: relative;\r\n}\r\n\r\n.home span:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 0;\r\n  width: 59px;\r\n  height: 3px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n.home-inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.projects {\r\n  margin-top: 15px;\r\n}\r\n\r\n.projects span:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 0;\r\n  width: 79px;\r\n  height: 3px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n.project-container {\r\n  flex: 1;\r\n}\r\n\r\n.project-container > div {\r\n  transition: all 0.3s ease-in;\r\n  padding-left: 5px;\r\n}\r\n\r\n.project-container > div:hover {\r\n  background-color: var(--bg-body);\r\n}\r\n\r\n.today,\r\n.important,\r\n.all-tasks,\r\n.week-tasks {\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n  padding-left: 5px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n.today:hover,\r\n.important:hover,\r\n.all-tasks:hover,\r\n.week-tasks:hover {\r\n  background-color: var(--bg-body);\r\n}\r\n\r\n.week-tasks span i {\r\n  padding-left: 2px;\r\n}\r\n\r\n.list-item {\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.edit-project {\r\n  cursor: pointer;\r\n  border: none;\r\n  background: transparent;\r\n  color: var(--font-color);\r\n}\r\n\r\n.project-name {\r\n  flex: 1;\r\n}\r\n\r\n.remove-li {\r\n  cursor: pointer;\r\n  border: none;\r\n  background: transparent;\r\n  color: var(--font-color);\r\n}\r\n\r\n.btn-open-modal {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: none;\r\n  font-size: 18px;\r\n}\r\n\r\n.btn-open-modal span {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.btn-open-modal span:hover {\r\n  color: var(--underline-color);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n  min-height: 90vh;\r\n  position: relative;\r\n  grid-area: main;\r\n  padding: 12px 25px;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  min-height: 100%;\r\n  background-color: var(--bg-container);\r\n  border-radius: 10px;\r\n  position: relative;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.container-inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 20px;\r\n  min-height: inherit;\r\n}\r\n\r\n#tasks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n#btn-close {\r\n  display: none;\r\n}\r\n\r\n.title-project {\r\n  font-size: 24px;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  font-family: \"Aclonica\", sans-serif;\r\n}\r\n\r\n.tasks-container {\r\n  flex: 1;\r\n}\r\n\r\n.task-element {\r\n  display: flex;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.258);\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  gap: 10px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.task-element:hover {\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n}\r\n\r\n.task-details {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.remove-task {\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n  color: var(--font-color);\r\n}\r\n\r\n.add-task {\r\n  justify-content: center;\r\n  display: flex;\r\n  font-size: 20px;\r\n}\r\n\r\n.add-task span {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.add-task span:hover {\r\n  color: var(--underline-color);\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  grid-area: footer;\r\n}\r\n\r\nfooter a {\r\n  color: var(--underline-color);\r\n}\r\n\r\n/* form to add project */\r\n.form-modal {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  transform: scale(0);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  background-color: var(--underline-color);\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.open {\r\n  display: flex;\r\n  transform: scale(1);\r\n}\r\n\r\n.add-project {\r\n  padding: 6px 19px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: var(--font-color);\r\n  color: var(--bg-body);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.add-project:hover {\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n}\r\n\r\n.close-modal {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n/* form to edit project */\r\n\r\n.form-edit-project {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  transform: scale(0);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.open-form {\r\n  display: flex;\r\n  transform: scale(1);\r\n}\r\n\r\n#form-edit {\r\n  background-color: var(--underline-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.add-edited-project {\r\n  padding: 8px 18px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: var(--font-color);\r\n  color: var(--bg-body);\r\n  transition: all 0.3s ease-in;\r\n}\r\n.add-edited-project:hover {\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n}\r\n\r\n.close-edit-form {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  font-size: 22px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* form to add tasks */\r\n\r\n.taskForm {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  transform: scale(0);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n#formForTasks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  width: 300px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n#formForTasks input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.add-task-to-list {\r\n  padding: 8px 18px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: var(--font-color);\r\n  color: var(--bg-body);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.add-task-to-list:hover {\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n}\r\n\r\n#close-task {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n}\r\n\r\n.open-task-form {\r\n  display: flex;\r\n  transform: scale(1);\r\n}\r\n\r\n/* form to edit task */\r\n.edit-task-modal {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  transform: scale(0);\r\n}\r\n\r\n.edit-task-modal form {\r\n  width: 300px;\r\n  background-color: var(--underline-color);\r\n  display: flex;\r\n  border-radius: 10px;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n.edit-task-modal form input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.add-task-changes {\r\n  padding: 8px 18px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: var(--font-color);\r\n  color: var(--bg-body);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.add-task-changes:hover {\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n}\r\n\r\n#close-edit-task {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n#close-edit-task i {\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-task-modal.open {\r\n  display: flex;\r\n  transform: scale(1);\r\n}\r\n\r\n/* blur and hidden class */\r\n.blur {\r\n  filter: blur(3px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.task-notes {\r\n  display: none;\r\n}\r\n\r\n.active {\r\n  background-color: #d7cfc3;\r\n}\r\n\r\n.mobile-nav {\r\n  display: none;\r\n  position: fixed;\r\n  left: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.mobile-nav > div {\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px;\r\n  background-color: #b46e53;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .mobile-nav {\r\n    display: block;\r\n  }\r\n  .wrapper {\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-areas:\r\n      \"header header\"\r\n      \"aside main\"\r\n      \"footer footer\";\r\n  }\r\n\r\n  main {\r\n    grid-column: 1/-1;\r\n  }\r\n  aside {\r\n    width: 100%;\r\n    grid-column: 1/-1;\r\n    transform: translateX(-100%);\r\n    background-color: #d7cfc3;\r\n  }\r\n\r\n  .slide-in {\r\n    transform: translateX(0);\r\n    z-index: 10;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  if (!duration || _typeof(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.seconds) : 0; // Add years and months

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPage": () => (/* binding */ displayPage)
/* harmony export */ });
/* harmony import */ var _listManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listManager */ "./src/listManager.js");
/* harmony import */ var date_fns_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/add */ "./node_modules/date-fns/esm/add/index.js");
/* harmony import */ var date_fns_isBefore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isBefore */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isAfter */ "./node_modules/date-fns/esm/isAfter/index.js");






function displayPage() {
  //loop over and display projects and tasks when page loads
  window.onload = function () {
    displayAllProjects();
    displayAllTasks();
  };

  //open modal
  const btnToOpenForm = document.querySelector(".btn-open-modal span");
  btnToOpenForm.addEventListener("click", openProjectForm);

  const wrapper = document.querySelector(".wrapper");

  function openProjectForm() {
    const divModal = document.querySelector(".form-modal");
    // clean input before you open
    cleanInput();
    wrapper.classList.add("blur");
    divModal.classList.add("open");
  }

  //loop over the array
  function displayAllProjects() {
    const projectItems = document.querySelectorAll(".list-item");
    projectItems.forEach((item) => {
      item.remove();
    });

    for (let i = 0; i < _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.length; i++) {
      displaySingleProject(_listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists[i]);
    }
  }

  //add project to array
  document.querySelector("#form").addEventListener("submit", submitProject);

  function submitProject(e) {
    e.preventDefault();
    if (e.target[1].value === "") {
      alert("add project name");
    } else {
      let formField = e.target[1].value;
      closeModalForm();
      _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.addList(`${formField}`);
      displayAllProjects();
    }
  }

  function displaySingleProject(project) {
    const projectContainer = document.querySelector(".project-container");
    const listElement = document.createElement("div");
    listElement.classList.add("list-item");
    const icon = document.createElement("span");
    icon.innerHTML = '<i class="fa-regular fa-folder"></i>';
    const projectName = document.createElement("span");
    projectName.classList.add("project-name");
    projectName.textContent = project.name;
    listElement.id = project.id;
    const deleteLi = document.createElement("button");
    deleteLi.classList.add("remove-li");
    deleteLi.id = project.id;
    deleteLi.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    const editLi = document.createElement("button");
    editLi.classList.add("edit-project");
    editLi.id = project.id;
    editLi.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    if (project.name !== "general") {
      listElement.append(icon, projectName, editLi, deleteLi);
    } else {
      listElement.append(icon, projectName);
    }

    projectContainer.append(listElement);

    // edit project
    editLi.addEventListener("click", function () {
      const divEditList = document.querySelector(".form-edit-project");
      const listId = document.getElementById("list-id");
      listId.value = project.id;
      divEditList.classList.add("open-form");
      const projectNameInput = document.querySelector(".edited-project-name");
      projectNameInput.value = project.name;
      wrapper.classList.add("blur");
    });

    //remove project from the page
    deleteLi.addEventListener("click", function () {
      const getAListWithID = _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.getAList(project.id);
      const findIndex = _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.indexOf(getAListWithID);
      _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.removeList(findIndex);

      displayAllProjects();
      todaysTasks();
    });
  }

  //add changes to array
  const formEdit = document.querySelector("#form-edit");
  formEdit.addEventListener("submit", function (e) {
    e.preventDefault();
    const newName = document.querySelector(".edited-project-name");
    const editButtonId = document.querySelector("#list-id");
    const changeTitle = document.querySelector(".title-project");
    changeTitle.textContent = newName.value;
    _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.forEach(function (project) {
      if (project.id === parseInt(editButtonId.value)) {
        _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.editAList(project, newName.value);
      }
    });
    wrapper.classList.remove("blur");
    closeEditedForm();
    displayAllProjects();
  });

  //close edited form
  document
    .querySelector(".close-edit-form")
    .addEventListener("click", closeEditedForm);
  function closeEditedForm() {
    const divEditList = document.querySelector(".form-edit-project");
    divEditList.classList.remove("open-form");
    wrapper.classList.remove("blur");
  }

  //clean input field
  function cleanInput() {
    const inputField = document.querySelector(".project-name-input");
    inputField.value = "";
  }

  //close modal form
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", closeModalForm);

  function closeModalForm() {
    const divModalClose = document.querySelector(".form-modal");
    wrapper.classList.remove("blur");
    divModalClose.classList.remove("open");
  }

  function clickOnProjects(e) {
    removeAttribute();
    removeActive();
    if (e.target.classList.contains("project-name")) {
      e.target.parentElement.setAttribute(
        "data-selected-project",
        e.target.textContent
      );
      const clickedProjectStyle = e.target.parentElement;
      clickedProjectStyle.classList.add("active");
      const clickedProjectId = e.target.parentElement.id;
      const findProjectWithId = _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.getAList(
        parseInt(clickedProjectId)
      );
      const addTitle = document.querySelector(".title-project");
      addTitle.textContent = findProjectWithId.name;
      const taskElements = document.querySelectorAll(".task-element");
      taskElements.forEach((li) => {
        li.remove();
      });

      findProjectWithId.toDoArray.forEach(function (todo) {
        displaySingleTask(todo);
      });
    } else {
      return;
    }
  }
  document
    .querySelector(".project-container")
    .addEventListener("click", clickOnProjects);

  function removeAttribute() {
    const attribute = document.querySelectorAll("[data-selected-project]");
    attribute.forEach(function (project) {
      project.removeAttribute("data-selected-project");
    });
  }

  // tasks
  //open task form
  document
    .querySelector(".add-task span")
    .addEventListener("click", openTaskModal);

  function openTaskModal() {
    cleanTaskInput();
    const divTask = document.querySelector(".taskForm");
    wrapper.classList.add("blur");
    divTask.classList.add("open-task-form");
  }

  function cleanTaskInput() {
    const title = document.querySelector("#task-title");
    title.value = "";
    const notes = document.querySelector("#notes");
    notes.value = "";
    const date = document.querySelector("#task-date");
    date.value = "";
  }

  // close task form
  document
    .querySelector("#close-task")
    .addEventListener("click", closeTaskModal);

  function closeTaskModal() {
    const divTask = document.querySelector(".taskForm");
    wrapper.classList.remove("blur");
    divTask.classList.remove("open-task-form");
  }

  document
    .querySelector("#formForTasks")
    .addEventListener("submit", addTaskToArray);

  function addTaskToArray(e) {
    e.preventDefault();
    const title = e.target[1].value;
    const notes = e.target[2].value;
    const date = e.target[3].value;
    const priority = e.target[4].checked;
    const done = e.target[5].checked;

    const clickedProject = document.querySelector("[data-selected-project]");

    if (clickedProject === null) {
      _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists[0].addTodo(title, notes, date, priority, done);
      _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.save();
    } else {
      const findProject = _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.getAList(parseInt(clickedProject.id));
      findProject.addTodo(title, notes, date, priority, done);
      _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.save();
    }
    closeTaskModal();
    displayAllTasks();
  }

  // loop over the array
  function displayAllTasks() {
    const taskElements = document.querySelectorAll(".task-element");
    taskElements.forEach((li) => {
      li.remove();
    });

    const projectName = document.querySelector(".title-project");
    _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.forEach(function (project) {
      if (projectName.textContent === project.name) {
        project.toDoArray.forEach(function (task) {
          displaySingleTask(task);
        });
      }
    });
  }

  //display tasks
  function displaySingleTask(singleTask) {
    const tasksUl = document.querySelector(".tasks");
    const taskElement = document.createElement("li");
    taskElement.id = singleTask.id;
    taskElement.classList.add("task-element");
    const taskCheck = document.createElement("input");
    taskCheck.type = "checkbox";
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
    const taskName = document.createElement("div");
    taskName.textContent = singleTask.title;
    const taskNotes = document.createElement("div");
    taskNotes.classList.add("task-notes");
    taskNotes.textContent = singleTask.notes;
    const importance = document.createElement("span");
    importance.classList.add("task-important");
    importance.innerHTML = '<i class="fa-regular fa-star"></i>';
    if (singleTask.priority === true) {
      importance.style.color = "#b46e53";
    } else {
      importance.style.color = "#605a56";
    }

    const dueDate = document.createElement("div");
    dueDate.classList.add("due-date");
    if (singleTask.date === "") {
      dueDate.textContent = "No date";
    } else {
      dueDate.textContent = singleTask.date;
    }

    const removeTask = document.createElement("button");
    removeTask.classList.add("remove-task");
    removeTask.id = singleTask.id;
    removeTask.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    taskDetails.append(taskName, taskNotes);
    taskElement.append(taskCheck, taskDetails, dueDate, importance, removeTask);
    tasksUl.append(taskElement);

    // remove tasks
    removeTask.addEventListener("click", function () {
      const titleProject = document.querySelector(".title-project");
      _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.forEach(function (project) {
        if (project.name === titleProject.textContent) {
          const task = project.findTodo(parseInt(removeTask.id));
          //find the index of that task, to remove the right one
          const findTaskIndex = project.toDoArray.indexOf(task);
          project.removeTodo(findTaskIndex);
          _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.save();
          displayAllTasks();
        }
      });
    });

    // edit tasks
    taskDetails.addEventListener("click", function () {
      const editTaskForm = document.querySelector(".edit-task-modal");
      editTaskForm.classList.add("open");
      const taskTitle = document.querySelector("#task-new-title");
      taskTitle.value = singleTask.title;
      const taskNotes = document.querySelector("#task-notes");
      taskNotes.value = singleTask.notes;
      const taskDate = document.querySelector("#task-new-date");
      taskDate.value = singleTask.date;
      const taskId = document.querySelector("#task-id");
      taskId.value = singleTask.id;
      const taskPriority = document.querySelector("#new-priority");
      taskPriority.checked = singleTask.priority;
      wrapper.classList.add("blur");
    });

    //priority
    importance.addEventListener("click", function () {
      if (singleTask.priority === true) {
        singleTask.priority = false;
      } else {
        singleTask.priority = true;
      }
      displayAllTasks();
    });

    //check if done
    if (singleTask.done === true) {
      taskCheck.checked = true;
      taskName.style.textDecoration = "line-through";
    } else {
      taskCheck.checked = false;
      taskName.style.textDecoration = "none";
    }

    taskCheck.addEventListener("change", function () {
      if (taskCheck.checked === true) {
        singleTask.done = true;
        taskName.style.textDecoration = "line-through";
        _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.save();
      } else {
        singleTask.done = false;
        taskName.style.textDecoration = "none";
        _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.save();
      }
      displayAllTasks();
    });
  }

  //add task changes to array
  document.querySelector("#edit-task").addEventListener("submit", function (e) {
    e.preventDefault();
    const taskTitle = document.querySelector("#task-new-title").value;
    const taskNotes = document.querySelector("#task-notes").value;
    const taskDate = document.querySelector("#task-new-date").value;
    const taskPriority = document.querySelector("#new-priority").checked;

    const taskId = document.querySelector("#task-id");
    const titleProject = document.querySelector(".title-project");
    _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.forEach(function (project) {
      if (project.name === titleProject.textContent) {
        project.toDoArray.forEach(function (task) {
          if (task.id === parseInt(taskId.value)) {
            project.editTodo(
              task,
              taskTitle,
              taskNotes,
              taskDate,
              taskPriority
            );
            wrapper.classList.remove("blur");
            displayAllTasks();
            _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.save();
            closeEditForm();
          }
        });
      }
    });
  });

  //close edit form
  document
    .querySelector("#close-edit-task")
    .addEventListener("click", closeEditForm);
  function closeEditForm() {
    const editTaskForm = document.querySelector(".edit-task-modal");
    editTaskForm.classList.remove("open");
    wrapper.classList.remove("blur");
  }

  //type part of the day
  const today = new Date();
  const hours = today.getHours();
  const message = document.querySelector(".day-message");

  if (hours < 12) {
    message.textContent = "Good morning";
  } else if (hours < 18) {
    message.textContent = "Good afternoon";
  } else {
    message.textContent = "Good evening";
  }

  // date in word
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  const wordDay = days[new Date().getDay()];
  const numberDay = today.getDate();
  //const month = months[new Date().getMonth()];
  const dateToday = document.querySelector("#day-word");
  dateToday.textContent = `${wordDay}`;
  const numberOfToday = document.querySelector("#day-number");
  numberOfToday.textContent = `${numberDay}`;
  //get date
  const currentDate = new Date().toJSON().slice(0, 10);
  //remove list elements
  function removeLi() {
    const taskElements = document.querySelectorAll(".task-element");
    taskElements.forEach((li) => {
      li.remove();
    });
  }

  //display today's tasks
  document
    .querySelector("#tasks-for-today")
    .addEventListener("click", todaysTasks);
  function todaysTasks() {
    removeLi();
    const projectName = document.querySelector(".title-project");
    projectName.textContent = "Today";
    _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.forEach(function (project) {
      project.toDoArray.forEach(function (task) {
        if (currentDate === task.date) {
          displaySingleTask(task);
        }
      });
    });
  }

  //display all tasks
  const allTasks = document.querySelector("#list-of-all-tasks");
  allTasks.addEventListener("click", function () {
    removeLi();
    const projectName = document.querySelector(".title-project");
    projectName.textContent = "All tasks";

    _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.forEach(function (project) {
      project.toDoArray.forEach(function (task) {
        displaySingleTask(task);
      });
    });
  });

  // display tasks of this coming week
  const tasksOfTheWeek = document.querySelector("#tasks-of-this-week");
  const weekFromToday = (0,date_fns_add__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(2023, 0, 11, 15, 57, 50), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 6,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  tasksOfTheWeek.addEventListener("click", function () {
    removeLi();
    const projectName = document.querySelector(".title-project");
    projectName.textContent = "Week";
    _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.forEach(function (project) {
      project.toDoArray.forEach(function (task) {
        if (
          (0,date_fns_isBefore__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(task.date), weekFromToday) &&
          (0,date_fns_isAfter__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(task.date), today)
        ) {
          displaySingleTask(task);
        }
      });
    });
  });

  //display tasks that are important
  const importantTasks = document.querySelector("#list-of-important-tasks");
  importantTasks.addEventListener("click", function () {
    removeLi();
    const projectName = document.querySelector(".title-project");
    projectName.textContent = "Important";
    _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists.forEach(function (project) {
      project.toDoArray.forEach(function (task) {
        if (task.priority === true) {
          displaySingleTask(task);
        }
      });
    });
  });

  function removeActive() {
    const activeEl = document.querySelectorAll(".active");
    activeEl.forEach(function (el) {
      el.classList.remove("active");
    });
  }
  //add active on clicked home element
  document.querySelector(".home-inner").addEventListener("click", function (e) {
    removeActive();
    e.target.classList.add("active");
  });
}


/***/ }),

/***/ "./src/listManager.js":
/*!****************************!*\
  !*** ./src/listManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listManager": () => (/* binding */ listManager)
/* harmony export */ });
/* harmony import */ var _to_do_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-lists */ "./src/to-do-lists.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



// manage lists
const listManager = (function () {
  const storedLists = recreateStoredList() || [];
  console.log(storedLists);
  function recreateStoredList() {
    const parsedJson = _storage__WEBPACK_IMPORTED_MODULE_1__.storedItems.getItem("storedLists") || [];
    if (parsedJson.length === 0) {
      return;
    } else {
      const recreatedTodoArray = [];
      for (let i = 0; i < parsedJson.length; i++) {
        const recreatedTodo = (0,_to_do_lists__WEBPACK_IMPORTED_MODULE_0__.toDoList)(parsedJson[i].name, parsedJson[i].id);
        recreatedTodoArray.push(recreatedTodo);
        const tasksArray = parsedJson[i].toDoArray;

        for (let j = 0; j < tasksArray.length; j++) {
          recreatedTodo.addTodo(
            tasksArray[j].title,
            tasksArray[j].notes,
            tasksArray[j].date,
            tasksArray[j].priority,
            tasksArray[j].done,
            tasksArray[j].id
          );
        }
      }
      return recreatedTodoArray;
    }
  }

  function getLists() {
    return storedLists;
  }

  const addList = (name, id) => {
    storedLists.push((0,_to_do_lists__WEBPACK_IMPORTED_MODULE_0__.toDoList)(name, id));
    save();
  };

  function getAList(id) {
    return storedLists.find((list) => list.id === id);
  }

  function editAList(object, newName) {
    object.name = newName;
    save();
  }

  function removeList(list) {
    storedLists.splice(list, 1);
    save();
  }

  const save = () => {
    _storage__WEBPACK_IMPORTED_MODULE_1__.storedItems.setItem("storedLists", storedLists);
  };

  if (storedLists.length === 0) {
    addList("general");
  }

  return {
    storedLists,
    addList,
    getLists,
    getAList,
    editAList,
    removeList,
    save,
  };
})();


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storedItems": () => (/* binding */ storedItems)
/* harmony export */ });
const storedItems = (function () {
  const setItem = (key, value) => {
    return window.localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
  };

  return {
    setItem,
    getItem,
  };
})();


/***/ }),

/***/ "./src/to-do-lists.js":
/*!****************************!*\
  !*** ./src/to-do-lists.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do.js */ "./src/to-do.js");


// list for todo's
function toDoList(name, id = Date.now()) {
  const toDoArray = [];

  //add to do to array
  const addTodo = (title, notes, date, priority, done, id) => {
    toDoArray.push((0,_to_do_js__WEBPACK_IMPORTED_MODULE_0__.Todo)(title, notes, date, priority, done, id));
  };

  function findTodo(id) {
  return toDoArray.find((task)=> task.id === id)
  }

  function editTodo(object, newTitle, newNotes, newDate, newPriority){
    object.title = newTitle, object.notes = newNotes, object.date = newDate, object.priority = newPriority
  }

  function removeTodo(todo) {
    toDoArray.splice(todo, 1);
  }

  return {
    name,
    id,
    toDoArray,
    addTodo,
    findTodo,
    editTodo,
    removeTodo,
  };
}


/***/ }),

/***/ "./src/to-do.js":
/*!**********************!*\
  !*** ./src/to-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
// to do's
function Todo(title, notes, date, priority, done, id = Date.now()) {
  return {
    title,
    notes,
    date,
    priority,
    done,
    id,
  };
}


/***/ }),

/***/ "./src/images/image-quote.png":
/*!************************************!*\
  !*** ./src/images/image-quote.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70b92372a7835a7bec80.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");


(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayPage)();

//slide in nav bar
const mobileNav = document.querySelector(".mobile-nav");
const aside = document.querySelector("aside");

mobileNav.addEventListener("click", function () {
  aside.classList.toggle("slide-in");
});

if (screen.width <= 800) {
  document.querySelector(".today").addEventListener("click", removeAside);
  document.querySelector(".week-tasks").addEventListener("click", removeAside);
  document.querySelector(".all-tasks").addEventListener("click", removeAside);
  document.querySelector(".important").addEventListener("click", removeAside);

  const projects = document.querySelector(".project-container");
  projects.addEventListener("click", function (e) {
    if (e.target.classList.contains("project-name")) {
      removeAside();
    }
  });

  function removeAside() {
    aside.classList.remove("slide-in");
  }
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map