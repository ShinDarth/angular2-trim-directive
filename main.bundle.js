webpackJsonp(["main"],{

/***/ "../../../../../example/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../example/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../example/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- input -->\n\n<h2 class=\"mt-5 mb-5\">\n  Awesome form\n</h2>\n\n<div class=\"card border-dark mx-auto\">\n  <div class=\"card-header\">\n    Trim values on\n  </div>\n  <div class=\"card-body text-dark\">\n    <form novalidate>\n      <div class=\"form-group\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" value=\"input\" [formControl]=\"trigger\" id=\"inputTrigger\">\n          <label class=\"form-check-label\" for=\"inputTrigger\">\n            <code class=\"ml-1 mr-1\">input</code>(default)\n          </label>\n        </div>\n\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" value=\"blur\" [formControl]=\"trigger\" id=\"blurTrigger\">\n          <label class=\"form-check-label\" for=\"blurTrigger\">\n            <code class=\"ml-1 mr-1\">blur</code>\n          </label>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<hr>\n\n<form novalidate [formGroup]=\"exampleForm\" class=\"mx-auto\" (ngSubmit)=\"onSubmit()\">\n  <!--text-->\n  <div class=\"form-group\">\n    <label>\n      Text.\n      <small *ngFor=\"let key of getKeys(exampleFormInfo['text'])\">\n        <i><b>{{key | titlecase}}</b>: {{exampleFormInfo['text'][key]}}; </i>\n      </small>\n    </label>\n    <input formControlName=\"text\" placeholder=\"text\" class=\"form-control\" [trim]=\"trigger.value\"/>\n  </div>\n\n  <!--undefined-->\n  <div class=\"form-group\">\n    <label>\n      Model is `undefined`.\n      <small *ngFor=\"let key of getKeys(exampleFormInfo['text_undefined'])\">\n        <i><b>{{key | titlecase}}</b>: {{exampleFormInfo['text_undefined'][key]}}; </i>\n      </small>\n    </label>\n    <input formControlName=\"text_undefined\" placeholder=\"text\" class=\"form-control\" [trim]=\"trigger.value\"/>\n  </div>\n\n  <!--autofill-->\n  <div class=\"form-group\">\n    <label>\n      Autofill text\n      <small *ngFor=\"let key of getKeys(exampleFormInfo['text_autofill'])\">\n        <i><b>{{key | titlecase}}</b>: {{exampleFormInfo['text_autofill'][key]}}; </i>\n      </small>\n    </label>\n    <input name=\"name\" formControlName=\"text_autofill\" placeholder=\"text\" class=\"form-control\" [trim]=\"trigger.value\" autocomplete=\"on\"/>\n  </div>\n\n  <!--email-->\n  <div class=\"form-group\">\n    <label>\n      Email.\n      <small *ngFor=\"let key of getKeys(exampleFormInfo['email'])\">\n        <i><b>{{key | titlecase}}</b>: {{exampleFormInfo['email'][key]}}; </i>\n      </small>\n    </label>\n    <input formControlName=\"email\" placeholder=\"email@example.com\" type=\"email\" class=\"form-control\"\n           [trim]=\"trigger.value\" autocomplete=\"true\"/>\n  </div>\n\n  <!-- number -->\n  <div class=\"form-group\">\n    <label>\n      Number\n      <small *ngFor=\"let key of getKeys(exampleFormInfo['number'])\">\n        <i><b>{{key | titlecase}}</b>: {{exampleFormInfo['number'][key]}}; </i>\n      </small>\n    </label>\n    <input formControlName=\"number\" placeholder=\"0\" type=\"number\" class=\"form-control\" [trim]=\"trigger.value\"/>\n  </div>\n\n  <!-- url -->\n  <div class=\"form-group\">\n    <label>\n      URL\n      <small *ngFor=\"let key of getKeys(exampleFormInfo['url'])\">\n        <i><b>{{key | titlecase}}</b>: {{exampleFormInfo['url'][key]}}; </i>\n      </small>\n    </label>\n    <input formControlName=\"url\" placeholder=\"https://www.github.com\" type=\"url\" class=\"form-control\"\n           [trim]=\"trigger.value\"/>\n  </div>\n\n  <!--textarea-->\n  <div class=\"form-group\">\n    <label>\n      Textarea.(maxLength=10)\n      <small *ngFor=\"let key of getKeys(exampleFormInfo['textarea'])\">\n        <i><b>{{key | titlecase}}</b>: {{exampleFormInfo['textarea'][key]}}; </i>\n      </small>\n    </label>\n    <textarea formControlName=\"textarea\" placeholder=\"textarea\" class=\"form-control\" [trim]=\"trigger.value\"></textarea>\n  </div>\n\n  <div class=\"right\">\n    <button>Submit</button>\n  </div>\n\n  <hr/>\n  <pre>\n    <p> Form values {{ exampleForm.value | json }}</p>\n    <p> Form status {{ exampleForm.status | json }}</p>\n  </pre>\n\n</form>\n"

/***/ }),

/***/ "../../../../../example/src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.exampleFormInfo = {};
        this.trigger = this.fb.control('input');
        this.exampleForm = this.fb.group({
            'text': ['', forms_1.Validators.required],
            'text_undefined': [null, forms_1.Validators.required],
            'text_autofill': [undefined, forms_1.Validators.required],
            'email': ['', [forms_1.Validators.required, forms_1.Validators.email]],
            'number': ['', [forms_1.Validators.required]],
            'url': ['', [forms_1.Validators.required]],
            'textarea': ['', [forms_1.Validators.required, forms_1.Validators.maxLength(10)]]
        });
        this.updateStates();
    }
    /**
     * ngFor Helper
     */
    AppComponent.prototype.getKeys = function (obj) {
        this.updateStates();
        return Object.keys(obj);
    };
    /**
     * Can be simplified
     */
    AppComponent.prototype.updateStates = function () {
        var fields = ['status', 'dirty', 'touched'];
        for (var item in this.exampleForm.controls) {
            this.exampleFormInfo[item] = {};
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                this.exampleFormInfo[item][field] = this.exampleForm.controls[item][field];
            }
        }
    };
    AppComponent.prototype.onSubmit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            'selector': 'in-app',
            template: __webpack_require__("../../../../../example/src/app/app.component.html"),
            'styles': ['pre { background-color: whitesmoke;} small {color: #AAA}'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(0, core_1.Inject(forms_1.FormBuilder))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../example/src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var app_component_1 = __webpack_require__("../../../../../example/src/app/app.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var _1 = __webpack_require__("../../../../../src/index.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                _1.InputTrimModule,
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../example/src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../example/src/app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/input-trim.directive.ts"));
__export(__webpack_require__("../../../../../src/input-trim.module.ts"));


/***/ }),

/***/ "../../../../../src/input-trim.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var InputTrimDirective = /** @class */ (function (_super) {
    __extends(InputTrimDirective, _super);
    function InputTrimDirective(renderer, elementRef, compositionMode) {
        var _this = _super.call(this, renderer, elementRef, compositionMode) || this;
        /**
         * Keep the type of input element in a cache.
         *
         * @type {string}
         * @private
         */
        _this._type = 'text';
        _this._sourceRenderer = renderer;
        _this._sourceElementRef = elementRef;
        return _this;
    }
    InputTrimDirective_1 = InputTrimDirective;
    Object.defineProperty(InputTrimDirective.prototype, "type", {
        // Get the element type
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value || 'text';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTrimDirective.prototype, "value", {
        /**
         * Get the cached value for comparison.
         *
         */
        get: function () {
            return this._value;
        },
        /**
         * Set a new value to the field and model.
         *
         */
        set: function (val) {
            // to prevent setting `undefined` if the model is undefined or null
            //
            // FIX: https://github.com/anein/angular2-trim-directive/issues/18
            //
            val = val || '';
            // update element
            this.writeValue(val);
            // update model
            this.onChange(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the value on the blur event.
     */
    InputTrimDirective.prototype.onBlur = function (event, value) {
        // update value if only changed
        // FIX: https://github.com/anein/angular2-trim-directive/issues/17
        if (value.trim() !== this.value) {
            this.updateValue(event, value);
        }
        this.onTouched();
    };
    /**
     * Updates the value on the input event.
     */
    InputTrimDirective.prototype.onInput = function (event, value) {
        this.updateValue(event, value);
    };
    /**
     * Writes a new value to the element based on the type of input element.
     *
     * @param {any} value - new value
     */
    InputTrimDirective.prototype.writeValue = function (value) {
        this._value = value;
        this._sourceRenderer.setProperty(this._sourceElementRef.nativeElement, 'value', value);
        // a dirty trick (or magic) goes here:
        // it updates the element value if `setProperty` doesn't set it for some reason.
        //
        // FIX: https://github.com/anein/angular2-trim-directive/issues/9
        //
        if (this._type !== 'text') {
            this._sourceRenderer.setAttribute(this._sourceElementRef.nativeElement, 'value', value);
        }
    };
    /**
     * Trims an input value, and sets it to the model and element.
     *
     * @param {string} value - input value
     * @param {string} event - input event
     */
    InputTrimDirective.prototype.updateValue = function (event, value) {
        // check if the user has set an optional attribute. Trimmmm!!! Uhahahaha!
        this.value = (this.trim !== '' && event !== this.trim) ? value : value.trim();
    };
    __decorate([
        core_1.Input()
    ], InputTrimDirective.prototype, "trim", void 0);
    __decorate([
        core_1.Input()
    ], InputTrimDirective.prototype, "type", null);
    __decorate([
        core_1.HostListener('blur', ['$event.type', '$event.target.value'])
    ], InputTrimDirective.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('input', ['$event.type', '$event.target.value'])
    ], InputTrimDirective.prototype, "onInput", null);
    InputTrimDirective = InputTrimDirective_1 = __decorate([
        core_1.Directive({
            selector: 'input[trim], textarea[trim]',
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: InputTrimDirective_1, multi: true }]
        }),
        __param(0, core_1.Inject(core_1.Renderer2)),
        __param(1, core_1.Inject(core_1.ElementRef)),
        __param(2, core_1.Optional()), __param(2, core_1.Inject(forms_1.COMPOSITION_BUFFER_MODE))
    ], InputTrimDirective);
    return InputTrimDirective;
    var InputTrimDirective_1;
}(forms_1.DefaultValueAccessor));
exports.InputTrimDirective = InputTrimDirective;


/***/ }),

/***/ "../../../../../src/input-trim.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_trim_directive_1 = __webpack_require__("../../../../../src/input-trim.directive.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var InputTrimModule = /** @class */ (function () {
    function InputTrimModule() {
    }
    InputTrimModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [input_trim_directive_1.InputTrimDirective],
            declarations: [input_trim_directive_1.InputTrimDirective],
            providers: [],
        })
    ], InputTrimModule);
    return InputTrimModule;
}());
exports.InputTrimModule = InputTrimModule;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example/src/main.ts");


/***/ })

},[0]);