'use strict';
const _0x2fc4 = [
    'path',
    'electron.h',
    'file://',
    'server',
    'Visibility',
    'destroy',
    'BCFuK',
    'vkiEA',
    'exports',
    'closed',
    'vbNnA',
    'Sec',
    'parse',
    'lready!',
    'uoAZT',
    'getSelecte',
    'name',
    'createFrom',
    'json',
    'removeAllL',
    'split',
    'electron',
    '2124ybtTFK',
    '526UIJGIR',
    'v.switchMo',
    '1240890lqVeXX',
    '224486HYscNL',
    'aEPVz',
    'broadcast',
    'nSLrV',
    './icon.png',
    'Selection',
    'ppgYx',
    '&mode=',
    'tmEnu',
    'disableWeb',
    'NUSZS',
    'error',
    'zmqBE',
    'loadURL',
    'readFileSy',
    'zKyPf',
    'process',
    'resize',
    '3IfCHyk',
    'warn',
    ':focusAsse',
    'RxNQP',
    '../cocos-i',
    'FxKcU',
    '2257537iTYZgG',
    'd.js',
    'Message',
    ':focusNode',
    'WnzfO',
    'setMenu',
    'ch-asset',
    'query-port',
    '180mnSdPl',
    'utf-8',
    'aScript',
    '715092IazmiD',
    'nspector-c',
    './package.',
    'how',
    'node',
    'existsSync',
    'VWigQ',
    '#2e2c29',
    'index_low_',
    'isteners',
    'versions',
    'gHzsW',
    'YrlQc',
    'setMenuBar',
    'version',
    'onfig.json',
    'QnbHG',
    'ector\x20v',
    'request',
    'executeJav',
    'config.jso',
    'index.html',
    'tml',
    '1118250LQUfAA',
    'webContent',
    'select',
    'mainPreloa',
    'join',
    'NuUOJ',
    'KQmwO',
    'asset',
    'setImage',
    'ready-to-s',
    'ENTyZ',
    'unselect',
    'Cocos\x20Insp',
    'show',
    'Path',
    'ZemYb',
    'jlFNO',
    '2567kEcBRa',
    'has\x20tray\x20a',
    'WuqEV',
    'click',
    '?port=',
    'ui-kit:tou',
    'de('
];
const _0x298219 = _0x91b0;
(function (_0x497570, _0x3ae01f) {
    const _0x804a82 = _0x91b0;
    while (!![]) {
        try {
            const _0x40da19 = parseInt(_0x804a82(0xf2)) * -parseInt(_0x804a82(0xf3)) + -parseInt(_0x804a82(0xc4)) + -parseInt(_0x804a82(0xad)) + -parseInt(_0x804a82(0xf6)) * -parseInt(_0x804a82(0x9c)) + parseInt(_0x804a82(0xf5)) + parseInt(_0x804a82(0xaa)) * -parseInt(_0x804a82(0xd5)) + parseInt(_0x804a82(0xa2));
            if (_0x40da19 === _0x3ae01f)
                break;
            else
                _0x497570['push'](_0x497570['shift']());
        } catch (_0x387820) {
            _0x497570['push'](_0x497570['shift']());
        }
    }
}(_0x2fc4, -0x3eb7d + 0x4ac51 + -0x22a9b * -0x5));
const {BrowserWindow, app, remote, ipcMain, Menu, Tray, nativeImage} = require(_0x298219(0xf1)), path = require(_0x298219(0xdc)), pcs = require(_0x298219(0x9a)), folder = '', devTools = ![];
let win, tray = null, mode = 0x235b + -0x236 + -0x2125, unloaded = ![];
function _0x91b0(_0x3f7af8, _0x584b1a) {
    _0x3f7af8 = _0x3f7af8 - (-0x13d * -0x1 + -0x1aad + 0x19fc);
    let _0x51f8ed = _0x2fc4[_0x3f7af8];
    return _0x51f8ed;
}
const PKG_NAME = require(_0x298219(0xaf) + _0x298219(0xee))[_0x298219(0xec)], PKG_VERSION = require(_0x298219(0xaf) + _0x298219(0xee))[_0x298219(0xbb)];
let fs = require('fs'), _configPath = path[_0x298219(0xc8)](__dirname, _0x298219(0xc1) + 'n'), __parentConfig = path[_0x298219(0xc8)](__dirname, _0x298219(0xa0) + _0x298219(0xae) + _0x298219(0xbc));
function readConfig() {
    const _0x498f2f = _0x298219, _0xbf322f = { 'tmEnu': _0x498f2f(0xab) };
    let _0xcd3fc6 = '';
    return fs[_0x498f2f(0xb2)](__parentConfig) ? _0xcd3fc6 = fs[_0x498f2f(0x98) + 'nc'](__parentConfig, { 'encoding': _0xbf322f[_0x498f2f(0x92)] }) : _0xcd3fc6 = fs[_0x498f2f(0x98) + 'nc'](_configPath, { 'encoding': _0xbf322f[_0x498f2f(0x92)] }), JSON[_0x498f2f(0xe8)](_0xcd3fc6);
}
let disableWebSec = Boolean(readConfig()[_0x298219(0x93) + _0x298219(0xe7)]);
module[_0x298219(0xe4)] = {
    async 'load'() {
        const _0x235784 = _0x298219;
        ipcMain['on'](PKG_NAME + _0x235784(0xa5), focusNode), ipcMain['on'](PKG_NAME + (_0x235784(0x9e) + 't'), focusAsset);
    },
    'unload'() {
        const _0x2da22d = _0x298219;
        unloaded = !![], ipcMain[_0x2da22d(0xef) + _0x2da22d(0xb6)](PKG_NAME + _0x2da22d(0xa5)), ipcMain[_0x2da22d(0xef) + _0x2da22d(0xb6)](PKG_NAME + (_0x2da22d(0x9e) + 't'));
    },
    'methods': {
        'previewMode'() {
            const _0x584c3e = _0x298219, _0x193e14 = {
                    'FxKcU': function (_0x59ecc9, _0x4b6ab1) {
                        return _0x59ecc9(_0x4b6ab1);
                    }
                };
            if (unloaded)
                return;
            _0x193e14[_0x584c3e(0xa1)](tryShowWindow, -0xc5e + 0x15b3 + -0x955 * 0x1);
        },
        'buildMobileMode'() {
            const _0x369d5f = _0x298219, _0x49dcca = {
                    'aEPVz': function (_0x390cb3, _0x102cc8) {
                        return _0x390cb3(_0x102cc8);
                    }
                };
            if (unloaded)
                return;
            _0x49dcca[_0x369d5f(0xf7)](tryShowWindow, -0x13 * 0xb + 0xd3 * -0x2f + -0xd * -0x30b);
        },
        'buildDesktopMode'() {
            const _0x15ded3 = _0x298219, _0x45d9f3 = {
                    'jlFNO': function (_0x254e9b, _0x3ca0cd) {
                        return _0x254e9b(_0x3ca0cd);
                    }
                };
            if (unloaded)
                return;
            _0x45d9f3[_0x15ded3(0xd4)](tryShowWindow, 0x10f5 + 0xd81 + -0x1e73);
        },
        'openCustomPage'() {
            const _0x38bb09 = _0x298219, _0x53866a = {
                    'RxNQP': function (_0x150d5e, _0x25d3f1) {
                        return _0x150d5e(_0x25d3f1);
                    }
                };
            if (unloaded)
                return;
            _0x53866a[_0x38bb09(0x9f)](tryShowWindow, -0x19e7 + 0x1581 + 0x468);
        }
    }
};
function focusNode(_0x2355df, _0x2c7192) {
    const _0x1cd463 = _0x298219, _0x1b908b = { 'zmqBE': _0x1cd463(0xb1) };
    let _0x1988b3 = Editor[_0x1cd463(0x8f)][_0x1cd463(0xeb) + 'd'](_0x1b908b[_0x1cd463(0x96)]);
    Editor[_0x1cd463(0x8f)][_0x1cd463(0xcf)](_0x1b908b[_0x1cd463(0x96)], _0x1988b3), Editor[_0x1cd463(0x8f)][_0x1cd463(0xc6)](_0x1b908b[_0x1cd463(0x96)], _0x2c7192);
}
function focusAsset(_0x283407, _0x86648d) {
    const _0x739318 = _0x298219, _0x9100b7 = {
            'YrlQc': _0x739318(0xda) + _0x739318(0xa8),
            'vbNnA': _0x739318(0xcb)
        };
    Editor[_0x739318(0xa4)][_0x739318(0x8c)](_0x9100b7[_0x739318(0xb9)], _0x86648d);
    let _0x1337f7 = Editor[_0x739318(0x8f)][_0x739318(0xeb) + 'd'](_0x9100b7[_0x739318(0xe6)]);
    Editor[_0x739318(0x8f)][_0x739318(0xcf)](_0x9100b7[_0x739318(0xe6)], _0x1337f7), Editor[_0x739318(0x8f)][_0x739318(0xc6)](_0x9100b7[_0x739318(0xe6)], _0x86648d);
}
async function showWindow() {
    const _0x4d7df2 = _0x298219, _0x245f2d = {
            'nSLrV': function (_0x283e28, _0x9c1ba1) {
                return _0x283e28 + _0x9c1ba1;
            },
            'NuUOJ': _0x4d7df2(0xd0) + _0x4d7df2(0xbe),
            'BCFuK': _0x4d7df2(0xb4),
            'QnbHG': _0x4d7df2(0xcd) + _0x4d7df2(0xb0),
            'KQmwO': _0x4d7df2(0xe5),
            'ENTyZ': function (_0x5acfff, _0x2ae224) {
                return _0x5acfff >= _0x2ae224;
            },
            'VWigQ': _0x4d7df2(0xdf),
            'gHzsW': _0x4d7df2(0xa9),
            'ZemYb': function (_0x453080, _0x59015c) {
                return _0x453080 + _0x59015c;
            },
            'WuqEV': function (_0xad57d1, _0x4b2eb8) {
                return _0xad57d1 + _0x4b2eb8;
            },
            'WnzfO': _0x4d7df2(0xd9),
            'NUSZS': _0x4d7df2(0x91)
        };
    if (win) {
        win[_0x4d7df2(0xd1)](), win[_0x4d7df2(0xc5) + 's'][_0x4d7df2(0xc0) + _0x4d7df2(0xac)](_0x4d7df2(0xf4) + _0x4d7df2(0xdb) + mode + ')');
        return;
    }
    win = new BrowserWindow({
        'minWidth': 0x36e,
        'minHeight': 0x258,
        'width': 0x36e,
        'height': 0x258,
        'title': _0x245f2d[_0x4d7df2(0x8d)](_0x245f2d[_0x4d7df2(0xc9)], PKG_VERSION),
        'backgroundColor': _0x245f2d[_0x4d7df2(0xe2)],
        'useContentSize': !![],
        'autoHideMenuBar': !![],
        'webPreferences': {
            'enablePreferredSizeMode': !![],
            'preferredSizeMode': !![],
            'webviewTag': !![],
            'nodeIntegration': !![],
            'nodeIntegrationInSubFrames': !![],
            'enableRemoteModule': !![],
            'sandbox': ![],
            'devTools': devTools,
            'contextIsolation': ![],
            'webSecurity': !disableWebSec,
            'preload': path[_0x4d7df2(0xc8)](__dirname, folder + (_0x4d7df2(0xc7) + _0x4d7df2(0xa3)))
        }
    });
    try {
        win[_0x4d7df2(0xa7)](null), win[_0x4d7df2(0xba) + _0x4d7df2(0xe0)](![]);
    } catch (_0x5f261a) {
    }
    win['on'](_0x245f2d[_0x4d7df2(0xbd)], () => win[_0x4d7df2(0xd1)]()), win['on'](_0x245f2d[_0x4d7df2(0xca)], () => {
        const _0x3ce8f9 = _0x4d7df2;
        win[_0x3ce8f9(0xe1)](), win = null;
        if (tray)
            tray[_0x3ce8f9(0xe1)]();
        tray = null;
    });
    let _0x41a623 = folder + (_0x4d7df2(0xb5) + _0x4d7df2(0xdd) + _0x4d7df2(0xc3));
    _0x245f2d[_0x4d7df2(0xce)](process[_0x4d7df2(0xb7)][_0x4d7df2(0xf1)][_0x4d7df2(0xf0)]('.')[-0x72 * 0x1a + 0xc8b * 0x3 + 0x1b * -0xf7], -0x70b * 0x1 + 0x17c2 + -0x10b2) && (_0x41a623 = folder + _0x4d7df2(0xc2));
    let _0x19f1a6 = await Editor[_0x4d7df2(0xa4)][_0x4d7df2(0xbf)](_0x245f2d[_0x4d7df2(0xb3)], _0x245f2d[_0x4d7df2(0xb8)]), _0x11fe6e = path[_0x4d7df2(0xc8)](__dirname, _0x245f2d[_0x4d7df2(0xd3)](_0x245f2d[_0x4d7df2(0xd7)](_0x245f2d[_0x4d7df2(0xd7)](_0x245f2d[_0x4d7df2(0xd7)](_0x41a623, _0x245f2d[_0x4d7df2(0xa6)]), _0x19f1a6), _0x245f2d[_0x4d7df2(0x94)]), mode));
    win[_0x4d7df2(0x97)](_0x4d7df2(0xde) + _0x11fe6e);
}
function tryShowWindow(_0x383ed3) {
    const _0x29051e = _0x298219, _0x63de7b = {
            'zKyPf': _0x29051e(0x8e),
            'uoAZT': _0x29051e(0xd8),
            'vkiEA': _0x29051e(0xd6) + _0x29051e(0xe9),
            'ppgYx': function (_0x5905fd) {
                return _0x5905fd();
            }
        };
    try {
        let _0x31aec1 = nativeImage[_0x29051e(0xed) + _0x29051e(0xd2)](path[_0x29051e(0xc8)](__dirname, _0x63de7b[_0x29051e(0x99)]));
        _0x31aec1 = _0x31aec1[_0x29051e(0x9b)]({
            'width': 0x10,
            'height': 0x10
        });
        tray && tray[_0x29051e(0xcc)](_0x31aec1);
        if (!tray)
            tray = new Tray(_0x31aec1), tray['on'](_0x63de7b[_0x29051e(0xea)], function () {
                const _0x120a96 = _0x29051e;
                win[_0x120a96(0xd1)]();
            });
        else {
            if (devTools)
                console[_0x29051e(0x9d)](_0x63de7b[_0x29051e(0xe3)]);
        }
    } catch (_0x3e3e5d) {
        if (devTools)
            console[_0x29051e(0x95)](_0x3e3e5d);
    }
    mode = _0x383ed3;
    try {
        _0x63de7b[_0x29051e(0x90)](showWindow);
    } catch (_0x52c349) {
        console[_0x29051e(0x95)](_0x52c349);
    }
}