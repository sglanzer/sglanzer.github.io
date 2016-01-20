"use strict";define("sglanzer-github-io/app",["exports","ember","ember/resolver","ember/load-initializers","sglanzer-github-io/config/environment"],function(e,t,n,i,a){var r=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),(0,i["default"])(r,a["default"].modulePrefix),e["default"]=r}),define("sglanzer-github-io/components/app-version",["exports","ember-cli-app-version/components/app-version","sglanzer-github-io/config/environment"],function(e,t,n){var i=n["default"].APP.name,a=n["default"].APP.version;e["default"]=t["default"].extend({version:a,name:i})}),define("sglanzer-github-io/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("sglanzer-github-io/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("sglanzer-github-io/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","sglanzer-github-io/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("sglanzer-github-io/initializers/export-application-global",["exports","ember","sglanzer-github-io/config/environment"],function(e,t,n){function i(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var i,a=n["default"].exportApplicationGlobal;i="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[i]||(window[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[i]}}))}}e.initialize=i,e["default"]={name:"export-application-global",initialize:i}}),define("sglanzer-github-io/router",["exports","ember","sglanzer-github-io/config/environment"],function(e,t,n){var i=t["default"].Router.extend({location:n["default"].locationType});i.map(function(){}),e["default"]=i}),define("sglanzer-github-io/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"sglanzer-github-io/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var i=e.createTextNode("Welcome to Ember");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=new Array(1);return i[0]=e.createMorphAt(t,2,2,n),i},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("sglanzer-github-io/config/environment",["ember"],function(e){var t="sglanzer-github-io";try{var n=t+"/config/environment",i=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(i));return{"default":a}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("sglanzer-github-io/app")["default"].create({name:"sglanzer-github-io",version:"0.0.0+a37ccbd1"});