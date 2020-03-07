(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Movements.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Movements.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      name: '',
      item: 0,
      from: 0,
      to: 0,
      cart: [],
      list: [],
      btnDisabled: false,
      submitName: 'Add'
    };
  },
  methods: _objectSpread({
    find: function find() {
      var _this = this;

      var params = {
        store_id: this.from,
        search: ''
      };
      axios.post("".concat(this.baseApiUrl, "/api/search"), params).then(function (response) {
        _this.list = response['data'];
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
    submit: function submit() {//
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
      this.stock(_item);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Movements.vue?vue&type=template&id=b70b94d6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Movements.vue?vue&type=template&id=b70b94d6& ***!
  \*******************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "card-title" }, [_vm._v("Movements")]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _vm._v("You can move items between stores with tracking.")
            ]),
            _vm._v(" "),
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
              _c(
                "div",
                { staticClass: "form-group col-6" },
                [
                  _vm._m(1),
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
                  }),
                  _vm._v(" "),
                  _c("small", [_vm._v("Test of name of a product")])
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
            _c("h5", { staticClass: "card-title" }, [_vm._v("To move")]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-hover" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.cart, function(sku, index) {
                  return _c("tr", { key: index }, [
                    _c("td", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(_vm.cart[index].name))
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { scope: "row" } }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: sku.quantity,
                            expression: "sku.quantity"
                          }
                        ],
                        staticClass: "form-control col-2 text-right",
                        attrs: {
                          name: "cart[" + index + "][quantity]",
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
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-right", attrs: { scope: "row" } },
                      [_vm._v(_vm._s(_vm.cart[index].available))]
                    ),
                    _vm._v(" "),
                    _vm._m(4, true)
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Available")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { scope: "row" } }, [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-outline-danger",
          attrs: { type: "button" }
        },
        [_vm._v("Borrar")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Movements.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Movements.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Movements_vue_vue_type_template_id_b70b94d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movements.vue?vue&type=template&id=b70b94d6& */ "./resources/js/views/Movements.vue?vue&type=template&id=b70b94d6&");
/* harmony import */ var _Movements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movements.vue?vue&type=script&lang=js& */ "./resources/js/views/Movements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Movements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Movements_vue_vue_type_template_id_b70b94d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Movements_vue_vue_type_template_id_b70b94d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Movements.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Movements.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Movements.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Movements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Movements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Movements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Movements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Movements.vue?vue&type=template&id=b70b94d6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Movements.vue?vue&type=template&id=b70b94d6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Movements_vue_vue_type_template_id_b70b94d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Movements.vue?vue&type=template&id=b70b94d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Movements.vue?vue&type=template&id=b70b94d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Movements_vue_vue_type_template_id_b70b94d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Movements_vue_vue_type_template_id_b70b94d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);