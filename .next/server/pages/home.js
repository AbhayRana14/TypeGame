"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layouts_AuthLayouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layouts/AuthLayouts */ \"./src/layouts/AuthLayouts.js\");\n/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/i18n */ \"./utils/i18n.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_i18n__WEBPACK_IMPORTED_MODULE_4__]);\n_utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst home = ()=>{\n    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();\n    const { 0: counter , 1: setCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: penalty , 1: setPenalty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: result , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: alphabet , 1: setAlphabet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: inputValue , 1: setInputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(alphabet);\n    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: isPaused , 1: setIsPaused  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: time , 1: setTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: classname , 1: setClassName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);\n    const handleStart = ()=>{\n        if (counter < 20) {\n            setIsActive(true);\n            setIsPaused(false);\n        }\n    };\n    const handlePauseResume = ()=>{\n        setIsPaused(!isPaused);\n    };\n    const handleAlphabet = ()=>{\n        setAlphabet(Math.random().toString(36).replace(/[^a-z]+/g, \"\").substr(0, 1).toUpperCase());\n    };\n    const handleReset = ()=>{\n        setIsActive(false);\n        setTime(0);\n        setInputValue(\"\");\n        setCounter(0);\n        setPenalty(0);\n        handleAlphabet();\n        setClassName(3);\n    };\n    const checkAlphabet = ()=>{\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.charAt(inputValue.length - 1)) !== alphabet) {\n            if (counter !== 0) {\n                setPenalty(penalty + 0.5);\n                handleStart();\n            }\n        } else {\n            handleAlphabet();\n            if (counter !== 0) {\n                handleStart();\n            }\n            setCounter(counter + 1);\n        }\n    };\n    const handleAlphabetInput = (e)=>{\n        e === null || e === void 0 ? void 0 : e.preventDefault();\n        setInputValue(e === null || e === void 0 ? void 0 : e.target.value.toUpperCase());\n    };\n    const displayResults = ()=>{\n        handlePauseResume();\n        if (time + penalty < result || result === 0) {\n            setAlphabet(t(\"game_success\"));\n            setResult(time + penalty);\n            localStorage.setItem(\"highscore\", JSON.stringify(time + penalty));\n            setClassName(1);\n        } else {\n            setAlphabet(t(\"game_failure\"));\n            setClassName(0);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const highscore = JSON.parse(localStorage.getItem(\"highscore\"));\n        if (highscore) {\n            setResult(highscore);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (counter <= 20) {\n            checkAlphabet();\n        } else {\n            displayResults();\n        }\n    }, [\n        inputValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval = null;\n        if (isActive && isPaused === false) {\n            interval = setInterval(()=>{\n                setTime((timer)=>timer + 10\n                );\n            }, 10);\n        } else {\n            clearInterval(interval);\n        }\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        isActive,\n        isPaused\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_AuthLayouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title_container\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: t(\"game_title\")\n                            }, void 0, false, {\n                                fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title_container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: t(\"game_head\")\n                        }, void 0, false, {\n                            fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"alphabet_container\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: `${classname === 1 ? \"green_success\" : classname === 3 ? \"alphabet\" : \"red_failure\"}`,\n                                children: alphabet\n                            }, void 0, false, {\n                                fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"timer_container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: `${t(\"game_timer\")} ${(\"0\" + Math.floor(time / 60000 % 60)).slice(-2)}\n             : ${(\"0\" + Math.floor(time / 1000 % 60)).slice(-2)}\n             : ${(\"0\" + time / 10 % 100).slice(-2)}s`\n                        }, void 0, false, {\n                            fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"result_container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: `${t(\"game_best_time\")} ${(\"0\" + Math.floor(result / 60000 % 60)).slice(-2)}\n             : ${(\"0\" + Math.floor(result / 1000 % 60)).slice(-2)}\n             : ${(\"0\" + result / 10 % 100).slice(-2)}s`\n                        }, void 0, false, {\n                            fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"custom_input\",\n                        type: \"text\",\n                        placeholder: \"Type here\",\n                        onChange: (e)=>handleAlphabetInput(e)\n                        ,\n                        value: inputValue\n                    }, void 0, false, {\n                        fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button_container\",\n                        role: \"button\",\n                        onClick: ()=>handleReset()\n                        ,\n                        \"aria-hidden\": \"true\",\n                        children: \"RESET\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/pages/home.js\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsR0FBRyxHQUFHaEMsSUFBSSxDQUFDK0IsS0FBSyxDQUFDLE1BQU8sR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7ZUFDckQsRUFBRSxDQUFDLEdBQUcsR0FBSSxNQUFPLEdBQUcsRUFBRSxHQUFJLEdBQUcsQ0FBRSxDQUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O3FDQUM1Qzs7Ozs7aUNBQ0Q7Ozs7Ozt5QkFDRjswQkFDTiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7a0NBQzlCLDhEQUFDTSxPQUFLO3dCQUNKTixTQUFTLEVBQUMsY0FBYzt3QkFDeEJPLElBQUksRUFBQyxNQUFNO3dCQUNYQyxXQUFXLEVBQUMsV0FBVzt3QkFDdkJDLFFBQVEsRUFBRSxDQUFDMUIsQ0FBQyxHQUFLRCxtQkFBbUIsQ0FBQ0MsQ0FBQyxDQUFDO3dCQUFBO3dCQUN2Q0csS0FBSyxFQUFFM0IsVUFBVTs7Ozs7aUNBQ2pCO2tDQUNGLDhEQUFDd0MsS0FBRzt3QkFDRkMsU0FBUyxFQUFDLGtCQUFrQjt3QkFDNUJVLElBQUksRUFBQyxRQUFRO3dCQUNiQyxPQUFPLEVBQUUsSUFBTWpDLFdBQVcsRUFBRTt3QkFBQTt3QkFDNUJrQyxhQUFXLEVBQUMsTUFBTTtrQ0FDbkIsT0FFRDs7Ozs7aUNBQU07Ozs7Ozt5QkFDRjs7Ozs7O2lCQUNLLENBQ2I7Q0FDSDtBQUVELGlFQUFlL0QsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZWdhbWUvLi9wYWdlcy9ob21lLmpzPzE2NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IEF1dGhMYXlvdXQgZnJvbSAnLi4vc3JjL2xheW91dHMvQXV0aExheW91dHMnO1xuaW1wb3J0ICcuLi91dGlscy9pMThuJztcblxuY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3BlbmFsdHksIHNldFBlbmFsdHldID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FscGhhYmV0LCBzZXRBbHBoYWJldF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKGFscGhhYmV0KTtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1BhdXNlZCwgc2V0SXNQYXVzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2xhc3NuYW1lLCBzZXRDbGFzc05hbWVdID0gdXNlU3RhdGUoMyk7XG5cbiAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgaWYgKGNvdW50ZXIgPCAyMCkge1xuICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gICAgICBzZXRJc1BhdXNlZChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhdXNlUmVzdW1lID0gKCkgPT4ge1xuICAgIHNldElzUGF1c2VkKCFpc1BhdXNlZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWxwaGFiZXQgPSAoKSA9PiB7XG4gICAgc2V0QWxwaGFiZXQoXG4gICAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAgIC50b1N0cmluZygzNilcbiAgICAgICAgLnJlcGxhY2UoL1teYS16XSsvZywgJycpXG4gICAgICAgIC5zdWJzdHIoMCwgMSlcbiAgICAgICAgLnRvVXBwZXJDYXNlKCksXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XG4gICAgc2V0VGltZSgwKTtcbiAgICBzZXRJbnB1dFZhbHVlKCcnKTtcbiAgICBzZXRDb3VudGVyKDApO1xuICAgIHNldFBlbmFsdHkoMCk7XG4gICAgaGFuZGxlQWxwaGFiZXQoKTtcbiAgICBzZXRDbGFzc05hbWUoMyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBbHBoYWJldCA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXRWYWx1ZT8uY2hhckF0KGlucHV0VmFsdWUubGVuZ3RoIC0gMSkgIT09IGFscGhhYmV0KSB7XG4gICAgICBpZiAoY291bnRlciAhPT0gMCkge1xuICAgICAgICBzZXRQZW5hbHR5KHBlbmFsdHkgKyAwLjUpO1xuICAgICAgICBoYW5kbGVTdGFydCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVBbHBoYWJldCgpO1xuICAgICAgaWYgKGNvdW50ZXIgIT09IDApIHtcbiAgICAgICAgaGFuZGxlU3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIHNldENvdW50ZXIoY291bnRlciArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbHBoYWJldElucHV0ID0gKGUpID0+IHtcbiAgICBlPy5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElucHV0VmFsdWUoZT8udGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlSZXN1bHRzID0gKCkgPT4ge1xuICAgIGhhbmRsZVBhdXNlUmVzdW1lKCk7XG4gICAgaWYgKHRpbWUgKyBwZW5hbHR5IDwgcmVzdWx0IHx8IHJlc3VsdCA9PT0gMCkge1xuICAgICAgc2V0QWxwaGFiZXQodCgnZ2FtZV9zdWNjZXNzJykpO1xuICAgICAgc2V0UmVzdWx0KHRpbWUgKyBwZW5hbHR5KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCBKU09OLnN0cmluZ2lmeSh0aW1lICsgcGVuYWx0eSkpO1xuICAgICAgc2V0Q2xhc3NOYW1lKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBbHBoYWJldCh0KCdnYW1lX2ZhaWx1cmUnKSk7XG4gICAgICBzZXRDbGFzc05hbWUoMCk7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhpZ2hzY29yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpKTtcbiAgICBpZiAoaGlnaHNjb3JlKSB7XG4gICAgICBzZXRSZXN1bHQoaGlnaHNjb3JlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb3VudGVyIDw9IDIwKSB7XG4gICAgICBjaGVja0FscGhhYmV0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlSZXN1bHRzKCk7XG4gICAgfVxuICB9LCBbaW5wdXRWYWx1ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVydmFsID0gbnVsbDtcblxuICAgIGlmIChpc0FjdGl2ZSAmJiBpc1BhdXNlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lKCh0aW1lcikgPT4gdGltZXIgKyAxMCk7XG4gICAgICB9LCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW2lzQWN0aXZlLCBpc1BhdXNlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfY29udGFpbmVyXCI+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8aDE+e3QoJ2dhbWVfdGl0bGUnKX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9jb250YWluZXJcIj5cbiAgICAgICAgICA8aDM+e3QoJ2dhbWVfaGVhZCcpfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFscGhhYmV0X2NvbnRhaW5lclwiPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7Y2xhc3NuYW1lID09PSAxID8gJ2dyZWVuX3N1Y2Nlc3MnIDogY2xhc3NuYW1lID09PSAzID8gJ2FscGhhYmV0JyA6ICdyZWRfZmFpbHVyZSd9YH0+e2FscGhhYmV0fTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIHtgJHt0KCdnYW1lX3RpbWVyJyl9ICR7KCcwJyArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX1cbiAgICAgICAgICAgICA6ICR7KCcwJyArIE1hdGguZmxvb3IoKHRpbWUgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpfVxuICAgICAgICAgICAgIDogJHsoJzAnICsgKCh0aW1lIC8gMTApICUgMTAwKSkuc2xpY2UoLTIpfXNgfVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdF9jb250YWluZXJcIj5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICB7YCR7dCgnZ2FtZV9iZXN0X3RpbWUnKX0gJHsoJzAnICsgTWF0aC5mbG9vcigocmVzdWx0IC8gNjAwMDApICUgNjApKS5zbGljZSgtMil9XG4gICAgICAgICAgICAgOiAkeygnMCcgKyBNYXRoLmZsb29yKChyZXN1bHQgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpfVxuICAgICAgICAgICAgIDogJHsoJzAnICsgKChyZXN1bHQgLyAxMCkgJSAxMDApKS5zbGljZSgtMil9c2B9XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbV9pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUFscGhhYmV0SW5wdXQoZSl9XG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25fY29udGFpbmVyXCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXNldCgpfVxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICBSRVNFVFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQXV0aExheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwiQXV0aExheW91dCIsImhvbWUiLCJ0IiwiY291bnRlciIsInNldENvdW50ZXIiLCJwZW5hbHR5Iiwic2V0UGVuYWx0eSIsInJlc3VsdCIsInNldFJlc3VsdCIsImFscGhhYmV0Iiwic2V0QWxwaGFiZXQiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJpc1BhdXNlZCIsInNldElzUGF1c2VkIiwidGltZSIsInNldFRpbWUiLCJjbGFzc25hbWUiLCJzZXRDbGFzc05hbWUiLCJoYW5kbGVTdGFydCIsImhhbmRsZVBhdXNlUmVzdW1lIiwiaGFuZGxlQWxwaGFiZXQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJoYW5kbGVSZXNldCIsImNoZWNrQWxwaGFiZXQiLCJjaGFyQXQiLCJsZW5ndGgiLCJoYW5kbGVBbHBoYWJldElucHV0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJkaXNwbGF5UmVzdWx0cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGlnaHNjb3JlIiwicGFyc2UiLCJnZXRJdGVtIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDMiLCJmbG9vciIsInNsaWNlIiwiaDQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicm9sZSIsIm9uQ2xpY2siLCJhcmlhLWhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ }),

/***/ "./src/layouts/AuthLayouts.js":
/*!************************************!*\
  !*** ./src/layouts/AuthLayouts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthLayout = ({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"privateAreaContent\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/src/layouts/AuthLayouts.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abhayrana/Desktop/project/typegameassignment/src/layouts/AuthLayouts.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthLayout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9BdXRoTGF5b3V0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDa0I7QUFFNUMsTUFBTUUsVUFBVSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLGlCQUM5Qiw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsb0JBQW9CO2tCQUNqQyw0RUFBQ0osc0RBQVM7c0JBQ1BFLFFBQVE7Ozs7O3FCQUNDOzs7OztpQkFDUjtBQUNOO0FBRUYsaUVBQWVELFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVnYW1lLy4vc3JjL2xheW91dHMvQXV0aExheW91dHMuanM/ZGJhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgQXV0aExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwcml2YXRlQXJlYUNvbnRlbnRcIj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJBdXRoTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/AuthLayouts.js\n");

/***/ }),

/***/ "./utils/i18n.js":
/*!***********************!*\
  !*** ./utils/i18n.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_multilanguage_en_translation_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/multilanguage/en/translation.json */ \"./public/multilanguage/en/translation.json\");\n/* harmony import */ var _public_multilanguage_jp_translation_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/multilanguage/jp/translation.json */ \"./public/multilanguage/jp/translation.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__]);\ni18next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// Importing translation files\n\n\n// Creating object with the variables of imported translation files\nconst resources = {\n    en: {\n        translation: _public_multilanguage_en_translation_json__WEBPACK_IMPORTED_MODULE_2__\n    },\n    jpn: {\n        translation: _public_multilanguage_jp_translation_json__WEBPACK_IMPORTED_MODULE_3__\n    }\n};\n// i18N Initialization\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n    resources,\n    lng: \"en\",\n    keySeparator: false,\n    interpolation: {\n        escapeValue: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9pMThuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQjtBQUNzQjtBQUVqRCw4QkFBOEI7QUFFMEM7QUFDQztBQUV6RSxtRUFBbUU7QUFDbkUsTUFBTUksU0FBUyxHQUFHO0lBQ2hCQyxFQUFFLEVBQUU7UUFDRkMsV0FBVyxFQUFFSixzRUFBYTtLQUMzQjtJQUNESyxHQUFHLEVBQUU7UUFDSEQsV0FBVyxFQUFFSCxzRUFBYztLQUM1QjtDQUNGO0FBRUQsc0JBQXNCO0FBQ3RCSCxtREFBUSxDQUFDQywyREFBZ0IsQ0FBQyxDQUFDUSxJQUFJLENBQUM7SUFDOUJMLFNBQVM7SUFDVE0sR0FBRyxFQUFFLElBQUk7SUFDVEMsWUFBWSxFQUFFLEtBQUs7SUFDbkJDLGFBQWEsRUFBRTtRQUNiQyxXQUFXLEVBQUUsS0FBSztLQUNuQjtDQUNGLENBQUMsQ0FBQztBQUVILGlFQUFlYiwrQ0FBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZWdhbWUvLi91dGlscy9pMThuLmpzPzRkYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbi8vIEltcG9ydGluZyB0cmFuc2xhdGlvbiBmaWxlc1xuXG5pbXBvcnQgdHJhbnNsYXRpb25FTiBmcm9tICcuLi9wdWJsaWMvbXVsdGlsYW5ndWFnZS9lbi90cmFuc2xhdGlvbi5qc29uJztcbmltcG9ydCB0cmFuc2xhdGlvbkpQTiBmcm9tICcuLi9wdWJsaWMvbXVsdGlsYW5ndWFnZS9qcC90cmFuc2xhdGlvbi5qc29uJztcblxuLy8gQ3JlYXRpbmcgb2JqZWN0IHdpdGggdGhlIHZhcmlhYmxlcyBvZiBpbXBvcnRlZCB0cmFuc2xhdGlvbiBmaWxlc1xuY29uc3QgcmVzb3VyY2VzID0ge1xuICBlbjoge1xuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkVOLFxuICB9LFxuICBqcG46IHtcbiAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb25KUE4sXG4gIH0sXG59O1xuXG4vLyBpMThOIEluaXRpYWxpemF0aW9uXG5pMThuLnVzZShpbml0UmVhY3RJMThuZXh0KS5pbml0KHtcbiAgcmVzb3VyY2VzLFxuICBsbmc6ICdlbicsIC8vIGRlZmF1bHQgbGFuZ3VhZ2VcbiAga2V5U2VwYXJhdG9yOiBmYWxzZSxcbiAgaW50ZXJwb2xhdGlvbjoge1xuICAgIGVzY2FwZVZhbHVlOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpMThuO1xuIl0sIm5hbWVzIjpbImkxOG4iLCJpbml0UmVhY3RJMThuZXh0IiwidHJhbnNsYXRpb25FTiIsInRyYW5zbGF0aW9uSlBOIiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsImpwbiIsInVzZSIsImluaXQiLCJsbmciLCJrZXlTZXBhcmF0b3IiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/i18n.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ "./public/multilanguage/en/translation.json":
/*!**************************************************!*\
  !*** ./public/multilanguage/en/translation.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"login_text":"login","game_title":"Type The Alphabet","game_head":"Typing game to see how fast you type. Timer starts when you do :)","game_timer":"Time: ","game_best_time":"my best time: ","game_success":"Success !","game_failure":"Failure !","reset_button":"Reset"}');

/***/ }),

/***/ "./public/multilanguage/jp/translation.json":
/*!**************************************************!*\
  !*** ./public/multilanguage/jp/translation.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"login_text":"ログインする","game_title":"アルファベットを入力します","game_head":"ゲームを入力して、入力する速度を確認します。あなたがするときタイマーは始まります:)","game_timer":"時間：","game_best_time":"私の最高の時間：","game_success":"成功 ！","game_failure":"失敗 ！","reset_button":"リセット"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home.js"));
module.exports = __webpack_exports__;

})();