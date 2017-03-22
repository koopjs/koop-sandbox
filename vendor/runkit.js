(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require === 'function' && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = 'MODULE_NOT_FOUND', f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require === 'function' && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    '/app/embed-client.js': [function(require, module, exports) {
        'use strict';
        var __hoisted_0 = function(e) {
                return !!e
            },
            __hoisted_1 = function(e) {
                return 'env[]=' + encodeURIComponent(e)
            },
            __hoisted_2 = function(e) {
                this._sendMessage({
                    method: 'get_source'
                }, e)
            },
            __hoisted_3 = function(e, t) {
                this._sendMessage({
                    method: 'set_source',
                    source: e
                }, t)
            },
            __hoisted_4 = function(e, t) {
                this._sendMessage({
                    method: 'set_preamble',
                    source: e
                }, t)
            },
            __hoisted_5 = function(e) {
                this._sendMessage({
                    method: 'evaluate'
                }, e)
            },
            __hoisted_6 = function(e) {
                var t = e.textContent || e.innerText || '';
                t = t.replace(/\r\n/g, '\n'), t = t.replace(/\r/g, '\n');
                for (var n = t.split('\n'); n.length && n[0].trim().length === 0;) n.shift();
                var o = n.length > 0 && n[0].length - n[0].replace(/^\s+/, '').length;
                return n.map(function(e) {
                    return e.substring(0, o).match(/[^\s]/) ? e : e.substring(o)
                }).join('\n')
            },
            __hoisted_7 = function(e) {
                return /^data-env-/.test(e.name)
            },
            __hoisted_8 = function(e) {
                return e.name.replace('data-env-', '').toLowerCase() + '=' + e.value
            },
            __hoisted_9 = function() {
                function e() {
                    function e() {
                        window[r] && window[r]()
                    }
                    n = !0;
                    var o = t.getAttribute('data-element-id'),
                        i = t.getAttribute('data-notebook-url'),
                        r = t.getAttribute('data-load-callback'),
                        a = t.getAttribute('data-node-version'),
                        s = t.getAttribute('data-title'),
                        d = t.getAttribute('data-mode'),
                        l = t.getAttribute('data-min-height'),
                        u = [].filter.call(t.attributes, __hoisted_7).map(__hoisted_8);
                    if (o || i) {
                        var c = o && document.getElementById(o),
                            h = t.hasAttribute('data-read-only');
                        if (c) {
                            var m = RunKit.sourceFromElement(c);
                            c.innerHTML = ''
                        } else c = document.createElement('div'), c.className = 'runkit-notebook-container', t.parentNode.replaceChild(c, t);
                        RunKit.createNotebook({
                            element: c,
                            source: m,
                            notebookURL: i,
                            readOnly: h,
                            env: u,
                            mode: d,
                            nodeVersion: a,
                            title: s,
                            onLoad: r && e,
                            minHeight: l
                        })
                    }
                }
                var t = document.currentScript,
                    n = !1;
                if (!document.currentScript) {
                    var o = document.getElementsByTagName('script');
                    t = o[o.length - 1]
                }
                if (!window.RunKit || !window.Tonic) {
                  console.log('foo', window.RunKit)
                    var i = document.createElement('a');
                    i.href = t.src;
                    var r = i.host.split('.');
                    r[0].indexOf('qa') === 0 ? r[0] = 'qa' : r.length === 3 && (r = r.slice(1)), r[0] === 'tonicdev' && (r[0] = 'runkit');
                    var a = 'https://runkit.com',
                        s = 0,
                        d = 1,
                        l = {},
                        u = function(e) {
                            var t = this.name = 'runkit-embed-' + (s++).toString();
                            window.RunKit['$' + t] = this;
                            var n = e.element,
                                o = e.source,
                                i = e.readOnly,
                                r = (e.mode, e.notebookURL),
                                d = e.nodeVersion,
                                u = e.title,
                                c = parseInt(e.minHeight, 10) + 30 || 130,
                                h = 40,
                                m = e.preamble,
                                _ = e.minHeight;
                            if (o && (c = Math.max(21 * o.split('\n').length + 42, c)), r) {
                                var g = r.split('/');
                                if (g[0] === '' && g.shift(), g[g.length - 1] === '' && g.pop(), g.length < 2) r = null;
                                else {
                                    var p = g[0],
                                        v = g[1],
                                        f = ['', 'users', p, 'repositories', v];
                                    f = g.length > 2 ? f.concat(g.slice(2)) : f.concat(['branches', 'master']), r = f.join('/')
                                }
                            }
                            var b = {
                                    name: t,
                                    notebook: r,
                                    preamble: (m || '').trim(),
                                    source: (o || '').trim(),
                                    location: window.location.toString(),
                                    readOnly: i,
                                    mode: e.mode,
                                    nodeVersion: d,
                                    sendResults: !!e.onResult,
                                    minHeight: _ || '',
                                    title: u
                                },
                                w = '?' + Object.keys(b).map(function(e) {
                                    if (void 0 !== b[e] && b[e] !== null) return e + '=' + encodeURIComponent(b[e])
                                }).filter(__hoisted_0).join('&');
                            Array.isArray(e.env) && (w += '&' + e.env.map(__hoisted_1).join('&'));
                            var y = this.iframe = document.createElement('iframe');
                            if (y.src = a + '/e' + w, y.style.height = c + h + 'px', y.style.width = '100%', y.style.width = 'calc(100% + 200px)', y.style.padding = '0px', y.style.margin = '0px', y.style.marginLeft = 'calc(-100px)', y.style.border = '0px', y.style.backgroundColor = 'transparent', y.frameBorder = '0', y.allowTransparency = 'true', y.name = t, !(n instanceof Element)) throw Error('You must provide a valid parent element for the embedded notebook.\nSee https://runkit.com/docs/embed for documentation.');
                            n.appendChild(y);
                            var k = require('object-serialization/lib/from-object-serialization'),
                                R = require('object-description/lib/revive');
                            window.addEventListener('message', function(n) {
                                try {
                                    if (n.origin !== a) return;
                                    var o = JSON.parse(n.data);
                                    if (o && o.name === t) switch (o.event) {
                                        case 'height':
                                            y.style.height = o.height + h + 'px';
                                            break;
                                        case 'loaded':
                                            e.onLoad && e.onLoad(this);
                                            break;
                                        case 'url':
                                            this.URL = a + o.url, this.endpointURL = 'https://runkit.io' + o.url, e.onURLChanged && e.onURLChanged(this);
                                            break;
                                        case 'evaluate':
                                            this.evaluationID = o.evaluationID, e.onEvaluate && e.onEvaluate(this.evaluationID);
                                            break;
                                        case 'result':
                                            if (e.onResult) {
                                                var i = k(o.result.value);
                                                R(i), o.result.value = i, e.onResult(o.result)
                                            }
                                            break;
                                        case 'callback':
                                            var r = l[o.message_id];
                                            delete l[o.message_id], r(o.message)
                                    }
                                } catch (e) {}
                            }.bind(this))
                        };
                    u.prototype._sendMessage = function(e, t) {
                        var n = d++;
                        l[n] = t;
                        var o = {
                            name: this.name,
                            message_id: n,
                            message: e
                        };
                        this.iframe.contentWindow.postMessage(JSON.stringify(o), a)
                    }, u.prototype.getSource = __hoisted_2, u.prototype.setSource = __hoisted_3, u.prototype.setPreamble = __hoisted_4, u.prototype.evaluate = __hoisted_5, window.RunKit = {
                        createNotebook: function(e) {
                            return new u(e)
                        },
                        sourceFromElement: __hoisted_6
                    }, window.Tonic = window.RunKit
                }
                document.readyState === 'complete' ? e() : window.addEventListener('load', e)
            };
        __hoisted_9()
    }, {
        'object-description/lib/revive': '/app/node_modules/object-description/lib/revive.js',
        'object-serialization/lib/from-object-serialization': '/app/node_modules/object-serialization/lib/from-object-serialization.js'
    }],
    '/app/node_modules/object-description/lib/regexp.js': [function(require, module, exports) {
        module.exports.source = function(e) {
            return e.regex ? e.regex.source : e.properties['@source'] ? e.properties['@source'].value.value : ''
        }, module.exports.flags = function(e) {
            return e.regex ? (e.regex.global ? 'g' : '') + (e.regex.multiline ? 'm' : '') + (e.regex.ignoreCase ? 'i' : '') + (e.regex.sticky ? 'y' : '') + (e.regex.unicode ? 'u' : '') : (e.properties['@global'] && e.properties['@global'].value.value ? 'g' : '') + (e.properties['@ignoreCase'] && e.properties['@ignoreCase'].value.value ? 'i' : '') + (e.properties['@multiline'] && e.properties['@multiline'].value.value ? 'm' : '')
        }
    }, {}],
    '/app/node_modules/object-description/lib/revive.js': [function(require, module, exports) {
        function fromObjectDescription(e, r) {
            if (hasOwnProperty.call(e, 'value')) return e.value;
            if (e.type !== 'undefined') {
                var t = instantiateObject(e);
                return e.value = t, assignProperties(e, t), t
            }
        }

        function instantiateObject(e) {
            if (e.isStringObject) return new String(e.valueOf.value);
            if (e.isNumberObject) return new Number(e.valueOf.value);
            if (e.isBooleanObject) return new Boolean(e.valueOf.value);
            if (e.isArray) return new Array(e.properties['@length'].value.value);
            if (e.isRegExp) {
                var r = RegExpUtils.flags(e),
                    t = RegExpUtils.source(e);
                return new RegExp(t, r)
            }
            return e.isDate ? new Date(e.numberValue.value) : {}
        }

        function assignProperties(e, r) {
            if (e.properties)
                for (var t = e.properties, a = Object.keys(t), n = 0, i = a.length; n < i; ++n) {
                    var l = a[n],
                        s = t[l];
                    (!hasOwnProperty.call(s, 'flags') || s.flags & enumerable) && hasOwnProperty.call(s, 'value') && (r[s.key] = fromObjectDescription(s.value))
                }
        }
        var RegExpUtils = require('./regexp'),
            hasOwnProperty = Object.prototype.hasOwnProperty,
            missing = {};
        module.exports = fromObjectDescription;
        var writable = 4,
            enumerable = 2,
            configurable = 1
    }, {
        './regexp': '/app/node_modules/object-description/lib/regexp.js'
    }],
    '/app/node_modules/object-serialization/lib/from-object-serialization.js': [function(require, module, exports) {
        try {
            var R = require('ramda'),
                I = require('immutable'),
                RI = require('ramda-immutable')
        } catch (r) {}
        module.exports = function(r, t) {
            function e(t) {
                if (t === -1) return null;
                if (t !== -2) {
                    if (t === -3) return NaN;
                    if (t === -4) return -0;
                    if (t === -5) return -(1 / 0);
                    if (t === -6) return 1 / 0;
                    if (i.hasOwnProperty(t)) return i[t];
                    var n = r.objects[t];
                    if (typeof n !== 'object') return i[t] = n, n;
                    var u = n[0] ? a() : f();
                    return n.length <= 1 ? u : c(function(r) {
                        i[t] = r;
                        for (var u = 1, a = n.length; u < a; u += 2) {
                            var f = n[u];
                            o(typeof f === 'string' ? f : e(f), e(n[u + 1]), r)
                        }
                    }, u)
                }
            }

            function n(r, t, e) {
                e[r] = t
            }
            var u = t && t.immutable,
                i = (r.objects, []),
                a = u ? I.List : function() {
                    return []
                },
                f = u ? I.Map : function() {
                    return Object.create(null)
                },
                o = u ? RI.set : n,
                c = u ? R.invoker(1, 'withMutations') : function(r, t) {
                    return r(t), t
                };
            return e(r.index)
        }
    }, {
        'immutable': false,
        'ramda': false,
        'ramda-immutable': false
    }]
}, {}, ['/app/embed-client.js'])
