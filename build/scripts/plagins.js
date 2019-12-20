"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var n, e, o, t, i, r, d, a, c, l;e = window.device, n = {}, window.device = n, t = window.document.documentElement, l = window.navigator.userAgent.toLowerCase(), n.ios = function () {
    return n.iphone() || n.ipod() || n.ipad();
  }, n.iphone = function () {
    return !n.windows() && i("iphone");
  }, n.ipod = function () {
    return i("ipod");
  }, n.ipad = function () {
    return i("ipad");
  }, n.android = function () {
    return !n.windows() && i("android");
  }, n.androidPhone = function () {
    return n.android() && i("mobile");
  }, n.androidTablet = function () {
    return n.android() && !i("mobile");
  }, n.blackberry = function () {
    return i("blackberry") || i("bb10") || i("rim");
  }, n.blackberryPhone = function () {
    return n.blackberry() && !i("tablet");
  }, n.blackberryTablet = function () {
    return n.blackberry() && i("tablet");
  }, n.windows = function () {
    return i("windows");
  }, n.windowsPhone = function () {
    return n.windows() && i("phone");
  }, n.windowsTablet = function () {
    return n.windows() && i("touch") && !n.windowsPhone();
  }, n.fxos = function () {
    return (i("(mobile;") || i("(tablet;")) && i("; rv:");
  }, n.fxosPhone = function () {
    return n.fxos() && i("mobile");
  }, n.fxosTablet = function () {
    return n.fxos() && i("tablet");
  }, n.meego = function () {
    return i("meego");
  }, n.cordova = function () {
    return window.cordova && "file:" === location.protocol;
  }, n.nodeWebkit = function () {
    return "object" == _typeof(window.process);
  }, n.mobile = function () {
    return n.androidPhone() || n.iphone() || n.ipod() || n.windowsPhone() || n.blackberryPhone() || n.fxosPhone() || n.meego();
  }, n.tablet = function () {
    return n.ipad() || n.androidTablet() || n.blackberryTablet() || n.windowsTablet() || n.fxosTablet();
  }, n.desktop = function () {
    return !n.tablet() && !n.mobile();
  }, n.television = function () {
    var n,
        e = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];for (n = 0; n < e.length;) {
      if (i(e[n])) return !0;n++;
    }return !1;
  }, n.portrait = function () {
    return window.innerHeight / window.innerWidth > 1;
  }, n.landscape = function () {
    return window.innerHeight / window.innerWidth < 1;
  }, n.noConflict = function () {
    return window.device = e, this;
  }, i = function i(n) {
    return -1 !== l.indexOf(n);
  }, d = function d(n) {
    var e;return e = new RegExp(n, "i"), t.className.match(e);
  }, o = function o(n) {
    var e = null;d(n) || (e = t.className.replace(/^\s+|\s+$/g, ""), t.className = e + " " + n);
  }, c = function c(n) {
    d(n) && (t.className = t.className.replace(" " + n, ""));
  }, n.ios() ? n.ipad() ? o("ios ipad tablet") : n.iphone() ? o("ios iphone mobile") : n.ipod() && o("ios ipod mobile") : n.android() ? o(n.androidTablet() ? "android tablet" : "android mobile") : n.blackberry() ? o(n.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : n.windows() ? o(n.windowsTablet() ? "windows tablet" : n.windowsPhone() ? "windows mobile" : "desktop") : n.fxos() ? o(n.fxosTablet() ? "fxos tablet" : "fxos mobile") : n.meego() ? o("meego mobile") : n.nodeWebkit() ? o("node-webkit") : n.television() ? o("television") : n.desktop() && o("desktop"), n.cordova() && o("cordova"), r = function r() {
    n.landscape() ? (c("portrait"), o("landscape")) : (c("landscape"), o("portrait"));
  }, a = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, r, !1) : window.attachEvent ? window.attachEvent(a, r) : window[a] = r, r(), "function" == typeof define && "object" == _typeof(define.amd) && define.amd ? define(function () {
    return n;
  }) : "undefined" != typeof module && module.exports ? module.exports = n : window.device = n;
}).call(undefined);
"use strict";

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function (t, e, n, o) {
  "use strict";
  function i(t, e) {
    var o,
        i,
        a,
        s = [],
        r = 0;t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o));
  }if (t.console = t.console || { info: function info(t) {} }, n) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");var a = { closeExisting: !1, loop: !1, gutter: 50, keyboard: !0, preventCaptionOverlap: !0, arrows: !0, infobar: !0, smallBtn: "auto", toolbar: "auto", buttons: ["zoom", "slideShow", "thumbs", "close"], idleTime: 3, protect: !1, modal: !1, image: { preload: !1 }, ajax: { settings: { data: { fancybox: !0 } } }, iframe: { tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>', preload: !0, css: {}, attr: { scrolling: "auto" } }, video: { tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>', format: "", autoStart: !0 }, defaultType: "image", animationEffect: "zoom", animationDuration: 366, zoomOpacity: "auto", transitionEffect: "fade", transitionDuration: 366, slideClass: "", baseClass: "", baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>', spinnerTpl: '<div class="fancybox-loading"></div>', errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>', btnTpl: { download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>', zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>', close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>', arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>', arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>', smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>' }, parentEl: "body", hideScrollbar: !0, autoFocus: !0, backFocus: !0, trapFocus: !0, fullScreen: { autoStart: !1 }, touch: { vertical: !0, momentum: !0 }, hash: null, media: {}, slideShow: { autoStart: !1, speed: 3e3 }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" }, wheel: "auto", onInit: n.noop, beforeLoad: n.noop, afterLoad: n.noop, beforeShow: n.noop, afterShow: n.noop, beforeClose: n.noop, afterClose: n.noop, onActivate: n.noop, onDeactivate: n.noop, clickContent: function clickContent(t, e) {
        return "image" === t.type && "zoom";
      }, clickSlide: "close", clickOutside: "close", dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1, mobile: { preventCaptionOverlap: !1, idleTime: !1, clickContent: function clickContent(t, e) {
          return "image" === t.type && "toggleControls";
        }, clickSlide: function clickSlide(t, e) {
          return "image" === t.type ? "toggleControls" : "close";
        }, dblclickContent: function dblclickContent(t, e) {
          return "image" === t.type && "zoom";
        }, dblclickSlide: function dblclickSlide(t, e) {
          return "image" === t.type && "zoom";
        } }, lang: "en", i18n: { en: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", ERROR: "The requested content cannot be loaded. <br/> Please try again later.", PLAY_START: "Start slideshow", PLAY_STOP: "Pause slideshow", FULL_SCREEN: "Full screen", THUMBS: "Thumbnails", DOWNLOAD: "Download", SHARE: "Share", ZOOM: "Zoom" }, de: { CLOSE: "Schlie&szlig;en", NEXT: "Weiter", PREV: "Zur&uuml;ck", ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.", PLAY_START: "Diaschau starten", PLAY_STOP: "Diaschau beenden", FULL_SCREEN: "Vollbild", THUMBS: "Vorschaubilder", DOWNLOAD: "Herunterladen", SHARE: "Teilen", ZOOM: "Vergr&ouml;&szlig;ern" } } },
        s = n(t),
        r = n(e),
        c = 0,
        l = function l(t) {
      return t && t.hasOwnProperty && t instanceof n;
    },
        d = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60);
      };
    }(),
        u = function () {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e);
      };
    }(),
        f = function () {
      var t,
          n = e.createElement("fakeelement"),
          o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (t in o) {
        if (void 0 !== n.style[t]) return o[t];
      }return "transitionend";
    }(),
        p = function p(t) {
      return t && t.length && t[0].offsetHeight;
    },
        h = function h(t, e) {
      var o = n.extend(!0, {}, t, e);return n.each(e, function (t, e) {
        n.isArray(e) && (o[t] = e);
      }), o;
    },
        g = function g(t) {
      var o, i;return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = { x: t.getBoundingClientRect().left + t.offsetWidth / 2, y: t.getBoundingClientRect().top + t.offsetHeight / 2 }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i);
    },
        b = function b(t, e, o) {
      var i = this;i.opts = h({ index: o }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init();
    };n.extend(b.prototype, { init: function init() {
        var o,
            i,
            a = this,
            s = a.group[a.currIndex],
            r = s.opts;r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function (t, e) {
          i += r.btnTpl[e] || "";
        }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = { container: o }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
          a.$refs[t] = o.find(".fancybox-" + t);
        }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex);
      }, translate: function translate(t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e];
        });
      }, addContent: function addContent(t) {
        var e,
            o = this,
            i = n.makeArray(t);n.each(i, function (t, e) {
          var i,
              a,
              s,
              r,
              c,
              l = {},
              d = {};n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = { type: "html", src: e + "" }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, { contentType: "pdf", opts: { iframe: { preload: !1 } } })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, { trapFocus: !0, infobar: 0, toolbar: 0, smallBtn: 0, keyboard: 0, slideShow: 0, fullScreen: 0, thumbs: 0, touch: 0, clickContent: !1, clickSlide: !1, clickOutside: !1, dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1 })), o.group.push(l);
        }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
      }, addEvents: function addEvents() {
        var e = this;e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.close(t);
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.previous();
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.next();
        }).on("click.fb", "[data-fancybox-zoom]", function (t) {
          e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        }), s.on("orientationchange.fb resize.fb", function (t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
            e.update(t);
          })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
            e.$refs.stage.show(), e.update(t);
          }, n.fancybox.isMobile ? 600 : 250));
        }), r.on("keydown.fb", function (t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which;if (9 == a) return void (i.opts.trapFocus && e.focus(t));if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a);
        }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
          e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1;
        }), e.idleInterval = t.setInterval(function () {
          ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls());
        }, 1e3));
      }, removeEvents: function removeEvents() {
        var e = this;s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null);
      }, previous: function previous(t) {
        return this.jumpTo(this.currPos - 1, t);
      }, next: function next(t) {
        return this.jumpTo(this.currPos + 1, t);
      }, jumpTo: function jumpTo(t, e) {
        var o,
            i,
            a,
            s,
            r,
            c,
            l,
            d,
            u,
            f = this,
            h = f.group.length;if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
          if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function (t, e) {
            n.fancybox.stop(e.$slide, !0);
          }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function (t, o) {
            o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });var i = o.pos * c.width + o.pos * o.opts.gutter;n.fancybox.setTranslate(o.$slide, { top: 0, left: i - l.left + u }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, { top: 0, left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter }, e, function () {
              o.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete();
            });
          })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function () {
            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous");
          }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image");
        }
      }, createSlide: function createSlide(t) {
        var e,
            o,
            i = this;return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], { pos: t, $slide: e, isLoaded: !1 }), i.updateSlide(i.slides[t])), i.slides[t];
      }, scaleToActual: function scaleToActual(t, e, o) {
        var i,
            a,
            s,
            r,
            c,
            l = this,
            d = l.current,
            u = d.$content,
            f = n.fancybox.getTranslate(d.$slide).width,
            p = n.fancybox.getTranslate(d.$slide).height,
            h = d.width,
            g = d.height;l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, { top: s, left: a, scaleX: r, scaleY: c }, o || 366, function () {
          l.isAnimating = !1;
        }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      }, scaleToFit: function scaleToFit(t) {
        var e,
            o = this,
            i = o.current,
            a = i.$content;o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, { top: e.top, left: e.left, scaleX: e.width / a.width(), scaleY: e.height / a.height() }, t || 366, function () {
          o.isAnimating = !1;
        }));
      }, getFitPos: function getFitPos(t) {
        var e,
            o,
            i,
            a,
            s = this,
            r = t.$content,
            c = t.$slide,
            l = t.width || t.opts.width,
            d = t.height || t.opts.height,
            u = {};return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u);
      }, update: function update(t) {
        var e = this;n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      }, updateSlide: function updateSlide(t, e) {
        var o = this,
            i = t && t.$content,
            a = t.width || t.opts.width,
            s = t.height || t.opts.height,
            r = t.$slide;o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e);
      }, centerSlide: function centerSlide(t) {
        var e = this,
            o = e.current,
            i = o.$slide;!e.isClosing && o && (i.siblings().css({ transform: "", opacity: "" }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, { top: 0, left: 0, opacity: 1 }, void 0 === t ? 0 : t, function () {
          i.css({ transform: "", opacity: "" }), o.isComplete || e.complete();
        }, !1));
      }, isMoved: function isMoved(t) {
        var e,
            o,
            i = t || this.current;return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5));
      }, updateCursor: function updateCursor(t, e) {
        var o,
            i,
            a = this,
            s = a.current,
            r = a.$refs.container;s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
      }, isZoomable: function isZoomable() {
        var t,
            e = this,
            n = e.current;if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0;
        }return !1;
      }, isScaledDown: function isScaledDown(t, e) {
        var o = this,
            i = !1,
            a = o.current,
            s = a.$content;return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), i = i.width < a.width && i.height < a.height), i;
      }, canPan: function canPan(t, e) {
        var o = this,
            i = o.current,
            a = null,
            s = !1;return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), void 0 !== t && void 0 !== e ? a = { width: t, height: e } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), s;
      }, loadSlide: function loadSlide(t) {
        var e,
            o,
            i,
            a = this;if (!t.isLoading && !t.isLoaded) {
          if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, !1;switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {case "image":
              a.setImage(t);break;case "iframe":
              a.setIframe(t);break;case "html":
              a.setContent(t, t.src || t.content);break;case "video":
              a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));break;case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);break;case "ajax":
              a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, { url: t.src, success: function success(e, n) {
                  "success" === n && a.setContent(t, e);
                }, error: function error(e, n) {
                  e && "abort" !== n && a.setError(t);
                } })), o.one("onReset", function () {
                i.abort();
              });break;default:
              a.setError(t);}return !0;
        }
      }, setImage: function setImage(t) {
        var o,
            i = this;setTimeout(function () {
          var e = t.$image;i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t);
        }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function () {
          n(this).remove(), t.$ghost = null;
        }, o.onload = function () {
          i.afterLoad(t);
        }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t);
      }, checkSrcset: function checkSrcset(e) {
        var n,
            o,
            i,
            a,
            s = e.opts.srcset || e.opts.image.srcset;if (s) {
          i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map(function (t) {
            var e = {};return t.trim().split(/\s+/).forEach(function (t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);if (0 === n) return e.url = t;o && (e.value = o, e.postfix = t[t.length - 1]);
            }), e;
          }), o.sort(function (t, e) {
            return t.value - e.value;
          });for (var r = 0; r < o.length; r++) {
            var c = o[r];if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
              n = c;break;
            }
          }!n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s);
        }
      }, setBigImage: function setBigImage(t) {
        var o = this,
            i = e.createElement("img"),
            a = n(i);t.$image = a.one("error", function () {
          o.setError(t);
        }).one("load", function () {
          var e;t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !o.isClosing && t.$ghost.hide();
          }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t));
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error");
      }, resolveImageSlideSize: function resolveImageSlideSize(t, e, n) {
        var o = parseInt(t.opts.width, 10),
            i = parseInt(t.opts.height, 10);t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i);
      }, setIframe: function setIframe(t) {
        var e,
            o = this,
            i = t.opts.iframe,
            a = t.$slide;t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
          this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t);
        }), a.on("refresh.fb", function () {
          var n,
              o,
              s = t.$content,
              r = i.css.width,
              c = i.css.height;if (1 === e[0].isReady) {
            try {
              n = e.contents(), o = n.find("body");
            } catch (t) {}o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({ width: "100%", "max-width": "100%", height: "9999px" }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden");
          }
        })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
          try {
            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (t) {}n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1;
        });
      }, setContent: function setContent(t, e) {
        var o = this;o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
          n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1);
        }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t));
      }, setError: function setError(t) {
        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1);
      }, showLoading: function showLoading(t) {
        var e = this;(t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
      }, hideLoading: function hideLoading(t) {
        var e = this;(t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
      }, afterLoad: function afterLoad(t) {
        var e = this;e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
          return 2 == t.button && t.preventDefault(), !0;
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t));
      }, adjustCaption: function adjustCaption(t) {
        var e,
            n = this,
            o = t || n.current,
            i = o.opts.caption,
            a = o.opts.preventCaptionOverlap,
            s = n.$refs.caption,
            r = !1;s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""));
      }, adjustLayout: function adjustLayout(t) {
        var e,
            n,
            o,
            i,
            a = this,
            s = t || a.current;s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n));
      }, revealContent: function revealContent(t) {
        var e,
            o,
            i,
            a,
            s = this,
            r = t.$slide,
            c = !1,
            l = !1,
            d = s.isMoved(t),
            u = t.isRevealed;return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function () {
          s.isAnimating = !1, s.complete();
        })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function () {
          r.removeClass(o).css({ transform: "", opacity: "" }), t.pos === s.currPos && s.complete();
        }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === s.currPos && s.complete())));
      }, getThumbPos: function getThumbPos(t) {
        var e,
            o,
            i,
            a,
            s,
            r = !1,
            c = t.$thumb;return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = { top: e.top + o, left: e.left + s, width: e.width - i - s, height: e.height - o - a, scaleX: 1, scaleY: 1 }, e.width > 0 && e.height > 0 && r);
      }, complete: function complete() {
        var t,
            e = this,
            o = e.current,
            i = {};!e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
          o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
        }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
        }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0));
      }, preload: function preload(t) {
        var e,
            n,
            o = this;o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
      }, focus: function focus(t, o) {
        var i,
            a,
            s = this,
            r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function () {
          return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
        }), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"));
      }, activate: function activate() {
        var t = this;n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
      }, close: function close(t, e) {
        var o,
            i,
            a,
            s,
            r,
            c,
            l,
            u = this,
            f = u.current,
            h = function h() {
          u.cleanUp(t);
        };return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function () {
          u.update();
        }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = { top: s.top, left: s.left, scaleX: s.width / l.width, scaleY: s.height / l.height, width: l.width, height: l.height }, r = f.opts.zoomOpacity, "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)));
      }, cleanUp: function cleanUp(e) {
        var o,
            i,
            a,
            s = this,
            r = s.current.opts.$orig;s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
      }, trigger: function trigger(t, e) {
        var o,
            i = Array.prototype.slice.call(arguments, 1),
            a = this,
            s = e && e.opts ? e : a.current;if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;"afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i);
      }, updateControls: function updateControls() {
        var t = this,
            o = t.current,
            i = o.index,
            a = t.$refs.container,
            s = t.$refs.caption,
            r = o.opts.caption;o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
      }, hideControls: function hideControls(t) {
        var e = this,
            n = ["infobar", "toolbar", "nav"];!t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
          return "fancybox-show-" + t;
        }).join(" ")), this.hasHiddenControls = !0;
      }, showControls: function showControls() {
        var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal);
      }, toggleControls: function toggleControls() {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      } }), n.fancybox = { version: "3.5.7", defaults: a, getInstance: function getInstance(t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
      }, open: function open(t, e, n) {
        return new b(t, e, n);
      }, close: function close(t) {
        var e = this.getInstance();e && (e.close(), !0 === t && this.close(t));
      }, destroy: function destroy() {
        this.close(!0), r.add("body").off("click.fb-start", "**");
      }, isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), use3d: function () {
        var n = e.createElement("div");return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
      }(), getTranslate: function getTranslate(t) {
        var e;return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), { top: e.top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) });
      }, setTranslate: function setTranslate(t, e) {
        var n = "",
            o = {};if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o);
      }, animate: function animate(t, e, o, i, a) {
        var s,
            r = this;n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function (c) {
          (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, { top: e.top, left: e.left, width: s.width * e.scaleX, height: s.height * e.scaleY, scaleX: 1, scaleY: 1 }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c));
        }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
          t.trigger(f);
        }, o + 33));
      }, stop: function stop(t, e) {
        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
      } }, n.fn.fancybox = function (t) {
      var e;return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, i) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, i), this;
    }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
      n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", { $trigger: n(this) });
    }), function () {
      var t = null;r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
        switch (e.type) {case "mousedown":
            t = n(this);break;case "mouseup":
            t = null;break;case "focusin":
            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");break;case "focusout":
            n(".fancybox-button").removeClass("fancybox-focus");}
      });
    }();
  }
}(window, document, jQuery), function (t) {
  "use strict";
  var e = { youtube: { matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, paramPlace: 8, type: "iframe", url: "https://www.youtube-nocookie.com/embed/$4", thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg" }, vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, gmap_place: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: "iframe", url: function url(t) {
        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
      } }, gmap_search: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i, type: "iframe", url: function url(t) {
        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      } } },
      n = function n(e, _n, o) {
    if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(_n, function (t, n) {
      e = e.replace("$" + t, n || "");
    }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e;
  };t(document).on("objectNeedsType.fb", function (o, i, a) {
    var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || "",
        h = !1;s = t.extend(!0, {}, e, a.opts.media), t.each(s, function (e, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");for (var i = 0; i < d.length; ++i) {
            var s = d[i].split("=", 2);2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
          }
        }return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
        }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1;
      }
    }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })), t.extend(a, { type: h, src: p, origSrc: a.src, contentSource: f, contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video" })) : p && (a.type = a.opts.defaultType);
  });var o = { youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 }, vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 }, load: function load(t) {
      var e,
          n = this;if (this[t].loaded) return void setTimeout(function () {
        n.done(t);
      });this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
        n[t].loaded = !0, n.done(t);
      } : e.onload = function () {
        n[t].loaded = !0, n.done(t);
      }, document.body.appendChild(e));
    }, done: function done(e) {
      var n, o, i;"youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), { events: { onStateChange: function onStateChange(t) {
            0 == t.data && n.next();
          } } }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", function () {
        n.next();
      })));
    } };t(document).on({ "afterShow.fb": function afterShowFb(t, e, n) {
      e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource);
    } });
}(jQuery), function (t, e, n) {
  "use strict";
  var o = function () {
    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
      return t.setTimeout(e, 1e3 / 60);
    };
  }(),
      i = function () {
    return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
      t.clearTimeout(e);
    };
  }(),
      a = function a(e) {
    var n = [];e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];for (var o in e) {
      e[o].pageX ? n.push({ x: e[o].pageX, y: e[o].pageY }) : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
    }return n;
  },
      s = function s(t, e, n) {
    return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
  },
      r = function r(t) {
    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) {
      if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
    }return !1;
  },
      c = function c(e) {
    var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;return i || a;
  },
      l = function l(t) {
    for (var e = !1;;) {
      if (e = c(t.get(0))) break;if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break;
    }return e;
  },
      d = function d(t) {
    var e = this;e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
  };d.prototype.destroy = function () {
    var t = this;t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null);
  }, d.prototype.ontouchstart = function (o) {
    var i = this,
        c = n(o.target),
        d = i.instance,
        u = d.current,
        f = u.$slide,
        p = u.$content,
        h = "touchstart" == o.type;if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = new Date().getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || { top: 0, left: 0 }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))));
    }
  }, d.prototype.onscroll = function (t) {
    var n = this;n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0);
  }, d.prototype.ontouchmove = function (t) {
    var e = this;return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = a(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))));
  }, d.prototype.onSwipe = function (e) {
    var a,
        s = this,
        r = s.instance,
        c = s.isSwiping,
        l = s.sliderStartPos.left || 0;if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = { top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY, left: l }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
      s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
        var o = e.pos - s.instance.currPos;n.fancybox.setTranslate(e.$slide, { top: s.sliderLastPos.top, left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter });
      }), s.$container.addClass("fancybox-is-sliding"));
    });else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
        var o, i;n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({ transform: "", opacity: "", "transition-duration": "" }).removeClass("fancybox-animated").removeClass(function (t, e) {
          return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
        }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, { top: o.top - i.top, left: o.left - i.left });
      }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
    }
  }, d.prototype.onPan = function () {
    var t = this;if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void (t.startPoints = t.newPoints);t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos);
    });
  }, d.prototype.limitMovement = function () {
    var t,
        e,
        n,
        o,
        i,
        a,
        s = this,
        r = s.canvasWidth,
        c = s.canvasHeight,
        l = s.distanceX,
        d = s.distanceY,
        u = s.contentStartPos,
        f = u.left,
        p = u.top,
        h = u.width,
        g = u.height;return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), { top: a, left: i };
  }, d.prototype.limitPosition = function (t, e, n, o) {
    var i = this,
        a = i.canvasWidth,
        s = i.canvasHeight;return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), { top: e, left: t };
  }, d.prototype.onZoom = function () {
    var e = this,
        a = e.contentStartPos,
        r = a.width,
        c = a.height,
        l = a.left,
        d = a.top,
        u = s(e.newPoints[0], e.newPoints[1]),
        f = u / e.startDistanceBetweenFingers,
        p = Math.floor(r * f),
        h = Math.floor(c * f),
        g = (r - p) * e.percentageOfImageAtPinchPointX,
        b = (c - h) * e.percentageOfImageAtPinchPointY,
        m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
        v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
        y = m - e.centerPointStartX,
        x = v - e.centerPointStartY,
        w = l + (g + y),
        $ = d + (b + x),
        S = { top: $, left: w, scaleX: f, scaleY: f };e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos);
    });
  }, d.prototype.ontouchend = function (t) {
    var o = this,
        s = o.isSwiping,
        r = o.isPanning,
        c = o.isZooming,
        l = o.isScrolling;if (o.endPoints = a(t), o.dMs = Math.max(new Date().getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
  }, d.prototype.endSwiping = function (t, e) {
    var o = this,
        i = !1,
        a = o.instance.group.length,
        s = Math.abs(o.distanceX),
        r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, { top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY, opacity: 0 }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding");
  }, d.prototype.endPanning = function () {
    var t,
        e,
        o,
        i = this;i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366));
  }, d.prototype.endZooming = function () {
    var t,
        e,
        o,
        i,
        a = this,
        s = a.instance.current,
        r = a.newWidth,
        c = a.newHeight;a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)));
  }, d.prototype.onTap = function (e) {
    var o,
        i = this,
        s = n(e.target),
        r = i.instance,
        c = r.current,
        l = e && a(e) || i.startPoints,
        d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
        u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
        f = function f(t) {
      var o = c.opts[t];if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {case "close":
          r.close(i.startEvent);break;case "toggleControls":
          r.toggleControls();break;case "next":
          r.next();break;case "nextOrClose":
          r.group.length > 1 ? r.next() : r.close(i.startEvent);break;case "zoom":
          "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent));}
    };if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";else if (s.is(".fancybox-slide")) o = "Slide";else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;o = "Content";
      }if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;f("dblclick" + o);
      } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
        i.tapped = null, r.isAnimating || f("click" + o);
      }, 500) : f("click" + o);return this;
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new d(e));
  }).on("beforeClose.fb", function (t, e) {
    e && e.Guestures && e.Guestures.destroy();
  });
}(window, document, jQuery), function (t, e) {
  "use strict";
  e.extend(!0, e.fancybox.defaults, { btnTpl: { slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>' }, slideShow: { autoStart: !1, speed: 3e3, progress: !0 } });var n = function n(t) {
    this.instance = t, this.init();
  };e.extend(n.prototype, { timer: null, isActive: !1, $button: null, init: function init() {
      var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle();
      }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
    }, set: function set(t) {
      var n = this,
          o = n.instance,
          i = o.current;i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), { scaleX: 1 }, i.opts.slideShow.speed), n.timer = setTimeout(function () {
        o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0);
      }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls());
    }, clear: function clear() {
      var t = this;clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide();
    }, start: function start() {
      var t = this,
          e = t.instance.current;e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0));
    }, stop: function stop() {
      var t = this,
          e = t.instance.current;t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide();
    }, toggle: function toggle() {
      var t = this;t.isActive ? t.stop() : t.start();
    } }), e(t).on({ "onInit.fb": function onInitFb(t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e));
    }, "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var i = e && e.SlideShow;o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
    }, "afterShow.fb": function afterShowFb(t, e, n) {
      var o = e && e.SlideShow;o && o.isActive && o.set();
    }, "afterKeydown.fb": function afterKeydownFb(n, o, i, a, s) {
      var r = o && o.SlideShow;!r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle());
    }, "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(t, e) {
      var n = e && e.SlideShow;n && n.stop();
    } }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(),
        o = n && n.SlideShow;o && o.isActive && (t.hidden ? o.clear() : o.set());
  });
}(document, jQuery), function (t, e) {
  "use strict";
  var n = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
      var i = e[o];if (i && i[1] in t) {
        for (var a = 0; a < i.length; a++) {
          n[e[0][a]] = i[a];
        }return n;
      }
    }return !1;
  }();if (n) {
    var o = { request: function request(e) {
        e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      }, exit: function exit() {
        t[n.exitFullscreen]();
      }, toggle: function toggle(e) {
        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
      }, isFullscreen: function isFullscreen() {
        return Boolean(t[n.fullscreenElement]);
      }, enabled: function enabled() {
        return Boolean(t[n.fullscreenEnabled]);
      } };e.extend(!0, e.fancybox.defaults, { btnTpl: { fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>' }, fullScreen: { autoStart: !1 } }), e(t).on(n.fullscreenchange, function () {
      var t = o.isFullscreen(),
          n = e.fancybox.getInstance();n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
    });
  }e(t).on({ "onInit.fb": function onInitFb(t, e) {
      var i;if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle();
      }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
    }, "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle());
    }, "beforeClose.fb": function beforeCloseFb(t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
    } });
}(document, jQuery), function (t, e) {
  "use strict";
  var n = "fancybox-thumbs";e.fancybox.defaults = e.extend(!0, { btnTpl: { thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>' }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" } }, e.fancybox.defaults);var o = function o(t) {
    this.init(t);
  };e.extend(o.prototype, { $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function init(t) {
      var e = this,
          n = t.group,
          o = 0;e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++) {}o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
        e.toggle();
      }), e.isActive = !0) : e.$button.hide();
    }, create: function create() {
      var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = [];o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function () {
        i.jumpTo(e(this).attr("data-index"));
      })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function (e, n) {
        t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
      }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0));
    }, focus: function focus(t) {
      var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid;o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({ scrollLeft: n.left }, t));
    }, update: function update() {
      var t = this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update();
    }, hide: function hide() {
      this.isVisible = !1, this.update();
    }, show: function show() {
      this.isVisible = !0, this.update();
    }, toggle: function toggle() {
      this.isVisible = !this.isVisible, this.update();
    } }), e(t).on({ "onInit.fb": function onInitFb(t, e) {
      var n;e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show());
    }, "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var i = e && e.Thumbs;i && i.isVisible && i.focus(o ? 0 : 250);
    }, "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
      var a = e && e.Thumbs;a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
    }, "beforeClose.fb": function beforeCloseFb(t, e) {
      var n = e && e.Thumbs;n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
    } });
}(document, jQuery), function (t, e) {
  "use strict";
  function n(t) {
    var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };return String(t).replace(/[&<>"'`=\/]/g, function (t) {
      return e[t];
    });
  }e.extend(!0, e.fancybox.defaults, { btnTpl: { share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>' }, share: { url: function url(t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>' } }), e(t).on("click", "[data-fancybox-share]", function () {
    var t,
        o,
        i = e.fancybox.getInstance(),
        a = i.current || null;a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({ src: i.translate(i, o), type: "html", opts: { touch: !1, animationEffect: !1, afterLoad: function afterLoad(t, e) {
          i.$refs.container.one("beforeClose.fb", function () {
            t.close(null, 0);
          }), e.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1;
          });
        }, mobile: { autoFocus: !1 } } }));
  });
}(document, jQuery), function (t, e, n) {
  "use strict";
  function o() {
    var e = t.location.hash.substr(1),
        n = e.split("-"),
        o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
        i = n.join("-");return { hash: e, index: o < 1 ? 1 : o, gallery: i };
  }function i(t) {
    "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
  }function a(t) {
    var e, n;return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n);
  }n.escapeSelector || (n.escapeSelector = function (t) {
    return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    });
  }), n(function () {
    !1 !== n.fancybox.defaults.hash && (n(e).on({ "onInit.fb": function onInitFb(t, e) {
        var n, i;!1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
      }, "beforeShow.fb": function beforeShowFb(n, o, i, s) {
        var r;i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
          "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null;
        }, 300)));
      }, "beforeClose.fb": function beforeCloseFb(n, o, i) {
        i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null);
      } }), n(t).on("hashchange.fb", function () {
      var t = o(),
          e = null;n.each(n(".fancybox-container").get().reverse(), function (t, o) {
        var i = n(o).data("FancyBox");if (i && i.currentHash) return e = i, !1;
      }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t);
    }), setTimeout(function () {
      n.fancybox.getInstance() || i(o());
    }, 50));
  });
}(window, document, jQuery), function (t, e) {
  "use strict";
  var n = new Date().getTime();e(t).on({ "onInit.fb": function onInitFb(t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
        var o = e.current,
            i = new Date().getTime();e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
      });
    } });
}(document, jQuery);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* jQuery Form Styler v1.7.8 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e($ || require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";
  function t(t, s) {
    this.element = t, this.options = e.extend({}, l, s);var i = this.options.locale;void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init();
  }function s(t) {
    if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
      var s = e("div.jq-selectbox.opened"),
          l = e("div.jq-selectbox__search input", s),
          o = e("div.jq-selectbox__dropdown", s),
          a = s.find("select").data("_" + i).options;a.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown");
    }
  }var i = "styler",
      l = { idSuffix: "-styler", filePlaceholder: "Файл не выбран", fileBrowse: "Обзор...", fileNumber: "Выбрано файлов: %s", selectPlaceholder: "Выберите...", selectSearch: !1, selectSearchLimit: 10, selectSearchNotFound: "Совпадений не найдено", selectSearchPlaceholder: "Поиск...", selectVisibleOptions: 0, singleSelectzIndex: "100", selectSmartPositioning: !0, locale: "ru", locales: { en: { filePlaceholder: "No file selected", fileBrowse: "Browse...", fileNumber: "Selected files: %s", selectPlaceholder: "Select...", selectSearchNotFound: "No matches found", selectSearchPlaceholder: "Search..." } }, onSelectOpened: function onSelectOpened() {}, onSelectClosed: function onSelectClosed() {}, onFormStyled: function onFormStyled() {} };t.prototype = { init: function init() {
      function t() {
        void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data();
      }var i = e(this.element),
          l = this.options,
          o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
          a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));if (i.is(":checkbox")) {
        var d = function d() {
          var s = new t(),
              l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({ id: s.id, title: s.title }).addClass(s.classes).data(s.data);i.css({ position: "absolute", zIndex: "-1", opacity: 0, margin: 0, padding: 0 }).after(l).prependTo(l), l.attr("unselectable", "on").css({ "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "-o-user-select": "none", "user-select": "none", display: "inline-block", position: "relative", overflow: "hidden" }), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function (e) {
            e.preventDefault(), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change());
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault());
          }), i.on("change.styler", function () {
            i.is(":checked") ? l.addClass("checked") : l.removeClass("checked");
          }).on("keydown.styler", function (e) {
            32 == e.which && l.click();
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          });
        };d(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d();
        });
      } else if (i.is(":radio")) {
        var r = function r() {
          var s = new t(),
              l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({ id: s.id, title: s.title }).addClass(s.classes).data(s.data);i.css({ position: "absolute", zIndex: "-1", opacity: 0, margin: 0, padding: 0 }).after(l).prependTo(l), l.attr("unselectable", "on").css({ "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "-o-user-select": "none", "user-select": "none", display: "inline-block", position: "relative" }), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function () {
            var t = this;return t.first().parents().filter(function () {
              return e(this).find(t).length === t.length;
            });
          }, e.fn.commonParent = function () {
            return e(this).commonParents().first();
          }, l.click(function (t) {
            if (t.preventDefault(), !l.is(".disabled")) {
              var s = e('input[name="' + i.attr("name") + '"]');s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change();
            }
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault());
          }), i.on("change.styler", function () {
            i.parent().addClass("checked");
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          });
        };r(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r();
        });
      } else if (i.is(":file")) {
        i.css({ position: "absolute", top: 0, right: 0, margin: 0, padding: 0, opacity: 0, fontSize: "100px" });var n = function n() {
          var s = new t(),
              o = i.data("placeholder");void 0 === o && (o = l.filePlaceholder);var a = i.data("browse");void 0 !== a && "" !== a || (a = l.fileBrowse);var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").css({ display: "inline-block", position: "relative", overflow: "hidden" }).attr({ id: s.id, title: s.title }).addClass(s.classes).data(s.data);i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled"), i.on("change.styler", function () {
            var t = i.val(),
                s = e("div.jq-file__name", d);if (i.is("[multiple]")) {
              t = "";var a = i[0].files.length;if (a > 0) {
                var r = i.data("number");void 0 === r && (r = l.fileNumber), r = r.replace("%s", a), t = r;
              }
            }s.text(t.replace(/.+[\\\/]/, "")), "" === t ? (s.text(o), d.removeClass("changed")) : d.addClass("changed");
          }).on("focus.styler", function () {
            d.addClass("focused");
          }).on("blur.styler", function () {
            d.removeClass("focused");
          }).on("click.styler", function () {
            d.removeClass("focused");
          });
        };n(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), n();
        });
      } else if (i.is('input[type="number"]')) {
        var c = function c() {
          var s = new t(),
              l = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({ id: s.id, title: s.title }).addClass(s.classes).data(s.data);i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'), i.is(":disabled") && l.addClass("disabled");var o,
              a,
              d,
              r = null,
              n = null;void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);var c = function c(t) {
            var s,
                l = i.val();e.isNumeric(l) || (l = 0, i.val("0")), t.is(".minus") ? s = Number(l) - d : t.is(".plus") && (s = Number(l) + d);var r = (d.toString().split(".")[1] || []).length;if (r > 0) {
              for (var n = "1"; n.length <= r;) {
                n += "0";
              }s = Math.round(s * n) / n;
            }e.isNumeric(o) && e.isNumeric(a) ? s >= o && a >= s && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? a >= s && i.val(s) : i.val(s);
          };l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function () {
            var t = e(this);c(t), r = setTimeout(function () {
              n = setInterval(function () {
                c(t);
              }, 40);
            }, 350);
          }).on("mouseup mouseout", "div.jq-number__spin", function () {
            clearTimeout(r), clearInterval(n);
          }).on("mouseup", "div.jq-number__spin", function () {
            i.change();
          }), i.on("focus.styler", function () {
            l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          }));
        };c(), i.on("refresh", function () {
          i.off(".styler").closest(".jq-number").before(i).remove(), c();
        });
      } else if (i.is("select")) {
        var f = function f() {
          function d(t) {
            t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (t) {
              var s = null;"mousewheel" == t.type ? s = -1 * t.originalEvent.wheelDelta : "DOMMouseScroll" == t.type && (s = 40 * t.originalEvent.detail), s && (t.stopPropagation(), t.preventDefault(), e(this).scrollTop(s + e(this).scrollTop()));
            });
          }function r() {
            for (var e = 0; e < f.length; e++) {
              var t = f.eq(e),
                  s = "",
                  i = "",
                  o = "",
                  a = "",
                  d = "",
                  r = "",
                  n = "",
                  c = "",
                  u = "",
                  p = "disabled",
                  v = "selected sel disabled";t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = p), t.is(":selected:disabled") && (i = v), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== f.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (n = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');var m = t.data();for (var g in m) {
                "" !== m[g] && (r += " data-" + g + '="' + m[g] + '"');
              }i + n !== "" && (o = ' class="' + i + n + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (c = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + n + " option" + c + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + c + '">' + t.parent().attr("label") + "</li>" + s)), h += s;
            }
          }function n() {
            var a = new t(),
                n = "",
                c = i.data("placeholder"),
                u = i.data("search"),
                p = i.data("search-limit"),
                v = i.data("search-not-found"),
                m = i.data("search-placeholder"),
                g = i.data("z-index"),
                b = i.data("smart-positioning");void 0 === c && (c = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.singleSelectzIndex), void 0 !== b && "" !== b || (b = l.selectSmartPositioning);var y = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({ display: "inline-block", position: "relative", zIndex: g }).attr({ id: a.id, title: a.title }).addClass(a.classes).data(a.data);i.css({ margin: 0, padding: 0 }).after(y).prependTo(y);var C = e("div.jq-selectbox__select", y),
                x = e("div.jq-selectbox__select-text", y),
                w = f.filter(":selected");r(), u && (n = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");var q = e('<div class="jq-selectbox__dropdown" style="position: absolute">' + n + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + h + "</ul></div>");y.append(q);var _ = e("ul", q),
                j = e("li", q),
                k = e("input", q),
                S = e("div.jq-selectbox__not-found", q).hide();j.length < p && k.parent().hide(), "" === f.first().text() && f.first().is(":selected") && c !== !1 ? x.text(c).addClass("placeholder") : x.text(w.text());var T = 0,
                N = 0;if (j.css({ display: "inline-block" }), j.each(function () {
              var t = e(this);t.innerWidth() > T && (T = t.innerWidth(), N = t.width());
            }), j.css({ display: "" }), x.is(".placeholder") && x.width() > T) x.width(x.width());else {
              var P = y.clone().appendTo("body").width("auto"),
                  A = P.outerWidth();P.remove(), A == y.outerWidth() && x.width(N);
            }T > y.width() && q.width(T), "" === f.first().text() && "" !== i.data("placeholder") && j.first().hide(), i.css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0 });var D = y.outerHeight(!0),
                H = k.parent().outerHeight(!0) || 0,
                I = _.css("max-height"),
                z = j.filter(".selected");if (z.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
              var K = j.outerHeight();c !== !1 && (K = j.eq(1).outerHeight()), j.data("li-height", K);
            }var M = q.css("top");if ("auto" == q.css("left") && q.css({ left: 0 }), "auto" == q.css("top") && (q.css({ top: D }), M = D), q.hide(), z.length && (f.first().text() != w.text() && y.addClass("changed"), y.data("jqfs-class", z.data("jqfs-class")), y.addClass(z.data("jqfs-class"))), i.is(":disabled")) return y.addClass("disabled"), !1;C.click(function () {
              if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                var t = e(window),
                    s = j.data("li-height"),
                    a = y.offset().top,
                    r = t.height() - D - (a - t.scrollTop()),
                    n = i.data("visible-options");void 0 !== n && "" !== n || (n = l.selectVisibleOptions);var c = 5 * s,
                    h = s * n;n > 0 && 6 > n && (c = h), 0 === n && (h = "auto");var u = function u() {
                  q.height("auto").css({ bottom: "auto", top: M });var e = function e() {
                    _.css("max-height", Math.floor((r - 20 - H) / s) * s);
                  };e(), _.css("max-height", h), "none" != I && _.css("max-height", I), r < q.outerHeight() + 20 && e();
                },
                    p = function p() {
                  q.height("auto").css({ top: "auto", bottom: M });var e = function e() {
                    _.css("max-height", Math.floor((a - t.scrollTop() - 20 - H) / s) * s);
                  };e(), _.css("max-height", h), "none" != I && _.css("max-height", I), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e();
                };b === !0 || 1 === b ? r > c + H + 20 ? (u(), y.removeClass("dropup").addClass("dropdown")) : (p(), y.removeClass("dropdown").addClass("dropup")) : b === !1 || 0 === b ? r > c + H + 20 && (u(), y.removeClass("dropup").addClass("dropdown")) : (q.height("auto").css({ bottom: "auto", top: M }), _.css("max-height", h), "none" != I && _.css("max-height", I)), y.offset().left + q.outerWidth() > t.width() && q.css({ left: "auto", right: 0 }), e("div.jqselect").css({ zIndex: g - 1 }).removeClass("opened"), y.css({ zIndex: g }), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), y.addClass("opened focused"), l.onSelectOpened.call(y)) : (q.hide(), y.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(y)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function () {
                  var t = e(this).val();j.each(function () {
                    e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide();
                  }), "" === f.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide();
                })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 !== 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_);
              }
            }), j.hover(function () {
              e(this).siblings().removeClass("selected");
            });var O = j.filter(".selected").text();j.filter(":not(.disabled):not(.optgroup)").click(function () {
              i.focus();var t = e(this),
                  s = t.text();if (!t.is(".selected")) {
                var o = t.index();o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), f.prop("selected", !1).eq(o).prop("selected", !0), O = s, x.text(s), y.data("jqfs-class") && y.removeClass(y.data("jqfs-class")), y.data("jqfs-class", t.data("jqfs-class")), y.addClass(t.data("jqfs-class")), i.change();
              }q.hide(), y.removeClass("opened dropup dropdown"), l.onSelectClosed.call(y);
            }), q.mouseout(function () {
              e("li.sel", q).addClass("selected");
            }), i.on("change.styler", function () {
              x.text(f.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), f.first().text() != j.filter(".selected").text() ? y.addClass("changed") : y.removeClass("changed");
            }).on("focus.styler", function () {
              y.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide();
            }).on("blur.styler", function () {
              y.removeClass("focused");
            }).on("keydown.styler keyup.styler", function (e) {
              var t = j.data("li-height");"" === i.val() ? x.text(c).addClass("placeholder") : x.text(f.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), y.removeClass("opened dropup dropdown"), l.onSelectClosed.call(y));
            }).on("keydown.styler", function (e) {
              32 == e.which && (e.preventDefault(), C.click());
            }), s.registered || (e(document).on("click", s), s.registered = !0);
          }function c() {
            var s = new t(),
                l = e('<div class="jq-select-multiple jqselect"></div>').css({ display: "inline-block", position: "relative" }).attr({ id: s.id, title: s.title }).addClass(s.classes).data(s.data);i.css({ margin: 0, padding: 0 }).after(l), r(), l.append("<ul>" + h + "</ul>");var o = e("ul", l).css({ position: "relative", "overflow-x": "hidden", "-webkit-overflow-scrolling": "touch" }),
                a = e("li", l).attr("unselectable", "on"),
                n = i.attr("size"),
                c = o.outerHeight(),
                u = a.outerHeight();void 0 !== n && n > 0 ? o.css({ height: u * n }) : o.css({ height: 4 * u }), c > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l).css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0 }), i.is(":disabled") ? (l.addClass("disabled"), f.each(function () {
              e(this).is(":selected") && a.eq(e(this).index()).addClass("selected");
            })) : (a.filter(":not(.disabled):not(.optgroup)").click(function (t) {
              i.focus();var s = e(this);if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                var l = !1,
                    o = !1;s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function () {
                  e(this).is(".first") && (l = !0);
                }), s.nextAll().each(function () {
                  e(this).is(".first") && (o = !0);
                }), l && s.prevAll().each(function () {
                  return e(this).is(".selected") ? !1 : void e(this).not(".disabled, .optgroup").addClass("selected");
                }), o && s.nextAll().each(function () {
                  return e(this).is(".selected") ? !1 : void e(this).not(".disabled, .optgroup").addClass("selected");
                }), 1 == a.filter(".selected").length && s.addClass("first");
              }f.prop("selected", !1), a.filter(".selected").each(function () {
                var t = e(this),
                    s = t.index();t.is(".option") && (s -= t.prevAll(".optgroup").length), f.eq(s).prop("selected", !0);
              }), i.change();
            }), f.each(function (t) {
              e(this).data("optionIndex", t);
            }), i.on("change.styler", function () {
              a.removeClass("selected");var t = [];f.filter(":selected").each(function () {
                t.push(e(this).data("optionIndex"));
              }), a.not(".optgroup").filter(function (s) {
                return e.inArray(s, t) > -1;
              }).addClass("selected");
            }).on("focus.styler", function () {
              l.addClass("focused");
            }).on("blur.styler", function () {
              l.removeClass("focused");
            }), c > l.height() && i.on("keydown.styler", function (e) {
              38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u);
            }));
          }var f = e("option", i),
              h = "";if (i.is("[multiple]")) {
            if (a || o) return;c();
          } else n();
        };f(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), f();
        });
      } else i.is(":reset") && i.on("click", function () {
        setTimeout(function () {
          i.closest("form").find("input, select").trigger("refresh");
        }, 1);
      });
    }, destroy: function destroy() {
      var t = e(this.element);t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".jq-number").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove();
    } }, e.fn[i] = function (s) {
    var l = arguments;if (void 0 === s || "object" == (typeof s === "undefined" ? "undefined" : _typeof(s))) return this.each(function () {
      e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s));
    }).promise().done(function () {
      var t = e(this[0]).data("_" + i);t && t.options.onFormStyled.call();
    }), this;if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
      var o;return this.each(function () {
        var a = e.data(this, "_" + i);a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)));
      }), void 0 !== o ? o : this;
    }
  }, s.registered = !1;
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  a.extend(a.fn, { validate: function validate(b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));var c = a.data(this[0], "validator");return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0;
        }return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
      })), c);
    }, valid: function valid() {
      var b, c, d;return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, b || (d = d.concat(c.errorList));
      }), c.errorList = d), b;
    }, rules: function rules(b, c) {
      if (this.length) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j = this[0];if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {case "add":
            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));break;case "remove":
            return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
              i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required");
            }), i) : (delete e[j.name], f);}return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g;
      }
    } }), a.extend(a.expr[":"], { blank: function blank(b) {
      return !a.trim("" + a(b).val());
    }, filled: function filled(b) {
      var c = a(b).val();return null !== c && !!a.trim("" + c);
    }, unchecked: function unchecked(b) {
      return !a(b).prop("checked");
    } }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);return c.unshift(b), a.validator.format.apply(this, c);
    } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c;
      });
    }), b);
  }, a.extend(a.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: a([]), errorLabelContainer: a([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
      }, onfocusout: function onfocusout(a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
      }, onkeyup: function onkeyup(b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
      }, onclick: function onclick(a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
      }, highlight: function highlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
      }, unhighlight: function unhighlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
      } }, setDefaults: function setDefaults(b) {
      a.extend(a.validator.defaults, b);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}."), step: a.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function b(b) {
          var c = a.data(this.form, "validator"),
              d = "on" + b.type.replace(/^validate/, ""),
              e = c.settings;e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
        }this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var c,
            d = this.groups = {};a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            d[c] = b;
          });
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d);
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
      }, form: function form() {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function checkForm() {
        this.prepareForm();for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
          this.check(b[a]);
        }return this.valid();
      }, element: function element(b) {
        var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
          b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = h && g.check(e)));
        }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h;
      }, showErrors: function showErrors(b) {
        if (b) {
          var c = this;a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
            return { message: a, element: c.findByName(b)[0] };
          }), this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b);
      }, resetElements: function resetElements(a) {
        var b;if (this.settings.unhighlight) for (b = 0; a[b]; b++) {
          this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
        } else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(a) {
        var b,
            c = 0;for (b in a) {
          a[b] && c++;
        }return c;
      }, hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      }, hideThese: function hideThese(a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (b) {}
      }, findLastActive: function findLastActive() {
        var b = this.lastActive;return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name;
        }).length && b;
      }, elements: function elements() {
        var b = this,
            c = {};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var d = this.name || a(this).attr("name");return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), d in c || !b.objectLength(a(this).rules()) ? !1 : (c[d] = !0, !0);
        });
      }, clean: function clean(b) {
        return a(b)[0];
      }, errors: function errors() {
        var b = this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement + "." + b, this.errorContext);
      }, resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
      }, reset: function reset() {
        this.resetInternals(), this.currentElements = a([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(a) {
        this.reset(), this.toHide = this.errorsFor(a);
      }, elementValue: function elementValue(b) {
        var c,
            d,
            e = a(b),
            f = b.type;return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
      }, check: function check(b) {
        b = this.validationTargetFor(this.clean(b));var c,
            d,
            e,
            f = a(b).rules(),
            g = a.map(f, function (a, b) {
          return b;
        }).length,
            h = !1,
            i = this.elementValue(b);if ("function" == typeof f.normalizer) {
          if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");delete f.normalizer;
        }for (d in f) {
          e = { method: d, parameters: f[d] };try {
            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
              h = !0;continue;
            }if (h = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));if (!c) return this.formatAndAdd(b, e), !1;
          } catch (j) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j;
          }
        }if (!h) return this.objectLength(f) && this.successList.push(b), !0;
      }, customDataMessage: function customDataMessage(b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
      }, customMessage: function customMessage(a, b) {
        var c = this.settings.messages[a];return c && (c.constructor === String ? c : c[b]);
      }, findDefined: function findDefined() {
        for (var a = 0; a < arguments.length; a++) {
          if (void 0 !== arguments[a]) return arguments[a];
        }
      }, defaultMessage: function defaultMessage(b, c) {
        var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
            e = /\$?\{(\d+)\}/g;return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
      }, formatAndAdd: function formatAndAdd(a, b) {
        var c = this.defaultMessage(a, b);this.errorList.push({ message: c, element: a, method: b.method }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
      }, addWrapper: function addWrapper(a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
      }, defaultShowErrors: function defaultShowErrors() {
        var a, b, c;for (a = 0; this.errorList[a]; a++) {
          c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) {
          this.showLabel(this.successList[a]);
        }if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) {
          this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        }this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return a(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(b, c) {
        var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
          c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
        })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h);
      }, errorsFor: function errorsFor(b) {
        var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
      }, escapeCssMeta: function escapeCssMeta(a) {
        return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      }, idOrName: function idOrName(a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
      }, validationTargetFor: function validationTargetFor(b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
      }, checkable: function checkable(a) {
        return (/radio|checkbox/i.test(a.type)
        );
      }, findByName: function findByName(b) {
        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
      }, getLength: function getLength(b, c) {
        switch (c.nodeName.toLowerCase()) {case "select":
            return a("option:selected", c).length;case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;}return b.length;
      }, depend: function depend(a, b) {
        return this.dependTypes[typeof a === "undefined" ? "undefined" : _typeof(a)] ? this.dependTypes[typeof a === "undefined" ? "undefined" : _typeof(a)](a, b) : !0;
      }, dependTypes: { "boolean": function boolean(a) {
          return a;
        }, string: function string(b, c) {
          return !!a(b, c.form).length;
        }, "function": function _function(a, b) {
          return a(b);
        } }, optional: function optional(b) {
        var c = this.elementValue(b);return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
      }, startRequest: function startRequest(b) {
        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0);
      }, stopRequest: function stopRequest(b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(b, c) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, { method: c }) });
      }, destroy: function destroy() {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
    }, classRules: function classRules(b) {
      var c = {},
          d = a(b).attr("class");return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
      }), c;
    }, normalizeAttributeRule: function normalizeAttributeRule(a, b, c, d) {
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
    }, attributeRules: function attributeRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");for (c in a.validator.methods) {
        "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      }return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    }, dataRules: function dataRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");for (c in a.validator.methods) {
        d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
      }return e;
    }, staticRules: function staticRules(b) {
      var c = {},
          d = a.data(b.form, "validator");return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
    }, normalizeRules: function normalizeRules(b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];if (e.param || e.depends) {
          var f = !0;switch (_typeof(e.depends)) {case "string":
              f = !!a(e.depends, c.form).length;break;case "function":
              f = e.depends.call(c, c);}f ? b[d] = void 0 !== e.param ? e.param : !0 : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var c;b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]));
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
    }, normalizeRule: function normalizeRule(b) {
      if ("string" == typeof b) {
        var c = {};a.each(b.split(/\s/), function () {
          c[this] = !0;
        }), b = c;
      }return b;
    }, addMethod: function addMethod(b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
    }, methods: { required: function required(b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();return e && e.length > 0;
        }return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
      }, email: function email(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
      }, url: function url(a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a);
      }, date: function date(a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
      }, dateISO: function dateISO(a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
      }, number: function number(a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
      }, digits: function digits(a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      }, minlength: function minlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);return this.optional(c) || e >= d;
      }, maxlength: function maxlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);return this.optional(c) || d >= e;
      }, rangelength: function rangelength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);return this.optional(c) || e >= d[0] && e <= d[1];
      }, min: function min(a, b, c) {
        return this.optional(b) || a >= c;
      }, max: function max(a, b, c) {
        return this.optional(b) || c >= a;
      }, range: function range(a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1];
      }, step: function step(b, c, d) {
        var e = a(c).attr("type"),
            f = "Step attribute on input type " + e + " is not supported.",
            g = ["text", "number", "range"],
            h = new RegExp("\\b" + e + "\\b"),
            i = e && !h.test(g.join());if (i) throw new Error(f);return this.optional(c) || b % d === 0;
      }, equalTo: function equalTo(b, c, d) {
        var e = a(d);return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          a(c).valid();
        }), b === e.val();
      }, remote: function remote(b, c, d, e) {
        if (this.optional(c)) return "dependency-mismatch";e = "string" == typeof e && e || "remote";var f,
            g,
            h,
            i = this.previousValue(c, e);return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && { url: d } || d, h = a.param(a.extend({ data: b }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, { mode: "abort", port: "validate" + c.name, dataType: "json", data: g, context: f.currentForm, success: function success(a) {
            var d,
                g,
                h,
                j = a === !0 || "true" === a;f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, { method: e, parameters: b }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j);
          } }, d)), "pending");
      } } });var b,
      c = {};a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
        f = ("port" in d ? d : a.ajaxSettings).port;return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
  });
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
}(function (a) {
    var b,
        c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function caret(a, b) {
            var c;if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b });
        }, unmask: function unmask() {
            return this.trigger("unmask");
        }, mask: function mask(c, g) {
            var h, i, j, k, l, m, n, o;if (!c && this.length > 0) {
                h = a(this[0]);var p = h.data(a.mask.dataName);return p ? p() : void 0;
            }return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null);
            }), this.trigger("unmask").each(function () {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++) {
                            if (j[a] && C[a] === p(a)) return;
                        }g.completed.call(B);
                    }
                }function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
                }function q(a) {
                    for (; ++a < n && !j[a];) {}return a;
                }function r(a) {
                    for (; --a >= 0 && !j[a];) {}return a;
                }function s(a, b) {
                    var c, d;if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++) {
                            if (j[c]) {
                                if (!(n > d && j[c].test(C[d]))) break;C[c] = C[d], C[d] = p(d), d = q(d);
                            }
                        }z(), B.caret(Math.max(l, a));
                    }
                }function t(a) {
                    var b, c, d, e;for (b = a, c = p(a); n > b; b++) {
                        if (j[b]) {
                            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;c = e;
                        }
                    }
                }function u() {
                    var a = B.val(),
                        b = B.caret();if (o && o.length && o.length > a.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];) {
                            b.begin--;
                        }if (0 === b.begin) for (; b.begin < l && !j[b.begin];) {
                            b.begin++;
                        }B.caret(b.begin, b.begin);
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];) {
                            b.begin++;
                        }B.caret(b.begin, b.begin);
                    }h();
                }function v() {
                    A(), B.val() != E && B.change();
                }function w(a) {
                    if (!B.prop("readonly")) {
                        var b,
                            c,
                            e,
                            f = a.which || a.keyCode;o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault());
                    }
                }function x(b) {
                    if (!B.prop("readonly")) {
                        var c,
                            d,
                            e,
                            g = b.which || b.keyCode,
                            i = B.caret();if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function k() {
                                        a.proxy(a.fn.caret, B, e)();
                                    };setTimeout(k, 0);
                                } else B.caret(e);i.begin <= m && h();
                            }b.preventDefault();
                        }
                    }
                }function y(a, b) {
                    var c;for (c = a; b > c && n > c; c++) {
                        j[c] && (C[c] = p(c));
                    }
                }function z() {
                    B.val(C.join(""));
                }function A(a) {
                    var b,
                        c,
                        d,
                        e = B.val(),
                        f = -1;for (b = 0, d = 0; n > b; b++) {
                        if (j[b]) {
                            for (C[b] = p(b); d++ < e.length;) {
                                if (c = e.charAt(d - 1), j[b].test(c)) {
                                    C[b] = c, f = b;break;
                                }
                            }if (d > e.length) {
                                y(b + 1, n);break;
                            }
                        } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    }return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
                }var B = a(this),
                    C = a.map(c.split(""), function (a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0;
                }),
                    D = C.join(""),
                    E = B.val();B.data(a.mask.dataName, function () {
                    return a.map(C, function (a, b) {
                        return j[b] && a != p(b) ? a : null;
                    }).join("");
                }), B.one("unmask", function () {
                    B.off(".mask").removeData(a.mask.dataName);
                }).on("focus.mask", function () {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);var a;E = B.val(), a = A(), b = setTimeout(function () {
                            B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a));
                        }, 10);
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
                    B.prop("readonly") || setTimeout(function () {
                        var a = A(!0);B.caret(a), h();
                    }, 0);
                }), e && f && B.off("input.mask").on("input.mask", u), A();
            });
        } });
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  "use strict";
  var b = window.Slick || {};b = function () {
    function c(c, d) {
      var f,
          e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
    }var b = 0;return c;
  }(), b.prototype.activateADA = function () {
    var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b);
    }), e.$slidesCache = e.$slides, e.reinit();
  }, b.prototype.animateHeight = function () {
    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
        e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
      }, complete: function complete() {
        c && c.call();
      } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call();
    }, e.options.speed));
  }, b.prototype.getNavTarget = function () {
    var b = this,
        c = b.options.asNavFor;return c && null !== c && (c = a(c).not(b.$slider)), c;
  }, b.prototype.asNavFor = function (b) {
    var c = this,
        d = c.getNavTarget();null !== d && "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && d.each(function () {
      var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
    });
  }, b.prototype.applyTransition = function (a) {
    var b = this,
        c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.autoPlay = function () {
    var a = this;a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
  }, b.prototype.autoPlayClear = function () {
    var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
  }, b.prototype.autoPlayIterator = function () {
    var a = this,
        b = a.currentSlide + a.options.slidesToScroll;a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
  }, b.prototype.buildArrows = function () {
    var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, b.prototype.buildDots = function () {
    var c,
        d,
        b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
        d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      }b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
    }
  }, b.prototype.buildOut = function () {
    var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
  }, b.prototype.buildRows = function () {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
          }i.appendChild(j);
        }e.appendChild(i);
      }a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;for (e in d.breakpoints) {
        d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      }null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
        return;}
  }, b.prototype.checkNavigable = function (a) {
    var c,
        d,
        b = this;if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
      if (a < c[e]) {
        a = d;break;
      }d = c[e];
    }return a;
  }, b.prototype.cleanUpEvents = function () {
    var b = this;b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.cleanUpSlideEvents = function () {
    var b = this;b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.cleanUpRows = function () {
    var b,
        a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
  }, b.prototype.clickHandler = function (a) {
    var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  }, b.prototype.destroy = function (b) {
    var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"));
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
  }, b.prototype.disableTransition = function (a) {
    var b = this,
        c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
      c.disableTransition(a), b.call();
    }, c.options.speed));
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
  }, b.prototype.focusHandler = function () {
    var b = this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
      c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
      }, 0);
    });
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;return a.currentSlide;
  }, b.prototype.getDotCount = function () {
    var a = this,
        b = 0,
        c = 0,
        d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);return d - 1;
  }, b.prototype.getLeft = function (a) {
    var c,
        d,
        f,
        b = this,
        e = 0;return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;return b.options[a];
  }, b.prototype.getNavigableIndexes = function () {
    var e,
        a = this,
        b = 0,
        c = 0,
        d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
      d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }return d;
  }, b.prototype.getSlick = function () {
    return this;
  }, b.prototype.getSlideCount = function () {
    var c,
        d,
        e,
        b = this;return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
  }, b.prototype.init = function (b) {
    var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
  }, b.prototype.initADA = function () {
    var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
  }, b.prototype.initArrowEvents = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
  }, b.prototype.initDotEvents = function () {
    var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.initSlideEvents = function () {
    var b = this;b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
  }, b.prototype.initializeEvents = function () {
    var b = this;b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.initUI = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
  }, b.prototype.keyHandler = function (a) {
    var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
  }, b.prototype.lazyLoad = function () {
    function g(c) {
      a("img[data-lazy]", c).each(function () {
        var c = a(this),
            d = a(this).attr("data-lazy"),
            e = document.createElement("img");e.onload = function () {
          c.animate({ opacity: 0 }, 100, function () {
            c.attr("src", d).animate({ opacity: 1 }, 200, function () {
              c.removeAttr("data-lazy").removeClass("slick-loading");
            }), b.$slider.trigger("lazyLoaded", [b, c, d]);
          });
        }, e.onerror = function () {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
        }, e.src = d;
      });
    }var c,
        d,
        e,
        f,
        b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
  }, b.prototype.loadSlider = function () {
    var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;a.changeSlide({ data: { message: "next" } });
  }, b.prototype.orientationChange = function () {
    var a = this;a.checkResponsive(), a.setPosition();
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;a.autoPlayClear(), a.paused = !0;
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
  }, b.prototype.postSlide = function (a) {
    var b = this;b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;a.changeSlide({ data: { message: "previous" } });
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault();
  }, b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;var e,
        f,
        g,
        c = this,
        d = a("img[data-lazy]", c.$slider);d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
    }, g.onerror = function () {
      3 > b ? setTimeout(function () {
        c.progressiveLazyLoad(b + 1);
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
  }, b.prototype.refresh = function (b) {
    var d,
        e,
        c = this;e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
  }, b.prototype.registerBreakpoints = function () {
    var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";for (c in f) {
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) {
            b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          }b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
        }
      }b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a;
      });
    }
  }, b.prototype.reinit = function () {
    var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
  }, b.prototype.resize = function () {
    var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
    }, 50));
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
  }, b.prototype.setCSS = function (a) {
    var d,
        e,
        b = this,
        c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
  }, b.prototype.setDimensions = function () {
    var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
  }, b.prototype.setFade = function () {
    var c,
        b = this;b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
    }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
  }, b.prototype.setHeight = function () {
    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
    var c,
        d,
        e,
        f,
        h,
        b = this,
        g = !1;if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
      b.options[a] = c;
    });else if ("responsive" === h) for (d in f) {
      if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
        for (c = b.options.responsive.length - 1; c >= 0;) {
          b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
        }b.options.responsive.push(f[d]);
      }
    }g && (b.unload(), b.reinit());
  }, b.prototype.setPosition = function () {
    var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
  }, b.prototype.setProps = function () {
    var a = this,
        b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
  }, b.prototype.setSlideClasses = function (a) {
    var c,
        d,
        e,
        f,
        b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
  }, b.prototype.setupInfinite = function () {
    var c,
        d,
        e,
        b = this;if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
        d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      }for (c = 0; e > c; c += 1) {
        d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      }b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, b.prototype.interrupt = function (a) {
    var b = this;a || b.autoPlay(), b.interrupted = a;
  }, b.prototype.selectHandler = function (b) {
    var c = this,
        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
  }, b.prototype.slideHandler = function (a, b, c) {
    var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e);
    })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e);
    }) : i.postSlide(e))));
  }, b.prototype.startLoad = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
  }, b.prototype.swipeDirection = function () {
    var a,
        b,
        c,
        d,
        e = this;return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
  }, b.prototype.swipeEnd = function (a) {
    var c,
        d,
        b = this;if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {case "left":case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;break;case "right":case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;}"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
  }, b.prototype.swipeHandler = function (a) {
    var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {case "start":
        b.swipeStart(a);break;case "move":
        b.swipeMove(a);break;case "end":
        b.swipeEnd(a);}
  }, b.prototype.swipeMove = function (a) {
    var d,
        e,
        f,
        g,
        h,
        b = this;return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
  }, b.prototype.swipeStart = function (a) {
    var c,
        b = this;return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
  }, b.prototype.unload = function () {
    var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, b.prototype.unslick = function (a) {
    var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
  }, b.prototype.updateArrows = function () {
    var b,
        a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, b.prototype.updateDots = function () {
    var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
  }, b.prototype.visibility = function () {
    var a = this;a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
  }, a.fn.slick = function () {
    var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;for (f = 0; e > f; f++) {
      if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    }return a;
  };
});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.3.0 - JavaScript Vector Library                                                             │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com)                                       │ \\
// │ Copyright © 2008-2016 Sencha Labs (http://sencha.com)                                                 │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (https://github.com/DmitryBaranovskiy/raphael/blob/master/license.txt) license.│ \\
// └───────────────────────────────────────────────────────────────────────────────────────────────────────┘ \\

(function webpackUniversalModuleDefinition(root, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Raphael"] = factory();else root["Raphael"] = factory();
})(window, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // define __esModule on exports
            /******/__webpack_require__.r = function (exports) {
                /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                }
                /******/Object.defineProperty(exports, '__esModule', { value: true });
                /******/
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/__webpack_require__.t = function (value, mode) {
                /******/if (mode & 1) value = __webpack_require__(value);
                /******/if (mode & 8) return value;
                /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
                /******/var ns = Object.create(null);
                /******/__webpack_require__.r(ns);
                /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
                    __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                    }.bind(null, key));
                } /******/return ns;
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = "./dev/raphael.amd.js");
            /******/
        }(
        /************************************************************************/
        /******/{

            /***/"./dev/raphael.amd.js":
            /*!****************************!*\
              !*** ./dev/raphael.amd.js ***!
              \****************************/
            /*! no static exports found */
            /***/function devRaphaelAmdJs(module, exports, __webpack_require__) {

                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__( /*! ./raphael.core */"./dev/raphael.core.js"), __webpack_require__( /*! ./raphael.svg */"./dev/raphael.svg.js"), __webpack_require__( /*! ./raphael.vml */"./dev/raphael.vml.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (R) {

                    return R;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

                /***/
            },

            /***/"./dev/raphael.core.js":
            /*!*****************************!*\
              !*** ./dev/raphael.core.js ***!
              \*****************************/
            /*! no static exports found */
            /***/function devRaphaelCoreJs(module, exports, __webpack_require__) {

                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__( /*! eve */"./node_modules/eve-raphael/eve.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (eve) {

                    /*\
                     * Raphael
                     [ method ]
                     **
                     * Creates a canvas object on which to draw.
                     * You must do this first, as all future calls to drawing methods
                     * from this instance will be bound to this canvas.
                     > Parameters
                     **
                     - container (HTMLElement|string) DOM element or its ID which is going to be a parent for drawing surface
                     - width (number)
                     - height (number)
                     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
                     * or
                     - x (number)
                     - y (number)
                     - width (number)
                     - height (number)
                     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
                     * or
                     - all (array) (first 3 or 4 elements in the array are equal to [containerID, width, height] or [x, y, width, height]. The rest are element descriptions in format {type: type, <attributes>}). See @Paper.add.
                     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
                     * or
                     - onReadyCallback (function) function that is going to be called on DOM ready event. You can also subscribe to this event via Eve’s “DOMLoad” event. In this case method returns `undefined`.
                     = (object) @Paper
                     > Usage
                     | // Each of the following examples create a canvas
                     | // that is 320px wide by 200px high.
                     | // Canvas is created at the viewport’s 10,50 coordinate.
                     | var paper = Raphael(10, 50, 320, 200);
                     | // Canvas is created at the top left corner of the #notepad element
                     | // (or its top right corner in dir="rtl" elements)
                     | var paper = Raphael(document.getElementById("notepad"), 320, 200);
                     | // Same as above
                     | var paper = Raphael("notepad", 320, 200);
                     | // Image dump
                     | var set = Raphael(["notepad", 320, 200, {
                     |     type: "rect",
                     |     x: 10,
                     |     y: 10,
                     |     width: 25,
                     |     height: 25,
                     |     stroke: "#f00"
                     | }, {
                     |     type: "text",
                     |     x: 30,
                     |     y: 40,
                     |     text: "Dump"
                     | }]);
                    \*/
                    function R(first) {
                        if (R.is(first, "function")) {
                            return loaded ? first() : eve.on("raphael.DOMload", first);
                        } else if (R.is(first, array)) {
                            return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);
                        } else {
                            var args = Array.prototype.slice.call(arguments, 0);
                            if (R.is(args[args.length - 1], "function")) {
                                var f = args.pop();
                                return loaded ? f.call(R._engine.create[apply](R, args)) : eve.on("raphael.DOMload", function () {
                                    f.call(R._engine.create[apply](R, args));
                                });
                            } else {
                                return R._engine.create[apply](R, arguments);
                            }
                        }
                    }
                    R.version = "2.3.0";
                    R.eve = eve;
                    var loaded,
                        separator = /[, ]+/,
                        elements = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
                        formatrg = /\{(\d+)\}/g,
                        proto = "prototype",
                        has = "hasOwnProperty",
                        g = {
                        doc: document,
                        win: window
                    },
                        oldRaphael = {
                        was: Object.prototype[has].call(g.win, "Raphael"),
                        is: g.win.Raphael
                    },
                        Paper = function Paper() {
                        /*\
                         * Paper.ca
                         [ property (object) ]
                         **
                         * Shortcut for @Paper.customAttributes
                        \*/
                        /*\
                         * Paper.customAttributes
                         [ property (object) ]
                         **
                         * If you have a set of attributes that you would like to represent
                         * as a function of some number you can do it easily with custom attributes:
                         > Usage
                         | paper.customAttributes.hue = function (num) {
                         |     num = num % 1;
                         |     return {fill: "hsb(" + num + ", 0.75, 1)"};
                         | };
                         | // Custom attribute “hue” will change fill
                         | // to be given hue with fixed saturation and brightness.
                         | // Now you can use it like this:
                         | var c = paper.circle(10, 10, 10).attr({hue: .45});
                         | // or even like this:
                         | c.animate({hue: 1}, 1e3);
                         |
                         | // You could also create custom attribute
                         | // with multiple parameters:
                         | paper.customAttributes.hsb = function (h, s, b) {
                         |     return {fill: "hsb(" + [h, s, b].join(",") + ")"};
                         | };
                         | c.attr({hsb: "0.5 .8 1"});
                         | c.animate({hsb: [1, 0, 0.5]}, 1e3);
                        \*/
                        this.ca = this.customAttributes = {};
                    },
                        paperproto,
                        appendChild = "appendChild",
                        apply = "apply",
                        concat = "concat",

                    //taken from Modernizr touch test: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js#L40
                    supportsTouch = 'ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                        E = "",
                        S = " ",
                        Str = String,
                        split = "split",
                        events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[split](S),
                        touchMap = {
                        mousedown: "touchstart",
                        mousemove: "touchmove",
                        mouseup: "touchend"
                    },
                        lowerCase = Str.prototype.toLowerCase,
                        math = Math,
                        mmax = math.max,
                        mmin = math.min,
                        abs = math.abs,
                        pow = math.pow,
                        PI = math.PI,
                        nu = "number",
                        string = "string",
                        array = "array",
                        toString = "toString",
                        fillString = "fill",
                        objectToString = Object.prototype.toString,
                        paper = {},
                        push = "push",
                        ISURL = R._ISURL = /^url\(['"]?(.+?)['"]?\)$/i,
                        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
                        isnan = { "NaN": 1, "Infinity": 1, "-Infinity": 1 },
                        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                        round = math.round,
                        setAttribute = "setAttribute",
                        toFloat = parseFloat,
                        toInt = parseInt,
                        upperCase = Str.prototype.toUpperCase,
                        availableAttrs = R._availableAttrs = {
                        "arrow-end": "none",
                        "arrow-start": "none",
                        blur: 0,
                        "clip-rect": "0 0 1e9 1e9",
                        cursor: "default",
                        cx: 0,
                        cy: 0,
                        fill: "#fff",
                        "fill-opacity": 1,
                        font: '10px "Arial"',
                        "font-family": '"Arial"',
                        "font-size": "10",
                        "font-style": "normal",
                        "font-weight": 400,
                        gradient: 0,
                        height: 0,
                        href: "http://raphaeljs.com/",
                        "letter-spacing": 0,
                        opacity: 1,
                        path: "M0,0",
                        r: 0,
                        rx: 0,
                        ry: 0,
                        src: "",
                        stroke: "#000",
                        "stroke-dasharray": "",
                        "stroke-linecap": "butt",
                        "stroke-linejoin": "butt",
                        "stroke-miterlimit": 0,
                        "stroke-opacity": 1,
                        "stroke-width": 1,
                        target: "_blank",
                        "text-anchor": "middle",
                        title: "Raphael",
                        transform: "",
                        width: 0,
                        x: 0,
                        y: 0,
                        "class": ""
                    },
                        availableAnimAttrs = R._availableAnimAttrs = {
                        blur: nu,
                        "clip-rect": "csv",
                        cx: nu,
                        cy: nu,
                        fill: "colour",
                        "fill-opacity": nu,
                        "font-size": nu,
                        height: nu,
                        opacity: nu,
                        path: "path",
                        r: nu,
                        rx: nu,
                        ry: nu,
                        stroke: "colour",
                        "stroke-opacity": nu,
                        "stroke-width": nu,
                        transform: "transform",
                        width: nu,
                        x: nu,
                        y: nu
                    },
                        whitespace = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
                        commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                        hsrg = { hs: 1, rg: 1 },
                        p2s = /,?([achlmqrstvxz]),?/gi,
                        pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
                        tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
                        pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
                        radial_gradient = R._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
                        eldata = {},
                        sortByKey = function sortByKey(a, b) {
                        return a.key - b.key;
                    },
                        sortByNumber = function sortByNumber(a, b) {
                        return toFloat(a) - toFloat(b);
                    },
                        fun = function fun() {},
                        pipe = function pipe(x) {
                        return x;
                    },
                        rectPath = R._rectPath = function (x, y, w, h, r) {
                        if (r) {
                            return [["M", x + r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
                        }
                        return [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
                    },
                        ellipsePath = function ellipsePath(x, y, rx, ry) {
                        if (ry == null) {
                            ry = rx;
                        }
                        return [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
                    },
                        getPath = R._getPath = {
                        path: function path(el) {
                            return el.attr("path");
                        },
                        circle: function circle(el) {
                            var a = el.attrs;
                            return ellipsePath(a.cx, a.cy, a.r);
                        },
                        ellipse: function ellipse(el) {
                            var a = el.attrs;
                            return ellipsePath(a.cx, a.cy, a.rx, a.ry);
                        },
                        rect: function rect(el) {
                            var a = el.attrs;
                            return rectPath(a.x, a.y, a.width, a.height, a.r);
                        },
                        image: function image(el) {
                            var a = el.attrs;
                            return rectPath(a.x, a.y, a.width, a.height);
                        },
                        text: function text(el) {
                            var bbox = el._getBBox();
                            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
                        },
                        set: function set(el) {
                            var bbox = el._getBBox();
                            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
                        }
                    },

                    /*\
                     * Raphael.mapPath
                     [ method ]
                     **
                     * Transform the path string with given matrix.
                     > Parameters
                     - path (string) path string
                     - matrix (object) see @Matrix
                     = (string) transformed path string
                    \*/
                    mapPath = R.mapPath = function (path, matrix) {
                        if (!matrix) {
                            return path;
                        }
                        var x, y, i, j, ii, jj, pathi;
                        path = path2curve(path);
                        for (i = 0, ii = path.length; i < ii; i++) {
                            pathi = path[i];
                            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                                x = matrix.x(pathi[j], pathi[j + 1]);
                                y = matrix.y(pathi[j], pathi[j + 1]);
                                pathi[j] = x;
                                pathi[j + 1] = y;
                            }
                        }
                        return path;
                    };

                    R._g = g;
                    /*\
                     * Raphael.type
                     [ property (string) ]
                     **
                     * Can be “SVG”, “VML” or empty, depending on browser support.
                    \*/
                    R.type = g.win.SVGAngle || g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
                    if (R.type == "VML") {
                        var d = g.doc.createElement("div"),
                            b;
                        d.innerHTML = '<v:shape adj="1"/>';
                        b = d.firstChild;
                        b.style.behavior = "url(#default#VML)";
                        if (!(b && _typeof(b.adj) == "object")) {
                            return R.type = E;
                        }
                        d = null;
                    }
                    /*\
                     * Raphael.svg
                     [ property (boolean) ]
                     **
                     * `true` if browser supports SVG.
                    \*/
                    /*\
                     * Raphael.vml
                     [ property (boolean) ]
                     **
                     * `true` if browser supports VML.
                    \*/
                    R.svg = !(R.vml = R.type == "VML");
                    R._Paper = Paper;
                    /*\
                     * Raphael.fn
                     [ property (object) ]
                     **
                     * You can add your own method to the canvas. For example if you want to draw a pie chart,
                     * you can create your own pie chart function and ship it as a Raphaël plugin. To do this
                     * you need to extend the `Raphael.fn` object. You should modify the `fn` object before a
                     * Raphaël instance is created, otherwise it will take no effect. Please note that the
                     * ability for namespaced plugins was removed in Raphael 2.0. It is up to the plugin to
                     * ensure any namespacing ensures proper context.
                     > Usage
                     | Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
                     |     return this.path( ... );
                     | };
                     | // or create namespace
                     | Raphael.fn.mystuff = {
                     |     arrow: function () {…},
                     |     star: function () {…},
                     |     // etc…
                     | };
                     | var paper = Raphael(10, 10, 630, 480);
                     | // then use it
                     | paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});
                     | paper.mystuff.arrow();
                     | paper.mystuff.star();
                    \*/
                    R.fn = paperproto = Paper.prototype = R.prototype;
                    R._id = 0;
                    /*\
                     * Raphael.is
                     [ method ]
                     **
                     * Handful of replacements for `typeof` operator.
                     > Parameters
                     - o (…) any object or primitive
                     - type (string) name of the type, i.e. “string”, “function”, “number”, etc.
                     = (boolean) is given value is of given type
                    \*/
                    R.is = function (o, type) {
                        type = lowerCase.call(type);
                        if (type == "finite") {
                            return !isnan[has](+o);
                        }
                        if (type == "array") {
                            return o instanceof Array;
                        }
                        return type == "null" && o === null || type == (typeof o === 'undefined' ? 'undefined' : _typeof(o)) && o !== null || type == "object" && o === Object(o) || type == "array" && Array.isArray && Array.isArray(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
                    };

                    function clone(obj) {
                        if (typeof obj == "function" || Object(obj) !== obj) {
                            return obj;
                        }
                        var res = new obj.constructor();
                        for (var key in obj) {
                            if (obj[has](key)) {
                                res[key] = clone(obj[key]);
                            }
                        }return res;
                    }

                    /*\
                     * Raphael.angle
                     [ method ]
                     **
                     * Returns angle between two or three points
                     > Parameters
                     - x1 (number) x coord of first point
                     - y1 (number) y coord of first point
                     - x2 (number) x coord of second point
                     - y2 (number) y coord of second point
                     - x3 (number) #optional x coord of third point
                     - y3 (number) #optional y coord of third point
                     = (number) angle in degrees.
                    \*/
                    R.angle = function (x1, y1, x2, y2, x3, y3) {
                        if (x3 == null) {
                            var x = x1 - x2,
                                y = y1 - y2;
                            if (!x && !y) {
                                return 0;
                            }
                            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
                        } else {
                            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
                        }
                    };
                    /*\
                     * Raphael.rad
                     [ method ]
                     **
                     * Transform angle to radians
                     > Parameters
                     - deg (number) angle in degrees
                     = (number) angle in radians.
                    \*/
                    R.rad = function (deg) {
                        return deg % 360 * PI / 180;
                    };
                    /*\
                     * Raphael.deg
                     [ method ]
                     **
                     * Transform angle to degrees
                     > Parameters
                     - rad (number) angle in radians
                     = (number) angle in degrees.
                    \*/
                    R.deg = function (rad) {
                        return Math.round(rad * 180 / PI % 360 * 1000) / 1000;
                    };
                    /*\
                     * Raphael.snapTo
                     [ method ]
                     **
                     * Snaps given value to given grid.
                     > Parameters
                     - values (array|number) given array of values or step of the grid
                     - value (number) value to adjust
                     - tolerance (number) #optional tolerance for snapping. Default is `10`.
                     = (number) adjusted value.
                    \*/
                    R.snapTo = function (values, value, tolerance) {
                        tolerance = R.is(tolerance, "finite") ? tolerance : 10;
                        if (R.is(values, array)) {
                            var i = values.length;
                            while (i--) {
                                if (abs(values[i] - value) <= tolerance) {
                                    return values[i];
                                }
                            }
                        } else {
                            values = +values;
                            var rem = value % values;
                            if (rem < tolerance) {
                                return value - rem;
                            }
                            if (rem > values - tolerance) {
                                return value - rem + values;
                            }
                        }
                        return value;
                    };

                    /*\
                     * Raphael.createUUID
                     [ method ]
                     **
                     * Returns RFC4122, version 4 ID
                    \*/
                    var createUUID = R.createUUID = function (uuidRegEx, uuidReplacer) {
                        return function () {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
                        };
                    }(/[xy]/g, function (c) {
                        var r = math.random() * 16 | 0,
                            v = c == "x" ? r : r & 3 | 8;
                        return v.toString(16);
                    });

                    /*\
                     * Raphael.setWindow
                     [ method ]
                     **
                     * Used when you need to draw in `&lt;iframe>`. Switched window to the iframe one.
                     > Parameters
                     - newwin (window) new window object
                    \*/
                    R.setWindow = function (newwin) {
                        eve("raphael.setWindow", R, g.win, newwin);
                        g.win = newwin;
                        g.doc = g.win.document;
                        if (R._engine.initWin) {
                            R._engine.initWin(g.win);
                        }
                    };
                    var _toHex = function toHex(color) {
                        if (R.vml) {
                            // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
                            var trim = /^\s+|\s+$/g;
                            var bod;
                            try {
                                var docum = new ActiveXObject("htmlfile");
                                docum.write("<body>");
                                docum.close();
                                bod = docum.body;
                            } catch (e) {
                                bod = createPopup().document.body;
                            }
                            var range = bod.createTextRange();
                            _toHex = cacher(function (color) {
                                try {
                                    bod.style.color = Str(color).replace(trim, E);
                                    var value = range.queryCommandValue("ForeColor");
                                    value = (value & 255) << 16 | value & 65280 | (value & 16711680) >>> 16;
                                    return "#" + ("000000" + value.toString(16)).slice(-6);
                                } catch (e) {
                                    return "none";
                                }
                            });
                        } else {
                            var i = g.doc.createElement("i");
                            i.title = "Rapha\xebl Colour Picker";
                            i.style.display = "none";
                            g.doc.body.appendChild(i);
                            _toHex = cacher(function (color) {
                                i.style.color = color;
                                return g.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
                            });
                        }
                        return _toHex(color);
                    },
                        hsbtoString = function hsbtoString() {
                        return "hsb(" + [this.h, this.s, this.b] + ")";
                    },
                        hsltoString = function hsltoString() {
                        return "hsl(" + [this.h, this.s, this.l] + ")";
                    },
                        rgbtoString = function rgbtoString() {
                        return this.hex;
                    },
                        prepareRGB = function prepareRGB(r, g, b) {
                        if (g == null && R.is(r, "object") && "r" in r && "g" in r && "b" in r) {
                            b = r.b;
                            g = r.g;
                            r = r.r;
                        }
                        if (g == null && R.is(r, string)) {
                            var clr = R.getRGB(r);
                            r = clr.r;
                            g = clr.g;
                            b = clr.b;
                        }
                        if (r > 1 || g > 1 || b > 1) {
                            r /= 255;
                            g /= 255;
                            b /= 255;
                        }

                        return [r, g, b];
                    },
                        packageRGB = function packageRGB(r, g, b, o) {
                        r *= 255;
                        g *= 255;
                        b *= 255;
                        var rgb = {
                            r: r,
                            g: g,
                            b: b,
                            hex: R.rgb(r, g, b),
                            toString: rgbtoString
                        };
                        R.is(o, "finite") && (rgb.opacity = o);
                        return rgb;
                    };

                    /*\
                     * Raphael.color
                     [ method ]
                     **
                     * Parses the color string and returns object with all values for the given color.
                     > Parameters
                     - clr (string) color string in one of the supported formats (see @Raphael.getRGB)
                     = (object) Combined RGB & HSB object in format:
                     o {
                     o     r (number) red,
                     o     g (number) green,
                     o     b (number) blue,
                     o     hex (string) color in HTML/CSS format: #••••••,
                     o     error (boolean) `true` if string can’t be parsed,
                     o     h (number) hue,
                     o     s (number) saturation,
                     o     v (number) value (brightness),
                     o     l (number) lightness
                     o }
                    \*/
                    R.color = function (clr) {
                        var rgb;
                        if (R.is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
                            rgb = R.hsb2rgb(clr);
                            clr.r = rgb.r;
                            clr.g = rgb.g;
                            clr.b = rgb.b;
                            clr.hex = rgb.hex;
                        } else if (R.is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
                            rgb = R.hsl2rgb(clr);
                            clr.r = rgb.r;
                            clr.g = rgb.g;
                            clr.b = rgb.b;
                            clr.hex = rgb.hex;
                        } else {
                            if (R.is(clr, "string")) {
                                clr = R.getRGB(clr);
                            }
                            if (R.is(clr, "object") && "r" in clr && "g" in clr && "b" in clr) {
                                rgb = R.rgb2hsl(clr);
                                clr.h = rgb.h;
                                clr.s = rgb.s;
                                clr.l = rgb.l;
                                rgb = R.rgb2hsb(clr);
                                clr.v = rgb.b;
                            } else {
                                clr = { hex: "none" };
                                clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
                            }
                        }
                        clr.toString = rgbtoString;
                        return clr;
                    };
                    /*\
                     * Raphael.hsb2rgb
                     [ method ]
                     **
                     * Converts HSB values to RGB object.
                     > Parameters
                     - h (number) hue
                     - s (number) saturation
                     - v (number) value or brightness
                     = (object) RGB object in format:
                     o {
                     o     r (number) red,
                     o     g (number) green,
                     o     b (number) blue,
                     o     hex (string) color in HTML/CSS format: #••••••
                     o }
                    \*/
                    R.hsb2rgb = function (h, s, v, o) {
                        if (this.is(h, "object") && "h" in h && "s" in h && "b" in h) {
                            v = h.b;
                            s = h.s;
                            o = h.o;
                            h = h.h;
                        }
                        h *= 360;
                        var R, G, B, X, C;
                        h = h % 360 / 60;
                        C = v * s;
                        X = C * (1 - abs(h % 2 - 1));
                        R = G = B = v - C;

                        h = ~~h;
                        R += [C, X, 0, 0, X, C][h];
                        G += [X, C, C, X, 0, 0][h];
                        B += [0, 0, X, C, C, X][h];
                        return packageRGB(R, G, B, o);
                    };
                    /*\
                     * Raphael.hsl2rgb
                     [ method ]
                     **
                     * Converts HSL values to RGB object.
                     > Parameters
                     - h (number) hue
                     - s (number) saturation
                     - l (number) luminosity
                     = (object) RGB object in format:
                     o {
                     o     r (number) red,
                     o     g (number) green,
                     o     b (number) blue,
                     o     hex (string) color in HTML/CSS format: #••••••
                     o }
                    \*/
                    R.hsl2rgb = function (h, s, l, o) {
                        if (this.is(h, "object") && "h" in h && "s" in h && "l" in h) {
                            l = h.l;
                            s = h.s;
                            h = h.h;
                        }
                        if (h > 1 || s > 1 || l > 1) {
                            h /= 360;
                            s /= 100;
                            l /= 100;
                        }
                        h *= 360;
                        var R, G, B, X, C;
                        h = h % 360 / 60;
                        C = 2 * s * (l < .5 ? l : 1 - l);
                        X = C * (1 - abs(h % 2 - 1));
                        R = G = B = l - C / 2;

                        h = ~~h;
                        R += [C, X, 0, 0, X, C][h];
                        G += [X, C, C, X, 0, 0][h];
                        B += [0, 0, X, C, C, X][h];
                        return packageRGB(R, G, B, o);
                    };
                    /*\
                     * Raphael.rgb2hsb
                     [ method ]
                     **
                     * Converts RGB values to HSB object.
                     > Parameters
                     - r (number) red
                     - g (number) green
                     - b (number) blue
                     = (object) HSB object in format:
                     o {
                     o     h (number) hue
                     o     s (number) saturation
                     o     b (number) brightness
                     o }
                    \*/
                    R.rgb2hsb = function (r, g, b) {
                        b = prepareRGB(r, g, b);
                        r = b[0];
                        g = b[1];
                        b = b[2];

                        var H, S, V, C;
                        V = mmax(r, g, b);
                        C = V - mmin(r, g, b);
                        H = C == 0 ? null : V == r ? (g - b) / C : V == g ? (b - r) / C + 2 : (r - g) / C + 4;
                        H = (H + 360) % 6 * 60 / 360;
                        S = C == 0 ? 0 : C / V;
                        return { h: H, s: S, b: V, toString: hsbtoString };
                    };
                    /*\
                     * Raphael.rgb2hsl
                     [ method ]
                     **
                     * Converts RGB values to HSL object.
                     > Parameters
                     - r (number) red
                     - g (number) green
                     - b (number) blue
                     = (object) HSL object in format:
                     o {
                     o     h (number) hue
                     o     s (number) saturation
                     o     l (number) luminosity
                     o }
                    \*/
                    R.rgb2hsl = function (r, g, b) {
                        b = prepareRGB(r, g, b);
                        r = b[0];
                        g = b[1];
                        b = b[2];

                        var H, S, L, M, m, C;
                        M = mmax(r, g, b);
                        m = mmin(r, g, b);
                        C = M - m;
                        H = C == 0 ? null : M == r ? (g - b) / C : M == g ? (b - r) / C + 2 : (r - g) / C + 4;
                        H = (H + 360) % 6 * 60 / 360;
                        L = (M + m) / 2;
                        S = C == 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L);
                        return { h: H, s: S, l: L, toString: hsltoString };
                    };
                    R._path2string = function () {
                        return this.join(",").replace(p2s, "$1");
                    };
                    function repush(array, item) {
                        for (var i = 0, ii = array.length; i < ii; i++) {
                            if (array[i] === item) {
                                return array.push(array.splice(i, 1)[0]);
                            }
                        }
                    }
                    function cacher(f, scope, postprocessor) {
                        function newf() {
                            var arg = Array.prototype.slice.call(arguments, 0),
                                args = arg.join('\u2400'),
                                cache = newf.cache = newf.cache || {},
                                count = newf.count = newf.count || [];
                            if (cache[has](args)) {
                                repush(count, args);
                                return postprocessor ? postprocessor(cache[args]) : cache[args];
                            }
                            count.length >= 1e3 && delete cache[count.shift()];
                            count.push(args);
                            cache[args] = f[apply](scope, arg);
                            return postprocessor ? postprocessor(cache[args]) : cache[args];
                        }
                        return newf;
                    }

                    var preload = R._preload = function (src, f) {
                        var img = g.doc.createElement("img");
                        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
                        img.onload = function () {
                            f.call(this);
                            this.onload = null;
                            g.doc.body.removeChild(this);
                        };
                        img.onerror = function () {
                            g.doc.body.removeChild(this);
                        };
                        g.doc.body.appendChild(img);
                        img.src = src;
                    };

                    function clrToString() {
                        return this.hex;
                    }

                    /*\
                     * Raphael.getRGB
                     [ method ]
                     **
                     * Parses colour string as RGB object
                     > Parameters
                     - colour (string) colour string in one of formats:
                     # <ul>
                     #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
                     #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
                     #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
                     #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
                     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
                     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
                     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
                     #     <li>hsl(•••, •••, •••) — same as hsb</li>
                     #     <li>hsl(•••%, •••%, •••%) — same as hsb</li>
                     # </ul>
                     = (object) RGB object in format:
                     o {
                     o     r (number) red,
                     o     g (number) green,
                     o     b (number) blue
                     o     hex (string) color in HTML/CSS format: #••••••,
                     o     error (boolean) true if string can’t be parsed
                     o }
                    \*/
                    R.getRGB = cacher(function (colour) {
                        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
                            return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString };
                        }
                        if (colour == "none") {
                            return { r: -1, g: -1, b: -1, hex: "none", toString: clrToString };
                        }
                        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = _toHex(colour));
                        var res,
                            red,
                            green,
                            blue,
                            opacity,
                            t,
                            values,
                            rgb = colour.match(colourRegExp);
                        if (rgb) {
                            if (rgb[2]) {
                                blue = toInt(rgb[2].substring(5), 16);
                                green = toInt(rgb[2].substring(3, 5), 16);
                                red = toInt(rgb[2].substring(1, 3), 16);
                            }
                            if (rgb[3]) {
                                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
                                green = toInt((t = rgb[3].charAt(2)) + t, 16);
                                red = toInt((t = rgb[3].charAt(1)) + t, 16);
                            }
                            if (rgb[4]) {
                                values = rgb[4][split](commaSpaces);
                                red = toFloat(values[0]);
                                values[0].slice(-1) == "%" && (red *= 2.55);
                                green = toFloat(values[1]);
                                values[1].slice(-1) == "%" && (green *= 2.55);
                                blue = toFloat(values[2]);
                                values[2].slice(-1) == "%" && (blue *= 2.55);
                                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
                                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                            }
                            if (rgb[5]) {
                                values = rgb[5][split](commaSpaces);
                                red = toFloat(values[0]);
                                values[0].slice(-1) == "%" && (red *= 2.55);
                                green = toFloat(values[1]);
                                values[1].slice(-1) == "%" && (green *= 2.55);
                                blue = toFloat(values[2]);
                                values[2].slice(-1) == "%" && (blue *= 2.55);
                                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
                                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                                return R.hsb2rgb(red, green, blue, opacity);
                            }
                            if (rgb[6]) {
                                values = rgb[6][split](commaSpaces);
                                red = toFloat(values[0]);
                                values[0].slice(-1) == "%" && (red *= 2.55);
                                green = toFloat(values[1]);
                                values[1].slice(-1) == "%" && (green *= 2.55);
                                blue = toFloat(values[2]);
                                values[2].slice(-1) == "%" && (blue *= 2.55);
                                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
                                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                                return R.hsl2rgb(red, green, blue, opacity);
                            }
                            rgb = { r: red, g: green, b: blue, toString: clrToString };
                            rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
                            R.is(opacity, "finite") && (rgb.opacity = opacity);
                            return rgb;
                        }
                        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString };
                    }, R);
                    /*\
                     * Raphael.hsb
                     [ method ]
                     **
                     * Converts HSB values to hex representation of the colour.
                     > Parameters
                     - h (number) hue
                     - s (number) saturation
                     - b (number) value or brightness
                     = (string) hex representation of the colour.
                    \*/
                    R.hsb = cacher(function (h, s, b) {
                        return R.hsb2rgb(h, s, b).hex;
                    });
                    /*\
                     * Raphael.hsl
                     [ method ]
                     **
                     * Converts HSL values to hex representation of the colour.
                     > Parameters
                     - h (number) hue
                     - s (number) saturation
                     - l (number) luminosity
                     = (string) hex representation of the colour.
                    \*/
                    R.hsl = cacher(function (h, s, l) {
                        return R.hsl2rgb(h, s, l).hex;
                    });
                    /*\
                     * Raphael.rgb
                     [ method ]
                     **
                     * Converts RGB values to hex representation of the colour.
                     > Parameters
                     - r (number) red
                     - g (number) green
                     - b (number) blue
                     = (string) hex representation of the colour.
                    \*/
                    R.rgb = cacher(function (r, g, b) {
                        function round(x) {
                            return x + 0.5 | 0;
                        }
                        return "#" + (16777216 | round(b) | round(g) << 8 | round(r) << 16).toString(16).slice(1);
                    });
                    /*\
                     * Raphael.getColor
                     [ method ]
                     **
                     * On each call returns next colour in the spectrum. To reset it back to red call @Raphael.getColor.reset
                     > Parameters
                     - value (number) #optional brightness, default is `0.75`
                     = (string) hex representation of the colour.
                    \*/
                    R.getColor = function (value) {
                        var start = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: value || .75 },
                            rgb = this.hsb2rgb(start.h, start.s, start.b);
                        start.h += .075;
                        if (start.h > 1) {
                            start.h = 0;
                            start.s -= .2;
                            start.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: start.b });
                        }
                        return rgb.hex;
                    };
                    /*\
                     * Raphael.getColor.reset
                     [ method ]
                     **
                     * Resets spectrum position for @Raphael.getColor back to red.
                    \*/
                    R.getColor.reset = function () {
                        delete this.start;
                    };

                    // http://schepers.cc/getting-to-the-point
                    function catmullRom2bezier(crp, z) {
                        var d = [];
                        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
                            var p = [{ x: +crp[i - 2], y: +crp[i - 1] }, { x: +crp[i], y: +crp[i + 1] }, { x: +crp[i + 2], y: +crp[i + 3] }, { x: +crp[i + 4], y: +crp[i + 5] }];
                            if (z) {
                                if (!i) {
                                    p[0] = { x: +crp[iLen - 2], y: +crp[iLen - 1] };
                                } else if (iLen - 4 == i) {
                                    p[3] = { x: +crp[0], y: +crp[1] };
                                } else if (iLen - 2 == i) {
                                    p[2] = { x: +crp[0], y: +crp[1] };
                                    p[3] = { x: +crp[2], y: +crp[3] };
                                }
                            } else {
                                if (iLen - 4 == i) {
                                    p[3] = p[2];
                                } else if (!i) {
                                    p[0] = { x: +crp[i], y: +crp[i + 1] };
                                }
                            }
                            d.push(["C", (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
                        }

                        return d;
                    }
                    /*\
                     * Raphael.parsePathString
                     [ method ]
                     **
                     * Utility method
                     **
                     * Parses given path string into an array of arrays of path segments.
                     > Parameters
                     - pathString (string|array) path string or array of segments (in the last case it will be returned straight away)
                     = (array) array of segments.
                    \*/
                    R.parsePathString = function (pathString) {
                        if (!pathString) {
                            return null;
                        }
                        var pth = paths(pathString);
                        if (pth.arr) {
                            return pathClone(pth.arr);
                        }

                        var paramCounts = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
                            data = [];
                        if (R.is(pathString, array) && R.is(pathString[0], array)) {
                            // rough assumption
                            data = pathClone(pathString);
                        }
                        if (!data.length) {
                            Str(pathString).replace(pathCommand, function (a, b, c) {
                                var params = [],
                                    name = b.toLowerCase();
                                c.replace(pathValues, function (a, b) {
                                    b && params.push(+b);
                                });
                                if (name == "m" && params.length > 2) {
                                    data.push([b][concat](params.splice(0, 2)));
                                    name = "l";
                                    b = b == "m" ? "l" : "L";
                                }
                                if (name == "r") {
                                    data.push([b][concat](params));
                                } else while (params.length >= paramCounts[name]) {
                                    data.push([b][concat](params.splice(0, paramCounts[name])));
                                    if (!paramCounts[name]) {
                                        break;
                                    }
                                }
                            });
                        }
                        data.toString = R._path2string;
                        pth.arr = pathClone(data);
                        return data;
                    };
                    /*\
                     * Raphael.parseTransformString
                     [ method ]
                     **
                     * Utility method
                     **
                     * Parses given path string into an array of transformations.
                     > Parameters
                     - TString (string|array) transform string or array of transformations (in the last case it will be returned straight away)
                     = (array) array of transformations.
                    \*/
                    R.parseTransformString = cacher(function (TString) {
                        if (!TString) {
                            return null;
                        }
                        var paramCounts = { r: 3, s: 4, t: 2, m: 6 },
                            data = [];
                        if (R.is(TString, array) && R.is(TString[0], array)) {
                            // rough assumption
                            data = pathClone(TString);
                        }
                        if (!data.length) {
                            Str(TString).replace(tCommand, function (a, b, c) {
                                var params = [],
                                    name = lowerCase.call(b);
                                c.replace(pathValues, function (a, b) {
                                    b && params.push(+b);
                                });
                                data.push([b][concat](params));
                            });
                        }
                        data.toString = R._path2string;
                        return data;
                    }, this, function (elem) {
                        if (!elem) return elem;
                        var newData = [];
                        for (var i = 0; i < elem.length; i++) {
                            var newLevel = [];
                            for (var j = 0; j < elem[i].length; j++) {
                                newLevel.push(elem[i][j]);
                            }
                            newData.push(newLevel);
                        }
                        return newData;
                    });
                    // PATHS
                    var paths = function paths(ps) {
                        var p = paths.ps = paths.ps || {};
                        if (p[ps]) {
                            p[ps].sleep = 100;
                        } else {
                            p[ps] = {
                                sleep: 100
                            };
                        }
                        setTimeout(function () {
                            for (var key in p) {
                                if (p[has](key) && key != ps) {
                                    p[key].sleep--;
                                    !p[key].sleep && delete p[key];
                                }
                            }
                        });
                        return p[ps];
                    };
                    /*\
                     * Raphael.findDotsAtSegment
                     [ method ]
                     **
                     * Utility method
                     **
                     * Find dot coordinates on the given cubic bezier curve at the given t.
                     > Parameters
                     - p1x (number) x of the first point of the curve
                     - p1y (number) y of the first point of the curve
                     - c1x (number) x of the first anchor of the curve
                     - c1y (number) y of the first anchor of the curve
                     - c2x (number) x of the second anchor of the curve
                     - c2y (number) y of the second anchor of the curve
                     - p2x (number) x of the second point of the curve
                     - p2y (number) y of the second point of the curve
                     - t (number) position on the curve (0..1)
                     = (object) point information in format:
                     o {
                     o     x: (number) x coordinate of the point
                     o     y: (number) y coordinate of the point
                     o     m: {
                     o         x: (number) x coordinate of the left anchor
                     o         y: (number) y coordinate of the left anchor
                     o     }
                     o     n: {
                     o         x: (number) x coordinate of the right anchor
                     o         y: (number) y coordinate of the right anchor
                     o     }
                     o     start: {
                     o         x: (number) x coordinate of the start of the curve
                     o         y: (number) y coordinate of the start of the curve
                     o     }
                     o     end: {
                     o         x: (number) x coordinate of the end of the curve
                     o         y: (number) y coordinate of the end of the curve
                     o     }
                     o     alpha: (number) angle of the curve derivative at the point
                     o }
                    \*/
                    R.findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
                        var t1 = 1 - t,
                            t13 = pow(t1, 3),
                            t12 = pow(t1, 2),
                            t2 = t * t,
                            t3 = t2 * t,
                            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
                            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
                            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
                            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
                            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
                            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
                            ax = t1 * p1x + t * c1x,
                            ay = t1 * p1y + t * c1y,
                            cx = t1 * c2x + t * p2x,
                            cy = t1 * c2y + t * p2y,
                            alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
                        (mx > nx || my < ny) && (alpha += 180);
                        return {
                            x: x,
                            y: y,
                            m: { x: mx, y: my },
                            n: { x: nx, y: ny },
                            start: { x: ax, y: ay },
                            end: { x: cx, y: cy },
                            alpha: alpha
                        };
                    };
                    /*\
                     * Raphael.bezierBBox
                     [ method ]
                     **
                     * Utility method
                     **
                     * Return bounding box of a given cubic bezier curve
                     > Parameters
                     - p1x (number) x of the first point of the curve
                     - p1y (number) y of the first point of the curve
                     - c1x (number) x of the first anchor of the curve
                     - c1y (number) y of the first anchor of the curve
                     - c2x (number) x of the second anchor of the curve
                     - c2y (number) y of the second anchor of the curve
                     - p2x (number) x of the second point of the curve
                     - p2y (number) y of the second point of the curve
                     * or
                     - bez (array) array of six points for bezier curve
                     = (object) point information in format:
                     o {
                     o     min: {
                     o         x: (number) x coordinate of the left point
                     o         y: (number) y coordinate of the top point
                     o     }
                     o     max: {
                     o         x: (number) x coordinate of the right point
                     o         y: (number) y coordinate of the bottom point
                     o     }
                     o }
                    \*/
                    R.bezierBBox = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
                        if (!R.is(p1x, "array")) {
                            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
                        }
                        var bbox = curveDim.apply(null, p1x);
                        return {
                            x: bbox.min.x,
                            y: bbox.min.y,
                            x2: bbox.max.x,
                            y2: bbox.max.y,
                            width: bbox.max.x - bbox.min.x,
                            height: bbox.max.y - bbox.min.y
                        };
                    };
                    /*\
                     * Raphael.isPointInsideBBox
                     [ method ]
                     **
                     * Utility method
                     **
                     * Returns `true` if given point is inside bounding boxes.
                     > Parameters
                     - bbox (string) bounding box
                     - x (string) x coordinate of the point
                     - y (string) y coordinate of the point
                     = (boolean) `true` if point inside
                    \*/
                    R.isPointInsideBBox = function (bbox, x, y) {
                        return x >= bbox.x && x <= bbox.x2 && y >= bbox.y && y <= bbox.y2;
                    };
                    /*\
                     * Raphael.isBBoxIntersect
                     [ method ]
                     **
                     * Utility method
                     **
                     * Returns `true` if two bounding boxes intersect
                     > Parameters
                     - bbox1 (string) first bounding box
                     - bbox2 (string) second bounding box
                     = (boolean) `true` if they intersect
                    \*/
                    R.isBBoxIntersect = function (bbox1, bbox2) {
                        var i = R.isPointInsideBBox;
                        return i(bbox2, bbox1.x, bbox1.y) || i(bbox2, bbox1.x2, bbox1.y) || i(bbox2, bbox1.x, bbox1.y2) || i(bbox2, bbox1.x2, bbox1.y2) || i(bbox1, bbox2.x, bbox2.y) || i(bbox1, bbox2.x2, bbox2.y) || i(bbox1, bbox2.x, bbox2.y2) || i(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
                    };
                    function base3(t, p1, p2, p3, p4) {
                        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
                            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
                        return t * t2 - 3 * p1 + 3 * p2;
                    }
                    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
                        if (z == null) {
                            z = 1;
                        }
                        z = z > 1 ? 1 : z < 0 ? 0 : z;
                        var z2 = z / 2,
                            n = 12,
                            Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816],
                            Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
                            sum = 0;
                        for (var i = 0; i < n; i++) {
                            var ct = z2 * Tvalues[i] + z2,
                                xbase = base3(ct, x1, x2, x3, x4),
                                ybase = base3(ct, y1, y2, y3, y4),
                                comb = xbase * xbase + ybase * ybase;
                            sum += Cvalues[i] * math.sqrt(comb);
                        }
                        return z2 * sum;
                    }
                    function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
                        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
                            return;
                        }
                        var t = 1,
                            step = t / 2,
                            t2 = t - step,
                            l,
                            e = .01;
                        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
                        while (abs(l - ll) > e) {
                            step /= 2;
                            t2 += (l < ll ? 1 : -1) * step;
                            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
                        }
                        return t2;
                    }
                    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
                        if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
                            return;
                        }
                        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
                            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
                            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

                        if (!denominator) {
                            return;
                        }
                        var px = nx / denominator,
                            py = ny / denominator,
                            px2 = +px.toFixed(2),
                            py2 = +py.toFixed(2);
                        if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
                            return;
                        }
                        return { x: px, y: py };
                    }
                    function inter(bez1, bez2) {
                        return interHelper(bez1, bez2);
                    }
                    function interCount(bez1, bez2) {
                        return interHelper(bez1, bez2, 1);
                    }
                    function interHelper(bez1, bez2, justCount) {
                        var bbox1 = R.bezierBBox(bez1),
                            bbox2 = R.bezierBBox(bez2);
                        if (!R.isBBoxIntersect(bbox1, bbox2)) {
                            return justCount ? 0 : [];
                        }
                        var l1 = bezlen.apply(0, bez1),
                            l2 = bezlen.apply(0, bez2),
                            n1 = mmax(~~(l1 / 5), 1),
                            n2 = mmax(~~(l2 / 5), 1),
                            dots1 = [],
                            dots2 = [],
                            xy = {},
                            res = justCount ? 0 : [];
                        for (var i = 0; i < n1 + 1; i++) {
                            var p = R.findDotsAtSegment.apply(R, bez1.concat(i / n1));
                            dots1.push({ x: p.x, y: p.y, t: i / n1 });
                        }
                        for (i = 0; i < n2 + 1; i++) {
                            p = R.findDotsAtSegment.apply(R, bez2.concat(i / n2));
                            dots2.push({ x: p.x, y: p.y, t: i / n2 });
                        }
                        for (i = 0; i < n1; i++) {
                            for (var j = 0; j < n2; j++) {
                                var di = dots1[i],
                                    di1 = dots1[i + 1],
                                    dj = dots2[j],
                                    dj1 = dots2[j + 1],
                                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                                if (is) {
                                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                                        continue;
                                    }
                                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                                    if (t1 >= 0 && t1 <= 1.001 && t2 >= 0 && t2 <= 1.001) {
                                        if (justCount) {
                                            res++;
                                        } else {
                                            res.push({
                                                x: is.x,
                                                y: is.y,
                                                t1: mmin(t1, 1),
                                                t2: mmin(t2, 1)
                                            });
                                        }
                                    }
                                }
                            }
                        }
                        return res;
                    }
                    /*\
                     * Raphael.pathIntersection
                     [ method ]
                     **
                     * Utility method
                     **
                     * Finds intersections of two paths
                     > Parameters
                     - path1 (string) path string
                     - path2 (string) path string
                     = (array) dots of intersection
                     o [
                     o     {
                     o         x: (number) x coordinate of the point
                     o         y: (number) y coordinate of the point
                     o         t1: (number) t value for segment of path1
                     o         t2: (number) t value for segment of path2
                     o         segment1: (number) order number for segment of path1
                     o         segment2: (number) order number for segment of path2
                     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1
                     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
                     o     }
                     o ]
                    \*/
                    R.pathIntersection = function (path1, path2) {
                        return interPathHelper(path1, path2);
                    };
                    R.pathIntersectionNumber = function (path1, path2) {
                        return interPathHelper(path1, path2, 1);
                    };
                    function interPathHelper(path1, path2, justCount) {
                        path1 = R._path2curve(path1);
                        path2 = R._path2curve(path2);
                        var x1,
                            y1,
                            x2,
                            y2,
                            x1m,
                            y1m,
                            x2m,
                            y2m,
                            bez1,
                            bez2,
                            res = justCount ? 0 : [];
                        for (var i = 0, ii = path1.length; i < ii; i++) {
                            var pi = path1[i];
                            if (pi[0] == "M") {
                                x1 = x1m = pi[1];
                                y1 = y1m = pi[2];
                            } else {
                                if (pi[0] == "C") {
                                    bez1 = [x1, y1].concat(pi.slice(1));
                                    x1 = bez1[6];
                                    y1 = bez1[7];
                                } else {
                                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                                    x1 = x1m;
                                    y1 = y1m;
                                }
                                for (var j = 0, jj = path2.length; j < jj; j++) {
                                    var pj = path2[j];
                                    if (pj[0] == "M") {
                                        x2 = x2m = pj[1];
                                        y2 = y2m = pj[2];
                                    } else {
                                        if (pj[0] == "C") {
                                            bez2 = [x2, y2].concat(pj.slice(1));
                                            x2 = bez2[6];
                                            y2 = bez2[7];
                                        } else {
                                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                                            x2 = x2m;
                                            y2 = y2m;
                                        }
                                        var intr = interHelper(bez1, bez2, justCount);
                                        if (justCount) {
                                            res += intr;
                                        } else {
                                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                                intr[k].segment1 = i;
                                                intr[k].segment2 = j;
                                                intr[k].bez1 = bez1;
                                                intr[k].bez2 = bez2;
                                            }
                                            res = res.concat(intr);
                                        }
                                    }
                                }
                            }
                        }
                        return res;
                    }
                    /*\
                     * Raphael.isPointInsidePath
                     [ method ]
                     **
                     * Utility method
                     **
                     * Returns `true` if given point is inside a given closed path.
                     > Parameters
                     - path (string) path string
                     - x (number) x of the point
                     - y (number) y of the point
                     = (boolean) true, if point is inside the path
                    \*/
                    R.isPointInsidePath = function (path, x, y) {
                        var bbox = R.pathBBox(path);
                        return R.isPointInsideBBox(bbox, x, y) && interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
                    };
                    R._removedFactory = function (methodname) {
                        return function () {
                            eve("raphael.log", null, 'Rapha\xEBl: you are calling to method \u201C' + methodname + '\u201D of removed object', methodname);
                        };
                    };
                    /*\
                     * Raphael.pathBBox
                     [ method ]
                     **
                     * Utility method
                     **
                     * Return bounding box of a given path
                     > Parameters
                     - path (string) path string
                     = (object) bounding box
                     o {
                     o     x: (number) x coordinate of the left top point of the box
                     o     y: (number) y coordinate of the left top point of the box
                     o     x2: (number) x coordinate of the right bottom point of the box
                     o     y2: (number) y coordinate of the right bottom point of the box
                     o     width: (number) width of the box
                     o     height: (number) height of the box
                     o     cx: (number) x coordinate of the center of the box
                     o     cy: (number) y coordinate of the center of the box
                     o }
                    \*/
                    var pathDimensions = R.pathBBox = function (path) {
                        var pth = paths(path);
                        if (pth.bbox) {
                            return clone(pth.bbox);
                        }
                        if (!path) {
                            return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
                        }
                        path = path2curve(path);
                        var x = 0,
                            y = 0,
                            X = [],
                            Y = [],
                            p;
                        for (var i = 0, ii = path.length; i < ii; i++) {
                            p = path[i];
                            if (p[0] == "M") {
                                x = p[1];
                                y = p[2];
                                X.push(x);
                                Y.push(y);
                            } else {
                                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                                X = X[concat](dim.min.x, dim.max.x);
                                Y = Y[concat](dim.min.y, dim.max.y);
                                x = p[5];
                                y = p[6];
                            }
                        }
                        var xmin = mmin[apply](0, X),
                            ymin = mmin[apply](0, Y),
                            xmax = mmax[apply](0, X),
                            ymax = mmax[apply](0, Y),
                            width = xmax - xmin,
                            height = ymax - ymin,
                            bb = {
                            x: xmin,
                            y: ymin,
                            x2: xmax,
                            y2: ymax,
                            width: width,
                            height: height,
                            cx: xmin + width / 2,
                            cy: ymin + height / 2
                        };
                        pth.bbox = clone(bb);
                        return bb;
                    },
                        pathClone = function pathClone(pathArray) {
                        var res = clone(pathArray);
                        res.toString = R._path2string;
                        return res;
                    },
                        pathToRelative = R._pathToRelative = function (pathArray) {
                        var pth = paths(pathArray);
                        if (pth.rel) {
                            return pathClone(pth.rel);
                        }
                        if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) {
                            // rough assumption
                            pathArray = R.parsePathString(pathArray);
                        }
                        var res = [],
                            x = 0,
                            y = 0,
                            mx = 0,
                            my = 0,
                            start = 0;
                        if (pathArray[0][0] == "M") {
                            x = pathArray[0][1];
                            y = pathArray[0][2];
                            mx = x;
                            my = y;
                            start++;
                            res.push(["M", x, y]);
                        }
                        for (var i = start, ii = pathArray.length; i < ii; i++) {
                            var r = res[i] = [],
                                pa = pathArray[i];
                            if (pa[0] != lowerCase.call(pa[0])) {
                                r[0] = lowerCase.call(pa[0]);
                                switch (r[0]) {
                                    case "a":
                                        r[1] = pa[1];
                                        r[2] = pa[2];
                                        r[3] = pa[3];
                                        r[4] = pa[4];
                                        r[5] = pa[5];
                                        r[6] = +(pa[6] - x).toFixed(3);
                                        r[7] = +(pa[7] - y).toFixed(3);
                                        break;
                                    case "v":
                                        r[1] = +(pa[1] - y).toFixed(3);
                                        break;
                                    case "m":
                                        mx = pa[1];
                                        my = pa[2];
                                    default:
                                        for (var j = 1, jj = pa.length; j < jj; j++) {
                                            r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                                        }
                                }
                            } else {
                                r = res[i] = [];
                                if (pa[0] == "m") {
                                    mx = pa[1] + x;
                                    my = pa[2] + y;
                                }
                                for (var k = 0, kk = pa.length; k < kk; k++) {
                                    res[i][k] = pa[k];
                                }
                            }
                            var len = res[i].length;
                            switch (res[i][0]) {
                                case "z":
                                    x = mx;
                                    y = my;
                                    break;
                                case "h":
                                    x += +res[i][len - 1];
                                    break;
                                case "v":
                                    y += +res[i][len - 1];
                                    break;
                                default:
                                    x += +res[i][len - 2];
                                    y += +res[i][len - 1];
                            }
                        }
                        res.toString = R._path2string;
                        pth.rel = pathClone(res);
                        return res;
                    },
                        pathToAbsolute = R._pathToAbsolute = function (pathArray) {
                        var pth = paths(pathArray);
                        if (pth.abs) {
                            return pathClone(pth.abs);
                        }
                        if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) {
                            // rough assumption
                            pathArray = R.parsePathString(pathArray);
                        }
                        if (!pathArray || !pathArray.length) {
                            return [["M", 0, 0]];
                        }
                        var res = [],
                            x = 0,
                            y = 0,
                            mx = 0,
                            my = 0,
                            start = 0;
                        if (pathArray[0][0] == "M") {
                            x = +pathArray[0][1];
                            y = +pathArray[0][2];
                            mx = x;
                            my = y;
                            start++;
                            res[0] = ["M", x, y];
                        }
                        var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
                        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
                            res.push(r = []);
                            pa = pathArray[i];
                            if (pa[0] != upperCase.call(pa[0])) {
                                r[0] = upperCase.call(pa[0]);
                                switch (r[0]) {
                                    case "A":
                                        r[1] = pa[1];
                                        r[2] = pa[2];
                                        r[3] = pa[3];
                                        r[4] = pa[4];
                                        r[5] = pa[5];
                                        r[6] = +(pa[6] + x);
                                        r[7] = +(pa[7] + y);
                                        break;
                                    case "V":
                                        r[1] = +pa[1] + y;
                                        break;
                                    case "H":
                                        r[1] = +pa[1] + x;
                                        break;
                                    case "R":
                                        var dots = [x, y][concat](pa.slice(1));
                                        for (var j = 2, jj = dots.length; j < jj; j++) {
                                            dots[j] = +dots[j] + x;
                                            dots[++j] = +dots[j] + y;
                                        }
                                        res.pop();
                                        res = res[concat](catmullRom2bezier(dots, crz));
                                        break;
                                    case "M":
                                        mx = +pa[1] + x;
                                        my = +pa[2] + y;
                                    default:
                                        for (j = 1, jj = pa.length; j < jj; j++) {
                                            r[j] = +pa[j] + (j % 2 ? x : y);
                                        }
                                }
                            } else if (pa[0] == "R") {
                                dots = [x, y][concat](pa.slice(1));
                                res.pop();
                                res = res[concat](catmullRom2bezier(dots, crz));
                                r = ["R"][concat](pa.slice(-2));
                            } else {
                                for (var k = 0, kk = pa.length; k < kk; k++) {
                                    r[k] = pa[k];
                                }
                            }
                            switch (r[0]) {
                                case "Z":
                                    x = mx;
                                    y = my;
                                    break;
                                case "H":
                                    x = r[1];
                                    break;
                                case "V":
                                    y = r[1];
                                    break;
                                case "M":
                                    mx = r[r.length - 2];
                                    my = r[r.length - 1];
                                default:
                                    x = r[r.length - 2];
                                    y = r[r.length - 1];
                            }
                        }
                        res.toString = R._path2string;
                        pth.abs = pathClone(res);
                        return res;
                    },
                        l2c = function l2c(x1, y1, x2, y2) {
                        return [x1, y1, x2, y2, x2, y2];
                    },
                        q2c = function q2c(x1, y1, ax, ay, x2, y2) {
                        var _13 = 1 / 3,
                            _23 = 2 / 3;
                        return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
                    },
                        a2c = function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
                        // for more information of where this math came from visit:
                        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
                        var _120 = PI * 120 / 180,
                            rad = PI / 180 * (+angle || 0),
                            res = [],
                            xy,
                            rotate = cacher(function (x, y, rad) {
                            var X = x * math.cos(rad) - y * math.sin(rad),
                                Y = x * math.sin(rad) + y * math.cos(rad);
                            return { x: X, y: Y };
                        });
                        if (!recursive) {
                            xy = rotate(x1, y1, -rad);
                            x1 = xy.x;
                            y1 = xy.y;
                            xy = rotate(x2, y2, -rad);
                            x2 = xy.x;
                            y2 = xy.y;
                            var cos = math.cos(PI / 180 * angle),
                                sin = math.sin(PI / 180 * angle),
                                x = (x1 - x2) / 2,
                                y = (y1 - y2) / 2;
                            var h = x * x / (rx * rx) + y * y / (ry * ry);
                            if (h > 1) {
                                h = math.sqrt(h);
                                rx = h * rx;
                                ry = h * ry;
                            }
                            var rx2 = rx * rx,
                                ry2 = ry * ry,
                                k = (large_arc_flag == sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                                cx = k * rx * y / ry + (x1 + x2) / 2,
                                cy = k * -ry * x / rx + (y1 + y2) / 2,
                                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

                            f1 = x1 < cx ? PI - f1 : f1;
                            f2 = x2 < cx ? PI - f2 : f2;
                            f1 < 0 && (f1 = PI * 2 + f1);
                            f2 < 0 && (f2 = PI * 2 + f2);
                            if (sweep_flag && f1 > f2) {
                                f1 = f1 - PI * 2;
                            }
                            if (!sweep_flag && f2 > f1) {
                                f2 = f2 - PI * 2;
                            }
                        } else {
                            f1 = recursive[0];
                            f2 = recursive[1];
                            cx = recursive[2];
                            cy = recursive[3];
                        }
                        var df = f2 - f1;
                        if (abs(df) > _120) {
                            var f2old = f2,
                                x2old = x2,
                                y2old = y2;
                            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
                            x2 = cx + rx * math.cos(f2);
                            y2 = cy + ry * math.sin(f2);
                            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
                        }
                        df = f2 - f1;
                        var c1 = math.cos(f1),
                            s1 = math.sin(f1),
                            c2 = math.cos(f2),
                            s2 = math.sin(f2),
                            t = math.tan(df / 4),
                            hx = 4 / 3 * rx * t,
                            hy = 4 / 3 * ry * t,
                            m1 = [x1, y1],
                            m2 = [x1 + hx * s1, y1 - hy * c1],
                            m3 = [x2 + hx * s2, y2 - hy * c2],
                            m4 = [x2, y2];
                        m2[0] = 2 * m1[0] - m2[0];
                        m2[1] = 2 * m1[1] - m2[1];
                        if (recursive) {
                            return [m2, m3, m4][concat](res);
                        } else {
                            res = [m2, m3, m4][concat](res).join()[split](",");
                            var newres = [];
                            for (var i = 0, ii = res.length; i < ii; i++) {
                                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
                            }
                            return newres;
                        }
                    },
                        findDotAtSegment = function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
                        var t1 = 1 - t;
                        return {
                            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
                            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
                        };
                    },
                        curveDim = cacher(function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
                        var a = c2x - 2 * c1x + p1x - (p2x - 2 * c2x + c1x),
                            b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
                            c = p1x - c1x,
                            t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
                            t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
                            y = [p1y, p2y],
                            x = [p1x, p2x],
                            dot;
                        abs(t1) > "1e12" && (t1 = .5);
                        abs(t2) > "1e12" && (t2 = .5);
                        if (t1 > 0 && t1 < 1) {
                            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
                            x.push(dot.x);
                            y.push(dot.y);
                        }
                        if (t2 > 0 && t2 < 1) {
                            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
                            x.push(dot.x);
                            y.push(dot.y);
                        }
                        a = c2y - 2 * c1y + p1y - (p2y - 2 * c2y + c1y);
                        b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
                        c = p1y - c1y;
                        t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
                        t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
                        abs(t1) > "1e12" && (t1 = .5);
                        abs(t2) > "1e12" && (t2 = .5);
                        if (t1 > 0 && t1 < 1) {
                            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
                            x.push(dot.x);
                            y.push(dot.y);
                        }
                        if (t2 > 0 && t2 < 1) {
                            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
                            x.push(dot.x);
                            y.push(dot.y);
                        }
                        return {
                            min: { x: mmin[apply](0, x), y: mmin[apply](0, y) },
                            max: { x: mmax[apply](0, x), y: mmax[apply](0, y) }
                        };
                    }),
                        path2curve = R._path2curve = cacher(function (path, path2) {
                        var pth = !path2 && paths(path);
                        if (!path2 && pth.curve) {
                            return pathClone(pth.curve);
                        }
                        var p = pathToAbsolute(path),
                            p2 = path2 && pathToAbsolute(path2),
                            attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                            attrs2 = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                            processPath = function processPath(path, d, pcom) {
                            var nx,
                                ny,
                                tq = { T: 1, Q: 1 };
                            if (!path) {
                                return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                            }
                            !(path[0] in tq) && (d.qx = d.qy = null);
                            switch (path[0]) {
                                case "M":
                                    d.X = path[1];
                                    d.Y = path[2];
                                    break;
                                case "A":
                                    path = ["C"][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
                                    break;
                                case "S":
                                    if (pcom == "C" || pcom == "S") {
                                        // In "S" case we have to take into account, if the previous command is C/S.
                                        nx = d.x * 2 - d.bx; // And reflect the previous
                                        ny = d.y * 2 - d.by; // command's control point relative to the current point.
                                    } else {
                                        // or some else or nothing
                                        nx = d.x;
                                        ny = d.y;
                                    }
                                    path = ["C", nx, ny][concat](path.slice(1));
                                    break;
                                case "T":
                                    if (pcom == "Q" || pcom == "T") {
                                        // In "T" case we have to take into account, if the previous command is Q/T.
                                        d.qx = d.x * 2 - d.qx; // And make a reflection similar
                                        d.qy = d.y * 2 - d.qy; // to case "S".
                                    } else {
                                        // or something else or nothing
                                        d.qx = d.x;
                                        d.qy = d.y;
                                    }
                                    path = ["C"][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                                    break;
                                case "Q":
                                    d.qx = path[1];
                                    d.qy = path[2];
                                    path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                                    break;
                                case "L":
                                    path = ["C"][concat](l2c(d.x, d.y, path[1], path[2]));
                                    break;
                                case "H":
                                    path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));
                                    break;
                                case "V":
                                    path = ["C"][concat](l2c(d.x, d.y, d.x, path[1]));
                                    break;
                                case "Z":
                                    path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));
                                    break;
                            }
                            return path;
                        },
                            fixArc = function fixArc(pp, i) {
                            if (pp[i].length > 7) {
                                pp[i].shift();
                                var pi = pp[i];
                                while (pi.length) {
                                    pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                                    p2 && (pcoms2[i] = "A"); // the same as above
                                    pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));
                                }
                                pp.splice(i, 1);
                                ii = mmax(p.length, p2 && p2.length || 0);
                            }
                        },
                            fixM = function fixM(path1, path2, a1, a2, i) {
                            if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                                path2.splice(i, 0, ["M", a2.x, a2.y]);
                                a1.bx = 0;
                                a1.by = 0;
                                a1.x = path1[i][1];
                                a1.y = path1[i][2];
                                ii = mmax(p.length, p2 && p2.length || 0);
                            }
                        },
                            pcoms1 = [],
                            // path commands of original path p
                        pcoms2 = [],
                            // path commands of original path p2
                        pfirst = "",
                            // temporary holder for original path command
                        pcom = ""; // holder for previous path command of original path
                        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
                            p[i] && (pfirst = p[i][0]); // save current path command

                            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
                                {
                                    pcoms1[i] = pfirst; // Save current path command
                                    i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
                                }
                            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

                            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
                            // which may produce multiple C:s
                            // so we have to make sure that C is also C in original path

                            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

                            if (p2) {
                                // the same procedures is done to p2
                                p2[i] && (pfirst = p2[i][0]);
                                if (pfirst != "C") {
                                    pcoms2[i] = pfirst;
                                    i && (pcom = pcoms2[i - 1]);
                                }
                                p2[i] = processPath(p2[i], attrs2, pcom);

                                if (pcoms2[i] != "A" && pfirst == "C") pcoms2[i] = "C";

                                fixArc(p2, i);
                            }
                            fixM(p, p2, attrs, attrs2, i);
                            fixM(p2, p, attrs2, attrs, i);
                            var seg = p[i],
                                seg2 = p2 && p2[i],
                                seglen = seg.length,
                                seg2len = p2 && seg2.length;
                            attrs.x = seg[seglen - 2];
                            attrs.y = seg[seglen - 1];
                            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
                            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
                            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
                            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
                            attrs2.x = p2 && seg2[seg2len - 2];
                            attrs2.y = p2 && seg2[seg2len - 1];
                        }
                        if (!p2) {
                            pth.curve = pathClone(p);
                        }
                        return p2 ? [p, p2] : p;
                    }, null, pathClone),
                        parseDots = R._parseDots = cacher(function (gradient) {
                        var dots = [];
                        for (var i = 0, ii = gradient.length; i < ii; i++) {
                            var dot = {},
                                par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
                            dot.color = R.getRGB(par[1]);
                            if (dot.color.error) {
                                return null;
                            }
                            dot.opacity = dot.color.opacity;
                            dot.color = dot.color.hex;
                            par[2] && (dot.offset = par[2] + "%");
                            dots.push(dot);
                        }
                        for (i = 1, ii = dots.length - 1; i < ii; i++) {
                            if (!dots[i].offset) {
                                var start = toFloat(dots[i - 1].offset || 0),
                                    end = 0;
                                for (var j = i + 1; j < ii; j++) {
                                    if (dots[j].offset) {
                                        end = dots[j].offset;
                                        break;
                                    }
                                }
                                if (!end) {
                                    end = 100;
                                    j = ii;
                                }
                                end = toFloat(end);
                                var d = (end - start) / (j - i + 1);
                                for (; i < j; i++) {
                                    start += d;
                                    dots[i].offset = start + "%";
                                }
                            }
                        }
                        return dots;
                    }),
                        tear = R._tear = function (el, paper) {
                        el == paper.top && (paper.top = el.prev);
                        el == paper.bottom && (paper.bottom = el.next);
                        el.next && (el.next.prev = el.prev);
                        el.prev && (el.prev.next = el.next);
                    },
                        tofront = R._tofront = function (el, paper) {
                        if (paper.top === el) {
                            return;
                        }
                        tear(el, paper);
                        el.next = null;
                        el.prev = paper.top;
                        paper.top.next = el;
                        paper.top = el;
                    },
                        toback = R._toback = function (el, paper) {
                        if (paper.bottom === el) {
                            return;
                        }
                        tear(el, paper);
                        el.next = paper.bottom;
                        el.prev = null;
                        paper.bottom.prev = el;
                        paper.bottom = el;
                    },
                        insertafter = R._insertafter = function (el, el2, paper) {
                        tear(el, paper);
                        el2 == paper.top && (paper.top = el);
                        el2.next && (el2.next.prev = el);
                        el.next = el2.next;
                        el.prev = el2;
                        el2.next = el;
                    },
                        insertbefore = R._insertbefore = function (el, el2, paper) {
                        tear(el, paper);
                        el2 == paper.bottom && (paper.bottom = el);
                        el2.prev && (el2.prev.next = el);
                        el.prev = el2.prev;
                        el2.prev = el;
                        el.next = el2;
                    },

                    /*\
                     * Raphael.toMatrix
                     [ method ]
                     **
                     * Utility method
                     **
                     * Returns matrix of transformations applied to a given path
                     > Parameters
                     - path (string) path string
                     - transform (string|array) transformation string
                     = (object) @Matrix
                    \*/
                    toMatrix = R.toMatrix = function (path, transform) {
                        var bb = pathDimensions(path),
                            el = {
                            _: {
                                transform: E
                            },
                            getBBox: function getBBox() {
                                return bb;
                            }
                        };
                        extractTransform(el, transform);
                        return el.matrix;
                    },

                    /*\
                     * Raphael.transformPath
                     [ method ]
                     **
                     * Utility method
                     **
                     * Returns path transformed by a given transformation
                     > Parameters
                     - path (string) path string
                     - transform (string|array) transformation string
                     = (string) path
                    \*/
                    transformPath = R.transformPath = function (path, transform) {
                        return mapPath(path, toMatrix(path, transform));
                    },
                        extractTransform = R._extractTransform = function (el, tstr) {
                        if (tstr == null) {
                            return el._.transform;
                        }
                        tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
                        var tdata = R.parseTransformString(tstr),
                            deg = 0,
                            dx = 0,
                            dy = 0,
                            sx = 1,
                            sy = 1,
                            _ = el._,
                            m = new Matrix();
                        _.transform = tdata || [];
                        if (tdata) {
                            for (var i = 0, ii = tdata.length; i < ii; i++) {
                                var t = tdata[i],
                                    tlen = t.length,
                                    command = Str(t[0]).toLowerCase(),
                                    absolute = t[0] != command,
                                    inver = absolute ? m.invert() : 0,
                                    x1,
                                    y1,
                                    x2,
                                    y2,
                                    bb;
                                if (command == "t" && tlen == 3) {
                                    if (absolute) {
                                        x1 = inver.x(0, 0);
                                        y1 = inver.y(0, 0);
                                        x2 = inver.x(t[1], t[2]);
                                        y2 = inver.y(t[1], t[2]);
                                        m.translate(x2 - x1, y2 - y1);
                                    } else {
                                        m.translate(t[1], t[2]);
                                    }
                                } else if (command == "r") {
                                    if (tlen == 2) {
                                        bb = bb || el.getBBox(1);
                                        m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                                        deg += t[1];
                                    } else if (tlen == 4) {
                                        if (absolute) {
                                            x2 = inver.x(t[2], t[3]);
                                            y2 = inver.y(t[2], t[3]);
                                            m.rotate(t[1], x2, y2);
                                        } else {
                                            m.rotate(t[1], t[2], t[3]);
                                        }
                                        deg += t[1];
                                    }
                                } else if (command == "s") {
                                    if (tlen == 2 || tlen == 3) {
                                        bb = bb || el.getBBox(1);
                                        m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                                        sx *= t[1];
                                        sy *= t[tlen - 1];
                                    } else if (tlen == 5) {
                                        if (absolute) {
                                            x2 = inver.x(t[3], t[4]);
                                            y2 = inver.y(t[3], t[4]);
                                            m.scale(t[1], t[2], x2, y2);
                                        } else {
                                            m.scale(t[1], t[2], t[3], t[4]);
                                        }
                                        sx *= t[1];
                                        sy *= t[2];
                                    }
                                } else if (command == "m" && tlen == 7) {
                                    m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
                                }
                                _.dirtyT = 1;
                                el.matrix = m;
                            }
                        }

                        /*\
                         * Element.matrix
                         [ property (object) ]
                         **
                         * Keeps @Matrix object, which represents element transformation
                        \*/
                        el.matrix = m;

                        _.sx = sx;
                        _.sy = sy;
                        _.deg = deg;
                        _.dx = dx = m.e;
                        _.dy = dy = m.f;

                        if (sx == 1 && sy == 1 && !deg && _.bbox) {
                            _.bbox.x += +dx;
                            _.bbox.y += +dy;
                        } else {
                            _.dirtyT = 1;
                        }
                    },
                        getEmpty = function getEmpty(item) {
                        var l = item[0];
                        switch (l.toLowerCase()) {
                            case "t":
                                return [l, 0, 0];
                            case "m":
                                return [l, 1, 0, 0, 1, 0, 0];
                            case "r":
                                if (item.length == 4) {
                                    return [l, 0, item[2], item[3]];
                                } else {
                                    return [l, 0];
                                }
                            case "s":
                                if (item.length == 5) {
                                    return [l, 1, 1, item[3], item[4]];
                                } else if (item.length == 3) {
                                    return [l, 1, 1];
                                } else {
                                    return [l, 1];
                                }
                        }
                    },
                        equaliseTransform = R._equaliseTransform = function (t1, t2) {
                        t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
                        t1 = R.parseTransformString(t1) || [];
                        t2 = R.parseTransformString(t2) || [];
                        var maxlength = mmax(t1.length, t2.length),
                            from = [],
                            to = [],
                            i = 0,
                            j,
                            jj,
                            tt1,
                            tt2;
                        for (; i < maxlength; i++) {
                            tt1 = t1[i] || getEmpty(t2[i]);
                            tt2 = t2[i] || getEmpty(tt1);
                            if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
                                return;
                            }
                            from[i] = [];
                            to[i] = [];
                            for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {
                                j in tt1 && (from[i][j] = tt1[j]);
                                j in tt2 && (to[i][j] = tt2[j]);
                            }
                        }
                        return {
                            from: from,
                            to: to
                        };
                    };
                    R._getContainer = function (x, y, w, h) {
                        var container;
                        container = h == null && !R.is(x, "object") ? g.doc.getElementById(x) : x;
                        if (container == null) {
                            return;
                        }
                        if (container.tagName) {
                            if (y == null) {
                                return {
                                    container: container,
                                    width: container.style.pixelWidth || container.offsetWidth,
                                    height: container.style.pixelHeight || container.offsetHeight
                                };
                            } else {
                                return {
                                    container: container,
                                    width: y,
                                    height: w
                                };
                            }
                        }
                        return {
                            container: 1,
                            x: x,
                            y: y,
                            width: w,
                            height: h
                        };
                    };
                    /*\
                     * Raphael.pathToRelative
                     [ method ]
                     **
                     * Utility method
                     **
                     * Converts path to relative form
                     > Parameters
                     - pathString (string|array) path string or array of segments
                     = (array) array of segments.
                    \*/
                    R.pathToRelative = pathToRelative;
                    R._engine = {};
                    /*\
                     * Raphael.path2curve
                     [ method ]
                     **
                     * Utility method
                     **
                     * Converts path to a new path where all segments are cubic bezier curves.
                     > Parameters
                     - pathString (string|array) path string or array of segments
                     = (array) array of segments.
                    \*/
                    R.path2curve = path2curve;
                    /*\
                     * Raphael.matrix
                     [ method ]
                     **
                     * Utility method
                     **
                     * Returns matrix based on given parameters.
                     > Parameters
                     - a (number)
                     - b (number)
                     - c (number)
                     - d (number)
                     - e (number)
                     - f (number)
                     = (object) @Matrix
                    \*/
                    R.matrix = function (a, b, c, d, e, f) {
                        return new Matrix(a, b, c, d, e, f);
                    };
                    function Matrix(a, b, c, d, e, f) {
                        if (a != null) {
                            this.a = +a;
                            this.b = +b;
                            this.c = +c;
                            this.d = +d;
                            this.e = +e;
                            this.f = +f;
                        } else {
                            this.a = 1;
                            this.b = 0;
                            this.c = 0;
                            this.d = 1;
                            this.e = 0;
                            this.f = 0;
                        }
                    }
                    (function (matrixproto) {
                        /*\
                         * Matrix.add
                         [ method ]
                         **
                         * Adds given matrix to existing one.
                         > Parameters
                         - a (number)
                         - b (number)
                         - c (number)
                         - d (number)
                         - e (number)
                         - f (number)
                         or
                         - matrix (object) @Matrix
                        \*/
                        matrixproto.add = function (a, b, c, d, e, f) {
                            var out = [[], [], []],
                                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
                                x,
                                y,
                                z,
                                res;

                            if (a && a instanceof Matrix) {
                                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
                            }

                            for (x = 0; x < 3; x++) {
                                for (y = 0; y < 3; y++) {
                                    res = 0;
                                    for (z = 0; z < 3; z++) {
                                        res += m[x][z] * matrix[z][y];
                                    }
                                    out[x][y] = res;
                                }
                            }
                            this.a = out[0][0];
                            this.b = out[1][0];
                            this.c = out[0][1];
                            this.d = out[1][1];
                            this.e = out[0][2];
                            this.f = out[1][2];
                        };
                        /*\
                         * Matrix.invert
                         [ method ]
                         **
                         * Returns inverted version of the matrix
                         = (object) @Matrix
                        \*/
                        matrixproto.invert = function () {
                            var me = this,
                                x = me.a * me.d - me.b * me.c;
                            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
                        };
                        /*\
                         * Matrix.clone
                         [ method ]
                         **
                         * Returns copy of the matrix
                         = (object) @Matrix
                        \*/
                        matrixproto.clone = function () {
                            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
                        };
                        /*\
                         * Matrix.translate
                         [ method ]
                         **
                         * Translate the matrix
                         > Parameters
                         - x (number)
                         - y (number)
                        \*/
                        matrixproto.translate = function (x, y) {
                            this.add(1, 0, 0, 1, x, y);
                        };
                        /*\
                         * Matrix.scale
                         [ method ]
                         **
                         * Scales the matrix
                         > Parameters
                         - x (number)
                         - y (number) #optional
                         - cx (number) #optional
                         - cy (number) #optional
                        \*/
                        matrixproto.scale = function (x, y, cx, cy) {
                            y == null && (y = x);
                            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
                            this.add(x, 0, 0, y, 0, 0);
                            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
                        };
                        /*\
                         * Matrix.rotate
                         [ method ]
                         **
                         * Rotates the matrix
                         > Parameters
                         - a (number)
                         - x (number)
                         - y (number)
                        \*/
                        matrixproto.rotate = function (a, x, y) {
                            a = R.rad(a);
                            x = x || 0;
                            y = y || 0;
                            var cos = +math.cos(a).toFixed(9),
                                sin = +math.sin(a).toFixed(9);
                            this.add(cos, sin, -sin, cos, x, y);
                            this.add(1, 0, 0, 1, -x, -y);
                        };
                        /*\
                         * Matrix.x
                         [ method ]
                         **
                         * Return x coordinate for given point after transformation described by the matrix. See also @Matrix.y
                         > Parameters
                         - x (number)
                         - y (number)
                         = (number) x
                        \*/
                        matrixproto.x = function (x, y) {
                            return x * this.a + y * this.c + this.e;
                        };
                        /*\
                         * Matrix.y
                         [ method ]
                         **
                         * Return y coordinate for given point after transformation described by the matrix. See also @Matrix.x
                         > Parameters
                         - x (number)
                         - y (number)
                         = (number) y
                        \*/
                        matrixproto.y = function (x, y) {
                            return x * this.b + y * this.d + this.f;
                        };
                        matrixproto.get = function (i) {
                            return +this[Str.fromCharCode(97 + i)].toFixed(4);
                        };
                        matrixproto.toString = function () {
                            return R.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
                        };
                        matrixproto.toFilter = function () {
                            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
                        };
                        matrixproto.offset = function () {
                            return [this.e.toFixed(4), this.f.toFixed(4)];
                        };
                        function norm(a) {
                            return a[0] * a[0] + a[1] * a[1];
                        }
                        function normalize(a) {
                            var mag = math.sqrt(norm(a));
                            a[0] && (a[0] /= mag);
                            a[1] && (a[1] /= mag);
                        }
                        /*\
                         * Matrix.split
                         [ method ]
                         **
                         * Splits matrix into primitive transformations
                         = (object) in format:
                         o dx (number) translation by x
                         o dy (number) translation by y
                         o scalex (number) scale by x
                         o scaley (number) scale by y
                         o shear (number) shear
                         o rotate (number) rotation in deg
                         o isSimple (boolean) could it be represented via simple transformations
                        \*/
                        matrixproto.split = function () {
                            var out = {};
                            // translation
                            out.dx = this.e;
                            out.dy = this.f;

                            // scale and shear
                            var row = [[this.a, this.c], [this.b, this.d]];
                            out.scalex = math.sqrt(norm(row[0]));
                            normalize(row[0]);

                            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
                            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

                            out.scaley = math.sqrt(norm(row[1]));
                            normalize(row[1]);
                            out.shear /= out.scaley;

                            // rotation
                            var sin = -row[0][1],
                                cos = row[1][1];
                            if (cos < 0) {
                                out.rotate = R.deg(math.acos(cos));
                                if (sin < 0) {
                                    out.rotate = 360 - out.rotate;
                                }
                            } else {
                                out.rotate = R.deg(math.asin(sin));
                            }

                            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
                            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
                            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
                            return out;
                        };
                        /*\
                         * Matrix.toTransformString
                         [ method ]
                         **
                         * Return transform string that represents given matrix
                         = (string) transform string
                        \*/
                        matrixproto.toTransformString = function (shorter) {
                            var s = shorter || this[split]();
                            if (s.isSimple) {
                                s.scalex = +s.scalex.toFixed(4);
                                s.scaley = +s.scaley.toFixed(4);
                                s.rotate = +s.rotate.toFixed(4);
                                return (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) + (s.rotate ? "r" + [s.rotate, 0, 0] : E);
                            } else {
                                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
                            }
                        };
                    })(Matrix.prototype);

                    var preventDefault = function preventDefault() {
                        this.returnValue = false;
                    },
                        preventTouch = function preventTouch() {
                        return this.originalEvent.preventDefault();
                    },
                        stopPropagation = function stopPropagation() {
                        this.cancelBubble = true;
                    },
                        stopTouch = function stopTouch() {
                        return this.originalEvent.stopPropagation();
                    },
                        getEventPosition = function getEventPosition(e) {
                        var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;

                        return {
                            x: e.clientX + scrollX,
                            y: e.clientY + scrollY
                        };
                    },
                        addEvent = function () {
                        if (g.doc.addEventListener) {
                            return function (obj, type, fn, element) {
                                var f = function f(e) {
                                    var pos = getEventPosition(e);
                                    return fn.call(element, e, pos.x, pos.y);
                                };
                                obj.addEventListener(type, f, false);

                                if (supportsTouch && touchMap[type]) {
                                    var _f = function _f(e) {
                                        var pos = getEventPosition(e),
                                            olde = e;

                                        for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                                            if (e.targetTouches[i].target == obj) {
                                                e = e.targetTouches[i];
                                                e.originalEvent = olde;
                                                e.preventDefault = preventTouch;
                                                e.stopPropagation = stopTouch;
                                                break;
                                            }
                                        }

                                        return fn.call(element, e, pos.x, pos.y);
                                    };
                                    obj.addEventListener(touchMap[type], _f, false);
                                }

                                return function () {
                                    obj.removeEventListener(type, f, false);

                                    if (supportsTouch && touchMap[type]) obj.removeEventListener(touchMap[type], _f, false);

                                    return true;
                                };
                            };
                        } else if (g.doc.attachEvent) {
                            return function (obj, type, fn, element) {
                                var f = function f(e) {
                                    e = e || g.win.event;
                                    var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                                        scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                                        x = e.clientX + scrollX,
                                        y = e.clientY + scrollY;
                                    e.preventDefault = e.preventDefault || preventDefault;
                                    e.stopPropagation = e.stopPropagation || stopPropagation;
                                    return fn.call(element, e, x, y);
                                };
                                obj.attachEvent("on" + type, f);
                                var detacher = function detacher() {
                                    obj.detachEvent("on" + type, f);
                                    return true;
                                };
                                return detacher;
                            };
                        }
                    }(),
                        drag = [],
                        dragMove = function dragMove(e) {
                        var x = e.clientX,
                            y = e.clientY,
                            scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                            dragi,
                            j = drag.length;
                        while (j--) {
                            dragi = drag[j];
                            if (supportsTouch && e.touches) {
                                var i = e.touches.length,
                                    touch;
                                while (i--) {
                                    touch = e.touches[i];
                                    if (touch.identifier == dragi.el._drag.id) {
                                        x = touch.clientX;
                                        y = touch.clientY;
                                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                                        break;
                                    }
                                }
                            } else {
                                e.preventDefault();
                            }
                            var node = dragi.el.node,
                                o,
                                next = node.nextSibling,
                                parent = node.parentNode,
                                display = node.style.display;
                            g.win.opera && parent.removeChild(node);
                            node.style.display = "none";
                            o = dragi.el.paper.getElementByPoint(x, y);
                            node.style.display = display;
                            g.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
                            o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);
                            x += scrollX;
                            y += scrollY;
                            eve("raphael.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
                        }
                    },
                        dragUp = function dragUp(e) {
                        R.unmousemove(dragMove).unmouseup(dragUp);
                        var i = drag.length,
                            dragi;
                        while (i--) {
                            dragi = drag[i];
                            dragi.el._drag = {};
                            eve("raphael.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
                        }
                        drag = [];
                    },

                    /*\
                     * Raphael.el
                     [ property (object) ]
                     **
                     * You can add your own method to elements. This is useful when you want to hack default functionality or
                     * want to wrap some common transformation or attributes in one method. In difference to canvas methods,
                     * you can redefine element method at any time. Expending element methods wouldn’t affect set.
                     > Usage
                     | Raphael.el.red = function () {
                     |     this.attr({fill: "#f00"});
                     | };
                     | // then use it
                     | paper.circle(100, 100, 20).red();
                    \*/
                    elproto = R.el = {};
                    /*\
                     * Element.click
                     [ method ]
                     **
                     * Adds event handler for click for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.unclick
                     [ method ]
                     **
                     * Removes event handler for click for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.dblclick
                     [ method ]
                     **
                     * Adds event handler for double click for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.undblclick
                     [ method ]
                     **
                     * Removes event handler for double click for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.mousedown
                     [ method ]
                     **
                     * Adds event handler for mousedown for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.unmousedown
                     [ method ]
                     **
                     * Removes event handler for mousedown for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.mousemove
                     [ method ]
                     **
                     * Adds event handler for mousemove for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.unmousemove
                     [ method ]
                     **
                     * Removes event handler for mousemove for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.mouseout
                     [ method ]
                     **
                     * Adds event handler for mouseout for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.unmouseout
                     [ method ]
                     **
                     * Removes event handler for mouseout for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.mouseover
                     [ method ]
                     **
                     * Adds event handler for mouseover for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.unmouseover
                     [ method ]
                     **
                     * Removes event handler for mouseover for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.mouseup
                     [ method ]
                     **
                     * Adds event handler for mouseup for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.unmouseup
                     [ method ]
                     **
                     * Removes event handler for mouseup for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.touchstart
                     [ method ]
                     **
                     * Adds event handler for touchstart for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.untouchstart
                     [ method ]
                     **
                     * Removes event handler for touchstart for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.touchmove
                     [ method ]
                     **
                     * Adds event handler for touchmove for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.untouchmove
                     [ method ]
                     **
                     * Removes event handler for touchmove for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.touchend
                     [ method ]
                     **
                     * Adds event handler for touchend for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.untouchend
                     [ method ]
                     **
                     * Removes event handler for touchend for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/

                    /*\
                     * Element.touchcancel
                     [ method ]
                     **
                     * Adds event handler for touchcancel for the element.
                     > Parameters
                     - handler (function) handler for the event
                     = (object) @Element
                    \*/
                    /*\
                     * Element.untouchcancel
                     [ method ]
                     **
                     * Removes event handler for touchcancel for the element.
                     > Parameters
                     - handler (function) #optional handler for the event
                     = (object) @Element
                    \*/
                    for (var i = events.length; i--;) {
                        (function (eventName) {
                            R[eventName] = elproto[eventName] = function (fn, scope) {
                                if (R.is(fn, "function")) {
                                    this.events = this.events || [];
                                    this.events.push({ name: eventName, f: fn, unbind: addEvent(this.shape || this.node || g.doc, eventName, fn, scope || this) });
                                }
                                return this;
                            };
                            R["un" + eventName] = elproto["un" + eventName] = function (fn) {
                                var events = this.events || [],
                                    l = events.length;
                                while (l--) {
                                    if (events[l].name == eventName && (R.is(fn, "undefined") || events[l].f == fn)) {
                                        events[l].unbind();
                                        events.splice(l, 1);
                                        !events.length && delete this.events;
                                    }
                                }
                                return this;
                            };
                        })(events[i]);
                    }

                    /*\
                     * Element.data
                     [ method ]
                     **
                     * Adds or retrieves given value associated with given key.
                     **
                     * See also @Element.removeData
                     > Parameters
                     - key (string) key to store data
                     - value (any) #optional value to store
                     = (object) @Element
                     * or, if value is not specified:
                     = (any) value
                     * or, if key and value are not specified:
                     = (object) Key/value pairs for all the data associated with the element.
                     > Usage
                     | for (var i = 0, i < 5, i++) {
                     |     paper.circle(10 + 15 * i, 10, 10)
                     |          .attr({fill: "#000"})
                     |          .data("i", i)
                     |          .click(function () {
                     |             alert(this.data("i"));
                     |          });
                     | }
                    \*/
                    elproto.data = function (key, value) {
                        var data = eldata[this.id] = eldata[this.id] || {};
                        if (arguments.length == 0) {
                            return data;
                        }
                        if (arguments.length == 1) {
                            if (R.is(key, "object")) {
                                for (var i in key) {
                                    if (key[has](i)) {
                                        this.data(i, key[i]);
                                    }
                                }return this;
                            }
                            eve("raphael.data.get." + this.id, this, data[key], key);
                            return data[key];
                        }
                        data[key] = value;
                        eve("raphael.data.set." + this.id, this, value, key);
                        return this;
                    };
                    /*\
                     * Element.removeData
                     [ method ]
                     **
                     * Removes value associated with an element by given key.
                     * If key is not provided, removes all the data of the element.
                     > Parameters
                     - key (string) #optional key
                     = (object) @Element
                    \*/
                    elproto.removeData = function (key) {
                        if (key == null) {
                            delete eldata[this.id];
                        } else {
                            eldata[this.id] && delete eldata[this.id][key];
                        }
                        return this;
                    };
                    /*\
                    * Element.getData
                    [ method ]
                    **
                    * Retrieves the element data
                    = (object) data
                    \*/
                    elproto.getData = function () {
                        return clone(eldata[this.id] || {});
                    };
                    /*\
                     * Element.hover
                     [ method ]
                     **
                     * Adds event handlers for hover for the element.
                     > Parameters
                     - f_in (function) handler for hover in
                     - f_out (function) handler for hover out
                     - icontext (object) #optional context for hover in handler
                     - ocontext (object) #optional context for hover out handler
                     = (object) @Element
                    \*/
                    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
                        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
                    };
                    /*\
                     * Element.unhover
                     [ method ]
                     **
                     * Removes event handlers for hover for the element.
                     > Parameters
                     - f_in (function) handler for hover in
                     - f_out (function) handler for hover out
                     = (object) @Element
                    \*/
                    elproto.unhover = function (f_in, f_out) {
                        return this.unmouseover(f_in).unmouseout(f_out);
                    };
                    var draggable = [];
                    /*\
                     * Element.drag
                     [ method ]
                     **
                     * Adds event handlers for drag of the element.
                     > Parameters
                     - onmove (function) handler for moving
                     - onstart (function) handler for drag start
                     - onend (function) handler for drag end
                     - mcontext (object) #optional context for moving handler
                     - scontext (object) #optional context for drag start handler
                     - econtext (object) #optional context for drag end handler
                     * Additionally following `drag` events will be triggered: `drag.start.<id>` on start,
                     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element will be dragged over another element
                     * `drag.over.<id>` will be fired as well.
                     *
                     * Start event and start handler will be called in specified context or in context of the element with following parameters:
                     o x (number) x position of the mouse
                     o y (number) y position of the mouse
                     o event (object) DOM event object
                     * Move event and move handler will be called in specified context or in context of the element with following parameters:
                     o dx (number) shift by x from the start point
                     o dy (number) shift by y from the start point
                     o x (number) x position of the mouse
                     o y (number) y position of the mouse
                     o event (object) DOM event object
                     * End event and end handler will be called in specified context or in context of the element with following parameters:
                     o event (object) DOM event object
                     = (object) @Element
                    \*/
                    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
                        function start(e) {
                            (e.originalEvent || e).preventDefault();
                            var x = e.clientX,
                                y = e.clientY,
                                scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
                            this._drag.id = e.identifier;
                            if (supportsTouch && e.touches) {
                                var i = e.touches.length,
                                    touch;
                                while (i--) {
                                    touch = e.touches[i];
                                    this._drag.id = touch.identifier;
                                    if (touch.identifier == this._drag.id) {
                                        x = touch.clientX;
                                        y = touch.clientY;
                                        break;
                                    }
                                }
                            }
                            this._drag.x = x + scrollX;
                            this._drag.y = y + scrollY;
                            !drag.length && R.mousemove(dragMove).mouseup(dragUp);
                            drag.push({ el: this, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope });
                            onstart && eve.on("raphael.drag.start." + this.id, onstart);
                            onmove && eve.on("raphael.drag.move." + this.id, onmove);
                            onend && eve.on("raphael.drag.end." + this.id, onend);
                            eve("raphael.drag.start." + this.id, start_scope || move_scope || this, this._drag.x, this._drag.y, e);
                        }
                        this._drag = {};
                        draggable.push({ el: this, start: start });
                        this.mousedown(start);
                        return this;
                    };
                    /*\
                     * Element.onDragOver
                     [ method ]
                     **
                     * Shortcut for assigning event handler for `drag.over.<id>` event, where id is id of the element (see @Element.id).
                     > Parameters
                     - f (function) handler for event, first argument would be the element you are dragging over
                    \*/
                    elproto.onDragOver = function (f) {
                        f ? eve.on("raphael.drag.over." + this.id, f) : eve.unbind("raphael.drag.over." + this.id);
                    };
                    /*\
                     * Element.undrag
                     [ method ]
                     **
                     * Removes all drag event handlers from given element.
                    \*/
                    elproto.undrag = function () {
                        var i = draggable.length;
                        while (i--) {
                            if (draggable[i].el == this) {
                                this.unmousedown(draggable[i].start);
                                draggable.splice(i, 1);
                                eve.unbind("raphael.drag.*." + this.id);
                            }
                        }!draggable.length && R.unmousemove(dragMove).unmouseup(dragUp);
                        drag = [];
                    };
                    /*\
                     * Paper.circle
                     [ method ]
                     **
                     * Draws a circle.
                     **
                     > Parameters
                     **
                     - x (number) x coordinate of the centre
                     - y (number) y coordinate of the centre
                     - r (number) radius
                     = (object) Raphaël element object with type “circle”
                     **
                     > Usage
                     | var c = paper.circle(50, 50, 40);
                    \*/
                    paperproto.circle = function (x, y, r) {
                        var out = R._engine.circle(this, x || 0, y || 0, r || 0);
                        this.__set__ && this.__set__.push(out);
                        return out;
                    };
                    /*\
                     * Paper.rect
                     [ method ]
                     *
                     * Draws a rectangle.
                     **
                     > Parameters
                     **
                     - x (number) x coordinate of the top left corner
                     - y (number) y coordinate of the top left corner
                     - width (number) width
                     - height (number) height
                     - r (number) #optional radius for rounded corners, default is 0
                     = (object) Raphaël element object with type “rect”
                     **
                     > Usage
                     | // regular rectangle
                     | var c = paper.rect(10, 10, 50, 50);
                     | // rectangle with rounded corners
                     | var c = paper.rect(40, 40, 50, 50, 10);
                    \*/
                    paperproto.rect = function (x, y, w, h, r) {
                        var out = R._engine.rect(this, x || 0, y || 0, w || 0, h || 0, r || 0);
                        this.__set__ && this.__set__.push(out);
                        return out;
                    };
                    /*\
                     * Paper.ellipse
                     [ method ]
                     **
                     * Draws an ellipse.
                     **
                     > Parameters
                     **
                     - x (number) x coordinate of the centre
                     - y (number) y coordinate of the centre
                     - rx (number) horizontal radius
                     - ry (number) vertical radius
                     = (object) Raphaël element object with type “ellipse”
                     **
                     > Usage
                     | var c = paper.ellipse(50, 50, 40, 20);
                    \*/
                    paperproto.ellipse = function (x, y, rx, ry) {
                        var out = R._engine.ellipse(this, x || 0, y || 0, rx || 0, ry || 0);
                        this.__set__ && this.__set__.push(out);
                        return out;
                    };
                    /*\
                     * Paper.path
                     [ method ]
                     **
                     * Creates a path element by given path data string.
                     > Parameters
                     - pathString (string) #optional path string in SVG format.
                     * Path string consists of one-letter commands, followed by comma seprarated arguments in numercal form. Example:
                     | "M10,20L30,40"
                     * Here we can see two commands: “M”, with arguments `(10, 20)` and “L” with arguments `(30, 40)`. Upper case letter mean command is absolute, lower case—relative.
                     *
                     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a>.</p>
                     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
                     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
                     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
                     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
                     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
                     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
                     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
                     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
                     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
                     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
                     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
                     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
                     * * “Catmull-Rom curveto” is a not standard SVG command and added in 2.0 to make life easier.
                     * Note: there is a special case when path consist of just three commands: “M10,10R…z”. In this case path will smoothly connects to its beginning.
                     > Usage
                     | var c = paper.path("M10 10L90 90");
                     | // draw a diagonal line:
                     | // move to 10,10, line to 90,90
                     * For example of path strings, check out these icons: http://raphaeljs.com/icons/
                    \*/
                    paperproto.path = function (pathString) {
                        pathString && !R.is(pathString, string) && !R.is(pathString[0], array) && (pathString += E);
                        var out = R._engine.path(R.format[apply](R, arguments), this);
                        this.__set__ && this.__set__.push(out);
                        return out;
                    };
                    /*\
                     * Paper.image
                     [ method ]
                     **
                     * Embeds an image into the surface.
                     **
                     > Parameters
                     **
                     - src (string) URI of the source image
                     - x (number) x coordinate position
                     - y (number) y coordinate position
                     - width (number) width of the image
                     - height (number) height of the image
                     = (object) Raphaël element object with type “image”
                     **
                     > Usage
                     | var c = paper.image("apple.png", 10, 10, 80, 80);
                    \*/
                    paperproto.image = function (src, x, y, w, h) {
                        var out = R._engine.image(this, src || "about:blank", x || 0, y || 0, w || 0, h || 0);
                        this.__set__ && this.__set__.push(out);
                        return out;
                    };
                    /*\
                     * Paper.text
                     [ method ]
                     **
                     * Draws a text string. If you need line breaks, put “\n” in the string.
                     **
                     > Parameters
                     **
                     - x (number) x coordinate position
                     - y (number) y coordinate position
                     - text (string) The text string to draw
                     = (object) Raphaël element object with type “text”
                     **
                     > Usage
                     | var t = paper.text(50, 50, "Raphaël\nkicks\nbutt!");
                    \*/
                    paperproto.text = function (x, y, text) {
                        var out = R._engine.text(this, x || 0, y || 0, Str(text));
                        this.__set__ && this.__set__.push(out);
                        return out;
                    };
                    /*\
                     * Paper.set
                     [ method ]
                     **
                     * Creates array-like object to keep and operate several elements at once.
                     * Warning: it doesn’t create any elements for itself in the page, it just groups existing elements.
                     * Sets act as pseudo elements — all methods available to an element can be used on a set.
                     = (object) array-like object that represents set of elements
                     **
                     > Usage
                     | var st = paper.set();
                     | st.push(
                     |     paper.circle(10, 10, 5),
                     |     paper.circle(30, 10, 5)
                     | );
                     | st.attr({fill: "red"}); // changes the fill of both circles
                    \*/
                    paperproto.set = function (itemsArray) {
                        !R.is(itemsArray, "array") && (itemsArray = Array.prototype.splice.call(arguments, 0, arguments.length));
                        var out = new Set(itemsArray);
                        this.__set__ && this.__set__.push(out);
                        out["paper"] = this;
                        out["type"] = "set";
                        return out;
                    };
                    /*\
                     * Paper.setStart
                     [ method ]
                     **
                     * Creates @Paper.set. All elements that will be created after calling this method and before calling
                     * @Paper.setFinish will be added to the set.
                     **
                     > Usage
                     | paper.setStart();
                     | paper.circle(10, 10, 5),
                     | paper.circle(30, 10, 5)
                     | var st = paper.setFinish();
                     | st.attr({fill: "red"}); // changes the fill of both circles
                    \*/
                    paperproto.setStart = function (set) {
                        this.__set__ = set || this.set();
                    };
                    /*\
                     * Paper.setFinish
                     [ method ]
                     **
                     * See @Paper.setStart. This method finishes catching and returns resulting set.
                     **
                     = (object) set
                    \*/
                    paperproto.setFinish = function (set) {
                        var out = this.__set__;
                        delete this.__set__;
                        return out;
                    };
                    /*\
                     * Paper.getSize
                     [ method ]
                     **
                     * Obtains current paper actual size.
                     **
                     = (object)
                     \*/
                    paperproto.getSize = function () {
                        var container = this.canvas.parentNode;
                        return {
                            width: container.offsetWidth,
                            height: container.offsetHeight
                        };
                    };
                    /*\
                     * Paper.setSize
                     [ method ]
                     **
                     * If you need to change dimensions of the canvas call this method
                     **
                     > Parameters
                     **
                     - width (number) new width of the canvas
                     - height (number) new height of the canvas
                    \*/
                    paperproto.setSize = function (width, height) {
                        return R._engine.setSize.call(this, width, height);
                    };
                    /*\
                     * Paper.setViewBox
                     [ method ]
                     **
                     * Sets the view box of the paper. Practically it gives you ability to zoom and pan whole paper surface by
                     * specifying new boundaries.
                     **
                     > Parameters
                     **
                     - x (number) new x position, default is `0`
                     - y (number) new y position, default is `0`
                     - w (number) new width of the canvas
                     - h (number) new height of the canvas
                     - fit (boolean) `true` if you want graphics to fit into new boundary box
                    \*/
                    paperproto.setViewBox = function (x, y, w, h, fit) {
                        return R._engine.setViewBox.call(this, x, y, w, h, fit);
                    };
                    /*\
                     * Paper.top
                     [ property ]
                     **
                     * Points to the topmost element on the paper
                    \*/
                    /*\
                     * Paper.bottom
                     [ property ]
                     **
                     * Points to the bottom element on the paper
                    \*/
                    paperproto.top = paperproto.bottom = null;
                    /*\
                     * Paper.raphael
                     [ property ]
                     **
                     * Points to the @Raphael object/function
                    \*/
                    paperproto.raphael = R;
                    var getOffset = function getOffset(elem) {
                        var box = elem.getBoundingClientRect(),
                            doc = elem.ownerDocument,
                            body = doc.body,
                            docElem = doc.documentElement,
                            clientTop = docElem.clientTop || body.clientTop || 0,
                            clientLeft = docElem.clientLeft || body.clientLeft || 0,
                            top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
                            left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
                        return {
                            y: top,
                            x: left
                        };
                    };
                    /*\
                     * Paper.getElementByPoint
                     [ method ]
                     **
                     * Returns you topmost element under given point.
                     **
                     = (object) Raphaël element object
                     > Parameters
                     **
                     - x (number) x coordinate from the top left corner of the window
                     - y (number) y coordinate from the top left corner of the window
                     > Usage
                     | paper.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
                    \*/
                    paperproto.getElementByPoint = function (x, y) {
                        var paper = this,
                            svg = paper.canvas,
                            target = g.doc.elementFromPoint(x, y);
                        if (g.win.opera && target.tagName == "svg") {
                            var so = getOffset(svg),
                                sr = svg.createSVGRect();
                            sr.x = x - so.x;
                            sr.y = y - so.y;
                            sr.width = sr.height = 1;
                            var hits = svg.getIntersectionList(sr, null);
                            if (hits.length) {
                                target = hits[hits.length - 1];
                            }
                        }
                        if (!target) {
                            return null;
                        }
                        while (target.parentNode && target != svg.parentNode && !target.raphael) {
                            target = target.parentNode;
                        }
                        target == paper.canvas.parentNode && (target = svg);
                        target = target && target.raphael ? paper.getById(target.raphaelid) : null;
                        return target;
                    };

                    /*\
                     * Paper.getElementsByBBox
                     [ method ]
                     **
                     * Returns set of elements that have an intersecting bounding box
                     **
                     > Parameters
                     **
                     - bbox (object) bbox to check with
                     = (object) @Set
                     \*/
                    paperproto.getElementsByBBox = function (bbox) {
                        var set = this.set();
                        this.forEach(function (el) {
                            if (R.isBBoxIntersect(el.getBBox(), bbox)) {
                                set.push(el);
                            }
                        });
                        return set;
                    };

                    /*\
                     * Paper.getById
                     [ method ]
                     **
                     * Returns you element by its internal ID.
                     **
                     > Parameters
                     **
                     - id (number) id
                     = (object) Raphaël element object
                    \*/
                    paperproto.getById = function (id) {
                        var bot = this.bottom;
                        while (bot) {
                            if (bot.id == id) {
                                return bot;
                            }
                            bot = bot.next;
                        }
                        return null;
                    };
                    /*\
                     * Paper.forEach
                     [ method ]
                     **
                     * Executes given function for each element on the paper
                     *
                     * If callback function returns `false` it will stop loop running.
                     **
                     > Parameters
                     **
                     - callback (function) function to run
                     - thisArg (object) context object for the callback
                     = (object) Paper object
                     > Usage
                     | paper.forEach(function (el) {
                     |     el.attr({ stroke: "blue" });
                     | });
                    \*/
                    paperproto.forEach = function (callback, thisArg) {
                        var bot = this.bottom;
                        while (bot) {
                            if (callback.call(thisArg, bot) === false) {
                                return this;
                            }
                            bot = bot.next;
                        }
                        return this;
                    };
                    /*\
                     * Paper.getElementsByPoint
                     [ method ]
                     **
                     * Returns set of elements that have common point inside
                     **
                     > Parameters
                     **
                     - x (number) x coordinate of the point
                     - y (number) y coordinate of the point
                     = (object) @Set
                    \*/
                    paperproto.getElementsByPoint = function (x, y) {
                        var set = this.set();
                        this.forEach(function (el) {
                            if (el.isPointInside(x, y)) {
                                set.push(el);
                            }
                        });
                        return set;
                    };
                    function x_y() {
                        return this.x + S + this.y;
                    }
                    function x_y_w_h() {
                        return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
                    }
                    /*\
                     * Element.isPointInside
                     [ method ]
                     **
                     * Determine if given point is inside this element’s shape
                     **
                     > Parameters
                     **
                     - x (number) x coordinate of the point
                     - y (number) y coordinate of the point
                     = (boolean) `true` if point inside the shape
                    \*/
                    elproto.isPointInside = function (x, y) {
                        var rp = this.realPath = getPath[this.type](this);
                        if (this.attr('transform') && this.attr('transform').length) {
                            rp = R.transformPath(rp, this.attr('transform'));
                        }
                        return R.isPointInsidePath(rp, x, y);
                    };
                    /*\
                     * Element.getBBox
                     [ method ]
                     **
                     * Return bounding box for a given element
                     **
                     > Parameters
                     **
                     - isWithoutTransform (boolean) flag, `true` if you want to have bounding box before transformations. Default is `false`.
                     = (object) Bounding box object:
                     o {
                     o     x: (number) top left corner x
                     o     y: (number) top left corner y
                     o     x2: (number) bottom right corner x
                     o     y2: (number) bottom right corner y
                     o     width: (number) width
                     o     height: (number) height
                     o }
                    \*/
                    elproto.getBBox = function (isWithoutTransform) {
                        if (this.removed) {
                            return {};
                        }
                        var _ = this._;
                        if (isWithoutTransform) {
                            if (_.dirty || !_.bboxwt) {
                                this.realPath = getPath[this.type](this);
                                _.bboxwt = pathDimensions(this.realPath);
                                _.bboxwt.toString = x_y_w_h;
                                _.dirty = 0;
                            }
                            return _.bboxwt;
                        }
                        if (_.dirty || _.dirtyT || !_.bbox) {
                            if (_.dirty || !this.realPath) {
                                _.bboxwt = 0;
                                this.realPath = getPath[this.type](this);
                            }
                            _.bbox = pathDimensions(mapPath(this.realPath, this.matrix));
                            _.bbox.toString = x_y_w_h;
                            _.dirty = _.dirtyT = 0;
                        }
                        return _.bbox;
                    };
                    /*\
                     * Element.clone
                     [ method ]
                     **
                     = (object) clone of a given element
                     **
                    \*/
                    elproto.clone = function () {
                        if (this.removed) {
                            return null;
                        }
                        var out = this.paper[this.type]().attr(this.attr());
                        this.__set__ && this.__set__.push(out);
                        return out;
                    };
                    /*\
                     * Element.glow
                     [ method ]
                     **
                     * Return set of elements that create glow-like effect around given element. See @Paper.set.
                     *
                     * Note: Glow is not connected to the element. If you change element attributes it won’t adjust itself.
                     **
                     > Parameters
                     **
                     - glow (object) #optional parameters object with all properties optional:
                     o {
                     o     width (number) size of the glow, default is `10`
                     o     fill (boolean) will it be filled, default is `false`
                     o     opacity (number) opacity, default is `0.5`
                     o     offsetx (number) horizontal offset, default is `0`
                     o     offsety (number) vertical offset, default is `0`
                     o     color (string) glow colour, default is `black`
                     o }
                     = (object) @Paper.set of elements that represents glow
                    \*/
                    elproto.glow = function (glow) {
                        if (this.type == "text") {
                            return null;
                        }
                        glow = glow || {};
                        var s = {
                            width: (glow.width || 10) + (+this.attr("stroke-width") || 1),
                            fill: glow.fill || false,
                            opacity: glow.opacity == null ? .5 : glow.opacity,
                            offsetx: glow.offsetx || 0,
                            offsety: glow.offsety || 0,
                            color: glow.color || "#000"
                        },
                            c = s.width / 2,
                            r = this.paper,
                            out = r.set(),
                            path = this.realPath || getPath[this.type](this);
                        path = this.matrix ? mapPath(path, this.matrix) : path;
                        for (var i = 1; i < c + 1; i++) {
                            out.push(r.path(path).attr({
                                stroke: s.color,
                                fill: s.fill ? s.color : "none",
                                "stroke-linejoin": "round",
                                "stroke-linecap": "round",
                                "stroke-width": +(s.width / c * i).toFixed(3),
                                opacity: +(s.opacity / c).toFixed(3)
                            }));
                        }
                        return out.insertBefore(this).translate(s.offsetx, s.offsety);
                    };
                    var curveslengths = {},
                        getPointAtSegmentLength = function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
                        if (length == null) {
                            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
                        } else {
                            return R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTatLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
                        }
                    },
                        getLengthFactory = function getLengthFactory(istotal, subpath) {
                        return function (path, length, onlystart) {
                            path = path2curve(path);
                            var x,
                                y,
                                p,
                                l,
                                sp = "",
                                subpaths = {},
                                point,
                                len = 0;
                            for (var i = 0, ii = path.length; i < ii; i++) {
                                p = path[i];
                                if (p[0] == "M") {
                                    x = +p[1];
                                    y = +p[2];
                                } else {
                                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                                    if (len + l > length) {
                                        if (subpath && !subpaths.start) {
                                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                                            sp += ["C" + point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];
                                            if (onlystart) {
                                                return sp;
                                            }
                                            subpaths.start = sp;
                                            sp = ["M" + point.x, point.y + "C" + point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]].join();
                                            len += l;
                                            x = +p[5];
                                            y = +p[6];
                                            continue;
                                        }
                                        if (!istotal && !subpath) {
                                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                                            return { x: point.x, y: point.y, alpha: point.alpha };
                                        }
                                    }
                                    len += l;
                                    x = +p[5];
                                    y = +p[6];
                                }
                                sp += p.shift() + p;
                            }
                            subpaths.end = sp;
                            point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
                            point.alpha && (point = { x: point.x, y: point.y, alpha: point.alpha });
                            return point;
                        };
                    };
                    var getTotalLength = getLengthFactory(1),
                        getPointAtLength = getLengthFactory(),
                        getSubpathsAtLength = getLengthFactory(0, 1);
                    /*\
                     * Raphael.getTotalLength
                     [ method ]
                     **
                     * Returns length of the given path in pixels.
                     **
                     > Parameters
                     **
                     - path (string) SVG path string.
                     **
                     = (number) length.
                    \*/
                    R.getTotalLength = getTotalLength;
                    /*\
                     * Raphael.getPointAtLength
                     [ method ]
                     **
                     * Return coordinates of the point located at the given length on the given path.
                     **
                     > Parameters
                     **
                     - path (string) SVG path string
                     - length (number)
                     **
                     = (object) representation of the point:
                     o {
                     o     x: (number) x coordinate
                     o     y: (number) y coordinate
                     o     alpha: (number) angle of derivative
                     o }
                    \*/
                    R.getPointAtLength = getPointAtLength;
                    /*\
                     * Raphael.getSubpath
                     [ method ]
                     **
                     * Return subpath of a given path from given length to given length.
                     **
                     > Parameters
                     **
                     - path (string) SVG path string
                     - from (number) position of the start of the segment
                     - to (number) position of the end of the segment
                     **
                     = (string) pathstring for the segment
                    \*/
                    R.getSubpath = function (path, from, to) {
                        if (this.getTotalLength(path) - to < 1e-6) {
                            return getSubpathsAtLength(path, from).end;
                        }
                        var a = getSubpathsAtLength(path, to, 1);
                        return from ? getSubpathsAtLength(a, from).end : a;
                    };
                    /*\
                     * Element.getTotalLength
                     [ method ]
                     **
                     * Returns length of the path in pixels. Only works for element of “path” type.
                     = (number) length.
                    \*/
                    elproto.getTotalLength = function () {
                        var path = this.getPath();
                        if (!path) {
                            return;
                        }

                        if (this.node.getTotalLength) {
                            return this.node.getTotalLength();
                        }

                        return getTotalLength(path);
                    };
                    /*\
                     * Element.getPointAtLength
                     [ method ]
                     **
                     * Return coordinates of the point located at the given length on the given path. Only works for element of “path” type.
                     **
                     > Parameters
                     **
                     - length (number)
                     **
                     = (object) representation of the point:
                     o {
                     o     x: (number) x coordinate
                     o     y: (number) y coordinate
                     o     alpha: (number) angle of derivative
                     o }
                    \*/
                    elproto.getPointAtLength = function (length) {
                        var path = this.getPath();
                        if (!path) {
                            return;
                        }

                        return getPointAtLength(path, length);
                    };
                    /*\
                     * Element.getPath
                     [ method ]
                     **
                     * Returns path of the element. Only works for elements of “path” type and simple elements like circle.
                     = (object) path
                     **
                    \*/
                    elproto.getPath = function () {
                        var path,
                            getPath = R._getPath[this.type];

                        if (this.type == "text" || this.type == "set") {
                            return;
                        }

                        if (getPath) {
                            path = getPath(this);
                        }

                        return path;
                    };
                    /*\
                     * Element.getSubpath
                     [ method ]
                     **
                     * Return subpath of a given element from given length to given length. Only works for element of “path” type.
                     **
                     > Parameters
                     **
                     - from (number) position of the start of the segment
                     - to (number) position of the end of the segment
                     **
                     = (string) pathstring for the segment
                    \*/
                    elproto.getSubpath = function (from, to) {
                        var path = this.getPath();
                        if (!path) {
                            return;
                        }

                        return R.getSubpath(path, from, to);
                    };
                    /*\
                     * Raphael.easing_formulas
                     [ property ]
                     **
                     * Object that contains easing formulas for animation. You could extend it with your own. By default it has following list of easing:
                     # <ul>
                     #     <li>“linear”</li>
                     #     <li>“&lt;” or “easeIn” or “ease-in”</li>
                     #     <li>“>” or “easeOut” or “ease-out”</li>
                     #     <li>“&lt;>” or “easeInOut” or “ease-in-out”</li>
                     #     <li>“backIn” or “back-in”</li>
                     #     <li>“backOut” or “back-out”</li>
                     #     <li>“elastic”</li>
                     #     <li>“bounce”</li>
                     # </ul>
                     # <p>See also <a href="http://raphaeljs.com/easing.html">Easing demo</a>.</p>
                    \*/
                    var ef = R.easing_formulas = {
                        linear: function linear(n) {
                            return n;
                        },
                        "<": function _(n) {
                            return pow(n, 1.7);
                        },
                        ">": function _(n) {
                            return pow(n, .48);
                        },
                        "<>": function _(n) {
                            var q = .48 - n / 1.04,
                                Q = math.sqrt(.1734 + q * q),
                                x = Q - q,
                                X = pow(abs(x), 1 / 3) * (x < 0 ? -1 : 1),
                                y = -Q - q,
                                Y = pow(abs(y), 1 / 3) * (y < 0 ? -1 : 1),
                                t = X + Y + .5;
                            return (1 - t) * 3 * t * t + t * t * t;
                        },
                        backIn: function backIn(n) {
                            var s = 1.70158;
                            return n * n * ((s + 1) * n - s);
                        },
                        backOut: function backOut(n) {
                            n = n - 1;
                            var s = 1.70158;
                            return n * n * ((s + 1) * n + s) + 1;
                        },
                        elastic: function elastic(n) {
                            if (n == !!n) {
                                return n;
                            }
                            return pow(2, -10 * n) * math.sin((n - .075) * (2 * PI) / .3) + 1;
                        },
                        bounce: function bounce(n) {
                            var s = 7.5625,
                                p = 2.75,
                                l;
                            if (n < 1 / p) {
                                l = s * n * n;
                            } else {
                                if (n < 2 / p) {
                                    n -= 1.5 / p;
                                    l = s * n * n + .75;
                                } else {
                                    if (n < 2.5 / p) {
                                        n -= 2.25 / p;
                                        l = s * n * n + .9375;
                                    } else {
                                        n -= 2.625 / p;
                                        l = s * n * n + .984375;
                                    }
                                }
                            }
                            return l;
                        }
                    };
                    ef.easeIn = ef["ease-in"] = ef["<"];
                    ef.easeOut = ef["ease-out"] = ef[">"];
                    ef.easeInOut = ef["ease-in-out"] = ef["<>"];
                    ef["back-in"] = ef.backIn;
                    ef["back-out"] = ef.backOut;

                    var animationElements = [],
                        requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                        setTimeout(callback, 16);
                    },
                        animation = function animation() {
                        var Now = +new Date(),
                            l = 0;
                        for (; l < animationElements.length; l++) {
                            var e = animationElements[l];
                            if (e.el.removed || e.paused) {
                                continue;
                            }
                            var time = Now - e.start,
                                ms = e.ms,
                                easing = e.easing,
                                from = e.from,
                                diff = e.diff,
                                to = e.to,
                                t = e.t,
                                that = e.el,
                                set = {},
                                now,
                                init = {},
                                key;
                            if (e.initstatus) {
                                time = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * ms;
                                e.status = e.initstatus;
                                delete e.initstatus;
                                e.stop && animationElements.splice(l--, 1);
                            } else {
                                e.status = (e.prev + (e.percent - e.prev) * (time / ms)) / e.anim.top;
                            }
                            if (time < 0) {
                                continue;
                            }
                            if (time < ms) {
                                var pos = easing(time / ms);
                                for (var attr in from) {
                                    if (from[has](attr)) {
                                        switch (availableAnimAttrs[attr]) {
                                            case nu:
                                                now = +from[attr] + pos * ms * diff[attr];
                                                break;
                                            case "colour":
                                                now = "rgb(" + [upto255(round(from[attr].r + pos * ms * diff[attr].r)), upto255(round(from[attr].g + pos * ms * diff[attr].g)), upto255(round(from[attr].b + pos * ms * diff[attr].b))].join(",") + ")";
                                                break;
                                            case "path":
                                                now = [];
                                                for (var i = 0, ii = from[attr].length; i < ii; i++) {
                                                    now[i] = [from[attr][i][0]];
                                                    for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
                                                        now[i][j] = +from[attr][i][j] + pos * ms * diff[attr][i][j];
                                                    }
                                                    now[i] = now[i].join(S);
                                                }
                                                now = now.join(S);
                                                break;
                                            case "transform":
                                                if (diff[attr].real) {
                                                    now = [];
                                                    for (i = 0, ii = from[attr].length; i < ii; i++) {
                                                        now[i] = [from[attr][i][0]];
                                                        for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                                            now[i][j] = from[attr][i][j] + pos * ms * diff[attr][i][j];
                                                        }
                                                    }
                                                } else {
                                                    var get = function get(i) {
                                                        return +from[attr][i] + pos * ms * diff[attr][i];
                                                    };
                                                    // now = [["r", get(2), 0, 0], ["t", get(3), get(4)], ["s", get(0), get(1), 0, 0]];
                                                    now = [["m", get(0), get(1), get(2), get(3), get(4), get(5)]];
                                                }
                                                break;
                                            case "csv":
                                                if (attr == "clip-rect") {
                                                    now = [];
                                                    i = 4;
                                                    while (i--) {
                                                        now[i] = +from[attr][i] + pos * ms * diff[attr][i];
                                                    }
                                                }
                                                break;
                                            default:
                                                var from2 = [][concat](from[attr]);
                                                now = [];
                                                i = that.paper.customAttributes[attr].length;
                                                while (i--) {
                                                    now[i] = +from2[i] + pos * ms * diff[attr][i];
                                                }
                                                break;
                                        }
                                        set[attr] = now;
                                    }
                                }that.attr(set);
                                (function (id, that, anim) {
                                    setTimeout(function () {
                                        eve("raphael.anim.frame." + id, that, anim);
                                    });
                                })(that.id, that, e.anim);
                            } else {
                                (function (f, el, a) {
                                    setTimeout(function () {
                                        eve("raphael.anim.frame." + el.id, el, a);
                                        eve("raphael.anim.finish." + el.id, el, a);
                                        R.is(f, "function") && f.call(el);
                                    });
                                })(e.callback, that, e.anim);
                                that.attr(to);
                                animationElements.splice(l--, 1);
                                if (e.repeat > 1 && !e.next) {
                                    for (key in to) {
                                        if (to[has](key)) {
                                            init[key] = e.totalOrigin[key];
                                        }
                                    }e.el.attr(init);
                                    runAnimation(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1);
                                }
                                if (e.next && !e.stop) {
                                    runAnimation(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat);
                                }
                            }
                        }
                        animationElements.length && requestAnimFrame(animation);
                    },
                        upto255 = function upto255(color) {
                        return color > 255 ? 255 : color < 0 ? 0 : color;
                    };
                    /*\
                     * Element.animateWith
                     [ method ]
                     **
                     * Acts similar to @Element.animate, but ensure that given animation runs in sync with another given element.
                     **
                     > Parameters
                     **
                     - el (object) element to sync with
                     - anim (object) animation to sync with
                     - params (object) #optional final attributes for the element, see also @Element.attr
                     - ms (number) #optional number of milliseconds for animation to run
                     - easing (string) #optional easing type. Accept on of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
                     - callback (function) #optional callback function. Will be called at the end of animation.
                     * or
                     - element (object) element to sync with
                     - anim (object) animation to sync with
                     - animation (object) #optional animation object, see @Raphael.animation
                     **
                     = (object) original element
                    \*/
                    elproto.animateWith = function (el, anim, params, ms, easing, callback) {
                        var element = this;
                        if (element.removed) {
                            callback && callback.call(element);
                            return element;
                        }
                        var a = params instanceof Animation ? params : R.animation(params, ms, easing, callback),
                            x,
                            y;
                        runAnimation(a, element, a.percents[0], null, element.attr());
                        for (var i = 0, ii = animationElements.length; i < ii; i++) {
                            if (animationElements[i].anim == anim && animationElements[i].el == el) {
                                animationElements[ii - 1].start = animationElements[i].start;
                                break;
                            }
                        }
                        return element;
                        //
                        //
                        // var a = params ? R.animation(params, ms, easing, callback) : anim,
                        //     status = element.status(anim);
                        // return this.animate(a).status(a, status * anim.ms / a.ms);
                    };
                    function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
                        var cx = 3 * p1x,
                            bx = 3 * (p2x - p1x) - cx,
                            ax = 1 - cx - bx,
                            cy = 3 * p1y,
                            by = 3 * (p2y - p1y) - cy,
                            ay = 1 - cy - by;
                        function sampleCurveX(t) {
                            return ((ax * t + bx) * t + cx) * t;
                        }
                        function solve(x, epsilon) {
                            var t = solveCurveX(x, epsilon);
                            return ((ay * t + by) * t + cy) * t;
                        }
                        function solveCurveX(x, epsilon) {
                            var t0, t1, t2, x2, d2, i;
                            for (t2 = x, i = 0; i < 8; i++) {
                                x2 = sampleCurveX(t2) - x;
                                if (abs(x2) < epsilon) {
                                    return t2;
                                }
                                d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;
                                if (abs(d2) < 1e-6) {
                                    break;
                                }
                                t2 = t2 - x2 / d2;
                            }
                            t0 = 0;
                            t1 = 1;
                            t2 = x;
                            if (t2 < t0) {
                                return t0;
                            }
                            if (t2 > t1) {
                                return t1;
                            }
                            while (t0 < t1) {
                                x2 = sampleCurveX(t2);
                                if (abs(x2 - x) < epsilon) {
                                    return t2;
                                }
                                if (x > x2) {
                                    t0 = t2;
                                } else {
                                    t1 = t2;
                                }
                                t2 = (t1 - t0) / 2 + t0;
                            }
                            return t2;
                        }
                        return solve(t, 1 / (200 * duration));
                    }
                    elproto.onAnimation = function (f) {
                        f ? eve.on("raphael.anim.frame." + this.id, f) : eve.unbind("raphael.anim.frame." + this.id);
                        return this;
                    };
                    function Animation(anim, ms) {
                        var percents = [],
                            newAnim = {};
                        this.ms = ms;
                        this.times = 1;
                        if (anim) {
                            for (var attr in anim) {
                                if (anim[has](attr)) {
                                    newAnim[toFloat(attr)] = anim[attr];
                                    percents.push(toFloat(attr));
                                }
                            }percents.sort(sortByNumber);
                        }
                        this.anim = newAnim;
                        this.top = percents[percents.length - 1];
                        this.percents = percents;
                    }
                    /*\
                     * Animation.delay
                     [ method ]
                     **
                     * Creates a copy of existing animation object with given delay.
                     **
                     > Parameters
                     **
                     - delay (number) number of ms to pass between animation start and actual animation
                     **
                     = (object) new altered Animation object
                     | var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
                     | circle1.animate(anim); // run the given animation immediately
                     | circle2.animate(anim.delay(500)); // run the given animation after 500 ms
                    \*/
                    Animation.prototype.delay = function (delay) {
                        var a = new Animation(this.anim, this.ms);
                        a.times = this.times;
                        a.del = +delay || 0;
                        return a;
                    };
                    /*\
                     * Animation.repeat
                     [ method ]
                     **
                     * Creates a copy of existing animation object with given repetition.
                     **
                     > Parameters
                     **
                     - repeat (number) number iterations of animation. For infinite animation pass `Infinity`
                     **
                     = (object) new altered Animation object
                    \*/
                    Animation.prototype.repeat = function (times) {
                        var a = new Animation(this.anim, this.ms);
                        a.del = this.del;
                        a.times = math.floor(mmax(times, 0)) || 1;
                        return a;
                    };
                    function runAnimation(anim, element, percent, status, totalOrigin, times) {
                        percent = toFloat(percent);
                        var params,
                            isInAnim,
                            isInAnimSet,
                            percents = [],
                            next,
                            prev,
                            timestamp,
                            ms = anim.ms,
                            from = {},
                            to = {},
                            diff = {};
                        if (status) {
                            for (i = 0, ii = animationElements.length; i < ii; i++) {
                                var e = animationElements[i];
                                if (e.el.id == element.id && e.anim == anim) {
                                    if (e.percent != percent) {
                                        animationElements.splice(i, 1);
                                        isInAnimSet = 1;
                                    } else {
                                        isInAnim = e;
                                    }
                                    element.attr(e.totalOrigin);
                                    break;
                                }
                            }
                        } else {
                            status = +to; // NaN
                        }
                        for (var i = 0, ii = anim.percents.length; i < ii; i++) {
                            if (anim.percents[i] == percent || anim.percents[i] > status * anim.top) {
                                percent = anim.percents[i];
                                prev = anim.percents[i - 1] || 0;
                                ms = ms / anim.top * (percent - prev);
                                next = anim.percents[i + 1];
                                params = anim.anim[percent];
                                break;
                            } else if (status) {
                                element.attr(anim.anim[anim.percents[i]]);
                            }
                        }
                        if (!params) {
                            return;
                        }
                        if (!isInAnim) {
                            for (var attr in params) {
                                if (params[has](attr)) {
                                    if (availableAnimAttrs[has](attr) || element.paper.customAttributes[has](attr)) {
                                        from[attr] = element.attr(attr);
                                        from[attr] == null && (from[attr] = availableAttrs[attr]);
                                        to[attr] = params[attr];
                                        switch (availableAnimAttrs[attr]) {
                                            case nu:
                                                diff[attr] = (to[attr] - from[attr]) / ms;
                                                break;
                                            case "colour":
                                                from[attr] = R.getRGB(from[attr]);
                                                var toColour = R.getRGB(to[attr]);
                                                diff[attr] = {
                                                    r: (toColour.r - from[attr].r) / ms,
                                                    g: (toColour.g - from[attr].g) / ms,
                                                    b: (toColour.b - from[attr].b) / ms
                                                };
                                                break;
                                            case "path":
                                                var pathes = path2curve(from[attr], to[attr]),
                                                    toPath = pathes[1];
                                                from[attr] = pathes[0];
                                                diff[attr] = [];
                                                for (i = 0, ii = from[attr].length; i < ii; i++) {
                                                    diff[attr][i] = [0];
                                                    for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
                                                        diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
                                                    }
                                                }
                                                break;
                                            case "transform":
                                                var _ = element._,
                                                    eq = equaliseTransform(_[attr], to[attr]);
                                                if (eq) {
                                                    from[attr] = eq.from;
                                                    to[attr] = eq.to;
                                                    diff[attr] = [];
                                                    diff[attr].real = true;
                                                    for (i = 0, ii = from[attr].length; i < ii; i++) {
                                                        diff[attr][i] = [from[attr][i][0]];
                                                        for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                                            diff[attr][i][j] = (to[attr][i][j] - from[attr][i][j]) / ms;
                                                        }
                                                    }
                                                } else {
                                                    var m = element.matrix || new Matrix(),
                                                        to2 = {
                                                        _: { transform: _.transform },
                                                        getBBox: function getBBox() {
                                                            return element.getBBox(1);
                                                        }
                                                    };
                                                    from[attr] = [m.a, m.b, m.c, m.d, m.e, m.f];
                                                    extractTransform(to2, to[attr]);
                                                    to[attr] = to2._.transform;
                                                    diff[attr] = [(to2.matrix.a - m.a) / ms, (to2.matrix.b - m.b) / ms, (to2.matrix.c - m.c) / ms, (to2.matrix.d - m.d) / ms, (to2.matrix.e - m.e) / ms, (to2.matrix.f - m.f) / ms];
                                                    // from[attr] = [_.sx, _.sy, _.deg, _.dx, _.dy];
                                                    // var to2 = {_:{}, getBBox: function () { return element.getBBox(); }};
                                                    // extractTransform(to2, to[attr]);
                                                    // diff[attr] = [
                                                    //     (to2._.sx - _.sx) / ms,
                                                    //     (to2._.sy - _.sy) / ms,
                                                    //     (to2._.deg - _.deg) / ms,
                                                    //     (to2._.dx - _.dx) / ms,
                                                    //     (to2._.dy - _.dy) / ms
                                                    // ];
                                                }
                                                break;
                                            case "csv":
                                                var values = Str(params[attr])[split](separator),
                                                    from2 = Str(from[attr])[split](separator);
                                                if (attr == "clip-rect") {
                                                    from[attr] = from2;
                                                    diff[attr] = [];
                                                    i = from2.length;
                                                    while (i--) {
                                                        diff[attr][i] = (values[i] - from[attr][i]) / ms;
                                                    }
                                                }
                                                to[attr] = values;
                                                break;
                                            default:
                                                values = [][concat](params[attr]);
                                                from2 = [][concat](from[attr]);
                                                diff[attr] = [];
                                                i = element.paper.customAttributes[attr].length;
                                                while (i--) {
                                                    diff[attr][i] = ((values[i] || 0) - (from2[i] || 0)) / ms;
                                                }
                                                break;
                                        }
                                    }
                                }
                            }var easing = params.easing,
                                easyeasy = R.easing_formulas[easing];
                            if (!easyeasy) {
                                easyeasy = Str(easing).match(bezierrg);
                                if (easyeasy && easyeasy.length == 5) {
                                    var curve = easyeasy;
                                    easyeasy = function easyeasy(t) {
                                        return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
                                    };
                                } else {
                                    easyeasy = pipe;
                                }
                            }
                            timestamp = params.start || anim.start || +new Date();
                            e = {
                                anim: anim,
                                percent: percent,
                                timestamp: timestamp,
                                start: timestamp + (anim.del || 0),
                                status: 0,
                                initstatus: status || 0,
                                stop: false,
                                ms: ms,
                                easing: easyeasy,
                                from: from,
                                diff: diff,
                                to: to,
                                el: element,
                                callback: params.callback,
                                prev: prev,
                                next: next,
                                repeat: times || anim.times,
                                origin: element.attr(),
                                totalOrigin: totalOrigin
                            };
                            animationElements.push(e);
                            if (status && !isInAnim && !isInAnimSet) {
                                e.stop = true;
                                e.start = new Date() - ms * status;
                                if (animationElements.length == 1) {
                                    return animation();
                                }
                            }
                            if (isInAnimSet) {
                                e.start = new Date() - e.ms * status;
                            }
                            animationElements.length == 1 && requestAnimFrame(animation);
                        } else {
                            isInAnim.initstatus = status;
                            isInAnim.start = new Date() - isInAnim.ms * status;
                        }
                        eve("raphael.anim.start." + element.id, element, anim);
                    }
                    /*\
                     * Raphael.animation
                     [ method ]
                     **
                     * Creates an animation object that can be passed to the @Element.animate or @Element.animateWith methods.
                     * See also @Animation.delay and @Animation.repeat methods.
                     **
                     > Parameters
                     **
                     - params (object) final attributes for the element, see also @Element.attr
                     - ms (number) number of milliseconds for animation to run
                     - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
                     - callback (function) #optional callback function. Will be called at the end of animation.
                     **
                     = (object) @Animation
                    \*/
                    R.animation = function (params, ms, easing, callback) {
                        if (params instanceof Animation) {
                            return params;
                        }
                        if (R.is(easing, "function") || !easing) {
                            callback = callback || easing || null;
                            easing = null;
                        }
                        params = Object(params);
                        ms = +ms || 0;
                        var p = {},
                            json,
                            attr;
                        for (attr in params) {
                            if (params[has](attr) && toFloat(attr) != attr && toFloat(attr) + "%" != attr) {
                                json = true;
                                p[attr] = params[attr];
                            }
                        }if (!json) {
                            // if percent-like syntax is used and end-of-all animation callback used
                            if (callback) {
                                // find the last one
                                var lastKey = 0;
                                for (var i in params) {
                                    var percent = toInt(i);
                                    if (params[has](i) && percent > lastKey) {
                                        lastKey = percent;
                                    }
                                }
                                lastKey += '%';
                                // if already defined callback in the last keyframe, skip
                                !params[lastKey].callback && (params[lastKey].callback = callback);
                            }
                            return new Animation(params, ms);
                        } else {
                            easing && (p.easing = easing);
                            callback && (p.callback = callback);
                            return new Animation({ 100: p }, ms);
                        }
                    };
                    /*\
                     * Element.animate
                     [ method ]
                     **
                     * Creates and starts animation for given element.
                     **
                     > Parameters
                     **
                     - params (object) final attributes for the element, see also @Element.attr
                     - ms (number) number of milliseconds for animation to run
                     - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
                     - callback (function) #optional callback function. Will be called at the end of animation.
                     * or
                     - animation (object) animation object, see @Raphael.animation
                     **
                     = (object) original element
                    \*/
                    elproto.animate = function (params, ms, easing, callback) {
                        var element = this;
                        if (element.removed) {
                            callback && callback.call(element);
                            return element;
                        }
                        var anim = params instanceof Animation ? params : R.animation(params, ms, easing, callback);
                        runAnimation(anim, element, anim.percents[0], null, element.attr());
                        return element;
                    };
                    /*\
                     * Element.setTime
                     [ method ]
                     **
                     * Sets the status of animation of the element in milliseconds. Similar to @Element.status method.
                     **
                     > Parameters
                     **
                     - anim (object) animation object
                     - value (number) number of milliseconds from the beginning of the animation
                     **
                     = (object) original element if `value` is specified
                     * Note, that during animation following events are triggered:
                     *
                     * On each animation frame event `anim.frame.<id>`, on start `anim.start.<id>` and on end `anim.finish.<id>`.
                    \*/
                    elproto.setTime = function (anim, value) {
                        if (anim && value != null) {
                            this.status(anim, mmin(value, anim.ms) / anim.ms);
                        }
                        return this;
                    };
                    /*\
                     * Element.status
                     [ method ]
                     **
                     * Gets or sets the status of animation of the element.
                     **
                     > Parameters
                     **
                     - anim (object) #optional animation object
                     - value (number) #optional 0 – 1. If specified, method works like a setter and sets the status of a given animation to the value. This will cause animation to jump to the given position.
                     **
                     = (number) status
                     * or
                     = (array) status if `anim` is not specified. Array of objects in format:
                     o {
                     o     anim: (object) animation object
                     o     status: (number) status
                     o }
                     * or
                     = (object) original element if `value` is specified
                    \*/
                    elproto.status = function (anim, value) {
                        var out = [],
                            i = 0,
                            len,
                            e;
                        if (value != null) {
                            runAnimation(anim, this, -1, mmin(value, 1));
                            return this;
                        } else {
                            len = animationElements.length;
                            for (; i < len; i++) {
                                e = animationElements[i];
                                if (e.el.id == this.id && (!anim || e.anim == anim)) {
                                    if (anim) {
                                        return e.status;
                                    }
                                    out.push({
                                        anim: e.anim,
                                        status: e.status
                                    });
                                }
                            }
                            if (anim) {
                                return 0;
                            }
                            return out;
                        }
                    };
                    /*\
                     * Element.pause
                     [ method ]
                     **
                     * Stops animation of the element with ability to resume it later on.
                     **
                     > Parameters
                     **
                     - anim (object) #optional animation object
                     **
                     = (object) original element
                    \*/
                    elproto.pause = function (anim) {
                        for (var i = 0; i < animationElements.length; i++) {
                            if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
                                if (eve("raphael.anim.pause." + this.id, this, animationElements[i].anim) !== false) {
                                    animationElements[i].paused = true;
                                }
                            }
                        }return this;
                    };
                    /*\
                     * Element.resume
                     [ method ]
                     **
                     * Resumes animation if it was paused with @Element.pause method.
                     **
                     > Parameters
                     **
                     - anim (object) #optional animation object
                     **
                     = (object) original element
                    \*/
                    elproto.resume = function (anim) {
                        for (var i = 0; i < animationElements.length; i++) {
                            if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
                                var e = animationElements[i];
                                if (eve("raphael.anim.resume." + this.id, this, e.anim) !== false) {
                                    delete e.paused;
                                    this.status(e.anim, e.status);
                                }
                            }
                        }return this;
                    };
                    /*\
                     * Element.stop
                     [ method ]
                     **
                     * Stops animation of the element.
                     **
                     > Parameters
                     **
                     - anim (object) #optional animation object
                     **
                     = (object) original element
                    \*/
                    elproto.stop = function (anim) {
                        for (var i = 0; i < animationElements.length; i++) {
                            if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
                                if (eve("raphael.anim.stop." + this.id, this, animationElements[i].anim) !== false) {
                                    animationElements.splice(i--, 1);
                                }
                            }
                        }return this;
                    };
                    function stopAnimation(paper) {
                        for (var i = 0; i < animationElements.length; i++) {
                            if (animationElements[i].el.paper == paper) {
                                animationElements.splice(i--, 1);
                            }
                        }
                    }
                    eve.on("raphael.remove", stopAnimation);
                    eve.on("raphael.clear", stopAnimation);
                    elproto.toString = function () {
                        return 'Rapha\xEBl\u2019s object';
                    };

                    // Set
                    var Set = function Set(items) {
                        this.items = [];
                        this.length = 0;
                        this.type = "set";
                        if (items) {
                            for (var i = 0, ii = items.length; i < ii; i++) {
                                if (items[i] && (items[i].constructor == elproto.constructor || items[i].constructor == Set)) {
                                    this[this.items.length] = this.items[this.items.length] = items[i];
                                    this.length++;
                                }
                            }
                        }
                    },
                        setproto = Set.prototype;
                    /*\
                     * Set.push
                     [ method ]
                     **
                     * Adds each argument to the current set.
                     = (object) original element
                    \*/
                    setproto.push = function () {
                        var item, len;
                        for (var i = 0, ii = arguments.length; i < ii; i++) {
                            item = arguments[i];
                            if (item && (item.constructor == elproto.constructor || item.constructor == Set)) {
                                len = this.items.length;
                                this[len] = this.items[len] = item;
                                this.length++;
                            }
                        }
                        return this;
                    };
                    /*\
                     * Set.pop
                     [ method ]
                     **
                     * Removes last element and returns it.
                     = (object) element
                    \*/
                    setproto.pop = function () {
                        this.length && delete this[this.length--];
                        return this.items.pop();
                    };
                    /*\
                     * Set.forEach
                     [ method ]
                     **
                     * Executes given function for each element in the set.
                     *
                     * If function returns `false` it will stop loop running.
                     **
                     > Parameters
                     **
                     - callback (function) function to run
                     - thisArg (object) context object for the callback
                     = (object) Set object
                    \*/
                    setproto.forEach = function (callback, thisArg) {
                        for (var i = 0, ii = this.items.length; i < ii; i++) {
                            if (callback.call(thisArg, this.items[i], i) === false) {
                                return this;
                            }
                        }
                        return this;
                    };
                    for (var method in elproto) {
                        if (elproto[has](method)) {
                            setproto[method] = function (methodname) {
                                return function () {
                                    var arg = arguments;
                                    return this.forEach(function (el) {
                                        el[methodname][apply](el, arg);
                                    });
                                };
                            }(method);
                        }
                    }setproto.attr = function (name, value) {
                        if (name && R.is(name, array) && R.is(name[0], "object")) {
                            for (var j = 0, jj = name.length; j < jj; j++) {
                                this.items[j].attr(name[j]);
                            }
                        } else {
                            for (var i = 0, ii = this.items.length; i < ii; i++) {
                                this.items[i].attr(name, value);
                            }
                        }
                        return this;
                    };
                    /*\
                     * Set.clear
                     [ method ]
                     **
                     * Removes all elements from the set
                    \*/
                    setproto.clear = function () {
                        while (this.length) {
                            this.pop();
                        }
                    };
                    /*\
                     * Set.splice
                     [ method ]
                     **
                     * Removes given element from the set
                     **
                     > Parameters
                     **
                     - index (number) position of the deletion
                     - count (number) number of element to remove
                     - insertion… (object) #optional elements to insert
                     = (object) set elements that were deleted
                    \*/
                    setproto.splice = function (index, count, insertion) {
                        index = index < 0 ? mmax(this.length + index, 0) : index;
                        count = mmax(0, mmin(this.length - index, count));
                        var tail = [],
                            todel = [],
                            args = [],
                            i;
                        for (i = 2; i < arguments.length; i++) {
                            args.push(arguments[i]);
                        }
                        for (i = 0; i < count; i++) {
                            todel.push(this[index + i]);
                        }
                        for (; i < this.length - index; i++) {
                            tail.push(this[index + i]);
                        }
                        var arglen = args.length;
                        for (i = 0; i < arglen + tail.length; i++) {
                            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
                        }
                        i = this.items.length = this.length -= count - arglen;
                        while (this[i]) {
                            delete this[i++];
                        }
                        return new Set(todel);
                    };
                    /*\
                     * Set.exclude
                     [ method ]
                     **
                     * Removes given element from the set
                     **
                     > Parameters
                     **
                     - element (object) element to remove
                     = (boolean) `true` if object was found & removed from the set
                    \*/
                    setproto.exclude = function (el) {
                        for (var i = 0, ii = this.length; i < ii; i++) {
                            if (this[i] == el) {
                                this.splice(i, 1);
                                return true;
                            }
                        }
                    };
                    setproto.animate = function (params, ms, easing, callback) {
                        (R.is(easing, "function") || !easing) && (callback = easing || null);
                        var len = this.items.length,
                            i = len,
                            item,
                            set = this,
                            collector;
                        if (!len) {
                            return this;
                        }
                        callback && (collector = function collector() {
                            ! --len && callback.call(set);
                        });
                        easing = R.is(easing, string) ? easing : collector;
                        var anim = R.animation(params, ms, easing, collector);
                        item = this.items[--i].animate(anim);
                        while (i--) {
                            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, anim, anim);
                            this.items[i] && !this.items[i].removed || len--;
                        }
                        return this;
                    };
                    setproto.insertAfter = function (el) {
                        var i = this.items.length;
                        while (i--) {
                            this.items[i].insertAfter(el);
                        }
                        return this;
                    };
                    setproto.getBBox = function () {
                        var x = [],
                            y = [],
                            x2 = [],
                            y2 = [];
                        for (var i = this.items.length; i--;) {
                            if (!this.items[i].removed) {
                                var box = this.items[i].getBBox();
                                x.push(box.x);
                                y.push(box.y);
                                x2.push(box.x + box.width);
                                y2.push(box.y + box.height);
                            }
                        }x = mmin[apply](0, x);
                        y = mmin[apply](0, y);
                        x2 = mmax[apply](0, x2);
                        y2 = mmax[apply](0, y2);
                        return {
                            x: x,
                            y: y,
                            x2: x2,
                            y2: y2,
                            width: x2 - x,
                            height: y2 - y
                        };
                    };
                    setproto.clone = function (s) {
                        s = this.paper.set();
                        for (var i = 0, ii = this.items.length; i < ii; i++) {
                            s.push(this.items[i].clone());
                        }
                        return s;
                    };
                    setproto.toString = function () {
                        return 'Rapha\xEBl\u2018s set';
                    };

                    setproto.glow = function (glowConfig) {
                        var ret = this.paper.set();
                        this.forEach(function (shape, index) {
                            var g = shape.glow(glowConfig);
                            if (g != null) {
                                g.forEach(function (shape2, index2) {
                                    ret.push(shape2);
                                });
                            }
                        });
                        return ret;
                    };

                    /*\
                     * Set.isPointInside
                     [ method ]
                     **
                     * Determine if given point is inside this set’s elements
                     **
                     > Parameters
                     **
                     - x (number) x coordinate of the point
                     - y (number) y coordinate of the point
                     = (boolean) `true` if point is inside any of the set's elements
                     \*/
                    setproto.isPointInside = function (x, y) {
                        var isPointInside = false;
                        this.forEach(function (el) {
                            if (el.isPointInside(x, y)) {
                                isPointInside = true;
                                return false; // stop loop
                            }
                        });
                        return isPointInside;
                    };

                    /*\
                     * Raphael.registerFont
                     [ method ]
                     **
                     * Adds given font to the registered set of fonts for Raphaël. Should be used as an internal call from within Cufón’s font file.
                     * Returns original parameter, so it could be used with chaining.
                     # <a href="http://wiki.github.com/sorccu/cufon/about">More about Cufón and how to convert your font form TTF, OTF, etc to JavaScript file.</a>
                     **
                     > Parameters
                     **
                     - font (object) the font to register
                     = (object) the font you passed in
                     > Usage
                     | Cufon.registerFont(Raphael.registerFont({…}));
                    \*/
                    R.registerFont = function (font) {
                        if (!font.face) {
                            return font;
                        }
                        this.fonts = this.fonts || {};
                        var fontcopy = {
                            w: font.w,
                            face: {},
                            glyphs: {}
                        },
                            family = font.face["font-family"];
                        for (var prop in font.face) {
                            if (font.face[has](prop)) {
                                fontcopy.face[prop] = font.face[prop];
                            }
                        }if (this.fonts[family]) {
                            this.fonts[family].push(fontcopy);
                        } else {
                            this.fonts[family] = [fontcopy];
                        }
                        if (!font.svg) {
                            fontcopy.face["units-per-em"] = toInt(font.face["units-per-em"], 10);
                            for (var glyph in font.glyphs) {
                                if (font.glyphs[has](glyph)) {
                                    var path = font.glyphs[glyph];
                                    fontcopy.glyphs[glyph] = {
                                        w: path.w,
                                        k: {},
                                        d: path.d && "M" + path.d.replace(/[mlcxtrv]/g, function (command) {
                                            return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[command] || "M";
                                        }) + "z"
                                    };
                                    if (path.k) {
                                        for (var k in path.k) {
                                            if (path[has](k)) {
                                                fontcopy.glyphs[glyph].k[k] = path.k[k];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        return font;
                    };
                    /*\
                     * Paper.getFont
                     [ method ]
                     **
                     * Finds font object in the registered fonts by given parameters. You could specify only one word from the font name, like “Myriad” for “Myriad Pro”.
                     **
                     > Parameters
                     **
                     - family (string) font family name or any word from it
                     - weight (string) #optional font weight
                     - style (string) #optional font style
                     - stretch (string) #optional font stretch
                     = (object) the font object
                     > Usage
                     | paper.print(100, 100, "Test string", paper.getFont("Times", 800), 30);
                    \*/
                    paperproto.getFont = function (family, weight, style, stretch) {
                        stretch = stretch || "normal";
                        style = style || "normal";
                        weight = +weight || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[weight] || 400;
                        if (!R.fonts) {
                            return;
                        }
                        var font = R.fonts[family];
                        if (!font) {
                            var name = new RegExp("(^|\\s)" + family.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
                            for (var fontName in R.fonts) {
                                if (R.fonts[has](fontName)) {
                                    if (name.test(fontName)) {
                                        font = R.fonts[fontName];
                                        break;
                                    }
                                }
                            }
                        }
                        var thefont;
                        if (font) {
                            for (var i = 0, ii = font.length; i < ii; i++) {
                                thefont = font[i];
                                if (thefont.face["font-weight"] == weight && (thefont.face["font-style"] == style || !thefont.face["font-style"]) && thefont.face["font-stretch"] == stretch) {
                                    break;
                                }
                            }
                        }
                        return thefont;
                    };
                    /*\
                     * Paper.print
                     [ method ]
                     **
                     * Creates path that represent given text written using given font at given position with given size.
                     * Result of the method is path element that contains whole text as a separate path.
                     **
                     > Parameters
                     **
                     - x (number) x position of the text
                     - y (number) y position of the text
                     - string (string) text to print
                     - font (object) font object, see @Paper.getFont
                     - size (number) #optional size of the font, default is `16`
                     - origin (string) #optional could be `"baseline"` or `"middle"`, default is `"middle"`
                     - letter_spacing (number) #optional number in range `-1..1`, default is `0`
                     - line_spacing (number) #optional number in range `1..3`, default is `1`
                     = (object) resulting path element, which consist of all letters
                     > Usage
                     | var txt = r.print(10, 50, "print", r.getFont("Museo"), 30).attr({fill: "#fff"});
                    \*/
                    paperproto.print = function (x, y, string, font, size, origin, letter_spacing, line_spacing) {
                        origin = origin || "middle"; // baseline|middle
                        letter_spacing = mmax(mmin(letter_spacing || 0, 1), -1);
                        line_spacing = mmax(mmin(line_spacing || 1, 3), 1);
                        var letters = Str(string)[split](E),
                            shift = 0,
                            notfirst = 0,
                            path = E,
                            scale;
                        R.is(font, "string") && (font = this.getFont(font));
                        if (font) {
                            scale = (size || 16) / font.face["units-per-em"];
                            var bb = font.face.bbox[split](separator),
                                top = +bb[0],
                                lineHeight = bb[3] - bb[1],
                                shifty = 0,
                                height = +bb[1] + (origin == "baseline" ? lineHeight + +font.face.descent : lineHeight / 2);
                            for (var i = 0, ii = letters.length; i < ii; i++) {
                                if (letters[i] == "\n") {
                                    shift = 0;
                                    curr = 0;
                                    notfirst = 0;
                                    shifty += lineHeight * line_spacing;
                                } else {
                                    var prev = notfirst && font.glyphs[letters[i - 1]] || {},
                                        curr = font.glyphs[letters[i]];
                                    shift += notfirst ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + font.w * letter_spacing : 0;
                                    notfirst = 1;
                                }
                                if (curr && curr.d) {
                                    path += R.transformPath(curr.d, ["t", shift * scale, shifty * scale, "s", scale, scale, top, height, "t", (x - top) / scale, (y - height) / scale]);
                                }
                            }
                        }
                        return this.path(path).attr({
                            fill: "#000",
                            stroke: "none"
                        });
                    };

                    /*\
                     * Paper.add
                     [ method ]
                     **
                     * Imports elements in JSON array in format `{type: type, <attributes>}`
                     **
                     > Parameters
                     **
                     - json (array)
                     = (object) resulting set of imported elements
                     > Usage
                     | paper.add([
                     |     {
                     |         type: "circle",
                     |         cx: 10,
                     |         cy: 10,
                     |         r: 5
                     |     },
                     |     {
                     |         type: "rect",
                     |         x: 10,
                     |         y: 10,
                     |         width: 10,
                     |         height: 10,
                     |         fill: "#fc0"
                     |     }
                     | ]);
                    \*/
                    paperproto.add = function (json) {
                        if (R.is(json, "array")) {
                            var res = this.set(),
                                i = 0,
                                ii = json.length,
                                j;
                            for (; i < ii; i++) {
                                j = json[i] || {};
                                elements[has](j.type) && res.push(this[j.type]().attr(j));
                            }
                        }
                        return res;
                    };

                    /*\
                     * Raphael.format
                     [ method ]
                     **
                     * Simple format function. Replaces construction of type “`{<number>}`” to the corresponding argument.
                     **
                     > Parameters
                     **
                     - token (string) string to format
                     - … (string) rest of arguments will be treated as parameters for replacement
                     = (string) formated string
                     > Usage
                     | var x = 10,
                     |     y = 20,
                     |     width = 40,
                     |     height = 50;
                     | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
                     | paper.path(Raphael.format("M{0},{1}h{2}v{3}h{4}z", x, y, width, height, -width));
                    \*/
                    R.format = function (token, params) {
                        var args = R.is(params, array) ? [0][concat](params) : arguments;
                        token && R.is(token, string) && args.length - 1 && (token = token.replace(formatrg, function (str, i) {
                            return args[++i] == null ? E : args[i];
                        }));
                        return token || E;
                    };
                    /*\
                     * Raphael.fullfill
                     [ method ]
                     **
                     * A little bit more advanced format function than @Raphael.format. Replaces construction of type “`{<name>}`” to the corresponding argument.
                     **
                     > Parameters
                     **
                     - token (string) string to format
                     - json (object) object which properties will be used as a replacement
                     = (string) formated string
                     > Usage
                     | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
                     | paper.path(Raphael.fullfill("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
                     |     x: 10,
                     |     y: 20,
                     |     dim: {
                     |         width: 40,
                     |         height: 50,
                     |         "negative width": -40
                     |     }
                     | }));
                    \*/
                    R.fullfill = function () {
                        var tokenRegex = /\{([^\}]+)\}/g,
                            objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                            // matches .xxxxx or ["xxxxx"] to run over object properties
                        replacer = function replacer(all, key, obj) {
                            var res = obj;
                            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                                name = name || quotedName;
                                if (res) {
                                    if (name in res) {
                                        res = res[name];
                                    }
                                    typeof res == "function" && isFunc && (res = res());
                                }
                            });
                            res = (res == null || res == obj ? all : res) + "";
                            return res;
                        };
                        return function (str, obj) {
                            return String(str).replace(tokenRegex, function (all, key) {
                                return replacer(all, key, obj);
                            });
                        };
                    }();
                    /*\
                     * Raphael.ninja
                     [ method ]
                     **
                     * If you want to leave no trace of Raphaël (Well, Raphaël creates only one global variable `Raphael`, but anyway.) You can use `ninja` method.
                     * Beware, that in this case plugins could stop working, because they are depending on global variable existence.
                     **
                     = (object) Raphael object
                     > Usage
                     | (function (local_raphael) {
                     |     var paper = local_raphael(10, 10, 320, 200);
                     |     …
                     | })(Raphael.ninja());
                    \*/
                    R.ninja = function () {
                        if (oldRaphael.was) {
                            g.win.Raphael = oldRaphael.is;
                        } else {
                            // IE8 raises an error when deleting window property
                            window.Raphael = undefined;
                            try {
                                delete window.Raphael;
                            } catch (e) {}
                        }
                        return R;
                    };
                    /*\
                     * Raphael.st
                     [ property (object) ]
                     **
                     * You can add your own method to elements and sets. It is wise to add a set method for each element method
                     * you added, so you will be able to call the same method on sets too.
                     **
                     * See also @Raphael.el.
                     > Usage
                     | Raphael.el.red = function () {
                     |     this.attr({fill: "#f00"});
                     | };
                     | Raphael.st.red = function () {
                     |     this.forEach(function (el) {
                     |         el.red();
                     |     });
                     | };
                     | // then use it
                     | paper.set(paper.circle(100, 100, 20), paper.circle(110, 100, 20)).red();
                    \*/
                    R.st = setproto;

                    eve.on("raphael.DOMload", function () {
                        loaded = true;
                    });

                    // Firefox <3.6 fix: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
                    (function (doc, loaded, _f2) {
                        if (doc.readyState == null && doc.addEventListener) {
                            doc.addEventListener(loaded, _f2 = function f() {
                                doc.removeEventListener(loaded, _f2, false);
                                doc.readyState = "complete";
                            }, false);
                            doc.readyState = "loading";
                        }
                        function isLoaded() {
                            /in/.test(doc.readyState) ? setTimeout(isLoaded, 9) : R.eve("raphael.DOMload");
                        }
                        isLoaded();
                    })(document, "DOMContentLoaded");

                    return R;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

                /***/
            },

            /***/"./dev/raphael.svg.js":
            /*!****************************!*\
              !*** ./dev/raphael.svg.js ***!
              \****************************/
            /*! no static exports found */
            /***/function devRaphaelSvgJs(module, exports, __webpack_require__) {

                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__( /*! ./raphael.core */"./dev/raphael.core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (R) {
                    if (R && !R.svg) {
                        return;
                    }

                    var has = "hasOwnProperty",
                        Str = String,
                        toFloat = parseFloat,
                        toInt = parseInt,
                        math = Math,
                        mmax = math.max,
                        abs = math.abs,
                        pow = math.pow,
                        separator = /[, ]+/,
                        eve = R.eve,
                        E = "",
                        S = " ";
                    var xlink = "http://www.w3.org/1999/xlink",
                        markers = {
                        block: "M5,0 0,2.5 5,5z",
                        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                        open: "M6,1 1,3.5 6,6",
                        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                    },
                        markerCounter = {};
                    R.toString = function () {
                        return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version;
                    };
                    var $ = function $(el, attr) {
                        if (attr) {
                            if (typeof el == "string") {
                                el = $(el);
                            }
                            for (var key in attr) {
                                if (attr[has](key)) {
                                    if (key.substring(0, 6) == "xlink:") {
                                        el.setAttributeNS(xlink, key.substring(6), Str(attr[key]));
                                    } else {
                                        el.setAttribute(key, Str(attr[key]));
                                    }
                                }
                            }
                        } else {
                            el = R._g.doc.createElementNS("http://www.w3.org/2000/svg", el);
                            el.style && (el.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                        }
                        return el;
                    },
                        addGradientFill = function addGradientFill(element, gradient) {
                        var type = "linear",
                            id = element.id + gradient,
                            fx = .5,
                            fy = .5,
                            o = element.node,
                            SVG = element.paper,
                            s = o.style,
                            el = R._g.doc.getElementById(id);
                        if (!el) {
                            gradient = Str(gradient).replace(R._radial_gradient, function (all, _fx, _fy) {
                                type = "radial";
                                if (_fx && _fy) {
                                    fx = toFloat(_fx);
                                    fy = toFloat(_fy);
                                    var dir = (fy > .5) * 2 - 1;
                                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = math.sqrt(.25 - pow(fx - .5, 2)) * dir + .5) && fy != .5 && (fy = fy.toFixed(5) - 1e-5 * dir);
                                }
                                return E;
                            });
                            gradient = gradient.split(/\s*\-\s*/);
                            if (type == "linear") {
                                var angle = gradient.shift();
                                angle = -toFloat(angle);
                                if (isNaN(angle)) {
                                    return null;
                                }
                                var vector = [0, 0, math.cos(R.rad(angle)), math.sin(R.rad(angle))],
                                    max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
                                vector[2] *= max;
                                vector[3] *= max;
                                if (vector[2] < 0) {
                                    vector[0] = -vector[2];
                                    vector[2] = 0;
                                }
                                if (vector[3] < 0) {
                                    vector[1] = -vector[3];
                                    vector[3] = 0;
                                }
                            }
                            var dots = R._parseDots(gradient);
                            if (!dots) {
                                return null;
                            }
                            id = id.replace(/[\(\)\s,\xb0#]/g, "_");

                            if (element.gradient && id != element.gradient.id) {
                                SVG.defs.removeChild(element.gradient);
                                delete element.gradient;
                            }

                            if (!element.gradient) {
                                el = $(type + "Gradient", { id: id });
                                element.gradient = el;
                                $(el, type == "radial" ? {
                                    fx: fx,
                                    fy: fy
                                } : {
                                    x1: vector[0],
                                    y1: vector[1],
                                    x2: vector[2],
                                    y2: vector[3],
                                    gradientTransform: element.matrix.invert()
                                });
                                SVG.defs.appendChild(el);
                                for (var i = 0, ii = dots.length; i < ii; i++) {
                                    el.appendChild($("stop", {
                                        offset: dots[i].offset ? dots[i].offset : i ? "100%" : "0%",
                                        "stop-color": dots[i].color || "#fff",
                                        "stop-opacity": isFinite(dots[i].opacity) ? dots[i].opacity : 1
                                    }));
                                }
                            }
                        }
                        $(o, {
                            fill: fillurl(id),
                            opacity: 1,
                            "fill-opacity": 1
                        });
                        s.fill = E;
                        s.opacity = 1;
                        s.fillOpacity = 1;
                        return 1;
                    },
                        isIE9or10 = function isIE9or10() {
                        var mode = document.documentMode;
                        return mode && (mode === 9 || mode === 10);
                    },
                        fillurl = function fillurl(id) {
                        if (isIE9or10()) {
                            return "url('#" + id + "')";
                        }
                        var location = document.location;
                        var locationString = location.protocol + '//' + location.host + location.pathname + location.search;
                        return "url('" + locationString + "#" + id + "')";
                    },
                        updatePosition = function updatePosition(o) {
                        var bbox = o.getBBox(1);
                        $(o.pattern, { patternTransform: o.matrix.invert() + " translate(" + bbox.x + "," + bbox.y + ")" });
                    },
                        addArrow = function addArrow(o, value, isEnd) {
                        if (o.type == "path") {
                            var values = Str(value).toLowerCase().split("-"),
                                p = o.paper,
                                se = isEnd ? "end" : "start",
                                node = o.node,
                                attrs = o.attrs,
                                stroke = attrs["stroke-width"],
                                i = values.length,
                                type = "classic",
                                from,
                                to,
                                dx,
                                refX,
                                attr,
                                w = 3,
                                h = 3,
                                t = 5;
                            while (i--) {
                                switch (values[i]) {
                                    case "block":
                                    case "classic":
                                    case "oval":
                                    case "diamond":
                                    case "open":
                                    case "none":
                                        type = values[i];
                                        break;
                                    case "wide":
                                        h = 5;break;
                                    case "narrow":
                                        h = 2;break;
                                    case "long":
                                        w = 5;break;
                                    case "short":
                                        w = 2;break;
                                }
                            }
                            if (type == "open") {
                                w += 2;
                                h += 2;
                                t += 2;
                                dx = 1;
                                refX = isEnd ? 4 : 1;
                                attr = {
                                    fill: "none",
                                    stroke: attrs.stroke
                                };
                            } else {
                                refX = dx = w / 2;
                                attr = {
                                    fill: attrs.stroke,
                                    stroke: "none"
                                };
                            }
                            if (o._.arrows) {
                                if (isEnd) {
                                    o._.arrows.endPath && markerCounter[o._.arrows.endPath]--;
                                    o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;
                                } else {
                                    o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;
                                    o._.arrows.startMarker && markerCounter[o._.arrows.startMarker]--;
                                }
                            } else {
                                o._.arrows = {};
                            }
                            if (type != "none") {
                                var pathId = "raphael-marker-" + type,
                                    markerId = "raphael-marker-" + se + type + w + h + "-obj" + o.id;
                                if (!R._g.doc.getElementById(pathId)) {
                                    p.defs.appendChild($($("path"), {
                                        "stroke-linecap": "round",
                                        d: markers[type],
                                        id: pathId
                                    }));
                                    markerCounter[pathId] = 1;
                                } else {
                                    markerCounter[pathId]++;
                                }
                                var marker = R._g.doc.getElementById(markerId),
                                    use;
                                if (!marker) {
                                    marker = $($("marker"), {
                                        id: markerId,
                                        markerHeight: h,
                                        markerWidth: w,
                                        orient: "auto",
                                        refX: refX,
                                        refY: h / 2
                                    });
                                    use = $($("use"), {
                                        "xlink:href": "#" + pathId,
                                        transform: (isEnd ? "rotate(180 " + w / 2 + " " + h / 2 + ") " : E) + "scale(" + w / t + "," + h / t + ")",
                                        "stroke-width": (1 / ((w / t + h / t) / 2)).toFixed(4)
                                    });
                                    marker.appendChild(use);
                                    p.defs.appendChild(marker);
                                    markerCounter[markerId] = 1;
                                } else {
                                    markerCounter[markerId]++;
                                    use = marker.getElementsByTagName("use")[0];
                                }
                                $(use, attr);
                                var delta = dx * (type != "diamond" && type != "oval");
                                if (isEnd) {
                                    from = o._.arrows.startdx * stroke || 0;
                                    to = R.getTotalLength(attrs.path) - delta * stroke;
                                } else {
                                    from = delta * stroke;
                                    to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                                }
                                attr = {};
                                attr["marker-" + se] = "url(#" + markerId + ")";
                                if (to || from) {
                                    attr.d = R.getSubpath(attrs.path, from, to);
                                }
                                $(node, attr);
                                o._.arrows[se + "Path"] = pathId;
                                o._.arrows[se + "Marker"] = markerId;
                                o._.arrows[se + "dx"] = delta;
                                o._.arrows[se + "Type"] = type;
                                o._.arrows[se + "String"] = value;
                            } else {
                                if (isEnd) {
                                    from = o._.arrows.startdx * stroke || 0;
                                    to = R.getTotalLength(attrs.path) - from;
                                } else {
                                    from = 0;
                                    to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                                }
                                o._.arrows[se + "Path"] && $(node, { d: R.getSubpath(attrs.path, from, to) });
                                delete o._.arrows[se + "Path"];
                                delete o._.arrows[se + "Marker"];
                                delete o._.arrows[se + "dx"];
                                delete o._.arrows[se + "Type"];
                                delete o._.arrows[se + "String"];
                            }
                            for (attr in markerCounter) {
                                if (markerCounter[has](attr) && !markerCounter[attr]) {
                                    var item = R._g.doc.getElementById(attr);
                                    item && item.parentNode.removeChild(item);
                                }
                            }
                        }
                    },
                        dasharray = {
                        "-": [3, 1],
                        ".": [1, 1],
                        "-.": [3, 1, 1, 1],
                        "-..": [3, 1, 1, 1, 1, 1],
                        ". ": [1, 3],
                        "- ": [4, 3],
                        "--": [8, 3],
                        "- .": [4, 3, 1, 3],
                        "--.": [8, 3, 1, 3],
                        "--..": [8, 3, 1, 3, 1, 3]
                    },
                        addDashes = function addDashes(o, value, params) {
                        value = dasharray[Str(value).toLowerCase()];
                        if (value) {
                            var width = o.attrs["stroke-width"] || "1",
                                butt = { round: width, square: width, butt: 0 }[o.attrs["stroke-linecap"] || params["stroke-linecap"]] || 0,
                                dashes = [],
                                i = value.length;
                            while (i--) {
                                dashes[i] = value[i] * width + (i % 2 ? 1 : -1) * butt;
                            }
                            $(o.node, { "stroke-dasharray": dashes.join(",") });
                        } else {
                            $(o.node, { "stroke-dasharray": "none" });
                        }
                    },
                        setFillAndStroke = function setFillAndStroke(o, params) {
                        var node = o.node,
                            attrs = o.attrs,
                            vis = node.style.visibility;
                        node.style.visibility = "hidden";
                        for (var att in params) {
                            if (params[has](att)) {
                                if (!R._availableAttrs[has](att)) {
                                    continue;
                                }
                                var value = params[att];
                                attrs[att] = value;
                                switch (att) {
                                    case "blur":
                                        o.blur(value);
                                        break;
                                    case "title":
                                        var title = node.getElementsByTagName("title");

                                        // Use the existing <title>.
                                        if (title.length && (title = title[0])) {
                                            title.firstChild.nodeValue = value;
                                        } else {
                                            title = $("title");
                                            var val = R._g.doc.createTextNode(value);
                                            title.appendChild(val);
                                            node.appendChild(title);
                                        }
                                        break;
                                    case "href":
                                    case "target":
                                        var pn = node.parentNode;
                                        if (pn.tagName.toLowerCase() != "a") {
                                            var hl = $("a");
                                            pn.insertBefore(hl, node);
                                            hl.appendChild(node);
                                            pn = hl;
                                        }
                                        if (att == "target") {
                                            pn.setAttributeNS(xlink, "show", value == "blank" ? "new" : value);
                                        } else {
                                            pn.setAttributeNS(xlink, att, value);
                                        }
                                        break;
                                    case "cursor":
                                        node.style.cursor = value;
                                        break;
                                    case "transform":
                                        o.transform(value);
                                        break;
                                    case "arrow-start":
                                        addArrow(o, value);
                                        break;
                                    case "arrow-end":
                                        addArrow(o, value, 1);
                                        break;
                                    case "clip-rect":
                                        var rect = Str(value).split(separator);
                                        if (rect.length == 4) {
                                            o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
                                            var el = $("clipPath"),
                                                rc = $("rect");
                                            el.id = R.createUUID();
                                            $(rc, {
                                                x: rect[0],
                                                y: rect[1],
                                                width: rect[2],
                                                height: rect[3]
                                            });
                                            el.appendChild(rc);
                                            o.paper.defs.appendChild(el);
                                            $(node, { "clip-path": "url(#" + el.id + ")" });
                                            o.clip = rc;
                                        }
                                        if (!value) {
                                            var path = node.getAttribute("clip-path");
                                            if (path) {
                                                var clip = R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g, E));
                                                clip && clip.parentNode.removeChild(clip);
                                                $(node, { "clip-path": E });
                                                delete o.clip;
                                            }
                                        }
                                        break;
                                    case "path":
                                        if (o.type == "path") {
                                            $(node, { d: value ? attrs.path = R._pathToAbsolute(value) : "M0,0" });
                                            o._.dirty = 1;
                                            if (o._.arrows) {
                                                "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                                                "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                            }
                                        }
                                        break;
                                    case "width":
                                        node.setAttribute(att, value);
                                        o._.dirty = 1;
                                        if (attrs.fx) {
                                            att = "x";
                                            value = attrs.x;
                                        } else {
                                            break;
                                        }
                                    case "x":
                                        if (attrs.fx) {
                                            value = -attrs.x - (attrs.width || 0);
                                        }
                                    case "rx":
                                        if (att == "rx" && o.type == "rect") {
                                            break;
                                        }
                                    case "cx":
                                        node.setAttribute(att, value);
                                        o.pattern && updatePosition(o);
                                        o._.dirty = 1;
                                        break;
                                    case "height":
                                        node.setAttribute(att, value);
                                        o._.dirty = 1;
                                        if (attrs.fy) {
                                            att = "y";
                                            value = attrs.y;
                                        } else {
                                            break;
                                        }
                                    case "y":
                                        if (attrs.fy) {
                                            value = -attrs.y - (attrs.height || 0);
                                        }
                                    case "ry":
                                        if (att == "ry" && o.type == "rect") {
                                            break;
                                        }
                                    case "cy":
                                        node.setAttribute(att, value);
                                        o.pattern && updatePosition(o);
                                        o._.dirty = 1;
                                        break;
                                    case "r":
                                        if (o.type == "rect") {
                                            $(node, { rx: value, ry: value });
                                        } else {
                                            node.setAttribute(att, value);
                                        }
                                        o._.dirty = 1;
                                        break;
                                    case "src":
                                        if (o.type == "image") {
                                            node.setAttributeNS(xlink, "href", value);
                                        }
                                        break;
                                    case "stroke-width":
                                        if (o._.sx != 1 || o._.sy != 1) {
                                            value /= mmax(abs(o._.sx), abs(o._.sy)) || 1;
                                        }
                                        node.setAttribute(att, value);
                                        if (attrs["stroke-dasharray"]) {
                                            addDashes(o, attrs["stroke-dasharray"], params);
                                        }
                                        if (o._.arrows) {
                                            "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                                            "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                        }
                                        break;
                                    case "stroke-dasharray":
                                        addDashes(o, value, params);
                                        break;
                                    case "fill":
                                        var isURL = Str(value).match(R._ISURL);
                                        if (isURL) {
                                            el = $("pattern");
                                            var ig = $("image");
                                            el.id = R.createUUID();
                                            $(el, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 });
                                            $(ig, { x: 0, y: 0, "xlink:href": isURL[1] });
                                            el.appendChild(ig);

                                            (function (el) {
                                                R._preload(isURL[1], function () {
                                                    var w = this.offsetWidth,
                                                        h = this.offsetHeight;
                                                    $(el, { width: w, height: h });
                                                    $(ig, { width: w, height: h });
                                                });
                                            })(el);
                                            o.paper.defs.appendChild(el);
                                            $(node, { fill: "url(#" + el.id + ")" });
                                            o.pattern = el;
                                            o.pattern && updatePosition(o);
                                            break;
                                        }
                                        var clr = R.getRGB(value);
                                        if (!clr.error) {
                                            delete params.gradient;
                                            delete attrs.gradient;
                                            !R.is(attrs.opacity, "undefined") && R.is(params.opacity, "undefined") && $(node, { opacity: attrs.opacity });
                                            !R.is(attrs["fill-opacity"], "undefined") && R.is(params["fill-opacity"], "undefined") && $(node, { "fill-opacity": attrs["fill-opacity"] });
                                        } else if ((o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value)) {
                                            if ("opacity" in attrs || "fill-opacity" in attrs) {
                                                var gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
                                                if (gradient) {
                                                    var stops = gradient.getElementsByTagName("stop");
                                                    $(stops[stops.length - 1], { "stop-opacity": ("opacity" in attrs ? attrs.opacity : 1) * ("fill-opacity" in attrs ? attrs["fill-opacity"] : 1) });
                                                }
                                            }
                                            attrs.gradient = value;
                                            attrs.fill = "none";
                                            break;
                                        }
                                        clr[has]("opacity") && $(node, { "fill-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity });
                                    case "stroke":
                                        clr = R.getRGB(value);
                                        node.setAttribute(att, clr.hex);
                                        att == "stroke" && clr[has]("opacity") && $(node, { "stroke-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity });
                                        if (att == "stroke" && o._.arrows) {
                                            "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                                            "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                        }
                                        break;
                                    case "gradient":
                                        (o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value);
                                        break;
                                    case "opacity":
                                        if (attrs.gradient && !attrs[has]("stroke-opacity")) {
                                            $(node, { "stroke-opacity": value > 1 ? value / 100 : value });
                                        }
                                    // fall
                                    case "fill-opacity":
                                        if (attrs.gradient) {
                                            gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
                                            if (gradient) {
                                                stops = gradient.getElementsByTagName("stop");
                                                $(stops[stops.length - 1], { "stop-opacity": value });
                                            }
                                            break;
                                        }
                                    default:
                                        att == "font-size" && (value = toInt(value, 10) + "px");
                                        var cssrule = att.replace(/(\-.)/g, function (w) {
                                            return w.substring(1).toUpperCase();
                                        });
                                        node.style[cssrule] = value;
                                        o._.dirty = 1;
                                        node.setAttribute(att, value);
                                        break;
                                }
                            }
                        }

                        tuneText(o, params);
                        node.style.visibility = vis;
                    },
                        leading = 1.2,
                        tuneText = function tuneText(el, params) {
                        if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y"))) {
                            return;
                        }
                        var a = el.attrs,
                            node = el.node,
                            fontSize = node.firstChild ? toInt(R._g.doc.defaultView.getComputedStyle(node.firstChild, E).getPropertyValue("font-size"), 10) : 10;

                        if (params[has]("text")) {
                            a.text = params.text;
                            while (node.firstChild) {
                                node.removeChild(node.firstChild);
                            }
                            var texts = Str(params.text).split("\n"),
                                tspans = [],
                                tspan;
                            for (var i = 0, ii = texts.length; i < ii; i++) {
                                tspan = $("tspan");
                                i && $(tspan, { dy: fontSize * leading, x: a.x });
                                tspan.appendChild(R._g.doc.createTextNode(texts[i]));
                                node.appendChild(tspan);
                                tspans[i] = tspan;
                            }
                        } else {
                            tspans = node.getElementsByTagName("tspan");
                            for (i = 0, ii = tspans.length; i < ii; i++) {
                                if (i) {
                                    $(tspans[i], { dy: fontSize * leading, x: a.x });
                                } else {
                                    $(tspans[0], { dy: 0 });
                                }
                            }
                        }
                        $(node, { x: a.x, y: a.y });
                        el._.dirty = 1;
                        var bb = el._getBBox(),
                            dif = a.y - (bb.y + bb.height / 2);
                        dif && R.is(dif, "finite") && $(tspans[0], { dy: dif });
                    },
                        getRealNode = function getRealNode(node) {
                        if (node.parentNode && node.parentNode.tagName.toLowerCase() === "a") {
                            return node.parentNode;
                        } else {
                            return node;
                        }
                    },
                        Element = function Element(node, svg) {
                        var X = 0,
                            Y = 0;
                        /*\
                         * Element.node
                         [ property (object) ]
                         **
                         * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
                         **
                         * Note: Don’t mess with it.
                         > Usage
                         | // draw a circle at coordinate 10,10 with radius of 10
                         | var c = paper.circle(10, 10, 10);
                         | c.node.onclick = function () {
                         |     c.attr("fill", "red");
                         | };
                        \*/
                        this[0] = this.node = node;
                        /*\
                         * Element.raphael
                         [ property (object) ]
                         **
                         * Internal reference to @Raphael object. In case it is not available.
                         > Usage
                         | Raphael.el.red = function () {
                         |     var hsb = this.paper.raphael.rgb2hsb(this.attr("fill"));
                         |     hsb.h = 1;
                         |     this.attr({fill: this.paper.raphael.hsb2rgb(hsb).hex});
                         | }
                        \*/
                        node.raphael = true;
                        /*\
                         * Element.id
                         [ property (number) ]
                         **
                         * Unique id of the element. Especially useful when you want to listen to events of the element,
                         * because all events are fired in format `<module>.<action>.<id>`. Also useful for @Paper.getById method.
                        \*/
                        this.id = guid();
                        node.raphaelid = this.id;

                        /**
                        * Method that returns a 5 letter/digit id, enough for 36^5 = 60466176 elements
                        * @returns {string} id
                        */
                        function guid() {
                            return ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5);
                        }

                        this.matrix = R.matrix();
                        this.realPath = null;
                        /*\
                         * Element.paper
                         [ property (object) ]
                         **
                         * Internal reference to “paper” where object drawn. Mainly for use in plugins and element extensions.
                         > Usage
                         | Raphael.el.cross = function () {
                         |     this.attr({fill: "red"});
                         |     this.paper.path("M10,10L50,50M50,10L10,50")
                         |         .attr({stroke: "red"});
                         | }
                        \*/
                        this.paper = svg;
                        this.attrs = this.attrs || {};
                        this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1
                        };
                        !svg.bottom && (svg.bottom = this);
                        /*\
                         * Element.prev
                         [ property (object) ]
                         **
                         * Reference to the previous element in the hierarchy.
                        \*/
                        this.prev = svg.top;
                        svg.top && (svg.top.next = this);
                        svg.top = this;
                        /*\
                         * Element.next
                         [ property (object) ]
                         **
                         * Reference to the next element in the hierarchy.
                        \*/
                        this.next = null;
                    },
                        elproto = R.el;

                    Element.prototype = elproto;
                    elproto.constructor = Element;

                    R._engine.path = function (pathString, SVG) {
                        var el = $("path");
                        SVG.canvas && SVG.canvas.appendChild(el);
                        var p = new Element(el, SVG);
                        p.type = "path";
                        setFillAndStroke(p, {
                            fill: "none",
                            stroke: "#000",
                            path: pathString
                        });
                        return p;
                    };
                    /*\
                     * Element.rotate
                     [ method ]
                     **
                     * Deprecated! Use @Element.transform instead.
                     * Adds rotation by given angle around given point to the list of
                     * transformations of the element.
                     > Parameters
                     - deg (number) angle in degrees
                     - cx (number) #optional x coordinate of the centre of rotation
                     - cy (number) #optional y coordinate of the centre of rotation
                     * If cx & cy aren’t specified centre of the shape is used as a point of rotation.
                     = (object) @Element
                    \*/
                    elproto.rotate = function (deg, cx, cy) {
                        if (this.removed) {
                            return this;
                        }
                        deg = Str(deg).split(separator);
                        if (deg.length - 1) {
                            cx = toFloat(deg[1]);
                            cy = toFloat(deg[2]);
                        }
                        deg = toFloat(deg[0]);
                        cy == null && (cx = cy);
                        if (cx == null || cy == null) {
                            var bbox = this.getBBox(1);
                            cx = bbox.x + bbox.width / 2;
                            cy = bbox.y + bbox.height / 2;
                        }
                        this.transform(this._.transform.concat([["r", deg, cx, cy]]));
                        return this;
                    };
                    /*\
                     * Element.scale
                     [ method ]
                     **
                     * Deprecated! Use @Element.transform instead.
                     * Adds scale by given amount relative to given point to the list of
                     * transformations of the element.
                     > Parameters
                     - sx (number) horisontal scale amount
                     - sy (number) vertical scale amount
                     - cx (number) #optional x coordinate of the centre of scale
                     - cy (number) #optional y coordinate of the centre of scale
                     * If cx & cy aren’t specified centre of the shape is used instead.
                     = (object) @Element
                    \*/
                    elproto.scale = function (sx, sy, cx, cy) {
                        if (this.removed) {
                            return this;
                        }
                        sx = Str(sx).split(separator);
                        if (sx.length - 1) {
                            sy = toFloat(sx[1]);
                            cx = toFloat(sx[2]);
                            cy = toFloat(sx[3]);
                        }
                        sx = toFloat(sx[0]);
                        sy == null && (sy = sx);
                        cy == null && (cx = cy);
                        if (cx == null || cy == null) {
                            var bbox = this.getBBox(1);
                        }
                        cx = cx == null ? bbox.x + bbox.width / 2 : cx;
                        cy = cy == null ? bbox.y + bbox.height / 2 : cy;
                        this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
                        return this;
                    };
                    /*\
                     * Element.translate
                     [ method ]
                     **
                     * Deprecated! Use @Element.transform instead.
                     * Adds translation by given amount to the list of transformations of the element.
                     > Parameters
                     - dx (number) horisontal shift
                     - dy (number) vertical shift
                     = (object) @Element
                    \*/
                    elproto.translate = function (dx, dy) {
                        if (this.removed) {
                            return this;
                        }
                        dx = Str(dx).split(separator);
                        if (dx.length - 1) {
                            dy = toFloat(dx[1]);
                        }
                        dx = toFloat(dx[0]) || 0;
                        dy = +dy || 0;
                        this.transform(this._.transform.concat([["t", dx, dy]]));
                        return this;
                    };
                    /*\
                     * Element.transform
                     [ method ]
                     **
                     * Adds transformation to the element which is separate to other attributes,
                     * i.e. translation doesn’t change `x` or `y` of the rectange. The format
                     * of transformation string is similar to the path string syntax:
                     | "t100,100r30,100,100s2,2,100,100r45s1.5"
                     * Each letter is a command. There are four commands: `t` is for translate, `r` is for rotate, `s` is for
                     * scale and `m` is for matrix.
                     *
                     * There are also alternative “absolute” translation, rotation and scale: `T`, `R` and `S`. They will not take previous transformation into account. For example, `...T100,0` will always move element 100 px horisontally, while `...t100,0` could move it vertically if there is `r90` before. Just compare results of `r90t100,0` and `r90T100,0`.
                     *
                     * So, the example line above could be read like “translate by 100, 100; rotate 30° around 100, 100; scale twice around 100, 100;
                     * rotate 45° around centre; scale 1.5 times relative to centre”. As you can see rotate and scale commands have origin
                     * coordinates as optional parameters, the default is the centre point of the element.
                     * Matrix accepts six parameters.
                     > Usage
                     | var el = paper.rect(10, 20, 300, 200);
                     | // translate 100, 100, rotate 45°, translate -100, 0
                     | el.transform("t100,100r45t-100,0");
                     | // if you want you can append or prepend transformations
                     | el.transform("...t50,50");
                     | el.transform("s2...");
                     | // or even wrap
                     | el.transform("t50,50...t-50-50");
                     | // to reset transformation call method with empty string
                     | el.transform("");
                     | // to get current value call it without parameters
                     | console.log(el.transform());
                     > Parameters
                     - tstr (string) #optional transformation string
                     * If tstr isn’t specified
                     = (string) current transformation string
                     * else
                     = (object) @Element
                    \*/
                    elproto.transform = function (tstr) {
                        var _ = this._;
                        if (tstr == null) {
                            return _.transform;
                        }
                        R._extractTransform(this, tstr);

                        this.clip && $(this.clip, { transform: this.matrix.invert() });
                        this.pattern && updatePosition(this);
                        this.node && $(this.node, { transform: this.matrix });

                        if (_.sx != 1 || _.sy != 1) {
                            var sw = this.attrs[has]("stroke-width") ? this.attrs["stroke-width"] : 1;
                            this.attr({ "stroke-width": sw });
                        }

                        return this;
                    };
                    /*\
                     * Element.hide
                     [ method ]
                     **
                     * Makes element invisible. See @Element.show.
                     = (object) @Element
                    \*/
                    elproto.hide = function () {
                        if (!this.removed) this.node.style.display = "none";
                        return this;
                    };
                    /*\
                     * Element.show
                     [ method ]
                     **
                     * Makes element visible. See @Element.hide.
                     = (object) @Element
                    \*/
                    elproto.show = function () {
                        if (!this.removed) this.node.style.display = "";
                        return this;
                    };
                    /*\
                     * Element.remove
                     [ method ]
                     **
                     * Removes element from the paper.
                    \*/
                    elproto.remove = function () {
                        var node = getRealNode(this.node);
                        if (this.removed || !node.parentNode) {
                            return;
                        }
                        var paper = this.paper;
                        paper.__set__ && paper.__set__.exclude(this);
                        eve.unbind("raphael.*.*." + this.id);
                        if (this.gradient) {
                            paper.defs.removeChild(this.gradient);
                        }
                        R._tear(this, paper);

                        node.parentNode.removeChild(node);

                        // Remove custom data for element
                        this.removeData();

                        for (var i in this) {
                            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
                        }
                        this.removed = true;
                    };
                    elproto._getBBox = function () {
                        if (this.node.style.display == "none") {
                            this.show();
                            var hide = true;
                        }
                        var canvasHidden = false,
                            containerStyle;
                        if (this.paper.canvas.parentElement) {
                            containerStyle = this.paper.canvas.parentElement.style;
                        } //IE10+ can't find parentElement
                        else if (this.paper.canvas.parentNode) {
                                containerStyle = this.paper.canvas.parentNode.style;
                            }

                        if (containerStyle && containerStyle.display == "none") {
                            canvasHidden = true;
                            containerStyle.display = "";
                        }
                        var bbox = {};
                        try {
                            bbox = this.node.getBBox();
                        } catch (e) {
                            // Firefox 3.0.x, 25.0.1 (probably more versions affected) play badly here - possible fix
                            bbox = {
                                x: this.node.clientLeft,
                                y: this.node.clientTop,
                                width: this.node.clientWidth,
                                height: this.node.clientHeight
                            };
                        } finally {
                            bbox = bbox || {};
                            if (canvasHidden) {
                                containerStyle.display = "none";
                            }
                        }
                        hide && this.hide();
                        return bbox;
                    };
                    /*\
                     * Element.attr
                     [ method ]
                     **
                     * Sets the attributes of the element.
                     > Parameters
                     - attrName (string) attribute’s name
                     - value (string) value
                     * or
                     - params (object) object of name/value pairs
                     * or
                     - attrName (string) attribute’s name
                     * or
                     - attrNames (array) in this case method returns array of current values for given attribute names
                     = (object) @Element if attrsName & value or params are passed in.
                     = (...) value of the attribute if only attrsName is passed in.
                     = (array) array of values of the attribute if attrsNames is passed in.
                     = (object) object of attributes if nothing is passed in.
                     > Possible parameters
                     # <p>Please refer to the <a href="http://www.w3.org/TR/SVG/" title="The W3C Recommendation for the SVG language describes these properties in detail.">SVG specification</a> for an explanation of these parameters.</p>
                     o arrow-end (string) arrowhead on the end of the path. The format for string is `<type>[-<width>[-<length>]]`. Possible types: `classic`, `block`, `open`, `oval`, `diamond`, `none`, width: `wide`, `narrow`, `medium`, length: `long`, `short`, `midium`.
                     o clip-rect (string) comma or space separated values: x, y, width and height
                     o cursor (string) CSS type of the cursor
                     o cx (number) the x-axis coordinate of the center of the circle, or ellipse
                     o cy (number) the y-axis coordinate of the center of the circle, or ellipse
                     o fill (string) colour, gradient or image
                     o fill-opacity (number)
                     o font (string)
                     o font-family (string)
                     o font-size (number) font size in pixels
                     o font-weight (string)
                     o height (number)
                     o href (string) URL, if specified element behaves as hyperlink
                     o opacity (number)
                     o path (string) SVG path string format
                     o r (number) radius of the circle, ellipse or rounded corner on the rect
                     o rx (number) horisontal radius of the ellipse
                     o ry (number) vertical radius of the ellipse
                     o src (string) image URL, only works for @Element.image element
                     o stroke (string) stroke colour
                     o stroke-dasharray (string) [“”, “none”, “`-`”, “`.`”, “`-.`”, “`-..`”, “`. `”, “`- `”, “`--`”, “`- .`”, “`--.`”, “`--..`”]
                     o stroke-linecap (string) [“`butt`”, “`square`”, “`round`”]
                     o stroke-linejoin (string) [“`bevel`”, “`round`”, “`miter`”]
                     o stroke-miterlimit (number)
                     o stroke-opacity (number)
                     o stroke-width (number) stroke width in pixels, default is '1'
                     o target (string) used with href
                     o text (string) contents of the text element. Use `\n` for multiline text
                     o text-anchor (string) [“`start`”, “`middle`”, “`end`”], default is “`middle`”
                     o title (string) will create tooltip with a given text
                     o transform (string) see @Element.transform
                     o width (number)
                     o x (number)
                     o y (number)
                     > Gradients
                     * Linear gradient format: “`‹angle›-‹colour›[-‹colour›[:‹offset›]]*-‹colour›`”, example: “`90-#fff-#000`” – 90°
                     * gradient from white to black or “`0-#fff-#f00:20-#000`” – 0° gradient from white via red (at 20%) to black.
                     *
                     * radial gradient: “`r[(‹fx›, ‹fy›)]‹colour›[-‹colour›[:‹offset›]]*-‹colour›`”, example: “`r#fff-#000`” –
                     * gradient from white to black or “`r(0.25, 0.75)#fff-#000`” – gradient from white to black with focus point
                     * at 0.25, 0.75. Focus point coordinates are in 0..1 range. Radial gradients can only be applied to circles and ellipses.
                     > Path String
                     # <p>Please refer to <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path’s data attribute’s format are described in the SVG specification.">SVG documentation regarding path string</a>. Raphaël fully supports it.</p>
                     > Colour Parsing
                     # <ul>
                     #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
                     #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
                     #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
                     #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
                     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
                     #     <li>rgba(•••, •••, •••, •••) — red, green and blue channels’ values: (“<code>rgba(200,&nbsp;100,&nbsp;0, .5)</code>”)</li>
                     #     <li>rgba(•••%, •••%, •••%, •••%) — same as above, but in %: (“<code>rgba(100%,&nbsp;175%,&nbsp;0%, 50%)</code>”)</li>
                     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
                     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
                     #     <li>hsba(•••, •••, •••, •••) — same as above, but with opacity</li>
                     #     <li>hsl(•••, •••, •••) — almost the same as hsb, see <a href="http://en.wikipedia.org/wiki/HSL_and_HSV" title="HSL and HSV - Wikipedia, the free encyclopedia">Wikipedia page</a></li>
                     #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
                     #     <li>hsla(•••, •••, •••, •••) — same as above, but with opacity</li>
                     #     <li>Optionally for hsb and hsl you could specify hue as a degree: “<code>hsl(240deg,&nbsp;1,&nbsp;.5)</code>” or, if you want to go fancy, “<code>hsl(240°,&nbsp;1,&nbsp;.5)</code>”</li>
                     # </ul>
                    \*/
                    elproto.attr = function (name, value) {
                        if (this.removed) {
                            return this;
                        }
                        if (name == null) {
                            var res = {};
                            for (var a in this.attrs) {
                                if (this.attrs[has](a)) {
                                    res[a] = this.attrs[a];
                                }
                            }res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
                            res.transform = this._.transform;
                            return res;
                        }
                        if (value == null && R.is(name, "string")) {
                            if (name == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
                                return this.attrs.gradient;
                            }
                            if (name == "transform") {
                                return this._.transform;
                            }
                            var names = name.split(separator),
                                out = {};
                            for (var i = 0, ii = names.length; i < ii; i++) {
                                name = names[i];
                                if (name in this.attrs) {
                                    out[name] = this.attrs[name];
                                } else if (R.is(this.paper.customAttributes[name], "function")) {
                                    out[name] = this.paper.customAttributes[name].def;
                                } else {
                                    out[name] = R._availableAttrs[name];
                                }
                            }
                            return ii - 1 ? out : out[names[0]];
                        }
                        if (value == null && R.is(name, "array")) {
                            out = {};
                            for (i = 0, ii = name.length; i < ii; i++) {
                                out[name[i]] = this.attr(name[i]);
                            }
                            return out;
                        }
                        if (value != null) {
                            var params = {};
                            params[name] = value;
                        } else if (name != null && R.is(name, "object")) {
                            params = name;
                        }
                        for (var key in params) {
                            eve("raphael.attr." + key + "." + this.id, this, params[key]);
                        }
                        for (key in this.paper.customAttributes) {
                            if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
                                var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
                                this.attrs[key] = params[key];
                                for (var subkey in par) {
                                    if (par[has](subkey)) {
                                        params[subkey] = par[subkey];
                                    }
                                }
                            }
                        }setFillAndStroke(this, params);
                        return this;
                    };
                    /*\
                     * Element.toFront
                     [ method ]
                     **
                     * Moves the element so it is the closest to the viewer’s eyes, on top of other elements.
                     = (object) @Element
                    \*/
                    elproto.toFront = function () {
                        if (this.removed) {
                            return this;
                        }
                        var node = getRealNode(this.node);
                        node.parentNode.appendChild(node);
                        var svg = this.paper;
                        svg.top != this && R._tofront(this, svg);
                        return this;
                    };
                    /*\
                     * Element.toBack
                     [ method ]
                     **
                     * Moves the element so it is the furthest from the viewer’s eyes, behind other elements.
                     = (object) @Element
                    \*/
                    elproto.toBack = function () {
                        if (this.removed) {
                            return this;
                        }
                        var node = getRealNode(this.node);
                        var parentNode = node.parentNode;
                        parentNode.insertBefore(node, parentNode.firstChild);
                        R._toback(this, this.paper);
                        var svg = this.paper;
                        return this;
                    };
                    /*\
                     * Element.insertAfter
                     [ method ]
                     **
                     * Inserts current object after the given one.
                     = (object) @Element
                    \*/
                    elproto.insertAfter = function (element) {
                        if (this.removed || !element) {
                            return this;
                        }

                        var node = getRealNode(this.node);
                        var afterNode = getRealNode(element.node || element[element.length - 1].node);
                        if (afterNode.nextSibling) {
                            afterNode.parentNode.insertBefore(node, afterNode.nextSibling);
                        } else {
                            afterNode.parentNode.appendChild(node);
                        }
                        R._insertafter(this, element, this.paper);
                        return this;
                    };
                    /*\
                     * Element.insertBefore
                     [ method ]
                     **
                     * Inserts current object before the given one.
                     = (object) @Element
                    \*/
                    elproto.insertBefore = function (element) {
                        if (this.removed || !element) {
                            return this;
                        }

                        var node = getRealNode(this.node);
                        var beforeNode = getRealNode(element.node || element[0].node);
                        beforeNode.parentNode.insertBefore(node, beforeNode);
                        R._insertbefore(this, element, this.paper);
                        return this;
                    };
                    elproto.blur = function (size) {
                        // Experimental. No Safari support. Use it on your own risk.
                        var t = this;
                        if (+size !== 0) {
                            var fltr = $("filter"),
                                blur = $("feGaussianBlur");
                            t.attrs.blur = size;
                            fltr.id = R.createUUID();
                            $(blur, { stdDeviation: +size || 1.5 });
                            fltr.appendChild(blur);
                            t.paper.defs.appendChild(fltr);
                            t._blur = fltr;
                            $(t.node, { filter: "url(#" + fltr.id + ")" });
                        } else {
                            if (t._blur) {
                                t._blur.parentNode.removeChild(t._blur);
                                delete t._blur;
                                delete t.attrs.blur;
                            }
                            t.node.removeAttribute("filter");
                        }
                        return t;
                    };
                    R._engine.circle = function (svg, x, y, r) {
                        var el = $("circle");
                        svg.canvas && svg.canvas.appendChild(el);
                        var res = new Element(el, svg);
                        res.attrs = { cx: x, cy: y, r: r, fill: "none", stroke: "#000" };
                        res.type = "circle";
                        $(el, res.attrs);
                        return res;
                    };
                    R._engine.rect = function (svg, x, y, w, h, r) {
                        var el = $("rect");
                        svg.canvas && svg.canvas.appendChild(el);
                        var res = new Element(el, svg);
                        res.attrs = { x: x, y: y, width: w, height: h, rx: r || 0, ry: r || 0, fill: "none", stroke: "#000" };
                        res.type = "rect";
                        $(el, res.attrs);
                        return res;
                    };
                    R._engine.ellipse = function (svg, x, y, rx, ry) {
                        var el = $("ellipse");
                        svg.canvas && svg.canvas.appendChild(el);
                        var res = new Element(el, svg);
                        res.attrs = { cx: x, cy: y, rx: rx, ry: ry, fill: "none", stroke: "#000" };
                        res.type = "ellipse";
                        $(el, res.attrs);
                        return res;
                    };
                    R._engine.image = function (svg, src, x, y, w, h) {
                        var el = $("image");
                        $(el, { x: x, y: y, width: w, height: h, preserveAspectRatio: "none" });
                        el.setAttributeNS(xlink, "href", src);
                        svg.canvas && svg.canvas.appendChild(el);
                        var res = new Element(el, svg);
                        res.attrs = { x: x, y: y, width: w, height: h, src: src };
                        res.type = "image";
                        return res;
                    };
                    R._engine.text = function (svg, x, y, text) {
                        var el = $("text");
                        svg.canvas && svg.canvas.appendChild(el);
                        var res = new Element(el, svg);
                        res.attrs = {
                            x: x,
                            y: y,
                            "text-anchor": "middle",
                            text: text,
                            "font-family": R._availableAttrs["font-family"],
                            "font-size": R._availableAttrs["font-size"],
                            stroke: "none",
                            fill: "#000"
                        };
                        res.type = "text";
                        setFillAndStroke(res, res.attrs);
                        return res;
                    };
                    R._engine.setSize = function (width, height) {
                        this.width = width || this.width;
                        this.height = height || this.height;
                        this.canvas.setAttribute("width", this.width);
                        this.canvas.setAttribute("height", this.height);
                        if (this._viewBox) {
                            this.setViewBox.apply(this, this._viewBox);
                        }
                        return this;
                    };
                    R._engine.create = function () {
                        var con = R._getContainer.apply(0, arguments),
                            container = con && con.container;
                        if (!container) {
                            throw new Error("SVG container not found.");
                        }
                        var x = con.x,
                            y = con.y,
                            width = con.width,
                            height = con.height,
                            cnvs = $("svg"),
                            css = "overflow:hidden;",
                            isFloating;
                        x = x || 0;
                        y = y || 0;
                        width = width || 512;
                        height = height || 342;
                        $(cnvs, {
                            height: height,
                            version: 1.1,
                            width: width,
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        });
                        if (container == 1) {
                            cnvs.style.cssText = css + "position:absolute;left:" + x + "px;top:" + y + "px";
                            R._g.doc.body.appendChild(cnvs);
                            isFloating = 1;
                        } else {
                            cnvs.style.cssText = css + "position:relative";
                            if (container.firstChild) {
                                container.insertBefore(cnvs, container.firstChild);
                            } else {
                                container.appendChild(cnvs);
                            }
                        }
                        container = new R._Paper();
                        container.width = width;
                        container.height = height;
                        container.canvas = cnvs;
                        container.clear();
                        container._left = container._top = 0;
                        isFloating && (container.renderfix = function () {});
                        container.renderfix();
                        return container;
                    };
                    R._engine.setViewBox = function (x, y, w, h, fit) {
                        eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
                        var paperSize = this.getSize(),
                            size = mmax(w / paperSize.width, h / paperSize.height),
                            top = this.top,
                            aspectRatio = fit ? "xMidYMid meet" : "xMinYMin",
                            vb,
                            sw;
                        if (x == null) {
                            if (this._vbSize) {
                                size = 1;
                            }
                            delete this._vbSize;
                            vb = "0 0 " + this.width + S + this.height;
                        } else {
                            this._vbSize = size;
                            vb = x + S + y + S + w + S + h;
                        }
                        $(this.canvas, {
                            viewBox: vb,
                            preserveAspectRatio: aspectRatio
                        });
                        while (size && top) {
                            sw = "stroke-width" in top.attrs ? top.attrs["stroke-width"] : 1;
                            top.attr({ "stroke-width": sw });
                            top._.dirty = 1;
                            top._.dirtyT = 1;
                            top = top.prev;
                        }
                        this._viewBox = [x, y, w, h, !!fit];
                        return this;
                    };
                    /*\
                     * Paper.renderfix
                     [ method ]
                     **
                     * Fixes the issue of Firefox and IE9 regarding subpixel rendering. If paper is dependent
                     * on other elements after reflow it could shift half pixel which cause for lines to lost their crispness.
                     * This method fixes the issue.
                     **
                       Special thanks to Mariusz Nowak (http://www.medikoo.com/) for this method.
                    \*/
                    R.prototype.renderfix = function () {
                        var cnvs = this.canvas,
                            s = cnvs.style,
                            pos;
                        try {
                            pos = cnvs.getScreenCTM() || cnvs.createSVGMatrix();
                        } catch (e) {
                            pos = cnvs.createSVGMatrix();
                        }
                        var left = -pos.e % 1,
                            top = -pos.f % 1;
                        if (left || top) {
                            if (left) {
                                this._left = (this._left + left) % 1;
                                s.left = this._left + "px";
                            }
                            if (top) {
                                this._top = (this._top + top) % 1;
                                s.top = this._top + "px";
                            }
                        }
                    };
                    /*\
                     * Paper.clear
                     [ method ]
                     **
                     * Clears the paper, i.e. removes all the elements.
                    \*/
                    R.prototype.clear = function () {
                        R.eve("raphael.clear", this);
                        var c = this.canvas;
                        while (c.firstChild) {
                            c.removeChild(c.firstChild);
                        }
                        this.bottom = this.top = null;
                        (this.desc = $("desc")).appendChild(R._g.doc.createTextNode("Created with Rapha\xebl " + R.version));
                        c.appendChild(this.desc);
                        c.appendChild(this.defs = $("defs"));
                    };
                    /*\
                     * Paper.remove
                     [ method ]
                     **
                     * Removes the paper from the DOM.
                    \*/
                    R.prototype.remove = function () {
                        eve("raphael.remove", this);
                        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                        for (var i in this) {
                            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
                        }
                    };
                    var setproto = R.st;
                    for (var method in elproto) {
                        if (elproto[has](method) && !setproto[has](method)) {
                            setproto[method] = function (methodname) {
                                return function () {
                                    var arg = arguments;
                                    return this.forEach(function (el) {
                                        el[methodname].apply(el, arg);
                                    });
                                };
                            }(method);
                        }
                    }
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

                /***/
            },

            /***/"./dev/raphael.vml.js":
            /*!****************************!*\
              !*** ./dev/raphael.vml.js ***!
              \****************************/
            /*! no static exports found */
            /***/function devRaphaelVmlJs(module, exports, __webpack_require__) {

                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__( /*! ./raphael.core */"./dev/raphael.core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (R) {
                    if (R && !R.vml) {
                        return;
                    }

                    var has = "hasOwnProperty",
                        Str = String,
                        toFloat = parseFloat,
                        math = Math,
                        round = math.round,
                        mmax = math.max,
                        mmin = math.min,
                        abs = math.abs,
                        fillString = "fill",
                        separator = /[, ]+/,
                        eve = R.eve,
                        ms = " progid:DXImageTransform.Microsoft",
                        S = " ",
                        E = "",
                        map = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" },
                        bites = /([clmz]),?([^clmz]*)/gi,
                        blurregexp = / progid:\S+Blur\([^\)]+\)/g,
                        val = /-?[^,\s-]+/g,
                        cssDot = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                        zoom = 21600,
                        pathTypes = { path: 1, rect: 1, image: 1 },
                        ovalTypes = { circle: 1, ellipse: 1 },
                        path2vml = function path2vml(path) {
                        var total = /[ahqstv]/ig,
                            command = R._pathToAbsolute;
                        Str(path).match(total) && (command = R._path2curve);
                        total = /[clmz]/g;
                        if (command == R._pathToAbsolute && !Str(path).match(total)) {
                            var res = Str(path).replace(bites, function (all, command, args) {
                                var vals = [],
                                    isMove = command.toLowerCase() == "m",
                                    res = map[command];
                                args.replace(val, function (value) {
                                    if (isMove && vals.length == 2) {
                                        res += vals + map[command == "m" ? "l" : "L"];
                                        vals = [];
                                    }
                                    vals.push(round(value * zoom));
                                });
                                return res + vals;
                            });
                            return res;
                        }
                        var pa = command(path),
                            p,
                            r;
                        res = [];
                        for (var i = 0, ii = pa.length; i < ii; i++) {
                            p = pa[i];
                            r = pa[i][0].toLowerCase();
                            r == "z" && (r = "x");
                            for (var j = 1, jj = p.length; j < jj; j++) {
                                r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
                            }
                            res.push(r);
                        }
                        return res.join(S);
                    },
                        compensation = function compensation(deg, dx, dy) {
                        var m = R.matrix();
                        m.rotate(-deg, .5, .5);
                        return {
                            dx: m.x(dx, dy),
                            dy: m.y(dx, dy)
                        };
                    },
                        setCoords = function setCoords(p, sx, sy, dx, dy, deg) {
                        var _ = p._,
                            m = p.matrix,
                            fillpos = _.fillpos,
                            o = p.node,
                            s = o.style,
                            y = 1,
                            flip = "",
                            dxdy,
                            kx = zoom / sx,
                            ky = zoom / sy;
                        s.visibility = "hidden";
                        if (!sx || !sy) {
                            return;
                        }
                        o.coordsize = abs(kx) + S + abs(ky);
                        s.rotation = deg * (sx * sy < 0 ? -1 : 1);
                        if (deg) {
                            var c = compensation(deg, dx, dy);
                            dx = c.dx;
                            dy = c.dy;
                        }
                        sx < 0 && (flip += "x");
                        sy < 0 && (flip += " y") && (y = -1);
                        s.flip = flip;
                        o.coordorigin = dx * -kx + S + dy * -ky;
                        if (fillpos || _.fillsize) {
                            var fill = o.getElementsByTagName(fillString);
                            fill = fill && fill[0];
                            o.removeChild(fill);
                            if (fillpos) {
                                c = compensation(deg, m.x(fillpos[0], fillpos[1]), m.y(fillpos[0], fillpos[1]));
                                fill.position = c.dx * y + S + c.dy * y;
                            }
                            if (_.fillsize) {
                                fill.size = _.fillsize[0] * abs(sx) + S + _.fillsize[1] * abs(sy);
                            }
                            o.appendChild(fill);
                        }
                        s.visibility = "visible";
                    };
                    R.toString = function () {
                        return 'Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xEBl ' + this.version;
                    };
                    var addArrow = function addArrow(o, value, isEnd) {
                        var values = Str(value).toLowerCase().split("-"),
                            se = isEnd ? "end" : "start",
                            i = values.length,
                            type = "classic",
                            w = "medium",
                            h = "medium";
                        while (i--) {
                            switch (values[i]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    type = values[i];
                                    break;
                                case "wide":
                                case "narrow":
                                    h = values[i];break;
                                case "long":
                                case "short":
                                    w = values[i];break;
                            }
                        }
                        var stroke = o.node.getElementsByTagName("stroke")[0];
                        stroke[se + "arrow"] = type;
                        stroke[se + "arrowlength"] = w;
                        stroke[se + "arrowwidth"] = h;
                    },
                        setFillAndStroke = function setFillAndStroke(o, params) {
                        // o.paper.canvas.style.display = "none";
                        o.attrs = o.attrs || {};
                        var node = o.node,
                            a = o.attrs,
                            s = node.style,
                            xy,
                            newpath = pathTypes[o.type] && (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.cx != a.cx || params.cy != a.cy || params.rx != a.rx || params.ry != a.ry || params.r != a.r),
                            isOval = ovalTypes[o.type] && (a.cx != params.cx || a.cy != params.cy || a.r != params.r || a.rx != params.rx || a.ry != params.ry),
                            res = o;

                        for (var par in params) {
                            if (params[has](par)) {
                                a[par] = params[par];
                            }
                        }if (newpath) {
                            a.path = R._getPath[o.type](o);
                            o._.dirty = 1;
                        }
                        params.href && (node.href = params.href);
                        params.title && (node.title = params.title);
                        params.target && (node.target = params.target);
                        params.cursor && (s.cursor = params.cursor);
                        "blur" in params && o.blur(params.blur);
                        if (params.path && o.type == "path" || newpath) {
                            node.path = path2vml(~Str(a.path).toLowerCase().indexOf("r") ? R._pathToAbsolute(a.path) : a.path);
                            o._.dirty = 1;
                            if (o.type == "image") {
                                o._.fillpos = [a.x, a.y];
                                o._.fillsize = [a.width, a.height];
                                setCoords(o, 1, 1, 0, 0, 0);
                            }
                        }
                        "transform" in params && o.transform(params.transform);
                        if (isOval) {
                            var cx = +a.cx,
                                cy = +a.cy,
                                rx = +a.rx || +a.r || 0,
                                ry = +a.ry || +a.r || 0;
                            node.path = R.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", round((cx - rx) * zoom), round((cy - ry) * zoom), round((cx + rx) * zoom), round((cy + ry) * zoom), round(cx * zoom));
                            o._.dirty = 1;
                        }
                        if ("clip-rect" in params) {
                            var rect = Str(params["clip-rect"]).split(separator);
                            if (rect.length == 4) {
                                rect[2] = +rect[2] + +rect[0];
                                rect[3] = +rect[3] + +rect[1];
                                var div = node.clipRect || R._g.doc.createElement("div"),
                                    dstyle = div.style;
                                dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
                                if (!node.clipRect) {
                                    dstyle.position = "absolute";
                                    dstyle.top = 0;
                                    dstyle.left = 0;
                                    dstyle.width = o.paper.width + "px";
                                    dstyle.height = o.paper.height + "px";
                                    node.parentNode.insertBefore(div, node);
                                    div.appendChild(node);
                                    node.clipRect = div;
                                }
                            }
                            if (!params["clip-rect"]) {
                                node.clipRect && (node.clipRect.style.clip = "auto");
                            }
                        }
                        if (o.textpath) {
                            var textpathStyle = o.textpath.style;
                            params.font && (textpathStyle.font = params.font);
                            params["font-family"] && (textpathStyle.fontFamily = '"' + params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, E) + '"');
                            params["font-size"] && (textpathStyle.fontSize = params["font-size"]);
                            params["font-weight"] && (textpathStyle.fontWeight = params["font-weight"]);
                            params["font-style"] && (textpathStyle.fontStyle = params["font-style"]);
                        }
                        if ("arrow-start" in params) {
                            addArrow(res, params["arrow-start"]);
                        }
                        if ("arrow-end" in params) {
                            addArrow(res, params["arrow-end"], 1);
                        }
                        if (params.opacity != null || params.fill != null || params.src != null || params.stroke != null || params["stroke-width"] != null || params["stroke-opacity"] != null || params["fill-opacity"] != null || params["stroke-dasharray"] != null || params["stroke-miterlimit"] != null || params["stroke-linejoin"] != null || params["stroke-linecap"] != null) {
                            var fill = node.getElementsByTagName(fillString),
                                newfill = false;
                            fill = fill && fill[0];
                            !fill && (newfill = fill = createNode(fillString));
                            if (o.type == "image" && params.src) {
                                fill.src = params.src;
                            }
                            params.fill && (fill.on = true);
                            if (fill.on == null || params.fill == "none" || params.fill === null) {
                                fill.on = false;
                            }
                            if (fill.on && params.fill) {
                                var isURL = Str(params.fill).match(R._ISURL);
                                if (isURL) {
                                    fill.parentNode == node && node.removeChild(fill);
                                    fill.rotate = true;
                                    fill.src = isURL[1];
                                    fill.type = "tile";
                                    var bbox = o.getBBox(1);
                                    fill.position = bbox.x + S + bbox.y;
                                    o._.fillpos = [bbox.x, bbox.y];

                                    R._preload(isURL[1], function () {
                                        o._.fillsize = [this.offsetWidth, this.offsetHeight];
                                    });
                                } else {
                                    fill.color = R.getRGB(params.fill).hex;
                                    fill.src = E;
                                    fill.type = "solid";
                                    if (R.getRGB(params.fill).error && (res.type in { circle: 1, ellipse: 1 } || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {
                                        a.fill = "none";
                                        a.gradient = params.fill;
                                        fill.rotate = false;
                                    }
                                }
                            }
                            if ("fill-opacity" in params || "opacity" in params) {
                                var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);
                                opacity = mmin(mmax(opacity, 0), 1);
                                fill.opacity = opacity;
                                if (fill.src) {
                                    fill.color = "none";
                                }
                            }
                            node.appendChild(fill);
                            var stroke = node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0],
                                newstroke = false;
                            !stroke && (newstroke = stroke = createNode("stroke"));
                            if (params.stroke && params.stroke != "none" || params["stroke-width"] || params["stroke-opacity"] != null || params["stroke-dasharray"] || params["stroke-miterlimit"] || params["stroke-linejoin"] || params["stroke-linecap"]) {
                                stroke.on = true;
                            }
                            (params.stroke == "none" || params.stroke === null || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);
                            var strokeColor = R.getRGB(params.stroke);
                            stroke.on && params.stroke && (stroke.color = strokeColor.hex);
                            opacity = ((+a["stroke-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.o + 1 || 2) - 1);
                            var width = (toFloat(params["stroke-width"]) || 1) * .75;
                            opacity = mmin(mmax(opacity, 0), 1);
                            params["stroke-width"] == null && (width = a["stroke-width"]);
                            params["stroke-width"] && (stroke.weight = width);
                            width && width < 1 && (opacity *= width) && (stroke.weight = 1);
                            stroke.opacity = opacity;

                            params["stroke-linejoin"] && (stroke.joinstyle = params["stroke-linejoin"] || "miter");
                            stroke.miterlimit = params["stroke-miterlimit"] || 8;
                            params["stroke-linecap"] && (stroke.endcap = params["stroke-linecap"] == "butt" ? "flat" : params["stroke-linecap"] == "square" ? "square" : "round");
                            if ("stroke-dasharray" in params) {
                                var dasharray = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                };
                                stroke.dashstyle = dasharray[has](params["stroke-dasharray"]) ? dasharray[params["stroke-dasharray"]] : E;
                            }
                            newstroke && node.appendChild(stroke);
                        }
                        if (res.type == "text") {
                            res.paper.canvas.style.display = E;
                            var span = res.paper.span,
                                m = 100,
                                fontSize = a.font && a.font.match(/\d+(?:\.\d*)?(?=px)/);
                            s = span.style;
                            a.font && (s.font = a.font);
                            a["font-family"] && (s.fontFamily = a["font-family"]);
                            a["font-weight"] && (s.fontWeight = a["font-weight"]);
                            a["font-style"] && (s.fontStyle = a["font-style"]);
                            fontSize = toFloat(a["font-size"] || fontSize && fontSize[0]) || 10;
                            s.fontSize = fontSize * m + "px";
                            res.textpath.string && (span.innerHTML = Str(res.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                            var brect = span.getBoundingClientRect();
                            res.W = a.w = (brect.right - brect.left) / m;
                            res.H = a.h = (brect.bottom - brect.top) / m;
                            // res.paper.canvas.style.display = "none";
                            res.X = a.x;
                            res.Y = a.y + res.H / 2;

                            ("x" in params || "y" in params) && (res.path.v = R.format("m{0},{1}l{2},{1}", round(a.x * zoom), round(a.y * zoom), round(a.x * zoom) + 1));
                            var dirtyattrs = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
                            for (var d = 0, dd = dirtyattrs.length; d < dd; d++) {
                                if (dirtyattrs[d] in params) {
                                    res._.dirty = 1;
                                    break;
                                }
                            } // text-anchor emulation
                            switch (a["text-anchor"]) {
                                case "start":
                                    res.textpath.style["v-text-align"] = "left";
                                    res.bbx = res.W / 2;
                                    break;
                                case "end":
                                    res.textpath.style["v-text-align"] = "right";
                                    res.bbx = -res.W / 2;
                                    break;
                                default:
                                    res.textpath.style["v-text-align"] = "center";
                                    res.bbx = 0;
                                    break;
                            }
                            res.textpath.style["v-text-kern"] = true;
                        }
                        // res.paper.canvas.style.display = E;
                    },
                        addGradientFill = function addGradientFill(o, gradient, fill) {
                        o.attrs = o.attrs || {};
                        var attrs = o.attrs,
                            pow = Math.pow,
                            opacity,
                            oindex,
                            type = "linear",
                            fxfy = ".5 .5";
                        o.attrs.gradient = gradient;
                        gradient = Str(gradient).replace(R._radial_gradient, function (all, fx, fy) {
                            type = "radial";
                            if (fx && fy) {
                                fx = toFloat(fx);
                                fy = toFloat(fy);
                                pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = math.sqrt(.25 - pow(fx - .5, 2)) * ((fy > .5) * 2 - 1) + .5);
                                fxfy = fx + S + fy;
                            }
                            return E;
                        });
                        gradient = gradient.split(/\s*\-\s*/);
                        if (type == "linear") {
                            var angle = gradient.shift();
                            angle = -toFloat(angle);
                            if (isNaN(angle)) {
                                return null;
                            }
                        }
                        var dots = R._parseDots(gradient);
                        if (!dots) {
                            return null;
                        }
                        o = o.shape || o.node;
                        if (dots.length) {
                            o.removeChild(fill);
                            fill.on = true;
                            fill.method = "none";
                            fill.color = dots[0].color;
                            fill.color2 = dots[dots.length - 1].color;
                            var clrs = [];
                            for (var i = 0, ii = dots.length; i < ii; i++) {
                                dots[i].offset && clrs.push(dots[i].offset + S + dots[i].color);
                            }
                            fill.colors = clrs.length ? clrs.join() : "0% " + fill.color;
                            if (type == "radial") {
                                fill.type = "gradientTitle";
                                fill.focus = "100%";
                                fill.focussize = "0 0";
                                fill.focusposition = fxfy;
                                fill.angle = 0;
                            } else {
                                // fill.rotate= true;
                                fill.type = "gradient";
                                fill.angle = (270 - angle) % 360;
                            }
                            o.appendChild(fill);
                        }
                        return 1;
                    },
                        Element = function Element(node, vml) {
                        this[0] = this.node = node;
                        node.raphael = true;
                        this.id = R._oid++;
                        node.raphaelid = this.id;
                        this.X = 0;
                        this.Y = 0;
                        this.attrs = {};
                        this.paper = vml;
                        this.matrix = R.matrix();
                        this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1
                        };
                        !vml.bottom && (vml.bottom = this);
                        this.prev = vml.top;
                        vml.top && (vml.top.next = this);
                        vml.top = this;
                        this.next = null;
                    };
                    var elproto = R.el;

                    Element.prototype = elproto;
                    elproto.constructor = Element;
                    elproto.transform = function (tstr) {
                        if (tstr == null) {
                            return this._.transform;
                        }
                        var vbs = this.paper._viewBoxShift,
                            vbt = vbs ? "s" + [vbs.scale, vbs.scale] + "-1-1t" + [vbs.dx, vbs.dy] : E,
                            oldt;
                        if (vbs) {
                            oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, this._.transform || E);
                        }
                        R._extractTransform(this, vbt + tstr);
                        var matrix = this.matrix.clone(),
                            skew = this.skew,
                            o = this.node,
                            split,
                            isGrad = ~Str(this.attrs.fill).indexOf("-"),
                            isPatt = !Str(this.attrs.fill).indexOf("url(");
                        matrix.translate(1, 1);
                        if (isPatt || isGrad || this.type == "image") {
                            skew.matrix = "1 0 0 1";
                            skew.offset = "0 0";
                            split = matrix.split();
                            if (isGrad && split.noRotation || !split.isSimple) {
                                o.style.filter = matrix.toFilter();
                                var bb = this.getBBox(),
                                    bbt = this.getBBox(1),
                                    dx = bb.x - bbt.x,
                                    dy = bb.y - bbt.y;
                                o.coordorigin = dx * -zoom + S + dy * -zoom;
                                setCoords(this, 1, 1, dx, dy, 0);
                            } else {
                                o.style.filter = E;
                                setCoords(this, split.scalex, split.scaley, split.dx, split.dy, split.rotate);
                            }
                        } else {
                            o.style.filter = E;
                            skew.matrix = Str(matrix);
                            skew.offset = matrix.offset();
                        }
                        if (oldt !== null) {
                            // empty string value is true as well
                            this._.transform = oldt;
                            R._extractTransform(this, oldt);
                        }
                        return this;
                    };
                    elproto.rotate = function (deg, cx, cy) {
                        if (this.removed) {
                            return this;
                        }
                        if (deg == null) {
                            return;
                        }
                        deg = Str(deg).split(separator);
                        if (deg.length - 1) {
                            cx = toFloat(deg[1]);
                            cy = toFloat(deg[2]);
                        }
                        deg = toFloat(deg[0]);
                        cy == null && (cx = cy);
                        if (cx == null || cy == null) {
                            var bbox = this.getBBox(1);
                            cx = bbox.x + bbox.width / 2;
                            cy = bbox.y + bbox.height / 2;
                        }
                        this._.dirtyT = 1;
                        this.transform(this._.transform.concat([["r", deg, cx, cy]]));
                        return this;
                    };
                    elproto.translate = function (dx, dy) {
                        if (this.removed) {
                            return this;
                        }
                        dx = Str(dx).split(separator);
                        if (dx.length - 1) {
                            dy = toFloat(dx[1]);
                        }
                        dx = toFloat(dx[0]) || 0;
                        dy = +dy || 0;
                        if (this._.bbox) {
                            this._.bbox.x += dx;
                            this._.bbox.y += dy;
                        }
                        this.transform(this._.transform.concat([["t", dx, dy]]));
                        return this;
                    };
                    elproto.scale = function (sx, sy, cx, cy) {
                        if (this.removed) {
                            return this;
                        }
                        sx = Str(sx).split(separator);
                        if (sx.length - 1) {
                            sy = toFloat(sx[1]);
                            cx = toFloat(sx[2]);
                            cy = toFloat(sx[3]);
                            isNaN(cx) && (cx = null);
                            isNaN(cy) && (cy = null);
                        }
                        sx = toFloat(sx[0]);
                        sy == null && (sy = sx);
                        cy == null && (cx = cy);
                        if (cx == null || cy == null) {
                            var bbox = this.getBBox(1);
                        }
                        cx = cx == null ? bbox.x + bbox.width / 2 : cx;
                        cy = cy == null ? bbox.y + bbox.height / 2 : cy;

                        this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
                        this._.dirtyT = 1;
                        return this;
                    };
                    elproto.hide = function () {
                        !this.removed && (this.node.style.display = "none");
                        return this;
                    };
                    elproto.show = function () {
                        !this.removed && (this.node.style.display = E);
                        return this;
                    };
                    // Needed to fix the vml setViewBox issues
                    elproto.auxGetBBox = R.el.getBBox;
                    elproto.getBBox = function () {
                        var b = this.auxGetBBox();
                        if (this.paper && this.paper._viewBoxShift) {
                            var c = {};
                            var z = 1 / this.paper._viewBoxShift.scale;
                            c.x = b.x - this.paper._viewBoxShift.dx;
                            c.x *= z;
                            c.y = b.y - this.paper._viewBoxShift.dy;
                            c.y *= z;
                            c.width = b.width * z;
                            c.height = b.height * z;
                            c.x2 = c.x + c.width;
                            c.y2 = c.y + c.height;
                            return c;
                        }
                        return b;
                    };
                    elproto._getBBox = function () {
                        if (this.removed) {
                            return {};
                        }
                        return {
                            x: this.X + (this.bbx || 0) - this.W / 2,
                            y: this.Y - this.H,
                            width: this.W,
                            height: this.H
                        };
                    };
                    elproto.remove = function () {
                        if (this.removed || !this.node.parentNode) {
                            return;
                        }
                        this.paper.__set__ && this.paper.__set__.exclude(this);
                        R.eve.unbind("raphael.*.*." + this.id);
                        R._tear(this, this.paper);
                        this.node.parentNode.removeChild(this.node);
                        this.shape && this.shape.parentNode.removeChild(this.shape);
                        for (var i in this) {
                            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
                        }
                        this.removed = true;
                    };
                    elproto.attr = function (name, value) {
                        if (this.removed) {
                            return this;
                        }
                        if (name == null) {
                            var res = {};
                            for (var a in this.attrs) {
                                if (this.attrs[has](a)) {
                                    res[a] = this.attrs[a];
                                }
                            }res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
                            res.transform = this._.transform;
                            return res;
                        }
                        if (value == null && R.is(name, "string")) {
                            if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
                                return this.attrs.gradient;
                            }
                            var names = name.split(separator),
                                out = {};
                            for (var i = 0, ii = names.length; i < ii; i++) {
                                name = names[i];
                                if (name in this.attrs) {
                                    out[name] = this.attrs[name];
                                } else if (R.is(this.paper.customAttributes[name], "function")) {
                                    out[name] = this.paper.customAttributes[name].def;
                                } else {
                                    out[name] = R._availableAttrs[name];
                                }
                            }
                            return ii - 1 ? out : out[names[0]];
                        }
                        if (this.attrs && value == null && R.is(name, "array")) {
                            out = {};
                            for (i = 0, ii = name.length; i < ii; i++) {
                                out[name[i]] = this.attr(name[i]);
                            }
                            return out;
                        }
                        var params;
                        if (value != null) {
                            params = {};
                            params[name] = value;
                        }
                        value == null && R.is(name, "object") && (params = name);
                        for (var key in params) {
                            eve("raphael.attr." + key + "." + this.id, this, params[key]);
                        }
                        if (params) {
                            for (key in this.paper.customAttributes) {
                                if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
                                    var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
                                    this.attrs[key] = params[key];
                                    for (var subkey in par) {
                                        if (par[has](subkey)) {
                                            params[subkey] = par[subkey];
                                        }
                                    }
                                }
                            } // this.paper.canvas.style.display = "none";
                            if (params.text && this.type == "text") {
                                this.textpath.string = params.text;
                            }
                            setFillAndStroke(this, params);
                            // this.paper.canvas.style.display = E;
                        }
                        return this;
                    };
                    elproto.toFront = function () {
                        !this.removed && this.node.parentNode.appendChild(this.node);
                        this.paper && this.paper.top != this && R._tofront(this, this.paper);
                        return this;
                    };
                    elproto.toBack = function () {
                        if (this.removed) {
                            return this;
                        }
                        if (this.node.parentNode.firstChild != this.node) {
                            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
                            R._toback(this, this.paper);
                        }
                        return this;
                    };
                    elproto.insertAfter = function (element) {
                        if (this.removed) {
                            return this;
                        }
                        if (element.constructor == R.st.constructor) {
                            element = element[element.length - 1];
                        }
                        if (element.node.nextSibling) {
                            element.node.parentNode.insertBefore(this.node, element.node.nextSibling);
                        } else {
                            element.node.parentNode.appendChild(this.node);
                        }
                        R._insertafter(this, element, this.paper);
                        return this;
                    };
                    elproto.insertBefore = function (element) {
                        if (this.removed) {
                            return this;
                        }
                        if (element.constructor == R.st.constructor) {
                            element = element[0];
                        }
                        element.node.parentNode.insertBefore(this.node, element.node);
                        R._insertbefore(this, element, this.paper);
                        return this;
                    };
                    elproto.blur = function (size) {
                        var s = this.node.runtimeStyle,
                            f = s.filter;
                        f = f.replace(blurregexp, E);
                        if (+size !== 0) {
                            this.attrs.blur = size;
                            s.filter = f + S + ms + ".Blur(pixelradius=" + (+size || 1.5) + ")";
                            s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));
                        } else {
                            s.filter = f;
                            s.margin = 0;
                            delete this.attrs.blur;
                        }
                        return this;
                    };

                    R._engine.path = function (pathString, vml) {
                        var el = createNode("shape");
                        el.style.cssText = cssDot;
                        el.coordsize = zoom + S + zoom;
                        el.coordorigin = vml.coordorigin;
                        var p = new Element(el, vml),
                            attr = { fill: "none", stroke: "#000" };
                        pathString && (attr.path = pathString);
                        p.type = "path";
                        p.path = [];
                        p.Path = E;
                        setFillAndStroke(p, attr);
                        vml.canvas && vml.canvas.appendChild(el);
                        var skew = createNode("skew");
                        skew.on = true;
                        el.appendChild(skew);
                        p.skew = skew;
                        p.transform(E);
                        return p;
                    };
                    R._engine.rect = function (vml, x, y, w, h, r) {
                        var path = R._rectPath(x, y, w, h, r),
                            res = vml.path(path),
                            a = res.attrs;
                        res.X = a.x = x;
                        res.Y = a.y = y;
                        res.W = a.width = w;
                        res.H = a.height = h;
                        a.r = r;
                        a.path = path;
                        res.type = "rect";
                        return res;
                    };
                    R._engine.ellipse = function (vml, x, y, rx, ry) {
                        var res = vml.path(),
                            a = res.attrs;
                        res.X = x - rx;
                        res.Y = y - ry;
                        res.W = rx * 2;
                        res.H = ry * 2;
                        res.type = "ellipse";
                        setFillAndStroke(res, {
                            cx: x,
                            cy: y,
                            rx: rx,
                            ry: ry
                        });
                        return res;
                    };
                    R._engine.circle = function (vml, x, y, r) {
                        var res = vml.path(),
                            a = res.attrs;
                        res.X = x - r;
                        res.Y = y - r;
                        res.W = res.H = r * 2;
                        res.type = "circle";
                        setFillAndStroke(res, {
                            cx: x,
                            cy: y,
                            r: r
                        });
                        return res;
                    };
                    R._engine.image = function (vml, src, x, y, w, h) {
                        var path = R._rectPath(x, y, w, h),
                            res = vml.path(path).attr({ stroke: "none" }),
                            a = res.attrs,
                            node = res.node,
                            fill = node.getElementsByTagName(fillString)[0];
                        a.src = src;
                        res.X = a.x = x;
                        res.Y = a.y = y;
                        res.W = a.width = w;
                        res.H = a.height = h;
                        a.path = path;
                        res.type = "image";
                        fill.parentNode == node && node.removeChild(fill);
                        fill.rotate = true;
                        fill.src = src;
                        fill.type = "tile";
                        res._.fillpos = [x, y];
                        res._.fillsize = [w, h];
                        node.appendChild(fill);
                        setCoords(res, 1, 1, 0, 0, 0);
                        return res;
                    };
                    R._engine.text = function (vml, x, y, text) {
                        var el = createNode("shape"),
                            path = createNode("path"),
                            o = createNode("textpath");
                        x = x || 0;
                        y = y || 0;
                        text = text || "";
                        path.v = R.format("m{0},{1}l{2},{1}", round(x * zoom), round(y * zoom), round(x * zoom) + 1);
                        path.textpathok = true;
                        o.string = Str(text);
                        o.on = true;
                        el.style.cssText = cssDot;
                        el.coordsize = zoom + S + zoom;
                        el.coordorigin = "0 0";
                        var p = new Element(el, vml),
                            attr = {
                            fill: "#000",
                            stroke: "none",
                            font: R._availableAttrs.font,
                            text: text
                        };
                        p.shape = el;
                        p.path = path;
                        p.textpath = o;
                        p.type = "text";
                        p.attrs.text = Str(text);
                        p.attrs.x = x;
                        p.attrs.y = y;
                        p.attrs.w = 1;
                        p.attrs.h = 1;
                        setFillAndStroke(p, attr);
                        el.appendChild(o);
                        el.appendChild(path);
                        vml.canvas.appendChild(el);
                        var skew = createNode("skew");
                        skew.on = true;
                        el.appendChild(skew);
                        p.skew = skew;
                        p.transform(E);
                        return p;
                    };
                    R._engine.setSize = function (width, height) {
                        var cs = this.canvas.style;
                        this.width = width;
                        this.height = height;
                        width == +width && (width += "px");
                        height == +height && (height += "px");
                        cs.width = width;
                        cs.height = height;
                        cs.clip = "rect(0 " + width + " " + height + " 0)";
                        if (this._viewBox) {
                            R._engine.setViewBox.apply(this, this._viewBox);
                        }
                        return this;
                    };
                    R._engine.setViewBox = function (x, y, w, h, fit) {
                        R.eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
                        var paperSize = this.getSize(),
                            width = paperSize.width,
                            height = paperSize.height,
                            H,
                            W;
                        if (fit) {
                            H = height / h;
                            W = width / w;
                            if (w * H < width) {
                                x -= (width - w * H) / 2 / H;
                            }
                            if (h * W < height) {
                                y -= (height - h * W) / 2 / W;
                            }
                        }
                        this._viewBox = [x, y, w, h, !!fit];
                        this._viewBoxShift = {
                            dx: -x,
                            dy: -y,
                            scale: paperSize
                        };
                        this.forEach(function (el) {
                            el.transform("...");
                        });
                        return this;
                    };
                    var createNode;
                    R._engine.initWin = function (win) {
                        var doc = win.document;
                        if (doc.styleSheets.length < 31) {
                            doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                        } else {
                            // no more room, add to the existing one
                            // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
                            doc.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
                        }
                        try {
                            !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
                            createNode = function createNode(tagName) {
                                return doc.createElement('<rvml:' + tagName + ' class="rvml">');
                            };
                        } catch (e) {
                            createNode = function createNode(tagName) {
                                return doc.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
                            };
                        }
                    };
                    R._engine.initWin(R._g.win);
                    R._engine.create = function () {
                        var con = R._getContainer.apply(0, arguments),
                            container = con.container,
                            height = con.height,
                            s,
                            width = con.width,
                            x = con.x,
                            y = con.y;
                        if (!container) {
                            throw new Error("VML container not found.");
                        }
                        var res = new R._Paper(),
                            c = res.canvas = R._g.doc.createElement("div"),
                            cs = c.style;
                        x = x || 0;
                        y = y || 0;
                        width = width || 512;
                        height = height || 342;
                        res.width = width;
                        res.height = height;
                        width == +width && (width += "px");
                        height == +height && (height += "px");
                        res.coordsize = zoom * 1e3 + S + zoom * 1e3;
                        res.coordorigin = "0 0";
                        res.span = R._g.doc.createElement("span");
                        res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
                        c.appendChild(res.span);
                        cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);
                        if (container == 1) {
                            R._g.doc.body.appendChild(c);
                            cs.left = x + "px";
                            cs.top = y + "px";
                            cs.position = "absolute";
                        } else {
                            if (container.firstChild) {
                                container.insertBefore(c, container.firstChild);
                            } else {
                                container.appendChild(c);
                            }
                        }
                        res.renderfix = function () {};
                        return res;
                    };
                    R.prototype.clear = function () {
                        R.eve("raphael.clear", this);
                        this.canvas.innerHTML = E;
                        this.span = R._g.doc.createElement("span");
                        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
                        this.canvas.appendChild(this.span);
                        this.bottom = this.top = null;
                    };
                    R.prototype.remove = function () {
                        R.eve("raphael.remove", this);
                        this.canvas.parentNode.removeChild(this.canvas);
                        for (var i in this) {
                            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
                        }
                        return true;
                    };

                    var setproto = R.st;
                    for (var method in elproto) {
                        if (elproto[has](method) && !setproto[has](method)) {
                            setproto[method] = function (methodname) {
                                return function () {
                                    var arg = arguments;
                                    return this.forEach(function (el) {
                                        el[methodname].apply(el, arg);
                                    });
                                };
                            }(method);
                        }
                    }
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

                /***/
            },

            /***/"./node_modules/eve-raphael/eve.js":
            /*!*****************************************!*\
              !*** ./node_modules/eve-raphael/eve.js ***!
              \*****************************************/
            /*! no static exports found */
            /***/function node_modulesEveRaphaelEveJs(module, exports, __webpack_require__) {

                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
                // 
                // Licensed under the Apache License, Version 2.0 (the "License");
                // you may not use this file except in compliance with the License.
                // You may obtain a copy of the License at
                // 
                // http://www.apache.org/licenses/LICENSE-2.0
                // 
                // Unless required by applicable law or agreed to in writing, software
                // distributed under the License is distributed on an "AS IS" BASIS,
                // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                // See the License for the specific language governing permissions and
                // limitations under the License.
                // ┌────────────────────────────────────────────────────────────┐ \\
                // │ Eve 0.5.0 - JavaScript Events Library                      │ \\
                // ├────────────────────────────────────────────────────────────┤ \\
                // │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
                // └────────────────────────────────────────────────────────────┘ \\

                (function (glob) {
                    var version = "0.5.0",
                        has = "hasOwnProperty",
                        separator = /[\.\/]/,
                        comaseparator = /\s*,\s*/,
                        wildcard = "*",
                        fun = function fun() {},
                        numsort = function numsort(a, b) {
                        return a - b;
                    },
                        current_event,
                        stop,
                        events = { n: {} },
                        firstDefined = function firstDefined() {
                        for (var i = 0, ii = this.length; i < ii; i++) {
                            if (typeof this[i] != "undefined") {
                                return this[i];
                            }
                        }
                    },
                        lastDefined = function lastDefined() {
                        var i = this.length;
                        while (--i) {
                            if (typeof this[i] != "undefined") {
                                return this[i];
                            }
                        }
                    },
                        objtos = Object.prototype.toString,
                        Str = String,
                        isArray = Array.isArray || function (ar) {
                        return ar instanceof Array || objtos.call(ar) == "[object Array]";
                    };
                    /*\
                     * eve
                     [ method ]
                      * Fires event with given `name`, given scope and other parameters.
                      > Arguments
                      - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
                     - scope (object) context for the event handlers
                     - varargs (...) the rest of arguments will be sent to event handlers
                      = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
                    \*/
                    var eve = function eve(name, scope) {
                        var e = events,
                            oldstop = stop,
                            args = Array.prototype.slice.call(arguments, 2),
                            listeners = eve.listeners(name),
                            z = 0,
                            f = false,
                            l,
                            indexed = [],
                            queue = {},
                            out = [],
                            ce = current_event,
                            errors = [];
                        out.firstDefined = firstDefined;
                        out.lastDefined = lastDefined;
                        current_event = name;
                        stop = 0;
                        for (var i = 0, ii = listeners.length; i < ii; i++) {
                            if ("zIndex" in listeners[i]) {
                                indexed.push(listeners[i].zIndex);
                                if (listeners[i].zIndex < 0) {
                                    queue[listeners[i].zIndex] = listeners[i];
                                }
                            }
                        }indexed.sort(numsort);
                        while (indexed[z] < 0) {
                            l = queue[indexed[z++]];
                            out.push(l.apply(scope, args));
                            if (stop) {
                                stop = oldstop;
                                return out;
                            }
                        }
                        for (i = 0; i < ii; i++) {
                            l = listeners[i];
                            if ("zIndex" in l) {
                                if (l.zIndex == indexed[z]) {
                                    out.push(l.apply(scope, args));
                                    if (stop) {
                                        break;
                                    }
                                    do {
                                        z++;
                                        l = queue[indexed[z]];
                                        l && out.push(l.apply(scope, args));
                                        if (stop) {
                                            break;
                                        }
                                    } while (l);
                                } else {
                                    queue[l.zIndex] = l;
                                }
                            } else {
                                out.push(l.apply(scope, args));
                                if (stop) {
                                    break;
                                }
                            }
                        }
                        stop = oldstop;
                        current_event = ce;
                        return out;
                    };
                    // Undocumented. Debug only.
                    eve._events = events;
                    /*\
                     * eve.listeners
                     [ method ]
                      * Internal method which gives you array of all event handlers that will be triggered by the given `name`.
                      > Arguments
                      - name (string) name of the event, dot (`.`) or slash (`/`) separated
                      = (array) array of event handlers
                    \*/
                    eve.listeners = function (name) {
                        var names = isArray(name) ? name : name.split(separator),
                            e = events,
                            item,
                            items,
                            k,
                            i,
                            ii,
                            j,
                            jj,
                            nes,
                            es = [e],
                            out = [];
                        for (i = 0, ii = names.length; i < ii; i++) {
                            nes = [];
                            for (j = 0, jj = es.length; j < jj; j++) {
                                e = es[j].n;
                                items = [e[names[i]], e[wildcard]];
                                k = 2;
                                while (k--) {
                                    item = items[k];
                                    if (item) {
                                        nes.push(item);
                                        out = out.concat(item.f || []);
                                    }
                                }
                            }
                            es = nes;
                        }
                        return out;
                    };
                    /*\
                     * eve.separator
                     [ method ]
                      * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
                     * here. Be aware that if you pass a string longer than one character it will be treated as
                     * a list of characters.
                      - separator (string) new separator. Empty string resets to default: `.` or `/`.
                    \*/
                    eve.separator = function (sep) {
                        if (sep) {
                            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
                            sep = "[" + sep + "]";
                            separator = new RegExp(sep);
                        } else {
                            separator = /[\.\/]/;
                        }
                    };
                    /*\
                     * eve.on
                     [ method ]
                     **
                     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
                     | eve.on("*.under.*", f);
                     | eve("mouse.under.floor"); // triggers f
                     * Use @eve to trigger the listener.
                     **
                     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
                     - f (function) event handler function
                     **
                     - name (array) if you don’t want to use separators, you can use array of strings
                     - f (function) event handler function
                     **
                     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
                     > Example:
                     | eve.on("mouse", eatIt)(2);
                     | eve.on("mouse", scream);
                     | eve.on("mouse", catchIt)(1);
                     * This will ensure that `catchIt` function will be called before `eatIt`.
                     *
                     * If you want to put your handler before non-indexed handlers, specify a negative value.
                     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
                    \*/
                    eve.on = function (name, f) {
                        if (typeof f != "function") {
                            return function () {};
                        }
                        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
                        for (var i = 0, ii = names.length; i < ii; i++) {
                            (function (name) {
                                var names = isArray(name) ? name : Str(name).split(separator),
                                    e = events,
                                    exist;
                                for (var i = 0, ii = names.length; i < ii; i++) {
                                    e = e.n;
                                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = { n: {} });
                                }
                                e.f = e.f || [];
                                for (i = 0, ii = e.f.length; i < ii; i++) {
                                    if (e.f[i] == f) {
                                        exist = true;
                                        break;
                                    }
                                }!exist && e.f.push(f);
                            })(names[i]);
                        }
                        return function (zIndex) {
                            if (+zIndex == +zIndex) {
                                f.zIndex = +zIndex;
                            }
                        };
                    };
                    /*\
                     * eve.f
                     [ method ]
                     **
                     * Returns function that will fire given event with optional arguments.
                     * Arguments that will be passed to the result function will be also
                     * concated to the list of final arguments.
                     | el.onclick = eve.f("click", 1, 2);
                     | eve.on("click", function (a, b, c) {
                     |     console.log(a, b, c); // 1, 2, [event object]
                     | });
                     > Arguments
                     - event (string) event name
                     - varargs (…) and any other arguments
                     = (function) possible event handler function
                    \*/
                    eve.f = function (event) {
                        var attrs = [].slice.call(arguments, 1);
                        return function () {
                            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
                        };
                    };
                    /*\
                     * eve.stop
                     [ method ]
                     **
                     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
                    \*/
                    eve.stop = function () {
                        stop = 1;
                    };
                    /*\
                     * eve.nt
                     [ method ]
                     **
                     * Could be used inside event handler to figure out actual name of the event.
                     **
                     > Arguments
                     **
                     - subname (string) #optional subname of the event
                     **
                     = (string) name of the event, if `subname` is not specified
                     * or
                     = (boolean) `true`, if current event’s name contains `subname`
                    \*/
                    eve.nt = function (subname) {
                        var cur = isArray(current_event) ? current_event.join(".") : current_event;
                        if (subname) {
                            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
                        }
                        return cur;
                    };
                    /*\
                     * eve.nts
                     [ method ]
                     **
                     * Could be used inside event handler to figure out actual name of the event.
                     **
                     **
                     = (array) names of the event
                    \*/
                    eve.nts = function () {
                        return isArray(current_event) ? current_event : current_event.split(separator);
                    };
                    /*\
                     * eve.off
                     [ method ]
                     **
                     * Removes given function from the list of event listeners assigned to given name.
                     * If no arguments specified all the events will be cleared.
                     **
                     > Arguments
                     **
                     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
                     - f (function) event handler function
                    \*/
                    /*\
                     * eve.unbind
                     [ method ]
                     **
                     * See @eve.off
                    \*/
                    eve.off = eve.unbind = function (name, f) {
                        if (!name) {
                            eve._events = events = { n: {} };
                            return;
                        }
                        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
                        if (names.length > 1) {
                            for (var i = 0, ii = names.length; i < ii; i++) {
                                eve.off(names[i], f);
                            }
                            return;
                        }
                        names = isArray(name) ? name : Str(name).split(separator);
                        var e,
                            key,
                            splice,
                            i,
                            ii,
                            j,
                            jj,
                            cur = [events];
                        for (i = 0, ii = names.length; i < ii; i++) {
                            for (j = 0; j < cur.length; j += splice.length - 2) {
                                splice = [j, 1];
                                e = cur[j].n;
                                if (names[i] != wildcard) {
                                    if (e[names[i]]) {
                                        splice.push(e[names[i]]);
                                    }
                                } else {
                                    for (key in e) {
                                        if (e[has](key)) {
                                            splice.push(e[key]);
                                        }
                                    }
                                }
                                cur.splice.apply(cur, splice);
                            }
                        }
                        for (i = 0, ii = cur.length; i < ii; i++) {
                            e = cur[i];
                            while (e.n) {
                                if (f) {
                                    if (e.f) {
                                        for (j = 0, jj = e.f.length; j < jj; j++) {
                                            if (e.f[j] == f) {
                                                e.f.splice(j, 1);
                                                break;
                                            }
                                        }!e.f.length && delete e.f;
                                    }
                                    for (key in e.n) {
                                        if (e.n[has](key) && e.n[key].f) {
                                            var funcs = e.n[key].f;
                                            for (j = 0, jj = funcs.length; j < jj; j++) {
                                                if (funcs[j] == f) {
                                                    funcs.splice(j, 1);
                                                    break;
                                                }
                                            }!funcs.length && delete e.n[key].f;
                                        }
                                    }
                                } else {
                                    delete e.f;
                                    for (key in e.n) {
                                        if (e.n[has](key) && e.n[key].f) {
                                            delete e.n[key].f;
                                        }
                                    }
                                }
                                e = e.n;
                            }
                        }
                    };
                    /*\
                     * eve.once
                     [ method ]
                     **
                     * Binds given event handler with a given name to only run once then unbind itself.
                     | eve.once("login", f);
                     | eve("login"); // triggers f
                     | eve("login"); // no listeners
                     * Use @eve to trigger the listener.
                     **
                     > Arguments
                     **
                     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
                     - f (function) event handler function
                     **
                     = (function) same return function as @eve.on
                    \*/
                    eve.once = function (name, f) {
                        var f2 = function f2() {
                            eve.off(name, f2);
                            return f.apply(this, arguments);
                        };
                        return eve.on(name, f2);
                    };
                    /*\
                     * eve.version
                     [ property (string) ]
                     **
                     * Current version of the library.
                    \*/
                    eve.version = version;
                    eve.toString = function () {
                        return "You are running Eve " + version;
                    };
                    true && module.exports ? module.exports = eve : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                        return eve;
                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
                })(this);

                /***/
            }

            /******/ })
    );
});
'use strict';

/**
 * Circle Chart.
 *
 * James Sinclair
 * November 2013
 */
/*jslint browser:true, nomen:true*/
/*globals module, Raphael*/

var CircleChart = function () {
    "use strict";

    var defaults = {
        stroke: 8,
        maxVal: 100,
        colour: '#394c7c',
        animationSpeed: 1000,
        edgeWidth: 0,
        edgeGap: undefined,
        edgeColour: undefined,
        trackColour: '#bec3ce'

    };

    /**
     * String trim polyfill.
     */
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    /**
     * Query Selector.
     */
    function $(cssStr) {
        return document.querySelector(cssStr);
    }

    /**
     * Shallow Extend.
     *
     * Modified from http://stackoverflow.com/a/11197343
     */
    function extend() {
        var i,
            key,
            args = arguments;
        for (i = 1; i < args.length; i += 1) {
            for (key in args[i]) {
                if (args[i].hasOwnProperty(key)) {
                    args[0][key] = args[i][key];
                }
            }
        }
        return args[0];
    }

    /**
     * Arc Function.
     */
    function arc(xloc, yloc, value, total, R) {
        var alpha = 360 / total * value,
            a = (90 - alpha) * Math.PI / 180,
            x = xloc + R * Math.cos(a),
            y = yloc - R * Math.sin(a),
            path;
        if (total === value) {
            path = [["M", xloc, yloc - R], ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]];
        } else {
            path = [["M", xloc, yloc - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
        }
        return {
            path: path
        };
    }

    /**
     * Constructor.
     */
    CircleChart = function CircleChart(elem, opts) {
        var w, txt, val, paper, config, observer, cc;

        cc = this;

        // Element
        this.elem = elem;

        // Defaults
        this.opts = extend({}, defaults, opts);

        w = elem.clientWidth;
        txt = elem.innerHTML.trim();
        val = parseFloat(elem.textContent.trim());

        // Adde event listener
        elem.addEventListener('resize', this.onresize);
        elem.addEventListener('click', this.onresize);

        this.val = 0;
        this.w = w;

        elem.innerHTML = '<div class="circle-chart__text">' + txt + '</div>';
        this.inner = $('.circle-chart__text');

        elem.setAttribute('style', 'font-size: ' + 0.25 * w + 'px');

        // Create SVG/VML containers
        paper = Raphael(elem, w, w);
        this.paper = paper;
        paper.customAttributes.arc = arc;

        this.createShapes();

        /**
         * Watch for resize event.
         */
        if (window.MutationObserver) {
            elem.setAttribute('data-orig-width', w);
            config = {
                attributes: true,
                childList: false,
                characterData: false
            };
            observer = new window.MutationObserver(function (mutations) {
                cc.resize();
            });
            observer.observe(elem, config);
        }

        this.changeValue(val);
    };

    /**
     * Create border
     */
    CircleChart.prototype.createBorder = function () {
        var paper = this.paper,
            w = this.w,
            s = this.opts.edgeWidth,
            circle = paper.circle(w / 2, w / 2, w / 2 - s / 2);
        circle.attr({
            stroke: this.opts.edgeColour,
            "stroke-width": s
        });
        return circle;
    };

    /**
     * Update border
     */
    CircleChart.prototype.updateBorder = function (speed, anim) {
        var cc = this,
            paper = cc.paper,
            w = cc.w,
            s = cc.opts.edgeWidth,
            circle = cc.shapes.outer,
            params = {
            "stroke": cc.opts.edgeColour,
            "stroke-width": s,
            "cx": w / 2,
            "cy": w / 2,
            "r": w / 2 - s / 2
        };
        if (anim) {
            circle.animateWith(cc.shapes.track, anim, params);
        }
        circle.animate(params, speed);
        return circle;
    };

    /**
     * Create track
     */
    CircleChart.prototype.createTrack = function () {
        var paper = this.paper,
            w = this.w,
            s = this.opts.stroke,
            ew = this.opts.edgeWidth,
            eg = this.opts.edgeGap === undefined ? ew : this.opts.edgeGap,
            r = w / 2 - this.opts.stroke / 2 - (ew + eg),
            track = paper.circle(w / 2, w / 2, r);
        track.attr({
            stroke: this.opts.trackColour,
            "stroke-width": s
        });
        return track;
    };

    /**
     * Update track
     */
    CircleChart.prototype.updateTrack = function (speed) {
        var cc = this,
            track = cc.shapes.track,
            w = cc.w,
            s = cc.opts.stroke,
            ew = cc.opts.edgeWidth,
            eg = cc.opts.edgeGap === undefined ? ew : cc.opts.edgeGap,
            r = w / 2 - this.opts.stroke / 2 - (ew + eg),
            anim = Raphael.animation({
            "r": r,
            "stroke-width": s,
            "cx": w / 2,
            "cy": w / 2
        }, speed);
        track.animate(anim);
        return anim;
    };

    /**
     * Create shapes
     */
    CircleChart.prototype.createShapes = function () {
        var paper = this.paper,
            w = this.w,
            s = this.opts.stroke,
            ew = this.opts.edgeWidth,
            eg = this.opts.edgeGap === undefined ? ew : this.opts.edgeGap,
            r = w / 2 - s / 2 - (ew + eg);
        this.shapes = {};

        // Create circular border.
        this.shapes.outer = this.createBorder();

        // Create track.
        this.shapes.track = this.createTrack();

        // Create the chart path.
        this.shapes.circ = paper.path("M" + w / 2 + " " + s / 2);
        this.shapes.circ.attr({
            "stroke-width": this.opts.stroke,
            stroke: this.opts.colour,
            arc: [w / 2, w / 2, 0, this.opts.maxVal, r]
        });
    };

    /**
     * Change value with an animation.
     */
    CircleChart.prototype.changeValue = function (val, animTime, callback, anim) {
        var s = this.opts.stroke,
            w = this.w,
            ew = this.opts.edgeWidth,
            eg = this.opts.edgeGap === undefined ? ew : this.opts.edgeGap,
            r = w / 2 - s / 2 - (ew + eg),
            speed = animTime !== undefined ? animTime : this.opts.animationSpeed,
            params = { arc: [w / 2, w / 2, val, this.opts.maxVal, r] },
            circ = this.shapes.circ;
        if (anim) {
            circ.animateWith(this.shapes.track, anim, params, speed, 'linear', callback);
        } else {
            circ.animate(params, speed, 'ease-in-out', callback);
        }
    };

    /**
     * Respond to a resize.
     */
    CircleChart.prototype.resize = function () {
        var cc = this,
            elem = cc.elem,
            w = elem.clientWidth,
            spd = cc.opts.animationSpeed,
            paper = cc.paper,
            anim;
        cc.w = w;
        paper.setSize(w, w);
        cc.shapes.circ.stop();
        anim = cc.updateTrack(spd);
        cc.updateBorder(spd, anim);
        cc.changeValue(parseFloat(cc.inner.innerHTML), spd, undefined, anim);
    };

    return CircleChart;
}();