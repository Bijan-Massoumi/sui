"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/*
 * Wraps around all UI components for the Wallet Adapter.
 * Import this component where you desire your "Connect Wallet" button to be.
 */
var material_1 = require("@mui/material");
var ConnectWalletModal_1 = require("./ConnectWalletModal");
var ManageWalletModal_1 = require("./ManageWalletModal");
var theme = (0, material_1.createTheme)({
    typography: {
        "fontFamily": "\"IBM Plex Sans\", sans-serif",
    }
});
function WalletWrapper(_a) {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_1.ThemeProvider, __assign({ theme: theme }, { children: [(0, jsx_runtime_1.jsx)(ConnectWalletModal_1.ConnectWalletModal, {}), (0, jsx_runtime_1.jsx)(ManageWalletModal_1.ManageWalletModal, {})] })) }));
}
exports.WalletWrapper = WalletWrapper;
