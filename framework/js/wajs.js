function airmodeoff() {
    amenable == !0 && $(".navi").destroy()
}

function airmodeedit(n) {
    $("head").append('<link  rel="stylesheet" type="text/css" href="framework/css/summernote.css"/>');
    $.getScript("framework/js/summernote.min.js", function() {
        $(n).on("click", function() {
            $(".navi").destroy();
            $(this).summernote({
                airMode: !0
            })
        })
    })
}

function loadScript() {
    if (!googleMapsLoaded) {
        var n = document.createElement("script");
        n.type = "text/javascript";
        n.src = "http://maps.google.com/maps/api/js?key=AIzaSyAEcep5PL6IOJMoyXBchiy92GumJK-Y7fA&sensor=false&libraries=places&callback=naveen";
        document.body.appendChild(n);
        googleMapsLoaded = !0
    }
}

function naveen() {
    $.getScript("http://www.webamoeba.com/framework/js/locationpicker.jquery.js", function() {
        $(".gmap").each(function(n, t) {
            $(t).locationpicker({
                location: {
                    latitude: $(t).attr("data-lat"),
                    longitude: $(t).attr("data-long")
                },
                radius: 300
            })
        })
    })
}

function pagelive() {
    var n = markup();
    $("body").off("click", ".columns");
    $("body").on("click", ".columns", function() {
        $(this).parents(".row").before(n.Onerow);
        reset()
    });
    $("body").off("click", ".dvd");
    $("body").on("click", ".dvd", function() {
        $(".c").length > 0 ? ($(".c").empty(), $(".c").prepend("<hr/>"), $(".c").removeClass("c"), $(".e").droppable("disable"), $(".e").removeClass("e"), reset()) : ($(this).parents(".row").before("<hr/>"), reset())
    });
    $("body").on("click", ".ncdel", function() {
        var n = $(this).parents(".navi");
        $(n).empty().addClass("e");
        $(n).prev(".navi").children(".add").length > 0 && $(n).prev(".navi").append('<div class="wcmerger"><i class="fa fa-times" ><\/i><\/div>');
        reset()
    })
}

function reset() {
    console.log("addi");
    $(".wbody > .row:not(:has(div.add))").each(function() {
        var n = (new markup).Rowtools;
        $(this).prepend(n)
    });
    fdirty == !0 && $("div.row:not(:has(div.add))").each(function() {
        var n = (new markup).Rowtools;
        $(this).prepend(n)
    });
    $(".naviedit").find(".naviedit").removeClass("naviedit");
    $(".corner > .at").confirmation({
        title: " Are you sure?",
        btnOkLabel: '<i class="icon-ok-sign icon-white"><\/i> Yes',
        btnCancelLabel: '<i class="icon-remove-sign"><\/i> No',
        singleton: !0,
        placement: "bottom",
        onConfirm: function(n, t) {
            pagedirty = !0;
            $(t).parents(".row").remove();
            addfirtrow()
        },
        onCancel: function() {}
    });
    $("div.navi:not(:has( *))").each(function() {
        $('<div class="add"><i class="fa fa-plus "><\/i> <\/div><div class="wcmerger"><i class="fa fa-times" ><\/i><\/div>').prependTo(this)
    });
    $(".wbody").find(".navi:not(:has(div.add))").each(function() {
        $(this).find(".coledit").remove();
        $('<div class="coledit"><span class="widedit ncedit"><i class=" fa fa-wrench"><\/i><\/span><span class="widedit ncdel"><i class=" fa fa-times"><\/i><\/span><\/div>').prependTo(this)
    });
    fdirty == !0 && $("div.navi:not(:has(div.add))").each(function() {
        $(this).find(".coledit").remove();
        $('<div class="coledit"><span class="widedit ncedit"><i class=" fa fa-wrench"><\/i><\/span><span class="widedit ncdel"><i class=" fa fa-times"><\/i><\/span><\/div>').prependTo(this)
    });
    ModeColumns(".a1", (new markup).Onecol);
    ModeColumns(".a2", (new markup).twocol);
    ModeColumns(".a3", (new markup).thrcol);
    ModeColumns(".a4", (new markup).fourcol);
    $(".add > i").popover({
        html: !0,
        content: (new markup).ToolBox,
        template: '<div class="popover toolboxpop"><div class="arrow"><\/div><div class="popover-inner "><h3 class="popover-title"><\/h3><div class="popover-content toolboxpop-content"><p><\/p><\/div><\/div><\/div>'
    });
    $(".add > i").click(function() {
        $(".add > i").not(this).popover("hide");
        $(".add > i").removeClass("P");
        $(this).addClass("P");
        $(".c").removeClass("c");
        $(this).closest(".navi").addClass("c")
    });
    $("body").on("click", ".ae", function() {
        $(".ae").removeClass("diged");
        $(this).addClass("diged")
    });
    $("body").on("click", ".tile", function() {
        $(".add > i").popover("hide");
        $(".btn").confirmation("hide")
    });
    $("body").on("click", function(n) {
        $(".add > i").each(function() {
            $(this).is(n.target) || $(this).has(n.target).length !== 0 || $(".popover").has(n.target).length !== 0 || $(this).popover("hide")
        })
    });
    livemove(".au", ".ad");
    pagedragable();
    ytload();
    $(".adcarousel").carousel();
    $("body").on("click", ".ncedit", function() {
        amenable = !0;
        pagedirty = !0;
        var n = $(this).parents(".navi");
        $(n).find(".coledit").remove();
        airmodeedit(n)
    });
    $(".wcmerger").on("click", function() {
        mergecol(this)
    });
    $(".navi").each(function() {
        $(this).next(".navi").children().not(".add").length > 1 && $(this).find(".wcmerger").remove()
    })
}

function footeredit() {
    fdirty = !0;
    $(".wfooter").find(".fwraper").remove();
    reset()
}

function feditstart() {
    $('<div class="fwraper"><span class="fwrspan" onclick="footeredit();"><i class=" fa fa-wrench"><\/i> Edit Footer<\/span><\/div>').prependTo(".wfooter")
}

function EditStart() {
    loadScript();
    feditstart();
    $(".navi").addClass("naviedit");
    reset();
    pagelive();
    logeditable();
    Popupcachehandle();
    pageleaver()
}

function logeditable() {
    $(".walogo").wrap('<div  data-toggle="modal"href="/framework/popups/logo.html" data-target="#myModal"><\/div>');
    $(".walogo").removeAttr("href")
}

function fullview() {
    location.reload()
}

function tabview() {
    $("#page").empty();
    var n = '<span class="me"><i class="fa fa-circle-o fa-3"><\/i><\/span><iframe class="mobileframe"  width="762" height="900" scrolling="yes" src="' + window.location.href + '?"><\/iframe>';
    $("#page").append(n)
}

function mobileo() {
    $("#page").empty();
    var n = '<span class="me"><i class="fa fa-circle-o fa-3"><\/i><\/span><iframe class="mobileframe"  width="375" height="600"  seamless="seamless" src="' + window.location.href + '?"><\/iframe>';
    $("#page").append(n)
}

function ModeColumns(n, t) {
    $(n).each(function() {
        var i = $(this),
            n = $(this).parents(".row");
        n.children(".navi").children().not(".add").length > 0 ? $(i).confirmation({
            title: " Remove Existing?",
            btnOkLabel: '<i class="icon-ok-sign icon-white"><\/i> Yes',
            btnCancelLabel: '<i class="icon-remove-sign"><\/i> No',
            singleton: !0,
            placement: "bottom",
            onConfirm: function() {
                n.children(".navi").remove();
                n.append(t).stop().effect("fade", {}, 1e3, function() {
                    n.hide().fadeIn()
                });
                reset()
            },
            onCancel: function() {}
        }) : $(this).click(function() {
            n.children(".navi").remove();
            n.append(t).stop().effect("fade", {}, 1e3, function() {
                n.hide().fadeIn()
            });
            reset()
        })
    })
}

function Preview() {
    $(".add").remove();
    $(".wcmerger").remove();
    $(".coledit").remove();
    airmodeoff();
    $(".ui-droppable").droppable("destroy");
    $(".ui-draggable").draggable("destroy");
    $(".navi").removeClass("naviedit");
    $(".row").each(function() {
        $(this).children(".navi").children().not(".add").length < 1 && $(this).remove()
    })
}

function pagedragable() {
    $.getScript("framework/js/jquery-ui.min.js", function() {
        LiveDrag(".navi");
        LiveDrop(".e", ".navi")
    })
}

function livemove(n, t) {
    $(n).bind("click", function() {
        var n = $(this).closest(".row");
        n.prev().length > 0 ? (pagedirty = !0, n.insertBefore(n.prev()).effect("fade", {}, 1e3, function() {
            n.hide().fadeIn()
        })) : $(this).tooltip({
            placement: "right",
            title: "am in",
            toggle: "tooltip"
        })
    });
    $(t).bind("click", function() {
        var n = $(this).closest(".row");
        n.next().length > 0 && (pagedirty = !0, n.insertAfter(n.next()).effect("fade", {}, 1e3, function() {
            n.hide().fadeIn()
        }))
    })
}

function LiveDrag(n) {
    $(n).draggable({
        revert: "invalid",
        cursor: "move",
        opacity: "0.5",
        helper: function() {
            var n = $(this).clone();
            return n.height(50).width(50), n
        }
    }).click(function() {
        $(this).draggable({
            disabled: !1
        })
    }).dblclick(function() {
        $(this).draggable({
            disabled: !0
        })
    })
}

function LiveDrop(n, t) {
    $(n).droppable({
        greedy: !0,
        hoverClass: "drop",
        acceept: t,
        drop: function(n, t) {
            var i = $(this);
            i.empty();
            i.prepend($(t.draggable).html());
            i.removeClass("e");
            i.droppable("disable");
            reset()
        }
    })
}

function Popupcachehandle() {
    $("#myModal").on("hidden.bs.modal", function(n) {
        $(n.target).removeData("bs.modal").find(".modal-content").empty()
    });
    $("#tallModal").on("hidden.bs.modal", function(n) {
        $(n.target).removeData("bs.modal").find(".modal-content").empty()
    });
    $("#settingsModal").on("hidden.bs.modal", function(n) {
        $(n.target).removeData("bs.modal").find(".modal-content").empty()
    })
}

function pageleaver() {
    $(window).bind("beforeunload", function(n) {
        if (pagedirty == !0) return "Your changes not published yet";
        n = null
    })
}

function Addmakup(n) {
    pagedirty = !0;
    var t = parent.$(".c");
    t.length > 0 ? (t.empty(), t.append(n), t.removeClass("e"), t.removeClass("c"), parent.$("#myModal").modal("hide"), reset()) : (parent.$(".P").parents(".row").before('<div class="row container"><div class="col-md-12 navi naviedit ">' + n + "<\/div><\/div>"), parent.$("#myModal").modal("hide"), reset())
}

function isEmpty() {
    return this.length === 0 || !this.trim()
}

function ytload() {
    for (var t, i = document.getElementsByClassName("youtube-player"), n = 0; n < i.length; n++) t = document.createElement("div"), t.innerHTML = labnolThumb(i[n].dataset.id), t.onclick = labnolIframe, i[n].appendChild(t)
}

function labnolThumb(n) {
    return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + n + '/hqdefault.jpg"><div class="play-button"><i class="fa  fa-youtube-play fa-2"><\/i><\/div>'
}

function labnolIframe() {
    var n = document.createElement("iframe");
    n.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
    n.setAttribute("frameborder", "0");
    n.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(n, this)
}

function getpagename() {
    return window.location.pathname == "/" ? "/index" : window.location.pathname
}

function undopage() {
    showprog();
    $.ajax({
        url: "cms/undo" + getpagename(),
        type: "POST",
        data: JSON.stringify({
            page: {
                pagename: ""
            }
        }),
        contentType: "application/json; charset=utf-8",
        success: function(n) {
            n == "1" ? alert("No versions to Undo") : location.reload(!0)
        },
        error: function() {
            alert("error")
        }
    });
    stopprog()
}

function publish() {
    if (pagedirty == !0) {
        showprog();
        Preview();
        $(window).off("beforeunload");
        airmodeoff();
        $(".youtube-player").empty();
        $('.wagrid').empty();
        $(".gmap").empty().removeAttr("style");
        var n = "",
            t = "";
        hdirty == !0 && (n = $(".walogo").html());
        fdirty == !0 && (t = $(".wfooter").html());
        $.ajax({
            url: "cms/publish",
            type: "POST",
            data: JSON.stringify({
                page: {
                    pagename: getpagename(),
                    header: n,
                    body: $(".wbody").html(),
                    footer: t
                }
            }),
            contentType: "application/json; charset=utf-8",
            success: function() {
                location.reload(!0)
            },
            error: function() {
                alert("error")
            }
        });
        stopprog()
    }
}

function showprog() {
    $("body").prepend(loader)
}

function stopprog() {
    $(".iprogress").remove()
}

function getstate(n) {
    var t = RegExp("" + n + "[^;]+").exec(document.cookie);
    return unescape(!t ? "" : t.toString().replace(/^[^=]+./, ""))
}

function isamoeba() {
    getstate("amoeba") && ($(".editinvoke").empty().append('<i class="fa fa-plus i"><\/i>'), $(".editinvoke").css({
        display: "block"
    }))
}

function getwacolumns(n) {
    for (var i, r = n.attr("class").split(" "), t = 0; t < r.length; t++)
        if (i = /^col-md\-(.+)/.exec(r[t]), i != null) return parseInt(i[1])
}

function mergecol(n) {
    console.log(n);
    var t = $(n).parent(".navi"),
        i = getwacolumns(t),
        r = $(t).next(".navi"),
        u = getwacolumns(r),
        f = i + u,
        e = "col-md-" + f;
    $(r).remove();
    $(t).removeClass("col-md-" + i).addClass(e)
}

function toggleChevron(n) {
    $(n.target).prev(".panel-heading").find("i").toggleClass("fa-plus fa-minus")
}

function addfirtrow() {
    $(".wbody").children().length == 0 && ($(".wbody").append(markup().Onerow()), reset())
}

function getUrlVars() {
    for (var t = [], n, r = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), i = 0; i < r.length; i++) n = r[i].split("="), t.push(n[0]), t[n[0]] = n[1];
    return t
}
var googleMapsLoaded, loader;
if (function(n, t) {
        function dt(n) {
            var t = n.length,
                r = i.type(n);
            return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n)
        }

        function kf(n) {
            var t = gt[n] = {};
            return i.each(n.match(s) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function ir(n, r, u, f) {
            if (i.acceptData(n)) {
                var s, h, c = i.expando,
                    a = "string" == typeof r,
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c;
                if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = b.pop() || i.guid++ : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), ("object" == typeof r || "function" == typeof r) && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], null == h && (h = s[i.camelCase(r)])) : h = s, h
            }
        }

        function rr(n, t, r) {
            if (i.acceptData(n)) {
                var o, h, e, s = n.nodeType,
                    u = s ? i.cache : n,
                    f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data)) {
                        for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = (t in e) ? [t] : t.split(" ")), o = 0, h = t.length; h > o; o++) delete e[t[o]];
                        if (!(r ? ni : i.isEmptyObject)(e)) return
                    }(r || (delete u[f].data, ni(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
                }
            }
        }

        function ur(n, r, u) {
            if (u === t && 1 === n.nodeType) {
                var f = "data-" + r.replace(tr, "-$1").toLowerCase();
                if (u = n.getAttribute(f), "string" == typeof u) {
                    try {
                        u = "true" === u ? !0 : "false" === u ? !1 : "null" === u ? null : +u + "" === u ? +u : nr.test(u) ? i.parseJSON(u) : u
                    } catch (e) {}
                    i.data(n, r, u)
                } else u = t
            }
            return u
        }

        function ni(n) {
            for (var t in n)
                if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function ht() {
            return !0
        }

        function d() {
            return !1
        }

        function cr(n, t) {
            do n = n[t]; while (n && 1 !== n.nodeType);
            return n
        }

        function lr(n, t, r) {
            if (t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
                var u = !!t.call(n, i, n);
                return u === r
            });
            if (t.nodeType) return i.grep(n, function(n) {
                return n === t === r
            });
            if ("string" == typeof t) {
                var u = i.grep(n, function(n) {
                    return 1 === n.nodeType
                });
                if (fe.test(t)) return i.filter(t, u, !r);
                t = i.filter(t, u)
            }
            return i.grep(n, function(n) {
                return i.inArray(n, t) >= 0 === r
            })
        }

        function ar(n) {
            var i = vr.split("|"),
                t = n.createDocumentFragment();
            if (t.createElement)
                while (i.length) t.createElement(i.pop());
            return t
        }

        function ye(n, t) {
            return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
        }

        function dr(n) {
            var t = n.getAttributeNode("type");
            return n.type = (t && t.specified) + "/" + n.type, n
        }

        function gr(n) {
            var t = le.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function si(n, t) {
            for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
        }

        function nu(n, t) {
            if (1 === t.nodeType && i.hasData(n)) {
                var u, f, o, s = i._data(n),
                    r = i._data(t, s),
                    e = s.events;
                if (e) {
                    delete r.handle;
                    r.events = {};
                    for (u in e)
                        for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
                }
                r.data && (r.data = i.extend({}, r.data))
            }
        }

        function pe(n, t) {
            var r, f, u;
            if (1 === t.nodeType) {
                if (r = t.nodeName.toLowerCase(), !i.support.noCloneEvent && t[i.expando]) {
                    u = i._data(t);
                    for (f in u.events) i.removeEvent(t, f, u.handle);
                    t.removeAttribute(i.expando)
                }
                "script" === r && t.text !== n.text ? (dr(t).text = n.text, gr(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && ei.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === r || "textarea" === r) && (t.defaultValue = n.defaultValue)
            }
        }

        function u(n, r) {
            var s, e, h = 0,
                f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
            if (!f)
                for (f = [], s = n.childNodes || n; null != (e = s[h]); h++) !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
            return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f
        }

        function we(n) {
            ei.test(n.type) && (n.defaultChecked = n.checked)
        }

        function fu(n, t) {
            if (t in n) return t;
            for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = uu.length; i--;)
                if (t = uu[i] + r, t in n) return t;
            return u
        }

        function ut(n, t) {
            return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
        }

        function eu(n, t) {
            for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && ut(r) && (e[u] = i._data(r, "olddisplay", cu(r.nodeName)))) : e[u] || (o = ut(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
            for (u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
            return n
        }

        function ou(n, t, i) {
            var r = ge.exec(t);
            return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
        }

        function su(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + p[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
            return o
        }

        function hu(n, t, r) {
            var e = !0,
                u = "width" === t ? n.offsetWidth : n.offsetHeight,
                f = v(n),
                o = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
            if (0 >= u || null == u) {
                if (u = y(n, t, f), (0 > u || null == u) && (u = n.style[t]), ct.test(u)) return u;
                e = o && (i.support.boxSizingReliable || u === n.style[t]);
                u = parseFloat(u) || 0
            }
            return u + su(n, t, r || (o ? "border" : "content"), e, f) + "px"
        }

        function cu(n) {
            var u = r,
                t = iu[n];
            return t || (t = lu(n, u), "none" !== t && t || (rt = (rt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement), u = (rt[0].contentWindow || rt[0].contentDocument).document, u.write("<!doctype html><html><body>"), u.close(), t = lu(n, u), rt.detach()), iu[n] = t), t
        }

        function lu(n, t) {
            var r = i(t.createElement(n)).appendTo(t.body),
                u = i.css(r[0], "display");
            return r.remove(), u
        }

        function ci(n, t, r, u) {
            var f;
            if (i.isArray(t)) i.each(t, function(t, i) {
                r || ro.test(n) ? u(n, i) : ci(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
            else if (r || "object" !== i.type(t)) u(n, t);
            else
                for (f in t) ci(n + "[" + f + "]", t[f], r, u)
        }

        function ku(n) {
            return function(t, r) {
                "string" != typeof t && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(s) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function du(n, r, u, f) {
            function o(h) {
                var c;
                return e[h] = !0, i.each(n[h] || [], function(n, i) {
                    var h = i(r, u, f);
                    return "string" != typeof h || s || e[h] ? s ? !(c = h) : t : (r.dataTypes.unshift(h), o(h), !1)
                }), c
            }
            var e = {},
                s = n === vi;
            return o(r.dataTypes[0]) || !e["*"] && o("*")
        }

        function yi(n, r) {
            var f, u, e = i.ajaxSettings.flatOptions || {};
            for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
            return f && i.extend(!0, n, f), n
        }

        function co(n, i, r) {
            var s, o, e, u, h = n.contents,
                f = n.dataTypes,
                c = n.responseFields;
            for (u in c) u in r && (i[c[u]] = r[u]);
            while ("*" === f[0]) f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
            if (o)
                for (u in h)
                    if (h[u] && h[u].test(o)) {
                        f.unshift(u);
                        break
                    }
            if (f[0] in r) e = f[0];
            else {
                for (u in r) {
                    if (!f[0] || n.converters[u + " " + f[0]]) {
                        e = u;
                        break
                    }
                    s || (s = u)
                }
                e = e || s
            }
            return e ? (e !== f[0] && f.unshift(e), r[e]) : t
        }

        function lo(n, t) {
            var o, r, i, e, u = {},
                h = 0,
                s = n.dataTypes.slice(),
                f = s[0];
            if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
                for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
            for (; r = s[++h];)
                if ("*" !== r) {
                    if ("*" !== f && f !== r) {
                        if (i = u[f + " " + r] || u["* " + r], !i)
                            for (o in u)
                                if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]])) {
                                    i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
                                    break
                                }
                        if (i !== !0)
                            if (i && n.throws) t = i(t);
                            else try {
                                t = i(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: i ? c : "No conversion from " + f + " to " + r
                                }
                            }
                    }
                    f = r
                }
            return {
                state: "success",
                data: t
            }
        }

        function nf() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }

        function ao() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function tf() {
            return setTimeout(function() {
                tt = t
            }), tt = i.now()
        }

        function wo(n, t) {
            i.each(t, function(t, i) {
                for (var u = (ft[t] || []).concat(ft["*"]), r = 0, f = u.length; f > r; r++)
                    if (u[r].call(n, t, i)) return
            })
        }

        function rf(n, t, r) {
            var h, e, o = 0,
                l = yt.length,
                f = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (e) return !1;
                    for (var s = tt || tf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {}
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: tt || tf(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; r > i; i++) u.tweens[i].run(1);
                        return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                    }
                }),
                s = u.props;
            for (bo(s, u.opts.specialEasing); l > o; o++)
                if (h = yt[o].call(u, n, s, u.opts)) return h;
            return wo(u, s), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function bo(n, t) {
            var u, f, r, e, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function ko(n, t, r) {
            var u, o, w, a, s, v, l, f, b, h = this,
                e = n.style,
                y = {},
                p = [],
                c = n.nodeType && ut(n);
            r.queue || (f = i._queueHooks(n, "fx"), null == f.unqueued && (f.unqueued = 0, b = f.empty.fire, f.empty.fire = function() {
                f.unqueued || b()
            }), f.unqueued++, h.always(function() {
                h.always(function() {
                    f.unqueued--;
                    i.queue(n, "fx").length || f.empty.fire()
                })
            }));
            1 === n.nodeType && ("height" in t || "width" in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY], "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== cu(n.nodeName) ? e.zoom = 1 : e.display = "inline-block"));
            r.overflow && (e.overflow = "hidden", i.support.shrinkWrapBlocks || h.always(function() {
                e.overflow = r.overflow[0];
                e.overflowX = r.overflow[1];
                e.overflowY = r.overflow[2]
            }));
            for (o in t)
                if (a = t[o], vo.exec(a)) {
                    if (delete t[o], v = v || "toggle" === a, a === (c ? "hide" : "show")) continue;
                    p.push(o)
                }
            if (w = p.length)
                for (s = i._data(n, "fxshow") || i._data(n, "fxshow", {}), ("hidden" in s) && (c = s.hidden), v && (s.hidden = !c), c ? i(n).show() : h.done(function() {
                        i(n).hide()
                    }), h.done(function() {
                        var t;
                        i._removeData(n, "fxshow");
                        for (t in y) i.style(n, t, y[t])
                    }), o = 0; w > o; o++) u = p[o], l = h.createTween(u, c ? s[u] : 0), y[u] = s[u] || i.style(n, u), u in s || (s[u] = l.start, c && (l.end = l.start, l.start = "width" === u || "height" === u ? 1 : 0))
        }

        function f(n, t, i, r, u) {
            return new f.prototype.init(n, t, i, r, u)
        }

        function pt(n, t) {
            var r, i = {
                    height: n
                },
                u = 0;
            for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = p[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function uf(n) {
            return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
        }
        var et, wi, o = typeof t,
            r = n.document,
            ff = n.location,
            ef = n.jQuery,
            of = n.$,
            ot = {},
            b = [],
            wt = "1.9.1",
            bi = b.concat,
            bt = b.push,
            l = b.slice,
            ki = b.indexOf,
            sf = ot.toString,
            it = ot.hasOwnProperty,
            kt = wt.trim,
            i = function(n, t) {
                return new i.fn.init(n, t, wi)
            },
            st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            s = /\S+/g,
            hf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            cf = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            di = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            lf = /^[\],:{}\s]*$/,
            af = /(?:^|:|,)(?:\s*\[)+/g,
            vf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            yf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            pf = /^-ms-/,
            wf = /-([\da-z])/gi,
            bf = function(n, t) {
                return t.toUpperCase()
            },
            h = function(n) {
                (r.addEventListener || "load" === n.type || "complete" === r.readyState) && (gi(), i.ready())
            },
            gi = function() {
                r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1), n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h), n.detachEvent("onload", h))
            },
            gt, nr, tr, pi, lt, g, nt, gu, at;
        i.fn = i.prototype = {
            jquery: wt,
            constructor: i,
            init: function(n, u, f) {
                var e, o;
                if (!n) return this;
                if ("string" == typeof n) {
                    if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : cf.exec(n), !e || !e[1] && u) return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
                    if (e[1]) {
                        if (u = u instanceof i ? u[0] : u, i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)), di.test(e[1]) && i.isPlainObject(u))
                            for (e in u) i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                        return this
                    }
                    if (o = r.getElementById(e[2]), o && o.parentNode) {
                        if (o.id !== e[2]) return f.find(n);
                        this.length = 1;
                        this[0] = o
                    }
                    return this.context = r, this.selector = n, this
                }
                return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return l.call(this)
            },
            get: function(n) {
                return null == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n]
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(n, t) {
                return i.each(this, n, t)
            },
            ready: function(n) {
                return i.ready.promise().done(n), this
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (0 > n ? i : 0);
                return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: bt,
            sort: [].sort,
            splice: [].splice
        };
        i.fn.init.prototype = i.fn;
        i.extend = i.fn.extend = function() {
            var u, o, r, e, s, h, n = arguments[0] || {},
                f = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof n && (c = n, n = arguments[1] || {}, f = 2), "object" == typeof n || i.isFunction(n) || (n = {}), l === f && (n = this, --f); l > f; f++)
                if (null != (s = arguments[f]))
                    for (e in s) u = n[e], r = s[e], n !== r && (c && r && (i.isPlainObject(r) || (o = i.isArray(r))) ? (o ? (o = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
            return n
        };
        i.extend({
            noConflict: function(t) {
                return n.$ === i && (n.$ = of ), t && n.jQuery === i && (n.jQuery = ef), i
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function(n) {
                if (n === !0 ? !--i.readyWait : !i.isReady) {
                    if (!r.body) return setTimeout(i.ready);
                    i.isReady = !0;
                    n !== !0 && --i.readyWait > 0 || (et.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
                }
            },
            isFunction: function(n) {
                return "function" === i.type(n)
            },
            isArray: Array.isArray || function(n) {
                return "array" === i.type(n)
            },
            isWindow: function(n) {
                return null != n && n == n.window
            },
            isNumeric: function(n) {
                return !isNaN(parseFloat(n)) && isFinite(n)
            },
            type: function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[sf.call(n)] || "object" : typeof n
            },
            isPlainObject: function(n) {
                if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
                try {
                    if (n.constructor && !it.call(n, "constructor") && !it.call(n.constructor.prototype, "isPrototypeOf")) return !1
                } catch (u) {
                    return !1
                }
                for (var r in n);
                return r === t || it.call(n, r)
            },
            isEmptyObject: function(n) {
                for (var t in n) return !1;
                return !0
            },
            error: function(n) {
                throw Error(n);
            },
            parseHTML: function(n, t, u) {
                if (!n || "string" != typeof n) return null;
                "boolean" == typeof t && (u = t, t = !1);
                t = t || r;
                var f = di.exec(n),
                    e = !u && [];
                return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && i(e).remove(), i.merge([], f.childNodes))
            },
            parseJSON: function(r) {
                return n.JSON && n.JSON.parse ? n.JSON.parse(r) : null === r ? r : "string" == typeof r && (r = i.trim(r), r && lf.test(r.replace(vf, "@").replace(yf, "]").replace(af, ""))) ? Function("return " + r)() : (i.error("Invalid JSON: " + r), t)
            },
            parseXML: function(r) {
                var u, f;
                if (!r || "string" != typeof r) return null;
                try {
                    n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
                } catch (e) {
                    u = t
                }
                return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u
            },
            noop: function() {},
            globalEval: function(t) {
                t && i.trim(t) && (n.execScript || function(t) {
                    n.eval.call(n, t)
                })(t)
            },
            camelCase: function(n) {
                return n.replace(pf, "ms-").replace(wf, bf)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(n, t, i) {
                var u, r = 0,
                    f = n.length,
                    e = dt(n);
                if (i) {
                    if (e) {
                        for (; f > r; r++)
                            if (u = t.apply(n[r], i), u === !1) break
                    } else
                        for (r in n)
                            if (u = t.apply(n[r], i), u === !1) break
                } else if (e) {
                    for (; f > r; r++)
                        if (u = t.call(n[r], r, n[r]), u === !1) break
                } else
                    for (r in n)
                        if (u = t.call(n[r], r, n[r]), u === !1) break;
                return n
            },
            trim: kt && !kt.call("﻿ ") ? function(n) {
                return null == n ? "" : kt.call(n)
            } : function(n) {
                return null == n ? "" : (n + "").replace(hf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return null != n && (dt(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : bt.call(r, n)), r
            },
            inArray: function(n, t, i) {
                var r;
                if (t) {
                    if (ki) return ki.call(t, n, i);
                    for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                        if (i in t && t[i] === n) return i
                }
                return -1
            },
            merge: function(n, i) {
                var f = i.length,
                    u = n.length,
                    r = 0;
                if ("number" == typeof f)
                    for (; f > r; r++) n[u++] = i[r];
                else
                    while (i[r] !== t) n[u++] = i[r++];
                return n.length = u, n
            },
            grep: function(n, t, i) {
                var u, f = [],
                    r = 0,
                    e = n.length;
                for (i = !!i; e > r; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var u, r = 0,
                    e = n.length,
                    o = dt(n),
                    f = [];
                if (o)
                    for (; e > r; r++) u = t(n[r], r, i), null != u && (f[f.length] = u);
                else
                    for (r in n) u = t(n[r], r, i), null != u && (f[f.length] = u);
                return bi.apply([], f)
            },
            guid: 1,
            proxy: function(n, r) {
                var f, u, e;
                return "string" == typeof r && (e = n[r], r = n, n = e), i.isFunction(n) ? (f = l.call(arguments, 2), u = function() {
                    return n.apply(r || this, f.concat(l.call(arguments)))
                }, u.guid = n.guid = n.guid || i.guid++, u) : t
            },
            access: function(n, r, u, f, e, o, s) {
                var h = 0,
                    l = n.length,
                    c = null == u;
                if ("object" === i.type(u)) {
                    e = !0;
                    for (h in u) i.access(n, r, h, u[h], !0, o, s)
                } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function(n, t, r) {
                        return c.call(i(n), r)
                    })), r))
                    for (; l > h; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
                return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
            },
            now: function() {
                return (new Date).getTime()
            }
        });
        i.ready.promise = function(t) {
            if (!et)
                if (et = i.Deferred(), "complete" === r.readyState) setTimeout(i.ready);
                else if (r.addEventListener) r.addEventListener("DOMContentLoaded", h, !1), n.addEventListener("load", h, !1);
            else {
                r.attachEvent("onreadystatechange", h);
                n.attachEvent("onload", h);
                var u = !1;
                try {
                    u = null == n.frameElement && r.documentElement
                } catch (e) {}
                u && u.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            u.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        gi();
                        i.ready()
                    }
                }()
            }
            return et.promise(t)
        };
        i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
            ot["[object " + t + "]"] = t.toLowerCase()
        });
        wi = i(r);
        gt = {};
        i.Callbacks = function(n) {
            n = "string" == typeof n ? gt[n] || kf(n) : i.extend({}, n);
            var o, f, c, s, e, l, r = [],
                u = !n.once && [],
                a = function(t) {
                    for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && s > e; e++)
                        if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                            f = !1;
                            break
                        }
                    o = !1;
                    r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (r) {
                            var t = r.length;
                            (function u(t) {
                                i.each(t, function(t, f) {
                                    var e = i.type(f);
                                    "function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && u(f)
                                })
                            })(arguments);
                            o ? s = r.length : f && (l = t, a(f))
                        }
                        return this
                    },
                    remove: function() {
                        return r && i.each(arguments, function(n, t) {
                            for (var u;
                                (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), o && (s >= u && s--, e >= u && e--)
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, r) > -1 : !(!r || !r.length)
                    },
                    empty: function() {
                        return r = [], this
                    },
                    disable: function() {
                        return r = u = f = t, this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return u = t, f || h.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(n, t) {
                        return t = t || [], t = [n, t.slice ? t.slice() : t], !r || c && !u || (o ? u.push(t) : a(t)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!c
                    }
                };
            return h
        };
        i.extend({
            Deferred: function(n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")]
                    ],
                    f = "pending",
                    r = {
                        state: function() {
                            return f
                        },
                        always: function() {
                            return t.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var s = e[0],
                                        o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function() {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        promise: function(n) {
                            return null != n ? i.extend(n, r) : r
                        }
                    },
                    t = {};
                return r.pipe = r.then, i.each(u, function(n, i) {
                    var e = i[2],
                        o = i[3];
                    r[i[1]] = e.add;
                    o && e.add(function() {
                        f = o
                    }, u[1 ^ n][2].disable, u[2][2].lock);
                    t[i[0]] = function() {
                        return t[i[0] + "With"](this === t ? r : this, arguments), this
                    };
                    t[i[0] + "With"] = e.fireWith
                }), r.promise(t), n && n.call(t, t), t
            },
            when: function(n) {
                var t = 0,
                    u = l.call(arguments),
                    r = u.length,
                    e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                    f = 1 === e ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? l.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o, c, s;
                if (r > 1)
                    for (o = Array(r), c = Array(r), s = Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        });
        i.support = function() {
            var u, s, e, f, h, c, l, a, y, v, t = r.createElement("div");
            if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", s = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !s || !e || !s.length) return {};
            h = r.createElement("select");
            l = h.appendChild(r.createElement("option"));
            f = t.getElementsByTagName("input")[0];
            e.style.cssText = "top:1px;float:left;opacity:.5";
            u = {
                getSetAttribute: "t" !== t.className,
                leadingWhitespace: 3 === t.firstChild.nodeType,
                tbody: !t.getElementsByTagName("tbody").length,
                htmlSerialize: !!t.getElementsByTagName("link").length,
                style: /top/.test(e.getAttribute("style")),
                hrefNormalized: "/a" === e.getAttribute("href"),
                opacity: /^0.5/.test(e.style.opacity),
                cssFloat: !!e.style.cssFloat,
                checkOn: !!f.value,
                optSelected: l.selected,
                enctype: !!r.createElement("form").enctype,
                html5Clone: "<:nav><\/:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === r.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            };
            f.checked = !0;
            u.noCloneChecked = f.cloneNode(!0).checked;
            h.disabled = !0;
            u.optDisabled = !l.disabled;
            try {
                delete t.test
            } catch (p) {
                u.deleteExpando = !1
            }
            f = r.createElement("input");
            f.setAttribute("value", "");
            u.input = "" === f.getAttribute("value");
            f.value = "t";
            f.setAttribute("type", "radio");
            u.radioValue = "t" === f.value;
            f.setAttribute("checked", "t");
            f.setAttribute("name", "t");
            c = r.createDocumentFragment();
            c.appendChild(f);
            u.appendChecked = f.checked;
            u.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
            t.attachEvent && (t.attachEvent("onclick", function() {
                u.noCloneEvent = !1
            }), t.cloneNode(!0).click());
            for (v in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t.setAttribute(a = "on" + v, "t"), u[v + "Bubbles"] = a in n || t.attributes[a].expando === !1;
            return t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === t.style.backgroundClip, i(function() {
                var e, f, i, h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = r.getElementsByTagName("body")[0];
                s && (e = r.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(e).appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", y = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", u.reliableHiddenOffsets = y && 0 === i[0].offsetHeight, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = 4 === t.offsetWidth, u.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, n.getComputedStyle && (u.pixelPosition = "1%" !== (n.getComputedStyle(t, null) || {}).top, u.boxSizingReliable = "4px" === (n.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, f = t.appendChild(r.createElement("div")), f.style.cssText = t.style.cssText = h, f.style.marginRight = f.style.width = "0", t.style.width = "1px", u.reliableMarginRight = !parseFloat((n.getComputedStyle(f, null) || {}).marginRight)), typeof t.style.zoom !== o && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = 3 === t.offsetWidth, t.style.display = "block", t.innerHTML = "<div><\/div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = 3 !== t.offsetWidth, u.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(e), e = t = i = f = null)
            }), s = h = c = l = e = f = null, u
        }();
        nr = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
        tr = /([A-Z])/g;
        i.extend({
            cache: {},
            expando: "jQuery" + (wt + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(n) {
                return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ni(n)
            },
            data: function(n, t, i) {
                return ir(n, t, i)
            },
            removeData: function(n, t) {
                return rr(n, t)
            },
            _data: function(n, t, i) {
                return ir(n, t, i, !0)
            },
            _removeData: function(n, t) {
                return rr(n, t, !0)
            },
            acceptData: function(n) {
                if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType) return !1;
                var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
                return !t || t !== !0 && n.getAttribute("classid") === t
            }
        });
        i.fn.extend({
            data: function(n, r) {
                var e, f, u = this[0],
                    o = 0,
                    s = null;
                if (n === t) {
                    if (this.length && (s = i.data(u), 1 === u.nodeType && !i._data(u, "parsedAttrs"))) {
                        for (e = u.attributes; e.length > o; o++) f = e[o].name, f.indexOf("data-") || (f = i.camelCase(f.slice(5)), ur(u, f, s[f]));
                        i._data(u, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof n ? this.each(function() {
                    i.data(this, n)
                }) : i.access(this, function(r) {
                    return r === t ? u ? ur(u, n, i.data(u, n)) : null : (this.each(function() {
                        i.data(this, n, r)
                    }), t)
                }, null, r, arguments.length > 1, null, !0)
            },
            removeData: function(n) {
                return this.each(function() {
                    i.removeData(this, n)
                })
            }
        });
        i.extend({
            queue: function(n, r, u) {
                var f;
                return n ? (r = (r || "fx") + "queue", f = i._data(n, r), u && (!f || i.isArray(u) ? f = i._data(n, r, i.makeArray(u)) : f.push(u)), f || []) : t
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var f = i.queue(n, t),
                    e = f.length,
                    r = f.shift(),
                    u = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                "inprogress" === r && (r = f.shift(), e--);
                u.cur = r;
                r && ("fx" === t && f.unshift("inprogress"), delete u.stop, r.call(n, o, u));
                !e && u && u.empty.fire()
            },
            _queueHooks: function(n, t) {
                var r = t + "queueHooks";
                return i._data(n, r) || i._data(n, r, {
                    empty: i.Callbacks("once memory").add(function() {
                        i._removeData(n, t + "queue");
                        i._removeData(n, r)
                    })
                })
            }
        });
        i.fn.extend({
            queue: function(n, r) {
                var u = 2;
                return "string" != typeof n && (r = n, n = "fx", u--), u > arguments.length ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                    var t = i.queue(this, n, r);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            delay: function(n, t) {
                return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, r) {
                var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
                for ("string" != typeof n && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(r)
            }
        });
        var k, fr, ti = /[\t\r\n]/g,
            df = /\r/g,
            gf = /^(?:input|select|textarea|button|object)$/i,
            ne = /^(?:a|area)$/i,
            er = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            ii = /^(?:checked|selected)$/i,
            a = i.support.getSetAttribute,
            ri = i.support.input;
        i.fn.extend({
            attr: function(n, t) {
                return i.access(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            },
            prop: function(n, t) {
                return i.access(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function(n) {
                return n = i.propFix[n] || n, this.each(function() {
                    try {
                        this[n] = t;
                        delete this[n]
                    } catch (i) {}
                })
            },
            addClass: function(n) {
                var e, t, r, u, o, f = 0,
                    h = this.length,
                    c = "string" == typeof n && n;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
                if (c)
                    for (e = (n || "").match(s) || []; h > f; f++)
                        if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ti, " ") : " ")) {
                            for (o = 0; u = e[o++];) 0 > r.indexOf(" " + u + " ") && (r += u + " ");
                            t.className = i.trim(r)
                        }
                return this
            },
            removeClass: function(n) {
                var e, t, r, u, o, f = 0,
                    h = this.length,
                    c = 0 === arguments.length || "string" == typeof n && n;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
                if (c)
                    for (e = (n || "").match(s) || []; h > f; f++)
                        if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ti, " ") : "")) {
                            for (o = 0; u = e[o++];)
                                while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                            t.className = n ? i.trim(r) : ""
                        }
                return this
            },
            toggleClass: function(n, t) {
                var r = typeof n,
                    u = "boolean" == typeof t;
                return i.isFunction(n) ? this.each(function(r) {
                    i(this).toggleClass(n.call(this, r, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === r)
                        for (var f, c = 0, h = i(this), e = t, l = n.match(s) || []; f = l[c++];) e = u ? e : !h.hasClass(f), h[e ? "addClass" : "removeClass"](f);
                    else(r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
                })
            },
            hasClass: function(n) {
                for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                    if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(ti, " ").indexOf(i) >= 0) return !0;
                return !1
            },
            val: function(n) {
                var u, r, e, f = this[0];
                return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
                    var f, o = i(this);
                    1 === this.nodeType && (f = e ? n.call(this, u, o.val()) : n, null == f ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                        return null == n ? "" : n + ""
                    })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
                })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, "string" == typeof u ? u.replace(df, "") : null == u ? "" : u)) : void 0
            }
        });
        i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = n.attributes.value;
                        return !t || t.specified ? n.value : n.text
                    }
                },
                select: {
                    get: function(n) {
                        for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, s = u ? null : [], h = u ? r + 1 : o.length, f = 0 > r ? h : u ? r : 0; h > f; f++)
                            if (t = o[f], !(!t.selected && f !== r || (i.support.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                                if (e = i(t).val(), u) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(n, t) {
                        var r = i.makeArray(t);
                        return i(n).find("option").each(function() {
                            this.selected = i.inArray(i(this).val(), r) >= 0
                        }), r.length || (n.selectedIndex = -1), r
                    }
                }
            },
            attr: function(n, r, u) {
                var f, s, e, h = n.nodeType;
                if (n && 3 !== h && 8 !== h && 2 !== h) return typeof n.getAttribute === o ? i.prop(n, r, u) : (s = 1 !== h || !i.isXMLDoc(n), s && (r = r.toLowerCase(), f = i.attrHooks[r] || (er.test(r) ? fr : k)), u === t ? f && s && "get" in f && null !== (e = f.get(n, r)) ? e : (typeof n.getAttribute !== o && (e = n.getAttribute(r)), null == e ? t : e) : null !== u ? f && s && "set" in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u) : (i.removeAttr(n, r), t))
            },
            removeAttr: function(n, t) {
                var r, u, e = 0,
                    f = t && t.match(s);
                if (f && 1 === n.nodeType)
                    while (r = f[e++]) u = i.propFix[r] || r, er.test(r) ? !a && ii.test(r) ? n[i.camelCase("default-" + r)] = n[u] = !1 : n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(a ? r : u)
            },
            attrHooks: {
                type: {
                    set: function(n, t) {
                        if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
                            var r = n.value;
                            return n.setAttribute("type", t), r && (n.value = r), t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(n, r, u) {
                var e, f, s, o = n.nodeType;
                if (n && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && null !== (e = f.get(n, r)) ? e : n[r]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        var i = n.getAttributeNode("tabindex");
                        return i && i.specified ? parseInt(i.value, 10) : gf.test(n.nodeName) || ne.test(n.nodeName) && n.href ? 0 : t
                    }
                }
            }
        });
        fr = {
            get: function(n, r) {
                var u = i.prop(n, r),
                    f = "boolean" == typeof u && n.getAttribute(r),
                    e = "boolean" == typeof u ? ri && a ? null != f : ii.test(r) ? n[i.camelCase("default-" + r)] : !!f : n.getAttributeNode(r);
                return e && e.value !== !1 ? r.toLowerCase() : t
            },
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : ri && a || !ii.test(r) ? n.setAttribute(!a && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
            }
        };
        ri && a || (i.attrHooks.value = {
            get: function(n, r) {
                var u = n.getAttributeNode(r);
                return i.nodeName(n, "input") ? n.defaultValue : u && u.specified ? u.value : t
            },
            set: function(n, r, u) {
                return i.nodeName(n, "input") ? (n.defaultValue = r, t) : k && k.set(n, r, u)
            }
        });
        a || (k = i.valHooks.button = {
            get: function(n, i) {
                var r = n.getAttributeNode(i);
                return r && ("id" === i || "name" === i || "coords" === i ? "" !== r.value : r.specified) ? r.value : t
            },
            set: function(n, i, r) {
                var u = n.getAttributeNode(r);
                return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)), u.value = i += "", "value" === r || i === n.getAttribute(r) ? i : t
            }
        }, i.attrHooks.contenteditable = {
            get: k.get,
            set: function(n, t, i) {
                k.set(n, "" === t ? !1 : t, i)
            }
        }, i.each(["width", "height"], function(n, r) {
            i.attrHooks[r] = i.extend(i.attrHooks[r], {
                set: function(n, i) {
                    return "" === i ? (n.setAttribute(r, "auto"), i) : t
                }
            })
        }));
        i.support.hrefNormalized || (i.each(["href", "src", "width", "height"], function(n, r) {
            i.attrHooks[r] = i.extend(i.attrHooks[r], {
                get: function(n) {
                    var i = n.getAttribute(r, 2);
                    return null == i ? t : i
                }
            })
        }), i.each(["href", "src"], function(n, t) {
            i.propHooks[t] = {
                get: function(n) {
                    return n.getAttribute(t, 4)
                }
            }
        }));
        i.support.style || (i.attrHooks.style = {
            get: function(n) {
                return n.style.cssText || t
            },
            set: function(n, t) {
                return n.style.cssText = t + ""
            }
        });
        i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
            get: function(n) {
                var t = n.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }));
        i.support.enctype || (i.propFix.enctype = "encoding");
        i.support.checkOn || i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                get: function(n) {
                    return null === n.getAttribute("value") ? "on" : n.value
                }
            }
        });
        i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = i.extend(i.valHooks[this], {
                set: function(n, r) {
                    return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t
                }
            })
        });
        var ui = /^(?:input|select|textarea)$/i,
            te = /^key/,
            ie = /^(?:mouse|contextmenu)|click/,
            or = /^(?:focusinfocus|focusoutblur)$/,
            sr = /^([^.]*)(?:\.(.+)|)$/;
        i.event = {
            global: {},
            add: function(n, r, u, f, e) {
                var b, p, k, w, c, l, a, v, h, d, g, y = i._data(n);
                if (y) {
                    for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), (p = y.events) || (p = y.events = {}), (l = y.handle) || (l = y.handle = function(n) {
                            return typeof i === o || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(l.elem, arguments)
                        }, l.elem = n), r = (r || "").match(s) || [""], k = r.length; k--;) b = sr.exec(r[k]) || [], h = g = b[1], d = (b[2] || "").split(".").sort(), c = i.event.special[h] || {}, h = (e ? c.delegateType : c.bindType) || h, c = i.event.special[h] || {}, a = i.extend({
                        type: h,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: d.join(".")
                    }, w), (v = p[h]) || (v = p[h] = [], v.delegateCount = 0, c.setup && c.setup.call(n, f, d, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))), c.add && (c.add.call(n, a), a.handler.guid || (a.handler.guid = u.guid)), e ? v.splice(v.delegateCount++, 0, a) : v.push(a), i.event.global[h] = !0;
                    n = null
                }
            },
            remove: function(n, t, r, u, f) {
                var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
                if (v && (a = v.events)) {
                    for (t = (t || "").match(s) || [""], p = t.length; p--;)
                        if (h = sr.exec(t[p]) || [], e = k = h[1], w = (h[2] || "").split(".").sort(), e) {
                            for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], h = h[2] && RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], !f && k !== o.origType || r && r.guid !== o.guid || h && !h.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                            b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                        } else
                            for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                    i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
                }
            },
            trigger: function(u, f, e, o) {
                var a, v, h, p, l, c, w, b = [e || r],
                    s = it.call(u, "type") ? u.type : u,
                    y = it.call(u, "namespace") ? u.namespace.split(".") : [];
                if (h = c = e = e || r, 3 !== e.nodeType && 8 !== e.nodeType && !or.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (y = s.split("."), s = y.shift(), y.sort()), v = 0 > s.indexOf(":") && "on" + s, u = u[i.expando] ? u : new i.Event(s, "object" == typeof u && u), u.isTrigger = !0, u.namespace = y.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u.result = t, u.target || (u.target = e), f = null == f ? [u] : i.makeArray(f, [u]), l = i.event.special[s] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                    if (!o && !l.noBubble && !i.isWindow(e)) {
                        for (p = l.delegateType || s, or.test(p + s) || (h = h.parentNode); h; h = h.parentNode) b.push(h), c = h;
                        c === (e.ownerDocument || r) && b.push(c.defaultView || c.parentWindow || n)
                    }
                    for (w = 0;
                        (h = b[w++]) && !u.isPropagationStopped();) u.type = w > 1 ? p : l.bindType || s, a = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), a && a.apply(h, f), a = v && h[v], a && i.acceptData(h) && a.apply && a.apply(h, f) === !1 && u.preventDefault();
                    if (u.type = s, !(o || u.isDefaultPrevented() || l._default && l._default.apply(e.ownerDocument, f) !== !1 || "click" === s && i.nodeName(e, "a") || !i.acceptData(e) || !v || !e[s] || i.isWindow(e))) {
                        c = e[v];
                        c && (e[v] = null);
                        i.event.triggered = s;
                        try {
                            e[s]()
                        } catch (k) {}
                        i.event.triggered = t;
                        c && (e[v] = c)
                    }
                    return u.result
                }
            },
            dispatch: function(n) {
                n = i.event.fix(n);
                var o, e, r, u, s, h = [],
                    c = l.call(arguments),
                    a = (i._data(this, "events") || {})[n.type] || [],
                    f = i.event.special[n.type] || {};
                if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                    for (h = i.event.handlers.call(this, n, a), o = 0;
                        (u = h[o++]) && !n.isPropagationStopped();)
                        for (n.currentTarget = u.elem, s = 0;
                            (r = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r, n.data = r.data, e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, c), e !== t && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return f.postDispatch && f.postDispatch.call(this, n), n.result
                }
            },
            handlers: function(n, r) {
                var e, o, f, s, c = [],
                    h = r.delegateCount,
                    u = n.target;
                if (h && u.nodeType && (!n.button || "click" !== n.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== n.type)) {
                            for (f = [], s = 0; h > s; s++) o = r[s], e = o.selector + " ", f[e] === t && (f[e] = o.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length), f[e] && f.push(o);
                            f.length && c.push({
                                elem: u,
                                handlers: f
                            })
                        }
                return r.length > h && c.push({
                    elem: this,
                    handlers: r.slice(h)
                }), c
            },
            fix: function(n) {
                if (n[i.expando]) return n;
                var e, o, s, u = n.type,
                    f = n,
                    t = this.fixHooks[u];
                for (t || (this.fixHooks[u] = t = ie.test(u) ? this.mouseHooks : te.test(u) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
                return n.target || (n.target = f.srcElement || r), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(n, t) {
                    return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(n, i) {
                    var u, o, f, e = i.button,
                        s = i.fromElement;
                    return null == n.pageX && null != i.clientX && (o = n.target.ownerDocument || r, f = o.documentElement, u = o.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0), n
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return i.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== r.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (n) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === r.activeElement && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(n) {
                        n.result !== t && (n.originalEvent.returnValue = n.result)
                    }
                }
            },
            simulate: function(n, t, r, u) {
                var f = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0,
                    originalEvent: {}
                });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
                f.isDefaultPrevented() && r.preventDefault()
            }
        };
        i.removeEvent = r.removeEventListener ? function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        } : function(n, t, i) {
            var r = "on" + t;
            n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
        };
        i.Event = function(n, r) {
            return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ht : d) : this.type = n, r && i.extend(this, r), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0, t) : new i.Event(n, r)
        };
        i.Event.prototype = {
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = ht;
                n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = ht;
                n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = ht;
                this.stopPropagation()
            }
        };
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                    return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        i.support.submitBubbles || (i.event.special.submit = {
            setup: function() {
                return i.nodeName(this, "form") ? !1 : (i.event.add(this, "click._submit keypress._submit", function(n) {
                    var u = n.target,
                        r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                    r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
                        n._submit_bubble = !0
                    }), i._data(r, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(n) {
                n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
            },
            teardown: function() {
                return i.nodeName(this, "form") ? !1 : (i.event.remove(this, "._submit"), t)
            }
        });
        i.support.changeBubbles || (i.event.special.change = {
            setup: function() {
                return ui.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                    "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
                }), i.event.add(this, "click._change", function(n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1);
                    i.event.simulate("change", this, n, !0)
                })), !1) : (i.event.add(this, "beforeactivate._change", function(n) {
                    var t = n.target;
                    ui.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                        !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                    }), i._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(n) {
                var i = n.target;
                return this !== i || n.isSimulated || n.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? n.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return i.event.remove(this, "._change"), !ui.test(this.nodeName)
            }
        });
        i.support.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var u = 0,
                f = function(n) {
                    i.event.simulate(t, n.target, i.event.fix(n), !0)
                };
            i.event.special[t] = {
                setup: function() {
                    0 == u++ && r.addEventListener(n, f, !0)
                },
                teardown: function() {
                    0 == --u && r.removeEventListener(n, f, !0)
                }
            }
        });
        i.fn.extend({
                on: function(n, r, u, f, e) {
                    var s, o;
                    if ("object" == typeof n) {
                        "string" != typeof r && (u = u || r, r = t);
                        for (s in n) this.on(s, r, u, n[s], e);
                        return this
                    }
                    if (null == u && null == f ? (f = r, u = r = t) : null == f && ("string" == typeof r ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = d;
                    else if (!f) return this;
                    return 1 === e && (o = f, f = function(n) {
                        return i().off(n), o.apply(this, arguments)
                    }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() {
                        i.event.add(this, n, f, u, r)
                    })
                },
                one: function(n, t, i, r) {
                    return this.on(n, t, i, r, 1)
                },
                off: function(n, r, u) {
                    var f, e;
                    if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
                    if ("object" == typeof n) {
                        for (e in n) this.off(e, r, n[e]);
                        return this
                    }
                    return (r === !1 || "function" == typeof r) && (u = r, r = t), u === !1 && (u = d), this.each(function() {
                        i.event.remove(this, n, u, r)
                    })
                },
                bind: function(n, t, i) {
                    return this.on(n, null, t, i)
                },
                unbind: function(n, t) {
                    return this.off(n, null, t)
                },
                delegate: function(n, t, i, r) {
                    return this.on(t, n, i, r)
                },
                undelegate: function(n, t, i) {
                    return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
                },
                trigger: function(n, t) {
                    return this.each(function() {
                        i.event.trigger(n, t, this)
                    })
                },
                triggerHandler: function(n, r) {
                    var u = this[0];
                    return u ? i.event.trigger(n, r, u, !0) : t
                }
            }),
            function(n, t) {
                function ti(n) {
                    return tr.test(n + "")
                }

                function ii() {
                    var n, t = [];
                    return n = function(i, u) {
                        return t.push(i += " ") > r.cacheLength && delete n[t.shift()], n[i] = u
                    }
                }

                function l(n) {
                    return n[f] = !0, n
                }

                function b(n) {
                    var t = s.createElement("div");
                    try {
                        return n(t)
                    } catch (i) {
                        return !1
                    } finally {
                        t = null
                    }
                }

                function u(n, t, i, r) {
                    var y, u, e, l, p, v, w, h, d, b;
                    if ((t ? t.ownerDocument || t : k) !== s && it(t), t = t || s, i = i || [], !n || "string" != typeof n) return i;
                    if (1 !== (l = t.nodeType) && 9 !== l) return [];
                    if (!c && !r) {
                        if (y = ir.exec(n))
                            if (e = y[1]) {
                                if (9 === l) {
                                    if (u = t.getElementById(e), !u || !u.parentNode) return i;
                                    if (u.id === e) return i.push(u), i
                                } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(e)) && et(t, u) && u.id === e) return i.push(u), i
                            } else {
                                if (y[2]) return ut.apply(i, ft.call(t.getElementsByTagName(n), 0)), i;
                                if ((e = y[3]) && o.getByClassName && t.getElementsByClassName) return ut.apply(i, ft.call(t.getElementsByClassName(e), 0)), i
                            }
                        if (o.qsa && !a.test(n)) {
                            if (w = !0, h = f, d = t, b = 9 === l && n, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                                for (v = yt(n), (w = t.getAttribute("id")) ? h = w.replace(fr, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", p = v.length; p--;) v[p] = h + pt(v[p]);
                                d = ni.test(n) && t.parentNode || t;
                                b = v.join(",")
                            }
                            if (b) try {
                                return ut.apply(i, ft.call(d.querySelectorAll(b), 0)), i
                            } catch (g) {} finally {
                                w || t.removeAttribute("id")
                            }
                        }
                    }
                    return lr(n.replace(at, "$1"), t, i, r)
                }

                function yi(n, t) {
                    var i = t && n,
                        r = i && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                    if (r) return r;
                    if (i)
                        while (i = i.nextSibling)
                            if (i === t) return -1;
                    return n ? 1 : -1
                }

                function or(n) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return "input" === i && t.type === n
                    }
                }

                function sr(n) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && t.type === n
                    }
                }

                function g(n) {
                    return l(function(t) {
                        return t = +t, l(function(i, r) {
                            for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                        })
                    })
                }

                function yt(n, t) {
                    var e, f, s, o, i, h, c, l = hi[n + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (i = n, h = [], c = r.preFilter; i;) {
                        (!e || (f = ki.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(s = []));
                        e = !1;
                        (f = di.exec(i)) && (e = f.shift(), s.push({
                            value: e,
                            type: f[0].replace(at, " ")
                        }), i = i.slice(e.length));
                        for (o in r.filter)(f = vt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                            value: e,
                            type: o,
                            matches: f
                        }), i = i.slice(e.length));
                        if (!e) break
                    }
                    return t ? i.length : i ? u.error(n) : hi(n, h).slice(0)
                }

                function pt(n) {
                    for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
                    return i
                }

                function ri(n, t, i) {
                    var r = t.dir,
                        u = i && "parentNode" === r,
                        e = wi++;
                    return t.first ? function(t, i, f) {
                        while (t = t[r])
                            if (1 === t.nodeType || u) return n(t, i, f)
                    } : function(t, i, o) {
                        var h, s, c, l = v + " " + e;
                        if (o) {
                            while (t = t[r])
                                if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                        } else
                            while (t = t[r])
                                if (1 === t.nodeType || u)
                                    if (c = t[f] || (t[f] = {}), (s = c[r]) && s[0] === l) {
                                        if ((h = s[1]) === !0 || h === ot) return h === !0
                                    } else if (s = c[r] = [l], s[1] = n(t, i, o) || ot, s[1] === !0) return !0
                    }
                }

                function ui(n) {
                    return n.length > 1 ? function(t, i, r) {
                        for (var u = n.length; u--;)
                            if (!n[u](t, i, r)) return !1;
                        return !0
                    } : n[0]
                }

                function wt(n, t, i, r, u) {
                    for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                    return o
                }

                function fi(n, t, i, r, u, e) {
                    return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                        var l, c, a, p = [],
                            y = [],
                            w = e.length,
                            b = f || cr(t || "*", o.nodeType ? [o] : o, []),
                            v = !n || !f && t ? b : wt(b, p, n, o, s),
                            h = i ? u || (f ? n : w || r) ? [] : e : v;
                        if (i && i(v, h, o, s), r)
                            for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                        if (f) {
                            if (u || n) {
                                if (u) {
                                    for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                    u(null, h = [], l, s)
                                }
                                for (c = h.length; c--;)(a = h[c]) && (l = u ? dt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                            }
                        } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : ut.apply(e, h)
                    })
                }

                function ei(n) {
                    for (var s, u, i, o = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = ri(function(n) {
                            return n === s
                        }, c, !0), a = ri(function(n) {
                            return dt.call(s, n) > -1
                        }, c, !0), e = [function(n, t, i) {
                            return !h && (i || t !== ht) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                        }]; o > t; t++)
                        if (u = r.relative[n[t].type]) e = [ri(ui(e), u)];
                        else {
                            if (u = r.filter[n[t].type].apply(null, n[t].matches), u[f]) {
                                for (i = ++t; o > i; i++)
                                    if (r.relative[n[i].type]) break;
                                return fi(t > 1 && ui(e), t > 1 && pt(n.slice(0, t - 1)).replace(at, "$1"), u, i > t && ei(n.slice(t, i)), o > i && ei(n = n.slice(i)), o > i && pt(n))
                            }
                            e.push(u)
                        }
                    return ui(e)
                }

                function hr(n, t) {
                    var f = 0,
                        i = t.length > 0,
                        e = n.length > 0,
                        o = function(o, h, c, l, a) {
                            var p, d, b, w = [],
                                k = 0,
                                y = "0",
                                g = o && [],
                                nt = null != a,
                                tt = ht,
                                rt = o || e && r.find.TAG("*", a && h.parentNode || h),
                                it = v += null == tt ? 1 : Math.random() || .1;
                            for (nt && (ht = h !== s && h, ot = f); null != (p = rt[y]); y++) {
                                if (e && p) {
                                    for (d = 0; b = n[d++];)
                                        if (b(p, h, c)) {
                                            l.push(p);
                                            break
                                        }
                                    nt && (v = it, ot = ++f)
                                }
                                i && ((p = !b && p) && k--, o && g.push(p))
                            }
                            if (k += y, i && y !== k) {
                                for (d = 0; b = t[d++];) b(g, w, h, c);
                                if (o) {
                                    if (k > 0)
                                        while (y--) g[y] || w[y] || (w[y] = bi.call(l));
                                    w = wt(w)
                                }
                                ut.apply(l, w);
                                nt && !o && w.length > 0 && k + t.length > 1 && u.uniqueSort(l)
                            }
                            return nt && (v = it, ht = tt), g
                        };
                    return i ? l(o) : o
                }

                function cr(n, t, i) {
                    for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
                    return i
                }

                function lr(n, t, i, u) {
                    var o, f, e, h, l, s = yt(n);
                    if (!u && 1 === s.length) {
                        if (f = s[0] = s[0].slice(0), f.length > 2 && "ID" === (e = f[0]).type && 9 === t.nodeType && !c && r.relative[f[1].type]) {
                            if (t = r.find.ID(e.matches[0].replace(p, w), t)[0], !t) return i;
                            n = n.slice(f.shift().value.length)
                        }
                        for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                            if (e = f[o], r.relative[h = e.type]) break;
                            if ((l = r.find[h]) && (u = l(e.matches[0].replace(p, w), ni.test(f[0].type) && t.parentNode || t))) {
                                if (f.splice(o, 1), n = u.length && pt(f), !n) return ut.apply(i, ft.call(u, 0)), i;
                                break
                            }
                        }
                    }
                    return bt(n, s)(u, t, c, i, ni.test(n)), i
                }

                function pi() {}
                var nt, ot, r, st, oi, bt, tt, ht, it, s, h, c, a, rt, ct, et, kt, f = "sizzle" + -new Date,
                    k = n.document,
                    o = {},
                    v = 0,
                    wi = 0,
                    si = ii(),
                    hi = ii(),
                    ci = ii(),
                    y = typeof t,
                    li = -2147483648,
                    lt = [],
                    bi = lt.pop,
                    ut = lt.push,
                    ft = lt.slice,
                    dt = lt.indexOf || function(n) {
                        for (var t = 0, i = this.length; i > t; t++)
                            if (this[t] === n) return t;
                        return -1
                    },
                    e = "[\\x20\\t\\r\\n\\f]",
                    d = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ai = d.replace("w", "w#"),
                    vi = "\\[" + e + "*(" + d + ")" + e + "*(?:([*^$|!~]?=)" + e + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ai + ")|)|)" + e + "*\\]",
                    gt = ":(" + d + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + vi.replace(3, 8) + ")*)|.*)\\)|)",
                    at = RegExp("^" + e + "+|((?:^|[^\\\\])(?:\\\\.)*)" + e + "+$", "g"),
                    ki = RegExp("^" + e + "*," + e + "*"),
                    di = RegExp("^" + e + "*([\\x20\\t\\r\\n\\f>+~])" + e + "*"),
                    gi = RegExp(gt),
                    nr = RegExp("^" + ai + "$"),
                    vt = {
                        ID: RegExp("^#(" + d + ")"),
                        CLASS: RegExp("^\\.(" + d + ")"),
                        NAME: RegExp("^\\[name=['\"]?(" + d + ")['\"]?\\]"),
                        TAG: RegExp("^(" + d.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + vi),
                        PSEUDO: RegExp("^" + gt),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + e + "*(even|odd|(([+-]|)(\\d*)n|)" + e + "*(?:([+-]|)" + e + "*(\\d+)|))" + e + "*\\)|)", "i"),
                        needsContext: RegExp("^" + e + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + e + "*((?:-\\d)?\\d*)" + e + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ni = /[\x20\t\r\n\f]*[+~]/,
                    tr = /^[^{]+\{\s*\[native code/,
                    ir = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    rr = /^(?:input|select|textarea|button)$/i,
                    ur = /^h\d$/i,
                    fr = /'|\\/g,
                    er = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    p = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    w = function(n, t) {
                        var i = "0x" + t - 65536;
                        return i !== i ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    ft.call(k.documentElement.childNodes, 0)[0].nodeType
                } catch (ar) {
                    ft = function(n) {
                        for (var t, i = []; t = this[n++];) i.push(t);
                        return i
                    }
                }
                oi = u.isXML = function(n) {
                    var t = n && (n.ownerDocument || n).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                };
                it = u.setDocument = function(n) {
                    var i = n ? n.ownerDocument || n : k;
                    return i !== s && 9 === i.nodeType && i.documentElement ? (s = i, h = i.documentElement, c = oi(i), o.tagNameNoComments = b(function(n) {
                        return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                    }), o.attributes = b(function(n) {
                        n.innerHTML = "<select><\/select>";
                        var t = typeof n.lastChild.getAttribute("multiple");
                        return "boolean" !== t && "string" !== t
                    }), o.getByClassName = b(function(n) {
                        return n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>", n.getElementsByClassName && n.getElementsByClassName("e").length ? (n.lastChild.className = "e", 2 === n.getElementsByClassName("e").length) : !1
                    }), o.getByName = b(function(n) {
                        n.id = f + 0;
                        n.innerHTML = "<a name='" + f + "'><\/a><div name='" + f + "'><\/div>";
                        h.insertBefore(n, h.firstChild);
                        var t = i.getElementsByName && i.getElementsByName(f).length === 2 + i.getElementsByName(f + 0).length;
                        return o.getIdNotName = !i.getElementById(f), h.removeChild(n), t
                    }), r.attrHandle = b(function(n) {
                        return n.innerHTML = "<a href='#'><\/a>", n.firstChild && typeof n.firstChild.getAttribute !== y && "#" === n.firstChild.getAttribute("href")
                    }) ? {} : {
                        href: function(n) {
                            return n.getAttribute("href", 2)
                        },
                        type: function(n) {
                            return n.getAttribute("type")
                        }
                    }, o.getIdNotName ? (r.find.ID = function(n, t) {
                        if (typeof t.getElementById !== y && !c) {
                            var i = t.getElementById(n);
                            return i && i.parentNode ? [i] : []
                        }
                    }, r.filter.ID = function(n) {
                        var t = n.replace(p, w);
                        return function(n) {
                            return n.getAttribute("id") === t
                        }
                    }) : (r.find.ID = function(n, i) {
                        if (typeof i.getElementById !== y && !c) {
                            var r = i.getElementById(n);
                            return r ? r.id === n || typeof r.getAttributeNode !== y && r.getAttributeNode("id").value === n ? [r] : t : []
                        }
                    }, r.filter.ID = function(n) {
                        var t = n.replace(p, w);
                        return function(n) {
                            var i = typeof n.getAttributeNode !== y && n.getAttributeNode("id");
                            return i && i.value === t
                        }
                    }), r.find.TAG = o.tagNameNoComments ? function(n, i) {
                        return typeof i.getElementsByTagName !== y ? i.getElementsByTagName(n) : t
                    } : function(n, t) {
                        var i, r = [],
                            f = 0,
                            u = t.getElementsByTagName(n);
                        if ("*" === n) {
                            while (i = u[f++]) 1 === i.nodeType && r.push(i);
                            return r
                        }
                        return u
                    }, r.find.NAME = o.getByName && function(n, i) {
                        return typeof i.getElementsByName !== y ? i.getElementsByName(name) : t
                    }, r.find.CLASS = o.getByClassName && function(n, i) {
                        return typeof i.getElementsByClassName === y || c ? t : i.getElementsByClassName(n)
                    }, rt = [], a = [":focus"], (o.qsa = ti(i.querySelectorAll)) && (b(function(n) {
                        n.innerHTML = "<select><option selected=''><\/option><\/select>";
                        n.querySelectorAll("[selected]").length || a.push("\\[" + e + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                        n.querySelectorAll(":checked").length || a.push(":checked")
                    }), b(function(n) {
                        n.innerHTML = "<input type='hidden' i=''/>";
                        n.querySelectorAll("[i^='']").length && a.push("[*^$]=" + e + "*(?:\"\"|'')");
                        n.querySelectorAll(":enabled").length || a.push(":enabled", ":disabled");
                        n.querySelectorAll("*,:x");
                        a.push(",.*:")
                    })), (o.matchesSelector = ti(ct = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && b(function(n) {
                        o.disconnectedMatch = ct.call(n, "div");
                        ct.call(n, "[s!='']:x");
                        rt.push("!=", gt)
                    }), a = RegExp(a.join("|")), rt = RegExp(rt.join("|")), et = ti(h.contains) || h.compareDocumentPosition ? function(n, t) {
                        var r = 9 === n.nodeType ? n.documentElement : n,
                            i = t && t.parentNode;
                        return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                    } : function(n, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === n) return !0;
                        return !1
                    }, kt = h.compareDocumentPosition ? function(n, t) {
                        var r;
                        return n === t ? (tt = !0, 0) : (r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t)) ? 1 & r || n.parentNode && 11 === n.parentNode.nodeType ? n === i || et(k, n) ? -1 : t === i || et(k, t) ? 1 : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
                    } : function(n, t) {
                        var r, u = 0,
                            o = n.parentNode,
                            s = t.parentNode,
                            f = [n],
                            e = [t];
                        if (n === t) return tt = !0, 0;
                        if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : 0;
                        if (o === s) return yi(n, t);
                        for (r = n; r = r.parentNode;) f.unshift(r);
                        for (r = t; r = r.parentNode;) e.unshift(r);
                        while (f[u] === e[u]) u++;
                        return u ? yi(f[u], e[u]) : f[u] === k ? -1 : e[u] === k ? 1 : 0
                    }, tt = !1, [0, 0].sort(kt), o.detectDuplicates = tt, s) : s
                };
                u.matches = function(n, t) {
                    return u(n, null, null, t)
                };
                u.matchesSelector = function(n, t) {
                    if ((n.ownerDocument || n) !== s && it(n), t = t.replace(er, "='$1']"), !(!o.matchesSelector || c || rt && rt.test(t) || a.test(t))) try {
                        var i = ct.call(n, t);
                        if (i || o.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
                    } catch (r) {}
                    return u(t, s, null, [n]).length > 0
                };
                u.contains = function(n, t) {
                    return (n.ownerDocument || n) !== s && it(n), et(n, t)
                };
                u.attr = function(n, t) {
                    var i;
                    return (n.ownerDocument || n) !== s && it(n), c || (t = t.toLowerCase()), (i = r.attrHandle[t]) ? i(n) : c || o.attributes ? n.getAttribute(t) : ((i = n.getAttributeNode(t)) || n.getAttribute(t)) && n[t] === !0 ? t : i && i.specified ? i.value : null
                };
                u.error = function(n) {
                    throw Error("Syntax error, unrecognized expression: " + n);
                };
                u.uniqueSort = function(n) {
                    var r, u = [],
                        t = 1,
                        i = 0;
                    if (tt = !o.detectDuplicates, n.sort(kt), tt) {
                        for (; r = n[t]; t++) r === n[t - 1] && (i = u.push(t));
                        while (i--) n.splice(u[i], 1)
                    }
                    return n
                };
                st = u.getText = function(n) {
                    var r, i = "",
                        u = 0,
                        t = n.nodeType;
                    if (t) {
                        if (1 === t || 9 === t || 11 === t) {
                            if ("string" == typeof n.textContent) return n.textContent;
                            for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                        } else if (3 === t || 4 === t) return n.nodeValue
                    } else
                        for (; r = n[u]; u++) i += st(r);
                    return i
                };
                r = u.selectors = {
                    cacheLength: 50,
                    createPseudo: l,
                    match: vt,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(n) {
                            return n[1] = n[1].replace(p, w), n[3] = (n[4] || n[5] || "").replace(p, w), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                        },
                        CHILD: function(n) {
                            return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                        },
                        PSEUDO: function(n) {
                            var i, t = !n[5] && n[2];
                            return vt.CHILD.test(n[0]) ? null : (n[4] ? n[2] = n[4] : t && gi.test(t) && (i = yt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(n) {
                            return "*" === n ? function() {
                                return !0
                            } : (n = n.replace(p, w).toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === n
                            })
                        },
                        CLASS: function(n) {
                            var t = si[n + " "];
                            return t || (t = RegExp("(^|" + e + ")" + n + "(" + e + "|$)")) && si(n, function(n) {
                                return t.test(n.className || typeof n.getAttribute !== y && n.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, t, i) {
                            return function(r) {
                                var f = u.attr(r, n);
                                return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(n, t, i, r, u) {
                            var s = "nth" !== n.slice(0, 3),
                                o = "last" !== n.slice(-4),
                                e = "of-type" === t;
                            return 1 === r && 0 === u ? function(n) {
                                return !!n.parentNode
                            } : function(t, i, h) {
                                var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                                    p = t.parentNode,
                                    g = e && t.nodeName.toLowerCase(),
                                    d = !h && !e;
                                if (p) {
                                    if (s) {
                                        while (b) {
                                            for (c = t; c = c[b];)
                                                if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                            w = b = "only" === n && !w && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                        for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                            if (1 === c.nodeType && ++l && c === t) {
                                                k[n] = [v, y, l];
                                                break
                                            }
                                    } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v) l = a[1];
                                    else
                                        while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                            if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t)) break;
                                    return l -= u, l === r || 0 == l % r && l / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(n, t) {
                            var e, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                            return i[f] ? i(t) : i.length > 1 ? (e = [n, n, "", t], r.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, r) {
                                for (var u, f = i(n, t), e = f.length; e--;) u = dt.call(n, f[e]), n[u] = !(r[u] = f[e])
                            }) : function(n) {
                                return i(n, 0, e)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: l(function(n) {
                            var i = [],
                                r = [],
                                t = bt(n.replace(at, "$1"));
                            return t[f] ? l(function(n, i, r, u) {
                                for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                            }) : function(n, u, f) {
                                return i[0] = n, t(i, null, f, r), !r.pop()
                            }
                        }),
                        has: l(function(n) {
                            return function(t) {
                                return u(n, t).length > 0
                            }
                        }),
                        contains: l(function(n) {
                            return function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                        }),
                        lang: l(function(n) {
                            return nr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(p, w).toLowerCase(),
                                function(t) {
                                    var i;
                                    do
                                        if (i = c ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var i = n.location && n.location.hash;
                            return i && i.slice(1) === t.id
                        },
                        root: function(n) {
                            return n === h
                        },
                        focus: function(n) {
                            return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                        },
                        enabled: function(n) {
                            return n.disabled === !1
                        },
                        disabled: function(n) {
                            return n.disabled === !0
                        },
                        checked: function(n) {
                            var t = n.nodeName.toLowerCase();
                            return "input" === t && !!n.checked || "option" === t && !!n.selected
                        },
                        selected: function(n) {
                            return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                        },
                        empty: function(n) {
                            for (n = n.firstChild; n; n = n.nextSibling)
                                if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType) return !1;
                            return !0
                        },
                        parent: function(n) {
                            return !r.pseudos.empty(n)
                        },
                        header: function(n) {
                            return ur.test(n.nodeName)
                        },
                        input: function(n) {
                            return rr.test(n.nodeName)
                        },
                        button: function(n) {
                            var t = n.nodeName.toLowerCase();
                            return "input" === t && "button" === n.type || "button" === t
                        },
                        text: function(n) {
                            var t;
                            return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
                        },
                        first: g(function() {
                            return [0]
                        }),
                        last: g(function(n, t) {
                            return [t - 1]
                        }),
                        eq: g(function(n, t, i) {
                            return [0 > i ? i + t : i]
                        }),
                        even: g(function(n, t) {
                            for (var i = 0; t > i; i += 2) n.push(i);
                            return n
                        }),
                        odd: g(function(n, t) {
                            for (var i = 1; t > i; i += 2) n.push(i);
                            return n
                        }),
                        lt: g(function(n, t, i) {
                            for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                            return n
                        }),
                        gt: g(function(n, t, i) {
                            for (var r = 0 > i ? i + t : i; t > ++r;) n.push(r);
                            return n
                        })
                    }
                };
                for (nt in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[nt] = or(nt);
                for (nt in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[nt] = sr(nt);
                bt = u.compile = function(n, t) {
                    var r, u = [],
                        e = [],
                        i = ci[n + " "];
                    if (!i) {
                        for (t || (t = yt(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                        i = ci(n, hr(e, u))
                    }
                    return i
                };
                r.pseudos.nth = r.pseudos.eq;
                r.filters = pi.prototype = r.pseudos;
                r.setFilters = new pi;
                it();
                u.attr = i.attr;
                i.find = u;
                i.expr = u.selectors;
                i.expr[":"] = i.expr.pseudos;
                i.unique = u.uniqueSort;
                i.text = u.getText;
                i.isXMLDoc = u.isXML;
                i.contains = u.contains
            }(n);
        var re = /Until$/,
            ue = /^(?:parents|prev(?:Until|All))/,
            fe = /^.[^:#\[\.,]*$/,
            hr = i.expr.match.needsContext,
            ee = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        i.fn.extend({
            find: function(n) {
                var t, r, f, u = this.length;
                if ("string" != typeof n) return f = this, this.pushStack(i(n).filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(f[t], this)) return !0
                }));
                for (r = [], t = 0; u > t; t++) i.find(n, this[t], r);
                return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = (this.selector ? this.selector + " " : "") + n, r
            },
            has: function(n) {
                var t, r = i(n, this),
                    u = r.length;
                return this.filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(this, r[t])) return !0
                })
            },
            not: function(n) {
                return this.pushStack(lr(this, n, !1))
            },
            filter: function(n) {
                return this.pushStack(lr(this, n, !0))
            },
            is: function(n) {
                return !!n && ("string" == typeof n ? hr.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
            },
            closest: function(n, t) {
                for (var r, f = 0, o = this.length, u = [], e = hr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                    for (r = this[f]; r && r.ownerDocument && r !== t && 11 !== r.nodeType;) {
                        if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                            u.push(r);
                            break
                        }
                        r = r.parentNode
                    }
                return this.pushStack(u.length > 1 ? i.unique(u) : u)
            },
            index: function(n) {
                return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                var r = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                    u = i.merge(this.get(), r);
                return this.pushStack(i.unique(u))
            },
            addBack: function(n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.fn.andSelf = i.fn.addBack;
        i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(n) {
                return i.dir(n, "parentNode")
            },
            parentsUntil: function(n, t, r) {
                return i.dir(n, "parentNode", r)
            },
            next: function(n) {
                return cr(n, "nextSibling")
            },
            prev: function(n) {
                return cr(n, "previousSibling")
            },
            nextAll: function(n) {
                return i.dir(n, "nextSibling")
            },
            prevAll: function(n) {
                return i.dir(n, "previousSibling")
            },
            nextUntil: function(n, t, r) {
                return i.dir(n, "nextSibling", r)
            },
            prevUntil: function(n, t, r) {
                return i.dir(n, "previousSibling", r)
            },
            siblings: function(n) {
                return i.sibling((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return i.sibling(n.firstChild)
            },
            contents: function(n) {
                return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return re.test(n) || (u = r), u && "string" == typeof u && (f = i.filter(u, f)), f = this.length > 1 && !ee[n] ? i.unique(f) : f, this.length > 1 && ue.test(n) && (f = f.reverse()), this.pushStack(f)
            }
        });
        i.extend({
            filter: function(n, t, r) {
                return r && (n = ":not(" + n + ")"), 1 === t.length ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
            },
            dir: function(n, r, u) {
                for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u));) 1 === f.nodeType && e.push(f), f = f[r];
                return e
            },
            sibling: function(n, t) {
                for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
                return i
            }
        });
        var vr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            oe = / jQuery\d+="(?:null|\d+)"/g,
            yr = RegExp("<(?:" + vr + ")[\\s/>]", "i"),
            fi = /^\s+/,
            pr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            wr = /<([\w:]+)/,
            br = /<tbody/i,
            se = /<|&#?\w+;/,
            he = /<(?:script|style|link)/i,
            ei = /^(?:checkbox|radio)$/i,
            ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
            kr = /^$|\/(?:java|ecma)script/i,
            le = /^true\/(.*)/,
            ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            e = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                legend: [1, "<fieldset>", "<\/fieldset>"],
                area: [1, "<map>", "<\/map>"],
                param: [1, "<object>", "<\/object>"],
                thead: [1, "<table>", "<\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
            },
            ve = ar(r),
            oi = ve.appendChild(r.createElement("div"));
        e.optgroup = e.option;
        e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
        e.th = e.td;
        i.fn.extend({
            text: function(n) {
                return i.access(this, function(n) {
                    return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
                }, null, n, arguments.length)
            },
            wrapAll: function(n) {
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
                if (this[0]) {
                    var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]);
                    t.map(function() {
                        for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                        return n
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function() {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(n) {
                var t = i.isFunction(n);
                return this.each(function(r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(n) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(n)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(n) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(n, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            remove: function(n, t) {
                for (var r, f = 0; null != (r = this[f]); f++)(!n || i.filter(n, [r]).length > 0) && (t || 1 !== r.nodeType || i.cleanData(u(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && si(u(r, "script")), r.parentNode.removeChild(r)));
                return this
            },
            empty: function() {
                for (var n, t = 0; null != (n = this[t]); t++) {
                    for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                    n.options && i.nodeName(n, "select") && (n.options.length = 0)
                }
                return this
            },
            clone: function(n, t) {
                return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return i.access(this, function(n) {
                    var r = this[0] || {},
                        f = 0,
                        o = this.length;
                    if (n === t) return 1 === r.nodeType ? r.innerHTML.replace(oe, "") : t;
                    if (!("string" != typeof n || he.test(n) || !i.support.htmlSerialize && yr.test(n) || !i.support.leadingWhitespace && fi.test(n) || e[(wr.exec(n) || ["", ""])[1].toLowerCase()])) {
                        n = n.replace(pr, "<$1><\/$2>");
                        try {
                            for (; o > f; f++) r = this[f] || {}, 1 === r.nodeType && (i.cleanData(u(r, !1)), r.innerHTML = n);
                            r = 0
                        } catch (s) {}
                    }
                    r && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function(n) {
                var t = i.isFunction(n);
                return t || "string" == typeof n || (n = i(n).not(this).detach()), this.domManip([n], !0, function(n) {
                    var r = this.nextSibling,
                        t = this.parentNode;
                    t && (i(this).remove(), t.insertBefore(n, r))
                })
            },
            detach: function(n) {
                return this.remove(n, !0)
            },
            domManip: function(n, r, f) {
                n = bi.apply([], n);
                var c, e, l, s, y, h, o = 0,
                    a = this.length,
                    w = this,
                    b = a - 1,
                    v = n[0],
                    p = i.isFunction(v);
                if (p || !(1 >= a || "string" != typeof v || i.support.checkClone) && ce.test(v)) return this.each(function(i) {
                    var u = w.eq(i);
                    p && (n[0] = v.call(this, i, r ? u.html() : t));
                    u.domManip(n, r, f)
                });
                if (a && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                    for (r = r && i.nodeName(c, "tr"), s = i.map(u(h, "script"), dr), l = s.length; a > o; o++) e = h, o !== b && (e = i.clone(e, !0, !0), l && i.merge(s, u(e, "script"))), f.call(r && i.nodeName(this[o], "table") ? ye(this[o], "tbody") : this[o], e, o);
                    if (l)
                        for (y = s[s.length - 1].ownerDocument, i.map(s, gr), o = 0; l > o; o++) e = s[o], kr.test(e.type || "") && !i._data(e, "globalEval") && i.contains(y, e) && (e.src ? i.ajax({
                            url: e.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : i.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ae, "")));
                    h = c = null
                }
                return this
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, t) {
            i.fn[n] = function(n) {
                for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), bt.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        i.extend({
            clone: function(n, t, r) {
                var f, h, o, e, s, c = i.contains(n.ownerDocument, n);
                if (i.support.html5Clone || i.isXMLDoc(n) || !yr.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (oi.innerHTML = n.outerHTML, oi.removeChild(o = oi.firstChild)), !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                    for (f = u(o), s = u(n), e = 0; null != (h = s[e]); ++e) f[e] && pe(h, f[e]);
                if (t)
                    if (r)
                        for (s = s || u(n), f = f || u(o), e = 0; null != (h = s[e]); e++) nu(h, f[e]);
                    else nu(n, o);
                return f = u(o, "script"), f.length > 0 && si(f, !c && u(n, "script")), f = s = h = null, o
            },
            buildFragment: function(n, t, r, f) {
                for (var h, o, w, s, y, p, l, b = n.length, a = ar(t), c = [], v = 0; b > v; v++)
                    if (o = n[v], o || 0 === o)
                        if ("object" === i.type(o)) i.merge(c, o.nodeType ? [o] : o);
                        else if (se.test(o)) {
                    for (s = s || a.appendChild(t.createElement("div")), y = (wr.exec(o) || ["", ""])[1].toLowerCase(), l = e[y] || e._default, s.innerHTML = l[1] + o.replace(pr, "<$1><\/$2>") + l[2], h = l[0]; h--;) s = s.lastChild;
                    if (!i.support.leadingWhitespace && fi.test(o) && c.push(t.createTextNode(fi.exec(o)[0])), !i.support.tbody)
                        for (o = "table" !== y || br.test(o) ? "<table>" !== l[1] || br.test(o) ? 0 : s : s.firstChild, h = o && o.childNodes.length; h--;) i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
                    for (i.merge(c, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = a.lastChild
                } else c.push(t.createTextNode(o));
                for (s && a.removeChild(s), i.support.appendChecked || i.grep(u(c, "input"), we), v = 0; o = c[v++];)
                    if ((!f || -1 === i.inArray(o, f)) && (w = i.contains(o.ownerDocument, o), s = u(a.appendChild(o), "script"), w && si(s), r))
                        for (h = 0; o = s[h++];) kr.test(o.type || "") && r.push(o);
                return s = null, a
            },
            cleanData: function(n, t) {
                for (var r, f, u, e, c = 0, s = i.expando, h = i.cache, l = i.support.deleteExpando, a = i.event.special; null != (r = n[c]); c++)
                    if ((t || i.acceptData(r)) && (u = r[s], e = u && h[u])) {
                        if (e.events)
                            for (f in e.events) a[f] ? i.event.remove(r, f) : i.removeEvent(r, f, e.handle);
                        h[u] && (delete h[u], l ? delete r[s] : typeof r.removeAttribute !== o ? r.removeAttribute(s) : r[s] = null, b.push(u))
                    }
            }
        });
        var rt, v, y, hi = /alpha\([^)]*\)/i,
            be = /opacity\s*=\s*([^)]*)/,
            ke = /^(top|right|bottom|left)$/,
            de = /^(none|table(?!-c[ea]).+)/,
            tu = /^margin/,
            ge = RegExp("^(" + st + ")(.*)$", "i"),
            ct = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
            no = RegExp("^([+-])=(" + st + ")", "i"),
            iu = {
                BODY: "block"
            },
            to = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ru = {
                letterSpacing: 0,
                fontWeight: 400
            },
            p = ["Top", "Right", "Bottom", "Left"],
            uu = ["Webkit", "O", "Moz", "ms"];
        i.fn.extend({
            css: function(n, r) {
                return i.access(this, function(n, r, u) {
                    var e, o, s = {},
                        f = 0;
                    if (i.isArray(r)) {
                        for (o = v(n), e = r.length; e > f; f++) s[r[f]] = i.css(n, r[f], !1, o);
                        return s
                    }
                    return u !== t ? i.style(n, r, u) : i.css(n, r)
                }, n, r, arguments.length > 1)
            },
            show: function() {
                return eu(this, !0)
            },
            hide: function() {
                return eu(this)
            },
            toggle: function(n) {
                var t = "boolean" == typeof n;
                return this.each(function() {
                    (t ? n : ut(this)) ? i(this).show(): i(this).hide()
                })
            }
        });
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = y(n, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: i.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(n, r, u, f) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var o, s, e, h = i.camelCase(r),
                        c = n.style;
                    if (r = i.cssProps[h] || (i.cssProps[h] = fu(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                    if (s = typeof u, "string" === s && (o = no.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), !(null == u || "number" === s && isNaN(u) || ("number" !== s || i.cssNumber[h] || (u += "px"), i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"), e && "set" in e && (u = e.set(n, u, f)) === t))) try {
                        c[r] = u
                    } catch (l) {}
                }
            },
            css: function(n, r, u, f) {
                var h, e, o, s = i.camelCase(r);
                return r = i.cssProps[s] || (i.cssProps[s] = fu(n.style, s)), o = i.cssHooks[r] || i.cssHooks[s], o && "get" in o && (e = o.get(n, !0, u)), e === t && (e = y(n, r, f)), "normal" === e && r in ru && (e = ru[r]), "" === u || u ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e
            },
            swap: function(n, t, i, r) {
                var f, u, e = {};
                for (u in t) e[u] = n.style[u], n.style[u] = t[u];
                f = i.apply(n, r || []);
                for (u in t) n.style[u] = e[u];
                return f
            }
        });
        n.getComputedStyle ? (v = function(t) {
            return n.getComputedStyle(t, null)
        }, y = function(n, r, u) {
            var s, h, c, o = u || v(n),
                e = o ? o.getPropertyValue(r) || o[r] : t,
                f = n.style;
            return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), ct.test(e) && tu.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = s, f.minWidth = h, f.maxWidth = c)), e
        }) : r.documentElement.currentStyle && (v = function(n) {
            return n.currentStyle
        }, y = function(n, i, r) {
            var s, e, o, h = r || v(n),
                u = h ? h[i] : t,
                f = n.style;
            return null == u && f && f[i] && (u = f[i]), ct.test(u) && !ke.test(i) && (s = f.left, e = n.runtimeStyle, o = e && e.left, o && (e.left = n.currentStyle.left), f.left = "fontSize" === i ? "1em" : u, u = f.pixelLeft + "px", f.left = s, o && (e.left = o)), "" === u ? "auto" : u
        });
        i.each(["height", "width"], function(n, r) {
            i.cssHooks[r] = {
                get: function(n, u, f) {
                    return u ? 0 === n.offsetWidth && de.test(i.css(n, "display")) ? i.swap(n, to, function() {
                        return hu(n, r, f)
                    }) : hu(n, r, f) : t
                },
                set: function(n, t, u) {
                    var f = u && v(n);
                    return ou(n, t, u ? su(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
                }
            }
        });
        i.support.opacity || (i.cssHooks.opacity = {
            get: function(n, t) {
                return be.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(n, t) {
                var r = n.style,
                    u = n.currentStyle,
                    e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    f = u && u.filter || r.filter || "";
                r.zoom = 1;
                (t >= 1 || "" === t) && "" === i.trim(f.replace(hi, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = hi.test(f) ? f.replace(hi, e) : f + " " + e)
            }
        });
        i(function() {
            i.support.reliableMarginRight || (i.cssHooks.marginRight = {
                get: function(n, r) {
                    return r ? i.swap(n, {
                        display: "inline-block"
                    }, y, [n, "marginRight"]) : t
                }
            });
            !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, r) {
                i.cssHooks[r] = {
                    get: function(n, u) {
                        return u ? (u = y(n, r), ct.test(u) ? i(n).position()[r] + "px" : u) : t
                    }
                }
            })
        });
        i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
            return 0 >= n.offsetWidth && 0 >= n.offsetHeight || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display"))
        }, i.expr.filters.visible = function(n) {
            return !i.expr.filters.hidden(n)
        });
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            tu.test(n) || (i.cssHooks[n + t].set = ou)
        });
        var io = /%20/g,
            ro = /\[\]$/,
            au = /\r?\n/g,
            uo = /^(?:submit|button|image|reset|file)$/i,
            fo = /^(?:input|select|textarea|keygen)/i;
        i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function() {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && fo.test(this.nodeName) && !uo.test(n) && (this.checked || !ei.test(n))
                }).map(function(n, t) {
                    var r = i(this).val();
                    return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace(au, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(au, "\r\n")
                    }
                }).get()
            }
        });
        i.param = function(n, r) {
            var u, f = [],
                e = function(n, t) {
                    t = i.isFunction(t) ? t() : null == t ? "" : t;
                    f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                };
            if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
                e(this.name, this.value)
            });
            else
                for (u in n) ci(u, n[u], r, e);
            return f.join("&").replace(io, "+")
        };
        i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        i.fn.hover = function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        };
        var w, c, li = i.now(),
            ai = /\?/,
            eo = /#.*$/,
            vu = /([?&])_=[^&]*/,
            oo = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            so = /^(?:GET|HEAD)$/,
            ho = /^\/\//,
            yu = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            pu = i.fn.load,
            wu = {},
            vi = {},
            bu = "*/".concat("*");
        try {
            c = ff.href
        } catch (go) {
            c = r.createElement("a");
            c.href = "";
            c = c.href
        }
        w = yu.exec(c.toLowerCase()) || [];
        i.fn.load = function(n, r, u) {
            if ("string" != typeof n && pu) return pu.apply(this, arguments);
            var f, s, h, e = this,
                o = n.indexOf(" ");
            return o >= 0 && (f = n.slice(o, n.length), n = n.slice(0, o)), i.isFunction(r) ? (u = r, r = t) : r && "object" == typeof r && (h = "POST"), e.length > 0 && i.ajax({
                url: n,
                type: h,
                dataType: "html",
                data: r
            }).done(function(n) {
                s = arguments;
                e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
            }).complete(u && function(n, t) {
                e.each(u, s || [n.responseText, t, n])
            }), this
        };
        i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        });
        i.each(["get", "post"], function(n, r) {
            i[r] = function(n, u, f, e) {
                return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                    url: n,
                    type: r,
                    dataType: e,
                    data: u,
                    success: f
                })
            }
        });
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: c,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(w[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": bu,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": n.String,
                    "text html": !0,
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, t) {
                return t ? yi(yi(n, i.ajaxSettings), t) : yi(i.ajaxSettings, n)
            },
            ajaxPrefilter: ku(wu),
            ajaxTransport: ku(vi),
            ajax: function(n, r) {
                function k(n, r, s, c) {
                    var l, k, w, rt, p, a = r;
                    2 !== o && (o = 2, g && clearTimeout(g), y = t, d = c || "", f.readyState = n > 0 ? 4 : 0, s && (rt = co(u, f, s)), n >= 200 && 300 > n || 304 === n ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), p && (i.lastModified[e] = p), p = f.getResponseHeader("etag"), p && (i.etag[e] = p)), 204 === n ? (l = !0, a = "nocontent") : 304 === n ? (l = !0, a = "notmodified") : (l = lo(u, rt), a = l.state, k = l.data, w = l.error, l = !w)) : (w = a, (n || !a) && (a = "error", 0 > n && (n = 0))), f.status = n, f.statusText = (r || a) + "", l ? tt.resolveWith(h, [k, a, f]) : tt.rejectWith(h, [f, a, w]), f.statusCode(b), b = t, v && nt.trigger(l ? "ajaxSuccess" : "ajaxError", [f, u, l ? k : w]), it.fireWith(h, [f, a]), v && (nt.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
                }
                "object" == typeof n && (r = n, n = t);
                r = r || {};
                var l, a, e, d, g, v, y, p, u = i.ajaxSetup({}, r),
                    h = u.context || u,
                    nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                    tt = i.Deferred(),
                    it = i.Callbacks("once memory"),
                    b = u.statusCode || {},
                    rt = {},
                    ut = {},
                    o = 0,
                    ft = "canceled",
                    f = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (2 === o) {
                                if (!p)
                                    for (p = {}; t = oo.exec(d);) p[t[1].toLowerCase()] = t[2];
                                t = p[n.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === o ? d : null
                        },
                        setRequestHeader: function(n, t) {
                            var i = n.toLowerCase();
                            return o || (n = ut[i] = ut[i] || n, rt[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return o || (u.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (2 > o)
                                    for (t in n) b[t] = [b[t], n[t]];
                                else f.always(n[f.status]);
                            return this
                        },
                        abort: function(n) {
                            var t = n || ft;
                            return y && y.abort(t), k(0, t), this
                        }
                    };
                if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || c) + "").replace(eo, "").replace(ho, w[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""], null == u.crossDomain && (l = yu.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === w[1] && l[2] === w[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (w[3] || ("http:" === w[1] ? 80 : 443)))), u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), du(wu, u, r, f), 2 === o) return f;
                v = u.global;
                v && 0 == i.active++ && i.event.trigger("ajaxStart");
                u.type = u.type.toUpperCase();
                u.hasContent = !so.test(u.type);
                e = u.url;
                u.hasContent || (u.data && (e = u.url += (ai.test(e) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = vu.test(e) ? e.replace(vu, "$1_=" + li++) : e + (ai.test(e) ? "&" : "?") + "_=" + li++));
                u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
                (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
                f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + bu + "; q=0.01" : "") : u.accepts["*"]);
                for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
                if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o)) return f.abort();
                ft = "abort";
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) f[a](u[a]);
                if (y = du(vi, u, r, f)) {
                    f.readyState = 1;
                    v && nt.trigger("ajaxSend", [f, u]);
                    u.async && u.timeout > 0 && (g = setTimeout(function() {
                        f.abort("timeout")
                    }, u.timeout));
                    try {
                        o = 1;
                        y.send(rt, k)
                    } catch (et) {
                        if (!(2 > o)) throw et;
                        k(-1, et)
                    }
                } else k(-1, "No Transport");
                return f
            },
            getScript: function(n, r) {
                return i.get(n, t, r, "script")
            },
            getJSON: function(n, t, r) {
                return i.get(n, t, r, "json")
            }
        });
        i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        });
        i.ajaxPrefilter("script", function(n) {
            n.cache === t && (n.cache = !1);
            n.crossDomain && (n.type = "GET", n.global = !1)
        });
        i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var u, f = r.head || i("head")[0] || r.documentElement;
                return {
                    send: function(t, i) {
                        u = r.createElement("script");
                        u.async = !0;
                        n.scriptCharset && (u.charset = n.scriptCharset);
                        u.src = n.url;
                        u.onload = u.onreadystatechange = function(n, t) {
                            (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, u.parentNode && u.parentNode.removeChild(u), u = null, t || i(200, "success"))
                        };
                        f.insertBefore(u, f.firstChild)
                    },
                    abort: function() {
                        u && u.onload(t, !0)
                    }
                }
            }
        });
        pi = [];
        lt = /(=)\?(?=&|$)|\?\?/;
        i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = pi.pop() || i.expando + "_" + li++;
                return this[n] = !0, n
            }
        });
        i.ajaxPrefilter("json jsonp", function(r, u, f) {
            var e, s, o, h = r.jsonp !== !1 && (lt.test(r.url) ? "url" : "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && lt.test(r.data) && "data");
            return h || "jsonp" === r.dataTypes[0] ? (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(lt, "$1" + e) : r.jsonp !== !1 && (r.url += (ai.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
                return o || i.error(e + " was not called"), o[0]
            }, r.dataTypes[0] = "json", s = n[e], n[e] = function() {
                o = arguments
            }, f.always(function() {
                n[e] = s;
                r[e] && (r.jsonpCallback = u.jsonpCallback, pi.push(e));
                o && i.isFunction(s) && s(o[0]);
                o = s = t
            }), "script") : t
        });
        gu = 0;
        at = n.ActiveXObject && function() {
            for (var n in g) g[n](t, !0)
        };
        i.ajaxSettings.xhr = n.ActiveXObject ? function() {
            return !this.isLocal && nf() || ao()
        } : nf;
        nt = i.ajaxSettings.xhr();
        i.support.cors = !!nt && "withCredentials" in nt;
        nt = i.support.ajax = !!nt;
        nt && i.ajaxTransport(function(r) {
            if (!r.crossDomain || i.support.cors) {
                var u;
                return {
                    send: function(f, e) {
                        var h, s, o = r.xhr();
                        if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                            for (s in r.xhrFields) o[s] = r.xhrFields[s];
                        r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                        r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in f) o.setRequestHeader(s, f[s])
                        } catch (c) {}
                        o.send(r.hasContent && r.data || null);
                        u = function(n, f) {
                            var s, a, l, c;
                            try {
                                if (u && (f || 4 === o.readyState))
                                    if (u = t, h && (o.onreadystatechange = i.noop, at && delete g[h]), f) 4 !== o.readyState && o.abort();
                                    else {
                                        c = {};
                                        s = o.status;
                                        a = o.getAllResponseHeaders();
                                        "string" == typeof o.responseText && (c.text = o.responseText);
                                        try {
                                            l = o.statusText
                                        } catch (y) {
                                            l = ""
                                        }
                                        s || !r.isLocal || r.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                    }
                            } catch (v) {
                                f || e(-1, v)
                            }
                            c && e(s, l, c, a)
                        };
                        r.async ? 4 === o.readyState ? setTimeout(u) : (h = ++gu, at && (g || (g = {}, i(n).unload(at)), g[h] = u), o.onreadystatechange = u) : u()
                    },
                    abort: function() {
                        u && u(t, !0)
                    }
                }
            }
        });
        var tt, vt, vo = /^(?:toggle|show|hide)$/,
            yo = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
            po = /queueHooks$/,
            yt = [ko],
            ft = {
                "*": [function(n, t) {
                    var o, s, r = this.createTween(n, t),
                        e = yo.exec(t),
                        h = r.cur(),
                        u = +h || 0,
                        f = 1,
                        c = 20;
                    if (e) {
                        if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), "px" !== s && u) {
                            u = i.css(r.elem, n, !0) || o || 1;
                            do f = f || ".5", u /= f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && 1 !== f && --c)
                        }
                        r.unit = s;
                        r.start = u;
                        r.end = e[1] ? u + (e[1] + 1) * o : o
                    }
                    return r
                }]
            };
        i.Animation = i.extend(rf, {
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
                for (var r, u = 0, f = n.length; f > u; u++) r = n[u], ft[r] = ft[r] || [], ft[r].unshift(t)
            },
            prefilter: function(n, t) {
                t ? yt.unshift(n) : yt.push(n)
            }
        });
        i.Tween = f;
        f.prototype = {
            constructor: f,
            init: function(n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || "swing";
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = f.propHooks[this.prop];
                return n && n.get ? n.get(this) : f.propHooks._default.get(this)
            },
            run: function(n) {
                var r, t = f.propHooks[this.prop];
                return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : f.propHooks._default.set(this), this
            }
        };
        f.prototype.init.prototype = f.prototype;
        f.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
                }
            }
        };
        f.propHooks.scrollTop = f.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(pt(t, !0), n, i, u)
            }
        });
        i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(ut).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, r, u) {
                var o = i.isEmptyObject(n),
                    e = i.speed(t, r, u),
                    f = function() {
                        var t = rf(this, i.extend({}, n), e);
                        f.finish = function() {
                            t.stop(!0)
                        };
                        (o || i._data(this, "finish")) && t.stop(!0)
                    };
                return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
            },
            stop: function(n, r, u) {
                var f = function(n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u)
                };
                return "string" != typeof n && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var o = !0,
                        t = null != n && n + "queueHooks",
                        e = i.timers,
                        r = i._data(this);
                    if (t) r[t] && r[t].stop && f(r[t]);
                    else
                        for (t in r) r[t] && r[t].stop && po.test(t) && f(r[t]);
                    for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(u), o = !1, e.splice(t, 1));
                    (o || !u) && i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, f = i._data(this),
                        r = f[n + "queue"],
                        e = f[n + "queueHooks"],
                        u = i.timers,
                        o = r ? r.length : 0;
                    for (f.finish = !0, i.queue(this, n, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete f.finish
                })
            }
        });
        i.each({
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.speed = function(n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            }
        };
        i.timers = [];
        i.fx = f.prototype.init;
        i.fx.tick = function() {
            var u, n = i.timers,
                r = 0;
            for (tt = i.now(); n.length > r; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
            n.length || i.fx.stop();
            tt = t
        };
        i.fx.timer = function(n) {
            n() && i.timers.push(n) && i.fx.start()
        };
        i.fx.interval = 13;
        i.fx.start = function() {
            vt || (vt = setInterval(i.fx.tick, i.fx.interval))
        };
        i.fx.stop = function() {
            clearInterval(vt);
            vt = null
        };
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        i.fx.step = {};
        i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        });
        i.fn.offset = function(n) {
            if (arguments.length) return n === t ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, e, f = {
                    top: 0,
                    left: 0
                },
                u = this[0],
                s = u && u.ownerDocument;
            if (s) return r = s.documentElement, i.contains(r, u) ? (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()), e = uf(s), {
                top: f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0),
                left: f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
            }) : f
        };
        i.offset = {
            setOffset: function(n, t, r) {
                var f = i.css(n, "position");
                "static" === f && (n.style.position = "relative");
                var e = i(n),
                    o = e.offset(),
                    l = i.css(n, "top"),
                    a = i.css(n, "left"),
                    v = ("absolute" === f || "fixed" === f) && i.inArray("auto", [l, a]) > -1,
                    u = {},
                    s = {},
                    h, c;
                v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0);
                i.isFunction(t) && (t = t.call(n, r, o));
                null != t.top && (u.top = t.top - o.top + h);
                null != t.left && (u.left = t.left - o.left + c);
                "using" in t ? t.using.call(n, u) : e.css(u)
            }
        };
        i.fn.extend({
            position: function() {
                if (this[0]) {
                    var n, r, t = {
                            top: 0,
                            left: 0
                        },
                        u = this[0];
                    return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent || r.documentElement; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                    return n || r.documentElement
                })
            }
        });
        i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, r) {
            var u = /Y/.test(r);
            i.fn[n] = function(f) {
                return i.access(this, function(n, f, e) {
                    var o = uf(n);
                    return e === t ? o ? r in o ? o[r] : o.document.documentElement[f] : n[f] : (o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e, t)
                }, n, f, arguments.length, null)
            }
        });
        i.each({
            Height: "height",
            Width: "width"
        }, function(n, r) {
            i.each({
                padding: "inner" + n,
                content: r,
                "": "outer" + n
            }, function(u, f) {
                i.fn[f] = function(f, e) {
                    var o = arguments.length && (u || "boolean" != typeof f),
                        s = u || (f === !0 || e === !0 ? "margin" : "border");
                    return i.access(this, function(r, u, f) {
                        var e;
                        return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
                    }, r, o ? f : t, o, null)
                }
            })
        });
        n.jQuery = n.$ = i;
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return i
        })
    }(window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (void 0 !== i.style[t]) return {
                end: n[t]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.2.0";
    t.prototype.close = function(t) {
        function f() {
            i.detach().trigger("closed.bs.alert").remove()
        }
        var u = n(this),
            r = u.attr("data-target"),
            i;
        r || (r = u.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        i = n(r);
        t && t.preventDefault();
        i.length || (i = u.hasClass("alert") ? u : u.parent());
        i.trigger(t = n.Event("close.bs.alert"));
        t.isDefaultPrevented() || (i.removeClass("in"), n.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this, f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        },
        r;
    t.VERSION = "3.2.0";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var r = "disabled",
            i = this.$element,
            f = i.is("input") ? "val" : "html",
            u = i.data();
        t += "Text";
        null == u.resetText && i.data("resetText", i[f]());
        i[f](null == u[t] ? this.options[t] : u[t]);
        setTimeout(n.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
        }, this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length && (n = this.$element.find("input"), "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : i.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change"));
        t && this.$element.toggleClass("active")
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target);
        r.hasClass("btn") || (r = r.closest(".btn"));
        i.call(r, "toggle");
        t.preventDefault()
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
                e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t).on("keydown.bs.carousel", n.proxy(this.keydown, this));
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = this.sliding = this.interval = this.$active = this.$items = null;
            "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        r;
    t.VERSION = "3.2.0";
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    };
    t.prototype.keydown = function(n) {
        switch (n.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        n.preventDefault()
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.to = function(t) {
        var r = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1) && !(0 > t)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            r.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", n(this.$items[t]))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(t, i) {
        var u = this.$element.find(".item.active"),
            r = i || u[t](),
            c = this.interval,
            f = "next" == t ? "left" : "right",
            a = "next" == t ? "first" : "last",
            l = this,
            e, o, s, h;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[a]()
        }
        return r.hasClass("active") ? this.sliding = !1 : (e = r[0], o = n.Event("slide.bs.carousel", {
            relatedTarget: e,
            direction: f
        }), (this.$element.trigger(o), !o.isDefaultPrevented()) ? ((this.sliding = !0, c && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), s = n(this.$indicators.children()[this.getItemIndex(r)]), s && s.addClass("active")), h = n.Event("slid.bs.carousel", {
            relatedTarget: e,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, u.addClass(f), r.addClass(f), u.one("bsTransitionEnd", function() {
            r.removeClass([t, f].join(" ")).addClass("active");
            u.removeClass(["active", f].join(" "));
            l.sliding = !1;
            setTimeout(function() {
                l.$element.trigger(h)
            }, 0)
        }).emulateTransitionEnd(1e3 * u.css("transition-duration").slice(0, -1))) : (u.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), c && this.cycle(), this) : void 0)
    };
    r = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = r, this
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    });
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && "show" == i && (i = !i);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.transitioning = null;
            this.options.parent && (this.$parent = n(this.options.parent));
            this.options.toggle && this.toggle()
        },
        r;
    t.VERSION = "3.2.0";
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function() {
        var f, t, u, r, e, o;
        if (!this.transitioning && !this.$element.hasClass("in") && (f = n.Event("show.bs.collapse"), this.$element.trigger(f), !f.isDefaultPrevented())) {
            if (t = this.$parent && this.$parent.find("> .panel > .in"), t && t.length) {
                if (u = t.data("bs.collapse"), u && u.transitioning) return;
                i.call(t, "hide");
                u || t.data("bs.collapse", null)
            }
            if (r = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1, e = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[r]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return e.call(this);
            o = n.camelCase(["scroll", r].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(e, this)).emulateTransitionEnd(350)[r](this.$element[0][o])
        }
    };
    t.prototype.hide = function() {
        var i, t, r;
        if (!this.transitioning && this.$element.hasClass("in") && (i = n.Event("hide.bs.collapse"), this.$element.trigger(i), !i.isDefaultPrevented())) return t = this.dimension(), this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1, r = function() {
            this.transitioning = 0;
            this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        }, n.support.transition ? void this.$element[t](0).one("bsTransitionEnd", n.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    r = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = r, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var o, r = n(this),
            h = r.attr("data-target") || t.preventDefault() || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""),
            u = n(h),
            f = u.data("bs.collapse"),
            c = f ? "toggle" : r.data(),
            e = r.attr("data-parent"),
            s = e && n(e);
        f && f.transitioning || (s && s.find('[data-toggle="collapse"][data-parent="' + e + '"]').not(r).addClass("collapsed"), r[u.hasClass("in") ? "addClass" : "removeClass"]("collapsed"));
        i.call(u, c)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        t && 3 === t.which || (n(o).remove(), n(i).each(function() {
            var i = u(n(this)),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(t = n.Event("hide.bs.dropdown", r)), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", r))
        }))
    }

    function u(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function e(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.2.0";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = u(f), o = i.hasClass("open"), r(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n('<div class="dropdown-backdrop"/>').insertAfter(n(this)).on("click", r), e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus");
                i.toggleClass("open").trigger("shown.bs.dropdown", e)
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, r;
        if (/(38|40|27)/.test(t.keyCode) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = u(e), s = o.hasClass("open"), !s || s && 27 == t.keyCode) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
            h = " li:not(.divider):visible a";
            f = o.find('[role="menu"]' + h + ', [role="listbox"]' + h);
            f.length && (r = f.index(f.filter(":focus")), 38 == t.keyCode && r > 0 && r--, 40 == t.keyCode && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ', [role="menu"], [role="listbox"]', t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this, e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$backdrop = this.isShown = null;
            this.scrollbarWidth = 0;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.2.0";
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(t) {
        var i = this,
            r = n.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r);
        this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.backdrop(function() {
            var u = n.support.transition && i.$element.hasClass("fade"),
                r;
            i.$element.parent().length || i.$element.appendTo(i.$body);
            i.$element.show().scrollTop(0);
            u && i.$element[0].offsetWidth;
            i.$element.addClass("in").attr("aria-hidden", !1);
            i.enforceFocus();
            r = n.Event("shown.bs.modal", {
                relatedTarget: t
            });
            u ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(r)
        }))
    };
    t.prototype.hide = function(t) {
        t && t.preventDefault();
        t = n.Event("hide.bs.modal");
        this.$element.trigger(t);
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", n.proxy(function(n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(t) {
        var f = this,
            u = this.$element.hasClass("fade") ? "fade" : "",
            i, r;
        if (this.isShown && this.options.backdrop) {
            if (i = n.support.transition && u, this.$backdrop = n('<div class="modal-backdrop ' + u + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                    n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), r = function() {
            f.removeBackdrop();
            t && t()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r()) : t && t()
    };
    t.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = "object" == typeof i && i;
            (r || "destroy" != i) && (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.2.0";
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        for (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(this.options.viewport.selector || this.options.viewport), f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show()
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    };
    t.prototype.show = function() {
        var h = n.Event("show.bs." + this.type),
            c, y, s;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(h), c = n.contains(document.documentElement, this.$element[0]), h.isDefaultPrevented() || !c) return;
            var f = this,
                i = this.tip(),
                l = this.getUID(this.type);
            this.setContent();
            i.attr("id", l);
            this.$element.attr("aria-describedby", l);
            this.options.animation && i.addClass("fade");
            var t = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                v = a.test(t);
            v && (t = t.replace(a, "") || "top");
            i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(t).data("bs." + this.type, this);
            this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var r = this.getPosition(),
                e = i[0].offsetWidth,
                o = i[0].offsetHeight;
            if (v) {
                var p = t,
                    w = this.$element.parent(),
                    u = this.getPosition(w);
                t = "bottom" == t && r.top + r.height + o - u.scroll > u.height ? "top" : "top" == t && r.top - u.scroll - o < 0 ? "bottom" : "right" == t && r.right + e > u.width ? "left" : "left" == t && r.left - e < u.left ? "right" : t;
                i.removeClass(p).addClass(t)
            }
            y = this.getCalculatedOffset(t, r, e, o);
            this.applyPlacement(y, t);
            s = function() {
                f.$element.trigger("shown.bs." + f.type);
                f.hoverState = null
            };
            n.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            c = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top = t.top + o;
        t.left = t.left + s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var l = u.left ? 2 * u.left - c + h : 2 * u.top - e + f,
            a = u.left ? "left" : "top",
            v = u.left ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(l, r[0][v], a)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i, n ? 50 * (1 - n / t) + "%" : "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function() {
        function r() {
            "in" != t.hoverState && i.detach();
            t.$element.trigger("hidden.bs." + t.type)
        }
        var t = this,
            i = this.tip(),
            u = n.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (i.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r(), this.hoverState = null, this)
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var r = t[0],
            i = "BODY" == r.tagName;
        return n.extend({}, "function" == typeof r.getBoundingClientRect ? r.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
            width: i ? n(window).width() : t.outerWidth(),
            height: i ? n(window).height() : t.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : t.offset())
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.width && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        return this.$tip = this.$tip || n(this.options.template)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        clearTimeout(this.timeout);
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = "object" == typeof i && i;
            (r || "destroy" != i) && (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.2.0";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").empty()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    t.prototype.tip = function() {
        return this.$tip || (this.$tip = n(this.options.template)), this.$tip
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function t(i, r) {
        var u = n.proxy(this.process, this);
        this.$body = n("body");
        this.$scrollElement = n(n(i).is("body") ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", u);
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.2.0";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var i = "offset",
            r = 0,
            t;
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        t = this;
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var n, r = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            i = this.targets,
            u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(), r >= e) return u != (n = i[i.length - 1]) && this.activate(n);
        if (u && r <= t[0]) return u != (n = i[0]) && this.activate(n);
        for (n = t.length; n--;) u != i[n] && r >= t[n] && (!t[n + 1] || r <= t[n + 1]) && this.activate(i[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        r;
    t.VERSION = "3.2.0";
    t.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            r, u, f;
        (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), t.parent("li").hasClass("active")) || (r = e.find(".active:last a")[0], u = n.Event("show.bs.tab", {
            relatedTarget: r
        }), (t.trigger(u), u.isDefaultPrevented()) || (f = n(i), this.activate(t.closest("li"), e), this.activate(f, f.parent(), function() {
            t.trigger({
                type: "shown.bs.tab",
                relatedTarget: r
            })
        })))
    };
    t.prototype.activate = function(t, i, r) {
        function f() {
            u.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
            t.addClass("active");
            e ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade");
            t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active");
            r && r()
        }
        var u = i.find("> .active"),
            e = r && n.support.transition && u.hasClass("fade");
        e ? u.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f();
        u.removeClass("in")
    };
    r = n.fn.tab;
    n.fn.tab = i;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = r, this
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault();
        i.call(n(this), "show")
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = this.unpin = this.pinnedOffset = null;
            this.checkPosition()
        },
        r;
    t.VERSION = "3.2.0";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = n(document).height(),
                h = this.$target.scrollTop(),
                c = this.$element.offset(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom;
            "object" != typeof r && (u = f = r);
            "function" == typeof f && (f = r.top(this.$element));
            "function" == typeof u && (u = r.bottom(this.$element));
            i = null != this.unpin && h + this.unpin <= c.top ? !1 : null != u && c.top + this.$element.height() >= s - u ? "bottom" : null != f && f >= h ? "top" : !1;
            this.affixed !== i && (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(e).trigger(n.Event(e.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                top: s - this.$element.height() - u
            })))
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery); + function(n) {
    "use strict";
    var i = !1,
        t = function(t, r) {
            var u = this;
            this.init("confirmation", t, r);
            n(t).on("show.bs.confirmation", function(t) {
                u.options.onShow(t, this);
                n(this).addClass("open");
                var i = u.options,
                    r = i.all_selector;
                i.singleton && n(r + ".in").not(u.$element).confirmation("hide")
            });
            n(t).on("hide.bs.confirmation", function(t) {
                u.options.onHide(t, this);
                n(this).removeClass("open")
            });
            n(t).on("shown.bs.confirmation", function() {
                var t = u.options,
                    r = t.all_selector;
                u.$element.on("click.dismiss.bs.confirmation", '[data-dismiss="confirmation"]', n.proxy(u.hide, u));
                u.isPopout() && (i || (i = n("body").on("click", function(t) {
                    if (!u.$element.is(t.target) && !u.$element.has(t.target).length && !n(".popover").has(t.target).length) {
                        u.$element.confirmation("hide");
                        n("body").unbind(t);
                        i = !1;
                        return
                    }
                })))
            });
            n(t).on("click", function(n) {
                n.preventDefault()
            })
        },
        r;
    if (!n.fn.popover || !n.fn.tooltip) throw new Error("Confirmation requires popover.js and tooltip.js");
    t.DEFAULTS = n.extend({}, n.fn.popover.Constructor.DEFAULTS, {
        placement: "right",
        title: "Are you sure?",
        btnOkClass: "btn btn-sm btn-danger",
        btnOkLabel: "Delete",
        btnOkIcon: "fa fa-check",
        btnCancelClass: "btn btn-sm btn-default",
        btnCancelLabel: "Cancel",
        btnCancelIcon: "fa fa-times",
        href: "#",
        target: "_self",
        singleton: !0,
        popout: !0,
        onShow: function() {},
        onHide: function() {},
        onConfirm: function() {},
        onCancel: function() {},
        template: '<div class="popover othere"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><a data-apply="confirmation">Yes<\/a> <a data-dismiss="confirmation">No<\/a><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.popover.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var i = this,
            t = this.tip(),
            u = this.getTitle(),
            f = t.find('[data-apply="confirmation"]'),
            e = t.find('[data-dismiss="confirmation"]'),
            r = this.options;
        f.addClass(this.getBtnOkClass()).html(this.getBtnOkLabel()).prepend(n("<i><\/i>").addClass(this.getBtnOkIcon()), " ").attr("href", this.getHref()).attr("target", this.getTarget()).off("click").on("click", function(n) {
            r.onConfirm(n, i.$element);
            i.$element.confirmation("hide")
        });
        e.addClass(this.getBtnCancelClass()).html(this.getBtnCancelLabel()).prepend(n("<i><\/i>").addClass(this.getBtnCancelIcon()), " ").off("click").on("click", function(n) {
            r.onCancel(n, i.$element);
            i.$element.confirmation("hide")
        });
        t.find(".popover-title")[this.options.html ? "html" : "text"](u);
        t.removeClass("fade top bottom left right in");
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    };
    t.prototype.getBtnOkClass = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-btnOkClass") || (typeof n.btnOkClass == "function" ? n.btnOkClass.call(t[0]) : n.btnOkClass)
    };
    t.prototype.getBtnOkLabel = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-btnOkLabel") || (typeof n.btnOkLabel == "function" ? n.btnOkLabel.call(t[0]) : n.btnOkLabel)
    };
    t.prototype.getBtnOkIcon = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-btnOkIcon") || (typeof n.btnOkIcon == "function" ? n.btnOkIcon.call(t[0]) : n.btnOkIcon)
    };
    t.prototype.getBtnCancelClass = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-btnCancelClass") || (typeof n.btnCancelClass == "function" ? n.btnCancelClass.call(t[0]) : n.btnCancelClass)
    };
    t.prototype.getBtnCancelLabel = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-btnCancelLabel") || (typeof n.btnCancelLabel == "function" ? n.btnCancelLabel.call(t[0]) : n.btnCancelLabel)
    };
    t.prototype.getBtnCancelIcon = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-btnCancelIcon") || (typeof n.btnCancelIcon == "function" ? n.btnCancelIcon.call(t[0]) : n.btnCancelIcon)
    };
    t.prototype.getHref = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-href") || (typeof n.href == "function" ? n.href.call(t[0]) : n.href)
    };
    t.prototype.getTarget = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-target") || (typeof n.target == "function" ? n.target.call(t[0]) : n.target)
    };
    t.prototype.isPopout = function() {
        var n, i = this.$element,
            t = this.options;
        return n = i.attr("data-popout") || (typeof t.popout == "function" ? t.popout.call(i[0]) : t.popout), n == "false" && (n = !1), n
    };
    r = n.fn.confirmation;
    n.fn.confirmation = function(i) {
        var r = this;
        return this.each(function() {
            var e = n(this),
                u = e.data("bs.confirmation"),
                f = typeof i == "object" && i;
            (f = f || {}, f.all_selector = r.selector, u || i != "destroy") && (u || e.data("bs.confirmation", u = new t(this, f)), typeof i == "string" && u[i]())
        })
    };
    n.fn.confirmation.Constructor = t;
    n.fn.confirmation.noConflict = function() {
        return n.fn.confirmation = r, this
    }
}(jQuery),
function ekkoLightbox() {
    "use strict";
    var n, t;
    n = jQuery;
    t = function(t, i) {
        var f, r, u;
        return this.options = n.extend({
            title: null,
            footer: null,
            remote: null
        }, n.fn.ekkoLightbox.defaults, i || {}), this.$element = n(t), f = "", this.modal_id = this.options.modal_id ? this.options.modal_id : "ekkoLightbox-" + Math.floor(Math.random() * 1e3 + 1), u = '<div class="modal-header"' + (this.options.title || this.options.always_show_close ? "" : ' style="display:none"') + '><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;<\/button><h4 class="modal-title">' + (this.options.title || "&nbsp;") + "<\/h4><\/div>", r = '<div class="modal-footer"' + (this.options.footer ? "" : ' style="display:none"') + ">" + this.options.footer + "<\/div>", n(document.body).append('<div id="' + this.modal_id + '" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">' + u + '<div class="modal-body"><div class="ekko-lightbox-container"><div><\/div><\/div><\/div>' + r + "<\/div><\/div><\/div>"), this.modal = n("#" + this.modal_id), this.modal_dialog = this.modal.find(".modal-dialog").first(), this.modal_content = this.modal.find(".modal-content").first(), this.modal_body = this.modal.find(".modal-body").first(), this.modal_header = this.modal.find(".modal-header").first(), this.modal_footer = this.modal.find(".modal-footer").first(), this.lightbox_container = this.modal_body.find(".ekko-lightbox-container").first(), this.lightbox_body = this.lightbox_container.find("> div:first-child").first(), this.showLoading(), this.modal_arrows = null, this.border = {
            top: parseFloat(this.modal_dialog.css("border-top-width")) + parseFloat(this.modal_content.css("border-top-width")) + parseFloat(this.modal_body.css("border-top-width")),
            right: parseFloat(this.modal_dialog.css("border-right-width")) + parseFloat(this.modal_content.css("border-right-width")) + parseFloat(this.modal_body.css("border-right-width")),
            bottom: parseFloat(this.modal_dialog.css("border-bottom-width")) + parseFloat(this.modal_content.css("border-bottom-width")) + parseFloat(this.modal_body.css("border-bottom-width")),
            left: parseFloat(this.modal_dialog.css("border-left-width")) + parseFloat(this.modal_content.css("border-left-width")) + parseFloat(this.modal_body.css("border-left-width"))
        }, this.padding = {
            top: parseFloat(this.modal_dialog.css("padding-top")) + parseFloat(this.modal_content.css("padding-top")) + parseFloat(this.modal_body.css("padding-top")),
            right: parseFloat(this.modal_dialog.css("padding-right")) + parseFloat(this.modal_content.css("padding-right")) + parseFloat(this.modal_body.css("padding-right")),
            bottom: parseFloat(this.modal_dialog.css("padding-bottom")) + parseFloat(this.modal_content.css("padding-bottom")) + parseFloat(this.modal_body.css("padding-bottom")),
            left: parseFloat(this.modal_dialog.css("padding-left")) + parseFloat(this.modal_content.css("padding-left")) + parseFloat(this.modal_body.css("padding-left"))
        }, this.modal.on("show.bs.modal", this.options.onShow.bind(this)).on("shown.bs.modal", function(n) {
            return function() {
                return n.modal_shown(), n.options.onShown.call(n)
            }
        }(this)).on("hide.bs.modal", this.options.onHide.bind(this)).on("hidden.bs.modal", function(t) {
            return function() {
                return t.gallery && n(document).off("keydown.ekkoLightbox"), t.modal.remove(), t.options.onHidden.call(t)
            }
        }(this)).modal("show", i), this.modal
    };
    t.prototype = {
        modal_shown: function() {
            var t;
            if (this.options.remote) {
                if (this.gallery = this.$element.data("gallery"), this.gallery) {
                    this.gallery_items = this.options.gallery_parent_selector === "document.body" || this.options.gallery_parent_selector === "" ? n(document.body).find('*[data-gallery="' + this.gallery + '"]') : this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-gallery="' + this.gallery + '"]');
                    this.gallery_index = this.gallery_items.index(this.$element);
                    n(document).on("keydown.ekkoLightbox", this.navigate.bind(this));
                    if (this.options.directional_arrows && this.gallery_items.length > 1) {
                        this.lightbox_container.append('<div class="ekko-lightbox-nav-overlay"><a href="#" class="' + this.strip_stops(this.options.left_arrow_class) + '"><\/a><a href="#" class="' + this.strip_stops(this.options.right_arrow_class) + '"><\/a><\/div>');
                        this.modal_arrows = this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first();
                        this.lightbox_container.find("a" + this.strip_spaces(this.options.left_arrow_class)).on("click", function(n) {
                            return function(t) {
                                return t.preventDefault(), n.navigate_left()
                            }
                        }(this));
                        this.lightbox_container.find("a" + this.strip_spaces(this.options.right_arrow_class)).on("click", function(n) {
                            return function(t) {
                                return t.preventDefault(), n.navigate_right()
                            }
                        }(this))
                    }
                }
                return this.options.type ? this.options.type === "image" ? this.preloadImage(this.options.remote, !0) : this.options.type === "youtube" && (t = this.getYoutubeId(this.options.remote)) ? this.showYoutubeVideo(t) : this.options.type === "vimeo" ? this.showVimeoVideo(this.options.remote) : this.options.type === "instagram" ? this.showInstagramVideo(this.options.remote) : this.options.type === "url" ? this.loadRemoteContent(this.options.remote) : this.options.type === "video" ? this.showVideoIframe(this.options.remote) : this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo|instagram|url|video"') : this.detectRemoteType(this.options.remote)
            }
            return this.error("No remote target given")
        },
        strip_stops: function(n) {
            return n.replace(/\./g, "")
        },
        strip_spaces: function(n) {
            return n.replace(/\s/g, "")
        },
        isImage: function(n) {
            return n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSwf: function(n) {
            return n.match(/\.(swf)((\?|#).*)?$/i)
        },
        getYoutubeId: function(n) {
            var t;
            return t = n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/), t && t[2].length === 11 ? t[2] : !1
        },
        getVimeoId: function(n) {
            return n.indexOf("vimeo") > 0 ? n : !1
        },
        getInstagramId: function(n) {
            return n.indexOf("instagram") > 0 ? n : !1
        },
        navigate: function(n) {
            if (n = n || window.event, n.keyCode === 39 || n.keyCode === 37) {
                if (n.keyCode === 39) return this.navigate_right();
                if (n.keyCode === 37) return this.navigate_left()
            }
        },
        navigateTo: function(t) {
            var r, i;
            return t < 0 || t > this.gallery_items.length - 1 ? this : (this.showLoading(), this.gallery_index = t, this.$element = n(this.gallery_items.get(this.gallery_index)), this.updateTitleAndFooter(), i = this.$element.attr("data-remote") || this.$element.attr("href"), this.detectRemoteType(i, this.$element.attr("data-type") || !1), this.gallery_index + 1 < this.gallery_items.length && (r = n(this.gallery_items.get(this.gallery_index + 1), !1), i = r.attr("data-remote") || r.attr("href"), r.attr("data-type") === "image" || this.isImage(i)) ? this.preloadImage(i, !1) : void 0)
        },
        navigate_left: function() {
            if (this.gallery_items.length !== 1) return this.gallery_index === 0 ? this.gallery_index = this.gallery_items.length - 1 : this.gallery_index--, this.options.onNavigate.call(this, "left", this.gallery_index), this.navigateTo(this.gallery_index)
        },
        navigate_right: function() {
            if (this.gallery_items.length !== 1) return this.gallery_index === this.gallery_items.length - 1 ? this.gallery_index = 0 : this.gallery_index++, this.options.onNavigate.call(this, "right", this.gallery_index), this.navigateTo(this.gallery_index)
        },
        detectRemoteType: function(n, t) {
            var i;
            return t = t || !1, t === "image" || this.isImage(n) ? (this.options.type = "image", this.preloadImage(n, !0)) : t === "youtube" || (i = this.getYoutubeId(n)) ? (this.options.type = "youtube", this.showYoutubeVideo(i)) : t === "vimeo" || (i = this.getVimeoId(n)) ? (this.options.type = "vimeo", this.showVimeoVideo(i)) : t === "instagram" || (i = this.getInstagramId(n)) ? (this.options.type = "instagram", this.showInstagramVideo(i)) : t === "video" ? (this.options.type = "video", this.showVideoIframe(i)) : (this.options.type = "url", this.loadRemoteContent(n))
        },
        updateTitleAndFooter: function() {
            var n, t, i, r;
            return i = this.modal_content.find(".modal-header"), t = this.modal_content.find(".modal-footer"), r = this.$element.data("title") || "", n = this.$element.data("footer") || "", r || this.options.always_show_close ? i.css("display", "").find(".modal-title").html(r || "&nbsp;") : i.css("display", "none"), n ? t.css("display", "").html(n) : t.css("display", "none"), this
        },
        showLoading: function() {
            return this.lightbox_body.html('<div class="modal-loading">' + this.options.loadingMessage + "<\/div>"), this
        },
        showYoutubeVideo: function(n) {
            var i, r, t;
            return r = this.$element.attr("data-norelated") != null || this.options.no_related ? "&rel=0" : "", t = this.checkDimensions(this.$element.data("width") || 560), i = t / (560 / 315), this.showVideoIframe("//www.youtube.com/embed/" + n + "?badge=0&autoplay=1&html5=1" + r, t, i)
        },
        showVimeoVideo: function(n) {
            var i, t;
            return t = this.checkDimensions(this.$element.data("width") || 560), i = t / (500 / 281), this.showVideoIframe(n + "?autoplay=1", t, i)
        },
        showInstagramVideo: function(n) {
            var i, t;
            return t = this.checkDimensions(this.$element.data("width") || 612), this.resize(t), i = t + 80, this.lightbox_body.html('<iframe width="' + t + '" height="' + i + '" src="' + this.addTrailingSlash(n) + 'embed/" frameborder="0" allowfullscreen><\/iframe>'), this.options.onContentLoaded.call(this), this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        showVideoIframe: function(n, t, i) {
            return i = i || t, this.resize(t), this.lightbox_body.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="' + t + '" height="' + i + '" src="' + n + '" frameborder="0" allowfullscreen class="embed-responsive-item"><\/iframe><\/div>'), this.options.onContentLoaded.call(this), this.modal_arrows && this.modal_arrows.css("display", "none"), this
        },
        loadRemoteContent: function(t) {
            var r, i;
            return i = this.$element.data("width") || 560, this.resize(i), r = this.$element.data("disableExternalCheck") || !1, r || this.isExternal(t) ? (this.lightbox_body.html('<iframe width="' + i + '" height="' + i + '" src="' + t + '" frameborder="0" allowfullscreen><\/iframe>'), this.options.onContentLoaded.call(this)) : this.lightbox_body.load(t, n.proxy(function(n) {
                return function() {
                    return n.$element.trigger("loaded.bs.modal")
                }
            }(this))), this.modal_arrows && this.modal_arrows.css("display", "none"), this
        },
        isExternal: function(n) {
            var t;
            return (t = n.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/), typeof t[1] == "string" && t[1].length > 0 && t[1].toLowerCase() !== location.protocol) ? !0 : typeof t[2] == "string" && t[2].length > 0 && t[2].replace(new RegExp(":(" + {
                "http:": 80,
                "https:": 443
            }[location.protocol] + ")?$"), "") !== location.host ? !0 : !1
        },
        error: function(n) {
            return this.lightbox_body.html(n), this
        },
        preloadImage: function(t, i) {
            var r;
            return r = new Image, (i == null || i === !0) && (r.onload = function(t) {
                return function() {
                    var i;
                    return i = n("<img />"), i.attr("src", r.src), i.addClass("img-responsive"), t.lightbox_body.html(i), t.modal_arrows && t.modal_arrows.css("display", "block"), i.load(function() {
                        return t.options.scale_height ? t.scaleHeight(r.height, r.width) : t.resize(r.width), t.options.onContentLoaded.call(t)
                    })
                }
            }(this), r.onerror = function(n) {
                return function() {
                    return n.error("Failed to load image: " + t)
                }
            }(this)), r.src = t, r
        },
        scaleHeight: function(t, i) {
            var e, o, r, u, s, f;
            return u = this.modal_header.outerHeight(!0) || 0, r = this.modal_footer.outerHeight(!0) || 0, this.modal_footer.is(":visible") || (r = 0), this.modal_header.is(":visible") || (u = 0), e = this.border.top + this.border.bottom + this.padding.top + this.padding.bottom, s = parseFloat(this.modal_dialog.css("margin-top")) + parseFloat(this.modal_dialog.css("margin-bottom")), f = n(window).height() - e - s - u - r, o = Math.min(f / t, 1), this.modal_dialog.css("height", "auto").css("max-height", f), this.resize(o * i)
        },
        resize: function(t) {
            var i;
            return i = t + this.border.left + this.padding.left + this.padding.right + this.border.right, this.modal_dialog.css("width", "auto").css("max-width", i), this.lightbox_container.find("a").css("line-height", function() {
                return n(this).parent().height() + "px"
            }), this
        },
        checkDimensions: function(n) {
            var t, i;
            return i = n + this.border.left + this.padding.left + this.padding.right + this.border.right, t = document.body.clientWidth, i > t && (n = this.modal_body.width()), n
        },
        close: function() {
            return this.modal.modal("hide")
        },
        addTrailingSlash: function(n) {
            return n.substr(-1) !== "/" && (n += "/"), n
        }
    };
    n.fn.ekkoLightbox = function(i) {
        return this.each(function() {
            var r;
            return r = n(this), i = n.extend({
                remote: r.attr("data-remote") || r.attr("href"),
                gallery_parent_selector: r.attr("data-parent"),
                type: r.attr("data-type")
            }, i, r.data()), new t(this, i), this
        })
    };
    n.fn.ekkoLightbox.defaults = {
        gallery_parent_selector: "document.body",
        left_arrow_class: ".fa .fa-angle-left .lightboxarrow",
        right_arrow_class: ".fa .fa-angle-right .lightboxarrow",
        directional_arrows: !0,
        type: null,
        always_show_close: !0,
        no_related: !1,
        scale_height: !0,
        loadingMessage: "Loading...",
        onShow: function() {},
        onShown: function() {},
        onHide: function() {},
        onHidden: function() {},
        onNavigate: function() {},
        onContentLoaded: function() {}
    }
}.call(this);
var markup = function() {
        var n = '<div class="row container"><div class="col-md-12 navi naviedit e"><\/div><\/div>',
            t = '<div class="col-md-12 navi naviedit e"><\/div>',
            i = '<div class="col-md-6 navi naviedit e"><\/div><div class="col-md-6 navi naviedit e"><\/div>',
            r = '<div class="col-md-4 navi naviedit e"><\/div><div class="col-md-4 navi naviedit e"><\/div><div class="col-md-4 navi naviedit e"><\/div>',
            u = '<div class="col-md-3 navi naviedit e"><\/div><div class="col-md-3 navi naviedit e"><\/div><div class="col-md-3 navi naviedit e"><\/div><div class="col-md-3 navi naviedit e"><\/div>',
            f = '<div class="widgetpop"><div class="col-md-12 col-sm-12"><div class="tile col-md-3 col-sm-3" data-toggle="modal"href="/framework/popups/Title.html" data-target="#myModal"><i class="fa fa-header fa-3"><\/i><span >Title<\/span><\/div><div class="tile col-md-3 col-sm-3" data-toggle="modal"href="/framework/popups/text.html" data-target="#myModal"><i class="fa fa-align-left fa-3"><\/i><span>Text<\/span><\/div><div class="tile col-md-3 col-sm-3 columns"><i class="fa fa-columns fa-3"><\/i><span>Column<\/span><\/div><div class="tile col-md-3 col-sm-3 " data-toggle="modal"href="/framework/popups/Image.html" data-target="#myModal"><i class="fa fa-camera fa-3"><\/i><span>Image<\/span><\/div><div class="tile col-md-3 col-sm-3" data-toggle="modal"href="/framework/popups/video.html" data-target="#myModal"><i class="fa fa-film fa-3"><\/i><span >Video<\/span><\/div><div class="tile col-md-3 col-sm-3" data-toggle="modal"href="/framework/popups/Gallery.html" data-target="#myModal" ><i class="fa fa-th-large fa-3"><\/i><span >Gallery<\/span><\/div><div class="tile col-md-3 col-sm-3" data-toggle="modal"href="/framework/popups/map.html" data-target="#myModal"><i class="fa fa-map-marker fa-3"><\/i><span>Maps<\/span><\/div> <div class="tile col-md-3 col-sm-3" data-toggle="modal"href="/framework/popups/social.html" data-target="#myModal"><i class="fa fa-share-alt  fa-3"><\/i><span >Social<\/span><\/div><div class="tile col-md-3 col-sm-3" data-toggle="modal"href="/framework/popups/document.html" data-target="#myModal"><i class="fa fa-upload fa-3"><\/i><span>Doc<\/span><\/div><div class="tile col-md-3 col-sm-3" data-toggle="modal"href="/framework/popups/tab.html" data-target="#myModal"><i class="fa fa-folder  fa-3"><\/i><span>Tabs<\/span><\/div><div class="tile col-md-3 col-sm-3" data-toggle="modal"href="/framework/popups/forms.html" data-target="#myModal"><i class="fa fa-tasks  fa-3"><\/i><span>Forms<\/span><\/div><div class="tile col-md-3 col-sm-3 dvd"><i class="fa fa-minus-square-o  fa-3"><\/i><span>Divider<\/span><\/div><\/div><\/div>',
            e = '<div class="col-md-12 add  "><div class="  btn-group corner pull-left" ><lable class=" btn " ><i class="fa fa-cube">Columns<\/i><\/lable><lable class=" btn a1" >1<\/lable> <lable class=" btn a2" >2<\/lable><lable class=" btn a3" >3<\/lable> <lable class=" btn a4" >4<\/lable> <\/div> <i class="fa fa-plus i"><\/i> <div class="btn-group corner pull-right"><a class=" btn ae" data-toggle="modal"href="/framework/popups/design.html" data-target="#myModal"  ><i class="fa fa-paint-brush "><\/i><\/a>  <a class=" btn at" ><i class="fa fa-trash-o"><\/i><\/a><lable class=" btn ad" ><i class="fa fa-arrow-circle-down"><\/i><\/lable><lable class=" btn au" ><i class="fa fa-arrow-circle-up"><\/i><\/lable><\/div><\/div>',
            o = '<div class="lc" ><lable class=" btn " ><i class="fa fa-cube"> Manage Colums<\/i><\/lable><lable class=" btn a1" >1<\/lable> <lable class=" btn a2" >2<\/lable><lable class=" btn a3" >3<\/lable> <lable class=" btn a4" >4<\/lable> <\/div>';
        return {
            Onerow: function() {
                return n
            },
            Onecol: function() {
                return t
            },
            twocol: function() {
                return i
            },
            thrcol: function() {
                return r
            },
            fourcol: function() {
                return u
            },
            ToolBox: function() {
                return f
            },
            Rowtools: function() {
                return e
            },
            Rowtools1: function() {
                return o
            }
        }
    },
    pagedirty = !1,
    amenable = !1,
    hdirty = !1,
    fdirty = !1;
googleMapsLoaded = !1;
$(document).ready(function() {
   
    $("li.dropdown").on("click", function() {
        var t = $(this),
            n;
        t.hasClass("open") && (n = t.children("a.dropdown-toggle"), n.length && n.attr("href") && (location.href = n.attr("href")))
    });
    waserachmgr();
    $(".editinvoke").on("click", function() {
        showprog();
        $(".toolbox").length || ($(".toolbox").remove(), $.get("framework/settings/toolbox.html", function(n) {
            $("body").prepend(n);
            $(".toolbox").fadeIn(3e3);
            $(".editinvoke").remove()
        }));
        stopprog()
    });
    $("#myModal").on("shown.bs.modal", function() {
        var n, t;
        loadScript();
        $("#us3").length && (n = $("#us3").locationpicker("map").map, n && (t = n.getCenter(), google.maps.event.trigger(n, "resize"), n.setCenter(t)))
    });
    $(".gmap").each(function() {
        loadScript()
    });
    ytload();
    isamoeba();
    $("body").on("click", '*[data-toggle="lightbox"]', function(n) {
        n.preventDefault();
        $(this).ekkoLightbox()
    });
    $(".accordion").on("hidden.bs.collapse", toggleChevron);
    $(".accordion").on("shown.bs.collapse", toggleChevron);
    var n = getUrlVars().demo;
    console.log(n);
    n && $("#myModal").modal("show").find(".modal-content").load("/framework/popups/howto.html");
    AOS.init();
});
loader = '<div class="iprogress"><i class="fa fa-refresh  fa-spin fa-5x"><\/i><\/div>'
    /** AOS */
    ! function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
    }(this, function() {
        return function(e) {
            function t(n) {
                if (o[n]) return o[n].exports;
                var i = o[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
            }
            var o = {};
            return t.m = e, t.c = o, t.p = "dist/", t(0)
        }([function(e, t, o) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                    }
                    return e
                },
                a = o(1),
                r = (n(a), o(5)),
                c = n(r),
                u = o(6),
                s = n(u),
                d = o(7),
                f = n(d),
                l = o(8),
                m = n(l),
                p = o(9),
                b = n(p),
                v = o(10),
                g = n(v),
                y = o(13),
                w = n(y),
                h = [],
                k = !1,
                x = document.all && !window.atob,
                j = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded"
                },
                O = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                    return e && (k = !0), k ? (h = (0, g["default"])(h, j), (0, b["default"])(h, j.once), h) : void 0
                },
                _ = function() {
                    h = (0, w["default"])(), O()
                },
                z = function() {
                    h.forEach(function(e, t) {
                        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                    })
                },
                A = function(e) {
                    return e === !0 || "mobile" === e && m["default"].mobile() || "phone" === e && m["default"].phone() || "tablet" === e && m["default"].tablet() || "function" == typeof e && e() === !0
                },
                E = function(e) {
                    return j = i(j, e), h = (0, w["default"])(), A(j.disable) || x ? z() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function() {
                        O(!0)
                    }) : document.addEventListener(j.startEvent, function() {
                        O(!0)
                    }), window.addEventListener("resize", (0, s["default"])(O, 50, !0)), window.addEventListener("orientationchange", (0, s["default"])(O, 50, !0)), window.addEventListener("scroll", (0, c["default"])(function() {
                        (0, b["default"])(h, j.once)
                    }, 99)), document.addEventListener("DOMNodeRemoved", function(e) {
                        var t = e.target;
                        t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, s["default"])(_, 50, !0)
                    }), (0, f["default"])("[data-aos]", _), h)
                };
            e.exports = {
                init: E,
                refresh: O,
                refreshHard: _
            }
        }, function(e, t) {}, , , , function(e, t, o) {
            "use strict";

            function n(e, t, o) {
                var n = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError(c);
                return i(o) && (n = "leading" in o ? !!o.leading : n, a = "trailing" in o ? !!o.trailing : a), r(e, t, {
                    leading: n,
                    maxWait: t,
                    trailing: a
                })
            }

            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : a(e);
                return !!e && ("object" == t || "function" == t)
            }
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                r = o(6),
                c = "Expected a function";
            e.exports = n
        }, function(e, t) {
            "use strict";

            function o(e, t, o) {
                function n(t) {
                    var o = b,
                        n = v;
                    return b = v = void 0, O = t, y = e.apply(n, o)
                }

                function a(e) {
                    return O = e, w = setTimeout(d, t), _ ? n(e) : y
                }

                function r(e) {
                    var o = e - h,
                        n = e - O,
                        i = t - o;
                    return z ? x(i, g - n) : i
                }

                function u(e) {
                    var o = e - h,
                        n = e - O;
                    return !h || o >= t || 0 > o || z && n >= g
                }

                function d() {
                    var e = j();
                    return u(e) ? f(e) : void(w = setTimeout(d, r(e)))
                }

                function f(e) {
                    return clearTimeout(w), w = void 0, A && b ? n(e) : (b = v = void 0, y)
                }

                function l() {
                    void 0 !== w && clearTimeout(w), h = O = 0, b = v = w = void 0
                }

                function m() {
                    return void 0 === w ? y : f(j())
                }

                function p() {
                    var e = j(),
                        o = u(e);
                    if (b = arguments, v = this, h = e, o) {
                        if (void 0 === w) return a(h);
                        if (z) return clearTimeout(w), w = setTimeout(d, t), n(h)
                    }
                    return void 0 === w && (w = setTimeout(d, t)), y
                }
                var b, v, g, y, w, h = 0,
                    O = 0,
                    _ = !1,
                    z = !1,
                    A = !0;
                if ("function" != typeof e) throw new TypeError(s);
                return t = c(t) || 0, i(o) && (_ = !!o.leading, z = "maxWait" in o, g = z ? k(c(o.maxWait) || 0, t) : g, A = "trailing" in o ? !!o.trailing : A), p.cancel = l, p.flush = m, p
            }

            function n(e) {
                var t = i(e) ? h.call(e) : "";
                return t == f || t == l
            }

            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }

            function a(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
            }

            function r(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || a(e) && h.call(e) == m
            }

            function c(e) {
                if ("number" == typeof e) return e;
                if (r(e)) return d;
                if (i(e)) {
                    var t = n(e.valueOf) ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(p, "");
                var o = v.test(e);
                return o || g.test(e) ? y(e.slice(2), o ? 2 : 8) : b.test(e) ? d : +e
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                s = "Expected a function",
                d = NaN,
                f = "[object Function]",
                l = "[object GeneratorFunction]",
                m = "[object Symbol]",
                p = /^\s+|\s+$/g,
                b = /^[-+]0x[0-9a-f]+$/i,
                v = /^0b[01]+$/i,
                g = /^0o[0-7]+$/i,
                y = parseInt,
                w = Object.prototype,
                h = w.toString,
                k = Math.max,
                x = Math.min,
                j = Date.now;
            e.exports = o
        }, function(e, t) {
            "use strict";

            function o(e, t) {
                r.push({
                    selector: e,
                    fn: t
                }), !c && a && (c = new a(n), c.observe(i.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })), n()
            }

            function n() {
                for (var e, t, o = 0, n = r.length; n > o; o++) {
                    e = r[o], t = i.querySelectorAll(e.selector);
                    for (var a, c = 0, u = t.length; u > c; c++) a = t[c], a.ready || (a.ready = !0, e.fn.call(a, a))
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = window.document,
                a = window.MutationObserver || window.WebKitMutationObserver,
                r = [],
                c = void 0;
            t["default"] = o
        }, function(e, t) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                    function e(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var n = t[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, o, n) {
                        return o && e(t.prototype, o), n && e(t, n), t
                    }
                }(),
                i = function() {
                    function e() {
                        o(this, e)
                    }
                    return n(e, [{
                        key: "phone",
                        value: function() {
                            var e = !1;
                            return function(t) {
                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                            }(navigator.userAgent || navigator.vendor || window.opera), e
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var e = !1;
                            return function(t) {
                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                            }(navigator.userAgent || navigator.vendor || window.opera), e
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), e
                }();
            t["default"] = new i
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e, t, o) {
                    var n = e.node.getAttribute("data-aos-once");
                    t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof n && ("false" === n || !o && "true" !== n) && e.node.classList.remove("aos-animate")
                },
                n = function(e, t) {
                    var n = window.pageYOffset,
                        i = window.innerHeight;
                    e.forEach(function(e, a) {
                        o(e, i + n, t)
                    })
                };
            t["default"] = n
        }, function(e, t, o) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = o(11),
                a = n(i),
                r = function(e, t) {
                    return e.forEach(function(e, o) {
                        e.node.classList.add("aos-init"), e.position = (0, a["default"])(e.node, t.offset)
                    }), e
                };
            t["default"] = r
        }, function(e, t, o) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = o(12),
                a = n(i),
                r = function(e, t) {
                    var o = 0,
                        n = 0,
                        i = window.innerHeight,
                        r = {
                            offset: e.getAttribute("data-aos-offset"),
                            anchor: e.getAttribute("data-aos-anchor"),
                            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                        };
                    switch (r.offset && !isNaN(r.offset) && (n = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), o = (0, a["default"])(e).top, r.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            o += e.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            o += e.offsetHeight;
                            break;
                        case "top-center":
                            o += i / 2;
                            break;
                        case "bottom-center":
                            o += i / 2 + e.offsetHeight;
                            break;
                        case "center-center":
                            o += i / 2 + e.offsetHeight / 2;
                            break;
                        case "top-top":
                            o += i;
                            break;
                        case "bottom-top":
                            o += e.offsetHeight + i;
                            break;
                        case "center-top":
                            o += e.offsetHeight / 2 + i
                    }
                    return r.anchorPlacement || r.offset || isNaN(t) || (n = t), o + n
                };
            t["default"] = r
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e) {
                for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: o,
                    left: t
                }
            };
            t["default"] = o
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e) {
                e = e || document.querySelectorAll("[data-aos]");
                var t = [];
                return [].forEach.call(e, function(e, o) {
                    t.push({
                        node: e
                    })
                }), t
            };
            t["default"] = o
        }])
    });
//# sourceMappingURL=aos.js.map
function waserachmgr() {
    $('body').on('click', '.wasearchbtn', function(e) {

        var form = $(this).parents('.wasearchbox').find('.wasearchkeyword').data('form')
        var keyword = $(this).parents('.wasearchbox').find('.wasearchkeyword').val();

        window.location.href = "/search?form=" + form + '&keyword=' + keyword
    });
};


/***************form captach */
! function(t) {
    "use strict";
    t.fn.captcha = function(a) {
        var e = t.extend({
                idCaptchaText: "captchaText",
                idCaptchaInput: "captchaInput",
                class: ""
            }, a),
            i = t(this).find("input[type=submit]");
        i.attr("disabled", "disabled"), t('<label id="' + e.idCaptchaText + '"></label>').insertBefore(i), t('<input id="' + e.idCaptchaInput + '" type="text" required>').insertBefore(i);
        var d = this.find("#" + e.idCaptchaText),
            s = this.find("#" + e.idCaptchaInput),
            n = Math.floor(10 * Math.random()),
            r = Math.floor(10 * Math.random()),
            c = n + r;
        return t(d).text(n + " + " + r + " ="), t(s).keyup(function() {
            t(this).val() == c ? i.removeAttr("disabled").addClass(e.class) : i.attr("disabled", "disabled").removeClass(e.class)
        }), this
    }
}(jQuery);