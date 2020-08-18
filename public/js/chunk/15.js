(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
      email: '',
      business_name: '',
      business_ruc: '',
      business_address: '',
      password: '',
      new_password: '',
      new_password_confirmation: '',
      submitName: 'Actualizar',
      showError: false,
      showSuccessUpdate: false,
      showErrorPassword: false,
      messageSuccessUpdate: 'Actualizado!',
      showSuccessUpdatePassword: false,
      messageSuccessUpdatePassword: 'Actualizado!'
    };
  },
  methods: {
    update: function update(e) {
      var _this = this;

      e.preventDefault();

      if (this.name.length > 0) {
        var params = {
          user_id: this.userId,
          name: this.name,
          business_name: this.business_name,
          business_ruc: this.business_ruc,
          business_address: this.business_address
        };
        axios.patch("".concat(this.baseApiUrl, "/api/user/update"), params).then(function (response) {
          if (response.status == 200) {
            _this.showSuccessUpdate = true;
          }
        });
      } else {
        this.showError = true;
        this.messageError = 'Error chars length';
      }
    },
    updatePasssword: function updatePasssword(e) {
      var _this2 = this;

      e.preventDefault();
      var valid = true;

      if (this.password.length <= 6) {
        this.messageErrorPassword = 'Error';
        valid = false;
      }

      if (this.password != this.new_password) {
        this.messageError = 'Error';
        valid = false;
      }

      if (valid) {
        var params = {
          user_id: this.userId,
          password: this.password,
          new_password: this.new_password,
          new_password_confirmation: this.new_password_confirmation
        };
        axios.patch("".concat(this.baseApiUrl, "/api/user/updatePassword"), params).then(function (response) {
          if (response.status == 200) {
            _this2.showSuccessUpdatePassword = true;
          }
        });
      } else {
        this.showErrorPassword = true;
      }
    },
    info: function info() {
      var _this3 = this;

      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
      axios.post("".concat(this.baseApiUrl, "/api/user/info"), {
        user_id: this.userId
      }).then(function (response) {
        _this3.name = response.data.name;
        _this3.email = response.data.email;
        _this3.business_name = response.data.business_name;
        _this3.business_ruc = response.data.business_ruc;
        _this3.business_address = response.data.business_address;
      });
    }
  },
  mounted: function mounted() {
    this.showError = false;
    this.info();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['baseApiUrl']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Profile.vue?vue&type=template&id=6ccdb30f&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/panel/Profile.vue?vue&type=template&id=6ccdb30f& ***!
  \***********************************************************************************************************************************************************************************************************/
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
          _c("li", { staticClass: "list-inline-item" }, [_vm._v("Perfil")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm mb-3" }, [
          _c("p", { staticClass: "lead" }, [_vm._v("Perfil")]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm.showSuccessUpdate
                ? _c("div", { staticClass: "alert alert-success" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.messageSuccessUpdate) +
                        "\n              "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.showError
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.messageError) +
                        "\n              "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
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
                      _c("label", { attrs: { for: "name" } }, [
                        _vm._v("Email")
                      ]),
                      _vm._v(" "),
                      _c("p", [_c("strong", [_vm._v(_vm._s(_vm.email))])])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("label", { attrs: { for: "name" } }, [
                        _vm._v("Nombre")
                      ]),
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
                      _c("label", { attrs: { for: "business_name" } }, [
                        _vm._v("Nombre de Empresa")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.business_name,
                            expression: "business_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "business_name",
                          "aria-describedby": "business_name",
                          required: ""
                        },
                        domProps: { value: _vm.business_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.business_name = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("label", { attrs: { for: "business_ruc" } }, [
                        _vm._v("RUT")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.business_ruc,
                            expression: "business_ruc"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "business_ruc",
                          "aria-describedby": "business_ruc",
                          required: ""
                        },
                        domProps: { value: _vm.business_ruc },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.business_ruc = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("label", { attrs: { for: "business_address" } }, [
                        _vm._v("Dirección")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.business_address,
                            expression: "business_address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "business_address",
                          "aria-describedby": "business_address",
                          required: ""
                        },
                        domProps: { value: _vm.business_address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.business_address = $event.target.value
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
                      on: { click: _vm.update }
                    },
                    [_vm._v(_vm._s(_vm.submitName))]
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm mb-3" }, [
          _c("p", { staticClass: "lead" }, [_vm._v("Cambiar Clave")]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm.showSuccessUpdatePassword
                ? _c("div", { staticClass: "alert alert-success" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.messageSuccessUpdatePassword) +
                        "\n              "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.showErrorPassword
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.messageErrorPassword) +
                        "\n              "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
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
                      _c("label", { attrs: { for: "password" } }, [
                        _vm._v("Clave Actual")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.password,
                            expression: "password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "password",
                          "aria-describedby": "password",
                          required: "",
                          autofocus: ""
                        },
                        domProps: { value: _vm.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.password = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("label", { attrs: { for: "new_password" } }, [
                        _vm._v("Nueva Clave")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.new_password,
                            expression: "new_password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "new_password",
                          "aria-describedby": "new_password",
                          required: ""
                        },
                        domProps: { value: _vm.new_password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.new_password = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "label",
                        { attrs: { for: "new_password_confirmation" } },
                        [_vm._v("Repetir Nueva Clave")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.new_password_confirmation,
                            expression: "new_password_confirmation"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "new_password_confirmation",
                          "aria-describedby": "new_password_confirmation",
                          required: ""
                        },
                        domProps: { value: _vm.new_password_confirmation },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.new_password_confirmation = $event.target.value
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
                      on: { click: _vm.updatePasssword }
                    },
                    [_vm._v(_vm._s(_vm.submitName))]
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/panel/Profile.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/panel/Profile.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_6ccdb30f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=6ccdb30f& */ "./resources/js/views/panel/Profile.vue?vue&type=template&id=6ccdb30f&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/panel/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_6ccdb30f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_6ccdb30f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/panel/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/panel/Profile.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/panel/Profile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/panel/Profile.vue?vue&type=template&id=6ccdb30f&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/panel/Profile.vue?vue&type=template&id=6ccdb30f& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_6ccdb30f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=6ccdb30f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/panel/Profile.vue?vue&type=template&id=6ccdb30f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_6ccdb30f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_6ccdb30f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);