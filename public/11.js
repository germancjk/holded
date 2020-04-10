(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Sale.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Sale.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      userId: localStorage.getItem('user_id'),
      id: this.$route.params.id,
      item: [],
      list: [],
      loading: true
    };
  },
  methods: {
    find: function find() {
      var _this = this;

      this.loading = true;
      var token = localStorage.getItem('jwt');
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      var params = {
        id: this.id,
        user_id: this.userId
      };
      axios.post("".concat(this.baseApiUrl, "/api/sale"), params).then(function (response) {
        _this.loading = false;
        _this.item = response['data'][0];
      });
    },
    items: function items() {
      var _this2 = this;

      this.loading = true;
      var token = localStorage.getItem('jwt');
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      var params = {
        id: this.id,
        user_id: this.userId
      };
      axios.post("".concat(this.baseApiUrl, "/api/sale/items"), params).then(function (response) {
        _this2.loading = false;
        _this2.list = response['data'];
      });
    },
    remove: function remove(id) {
      if (id > 0) {// axios.delete(`${this.baseApiUrl}/api/item/${id}`).then(response => {
        //   console.log(response)
        //   this.items()
        // })
      }
    }
  },
  mounted: function mounted() {
    this.showError = false;
    this.find();
    this.items();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['baseApiUrl']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Sale.vue?vue&type=template&id=5dccf6d1&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Sale.vue?vue&type=template&id=5dccf6d1& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container board" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("p", { staticClass: "lead" }, [_vm._v("Sale ")]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-2" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("ul", { staticClass: "list-group shadow-sm" }, [
          _c("li", { staticClass: "list-group-item" }, [
            _vm._v("Store: "),
            _c("span", { staticClass: "float-right" }, [
              _vm._v(_vm._s(_vm.item.store_name))
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _vm._v("Date: "),
            _c("span", { staticClass: "float-right" }, [
              _vm._v(
                _vm._s(
                  _vm._f("moment")(_vm.item.created_at, "DD/MM/YYYY HH:mm")
                )
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _vm._v("Taxes: "),
            _c("span", { staticClass: "float-right" }, [
              _vm._v(_vm._s(_vm._f("currency")(_vm.item.taxes)))
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _vm._v("SubTotal: "),
            _c("span", { staticClass: "float-right" }, [
              _vm._v(_vm._s(_vm._f("currency")(_vm.item.subtotal)))
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _vm._v("Total: "),
            _c("span", { staticClass: "float-right" }, [
              _vm._v(_vm._s(_vm._f("currency")(_vm.item.total)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("ul", { staticClass: "list-group shadow-sm" }, [
          _c("li", { staticClass: "list-group-item" }, [
            _vm._v("Cost: "),
            _c("span", { staticClass: "float-right" }, [
              _vm._v(_vm._s(_vm._f("currency")(_vm.item.cost)))
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _vm._v("Profit: "),
            _c("span", { staticClass: "float-right" }, [
              _vm._v(_vm._s(_vm._f("currency")(_vm.item.profit)))
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "lead mt-4" }, [_vm._v("Sale Items ")]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-2" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _vm.loading
              ? _c(
                  "p",
                  { staticClass: "text-center" },
                  [
                    _c("font-awesome-icon", {
                      attrs: { icon: "spinner", spin: "" }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.loading
              ? _c("table", { staticClass: "table table-hover" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.list, function(element, index) {
                      return _c("tr", [
                        _c("td", { attrs: { scope: "row" } }, [
                          _vm._v(_vm._s(element.name))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            attrs: { scope: "row" }
                          },
                          [_vm._v(_vm._s(element.quantity))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            attrs: { scope: "row" }
                          },
                          [_vm._v(_vm._s(element.discount) + "%")]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            attrs: { scope: "row" }
                          },
                          [_vm._v(_vm._s(_vm._f("currency")(element.cost)))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            attrs: { scope: "row" }
                          },
                          [_vm._v(_vm._s(_vm._f("currency")(element.taxes)))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            attrs: { scope: "row" }
                          },
                          [_vm._v(_vm._s(_vm._f("currency")(element.subtotal)))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            attrs: { scope: "row" }
                          },
                          [_vm._v(_vm._s(_vm._f("currency")(element.total)))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            attrs: { scope: "row" }
                          },
                          [_vm._v(_vm._s(_vm._f("currency")(element.profit)))]
                        )
                      ])
                    }),
                    0
                  )
                ])
              : _vm._e()
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
    return _c("small", [
      _c("ul", { staticClass: "list-inline-mb-0 pl-0" }, [
        _c("li", { staticClass: "list-inline-item" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Board")]),
          _vm._v(" >")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Sales")]),
          _vm._v(" >")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [_vm._v("Sale")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Item")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Quantity")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Discount")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Cost")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Taxes")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("SubTotal")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Total")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Profit")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/panel/Sale.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/panel/Sale.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sale_vue_vue_type_template_id_5dccf6d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sale.vue?vue&type=template&id=5dccf6d1& */ "./resources/js/views/panel/Sale.vue?vue&type=template&id=5dccf6d1&");
/* harmony import */ var _Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sale.vue?vue&type=script&lang=js& */ "./resources/js/views/panel/Sale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sale_vue_vue_type_template_id_5dccf6d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sale_vue_vue_type_template_id_5dccf6d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/panel/Sale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/panel/Sale.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/panel/Sale.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Sale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/panel/Sale.vue?vue&type=template&id=5dccf6d1&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/panel/Sale.vue?vue&type=template&id=5dccf6d1& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_template_id_5dccf6d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sale.vue?vue&type=template&id=5dccf6d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Sale.vue?vue&type=template&id=5dccf6d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_template_id_5dccf6d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_template_id_5dccf6d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);