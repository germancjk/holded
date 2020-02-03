(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ItemNew.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ItemNew.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      name: '',
      supplier: 0,
      category: 0,
      cost: 0,
      tax: 0,
      sku: '',
      sale_price: 0,
      quantity: 0,
      submitName: 'Add',
      showError: false,
      messageError: []
    };
  },
  methods: _objectSpread({
    submit: function submit(e) {
      var _this = this;

      e.preventDefault();
      this.messageError = [];
      this.messageError.push('Errors below:');

      if (this.name.length === 0) {
        this.messageError.push('Name is empty');
      }

      if (this.category.length === 0) {
        this.messageError.push('Select Category');
      }

      if (this.supplier.length === 0) {
        this.messageError.push('Select Supplier');
      }

      if (this.cost.length === 0) {
        this.cost = 0;
      }

      if (this.tax.length === 0) {
        this.messageError.push('Select Tax');
      }

      var params = {
        name: this.name,
        category_id: this.category,
        supplier_id: this.supplier,
        cost: this.cost,
        tax_id: this.tax
      };

      if (this.messageError.length === 1) {
        axios.post('api/item', params).then(function (response) {
          _this.showError = false;
          _this.name = '';
          _this.category = 0;
          _this.supplier = 0;
          _this.cost = 0;
          _this.tax = 0;

          _this.getCategories();

          _this.getSuppliers();

          _this.getTaxes();
        });
      } else {
        console.log('Error', this.messageError.length);
        this.showError = true;
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getSuppliers', 'getTaxes', 'getCategories'])),
  mounted: function mounted() {
    this.showError = false;
    this.getCategories();
    this.getSuppliers();
    this.getTaxes();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['suppliers', 'taxes', 'categories']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ItemNew.vue?vue&type=template&id=694a7f3e&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ItemNew.vue?vue&type=template&id=694a7f3e& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _vm.showError
          ? _c(
              "div",
              { staticClass: "alert alert-danger" },
              _vm._l(_vm.messageError, function(element) {
                return _c("div", [_vm._v(_vm._s(element))])
              }),
              0
            )
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [_vm._v("Items")]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-12" }, [
                    _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.name,
                          expression: "name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "name",
                        "aria-describedby": "name",
                        required: "",
                        autofocus: ""
                      },
                      domProps: { value: _vm.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.name = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "small",
                      {
                        staticClass: "form-text text-muted",
                        attrs: { id: "name" }
                      },
                      [_vm._v("We'll never share your email with anyone else.")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c(
                    "div",
                    { staticClass: "form-group col-6" },
                    [
                      _c("label", { attrs: { for: "categories" } }, [
                        _vm._v("Category")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "name",
                          options: _vm.categories,
                          reduce: function(categories) {
                            return categories.id
                          }
                        },
                        model: {
                          value: _vm.category,
                          callback: function($$v) {
                            _vm.category = $$v
                          },
                          expression: "category"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-6" },
                    [
                      _c("label", { attrs: { for: "supplier" } }, [
                        _vm._v("Supplier")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "name",
                          options: _vm.suppliers,
                          reduce: function(suppliers) {
                            return suppliers.id
                          }
                        },
                        model: {
                          value: _vm.supplier,
                          callback: function($$v) {
                            _vm.supplier = $$v
                          },
                          expression: "supplier"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c(
                    "div",
                    { staticClass: "form-group col-12" },
                    [
                      _c("label", { attrs: { for: "tax" } }, [_vm._v("Tax")]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "name",
                          options: _vm.taxes,
                          reduce: function(taxes) {
                            return taxes.id
                          }
                        },
                        model: {
                          value: _vm.tax,
                          callback: function($$v) {
                            _vm.tax = $$v
                          },
                          expression: "tax"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-2 mb-2" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [_vm._v("Skus")]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-6" }, [
                    _c("label", { attrs: { for: "sku" } }, [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sku,
                          expression: "sku"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "sku",
                        "aria-describedby": "sku",
                        required: "",
                        autofocus: ""
                      },
                      domProps: { value: _vm.sku },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.sku = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "small",
                      {
                        staticClass: "form-text text-muted",
                        attrs: { id: "sku" }
                      },
                      [_vm._v("We'll never share your email with anyone else.")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-2" }, [
                    _c("label", { attrs: { for: "cost" } }, [_vm._v("Cost")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.cost,
                          expression: "cost"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "cost",
                        "aria-describedby": "cost",
                        value: "0"
                      },
                      domProps: { value: _vm.cost },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.cost = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-2" }, [
                    _c("label", { attrs: { for: "sale_price" } }, [
                      _vm._v("Sale Price")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sale_price,
                          expression: "sale_price"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "sale_price",
                        "aria-describedby": "sale_price",
                        value: "0"
                      },
                      domProps: { value: _vm.sale_price },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.sale_price = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-2" }, [
                    _c("label", { attrs: { for: "quantity" } }, [
                      _vm._v("Quantity")
                    ]),
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
                        value: "0"
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
                ]),
                _vm._v(" "),
                _vm._m(0)
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "button" },
            on: { click: _vm.submit }
          },
          [_vm._v(_vm._s(_vm.submitName))]
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
    return _c("div", { staticClass: "form-row" }, [
      _c(
        "button",
        { staticClass: "btn btn-success btn-sm", attrs: { type: "button" } },
        [_vm._v("+ Add New")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ItemNew.vue":
/*!****************************************!*\
  !*** ./resources/js/views/ItemNew.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemNew_vue_vue_type_template_id_694a7f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemNew.vue?vue&type=template&id=694a7f3e& */ "./resources/js/views/ItemNew.vue?vue&type=template&id=694a7f3e&");
/* harmony import */ var _ItemNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemNew.vue?vue&type=script&lang=js& */ "./resources/js/views/ItemNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemNew_vue_vue_type_template_id_694a7f3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemNew_vue_vue_type_template_id_694a7f3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ItemNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ItemNew.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/ItemNew.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ItemNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ItemNew.vue?vue&type=template&id=694a7f3e&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ItemNew.vue?vue&type=template&id=694a7f3e& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemNew_vue_vue_type_template_id_694a7f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemNew.vue?vue&type=template&id=694a7f3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ItemNew.vue?vue&type=template&id=694a7f3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemNew_vue_vue_type_template_id_694a7f3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemNew_vue_vue_type_template_id_694a7f3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);