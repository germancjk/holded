(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/MovementNew.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/MovementNew.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
      to: 0,
      comments: '',
      cart: [],
      list: [],
      btnDisabled: false,
      submitName: 'Move',
      done: false
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
    stock: function stock(item) {
      var _this2 = this;

      var params = {
        item_sku_id: item.sku_id,
        store_id: this.from
      };
      axios.post("".concat(this.baseApiUrl, "/api/stock/item"), params).then(function (response) {
        // add to cart
        _this2.addCart({
          sku_id: item.sku_id,
          name: item.name,
          quantity: 0,
          available: response['data'][0].quantity
        });
      });
    },
    addCart: function addCart(item) {
      this.cart.push(item);
    },
    deleteItem: function deleteItem(index) {
      this.cart.splice(index, 1);
      this.item = 0;
    },
    submit: function submit() {
      var _this3 = this;

      this.btnDisabled = true;
      var params = {
        user_id: this.userId,
        from: this.from,
        to: this.to,
        cart: this.cart,
        comments: this.comments
      };
      axios.post("".concat(this.baseApiUrl, "/api/movement"), params).then(function (response) {
        if (response.data.status == true) {
          _this3.clean();
        }
      });
    },
    clean: function clean() {
      this.done = true;
      this.name = '';
      this.item = 0;
      this.from = 0;
      this.to = 0;
      this.comments = '';
      this.cart = [];
      this.list = [];
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getStores'])),
  mounted: function mounted() {
    this.getStores();
    this.find();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['stores', 'baseApiUrl'])),
  watch: {
    item: function item(_item) {
      // search availability
      if (_item !== undefined) {
        if (this.inCart(_item) === undefined) {
          if (_item != 0) {
            this.stock(_item);
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/MovementNew.vue?vue&type=template&id=6cc02652&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/MovementNew.vue?vue&type=template&id=6cc02652& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm.done
      ? _c(
          "div",
          { staticClass: "alert alert-success", attrs: { role: "alert" } },
          [_vm._v("\n    Movement done!\n  ")]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card shadow-sm" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                { staticClass: "form-group col-6" },
                [
                  _vm._m(2),
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
              _c(
                "div",
                { staticClass: "form-group col-6" },
                [
                  _vm._m(3),
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
                      value: _vm.to,
                      callback: function($$v) {
                        _vm.to = $$v
                      },
                      expression: "to"
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
                  _vm._m(4),
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
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "form-group col-12" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.comments,
                      expression: "comments"
                    }
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.comments },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.comments = $event.target.value
                    }
                  }
                })
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "lead mt-2" }, [_vm._v("Items to move")]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-2 mb-2" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table table-hover" }, [
              _vm._m(6),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.cart, function(row, index) {
                  return _c("tr", { key: index }, [
                    _c("td", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(row.name))
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-right", attrs: { scope: "row" } },
                      [_vm._v(_vm._s(row.available) + " ")]
                    ),
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
                        attrs: { type: "number", min: "1", max: row.available },
                        domProps: { value: row.quantity },
                        on: {
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
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
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
          _c("a", { attrs: { href: "#" } }, [_vm._v("Stock")]),
          _vm._v(" >")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [_vm._v("Movements")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "lead" }, [
      _vm._v("Movements "),
      _c("i", [_vm._v("You can move items between stores with tracking")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "tax" } }, [
      _vm._v("From "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "store" } }, [
      _vm._v("To "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _vm._v("Search by: Name, Name + SKU or Barcode "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "comments" } }, [
      _vm._v("Comments "),
      _c("i", [_vm._v("(optional)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Available")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/panel/MovementNew.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/panel/MovementNew.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovementNew_vue_vue_type_template_id_6cc02652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovementNew.vue?vue&type=template&id=6cc02652& */ "./resources/js/views/panel/MovementNew.vue?vue&type=template&id=6cc02652&");
/* harmony import */ var _MovementNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovementNew.vue?vue&type=script&lang=js& */ "./resources/js/views/panel/MovementNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MovementNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovementNew_vue_vue_type_template_id_6cc02652___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovementNew_vue_vue_type_template_id_6cc02652___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/panel/MovementNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/panel/MovementNew.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/panel/MovementNew.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovementNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovementNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/MovementNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovementNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/panel/MovementNew.vue?vue&type=template&id=6cc02652&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/panel/MovementNew.vue?vue&type=template&id=6cc02652& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovementNew_vue_vue_type_template_id_6cc02652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovementNew.vue?vue&type=template&id=6cc02652& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/MovementNew.vue?vue&type=template&id=6cc02652&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovementNew_vue_vue_type_template_id_6cc02652___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovementNew_vue_vue_type_template_id_6cc02652___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);