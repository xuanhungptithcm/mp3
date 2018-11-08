webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Login/Login.module": [
		"../../../../../src/app/Login/Login.module.ts",
		"Login.module"
	],
	"./UserModule/UserModule.module": [
		"../../../../../src/app/UserModule/UserModule.module.ts",
		"UserModule.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/Shared/services/audio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AudioService = /** @class */ (function () {
    function AudioService(http) {
        this.http = http;
    }
    AudioService.prototype.get_List_Audio = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].AUDIO.list;
        return this.http.get(url).map(function (list) {
            return list.json();
        });
    };
    AudioService.prototype.play_Audio = function (filename) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].AUDIO.play;
        return this.http.post(url, filename).map(function (result) {
            return result.json();
        });
    };
    AudioService.prototype.set_Volume = function (volume) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].AUDIO.volume;
        return this.http.post(url, volume).map(function (result) {
            return result.json();
        });
    };
    AudioService.prototype.next_Audio = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].AUDIO.next;
        return this.http.post(url, '').map(function (result) {
            return result.json();
        });
    };
    AudioService.prototype.prev_Audio = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].AUDIO.prev;
        return this.http.post(url, '').map(function (result) {
            return result.json();
        });
    };
    AudioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AudioService);
    return AudioService;
}());



/***/ }),

/***/ "../../../../../src/app/Shared/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.canActivate = function () {
        var login = localStorage.getItem('x');
        if (!login) {
            this.router.navigate(['./login']);
        }
        return login ? true : false;
    };
    AuthenticationService.prototype.register = function (formdata) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.register;
        return this.http.post(url, formdata).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.login = function (formdata) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.login;
        return this.http.post(url, formdata).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.block_User = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.blockuser;
        return this.http.put(url, { id: id }).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.unblock_User = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.unblockuser;
        return this.http.put(url, { id: id }).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.get_All_User_User = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.getalluseruser;
        return this.http.get(url).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.refesh_Token_Change_Admin = function (email) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.refeshtokenchangeadmin;
        return this.http.post(url, { email: email }).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.find_User_By_Token = function (token) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.findbytoken;
        return this.http.post(url, { token: token }).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.send_Mail_Change_Admin = function (formdata) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.sendmailchangeadmin;
        return this.http.post(url, formdata).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.verify_Change_Admin = function (formdata) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.verifychangeadmin;
        return this.http.post(url, formdata).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.forgot_Password = function (formdata) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.forgotpassword;
        return this.http.post(url, formdata).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.active = function (formdata) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.active;
        return this.http.post(url, formdata).map(function (result) {
            return result.json();
        });
    };
    AuthenticationService.prototype.addTokenInHeaderForFile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        var nameToken = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.token;
        var token = localStorage.getItem(nameToken);
        headers.append('x-access-token', token);
        var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return option;
    };
    AuthenticationService.prototype.addTokenInHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        var nameToken = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.token;
        var token = localStorage.getItem(nameToken);
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);
        var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return option;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/Shared/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/Shared/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileService = /** @class */ (function () {
    function FileService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    FileService.prototype.uploadFile = function (formdata, id) {
        var nameToken = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].USER.token;
        var url = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Configs */].FILE.uploadProfile;
        if (localStorage.getItem(nameToken)) {
            return this.http.put(url + '/' + id, formdata, this.authentication.addTokenInHeaderForFile()).map(function (result) {
                return result.json();
            });
        }
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "../../../../../src/app/Shared/services/searchBehavior.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBehaviorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchBehaviorService = /** @class */ (function () {
    function SearchBehaviorService(http) {
        this.http = http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentMessage = this.messageSource.asObservable();
    }
    SearchBehaviorService.prototype.sendKeySearch = function (value, type) {
        var request = {
            value: value,
            type: type
        };
        this.messageSource.next(request);
    };
    SearchBehaviorService.prototype.getData = function (key) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* Configs */].YOUTUBE.youtube;
        var link = {
            url: 'https://www.youtube.com/results?search_query=' + key
        };
        return this.http.post(url, link).map(function (result) {
            return result;
        });
    };
    SearchBehaviorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], SearchBehaviorService);
    return SearchBehaviorService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!-- <h1 translate>Title</h1>\r\n\r\n<div>\r\n  {{ 'Intro' | translate:user }}\r\n</div>\r\n<button (click)=\"switchLanguage('en')\">en</button>\r\n\r\n<button (click)=\"switchLanguage('vn')\">vn</button> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configs; });
var http = 'http://172.30.1.146:';
// const http = 'http://localhost:';
var port = '3000';
// = '3000';
var Configs = {
    DOMAIN: {
        url: http + port + '/public/avatar/'
    },
    STYLE_IMAGE: {
        profileWidth: 180,
        profileHeight: 180,
        thumnailWidth: 200,
        thumnailHeight: 200,
        image: 'image'
    },
    HOUSE: {
        getPostPutDeleteHouse: http + port + '/api/house',
    },
    DEVICE: {
        getDevicdByIdHouse: http + port + '/api/device',
        headerUrl: 'https://connect.mysmarthome.vn/api/1.0/request/',
        lastUrlOnOffTimer: '/req_timer_block',
        lastUrlOfchangeState: '/req_device_toggle',
        lastUrlOfGetStateDevice: '/req_device',
        lastUrlShowTimer: '/req_timer'
    },
    NODE: {},
    USER: {
        token: 'x',
        getalluseruser: http + port + '/api/user/',
        createUser: http + port + '/api/user',
        updateUser: http + port + '/api/user',
        register: http + port + '/api/user',
        login: http + port + '/api/user/login',
        forgotpassword: http + port + '/api/user/forgotpassword',
        getuserbytoken: http + port + '/api/user',
        deleteUser: http + port + '/api/user',
        active: http + port + '/api/user/activate',
        sendmailchangeadmin: http + port + '/api/user/sendmailchangeadmin',
        verifychangeadmin: http + port + '/api/user/verifychangeadmin',
        findbytoken: http + port + '/api/user/findbytoken',
        refeshtokenchangeadmin: http + port + '/api/user/refeshtokenchangeadmin',
        blockuser: http + port + '/api/user/block',
        unblockuser: http + port + '/api/user/unblock'
    },
    YOUTUBE: {
        youtube: http + port + '/api/youtube'
    },
    FILE: {
        uploadfile: http + port + '/api/file/uploadfile',
        uploadimagestorage: http + port + '/api/file/uploadimagestorage',
        getimagestoragebyiD: http + port + '/api/file/getimagestoragebyiD',
        uploadProfile: http + port + '/api/file/upload'
    },
    SOCKET: {
        url: http + port + '/nest',
        urlInut: 'https://socket.mysmarthome.vn'
    },
    AUDIO: {
        list: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/list',
        volume: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/set_volume',
        play: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/play_filename',
        next: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/next',
        prev: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/prev'
    }
};


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mainRoute_routing__ = __webpack_require__("../../../../../src/app/mainRoute.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_content_home_component__ = __webpack_require__("../../../../../src/app/main-content/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Shared_services_authentication_service__ = __webpack_require__("../../../../../src/app/Shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_content_content_content_component__ = __webpack_require__("../../../../../src/app/main-content/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_content_content_listmusic_listmusic_component__ = __webpack_require__("../../../../../src/app/main-content/content/listmusic/listmusic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_content_content_register_register_component__ = __webpack_require__("../../../../../src/app/main-content/content/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_content_content_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/main-content/content/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_content_content_manager_user_manager_user_component__ = __webpack_require__("../../../../../src/app/main-content/content/manager-user/manager-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_content_content_listmusic_play_audio_play_audio_component__ = __webpack_require__("../../../../../src/app/main-content/content/listmusic/play-audio/play-audio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Shared_services_file_service__ = __webpack_require__("../../../../../src/app/Shared/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_content_content_menu_menu_component__ = __webpack_require__("../../../../../src/app/main-content/content/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Shared_services_audio_service__ = __webpack_require__("../../../../../src/app/Shared/services/audio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_format_name_audio_pipe__ = __webpack_require__("../../../../../src/app/pipes/format-name-audio.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Shared_services_searchBehavior_service__ = __webpack_require__("../../../../../src/app/Shared/services/searchBehavior.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_safe_url_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__main_content_content_manager_music_manager_music_component__ = __webpack_require__("../../../../../src/app/main-content/content/manager-music/manager-music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__main_content_content_play_list_play_list_component__ = __webpack_require__("../../../../../src/app/main-content/content/play-list/play-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__main_content_content_dashboard_zone_detail_zone_detail_component__ = __webpack_require__("../../../../../src/app/main-content/content/dashboard/zone-detail/zone-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// QR code








// debug in Xampp

// ng bootstrap







var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__main_content_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__main_content_content_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_content_content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__main_content_content_listmusic_listmusic_component__["a" /* ListmusicComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_content_content_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_content_content_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__main_content_content_manager_user_manager_user_component__["a" /* ManagerUserComponent */],
                __WEBPACK_IMPORTED_MODULE_14__main_content_content_listmusic_play_audio_play_audio_component__["a" /* PlayAudioComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_format_name_audio_pipe__["a" /* FormatNameAudioPipe */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_28__main_content_content_manager_music_manager_music_component__["a" /* ManagerMusicComponent */],
                __WEBPACK_IMPORTED_MODULE_29__main_content_content_play_list_play_list_component__["a" /* PlayListComponent */],
                __WEBPACK_IMPORTED_MODULE_31__main_content_content_dashboard_zone_detail_zone_detail_component__["a" /* ZoneDetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_30_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_26__ng_bootstrap_ng_bootstrap__["a" /* NgbTabsetModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__mainRoute_routing__["a" /* MainRoute */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__Shared_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_15__Shared_services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_18__Shared_services_audio_service__["a" /* AudioService */], __WEBPACK_IMPORTED_MODULE_20__Shared_services_searchBehavior_service__["a" /* SearchBehaviorService */],
                { provide: __WEBPACK_IMPORTED_MODULE_25__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_25__angular_common__["HashLocationStrategy"] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_30_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ms_btn {\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n}\r\n.ms_btn a {\r\n  color: #ffffff;\r\n}\r\na:not([href]):not([tabindex]) {\r\n  color: #ffffff;\r\n}\r\n.button {\r\n    height: 40px;\r\n    padding: 10px 0!important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms_content_wrapper padder_top80\">\r\n  <div class=\"ms_weekly_wrapper\">\r\n    <app-listmusic></app-listmusic>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-content/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/main-content/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms_content_wrapper padder_top80\">\r\n  <p translate>ListZonePlayAudio</p>\r\n  <div class=\"btn btn-primary addHouse\" data-toggle=\"modal\" data-target=\"#exampleModal\" >\r\n      <span translate>AddZone</span> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  <div class=\"listVung\">\r\n    <div class=\"col-lg-4 col-md-6 col-sm-12 padding_right40\">\r\n      <div class=\"ms_weekly_box\">\r\n        <div class=\"weekly_left\">\r\n          <div class=\"w_top_song\">\r\n            <div class=\"w_tp_song_img\">\r\n              <img src=\"../../../../assets/images/toa1.jpg\" alt=\"\" class=\"img-fluid\">\r\n              <div class=\"ms_song_overlay\">\r\n              </div>\r\n              <div class=\"ms_play_icon\">\r\n                <img src=\"../../../../assets/images/svg/play.svg\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"w_tp_song_name\">\r\n              <h3><a [routerLink]='[(\"../zone-detail\")]' >Zone 1</a></h3>\r\n              <p>Quản lý: Nguyễn Văn A</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ms_divider\"></div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6 col-sm-12 padding_right40\">\r\n      <div class=\"ms_weekly_box\">\r\n        <div class=\"weekly_left\">\r\n          <div class=\"w_top_song\">\r\n            <div class=\"w_tp_song_img\">\r\n              <img src=\"../../../../assets/images/toa1.jpg\" alt=\"\" class=\"img-fluid\">\r\n              <div class=\"ms_song_overlay\">\r\n              </div>\r\n              <div class=\"ms_play_icon\">\r\n                <img src=\"../../../../assets/images/svg/play.svg\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"w_tp_song_name\">\r\n              <h3><a href=\"index.html#\">Tòa số 1</a></h3>\r\n              <p>Quản lý: Nguyễn Văn A</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ms_divider\"></div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6 col-sm-12 padding_right40\">\r\n      <div class=\"ms_weekly_box\">\r\n        <div class=\"weekly_left\">\r\n          <div class=\"w_top_song\">\r\n            <div class=\"w_tp_song_img\">\r\n              <img src=\"../../../../assets/images/toa1.jpg\" alt=\"\" class=\"img-fluid\">\r\n              <div class=\"ms_song_overlay\">\r\n              </div>\r\n              <div class=\"ms_play_icon\">\r\n                <img src=\"../../../../assets/images/svg/play.svg\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"w_tp_song_name\">\r\n              <h3><a href=\"index.html#\">Tòa số 1</a></h3>\r\n              <p>Quản lý: Nguyễn Văn A</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ms_divider\"></div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6 col-sm-12 padding_right40\">\r\n      <div class=\"ms_weekly_box\">\r\n        <div class=\"weekly_left\">\r\n          <div class=\"w_top_song\">\r\n            <div class=\"w_tp_song_img\">\r\n              <img src=\"../../../../assets/images/toa1.jpg\" alt=\"\" class=\"img-fluid\">\r\n              <div class=\"ms_song_overlay\">\r\n              </div>\r\n              <div class=\"ms_play_icon\">\r\n                <img src=\"../../../../assets/images/svg/play.svg\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"w_tp_song_name\">\r\n              <h3><a href=\"index.html#\">Tòa số 1</a></h3>\r\n              <p>Quản lý: Nguyễn Văn A</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ms_divider\"></div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Quét mã QR</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div>\r\n          <qr-code [value]=\"'All QR Code data goes here!'\" [size]=\"150\"></qr-code>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-content/content/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  font-size: 30px;\n  color: aqua;\n  animation: animationTitle 5s infinite;\n  margin-bottom: 20px;\n  -webkit-animation: animationTitle 5s infinite;\n  display: -webkit-inline-box; }\n\n.padder_top80 {\n  margin-top: 30px; }\n\n.w_top_song .w_tp_song_img {\n  width: 320px; }\n\n.w_top_song {\n  display: -ms-flexbox;\n  display: flex; }\n\n.listVung {\n  height: calc(100vh - 154px);\n  overflow: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-line-pack: baseline;\n      align-content: baseline; }\n\n.listVung::-webkit-scrollbar {\n  display: none; }\n\n.modal-body {\n  text-align: center; }\n\n.addHouse {\n  position: absolute;\n  top: 97px;\n  right: 20px;\n  transition: all 0.4s;\n  position: fixed; }\n\n@media (max-width: 1200px) {\n  .w_top_song .w_tp_song_img {\n    width: 200px; } }\n\n@media (max-width: 991px) {\n  .addHouse {\n    top: 75px;\n    right: 20px; } }\n\n/* @media (min-width:992px) and (max-width:1120px){\r\n  .col-lg-4 {\r\n    max-width: 42.333333%;\r\n}\r\n} */\n@media (max-width: 600px) {\n  p {\n    font-size: 20px; }\n  div.btn.btn-primary.addHouse > span {\n    display: none; }\n  .addHouse {\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center; } }\n\n@media only screen and (min-width: 992px) and (max-width: 1288px) {\n  .col-lg-4 {\n    -ms-flex: 0 0 50%;\n        flex: 0 0 50%;\n    max-width: 50%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/main-content/content/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/dashboard/zone-detail/zone-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/dashboard/zone-detail/zone-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms_content_wrapper padder_top80\">\n    <p>Zone detail</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-content/content/dashboard/zone-detail/zone-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoneDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZoneDetailComponent = /** @class */ (function () {
    function ZoneDetailComponent() {
    }
    ZoneDetailComponent.prototype.ngOnInit = function () {
    };
    ZoneDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-zone-detail',
            template: __webpack_require__("../../../../../src/app/main-content/content/dashboard/zone-detail/zone-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/dashboard/zone-detail/zone-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZoneDetailComponent);
    return ZoneDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/listmusic/listmusic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".play-audio {\r\n    left: -140px;\r\n    position: absolute;\r\n    z-index: 99999;\r\n}\r\n.video iframe {\r\n    width: 246px;\r\n    height: 138px;\r\n}\r\n.main-youtube{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n.video{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-bottom: 20px;\r\n}\r\n.left-video{\r\n    width: 246px;\r\n    height: 138px;\r\n}\r\n.right-video{\r\n    margin-left: 20px;\r\n}\r\n.right-video p{\r\n    color: white;\r\n}\r\n.ms_divider{\r\n    margin-top: 15px;\r\n}\r\n.ms_weekly_box{\r\n    cursor: pointer;\r\n}\r\nul{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    color: white\r\n}\r\n.right-video p.title{\r\n    display: block;\r\n    max-height: 48px;\r\n    overflow: hidden;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n    color: aqua;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 1400px) {\r\n    .play-audio {\r\n        left: -140px;\r\n    }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .play-audio {\r\n        /* margin-right: 50px; */\r\n    }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .play-audio {\r\n        left: 0;\r\n        /* padding: 0px 20px;\r\n        margin-right: 0px !important; */\r\n    }\r\n #ms_weekly_wrapper{\r\n        padding: 0!important;\r\n    }\r\n    \r\n}\r\n@media (max-width:480px){\r\n    .video{\r\n        display: block;\r\n        text-align: center;\r\n        padding: 0;\r\n      }\r\n      .right-video{\r\n        margin: 0;\r\n      }\r\n      .ms_weekly_wrapper{\r\n        padding-left: 0px;\r\n        padding-right: 0px;\r\n      }\r\n      .video iframe{\r\n        width: 100%;\r\n        height: 150px;\r\n      }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/listmusic/listmusic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms_weekly_wrapper\" *ngIf=\"!isShowIframe\">\r\n  <div class=\"ms_weekly_inner\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"ms_heading\">\r\n          <h1>Danh sách nhạc</h1>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"!listSearch\">\r\n        <div class=\"ms_weekly_box col-lg-4 col-md-12\" id={{i}} *ngFor=\"let audio of listAudio; trackBy: trackByFn; let i = index\"\r\n          (click)=\"playMusic(audio, i)\">\r\n          <div class=\"weekly_left\">\r\n            <span class=\"w_top_no\" *ngIf=\"i < 9\">\r\n              0{{i + 1}}\r\n            </span>\r\n            <span class=\"w_top_no\" *ngIf=\"i >= 9\">\r\n              {{i + 1}}\r\n            </span>\r\n            <div class=\"w_top_song\">\r\n              <div class=\"w_tp_song_img\">\r\n                <img src=\"../../../../assets/images/weekly/song1.jpg\" alt=\"\" class=\"img-fluid\">\r\n                <div class=\"ms_song_overlay\">\r\n                </div>\r\n                <div class=\"ms_play_icon\">\r\n                  <img src=\"../../../../assets/images/svg/play.svg\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"w_tp_song_name\">\r\n                <h3><a>{{audio | formatNameAudio}}</a></h3>\r\n                <p>Ava Cornish</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"weekly_right\">\r\n            <span class=\"w_song_time\">5:10</span>\r\n            <span class=\"ms_more_icon\" data-other=\"1\">\r\n              <img src=\"../../../../assets/images/svg/more.svg\" alt=\"\">\r\n            </span>\r\n          </div> -->\r\n          <div class=\"ms_divider\"></div>\r\n        </div>\r\n        <div class=\"abc\" style=\"clear: both\"></div>\r\n      </div>\r\n      <div class=\"row\" style=\"display: contents\" *ngIf=\"listSearch\">\r\n        <div class=\"ms_weekly_box col-lg-4 col-md-12\" id={{i}} *ngFor=\"let audio of listSearch; trackBy: trackByFn; let i = index\"\r\n          (click)=\"playMusic(audio, i)\">\r\n          <div class=\"weekly_left\">\r\n            <span class=\"w_top_no\" *ngIf=\"i < 9\">\r\n              0{{i + 1}}\r\n            </span>\r\n            <span class=\"w_top_no\" *ngIf=\"i >= 9\">\r\n              {{i + 1}}\r\n            </span>\r\n            <div class=\"w_top_song\">\r\n              <div class=\"w_tp_song_img\">\r\n                <img src=\"../../../../assets/images/weekly/song1.jpg\" alt=\"\" class=\"img-fluid\">\r\n                <div class=\"ms_song_overlay\">\r\n                </div>\r\n                <div class=\"ms_play_icon\">\r\n                  <img src=\"../../../../assets/images/svg/play.svg\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"w_tp_song_name\">\r\n                <h3><a>{{audio | formatNameAudio}}</a></h3>\r\n                <p>Ava Cornish</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"weekly_right\">\r\n            <span class=\"w_song_time\">5:10</span>\r\n            <span class=\"ms_more_icon\" data-other=\"1\">\r\n              <img src=\"../../../../assets/images/svg/more.svg\" alt=\"\">\r\n            </span>\r\n          </div> -->\r\n          <div class=\"ms_divider\"></div>\r\n        </div>\r\n        <div class=\"abc\" style=\"clear: both\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"isShowIframe\">\r\n  <div class=\"ms_weekly_inner\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"ms_heading\">\r\n          <h1>Danh tìm từ youtube</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"main-youtube\">\r\n      <div class=\"video col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngFor=\"let item of listVideo; let i = index\">\r\n        <div class=\"leftvideo\" *ngIf=\"i < 6\">\r\n          <iframe name=\"youtube\" allowfullscreen frameborder=\"0\" id=\"youtube\" [src]=\"item.idVideo | safeUrl\">\r\n          </iframe>\r\n        </div>\r\n        <div class=\"right-video\" *ngIf=\"i < 6\">\r\n          <p class=\"title\">{{item.title}}</p>\r\n          <span class=\"channel\">{{item.channel}}</span>\r\n          <p>{{item.duration}}</p>\r\n          <ul>\r\n            <li>{{item.countView}}</li>\r\n            <li>{{item.timeCreate}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"play-audio\">\r\n  <!-- <p *ngFor=\"let audio of listAudio; trackBy: trackByFn \"></p> -->\r\n  <app-play-audio></app-play-audio>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-content/content/listmusic/listmusic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListmusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_services_searchBehavior_service__ = __webpack_require__("../../../../../src/app/Shared/services/searchBehavior.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shared_services_audio_service__ = __webpack_require__("../../../../../src/app/Shared/services/audio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListmusicComponent = /** @class */ (function () {
    function ListmusicComponent(audioService, searchBehavior, searchBehaviorService) {
        this.audioService = audioService;
        this.searchBehavior = searchBehavior;
        this.searchBehaviorService = searchBehaviorService;
        this.tam = 0;
        this.subcriber = [];
        this.isShowIframe = false;
        this.idVideo1 = '';
        this.listYoutube = [];
        this.listVideo = [];
    }
    ListmusicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get_List();
        this.subcriber.push(this.searchBehavior.currentMessage.subscribe(function (mess) {
            _this.listVideo = [];
            console.log(mess);
            // console.log(mess);
            try {
                // console.log('oke');
                if (mess.type === 'local') {
                    _this.filterList(mess);
                }
                if (mess.type === 'youtube') {
                    var text = mess.value.toString();
                    var tap = text.split(' ').join('+');
                    _this.getVideoYoutube(tap);
                }
            }
            catch (error) {
            }
        }));
    };
    ListmusicComponent.prototype.getVideoYoutube = function (key) {
        var _this = this;
        this.isShowIframe = true;
        this.searchBehaviorService.getData(key).subscribe(function (result) {
            var data = JSON.parse(result._body);
            _this.listVideo = data;
            console.log(_this.listVideo);
        });
    };
    ListmusicComponent.prototype.filterList = function (res) {
        var _this = this;
        // console.log(res);
        this.listSearch = this.listAudio.filter(function (audio) {
            _this.isShowIframe = false;
            audio = audio.substr(audio, audio.length - 3);
            return audio.toString().toLowerCase().indexOf(res.value.toLowerCase()) !== -1;
        });
    };
    ListmusicComponent.prototype.get_List = function () {
        var _this = this;
        this.audioService.get_List_Audio().subscribe(function (list) {
            _this.listAudio = list.files;
        });
    };
    ListmusicComponent.prototype.trackByFn = function (index, item) {
        return item;
    };
    ListmusicComponent.prototype.playMusic = function (audio, i) {
        // #\30 > div.weekly_left > div > div.w_tp_song_img > div.ms_play_icon
        // ms_active_play#\30 > div.weekly_left > div > div.w_tp_song_img > div.ms_play_icon
        $('#' + this.tam).removeClass('ms_active_play');
        $('#' + i).addClass('ms_active_play');
        $('#' + this.tam + ' .weekly_left .w_tp_song_img .ms_play_icon').html("<img src=\"../../../../assets/images/svg/play.svg\" alt=\"\">");
        $('#' + i + ' .weekly_left .w_tp_song_img .ms_play_icon').html("<div class=\"ms_bars\">\n    <div class=\"bar\"></div>\n    <div class=\"bar\"></div>\n    <div class=\"bar\"></div>\n    <div class=\"bar\"></div>\n    <div class=\"bar\"></div>\n    <div class=\"bar\"></div></div>");
        this.tam = i;
        var filename = {
            filename: audio
        };
        this.audioService.play_Audio(filename).subscribe(function (result) {
            // console.log(result);
        });
    };
    ListmusicComponent.prototype.ngOnDestroy = function () {
        this.subcriber.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ListmusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-listmusic',
            template: __webpack_require__("../../../../../src/app/main-content/content/listmusic/listmusic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/listmusic/listmusic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Shared_services_audio_service__["a" /* AudioService */],
            __WEBPACK_IMPORTED_MODULE_0__Shared_services_searchBehavior_service__["a" /* SearchBehaviorService */],
            __WEBPACK_IMPORTED_MODULE_0__Shared_services_searchBehavior_service__["a" /* SearchBehaviorService */]])
    ], ListmusicComponent);
    return ListmusicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/listmusic/play-audio/play-audio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms_player_wrapper\" [ngClass]=\"{'close_player': close_Player}\">\r\n  <div class=\"ms_player_close\"  [ngClass]=\"{'hidePlay': hidePlay}\" (click)=\"closePlayer()\">\r\n    <i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  <div class=\"player_mid\">\r\n    <div class=\"audio-player\">\r\n      <div id=\"jquery_jplayer_1\" class=\"jp-jplayer\"></div>\r\n      <div id=\"jp_container_1\" class=\"jp-audio\">\r\n        <div class=\"jp-type-playlist\">\r\n          <div class=\"jp-gui jp-interface flex-wrap\">\r\n            <div class=\"jp-controls flex-item\">\r\n              <button class=\"jp-previous\" tabindex=\"0\" (click)=\"nextAudio()\">\r\n                <i class=\"ms_play_control\"></i>\r\n              </button>\r\n              <button *ngIf=\"!isPlay\" class=\"jp-play\" tabindex=\"0\">\r\n                <i class=\"ms_play_control\" id=\"pause\"></i>\r\n              </button>\r\n              <button *ngIf=\"isPlay\" class=\"jp-play\" tabindex=\"0\">\r\n                <i class=\"ms_play_control\" style=\"background-position: 1021px 0px !important;\"></i>\r\n              </button>\r\n              <button class=\"jp-next\" tabindex=\"0\" (click)=\"prevAudio()\">\r\n                <i class=\"ms_play_control\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"jp-progress-container flex-item\">\r\n              <div class=\"jp-time-holder\">\r\n                <span class=\"jp-current-time\"></span>\r\n                <span class=\"jp-duration\"></span>\r\n              </div>\r\n              <div class=\"jp-progress\">\r\n                <div class=\"jp-seek-bar\">\r\n                  <div class=\"jp-play-bar\">\r\n                    <div class=\"bullet\" (touchmove)=\"touchMove($event)\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"seek\">\r\n                <input class=\"slider2\" id=\"myRange2\" type=\"range\" min=\"0\" max=\"100\" (input)=\"changeSeek($event)\">\r\n              </div> -->\r\n            </div>\r\n            <div class=\"jp-volume-controls flex-item\">\r\n              <div class=\"widget knob-container\">\r\n                <div class=\"knob-wrapper-outer\">\r\n                  <div class=\"knob-wrapper\">\r\n                    <div class=\"knob-mask\">\r\n                      <div class=\"knob d3\"><span></span></div>\r\n                      <div class=\"handle\"></div>\r\n                      <div class=\"round\">\r\n                        <i *ngIf=\"percentage <= 50 && percentage > 0\" class=\"fa fa-volume-down\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"percentage === 0\" class=\"fa fa-volume-off\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"percentage > 50\" class=\"fa fa-volume-up\" aria-hidden=\"true\"></i>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"amluong\">\r\n              <input class=\"slider\" id=\"myRange\" type=\"range\" min=\"0\" max=\"100\" (input)=\"changeVolume($event)\">\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--main div-->\r\n</div>\r\n\r\n<!-- <div class=\"play-audio\">\r\n  <audio controls id=\"play-music\" (canplay)=\"showTime()\">\r\n    <source src=\"https://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/d05dc572c5362c687527/7872688770228947993?authen=exp=1540799273~acl=/d05dc572c5362c687527/*~hmac=97156bbaa5de5165c5b3655735719e0c\"            \r\n    type=\"audio/mpeg\">\r\n  </audio>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/main-content/content/listmusic/play-audio/play-audio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 6px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity .2s; }\n\n.slider:hover {\n  opacity: 1; }\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 8px;\n  height: 25px;\n  background: #4CAF50;\n  cursor: pointer; }\n\n.slider::-moz-range-thumb {\n  width: 8px;\n  height: 25px;\n  background: #4CAF50;\n  cursor: pointer; }\n\n.slider2 {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 6px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity .2s; }\n\n.slider2:hover {\n  opacity: 1; }\n\n.slider2::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 7px;\n  height: 7px;\n  background: #4CAF50;\n  border-radius: 50%;\n  cursor: pointer; }\n\n.slider2::-moz-range-thumb {\n  width: 7px;\n  height: 7px;\n  background: #4CAF50;\n  cursor: pointer;\n  border-radius: 50%; }\n\n.seek {\n  display: -ms-flexbox;\n  display: flex; }\n\n.play-audio {\n  display: none; }\n\n.hidePlay {\n  top: -28px; }\n\n#jp_container_1 > div.jp-type-playlist > div > div.jp-volume-controls.flex-item > div > div > div > div > div.round > i {\n  font-size: 21px;\n  color: #ececec;\n  padding-top: 6px; }\n\n@media only screen and (max-width: 1400px) {\n  .ms_player_close {\n    right: 0; } }\n\n.main-audio {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/player_bg.jpg")) + ");\n  background-size: cover;\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  z-index: 10000;\n  box-shadow: 0px 0px 24px 6px rgba(4, 4, 4, 0.2);\n  transition: all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out; }\n\n.play-audio {\n  width: 100%; }\n\n.flex-wrap {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-align: center;\n  align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/listmusic/play-audio/play-audio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayAudioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_services_audio_service__ = __webpack_require__("../../../../../src/app/Shared/services/audio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayAudioComponent = /** @class */ (function () {
    function PlayAudioComponent(audioService) {
        this.audioService = audioService;
        this.close_Player = false;
        this.close_Quality = false;
        this.isPlay = false;
        this.timeDrag = false;
        this.percentage = 50;
        this.hidePlay = false;
        this.x = 0;
    }
    PlayAudioComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.jp-play-bar').css('width', this.percentage + '%');
        this.changeVolume(this.percentage);
        this.playBar = document.body.querySelector('.jp-play-bar');
        this.audioBar = document.body.querySelector('.jp-seek-bar');
        this.bullet = document.body;
        this.audioBar.addEventListener('click', function (e) {
            _this.updateBar(e.pageX);
        });
        this.playBar.addEventListener('mousedown', function (e) {
            _this.timeDrag = true;
            _this.updateBar(e.pageX);
        });
        this.bullet.addEventListener('mouseup', function (e) {
            if (_this.timeDrag) {
                _this.timeDrag = false;
                _this.updateBar(e.pageX);
            }
        });
        this.bullet.addEventListener('mousemove', function (e) {
            if (_this.timeDrag) {
                _this.updateBar(e.pageX);
            }
        });
        this.bullet.addEventListener('mousemove', function (e) {
            if (_this.timeDrag) {
                _this.updateBar(e.pageX);
            }
        });
    };
    PlayAudioComponent.prototype.touchMove = function (event) {
        this.updateBar(event.touches[0].pageX);
    };
    PlayAudioComponent.prototype.updateBar = function (x) {
        var progress = $('.jp-progress');
        var position = x - progress.offset().left;
        var percentage = 100 * position / progress.width();
        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }
        this.percentage = Math.floor(percentage);
        this.changeVolume(Math.floor(percentage));
        console.log(percentage);
        $('.jp-play-bar').css('width', percentage + '%');
    };
    PlayAudioComponent.prototype.closePlayer = function () {
        this.close_Player = !this.close_Player;
        this.hidePlay = !this.hidePlay;
    };
    PlayAudioComponent.prototype.closeQuality = function () {
        this.close_Quality = !this.close_Quality;
    };
    PlayAudioComponent.prototype.changeVolume = function (value) {
        var volume = {
            volume: value
        };
        this.audioService.set_Volume(volume).subscribe(function (result) {
            console.log(result);
        });
    };
    PlayAudioComponent.prototype.nextAudio = function () {
        this.audioService.next_Audio().subscribe(function (result) {
            console.log(result);
        });
    };
    PlayAudioComponent.prototype.prevAudio = function () {
        this.audioService.prev_Audio().subscribe(function (result) {
            console.log(result);
        });
    };
    PlayAudioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-play-audio',
            template: __webpack_require__("../../../../../src/app/main-content/content/listmusic/play-audio/play-audio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/listmusic/play-audio/play-audio.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Shared_services_audio_service__["a" /* AudioService */]])
    ], PlayAudioComponent);
    return PlayAudioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/manager-music/manager-music.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms_content_wrapper padder_top80\">\n  <ngb-tabset type=\"pills\">\n    <ngb-tab>\n      <ng-template ngbTabTitle><b>List Device</b></ng-template>\n      <ng-template ngbTabContent>\n        <div class=\"row table-body\">\n          <div class=\"table-users\">\n            <div class=\"header\">Play list</div>\n            <table cellspacing=\"0\">\n              <tr>\n                <th style=\"width: 15%;\">Name List</th>\n                <th style=\"width: 20%;\">Date created</th>\n                <th style=\"width: 15%;\">Type</th>\n                <th style=\"width: 15%;\">Nhiệm vụ</th>\n                <th style=\"width: 20%;\">Edit</th>\n                <th style=\"width: 15%;\">Delete</th>\n              </tr>\n              <tr>\n                <td>1</td>\n                <td>2</td>\n                <td>3</td>\n                <td>4</td>\n                <td>5</td>\n                <td class=\"text-center\">\n                  6\n                </td>\n\n              </tr>\n              <tr>\n                <td>1</td>\n                <td>2</td>\n                <td>3</td>\n                <td>4</td>\n                <td>5</td>\n                <td class=\"text-center\">\n                  6\n                </td>\n\n              </tr>\n\n            </table>\n          </div>\n        </div>\n        <div class=\"btn btn-primary addHouse\" data-toggle=\"modal\" data-target=\"#exampleModal\" >\n          <span></span> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </div>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab>\n      <ng-template ngbTabTitle><b>List Group</b></ng-template>\n      <ng-template ngbTabContent>\n        <div class=\"row table-body\">\n\n          <div class=\"table-users\">\n            <div class=\"header\">Play list</div>\n\n            <table cellspacing=\"0\">\n              <tr>\n                <th style=\"width: 15%;\">Name List</th>\n                <th style=\"width: 20%;\">Date created</th>\n                <th style=\"width: 15%;\">Type</th>\n                <th style=\"width: 15%;\">Nhiệm vụ</th>\n                <th style=\"width: 20%;\">Edit</th>\n                <th style=\"width: 15%;\">Delete</th>\n              </tr>\n              <tr>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td class=\"text-center\">\n\n                </td>\n\n              </tr>\n\n            </table>\n          </div>\n        </div>\n        <div class=\"btn btn-primary addHouse\" data-toggle=\"modal\" data-target=\"#exampleModal\" >\n            <span></span> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        </div>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab>\n      <ng-template ngbTabTitle><b>List Zone</b></ng-template>\n      <ng-template ngbTabContent>\n        <div class=\"row table-body\">\n\n          <div class=\"table-users\">\n            <div class=\"header\">Play list</div>\n\n            <table cellspacing=\"0\">\n              <tr>\n                <th style=\"width: 15%;\">Name List</th>\n                <th style=\"width: 20%;\">Date created</th>\n                <th style=\"width: 15%;\">Type</th>\n                <th style=\"width: 15%;\">Nhiệm vụ</th>\n                <th style=\"width: 20%;\">Edit</th>\n                <th style=\"width: 15%;\">Delete</th>\n              </tr>\n              <tr>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td class=\"text-center\">\n\n                </td>\n\n              </tr>\n\n            </table>\n          </div>\n        </div>\n        <div class=\"btn btn-primary addHouse\" data-toggle=\"modal\" data-target=\"#exampleModal\" >\n            <span></span> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        </div>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-content/content/manager-music/manager-music.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n* {\n  color: #ffffff; }\n\n.add-btn {\n  position: absolute;\n  bottom: 125px;\n  right: 10px;\n  background: red;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  cursor: pointer; }\n\n.add-btn i {\n  color: #FFFFFF; }\n\n.addHouse {\n  top: 110px;\n  right: 20px;\n  transition: all 0.4s;\n  position: absolute;\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -ms-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  width: 30px;\n  height: 30px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center; }\n\n.header {\n  background-color: #3b414e;\n  color: white;\n  font-size: 1.5em;\n  padding: 1rem;\n  text-align: center;\n  text-transform: uppercase; }\n\nimg {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px; }\n\n.table-users {\n  border: 1px solid #262e3e;\n  border-radius: 4px;\n  box-shadow: 5px 5px 2px rgba(38, 46, 62, 0.2);\n  overflow: hidden;\n  width: 100%; }\n\ntable {\n  background: #3B414E;\n  font-size: 15px;\n  width: 100%; }\n  table td,\n  table th {\n    color: #CCD1DD;\n    padding: 10px;\n    text-align: center; }\n  table td {\n    text-align: center;\n    vertical-align: middle; }\n    table td:last-child {\n      font-size: 0.95em;\n      line-height: 1.4; }\n  table th {\n    background-color: #3b414e; }\n  table tr {\n    border-bottom: 1px solid; }\n  table tr:last-child {\n    border: none; }\n\n.form {\n  margin: 20px; }\n\n@media screen and (max-width: 700px) {\n  table,\n  tr,\n  td {\n    display: block; }\n  table tbody {\n    width: 100%;\n    display: contents; }\n  td:first-child {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 100px;\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -o-transform: translateY(-50%); }\n  td:not(:first-child) {\n    clear: both;\n    margin-left: 100px;\n    padding: 4px 20px 4px 115px !important;\n    position: relative;\n    text-align: left !important; }\n    td:not(:first-child):before {\n      color: white;\n      content: '';\n      display: block;\n      left: 0;\n      position: absolute; }\n  td:nth-child(2):before {\n    content: 'T\\EAn H\\1EB9n Gi\\1EDD:'; }\n  td:nth-child(3):before {\n    content: 'Lo\\1EA1i H\\1EB9n Gi\\1EDD:'; }\n  td:nth-child(4):before {\n    content: 'Nhi\\1EC7m v\\1EE5:'; }\n  td:nth-child(5):before {\n    content: 'Th\\1EDDi Gian H\\1EB9n:'; }\n  td:nth-child(6):before {\n    content: 'X\\F3  a:'; }\n  tr {\n    padding: 10px 0;\n    position: relative; }\n    tr:first-child {\n      display: none; } }\n\n@media screen and (max-width: 500px) {\n  tbody {\n    width: 100%;\n    display: block; }\n  .add-btn {\n    top: 0;\n    top: 91vh; }\n  .header {\n    background-color: transparent;\n    color: #00fdff;\n    font-size: 2em;\n    font-weight: 700;\n    padding: 0;\n    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); }\n  img {\n    border: 3px solid;\n    border-color: #eff5fa;\n    height: 100px;\n    margin: 0.5rem 0;\n    width: 100px; }\n  td:first-child {\n    background-color: #63a0d4;\n    border-bottom: 1px solid #4f93ce;\n    border-radius: 4px 4px 0 0;\n    position: relative;\n    top: 0;\n    transform: translateY(0);\n    width: 100%; }\n  td:not(:first-child) {\n    margin: 0;\n    padding: 5px 1em !important;\n    width: 100%; }\n    td:not(:first-child):before {\n      font-size: .8em;\n      padding-top: 0.3em;\n      position: relative; }\n  td:last-child {\n    padding-bottom: 1rem !important; }\n  tr {\n    border: 1px solid #77acd9;\n    border-radius: 4px;\n    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n    margin: 0.5rem 0;\n    padding: 0; }\n  .table-users {\n    border: none;\n    box-shadow: none;\n    overflow: visible; } }\n\n.table-body {\n  display: contents; }\n\n.back-home {\n  position: absolute;\n  font-size: 33px;\n  color: green;\n  cursor: pointer; }\n\n.row-header {\n  height: 109px;\n  display: contents; }\n\n@media screen and (max-width: 991px) {\n  .table-body {\n    margin: 0; } }\n\n@media screen and (min-width: 991px) {\n  .addHouse {\n    top: 129px;\n    right: -40px; } }\n\n@media screen and (min-width: 1200px) {\n  .addHouse {\n    top: 138px;\n    right: -45px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/manager-music/manager-music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerMusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerMusicComponent = /** @class */ (function () {
    function ManagerMusicComponent() {
    }
    ManagerMusicComponent.prototype.ngOnInit = function () {
    };
    ManagerMusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manager-music',
            template: __webpack_require__("../../../../../src/app/main-content/content/manager-music/manager-music.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/manager-music/manager-music.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagerMusicComponent);
    return ManagerMusicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/manager-user/manager-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Chakra+Petch);", ""]);

// module
exports.push([module.i, ".main {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    height: 100vh;\r\n    /* background-image: linear-gradient(to right top, #13022c, #150b40, #181055, #1a146c, #191983); */\r\n    font-family: 'Chakra Petch', sans-serif;\r\n}\r\n\r\n.list-items {\r\n    width: 350px;\r\n    height: auto;\r\n    /* background-image: linear-gradient(25deg, #26035c, #2e0c78, #341897, #3624b7, #3131d8); */\r\n    border-radius: 10px;\r\n    box-shadow: 0px 5px 35px #000;\r\n}\r\n\r\n.item {\r\n    width: 100%;\r\n    height: 50px;\r\n    border-top: 1px solid rgba(0, 0, 0, .4);\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 6fr 1fr;\r\n        grid-template-columns: 1fr 6fr 1fr;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.item input[type=\"checkbox\"],\r\n.item span {\r\n    margin: auto;\r\n}\r\n\r\n.item label,\r\n.item span {\r\n    color: rgba(255, 255, 255, .4);\r\n    transition: .3s all;\r\n}\r\n\r\n.item input[type=\"checkbox\"] {\r\n    -webkit-appearance: none;\r\n    height: 15px;\r\n    width: 15px;\r\n    border-radius: 3px;\r\n    border: 2px solid rgba(255, 255, 255, .4);\r\n    outline: none;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    transition: .2s all;\r\n    cursor: pointer;\r\n    z-index: 2;\r\n}\r\n\r\n.item input[type=\"checkbox\"]:before {\r\n    content: '\\F00C';\r\n    position: absolute;\r\n    font-family: fontAwesome;\r\n    font-size: 10px;\r\n    color: aqua;\r\n    opacity: 0;\r\n}\r\n\r\n.item input[type=\"checkbox\"]:checked:before {\r\n    opacity: 1;\r\n}\r\n\r\n.item input[type=\"checkbox\"]:checked {\r\n    border: 2px solid aqua;\r\n    box-shadow: 0px 0px 5px aqua;\r\n}\r\n\r\n.item input[type=\"checkbox\"]:checked~label {\r\n    color: #Fff;\r\n}\r\n\r\n.item input[type=\"checkbox\"]:checked~span {\r\n    color: aqua;\r\n    animation: animation .5s;\r\n}\r\n\r\n.item input[type=\"checkbox\"]:hover {\r\n    transform: scale(1.4);\r\n}\r\n\r\n.item label:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 200px;\r\n    height: 100%;\r\n    transform: skew(35deg);\r\n    left: -140px;\r\n    background: rgba(0, 0, 0, .1);\r\n    transition: .5s all;\r\n}\r\n\r\n.item input[type=\"checkbox\"]:checked~label:before {\r\n    left: 120%;\r\n}\r\n\r\n@keyframes animation {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(0.1) rotate(30deg);\r\n    }\r\n    50% {\r\n        transform: rotate(-10deg);\r\n    }\r\n    75% {\r\n        transform: rotate(3deg);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\np {\r\n    font-size: 40px;\r\n    color: aqua;\r\n    animation: animationTitle 5s infinite;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nspan>i{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/manager-user/manager-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <p>Manager User</p>\r\n  <div class=\"list-items\">\r\n    <div class=\"item\" *ngFor=\"let item of users\">\r\n      <input type=\"checkbox\">\r\n      <label for=\"\">{{item.fname + \" \" + item.lname}}</label>\r\n      <span *ngIf=\"!item.state\" (click)=\"block_User(item.id)\"><i class=\"fa fa-unlock\"></i></span>\r\n      <span *ngIf=\"item.state\" (click)=\"Unblock_User(item.id)\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-content/content/manager-user/manager-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_services_authentication_service__ = __webpack_require__("../../../../../src/app/Shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagerUserComponent = /** @class */ (function () {
    function ManagerUserComponent(authenService, toastr, vcr) {
        this.authenService = authenService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.user1 = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ManagerUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenService.get_All_User_User().subscribe(function (result) {
            _this.users = result.result;
        });
    };
    ManagerUserComponent.prototype.block_User = function (id) {
        var _this = this;
        this.authenService.block_User(id).subscribe(function (result) {
            var message = result.message;
            if (message === 'SYSTEM_ERROR') {
                _this.toastr.error(message, 'ERROR!');
            }
            if (message === 'BLOCK_SUCCESS') {
                _this.toastr.success(message, 'OK!');
                _this.user1 = !_this.user1;
            }
        });
    };
    ManagerUserComponent.prototype.Unblock_User = function (id) {
        var _this = this;
        this.authenService.unblock_User(id).subscribe(function (result) {
            var message = result.message;
            if (message === 'SYSTEM_ERROR') {
                _this.toastr.error(message, 'ERROR!');
            }
            if (message === 'UNBLOCK_SUCCESS') {
                _this.toastr.success(message, 'OK!');
                _this.user1 = !_this.user1;
            }
        });
    };
    ManagerUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-manager-user',
            template: __webpack_require__("../../../../../src/app/main-content/content/manager-user/manager-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/manager-user/manager-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Shared_services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]])
    ], ManagerUserComponent);
    return ManagerUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms_sidemenu_wrapper\" [ngClass]=\"{'open_menu': isOpenMenu}\">\r\n  <div class=\"ms_nav_close\" (click)=\"open_Menu()\">\r\n    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  <div class=\"ms_sidemenu_inner\">\r\n    <div class=\"ms_logo_inner\">\r\n      <div class=\"ms_logo\">\r\n        <a><img src=\"../../../assets/images/logo.png\" alt=\"\" class=\"img-fluid\" /></a>\r\n        <input class=\"file1\" type=\"file\" (change)=\"fileChangeEvent($event)\">\r\n        <div class=\"notify setpos\">\r\n          <span class=\"heartbit\"></span>\r\n          <span class=\"point\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ms_logo_open\">\r\n        <a><img src=\"../../../assets/images/open_logo.png\" alt=\"\" class=\"img-fluid\" /></a>\r\n        <input class=\"file2\" type=\"file\" (change)=\"fileChangeEvent($event)\">\r\n        <div class=\"notify setpos\">\r\n          <span class=\"heartbit\"></span>\r\n          <span class=\"point\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ms_nav_wrapper\">\r\n      <ul>\r\n        <li><a [routerLink]='[(\"./dashboard\")]' [ngClass]=\"{'active': isDashboard}\" title=\"Discover\" (click)=\"changeMenu(1)\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_discover\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              Dashboard\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Albums\" [routerLink]='[(\"./listmusic\")]' [ngClass]=\"{'active': isListMusic}\" (click)=\"changeMenu(2)\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_albums\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              List mucsic\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Artists\" [routerLink]='[(\"./manager-user\")]' [ngClass]=\"{'active': isManagerUser}\" (click)=\"changeMenu(3)\">\r\n            <span class=\"nav_icon\">\r\n              <i class=\"fa fa-sitemap size-icon\"></i>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              Manager user\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Genres\" [routerLink]='[(\"./update\")]' [ngClass]=\"{'active': isUpdateUser}\" (click)=\"changeMenu(4)\">\r\n            <span class=\"nav_icon\">\r\n              <i class=\"fa fa-user-circle size-icon \" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              Update User\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Top Tracks\" [routerLink]='[(\"./manager-music\")]'>\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_tracks\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              Ganarel music\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Free Music\" [routerLink]='[(\"./play-list\")]'>\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_music\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              Play List\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <!-- <li><a title=\"Top Tracks\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_tracks\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              top tracks\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Free Music\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_music\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              free music\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Stations\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_station\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              stations\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav_downloads\">\r\n        <li><a title=\"Downloads\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_download\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              downloads\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Purchased\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_purchased\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              purchased\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Favourites\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_favourite\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              favourites\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"History\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_history\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              history\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav_playlist\">\r\n        <li><a title=\"Featured Playlist\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_fe_playlist\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              featured playlist\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li><a title=\"Create Playlist\">\r\n            <span class=\"nav_icon\">\r\n              <span class=\"icon icon_c_playlist\"></span>\r\n            </span>\r\n            <span class=\"nav_text\">\r\n              create playlist\r\n            </span>\r\n          </a>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!---Header--->\r\n\r\n<div class=\"ms_header\">\r\n  <div class=\"ms_top_left\">\r\n    <div class=\"ms_top_search\">\r\n      <form (ngSubmit)=\"searchAudio()\">\r\n        <input type=\"text\" class=\"form-control\" [formControl]=\"inputSearch\">\r\n        <button class=\"btn btn-search btn-primary\" type=\"submit\"> <img src=\"../../assets/images/svg/search.svg\" alt=\"\"></button>\r\n        <div class=\"clear-float\"></div>\r\n      </form>\r\n      <span class=\"dropdown-el dropdown-el1\" id=\"typesearch\" [ngClass]=\"{'expanded': typesearch}\">\r\n        <input type=\"radio\" name=\"sortType2\" value=\"local\" id=\"sort-relevance\" [checked]=\"isLocal\"><label for=\"sort-relevance\"\r\n          (click)=\"changeTypeSearch('local')\"><img (click)=\"changeTypeSearch('local')\" src=\"../../../../assets/images/music-folder.png\"\r\n            alt=\"\"></label>\r\n        <input type=\"radio\" name=\"sortType2\" value=\"youtube\" id=\"sort-best\" [checked]=\"isYoutube\"><label for=\"sort-best\"\r\n          (click)=\"changeTypeSearch('youtube')\"><img (click)=\"changeTypeSearch('youtube')\" src=\"../../../../assets/images/youtube.png\"\r\n            alt=\"\"></label>\r\n      </span>\r\n    </div>\r\n    <div class=\"ms_top_trend\">\r\n      <!-- <span><a href=\"index.html#\" class=\"ms_color\">Trending Songs :</a></span> <span class=\"top_marquee\"><a href=\"index.html#\">Dream\r\n          your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8 More)</a></span> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"ms_top_right\">\r\n    <div class=\"ms_top_lang\">\r\n      <span translate>{{'Hello' | translate:user}}</span>\r\n    </div>\r\n    <div class=\"ms_top_lang2 language\">\r\n      <!-- <span>Language: </span>\r\n      <span (click)=\"switchLanguage('en')\">US</span>\r\n      <span (click)=\"switchLanguage('vn')\">VN</span> -->\r\n      <div class=\"timepicker col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <div class=\"timepicker-picker\">\r\n          <div class=\"nhiemvu\">\r\n            <span class=\"dropdown-el\">\r\n              <input type=\"radio\" name=\"sortType\" value=\"Relevance\" checked=\"checked\" id=\"sort-relevance1\"><label for=\"sort-relevance1\"\r\n                (click)=\"changedNhiemVu('vn')\">VN</label>\r\n              <input type=\"radio\" name=\"sortType\" value=\"Popularity\" id=\"sort-best1\"><label for=\"sort-best1\" (click)=\"changedNhiemVu('en')\">EN</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ms_top_btn\">\r\n        <!-- *ngIf=\"user1.roleId === 1\" -->\r\n      <a class=\"ms_btn reg_btn\"  [routerLink]='([\"./register\"])'><span translate>Register</span></a>\r\n      <a class=\"ms_btn login_btn\" (click)=\"logout()\"><span translate>Logout</span></a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-content/content/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.ms_nav_wrapper ul > li {\n  cursor: pointer; }\n\n@keyframes animationCloseMenu {\n  0% {\n    transform: rotate(-5deg);\n    -webkit-transform: rotate(-5deg);\n    -moz-transform: rotate(-5deg);\n    -ms-transform: rotate(-5deg);\n    -o-transform: rotate(-5deg); }\n  10% {\n    transform: rotate(5deg); }\n  20% {\n    transform: rotate(-5deg); }\n  30% {\n    transform: rotate(5deg); }\n  40% {\n    transform: rotate(-5deg);\n    -webkit-transform: rotate(-5deg);\n    -moz-transform: rotate(-5deg);\n    -ms-transform: rotate(-5deg);\n    -o-transform: rotate(-5deg); }\n  50% {\n    transform: rotate(5deg); }\n  60% {\n    transform: rotate(-5deg); }\n  70% {\n    transform: rotate(5deg); }\n  70% {\n    transform: rotate(-5deg); }\n  100% {\n    transform: rotate(5deg); } }\n\n@media (max-width: 991px) {\n  .ms_nav_close i {\n    top: -10px;\n    animation: animationCloseMenu 1s infinite; } }\n\n.ms_nav_close i {\n  cursor: pointer; }\n\ndiv.ms_sidemenu_inner > div.ms_logo_inner > div.ms_logo > input {\n  position: absolute;\n  top: 56px;\n  right: 0;\n  left: 14px;\n  bottom: 0;\n  width: 52px;\n  height: 52px;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0; }\n\ndiv.ms_sidemenu_inner > div.ms_logo_inner > div.ms_logo_open > input {\n  position: absolute;\n  top: 45px;\n  right: 0;\n  left: 74px;\n  bottom: 0;\n  width: 52px;\n  height: 52px;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0; }\n\na:not([href]):not([tabindex]) {\n  color: white;\n  text-decoration: none;\n  cursor: pointer; }\n\n.size-icon {\n  font-size: 25px; }\n\n.notify {\n  position: relative;\n  top: -22px;\n  right: -9px; }\n\n.heartbit {\n  position: absolute;\n  top: -60px;\n  right: 55px;\n  height: 25px;\n  width: 25px;\n  z-index: 10;\n  border: 5px solid #ef5350;\n  border-radius: 70px;\n  animation-iteration-count: infinite;\n  animation-delay: 0s;\n  animation-direction: normal;\n  animation-duration: 1s;\n  animation-fill-mode: none;\n  animation-iteration-count: infinite;\n  animation-name: heartbit;\n  animation-play-state: running;\n  animation-timing-function: ease-out; }\n\n.point {\n  width: 6px;\n  height: 6px;\n  border-radius: 30px;\n  background-color: #ef5350;\n  position: absolute;\n  top: -50px;\n  right: 65px; }\n\n@keyframes heartbit {\n  0% {\n    /* IE 9 */\n    /* Safari */\n    transform: scale(0);\n    opacity: 0.0; }\n  25% {\n    transform: scale(0.1);\n    opacity: 0.1; }\n  50% {\n    transform: scale(0.5);\n    opacity: 0.3; }\n  75% {\n    transform: scale(0.8);\n    opacity: 0.5; }\n  100% {\n    transform: scale(1);\n    opacity: 0.0; } }\n\n.language {\n  color: white;\n  cursor: pointer;\n  margin-right: 5px;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: -9px;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  -o-border-radius: 10px; }\n\ndiv.ms_header > div.ms_top_right > div.ms_top_lang2.language > span:nth-child(2) {\n  margin-right: 5px; }\n\ndiv.ms_header > div.ms_top_right > div.ms_top_lang2.language > span:nth-child(1):hover {\n  color: #3bc8e7;\n  transition: 0.3s;\n  -webkit-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -o-transition: 0.3s; }\n\ndiv.ms_header > div.ms_top_right > div.ms_top_lang2.language > span:nth-child(2):hover {\n  color: red;\n  transition: 0.5s;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -ms-transition: 0.5s;\n  -o-transition: 0.5s;\n  text-decoration: underline; }\n\ndiv.ms_header > div.ms_top_right > div.ms_top_lang2.language > span:nth-child(3):hover {\n  color: turquoise;\n  transition: 0.5s;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -ms-transition: 0.5s;\n  -o-transition: 0.5s;\n  text-decoration: underline; }\n\n.ms_top_search {\n  max-width: none;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ms_top_search input {\n  border-top-right-radius: 0px;\n  transition: 0.3s;\n  border-bottom-right-radius: 0px;\n  -webkit-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -o-transition: 0.3s; }\n\n.ms_top_right {\n  float: right; }\n\n.ms_top_search input:focus {\n  width: 120px; }\n\n.timepicker {\n  padding: 0px; }\n\n.nhiemvu {\n  color: #005BA6;\n  display: block;\n  border-radius: 0;\n  box-shadow: none;\n  font-size: 16px;\n  margin-top: 5px;\n  width: 100%; }\n  .nhiemvu select {\n    font-size: 15px;\n    width: 100%;\n    border: 2px solid #337ab7;\n    border-radius: 2px;\n    font-weight: 400;\n    color: inherit;\n    padding: 3px;\n    line-height: normal;\n    transition: border-color 0.2s ease, outline 0.2s ease; }\n    .nhiemvu select[disabled], .nhiemvu select:disabled {\n      opacity: 0.4;\n      cursor: not-allowed; }\n    .nhiemvu select:invalid {\n      color: inherit; }\n\n.dropdown-el {\n  position: relative;\n  display: inline-block;\n  min-height: 2em;\n  max-height: 30px;\n  overflow: hidden;\n  cursor: pointer;\n  text-align: left;\n  white-space: nowrap;\n  color: #444;\n  outline: none;\n  border: .06em solid transparent;\n  border-radius: 1em;\n  background-color: #cde4f5;\n  transition: 0.3s all ease-in-out; }\n  .dropdown-el input {\n    display: none; }\n  .dropdown-el label {\n    border-top: .06em solid #d9d9d9;\n    display: block;\n    height: 2em;\n    line-height: 2em;\n    padding-left: 1em;\n    padding-right: 3em;\n    cursor: pointer;\n    position: relative;\n    transition: 0.3s color ease-in-out; }\n    .dropdown-el label:nth-child(2) {\n      margin-top: 3em;\n      border-top: .06em solid #d9d9d9; }\n  .dropdown-el input:checked + label {\n    display: block;\n    border-top: none;\n    position: absolute;\n    top: 0; }\n    .dropdown-el input:checked + label:nth-child(2) {\n      margin-top: 0;\n      position: relative; }\n  .dropdown-el::after {\n    content: \"\";\n    position: absolute;\n    right: 0.8em;\n    top: 0.9em;\n    border: 0.3em solid #3694d7;\n    border-color: #3694d7 transparent transparent transparent;\n    transition: .4s all ease-in-out; }\n  .dropdown-el.expanded {\n    border: 0.06em solid #3694d7;\n    background: #fff;\n    border-radius: .25em;\n    padding: 0;\n    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 5px 0px;\n    max-height: 15em; }\n    .dropdown-el.expanded label {\n      border-top: .06em solid #d9d9d9; }\n      .dropdown-el.expanded label:hover {\n        color: #3694d7; }\n    .dropdown-el.expanded input:checked + label {\n      color: #3694d7; }\n    .dropdown-el.expanded::after {\n      transform: rotate(-180deg);\n      top: .55em; }\n\n.ms_top_right {\n  height: 30px; }\n\ndiv.ms_header > div.ms_top_left > div.ms_top_search > span.dropdown-el {\n  position: absolute;\n  right: 40px;\n  border-radius: 0; }\n\n.clear-float {\n  clear: both; }\n\n.btn-search {\n  float: right;\n  height: 40px;\n  width: 40px;\n  border-radius: 0px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  -ms-border-radius: 0px;\n  -o-border-radius: 0px; }\n\n@media (max-width: 991px) {\n  .language {\n    float: left;\n    position: relative;\n    top: 2px; }\n  .ms_top_search input {\n    width: 180px; }\n  .ms_top_search input:focus {\n    width: 223px; }\n  .ms_btn {\n    width: 80px; }\n  .dropdown-el {\n    width: 65px; }\n  .dropdown-el::after {\n    right: 10px;\n    top: 13px; }\n  #typesearch::after {\n    right: 3px; }\n  .btn-search {\n    height: 33px;\n    padding: 0;\n    width: 33px; }\n  #typesearch {\n    right: 33px; }\n  div.ms_header > div.ms_top_left > div.ms_top_search > form > input {\n    font-size: 16px; } }\n\n@media (max-width: 683px) {\n  .ms_top_btn .ms_btn {\n    position: relative;\n    width: 30px;\n    height: 30px; }\n  .ms_nav_close {\n    right: 2px; }\n  .ms_top_right {\n    padding-right: 2px; } }\n\n@media (max-width: 480px) {\n  .ms_nav_close {\n    right: -5px; }\n  .ms_top_search input {\n    width: 145px; }\n  .ms_top_search input:focus {\n    width: 145px; }\n  div.ms_header > div.ms_top_right > div.ms_top_lang2.language > span:nth-child(1) {\n    display: none; } }\n\n@media (min-width: 991px) {\n  .ms_top_search input {\n    width: 300px; }\n  .ms_top_search input:focus {\n    width: 350px; }\n  .nhiemvu {\n    margin-top: 13px; }\n  div.ms_header > div.ms_top_left > div.ms_top_search > span.dropdown-el {\n    max-height: 40px;\n    width: 70px; }\n  div.ms_header > div.ms_top_left > div.ms_top_search > span.dropdown-el > label:nth-child(4) {\n    padding-top: 5px; }\n  div.ms_header > div.ms_top_left > div.ms_top_search > span.dropdown-el > label:nth-child(2) {\n    line-height: 40px; }\n  div.ms_header > div.ms_top_left > div.ms_top_search > span.dropdown-el.expanded {\n    max-height: 15em; }\n  div.ms_header > div.ms_top_left > div.ms_top_search > span.dropdown-el::after {\n    right: 6px;\n    top: 17px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_services_authentication_service__ = __webpack_require__("../../../../../src/app/Shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared_services_file_service__ = __webpack_require__("../../../../../src/app/Shared/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Shared_services_searchBehavior_service__ = __webpack_require__("../../../../../src/app/Shared/services/searchBehavior.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuComponent = /** @class */ (function () {
    function MenuComponent(fileService, route, searchBehavior, translate, authenService) {
        this.fileService = fileService;
        this.route = route;
        this.searchBehavior = searchBehavior;
        this.translate = translate;
        this.authenService = authenService;
        this.isOpenMenu = false;
        this.user = {
            name: 'Xuân Hưng',
        };
        this.user1 = {
            roleId: 1
        };
        this.isDashboard = false;
        this.isListMusic = false;
        this.isManagerUser = false;
        this.isUpdateUser = false;
        this.isLanguage = 'vn';
        this.isYoutube = false;
        this.isLocal = true;
        this.typesearch = false;
        this.inputSearch = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('');
        if (localStorage.getItem('language') === 'vn') {
            translate.setDefaultLang('vn');
            this.isLanguage = 'vn';
        }
        else {
            translate.setDefaultLang('en');
            this.isLanguage = 'en';
        }
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenService.find_User_By_Token(localStorage.getItem('x')).subscribe(function (result) {
            _this.user1 = result.result.obj;
        });
        this.url = this.route.url;
        if (this.url === '/home/dashboard') {
            this.isDashboard = true;
            this.isListMusic = false;
            this.isUpdateUser = false;
            this.isManagerUser = false;
        }
        if (this.url === '/home/listmusic') {
            this.isDashboard = false;
            this.isListMusic = true;
            this.isUpdateUser = false;
            this.isManagerUser = false;
        }
        if (this.url === '/home/manager') {
            this.isDashboard = false;
            this.isManagerUser = true;
            this.isListMusic = false;
            this.isUpdateUser = false;
        }
        if (this.url === '/home/register') {
            this.isDashboard = false;
            this.isUpdateUser = true;
            this.isListMusic = false;
            this.isManagerUser = false;
        }
        $('.dropdown-el').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('expanded');
            $('#' + $(e.target).attr('for')).prop('checked', true);
        });
    };
    MenuComponent.prototype.open_Menu = function () {
        this.isOpenMenu = !this.isOpenMenu;
    };
    MenuComponent.prototype.changeMenu = function (menu) {
        if (menu === 1) {
            this.isDashboard = true;
            this.isListMusic = false;
            this.isUpdateUser = false;
            this.isManagerUser = false;
        }
        if (menu === 2) {
            this.isDashboard = false;
            this.isListMusic = true;
            this.isUpdateUser = false;
            this.isManagerUser = false;
        }
        if (menu === 3) {
            this.isDashboard = false;
            this.isManagerUser = true;
            this.isListMusic = false;
            this.isUpdateUser = false;
        }
        if (menu === 4) {
            this.isDashboard = false;
            this.isUpdateUser = true;
            this.isListMusic = false;
            this.isManagerUser = false;
        }
    };
    MenuComponent.prototype.fileChangeEvent = function (fileInput) {
        var formData = new FormData();
        var files = fileInput.target.files;
        console.log(files);
        this.fileService.uploadFile(formData, 'userId').subscribe(function (result) {
        });
    };
    MenuComponent.prototype.logout = function () {
        localStorage.removeItem('x');
        this.route.navigate(['../login']);
    };
    MenuComponent.prototype.searchAudio = function () {
        var type;
        if (this.isYoutube) {
            type = 'youtube';
        }
        else {
            type = 'local';
        }
        this.searchBehavior.sendKeySearch(this.inputSearch.value, type);
    };
    MenuComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    MenuComponent.prototype.changedNhiemVu = function (value) {
        if (value !== this.isLanguage) {
            this.switchLanguage(value);
            localStorage.setItem('language', value);
            this.isLanguage = value;
        }
    };
    MenuComponent.prototype.changeTypeSearch = function (value) {
        this.typesearch = true;
        if (value === 'youtube') {
            this.isYoutube = true;
            this.isLocal = false;
            this.typesearch = false;
        }
        else {
            this.isYoutube = false;
            this.isLocal = true;
            this.typesearch = false;
        }
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/main-content/content/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Shared_services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__Shared_services_searchBehavior_service__["a" /* SearchBehaviorService */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__Shared_services_authentication_service__["a" /* AuthenticationService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/play-list/play-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms_content_wrapper padder_top80\">\n    <div class=\"row table-body\">\n        <div class=\"table-users\">\n            <div class=\"header\">Play list</div>\n            <table cellspacing=\"0\">\n                <tr>\n                    <th style=\"width: 15%;\">Tên Playlist</th>\n                    <th style=\"width: 20%;\">Mô tả</th>\n                    <th style=\"width: 15%;\">Ngày tạo</th>\n                    <th style=\"width: 15%;\">Số bài hát</th>\n                    <th style=\"width: 20%;\">Lượt Nghe</th>\n                    <th style=\"width: 15%;\">Edit</th>\n                </tr>\n                <tr>\n                    <td>Play list 1</td>\n                    <td>Nhạc trẻ</td>\n                    <td>20/10/2018</td>\n                    <td>99</td>\n                    <td>69</td>\n                    <td class=\"text-center\">\n                        <button type=\"button\" class=\"btn btn-danger\">Remove</button>\n                    </td>\n\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>2</td>\n                    <td>3</td>\n                    <td>4</td>\n                    <td>5</td>\n                    <td class=\"text-center\">\n                        6\n                    </td>\n\n                </tr>\n\n            </table>\n        </div>\n    </div>\n    <div class=\"btn btn-primary addHouse\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n        <span></span> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create List Music</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form\">\n                    <input type=\"text\" class=\"nameList\" placeholder=\"Name List\">\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-content/content/play-list/play-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.add-btn {\n  position: absolute;\n  bottom: 125px;\n  right: 10px;\n  background: red;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  cursor: pointer; }\n\n.add-btn i {\n  color: #FFFFFF; }\n\n.ms_content_wrapper {\n  margin-top: 40px; }\n\n.addHouse {\n  top: 30px;\n  right: 20px;\n  transition: all 0.4s;\n  position: absolute;\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -ms-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  width: 30px;\n  height: 30px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center; }\n\n.header {\n  background-color: #3b414e;\n  color: white;\n  font-size: 1.5em;\n  padding: 1rem;\n  text-align: center;\n  text-transform: uppercase; }\n\nimg {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px; }\n\n.table-users {\n  border: 1px solid #262e3e;\n  border-radius: 4px;\n  box-shadow: 5px 5px 2px rgba(38, 46, 62, 0.2);\n  overflow: hidden;\n  width: 100%; }\n\ntable {\n  background: #3B414E;\n  font-size: 15px;\n  width: 100%; }\n  table td,\n  table th {\n    color: #CCD1DD;\n    padding: 10px;\n    text-align: center; }\n  table td {\n    text-align: center;\n    vertical-align: middle; }\n    table td:last-child {\n      font-size: 0.95em;\n      line-height: 1.4; }\n  table th {\n    background-color: #3b414e; }\n  table tr {\n    border-bottom: 1px solid; }\n  table tr:last-child {\n    border: none; }\n\n.form {\n  margin: 20px; }\n\n@media screen and (max-width: 991px) {\n  .table-body {\n    margin: 0; } }\n\n@media screen and (max-width: 700px) {\n  .addHouse {\n    top: 15px; }\n  table,\n  tr,\n  td {\n    display: block; }\n  table tbody {\n    width: 100%;\n    display: contents; }\n  td:first-child {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 100px;\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -o-transform: translateY(-50%); }\n  td:not(:first-child) {\n    clear: both;\n    margin-left: 100px;\n    padding: 4px 20px 4px 115px !important;\n    position: relative;\n    text-align: left !important; }\n    td:not(:first-child):before {\n      color: white;\n      content: '';\n      display: block;\n      left: 0;\n      position: absolute; }\n  td:nth-child(2):before {\n    content: 'T\\EAn H\\1EB9n Gi\\1EDD:'; }\n  td:nth-child(3):before {\n    content: 'Lo\\1EA1i H\\1EB9n Gi\\1EDD:'; }\n  td:nth-child(4):before {\n    content: 'Nhi\\1EC7m v\\1EE5:'; }\n  td:nth-child(5):before {\n    content: 'Th\\1EDDi Gian H\\1EB9n:'; }\n  td:nth-child(6):before {\n    content: 'X\\F3  a:'; }\n  tr {\n    padding: 10px 0;\n    position: relative; }\n    tr:first-child {\n      display: none; } }\n\n@media screen and (max-width: 500px) {\n  tbody {\n    width: 100%;\n    display: block; }\n  .addHouse {\n    top: 20px; }\n  .add-btn {\n    top: 0;\n    top: 91vh; }\n  .header {\n    background-color: transparent;\n    color: #00fdff;\n    font-size: 2em;\n    font-weight: 700;\n    padding: 0;\n    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); }\n  img {\n    border: 3px solid;\n    border-color: #eff5fa;\n    height: 100px;\n    margin: 0.5rem 0;\n    width: 100px; }\n  table td, table th {\n    color: #00fdff; }\n  td:first-child {\n    background-color: #337ab7;\n    border-bottom: 1px solid #4f93ce;\n    border-radius: 4px 4px 0 0;\n    position: relative;\n    top: 0;\n    transform: translateY(0);\n    width: 100%; }\n  td:not(:first-child) {\n    margin: 0;\n    padding: 5px 1em !important;\n    width: 100%; }\n    td:not(:first-child):before {\n      font-size: .8em;\n      padding-top: 0.3em;\n      position: relative; }\n  td:last-child {\n    padding-bottom: 1rem !important; }\n  tr {\n    border: 1px solid #77acd9;\n    border-radius: 4px;\n    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n    margin: 0.5rem 0;\n    padding: 0; }\n  .table-users {\n    border: none;\n    box-shadow: none;\n    overflow: visible; } }\n\n.table-body {\n  display: contents; }\n\n.back-home {\n  position: absolute;\n  font-size: 33px;\n  color: green;\n  cursor: pointer; }\n\n.row-header {\n  height: 109px;\n  display: contents; }\n\n@media screen and (min-width: 991px) {\n  .addHouse {\n    top: 129px;\n    right: -40px; } }\n\n@media screen and (min-width: 1200px) {\n  .addHouse {\n    top: 38px;\n    right: -45px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/play-list/play-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayListComponent = /** @class */ (function () {
    function PlayListComponent() {
    }
    PlayListComponent.prototype.ngOnInit = function () {
    };
    PlayListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-play-list',
            template: __webpack_require__("../../../../../src/app/main-content/content/play-list/play-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/play-list/play-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayListComponent);
    return PlayListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/content/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"fix-lex col-xs-10 col-sm-10 col-md-6 col-lg-4\">\r\n    <div class=\"row\">\r\n      <div class=\"form\">\r\n        <div class=\"tab-content\">\r\n          <div id=\"signup\">\r\n            <h1 *ngIf=\"isAdmin\">Tạo tài khoản người dùng</h1>\r\n            <h1 *ngIf=\"isUpdate\">Cập nhật tài khoản</h1>\r\n            <form *ngIf=\"isAdmin\">\r\n              <div class=\"top-row\">\r\n                <div class=\"field-wrap\">\r\n                  <label [ngClass]=\"{active: firstName.value, highlight: firstName.value}\">\r\n                    First Name\r\n                    <span class=\"req\">*</span>\r\n                  </label>\r\n                  <input type=\"text\" [formControl]=\"firstName\" required autocomplete=\"off\" />\r\n                </div>\r\n\r\n                <div class=\"field-wrap\">\r\n                  <label [ngClass]=\"{active: lastName.value, highlight: lastName.value}\">\r\n                    Last Name\r\n                    <span class=\"req\">*</span>\r\n                  </label>\r\n                  <input type=\"text\" [formControl]=\"lastName\" required autocomplete=\"off\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: email.value, highlight: email.value}\">\r\n                  Email Address\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"email\" [formControl]=\"email\" required autocomplete=\"off\" />\r\n              </div>\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: password.value, highlight: password.value}\">\r\n                  Set A Password\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"password\" [formControl]=\"password\" required autocomplete=\"off\" />\r\n              </div>\r\n              <button type=\"submit\" class=\"button button-block\">Register</button>\r\n            </form>\r\n            <form *ngIf=\"isUpdate\">\r\n              <div class=\"top-row\">\r\n                <div class=\"field-wrap\">\r\n                  <label [ngClass]=\"{active: firstName.value, highlight: firstName.value}\" translate>\r\n                    FirstName\r\n                    <span class=\"req\">*</span>\r\n                  </label>\r\n                  <input type=\"text\" [formControl]=\"firstName\" required autocomplete=\"off\" />\r\n                </div>\r\n  \r\n                <div class=\"field-wrap\">\r\n                  <label [ngClass]=\"{active: lastName.value, highlight: lastName.value}\" translate>\r\n                    LastName\r\n                    <span class=\"req\">*</span>\r\n                  </label>\r\n                  <input type=\"text\" [formControl]=\"lastName\" required autocomplete=\"off\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"top-row\">\r\n                <div class=\"field-wrap\">\r\n                  <label [ngClass]=\"{active: phoneNumber.value, highlight: phoneNumber.value}\" translate>\r\n                    Phone\r\n                    <span class=\"req\">*</span>\r\n                  </label>\r\n                  <input type=\"text\" [formControl]=\"phoneNumber\" required autocomplete=\"off\" />\r\n                </div>\r\n  \r\n                <div class=\"field-wrap\">\r\n                  <label [ngClass]=\"{active: companyName.value, highlight: companyName.value}\" translate>\r\n                      Company\r\n                    <span class=\"req\">*</span>\r\n                  </label>\r\n                  <input type=\"text\" [formControl]=\"companyName\" required autocomplete=\"off\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: password.value, highlight: password.value}\" translate>\r\n                    Password\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"password\" [formControl]=\"password\" required autocomplete=\"off\" />\r\n              </div>\r\n              <p class=\"forgot\">\r\n                <a (click)=\"changeAdmin()\" *ngIf=\"user.roleId === 1\" translate>Chuyển đổi tài khoản</a>\r\n              </p>\r\n              <button type=\"submit\" class=\"button button-block\" translate>Update</button>\r\n\r\n            </form>\r\n            <form *ngIf=\"isChangeAdmin\" (ngSubmit)=\"send_Email_Update()\">\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: email.value, highlight: email.value}\">\r\n                  Email Address\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"email\" [formControl]=\"email\" required autocomplete=\"off\" />\r\n              </div>\r\n              <p class=\"forgot\">\r\n                <a (click)=\"backToMenu()\" translate>Quay lại</a>\r\n              </p>\r\n              <button type=\"submit\" class=\"button button-block\" translate>Yêu cầu</button>\r\n            </form>\r\n            <form *ngIf=\"isCode\" (ngSubmit)=\"verify_Code()\">\r\n                <div class=\"field-wrap\">\r\n                    <label [ngClass]=\"{active: email.value, highlight: email.value}\">\r\n                      New Admin\r\n                      <span class=\"req\">*</span>\r\n                    </label>\r\n                    <input type=\"text\" [formControl]=\"email\" required autocomplete=\"off\" />\r\n                  </div>\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: myCode.value, highlight: myCode.value}\">\r\n                  Old Admin Code\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"text\" [formControl]=\"myCode\" required autocomplete=\"off\" />\r\n              </div>\r\n              <div class=\"field-wrap\">\r\n                <label [ngClass]=\"{active: yourCode.value, highlight: yourCode.value}\">\r\n                  New Admin Code\r\n                  <span class=\"req\">*</span>\r\n                </label>\r\n                <input type=\"text\" [formControl]=\"yourCode\" required autocomplete=\"off\" />\r\n              </div>\r\n              <p class=\"forgot\">\r\n                <a (click)=\"backToMenu()\" translate>Quay lại</a>\r\n              </p>\r\n              <button type=\"submit\" class=\"button button-block\" translate>Xác nhận</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-content/content/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\nhtml {\n  overflow-y: scroll; }\n\nbody {\n  background: #c1bdba;\n  font-family: 'Titillium Web', sans-serif; }\n\na {\n  text-decoration: none;\n  color: #1ab188;\n  transition: .5s ease; }\n  a:hover {\n    color: #179b77; }\n\n.form {\n  background: rgba(19, 35, 47, 0.9);\n  padding: 40px;\n  width: 100%;\n  margin-bottom: 40px;\n  border-radius: 4px;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3); }\n\n.tab-group {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0; }\n  .tab-group:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .tab-group li a {\n    display: block;\n    text-decoration: none;\n    padding: 15px;\n    background: rgba(160, 179, 176, 0.25);\n    color: #a0b3b0;\n    font-size: 26px;\n    float: left;\n    width: 50%;\n    text-align: center;\n    cursor: pointer;\n    transition: .5s ease; }\n    .tab-group li a:hover {\n      background: #179b77;\n      color: #ffffff; }\n  .tab-group .active a {\n    background: #1ab188;\n    color: #ffffff; }\n\nh1 {\n  text-align: center;\n  color: #ffffff;\n  font-weight: 300;\n  margin: 0 0 40px;\n  font-size: 30px; }\n\nlabel {\n  position: absolute;\n  transform: translateY(7px);\n  left: 5px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 16px;\n  font-weight: 300; }\n  label .req {\n    margin: 2px;\n    color: #1ab188; }\n\nlabel.active {\n  left: 0px;\n  font-size: 14px;\n  transform: translateY(37px);\n  -webkit-transform: translateY(37px);\n  -moz-transform: translateY(37px);\n  -ms-transform: translateY(37px);\n  -o-transform: translateY(37px); }\n  label.active .req {\n    opacity: 0; }\n\nlabel.highlight {\n  color: #ffffff; }\n\ninput,\ntextarea {\n  font-size: 16px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 8px 5px;\n  background: none;\n  background-image: none;\n  border: 1px solid #a0b3b0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: border-color .25s ease, box-shadow .25s ease; }\n  input:focus,\n  textarea:focus {\n    outline: 0;\n    border-color: #1ab188; }\n\ntextarea {\n  border: 2px solid #a0b3b0;\n  resize: vertical; }\n\n.field-wrap {\n  position: relative;\n  margin-bottom: 35px; }\n\n.top-row:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.top-row > div {\n  float: left;\n  width: 48%;\n  margin-right: 4%; }\n  .top-row > div:last-child {\n    margin: 0; }\n\n.button {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 9px 0;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n  background: #1ab188;\n  color: #ffffff;\n  transition: all 0.5s ease;\n  -webkit-appearance: none;\n  height: 36px;\n  border-radius: 60px;\n  cursor: pointer; }\n  .button:hover, .button:focus {\n    background: #179b77; }\n\n.button-block {\n  display: block;\n  width: 100%; }\n\n.forgot {\n  margin-top: -20px;\n  text-align: right; }\n\n#login > form > p > a:hover {\n  cursor: pointer;\n  color: #dfe4e3; }\n\nbutton:active {\n  background: #00805d;\n  color: #00805d; }\n\n.tab-group {\n  padding: 10px;\n  font-size: 20px; }\n\np.forgot a {\n  cursor: pointer; }\n\np.forgot a:hover {\n  color: white; }\n\np.forgot a:active {\n  color: white; }\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    font-size: 25px;\n    margin-bottom: 25px; }\n  label {\n    font-size: 14px;\n    transform: translateY(6px); }\n  input {\n    font-size: 14px; }\n  .tab-group li a {\n    padding: 10px;\n    font-size: 15px; }\n  label.active {\n    transform: translateY(35px); }\n  .field-wrap {\n    margin-bottom: 27px; }\n  .button-block {\n    padding: 5px 0;\n    height: 30px; }\n  .tab-group {\n    margin-bottom: 20px; }\n  #login > form > div:nth-child(2) {\n    margin-bottom: 28px; }\n  label {\n    left: 5px; } }\n\n@media only screen and (max-width: 375px) {\n  h1 {\n    font-size: 22px;\n    margin-bottom: 25px; }\n  label {\n    font-size: 12px;\n    transform: translateY(2px);\n    left: 5px; }\n  input {\n    font-size: 12px; }\n  .tab-group li a {\n    padding: 8px;\n    font-size: 13px; }\n  label.active {\n    font-size: 12px;\n    transform: translateY(25px);\n    -webkit-transform: translateY(25px);\n    -moz-transform: translateY(25px);\n    -ms-transform: translateY(25px);\n    -o-transform: translateY(25px); }\n  .field-wrap {\n    margin-bottom: 30px; }\n  .tab-group {\n    margin-bottom: 30px; }\n  .button,\n  .button-block {\n    padding: 5px 0;\n    height: 30px; }\n  .forgot {\n    font-size: 12px; } }\n\n@media only screen and (min-width: 601px) {\n  .label.active {\n    transform: translateY(39px);\n    -webkit-transform: translateY(39px); } }\n\n@media only screen and (max-width: 1200px) and (min-width: 992px) {\n  .tab-group > li > a {\n    font-size: 20px; }\n  .col-lg-4 {\n    max-width: 43%; } }\n\n.content {\n  margin: 0;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 100vh; }\n\n.fix-lex {\n  -ms-flex: none;\n      flex: none; }\n\n@media only screen and (max-width: 576px) {\n  .form {\n    margin: auto 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/content/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_services_authentication_service__ = __webpack_require__("../../../../../src/app/Shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(toastr, vcr, authenService) {
        this.toastr = toastr;
        this.vcr = vcr;
        this.authenService = authenService;
        this.firstName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.lastName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.phoneNumber = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.companyName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.myCode = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.yourCode = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.isUpdate = true;
        this.isAdmin = false;
        this.isChangeAdmin = false;
        this.isCode = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenService.find_User_By_Token(localStorage.getItem('x')).subscribe(function (result) {
            _this.user = result.result.obj;
        });
    };
    RegisterComponent.prototype.changeAdmin = function () {
        // your code
        this.isUpdate = false;
        this.isChangeAdmin = true;
    };
    RegisterComponent.prototype.updateUser = function () {
        var formData = {
            lname: this.lastName.value,
            fname: this.firstName.value,
            numberPhone: this.phoneNumber.value,
            company: this.companyName.value,
            password: this.password.value
        };
    };
    RegisterComponent.prototype.send_Email_Update = function () {
        var _this = this;
        var formdata = {
            email_me: this.user.email,
            email_other: this.email.value
        };
        this.authenService.send_Mail_Change_Admin(formdata).subscribe(function (result) {
            var response = result.result;
            var message = result.message;
            if (message === 'USER_NOT_FOUND') {
                _this.toastr.error(message, '404');
            }
            if (message === 'USER_NOT_ACTIVATE') {
                _this.toastr.warning(message, 'ACTIVATE NOW!');
            }
            if (message === 'SYSTEM_ERROR') {
                _this.toastr.error(message, 'ERROR!');
            }
            if (response === 'SEND_MAIL_TO_CHANGE_SUCCESS') {
                _this.toastr.success(response, 'OK!');
                _this.isChangeAdmin = false;
                _this.isCode = true;
            }
        });
    };
    RegisterComponent.prototype.backToMenu = function () {
        this.isCode = false;
        this.isChangeAdmin = false;
        this.isUpdate = true;
    };
    RegisterComponent.prototype.verify_Code = function () {
        var _this = this;
        var formdata = {
            email_me: this.user.email,
            email_other: this.email.value,
            code_me: this.myCode.value,
            code_other: this.yourCode.value
        };
        this.authenService.verify_Change_Admin(formdata).subscribe(function (result) {
            var response = result.result;
            var message = result.message;
            if (message === 'INVALID_CODE_OTHER') {
                _this.toastr.warning(message, 'Wrong');
            }
            if (message === 'INVALID_CODE_ME') {
                _this.toastr.warning(message, 'Wrong');
            }
            if (message === 'SYSTEM_ERROR') {
                _this.toastr.error(message, 'ERROR!');
            }
            if (response === 'CHANGE_ADMIN_SUCCESS') {
                _this.authenService.refesh_Token_Change_Admin(formdata.email_me).subscribe(function (result) {
                    localStorage.removeItem('x');
                    localStorage.setItem('x', result.result);
                    _this.toastr.success(response, 'OK!');
                });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/main-content/content/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/content/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__Shared_services_authentication_service__["a" /* AuthenticationService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-content/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms_main_wrapper\">\r\n    <app-menu></app-menu>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-content/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/main-content/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-content/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mainRoute.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_content_content_dashboard_zone_detail_zone_detail_component__ = __webpack_require__("../../../../../src/app/main-content/content/dashboard/zone-detail/zone-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_content_content_play_list_play_list_component__ = __webpack_require__("../../../../../src/app/main-content/content/play-list/play-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_content_content_manager_music_manager_music_component__ = __webpack_require__("../../../../../src/app/main-content/content/manager-music/manager-music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_content_content_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/main-content/content/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_content_content_content_component__ = __webpack_require__("../../../../../src/app/main-content/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Shared_services_authentication_service__ = __webpack_require__("../../../../../src/app/Shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_content_content_register_register_component__ = __webpack_require__("../../../../../src/app/main-content/content/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_content_home_component__ = __webpack_require__("../../../../../src/app/main-content/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_content_content_manager_user_manager_user_component__ = __webpack_require__("../../../../../src/app/main-content/content/manager-user/manager-user.component.ts");










var routing = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'vn', redirectTo: '/login', pathMatch: 'full' },
    { path: 'en', redirectTo: '/login', pathMatch: 'full' },
    {
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__Shared_services_authentication_service__["a" /* AuthenticationService */]],
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__main_content_home_component__["a" /* HomeComponent */], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__main_content_content_dashboard_dashboard_component__["a" /* DashboardComponent */]
            },
            {
                path: 'listmusic', component: __WEBPACK_IMPORTED_MODULE_4__main_content_content_content_component__["a" /* ContentComponent */]
            },
            {
                path: 'update', component: __WEBPACK_IMPORTED_MODULE_7__main_content_content_register_register_component__["a" /* RegisterComponent */]
            },
            {
                path: 'manager-user', component: __WEBPACK_IMPORTED_MODULE_9__main_content_content_manager_user_manager_user_component__["a" /* ManagerUserComponent */]
            },
            {
                path: 'manager-music', component: __WEBPACK_IMPORTED_MODULE_2__main_content_content_manager_music_manager_music_component__["a" /* ManagerMusicComponent */]
            },
            {
                path: 'play-list', component: __WEBPACK_IMPORTED_MODULE_1__main_content_content_play_list_play_list_component__["a" /* PlayListComponent */]
            },
            {
                path: 'zone-detail', component: __WEBPACK_IMPORTED_MODULE_0__main_content_content_dashboard_zone_detail_zone_detail_component__["a" /* ZoneDetailComponent */]
            }
        ]
    },
    { path: 'user', loadChildren: './UserModule/UserModule.module#UserModule' },
    { path: 'login', loadChildren: './Login/Login.module#LoginModule' }
];
var Routing = __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(routing, { useHash: true });
var MainRoute = Routing;


/***/ }),

/***/ "../../../../../src/app/pipes/format-name-audio.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatNameAudioPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatNameAudioPipe = /** @class */ (function () {
    function FormatNameAudioPipe() {
    }
    FormatNameAudioPipe.prototype.transform = function (value, args) {
        value = value.substr(0, value.length - 4);
        return value.substr(0, 25);
    };
    FormatNameAudioPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'formatNameAudio'
        })
    ], FormatNameAudioPipe);
    return FormatNameAudioPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/safe-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        var id = url.toString().substring(9, 20);
        console.log(id);
        url = 'https://www.youtube.com/embed/' + id;
        var videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log(videoUrl);
        return videoUrl;
    };
    SafeUrlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safeUrl'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());



/***/ }),

/***/ "../../../../../src/assets/images/player_bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "player_bg.5420542bde698ace9dab.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map