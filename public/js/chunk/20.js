(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Stock.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Stock.vue?vue&type=script&lang=js& ***!
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
      list: [],
      search: null,
      store: null,
      id: 0,
      name: null,
      quantity: 0,
      loading: false
    };
  },
  methods: _objectSpread({
    find: function find() {
      var _this = this;

      this.loading = true;
      var token = localStorage.getItem('jwt');
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      var params = {
        user_id: this.userId,
        store_id: this.store,
        search: this.search
      };
      axios.post("".concat(this.baseApiUrl, "/api/stock/search"), params).then(function (response) {
        _this.loading = false;
        _this.list = response['data'];
      });
    },
    update: function update() {
      var params = {
        quantity: this.quantity
      };
      axios.patch("".concat(this.baseApiUrl, "/api/stock/").concat(this.id), params).then(function (response) {
        console.log(response);
      });
    },
    remove: function remove(id) {
      var _this2 = this;

      if (id > 0) {
        axios["delete"]("".concat(this.baseApiUrl, "/api/item/").concat(id)).then(function (response) {
          _this2.items();
        });
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getStores'])),
  mounted: function mounted() {
    this.showError = false;
    this.getStores();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['stores', 'baseApiUrl']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Stock.vue?vue&type=template&id=9fe7c508&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Stock.vue?vue&type=template&id=9fe7c508& ***!
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
          _c("li", { staticClass: "list-inline-item" }, [
            _vm._v("Control de Stock")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "lead" }, [_vm._v("Control de Stock")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "form-row" }, [
                _c(
                  "div",
                  { staticClass: "form-group col-sm" },
                  [
                    _c("v-select", {
                      staticClass: "newSelect",
                      attrs: {
                        label: "name",
                        options: _vm.stores,
                        reduce: function(stores) {
                          return stores.id
                        },
                        placeholder: "Selecciona tienda..."
                      },
                      model: {
                        value: _vm.store,
                        callback: function($$v) {
                          _vm.store = $$v
                        },
                        expression: "store"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-sm" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search,
                        expression: "search"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Buscar por nombre" },
                    domProps: { value: _vm.search },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.search = $event.target.value
                      }
                    }
                  })
                ]),
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
      _c("div", { staticClass: "row mt-5" }, [
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
                            _vm._v(_vm._s(element.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { attrs: { scope: "row" } }, [
                            _vm._v(_vm._s(element.store_name))
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
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-outline-primary",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "modal",
                                    "data-target": "#exampleModal"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.id = element.id
                                      _vm.name = element.name
                                      _vm.quantity = element.quantity
                                      _vm.store_id = element.store_id
                                    }
                                  }
                                },
                                [
                                  _c("font-awesome-icon", {
                                    attrs: { icon: "edit" }
                                  }),
                                  _vm._v(" Editar\n                    ")
                                ],
                                1
                              )
                            ]
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
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group lead" }, [
                    _c("label", [_vm._v(_vm._s(_vm.name))])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-6" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.quantity,
                          expression: "quantity"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "quantity",
                        "aria-describedby": "quantity",
                        required: "",
                        autofocus: ""
                      },
                      domProps: { value: _vm.quantity },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.quantity = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Cerrar")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.update()
                      }
                    }
                  },
                  [_vm._v("Actualizar")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tienda")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Cantidad")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Actualizar Cantidad")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Cerrar"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "quantity" } }, [
      _vm._v("Cantidad "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/panel/Stock.vue":
/*!********************************************!*\
  !*** ./resources/js/views/panel/Stock.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stock_vue_vue_type_template_id_9fe7c508___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stock.vue?vue&type=template&id=9fe7c508& */ "./resources/js/views/panel/Stock.vue?vue&type=template&id=9fe7c508&");
/* harmony import */ var _Stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stock.vue?vue&type=script&lang=js& */ "./resources/js/views/panel/Stock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Stock_vue_vue_type_template_id_9fe7c508___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Stock_vue_vue_type_template_id_9fe7c508___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/panel/Stock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/panel/Stock.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/panel/Stock.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Stock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Stock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/panel/Stock.vue?vue&type=template&id=9fe7c508&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/panel/Stock.vue?vue&type=template&id=9fe7c508& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_template_id_9fe7c508___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Stock.vue?vue&type=template&id=9fe7c508& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Stock.vue?vue&type=template&id=9fe7c508&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_template_id_9fe7c508___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_template_id_9fe7c508___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);