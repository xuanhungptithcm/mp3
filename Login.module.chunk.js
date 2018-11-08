webpackJsonp(["Login.module"],{

/***/ "../../../../../src/app/Login/Login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4\" style=\"position: relative;\r\nheight: 100vh;\">\r\n  <div class=\"row\">\r\n    <div class=\"form\">\r\n        <div class=\"timepicker col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"timepicker-picker\">\r\n                <div class=\"nhiemvu\">\r\n                    <select required (change)=\"changedNhiemVu($event)\">\r\n                        <option value=\"\" hidden>Language</option>\r\n                        <option *ngIf=\"isLanguage === 'vn'\" selected value=\"vn\">Tiếng Việt</option>\r\n                        <option *ngIf=\"isLanguage === 'en'\" selected value=\"en\">English</option>\r\n                        <option *ngIf=\"isLanguage !== 'vn'\" value=\"vn\">Tiếng Việt</option>\r\n                        <option *ngIf=\"isLanguage !== 'en'\" value=\"en\">English</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      <ul class=\"tab-group\">\r\n        <li class=\"tab\" [ngClass]=\"{active: isSignUpForm && isAdmin}\" (click)=\"changeForm('signup')\">\r\n          <a *ngIf=\"isAdmin\" translate>SignUp</a>\r\n        </li>\r\n        <li class=\"tab\" [ngClass]=\"{active: isLoginForm}\" (click)=\"changeForm('login')\">\r\n          <a *ngIf=\"isAdmin\" [ngStyle]=\"{'width': isAdmin === true ? '50%' : '100%' }\" translate>Login</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"tab-content\">\r\n        <div id=\"signup\" [ngStyle]=\"{'display': isSignUpForm === true && isAdmin  ? 'block' : 'none'}\">\r\n          <h1 translate>SignUpforFree</h1>\r\n          <form (ngSubmit)=\"register()\" (keydown)=\"enterRegister($event)\">\r\n            <div class=\"top-row\">\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: firstName.value, highlight: firstName.value}\" translate>\r\n                  FirstName\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"text\" [formControl]=\"firstName\" required autocomplete=\"off\" />\r\n              </div>\r\n\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: lastName.value, highlight: lastName.value}\" translate>\r\n                  LastName\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"text\" [formControl]=\"lastName\" required autocomplete=\"off\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"top-row\">\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: phoneNumber.value, highlight: phoneNumber.value}\" translate>\r\n                  Phone\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"text\" [formControl]=\"phoneNumber\" required autocomplete=\"off\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"  />\r\n              </div>\r\n\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: companyName.value, highlight: companyName.value}\" translate>\r\n                    Company\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"text\" [formControl]=\"companyName\" required autocomplete=\"off\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"field-wrap\">\r\n              <label [ngClass]=\"{active: email.value, highlight: email.value}\">\r\n                Email\r\n                <span class=\"req\">*</span>\r\n              </label>\r\n              <input type=\"email\" [formControl]=\"email\" required autocomplete=\"off\" pattern=\"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/\" required  />\r\n            </div>\r\n            <div class=\"field-wrap\">\r\n              <label [ngClass]=\"{active: password.value, highlight: password.value}\" translate>\r\n                  Password\r\n                <span class=\"req\">*</span>\r\n              </label>\r\n              <input type=\"password\" [formControl]=\"password\" required autocomplete=\"off\" />\r\n            </div>\r\n            <button class=\"button button-block\" type=\"submit\" translate>Register</button>\r\n          </form>\r\n        </div>\r\n        <div id=\"login\" [ngStyle]=\"{'display': isLoginForm === true ? 'block' : 'none'}\">\r\n          <h1 translate>WelcomeBack</h1>\r\n          <form (ngSubmit)=\"login()\"  (keydown)=\"enterLogin($event)\">\r\n            <div class=\"field-wrap\">\r\n              <label translate [ngClass]=\"{active: email.value, highlight: email.value}\">\r\n                EmailAddress\r\n                <span class=\"req\">*</span>\r\n              </label>\r\n              <input [formControl]=\"email\" type=\"email\" required pattern=\"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/\" required />\r\n            </div>\r\n            <div class=\"field-wrap\">\r\n              <label [ngClass]=\"{active: password.value, highlight: password.value}\" translate>\r\n                  Password\r\n                <span class=\"req\">*</span>\r\n              </label>\r\n              <input [formControl]=\"password\" type=\"password\" required />\r\n            </div>\r\n            <p class=\"forgot\">\r\n              <a (click)=\"changeForm('forgot')\" translate>ForgotPassword</a>\r\n            </p>\r\n            <p class=\"forgot\">\r\n              <a (click)=\"changeForm('active')\" translate>ActivateAccount</a>\r\n            </p>\r\n            <button class=\"button button-block\" type=\"submit\" translate>Login</button>\r\n          </form>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div id=\"login\" [ngStyle]=\"{'display': isForgot && isAdmin === true ? 'block' : 'none'}\">\r\n          <h1 translate>ForgotPassword</h1>\r\n          <form (ngSubmit)=\"forgot_Password()\">\r\n            <div class=\"field-wrap\">\r\n              <label translate [ngClass]=\"{active: email.value, highlight: email.value}\">\r\n                  EmailAddress\r\n                <span class=\"req\">*</span>\r\n              </label>\r\n              <input [formControl]=\"email\" type=\"email\" required  pattern=\"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/\" required />\r\n            </div>\r\n            <button class=\"button button-block\" type=\"submit\" translate>Request</button>\r\n          </form>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div id=\"login\" [ngStyle]=\"{'display': isActive === true ? 'block' : 'none'}\">\r\n          <h1>Active Account</h1>\r\n          <form (ngSubmit)=\"active()\">\r\n            <div class=\"field-wrap\">\r\n              <label [ngClass]=\"{active: email.value, highlight: email.value}\">\r\n                Email Address\r\n                <span class=\"req\">*</span>\r\n              </label>\r\n              <input [formControl]=\"email\" type=\"email\" required  pattern=\"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/\" required />\r\n            </div>\r\n            <div class=\"field-wrap\">\r\n              <label [ngClass]=\"{active: code.value, highlight: code.value}\">\r\n                Code\r\n                <span class=\"req\">*</span>\r\n              </label>\r\n              <input [formControl]=\"code\" type=\"text\" required />\r\n            </div>\r\n            <button class=\"button button-block\" type=\"submit\">Active</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Login/Login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\nhtml {\n  overflow-y: scroll; }\n\nbody {\n  background: #c1bdba;\n  font-family: 'Titillium Web', sans-serif; }\n\na {\n  text-decoration: none;\n  color: #1ab188;\n  transition: .5s ease; }\n  a:hover {\n    color: #179b77; }\n\n.form {\n  background: rgba(19, 35, 47, 0.9);\n  padding: 40px;\n  width: 100%;\n  margin: 0px auto;\n  border-radius: 4px;\n  position: absolute;\n  top: 10%;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3); }\n\n.tab-group {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0; }\n  .tab-group:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .tab-group li a {\n    display: block;\n    text-decoration: none;\n    padding: 15px;\n    background: rgba(160, 179, 176, 0.25);\n    color: #a0b3b0;\n    font-size: 26px;\n    float: left;\n    width: 50%;\n    text-align: center;\n    cursor: pointer;\n    transition: .5s ease; }\n    .tab-group li a:hover {\n      background: #179b77;\n      color: #ffffff; }\n  .tab-group .active a {\n    background: #1ab188;\n    color: #ffffff; }\n\n.tab-content > div:last-child {\n  display: none; }\n\nh1 {\n  text-align: center;\n  color: #ffffff;\n  font-weight: 300;\n  margin: 0 0 40px;\n  font-size: 30px; }\n\nlabel {\n  position: absolute;\n  transform: translateY(6px);\n  left: 13px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 18px;\n  font-weight: 300; }\n  label .req {\n    margin: 2px;\n    color: #1ab188; }\n\nlabel.active {\n  left: 0px;\n  font-size: 14px;\n  transform: translateY(37px);\n  -webkit-transform: translateY(37px);\n  -moz-transform: translateY(37px);\n  -ms-transform: translateY(37px);\n  -o-transform: translateY(37px); }\n  label.active .req {\n    opacity: 0; }\n\nlabel.highlight {\n  color: #ffffff; }\n\ninput,\ntextarea {\n  font-size: 20px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px 5px;\n  background: none;\n  background-image: none;\n  border: 1px solid #a0b3b0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: border-color .25s ease, box-shadow .25s ease; }\n  input:focus,\n  textarea:focus {\n    outline: 0;\n    border-color: #1ab188; }\n\ntextarea {\n  border: 2px solid #a0b3b0;\n  resize: vertical; }\n\n.field-wrap {\n  position: relative;\n  margin-bottom: 25px; }\n\n.top-row:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.top-row > div {\n  float: left;\n  width: 48%;\n  margin-right: 4%; }\n  .top-row > div:last-child {\n    margin: 0; }\n\n.timepicker {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: auto; }\n\n.button {\n  height: 36px;\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 9px 0;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n  background: #1ab188;\n  color: #ffffff;\n  transition: all 0.5s ease;\n  -webkit-appearance: none;\n  border-radius: 60px;\n  cursor: pointer; }\n  .button:hover, .button:focus {\n    background: #179b77; }\n\n.button-block {\n  display: block;\n  width: 100%; }\n\n.forgot {\n  margin-top: -20px;\n  text-align: right; }\n\n#login > form > p > a:hover {\n  cursor: pointer;\n  color: #dfe4e3; }\n\nbutton:active {\n  background: #00805d;\n  color: #00805d; }\n\n.tab-group {\n  padding: 10px;\n  font-size: 20px; }\n\n.nhiemvu {\n  color: #005BA6;\n  display: block;\n  border-radius: 0;\n  box-shadow: none;\n  font-size: 16px;\n  margin-top: 9px;\n  margin-bottom: 15px;\n  width: 100%; }\n  .nhiemvu select {\n    font-size: 15px;\n    width: 100%;\n    border: 2px solid #337ab7;\n    border-radius: 2px;\n    font-weight: 400;\n    color: inherit;\n    padding: 3px;\n    line-height: normal;\n    transition: border-color 0.2s ease, outline 0.2s ease; }\n    .nhiemvu select[disabled], .nhiemvu select:disabled {\n      opacity: 0.4;\n      cursor: not-allowed; }\n    .nhiemvu select:invalid {\n      color: inherit; }\n\n@media only screen and (max-width: 375px) {\n  h1 {\n    font-size: 22px;\n    margin-bottom: 25px; }\n  label {\n    font-size: 12px;\n    transform: translateY(2px);\n    left: 5px; }\n  input {\n    font-size: 12px; }\n  .tab-group li a {\n    padding: 8px;\n    font-size: 13px; }\n  label.active {\n    font-size: 12px;\n    transform: translateY(25px);\n    -webkit-transform: translateY(25px);\n    -moz-transform: translateY(25px);\n    -ms-transform: translateY(25px);\n    -o-transform: translateY(25px); }\n  .field-wrap {\n    margin-bottom: 30px; }\n  .tab-group {\n    margin-bottom: 30px; }\n  .button, .button-block {\n    padding: 5px 0;\n    height: 30px; }\n  .forgot {\n    font-size: 12px; } }\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    font-size: 25px;\n    margin-bottom: 25px; }\n  input {\n    font-size: 14px; }\n  .tab-group li a {\n    padding: 10px;\n    font-size: 15px; }\n  label.active {\n    transform: translateY(30px); }\n  .field-wrap {\n    margin-bottom: 27px; }\n  .button-block {\n    padding: 5px 0;\n    height: 30px; }\n  .tab-group {\n    margin-bottom: 20px; }\n  #login > form > div:nth-child(2) {\n    margin-bottom: 28px; }\n  label {\n    font-size: 14px;\n    left: 5px;\n    transform: translateY(2px); } }\n\n@media only screen and (max-width: 992px) {\n  .tab-group li a {\n    font-size: 17px; } }\n\n@media only screen and (max-width: 900px) and (min-width: 768px) {\n  .col-md-6 {\n    max-width: 58%; }\n  .offset-md-3 {\n    margin-left: 21%; } }\n\n@media only screen and (min-width: 600px) and (max-width: 991px) {\n  .tab-group {\n    margin-bottom: 20px; }\n  h1 {\n    margin-bottom: 20px; } }\n\n@media only screen and (min-width: 992px) {\n  .tab-group > li > a {\n    font-size: 20px; }\n  .col-lg-4 {\n    max-width: 44%; }\n  .offset-lg-4 {\n    margin-left: 28%; } }\n\n@media only screen and (max-width: 576px) {\n  .form {\n    margin: auto 20px;\n    width: calc(100% - 40px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Login/Login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared_services_authentication_service__ = __webpack_require__("../../../../../src/app/Shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, authenService, toastr, vcr, translate) {
        this.route = route;
        this.authenService = authenService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.translate = translate;
        this.firstName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)]);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.code = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.phoneNumber = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.companyName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.isLoginForm = true;
        this.isSignUpForm = false;
        this.isAdmin = true;
        this.isForgot = false;
        this.isActive = false;
        this.isLanguage = 'vn';
        this.toastr.setRootViewContainerRef(vcr);
        if (localStorage.getItem('language') === 'vn') {
            translate.setDefaultLang('vn');
            this.isLanguage = 'vn';
        }
        else {
            translate.setDefaultLang('en');
            this.isLanguage = 'en';
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        // if(localStorage.getItem('x')){
        //   this.route.
        // }
        this.route.navigate(['./home']);
    };
    LoginComponent.prototype.resetForm = function () {
        this.firstName.setValue('');
        this.lastName.setValue('');
        this.email.setValue('');
        this.password.setValue('');
    };
    LoginComponent.prototype.changeForm = function (value) {
        if (value === 'login') {
            this.isLoginForm = true;
            this.isSignUpForm = false;
            this.isForgot = false;
            this.isActive = false;
            this.resetForm();
        }
        if (value === 'signup') {
            this.isLoginForm = false;
            this.isSignUpForm = true;
            this.isForgot = false;
            this.isActive = false;
            this.resetForm();
        }
        if (value === 'forgot' && this.isAdmin) {
            this.isForgot = true;
            this.isLoginForm = false;
            this.isSignUpForm = false;
            this.isActive = false;
            this.resetForm();
        }
        if (value === 'active' && !this.isActive) {
            this.isForgot = false;
            this.isLoginForm = false;
            this.isSignUpForm = false;
            this.isActive = true;
            this.resetForm();
        }
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        if (this.email.value === '' || this.password.value === '') {
            this.toastr.error('Email, Email is required', 'Error!');
        }
        else {
            var formData = {
                lname: this.lastName.value,
                fname: this.firstName.value,
                numberPhone: this.phoneNumber.value,
                company: this.companyName.value,
                email: this.email.value,
                password: this.password.value
            };
            this.authenService.register(formData).subscribe(function (result) {
                console.log(result);
                _this.changeForm('active');
            });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        localStorage.setItem('x', 'x');
        if (this.email.value === '' || this.password.value === '') {
            this.toastr.error('Email, Email is required', 'Error!');
        }
        else {
            var formData = {
                email: this.email.value,
                password: this.password.value
            };
            this.authenService.login(formData).subscribe(function (result) {
                if (result.message === 'PASS_WRONG') {
                    _this.toastr.error(result.message, 'ERRR');
                }
                else if (result.message === 'USER_NOT_ACTIVATE') {
                    _this.toastr.warning(result.message, 'PLease check email and active by code!');
                }
                else if (result.message === 'EMAIL_NOT_VALID') {
                    _this.toastr.warning(result.message, 'ERRR');
                }
                else {
                    _this.toastr.success('Login Success');
                    localStorage.setItem('x', result.token);
                    _this.route.navigate(['./home']);
                }
            });
        }
    };
    LoginComponent.prototype.active = function () {
        var _this = this;
        var formData = {
            email: this.email.value,
            code: this.code.value
        };
        if (this.email.value === '' || this.code.value === '') {
            this.toastr.error('Email, Code is required', 'Error!');
        }
        else {
            this.authenService.active(formData).subscribe(function (result) {
                var response = result.message;
                if (response === 'USER_NOT_FOUND') {
                    _this.toastr.error(response, 'Error!');
                }
                if (response === 'INVALID_CODE') {
                    _this.toastr.error(response, 'Error');
                }
                if (response === 'ACTIVATE_SUCCESS') {
                    _this.toastr.success(response, 'OK!!');
                    _this.changeForm('login');
                }
            });
        }
    };
    LoginComponent.prototype.forgot_Password = function () {
        var _this = this;
        this.authenService.forgot_Password({ email: this.email.value }).subscribe(function (result) {
            var response = result.message;
            if (response === 'USER_NOT_FOUND') {
                _this.toastr.error(response, 'ERROR');
            }
            else if (response === 'SYSTEM_ERROR') {
                _this.toastr.error(response, 'ERROR');
            }
            else {
                _this.isLoginForm = true;
                _this.isSignUpForm = false;
                _this.isForgot = false;
                _this.isActive = false;
                _this.resetForm();
            }
        });
    };
    LoginComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    LoginComponent.prototype.changedNhiemVu = function (value) {
        if (value.target.value !== '') {
            console.log('oke');
            this.switchLanguage(value.target.value);
            localStorage.setItem('language', value.target.value);
            this.isLanguage = value.target.value;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/Login/Login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Login/Login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__Shared_services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Login/Login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_component__ = __webpack_require__("../../../../../src/app/Login/Login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_routing__ = __webpack_require__("../../../../../src/app/Login/login.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__login_routing__["a" /* route_Login */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__Login_component__["a" /* LoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/Login/login.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return route_Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Login_component__ = __webpack_require__("../../../../../src/app/Login/Login.component.ts");


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__Login_component__["a" /* LoginComponent */] }
];
var route_Login = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);


/***/ })

});
//# sourceMappingURL=Login.module.chunk.js.map