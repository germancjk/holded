(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/SalesNew.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/SalesNew.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      name: '',
      item: 0,
      from: 0,
      quantity: 1,
      discount: 0,
      list: [],
      cart: [],
      btnDisabled: false,
      submitName: 'Hecho',
      done: false,
      showError: false,
      messageError: []
    };
  },
  methods: _objectSpread({
    find: function find() {
      var _this = this;

      var params = {
        user_id: this.userId,
        store_id: this.from,
        search: ''
      };
      axios.post("".concat(this.baseApiUrl, "/api/search"), params).then(function (response) {
        _this.list = response['data'];
      });
    },
    inCart: function inCart(item) {
      return this.cart.find(function (line) {
        return line.sku_id === item.sku_id;
      });
    },
    addCart: function addCart(item) {
      var total = this.quantity * item.sku_sale_price;
      var taxes = total * item.percent / 100;
      var profit = total - taxes - item.cost * this.quantity;
      var cartCost = item.cost * this.quantity;
      this.cart.push({
        sku_id: item.sku_id,
        name: item.name,
        cost: item.cost,
        percent: item.percent,
        price: item.sku_sale_price,
        priceCart: item.sku_sale_price,
        cartCost: cartCost,
        quantity: this.quantity,
        discount: this.discount,
        taxes: taxes,
        total: total,
        profit: profit
      });
      this.item = 0;
    },
    updateQuantity: function updateQuantity(quantity, index) {
      var total = this.cart[index].price * quantity;
      var taxes = total * this.cart[index].percent / 100;
      var profit = total - taxes - this.cart[index].cost * this.cart[index].quantity;
      this.cart[index].total = total;
      this.cart[index].taxes = taxes;
      this.cart[index].profit = profit;
      this.cart[index].cartCost = this.cart[index].quantity * this.cart[index].cost;
    },
    updateDiscount: function updateDiscount(discount, index) {
      var percent = discount / 100 * this.cart[index].price;
      var price = this.cart[index].price - percent;
      var total = price * this.cart[index].quantity;
      var taxes = total * this.cart[index].percent / 100;
      var profit = total - taxes - this.cart[index].cost * this.cart[index].quantity;
      this.cart[index].priceCart = price;
      this.cart[index].total = total;
      this.cart[index].taxes = taxes;
      this.cart[index].profit = profit;
      this.cart[index].cartCost = this.cart[index].quantity * this.cart[index].cost;
    },
    updateTotal: function updateTotal(total, index) {
      this.cart[index].total = total;
      this.cart[index].discount = 0;
    },
    deleteItem: function deleteItem(index) {
      this.cart.splice(index, 1);
      this.item = 0;
    },
    submit: function submit() {
      var _this2 = this;

      this.btnDisabled = true;
      this.messageError = [];

      if (this.from === 0) {
        this.messageError.push('Selecciona desde');
      }

      if (this.cart.length === 0) {
        this.messageError.push('Agrega al menos un artículo');
      }

      if (this.messageError.length === 0) {
        var params = {
          user_id: this.userId,
          from: this.from,
          cart: this.cart,
          taxes: this.cartTaxes,
          total: this.cartTotal,
          profit: this.cartProfit,
          cost: this.cartCost
        };
        axios.post("".concat(this.baseApiUrl, "/api/sales.new"), params).then(function (response) {
          if (response.data.status == true) {
            _this2.clean();
          }
        });
      } else {
        this.messageError.unshift('Chequea los siguientes errores:');
        this.showError = true;
        this.btnDisabled = false;
      }
    },
    clean: function clean() {
      this.done = true;
      this.showError = false;
      this.name = '';
      this.item = 0;
      this.from = 0;
      this.cart = [];
      this.list = [];
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getStores'])),
  mounted: function mounted() {
    this.getStores();
    this.find();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['stores', 'baseApiUrl']), {
    cartTotal: function cartTotal() {
      var items = this.cart;
      var suma = 0;

      if (items.length > 0) {
        items.forEach(function (element) {
          return suma += element.total;
        });
      }

      return suma.toFixed(2);
    },
    cartTaxes: function cartTaxes() {
      var items = this.cart;
      var suma = 0;
      items.forEach(function (element) {
        return suma += element.taxes;
      });
      return suma.toFixed(2);
    },
    cartProfit: function cartProfit() {
      var items = this.cart;
      var suma = 0;
      items.forEach(function (element) {
        return suma += element.profit;
      });
      return suma.toFixed(2);
    },
    cartCost: function cartCost() {
      var items = this.cart;
      var suma = 0;
      items.forEach(function (element) {
        return suma += element.cartCost;
      });
      return suma.toFixed(2);
    }
  }),
  watch: {
    item: function item(_item) {
      // search availability
      if (_item !== undefined) {
        if (this.inCart(_item) === undefined) {
          if (_item != 0) {
            this.addCart(_item);
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/SalesNew.vue?vue&type=template&id=613c6804&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/SalesNew.vue?vue&type=template&id=613c6804& ***!
  \************************************************************************************************************************************************************************************************************/
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
          _c(
            "li",
            { staticClass: "list-inline-item" },
            [
              _c("router-link", { attrs: { to: { name: "sales" } } }, [
                _vm._v("Venta")
              ]),
              _vm._v(" >")
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "list-inline-item" }, [_vm._v("Nueva Venta")])
        ])
      ]),
      _vm._v(" "),
      _vm.done
        ? _c(
            "div",
            { staticClass: "alert alert-success", attrs: { role: "alert" } },
            [_vm._v("\n      Sale done!\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "form-row" }, [
                _c(
                  "div",
                  { staticClass: "form-group col-6" },
                  [
                    _vm._m(0),
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
                        value: _vm.from,
                        callback: function($$v) {
                          _vm.from = $$v
                        },
                        expression: "from"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-3" }, [
                  _vm._m(1),
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
                    attrs: { type: "text" },
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-3" }, [
                  _c("label", [_vm._v("Descuento %")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.discount,
                        expression: "discount"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.discount },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.discount = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c(
                  "div",
                  { staticClass: "form-group col-12" },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "name", options: _vm.list },
                      model: {
                        value: _vm.item,
                        callback: function($$v) {
                          _vm.item = $$v
                        },
                        expression: "item"
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
      _c("p", { staticClass: "lead mt-2" }, [_vm._v("Cesta")]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-2 mb-2" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("table", { staticClass: "table table-hover" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.cart, function(row, index) {
                    return _c("tr", { key: index }, [
                      _c("td", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(row.name))
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { scope: "row" } }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: row.discount,
                              expression: "row.discount"
                            }
                          ],
                          staticClass:
                            "form-control col-sm-6 text-right float-right",
                          attrs: { type: "text", max: "100" },
                          domProps: { value: row.discount },
                          on: {
                            keyup: function($event) {
                              return _vm.updateDiscount(row.discount, index)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(row, "discount", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { scope: "row" } }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: row.quantity,
                              expression: "row.quantity"
                            }
                          ],
                          staticClass:
                            "form-control col-sm-6 text-right float-right",
                          attrs: { type: "text", min: "1" },
                          domProps: { value: row.quantity },
                          on: {
                            keyup: function($event) {
                              return _vm.updateQuantity(row.quantity, index)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(row, "quantity", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { scope: "row" } }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: row.total,
                              expression: "row.total"
                            }
                          ],
                          staticClass:
                            "form-control col-sm-6 text-right float-right",
                          attrs: { type: "text", min: "1" },
                          domProps: { value: row.total },
                          on: {
                            keyup: function($event) {
                              return _vm.updateTotal(row.total, index)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(row, "total", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { scope: "row" } }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-sm btn-outline-danger float-right",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.deleteItem(index)
                              }
                            }
                          },
                          [_vm._v("Borrar")]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table table-hover" }, [
                _c("tbody", [
                  _c("tr", { staticClass: "text-right" }, [
                    _c("td", [
                      _vm._v("Ganancia: " + _vm._s(_vm.cartProfit) + " €")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "text-right" }, [
                    _c("td", [
                      _vm._v("Impuestos: " + _vm._s(_vm.cartTaxes) + " €")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "text-right" }, [
                    _c("td", [
                      _c("strong", [
                        _vm._v("Total: " + _vm._s(_vm.cartTotal) + " €")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "button", disabled: _vm.btnDisabled },
            on: { click: _vm.submit }
          },
          [_vm._v(_vm._s(_vm.submitName))]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "tax" } }, [
      _vm._v("Tienda "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Cantidad "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _vm._v("Buscar por: Nombre, Nombre + SKU "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Descuento %")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Total")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/panel/SalesNew.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/panel/SalesNew.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalesNew_vue_vue_type_template_id_613c6804___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesNew.vue?vue&type=template&id=613c6804& */ "./resources/js/views/panel/SalesNew.vue?vue&type=template&id=613c6804&");
/* harmony import */ var _SalesNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesNew.vue?vue&type=script&lang=js& */ "./resources/js/views/panel/SalesNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SalesNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesNew_vue_vue_type_template_id_613c6804___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalesNew_vue_vue_type_template_id_613c6804___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/panel/SalesNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/panel/SalesNew.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/panel/SalesNew.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/SalesNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/panel/SalesNew.vue?vue&type=template&id=613c6804&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/panel/SalesNew.vue?vue&type=template&id=613c6804& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesNew_vue_vue_type_template_id_613c6804___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesNew.vue?vue&type=template&id=613c6804& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/SalesNew.vue?vue&type=template&id=613c6804&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesNew_vue_vue_type_template_id_613c6804___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesNew_vue_vue_type_template_id_613c6804___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);