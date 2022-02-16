import * as React from 'react';

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIconPortfolio = function SvgIconPortfolio(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 32,
    height: 26,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.996 3.839A3.839 3.839 0 0 1 4.836 0H25.31a3.839 3.839 0 0 1 3.839 3.839v1.498a3.841 3.841 0 0 1 2.559 3.62v12.797a3.839 3.839 0 0 1-3.839 3.84H4.835a3.839 3.839 0 0 1-3.839-3.84V3.84Zm2.56 3.62v14.295c0 .707.573 1.28 1.28 1.28h23.033a1.28 1.28 0 0 0 1.28-1.28v-2.56h-3.84a3.839 3.839 0 1 1 0-7.677h3.84v-2.56a1.28 1.28 0 0 0-1.28-1.28H4.835c-.449 0-.879-.076-1.28-.218Zm25.593 6.617h-3.84a1.28 1.28 0 0 0 0 2.56h3.84v-2.56Zm-2.56-8.957H4.835a1.28 1.28 0 0 1 0-2.56H25.31c.706 0 1.28.574 1.28 1.28v1.28Z",
    fill: "#979797"
  })));
};

declare function howLongUntilLunch(hours?: number, minutes?: number): string;

export { SvgIconPortfolio as PortfolioIcon, howLongUntilLunch };
