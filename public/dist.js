(()=>{function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}new(n((function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var n=[2,3,4].map((function(e){return e+2}));console.log(n)})))})();