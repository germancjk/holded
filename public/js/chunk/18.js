(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Sales.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Sales.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_4__);
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      userId: localStorage.getItem('user_id'),
      list: [],
      loading: true,
      currentPage: 1,
      perPage: 25,
      totalPages: 0,
      date: 1,
      range: null
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
        user_id: this.userId,
        currentPage: this.currentPage,
        perPage: this.perPage,
        date: this.date,
        range: this.range
      };
      axios.post("".concat(this.baseApiUrl, "/api/sales"), params).then(function (response) {
        _this.loading = false;
        _this.list = response['data']['results'];
        _this.totalPages = response['data']['totalPages'];
      });
    }
  },
  mounted: function mounted() {
    this.showError = false;
    this.find();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['baseApiUrl'])),
  watch: {
    currentPage: function currentPage() {
      this.find();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Sales.vue?vue&type=template&id=5f7d8472&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Sales.vue?vue&type=template&id=5f7d8472& ***!
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
  return _c("div", { staticClass: "container-fluid", attrs: { id: "board" } }, [
    _c("div", { staticClass: "container" }, [
      _c("small", [
        _c("ul", { staticClass: "list-inline-mb-0 pl-0" }, [
          _c(
            "li",
            { staticClass: "list-inline-item" },
            [
              _c("router-link", { attrs: { to: { name: "board" } } }, [
                _vm._v("Panel")
              ]),
              _vm._v(" >")
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "list-inline-item" }, [_vm._v("Ventas")])
        ])
      ]),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "lead" },
        [
          _vm._v("\n      Ventas\n      "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-sm btn-success float-right",
              attrs: { to: { name: "sales.new" } }
            },
            [_vm._v("+ Nueva Venta")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "form-group col-sm" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.date,
                          expression: "date"
                        }
                      ],
                      staticClass: "form-control",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.date = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1", selected: "" } }, [
                        _vm._v("Hoy")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [_vm._v("Ayer")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [
                        _vm._v("Mes Actual")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "4" } }, [
                        _vm._v("Mes Pasado")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "5" } }, [
                        _vm._v("Personalizado")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.date == 5
                  ? _c(
                      "div",
                      { staticClass: "form-group col-sm" },
                      [
                        _c("date-picker", {
                          attrs: {
                            range: "",
                            format: "DD/MM/YYYY",
                            "value-type": "YYYY-MM-DD",
                            placeholder: "Selecciona fechas..."
                          },
                          model: {
                            value: _vm.range,
                            callback: function($$v) {
                              _vm.range = $$v
                            },
                            expression: "range"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-sm" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", name: "button" },
                      on: {
                        click: function($event) {
                          return _vm.find()
                        }
                      }
                    },
                    [_vm._v("\n                  Buscar\n                ")]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
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
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.list, function(element, index) {
                        return _c("tr", [
                          _c("td", { attrs: { scope: "row" } }, [
                            _vm._v(_vm._s(element.store_name))
                          ]),
                          _vm._v(" "),
                          _c("td", { attrs: { scope: "row" } }, [
                            _vm._v(
                              _vm._s(
                                _vm._f("moment")(
                                  element.created_at,
                                  "DD/MM/YYYY HH:mm"
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "text-right",
                              attrs: { scope: "row" }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm._f("currency")(element.subtotal))
                              )
                            ]
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
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-sm btn-outline-info",
                                  attrs: {
                                    to: {
                                      name: "sale",
                                      params: { id: element.id }
                                    }
                                  }
                                },
                                [
                                  _c("font-awesome-icon", {
                                    attrs: { icon: "edit" }
                                  }),
                                  _vm._v(" Detalle\n                    ")
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("nav", [
                _c(
                  "ul",
                  { staticClass: "pagination" },
                  _vm._l(_vm.totalPages, function(page) {
                    return _c(
                      "li",
                      {
                        staticClass: "page-item",
                        class: { active: page === _vm.currentPage }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function($event) {
                                _vm.currentPage = page
                              }
                            }
                          },
                          [_vm._v(_vm._s(page))]
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
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
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tienda")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("SubTotal")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Total")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/panel/Sales.vue":
/*!********************************************!*\
  !*** ./resources/js/views/panel/Sales.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sales_vue_vue_type_template_id_5f7d8472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sales.vue?vue&type=template&id=5f7d8472& */ "./resources/js/views/panel/Sales.vue?vue&type=template&id=5f7d8472&");
/* harmony import */ var _Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sales.vue?vue&type=script&lang=js& */ "./resources/js/views/panel/Sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sales_vue_vue_type_template_id_5f7d8472___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sales_vue_vue_type_template_id_5f7d8472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/panel/Sales.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/panel/Sales.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/panel/Sales.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/panel/Sales.vue?vue&type=template&id=5f7d8472&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/panel/Sales.vue?vue&type=template&id=5f7d8472& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_5f7d8472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sales.vue?vue&type=template&id=5f7d8472& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Sales.vue?vue&type=template&id=5f7d8472&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_5f7d8472___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_5f7d8472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);