"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = require("../../core/colors.js");

var _defaultExport = new String("header.jsx-1473492492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:48px;border-bottom:1px solid rgba(32,32,32,0.15);color:".concat(_colors.colors.white, ";}header.jsx-1473492492>div.jsx-1473492492:first-child{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}header.jsx-1473492492>div.jsx-1473492492:last-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.headerbar-logo.jsx-1473492492{box-sizing:border-box;width:48px;height:48px;margin:0 12px 0 0;padding-top:12px;border-right:1px solid rgba(32,32,32,0.15);text-align:center;}a.jsx-1473492492,a.jsx-1473492492:hover,a.jsx-1473492492:focus,a.jsx-1473492492:active,a.jsx-1473492492:visited{-webkit-text-decoration:none;text-decoration:none;}.headerbar-logo.jsx-1473492492 a.jsx-1473492492{width:48px;height:48px;cursor:pointer;}.headerbar-logo.jsx-1473492492 a.jsx-1473492492,.headerbar-logo.jsx-1473492492 a.jsx-1473492492:hover,.headerbar-logo.jsx-1473492492 a.jsx-1473492492:focus,.headerbar-logo.jsx-1473492492 a.jsx-1473492492:active,.headerbar-logo.jsx-1473492492 a.jsx-1473492492:visited{display:inline-block;background-color:transparent;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.headerbar-title.jsx-1473492492{overflow:hidden;text-overflow:ellipsis;font-size:14px;font-weight:500;-webkit-letter-spacing:0.01em;-moz-letter-spacing:0.01em;-ms-letter-spacing:0.01em;letter-spacing:0.01em;white-space:nowrap;}.notification.jsx-1473492492{position:relative;margin:8px 24px 0 0;cursor:pointer;}.notification.jsx-1473492492 .message.jsx-1473492492{margin-top:10px;cursor:inherit;}.notification.jsx-1473492492 .email.jsx-1473492492{margin-right:0;cursor:inherit;}.notification.jsx-1473492492>.count.jsx-1473492492{z-index:1;position:absolute;top:-6px;right:-10px;width:16px;height:16px;border-radius:50%;background-color:").concat(_colors.theme.secondary300, ";color:#fff;font-size:9px;font-weight:500;line-height:16px;text-align:center;cursor:inherit;}.notification.jsx-1473492492>.count.jsx-1473492492 i.jsx-1473492492{width:20px;height:20px;cursor:inherit;}.apps.jsx-1473492492{position:relative;width:24px;height:24px;margin:8px 0 0 0;}.apps.jsx-1473492492 .contents.jsx-1473492492{z-index:10000;position:absolute;top:28px;right:-6px;border-top:4px solid transparent;}.search.jsx-1473492492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:52px;margin:8px;}.modules.jsx-1473492492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:30vw;min-width:300px;max-width:560px;min-height:200px;max-height:465px;margin:0 8px 8px 8px;overflow:auto;overflow-x:hidden;}.app.jsx-1473492492{display:inline-block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:96px;margin:8px;padding:8px;border-radius:12px;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.app.jsx-1473492492:hover,.app.jsx-1473492492:focus{background-color:").concat(_colors.theme.primary050, ";cursor:pointer;}.app.jsx-1473492492:hover>.name.jsx-1473492492{font-weight:500;cursor:pointer;}.app.jsx-1473492492>img.jsx-1473492492{width:48px;height:48px;cursor:pointer;}.app.jsx-1473492492>.name.jsx-1473492492{margin-top:14px;color:rgba(0,0,0,0.87);font-size:12px;-webkit-letter-spacing:0.01em;-moz-letter-spacing:0.01em;-ms-letter-spacing:0.01em;letter-spacing:0.01em;line-height:14px;text-align:center;cursor:pointer;}.profile-alignment.jsx-1473492492{width:100%;padding:8px 0;}.profile.jsx-1473492492{position:relative;width:36px;height:36px;margin:2px 12px 0 24px;}.profile.jsx-1473492492 .icon.jsx-1473492492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;overflow:hidden;border-radius:50%;background-color:rgba(0,0,0,0.3);color:#fff;cursor:pointer;}.profile.jsx-1473492492 .icon.jsx-1473492492>.initials.jsx-1473492492{font-size:14px;font-weight:500;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-align:center;text-transform:uppercase;}.profile.jsx-1473492492 .icon.jsx-1473492492>img.jsx-1473492492{max-width:100%;max-height:100%;}.profile.jsx-1473492492 .contents.jsx-1473492492{z-index:10000;position:absolute;top:34px;right:-6px;width:310px;border-top:4px solid transparent;}.header.jsx-1473492492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:24px;padding-top:20px;}.header.jsx-1473492492>.icon.jsx-1473492492{width:48px;height:48px;}.header.jsx-1473492492>.details.jsx-1473492492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:20px;color:#000;font-size:14px;font-weight:400;}.details.jsx-1473492492>.name.jsx-1473492492{margin-bottom:3px;font-size:16px;line-height:19px;}.details.jsx-1473492492>.email.jsx-1473492492{margin-bottom:6px;font-size:14px;line-height:16px;}.details.jsx-1473492492>.edit_profile.jsx-1473492492{color:rgba(0,0,0,0.87);font-size:12px;line-height:14px;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}.blue.jsx-1473492492{background-color:#2c6693;}.blue.jsx-1473492492>.first.jsx-1473492492>.title.jsx-1473492492{color:#fff;}.blue.jsx-1473492492>.last.jsx-1473492492>.notification.jsx-1473492492>i.jsx-1473492492,.blue.jsx-1473492492>.last.jsx-1473492492>.apps.jsx-1473492492>i.jsx-1473492492:first-child{color:#fff;cursor:pointer;}.base.blue.jsx-1473492492 .profile.jsx-1473492492>.icon.jsx-1473492492>.initials.jsx-1473492492{color:#fff;cursor:pointer;}"));

_defaultExport.__hash = "1473492492";
var _default = _defaultExport;
exports.default = _default;