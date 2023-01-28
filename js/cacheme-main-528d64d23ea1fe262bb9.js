(() => { // webpackBootstrap
  var __webpack_modules__ = ({

    "../../../node_modules/@fullstory/browser/dist/index.esm.js":
      ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "anonymize": () => (/* binding */ anonymize),
          "consent": () => (/* binding */ consent),
          "event": () => (/* binding */ event),
          "getCurrentSessionURL": () => (/* binding */ getCurrentSessionURL),
          "identify": () => (/* binding */ identify),
          "init": () => (/* binding */ init),
          "log": () => (/* binding */ log),
          "restart": () => (/* binding */ restart),
          "setUserVars": () => (/* binding */ setUserVars),
          "shutdown": () => (/* binding */ shutdown)
        });
        /***/
      }),

/***/ "../../../node_modules/braces/index.js":
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";

        const braces = (input, options = {}) => {
          let output = [];

          if (Array.isArray(input)) {
            for (let pattern of input) {
              let result = braces.create(pattern, options);
              if (Array.isArray(result)) {
                output.push(...result);
              } else {
                output.push(result);
              }
            }
          } else {
            output = [].concat(braces.create(input, options));
          }

          if (options && options.expand === true && options.nodupes === true) {
            output = [...new Set(output)];
          }
          return output;
        };

        /***/
      }),

/***/ "../../../node_modules/braces/lib/utils.js":
      ((__unused_webpack_module, exports) => {


        /***/
      }),

/***/ "../../../node_modules/call-bind/callBound.js":
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../../node_modules/get-intrinsic/index.js");

        var callBind = __webpack_require__(/*! ./ */ "../../../node_modules/call-bind/index.js");

        var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

        module.exports = function callBoundIntrinsic(name, allowMissing) {
          var intrinsic = GetIntrinsic(name, !!allowMissing);
          if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
            return callBind(intrinsic);
          }
          return intrinsic;
        };


        /***/
      }),

/***/ "../../../node_modules/call-bind/index.js":
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var bind = __webpack_require__(/*! function-bind */ "../../../node_modules/function-bind/index.js");
        var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../../node_modules/get-intrinsic/index.js");

        var $apply = GetIntrinsic('%Function.prototype.apply%');
        var $call = GetIntrinsic('%Function.prototype.call%');
        var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

        var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
        var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
        var $max = GetIntrinsic('%Math.max%');

        module.exports = function callBind(originalFunction) {
          var func = $reflectApply(bind, $call, arguments);
          if ($gOPD && $defineProperty) {
            var desc = $gOPD(func, 'length');
            if (desc.configurable) {
              $defineProperty(
                func,
                'length',
                { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
              );
            }
          }
          return func;
        };

        var applyBind = function applyBind() {
          return $reflectApply(bind, $apply, arguments);
        };
      }),

/***/ "../../../node_modules/dayjs/dayjs.min.js":
      (function (module) {

        !function (t, e) { true ? module.exports = e() : 0 }(this, (function () { "use strict"; var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function (t, e, n) { var r = String(t); return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t }, g = { s: m, z: function (t) { var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60; return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0") }, m: function t(e, n) { if (e.date() < n.date()) return -t(n, e); var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, f), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), f); return +(-(r + (n - i) / (s ? i - u : u - i)) || 0) }, a: function (t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }, p: function (t) { return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t] || String(t || "").toLowerCase().replace(/s$/, "") }, u: function (t) { return void 0 === t } }, v = "en", D = {}; D[v] = M; var p = function (t) { return t instanceof _ }, S = function t(e, n, r) { var i; if (!e) return v; if ("string" == typeof e) { var s = e.toLowerCase(); D[s] && (i = s), n && (D[s] = n, i = s); var u = e.split("-"); if (!i && u.length > 1) return t(u[0]) } else { var a = e.name; D[a] = e, i = a } return !r && i && (v = i), i || !r && v }, w = function (t, e) { if (p(t)) return t.clone(); var n = "object" == typeof e ? e : {}; return n.date = t, n.args = arguments, new _(n) }, O = g; O.l = S, O.i = p, O.w = function (t, e) { return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset }) }; var _ = function () { function M(t) { this.$L = S(t.locale, null, !0), this.parse(t) } var m = M.prototype; return m.parse = function (t) { this.$d = function (t) { var e = t.date, n = t.utc; if (null === e) return new Date(NaN); if (O.u(e)) return new Date; if (e instanceof Date) return new Date(e); if ("string" == typeof e && !/Z$/i.test(e)) { var r = e.match(l); if (r) { var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3); return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s) } } return new Date(e) }(t), this.$x = t.x || {}, this.init() }, m.init = function () { var t = this.$d; this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds() }, m.$utils = function () { return O }, m.isValid = function () { return !(this.$d.toString() === $) }, m.isSame = function (t, e) { var n = w(t); return this.startOf(e) <= n && n <= this.endOf(e) }, m.isAfter = function (t, e) { return w(t) < this.startOf(e) }, m.isBefore = function (t, e) { return this.endOf(e) < w(t) }, m.$g = function (t, e, n) { return O.u(t) ? this[e] : this.set(n, t) }, m.unix = function () { return Math.floor(this.valueOf() / 1e3) }, m.valueOf = function () { return this.$d.getTime() }, m.startOf = function (t, e) { var n = this, r = !!O.u(e) || e, h = O.p(t), $ = function (t, e) { var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n); return r ? i : i.endOf(a) }, l = function (t, e) { return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n) }, y = this.$W, M = this.$M, m = this.$D, g = "set" + (this.$u ? "UTC" : ""); switch (h) { case c: return r ? $(1, 0) : $(31, 11); case f: return r ? $(1, M) : $(0, M + 1); case o: var v = this.$locale().weekStart || 0, D = (y < v ? y + 7 : y) - v; return $(r ? m - D : m + (6 - D), M); case a: case d: return l(g + "Hours", 0); case u: return l(g + "Minutes", 1); case s: return l(g + "Seconds", 2); case i: return l(g + "Milliseconds", 3); default: return this.clone() } }, m.endOf = function (t) { return this.startOf(t, !1) }, m.$set = function (t, e) { var n, o = O.p(t), h = "set" + (this.$u ? "UTC" : ""), $ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o], l = o === a ? this.$D + (e - this.$W) : e; if (o === f || o === c) { var y = this.clone().set(d, 1); y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d } else $ && this.$d[$](l); return this.init(), this }, m.set = function (t, e) { return this.clone().$set(t, e) }, m.get = function (t) { return this[O.p(t)]() }, m.add = function (r, h) { var d, $ = this; r = Number(r); var l = O.p(h), y = function (t) { var e = w($); return O.w(e.date(e.date() + Math.round(t * r)), $) }; if (l === f) return this.set(f, this.$M + r); if (l === c) return this.set(c, this.$y + r); if (l === a) return y(1); if (l === o) return y(7); var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1, m = this.$d.getTime() + r * M; return O.w(m, this) }, m.subtract = function (t, e) { return this.add(-1 * t, e) }, m.format = function (t) { var e = this, n = this.$locale(); if (!this.isValid()) return n.invalidDate || $; var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = O.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, f = n.months, h = function (t, n, i, s) { return t && (t[n] || t(e, r)) || i[n].slice(0, s) }, c = function (t) { return O.s(s % 12 || 12, t, "0") }, d = n.meridiem || function (t, e, n) { var r = t < 12 ? "AM" : "PM"; return n ? r.toLowerCase() : r }, l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a + 1, MM: O.s(a + 1, 2, "0"), MMM: h(n.monthsShort, a, f, 3), MMMM: h(f, a), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h(n.weekdaysMin, this.$W, o, 2), ddd: h(n.weekdaysShort, this.$W, o, 3), dddd: o[this.$W], H: String(s), HH: O.s(s, 2, "0"), h: c(1), hh: c(2), a: d(s, u, !0), A: d(s, u, !1), m: String(u), mm: O.s(u, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i }; return r.replace(y, (function (t, e) { return e || l[t] || i.replace(":", "") })) }, m.utcOffset = function () { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, m.diff = function (r, d, $) { var l, y = O.p(d), M = w(r), m = (M.utcOffset() - this.utcOffset()) * e, g = this - M, v = O.m(this, M); return v = (l = {}, l[c] = v / 12, l[f] = v, l[h] = v / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? v : O.a(v) }, m.daysInMonth = function () { return this.endOf(f).$D }, m.$locale = function () { return D[this.$L] }, m.locale = function (t, e) { if (!t) return this.$L; var n = this.clone(), r = S(t, e, !0); return r && (n.$L = r), n }, m.clone = function () { return O.w(this.$d, this) }, m.toDate = function () { return new Date(this.valueOf()) }, m.toJSON = function () { return this.isValid() ? this.toISOString() : null }, m.toISOString = function () { return this.$d.toISOString() }, m.toString = function () { return this.$d.toUTCString() }, M }(), T = _.prototype; return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach((function (t) { T[t[1]] = function (e) { return this.$g(e, t[0], t[1]) } })), w.extend = function (t, e) { return t.$i || (t(e, _, w), t.$i = !0), w }, w.locale = S, w.isDayjs = p, w.unix = function (t) { return w(1e3 * t) }, w.en = D[v], w.Ls = D, w.p = {}, w }));
      }),

/***/ "../../../node_modules/dayjs/plugin/duration.js":
      (function (module) {

        !function (t, s) { true ? module.exports = s() : 0 }(this, (function () { "use strict"; var t, s, n = 1e3, i = 6e4, e = 36e5, r = 864e5, o = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, h = 2592e6, a = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, d = { years: u, months: h, days: r, hours: e, minutes: i, seconds: n, milliseconds: 1, weeks: 6048e5 }, c = function (t) { return t instanceof p }, f = function (t, s, n) { return new p(t, n, s.$l) }, m = function (t) { return s.p(t) + "s" }, l = function (t) { return t < 0 }, $ = function (t) { return l(t) ? Math.ceil(t) : Math.floor(t) }, y = function (t) { return Math.abs(t) }, g = function (t, s) { return t ? l(t) ? { negative: !0, format: "" + y(t) + s } : { negative: !1, format: "" + t + s } : { negative: !1, format: "" } }, p = function () { function l(t, s, n) { var i = this; if (this.$d = {}, this.$l = n, void 0 === t && (this.$ms = 0, this.parseFromMilliseconds()), s) return f(t * d[m(s)], this); if ("number" == typeof t) return this.$ms = t, this.parseFromMilliseconds(), this; if ("object" == typeof t) return Object.keys(t).forEach((function (s) { i.$d[m(s)] = t[s] })), this.calMilliseconds(), this; if ("string" == typeof t) { var e = t.match(a); if (e) { var r = e.slice(2).map((function (t) { return null != t ? Number(t) : 0 })); return this.$d.years = r[0], this.$d.months = r[1], this.$d.weeks = r[2], this.$d.days = r[3], this.$d.hours = r[4], this.$d.minutes = r[5], this.$d.seconds = r[6], this.calMilliseconds(), this } } return this } var y = l.prototype; return y.calMilliseconds = function () { var t = this; this.$ms = Object.keys(this.$d).reduce((function (s, n) { return s + (t.$d[n] || 0) * d[n] }), 0) }, y.parseFromMilliseconds = function () { var t = this.$ms; this.$d.years = $(t / u), t %= u, this.$d.months = $(t / h), t %= h, this.$d.days = $(t / r), t %= r, this.$d.hours = $(t / e), t %= e, this.$d.minutes = $(t / i), t %= i, this.$d.seconds = $(t / n), t %= n, this.$d.milliseconds = t }, y.toISOString = function () { var t = g(this.$d.years, "Y"), s = g(this.$d.months, "M"), n = +this.$d.days || 0; this.$d.weeks && (n += 7 * this.$d.weeks); var i = g(n, "D"), e = g(this.$d.hours, "H"), r = g(this.$d.minutes, "M"), o = this.$d.seconds || 0; this.$d.milliseconds && (o += this.$d.milliseconds / 1e3); var u = g(o, "S"), h = t.negative || s.negative || i.negative || e.negative || r.negative || u.negative, a = e.format || r.format || u.format ? "T" : "", d = (h ? "-" : "") + "P" + t.format + s.format + i.format + a + e.format + r.format + u.format; return "P" === d || "-P" === d ? "P0D" : d }, y.toJSON = function () { return this.toISOString() }, y.format = function (t) { var n = t || "YYYY-MM-DDTHH:mm:ss", i = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") }; return n.replace(o, (function (t, s) { return s || String(i[t]) })) }, y.as = function (t) { return this.$ms / d[m(t)] }, y.get = function (t) { var s = this.$ms, n = m(t); return "milliseconds" === n ? s %= 1e3 : s = "weeks" === n ? $(s / d[n]) : this.$d[n], 0 === s ? 0 : s }, y.add = function (t, s, n) { var i; return i = s ? t * d[m(s)] : c(t) ? t.$ms : f(t, this).$ms, f(this.$ms + i * (n ? -1 : 1), this) }, y.subtract = function (t, s) { return this.add(t, s, !0) }, y.locale = function (t) { var s = this.clone(); return s.$l = t, s }, y.clone = function () { return f(this.$ms, this) }, y.humanize = function (s) { return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s) }, y.milliseconds = function () { return this.get("milliseconds") }, y.asMilliseconds = function () { return this.as("milliseconds") }, y.seconds = function () { return this.get("seconds") }, y.asSeconds = function () { return this.as("seconds") }, y.minutes = function () { return this.get("minutes") }, y.asMinutes = function () { return this.as("minutes") }, y.hours = function () { return this.get("hours") }, y.asHours = function () { return this.as("hours") }, y.days = function () { return this.get("days") }, y.asDays = function () { return this.as("days") }, y.weeks = function () { return this.get("weeks") }, y.asWeeks = function () { return this.as("weeks") }, y.months = function () { return this.get("months") }, y.asMonths = function () { return this.as("months") }, y.years = function () { return this.get("years") }, y.asYears = function () { return this.as("years") }, l }(); return function (n, i, e) { t = e, s = e().$utils(), e.duration = function (t, s) { var n = e.locale(); return f(t, { $l: n }, s) }, e.isDuration = c; var r = i.prototype.add, o = i.prototype.subtract; i.prototype.add = function (t, s) { return c(t) && (t = t.asMilliseconds()), r.bind(this)(t, s) }, i.prototype.subtract = function (t, s) { return c(t) && (t = t.asMilliseconds()), o.bind(this)(t, s) } } }));

        /***/
      }),

/***/ "../../../node_modules/dayjs/plugin/relativeTime.js":
      (function (module) {

        !function (r, e) { true ? module.exports = e() : 0 }(this, (function () { "use strict"; return function (r, e, t) { r = r || {}; var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }; function i(r, e, t, o) { return n.fromToBase(r, e, t, o) } t.en.relativeTime = o, n.fromToBase = function (e, n, i, d, u) { for (var f, a, s, l = i.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) { var y = h[c]; y.d && (f = d ? t(e).diff(i, y.d, !0) : i.diff(e, y.d, !0)); var p = (r.rounding || Math.round)(Math.abs(f)); if (s = f > 0, p <= y.r || !y.r) { p <= 1 && c > 0 && (y = h[c - 1]); var v = l[y.l]; u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n, y.l, s); break } } if (n) return a; var M = s ? l.future : l.past; return "function" == typeof M ? M(a) : M.replace("%s", a) }, n.to = function (r, e) { return i(r, e, this, !0) }, n.from = function (r, e) { return i(r, e, this) }; var d = function (r) { return r.$u ? t.utc() : t() }; n.toNow = function (r) { return this.to(d(this), r) }, n.fromNow = function (r) { return this.from(d(this), r) } } }));
      }),

/***/ "../../../node_modules/desandro-matches-selector/matches-selector.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

      }),

/***/ "../../../node_modules/ev-emitter/ev-emitter.js":
      (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

        (function (global, factory) {

          if (true) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
              __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
                __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(typeof window != 'undefined' ? window : this, function () {

          "use strict";

          function EvEmitter() { }

          var proto = EvEmitter.prototype;

          proto.on = function (eventName, listener) {
            if (!eventName || !listener) {
              return;
            }
            // set events hash
            var events = this._events = this._events || {};
            // set listeners array
            var listeners = events[eventName] = events[eventName] || [];
            // only add once
            if (listeners.indexOf(listener) == -1) {
              listeners.push(listener);
            }

            return this;
          };

          proto.once = function (eventName, listener) {
            if (!eventName || !listener) {
              return;
            }
            // add event
            this.on(eventName, listener);
            // set once flag
            // set onceEvents hash
            var onceEvents = this._onceEvents = this._onceEvents || {};
            // set onceListeners object
            var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
            // set flag
            onceListeners[listener] = true;

            return this;
          };

          proto.off = function (eventName, listener) {
            var listeners = this._events && this._events[eventName];
            if (!listeners || !listeners.length) {
              return;
            }
            var index = listeners.indexOf(listener);
            if (index != -1) {
              listeners.splice(index, 1);
            }

            return this;
          };

          proto.emitEvent = function (eventName, args) {
            var listeners = this._events && this._events[eventName];
            if (!listeners || !listeners.length) {
              return;
            }
            // copy over to avoid interference if .off() in listener
            listeners = listeners.slice(0);
            args = args || [];
            // once stuff
            var onceListeners = this._onceEvents && this._onceEvents[eventName];

            for (var i = 0; i < listeners.length; i++) {
              var listener = listeners[i]
              var isOnce = onceListeners && onceListeners[listener];
              if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
              }
              // trigger listener
              listener.apply(this, args);
            }

            return this;
          };

          proto.allOff = function () {
            delete this._events;
            delete this._onceEvents;
          };

          return EvEmitter;

        }));


        /***/
      }),

/***/ "../../../node_modules/fizzy-ui-utils/utils.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

        (function (window, factory) {
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__("../../../node_modules/desandro-matches-selector/matches-selector.js")
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (matchesSelector) {
              return factory(window, matchesSelector);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(window, matchesSelector) {

          'use strict';

          var utils = {};
          utils.extend = function (a, b) {
            for (var prop in b) {
              a[prop] = b[prop];
            }
            return a;
          };

          // ----- debounceMethod ----- //

          utils.debounceMethod = function (_class, methodName, threshold) {
            threshold = threshold || 100;
            // original method
            var method = _class.prototype[methodName];
            var timeoutName = methodName + 'Timeout';

            _class.prototype[methodName] = function () {
              var timeout = this[timeoutName];
              clearTimeout(timeout);

              var args = arguments;
              var _this = this;
              this[timeoutName] = setTimeout(function () {
                method.apply(_this, args);
                delete _this[timeoutName];
              }, threshold);
            };
          };

          // ----- docReady ----- //

          utils.docReady = function (callback) {
            var readyState = document.readyState;
            if (readyState == 'complete' || readyState == 'interactive') {
              // do async to allow for other scripts to run. metafizzy/flickity#441
              setTimeout(callback);
            } else {
              document.addEventListener('DOMContentLoaded', callback);
            }
          };


          utils.htmlInit = function (WidgetClass, namespace) {
            utils.docReady(function () {


            });
          };

          return utils;

        }));
      }),

/***/ "../../../node_modules/flickity/js/add-remove-cell.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function (window, factory) {
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__("../../../node_modules/flickity/js/flickity.js"),
              __webpack_require__("../../../node_modules/fizzy-ui-utils/utils.js"),
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, utils) {
              return factory(window, Flickity, utils);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(window, Flickity, utils) {

          'use strict';


          var proto = Flickity.prototype;
          proto.insert = function (elems, index) {
            var cells = this._makeCells(elems);
            if (!cells || !cells.length) {
              return;
            }
            var len = this.cells.length;
            // default to append
            index = index === undefined ? len : index;
            // add cells with document fragment
            var fragment = getCellsFragment(cells);
            // append to slider
            var isAppend = index == len;
            if (isAppend) {
              this.slider.appendChild(fragment);
            } else {
              var insertCellElement = this.cells[index].element;
              this.slider.insertBefore(fragment, insertCellElement);
            }
            // add to this.cells
            if (index === 0) {
              // prepend, add to start
              this.cells = cells.concat(this.cells);
            } else if (isAppend) {
              // append, add to end
              this.cells = this.cells.concat(cells);
            } else {
              // insert in this.cells
              var endCells = this.cells.splice(index, len - index);
              this.cells = this.cells.concat(cells).concat(endCells);
            }

            this._sizeCells(cells);
            this.cellChange(index, true);
          };

          return Flickity;

        }));


        /***/
      }),

/***/ "../../../node_modules/flickity/js/animate.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! fizzy-ui-utils/utils */ "../../../node_modules/fizzy-ui-utils/utils.js"),
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (utils) {
              return factory(window, utils);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(window, utils) {

          'use strict';

          // -------------------------- animate -------------------------- //

          var proto = {};

          proto.startAnimation = function () {
            if (this.isAnimating) {
              return;
            }

            this.isAnimating = true;
            this.restingFrames = 0;
            this.animate();
          };

          proto.animate = function () {
            this.applyDragForce();
            this.applySelectedAttraction();

            var previousX = this.x;

            this.integratePhysics();
            this.positionSlider();
            this.settle(previousX);
            // animate next frame
            if (this.isAnimating) {
              var _this = this;
              requestAnimationFrame(function animateFrame() {
                _this.animate();
              });
            }
          };

          proto.positionSlider = function () {
            var x = this.x;
            // wrap position around
            if (this.options.wrapAround && this.cells.length > 1) {
              x = utils.modulo(x, this.slideableWidth);
              x -= this.slideableWidth;
              this.shiftWrapCells(x);
            }

            this.setTranslateX(x, this.isAnimating);
            this.dispatchScrollEvent();
          };

          proto.setTranslateX = function (x, is3d) {
            x += this.cursorPosition;
            // reverse if right-to-left and using transform
            x = this.options.rightToLeft ? -x : x;
            var translateX = this.getPositionValue(x);
            // use 3D transforms for hardware acceleration on iOS
            // but use 2D when settled, for better font-rendering
            this.slider.style.transform = is3d ?
              'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
          };

          return proto;

        }));
      }),

/***/ "../../../node_modules/flickity/js/cell.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! get-size/get-size */ "../../../node_modules/get-size/get-size.js"),
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (getSize) {
              return factory(window, getSize);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(window, getSize) {

          'use strict';

          function Cell(elem, parent) {
            this.element = elem;
            this.parent = parent;

            this.create();
          }

          var proto = Cell.prototype;

          proto.create = function () {
            this.element.style.position = 'absolute';
            this.element.setAttribute('aria-hidden', 'true');
            this.x = 0;
            this.shift = 0;
            this.element.style[this.parent.originSide] = 0;
          };

          return Cell;

        }));
      }),

/***/ "../../../node_modules/flickity/js/drag.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! ./flickity */ "../../../node_modules/flickity/js/flickity.js"),
              __webpack_require__(/*! unidragger/unidragger */ "../../../node_modules/unidragger/unidragger.js"),
              __webpack_require__(/*! fizzy-ui-utils/utils */ "../../../node_modules/fizzy-ui-utils/utils.js"),
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unidragger, utils) {
              return factory(window, Flickity, Unidragger, utils);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(window, Flickity, Unidragger, utils) {

          'use strict';


          var proto = Flickity.prototype;
          utils.extend(proto, Unidragger.prototype);
          proto._touchActionValue = 'pan-y';

          proto.pointerDown = function (event, pointer) {
            if (!this.isDraggable) {
              this._pointerDownDefault(event, pointer);
              return;
            }
            var isOkay = this.okayPointerDown(event);
            if (!isOkay) {
              return;
            }

            this._pointerDownPreventDefault(event);
            this.pointerDownFocus(event);
            // blur
            if (document.activeElement != this.element) {
              // do not blur if already focused
              this.pointerDownBlur();
            }

            // stop if it was moving
            this.dragX = this.x;
            this.viewport.classList.add('is-pointer-down');
            // track scrolling
            this.pointerDownScroll = getScrollPosition();
            window.addEventListener('scroll', this);

            this._pointerDownDefault(event, pointer);
          };

          // default pointerDown logic, used for staticClick
          proto._pointerDownDefault = function (event, pointer) {
            // track start event position
            // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
            this.pointerDownPointer = {
              pageX: pointer.pageX,
              pageY: pointer.pageY,
            };
            // bind move and end events
            this._bindPostStartEvents(event);
            this.dispatchEvent('pointerDown', event, [pointer]);
          };

          // ----- move ----- //

          proto.hasDragStarted = function (moveVector) {
            return Math.abs(moveVector.x) > this.options.dragThreshold;
          };

          // ----- up ----- //

          proto.pointerUp = function (event, pointer) {
            delete this.isTouchScrolling;
            this.viewport.classList.remove('is-pointer-down');
            this.dispatchEvent('pointerUp', event, [pointer]);
            this._dragPointerUp(event, pointer);
          };

          proto.pointerDone = function () {
            window.removeEventListener('scroll', this);
            delete this.pointerDownScroll;
          };



          proto.pointerMove = function (event, pointer) {
            var moveVector = this._dragPointerMove(event, pointer);
            this.dispatchEvent('pointerMove', event, [pointer, moveVector]);
            this._dragMove(event, pointer, moveVector);
          };

          proto.dragMove = function (event, pointer, moveVector) {
            if (!this.isDraggable) {
              return;
            }
            event.preventDefault();

            this.previousDragX = this.dragX;
            // reverse if right-to-left
            var direction = this.options.rightToLeft ? -1 : 1;
            if (this.options.wrapAround) {
              // wrap around move. #589
              moveVector.x %= this.slideableWidth;
            }
            var dragX = this.dragStartPosition + moveVector.x * direction;

            if (!this.options.wrapAround && this.slides.length) {
              // slow drag
              var originBound = Math.max(-this.slides[0].target, this.dragStartPosition);
              dragX = dragX > originBound ? (dragX + originBound) * 0.5 : dragX;
              var endBound = Math.min(-this.getLastSlide().target, this.dragStartPosition);
              dragX = dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
            }

            this.dragX = dragX;

            this.dragMoveTime = new Date();
            this.dispatchEvent('dragMove', event, [pointer, moveVector]);
          };

          proto.dragEnd = function (event, pointer) {
            if (!this.isDraggable) {
              return;
            }
            if (this.options.freeScroll) {
              this.isFreeScrolling = true;
            }
            // set selectedIndex based on where flick will end up
            var index = this.dragEndRestingSelect();

            if (this.options.freeScroll && !this.options.wrapAround) {
              // if free-scroll & not wrap around
              // do not free-scroll if going outside of bounding slides
              // so bounding slides can attract slider, and keep it in bounds
              var restingX = this.getRestingPosition();
              this.isFreeScrolling = -restingX > this.slides[0].target &&
                -restingX < this.getLastSlide().target;
            } else if (!this.options.freeScroll && index == this.selectedIndex) {
              // boost selection if selected index has not changed
              index += this.dragEndBoostSelect();
            }
            delete this.previousDragX;
            // apply selection
            // TODO refactor this, selecting here feels weird
            // HACK, set flag so dragging stays in correct direction
            this.isDragSelect = this.options.wrapAround;
            this.select(index);
            delete this.isDragSelect;
            this.dispatchEvent('dragEnd', event, [pointer]);
          };

          proto.dragEndRestingSelect = function () {
            var restingX = this.getRestingPosition();
            // how far away from selected slide
            var distance = Math.abs(this.getSlideDistance(-restingX, this.selectedIndex));
            // get closet resting going up and going down
            var positiveResting = this._getClosestResting(restingX, distance, 1);
            var negativeResting = this._getClosestResting(restingX, distance, -1);
            // use closer resting for wrap-around
            var index = positiveResting.distance < negativeResting.distance ?
              positiveResting.index : negativeResting.index;
            return index;
          };


          proto.getSlideDistance = function (x, index) {
            var len = this.slides.length;
            // wrap around if at least 2 slides
            var isWrapAround = this.options.wrapAround && len > 1;
            var slideIndex = isWrapAround ? utils.modulo(index, len) : index;
            var slide = this.slides[slideIndex];
            if (!slide) {
              return null;
            }
            // add distance for wrap-around slides
            var wrap = isWrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
            return x - (slide.target + wrap);
          };

          proto.dragEndBoostSelect = function () {
            // do not boost if no previousDragX or dragMoveTime
            if (this.previousDragX === undefined || !this.dragMoveTime ||
              // or if drag was held for 100 ms
              new Date() - this.dragMoveTime > 100) {
              return 0;
            }

            var distance = this.getSlideDistance(-this.dragX, this.selectedIndex);
            var delta = this.previousDragX - this.dragX;
            if (distance > 0 && delta > 0) {
              // boost to next if moving towards the right, and positive velocity
              return 1;
            } else if (distance < 0 && delta < 0) {
              // boost to previous if moving towards the left, and negative velocity
              return -1;
            }
            return 0;
          };

          // ----- staticClick ----- //

          proto.staticClick = function (event, pointer) {
            // get clickedCell, if cell was clicked
            var clickedCell = this.getParentCell(event.target);
            var cellElem = clickedCell && clickedCell.element;
            var cellIndex = clickedCell && this.cells.indexOf(clickedCell);
            this.dispatchEvent('staticClick', event, [pointer, cellElem, cellIndex]);
          };

          // ----- scroll ----- //

          proto.onscroll = function () {
            var scroll = getScrollPosition();
            var scrollMoveX = this.pointerDownScroll.x - scroll.x;
            var scrollMoveY = this.pointerDownScroll.y - scroll.y;
            // cancel click/tap if scroll is too much
            if (Math.abs(scrollMoveX) > 3 || Math.abs(scrollMoveY) > 3) {
              this._pointerDone();
            }
          };

          // ----- utils ----- //

          function getScrollPosition() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset,
            };
          }

          return Flickity;

        }));


        /***/
      }),

/***/ "../../../node_modules/flickity/js/flickity.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
        /* eslint-disable max-params */
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! ev-emitter/ev-emitter */ "../../../node_modules/ev-emitter/ev-emitter.js"),
              __webpack_require__(/*! get-size/get-size */ "../../../node_modules/get-size/get-size.js"),
              __webpack_require__(/*! fizzy-ui-utils/utils */ "../../../node_modules/fizzy-ui-utils/utils.js"),
              __webpack_require__(/*! ./cell */ "../../../node_modules/flickity/js/cell.js"),
              __webpack_require__(/*! ./slide */ "../../../node_modules/flickity/js/slide.js"),
              __webpack_require__(/*! ./animate */ "../../../node_modules/flickity/js/animate.js"),
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
              return factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { var _Flickity; }

        }(window, function factory(window, EvEmitter, getSize,
          utils, Cell, Slide, animatePrototype) {

          /* eslint-enable max-params */
          'use strict';

          // vars
          var jQuery = window.jQuery;
          var getComputedStyle = window.getComputedStyle;
          var console = window.console;

          function moveElements(elems, toElem) {
            elems = utils.makeArray(elems);
            while (elems.length) {
              toElem.appendChild(elems.shift());
            }
          }

          // -------------------------- Flickity -------------------------- //

          // globally unique identifiers
          var GUID = 0;
          // internal store of all Flickity intances
          var instances = {};

          function Flickity(element, options) {
            var queryElement = utils.getQueryElement(element);
            if (!queryElement) {
              if (console) {
                console.error('Bad element for Flickity: ' + (queryElement || element));
              }
              return;
            }
            this.element = queryElement;
            // do not initialize twice on same element
            if (this.element.flickityGUID) {
              var instance = instances[this.element.flickityGUID];
              if (instance) instance.option(options);
              return instance;
            }

            // add jQuery
            if (jQuery) {
              this.$element = jQuery(this.element);
            }
            // options
            this.options = utils.extend({}, this.constructor.defaults);
            this.option(options);

            // kick things off
            this._create();
          }

          Flickity.defaults = {
            accessibility: true,
            // adaptiveHeight: false,
            cellAlign: 'center',
            // cellSelector: undefined,
            // contain: false,
            freeScrollFriction: 0.075, // friction when free-scrolling
            friction: 0.28, // friction when selecting
            namespaceJQueryEvents: true,
            // initialIndex: 0,
            percentPosition: true,
            resize: true,
            selectedAttraction: 0.025,
            setGallerySize: true,
            // watchCSS: false,
            // wrapAround: false
          };

          // hash of methods triggered on _create()
          Flickity.createMethods = [];

          var proto = Flickity.prototype;
          // inherit EventEmitter
          utils.extend(proto, EvEmitter.prototype);

          Flickity.Cell = Cell;
          Flickity.Slide = Slide;

          return Flickity;

        }));

      }),

/***/ "../../../node_modules/flickity/js/index.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! ./flickity */ "../../../node_modules/flickity/js/flickity.js"),
              __webpack_require__(/*! ./drag */ "../../../node_modules/flickity/js/drag.js"),
              __webpack_require__(/*! ./prev-next-button */ "../../../node_modules/flickity/js/prev-next-button.js"),
              __webpack_require__(/*! ./page-dots */ "../../../node_modules/flickity/js/page-dots.js"),
              __webpack_require__(/*! ./player */ "../../../node_modules/flickity/js/player.js"),
              __webpack_require__(/*! ./add-remove-cell */ "../../../node_modules/flickity/js/add-remove-cell.js"),
              __webpack_require__(/*! ./lazyload */ "../../../node_modules/flickity/js/lazyload.js"),
            ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
              __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        })(window, function factory(Flickity) {
          return Flickity;
        });


        /***/
      }),

/***/ "../../../node_modules/flickity/js/lazyload.js":
      ((module, exports, __webpack_require__) => {

      }),

/***/ "../../../node_modules/flickity/js/page-dots.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! ./flickity */ "../../../node_modules/flickity/js/flickity.js"),
              __webpack_require__(/*! unipointer/unipointer */ "../../../node_modules/unipointer/unipointer.js"),
              __webpack_require__(/*! fizzy-ui-utils/utils */ "../../../node_modules/fizzy-ui-utils/utils.js"),
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unipointer, utils) {
              return factory(window, Flickity, Unipointer, utils);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(window, Flickity, Unipointer, utils) {


          'use strict';

          function PageDots(parent) {
            this.parent = parent;
            this._create();
          }

          PageDots.prototype = Object.create(Unipointer.prototype);

          Flickity.PageDots = PageDots;


          Flickity.createMethods.push('_createPageDots');

          var proto = Flickity.prototype;


          Flickity.PageDots = PageDots;

          return Flickity;

        }));
      }),

/***/ "../../../node_modules/flickity/js/player.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! ev-emitter/ev-emitter */ "../../../node_modules/ev-emitter/ev-emitter.js"),
              __webpack_require__(/*! fizzy-ui-utils/utils */ "../../../node_modules/fizzy-ui-utils/utils.js"),
              __webpack_require__(/*! ./flickity */ "../../../node_modules/flickity/js/flickity.js"),
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter, utils, Flickity) {
              return factory(EvEmitter, utils, Flickity);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(EvEmitter, utils, Flickity) {

          'use strict';

          // -------------------------- Player -------------------------- //

          function Player(parent) {
            this.parent = parent;
            this.state = 'stopped';
            // visibility change event handler
            this.onVisibilityChange = this.visibilityChange.bind(this);
            this.onVisibilityPlay = this.visibilityPlay.bind(this);
          }

          Player.prototype = Object.create(EvEmitter.prototype);


          utils.extend(Flickity.defaults, {
            pauseAutoPlayOnHover: true,
          });

          Flickity.createMethods.push('_createPlayer');
          var proto = Flickity.prototype;

          Flickity.Player = Player;

          return Flickity;

        }));


        /***/
      }),

/***/ "../../../node_modules/flickity/js/prev-next-button.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! ./flickity */ "../../../node_modules/flickity/js/flickity.js"),
              __webpack_require__(/*! unipointer/unipointer */ "../../../node_modules/unipointer/unipointer.js"),
              __webpack_require__(/*! fizzy-ui-utils/utils */ "../../../node_modules/fizzy-ui-utils/utils.js"),
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unipointer, utils) {
              return factory(window, Flickity, Unipointer, utils);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(window, Flickity, Unipointer, utils) {
          'use strict';

          var svgURI = 'http://www.w3.org/2000/svg';

          // -------------------------- PrevNextButton -------------------------- //

          function PrevNextButton(direction, parent) {
            this.direction = direction;
            this.parent = parent;
            this._create();
          }

          PrevNextButton.prototype = Object.create(Unipointer.prototype);


          Flickity.PrevNextButton = PrevNextButton;

          return Flickity;

        }));
      }),

/***/ "../../../node_modules/flickity/js/slide.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
              __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
                __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory() {
          'use strict';

          function Slide(parent) {
            this.parent = parent;
            this.isOriginLeft = parent.originSide == 'left';
            this.cells = [];
            this.outerWidth = 0;
            this.height = 0;
          }

          var proto = Slide.prototype;

          return Slide;

        }));
      }),

/***/ "../../../node_modules/foreach/index.js":
      ((module) => {


        var hasOwn = Object.prototype.hasOwnProperty;
        var toString = Object.prototype.toString;

        module.exports = function forEach(obj, fn, ctx) {
          if (toString.call(fn) !== '[object Function]') {
            throw new TypeError('iterator must be a function');
          }
          var l = obj.length;
          if (l === +l) {
            for (var i = 0; i < l; i++) {
              fn.call(ctx, obj[i], i, obj);
            }
          } else {
            for (var k in obj) {
              if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
              }
            }
          }
        };
      }),

/***/ "../../../node_modules/function-bind/implementation.js":
      ((module) => {

        "use strict";

        var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
        var slice = Array.prototype.slice;
        var toStr = Object.prototype.toString;
        var funcType = '[object Function]';

        module.exports = function bind(that) {
          var target = this;
          if (typeof target !== 'function' || toStr.call(target) !== funcType) {
            throw new TypeError(ERROR_MESSAGE + target);
          }
          var args = slice.call(arguments, 1);

          var bound;
          var binder = function () {
            if (this instanceof bound) {
              var result = target.apply(
                this,
                args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                return result;
              }
              return this;
            } else {
              return target.apply(
                that,
                args.concat(slice.call(arguments))
              );
            }
          };

          var boundLength = Math.max(0, target.length - args.length);
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
          }

          bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

          if (target.prototype) {
            var Empty = function Empty() { };
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            Empty.prototype = null;
          }

          return bound;
        };


        /***/
      }),

/***/ "../../../node_modules/function-bind/index.js":
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var implementation = __webpack_require__(/*! ./implementation */ "../../../node_modules/function-bind/implementation.js");

        module.exports = Function.prototype.bind || implementation;


        /***/
      }),

/***/ "../../../node_modules/get-intrinsic/index.js":
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var undefined;

        var $SyntaxError = SyntaxError;
        var $Function = Function;
        var $TypeError = TypeError;

        // eslint-disable-next-line consistent-return
        var getEvalledConstructor = function (expressionSyntax) {
          try {
            return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
          } catch (e) { }
        };

        var $gOPD = Object.getOwnPropertyDescriptor;
        if ($gOPD) {
          try {
            $gOPD({}, '');
          } catch (e) {
            $gOPD = null; // this is IE 8, which has a broken gOPD
          }
        }

        var throwTypeError = function () {
          throw new $TypeError();
        };
        var ThrowTypeError = $gOPD
          ? (function () {
            try {
              // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
              arguments.callee; // IE 8 does not throw here
              return throwTypeError;
            } catch (calleeThrows) {
              try {
                // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
                return $gOPD(arguments, 'callee').get;
              } catch (gOPDthrows) {
                return throwTypeError;
              }
            }
          }())
          : throwTypeError;

        var hasSymbols = __webpack_require__(/*! has-symbols */ "../../../node_modules/has-symbols/index.js")();

        var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

        var needsEval = {};

        var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

        var INTRINSICS = {
          '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
          '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
          '%AsyncFromSyncIteratorPrototype%': undefined,
          '%AsyncFunction%': needsEval,
          '%AsyncGenerator%': needsEval,
          '%AsyncGeneratorFunction%': needsEval,
          '%AsyncIteratorPrototype%': needsEval,
          '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
          '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
          '%Boolean%': Boolean,
          '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%eval%': eval, // eslint-disable-line no-eval
          '%EvalError%': EvalError,
          '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
          '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
          '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
          '%Function%': $Function,
          '%GeneratorFunction%': needsEval,
          '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
          '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
          '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
          '%JSON%': typeof JSON === 'object' ? JSON : undefined,
          '%Map%': typeof Map === 'undefined' ? undefined : Map,
          '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
          '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
          '%RangeError%': RangeError,
          '%ReferenceError%': ReferenceError,
          '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
          '%RegExp%': RegExp,
          '%Set%': typeof Set === 'undefined' ? undefined : Set,
          '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
          '%Symbol%': hasSymbols ? Symbol : undefined,
          '%SyntaxError%': $SyntaxError,
          '%ThrowTypeError%': ThrowTypeError,
          '%TypedArray%': TypedArray,
          '%TypeError%': $TypeError,
          '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
          '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
          '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
          '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
          '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
          '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
        };

        var doEval = function doEval(name) {
          var value;
          if (name === '%AsyncFunction%') {
            value = getEvalledConstructor('async function () {}');
          } else if (name === '%GeneratorFunction%') {
            value = getEvalledConstructor('function* () {}');
          } else if (name === '%AsyncGeneratorFunction%') {
            value = getEvalledConstructor('async function* () {}');
          } else if (name === '%AsyncGenerator%') {
            var fn = doEval('%AsyncGeneratorFunction%');
            if (fn) {
              value = fn.prototype;
            }
          } else if (name === '%AsyncIteratorPrototype%') {
            var gen = doEval('%AsyncGenerator%');
            if (gen) {
              value = getProto(gen.prototype);
            }
          }

          INTRINSICS[name] = value;

          return value;
        };

        var LEGACY_ALIASES = {
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype']
        };

      }),

/***/ "../../../node_modules/get-size/get-size.js":
      ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

        (function (window, factory) {
          /* jshint strict: false */ /* globals define, module */
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
              __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
                __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        })(window, function factory() {
          'use strict';

          function getSize(elem) {
            setup();

            // use querySeletor if elem is string
            if (typeof elem == 'string') {
              elem = document.querySelector(elem);
            }

            // do not proceed on non-objects
            if (!elem || typeof elem != 'object' || !elem.nodeType) {
              return;
            }

            var style = getStyle(elem);

            // if hidden, everything is 0
            if (style.display == 'none') {
              return getZeroSize();
            }

            var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight;

            var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

            // get all measurements
            for (var i = 0; i < measurementsLength; i++) {
              var measurement = measurements[i];
              var value = style[measurement];
              var num = parseFloat(value);
              // any 'auto', 'medium' value will be 0
              size[measurement] = !isNaN(num) ? num : 0;
            }

            var paddingWidth = size.paddingLeft + size.paddingRight;
            var paddingHeight = size.paddingTop + size.paddingBottom;
            var marginWidth = size.marginLeft + size.marginRight;
            var marginHeight = size.marginTop + size.marginBottom;
            var borderWidth = size.borderLeftWidth + size.borderRightWidth;
            var borderHeight = size.borderTopWidth + size.borderBottomWidth;

            var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

            // overwrite width and height if we can get it from style
            var styleWidth = getStyleSize(style.width);
            if (styleWidth !== false) {
              size.width = styleWidth +
                // add padding and border unless it's already including it
                (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
            }

            var styleHeight = getStyleSize(style.height);
            if (styleHeight !== false) {
              size.height = styleHeight +
                // add padding and border unless it's already including it
                (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
            }

            size.innerWidth = size.width - (paddingWidth + borderWidth);
            size.innerHeight = size.height - (paddingHeight + borderHeight);

            size.outerWidth = size.width + marginWidth;
            size.outerHeight = size.height + marginHeight;

            return size;
          }

          return getSize;

        });


        /***/
      }),

/***/ "../../../node_modules/has-symbols/index.js":
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var origSymbol = typeof Symbol !== 'undefined' && Symbol;
        var hasSymbolSham = __webpack_require__(/*! ./shams */ "../../../node_modules/has-symbols/shams.js");

      }),

    "../../../node_modules/has-symbols/shams.js":
      ((module) => {

        "use strict";


      }),

/***/ "../../../node_modules/has-tostringtag/shams.js":
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var hasSymbols = __webpack_require__("../../../node_modules/has-symbols/shams.js");

        module.exports = function hasToStringTagShams() {
          return hasSymbols() && !!Symbol.toStringTag;
        };


      }),

/***/ "../../../node_modules/has/src/index.js":
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var bind = __webpack_require__(/*! function-bind */ "../../../node_modules/function-bind/index.js");

        module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
      }),

/***/ "../../../node_modules/imagesloaded/imagesloaded.js":
      (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;


        (function (window, factory) {
          'use strict';
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__("../../../node_modules/ev-emitter/ev-emitter.js")
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
              return factory(window, EvEmitter);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        })(typeof window !== 'undefined' ? window : this,
          function factory(window, EvEmitter) {

            'use strict';

            var $ = window.jQuery;
            var console = window.console;
            function extend(a, b) {
              for (var prop in b) {
                a[prop] = b[prop];
              }
              return a;
            }

            var arraySlice = Array.prototype.slice;
            function makeArray(obj) {
              if (Array.isArray(obj)) {
                return obj;
              }

              var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
              if (isArrayLike) {
                // convert nodeList to array
                return arraySlice.call(obj);
              }

              // array of single index
              return [obj];
            }

            function ImagesLoaded(elem, options, onAlways) {
              // coerce ImagesLoaded() without new, to be new ImagesLoaded()
              if (!(this instanceof ImagesLoaded)) {
                return new ImagesLoaded(elem, options, onAlways);
              }
              // use elem as selector string
              var queryElem = elem;
              if (typeof elem == 'string') {
                queryElem = document.querySelectorAll(elem);
              }
              // bail if bad element
              if (!queryElem) {
                console.error('Bad element for imagesLoaded ' + (queryElem || elem));
                return;
              }

              this.elements = makeArray(queryElem);
              this.options = extend({}, this.options);
              // shift arguments if no options set
              if (typeof options == 'function') {
                onAlways = options;
              } else {
                extend(this.options, options);
              }

              if (onAlways) {
                this.on('always', onAlways);
              }

              this.getImages();

              if ($) {
                // add jQuery Deferred object
                this.jqDeferred = new $.Deferred();
              }

              // HACK check async to allow time to bind listeners
              setTimeout(this.check.bind(this));
            }

            ImagesLoaded.prototype = Object.create(EvEmitter.prototype);

            ImagesLoaded.prototype.options = {};

            ImagesLoaded.prototype.getImages = function () {
              this.images = [];

              // filter & find items if we have an item selector
              this.elements.forEach(this.addElementImages, this);
            };

            /**
             * @param {Node} element
             */
            ImagesLoaded.prototype.addElementImages = function (elem) {
              // filter siblings
              if (elem.nodeName == 'IMG') {
                this.addImage(elem);
              }
              // get background image on element
              if (this.options.background === true) {
                this.addElementBackgroundImages(elem);
              }

              // find children
              // no non-element nodes, #143
              var nodeType = elem.nodeType;
              if (!nodeType || !elementNodeTypes[nodeType]) {
                return;
              }
              var childImgs = elem.querySelectorAll('img');
              // concat childElems to filterFound array
              for (var i = 0; i < childImgs.length; i++) {
                var img = childImgs[i];
                this.addImage(img);
              }

              // get child background images
              if (typeof this.options.background == 'string') {
                var children = elem.querySelectorAll(this.options.background);
                for (i = 0; i < children.length; i++) {
                  var child = children[i];
                  this.addElementBackgroundImages(child);
                }
              }
            };

            var elementNodeTypes = {
              1: true,
              9: true,
              11: true
            };

            ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
              var style = getComputedStyle(elem);
              if (!style) {
                // Firefox returns null if in a hidden iframe https://bugzil.la/548397
                return;
              }
              // get url inside url("...")
              var reURL = /url\((['"])?(.*?)\1\)/gi;
              var matches = reURL.exec(style.backgroundImage);
              while (matches !== null) {
                var url = matches && matches[2];
                if (url) {
                  this.addBackground(url, elem);
                }
                matches = reURL.exec(style.backgroundImage);
              }
            };


            ImagesLoaded.prototype.addImage = function (img) {
              var loadingImage = new LoadingImage(img);
              this.images.push(loadingImage);
            };

            ImagesLoaded.prototype.addBackground = function (url, elem) {
              var background = new Background(url, elem);
              this.images.push(background);
            };

            ImagesLoaded.prototype.check = function () {
              var _this = this;
              this.progressedCount = 0;
              this.hasAnyBroken = false;
              // complete if no images
              if (!this.images.length) {
                this.complete();
                return;
              }

              function onProgress(image, elem, message) {
                // HACK - Chrome triggers event before object properties have changed. #83
                setTimeout(function () {
                  _this.progress(image, elem, message);
                });
              }

              this.images.forEach(function (loadingImage) {
                loadingImage.once('progress', onProgress);
                loadingImage.check();
              });
            };

            ImagesLoaded.prototype.progress = function (image, elem, message) {
              this.progressedCount++;
              this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
              // progress event
              this.emitEvent('progress', [this, image, elem]);
              if (this.jqDeferred && this.jqDeferred.notify) {
                this.jqDeferred.notify(this, image);
              }
              // check if completed
              if (this.progressedCount == this.images.length) {
                this.complete();
              }

              if (this.options.debug && console) {
                console.log('progress: ' + message, image, elem);
              }
            };

            ImagesLoaded.prototype.complete = function () {
              var eventName = this.hasAnyBroken ? 'fail' : 'done';
              this.isComplete = true;
              this.emitEvent(eventName, [this]);
              this.emitEvent('always', [this]);
              if (this.jqDeferred) {
                var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
                this.jqDeferred[jqMethod](this);
              }
            };

            // --------------------------  -------------------------- //

            function LoadingImage(img) {
              this.img = img;
            }

            LoadingImage.prototype = Object.create(EvEmitter.prototype);

            LoadingImage.prototype.check = function () {
              // If complete is true and browser supports natural sizes,
              // try to check for image status manually.
              var isComplete = this.getIsImageComplete();
              if (isComplete) {
                // report based on naturalWidth
                this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
                return;
              }

              // If none of the checks above matched, simulate loading on detached element.
              this.proxyImage = new Image();
              this.proxyImage.addEventListener('load', this);
              this.proxyImage.addEventListener('error', this);
              // bind to image as well for Firefox. #191
              this.img.addEventListener('load', this);
              this.img.addEventListener('error', this);
              this.proxyImage.src = this.img.src;
            };

            LoadingImage.prototype.getIsImageComplete = function () {
              // check for non-zero, non-undefined naturalWidth
              // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
              return this.img.complete && this.img.naturalWidth;
            };

            LoadingImage.prototype.confirm = function (isLoaded, message) {
              this.isLoaded = isLoaded;
              this.emitEvent('progress', [this, this.img, message]);
            };

            // ----- events ----- //

            // trigger specified handler for event type
            LoadingImage.prototype.handleEvent = function (event) {
              var method = 'on' + event.type;
              if (this[method]) {
                this[method](event);
              }
            };

            LoadingImage.prototype.onload = function () {
              this.confirm(true, 'onload');
              this.unbindEvents();
            };

            LoadingImage.prototype.onerror = function () {
              this.confirm(false, 'onerror');
              this.unbindEvents();
            };

            LoadingImage.prototype.unbindEvents = function () {
              this.proxyImage.removeEventListener('load', this);
              this.proxyImage.removeEventListener('error', this);
              this.img.removeEventListener('load', this);
              this.img.removeEventListener('error', this);
            };

            // -------------------------- Background -------------------------- //

            function Background(url, element) {
              this.url = url;
              this.element = element;
              this.img = new Image();
            }

            // inherit LoadingImage prototype
            Background.prototype = Object.create(LoadingImage.prototype);

            Background.prototype.check = function () {
              this.img.addEventListener('load', this);
              this.img.addEventListener('error', this);
              this.img.src = this.url;
              // check if image is already complete
              var isComplete = this.getIsImageComplete();
              if (isComplete) {
                this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
                this.unbindEvents();
              }
            };

            Background.prototype.unbindEvents = function () {
              this.img.removeEventListener('load', this);
              this.img.removeEventListener('error', this);
            };

            Background.prototype.confirm = function (isLoaded, message) {
              this.isLoaded = isLoaded;
              this.emitEvent('progress', [this, this.element, message]);
            };

            // -------------------------- jQuery -------------------------- //

            ImagesLoaded.makeJQueryPlugin = function (jQuery) {
              jQuery = jQuery || window.jQuery;
              if (!jQuery) {
                return;
              }
              // set local variable
              $ = jQuery;
              // $().imagesLoaded()
              $.fn.imagesLoaded = function (options, callback) {
                var instance = new ImagesLoaded(this, options, callback);
                return instance.jqDeferred.promise($(this));
              };
            };
            // try making plugin
            ImagesLoaded.makeJQueryPlugin();

            // --------------------------  -------------------------- //

            return ImagesLoaded;

          });


        /***/
      }),

/***/ "../../../node_modules/inherits/inherits_browser.js":
      ((module) => {

        if (typeof Object.create === 'function') {
          // implementation from standard node.js 'util' module
          module.exports = function inherits(ctor, superCtor) {
            if (superCtor) {
              ctor.super_ = superCtor
              ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                  value: ctor,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              })
            }
          };
        } else {
          // old school shim for old browsers
          module.exports = function inherits(ctor, superCtor) {
            if (superCtor) {
              ctor.super_ = superCtor
              var TempCtor = function () { }
              TempCtor.prototype = superCtor.prototype
              ctor.prototype = new TempCtor()
              ctor.prototype.constructor = ctor
            }
          }
        }


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/decorator_utils.js":
/*!*************************************************************************!*\
  !*** ../../../node_modules/inversify/lib/annotation/decorator_utils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.tagProperty = exports.tagParameter = exports.decorate = void 0;
        var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "../../../node_modules/inversify/lib/constants/error_msgs.js");
        var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "../../../node_modules/inversify/lib/constants/metadata_keys.js");
        function tagParameter(annotationTarget, propertyName, parameterIndex, metadata) {
          var metadataKey = METADATA_KEY.TAGGED;
          _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex);
        }
        exports.tagParameter = tagParameter;
        function tagProperty(annotationTarget, propertyName, metadata) {
          var metadataKey = METADATA_KEY.TAGGED_PROP;
          _tagParameterOrProperty(metadataKey, annotationTarget.constructor, propertyName, metadata);
        }
        exports.tagProperty = tagProperty;
        function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
          var paramsOrPropertiesMetadata = {};
          var isParameterDecorator = (typeof parameterIndex === "number");
          var key = (parameterIndex !== undefined && isParameterDecorator) ? parameterIndex.toString() : propertyName;
          if (isParameterDecorator && propertyName !== undefined) {
            throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
          }
          if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
            paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
          }
          var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
          if (!Array.isArray(paramOrPropertyMetadata)) {
            paramOrPropertyMetadata = [];
          }
          else {
            for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
              var m = paramOrPropertyMetadata_1[_i];
              if (m.key === metadata.key) {
                throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m.key.toString());
              }
            }
          }
          paramOrPropertyMetadata.push(metadata);
          paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
          Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
        }
        function _decorate(decorators, target) {
          Reflect.decorate(decorators, target);
        }
        function _param(paramIndex, decorator) {
          return function (target, key) { decorator(target, key, paramIndex); };
        }
        function decorate(decorator, target, parameterIndex) {
          if (typeof parameterIndex === "number") {
            _decorate([_param(parameterIndex, decorator)], target);
          }
          else if (typeof parameterIndex === "string") {
            Reflect.decorate([decorator], target, parameterIndex);
          }
          else {
            _decorate([decorator], target);
          }
        }
        exports.decorate = decorate;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/inject.js":
/*!****************************************************************!*\
  !*** ../../../node_modules/inversify/lib/annotation/inject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.inject = exports.LazyServiceIdentifer = void 0;
        var error_msgs_1 = __webpack_require__(/*! ../constants/error_msgs */ "../../../node_modules/inversify/lib/constants/error_msgs.js");
        var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "../../../node_modules/inversify/lib/constants/metadata_keys.js");
        var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "../../../node_modules/inversify/lib/planning/metadata.js");
        var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "../../../node_modules/inversify/lib/annotation/decorator_utils.js");
        var LazyServiceIdentifer = (function () {
          function LazyServiceIdentifer(cb) {
            this._cb = cb;
          }
          LazyServiceIdentifer.prototype.unwrap = function () {
            return this._cb();
          };
          return LazyServiceIdentifer;
        }());
        exports.LazyServiceIdentifer = LazyServiceIdentifer;
        function inject(serviceIdentifier) {
          return function (target, targetKey, index) {
            if (serviceIdentifier === undefined) {
              throw new Error(error_msgs_1.UNDEFINED_INJECT_ANNOTATION(target.name));
            }
            var metadata = new metadata_1.Metadata(METADATA_KEY.INJECT_TAG, serviceIdentifier);
            if (typeof index === "number") {
              decorator_utils_1.tagParameter(target, targetKey, index, metadata);
            }
            else {
              decorator_utils_1.tagProperty(target, targetKey, metadata);
            }
          };
        }
        exports.inject = inject;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/injectable.js":
      ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.injectable = void 0;
        var ERRORS_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "../../../node_modules/inversify/lib/constants/error_msgs.js");
        var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "../../../node_modules/inversify/lib/constants/metadata_keys.js");
        function injectable() {
          return function (target) {
            if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target)) {
              throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
            }
            var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
            Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);
            return target;
          };
        }
        exports.injectable = injectable;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/multi_inject.js":
      ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.multiInject = void 0;
        var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "../../../node_modules/inversify/lib/constants/metadata_keys.js");
        var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "../../../node_modules/inversify/lib/planning/metadata.js");
        var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "../../../node_modules/inversify/lib/annotation/decorator_utils.js");
        function multiInject(serviceIdentifier) {
          return function (target, targetKey, index) {
            var metadata = new metadata_1.Metadata(METADATA_KEY.MULTI_INJECT_TAG, serviceIdentifier);
            if (typeof index === "number") {
              decorator_utils_1.tagParameter(target, targetKey, index, metadata);
            }
            else {
              decorator_utils_1.tagProperty(target, targetKey, metadata);
            }
          };
        }
        exports.multiInject = multiInject;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/named.js":
      ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.named = void 0;
        var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "../../../node_modules/inversify/lib/constants/metadata_keys.js");
        var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "../../../node_modules/inversify/lib/planning/metadata.js");
        var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "../../../node_modules/inversify/lib/annotation/decorator_utils.js");
        function named(name) {
          return function (target, targetKey, index) {
            var metadata = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name);
            if (typeof index === "number") {
              decorator_utils_1.tagParameter(target, targetKey, index, metadata);
            }
            else {
              decorator_utils_1.tagProperty(target, targetKey, metadata);
            }
          };
        }
        exports.named = named;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/optional.js":
      ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.optional = void 0;
        var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "../../../node_modules/inversify/lib/constants/metadata_keys.js");
        var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "../../../node_modules/inversify/lib/planning/metadata.js");
        var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "../../../node_modules/inversify/lib/annotation/decorator_utils.js");
        function optional() {
          return function (target, targetKey, index) {
            var metadata = new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true);
            if (typeof index === "number") {
              decorator_utils_1.tagParameter(target, targetKey, index, metadata);
            }
            else {
              decorator_utils_1.tagProperty(target, targetKey, metadata);
            }
          };
        }
        exports.optional = optional;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/post_construct.js":
      ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.postConstruct = void 0;
        var ERRORS_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "../../../node_modules/inversify/lib/constants/error_msgs.js");
        var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "../../../node_modules/inversify/lib/constants/metadata_keys.js");
        var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "../../../node_modules/inversify/lib/planning/metadata.js");
        function postConstruct() {
          return function (target, propertyKey, descriptor) {
            var metadata = new metadata_1.Metadata(METADATA_KEY.POST_CONSTRUCT, propertyKey);
            if (Reflect.hasOwnMetadata(METADATA_KEY.POST_CONSTRUCT, target.constructor)) {
              throw new Error(ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
            }
            Reflect.defineMetadata(METADATA_KEY.POST_CONSTRUCT, metadata, target.constructor);
          };
        }
        exports.postConstruct = postConstruct;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/tagged.js":
      ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.tagged = void 0;
        var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "../../../node_modules/inversify/lib/planning/metadata.js");
        var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "../../../node_modules/inversify/lib/annotation/decorator_utils.js");
        function tagged(metadataKey, metadataValue) {
          return function (target, targetKey, index) {
            var metadata = new metadata_1.Metadata(metadataKey, metadataValue);
            if (typeof index === "number") {
              decorator_utils_1.tagParameter(target, targetKey, index, metadata);
            }
            else {
              decorator_utils_1.tagProperty(target, targetKey, metadata);
            }
          };
        }
        exports.tagged = tagged;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/target_name.js":
      ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.targetName = void 0;
        var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "../../../node_modules/inversify/lib/constants/metadata_keys.js");
        var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "../../../node_modules/inversify/lib/planning/metadata.js");
        var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "../../../node_modules/inversify/lib/annotation/decorator_utils.js");
        function targetName(name) {
          return function (target, targetKey, index) {
            var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
          };
        }
        exports.targetName = targetName;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/annotation/unmanaged.js":
      ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.unmanaged = void 0;
        var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "../../../node_modules/inversify/lib/constants/metadata_keys.js");
        var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "../../../node_modules/inversify/lib/planning/metadata.js");
        var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "../../../node_modules/inversify/lib/annotation/decorator_utils.js");
        function unmanaged() {
          return function (target, targetKey, index) {
            var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, true);
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
          };
        }
        exports.unmanaged = unmanaged;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/bindings/binding.js":
/*!***************************************************************!*\
  !*** ../../../node_modules/inversify/lib/bindings/binding.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.Binding = void 0;
        var literal_types_1 = __webpack_require__(/*! ../constants/literal_types */ "../../../node_modules/inversify/lib/constants/literal_types.js");
        var id_1 = __webpack_require__(/*! ../utils/id */ "../../../node_modules/inversify/lib/utils/id.js");
        var Binding = (function () {
          function Binding(serviceIdentifier, scope) {
            this.id = id_1.id();
            this.activated = false;
            this.serviceIdentifier = serviceIdentifier;
            this.scope = scope;
            this.type = literal_types_1.BindingTypeEnum.Invalid;
            this.constraint = function (request) { return true; };
            this.implementationType = null;
            this.cache = null;
            this.factory = null;
            this.provider = null;
            this.onActivation = null;
            this.dynamicValue = null;
          }
          Binding.prototype.clone = function () {
            var clone = new Binding(this.serviceIdentifier, this.scope);
            clone.activated = (clone.scope === literal_types_1.BindingScopeEnum.Singleton) ? this.activated : false;
            clone.implementationType = this.implementationType;
            clone.dynamicValue = this.dynamicValue;
            clone.scope = this.scope;
            clone.type = this.type;
            clone.factory = this.factory;
            clone.provider = this.provider;
            clone.constraint = this.constraint;
            clone.onActivation = this.onActivation;
            clone.cache = this.cache;
            return clone;
          };
          return Binding;
        }());
        exports.Binding = Binding;


        /***/
      }),

/***/ "../../../node_modules/inversify/lib/bindings/binding_count.js":
      ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.BindingCount = void 0;
        var BindingCount = {
          MultipleBindingsAvailable: 2,
          NoBindingsAvailable: 0,
          OnlyOneBindingAvailable: 1
        };
        exports.BindingCount = BindingCount;


        /***/
      }),

/***/ "../../../node_modules/process/browser.js":
/*!************************************************!*\
  !*** ../../../node_modules/process/browser.js ***!
  \************************************************/
/***/ ((module) => {

        // shim for using process in browser
        var process = module.exports = {};

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined');
        }
        (function () {
          try {
            if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        }())
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          }
          // if setTimeout wasn't available but was latter defined
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }


        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          }
          // if clearTimeout wasn't available but was latter defined
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
            }
          }



        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }

        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;

          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }

        process.nextTick = function (fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };

        // v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function () {
          this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() { }

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function (name) { return [] }

        process.binding = function (name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function () { return '/' };
        process.chdir = function (dir) {
          throw new Error('process.chdir is not supported');
        };
        process.umask = function () { return 0; };


        /***/
      }),



/***/ "../../../node_modules/reflect-metadata/Reflect.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/reflect-metadata/Reflect.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "../../../node_modules/process/browser.js");

        var Reflect;
        (function (Reflect) {
          // Metadata Proposal
          // https://rbuckton.github.io/reflect-metadata/
          (function (factory) {
            var root = typeof __webpack_require__.g === "object" ? __webpack_require__.g :
              typeof self === "object" ? self :
                typeof this === "object" ? this :
                  Function("return this;")();
            var exporter = makeExporter(Reflect);
            if (typeof root.Reflect === "undefined") {
              root.Reflect = Reflect;
            }
            else {
              exporter = makeExporter(root.Reflect, exporter);
            }
            factory(exporter);
            function makeExporter(target, previous) {
              return function (key, value) {
                if (typeof target[key] !== "function") {
                  Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                  previous(key, value);
              };
            }
          })(function (exporter) {
            var hasOwn = Object.prototype.hasOwnProperty;
            // feature test for Symbol support
            var supportsSymbol = typeof Symbol === "function";
            var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
            var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
            var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
            var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
            var downLevel = !supportsCreate && !supportsProto;
            var HashMap = {
              // create an object in dictionary mode (a.k.a. "slow" mode in v8)
              create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                  ? function () { return MakeDictionary({ __proto__: null }); }
                  : function () { return MakeDictionary({}); },
              has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
              get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
            };
            // Load global or shim versions of Map, Set, and WeakMap
            var functionPrototype = Object.getPrototypeOf(Function);
            var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
            var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
            var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
            var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
            // [[Metadata]] internal slot
            // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
            var Metadata = new _WeakMap();
            function decorate(decorators, target, propertyKey, attributes) {
              if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                  throw new TypeError();
                if (!IsObject(target))
                  throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                  throw new TypeError();
                if (IsNull(attributes))
                  attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
              }
              else {
                if (!IsArray(decorators))
                  throw new TypeError();
                if (!IsConstructor(target))
                  throw new TypeError();
                return DecorateConstructor(decorators, target);
              }
            }
            exporter("decorate", decorate);
            function metadata(metadataKey, metadataValue) {
              function decorator(target, propertyKey) {
                if (!IsObject(target))
                  throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                  throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
              }
              return decorator;
            }
            exporter("metadata", metadata);
            function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            exporter("defineMetadata", defineMetadata);

            function hasMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryHasMetadata(metadataKey, target, propertyKey);
            }
            exporter("hasMetadata", hasMetadata);

            function hasOwnMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
            }
            exporter("hasOwnMetadata", hasOwnMetadata);

            function getMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryGetMetadata(metadataKey, target, propertyKey);
            }
            exporter("getMetadata", getMetadata);

            function getOwnMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
            }
            exporter("getOwnMetadata", getOwnMetadata);

            function getMetadataKeys(target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryMetadataKeys(target, propertyKey);
            }
            exporter("getMetadataKeys", getMetadataKeys);
            function getOwnMetadataKeys(target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryOwnMetadataKeys(target, propertyKey);
            }
            exporter("getOwnMetadataKeys", getOwnMetadataKeys);

            function deleteMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
              var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
              if (IsUndefined(metadataMap))
                return false;
              if (!metadataMap.delete(metadataKey))
                return false;
              if (metadataMap.size > 0)
                return true;
              var targetMetadata = Metadata.get(target);
              targetMetadata.delete(propertyKey);
              if (targetMetadata.size > 0)
                return true;
              Metadata.delete(target);
              return true;
            }
            exporter("deleteMetadata", deleteMetadata);
            function DecorateConstructor(decorators, target) {
              for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                  if (!IsConstructor(decorated))
                    throw new TypeError();
                  target = decorated;
                }
              }
              return target;
            }
            function DecorateProperty(decorators, target, propertyKey, descriptor) {
              for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                  if (!IsObject(decorated))
                    throw new TypeError();
                  descriptor = decorated;
                }
              }
              return descriptor;
            }
            function GetOrCreateMetadataMap(O, P, Create) {
              var targetMetadata = Metadata.get(O);
              if (IsUndefined(targetMetadata)) {
                if (!Create)
                  return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
              }
              var metadataMap = targetMetadata.get(P);
              if (IsUndefined(metadataMap)) {
                if (!Create)
                  return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
              }
              return metadataMap;
            }

            function OrdinaryHasMetadata(MetadataKey, O, P) {
              var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
              if (hasOwn)
                return true;
              var parent = OrdinaryGetPrototypeOf(O);
              if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
              return false;
            }

            function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
              if (IsUndefined(metadataMap))
                return false;
              return ToBoolean(metadataMap.has(MetadataKey));
            }

            function OrdinaryGetMetadata(MetadataKey, O, P) {
              var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
              if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
              var parent = OrdinaryGetPrototypeOf(O);
              if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
              return undefined;
            }
            // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
            function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
              if (IsUndefined(metadataMap))
                return undefined;
              return metadataMap.get(MetadataKey);
            }
            // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
            function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
              var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
              metadataMap.set(MetadataKey, MetadataValue);
            }
            // 3.1.6.1 OrdinaryMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
            function OrdinaryMetadataKeys(O, P) {
              var ownKeys = OrdinaryOwnMetadataKeys(O, P);
              var parent = OrdinaryGetPrototypeOf(O);
              if (parent === null)
                return ownKeys;
              var parentKeys = OrdinaryMetadataKeys(parent, P);
              if (parentKeys.length <= 0)
                return ownKeys;
              if (ownKeys.length <= 0)
                return parentKeys;
              var set = new _Set();
              var keys = [];
              for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                  set.add(key);
                  keys.push(key);
                }
              }
              for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                  set.add(key);
                  keys.push(key);
                }
              }
              return keys;
            }
            // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
            function OrdinaryOwnMetadataKeys(O, P) {
              var keys = [];
              var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
              if (IsUndefined(metadataMap))
                return keys;
              var keysObj = metadataMap.keys();
              var iterator = GetIterator(keysObj);
              var k = 0;
              while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                  keys.length = k;
                  return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                  keys[k] = nextValue;
                }
                catch (e) {
                  try {
                    IteratorClose(iterator);
                  }
                  finally {
                    throw e;
                  }
                }
                k++;
              }
            }
            // 6 ECMAScript Data Typ0es and Values
            // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
            function Type(x) {
              if (x === null)
                return 1 /* Null */;
              switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
              }
            }
            // 6.1.1 The Undefined Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
            function IsUndefined(x) {
              return x === undefined;
            }
            // 6.1.2 The Null Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
            function IsNull(x) {
              return x === null;
            }
            // 6.1.5 The Symbol Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
            function IsSymbol(x) {
              return typeof x === "symbol";
            }
            // 6.1.7 The Object Type
            // https://tc39.github.io/ecma262/#sec-object-type
            function IsObject(x) {
              return typeof x === "object" ? x !== null : typeof x === "function";
            }
            // 7.1 Type Conversion
            // https://tc39.github.io/ecma262/#sec-type-conversion
            // 7.1.1 ToPrimitive(input [, PreferredType])
            // https://tc39.github.io/ecma262/#sec-toprimitive
            function ToPrimitive(input, PreferredType) {
              switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
              }
              var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
              var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
              if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                  throw new TypeError();
                return result;
              }
              return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
            }
            // 7.1.1.1 OrdinaryToPrimitive(O, hint)
            // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
            function OrdinaryToPrimitive(O, hint) {
              if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                  var result = toString_1.call(O);
                  if (!IsObject(result))
                    return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                  var result = valueOf.call(O);
                  if (!IsObject(result))
                    return result;
                }
              }
              else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                  var result = valueOf.call(O);
                  if (!IsObject(result))
                    return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                  var result = toString_2.call(O);
                  if (!IsObject(result))
                    return result;
                }
              }
              throw new TypeError();
            }
            // 7.1.2 ToBoolean(argument)
            // https://tc39.github.io/ecma262/2016/#sec-toboolean
            function ToBoolean(argument) {
              return !!argument;
            }
            // 7.1.12 ToString(argument)
            // https://tc39.github.io/ecma262/#sec-tostring
            function ToString(argument) {
              return "" + argument;
            }
            // 7.1.14 ToPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-topropertykey
            function ToPropertyKey(argument) {
              var key = ToPrimitive(argument, 3 /* String */);
              if (IsSymbol(key))
                return key;
              return ToString(key);
            }
            // 7.2 Testing and Comparison Operations
            // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
            // 7.2.2 IsArray(argument)
            // https://tc39.github.io/ecma262/#sec-isarray
            function IsArray(argument) {
              return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                  ? argument instanceof Array
                  : Object.prototype.toString.call(argument) === "[object Array]";
            }
            // 7.2.3 IsCallable(argument)
            // https://tc39.github.io/ecma262/#sec-iscallable
            function IsCallable(argument) {
              // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
              return typeof argument === "function";
            }
            // 7.2.4 IsConstructor(argument)
            // https://tc39.github.io/ecma262/#sec-isconstructor
            function IsConstructor(argument) {
              // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
              return typeof argument === "function";
            }
            // 7.2.7 IsPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-ispropertykey
            function IsPropertyKey(argument) {
              switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
              }
            }
            // 7.3 Operations on Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-objects
            // 7.3.9 GetMethod(V, P)
            // https://tc39.github.io/ecma262/#sec-getmethod
            function GetMethod(V, P) {
              var func = V[P];
              if (func === undefined || func === null)
                return undefined;
              if (!IsCallable(func))
                throw new TypeError();
              return func;
            }
            // 7.4 Operations on Iterator Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
            function GetIterator(obj) {
              var method = GetMethod(obj, iteratorSymbol);
              if (!IsCallable(method))
                throw new TypeError(); // from Call
              var iterator = method.call(obj);
              if (!IsObject(iterator))
                throw new TypeError();
              return iterator;
            }
            // 7.4.4 IteratorValue(iterResult)
            // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
            function IteratorValue(iterResult) {
              return iterResult.value;
            }
            // 7.4.5 IteratorStep(iterator)
            // https://tc39.github.io/ecma262/#sec-iteratorstep
            function IteratorStep(iterator) {
              var result = iterator.next();
              return result.done ? false : result;
            }
            // 7.4.6 IteratorClose(iterator, completion)
            // https://tc39.github.io/ecma262/#sec-iteratorclose
            function IteratorClose(iterator) {
              var f = iterator["return"];
              if (f)
                f.call(iterator);
            }
            // 9.1 Ordinary Object Internal Methods and Internal Slots
            // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
            // 9.1.1.1 OrdinaryGetPrototypeOf(O)
            // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
            function OrdinaryGetPrototypeOf(O) {
              var proto = Object.getPrototypeOf(O);
              if (typeof O !== "function" || O === functionPrototype)
                return proto;
              // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
              // Try to determine the superclass constructor. Compatible implementations
              // must either set __proto__ on a subclass constructor to the superclass constructor,
              // or ensure each class has a valid `constructor` property on its prototype that
              // points back to the constructor.
              // If this is not the same as Function.[[Prototype]], then this is definately inherited.
              // This is the case when in ES6 or when using __proto__ in a compatible browser.
              if (proto !== functionPrototype)
                return proto;
              // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
              var prototype = O.prototype;
              var prototypeProto = prototype && Object.getPrototypeOf(prototype);
              if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
              // If the constructor was not a function, then we cannot determine the heritage.
              var constructor = prototypeProto.constructor;
              if (typeof constructor !== "function")
                return proto;
              // If we have some kind of self-reference, then we cannot determine the heritage.
              if (constructor === O)
                return proto;
              // we have a pretty good guess at the heritage.
              return constructor;
            }
            // naive Map shim
            function CreateMapPolyfill() {
              var cacheSentinel = {};
              var arraySentinel = [];
              var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                  this._index = 0;
                  this._keys = keys;
                  this._values = values;
                  this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                  var index = this._index;
                  if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                      this._index = -1;
                      this._keys = arraySentinel;
                      this._values = arraySentinel;
                    }
                    else {
                      this._index++;
                    }
                    return { value: result, done: false };
                  }
                  return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  throw error;
                };
                MapIterator.prototype.return = function (value) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  return { value: value, done: true };
                };
                return MapIterator;
              }());
              return /** @class */ (function () {
                function Map() {
                  this._keys = [];
                  this._values = [];
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                  get: function () { return this._keys.length; },
                  enumerable: true,
                  configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                  var index = this._find(key, /*insert*/ false);
                  return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                  var index = this._find(key, /*insert*/ true);
                  this._values[index] = value;
                  return this;
                };
                Map.prototype.delete = function (key) {
                  var index = this._find(key, /*insert*/ false);
                  if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                      this._keys[i - 1] = this._keys[i];
                      this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (key === this._cacheKey) {
                      this._cacheKey = cacheSentinel;
                      this._cacheIndex = -2;
                    }
                    return true;
                  }
                  return false;
                };
                Map.prototype.clear = function () {
                  this._keys.length = 0;
                  this._values.length = 0;
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                  if (this._cacheKey !== key) {
                    this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                  }
                  if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(undefined);
                  }
                  return this._cacheIndex;
                };
                return Map;
              }());
              function getKey(key, _) {
                return key;
              }
              function getValue(_, value) {
                return value;
              }
              function getEntry(key, value) {
                return [key, value];
              }
            }
            // naive Set shim
            function CreateSetPolyfill() {
              return /** @class */ (function () {
                function Set() {
                  this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                  get: function () { return this._map.size; },
                  enumerable: true,
                  configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
              }());
            }
            // naive WeakMap shim
            function CreateWeakMapPolyfill() {
              var UUID_SIZE = 16;
              var keys = HashMap.create();
              var rootKey = CreateUniqueKey();
              return /** @class */ (function () {
                function WeakMap() {
                  this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                  var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                  return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                  var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                  return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                  var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                  table[this._key] = value;
                  return this;
                };
                WeakMap.prototype.delete = function (target) {
                  var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                  return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                  // NOTE: not a real clear, just makes the previous data unreachable
                  this._key = CreateUniqueKey();
                };
                return WeakMap;
              }());
              function CreateUniqueKey() {
                var key;
                do
                  key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
              }
              function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                  if (!create)
                    return undefined;
                  Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
              }
              function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                  buffer[i] = Math.random() * 0xff | 0;
                return buffer;
              }
              function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                  if (typeof crypto !== "undefined")
                    return crypto.getRandomValues(new Uint8Array(size));
                  if (typeof msCrypto !== "undefined")
                    return msCrypto.getRandomValues(new Uint8Array(size));
                  return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
              }
              function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                  var byte = data[offset];
                  if (offset === 4 || offset === 6 || offset === 8)
                    result += "-";
                  if (byte < 16)
                    result += "0";
                  result += byte.toString(16).toLowerCase();
                }
                return result;
              }
            }
            // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
            function MakeDictionary(obj) {
              obj.__ = undefined;
              delete obj.__;
              return obj;
            }
          });
        })(Reflect || (Reflect = {}));


        /***/
      }),

/***/ "../../../node_modules/unidragger/unidragger.js":
/*!******************************************************!*\
  !*** ../../../node_modules/unidragger/unidragger.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */

        /*jshint browser: true, unused: true, undef: true, strict: true */

        (function (window, factory) {
          // universal module definition
          /*jshint strict: false */ /*globals define, module, require */

          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! unipointer/unipointer */ "../../../node_modules/unipointer/unipointer.js")
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Unipointer) {
              return factory(window, Unipointer);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(window, Unipointer) {

          'use strict';

          // -------------------------- Unidragger -------------------------- //

          function Unidragger() { }

          // inherit Unipointer & EvEmitter
          var proto = Unidragger.prototype = Object.create(Unipointer.prototype);

          // ----- bind start ----- //

          proto.bindHandles = function () {
            this._bindHandles(true);
          };

          proto.unbindHandles = function () {
            this._bindHandles(false);
          };

          /**
           * Add or remove start event
           * @param {Boolean} isAdd
           */
          proto._bindHandles = function (isAdd) {
            // munge isAdd, default to true
            isAdd = isAdd === undefined ? true : isAdd;
            // bind each handle
            var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
            var touchAction = isAdd ? this._touchActionValue : '';
            for (var i = 0; i < this.handles.length; i++) {
              var handle = this.handles[i];
              this._bindStartEvent(handle, isAdd);
              handle[bindMethod]('click', this);
              // touch-action: none to override browser touch gestures. metafizzy/flickity#540
              if (window.PointerEvent) {
                handle.style.touchAction = touchAction;
              }
            }
          };

          // prototype so it can be overwriteable by Flickity
          proto._touchActionValue = 'none';

          // ----- start event ----- //

          /**
           * pointer start
           * @param {Event} event
           * @param {Event or Touch} pointer
           */
          proto.pointerDown = function (event, pointer) {
            var isOkay = this.okayPointerDown(event);
            if (!isOkay) {
              return;
            }
            // track start event position
            // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
            this.pointerDownPointer = {
              pageX: pointer.pageX,
              pageY: pointer.pageY,
            };

            event.preventDefault();
            this.pointerDownBlur();
            // bind move and end events
            this._bindPostStartEvents(event);
            this.emitEvent('pointerDown', [event, pointer]);
          };

          // nodes that have text fields
          var cursorNodes = {
            TEXTAREA: true,
            INPUT: true,
            SELECT: true,
            OPTION: true,
          };

          // input types that do not have text fields
          var clickTypes = {
            radio: true,
            checkbox: true,
            button: true,
            submit: true,
            image: true,
            file: true,
          };

          // dismiss inputs with text fields. flickity#403, flickity#404
          proto.okayPointerDown = function (event) {
            var isCursorNode = cursorNodes[event.target.nodeName];
            var isClickType = clickTypes[event.target.type];
            var isOkay = !isCursorNode || isClickType;
            if (!isOkay) {
              this._pointerReset();
            }
            return isOkay;
          };

          // kludge to blur previously focused input
          proto.pointerDownBlur = function () {
            var focused = document.activeElement;
            // do not blur body for IE10, metafizzy/flickity#117
            var canBlur = focused && focused.blur && focused != document.body;
            if (canBlur) {
              focused.blur();
            }
          };

          // ----- move event ----- //

          /**
           * drag move
           * @param {Event} event
           * @param {Event or Touch} pointer
           */
          proto.pointerMove = function (event, pointer) {
            var moveVector = this._dragPointerMove(event, pointer);
            this.emitEvent('pointerMove', [event, pointer, moveVector]);
            this._dragMove(event, pointer, moveVector);
          };

          // base pointer move logic
          proto._dragPointerMove = function (event, pointer) {
            var moveVector = {
              x: pointer.pageX - this.pointerDownPointer.pageX,
              y: pointer.pageY - this.pointerDownPointer.pageY
            };
            // start drag if pointer has moved far enough to start drag
            if (!this.isDragging && this.hasDragStarted(moveVector)) {
              this._dragStart(event, pointer);
            }
            return moveVector;
          };

          // condition if pointer has moved far enough to start drag
          proto.hasDragStarted = function (moveVector) {
            return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
          };

          // ----- end event ----- //

          /**
           * pointer up
           * @param {Event} event
           * @param {Event or Touch} pointer
           */
          proto.pointerUp = function (event, pointer) {
            this.emitEvent('pointerUp', [event, pointer]);
            this._dragPointerUp(event, pointer);
          };

          proto._dragPointerUp = function (event, pointer) {
            if (this.isDragging) {
              this._dragEnd(event, pointer);
            } else {
              // pointer didn't move enough for drag to start
              this._staticClick(event, pointer);
            }
          };

          // -------------------------- drag -------------------------- //

          // dragStart
          proto._dragStart = function (event, pointer) {
            this.isDragging = true;
            // prevent clicks
            this.isPreventingClicks = true;
            this.dragStart(event, pointer);
          };

          proto.dragStart = function (event, pointer) {
            this.emitEvent('dragStart', [event, pointer]);
          };

          // dragMove
          proto._dragMove = function (event, pointer, moveVector) {
            // do not drag if not dragging yet
            if (!this.isDragging) {
              return;
            }

            this.dragMove(event, pointer, moveVector);
          };

          proto.dragMove = function (event, pointer, moveVector) {
            event.preventDefault();
            this.emitEvent('dragMove', [event, pointer, moveVector]);
          };

          // dragEnd
          proto._dragEnd = function (event, pointer) {
            // set flags
            this.isDragging = false;
            // re-enable clicking async
            setTimeout(function () {
              delete this.isPreventingClicks;
            }.bind(this));

            this.dragEnd(event, pointer);
          };

          proto.dragEnd = function (event, pointer) {
            this.emitEvent('dragEnd', [event, pointer]);
          };

          // ----- onclick ----- //

          // handle all clicks and prevent clicks when dragging
          proto.onclick = function (event) {
            if (this.isPreventingClicks) {
              event.preventDefault();
            }
          };

          // ----- staticClick ----- //

          // triggered after pointer down & up with no/tiny movement
          proto._staticClick = function (event, pointer) {
            // ignore emulated mouse up clicks
            if (this.isIgnoringMouseUp && event.type == 'mouseup') {
              return;
            }

            this.staticClick(event, pointer);

            // set flag for emulated clicks 300ms after touchend
            if (event.type != 'mouseup') {
              this.isIgnoringMouseUp = true;
              // reset flag after 300ms
              setTimeout(function () {
                delete this.isIgnoringMouseUp;
              }.bind(this), 400);
            }
          };

          proto.staticClick = function (event, pointer) {
            this.emitEvent('staticClick', [event, pointer]);
          };

          // ----- utils ----- //

          Unidragger.getPointerPoint = Unipointer.getPointerPoint;

          // -----  ----- //

          return Unidragger;

        }));


        /***/
      }),

/***/ "../../../node_modules/unipointer/unipointer.js":
/*!******************************************************!*\
  !*** ../../../node_modules/unipointer/unipointer.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */

        /*jshint browser: true, undef: true, unused: true, strict: true */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */ /*global define, module, require */
          if (true) {
            // AMD
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(/*! ev-emitter/ev-emitter */ "../../../node_modules/ev-emitter/ev-emitter.js")
            ], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
              return factory(window, EvEmitter);
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else { }

        }(window, function factory(window, EvEmitter) {

          'use strict';

          function noop() { }

          function Unipointer() { }

          // inherit EvEmitter
          var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);

          proto.bindStartEvent = function (elem) {
            this._bindStartEvent(elem, true);
          };

          proto.unbindStartEvent = function (elem) {
            this._bindStartEvent(elem, false);
          };

          /**
           * Add or remove start event
           * @param {Boolean} isAdd - remove if falsey
           */
          proto._bindStartEvent = function (elem, isAdd) {
            // munge isAdd, default to true
            isAdd = isAdd === undefined ? true : isAdd;
            var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

            // default to mouse events
            var startEvent = 'mousedown';
            if ('ontouchstart' in window) {
              // HACK prefer Touch Events as you can preventDefault on touchstart to
              // disable scroll in iOS & mobile Chrome metafizzy/flickity#1177
              startEvent = 'touchstart';
            } else if (window.PointerEvent) {
              // Pointer Events
              startEvent = 'pointerdown';
            }
            elem[bindMethod](startEvent, this);
          };

          // trigger handler methods for events
          proto.handleEvent = function (event) {
            var method = 'on' + event.type;
            if (this[method]) {
              this[method](event);
            }
          };

          // returns the touch that we're keeping track of
          proto.getTouch = function (touches) {
            for (var i = 0; i < touches.length; i++) {
              var touch = touches[i];
              if (touch.identifier == this.pointerIdentifier) {
                return touch;
              }
            }
          };

          // ----- start event ----- //

          proto.onmousedown = function (event) {
            // dismiss clicks from right or middle buttons
            var button = event.button;
            if (button && (button !== 0 && button !== 1)) {
              return;
            }
            this._pointerDown(event, event);
          };

          proto.ontouchstart = function (event) {
            this._pointerDown(event, event.changedTouches[0]);
          };

          proto.onpointerdown = function (event) {
            this._pointerDown(event, event);
          };

          /**
           * pointer start
           * @param {Event} event
           * @param {Event or Touch} pointer
           */
          proto._pointerDown = function (event, pointer) {
            // dismiss right click and other pointers
            // button = 0 is okay, 1-4 not
            if (event.button || this.isPointerDown) {
              return;
            }

            this.isPointerDown = true;
            // save pointer identifier to match up touch events
            this.pointerIdentifier = pointer.pointerId !== undefined ?
              // pointerId for pointer events, touch.indentifier for touch events
              pointer.pointerId : pointer.identifier;

            this.pointerDown(event, pointer);
          };

          proto.pointerDown = function (event, pointer) {
            this._bindPostStartEvents(event);
            this.emitEvent('pointerDown', [event, pointer]);
          };

          // hash of events to be bound after start event
          var postStartEvents = {
            mousedown: ['mousemove', 'mouseup'],
            touchstart: ['touchmove', 'touchend', 'touchcancel'],
            pointerdown: ['pointermove', 'pointerup', 'pointercancel'],
          };

          proto._bindPostStartEvents = function (event) {
            if (!event) {
              return;
            }
            // get proper events to match start event
            var events = postStartEvents[event.type];
            // bind events to node
            events.forEach(function (eventName) {
              window.addEventListener(eventName, this);
            }, this);
            // save these arguments
            this._boundPointerEvents = events;
          };

          proto._unbindPostStartEvents = function () {
            // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
            if (!this._boundPointerEvents) {
              return;
            }
            this._boundPointerEvents.forEach(function (eventName) {
              window.removeEventListener(eventName, this);
            }, this);

            delete this._boundPointerEvents;
          };

          // ----- move event ----- //

          proto.onmousemove = function (event) {
            this._pointerMove(event, event);
          };

          proto.onpointermove = function (event) {
            if (event.pointerId == this.pointerIdentifier) {
              this._pointerMove(event, event);
            }
          };

          proto.ontouchmove = function (event) {
            var touch = this.getTouch(event.changedTouches);
            if (touch) {
              this._pointerMove(event, touch);
            }
          };

          /**
           * pointer move
           * @param {Event} event
           * @param {Event or Touch} pointer
           * @private
           */
          proto._pointerMove = function (event, pointer) {
            this.pointerMove(event, pointer);
          };

          // public
          proto.pointerMove = function (event, pointer) {
            this.emitEvent('pointerMove', [event, pointer]);
          };

          // ----- end event ----- //


          proto.onmouseup = function (event) {
            this._pointerUp(event, event);
          };

          proto.onpointerup = function (event) {
            if (event.pointerId == this.pointerIdentifier) {
              this._pointerUp(event, event);
            }
          };

          proto.ontouchend = function (event) {
            var touch = this.getTouch(event.changedTouches);
            if (touch) {
              this._pointerUp(event, touch);
            }
          };

          /**
           * pointer up
           * @param {Event} event
           * @param {Event or Touch} pointer
           * @private
           */
          proto._pointerUp = function (event, pointer) {
            this._pointerDone();
            this.pointerUp(event, pointer);
          };

          // public
          proto.pointerUp = function (event, pointer) {
            this.emitEvent('pointerUp', [event, pointer]);
          };

          // ----- pointer done ----- //

          // triggered on pointer up & pointer cancel
          proto._pointerDone = function () {
            this._pointerReset();
            this._unbindPostStartEvents();
            this.pointerDone();
          };

          proto._pointerReset = function () {
            // reset properties
            this.isPointerDown = false;
            delete this.pointerIdentifier;
          };

          proto.pointerDone = noop;

          // ----- pointer cancel ----- //

          proto.onpointercancel = function (event) {
            if (event.pointerId == this.pointerIdentifier) {
              this._pointerCancel(event, event);
            }
          };

          proto.ontouchcancel = function (event) {
            var touch = this.getTouch(event.changedTouches);
            if (touch) {
              this._pointerCancel(event, touch);
            }
          };

          /**
           * pointer cancel
           * @param {Event} event
           * @param {Event or Touch} pointer
           * @private
           */
          proto._pointerCancel = function (event, pointer) {
            this._pointerDone();
            this.pointerCancel(event, pointer);
          };

          // public
          proto.pointerCancel = function (event, pointer) {
            this.emitEvent('pointerCancel', [event, pointer]);
          };

          // -----  ----- //

          // utility function for getting x/y coords from event
          Unipointer.getPointerPoint = function (pointer) {
            return {
              x: pointer.pageX,
              y: pointer.pageY
            };
          };

          // -----  ----- //

          return Unipointer;

        }));


        /***/
      }),

/***/ "../../../node_modules/util/support/isBufferBrowser.js":
/*!*************************************************************!*\
  !*** ../../../node_modules/util/support/isBufferBrowser.js ***!
  \*************************************************************/
/***/ ((module) => {

        module.exports = function isBuffer(arg) {
          return arg && typeof arg === 'object'
            && typeof arg.copy === 'function'
            && typeof arg.fill === 'function'
            && typeof arg.readUInt8 === 'function';
        }

        /***/
      }),

/***/ "../../../node_modules/util/support/types.js":
/*!***************************************************!*\
  !*** ../../../node_modules/util/support/types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";
        // Currently in sync with Node.js lib/internal/util/types.js
        // https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9



        var isArgumentsObject = __webpack_require__(/*! is-arguments */ "../../../node_modules/is-arguments/index.js");
        var isGeneratorFunction = __webpack_require__(/*! is-generator-function */ "../../../node_modules/is-generator-function/index.js");
        var whichTypedArray = __webpack_require__(/*! which-typed-array */ "../../../node_modules/which-typed-array/index.js");
        var isTypedArray = __webpack_require__(/*! is-typed-array */ "../../../node_modules/is-typed-array/index.js");

        function uncurryThis(f) {
          return f.call.bind(f);
        }

        var BigIntSupported = typeof BigInt !== 'undefined';
        var SymbolSupported = typeof Symbol !== 'undefined';

        var ObjectToString = uncurryThis(Object.prototype.toString);

        var numberValue = uncurryThis(Number.prototype.valueOf);
        var stringValue = uncurryThis(String.prototype.valueOf);
        var booleanValue = uncurryThis(Boolean.prototype.valueOf);

        if (BigIntSupported) {
          var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
        }

        if (SymbolSupported) {
          var symbolValue = uncurryThis(Symbol.prototype.valueOf);
        }

        function checkBoxedPrimitive(value, prototypeValueOf) {
          if (typeof value !== 'object') {
            return false;
          }
          try {
            prototypeValueOf(value);
            return true;
          } catch (e) {
            return false;
          }
        }

        exports.isArgumentsObject = isArgumentsObject;
        exports.isGeneratorFunction = isGeneratorFunction;
        exports.isTypedArray = isTypedArray;

        // Taken from here and modified for better browser support
        // https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
        function isPromise(input) {
          return (
            (
              typeof Promise !== 'undefined' &&
              input instanceof Promise
            ) ||
            (
              input !== null &&
              typeof input === 'object' &&
              typeof input.then === 'function' &&
              typeof input.catch === 'function'
            )
          );
        }
        exports.isPromise = isPromise;

        function isArrayBufferView(value) {
          if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
            return ArrayBuffer.isView(value);
          }

          return (
            isTypedArray(value) ||
            isDataView(value)
          );
        }
        exports.isArrayBufferView = isArrayBufferView;


        function isUint8Array(value) {
          return whichTypedArray(value) === 'Uint8Array';
        }
        exports.isUint8Array = isUint8Array;

        function isUint8ClampedArray(value) {
          return whichTypedArray(value) === 'Uint8ClampedArray';
        }
        exports.isUint8ClampedArray = isUint8ClampedArray;

        function isUint16Array(value) {
          return whichTypedArray(value) === 'Uint16Array';
        }
        exports.isUint16Array = isUint16Array;

        function isUint32Array(value) {
          return whichTypedArray(value) === 'Uint32Array';
        }
        exports.isUint32Array = isUint32Array;

        function isInt8Array(value) {
          return whichTypedArray(value) === 'Int8Array';
        }
        exports.isInt8Array = isInt8Array;

        function isInt16Array(value) {
          return whichTypedArray(value) === 'Int16Array';
        }
        exports.isInt16Array = isInt16Array;

        function isInt32Array(value) {
          return whichTypedArray(value) === 'Int32Array';
        }
        exports.isInt32Array = isInt32Array;

        function isFloat32Array(value) {
          return whichTypedArray(value) === 'Float32Array';
        }
        exports.isFloat32Array = isFloat32Array;

        function isFloat64Array(value) {
          return whichTypedArray(value) === 'Float64Array';
        }
        exports.isFloat64Array = isFloat64Array;

        function isBigInt64Array(value) {
          return whichTypedArray(value) === 'BigInt64Array';
        }
        exports.isBigInt64Array = isBigInt64Array;

        function isBigUint64Array(value) {
          return whichTypedArray(value) === 'BigUint64Array';
        }
        exports.isBigUint64Array = isBigUint64Array;

        function isMapToString(value) {
          return ObjectToString(value) === '[object Map]';
        }
        isMapToString.working = (
          typeof Map !== 'undefined' &&
          isMapToString(new Map())
        );

        function isMap(value) {
          if (typeof Map === 'undefined') {
            return false;
          }

          return isMapToString.working
            ? isMapToString(value)
            : value instanceof Map;
        }
        exports.isMap = isMap;

        function isSetToString(value) {
          return ObjectToString(value) === '[object Set]';
        }
        isSetToString.working = (
          typeof Set !== 'undefined' &&
          isSetToString(new Set())
        );
        function isSet(value) {
          if (typeof Set === 'undefined') {
            return false;
          }

          return isSetToString.working
            ? isSetToString(value)
            : value instanceof Set;
        }
        exports.isSet = isSet;

        function isWeakMapToString(value) {
          return ObjectToString(value) === '[object WeakMap]';
        }
        isWeakMapToString.working = (
          typeof WeakMap !== 'undefined' &&
          isWeakMapToString(new WeakMap())
        );
        function isWeakMap(value) {
          if (typeof WeakMap === 'undefined') {
            return false;
          }

          return isWeakMapToString.working
            ? isWeakMapToString(value)
            : value instanceof WeakMap;
        }
        exports.isWeakMap = isWeakMap;

        function isWeakSetToString(value) {
          return ObjectToString(value) === '[object WeakSet]';
        }
        isWeakSetToString.working = (
          typeof WeakSet !== 'undefined' &&
          isWeakSetToString(new WeakSet())
        );
        function isWeakSet(value) {
          return isWeakSetToString(value);
        }
        exports.isWeakSet = isWeakSet;

        function isArrayBufferToString(value) {
          return ObjectToString(value) === '[object ArrayBuffer]';
        }
        isArrayBufferToString.working = (
          typeof ArrayBuffer !== 'undefined' &&
          isArrayBufferToString(new ArrayBuffer())
        );
        function isArrayBuffer(value) {
          if (typeof ArrayBuffer === 'undefined') {
            return false;
          }

          return isArrayBufferToString.working
            ? isArrayBufferToString(value)
            : value instanceof ArrayBuffer;
        }
        exports.isArrayBuffer = isArrayBuffer;

        function isDataViewToString(value) {
          return ObjectToString(value) === '[object DataView]';
        }
        isDataViewToString.working = (
          typeof ArrayBuffer !== 'undefined' &&
          typeof DataView !== 'undefined' &&
          isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
        );
        function isDataView(value) {
          if (typeof DataView === 'undefined') {
            return false;
          }

          return isDataViewToString.working
            ? isDataViewToString(value)
            : value instanceof DataView;
        }
        exports.isDataView = isDataView;

        // Store a copy of SharedArrayBuffer in case it's deleted elsewhere
        var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
        function isSharedArrayBufferToString(value) {
          return ObjectToString(value) === '[object SharedArrayBuffer]';
        }
        function isSharedArrayBuffer(value) {
          if (typeof SharedArrayBufferCopy === 'undefined') {
            return false;
          }

          if (typeof isSharedArrayBufferToString.working === 'undefined') {
            isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
          }

          return isSharedArrayBufferToString.working
            ? isSharedArrayBufferToString(value)
            : value instanceof SharedArrayBufferCopy;
        }
        exports.isSharedArrayBuffer = isSharedArrayBuffer;

        function isAsyncFunction(value) {
          return ObjectToString(value) === '[object AsyncFunction]';
        }
        exports.isAsyncFunction = isAsyncFunction;

        function isMapIterator(value) {
          return ObjectToString(value) === '[object Map Iterator]';
        }
        exports.isMapIterator = isMapIterator;

        function isSetIterator(value) {
          return ObjectToString(value) === '[object Set Iterator]';
        }
        exports.isSetIterator = isSetIterator;

        function isGeneratorObject(value) {
          return ObjectToString(value) === '[object Generator]';
        }
        exports.isGeneratorObject = isGeneratorObject;

        function isWebAssemblyCompiledModule(value) {
          return ObjectToString(value) === '[object WebAssembly.Module]';
        }
        exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

        function isNumberObject(value) {
          return checkBoxedPrimitive(value, numberValue);
        }
        exports.isNumberObject = isNumberObject;

        function isStringObject(value) {
          return checkBoxedPrimitive(value, stringValue);
        }
        exports.isStringObject = isStringObject;

        function isBooleanObject(value) {
          return checkBoxedPrimitive(value, booleanValue);
        }
        exports.isBooleanObject = isBooleanObject;

        function isBigIntObject(value) {
          return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
        }
        exports.isBigIntObject = isBigIntObject;

        function isSymbolObject(value) {
          return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
        }
        exports.isSymbolObject = isSymbolObject;

        function isBoxedPrimitive(value) {
          return (
            isNumberObject(value) ||
            isStringObject(value) ||
            isBooleanObject(value) ||
            isBigIntObject(value) ||
            isSymbolObject(value)
          );
        }
        exports.isBoxedPrimitive = isBoxedPrimitive;

        function isAnyArrayBuffer(value) {
          return typeof Uint8Array !== 'undefined' && (
            isArrayBuffer(value) ||
            isSharedArrayBuffer(value)
          );
        }
        exports.isAnyArrayBuffer = isAnyArrayBuffer;

        ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (method) {
          Object.defineProperty(exports, method, {
            enumerable: false,
            value: function () {
              throw new Error(method + ' is not supported in userland');
            }
          });
        });


        /***/
      }),

/***/ "../../../node_modules/util/util.js":
/*!******************************************!*\
  !*** ../../../node_modules/util/util.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "../../../node_modules/process/browser.js");
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
          function getOwnPropertyDescriptors(obj) {
            var keys = Object.keys(obj);
            var descriptors = {};
            for (var i = 0; i < keys.length; i++) {
              descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
            }
            return descriptors;
          };

        var formatRegExp = /%[sdj%]/g;
        exports.format = function (f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(' ');
          }

          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function (x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch (x) {
              case '%s': return String(args[i++]);
              case '%d': return Number(args[i++]);
              case '%j':
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return '[Circular]';
                }
              default:
                return x;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            if (isNull(x) || !isObject(x)) {
              str += ' ' + x;
            } else {
              str += ' ' + inspect(x);
            }
          }
          return str;
        };


        // Mark that a method should not be used.
        // Returns a modified function which warns once by default.
        // If --no-deprecation is set, then it is a no-op.
        exports.deprecate = function (fn, msg) {
          if (typeof process !== 'undefined' && process.noDeprecation === true) {
            return fn;
          }

          // Allow for deprecating things in the process of starting up.
          if (typeof process === 'undefined') {
            return function () {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          }

          var warned = false;
          function deprecated() {
            if (!warned) {
              if (process.throwDeprecation) {
                throw new Error(msg);
              } else if (process.traceDeprecation) {
                console.trace(msg);
              } else {
                console.error(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }

          return deprecated;
        };


        var debugs = {};
        var debugEnvRegex = /^$/;

        if (process.env.NODE_DEBUG) {
          var debugEnv = process.env.NODE_DEBUG;
          debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
            .replace(/\*/g, '.*')
            .replace(/,/g, '$|^')
            .toUpperCase();
          debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
        }
        exports.debuglog = function (set) {
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (debugEnvRegex.test(set)) {
              var pid = process.pid;
              debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
              };
            } else {
              debugs[set] = function () { };
            }
          }
          return debugs[set];
        };


        /**
         * Echos the value of a value. Trys to print the value out
         * in the best way possible given the different types.
         *
         * @param {Object} obj The object to print out.
         * @param {Object} opts Optional options object that alters the output.
         */
        /* legacy: obj, showHidden, depth, colors*/
        function inspect(obj, opts) {
          // default options
          var ctx = {
            seen: [],
            stylize: stylizeNoColor
          };
          // legacy...
          if (arguments.length >= 3) ctx.depth = arguments[2];
          if (arguments.length >= 4) ctx.colors = arguments[3];
          if (isBoolean(opts)) {
            // legacy...
            ctx.showHidden = opts;
          } else if (opts) {
            // got an "options" object
            exports._extend(ctx, opts);
          }
          // set default options
          if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
          if (isUndefined(ctx.depth)) ctx.depth = 2;
          if (isUndefined(ctx.colors)) ctx.colors = false;
          if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
          if (ctx.colors) ctx.stylize = stylizeWithColor;
          return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;


        // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
        inspect.colors = {
          'bold': [1, 22],
          'italic': [3, 23],
          'underline': [4, 24],
          'inverse': [7, 27],
          'white': [37, 39],
          'grey': [90, 39],
          'black': [30, 39],
          'blue': [34, 39],
          'cyan': [36, 39],
          'green': [32, 39],
          'magenta': [35, 39],
          'red': [31, 39],
          'yellow': [33, 39]
        };

        // Don't use 'blue' not visible on cmd.exe
        inspect.styles = {
          'special': 'cyan',
          'number': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          // "name": intentionally not styling
          'regexp': 'red'
        };


        function stylizeWithColor(str, styleType) {
          var style = inspect.styles[styleType];

          if (style) {
            return '\u001b[' + inspect.colors[style][0] + 'm' + str +
              '\u001b[' + inspect.colors[style][1] + 'm';
          } else {
            return str;
          }
        }


        function stylizeNoColor(str, styleType) {
          return str;
        }


        function arrayToHash(array) {
          var hash = {};

          array.forEach(function (val, idx) {
            hash[val] = true;
          });

          return hash;
        }


        function formatValue(ctx, value, recurseTimes) {
          // Provide a hook for user-specified inspect functions.
          // Check that value is an object with an inspect function on it
          if (ctx.customInspect &&
            value &&
            isFunction(value.inspect) &&
            // Filter out the util module, it's inspect function is special
            value.inspect !== exports.inspect &&
            // Also filter out any prototype objects using the circular check.
            !(value.constructor && value.constructor.prototype === value)) {
            var ret = value.inspect(recurseTimes, ctx);
            if (!isString(ret)) {
              ret = formatValue(ctx, ret, recurseTimes);
            }
            return ret;
          }

          // Primitive types cannot have properties
          var primitive = formatPrimitive(ctx, value);
          if (primitive) {
            return primitive;
          }

          // Look up the keys of the object.
          var keys = Object.keys(value);
          var visibleKeys = arrayToHash(keys);

          if (ctx.showHidden) {
            keys = Object.getOwnPropertyNames(value);
          }

          // IE doesn't make error fields non-enumerable
          // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
          if (isError(value)
            && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
            return formatError(value);
          }

          // Some type of object without properties can be shortcutted.
          if (keys.length === 0) {
            if (isFunction(value)) {
              var name = value.name ? ': ' + value.name : '';
              return ctx.stylize('[Function' + name + ']', 'special');
            }
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            }
            if (isDate(value)) {
              return ctx.stylize(Date.prototype.toString.call(value), 'date');
            }
            if (isError(value)) {
              return formatError(value);
            }
          }

          var base = '', array = false, braces = ['{', '}'];

          // Make Array say that they are Array
          if (isArray(value)) {
            array = true;
            braces = ['[', ']'];
          }

          // Make functions say that they are functions
          if (isFunction(value)) {
            var n = value.name ? ': ' + value.name : '';
            base = ' [Function' + n + ']';
          }

          // Make RegExps say that they are RegExps
          if (isRegExp(value)) {
            base = ' ' + RegExp.prototype.toString.call(value);
          }

          // Make dates with properties first say the date
          if (isDate(value)) {
            base = ' ' + Date.prototype.toUTCString.call(value);
          }

          // Make error with message first say the error
          if (isError(value)) {
            base = ' ' + formatError(value);
          }

          if (keys.length === 0 && (!array || value.length == 0)) {
            return braces[0] + base + braces[1];
          }

          if (recurseTimes < 0) {
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            } else {
              return ctx.stylize('[Object]', 'special');
            }
          }

          ctx.seen.push(value);

          var output;
          if (array) {
            output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
          } else {
            output = keys.map(function (key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }

          ctx.seen.pop();

          return reduceToSingleString(output, base, braces);
        }


        function formatPrimitive(ctx, value) {
          if (isUndefined(value))
            return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"') + '\'';
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value))
            return ctx.stylize('' + value, 'number');
          if (isBoolean(value))
            return ctx.stylize('' + value, 'boolean');
          // For some reason typeof null is "object", so special case here.
          if (isNull(value))
            return ctx.stylize('null', 'null');
        }


        function formatError(value) {
          return '[' + Error.prototype.toString.call(value) + ']';
        }


        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0, l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                String(i), true));
            } else {
              output.push('');
            }
          }
          keys.forEach(function (key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                key, true));
            }
          });
          return output;
        }


        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
          var name, str, desc;
          desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
          if (desc.get) {
            if (desc.set) {
              str = ctx.stylize('[Getter/Setter]', 'special');
            } else {
              str = ctx.stylize('[Getter]', 'special');
            }
          } else {
            if (desc.set) {
              str = ctx.stylize('[Setter]', 'special');
            }
          }
          if (!hasOwnProperty(visibleKeys, key)) {
            name = '[' + key + ']';
          }
          if (!str) {
            if (ctx.seen.indexOf(desc.value) < 0) {
              if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
              } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
              }
              if (str.indexOf('\n') > -1) {
                if (array) {
                  str = str.split('\n').map(function (line) {
                    return '  ' + line;
                  }).join('\n').substr(2);
                } else {
                  str = '\n' + str.split('\n').map(function (line) {
                    return '   ' + line;
                  }).join('\n');
                }
              }
            } else {
              str = ctx.stylize('[Circular]', 'special');
            }
          }
          if (isUndefined(name)) {
            if (array && key.match(/^\d+$/)) {
              return str;
            }
            name = JSON.stringify('' + key);
            if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              name = name.substr(1, name.length - 2);
              name = ctx.stylize(name, 'name');
            } else {
              name = name.replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, 'string');
            }
          }

          return name + ': ' + str;
        }


        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function (prev, cur) {
            numLinesEst++;
            if (cur.indexOf('\n') >= 0) numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }, 0);

          if (length > 60) {
            return braces[0] +
              (base === '' ? '' : base + '\n ') +
              ' ' +
              output.join(',\n  ') +
              ' ' +
              braces[1];
          }

          return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }


        // NOTE: These type checking functions intentionally don't use `instanceof`
        // because it is fragile and can be easily faked with `Object.create()`.
        exports.types = __webpack_require__(/*! ./support/types */ "../../../node_modules/util/support/types.js");

        function isArray(ar) {
          return Array.isArray(ar);
        }
        exports.isArray = isArray;

        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;

        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;

        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;

        function isSymbol(arg) {
          return typeof arg === 'symbol';
        }
        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;

        function isRegExp(re) {
          return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;
        exports.types.isRegExp = isRegExp;

        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
          return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;
        exports.types.isDate = isDate;

        function isError(e) {
          return isObject(e) &&
            (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;
        exports.types.isNativeError = isError;

        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
          return arg === null ||
            typeof arg === 'boolean' ||
            typeof arg === 'number' ||
            typeof arg === 'string' ||
            typeof arg === 'symbol' ||  // ES6 symbol
            typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;

        exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../../node_modules/util/support/isBufferBrowser.js");

        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }


        function pad(n) {
          return n < 10 ? '0' + n.toString(10) : n.toString(10);
        }


        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'];

        // 26 Feb 16:19:34
        function timestamp() {
          var d = new Date();
          var time = [pad(d.getHours()),
          pad(d.getMinutes()),
          pad(d.getSeconds())].join(':');
          return [d.getDate(), months[d.getMonth()], time].join(' ');
        }


        // log is just a thin wrapper to console.log that prepends a timestamp
        exports.log = function () {
          console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
        };


        /**
         * Inherit the prototype methods from one constructor into another.
         *
         * The Function.prototype.inherits from lang.js rewritten as a standalone
         * function (not on Function.prototype). NOTE: If this file is to be loaded
         * during bootstrapping this function needs to be rewritten using some native
         * functions as prototype setup using normal JavaScript does not work as
         * expected during bootstrapping (see mirror.js in r114903).
         *
         * @param {function} ctor Constructor function which needs to inherit the
         *     prototype.
         * @param {function} superCtor Constructor function to inherit prototype from.
         */
        exports.inherits = __webpack_require__(/*! inherits */ "../../../node_modules/inherits/inherits_browser.js");

        exports._extend = function (origin, add) {
          // Don't do anything if add isn't an object
          if (!add || !isObject(add)) return origin;

          var keys = Object.keys(add);
          var i = keys.length;
          while (i--) {
            origin[keys[i]] = add[keys[i]];
          }
          return origin;
        };

        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }

        var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

        exports.promisify = function promisify(original) {
          if (typeof original !== 'function')
            throw new TypeError('The "original" argument must be of type Function');

          if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
            var fn = original[kCustomPromisifiedSymbol];
            if (typeof fn !== 'function') {
              throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            }
            Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn, enumerable: false, writable: false, configurable: true
            });
            return fn;
          }

          function fn() {
            var promiseResolve, promiseReject;
            var promise = new Promise(function (resolve, reject) {
              promiseResolve = resolve;
              promiseReject = reject;
            });

            var args = [];
            for (var i = 0; i < arguments.length; i++) {
              args.push(arguments[i]);
            }
            args.push(function (err, value) {
              if (err) {
                promiseReject(err);
              } else {
                promiseResolve(value);
              }
            });

            try {
              original.apply(this, args);
            } catch (err) {
              promiseReject(err);
            }

            return promise;
          }

          Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

          if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn, enumerable: false, writable: false, configurable: true
          });
          return Object.defineProperties(
            fn,
            getOwnPropertyDescriptors(original)
          );
        }

        exports.promisify.custom = kCustomPromisifiedSymbol

        function callbackifyOnRejected(reason, cb) {
          // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
          // Because `null` is a special error value in callbacks which means "no error
          // occurred", we error-wrap so the callback consumer can distinguish between
          // "the promise rejected with null" or "the promise fulfilled with undefined".
          if (!reason) {
            var newReason = new Error('Promise was rejected with a falsy value');
            newReason.reason = reason;
            reason = newReason;
          }
          return cb(reason);
        }

        function callbackify(original) {
          if (typeof original !== 'function') {
            throw new TypeError('The "original" argument must be of type Function');
          }

          // We DO NOT return the promise as it gives the user a false sense that
          // the promise is actually somehow related to the callback's execution
          // and that the callback throwing will reject the promise.
          function callbackified() {
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
              args.push(arguments[i]);
            }

            var maybeCb = args.pop();
            if (typeof maybeCb !== 'function') {
              throw new TypeError('The last argument must be of type Function');
            }
            var self = this;
            var cb = function () {
              return maybeCb.apply(self, arguments);
            };
            // In true node style we process the callback on `nextTick` with all the
            // implications (stack, `uncaughtException`, `async_hooks`)
            original.apply(this, args)
              .then(function (ret) { process.nextTick(cb.bind(null, null, ret)) },
                function (rej) { process.nextTick(callbackifyOnRejected.bind(null, rej, cb)) });
          }

          Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
          Object.defineProperties(callbackified,
            getOwnPropertyDescriptors(original));
          return callbackified;
        }
        exports.callbackify = callbackify;


        /***/
      }),

/***/ "../../../node_modules/which-typed-array/index.js":
/*!********************************************************!*\
  !*** ../../../node_modules/which-typed-array/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var forEach = __webpack_require__(/*! foreach */ "../../../node_modules/foreach/index.js");
        var availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ "../../../node_modules/available-typed-arrays/index.js");
        var callBound = __webpack_require__(/*! call-bind/callBound */ "../../../node_modules/call-bind/callBound.js");

        var $toString = callBound('Object.prototype.toString');
        var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "../../../node_modules/has-tostringtag/shams.js")();

        var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;
        var typedArrays = availableTypedArrays();

        var $slice = callBound('String.prototype.slice');
        var toStrTags = {};
        var gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ "../../../node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js");
        var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
        if (hasToStringTag && gOPD && getPrototypeOf) {
          forEach(typedArrays, function (typedArray) {
            if (typeof g[typedArray] === 'function') {
              var arr = new g[typedArray]();
              if (Symbol.toStringTag in arr) {
                var proto = getPrototypeOf(arr);
                var descriptor = gOPD(proto, Symbol.toStringTag);
                if (!descriptor) {
                  var superProto = getPrototypeOf(proto);
                  descriptor = gOPD(superProto, Symbol.toStringTag);
                }
                toStrTags[typedArray] = descriptor.get;
              }
            }
          });
        }

        var tryTypedArrays = function tryAllTypedArrays(value) {
          var foundName = false;
          forEach(toStrTags, function (getter, typedArray) {
            if (!foundName) {
              try {
                var name = getter.call(value);
                if (name === typedArray) {
                  foundName = name;
                }
              } catch (e) { }
            }
          });
          return foundName;
        };

        var isTypedArray = __webpack_require__(/*! is-typed-array */ "../../../node_modules/is-typed-array/index.js");

        module.exports = function whichTypedArray(value) {
          if (!isTypedArray(value)) { return false; }
          if (!hasToStringTag || !(Symbol.toStringTag in value)) { return $slice($toString(value), 8, -1); }
          return tryTypedArrays(value);
        };


        /***/
      }),

/***/ "../../http/common/lib/HttpStatusCode.js":
/*!***********************************************!*\
  !*** ../../http/common/lib/HttpStatusCode.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.HttpStatusCode = void 0;
        var HttpStatusCode;
        (function (HttpStatusCode) {
          HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
          HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
          HttpStatusCode[HttpStatusCode["Processing"] = 102] = "Processing";
          HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
          HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
          HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
          HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
          HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
          HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
          HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
          HttpStatusCode[HttpStatusCode["MultiStatus"] = 207] = "MultiStatus";
          HttpStatusCode[HttpStatusCode["AlreadyReported"] = 208] = "AlreadyReported";
          HttpStatusCode[HttpStatusCode["ImUsed"] = 226] = "ImUsed";
          HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
          HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
          HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
          HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
          HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
          HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
          HttpStatusCode[HttpStatusCode["SwitchProxy"] = 306] = "SwitchProxy";
          HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
          HttpStatusCode[HttpStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
          HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
          HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
          HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
          HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
          HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
          HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
          HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
          HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
          HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
          HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
          HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
          HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
          HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
          HttpStatusCode[HttpStatusCode["PayloadTooLarge"] = 413] = "PayloadTooLarge";
          HttpStatusCode[HttpStatusCode["UriTooLong"] = 414] = "UriTooLong";
          HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
          HttpStatusCode[HttpStatusCode["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
          HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
          HttpStatusCode[HttpStatusCode["IAmATeapot"] = 418] = "IAmATeapot";
          HttpStatusCode[HttpStatusCode["MisdirectedRequest"] = 421] = "MisdirectedRequest";
          HttpStatusCode[HttpStatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
          HttpStatusCode[HttpStatusCode["Locked"] = 423] = "Locked";
          HttpStatusCode[HttpStatusCode["FailedDependency"] = 424] = "FailedDependency";
          HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
          HttpStatusCode[HttpStatusCode["PreconditionRequired"] = 428] = "PreconditionRequired";
          HttpStatusCode[HttpStatusCode["TooManyRequests"] = 429] = "TooManyRequests";
          HttpStatusCode[HttpStatusCode["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
          HttpStatusCode[HttpStatusCode["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
          HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
          HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
          HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
          HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
          HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
          HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
          HttpStatusCode[HttpStatusCode["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
          HttpStatusCode[HttpStatusCode["InsufficientStorage"] = 507] = "InsufficientStorage";
          HttpStatusCode[HttpStatusCode["LoopDetected"] = 508] = "LoopDetected";
          HttpStatusCode[HttpStatusCode["NotExtended"] = 510] = "NotExtended";
          HttpStatusCode[HttpStatusCode["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
        })(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));


        /***/
      }),

/***/ "../../reply/common/lib/Reply.js":
/*!***************************************!*\
  !*** ../../reply/common/lib/Reply.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.getOk = exports.okReply = exports.errStatus = exports.okStatus = exports.any = exports.all = exports.Reply = exports.UnexpectedNotOkError = exports.UnexpectedOkError = void 0;
        const deepCopy_1 = __webpack_require__(/*! @codesphere/utils-common/lib/deepCopy */ "../../utils/common/lib/deepCopy.js");
        const has_1 = __webpack_require__(/*! @codesphere/utils-common/lib/has */ "../../utils/common/lib/has.js");
        const hasAll_1 = __webpack_require__(/*! @codesphere/utils-common/lib/hasAll */ "../../utils/common/lib/hasAll.js");
        const log_1 = __webpack_require__(/*! @codesphere/utils-common/lib/log */ "../../utils/common/lib/log.js");
        class UnexpectedOkError extends Error {
          constructor() {
            super('A reply with StatusCode.OK does not store an errorMessage. Did you mean .getValue()?');
          }
        }
        exports.UnexpectedOkError = UnexpectedOkError;
        class UnexpectedNotOkError extends Error {
          constructor(errorMessage) {
            super('A reply with StatusCode.ERROR is not intended to hold any data. Did you mean .getMessage()?' +
              `Error message: ${errorMessage}`);
          }
        }
        exports.UnexpectedNotOkError = UnexpectedNotOkError;
        class Reply {
          constructor(reply, stack) {
            this.serializedReply = reply;
            this.stack = stack;
          }
          static all(...replies) {
            for (const reply of replies) {
              if (reply.notOk()) {
                return Reply.collectErrors(...replies);
              }
            }
            return Reply.getOk();
          }
          static any(...replies) {
            for (const reply of replies) {
              if (reply.ok()) {
                return Reply.getOk();
              }
            }
            return Reply.collectErrors(...replies);
          }
          static okReply(data) {
            return new Reply({
              code: log_1.Status.Ok,
              data,
            }, undefined);
          }
          static okStatus(message) {
            return new Reply({
              code: log_1.Status.Ok,
              data: message,
            }, undefined);
          }
          static errStatus(message, stack) {
            var _a;
            if (typeof message === 'string') {
              return new Reply({
                code: log_1.Status.Error,
                errMessage: message,
              }, (_a = (stack)) !== null && _a !== void 0 ? _a : new Error().stack);
            }
            return Reply.createFromError(message);
          }
          static getOk() {
            return Reply.OK;
          }
          static createFromSerializedReply(reply) {
            if (!has_1.has(reply) || !has_1.has(reply.code) && (!has_1.has(reply.data) || !has_1.has(reply.errMessage))) {
              return Reply.getUnparseable();
            }
            return new Reply(reply, reply.code === log_1.Status.Ok ? undefined : new Error().stack);
          }
          static createFromError(err) {
            var _a;
            if (!has_1.has(err) || !hasAll_1.hasAll(err.message, err.stack)) {
              return Reply.getUnparseable();
            }
            return new Reply({
              code: log_1.Status.Error,
              errName: err.name,
              errMessage: err.message,
            }, (_a = err.stack) !== null && _a !== void 0 ? _a : new Error().stack);
          }
          static setLogAsJson(logAsJson) {
            Reply.logAsJson = logAsJson;
          }
          static collectErrors(...replies) {
            const failedReplys = replies.filter(reply => reply.notOk());
            const message = failedReplys.map(reply => reply.getErrorMessage()).join('\n');
            const stack = failedReplys.map(reply => reply.stack).join('\n\n');
            return failedReplys.length === 0 ? Reply.getOk() : Reply.errStatus(message, stack);
          }
          static getUnparseable() {
            return Reply.errStatus('The reply could not be parsed.');
          }
          ok() {
            return this.serializedReply.code === log_1.Status.Ok;
          }
          notOk() {
            return !this.ok();
          }
          toSerializedReply() {
            return deepCopy_1.deepCopy(this.serializedReply);
          }
          and(otherReply) {
            return Reply.all(this, otherReply);
          }
          or(otherReply) {
            return Reply.any(this, otherReply);
          }
          getErrorName() {
            if (this.ok()) {
              throw new UnexpectedOkError();
            }
            return this.serializedReply.errName;
          }
          getErrorMessage() {
            if (this.ok()) {
              throw new UnexpectedOkError();
            }
            return this.serializedReply.errMessage;
          }
          getValue() {
            if (this.notOk()) {
              throw new UnexpectedNotOkError(this.serializedReply.errMessage);
            }
            return this.serializedReply.data;
          }
          orElse(alternativeData) {
            if (this.ok()) {
              return this.getValue();
            }
            return alternativeData;
          }
          log(...tags) {
            if (this.notOk()) {
              log_1.log(this.getErrorMessage(), Reply.logAsJson, log_1.Status.Error, this.stack, ...tags);
            }
            else {
              log_1.log(JSON.stringify(this.getValue()), Reply.logAsJson, this.serializedReply.code, this.stack, ...tags);
            }
            return this;
          }
          logIfError() {
            if (this.notOk()) {
              this.log();
            }
            return this;
          }
          throwIfError() {
            if (this.ok()) {
              return this;
            }
            const err = new Error(this.getErrorMessage());
            if (has_1.has(this.stack)) {
              err.stack = this.stack;
            }
            throw err;
          }
        }
        exports.Reply = Reply;
        Reply.OK = new Reply({
          code: log_1.Status.Ok,
        }, undefined);
        Reply.logAsJson = false;
        exports.all = Reply.all;
        exports.any = Reply.any;
        exports.okStatus = Reply.okStatus;
        exports.errStatus = Reply.errStatus;
        exports.okReply = Reply.okReply;
        exports.getOk = Reply.getOk;


        /***/
      }),

/***/ "../../rpc/common/lib/HttpContext.js":
/*!*******************************************!*\
  !*** ../../rpc/common/lib/HttpContext.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.CLIENT_CONTEXT_METHOD = void 0;
        exports.CLIENT_CONTEXT_METHOD = 'setClientContext';


        /***/
      }),

/***/ "../../rpc/common/lib/http/HttpRequestReplyStub.js":
/*!*********************************************************!*\
  !*** ../../rpc/common/lib/http/HttpRequestReplyStub.js ***!
  \*********************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {

        "use strict";

        var __importDefault = (this && this.__importDefault) || function (mod) {
          return (mod && mod.__esModule) ? mod : { "default": mod };
        };
        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.HttpRequestReplyStub = void 0;
        const cross_fetch_1 = __importDefault(__webpack_require__(/*! cross-fetch */ "../../rpc/common/node_modules/cross-fetch/dist/browser-ponyfill.js"));
        const Reply_1 = __webpack_require__(/*! @codesphere/reply-common/lib/Reply */ "../../reply/common/lib/Reply.js");
        const has_1 = __webpack_require__(/*! @codesphere/utils-common/lib/has */ "../../utils/common/lib/has.js");
        class HttpRequestReplyStub {
          constructor(url) {
            this.url = url.endsWith('/') ? url : url + '/';
          }
          async execute(method, args) {
            const config = {
              method: 'POST',
              mode: 'cors',
              cache: 'no-cache',
              credentials: 'same-origin',
              redirect: 'follow',
              referrerPolicy: 'no-referrer',
              body: JSON.stringify(args),
            };
            if (has_1.has(this.context) && has_1.has(this.context.requestHeaders)) {
              config.headers = httpHeadersToFetchHeaders(this.context.requestHeaders);
            }
            return cross_fetch_1.default(this.url + method, config)
              .then((response) => response.json())
              .then((serialized) => Reply_1.Reply.createFromSerializedReply(serialized))
              .catch((reason) => Reply_1.errStatus(reason));
          }
          async setClientContext(context) {
            this.context = context;
          }
        }
        exports.HttpRequestReplyStub = HttpRequestReplyStub;
        const httpHeadersToFetchHeaders = (httpHeaders) => {
          const fetchHeaders = {};
          for (const httpHeadersKey in httpHeaders) {
            const httpHeaderValue = httpHeaders[httpHeadersKey];
            if (!has_1.has(httpHeaderValue)) {
              continue;
            }
            const fetchHeaderValue = (Array.isArray(httpHeaderValue) && has_1.has(httpHeaderValue))
              ? httpHeaderValue.join(',')
              : httpHeaderValue;
            fetchHeaders[httpHeadersKey] = fetchHeaderValue;
          }
          return fetchHeaders;
        };


        /***/
      }),

/***/ "../../rpc/common/lib/stub/Endpoint.js":
/*!*********************************************!*\
  !*** ../../rpc/common/lib/stub/Endpoint.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.HttpEndpoint = exports.HttpAndWebSocketEndpoint = exports.WebSocketEndpoint = void 0;
        const HttpStatusCode_1 = __webpack_require__(/*! @codesphere/http-common/lib/HttpStatusCode */ "../../http/common/lib/HttpStatusCode.js");
        const definedValues_1 = __webpack_require__(/*! @codesphere/utils-common/lib/definedValues */ "../../utils/common/lib/definedValues.js");
        const errors_1 = __webpack_require__(/*! @codesphere/utils-common/lib/errors */ "../../utils/common/lib/errors.js");
        const execAll_1 = __webpack_require__(/*! @codesphere/utils-common/lib/execAll */ "../../utils/common/lib/execAll.js");
        const has_1 = __webpack_require__(/*! @codesphere/utils-common/lib/has */ "../../utils/common/lib/has.js");
        const Sequential_1 = __webpack_require__(/*! @codesphere/utils-common/lib/Sequential */ "../../utils/common/lib/Sequential.js");
        const HttpRequestReplyStub_1 = __webpack_require__(/*! ../http/HttpRequestReplyStub */ "../../rpc/common/lib/http/HttpRequestReplyStub.js");
        const utils_1 = __webpack_require__(/*! ../websocket/utils */ "../../rpc/common/lib/websocket/utils.js");
        const WebSocketBidiStreamStub_1 = __webpack_require__(/*! ../websocket/WebSocketBidiStreamStub */ "../../rpc/common/lib/websocket/WebSocketBidiStreamStub.js");
        const WebSocketRequestReplyStub_1 = __webpack_require__(/*! ../websocket/WebSocketRequestReplyStub */ "../../rpc/common/lib/websocket/WebSocketRequestReplyStub.js");
        const WebSocketServerStreamStub_1 = __webpack_require__(/*! ../websocket/WebSocketServerStreamStub */ "../../rpc/common/lib/websocket/WebSocketServerStreamStub.js");
        class WebSocketEndpoint {
          constructor(socket) {
            this.connectionListeners = {};
            this.socket = socket;
            this.endpointIdSequential = new Sequential_1.Sequential();
            this.connectionListenerIdSequential = new Sequential_1.Sequential(0);
            this.context = {
              requestHeaders: {},
              httpStatusCode: HttpStatusCode_1.HttpStatusCode.Ok,
              responseHeaders: {},
            };
            this.requestReplyStub = new WebSocketRequestReplyStub_1.WebSocketRequestReplyStub(this.socket, this.endpointIdSequential);
            this.socket.onClose(() => this.socket.resolveWhenConnected().then(async () => {
              if (has_1.has(this.context)) {
                await utils_1.setClientContext(this.socket, this.context, this.endpointIdSequential);
              }
              execAll_1.execAll(definedValues_1.definedValues(this.connectionListeners));
            }));
          }
          close() {
            this.socket.close();
          }
          newBidiStreamStub(method) {
            return new WebSocketBidiStreamStub_1.WebSocketBidiStreamStub(this.socket, this.endpointIdSequential, method);
          }
          newServerStreamStub(method) {
            return new WebSocketServerStreamStub_1.WebSocketServerStreamStub(this.socket, this.endpointIdSequential, method);
          }
          setClientContext(context) {
            this.context = context;
            return utils_1.setClientContext(this.socket, context, this.endpointIdSequential);
          }
          onEachConnection(listener) {
            const listenerId = this.connectionListenerIdSequential.next();
            this.connectionListeners[listenerId] = listener;
            return () => {
              delete this.connectionListeners[listenerId];
            };
          }
        }
        exports.WebSocketEndpoint = WebSocketEndpoint;
        class HttpAndWebSocketEndpoint extends WebSocketEndpoint {
          constructor(url, socket) {
            super(socket);
            this.requestReplyStub = new HttpRequestReplyStub_1.HttpRequestReplyStub(url);
          }
          setClientContext(context) {
            super.context = context;
            this.requestReplyStub.setClientContext(context);
            return utils_1.setClientContext(this.socket, context, this.endpointIdSequential);
          }
        }
        exports.HttpAndWebSocketEndpoint = HttpAndWebSocketEndpoint;
        class HttpEndpoint {
          constructor(url) {
            this.requestReplyStub = new HttpRequestReplyStub_1.HttpRequestReplyStub(url);
          }
          close() { }
          newBidiStreamStub(method) {
            throw new errors_1.NotImplemented();
          }
          newServerStreamStub(method) {
            throw new errors_1.NotImplemented();
          }
          setClientContext(context) {
            return this.requestReplyStub.setClientContext(context);
          }
        }
        exports.HttpEndpoint = HttpEndpoint;


        /***/
      }),

/***/ "../../rpc/common/lib/stub/reservedRpcMethods.js":
/*!*******************************************************!*\
  !*** ../../rpc/common/lib/stub/reservedRpcMethods.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.PING_PONG_METHOD = exports.COMPLETE_METHOD = void 0;
        exports.COMPLETE_METHOD = 'complete';
        exports.PING_PONG_METHOD = 'pingpong';


        /***/
      }),

/***/ "../../rpc/common/lib/websocket/WebSocketBidiStreamStub.js":
/*!*****************************************************************!*\
  !*** ../../rpc/common/lib/websocket/WebSocketBidiStreamStub.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.WebSocketBidiStreamStub = void 0;
        const WebSocketStreamStub_1 = __webpack_require__(/*! ./WebSocketStreamStub */ "../../rpc/common/lib/websocket/WebSocketStreamStub.js");
        class WebSocketBidiStreamStub extends WebSocketStreamStub_1.WebSocketStreamStub {
          constructor(socket, endpointIdSequential, method) {
            super(socket, endpointIdSequential, method);
          }
          send(message) {
            super.send(message);
          }
        }
        exports.WebSocketBidiStreamStub = WebSocketBidiStreamStub;


        /***/
      }),

/***/ "../../rpc/common/lib/websocket/WebSocketRequestReplyStub.js":
/*!*******************************************************************!*\
  !*** ../../rpc/common/lib/websocket/WebSocketRequestReplyStub.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.WebSocketRequestReplyStub = void 0;
        const Reply_1 = __webpack_require__(/*! @codesphere/reply-common/lib/Reply */ "../../reply/common/lib/Reply.js");
        const utils_1 = __webpack_require__(/*! ./utils */ "../../rpc/common/lib/websocket/utils.js");
        class WebSocketRequestReplyStub {
          constructor(socket, ids) {
            this.socket = socket;
            this.ids = ids;
          }
          async execute(method, args, options) {
            try {
              return Reply_1.Reply.okReply(await utils_1.makeRpc(this.socket, method, this.ids.next(), args, options));
            }
            catch (e) {
              return Reply_1.errStatus(e);
            }
          }
        }
        exports.WebSocketRequestReplyStub = WebSocketRequestReplyStub;


        /***/
      }),

/***/ "../../rpc/common/lib/websocket/WebSocketServerStreamStub.js":
/*!*******************************************************************!*\
  !*** ../../rpc/common/lib/websocket/WebSocketServerStreamStub.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.WebSocketServerStreamStub = void 0;
        const WebSocketStreamStub_1 = __webpack_require__(/*! ./WebSocketStreamStub */ "../../rpc/common/lib/websocket/WebSocketStreamStub.js");
        class WebSocketServerStreamStub extends WebSocketStreamStub_1.WebSocketStreamStub {
          constructor(socket, endpointIdSequential, method) {
            super(socket, endpointIdSequential, method);
            this.started = false;
          }
          start(message) {
            if (this.started) {
              throw new Error('Trying to start a server stream that is already started.');
            }
            this.started = true;
            super.send(message);
          }
        }
        exports.WebSocketServerStreamStub = WebSocketServerStreamStub;


        /***/
      }),

/***/ "../../rpc/common/lib/websocket/WebSocketStreamStub.js":
/*!*************************************************************!*\
  !*** ../../rpc/common/lib/websocket/WebSocketStreamStub.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.WebSocketStreamStub = void 0;
        const Reply_1 = __webpack_require__(/*! @codesphere/reply-common/lib/Reply */ "../../reply/common/lib/Reply.js");
        const has_1 = __webpack_require__(/*! @codesphere/utils-common/lib/has */ "../../utils/common/lib/has.js");
        const reservedRpcMethods_1 = __webpack_require__(/*! ../stub/reservedRpcMethods */ "../../rpc/common/lib/stub/reservedRpcMethods.js");
        const utils_1 = __webpack_require__(/*! ./utils */ "../../rpc/common/lib/websocket/utils.js");
        class WebSocketStreamStub {
          constructor(socket, endpointIdSequential, method) {
            this.completed = false;
            this.messageListeners = [];
            this.completeListeners = [];
            this.socket = socket;
            this.method = method;
            this.endpointId = endpointIdSequential.next();
            this.socket.onClose(message => {
              this.completed = true;
              this.completeListeners.forEach(listener => listener(Reply_1.errStatus(message)));
              this.socket.removeEventListener('message', messageListener);
            });
            const messageListener = (data) => this.parseAndForwardServerMessage(data, messageListener);
            this.socket.onMessage(messageListener);
          }
          onCompleted(listener) {
            this.completeListeners.push(listener);
          }
          onMessage(listener) {
            this.messageListeners.push(listener);
          }
          complete(end) {
            utils_1.send(this.socket, {
              endpointId: this.endpointId,
              method: reservedRpcMethods_1.COMPLETE_METHOD,
              args: end.toSerializedReply(),
            });
          }
          send(message) {
            if (this.completed) {
              throw new Error('Can not send messages on a completed bidi stream'
                + ` (endpointId: ${this.endpointId}).`);
            }
            utils_1.send(this.socket, {
              endpointId: this.endpointId,
              method: this.method,
              args: message,
            });
          }
          parseAndForwardServerMessage(data, messageListener) {
            const message = utils_1.parse(data);
            if (message.endpointId !== this.endpointId) {
              return;
            }
            if (has_1.has(message.complete) && message.complete) {
              const reply = Reply_1.Reply.createFromSerializedReply(message.reply);
              this.completed = true;
              this.completeListeners.forEach(listener => listener(reply));
              this.socket.removeEventListener('message', messageListener);
            }
            else {
              this.messageListeners.forEach(listener => listener(message.reply));
            }
          }
        }
        exports.WebSocketStreamStub = WebSocketStreamStub;


        /***/
      }),

/***/ "../../rpc/common/lib/websocket/utils.js":
/*!***********************************************!*\
  !*** ../../rpc/common/lib/websocket/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.setClientContext = exports.makeRpc = exports.send = exports.parse = exports.RpcException = exports.SocketClosed = exports.InvalidJson = void 0;
        const Reply_1 = __webpack_require__(/*! @codesphere/reply-common/lib/Reply */ "../../reply/common/lib/Reply.js");
        const datetime_1 = __webpack_require__(/*! @codesphere/utils-common/lib/datetime */ "../../utils/common/lib/datetime.js");
        const exceptions_1 = __webpack_require__(/*! @codesphere/utils-common/lib/exceptions */ "../../utils/common/lib/exceptions.js");
        const log_1 = __webpack_require__(/*! @codesphere/utils-common/lib/log */ "../../utils/common/lib/log.js");
        const promise_1 = __webpack_require__(/*! @codesphere/utils-common/lib/promise */ "../../utils/common/lib/promise.js");
        const HttpContext_1 = __webpack_require__(/*! ../HttpContext */ "../../rpc/common/lib/HttpContext.js");
        class InvalidJson extends exceptions_1.Exception {
          constructor(message) {
            super(message);
          }
        }
        exports.InvalidJson = InvalidJson;
        class SocketClosed extends exceptions_1.Exception {
          constructor(socket, message) {
            super(message);
            this.socket = socket;
          }
        }
        exports.SocketClosed = SocketClosed;
        class RpcException extends exceptions_1.Exception {
          static withMessage(message) {
            return new RpcException(message);
          }
          constructor(message) {
            super(message);
          }
        }
        exports.RpcException = RpcException;
        const parse = (data) => {
          try {
            return JSON.parse(data);
          }
          catch (e) {
            throw new InvalidJson(`${e}`);
          }
        };
        exports.parse = parse;
        const send = (socket, message) => {
          let serialized;
          try {
            serialized = JSON.stringify(message);
          }
          catch (e) {
            return Reply_1.errStatus(`The message is not serializable (${e}).`);
          }
          if ([socket.CLOSING, socket.CLOSED].includes(socket.readyState)) {
            return Reply_1.errStatus('WebSocket is in a closing/closed state.');
          }
          try {
            socket.send(serialized);
          }
          catch (err) {
            return (err instanceof Error)
              ? Reply_1.Reply.createFromError(err)
              : Reply_1.Reply.errStatus(`${err}`);
          }
          return Reply_1.getOk();
        };
        exports.send = send;
        const makeRpc = async (socket, method, id, args, options) => {
          var _a;
          const result = promise_1.resolvablePromise();
          const reject = (message) => result.reject(new SocketClosed(socket, message));
          const reply = (data) => {
            try {
              const msg = exports.parse(data);
              if (msg.endpointId !== id) {
                return;
              }
              const r = msg.reply;
              if (r.code === log_1.Status.Ok) {
                result.resolve(r.data);
              }
              else {
                result.reject(RpcException.withMessage(r.errMessage));
              }
            }
            catch (e) {
              console.warn(`failed to parse message: ${e}, data: ${data}`);
            }
          };
          socket.onClose(reject);
          socket.onMessage(reply);
          try {
            const status = exports.send(socket, {
              method,
              endpointId: id,
              args,
            });
            if (status.notOk()) {
              throw RpcException.withMessage(`send failed (method: ${method}, id: ${id},`
                + ` args: ${JSON.stringify(args)}): ${JSON.stringify(status)}`);
            }
            const timeout = (_a = options === null || options === void 0 ? void 0 : options.timeout) !== null && _a !== void 0 ? _a : datetime_1.duration({ seconds: 5 });
            return await promise_1.throwOnTimeout({ timeoutMs: timeout.asMilliseconds(), promise: result });
          }
          finally {
            socket.removeEventListener('message', reply);
            socket.removeEventListener('close', reject);
          }
        };
        exports.makeRpc = makeRpc;
        const setClientContext = (socket, context, ids) => exports.makeRpc(socket, HttpContext_1.CLIENT_CONTEXT_METHOD, ids.next(), context);
        exports.setClientContext = setClientContext;


        /***/
      }),

/***/ "../../rpc/common/node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!**************************************************************************!*\
  !*** ../../rpc/common/node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \**************************************************************************/
/***/ (function (module, exports) {

        var __self__ = (function (root) {
          function F() {
            this.fetch = false;
            this.DOMException = root.DOMException
          }
          F.prototype = root;
          return new F();
        })(typeof self !== 'undefined' ? self : this);
        (function (self) {

          var irrelevant = (function (exports) {

            var support = {
              searchParams: 'URLSearchParams' in self,
              iterable: 'Symbol' in self && 'iterator' in Symbol,
              blob:
                'FileReader' in self &&
                'Blob' in self &&
                (function () {
                  try {
                    new Blob();
                    return true
                  } catch (e) {
                    return false
                  }
                })(),
              formData: 'FormData' in self,
              arrayBuffer: 'ArrayBuffer' in self
            };

            function isDataView(obj) {
              return obj && DataView.prototype.isPrototypeOf(obj)
            }

            if (support.arrayBuffer) {
              var viewClasses = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]'
              ];

              var isArrayBufferView =
                ArrayBuffer.isView ||
                function (obj) {
                  return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
                };
            }

            function normalizeName(name) {
              if (typeof name !== 'string') {
                name = String(name);
              }
              if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
                throw new TypeError('Invalid character in header field name')
              }
              return name.toLowerCase()
            }

            function normalizeValue(value) {
              if (typeof value !== 'string') {
                value = String(value);
              }
              return value
            }

            // Build a destructive iterator for the value list
            function iteratorFor(items) {
              var iterator = {
                next: function () {
                  var value = items.shift();
                  return { done: value === undefined, value: value }
                }
              };

              if (support.iterable) {
                iterator[Symbol.iterator] = function () {
                  return iterator
                };
              }

              return iterator
            }

            function Headers(headers) {
              this.map = {};

              if (headers instanceof Headers) {
                headers.forEach(function (value, name) {
                  this.append(name, value);
                }, this);
              } else if (Array.isArray(headers)) {
                headers.forEach(function (header) {
                  this.append(header[0], header[1]);
                }, this);
              } else if (headers) {
                Object.getOwnPropertyNames(headers).forEach(function (name) {
                  this.append(name, headers[name]);
                }, this);
              }
            }

            Headers.prototype.append = function (name, value) {
              name = normalizeName(name);
              value = normalizeValue(value);
              var oldValue = this.map[name];
              this.map[name] = oldValue ? oldValue + ', ' + value : value;
            };

            Headers.prototype['delete'] = function (name) {
              delete this.map[normalizeName(name)];
            };

            Headers.prototype.get = function (name) {
              name = normalizeName(name);
              return this.has(name) ? this.map[name] : null
            };

            Headers.prototype.has = function (name) {
              return this.map.hasOwnProperty(normalizeName(name))
            };

            Headers.prototype.set = function (name, value) {
              this.map[normalizeName(name)] = normalizeValue(value);
            };

            Headers.prototype.forEach = function (callback, thisArg) {
              for (var name in this.map) {
                if (this.map.hasOwnProperty(name)) {
                  callback.call(thisArg, this.map[name], name, this);
                }
              }
            };

            Headers.prototype.keys = function () {
              var items = [];
              this.forEach(function (value, name) {
                items.push(name);
              });
              return iteratorFor(items)
            };

            Headers.prototype.values = function () {
              var items = [];
              this.forEach(function (value) {
                items.push(value);
              });
              return iteratorFor(items)
            };

            Headers.prototype.entries = function () {
              var items = [];
              this.forEach(function (value, name) {
                items.push([name, value]);
              });
              return iteratorFor(items)
            };

            if (support.iterable) {
              Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
            }

            function consumed(body) {
              if (body.bodyUsed) {
                return Promise.reject(new TypeError('Already read'))
              }
              body.bodyUsed = true;
            }

            function fileReaderReady(reader) {
              return new Promise(function (resolve, reject) {
                reader.onload = function () {
                  resolve(reader.result);
                };
                reader.onerror = function () {
                  reject(reader.error);
                };
              })
            }

            function readBlobAsArrayBuffer(blob) {
              var reader = new FileReader();
              var promise = fileReaderReady(reader);
              reader.readAsArrayBuffer(blob);
              return promise
            }

            function readBlobAsText(blob) {
              var reader = new FileReader();
              var promise = fileReaderReady(reader);
              reader.readAsText(blob);
              return promise
            }

            function readArrayBufferAsText(buf) {
              var view = new Uint8Array(buf);
              var chars = new Array(view.length);

              for (var i = 0; i < view.length; i++) {
                chars[i] = String.fromCharCode(view[i]);
              }
              return chars.join('')
            }

            function bufferClone(buf) {
              if (buf.slice) {
                return buf.slice(0)
              } else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer
              }
            }

            function Body() {
              this.bodyUsed = false;

              this._initBody = function (body) {
                this._bodyInit = body;
                if (!body) {
                  this._bodyText = '';
                } else if (typeof body === 'string') {
                  this._bodyText = body;
                } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                  this._bodyBlob = body;
                } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                  this._bodyFormData = body;
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this._bodyText = body.toString();
                } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                  this._bodyArrayBuffer = bufferClone(body.buffer);
                  // IE 10-11 can't handle a DataView body.
                  this._bodyInit = new Blob([this._bodyArrayBuffer]);
                } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                  this._bodyArrayBuffer = bufferClone(body);
                } else {
                  this._bodyText = body = Object.prototype.toString.call(body);
                }

                if (!this.headers.get('content-type')) {
                  if (typeof body === 'string') {
                    this.headers.set('content-type', 'text/plain;charset=UTF-8');
                  } else if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set('content-type', this._bodyBlob.type);
                  } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                    this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                  }
                }
              };

              if (support.blob) {
                this.blob = function () {
                  var rejected = consumed(this);
                  if (rejected) {
                    return rejected
                  }

                  if (this._bodyBlob) {
                    return Promise.resolve(this._bodyBlob)
                  } else if (this._bodyArrayBuffer) {
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                  } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as blob')
                  } else {
                    return Promise.resolve(new Blob([this._bodyText]))
                  }
                };

                this.arrayBuffer = function () {
                  if (this._bodyArrayBuffer) {
                    return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
                  } else {
                    return this.blob().then(readBlobAsArrayBuffer)
                  }
                };
              }

              this.text = function () {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected
                }

                if (this._bodyBlob) {
                  return readBlobAsText(this._bodyBlob)
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
                } else if (this._bodyFormData) {
                  throw new Error('could not read FormData body as text')
                } else {
                  return Promise.resolve(this._bodyText)
                }
              };

              if (support.formData) {
                this.formData = function () {
                  return this.text().then(decode)
                };
              }

              this.json = function () {
                return this.text().then(JSON.parse)
              };

              return this
            }

            // HTTP methods whose capitalization should be normalized
            var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

            function normalizeMethod(method) {
              var upcased = method.toUpperCase();
              return methods.indexOf(upcased) > -1 ? upcased : method
            }

            function Request(input, options) {
              options = options || {};
              var body = options.body;

              if (input instanceof Request) {
                if (input.bodyUsed) {
                  throw new TypeError('Already read')
                }
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) {
                  this.headers = new Headers(input.headers);
                }
                this.method = input.method;
                this.mode = input.mode;
                this.signal = input.signal;
                if (!body && input._bodyInit != null) {
                  body = input._bodyInit;
                  input.bodyUsed = true;
                }
              } else {
                this.url = String(input);
              }

              this.credentials = options.credentials || this.credentials || 'same-origin';
              if (options.headers || !this.headers) {
                this.headers = new Headers(options.headers);
              }
              this.method = normalizeMethod(options.method || this.method || 'GET');
              this.mode = options.mode || this.mode || null;
              this.signal = options.signal || this.signal;
              this.referrer = null;

              if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                throw new TypeError('Body not allowed for GET or HEAD requests')
              }
              this._initBody(body);
            }

            Request.prototype.clone = function () {
              return new Request(this, { body: this._bodyInit })
            };

            function decode(body) {
              var form = new FormData();
              body
                .trim()
                .split('&')
                .forEach(function (bytes) {
                  if (bytes) {
                    var split = bytes.split('=');
                    var name = split.shift().replace(/\+/g, ' ');
                    var value = split.join('=').replace(/\+/g, ' ');
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                  }
                });
              return form
            }

            function parseHeaders(rawHeaders) {
              var headers = new Headers();
              // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
              // https://tools.ietf.org/html/rfc7230#section-3.2
              var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
              preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
                var parts = line.split(':');
                var key = parts.shift().trim();
                if (key) {
                  var value = parts.join(':').trim();
                  headers.append(key, value);
                }
              });
              return headers
            }

            Body.call(Request.prototype);

            function Response(bodyInit, options) {
              if (!options) {
                options = {};
              }

              this.type = 'default';
              this.status = options.status === undefined ? 200 : options.status;
              this.ok = this.status >= 200 && this.status < 300;
              this.statusText = 'statusText' in options ? options.statusText : 'OK';
              this.headers = new Headers(options.headers);
              this.url = options.url || '';
              this._initBody(bodyInit);
            }

            Body.call(Response.prototype);

            Response.prototype.clone = function () {
              return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
              })
            };

            Response.error = function () {
              var response = new Response(null, { status: 0, statusText: '' });
              response.type = 'error';
              return response
            };

            var redirectStatuses = [301, 302, 303, 307, 308];

            Response.redirect = function (url, status) {
              if (redirectStatuses.indexOf(status) === -1) {
                throw new RangeError('Invalid status code')
              }

              return new Response(null, { status: status, headers: { location: url } })
            };

            exports.DOMException = self.DOMException;
            try {
              new exports.DOMException();
            } catch (err) {
              exports.DOMException = function (message, name) {
                this.message = message;
                this.name = name;
                var error = Error(message);
                this.stack = error.stack;
              };
              exports.DOMException.prototype = Object.create(Error.prototype);
              exports.DOMException.prototype.constructor = exports.DOMException;
            }

            function fetch(input, init) {
              return new Promise(function (resolve, reject) {
                var request = new Request(input, init);

                if (request.signal && request.signal.aborted) {
                  return reject(new exports.DOMException('Aborted', 'AbortError'))
                }

                var xhr = new XMLHttpRequest();

                function abortXhr() {
                  xhr.abort();
                }

                xhr.onload = function () {
                  var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || '')
                  };
                  options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                  var body = 'response' in xhr ? xhr.response : xhr.responseText;
                  resolve(new Response(body, options));
                };

                xhr.onerror = function () {
                  reject(new TypeError('Network request failed'));
                };

                xhr.ontimeout = function () {
                  reject(new TypeError('Network request failed'));
                };

                xhr.onabort = function () {
                  reject(new exports.DOMException('Aborted', 'AbortError'));
                };

                xhr.open(request.method, request.url, true);

                if (request.credentials === 'include') {
                  xhr.withCredentials = true;
                } else if (request.credentials === 'omit') {
                  xhr.withCredentials = false;
                }

                if ('responseType' in xhr && support.blob) {
                  xhr.responseType = 'blob';
                }

                request.headers.forEach(function (value, name) {
                  xhr.setRequestHeader(name, value);
                });

                if (request.signal) {
                  request.signal.addEventListener('abort', abortXhr);

                  xhr.onreadystatechange = function () {
                    // DONE (success or failure)
                    if (xhr.readyState === 4) {
                      request.signal.removeEventListener('abort', abortXhr);
                    }
                  };
                }

              })
            }

            fetch.polyfill = true;

            if (!self.fetch) {
              self.fetch = fetch;
              self.Headers = Headers;
              self.Request = Request;
              self.Response = Response;
            }

            exports.Headers = Headers;
            exports.Request = Request;
            exports.Response = Response;
            exports.fetch = fetch;

            return exports;

          }({}));
        })(__self__);
        delete __self__.fetch.polyfill
        exports = __self__.fetch // To enable: import fetch from 'cross-fetch'
        exports["default"] = __self__.fetch // For TypeScript consumers without esModuleInterop.
        exports.fetch = __self__.fetch // To enable: import {fetch} from 'cross-fetch'
        exports.Headers = __self__.Headers
        exports.Request = __self__.Request
        exports.Response = __self__.Response
        module.exports = exports


        /***/
      }),

/***/ "../../ui/browser/lib/Cookie.js":
/*!**************************************!*\
  !*** ../../ui/browser/lib/Cookie.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.deleteCookie = exports.getCookie = exports.setCookie = void 0;
        const setCookie = (name, value, expiresDays) => {
          const date = new Date();
          date.setTime(date.getTime() + (expiresDays * 24 * 60 * 60 * 1000));
          const expires = 'expires=' + date.toUTCString();
          document.cookie = name + '=' + value + ';' + expires + ';path=/';
        };
        exports.setCookie = setCookie;
        const getCookie = (name) => {
          const namePrefix = name + '=';
          const decodedCookie = decodeURIComponent(document.cookie);
          const ca = decodedCookie.split(';');
          for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(namePrefix) === 0) {
              return c.substring(namePrefix.length, c.length);
            }
          }
          return '';
        };
        exports.getCookie = getCookie;
        const deleteCookie = (name) => {
          document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        };
        exports.deleteCookie = deleteCookie;


        /***/
      }),

/***/ "../../ui/browser/lib/Router.js":
/*!**************************************!*\
  !*** ../../ui/browser/lib/Router.js ***!
  \**************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {

        "use strict";

        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
          else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };
        var __importDefault = (this && this.__importDefault) || function (mod) {
          return (mod && mod.__esModule) ? mod : { "default": mod };
        };
        var Router_1;
        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.getUrlParams = exports.Router = exports.glob = exports.exactPath = exports.path = exports.regex = void 0;
        const inversify_1 = __webpack_require__(/*! inversify */ "../../../node_modules/inversify/lib/inversify.js");
        const micromatch_1 = __importDefault(__webpack_require__(/*! micromatch */ "../../../node_modules/micromatch/index.js"));
        const BufferQueue_1 = __webpack_require__(/*! @codesphere/utils-common/lib/BufferQueue */ "../../utils/common/lib/BufferQueue.js");
        const has_1 = __webpack_require__(/*! @codesphere/utils-common/lib/has */ "../../utils/common/lib/has.js");
        const ROUTING_QUEUE_LENGTH = 20;
        const serialize = (location) => ({
          hash: location.hash,
          hostname: location.hostname,
          pathname: location.pathname,
          search: location.search,
          host: location.host,
          href: location.href,
          origin: location.origin,
          port: location.port,
          protocol: location.protocol,
        });
        const regex = (regex) => (location) => regex.test(location.pathname);
        exports.regex = regex;
        const path = (path) => (location) => path === location.pathname || path === `${location.pathname}/`;
        exports.path = path;
        const exactPath = (path) => (location) => path === location.pathname;
        exports.exactPath = exactPath;
        const glob = (pattern) => (location) => micromatch_1.default.isMatch(location.pathname, pattern);
        exports.glob = glob;
        let Router = Router_1 = class Router {
          constructor(basePath = '/') {
            this.urlChangeListeners = [];
            this.routingQueue = new BufferQueue_1.BufferQueue(ROUTING_QUEUE_LENGTH);
            this.routing = false;
            window.addEventListener('unload', (e) => {
              if (location.pathname.startsWith(basePath)) {
                e.preventDefault();
                document.dispatchEvent(new Event('popstate'));
              }
            });
            window.addEventListener('popstate', (e) => {
              e.preventDefault();
              this.enqueueCurrentRoute();
            });
          }
          static create(basePath = '/') {
            return new Router_1(basePath);
          }
          onUrlChange(listener, condition) {
            this.urlChangeListeners.push({ handler: listener, condition });
            return this;
          }
          setUrl(url) {
            history.pushState({ url }, '', url);
            return this;
          }
          navigateTo(url) {
            this.setUrl(url);
            this.enqueueCurrentRoute();
            return this;
          }
          enqueueCurrentRoute() {
            this.routingQueue.push(serialize(window.location));
            if (this.routingQueue.size() !== 1 || this.routing) {
              return;
            }
            (async () => {
              this.routing = true;
              while (!this.routingQueue.isEmpty()) {
                await this.execRoute(this.routingQueue.pop());
              }
              this.routing = false;
            })();
          }
          async execRoute(location) {
            for (const listener of this.urlChangeListeners) {
              if (!has_1.has(listener.condition) || listener.condition(location)) {
                await listener.handler(location);
              }
            }
          }
        };
        Router = Router_1 = __decorate([
          inversify_1.injectable(),
          __metadata("design:paramtypes", [String])
        ], Router);
        exports.Router = Router;
        const getUrlParams = (url) => {
          const params = {};
          const parser = document.createElement('a');
          parser.href = url;
          const query = parser.search.substring(1);
          const vars = query.split('&');
          for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
          }
          return params;
        };
        exports.getUrlParams = getUrlParams;


        /***/
      }),

/***/ "../../user-activity/browser/lib/UserActivityBrowserStub.js":
/*!******************************************************************!*\
  !*** ../../user-activity/browser/lib/UserActivityBrowserStub.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.UserActivityBrowserStub = exports.getUserActivityMetadata = exports.setUserActivityMetadata = void 0;
        const Cookie_1 = __webpack_require__(/*! @codesphere/ui-browser/lib/Cookie */ "../../ui/browser/lib/Cookie.js");
        const Router_1 = __webpack_require__(/*! @codesphere/ui-browser/lib/Router */ "../../ui/browser/lib/Router.js");
        const UserActivityStub_1 = __webpack_require__(/*! @codesphere/user-activity-common/lib/UserActivityStub */ "../../user-activity/common/lib/UserActivityStub.js");
        const SafeLocalStorage_1 = __webpack_require__(/*! @codesphere/utils-browser/lib/SafeLocalStorage */ "../../utils/browser/lib/SafeLocalStorage.js");
        const forEachProperty_1 = __webpack_require__(/*! @codesphere/utils-common/lib/forEachProperty */ "../../utils/common/lib/forEachProperty.js");
        const has_1 = __webpack_require__(/*! @codesphere/utils-common/lib/has */ "../../utils/common/lib/has.js");
        const randomString_1 = __webpack_require__(/*! @codesphere/utils-common/lib/randomString */ "../../utils/common/lib/randomString.js");
        const testAndSet = (key, value) => !SafeLocalStorage_1.safeLocalStorage.getItem(key) &&
          SafeLocalStorage_1.safeLocalStorage.setItem(key, value);
        const testAndSetAnonymousId = () => {
          const urlParams = new URLSearchParams(location.search);
          const anonymousId = urlParams.get('aId');
          has_1.has(anonymousId)
            ? SafeLocalStorage_1.safeLocalStorage.setItem('anonymousId', anonymousId)
            : testAndSet('anonymousId', randomString_1.randomString());
        };
        const get = (key) => { var _a; return (_a = SafeLocalStorage_1.safeLocalStorage.getItem(key)) !== null && _a !== void 0 ? _a : undefined; };
        const setUserActivityMetadata = () => {
          testAndSetAnonymousId();
          testAndSet('referrer', document.referrer);
          forEachProperty_1.forEachProperty(Router_1.getUrlParams(location.href), (key, value) => SafeLocalStorage_1.safeLocalStorage.setItem(key, value));
        };
        exports.setUserActivityMetadata = setUserActivityMetadata;
        const getUserActivityMetadata = () => {
          const result = {};
          testAndSetAnonymousId();
          result.anonymousId = get('anonymousId');
          const userIdEntry = get('userId');
          if (has_1.has(userIdEntry)) {
            result.userId = parseInt(userIdEntry);
          }
          const appIdEntry = get('appIdEntry');
          if (has_1.has(appIdEntry)) {
            result.appId = parseInt(appIdEntry);
          }
          result.userAgent = window.navigator.userAgent;
          result.utmSource = get('utm_source');
          result.utmMedium = get('utm_medium');
          result.utmCampaign = get('utm_campaign');
          result.utmTerm = get('utm_term');
          result.url = location.href;
          result.referrer = get('referrer');
          result.fbclid = get('fbclid');
          result.gclid = get('gclid');
          result.dclid = get('dclid');
          result.appId = parseInt(Cookie_1.getCookie('currentApp'));
          return result;
        };
        exports.getUserActivityMetadata = getUserActivityMetadata;
        class UserActivityBrowserStub extends UserActivityStub_1.UserActivityStubImpl {
          constructor(endpoint) {
            super(endpoint, (() => {
              var _a;
              exports.setUserActivityMetadata();
              return (_a = exports.getUserActivityMetadata()) !== null && _a !== void 0 ? _a : {};
            })());
          }
        }
        exports.UserActivityBrowserStub = UserActivityBrowserStub;


        /***/
      }),

/***/ "../../user-activity/common/lib/UserActivityStub.js":
/*!**********************************************************!*\
  !*** ../../user-activity/common/lib/UserActivityStub.js ***!
  \**********************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {

        "use strict";

        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
          else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };
        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.UserActivityStubImpl = exports.UserActivityMethods = void 0;
        const inversify_1 = __webpack_require__(/*! inversify */ "../../../node_modules/inversify/lib/inversify.js");
        const HttpStatusCode_1 = __webpack_require__(/*! @codesphere/http-common/lib/HttpStatusCode */ "../../http/common/lib/HttpStatusCode.js");
        var UserActivityMethods;
        (function (UserActivityMethods) {
          UserActivityMethods["LogUserActivity"] = "logUserActivity";
          UserActivityMethods["SessionStream"] = "SessionStream";
        })(UserActivityMethods = exports.UserActivityMethods || (exports.UserActivityMethods = {}));
        let UserActivityStubImpl = class UserActivityStubImpl {
          constructor(endpoint, userActivityMetadata) {
            this.endpoint = endpoint;
            this.userActivityMetadata_ = userActivityMetadata;
          }
          async logUserActivity(userActivity) {
            return this.logCustomEvent(userActivity);
          }
          async logCustomEvent(userActivity) {
            return this.endpoint.requestReplyStub
              .execute(UserActivityMethods.LogUserActivity, Object.assign({}, userActivity, this.getUserActivityMetadata()));
          }
          async authenticate(accessToken) {
            const clientContext = {
              requestHeaders: {
                'Authorization': `Bearer ${accessToken}`,
              },
              responseHeaders: {},
              httpStatusCode: HttpStatusCode_1.HttpStatusCode.Ok,
            };
            await this.endpoint.setClientContext(clientContext);
          }
          getUserActivityMetadata() {
            return this.userActivityMetadata_;
          }
        };
        UserActivityStubImpl = __decorate([
          inversify_1.injectable(),
          __metadata("design:paramtypes", [Object, Object])
        ], UserActivityStubImpl);
        exports.UserActivityStubImpl = UserActivityStubImpl;


        /***/
      }),

/***/ "../../user-activity/common/lib/events/CompleteRegistration.js":
/*!*********************************************************************!*\
  !*** ../../user-activity/common/lib/events/CompleteRegistration.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.isCompleteRegistration = exports.completeRegistration = void 0;
        exports.completeRegistration = {
          data: undefined,
          name: 'CompleteRegistration',
          durationMilliseconds: 0,
        };
        const isCompleteRegistration = (event) => event.name === exports.completeRegistration.name;
        exports.isCompleteRegistration = isCompleteRegistration;


        /***/
      }),

/***/ "../../user-activity/common/lib/events/Newsletter.js":
/*!***********************************************************!*\
  !*** ../../user-activity/common/lib/events/Newsletter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.isNewsletter = exports.newsletter = void 0;
        exports.newsletter = {
          data: undefined,
          name: 'Newsletter',
          durationMilliseconds: 0,
        };
        const isNewsletter = (event) => event.name === exports.newsletter.name;
        exports.isNewsletter = isNewsletter;


        /***/
      }),

/***/ "../../user-activity/common/lib/events/PageSession.js":
/*!************************************************************!*\
  !*** ../../user-activity/common/lib/events/PageSession.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.pageSession = exports.isPageSession = void 0;
        const NAME = 'PageSession';
        const isPageSession = (event) => event.name === NAME;
        exports.isPageSession = isPageSession;
        const pageSession = (durationMilliseconds) => ({
          name: NAME,
          durationMilliseconds,
        });
        exports.pageSession = pageSession;


        /***/
      }),

/***/ "../../user-activity/common/lib/events/PageView.js":
/*!*********************************************************!*\
  !*** ../../user-activity/common/lib/events/PageView.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.isPageView = exports.pageView = void 0;
        exports.pageView = {
          data: undefined,
          name: 'PageView',
          durationMilliseconds: 0,
        };
        const isPageView = (event) => event.name === exports.pageView.name;
        exports.isPageView = isPageView;


        /***/
      }),

/***/ "../../utils/browser/lib/SafeLocalStorage.js":
/*!***************************************************!*\
  !*** ../../utils/browser/lib/SafeLocalStorage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.safeLocalStorage = exports.SafeLocalStorage = void 0;
        class SafeLocalStorage {
          constructor() {
            this.fakeStorage = new Map();
          }
          get length() {
            try {
              return localStorage.length;
            }
            catch (e) {
              return this.fakeStorage.size;
            }
          }
          clear() {
            try {
              localStorage.clear();
            }
            catch (e) {
              this.fakeStorage.clear();
            }
          }
          getItem(key) {
            var _a;
            try {
              return localStorage.getItem(key);
            }
            catch (e) {
              return (_a = this.fakeStorage.get(key)) !== null && _a !== void 0 ? _a : null;
            }
          }
          key(index) {
            try {
              return localStorage.key(index);
            }
            catch (e) {
            }
            const keys = Array.from(this.fakeStorage.keys());
            if (index < 0 || index > keys.length) {
              return null;
            }
            return keys[index];
          }
          removeItem(key) {
            try {
              localStorage.removeItem(key);
            }
            catch (e) {
              this.fakeStorage.delete(key);
            }
          }
          setItem(key, value) {
            try {
              localStorage.setItem(key, value);
            }
            catch (e) {
              this.fakeStorage.set(key, value);
            }
          }
        }
        exports.SafeLocalStorage = SafeLocalStorage;
        exports.safeLocalStorage = new SafeLocalStorage();


        /***/
      }),

/***/ "../../utils/common/lib/BufferQueue.js":
/*!*********************************************!*\
  !*** ../../utils/common/lib/BufferQueue.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.BufferQueue = void 0;
        const concatArrays_1 = __webpack_require__(/*! ./concatArrays */ "../../utils/common/lib/concatArrays.js");
        const shrinkToFit_1 = __webpack_require__(/*! ./shrinkToFit */ "../../utils/common/lib/shrinkToFit.js");
        class BufferQueue {
          constructor(capacity) {
            this.start = 0;
            this.end = 0;
            this.buffer = new Array(capacity);
          }
          push(...elements) {
            for (const element of elements) {
              this.buffer[this.end % this.buffer.length] = element;
              if (this.end %
                this.buffer.length ===
                this.start %
                this.buffer.length &&
                this.end !==
                this.start) {
                this.start++;
              }
              this.end++;
            }
          }
          pop() {
            return this.isEmpty() ?
              undefined :
              this.buffer[this.start++ % this.buffer.length];
          }
          peek() {
            return this.isEmpty() ?
              undefined :
              this.buffer[this.start % this.buffer.length];
          }
          isEmpty() {
            return this.start === this.end;
          }
          flatten() {
            return shrinkToFit_1.shrinkToFit(concatArrays_1.concatArrays(this.buffer.slice(this.end % this.buffer.length, this.buffer.length), this.buffer.slice(0, this.end % this.buffer.length)));
          }
          size() {
            return (this.end - this.start) % (this.buffer.length + 1);
          }
          clear() {
            this.start = this.end;
          }
          filled() {
            if (this.end - this.start === this.buffer.length) {
              return true;
            }
            return false;
          }
        }
        exports.BufferQueue = BufferQueue;


        /***/
      }),

/***/ "../../utils/common/lib/Sequential.js":
/*!********************************************!*\
  !*** ../../utils/common/lib/Sequential.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.Sequential = void 0;
        class Sequential {
          constructor(start = 1) {
            this.sequential = start;
          }
          next() {
            return this.sequential++;
          }
          get() {
            return this.sequential;
          }
        }
        exports.Sequential = Sequential;


        /***/
      }),

/***/ "../../utils/common/lib/concatArrays.js":
/*!**********************************************!*\
  !*** ../../utils/common/lib/concatArrays.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.concatArrays = void 0;
        const concatArrays = (...arrayOfArrays) => {
          if (arrayOfArrays === null) {
            return new Array(0);
          }
          let totalSize = 0;
          const countOfArrays = arrayOfArrays.length;
          for (let i = 0; i < countOfArrays; i++) {
            const currentAr = arrayOfArrays[i];
            if (currentAr === null || currentAr.constructor !== Array) {
              continue;
            }
            totalSize = totalSize + currentAr.length;
          }
          const result = new Array(totalSize);
          let currentPosition = 0;
          for (let i = 0; i < arrayOfArrays.length; i++) {
            const currentAr = arrayOfArrays[i];
            if (currentAr === null || currentAr.constructor !== Array) {
              continue;
            }
            const currentArLength = currentAr.length;
            for (let n = 0; n < currentArLength; n++) {
              result[currentPosition + n] = currentAr[n];
            }
            currentPosition += currentArLength;
          }
          return result;
        };
        exports.concatArrays = concatArrays;


        /***/
      }),

/***/ "../../utils/common/lib/copy.js":
/*!**************************************!*\
  !*** ../../utils/common/lib/copy.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.copy = void 0;
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        const copy = (src) => {
          if (!has_1.has(src)) {
            return src;
          }
          const type = typeof src;
          if (type === 'string' || type === 'number' || type === 'boolean' || type === 'symbol') {
            return src;
          }
          if (type === 'function') {
            throw new Error('copy of a function is not yet implemented');
          }
          if (Array.isArray(src)) {
            return src.slice();
          }
          if (src instanceof Date) {
            return new Date(src.getTime());
          }
          return Object.assign(Object.create(Object.getPrototypeOf(src)), src);
        };
        exports.copy = copy;


        /***/
      }),

/***/ "../../utils/common/lib/datetime.js":
/*!******************************************!*\
  !*** ../../utils/common/lib/datetime.js ***!
  \******************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {

        "use strict";

        var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
        }) : (function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          o[k2] = m[k];
        }));
        var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        }) : function (o, v) {
          o["default"] = v;
        });
        var __importStar = (this && this.__importStar) || function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        };
        var __importDefault = (this && this.__importDefault) || function (mod) {
          return (mod && mod.__esModule) ? mod : { "default": mod };
        };
        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.isExpired = exports.dateFromUnix = exports.relativeTimeFromNow = exports.duration = void 0;
        const dayjs_1 = __importDefault(__webpack_require__(/*! dayjs */ "../../../node_modules/dayjs/dayjs.min.js"));
        const dayjsDuration = __importStar(__webpack_require__(/*! dayjs/plugin/duration */ "../../../node_modules/dayjs/plugin/duration.js"));
        const relativeTime = __importStar(__webpack_require__(/*! dayjs/plugin/relativeTime */ "../../../node_modules/dayjs/plugin/relativeTime.js"));
        dayjs_1.default.extend(dayjsDuration.default);
        dayjs_1.default.extend(relativeTime.default);
        exports.duration = dayjs_1.default.duration;
        const relativeTimeFromNow = (date) => {
          return dayjs_1.default(date).fromNow();
        };
        exports.relativeTimeFromNow = relativeTimeFromNow;
        const dateFromUnix = (unixTimestamp) => {
          return dayjs_1.default.unix(unixTimestamp).toDate();
        };
        exports.dateFromUnix = dateFromUnix;
        const isExpired = (startDate, lifetime) => dayjs_1.default(new Date()).diff(startDate) > lifetime.asMilliseconds();
        exports.isExpired = isExpired;


        /***/
      }),

/***/ "../../utils/common/lib/deepCopy.js":
/*!******************************************!*\
  !*** ../../utils/common/lib/deepCopy.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.deepCopy = void 0;
        const copy_1 = __webpack_require__(/*! ./copy */ "../../utils/common/lib/copy.js");
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        const deepCopy = (src) => {
          if (!has_1.has(src)) {
            return src;
          }
          const type = typeof src;
          if (type === 'string' || type === 'number' || type === 'boolean' || type === 'symbol') {
            return src;
          }
          if (type === 'function') {
            throw new Error('deepCopy of a function is not yet implemented');
          }
          const result = copy_1.copy(src);
          if (src instanceof Date) {
            return result;
          }
          for (const propName in result) {
            result[propName] = exports.deepCopy(result[propName]);
          }
          return result;
        };
        exports.deepCopy = deepCopy;


        /***/
      }),

/***/ "../../utils/common/lib/definedKeys.js":
/*!*********************************************!*\
  !*** ../../utils/common/lib/definedKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.definedKeys = void 0;
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        const keys_1 = __webpack_require__(/*! ./keys */ "../../utils/common/lib/keys.js");
        const definedKeys = (obj) => keys_1.keys(obj).filter(key => has_1.has(obj[key]));
        exports.definedKeys = definedKeys;


        /***/
      }),

/***/ "../../utils/common/lib/definedValues.js":
/*!***********************************************!*\
  !*** ../../utils/common/lib/definedValues.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.definedValues = void 0;
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        const values_1 = __webpack_require__(/*! ./values */ "../../utils/common/lib/values.js");
        const definedValues = (obj) => values_1.values(obj).filter(has_1.has);
        exports.definedValues = definedValues;


        /***/
      }),

/***/ "../../utils/common/lib/errors.js":
/*!****************************************!*\
  !*** ../../utils/common/lib/errors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.concatErrors = exports.MultiError = exports.InvalidArgument = exports.NotImplemented = exports.RuntimeError = void 0;
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        class RuntimeError extends Error {
          constructor(message) {
            super(message);
            new.target.prototype.name = this.constructor.name;
            Object.setPrototypeOf(this, new.target.prototype);
          }
        }
        exports.RuntimeError = RuntimeError;
        class NotImplemented extends RuntimeError {
          constructor(message = 'Not Implemented') {
            super(message);
          }
        }
        exports.NotImplemented = NotImplemented;
        class InvalidArgument extends RuntimeError {
          constructor(message) {
            super(message);
          }
        }
        exports.InvalidArgument = InvalidArgument;
        class MultiError extends RuntimeError {
          constructor(errors) {
            super(exports.concatErrors(errors));
            this.errors = errors;
          }
        }
        exports.MultiError = MultiError;
        const concatErrors = (es) => {
          return es.map((e, i) => {
            const msg = has_1.has(e.stack) ? e.stack : `${e.name}: ${e.message}`;
            return `\nError ${i + 1} of ${es.length}: ${msg}`;
          }).join('\n');
        };
        exports.concatErrors = concatErrors;


        /***/
      }),

/***/ "../../utils/common/lib/exceptions.js":
/*!********************************************!*\
  !*** ../../utils/common/lib/exceptions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.MaxAttemptsExceeded = exports.UnsupportedPlatform = exports.MultiException = exports.Closed = exports.TimedOut = exports.HttpException = exports.NotAuthorized = exports.NotFound = exports.WeakPassword = exports.AlreadyUnregistered = exports.AlreadyRegistered = exports.AlreadyExists = exports.UnknownException = exports.Exception = void 0;
        const errors_1 = __webpack_require__(/*! ./errors */ "../../utils/common/lib/errors.js");
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        class Exception extends Error {
          constructor(message) {
            super(message);
            new.target.prototype.name = this.constructor.name;
            Object.setPrototypeOf(this, new.target.prototype);
          }
        }
        exports.Exception = Exception;
        class UnknownException extends Exception {
          constructor(message) {
            super(message);
          }
        }
        exports.UnknownException = UnknownException;
        class AlreadyExists extends Exception {
          constructor(message) {
            super(message);
          }
        }
        exports.AlreadyExists = AlreadyExists;
        class AlreadyRegistered extends Exception {
          constructor(message) {
            super(message);
          }
        }
        exports.AlreadyRegistered = AlreadyRegistered;
        class AlreadyUnregistered extends Exception {
          constructor(message) {
            super(message);
          }
        }
        exports.AlreadyUnregistered = AlreadyUnregistered;
        class WeakPassword extends Exception {
          constructor() {
            super('Password needs to contain at least 8 characters, one lowercase character, ' +
              'one uppercase character, one number, and one special character.');
          }
        }
        exports.WeakPassword = WeakPassword;
        class NotFound extends Exception {
          constructor(message) {
            super(message);
          }
        }
        exports.NotFound = NotFound;
        class NotAuthorized extends Exception {
          constructor(message) {
            super(message);
          }
        }
        exports.NotAuthorized = NotAuthorized;
        class HttpException extends Exception {
          constructor(code, message) {
            super(message);
            this.code = code;
          }
        }
        exports.HttpException = HttpException;
        class TimedOut extends Exception {
          constructor(timeoutName, timeoutInSec) {
            super(`'${timeoutName}' timed out after ${timeoutInSec}sec.`);
          }
        }
        exports.TimedOut = TimedOut;
        class Closed extends Exception {
          constructor(resource) {
            super(`${resource} is closed.`);
          }
        }
        exports.Closed = Closed;
        class MultiException extends Exception {
          constructor(errors, summary) {
            super(`${has_1.has(summary) ? `${summary}: ` : ''}${errors_1.concatErrors(errors)}`);
            this.errors = errors;
          }
        }
        exports.MultiException = MultiException;
        class UnsupportedPlatform extends errors_1.RuntimeError {
          constructor(message) {
            super(message);
          }
        }
        exports.UnsupportedPlatform = UnsupportedPlatform;
        class MaxAttemptsExceeded extends MultiException {
          constructor(limit, errors = []) {
            super(errors, `maxAttempts=${limit}`);
          }
        }
        exports.MaxAttemptsExceeded = MaxAttemptsExceeded;


        /***/
      }),

/***/ "../../utils/common/lib/execAll.js":
/*!*****************************************!*\
  !*** ../../utils/common/lib/execAll.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.execAll = void 0;
        const execAll = (f) => f.forEach(entry => entry());
        exports.execAll = execAll;


        /***/
      }),

/***/ "../../utils/common/lib/forEachProperty.js":
/*!*************************************************!*\
  !*** ../../utils/common/lib/forEachProperty.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.forEachProperty = void 0;
        const forEachProperty = (object, looper) => {
          for (const key in object) {
            looper(key, object[key]);
          }
        };
        exports.forEachProperty = forEachProperty;


        /***/
      }),

/***/ "../../utils/common/lib/has.js":
/*!*************************************!*\
  !*** ../../utils/common/lib/has.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.has = void 0;
        const has = (obj) => obj !== null && obj !== undefined;
        exports.has = has;


        /***/
      }),

/***/ "../../utils/common/lib/hasAll.js":
/*!****************************************!*\
  !*** ../../utils/common/lib/hasAll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.hasAll = void 0;
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        const hasAll = (...objects) => objects.every(has_1.has);
        exports.hasAll = hasAll;


        /***/
      }),

/***/ "../../utils/common/lib/isEmpty.js":
/*!*****************************************!*\
  !*** ../../utils/common/lib/isEmpty.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.isEmpty = void 0;
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        const size_1 = __webpack_require__(/*! ./size */ "../../utils/common/lib/size.js");
        const isEmpty = (objOrArrayOrString) => {
          if (!has_1.has(objOrArrayOrString)) {
            return true;
          }
          if (typeof objOrArrayOrString === 'string') {
            return objOrArrayOrString === '';
          }
          else if (Array.isArray(objOrArrayOrString)) {
            return objOrArrayOrString.length === 0;
          }
          return size_1.size(objOrArrayOrString) === 0;
        };
        exports.isEmpty = isEmpty;


        /***/
      }),

/***/ "../../utils/common/lib/keys.js":
/*!**************************************!*\
  !*** ../../utils/common/lib/keys.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.keys = void 0;
        exports.keys = Object.keys;


        /***/
      }),

/***/ "../../utils/common/lib/log.js":
/*!*************************************!*\
  !*** ../../utils/common/lib/log.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.logErrorAsJson = exports.logJson = exports.logPlain = exports.log = exports.LogTag = exports.Status = void 0;
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        var Status;
        (function (Status) {
          Status["Ok"] = "Ok";
          Status["Error"] = "Error";
        })(Status = exports.Status || (exports.Status = {}));
        var LogTag;
        (function (LogTag) {
          LogTag["Default"] = "Default";
          LogTag["Notify"] = "Notify";
        })(LogTag = exports.LogTag || (exports.LogTag = {}));
        const log = (message, logAsJson, code = Status.Ok, stack, ...tags) => {
          if (logAsJson) {
            return exports.logJson(message, code, stack, ...tags);
          }
          return exports.logPlain(message, code, stack, ...tags);
        };
        exports.log = log;
        const logPlain = (message, code = Status.Ok, stack, ...tags) => {
          const tagsString = tags.map(tag => `, #${tag}`).join('');
          const logString = `[${code}, ${new Date().toISOString()}${tagsString}]: ${message}${has_1.has(stack) ? ('\n' + stack) : ''}`;
          console.log(logString);
          return logString;
        };
        exports.logPlain = logPlain;
        const logJson = (message, code = Status.Ok, stack, ...tags) => {
          const logJson = JSON.stringify({ date: new Date().toISOString(), stack, message, code, tags });
          console.log(logJson);
          return logJson;
        };
        exports.logJson = logJson;
        const logErrorAsJson = (e) => {
          exports.logJson(`(${e.name}) ${e.message}`, Status.Error, e.stack);
        };
        exports.logErrorAsJson = logErrorAsJson;


        /***/
      }),

/***/ "../../utils/common/lib/promise.js":
/*!*****************************************!*\
  !*** ../../utils/common/lib/promise.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.throwOnTimeout = exports.resolvablePromise = exports.interruptableWait = exports.Interrupted = exports.allSplit = exports.allResolved = exports.allRejected = exports.allJsonLogRejected = exports.allLogRejected = void 0;
        const exceptions_1 = __webpack_require__(/*! ./exceptions */ "../../utils/common/lib/exceptions.js");
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        const log_1 = __webpack_require__(/*! ./log */ "../../utils/common/lib/log.js");
        const timeSpan_1 = __webpack_require__(/*! ./timeSpan */ "../../utils/common/lib/timeSpan.js");
        const allLogRejected = async (promises) => {
          const [succeeded, rejected] = await exports.allSplit(promises);
          rejected.forEach(res => console.error(res));
          return succeeded;
        };
        exports.allLogRejected = allLogRejected;
        const allJsonLogRejected = async (promises) => {
          const [succeeded, rejected] = await exports.allSplit(promises);
          rejected.forEach(res => {
            if (res instanceof Error) {
              log_1.logErrorAsJson(res);
            }
            else {
              log_1.logJson(JSON.stringify(res), log_1.Status.Error);
            }
          });
          return succeeded;
        };
        exports.allJsonLogRejected = allJsonLogRejected;
        const allRejected = async (promises) => {
          const results = await Promise.allSettled(promises);
          return results
            .filter((res) => (res.status === 'rejected'))
            .map(res => res.reason);
        };
        exports.allRejected = allRejected;
        const allResolved = async (promises) => {
          const results = await Promise.allSettled(promises);
          return results
            .filter((res) => (res.status === 'fulfilled'))
            .map(res => res.value);
        };
        exports.allResolved = allResolved;
        const allSplit = async (promises) => {
          const rejected = await exports.allRejected(promises);
          const resolved = await exports.allResolved(promises);
          return [resolved, rejected];
        };
        exports.allSplit = allSplit;
        class Interrupted extends exceptions_1.Exception {
          constructor(message = '') {
            super(message);
          }
        }
        exports.Interrupted = Interrupted;
        const interruptableWait = (waitMs) => {
          const p = exports.resolvablePromise();
          const tId = setTimeout(p.resolve, waitMs);
          const w = p.promise;
          w.interrupt = () => {
            clearTimeout(tId);
            p.reject(new Interrupted(`before ${waitMs}ms elapsed`));
          };
          w.finish = () => {
            clearTimeout(tId);
            p.resolve();
          };
          w.promise = w;
          return w;
        };
        exports.interruptableWait = interruptableWait;
        const resolvablePromise = () => {
          let resolve;
          let reject;
          const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
          });
          promise.promise = promise;
          promise.resolve = resolve;
          promise.reject = reject;
          return promise;
        };
        exports.resolvablePromise = resolvablePromise;
        const throwOnTimeout = async ({ label, timeoutMs, promise, interrupt }) => {
          const w = exports.interruptableWait(timeoutMs);
          promise.finally(() => w.interrupt()).catch(() => { });
          try {
            return await Promise.race([
              promise,
              w.promise
                .catch(() => { })
                .then(() => {
                  throw new exceptions_1.TimedOut(`throwOnTimeout(${label !== null && label !== void 0 ? label : ''})`, timeoutMs / timeSpan_1.milliSecondsInASecond);
                }),
            ]);
          }
          catch (e) {
            w.interrupt();
            if (has_1.has(interrupt)) {
              interrupt();
            }
            throw e;
          }
        };
        exports.throwOnTimeout = throwOnTimeout;


        /***/
      }),

/***/ "../../utils/common/lib/randomString.js":
/*!**********************************************!*\
  !*** ../../utils/common/lib/randomString.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.randomString = void 0;
        const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const randomString = (length = 7) => {
          let str = '';
          for (let i = 0; i < length; i++) {
            str += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
          }
          return str;
        };
        exports.randomString = randomString;


        /***/
      }),

/***/ "../../utils/common/lib/shrinkToFit.js":
/*!*********************************************!*\
  !*** ../../utils/common/lib/shrinkToFit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.shrinkToFit = void 0;
        const has_1 = __webpack_require__(/*! ./has */ "../../utils/common/lib/has.js");
        const shrinkToFit = (arr) => {
          const result = [];
          if (has_1.has(arr)) {
            for (const entry of arr) {
              if (has_1.has(entry)) {
                result.push(entry);
              }
            }
          }
          return result;
        };
        exports.shrinkToFit = shrinkToFit;


        /***/
      }),

/***/ "../../utils/common/lib/size.js":
/*!**************************************!*\
  !*** ../../utils/common/lib/size.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.size = void 0;
        const definedKeys_1 = __webpack_require__(/*! ./definedKeys */ "../../utils/common/lib/definedKeys.js");
        const size = (obj) => definedKeys_1.definedKeys(obj).length;
        exports.size = size;


        /***/
      }),

/***/ "../../utils/common/lib/timeSpan.js":
/*!******************************************!*\
  !*** ../../utils/common/lib/timeSpan.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.milliSecondsInAWeek = exports.milliSecondsInADay = exports.milliSecondsInAnHour = exports.millisecondsInTenMinutes = exports.milliSecondsInAMinute = exports.milliSecondsInASecond = exports.secondsInAWeek = exports.secondsInADay = exports.daysInAWeek = exports.hoursInADay = exports.secondsInAnHour = void 0;
        exports.secondsInAnHour = 3600;
        exports.hoursInADay = 24;
        exports.daysInAWeek = 7;
        exports.secondsInADay = exports.hoursInADay * 3600;
        exports.secondsInAWeek = exports.secondsInADay * exports.daysInAWeek;
        exports.milliSecondsInASecond = 1000;
        exports.milliSecondsInAMinute = 60 * exports.milliSecondsInASecond;
        exports.millisecondsInTenMinutes = 10 * exports.milliSecondsInAMinute;
        exports.milliSecondsInAnHour = 60 * exports.milliSecondsInAMinute;
        exports.milliSecondsInADay = exports.hoursInADay * exports.milliSecondsInAnHour;
        exports.milliSecondsInAWeek = exports.daysInAWeek * exports.milliSecondsInADay;


        /***/
      }),

/***/ "../../utils/common/lib/values.js":
/*!****************************************!*\
  !*** ../../utils/common/lib/values.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.values = void 0;
        exports.values = Object.values;


        /***/
      }),

/***/ "../browser/src/ts/components/Screen.ts":
/*!**********************************************!*\
  !*** ../browser/src/ts/components/Screen.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.screen = void 0;
        exports.screen = {
          mobile: 767,
          tablet: 991,
          desktop: 1199,
        };


        /***/
      }),

/***/ "../browser/src/ts/components/bindBlogLoadMore.ts":
/*!********************************************************!*\
  !*** ../browser/src/ts/components/bindBlogLoadMore.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindBlogLoadMore = void 0;
        const has_1 = __webpack_require__(/*! @codesphere/utils-common/lib/has */ "../../utils/common/lib/has.js");
        const bindFadeInObserver_1 = __webpack_require__(/*! ./bindFadeInObserver */ "../browser/src/ts/components/bindFadeInObserver.ts");
        const bindBlogLoadMore = () => {
          const loadMoreButton = document.querySelector('#blog-load-more');
          loadMoreButton === null || loadMoreButton === void 0 ? void 0 : loadMoreButton.addEventListener('click', (event) => {
            event.preventDefault();
            const previewListElement = document.querySelector('#blog-tertiary-preview-list');
            const amountOfFeaturedPreviews = 3;
            const amountOfTertiaryPreviews = previewListElement.children.length;
            const offset = amountOfTertiaryPreviews + amountOfFeaturedPreviews;
            const urlSearchParameters = new URLSearchParams(window.location.search);
            const category = urlSearchParameters.get('category');
            const fetchURL = category
              ? `/list-previews?category=${category}&offset=${offset}`
              : `/list-previews?offset=${offset}`;
            void (async () => {
              try {
                const [previewsHtml, amountOfPreviewsReceived, areMorePreviewsAvailable] = await fetchPreviews(fetchURL);
                if (has_1.has(previewsHtml)) {
                  previewListElement.innerHTML += previewsHtml;
                  bindFadeInObserver_1.bindFadeInObserver();
                  updateLoadMoreButtonHref(amountOfFeaturedPreviews + previewListElement.children.length + amountOfPreviewsReceived, category);
                }
                if (!areMorePreviewsAvailable) {
                  hideLoadMoreButton(loadMoreButton);
                }
              }
              catch (e) {
                console.error(e);
              }
            })();
          });
        };
        exports.bindBlogLoadMore = bindBlogLoadMore;
        const fetchPreviews = async (fetchURL) => {
          try {
            const res = await fetch(fetchURL);
            const json = await res.json();
            const previews = json.previews;
            if (previews.length) {
              const previewsHtml = previews.reduce((previous, current) => {
                return previous + getTertiaryPreviewHtml(current);
              }, '');
              return [previewsHtml, previews.length, json.areMorePreviewsAvailable];
            }
            return [null, previews.length, json.areMorePreviewsAvailable];
          }
          catch (err) {
            throw new Error('Could not fetch new blog posts');
          }
        };
        const hideLoadMoreButton = (loadMoreButton) => {
          loadMoreButton.classList.remove('btnloadmore');
          loadMoreButton.classList.add('btnloadmore--hidden');
        };
        const getTertiaryPreviewHtml = (preview) => {
          let previewImage;
          if (preview.featuredImage) {
            previewImage =
              `<img alt="" draggable="false" loading="lazy" sizes="(min-width: 992px) 470px, 90vw"
                src=${preview.featuredImage} srcset="${preview.featuredImageSrcSet}">`;
          }
          else {
            previewImage =
              `<img alt="" draggable="false" loading="lazy" src=${preview.defaultFeaturedImage}>`;
          }
          return `
        <div class="scmainblog__item  --fadeInTop">
            <div class="contentblog"><p class="label ${preview.categoryColorClass}">${preview.primaryTag}</p>
                <h3 class="heading --h3"><a class="heading --h3" href="/articles/${preview.slug}">${preview.title}</a></h3>
                <div class="info">
                    <div class="info__date"><img alt="" draggable="false" loading="lazy" src="img/icontime.svg">
                        <p>${preview.createdAt}</p></div>
                    <a class="btnlink" href="/articles/${preview.slug}">Read more</a></div>
            </div>
            <div class="imgblog"><a href="/articles/${preview.slug}">
                ${previewImage}
            </a></div>
        </div>`;
        };
        const updateLoadMoreButtonHref = (limit, category) => {
          const loadMoreButton = document.querySelector('#blog-load-more a');
          loadMoreButton.setAttribute('href', has_1.has(category) ? `/blog?category=${category}&limit=${limit}` : `/blog?limit=${limit}`);
        };


        /***/
      }),

/***/ "../browser/src/ts/components/bindClipboardCopy.ts":
/*!*********************************************************!*\
  !*** ../browser/src/ts/components/bindClipboardCopy.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindClipboardCopy = void 0;
        const TRANSITION_TIMER = 300;
        const bindClipboardCopy = () => {
          const clipboard = document.querySelector('.clipboard');
          const copyTooltip = document.querySelector('.copy-link');
          let copied = false;
          clipboard === null || clipboard === void 0 ? void 0 : clipboard.addEventListener('click', (event) => {
            const temp = document.createElement('input');
            const url = window.location.href;
            document.body.appendChild(temp);
            temp.value = url;
            temp.select();
            document.execCommand('copy');
            document.body.removeChild(temp);
            copyTooltip.innerHTML = 'Copied!';
            copied = true;
          });
          clipboard === null || clipboard === void 0 ? void 0 : clipboard.addEventListener('mouseleave', () => {
            if (!copied) {
              return;
            }
            setTimeout(() => {
              copyTooltip.innerHTML = 'Copy the link';
              copied = false;
            }, TRANSITION_TIMER);
          });
        };
        exports.bindClipboardCopy = bindClipboardCopy;


        /***/
      }),

/***/ "../browser/src/ts/components/bindFadeInObserver.ts":
/*!**********************************************************!*\
  !*** ../browser/src/ts/components/bindFadeInObserver.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindFadeInObserver = void 0;
        const bindFadeInObserver = () => {
          const fadeInElements = document.querySelectorAll('.--fadeInTop');
          const fadeInObserver = new IntersectionObserver(((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-inview');
              }
            });
          }));
          fadeInElements.forEach(element => fadeInObserver.observe(element));
        };
        exports.bindFadeInObserver = bindFadeInObserver;


        /***/
      }),

/***/ "../browser/src/ts/components/bindFaq.ts":
/*!***********************************************!*\
  !*** ../browser/src/ts/components/bindFaq.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindFaq = void 0;
        const closeActiveSibling_1 = __webpack_require__(/*! ./closeActiveSibling */ "../browser/src/ts/components/closeActiveSibling.ts");
        const bindFaq = () => {
          const accTitles = document.querySelectorAll('.scfaq__item .scfaq__item-question');
          accTitles.forEach(title => {
            title.addEventListener('click', function () {
              title.closest('.scfaq__item').classList.toggle('active');
              closeActiveSibling_1.closeActiveSibling(title.closest('.scfaq__item'), 'active');
            });
          });
        };
        exports.bindFaq = bindFaq;


        /***/
      }),

/***/ "../browser/src/ts/components/bindFeaturedPostSliderMobile.ts":
/*!********************************************************************!*\
  !*** ../browser/src/ts/components/bindFeaturedPostSliderMobile.ts ***!
  \********************************************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {

        "use strict";

        var __importDefault = (this && this.__importDefault) || function (mod) {
          return (mod && mod.__esModule) ? mod : { "default": mod };
        };
        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindFeaturedPostSliderMobile = void 0;
        const flickity_1 = __importDefault(__webpack_require__(/*! flickity */ "../../../node_modules/flickity/js/index.js"));
        const getElementSize_1 = __webpack_require__(/*! ./getElementSize */ "../browser/src/ts/components/getElementSize.ts");
        const Screen_1 = __webpack_require__(/*! ./Screen */ "../browser/src/ts/components/Screen.ts");
        const bindFeaturedPostSliderMobile = () => {
          const wWindow = getElementSize_1.getElementWidth(document.body);
          const sliderSelector = '.scmainblog__featured';
          const sliders = document.querySelectorAll(sliderSelector);
          if (sliders.length) {
            if (wWindow < Screen_1.screen.tablet) {
              new flickity_1.default(sliderSelector, {
                prevNextButtons: false,
                pageDots: true,
                cellAlign: 'center',
                dragThreshold: 0,
                wrapAround: false,
              });
            }
            else {
              for (let i = 0; i < sliders.length; i++) {
                const flickity = sliders[i].querySelectorAll('.flickity-slider');
                if (flickity.length) {
                  new flickity_1.default(sliderSelector).destroy();
                  break;
                }
              }
            }
          }
        };
        exports.bindFeaturedPostSliderMobile = bindFeaturedPostSliderMobile;


        /***/
      }),

/***/ "../browser/src/ts/components/bindFeaturesControlMenu.ts":
/*!***************************************************************!*\
  !*** ../browser/src/ts/components/bindFeaturesControlMenu.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindFeaturesControlMenu = void 0;
        const bindFeaturesControlMenu = () => {
          bindClickOnControlElement();
          bindFeaturesObserver();
        };
        exports.bindFeaturesControlMenu = bindFeaturesControlMenu;
        const bindClickOnControlElement = () => {
          const controlMenuItems = document.querySelectorAll('.scfeaturesmain__controls .item');
          controlMenuItems.forEach(controlElement => {
            controlElement.addEventListener('click', () => {
              const targetSectionNumber = controlElement.getAttribute('feature-scroll-to');
              const targetElement = document.querySelector('#scfeaturesmain__row-' + targetSectionNumber);
              targetElement.scrollIntoView({
                behavior: 'smooth',
              });
            });
          });
        };
        const bindFeaturesObserver = () => {
          const featureElements = document.querySelectorAll('.scfeaturesmain__content-row');
          const visibleFeatureIds = [];
          const featuresObserver = new IntersectionObserver(((entries) => {
            entries.forEach(entry => {
              const controlMenuItemNumber = parseInt(entry.target.getAttribute('data-scroll-call'));
              if (!entry.isIntersecting) {
                const indexOfVisible = visibleFeatureIds.indexOf(controlMenuItemNumber);
                if (indexOfVisible === -1) {
                  return;
                }
                visibleFeatureIds.splice(indexOfVisible, 1);
                if (visibleFeatureIds.length === 0) {
                  return;
                }
              }
              else {
                visibleFeatureIds.push(controlMenuItemNumber);
              }
              visibleFeatureIds.sort();
              const controlMenuInner = document.querySelector('.scfeaturesmain__controls-list')
                .children[0];
              const controlMenuItem = controlMenuInner.children[visibleFeatureIds[0] - 1];
              movePurpleLine(visibleFeatureIds, controlMenuItem, controlMenuInner);
              moveActiveClass(visibleFeatureIds, controlMenuItem);
            });
          }), { threshold: 0.9 });
          featureElements.forEach(element => featuresObserver.observe(element));
        };
        const movePurpleLine = (visibleFeatureIds, controlMenuItem, controlMenuInner) => {
          const lineActive = document.querySelector('.scfeaturesmain__controls .line');
          const positionActiveLine = controlMenuItem.offsetTop - controlMenuInner.offsetTop;
          lineActive.style.transform = `translateY(${positionActiveLine}px)`;
        };
        const moveActiveClass = (visibleFeatureIds, controlMenuItem) => {
          document.querySelector('.scfeaturesmain__controls .item.active').classList.remove('active');
          controlMenuItem.classList.add('active');
        };


        /***/
      }),

/***/ "../browser/src/ts/components/bindHeaderToggleMobile.ts":
/*!**************************************************************!*\
  !*** ../browser/src/ts/components/bindHeaderToggleMobile.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindHeaderToggleMobile = void 0;
        const Screen_1 = __webpack_require__(/*! ./Screen */ "../browser/src/ts/components/Screen.ts");
        const header = document.querySelector('.header');
        let prevScrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        const bindHeaderToggleMobile = () => {
          let timer;
          window.addEventListener('scroll', function () {
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(function () {
              onScroll();
            }, 20);
          });
        };
        exports.bindHeaderToggleMobile = bindHeaderToggleMobile;
        const onScroll = () => {
          if (document.body.clientWidth < Screen_1.screen.tablet && header) {
            const currentScrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScrollPos <= 0) {
              header.classList.remove('--hide');
              return;
            }
            if (prevScrollPos < currentScrollPos) {
              header.classList.add('--hide');
            }
            else {
              header.classList.remove('--hide');
            }
            prevScrollPos = currentScrollPos;
          }
        };


        /***/
      }),

/***/ "../browser/src/ts/components/bindMenuItemClick.ts":
/*!*********************************************************!*\
  !*** ../browser/src/ts/components/bindMenuItemClick.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindMenuItemClick = void 0;
        const bindMenuItemClick = () => {
          document.querySelectorAll('.header a').forEach(link => {
            link.addEventListener('click', () => {
              document.querySelector('.schero__img-earth canvas').classList.add('--hide');
              const loading = document.querySelector('loading');
              loading.classList.add('--show');
              loading.classList.remove('--hide');
            });
          });
        };
        exports.bindMenuItemClick = bindMenuItemClick;


        /***/
      }),

/***/ "../browser/src/ts/components/bindMobileFooterAccordion.ts":
/*!*****************************************************************!*\
  !*** ../browser/src/ts/components/bindMobileFooterAccordion.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindMobileFooterAccordion = void 0;
        const closeActiveSibling_1 = __webpack_require__(/*! ./closeActiveSibling */ "../browser/src/ts/components/closeActiveSibling.ts");
        const bindMobileFooterAccordion = () => {
          const accTitle = document.querySelectorAll('.footer__right .colnav .title');
          accTitle.forEach(title => {
            title.addEventListener('click', function () {
              title.closest('.colnav').classList.toggle('active');
              closeActiveSibling_1.closeActiveSibling(title.closest('.colnav'), 'active');
            });
          });
        };
        exports.bindMobileFooterAccordion = bindMobileFooterAccordion;


        /***/
      }),

/***/ "../browser/src/ts/components/bindMobileNav.ts":
/*!*****************************************************!*\
  !*** ../browser/src/ts/components/bindMobileNav.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindMobileNav = void 0;
        const btnMobile = document.querySelector('.header__btnmenu');
        const btnCloseMobile = document.querySelector('.navmobile__button');
        const navMobile = document.querySelector('.navmobile');
        const hideNav = () => {
          btnCloseMobile.classList.remove('active');
          navMobile.classList.remove('--show');
        };
        const bindMobileNav = () => {
          btnMobile.addEventListener('click', () => {
            navMobile.classList.add('--show');
            setTimeout(() => {
              btnCloseMobile.classList.add('active');
            }, 300);
          });
          btnCloseMobile.addEventListener('click', () => {
            hideNav();
          });
        };
        exports.bindMobileNav = bindMobileNav;


        /***/
      }),

/***/ "../browser/src/ts/components/bindNotFoundAnimation.ts":
/*!*************************************************************!*\
  !*** ../browser/src/ts/components/bindNotFoundAnimation.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindNotFoundAnimation = void 0;
        const bindNotFoundAnimation = () => {
          const backHome = document.querySelector('#back-home');
          if (backHome) {
            const sphere = document.querySelector('.sphere-foreground img');
            backHome.addEventListener('mouseenter', () => {
              sphere.style.transform = 'translateX(130px)';
            });
            backHome.addEventListener('mouseleave', () => {
              sphere.style.transform = 'translateX(0)';
            });
          }
        };
        exports.bindNotFoundAnimation = bindNotFoundAnimation;


        /***/
      }),

/***/ "../browser/src/ts/components/bindPricingAnimation.ts":
/*!************************************************************!*\
  !*** ../browser/src/ts/components/bindPricingAnimation.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindPricingAnimation = void 0;
        const getElementSize_1 = __webpack_require__(/*! ./getElementSize */ "../browser/src/ts/components/getElementSize.ts");
        const bindPricingAnimation = () => {
          const boxes = document.querySelectorAll('.scpricing__box');
          const line = document.querySelector('.scpricing__line');
          const wBox = getElementSize_1.getElementWidth(boxes[0], 'outer');
          const wLine = getElementSize_1.getElementWidth(line);
          const posDefault = (wBox / 2) - (wLine / 2);
          line.style.transform = `translateX(${posDefault}px)`;
          boxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
              const offsetLeft = box.offsetLeft;
              const currentPos = (offsetLeft + (wBox / 2)) - (wLine / 2);
              line.style.transform = `translateX(${currentPos}px)`;
              line.style.opacity = '1';
            });
            box.addEventListener('mouseleave', () => {
              line.style.opacity = '0';
            });
          });
        };
        exports.bindPricingAnimation = bindPricingAnimation;


        /***/
      }),

/***/ "../browser/src/ts/components/bindScrollDownButton.ts":
/*!************************************************************!*\
  !*** ../browser/src/ts/components/bindScrollDownButton.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindScrollDownButton = void 0;
        const bindScrollDownButton = () => {
          const btnScrollDown = document.querySelector('.btnscrolldown');
          btnScrollDown === null || btnScrollDown === void 0 ? void 0 : btnScrollDown.addEventListener('click', function (event) {
            event.preventDefault();
            const targetID = btnScrollDown.getAttribute('data-scroll-to');
            const target = document.querySelector(`#${targetID}`);
            target.scrollIntoView({
              behavior: 'smooth',
            });
          });
        };
        exports.bindScrollDownButton = bindScrollDownButton;


        /***/
      }),

/***/ "../browser/src/ts/components/bindWindowResize.ts":
/*!********************************************************!*\
  !*** ../browser/src/ts/components/bindWindowResize.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.bindWindowResize = void 0;
        const getElementSize_1 = __webpack_require__(/*! ./getElementSize */ "../browser/src/ts/components/getElementSize.ts");
        const Screen_1 = __webpack_require__(/*! ./Screen */ "../browser/src/ts/components/Screen.ts");
        const setStorageDevice = () => {
          const windowSize = getElementSize_1.getElementWidth(document.body);
          if (windowSize <= Screen_1.screen.mobile) {
            localStorage.setItem('device', 'mobile');
          }
          else if (windowSize <= Screen_1.screen.tablet) {
            localStorage.setItem('device', 'tablet');
          }
          else {
            localStorage.setItem('device', 'desktop');
          }
        };
        const reloadOnResize = () => {
          const windowSize = getElementSize_1.getElementWidth(document.body);
          const device = localStorage.getItem('device');
          if (windowSize <= Screen_1.screen.mobile && device !== 'mobile') {
            location.reload();
            setStorageDevice();
          }
          else if (windowSize <= Screen_1.screen.tablet && windowSize > Screen_1.screen.mobile && device !== 'tablet') {
            location.reload();
            setStorageDevice();
          }
          else if (windowSize > Screen_1.screen.tablet && device !== 'desktop') {
            location.reload();
            setStorageDevice();
          }
        };
        const bindWindowResize = () => {
          setStorageDevice();
          window.addEventListener('resize', () => {
            setTimeout(function () {
              reloadOnResize();
            }, 100);
          });
        };
        exports.bindWindowResize = bindWindowResize;


        /***/
      }),

/***/ "../browser/src/ts/components/closeActiveSibling.ts":
/*!**********************************************************!*\
  !*** ../browser/src/ts/components/closeActiveSibling.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.closeActiveSibling = void 0;
        const closeActiveSibling = (element, selector) => {
          let sibling = element.parentNode.firstChild;
          while (sibling) {
            if (sibling.nodeType === 1 && sibling !== element && sibling.classList.contains(selector)) {
              sibling.classList.remove(selector);
              break;
            }
            sibling = sibling.nextSibling;
          }
        };
        exports.closeActiveSibling = closeActiveSibling;


        /***/
      }),

/***/ "../browser/src/ts/components/getElementSize.ts":
/*!******************************************************!*\
  !*** ../browser/src/ts/components/getElementSize.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.getElementWidth = void 0;
        const getElementWidth = (element, type) => {
          if (type === 'inner') {
            return element.clientWidth;
          }
          else if (type === 'outer') {
            return element.offsetWidth;
          }
          const width = window.getComputedStyle(element).width;
          return parseInt(width.match(/\d+/g)[0]);
        };
        exports.getElementWidth = getElementWidth;


        /***/
      }),

/***/ "../browser/src/ts/components/init.ts":
/*!********************************************!*\
  !*** ../browser/src/ts/components/init.ts ***!
  \********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {

        "use strict";

        var __importDefault = (this && this.__importDefault) || function (mod) {
          return (mod && mod.__esModule) ? mod : { "default": mod };
        };
        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.init = void 0;
        const imagesloaded_1 = __importDefault(__webpack_require__(/*! imagesloaded */ "../../../node_modules/imagesloaded/imagesloaded.js"));
        const init = () => {
          const imgLoad = imagesloaded_1.default('body');
          imgLoad.on('always', function () {
            document.querySelectorAll('.loading').forEach(loading => {
              loading.classList.add('--hide');
            });
          });
        };
        exports.init = init;


        /***/
      }),

/***/ "../browser/src/ts/enableGoogleAnalytics.ts":
/*!**************************************************!*\
  !*** ../browser/src/ts/enableGoogleAnalytics.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.enableGoogleAnalytics = void 0;
        const googleAnalyticsScript_1 = __webpack_require__(/*! ./googleAnalyticsScript */ "../browser/src/ts/googleAnalyticsScript.ts");
        const enableGoogleAnalytics = () => {
          eval(googleAnalyticsScript_1.googleAnalyticsScript);
        };
        exports.enableGoogleAnalytics = enableGoogleAnalytics;


        /***/
      }),

/***/ "../browser/src/ts/enableUxTracking.ts":
/*!*********************************************!*\
  !*** ../browser/src/ts/enableUxTracking.ts ***!
  \*********************************************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {

        "use strict";

        var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
        }) : (function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          o[k2] = m[k];
        }));
        var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        }) : function (o, v) {
          o["default"] = v;
        });
      }),

    "../browser/src/ts/googleAnalyticsScript.ts":
      ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.googleAnalyticsScript = void 0;
        exports.googleAnalyticsScript = `
const GA_ID = 'UA-174907530-1';
window.dataLayer = window.dataLayer || [];
window['ga-disable-' + GA_ID] = false;
function gtag() {
    window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', GA_ID);
`;


        /***/
      }),

/***/ "../browser/src/ts/hasUserConsentCookie.ts":
      ((__unused_webpack_module, exports) => {

        "use strict";

        Object.defineProperty(exports, "__esModule", ({ value: true }));
        exports.hasUserConsentCookie = exports.COOKIE_CONSENT = void 0;
        exports.COOKIE_CONSENT = 'consent';
        const hasUserConsentCookie = () => {
          return document.cookie.includes(exports.COOKIE_CONSENT);
        };
        exports.hasUserConsentCookie = hasUserConsentCookie;


      }),

/***/ "../browser/src/ts/main.ts":
      (function (__unused_webpack_module, exports, __webpack_require__) {

        "use strict";

        var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
        }) : (function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          o[k2] = m[k];
        }));
        var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        }) : function (o, v) {
          o["default"] = v;
        });
        var __importStar = (this && this.__importStar) || function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        };
        Object.defineProperty(exports, "__esModule", ({ value: true }));
        __webpack_require__(/*! imagesloaded */ "../../../node_modules/imagesloaded/imagesloaded.js");
        const quicklink = __importStar(__webpack_require__(/*! quicklink */ "../../../node_modules/quicklink/dist/quicklink.mjs"));
        const bindBlogLoadMore_1 = __webpack_require__(/*! ./components/bindBlogLoadMore */ "../browser/src/ts/components/bindBlogLoadMore.ts");
        const bindClipboardCopy_1 = __webpack_require__(/*! ./components/bindClipboardCopy */ "../browser/src/ts/components/bindClipboardCopy.ts");
        const bindFadeInObserver_1 = __webpack_require__(/*! ./components/bindFadeInObserver */ "../browser/src/ts/components/bindFadeInObserver.ts");
        const bindFaq_1 = __webpack_require__(/*! ./components/bindFaq */ "../browser/src/ts/components/bindFaq.ts");
        const bindFeaturedPostSliderMobile_1 = __webpack_require__(/*! ./components/bindFeaturedPostSliderMobile */ "../browser/src/ts/components/bindFeaturedPostSliderMobile.ts");
        const bindFeaturesControlMenu_1 = __webpack_require__(/*! ./components/bindFeaturesControlMenu */ "../browser/src/ts/components/bindFeaturesControlMenu.ts");
        const bindHeaderToggleMobile_1 = __webpack_require__(/*! ./components/bindHeaderToggleMobile */ "../browser/src/ts/components/bindHeaderToggleMobile.ts");
        const bindMenuItemClick_1 = __webpack_require__(/*! ./components/bindMenuItemClick */ "../browser/src/ts/components/bindMenuItemClick.ts");
        const bindMobileFooterAccordion_1 = __webpack_require__(/*! ./components/bindMobileFooterAccordion */ "../browser/src/ts/components/bindMobileFooterAccordion.ts");
        const bindMobileNav_1 = __webpack_require__(/*! ./components/bindMobileNav */ "../browser/src/ts/components/bindMobileNav.ts");
        const bindNotFoundAnimation_1 = __webpack_require__(/*! ./components/bindNotFoundAnimation */ "../browser/src/ts/components/bindNotFoundAnimation.ts");
        const bindPricingAnimation_1 = __webpack_require__(/*! ./components/bindPricingAnimation */ "../browser/src/ts/components/bindPricingAnimation.ts");
        const bindScrollDownButton_1 = __webpack_require__(/*! ./components/bindScrollDownButton */ "../browser/src/ts/components/bindScrollDownButton.ts");
        const bindWindowResize_1 = __webpack_require__(/*! ./components/bindWindowResize */ "../browser/src/ts/components/bindWindowResize.ts");
        const init_1 = __webpack_require__(/*! ./components/init */ "../browser/src/ts/components/init.ts");
        document.addEventListener('DOMContentLoaded', () => {
          bindHeaderToggleMobile_1.bindHeaderToggleMobile();
          bindMenuItemClick_1.bindMenuItemClick();
          bindMobileNav_1.bindMobileNav();
          bindFeaturedPostSliderMobile_1.bindFeaturedPostSliderMobile();
          bindWindowResize_1.bindWindowResize();
          bindClipboardCopy_1.bindClipboardCopy();
          bindNotFoundAnimation_1.bindNotFoundAnimation();
          bindBlogLoadMore_1.bindBlogLoadMore();
          bindFaq_1.bindFaq();
          if (location.pathname === '/pricing') {
            bindPricingAnimation_1.bindPricingAnimation();
          }
          bindMobileFooterAccordion_1.bindMobileFooterAccordion();
          bindScrollDownButton_1.bindScrollDownButton();
          bindFeaturesControlMenu_1.bindFeaturesControlMenu();
          bindFadeInObserver_1.bindFadeInObserver();
          init_1.init();
          quicklink.listen();
        }, false);


        /***/
      }),

/***/ "?f46f":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

        /* (ignored) */

        /***/
      }),

/***/ "../../../node_modules/available-typed-arrays/index.js":
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var possibleNames = [
          'BigInt64Array',
          'BigUint64Array',
          'Float32Array',
          'Float64Array',
          'Int16Array',
          'Int32Array',
          'Int8Array',
          'Uint16Array',
          'Uint32Array',
          'Uint8Array',
          'Uint8ClampedArray'
        ];

        var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;

        module.exports = function availableTypedArrays() {
          var out = [];
          for (var i = 0; i < possibleNames.length; i++) {
            if (typeof g[possibleNames[i]] === 'function') {
              out[out.length] = possibleNames[i];
            }
          }
          return out;
        };


        /***/
      }),

/***/ "../../../node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":
/*!*****************************************************************************!*\
  !*** ../../../node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../../../node_modules/get-intrinsic/index.js");

        var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
        if ($gOPD) {
          try {
            $gOPD([], 'length');
          } catch (e) {
            // IE 8 has a broken gOPD
            $gOPD = null;
          }
        }

        module.exports = $gOPD;


        /***/
      }),

/***/ "../../../node_modules/quicklink/dist/quicklink.mjs":
/*!**********************************************************!*\
  !*** ../../../node_modules/quicklink/dist/quicklink.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listen": () => (/* binding */ i),
/* harmony export */   "prefetch": () => (/* binding */ c)
          /* harmony export */
        });
        function e(e) { return new Promise(function (n, t, r) { (r = new XMLHttpRequest).open("GET", e, r.withCredentials = !0), r.onload = function () { 200 === r.status ? n() : t() }, r.send() }) } var n, t = (n = document.createElement("link")).relList && n.relList.supports && n.relList.supports("prefetch") ? function (e) { return new Promise(function (n, t, r) { (r = document.createElement("link")).rel = "prefetch", r.href = e, r.onload = n, r.onerror = t, document.head.appendChild(r) }) } : e, r = window.requestIdleCallback || function (e) { var n = Date.now(); return setTimeout(function () { e({ didTimeout: !1, timeRemaining: function () { return Math.max(0, 50 - (Date.now() - n)) } }) }, 1) }, o = new Set; function i(e) { if (e || (e = {}), window.IntersectionObserver) { var n = function (e) { e = e || 1; var n = [], t = 0; function r() { t < e && n.length > 0 && (n.shift()(), t++) } return [function (e) { n.push(e) > 1 || r() }, function () { t--, r() }] }(e.throttle || 1 / 0), t = n[0], i = n[1], u = e.limit || 1 / 0, f = e.origins || [location.hostname], a = e.ignores || [], s = e.delay || 0, l = [], h = e.timeoutFn || r, d = "function" == typeof e.hrefFn && e.hrefFn, m = new IntersectionObserver(function (n) { n.forEach(function (n) { if (n.isIntersecting) l.push((n = n.target).href), function (e, n) { n ? setTimeout(e, n) : e() }(function () { -1 !== l.indexOf(n.href) && (m.unobserve(n), o.size < u && t(function () { c(d ? d(n) : n.href, e.priority).then(i).catch(function (n) { i(), e.onError && e.onError(n) }) })) }, s); else { var r = l.indexOf((n = n.target).href); r > -1 && l.splice(r) } }) }, { threshold: e.threshold || 0 }); return h(function () { (e.el || document).querySelectorAll("a").forEach(function (e) { f.length && !f.includes(e.hostname) || function e(n, t) { return Array.isArray(t) ? t.some(function (t) { return e(n, t) }) : (t.test || t).call(t, n.href, n) }(e, a) || m.observe(e) }) }, { timeout: e.timeout || 2e3 }), function () { o.clear(), m.disconnect() } } } function c(n, r, i) { if (i = navigator.connection) { if (i.saveData) return Promise.reject(new Error("Cannot prefetch, Save-Data is enabled")); if (/2g/.test(i.effectiveType)) return Promise.reject(new Error("Cannot prefetch, network conditions are poor")) } return Promise.all([].concat(n).map(function (n) { if (!o.has(n)) return o.add(n), (r ? function (n) { return window.fetch ? fetch(n, { credentials: "include" }) : e(n) } : t)(new URL(n, location.href).toString()) })) }


        /***/
      })

    /******/
  });
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
/******/
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function () {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
        /******/
      } catch (e) {
/******/ 				if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
/******/
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    var exports = __webpack_exports__;
    /*!**********************************!*\
      !*** ../browser/src/ts/index.ts ***!
      \**********************************/

    __webpack_require__("../../../node_modules/reflect-metadata/Reflect.js");
    __webpack_require__("../browser/src/ts/main.ts");
    ;
  })();

})()
  ;