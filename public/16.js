(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Supplier.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Supplier.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
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
    return {
      userId: localStorage.getItem('user_id'),
      name: '',
      address: '',
      edit: false,
      id: null,
      submitName: 'Add',
      showError: false,
      messageError: ''
    };
  },
  methods: _objectSpread({
    handleSubmit: function handleSubmit(e) {
      var _this = this;

      e.preventDefault();

      if (this.name.length > 0) {
        if (this.edit) {
          axios.patch("/api/supplier/".concat(this.id), {
            user_id: this.userId,
            name: this.name,
            address: this.address
          }).then(function (response) {
            _this.name = '';
            _this.address = '';
            _this.submitName = 'Add';

            _this.getSuppliers();
          });
        } else {
          axios.post('/api/supplier', {
            user_id: this.userId,
            name: this.name,
            address: this.address
          }).then(function (response) {
            _this.name = '';
            _this.address = '';

            _this.getSuppliers();
          });
        }
      } else {
        this.showError = true;
        this.messageError = 'Error chars length';
      }
    },
    update: function update(id) {
      var _this2 = this;

      this.edit = true;
      axios.get("/api/supplier/".concat(id)).then(function (response) {
        _this2.submitName = 'Update';
        _this2.id = id;
        _this2.name = response.data.name;
        _this2.address = response.data.address;
      });
    },
    remove: function remove(id) {
      var _this3 = this;

      if (id > 0) {
        axios["delete"]("/api/supplier/".concat(id), {
          user_id: this.userId
        }).then(function (response) {
          _this3.getSuppliers();
        });
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getSuppliers'])),
  mounted: function mounted() {
    this.showError = false;
    this.getSuppliers();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['suppliers']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Supplier.vue?vue&type=template&id=5e2fdcd6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Supplier.vue?vue&type=template&id=5e2fdcd6& ***!
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
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("p", { staticClass: "lead" }, [_vm._v("Suppliers")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _vm.showError
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _vm._v("\n        " + _vm._s(_vm.messageError) + "\n      ")
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.handleSubmit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "col-12" }, [
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
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("label", { attrs: { for: "address" } }, [
                      _vm._v("Address")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.address,
                          expression: "address"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "address",
                        "aria-describedby": "address",
                        required: ""
                      },
                      domProps: { value: _vm.address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.address = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.handleSubmit }
                  },
                  [_vm._v(_vm._s(_vm.submitName))]
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table table-hover" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.suppliers, function(element, index) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(element.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(element.address))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-outline-info",
                          attrs: { type: "button", name: "button" },
                          on: {
                            click: function($event) {
                              return _vm.update(element.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", { attrs: { icon: "edit" } }),
                          _vm._v(" Edit\n                    ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-outline-danger",
                          attrs: { type: "button", name: "button" },
                          on: {
                            click: function($event) {
                              return _vm.remove(element.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", { attrs: { icon: "trash" } }),
                          _vm._v(" Remove\n                    ")
                        ],
                        1
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
          _c("a", { attrs: { href: "#" } }, [_vm._v("Tools")]),
          _vm._v(" >")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [_vm._v("Suppliers")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/panel/Supplier.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/panel/Supplier.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Supplier_vue_vue_type_template_id_5e2fdcd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Supplier.vue?vue&type=template&id=5e2fdcd6& */ "./resources/js/views/panel/Supplier.vue?vue&type=template&id=5e2fdcd6&");
/* harmony import */ var _Supplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Supplier.vue?vue&type=script&lang=js& */ "./resources/js/views/panel/Supplier.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Supplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Supplier_vue_vue_type_template_id_5e2fdcd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Supplier_vue_vue_type_template_id_5e2fdcd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/panel/Supplier.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/panel/Supplier.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/panel/Supplier.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Supplier.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Supplier.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/panel/Supplier.vue?vue&type=template&id=5e2fdcd6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/panel/Supplier.vue?vue&type=template&id=5e2fdcd6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_template_id_5e2fdcd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Supplier.vue?vue&type=template&id=5e2fdcd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Supplier.vue?vue&type=template&id=5e2fdcd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_template_id_5e2fdcd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_template_id_5e2fdcd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);