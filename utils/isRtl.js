"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/** @format */
function _default() {
  return document.documentElement.getAttribute('dir') === 'rtl';
}