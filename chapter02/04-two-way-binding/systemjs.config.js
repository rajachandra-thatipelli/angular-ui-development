(function (global) {
  System.config({
    paths: {
      'angular2:': 'node_modules/@angular/'
    },
    map: {
      '@angular/core': 'angular2:core/bundles/core.umd.js',
      '@angular/common': 'angular2:common/bundles/common.umd.js',
      '@angular/compiler': 'angular2:compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'angular2:platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'angular2:platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/forms': 'angular2:forms/bundles/forms.umd.js',
      'rxjs': 'node_modules/rxjs'
    },
    packages: {
      src: {
        main: 'main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);