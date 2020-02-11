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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      name: '',
      from: 0,
      to: 0,
      skus: [],
      searchedData: {
        sku_id: 0,
        item_name: '',
        sku_name: '',
        barcode: '',
        quantity: 0
      },
      btnDisabled: false,
      submitName: 'Add'
    };
  },
  methods: _objectSpread({
    find: function find() {
      var _this = this;

      var token = localStorage.getItem('jwt');
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      axios.get('api/movements').then(function (response) {
        console.log(response);
        _this.searchedData = {
          sku_id: response['sku_id'],
          item_name: response['item_name'],
          sku_name: response['sku_name'],
          barcode: response['barcode'],
          quantity: response['quantity']
        };
      });
    },
    addItem: function addItem() {
      this.skus.push({
        sku_id: this.searchedData.sku_id,
        name: this.searchedData.item_name + ' ' + this.searchedData.sku_name,
        barcode: this.searchedData.barcode,
        quantity: this.searchedData.quantity
      });
    },
    submit: function submit() {//
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getStores'])),
  mounted: function mounted() {
    this.getStores();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['stores', 'baseApiUrl']))
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
              _c("div", { staticClass: "form-group col-12" }, [
                _vm._m(2),
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
                _c("small", [_vm._v("Test of name of a product")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-sm",
                  attrs: { type: "button" },
                  on: { click: _vm.addItem }
                },
                [_vm._v("Add Item")]
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
              _c("h5", { staticClass: "card-title" }, [_vm._v("To move")]),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._l(_vm.skus, function(sku, index) {
                return _c("div", { key: index, staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-6" }, [
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
                        autofocus: "",
                        placeholder: "SKU Name - must be unique"
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
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: sku.barcode,
                          expression: "sku.barcode"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "skus[" + index + "][barcode]",
                        type: "text",
                        value: "0"
                      },
                      domProps: { value: sku.barcode },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(sku, "barcode", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-3" }, [
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
              })
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
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "form-group col-6" }, [
        _c("label", { attrs: { for: "sku" } }, [
          _vm._v("Name "),
          _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-3" }, [
        _c("label", { attrs: { for: "cost" } }, [_vm._v("Barcode")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-3" }, [
        _c("label", { attrs: { for: "quantity" } }, [_vm._v("Quantity")])
      ])
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