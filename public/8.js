(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
      tax: 0,
      store: 0,
      skus: [{
        name: '',
        cost: 0,
        sale_price: 0,
        quantity: 0
      }],
      submitName: 'Add',
      showError: false,
      messageError: [],
      showAdd: false
    };
  },
  methods: _objectSpread({
    addSku: function addSku() {
      this.skus.push({
        name: '',
        cost: 0,
        sale_price: 0,
        quantity: 0
      });
    },
    submitStock: function submitStock(stock) {
      // submit stock
      this.skus.forEach(function (element) {
        axios.post('api/stock', stock).then(function (response) {
          console.log(response);
        });
      });
    },
    submitSku: function submitSku(item_id) {
      var _this = this;

      // submit new sku
      var total = this.skus.length;
      var quantity = 0;
      this.skus.forEach(function (element) {
        quantity++;

        if (element.name.length > 0) {
          var params = {
            item_id: item_id,
            name: element.name,
            cost: element.cost,
            sale_price: element.sale_price
          };
          axios.post('api/itemsku', params).then(function (response) {
            console.log(response);
            var stock = {
              item_sku_id: response.data.data.id,
              store_id: _this.store,
              quantity: element.quantity
            };

            _this.submitStock(stock); // clear when fits total of skus


            if (total == quantity) {
              _this.showAdd = true;

              _this.clearForm();
            }
          });
        }
      });
    },
    submit: function submit(e) {
      var _this2 = this;

      e.preventDefault();
      this.messageError = [];

      if (this.name.length === 0) {
        this.messageError.push('Name is empty');
      }

      if (this.category.length === 0) {
        this.messageError.push('Select Category');
      }

      if (this.supplier.length === 0) {
        this.messageError.push('Select Supplier');
      }

      if (this.tax.length === 0) {
        this.messageError.push('Select Tax');
      }

      if (this.store.length === 0) {
        this.messageError.push('Select Store');
      }

      if (this.skus[0].name.length === 0) {
        this.messageError.push('Please add at least one Sku');
      }

      var params = {
        name: this.name,
        category_id: this.category,
        supplier_id: this.supplier,
        tax_id: this.tax
      }; // add new item

      if (this.messageError.length === 0) {
        axios.post('api/item', params).then(function (response) {
          console.log(response);

          _this2.submitSku(response.data.data.id);
        });
      } else {
        this.messageError.unshift('Errors below:');
        console.log('Error', this.messageError.length);
        this.showError = true;
      }
    },
    clearForm: function clearForm() {
      // clean objects
      this.messageError = [];
      this.showError = false;
      this.showAdd = false;
      this.name = '';
      this.category = 0;
      this.supplier = 0;
      this.tax = 0;
      this.skus = [{
        name: '',
        cost: 0,
        sale_price: 0,
        quantity: 0
      }];
      this.getCategories();
      this.getSuppliers();
      this.getStores();
      this.getTaxes();
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getSuppliers', 'getTaxes', 'getCategories', 'getStores'])),
  mounted: function mounted() {
    this.showError = false;
    this.getCategories();
    this.getSuppliers();
    this.getStores();
    this.getTaxes();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['suppliers', 'taxes', 'categories', 'stores']))
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
          : _vm._e(),
        _vm._v(" "),
        _vm.showAdd
          ? _c("div", { staticClass: "alert alert-success" }, [
              _vm._v("\n        Item Added\n      ")
            ])
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
                    { staticClass: "form-group col-6" },
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-6" },
                    [
                      _c("label", { attrs: { for: "store" } }, [
                        _vm._v("Stores")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "name",
                          options: _vm.stores,
                          reduce: function(stores) {
                            return stores.id
                          }
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
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("h5", { staticClass: "card-title" }, [_vm._v("Skus")]),
                  _vm._v(" "),
                  _vm._l(_vm.skus, function(sku, index) {
                    return _c("div", { key: index, staticClass: "form-row" }, [
                      _c("div", { staticClass: "form-group col-6" }, [
                        _c("label", { attrs: { for: "sku" } }, [
                          _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: sku.name,
                              expression: "sku.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "skus[" + index + "][name]",
                            type: "text",
                            required: "",
                            autofocus: ""
                          },
                          domProps: { value: sku.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(sku, "name", $event.target.value)
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
                          [
                            _vm._v(
                              "We'll never share your email with anyone else."
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-2" }, [
                        _c("label", { attrs: { for: "cost" } }, [
                          _vm._v("Cost")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: sku.cost,
                              expression: "sku.cost"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "skus[" + index + "][cost]",
                            type: "text",
                            value: "0"
                          },
                          domProps: { value: sku.cost },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(sku, "cost", $event.target.value)
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
                              value: sku.sale_price,
                              expression: "sku.sale_price"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "skus[" + index + "][sale_price]",
                            type: "text",
                            value: "0"
                          },
                          domProps: { value: sku.sale_price },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(sku, "sale_price", $event.target.value)
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
                              value: sku.quantity,
                              expression: "sku.quantity"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "skus[" + index + "][quantity]",
                            type: "text",
                            value: "0"
                          },
                          domProps: { value: sku.quantity },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(sku, "quantity", $event.target.value)
                            }
                          }
                        })
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-sm",
                        attrs: { type: "button" },
                        on: { click: _vm.addSku }
                      },
                      [_vm._v("+ Add New")]
                    )
                  ])
                ],
                2
              )
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ItemNew.vue":
/*!****************************************!*\
  !*** ./resources/js/views/ItemNew.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemNew_vue_vue_type_template_id_694a7f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemNew.vue?vue&type=template&id=694a7f3e& */ "./resources/js/views/ItemNew.vue?vue&type=template&id=694a7f3e&");
/* harmony import */ var _ItemNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemNew.vue?vue&type=script&lang=js& */ "./resources/js/views/ItemNew.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ItemNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ItemNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! no static exports found */
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