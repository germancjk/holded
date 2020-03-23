(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Board.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Board.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {//
  },
  data: function data() {
    return {//
    };
  },
  methods: {//
  },
  mounted: function mounted() {//
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['baseApiUrl']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Board.vue?vue&type=template&id=04b9ad4c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Board.vue?vue&type=template&id=04b9ad4c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("p", { staticClass: "lead" }, [_vm._v("Board")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-4 mb-4" }, [
        _c("div", { staticClass: "card shadow-sm" }, [
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [_vm._v("Stock")]),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "list-group-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-dark",
                    attrs: { to: { name: "items" } }
                  },
                  [_vm._v("Items")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _vm._v("+ New Movement")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [_vm._v("+ New Item")])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-4 mb-4" }, [
        _c("div", { staticClass: "card shadow-sm" }, [
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _c("li", { staticClass: "list-group-item" }, [
              _c("h5", { staticClass: "my-0" }, [_vm._v("Today")])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _vm._v("Sales "),
              _c("strong", { staticClass: "float-right" }, [
                _vm._v("12.000,00 €")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item text-success" }, [
              _vm._v("Profit "),
              _c("strong", { staticClass: "float-right" }, [
                _vm._v("8.540,00 €")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-4 mb-4" }, [
        _c("div", { staticClass: "card shadow-sm" }, [
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _c("li", { staticClass: "list-group-item" }, [
              _c("h5", { staticClass: "my-0" }, [_vm._v("This Month")])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _vm._v("Sales "),
              _c("strong", { staticClass: "float-right" }, [
                _vm._v("121.000,00 €")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item text-success" }, [
              _vm._v("Profit "),
              _c("strong", { staticClass: "float-right" }, [
                _vm._v("46.540,00 €")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-4 mb-4" }, [
        _c("div", { staticClass: "card text-white bg-primary shadow-sm" }, [
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _c("li", { staticClass: "list-group-item text-white bg-primary" }, [
              _c("h5", { staticClass: "my-0" }, [_vm._v("Hi, Germán!")])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item text-white bg-primary" }, [
              _vm._v("My Profile")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item text-white bg-primary" }, [
              _vm._v("Dapibus ac facilisis in")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-8 mb-4" }, [
      _c("div", { staticClass: "card shadow-sm" }, [
        _c("div", { staticClass: "card-body" }, [
          _vm._v(
            "\n          monthly stats\n          https://vue-chartjs.org/guide/#introduction\n        "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "list-group-item" }, [
      _c("h5", { staticClass: "my-0" }, [_vm._v("Quick Links")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/panel/Board.vue":
/*!********************************************!*\
  !*** ./resources/js/views/panel/Board.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board_vue_vue_type_template_id_04b9ad4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.vue?vue&type=template&id=04b9ad4c& */ "./resources/js/views/panel/Board.vue?vue&type=template&id=04b9ad4c&");
/* harmony import */ var _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.vue?vue&type=script&lang=js& */ "./resources/js/views/panel/Board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Board_vue_vue_type_template_id_04b9ad4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Board_vue_vue_type_template_id_04b9ad4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/panel/Board.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/panel/Board.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/panel/Board.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/panel/Board.vue?vue&type=template&id=04b9ad4c&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/panel/Board.vue?vue&type=template&id=04b9ad4c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_04b9ad4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=template&id=04b9ad4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Board.vue?vue&type=template&id=04b9ad4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_04b9ad4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_04b9ad4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);