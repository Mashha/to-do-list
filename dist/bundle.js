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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/image-quote.png */ "./src/images/image-quote.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Aclonica&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mukta:wght@200;300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --bg-body: #d7cfc3;\r\n  --bg-container: #f8f0e8;\r\n  --font-color: #605a56;\r\n  --underline-color: #b46e53;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  font-family: \"mukta\", sans-serif;\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n  /* background-image: url(\"../images/Untitled\\ design\\(8\\).png\"); */\r\n  background-size: cover;\r\n  background-position: center;\r\n  grid-template-areas:\r\n    \"header header header header header\"\r\n    \"aside main main main main\";\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  text-align: center;\r\n  background-color: #f8f0e8;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.image-logo {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\naside {\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  grid-area: aside;\r\n  gap: 15px;\r\n}\r\n\r\n.top {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: 100%;\r\n  gap: 15px;\r\n}\r\n\r\n.message {\r\n  background-color: #f8f0e8;\r\n  display: flex;\r\n  border-radius: 10px;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.day-message {\r\n  font-size: 15px;\r\n}\r\n\r\n#day-number {\r\n  font-size: 36px;\r\n  margin-top: -16px;\r\n  position: relative;\r\n}\r\n\r\n#day-number:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 6px;\r\n  width: 20px;\r\n  height: 5px;\r\n  background-color: var(--underline-color);\r\n  left: 0;\r\n}\r\n\r\n.image {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  height: auto;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  background-size: cover;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.bottom {\r\n  background-color: var(--bg-container);\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.home,\r\n.projects {\r\n  font-size: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.home span,\r\n.projects span {\r\n  position: relative;\r\n}\r\n\r\n.home span:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 0;\r\n  width: 59px;\r\n  height: 3px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n.home-inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.projects {\r\n  margin-top: 15px;\r\n}\r\n\r\n.projects span:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 0;\r\n  width: 79px;\r\n  height: 3px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n.project-container {\r\n  padding-left: 5px;\r\n  flex: 1;\r\n}\r\n\r\n.project-container > div {\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.project-container > div:hover {\r\n  background-color: var(--bg-body);\r\n}\r\n\r\n.today,\r\n.important,\r\n.all-tasks,\r\n.week-tasks {\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n  padding-left: 5px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n.today:hover,\r\n.important:hover,\r\n.all-tasks:hover,\r\n.week-tasks:hover {\r\n  background-color: var(--bg-body);\r\n}\r\n\r\n.week-tasks span i {\r\n  padding-left: 2px;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n  min-height: 90vh;\r\n  position: relative;\r\n  grid-area: main;\r\n}\r\n\r\n.container {\r\n  width: 90%;\r\n  margin: auto;\r\n  min-height: 80vh;\r\n  background-color: #f8f0e8;\r\n  border-radius: 10px;\r\n  position: relative;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.container-inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 20px;\r\n  min-height: inherit;\r\n}\r\n\r\n#tasks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n#btn-close {\r\n  display: none;\r\n}\r\n\r\n#title-project {\r\n  font-size: 24px;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  font-family: \"Aclonica\", sans-serif;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  font-family: \"Aclonica\", sans-serif;\r\n}\r\n\r\n.title:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 6px;\r\n  left: 0;\r\n  width: 170px;\r\n  height: 15px;\r\n  background-color: #a7d9da;\r\n  z-index: -1;\r\n}\r\n\r\n.task-element {\r\n  display: flex;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.258);\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  gap: 10px;\r\n}\r\n\r\n.task-details {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.tasks-container {\r\n  flex: 1;\r\n}\r\n\r\n.remove-task {\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.star-yellow {\r\n  color: orange;\r\n}\r\n\r\n.modal {\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 10;\r\n}\r\n\r\n.edit-task-modal form {\r\n  width: 450px;\r\n  height: auto;\r\n  z-index: 4;\r\n  background-color: white;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n  display: flex;\r\n  border-radius: 10px;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  gap: 5px;\r\n}\r\n\r\n.modal {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#close-edit-task {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n#close-edit-task i {\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-project {\r\n  cursor: pointer;\r\n}\r\n\r\n.remove-li {\r\n  cursor: pointer;\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\n.btn-open-modal {\r\n  display: flex;\r\n  gap: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  border: none;\r\n  font-size: 18px;\r\n}\r\n\r\n.add-task {\r\n  cursor: pointer;\r\n  justify-content: center;\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  font-size: 20px;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#form.buttons {\r\n  display: flex;\r\n}\r\n\r\n/* js */\r\n.form-modal {\r\n  display: none;\r\n}\r\n.open {\r\n  display: block;\r\n}\r\n\r\n.form-edit-project {\r\n  display: none;\r\n}\r\n\r\n.open-form {\r\n  display: block;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.list-item {\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.taskForm {\r\n  display: none;\r\n}\r\n\r\n.open-task-form {\r\n  display: block;\r\n}\r\n\r\n.edit-task-modal {\r\n  display: none;\r\n}\r\n\r\n.edit-task-modal.open {\r\n  display: flex;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Aclonica&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Mukta:wght@200;300&display=swap\");\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --bg-body: #d7cfc3;\r\n  --bg-container: #f8f0e8;\r\n  --font-color: #605a56;\r\n  --underline-color: #b46e53;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  font-family: \"mukta\", sans-serif;\r\n  background-color: var(--bg-body);\r\n  color: var(--font-color);\r\n  /* background-image: url(\"../images/Untitled\\ design\\(8\\).png\"); */\r\n  background-size: cover;\r\n  background-position: center;\r\n  grid-template-areas:\r\n    \"header header header header header\"\r\n    \"aside main main main main\";\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  text-align: center;\r\n  background-color: #f8f0e8;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.image-logo {\r\n  background-image: url(\"../images/logo.png\");\r\n  background-size: cover;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\naside {\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  grid-area: aside;\r\n  gap: 15px;\r\n}\r\n\r\n.top {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: 100%;\r\n  gap: 15px;\r\n}\r\n\r\n.message {\r\n  background-color: #f8f0e8;\r\n  display: flex;\r\n  border-radius: 10px;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.day-message {\r\n  font-size: 15px;\r\n}\r\n\r\n#day-number {\r\n  font-size: 36px;\r\n  margin-top: -16px;\r\n  position: relative;\r\n}\r\n\r\n#day-number:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 6px;\r\n  width: 20px;\r\n  height: 5px;\r\n  background-color: var(--underline-color);\r\n  left: 0;\r\n}\r\n\r\n.image {\r\n  background-image: url(\"../images/image-quote.png\");\r\n  height: auto;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  background-size: cover;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.bottom {\r\n  background-color: var(--bg-container);\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.home,\r\n.projects {\r\n  font-size: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.home span,\r\n.projects span {\r\n  position: relative;\r\n}\r\n\r\n.home span:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 0;\r\n  width: 59px;\r\n  height: 3px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n.home-inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.projects {\r\n  margin-top: 15px;\r\n}\r\n\r\n.projects span:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 0;\r\n  width: 79px;\r\n  height: 3px;\r\n  background-color: var(--underline-color);\r\n}\r\n\r\n.project-container {\r\n  padding-left: 5px;\r\n  flex: 1;\r\n}\r\n\r\n.project-container > div {\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.project-container > div:hover {\r\n  background-color: var(--bg-body);\r\n}\r\n\r\n.today,\r\n.important,\r\n.all-tasks,\r\n.week-tasks {\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n  padding-left: 5px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n.today:hover,\r\n.important:hover,\r\n.all-tasks:hover,\r\n.week-tasks:hover {\r\n  background-color: var(--bg-body);\r\n}\r\n\r\n.week-tasks span i {\r\n  padding-left: 2px;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n  min-height: 90vh;\r\n  position: relative;\r\n  grid-area: main;\r\n}\r\n\r\n.container {\r\n  width: 90%;\r\n  margin: auto;\r\n  min-height: 80vh;\r\n  background-color: #f8f0e8;\r\n  border-radius: 10px;\r\n  position: relative;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n}\r\n\r\n.container-inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 20px;\r\n  min-height: inherit;\r\n}\r\n\r\n#tasks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n#btn-close {\r\n  display: none;\r\n}\r\n\r\n#title-project {\r\n  font-size: 24px;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  font-family: \"Aclonica\", sans-serif;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  font-family: \"Aclonica\", sans-serif;\r\n}\r\n\r\n.title:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 6px;\r\n  left: 0;\r\n  width: 170px;\r\n  height: 15px;\r\n  background-color: #a7d9da;\r\n  z-index: -1;\r\n}\r\n\r\n.task-element {\r\n  display: flex;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.258);\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  gap: 10px;\r\n}\r\n\r\n.task-details {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.tasks-container {\r\n  flex: 1;\r\n}\r\n\r\n.remove-task {\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.star-yellow {\r\n  color: orange;\r\n}\r\n\r\n.modal {\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 10;\r\n}\r\n\r\n.edit-task-modal form {\r\n  width: 450px;\r\n  height: auto;\r\n  z-index: 4;\r\n  background-color: white;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n  display: flex;\r\n  border-radius: 10px;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  gap: 5px;\r\n}\r\n\r\n.modal {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#close-edit-task {\r\n  align-self: flex-end;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n#close-edit-task i {\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-project {\r\n  cursor: pointer;\r\n}\r\n\r\n.remove-li {\r\n  cursor: pointer;\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\n.btn-open-modal {\r\n  display: flex;\r\n  gap: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  border: none;\r\n  font-size: 18px;\r\n}\r\n\r\n.add-task {\r\n  cursor: pointer;\r\n  justify-content: center;\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  font-size: 20px;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#form.buttons {\r\n  display: flex;\r\n}\r\n\r\n/* js */\r\n.form-modal {\r\n  display: none;\r\n}\r\n.open {\r\n  display: block;\r\n}\r\n\r\n.form-edit-project {\r\n  display: none;\r\n}\r\n\r\n.open-form {\r\n  display: block;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.list-item {\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.taskForm {\r\n  display: none;\r\n}\r\n\r\n.open-task-form {\r\n  display: block;\r\n}\r\n\r\n.edit-task-modal {\r\n  display: none;\r\n}\r\n\r\n.edit-task-modal.open {\r\n  display: flex;\r\n}\r\n"],"sourceRoot":""}]);
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


function displayPage() {
  //loop over and display projects and tasks when page loads
  window.onload = function () {
    displayAllProjects();
    displayAllTasks();
  };

  //open modal
  const btnToOpenForm = document.querySelector(".btn-open-modal");
  btnToOpenForm.addEventListener("click", openProjectForm);

  function openProjectForm() {
    const divModal = document.querySelector(".form-modal");
    // clean input before you open
    cleanInput();
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

    if (e.target[0].value === "") {
      alert("add project name");
    } else {
      let formField = e.target[0].value;
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
    projectName.textContent = project.name;
    listElement.id = project.id;
    const deleteLi = document.createElement("button");
    deleteLi.classList.add("remove-li");
    deleteLi.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    const editLi = document.createElement("button");
    editLi.classList.add("edit-project");
    editLi.textContent = "edit";
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
  }

  //clean input field
  function cleanInput() {
    const inputField = document.querySelector(".project-name");
    inputField.value = "";
  }

  //close modal form
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", closeModalForm);

  function closeModalForm() {
    const divModalClose = document.querySelector(".form-modal");
    divModalClose.classList.remove("open");
  }

  document
    .querySelector(".project-container")
    .addEventListener("click", clickOnProjects);
  function clickOnProjects(e) {
    e.target.parentElement.setAttribute(
      "data-selected-project",
      e.target.textContent
    );

    const clickedProjectId = e.target.parentElement.id;
    const findProjectWithId = _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.getAList(parseInt(clickedProjectId));

    const addTitle = document.querySelector(".title-project");
    addTitle.textContent = findProjectWithId.name;
    const taskElements = document.querySelectorAll(".task-element");
    taskElements.forEach((li) => {
      li.remove();
    });

    findProjectWithId.toDoArray.forEach(function (todo) {
      displaySingleTask(todo);
    });
  }

  // tasks
  //open task form
  document.querySelector(".add-task").addEventListener("click", openTaskModal);

  function openTaskModal() {
    const divTask = document.querySelector(".taskForm");
    divTask.classList.add("open-task-form");
  }

  // close task form
  document
    .querySelector("#close-task")
    .addEventListener("click", closeTaskModal);

  function closeTaskModal() {
    const divTask = document.querySelector(".taskForm");
    divTask.classList.remove("open-task-form");
  }

  document
    .querySelector("#formForTasks")
    .addEventListener("submit", addTaskToArray);

  function addTaskToArray(e) {
    e.preventDefault();
    const title = e.target[0].value;
    const notes = e.target[1].value;
    const date = e.target[2].value;
    const priority = e.target[3].checked;

    const clickedProject = document.querySelector("[data-selected-project]");
    if (clickedProject === null) {
      _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.storedLists[0].addTodo(title, notes, date, priority);
      _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.save();
    } else {
      const findProject = _listManager__WEBPACK_IMPORTED_MODULE_0__.listManager.getAList(parseInt(clickedProject.id));
      findProject.addTodo(title, notes, date, priority);
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
    taskNotes.textContent = singleTask.notes;
    const importance = document.createElement("span");
    importance.classList.add("task-important");
    importance.innerHTML = '<i class="fa-regular fa-star"></i>';
    if (singleTask.priority === true) {
      importance.style.color = "orange";
    } else {
      importance.style.color = "black";
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
      console.log(taskPriority);
    });

    //priority
    importance.addEventListener("click", function () {
      console.log(singleTask.priority);
      if (singleTask.priority === true) {
        singleTask.priority = false;
      } else {
        singleTask.priority = true;
      }
      displayAllTasks();
    });

    //check if done
    taskCheck.addEventListener("change", function () {
      if (taskCheck.checked === true) {
        taskName.style.textDecoration = "line-through";
      } else {
        taskName.style.textDecoration = "none";
      }
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
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
    const taskElements = document.querySelectorAll(".task-element");
    taskElements.forEach((li) => {
      li.remove();
    });
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
  tasksOfTheWeek.addEventListener("click", function () {
    console.log("click");
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
  const addTodo = (title, notes, date, priority, id) => {
    toDoArray.push((0,_to_do_js__WEBPACK_IMPORTED_MODULE_0__.Todo)(title, notes, date, priority, id));
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
function Todo(title, notes, date, priority, id = Date.now()) {
  return {
    title,
    notes,
    date,
    priority,
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

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "419549daee4216b27d57.png";

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


//import tape from "./images/tape.png"
(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayPage)();





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map