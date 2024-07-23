(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
  8312: function (e, t, l) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
      return l(3512);
    }]);
  },
  3512: function (e, t, l) {
    "use strict";

    l.r(t);
    l.d(t, {
      default: function () {
        return Home;
      }
    });
    var a = l(5893);
    var r = l(9008);
    var n = l.n(r);
    var s = l(99);
    var i = l(4858);
    var o = l(6342);
    var x = l(7294);
    var c = l(9352);
    var d = l(5675);
    var u = l.n(d);
    var m = l(4993);
    var g = l(8259);
    var p = l(9398);
    var b = l(255);
    var h = l(9498);
    var f = l(1579);
    var w = l(1087);
    var v = l(3495);
    var y = l(1526);
    var j = l(8349);
    var Z = l(7115);
    var _ = l(1163);
    var k = l(9583);
    var N = l(655);
    var bet_controls_component = e => {
      0;
      let [t, l] = x.useState(0);
      0;
      let [r, n] = x.useState(0);
      0;
      let s = _.useRouter();
      0;
      let {
        users: i,
        setUsers: o
      } = x.useContext(p.S);
      0;
      let {
        autobet1: c,
        setAutobet1: d,
        autobet2: u,
        setAutobet2: m,
        addbet1amount: B,
        addbet2amount: C,
        bet1amount: S,
        bet2amount: T,
        setShowOneBetArea: F,
        showOneBetArea: E
      } = x.useContext(Z.G);
      0;
      let {
        setshowWalletModal: I,
        setCurrentWalletTab: A,
        addCustomToast: D
      } = x.useContext(g.W);
      0;
      0;
      let [V, G] = x.useState(null !== f.Bs("bet1multiplier") ? (0, f.Bs)("bet1multiplier") : "777.86");
      0;
      0;
      let [U, L] = x.useState(null !== f.Bs("bet2multiplier") ? (0, f.Bs)("bet2multiplier") : "777.86");
      0;
      let [O, R] = x.useState("");
      0;
      let [P, W] = x.useState("");
      0;
      let [M, z] = x.useState("");
      0;
      let [H, Y] = x.useState("");
      0;
      x.useEffect(() => {
        0;
        if (null === f.Bs("bet1amount")) {
          0;
          f.p0("bet1amount", "10");
        }
        0;
        if (null === f.Bs("bet2amount")) {
          0;
          f.p0("bet2amount", "50");
        }
      }, []);
      let addbet1multiplier = e => {
        G(e);
        b.Z.bet1multiplier = e;
      };
      let addbet2multiplier = e => {
        L(e);
        b.Z.bet2multiplier = e;
      };
      let addInputFieldError = (e, t) => {
        if ("amount1" === e) {
          R(t);
          setTimeout(() => {
            R("");
          }, 2e3);
        } else if ("multiplier1" === e) {
          z(t);
          setTimeout(() => {
            z("");
          }, 2e3);
        } else if ("amount2" === e) {
          W(t);
          setTimeout(() => {
            W("");
          }, 2e3);
        } else if ("multiplier2" === e) {
          Y(t);
          setTimeout(() => {
            Y("");
          }, 2e3);
        }
      };
      let placeBet1 = () => {
        if ("started" === e.gameStatus && b.Z.amingame_1) {
          e.cashOut("button1");
          return;
        }
        if (("waiting" !== e.gameStatus || !b.Z.amingame_1) && "" !== e.gameStatus) {
          if ("" === b.Z.token) {
            s.push("/login");
            return;
          }
          if ("" === V) {
            addInputFieldError("multiplier1", "Enter cashout value");
            return;
          }
          if (isNaN(parseFloat(V))) {
            addInputFieldError("multiplier1", "invalid cashout value");
            return;
          }
          if (1.05 > parseFloat(V)) {
            addInputFieldError("multiplier1", "min cashout is 1.05");
            return;
          }
          0;
          if ("true" === f.Bs("demomode")) {
            ;
          } else {
            0;
            let e = parseInt(f.Bs("bet1amount"));
            if (b.Z.is_freebet) {
              if (e > i[0].freebet_amount) {
                D("insufficient balance %error");
                return;
              }
            } else {
              let t = true;
              if (b.Z.holding_2) {
                e += parseInt(T);
                t = false;
              }
              if (e > i[0].balance) {
                if (t) {
                  A(1);
                  I(true);
                }
                D("insufficient balance %error");
                return;
              }
            }
          }
          e.handleBet("button1");
        }
      };
      let placeBet2 = () => {
        if ("started" === e.gameStatus && b.Z.amingame_2) {
          e.cashOut("button2");
          return;
        }
        if (("waiting" !== e.gameStatus || !b.Z.amingame_2) && "" !== e.gameStatus) {
          if ("" === b.Z.token) {
            s.push("/login");
            return;
          }
          if ("" === U) {
            addInputFieldError("multiplier2", "Enter cashout value");
            return;
          }
          if (isNaN(parseFloat(U))) {
            addInputFieldError("multiplier2", "invalid cashout value");
            return;
          }
          if (1.05 > parseFloat(U)) {
            addInputFieldError("multiplier2", "min cashout is 1.05");
            return;
          }
          0;
          if ("true" === f.Bs("demomode")) {
            ;
          } else {
            0;
            let e = parseInt(f.Bs("bet2amount"));
            let t = true;
            if (b.Z.holding_1) {
              0;
              e += parseInt(f.Bs("bet1amount"));
              t = false;
            }
            if (e > i[0].balance) {
              if (t) {
                A(1);
                I(true);
              }
              D("insufficient balance %error");
              return;
            }
          }
          e.handleBet("button2");
        }
      };
      0;
      x.useEffect(() => (j.Z.on(w.Z.UPDATE_USER_FREEBET_DONE, onFreebetDone), () => {
        j.Z.removeAllListeners(w.Z.UPDATE_USER_FREEBET_DONE);
      }), []);
      let onFreebetDone = e => {
        if (i.length > 0 && (b.Z.amingame_1 || b.Z.amingame_2)) {
          let e = i[0];
          e.is_first_bet = false;
          o([e]);
          F(false);
        }
      };
      0;
      let [J, q] = x.useState(false);
      0;
      let [X, Q] = x.useState(false);
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      return a.jsxs("div", {
        className: "my-2 lg:my-0 xl:my-2 flex w-full  mb-1 flex-wrap lg:flex-nowrap ".concat(E ? "justify-center lg:flex-1 " : "flex-1 "),
        children: [a.jsxs("div", {
          className: "flex flex-col bg-sblack rounded-lg items-center relative justify-center xl:h-full w-full my-2 lg:mb-0  py-2     ".concat(E ? "lg:w-2/3" : " xl:flex-1", " border-[1px] transition-all ").concat(b.Z.holding_1 || b.Z.amingame_1 && "started" !== e.gameStatus ? "border-mred" : b.Z.amingame_1 ? "border-myellow" : " border-transparent"),
          children: [" ", E && false == b.Z.is_freebet && (0, a.jsx)("div", {
            onClick: () => {
              if (!(i.length > 0 && i[0].is_first_bet)) {
                F(false);
              }
            },
            className: "absolute top-1 right-1 w-6 h-6 lg:w-4 lg:h-4 xl:w-5  xl:h-5 2xl:w-6 2xl:h-6 rounded-full  flex items-center justify-center bg-mgreen bg-opacity-70 lg:cursor-pointer hover:bg-opacity-90 text-gray-200",
            children: (0, a.jsx)(k.wEH, {})
          }), a.jsx(y.M, {
            children: (O || M) && (0, a.jsx)(v.E.div, {
              initial: {
                opacity: 0,
                height: 0
              },
              animate: {
                opacity: 1,
                height: 10
              },
              exit: {
                opacity: 0,
                height: 0
              },
              transition: {
                duration: .2
              },
              className: " w-center text-mred flex w-full justify-start items-center ml-10 mb-1",
              children: (0, a.jsx)("p", {
                children: O || M
              })
            })
          }), a.jsx("div", {
            className: " rounded-xl  border-[2px] border-mblack/20  leading-4 lg:leading-3 2xl:leading-4  3xl:leading-5 bg-mblack/20 ".concat(b.Z.is_freebet ? "hidden" : "flex"),
            children: ["Bet", "Auto"].map((e, r) => (0, a.jsx)("div", {
              onClick: () => {
                l(r);
                if (0 == r) {
                  addbet1multiplier("777.86");
                  q(false);
                }
              },
              className: "w-20 lg:w-14 xl:w-16 2xl:w-20 3xl:w-24 flex justify-center lg:cursor-pointer p-[1px]  ".concat(t == r ? "bg-[#585b58]/40 rounded-xl text-gray-100" : ""),
              children: e
            }, e))
          }), a.jsx("div", {
            className: "flex flex-1"
          }), a.jsxs("div", {
            className: "flex mt-4 lg:mt-2 xl:mt-2.5 2xl:mt-3 3xl:mt-1 text-gray-400  ",
            children: [a.jsxs("div", {
              className: " flex-col ".concat(b.Z.is_freebet ? "hidden" : "flex"),
              children: [a.jsx("p", {
                className: "hidden",
                children: "Bet Amount"
              }), a.jsxs("div", {
                className: "flex bg-mblack rounded-xl items-center px-2 lg:py-0.5 2xl:py-0",
                children: [a.jsx("div", {
                  onClick: () => {
                    0;
                    let e = h.Cf("" === S ? 0 : parseInt(S));
                    B("".concat(e));
                  },
                  className: "rounded-full border-2 border-gray-500 flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5  lg:cursor-pointer",
                  children: "-"
                }), a.jsx("input", {
                  type: "number",
                  className: "w-16 lg:w-10 xl:w-12 2xl:w-14 3xl:w-20 outline-none p-1 ml-4  font-bold bg-mblack text-gray-200",
                  value: S,
                  placeholder: "e.g 100",
                  onChange: e => {
                    B(e.target.value);
                  },
                  onBlur: () => {
                    if ("" == S) {
                      B("".concat(N.U7));
                      return;
                    }
                    if (parseFloat(S) < N.U7) {
                      B("".concat(N.U7));
                    }
                  }
                }), a.jsx("div", {
                  onClick: () => {
                    0;
                    let e = h.Wj("" === S ? 0 : parseInt(S));
                    B("".concat(e));
                  },
                  className: "rounded-full border-2 border-gray-500 flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 lg:cursor-pointer",
                  children: "+"
                })]
              }), a.jsxs("div", {
                className: "mt-1 flex space-x-2  text-[13px] lg:text-[9px] xl:text-[10px] 2xl:text-xs 3xl:text-sm",
                children: [a.jsx("div", {
                  onClick: () => {
                    if ("" === S) {
                      B("100");
                    } else {
                      let e = parseInt(S);
                      if (e + 100 > 1e4) {
                        B("100");
                      } else {
                        B("".concat(e + 100));
                      }
                    }
                  },
                  className: "flex flex-1 px-1 rounded-xl bg-[#141516] justify-center  items-center lg:cursor-pointer ",
                  children: "100"
                }), a.jsx("div", {
                  onClick: () => {
                    if ("" === S) {
                      B("200");
                    } else {
                      let e = parseInt(S);
                      if (e + 200 > 1e4) {
                        B("200");
                      } else {
                        B("".concat(e + 200));
                      }
                    }
                  },
                  className: "flex flex-1 px-1 rounded-xl bg-[#141516] justify-center  items-center lg:cursor-pointer ",
                  children: "200"
                })]
              }), a.jsxs("div", {
                className: "mt-1 flex space-x-2   text-[13px]  lg:text-[9px] xl:text-[10px] 2xl:text-xs 3xl:text-sm",
                children: [a.jsx("div", {
                  onClick: () => {
                    if ("" === S) {
                      B("500");
                    } else {
                      let e = parseInt(S);
                      if (e + 500 > 1e4) {
                        B("500");
                      } else {
                        B("".concat(e + 500));
                      }
                    }
                  },
                  className: "flex flex-1 px-1 px- rounded-xl bg-[#141516] justify-center  items-center lg:cursor-pointer ",
                  children: "500"
                }), a.jsx("div", {
                  onClick: () => {
                    B("".concat(N.ZB));
                  },
                  className: "flex flex-1 px-1 rounded-xl bg-[#141516] justify-center  items-center  lg:cursor-pointer",
                  children: N.ZB
                })]
              })]
            }), a.jsxs("div", {
              className: "flex flex-col items-center w-full",
              children: [b.Z.holding_1 && !b.Z.amingame_1 && (0, a.jsx)("p", {
                className: " pl-2 ",
                children: "Waiting For Next Round"
              }), a.jsxs("div", {
                onClick: () => {
                  if ("" === S) {
                    B("10");
                  }
                  if (parseInt(S) < N.U7) {
                    B("".concat(N.U7));
                  }
                  if (parseInt(S) > N.ZB) {
                    B("".concat(N.ZB));
                  }
                  placeBet1();
                },
                className: "flex flex-col  w-44 lg:w-40 xl:w-44 2xl:w-52 3xl:w-64 uppercase  rounded-2xl lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-2xl ".concat(b.Z.holding_1 ? "h-11 lg:h-9 xl:h-11 2xl:h-12 3xl:h-14 uppercase" : "h-full ", "  ").concat(e.button1Classes, " transition-all  items-center justify-center ml-4  lg:cursor-pointer"),
                children: [e.button1Text.startsWith(N.Cf) && (0, a.jsx)("p", {
                  className: "text-base lg:text-sm xl:text-base 2xl:text-lg  ",
                  children: "Cash Out"
                }), a.jsx("p", {
                  className: "text-2xl lg:text-base xl:text-lg 2xl:text-2xl 3xl:text-2xl text-gray-100  ",
                  children: e.button1Text
                }), "Bet" === e.button1Text && "" !== S && (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsxs)("p", {
                    className: "text-base lg:text-xs xl:text-sm 2xl:text-base 3xl:text-xl text-gray-100",
                    children: [" ", parseFloat(S).toFixed(2), " ", (0, a.jsx)("span", {
                      children: N.Cf
                    })]
                  }), i.length > 0 && b.Z.is_freebet && (0, a.jsx)("p", {
                    className: "text-sm lg:text-[9px] xl:text-xs 2xl:text-sm 3xl:text-base lowercase text-gray-100",
                    children: "(free bet)"
                  })]
                })]
              })]
            })]
          }), a.jsx("div", {
            className: "flex flex-1"
          }), a.jsxs("div", {
            className: "flex mt-2 lg:mt-0 w-full flex-col items-center text-xs lg:text-[10px]  2xl:text-xs 3xl:text-[13px]  text-gray-400/80 ".concat(1 == t ? "visible" : "invisible"),
            children: [a.jsx("div", {
              className: "flex   w-full h-[2px] bg-mblack/40 mt-1"
            }), a.jsxs("div", {
              className: "flex justify-center lg:justify-start  mt-1 space-x-2 ",
              children: [a.jsxs("div", {
                className: "flex items-center   ",
                children: [a.jsx("p", {
                  children: "Auto Bet"
                }), a.jsx("div", {
                  onClick: () => {
                    if (c) {
                      d(false);
                    } else {
                      placeBet1();
                      d(true);
                    }
                  },
                  className: "flex rounded-xl border-[1px]  w-10 lg:w-8 xl:w-9 2xl:w-10 mx-2   lg:cursor-pointer transition-all ".concat(c ? "justify-end bg-avgreen border-mgreen" : " justify-start border-gray-500"),
                  children: a.jsx("div", {
                    className: "flex w-3 h-3 lg:w-2 lg:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 3xl:w-3.5 3xl:h-3.5 m-0.5 rounded-full bg-gray-300"
                  })
                })]
              }), a.jsxs("div", {
                className: "flex items-center",
                children: [a.jsx("p", {
                  className: "",
                  children: "Auto Cash Out"
                }), a.jsx("div", {
                  onClick: () => {
                    if (J) {
                      q(false);
                      addbet1multiplier("777.86");
                    } else {
                      q(true);
                      addbet1multiplier("2.55");
                    }
                  },
                  className: "flex rounded-xl border-[1px]  lg:cursor-pointer  w-10 lg:w-8 xl:w-9 2xl:w-10 mx-1  transition-all ".concat(J ? "justify-end bg-avgreen border-mgreen" : " justify-start border-gray-600"),
                  children: a.jsx("div", {
                    className: "flex w-3 h-3 lg:w-2 lg:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 3xl:w-3.5 3xl:h-3.5 m-0.5 rounded-full bg-gray-300"
                  })
                })]
              }), a.jsxs("div", {
                className: "flex bg-mblack rounded-xl items-center px-2 ".concat(J ? "opacity-100 text-gray-200" : "opacity-50"),
                children: [a.jsx("input", {
                  type: "number",
                  readOnly: !J,
                  className: "w-12 lg:w-10 xl:w-12 2xl:w-16 3xl:w-14 outline-none p-1 lg:p-0 xl:p-0.5 2xl:p-1  lg:ml-2   bg-mblack placeholder:text-gray-500 font-bold",
                  value: J ? V : "2.55",
                  placeholder: "e.g 2.80",
                  onChange: e => {
                    addbet1multiplier(e.target.value);
                  },
                  onBlur: e => {
                    if (1.5 > parseFloat(e.target.value)) {
                      addbet1multiplier("1.50");
                    }
                  }
                }), " ", a.jsx("p", {
                  className: "font-bold",
                  children: "x"
                })]
              }), a.jsx("div", {
                className: "lg:w-5 3xl:w-8 hidden 2xl:flex"
              })]
            })]
          })]
        }), a.jsx("div", {
          className: "w-2.5 lg:flex hidden"
        }), a.jsxs("div", {
          className: "flex flex-col bg-sblack rounded-lg items-center justify-center xl:h-full w-full my-2 lg:mb-0 py-2  relative  xl:flex-1 border-[1px] transition-all ".concat(E ? "hidden" : "", " ").concat(b.Z.holding_2 || b.Z.amingame_2 && "started" !== e.gameStatus ? "border-mred" : b.Z.amingame_2 ? "border-myellow" : " border-transparent"),
          children: [a.jsx("div", {
            onClick: () => {
              F(true);
            },
            className: "absolute top-1 right-1 w-6 h-6 lg:w-4 lg:h-4 xl:w-5  xl:h-5 2xl:w-6 2xl:h-6 rounded-full  flex items-center justify-center bg-mblack bg-opacity-70 lg:cursor-pointer hover:bg-opacity-90 text-gray-600",
            children: a.jsx(k.iFH, {})
          }), a.jsx(y.M, {
            children: (P || H) && (0, a.jsx)(v.E.div, {
              initial: {
                opacity: 0,
                height: 0
              },
              animate: {
                opacity: 1,
                height: 10
              },
              exit: {
                opacity: 0,
                height: 0
              },
              transition: {
                duration: .2
              },
              className: " w-center text-mred flex w-full justify-start items-center ml-10 mb-1 ",
              children: (0, a.jsx)("p", {
                children: P || H
              })
            })
          }), a.jsx("div", {
            className: "flex rounded-xl  bg-mblack/20 border-[2px] 3xl:leading-5 2xl:leading-4 lg:leading-3 border-mblack/20",
            children: ["Bet", "Auto"].map((e, t) => (0, a.jsx)("div", {
              onClick: () => {
                n(t);
                if (0 == t) {
                  addbet2multiplier("777.86");
                  Q(false);
                }
              },
              className: "w-20 lg:w-14 xl:w-16 2xl:w-20 3xl:w-24 flex justify-center  3xl:leading-5 lg:cursor-pointer transition-all duration-300 p-[1px] ".concat(r == t ? "bg-[#585b58]/40  rounded-xl text-gray-200" : ""),
              children: e
            }, e))
          }), a.jsx("div", {
            className: "flex flex-1"
          }), a.jsxs("div", {
            className: "flex mt-4 lg:mt-2 xl:mt-2.5 2xl:mt-1.5 3xl:mt-1   text-gray-400/80",
            children: [a.jsxs("div", {
              className: "flex flex-col",
              children: [a.jsx("p", {
                className: "hidden",
                children: "Bet Amount"
              }), a.jsxs("div", {
                className: "flex bg-mblack rounded-xl items-center px-2 lg:py-0.5 2xl:py-0",
                children: [a.jsx("div", {
                  onClick: () => {
                    0;
                    let e = h.Cf("" === T ? 0 : parseInt(T));
                    C("".concat(e));
                  },
                  className: "rounded-full border-2 border-gray-500 flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 lg:cursor-pointer",
                  children: "-"
                }), a.jsx("input", {
                  type: "number",
                  className: "w-16 lg:w-10 xl:w-12 2xl:w-14 3xl:w-20 outline-none p-1 ml-4  bg-mblack text-gray-200 font-bold",
                  value: T,
                  placeholder: "e.g 200",
                  onChange: e => {
                    C(e.target.value);
                  },
                  onBlur: () => {
                    if ("" == T) {
                      C("".concat(N.U7));
                      return;
                    }
                    if (parseFloat(T) < N.U7) {
                      C("".concat(N.U7));
                    }
                  }
                }), a.jsx("div", {
                  onClick: () => {
                    0;
                    let e = h.Wj("" === T ? 0 : parseInt(T));
                    C("".concat(e));
                  },
                  className: "rounded-full border-2 border-gray-500 flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 lg:cursor-pointer",
                  children: "+"
                })]
              }), a.jsxs("div", {
                className: "mt-1 flex space-x-2 text-[13px] lg:text-[9px] xl:text-[10px] 2xl:text-xs   3xl:text-sm",
                children: [a.jsx("div", {
                  onClick: () => {
                    if ("" === T) {
                      C("100");
                    } else {
                      let e = parseInt(T);
                      if (e + 100 > 1e4) {
                        C("100");
                      } else {
                        C("".concat(e + 100));
                      }
                    }
                  },
                  className: "flex flex-1 px-1 rounded-xl bg-[#141516] justify-center  items-center lg:cursor-pointer ",
                  children: "100"
                }), a.jsx("div", {
                  onClick: () => {
                    if ("" === T) {
                      C("200");
                    } else {
                      let e = parseInt(T);
                      if (e + 200 > 1e4) {
                        C("200");
                      } else {
                        C("".concat(e + 200));
                      }
                    }
                  },
                  className: "flex flex-1 px-1 rounded-xl bg-[#141516] justify-center  items-center lg:cursor-pointer ",
                  children: "200"
                })]
              }), a.jsxs("div", {
                className: "mt-1 flex space-x-2 text-[13px] lg:text-[9px] xl:text-[10px] 2xl:text-xs 3xl:text-sm ",
                children: [a.jsx("div", {
                  onClick: () => {
                    if ("" === T) {
                      C("500");
                    } else {
                      let e = parseInt(T);
                      if (e + 500 > 1e4) {
                        C("500");
                      } else {
                        C("".concat(e + 500));
                      }
                    }
                  },
                  className: "flex flex-1 px-1 px- rounded-xl bg-[#141516] justify-center   items-center lg:cursor-pointer ",
                  children: "500"
                }), a.jsx("div", {
                  onClick: () => {
                    C("".concat(N.ZB));
                  },
                  className: "flex flex-1 px-1 rounded-xl bg-[#141516] justify-center  items-center  lg:cursor-pointer",
                  children: N.ZB
                })]
              })]
            }), a.jsxs("div", {
              className: "flex flex-col items-center",
              children: [b.Z.holding_2 && !b.Z.amingame_2 && (0, a.jsx)("p", {
                className: "pl-2",
                children: "Waiting For Next Round"
              }), a.jsxs("div", {
                onClick: () => {
                  if ("" === T) {
                    C("10");
                  }
                  if (parseInt(T) < N.U7) {
                    C("".concat(N.U7));
                  }
                  if (parseInt(T) > N.ZB) {
                    C("".concat(N.ZB));
                  }
                  placeBet2();
                },
                className: "flex flex-col  w-44 lg:w-40 xl:w-44 2xl:w-52 3xl:w-64 uppercase rounded-2xl lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-2xl ".concat(b.Z.holding_2 ? "h-11 lg:h-9 xl:h-11 2xl:h-12 3xl:h-14 uppercase    " : "h-full  ", " ").concat(e.button2Classes, " transition-all  items-center justify-center ml-4  lg:cursor-pointer"),
                children: [e.button2Text.startsWith(N.Cf) && (0, a.jsx)("p", {
                  className: "text-base lg:text-sm xl:text-base 2xl:text-lg  ",
                  children: "Cash Out"
                }), a.jsx("p", {
                  className: "text-2xl lg:text-base xl:text-lg 2xl:text-2xl 3xl:text-2xl text-gray-100  ",
                  children: e.button2Text
                }), "Bet" === e.button2Text && "" !== T && (0, a.jsxs)("p", {
                  className: "text-base lg:text-xs xl:text-sm 2xl:text-base 3xl:text-xl text-gray-100  ",
                  children: [" ", parseFloat(T).toFixed(2), " ", (0, a.jsx)("span", {
                    children: N.Cf
                  })]
                })]
              })]
            })]
          }), a.jsx("div", {
            className: "flex flex-1"
          }), a.jsxs("div", {
            className: " w-full flex flex-col items-center mt-2 lg:mt-0  text-xs lg:text-[10px]  2xl:text-xs 3xl:text-[13px] text-gray-400/80  ".concat(1 == r ? "visible" : "invisible"),
            children: [a.jsx("div", {
              className: " flex   w-full h-[2px] bg-mblack/40 mt-1"
            }), a.jsxs("div", {
              className: "flex justify-start  mt-1 space-x-2 ",
              children: [a.jsxs("div", {
                className: "flex items-center ",
                children: [a.jsx("p", {
                  children: "Auto Bet"
                }), a.jsx("div", {
                  onClick: () => {
                    if (u) {
                      m(false);
                    } else {
                      placeBet2();
                      m(true);
                    }
                  },
                  className: "flex rounded-xl border-[1px] lg:cursor-pointer  w-10 lg:w-8 2xl:w-10 mx-2  transition-all ".concat(u ? "justify-end bg-avgreen border-mgreen" : " justify-start border-gray-500"),
                  children: a.jsx("div", {
                    className: "flex w-3 h-3 lg:w-2 lg:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 3xl:w-3.5 3xl:h-3.5 m-0.5 rounded-full bg-gray-300"
                  })
                })]
              }), a.jsxs("div", {
                className: "flex items-center",
                children: [a.jsx("p", {
                  className: "",
                  children: "Auto Cash Out"
                }), a.jsx("div", {
                  onClick: () => {
                    if (X) {
                      Q(false);
                      addbet2multiplier("777.86");
                    } else {
                      Q(true);
                      addbet2multiplier("5.50");
                    }
                  },
                  className: "flex rounded-xl border-[1px]  lg:cursor-pointer  w-10 lg:w-8 2xl:w-10 m mx-1  transition-all ".concat(X ? "justify-end bg-avgreen border-mgreen" : " justify-start border-gray-600"),
                  children: a.jsx("div", {
                    className: "flex w-3 h-3 lg:w-2 lg:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 3xl:w-3.5 3xl:h-3.5 m-0.5 rounded-full bg-gray-300"
                  })
                })]
              }), a.jsxs("div", {
                className: "flex bg-mblack rounded-xl items-center px-2 ".concat(X ? "opacity-100 text-gray-200" : "opacity-50"),
                children: [a.jsx("input", {
                  type: "number",
                  className: "w-12 lg:w-10 xl:w-12 2xl:w-16 3xl:w-14 outline-none p-1 lg:p-0 xl:p-0.5 2xl:p-1 lg:ml-2   font-bold bg-mblack placeholder:text-gray-500",
                  value: X ? U : "5.50",
                  placeholder: "e.g 5.20",
                  readOnly: !X,
                  onChange: e => {
                    addbet2multiplier(e.target.value);
                  },
                  onBlur: e => {
                    if (1.5 > parseFloat(e.target.value)) {
                      addbet2multiplier("1.50");
                    }
                  }
                }), a.jsx("p", {
                  className: "font-bold",
                  children: "x"
                })]
              }), a.jsx("div", {
                className: "w-5 hidden 2xl:flex 3xl:w-8"
              })]
            })]
          })]
        })]
      });
    };
    var B = JSON.parse("{\"v\":\"5.9.0\",\"fr\":29.9700012207031,\"ip\":0,\"op\":5.00000020365417,\"w\":1007,\"h\":490,\"nm\":\"plane\",\"ddd\":1,\"assets\":[{\"id\":\"comp_0\",\"nm\":\"Pre-comp 1\",\"fr\":29.9700012207031,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"body Comp 1\",\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1284,606,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[1284,606,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":1920,\"h\":1080,\"ip\":0,\"op\":5.00000020365417,\"st\":-1.00000004073083,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"propeller 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":20,\"ix\":10},\"p\":{\"a\":0,\"k\":[1324.246,602.475,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[822.246,215.975,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.243,-5.019],[-11.642,5.083],[0.293,0.009],[12.727,0.129],[-0.392,-1.079]],\"o\":[[12.002,-5.24],[-0.853,-1.165],[-12.723,-0.421],[-0.551,-0.006],[1.683,4.629]],\"v\":[[-14.477,-2.215],[20.538,-17.5],[19.121,-19.387],[-19.054,-20.349],[-20.608,-16.302]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.021,0.278],[-8.721,-1.078],[2.744,-5.38],[5.055,-7.354],[4.665,-4.706],[2.333,5.05],[5.71,13.048],[-6.156,0.101],[-5.489,0]],\"o\":[[8.742,0.906],[5.78,0.715],[-4.054,7.951],[-3.738,5.438],[-3.875,3.91],[-5.972,-12.93],[-2.535,-5.794],[5.488,-0.089],[0.021,-0.277]],\"v\":[[-4.772,-27.148],[21.449,-24.388],[26.653,-14.862],[12.973,8.196],[-0.056,23.238],[-9.294,21.388],[-26.862,-17.562],[-21.302,-26.297],[-4.835,-26.315]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[827.294,220.108],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":5.00000020365417,\"st\":-1.00000004073083,\"bm\":0},{\"ddd\":1,\"ind\":3,\"ty\":0,\"nm\":\"propeller Comp 1\",\"refId\":\"comp_2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"rx\":{\"a\":0,\"k\":0,\"ix\":8,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_mul(time, 360), 2);\"},\"ry\":{\"a\":0,\"k\":0,\"ix\":9},\"rz\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":1,\"s\":[-3]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":2,\"s\":[-3]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":3,\"s\":[-3]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":4,\"s\":[-6]},{\"t\":5.00000020365417,\"s\":[-6]}],\"ix\":10},\"or\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.333,\"y\":0.333},\"t\":0,\"s\":[0,0,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":5.00000020365417,\"s\":[0,0,0]}],\"ix\":7},\"p\":{\"a\":0,\"k\":[1326,602,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[1326,602,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":1920,\"h\":1080,\"ip\":0,\"op\":5.00000020365417,\"st\":-1.00000004073083,\"bm\":0}]},{\"id\":\"comp_1\",\"nm\":\"body Comp 1\",\"fr\":29.9700012207031,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"body\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":20,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[461,279.5,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.154,1.199],[0.921,-4.797],[3.354,-1.174],[6.616,-2.588],[24.156,-9.534],[23.892,-9.447],[-1.05,-0.217],[-8.486,-1.665],[-27.2,-4.564],[-7.708,1.828],[-6.357,2.802],[-7.89,3.392],[-2.365,2.461],[0.608,2.681],[0.183,0.811],[2.49,11.025],[-1.464,11.726]],\"o\":[[-2.349,4.624],[-0.745,3.886],[-6.707,2.347],[-24.185,9.459],[-22.443,8.859],[2.383,0.868],[8.469,1.754],[27.074,5.312],[7.698,1.291],[6.611,-1.568],[7.858,-3.464],[3.329,-1.431],[1.037,-1.079],[-0.184,-0.811],[-2.482,-11.028],[-2.523,-11.169],[0.145,-1.162]],\"v\":[[78.526,-53.742],[73.552,-39.674],[67.184,-32.901],[47.146,-25.629],[-25.344,2.915],[-94.114,30.103],[-89.69,31.692],[-64.264,36.854],[17.016,52.451],[40.925,50.755],[59.829,42.1],[83.589,32.133],[93.077,27.065],[91.485,19.301],[91.054,16.841],[83.588,-16.236],[78.948,-50.15]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[632.858,256.74],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.581,-2.414],[11.15,-1.004],[7.34,1.467],[0,0],[24.776,5.007],[24.606,4.99],[14.774,3.247],[1.133,0.932],[-1.343,-0.167],[-11.867,-1.654],[-21.256,-2.97],[-22.75,-3.122],[-21.265,-2.907],[-21.427,-2.998],[-5.922,-0.906]],\"o\":[[-5.64,8.612],[-6.88,-1.319],[0,0],[-24.774,-5.018],[-24.61,-4.973],[-14.825,-3.006],[-1.276,-0.281],[1.429,-0.533],[11.889,1.474],[21.258,2.962],[22.743,3.178],[21.264,2.919],[21.437,2.93],[5.934,0.83],[2.832,0.433]],\"v\":[[186.33,-37.125],[161.984,-21.694],[140.403,-25.839],[62.121,-41.565],[-12.179,-56.728],[-86.035,-71.514],[-130.431,-80.917],[-133.848,-83.628],[-129.571,-85.132],[-93.953,-80.312],[-30.184,-71.398],[38.047,-61.883],[101.857,-53.274],[166.149,-44.352],[183.924,-41.68]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.623,-0.845],[12.302,-6.51],[1.664,2.278],[-2.372,1.497],[-3.936,2.446],[0.335,4.628],[2.992,1.292],[7.509,3.081],[1.151,0.851],[-8.111,-3.322],[-10.636,-4.607],[0.139,-1.134]],\"o\":[[-12.347,6.426],[-2.677,1.417],[-1.913,-2.619],[3.917,-2.472],[2.769,-1.72],[-0.327,-4.532],[-7.45,-3.218],[-0.691,-0.284],[7.705,-5.213],[10.726,4.394],[1.588,0.688],[-0.186,1.517]],\"v\":[[173.769,-139.91],[136.607,-120.861],[130.794,-121.939],[131.956,-128.339],[144.081,-135.165],[151.2,-141.743],[143.302,-147.377],[120.762,-156.591],[118.362,-158.334],[141.771,-161.205],[173.862,-147.811],[177.564,-143.995]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[15.156,-9.024],[9.065,1.14],[5.681,0.889],[-0.782,0.633],[-20.868,5.421],[-5.766,-4.44]],\"o\":[[-8.417,5.011],[-5.059,-0.637],[0.929,-1.291],[16.542,-13.383],[8.111,-2.108],[-16.138,8.037]],\"v\":[[83.976,-116.782],[58.473,-111.557],[42.708,-113.995],[44.878,-116.952],[100.169,-146.556],[131.591,-140.912]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.272,12.697],[2.326,5.579],[11.101,25.045],[16.285,-2.564],[15.426,-4.016],[30.061,-8.018],[8.352,3.215],[7.168,3.095],[9.844,-2.601],[6.569,-2.753],[23.786,-17.18],[1.947,-7.767],[0.697,-2.732],[-5.877,-0.587],[-18.075,-1.654],[-6.415,-0.559],[0.226,0.416],[-2.009,1.187],[-5.13,2.73],[-60.49,18.974],[-15.542,-0.854],[-1.867,-4.897],[-4.102,-8.697],[-10.264,-21.216],[0.632,-0.419],[1.725,0.641],[2.329,2.493],[4.53,-2.789],[41.913,-16.367],[3.052,0.959],[7.92,3.011],[2.625,1],[-0.899,1.764],[8.246,1.242],[14.493,2.125],[20.924,2.999],[26.546,3.686],[22.121,2.894],[22.921,3.176],[13.87,-4.982],[8.27,-8.517],[-2.677,-2.751],[-11.284,-11.33],[-1.628,0.659],[-7.789,3.336],[-0.613,-0.755],[4.348,-2.288],[19.156,-10.321],[2.087,-4.487],[2.769,-9.926],[-0.534,-0.272],[-1.289,0.632],[-22.536,10.997],[-10.351,-9.895],[3.799,-1.947],[5.205,-2.941],[-4.715,-5.575],[-27.409,12.967],[5.482,-3.092],[7.15,-3.523],[40.54,-20.237],[10.378,6.085],[12.839,8.841],[13.948,9.952],[9.893,-4.37],[12.386,-6.699],[-3.248,-5.436],[-1.004,0.512],[-9.547,4.689],[-1.654,0.022],[0.721,-1.824],[1.021,-0.54],[12.819,-6.655],[-4.832,-9.696],[-8.665,4.144],[-6.792,-6.495],[-21.755,-20.637],[-1.118,0.265],[-4.186,1.464],[0.33,0.352],[18.136,19.531],[1.765,2.785],[-4.032,1.281],[-0.845,-0.452],[-4.346,-3.193],[-27.699,2.045],[-3.096,-0.394],[1.093,-0.573],[6.927,-3.58],[-4.383,-8.792],[-1.634,0.67],[-7.365,3.051],[-52.551,21.547],[-1.775,-1.235],[-5.488,-4.834],[-3.354,0.974],[-7.179,2.613],[-23.72,9.552],[-34.792,14.512],[-4.232,0.197],[-11.83,-0.171],[-2.37,-0.677],[0.56,-0.217],[24.699,-9.285],[33.428,-12.095],[27.675,-9.436],[21.562,-6.773],[19.072,-5.231],[20.015,-4.118],[17.208,-1.34],[9.717,-3.171],[-2.279,-2.821],[-7.843,3.693],[-1.259,-3.463],[-0.552,-1.207],[-7.505,2.206],[-17.888,5.668],[-24.27,7.588],[-24.604,7.676],[-24.572,7.717],[-24.225,7.755],[-25.57,8.923],[-32.76,12.874],[-34.861,19.475],[-11.166,8.057]],\"o\":[[-0.608,-6.07],[-10.541,-25.284],[-6.781,-15.296],[-15.748,2.48],[-30.106,7.836],[-8.187,2.183],[-7.288,-2.806],[-9.025,-3.896],[-6.889,1.82],[-27.138,11.374],[-6.491,4.688],[-0.686,2.736],[-1.434,5.616],[18.06,1.804],[6.412,0.587],[-0.226,-0.416],[1.73,-1.66],[4.997,-2.953],[55.768,-29.676],[14.669,-4.602],[5.308,0.292],[3.434,9.005],[10.053,21.313],[0.679,1.402],[-1.856,1.231],[-3.158,-1.175],[-3.891,-4.165],[-38.269,23.56],[-2.928,1.144],[-8.069,-2.537],[-2.526,-0.96],[1.346,-2.576],[3.862,-7.576],[-14.484,-2.183],[-20.915,-3.067],[-26.53,-3.803],[-22.098,-3.069],[-22.946,-3.003],[-14.406,-1.996],[-11.133,3.998],[-1.72,1.77],[11.151,11.463],[1.18,1.185],[7.85,-3.175],[1.19,-0.51],[3.041,3.746],[-19.256,10.135],[-5.024,2.707],[-4.288,9.219],[0.534,0.272],[1.316,-0.576],[22.514,-11.041],[11.754,-5.736],[3,2.868],[-5.319,2.727],[-5.913,3.342],[27.316,-12.923],[2.112,5.224],[-6.946,3.917],[-40.646,20.026],[-11.197,5.59],[-13.451,-7.885],[-14.106,-9.713],[-8.868,-6.328],[-12.867,5.682],[-4.944,2.675],[1.011,-0.412],[9.476,-4.834],[1.342,-0.659],[-0.366,1.966],[-0.348,0.881],[-12.768,6.75],[-9.106,4.727],[8.699,-4.033],[8.611,-4.118],[21.672,20.725],[1.141,1.082],[4.066,-0.964],[-0.727,-1.145],[-18.233,-19.441],[-2.206,-2.376],[3.984,-1.431],[0.826,-0.263],[4.793,2.564],[21.128,15.52],[1.661,-0.123],[-2.286,1.598],[-6.903,3.625],[-7.856,4.061],[1.612,-0.463],[7.377,-3.022],[52.474,-21.733],[1.947,-0.798],[6.002,4.174],[2.925,2.577],[7.348,-2.135],[24.037,-8.748],[34.965,-14.08],[4.097,-1.709],[11.802,-0.549],[1.534,0.022],[-1.452,1.174],[-24.615,9.506],[-33.275,12.51],[-27.494,9.947],[-21.392,7.295],[-18.87,5.927],[-19.722,5.409],[-16.909,3.48],[-10.151,0.791],[3.128,3.687],[5.562,6.886],[4.293,-2.022],[0.452,1.24],[3.33,7.284],[17.999,-5.29],[24.241,-7.68],[24.599,-7.691],[24.586,-7.671],[24.268,-7.621],[25.798,-8.258],[33.241,-11.601],[37.095,-14.577],[12.013,-6.712],[9.749,-7.036]],\"v\":[[409.603,-79.279],[405.619,-97.226],[373.073,-172.693],[338.193,-192.373],[291.316,-182.691],[201.297,-158.033],[176.175,-157.916],[154.446,-166.679],[126.367,-170.904],[106.071,-164.086],[30.409,-119.99],[17.425,-101.689],[15.754,-93.384],[20.48,-86.368],[74.696,-81.321],[93.94,-79.64],[93.262,-80.888],[98.497,-85.79],[113.861,-94.019],[286.712,-170.498],[331.927,-177.175],[342.441,-169.48],[353.028,-142.582],[383.935,-78.993],[384.411,-74.287],[377.974,-72.272],[369.435,-78.146],[357.681,-79.045],[237.837,-18.244],[227.854,-18.171],[204.043,-27.042],[196.367,-29.965],[199.544,-36.052],[192.937,-49.573],[149.449,-55.883],[86.712,-65.132],[7.09,-76.319],[-59.225,-85.368],[-128.098,-94.109],[-170.476,-91.203],[-199.812,-72.821],[-200.836,-66.539],[-167.42,-32.114],[-161.5,-31.131],[-138.246,-41.392],[-134.071,-41.133],[-137.316,-27.468],[-195.068,2.968],[-208.834,12.876],[-217.599,42.441],[-215.997,43.256],[-212.053,41.522],[-144.513,8.39],[-125.943,12.052],[-126.814,18.804],[-142.564,27.385],[-144.342,40.442],[-62.245,1.602],[-66.69,12.527],[-87.762,23.856],[-209.736,83.859],[-241.994,83.273],[-281.564,58.298],[-323.012,27.892],[-351.981,24.467],[-389.686,43.521],[-391.916,57.014],[-388.816,55.737],[-360.369,41.276],[-355.449,41.122],[-356.653,46.976],[-359.464,48.91],[-397.804,69.098],[-406.042,95.524],[-379.925,83.388],[-364.646,85.773],[-299.49,147.799],[-295.426,150.159],[-283.27,146.089],[-284.531,144.123],[-339.19,85.763],[-344.547,77.464],[-332.573,73.238],[-329.685,73.826],[-315.462,81.779],[-244.696,108.333],[-238.231,109.111],[-242.566,112.115],[-263.327,122.893],[-267.923,139.496],[-262.908,138.026],[-240.839,128.809],[-83.349,63.771],[-76.281,64.744],[-59.021,78.314],[-49.822,80.288],[-27.858,73.621],[44.047,46.824],[148.431,3.31],[160.941,-1.1],[196.423,-1.054],[201.851,0.44],[199.409,2.385],[125.527,30.81],[25.519,67.852],[-57.288,96.794],[-121.725,117.906],[-178.619,134.771],[-238.126,149.707],[-289.47,156.966],[-317.157,166.139],[-309.345,175.367],[-292.07,179.992],[-285.181,183.005],[-283.461,186.595],[-271.696,192.731],[-218.02,175.773],[-145.271,152.813],[-71.417,129.919],[2.294,106.759],[75.097,83.887],[152.333,58.634],[251.572,22.463],[360.16,-27.415],[394.903,-49.834]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[411.124,363.18],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":153.000006231818,\"st\":0,\"bm\":0}]},{\"id\":\"comp_2\",\"nm\":\"propeller Comp 1\",\"fr\":29.9700012207031,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"propeller\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":20,\"ix\":10},\"p\":{\"a\":0,\"k\":[1324.246,602.475,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[822.246,215.975,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.842,-0.541],[2.129,3.206],[16.106,24.19],[1.589,1.806],[0.243,-0.641],[-3.497,-4.79],[-16.433,-22.343]],\"o\":[[3.159,-3.602],[-16.074,-24.211],[-0.592,-0.889],[-0.444,1.126],[-1.983,5.216],[16.356,22.399],[0.432,0.587]],\"v\":[[10.78,2.198],[10.698,-7.883],[-37.571,-80.485],[-40.568,-83.918],[-41.514,-81.515],[-40.555,-66.304],[8.651,0.792]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.06,0.22],[4.999,-0.725],[0.753,1.307],[11.057,18.136],[6.438,21.255],[4.483,15.129],[-3.287,6.066],[-3.722,-5.53],[-7.544,-11.35],[-7.897,-15.265],[-5.136,-15.223],[-5.756,-18.033],[6.128,0.128],[1.991,0.095]],\"o\":[[-4.942,1.117],[-1.122,0.162],[-10.604,-18.416],[-11.779,-19.323],[-4.574,-15.101],[-2.042,-6.895],[3.168,-5.846],[7.609,11.306],[9.571,14.398],[7.328,14.165],[6.05,17.932],[1.922,6.024],[-1.993,-0.041],[-0.06,-0.22]],\"v\":[[38.221,92.259],[23.371,95.442],[19.596,92.577],[-12.095,37.265],[-35.948,-24.826],[-48.838,-70.38],[-46.531,-89.593],[-36.149,-90.074],[-13.474,-56.054],[14.839,-12.65],[31.817,32.421],[48.958,86.558],[44.375,93.196],[38.401,92.919]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[773.973,95.854],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-5.13,-7.462],[3.979,5.585],[7.776,10.565],[8.418,10.926],[1.17,0.673],[-0.302,-1.131],[-1.498,-2.288],[-11.696,-17.548]],\"o\":[[4.176,-7.066],[-7.613,-10.686],[-8.175,-11.108],[-0.761,-0.987],[-0.479,1.34],[0.706,2.648],[11.553,17.643],[4.567,6.851]],\"v\":[[38.844,89.761],[38.873,71.403],[15.997,39.374],[-9.016,6.413],[-12.472,4.353],[-13.777,8.337],[-10.51,15.954],[24.398,68.717]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.429,1.608],[-9.716,-17.548],[-4.968,-16.582],[-5.681,-18.751],[-1.805,-6.046],[3.514,-6.49],[3.572,5.281],[9.569,14.596],[7.28,14.107],[3.577,11.391],[5.096,16.505],[-5.875,3.087],[-4.419,4.735]],\"o\":[[10.231,18.45],[8.274,14.941],[5.623,18.768],[1.829,6.037],[2.099,7.03],[-3.022,5.579],[-9.778,-14.458],[-8.741,-13.332],[-5.409,-10.481],[-5.175,-16.479],[-1.286,-4.163],[5.417,-2.846],[0.864,-0.926]],\"v\":[[-27.08,-100.044],[2.602,-46.509],[25.124,-0.553],[42.268,55.667],[47.458,73.87],[45.693,94.186],[34.528,94.762],[5.413,51.242],[-20.07,10.806],[-31.628,-23.04],[-46.807,-72.587],[-43.682,-82.756],[-30.196,-96.546]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[871.642,331.645],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":153.000006231818,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"Pre-comp 1\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[519.5,187,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[960,540,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":20,\"nm\":\"Tint\",\"np\":6,\"mn\":\"ADBE Tint\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Map Black To\",\"mn\":\"ADBE Tint-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.89411765337,0.019607843831,0.223529413342,1],\"ix\":1}},{\"ty\":2,\"nm\":\"Map White To\",\"mn\":\"ADBE Tint-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":[1,1,1,0],\"ix\":2}},{\"ty\":0,\"nm\":\"Amount to Tint\",\"mn\":\"ADBE Tint-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":100,\"ix\":3}},{\"ty\":6,\"nm\":\"\",\"mn\":\"ADBE Tint-0004\",\"ix\":4,\"v\":0}]}],\"w\":1920,\"h\":1080,\"ip\":0,\"op\":5.00000020365417,\"st\":0,\"bm\":0}],\"markers\":[]}");
    var C = l(9464);
    var S = l(8363);
    var T = x.memo(e => {
      let t = e.state;
      let l = e.animationOn;
      0;
      let r = x.useRef(null);
      0;
      let n = x.useRef(null);
      0;
      let s = "desktop" == f.Bs("screenSize") ? "desktop" : "mobile";
      0;
      0;
      0;
      0;
      return a.jsxs("div", {
        ref: r,
        id: "sketch-container",
        className: "  w-full h-full  rounded-2xl overflow-hidden  relative  bg-black",
        children: [a.jsx(S.g, {
          sketch: a => {
            if (r.current && "" != t) {
              let r;
              let i;
              let o;
              let x;
              let c;
              let d;
              document.getElementById("sketch-container");
              let u = n.current;
              let m = e.width;
              let g = e.height;
              let p = e.timePassed;
              let b = 0 != e.timePassed ? 4e3 : 0;
              let f = .05 * g;
              let w = "mobile" == s ? .68 : .74;
              let v = "mobile" == s ? .88 : .87;
              let y = a.color("#000000");
              let j = a.color("#1B1C1D");
              let Z = a.color(229, 5, 57, 160);
              a.color(239, 162, 83, 255);
              let _ = a.color("#271D20");
              a.color(239, 162, 83);
              let k = "mobile" == s ? 5 : 15;
              let N = "mobile" == s ? 10 : 12;
              let B = "mobile" == s ? 5 : 6;
              let C = 15;
              a.setup = () => {
                a.createCanvas(m, g);
                r = 0;
                i = g - f;
                o = m / 2;
                x = g / 2;
                c = m;
                d = 0;
                a.frameRate(60);
                drawBackground();
              };
              let drawAxis = () => {
                a.strokeWeight(2);
                a.stroke(_);
                a.line(f, g - f, f, 0);
                a.line(f, g - f, m, g - f);
                a.noStroke();
                let e = 8 + b / 500;
                let t = m / 8;
                for (let l = 1; l < e; l++) {
                  let e = r + l * t;
                  if (b > 4500) {
                    e -= b / 15;
                  }
                  if (e < f) {
                    continue;
                  }
                  a.fill(a.color("#FFFFFF"));
                  a.circle(e, i + N, B);
                }
                e = 8 + b / 500;
                t = g / 8;
                for (let l = 1; l < e; l++) {
                  let e = g - l * t;
                  if (b > 4500) {
                    e += b / 15;
                  }
                  if (e > g - f) {
                    continue;
                  }
                  a.fill(a.color("#64BAFF"));
                  a.circle(r + k, e, B);
                }
              };
              a.draw = () => {
                drawBackground();
                if ("started" == t && l) {
                  if ((C += .38) > 300) {
                    C = 15;
                  }
                  if ((b += 18) < 4500) {
                    p += 18;
                  }
                } else if ("waiting" == t) {
                  u.style.left = "1%";
                  u.style.bottom = "mobile" == s ? "4%" : "2.5%";
                  if (0 != b) {
                    b = 0;
                  }
                  p = 1;
                } else if ("busted" == t) {
                  u.style.left = "100%";
                  u.style.bottom = "mobile" == s ? "95%" : "80%";
                  if (0 != b) {
                    b = 0;
                  }
                  p = 1;
                }
              };
              let drawBackground = () => {
                let e = C;
                let n = 0;
                for (let t = 0; t < 68; t++) {
                  let t = e + 5.294117647058823;
                  if (n % 2 == 0) {
                    a.fill(y);
                  } else {
                    a.fill(j);
                  }
                  a.beginShape();
                  a.vertex(0, g);
                  a.arc(0, g, 3 * m, 3 * g, a.radians(e), a.radians(t), a.PIE);
                  a.endShape(a.CLOSE);
                  a.vertex(50, 0);
                  a.quadraticVertex(100, 10, 200, 10);
                  a.noStroke();
                  e = t;
                  n++;
                }
                drawGradient();
                if ("started" == t && l) {
                  drawAxis();
                  let e = p / 5e3;
                  let t = p / 5e3;
                  if (e > w) {
                    e = w;
                  }
                  if (t > v) {
                    t = v;
                  }
                  if (b > 200) {
                    let l = (1 - e) * (1 - e) * r + 2.7 * (1 - e) * e * o + e * e * c;
                    let n = (1 - t) * (1 - t) * i + 2.7 * (1 - t) * t * x + t * t * d;
                    a.fill(Z);
                    a.beginShape();
                    a.vertex(f, g - f);
                    a.quadraticVertex(l / 2, g - f, l, n);
                    a.vertex(l, g - f);
                    a.endShape();
                    a.noFill();
                    a.strokeWeight("mobile" == s ? 4 : 5);
                    a.stroke("#e50539");
                    a.strokeCap(a.SQUARE);
                    a.beginShape();
                    a.vertex(f, g - f);
                    a.quadraticVertex(l / 2, g - f + 2, l, n);
                    a.endShape(false);
                    a.noStroke();
                    let h = l / m * 100 - ("mobile" == s ? 4 : 2);
                    let w = (g - n) / g * 100 - 4;
                    if (h > 2) {
                      u.style.left = h + "%";
                      u.style.bottom = w + "%";
                    }
                    if (b > 4400) {
                      if (S) {
                        p += "mobile" == s ? 6 : 5;
                      } else {
                        p -= "mobile" == s ? 6 : 5;
                      }
                      if (p < ("mobile" == s ? 3400 : 3800)) {
                        S = true;
                      }
                      if (p > 4300) {
                        S = false;
                      }
                    }
                  }
                }
              };
              let drawGradient = () => {
                let e = m / 2;
                let l = g / 2;
                let r = a.drawingContext.createRadialGradient(e, l, 0, m / 2.2, g / 2.5, 360);
                r.addColorStop(1, a.color(0, 0, 0, 0));
                if ("started" == t) {
                  if (h.lA.current_amount < 2) {
                    if ("mobile" == s) {
                      r.addColorStop(.4, a.color(52, 180, 255, 5));
                    }
                    r.addColorStop(0, a.color(52, 180, 255, 180));
                  } else if (h.lA.current_amount < 10) {
                    if ("mobile" == s) {
                      r.addColorStop(.4, a.color(145, 62, 248, 3));
                    }
                    r.addColorStop(0, a.color(145, 62, 248, 150));
                  } else {
                    if ("mobile" == s) {
                      r.addColorStop(.4, a.color(192, 23, 180, 5));
                    }
                    r.addColorStop(0, a.color(192, 23, 180, 100));
                  }
                } else {
                  r.addColorStop(0, a.color(0, 0, 0, 0));
                }
                a.drawingContext.fillStyle = r;
                a.rect(0, 0, m, g);
              };
              let S = false;
              a.windowResized = () => {};
            }
          },
          className: "rounded-xl ",
          style: {}
        }), a.jsx("div", {
          ref: n,
          className: "w-[28%] lg:w-[17%]  -rotate-[11deg]   absolute  left-0 bottom-0  self-start transform -translate-y-[1.8dvh] lg:-translate-y-[2.5dvh] 3xl:-translate-y-[2.5dvh] ".concat("busted" == e.state ? " transition-all duration-300" : "", " ").concat(l ? "flex" : "hidden"),
          children: a.jsx(u(), {
            src: "/_next/static/media/plane2.46c8741f.png",
            alt: "plane not founf",
            className: "object-cover   ",
            width: 500,
            height: 300
          })
        })]
      });
    });
    var range_bet_controls = e => {
      0;
      let t = _.useRouter();
      0;
      let {
        users: l,
        setUsers: r
      } = x.useContext(p.S);
      0;
      let {
        addCustomToast: n,
        setCurrentWalletTab: s,
        setshowWalletModal: i
      } = x.useContext(g.W);
      0;
      let [o, c] = x.useState(false);
      0;
      0;
      let [d, u] = x.useState(null == f.Bs("bet1amount") || l.length > 0 && l[0].is_first_bet ? "10" : (0, f.Bs)("bet1amount"));
      0;
      let [m, w] = x.useState(b.Z.bet1multiplier);
      let addbet1multiplier = e => {
        w(e);
        b.Z.bet1multiplier = e;
      };
      let addbet1amount = e => {
        u(e);
        0;
        f.p0("bet1amount", e);
      };
      let placeBet1 = () => {
        if (("started" !== e.gameStatus || !b.Z.amingame_1) && ("waiting" !== e.gameStatus || !b.Z.amingame_1) && !e.buttonDisabled && "" !== e.gameStatus) {
          if ("" === b.Z.token) {
            t.push("/login");
            return;
          }
          0;
          if ("true" === f.Bs("demomode")) {
            ;
          } else {
            0;
            let e = parseInt(f.Bs("bet1amount"));
            if (b.Z.is_freebet) {
              if (e > l[0].freebet_amount) {
                n("insufficient balance %error");
                return;
              }
            } else if (e > l[0].balance) {
              s(1);
              i(true);
              n("insufficient balance %error");
              return;
            }
          }
          e.handleBet("button1");
          c(!o);
        }
      };
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      return a.jsxs("div", {
        className: "flex flex-1 flex-wrap-reverse  justify-center w-full items-center mt-3 lg:mt-2 mb-1 p-3 lg:p-0 bg-sblack rounded-xl   ",
        children: [a.jsx("div", {
          className: "flex flex-col   justify-center  w-full lg:w-[450px] xl:w-[520px] 2xl:w-[640px] 3xl:w-[700px]  lg:mr-3  lg:mt-0",
          children: a.jsx("div", {
            className: "flex justify-between    flex-wrap mt-2  lg:mt-1 p-1 text-xs lg:text-[8px] xl:text-[10px] 2xl:text-xs 3xl:text-sm ",
            children: [{
              range: "1.01 - 1.20",
              cashout: 6.11
            }, {
              range: "1.01 - 1.50",
              cashout: 3.05
            }, {
              range: "1.01 - 2",
              cashout: 2.03
            }, {
              range: "1.01 - 3",
              cashout: 1.52
            }, {
              range: "1.01 - 4",
              cashout: 1.35
            }, {
              range: "1.01 - 5",
              cashout: 1.27
            }, {
              range: "1.5 - 2",
              cashout: 5.91
            }, {
              range: "1.5 - 3",
              cashout: 2.99
            }, {
              range: "1.5 - 5",
              cashout: 2.14
            }, {
              range: "1.5 - 10",
              cashout: 1.76
            }, {
              range: "2 - 3",
              cashout: 5.96
            }, {
              range: "2 - 4",
              cashout: 3.99
            }, {
              range: "2 - 5",
              cashout: 3.33
            }, {
              range: "2 - 10",
              cashout: 2.5
            }, {
              range: "2 - 15",
              cashout: 2.31
            }, {
              range: "2 - 20",
              cashout: 2.22
            }, {
              range: "3 - 5",
              cashout: 7.48
            }, {
              range: "3 - 6",
              cashout: 5.99
            }, {
              range: "3 - 9",
              cashout: 4.5
            }, {
              range: "3 - 12",
              cashout: 4
            }, {
              range: "3 - 15",
              cashout: 3.75
            }, {
              range: "5 - 10",
              cashout: 9.99
            }, {
              range: "5 - 15",
              cashout: 7.5
            }, {
              range: "10 - 20",
              cashout: 19.99
            }].map(t => (0, a.jsxs)("div", {
              onClick: () => {
                if ("bet" === e.button1Text.toLowerCase()) {
                  e.setRangeValues(t.range);
                  addbet1multiplier(t.cashout.toString());
                }
              },
              className: "flex flex-col border-[1px] rounded-lg m-0.5 lg:m-0.5 xl:m-0.5  p-1 leading-5 lg:leading-3 2xl:leading-4 3xl:leading-5 items-center  ".concat(e.rangeValues == t.range ? " text-mblack bg-mgreen/90 border-transparent" : "text-mgreen border-transparent bg-[#3A3D47]/60 ", " w-[70px] lg:w-12 xl:w-14 2xl:w-[70px]  3xl:w-20 ").concat("bet" === e.button1Text.toLowerCase() ? "lg:cursor-pointer hover:border-mgreen " : "lg:cursor-not-allowed"),
              children: [(0, a.jsx)("p", {
                className: "",
                children: t.range
              }), (0, a.jsxs)("p", {
                className: "text-gray-100",
                children: [t.cashout.toFixed(2), "X"]
              })]
            }, t.range))
          })
        }), a.jsxs("div", {
          className: "flex flex-col w-full    ".concat(b.Z.is_freebet ? "lg:w-[25%]" : "lg:w-auto"),
          children: [a.jsx("p", {
            className: "".concat(b.Z.is_freebet ? "hidden" : "flex lg:hidden "),
            children: "Bet Amount"
          }), a.jsxs("div", {
            className: " bg-yellow-100/10 rounded-xl justify-between items-center px-2 lg:py-0 2xl:py-0 ".concat(b.Z.is_freebet ? "hidden" : "flex "),
            children: [a.jsx("div", {
              onClick: () => {
                0;
                let e = h.Cf("" === d ? 0 : parseInt(d));
                addbet1amount("".concat(e));
              },
              className: "rounded-full border-2 border-gray-500  flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5  lg:cursor-pointer",
              children: "-"
            }), a.jsx("input", {
              type: "number",
              className: " w-60 lg:w-[80%] text-center outline-none p-2 lg:p-1.5 2xl:p-2  font-bold  bg-transparent",
              value: d,
              placeholder: "e.g 100",
              onChange: e => {
                addbet1amount(e.target.value);
              }
            }), a.jsx("div", {
              onClick: () => {
                0;
                let e = h.Wj("" === d ? 0 : parseInt(d));
                addbet1amount("".concat(e));
              },
              className: "rounded-full border-2 border-gray-500   flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 lg:cursor-pointer",
              children: "+"
            })]
          }), a.jsx("div", {
            onClick: () => {
              if ("" === d) {
                addbet1amount("10");
              }
              if (parseInt(d) < N.U7) {
                addbet1amount("".concat(N.U7));
              }
              if (parseInt(d) > N.ZB) {
                addbet1amount("".concat(N.ZB));
              }
              placeBet1();
            },
            className: "flex flex-col mt-2 items-center w-full p-1.5 lg:p-1.5 2xl:p-2 3xl:p-3 rounded-2xl   text-black  ".concat(e.button1Classes, "  ").concat(b.Z.amingame_1 ? "cursor-not-allowed" : "cursor-pointer", " "),
            children: a.jsxs("div", {
              className: "flex flex-col items-center     lg:items-start",
              children: [a.jsxs("div", {
                className: "flex items-center lg:items-start lg:flex-col",
                children: [a.jsxs("p", {
                  className: "uppercase",
                  children: ["RANGE: ", e.rangeValues]
                }), a.jsxs("p", {
                  className: "leading-4 lg:leading-3 xl:leading-3 ml-2 lg:ml-0 uppercase",
                  children: ["Multiplier: ", m, "X"]
                })]
              }), a.jsx("p", {
                className: "font-bold  text-2xl lg:text-lg 2xl:text-xl 3xl:text-2xl ".concat("bet" == e.button1Text.toLowerCase() ? "uppercase" : ""),
                children: e.button1Text
              }), l.length > 0 && b.Z.is_freebet && l[0].freebet_amount > 1 && (0, a.jsxs)("p", {
                className: "text-sm lg:text-[9px] xl:text-xs 2xl:text-sm 3xl:text-base lowercase ",
                children: ["(ksh ", l[0].freebet_amount, " free bet)"]
              })]
            })
          })]
        })]
      });
    };
    var F = l(7106);
    var over_under_controls = e => {
      let t = [{
        value: 2,
        over_cashout: 2.01,
        under_cashout: 1.7
      }, {
        value: 3,
        over_cashout: 3.01,
        under_cashout: 1.33
      }, {
        value: 4,
        over_cashout: 4.01,
        under_cashout: 1.19
      }, {
        value: 5,
        over_cashout: 5.01,
        under_cashout: 1.13
      }, {
        value: 7,
        over_cashout: 7.01,
        under_cashout: 1.06
      }, {
        value: 10,
        over_cashout: 10.01,
        under_cashout: 1.01
      }];
      0;
      let l = _.useRouter();
      0;
      let [r, n] = x.useState(false);
      0;
      let {
        users: s,
        setUsers: i
      } = x.useContext(p.S);
      0;
      let {
        addCustomToast: o,
        setCurrentWalletTab: c,
        setshowWalletModal: d
      } = x.useContext(g.W);
      0;
      0;
      let [u, m] = x.useState(null == f.Bs("bet1amount") || s.length > 0 && s[0].is_first_bet ? "10" : (0, f.Bs)("bet1amount"));
      0;
      let [w, v] = x.useState(b.Z.bet1multiplier);
      let addbet1multiplier = e => {
        v(e);
        b.Z.bet1multiplier = e;
      };
      0;
      let [y, j] = x.useState(b.Z.bet2multiplier);
      let addbet2multiplier = e => {
        j(e);
        b.Z.bet2multiplier = e;
      };
      let addbet1amount = e => {
        m(e);
        0;
        f.p0("bet1amount", e);
        0;
        f.p0("bet2amount", e);
      };
      let placeBet1 = () => {
        if (("started" !== e.gameStatus || !b.Z.amingame_1) && ("waiting" !== e.gameStatus || !b.Z.amingame_1) && !e.buttonDisabled && "" !== e.gameStatus) {
          if ("" === b.Z.token) {
            l.push("/login");
            return;
          }
          0;
          if ("true" === f.Bs("demomode")) {
            ;
          } else {
            0;
            let e = parseInt(f.Bs("bet1amount"));
            if (b.Z.is_freebet) {
              if (e > s[0].freebet_amount) {
                o("insufficient balance %error");
                return;
              }
            } else if (e > s[0].balance) {
              c(1);
              d(true);
              o("insufficient balance %error");
              return;
            }
          }
          e.handleBet("button1");
          n(!r);
        }
      };
      let placeBet2 = () => {
        if (("started" !== e.gameStatus || !b.Z.amingame_2) && ("waiting" !== e.gameStatus || !b.Z.amingame_2) && !e.buttonDisabled && "" !== e.gameStatus) {
          if ("" === b.Z.token) {
            l.push("/login");
            return;
          }
          0;
          if ("true" === f.Bs("demomode")) {
            ;
          } else {
            0;
            let e = parseInt(f.Bs("bet2amount"));
            if (b.Z.is_freebet) {
              if (e > s[0].freebet_amount) {
                o("insufficient balance %error");
                return;
              }
            } else if (e > s[0].balance) {
              c(1);
              d(true);
              o("insufficient balance %error");
              return;
            }
          }
          e.handleBet("button2");
          n(!r);
        }
      };
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      return a.jsxs("div", {
        className: "flex flex-col lg:flex-row  flex-1 mb-1 items-center justify-center bg-sblack rounded-xl p-2 mt-2",
        children: [a.jsxs("div", {
          className: "flex-col w-full px-2 pb-3 ".concat(b.Z.is_freebet ? "hidden" : "flex lg:hidden "),
          children: [a.jsx("p", {
            className: "",
            children: "Bet Amount"
          }), a.jsxs("div", {
            className: "flex bg-yellow-100/10 rounded-xl justify-between items-center px-2 lg:py-0 2xl:py-0",
            children: [a.jsx("div", {
              onClick: () => {
                0;
                let e = h.Cf("" === u ? 0 : parseInt(u));
                addbet1amount("".concat(e));
              },
              className: "rounded-full border-2 border-gray-500  flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5  lg:cursor-pointer",
              children: "-"
            }), a.jsx("input", {
              type: "number",
              className: " w-60 text-center outline-none p-2 lg:p-1.5 2xl:p-2  font-bold  bg-transparent",
              value: u,
              placeholder: "e.g 100",
              onChange: e => {
                addbet1amount(e.target.value);
              }
            }), a.jsx("div", {
              onClick: () => {
                0;
                let e = h.Wj("" === u ? 0 : parseInt(u));
                addbet1amount("".concat(e));
              },
              className: "rounded-full border-2  border-gray-500  flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 lg:cursor-pointer",
              children: "+"
            })]
          })]
        }), a.jsx("div", {
          className: "flex flex-col w-full lg:w-64 2xl:w-80 3xl:w-96  bg-mblack justify-center rounded-xl m p-1 lg:p-3",
          children: a.jsx("div", {
            className: "flex flex-wrap  justify-center",
            children: t.map((t, l) => (0, a.jsx)("div", {
              onClick: () => {
                if ("over" == e.button1Text.toLowerCase() && "under" == e.button2Text.toLowerCase()) {
                  e.setOverUnderValue(t.value.toString());
                }
              },
              className: " border-2 border-mgreen rounded-lg w-20 h-10 lg:h-10 lg:w-14 xl:w-16 2xl:w-20 2xl:h-12 3xl:w-24  3xl:h-16 flex justify-center items-center m-2 lg:m-1 2xl:m-1.5 3xl:m-2  font-bold  transition-all ".concat(t.value.toString() === e.overUnderValue ? "bg-mgreen text-black border-gray-100/40 " : "", " ").concat("over" != e.button1Text.toLowerCase() || "under" != e.button2Text.toLowerCase() ? "lg:cursor-not-allowed border-opacity-30" : "lg:cursor-pointer"),
              children: t.value
            }, t.value))
          })
        }), a.jsxs("div", {
          className: "flex  w-full lg:w-auto flex-col mx-3 lg:ml-10",
          children: [a.jsxs("div", {
            className: "".concat(b.Z.is_freebet ? "hidden" : "hidden lg:flex  ", " flex-col w-full"),
            children: [a.jsx("p", {
              className: "",
              children: "Bet Amount"
            }), a.jsxs("div", {
              className: "flex bg-yellow-100/10 rounded-xl justify-between items-center px-2 lg:py-0 2xl:py-0",
              children: [a.jsx("div", {
                onClick: () => {
                  0;
                  let e = h.Cf("" === u ? 0 : parseInt(u));
                  addbet1amount("".concat(e));
                },
                className: "rounded-full border-2 border-gray-500 flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5  lg:cursor-pointer ",
                children: "-"
              }), a.jsx("input", {
                type: "number",
                className: " w-[80%] text-center outline-none p-2 lg:p-1.5 2xl:p-2  font-bold  bg-transparent",
                value: u,
                placeholder: "e.g 100",
                onChange: e => {
                  addbet1amount(e.target.value);
                }
              }), a.jsx("div", {
                onClick: () => {
                  0;
                  let e = h.Wj("" === u ? 0 : parseInt(u));
                  addbet1amount("".concat(e));
                },
                className: "rounded-full border-2  border-gray-500 flex items-center justify-center w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 lg:cursor-pointer",
                children: "+"
              })]
            })]
          }), a.jsxs("div", {
            className: "flex  mt-0 lg:mt-1 3xl:mt-2  bg-sblack text-white",
            children: [a.jsxs("div", {
              onClick: () => {
                if ("under" === e.button2Text.toLowerCase()) {
                  e.updateEngineOverUnderValue("over");
                  addbet1multiplier(t.filter(t => t.value.toString() === e.overUnderValue)[0].over_cashout.toString());
                  if ("" === u) {
                    addbet1amount("10");
                  }
                  if (parseInt(u) < N.U7) {
                    addbet1amount("".concat(N.U7));
                  }
                  if (parseInt(u) > N.ZB) {
                    addbet1amount("".concat(N.ZB));
                  }
                  placeBet1();
                }
              },
              className: "flex flex-col w-full h-16  lg:w-32 lg:h-12 xl:h-16 xl:w-36  2xl:w-44 2xl:h-20  3xl:w-52 3xl:h-24   m-2 lg:m-1 2xl:m-2 items-center justify-center rounded-2xl bg-green-600 font-bold  ".concat("under" !== e.button2Text.toLowerCase() ? "opacity-10 cursor-not-allowed " : "lg:cursor-pointer lg:hover:bg-opacity-80"),
              children: [a.jsxs("div", {
                className: "flex space-x-1 items-center font-bold ".concat("over" === e.button1Text.toLowerCase() ? "uppercase" : ""),
                children: [a.jsx(F.NyY, {}), a.jsxs("p", {
                  children: [" ", e.button1Text]
                }), "over" === e.button1Text.toLowerCase() && (0, a.jsxs)("p", {
                  children: [" ", e.overUnderValue]
                })]
              }), a.jsxs("p", {
                children: [t.filter(t => t.value.toString() === e.overUnderValue)[0].over_cashout.toString(), "x"]
              }), s.length > 0 && b.Z.is_freebet && s[0].freebet_amount > 1 && (0, a.jsxs)("p", {
                className: "text-sm lg:text-[9px] xl:text-xs 2xl:text-sm 3xl:text-base lowercase ",
                children: ["(ksh ", s[0].freebet_amount, " free bet)"]
              })]
            }), a.jsxs("div", {
              onClick: () => {
                if ("over" === e.button1Text.toLowerCase()) {
                  e.updateEngineOverUnderValue("under");
                  addbet2multiplier(t.filter(t => t.value.toString() === e.overUnderValue)[0].under_cashout.toString());
                  if ("" === u) {
                    addbet1amount("10");
                  }
                  if (parseInt(u) < N.U7) {
                    addbet1amount("".concat(N.U7));
                  }
                  if (parseInt(u) > N.ZB) {
                    addbet1amount("".concat(N.ZB));
                  }
                  placeBet2();
                }
              },
              className: "flex flex-col w-full h-16 lg:w-32 lg:h-12 xl:h-16 xl:w-36 2xl:w-44 2xl:h-20  3xl:h-24 3xl:w-52   m-2 lg:m-1 2xl:m-2 items-center justify-center rounded-2xl  bg-red-600 font-bold  ".concat("over" !== e.button1Text.toLowerCase() ? "opacity-10 cursor-not-allowed " : "lg:cursor-pointer lg:hover:bg-opacity-80"),
              children: [a.jsxs("div", {
                className: "flex space-x-1 items-center font-bold ".concat("under" === e.button2Text.toLowerCase() ? "uppercase" : ""),
                children: [a.jsx(F.faE, {}), a.jsxs("p", {
                  children: [" ", e.button2Text]
                }), "under" === e.button2Text.toLowerCase() && (0, a.jsxs)("p", {
                  children: [" ", e.overUnderValue]
                })]
              }), a.jsxs("p", {
                children: [t.filter(t => t.value.toString() === e.overUnderValue)[0].under_cashout.toFixed(2), "x"]
              }), s.length > 0 && b.Z.is_freebet && s[0].freebet_amount > 1 && (0, a.jsxs)("p", {
                className: "text-sm lg:text-[9px] xl:text-xs 2xl:text-sm 3xl:text-base lowercase ",
                children: ["(ksh ", s[0].freebet_amount, " free bet)"]
              })]
            })]
          })]
        })]
      });
    };
    var E = l(3857);
    var actions_header = () => {
      0;
      let {
        addCustomToast: e,
        setCurrentWalletTab: t,
        setshowWalletModal: l
      } = x.useContext(g.W);
      0;
      let {
        users: r
      } = x.useContext(p.S);
      0;
      let {
        setBetTypeTab: n,
        setShowOneBetArea: s,
        addbet1amount: i,
        addbet2amount: o,
        setButton1Classes: c,
        setButton1Text: d,
        setButton2Classes: u,
        setButton2Text: m
      } = x.useContext(Z.G);
      let h = false;
      let claimCashback = () => {
        E.Z.send(JSON.stringify({
          eventName: w.Z.CLIENT_CLAIM_CASHBACK,
          data: {
            token: b.Z.token
          }
        }));
      };
      0;
      0;
      0;
      0;
      0;
      0;
      return a.jsxs("div", {
        className: "flex w-full text-[3.2vw] lg:text-[0.8vw]  h-[3vh] z-40  px-1 mb-1 rounded-t-2xl ",
        children: [a.jsx("div", {
          className: "flex   items-center  justify-center  px-3  mx-1 rounded-lg md:cursor-pointer lg:cursor-pointer bg-mblack transition-all text-gray-100  mr-3",
          children: a.jsx("div", {
            className: " flex  items-center leading-4 text-gray-300",
            children: a.jsxs("p", {
              children: ["Final Round Bonus ", a.jsx("span", {
                className: "text-mgreen font-bold",
                children: "10%"
              })]
            })
          })
        }), a.jsx("div", {
          className: "flex flex-1"
        }), r.length > 0 && r[0].freebet_amount > 0 && r[0].cashback < 5 && (0, a.jsx)("div", {
          onClick: () => {
            if (b.Z.is_freebet) {
              b.Z.is_freebet = false;
              s(false);
            } else {
              i(r[0].freebet_amount);
              o(r[0].freebet_amount);
              b.Z.is_freebet = true;
              s(true);
            }
          },
          onDoubleClick: () => {},
          className: "flex     items-center  justify-center  px-3  mx-1 rounded-lg md:cursor-pointer lg:cursor-pointer bg-mgreen ".concat(b.Z.is_freebet ? "bg-opacity-100" : "bg-opacity-30", " transition-all font-semibold text-gray-100  mr-3"),
          children: b.Z.is_freebet ? "Using Freebet" : "Use  ".concat(N.Cf, " ").concat(r.length > 0 ? r[0].freebet_amount : 0, " Freebet")
        }), r.length > 0 && r[0].cashback > 5 && (0, a.jsxs)("div", {
          onDoubleClick: () => {},
          onClick: () => {
            if (!h) {
              h = true;
              setTimeout(() => {
                h = false;
              }, 3e3);
              claimCashback();
            }
          },
          className: "flex py-2  items-center  justify-center  px-3  mx-1 rounded-lg md:cursor-pointer lg:cursor-pointer bg-mgreen hover:bg-opacity-100 transition-all font-semibold text-gray-100  mr-3",
          children: ["Cashback ", N.Cf, " ", r.length > 0 ? r[0].cashback : 0]
        })]
      });
    };
    var game_area_component = () => {
      0;
      let {
        users: e,
        setUsers: t
      } = x.useContext(p.S);
      0;
      let {
        players: l,
        setPlayers: r,
        gameStatus: n,
        setGameStatus: s,
        setPreviousRoundPlayers: o,
        setPreviousRoundResult: d,
        autobet1: j,
        setAutobet1: _,
        autobet2: k,
        setAutobet2: S,
        setroundBots: E,
        button1Classes: I,
        button1Text: A,
        button2Classes: D,
        button2Text: V,
        setButton1Text: G,
        setButton2Text: U,
        setButton1Classes: L,
        setButton2Classes: O,
        setShowOneBetArea: R,
        betTypeTab: P,
        setBetTypeTab: W
      } = x.useContext(Z.G);
      0;
      let {
        addCustomToast: M,
        isInPlayMode: z,
        setisInPlayMode: H,
        playJackpotAudio: Y,
        setshowWalletModal: J,
        setDepositAmount: q,
        setCurrentWalletTab: X,
        TABID: Q,
        isDemoMode: $,
        soundEnabled: K,
        setSoundEnabled: ee,
        screenSize: et,
        playStartGameSound: el,
        playFlewAwaySound: ea,
        playMusicAudio: er,
        musicOn: en,
        stopMusicAudio: es,
        animationOn: ei,
        connectedApi: eo,
        showGlobalChat: ex
      } = x.useContext(g.W);
      0;
      let [ec, ed] = x.useState("");
      0;
      let [eu, em] = x.useState("");
      0;
      let [eg, ep] = x.useState(0);
      0;
      let [eb, eh] = x.useState(false);
      0;
      let [ef, ew] = x.useState([]);
      0;
      let [ev, ey] = x.useState(0);
      0;
      let [ej, eZ] = x.useState("");
      0;
      let [e_, ek] = x.useState("1.00");
      0;
      let [eN, eB] = x.useState(5);
      0;
      let [eC, eS] = x.useState(false);
      0;
      let [eT, eF] = x.useState(true);
      0;
      let [eE, eI] = x.useState([]);
      0;
      let [eA, eD] = x.useState(1);
      0;
      let [eV, eG] = x.useState(null);
      0;
      let [eU, eL] = x.useState("1");
      0;
      let [eO, eR] = x.useState(0);
      0;
      let [eP, eW] = x.useState(false);
      0;
      let [eM, ez] = x.useState("");
      0;
      let [eH, eY] = x.useState("");
      0;
      let [eJ, eq] = x.useState(false);
      0;
      let [eX, eQ] = x.useState(0);
      0;
      let [e$, eK] = x.useState([{
        x: 0,
        y: 1
      }]);
      0;
      x.useEffect(() => {
        eI([]);
        s("");
      }, []);
      0;
      x.useEffect(() => ("" === n && b.Z.getStatus(), () => {
        s("");
        es();
        clearInterval(b.Z.counterInterval);
      }), []);
      0;
      x.useEffect(() => {
        if (en) {
          er();
        }
      }, [n]);
      0;
      x.useEffect(() => (b.Z.trigger.on("game_status", checkStatus), b.Z.trigger.on("waiting_crash", checkWaitingGame), b.Z.trigger.on("busted_crash", checkBustedGame), b.Z.trigger.on("started_crash", checkStartedGame), b.Z.trigger.on("play_crash", handlePlay), b.Z.trigger.on("finish_crash", handleFinish), b.Z.trigger.on("error_crash", handleError), b.Z.trigger.on("connection_restored", () => {
        b.Z.getStatus();
        b.Z.getHistory();
        eF(true);
      }), b.Z.trigger.on("connection_error", () => {
        eF(false);
        if ("" !== b.Z.counterInterval) {
          clearInterval(b.Z.counterInterval);
          b.Z.counterInterval = "";
        }
      }), b.Z.trigger.on(w.Z.HISTORY_CRASH, e => {
        eI(e.history);
      }), () => {
        b.Z.trigger.removeAllListeners("busted_crash");
        b.Z.trigger.removeAllListeners("waiting_crash");
        b.Z.trigger.removeAllListeners("started_crash");
        b.Z.trigger.removeAllListeners("game_status");
        b.Z.trigger.removeAllListeners("play_crash");
        b.Z.trigger.removeAllListeners("error_crash");
        b.Z.trigger.removeAllListeners("finish_crash");
        b.Z.trigger.removeAllListeners("connection_restored");
        b.Z.trigger.removeAllListeners("connection_error");
        b.Z.trigger.removeAllListeners(w.Z.HISTORY_CRASH);
      }), [n, l, ef]);
      0;
      x.useEffect(() => (b.Z.trigger.on("busted_crash_history", e => {
        eI([{
          busted: e.result,
          gid: e.game_id.toString(),
          hash: e.hash,
          date: e.time
        }, ...eE.slice(0, 49)]);
      }), eE.length < 1 && b.Z.getHistory(), () => {
        b.Z.trigger.removeAllListeners("busted_crash_history");
      }), [eE]);
      let handleError = e => {
        if (undefined !== e.code) {
          if ("late_cashout" === e.code || "late_bet" == e.code) {
            M("".concat(e.message, " %error"));
            return;
          }
          if ("paused" === e.code) {
            M("Betting Paused,Try Again Later %error");
            return;
          }
          if ("credit" === e.code) {
            _(false);
            S(false);
            M("".concat(e.message, "%error"));
            if ("button1" == e.button) {
              b.Z.amingame_1 = false;
              G("Bet");
              L(N.wF);
            }
            if ("button2" == e.button) {
              b.Z.amingame_2 = false;
              U("Bet");
              O(N.wF);
            }
            return;
          }
          if ("verify_account" === e.code) {
            M("".concat(e.message, "%error"));
            return;
          }
          if ("game running" === e.code) {
            if ("Maxbets per round reached" === e.message) {
              M("".concat(e.message, " %error"));
            } else {
              M("Late bet, Game has started %error");
            }
            return;
          }
          if ("version" === e.code) {
            setTimeout(() => {
              window.location.reload();
            }, 2e3);
          }
          return;
        }
        if ("" !== b.Z.counterInterval) {
          clearInterval(b.Z.counterInterval);
          b.Z.counterInterval = "";
        }
        M("".concat(e.message, "%error"));
        if ("button1" === e.button) {
          b.Z.holding_1 = false;
          if (1 == b.Z.betTypeTab) {
            G("Over");
          } else {
            if (2 == b.Z.betTypeTab) {
              L("bg-mgreen");
            } else {
              L(N.wF);
            }
            G("Bet");
          }
        }
        if ("button2" === e.button) {
          b.Z.holding_2 = false;
          if (1 == b.Z.betTypeTab) {
            U("Under");
          } else {
            O(N.wF);
            U("Bet");
          }
        }
        b.Z.holding_1 = false;
        b.Z.holding_2 = false;
        b.Z.amingame_1 = false;
        b.Z.amingame_2 = false;
        if ("" !== b.Z.counterInterval) {
          clearInterval(b.Z.counterInterval);
          b.Z.counterInterval = "";
        }
        setTimeout(() => {
          window.location.reload();
        }, 1e3);
      };
      let handleFinish = e => {
        let {
          name: t,
          amount: a,
          cashout: n
        } = e;
        eD(parseFloat(n));
        let s = parseInt((a * n).toString());
        ew([{
          name: t,
          won: s
        }, ...ef]);
        setTimeout(() => {
          ew(ef.filter(e => e.name !== t && e.won !== s));
        }, 1500);
        if (e.token === b.Z.token) {
          if (s > 0) {
            winPopup(e);
            0;
            if ("true" === f.Bs("soundEnabled")) {
              Y();
            }
          }
          if (b.Z.is_freebet) {
            b.Z.is_freebet = false;
            R(false);
          }
          if ("button1" === e.button && b.Z.amingame_1) {
            b.Z.amingame_1 = false;
            b.Z.bet1_id = 0;
            if (j) {
              b.Z.holding_1 = true;
              G("Cancel");
              L(N.uo);
            } else if (1 == b.Z.betTypeTab) {
              G("Over");
            } else if (2 == b.Z.betTypeTab) {
              G("Bet");
              L("bg-mgreen bg-opacity-100");
            } else {
              G("Bet");
              L(N.wF);
            }
          }
          if ("button2" === e.button && b.Z.amingame_2) {
            b.Z.amingame_2 = false;
            b.Z.bet2_id = 0;
            if (k) {
              b.Z.holding_2 = true;
              U("Cancel");
              O(N.uo);
            } else if (1 == b.Z.betTypeTab) {
              U("Under");
            } else {
              U("Bet");
              O(N.wF);
            }
          }
        }
        r([...l].map(t => (t.bet_id.toString() === e.bet_id.toString() && (t.cashout = e.cashout), t)));
        eQ(eX);
      };
      let winPopup = e => {
        let t = parseInt((e.amount * e.cashout).toString()) - (b.Z.is_freebet ? e.amount : 0);
        if (t >= 1) {
          eW(true);
          0;
          ez(h.VQ(t));
          eY(parseFloat(e.cashout.toString()).toFixed(2));
          setTimeout(() => {
            eW(false);
            ez("");
          }, 3e3);
        }
      };
      let handlePlay = a => {
        if (a.token === b.Z.token) {
          if ("button1" === a.button) {
            b.Z.amingame_1 = true;
            b.Z.bet1_id = a.bet_id;
            if (1 === b.Z.betTypeTab) {
              G("Running");
            } else if (2 === b.Z.betTypeTab) {
              L("bg-mgreen bg-opacity-70");
              G("Running");
            } else {
              G("Joined");
            }
            if (b.Z.is_freebet) {
              let l = e[0];
              l.freebet_amount = 0;
              t([l]);
            }
          } else if ("button2" === a.button && (1 === b.Z.betTypeTab ? U("Running") : U("Joined"), b.Z.amingame_2 = true, b.Z.bet2_id = a.bet_id, b.Z.is_freebet)) {
            let l = e[0];
            l.freebet_amount = 0;
            t([l]);
          }
        }
        if (l.length < 30) {
          r([a, ...l]);
        }
      };
      let checkStatus = e => {
        r(e.players);
        b.Z.game_id = e.game_id;
        let {
          amount: t,
          time: l,
          md5: a,
          status: n
        } = e;
        e4(l);
        switch (e.status) {
          case "waiting":
            checkWaitingGame(e);
            break;
          case "started":
            checkStartedGame(e);
            break;
          case "busted":
            checkBustedGame(e);
        }
      };
      let checkWaitingGame = e => {
        let {
          time: t
        } = e;
        b.Z.game_id = e.game_id;
        s("waiting");
        ey(Date.now() + t);
        E(Math.floor(292 * Math.random()) + 2583);
        if (b.Z.holding_1) {
          if (!(1 === b.Z.betTypeTab || 2 === b.Z.betTypeTab)) {
            L(N.uo);
          }
          G("Joining");
        }
        if (b.Z.holding_2) {
          if (!(1 === b.Z.betTypeTab)) {
            O(N.uo);
          }
          U("Joining");
        }
        placeBet();
      };
      let placeBet = () => {
        setBet();
      };
      let setBet = () => {
        if (b.Z.holding_1) {
          b.Z.coin = N.Cf;
          0;
          b.Z.amount = parseFloat(f.Bs("bet1amount"));
          if (j && 1.5 > parseFloat(b.Z.bet1multiplier)) {
            b.Z.bet1multiplier = "1.50";
          }
          b.Z.payout = parseFloat(b.Z.bet1multiplier);
          b.Z.type = "normal";
          b.Z.button = "button1";
          b.Z.play();
          b.Z.holding_1 = false;
        }
        setTimeout(() => {
          if (b.Z.holding_2) {
            b.Z.coin = N.Cf;
            0;
            b.Z.amount = parseFloat(f.Bs("bet2amount"));
            if (k && 1.5 > parseFloat(b.Z.bet2multiplier)) {
              b.Z.bet2multiplier = "1.50";
            }
            b.Z.payout = parseFloat(b.Z.bet2multiplier);
            b.Z.type = "normal";
            b.Z.button = "button2";
            b.Z.play();
            b.Z.holding_2 = false;
          }
        }, 100);
      };
      let checkBustedGame = e => {
        if (K) {
          ea();
        }
        o(l);
        d(h.lA.current_amount);
        if ("" !== b.Z.counterInterval) {
          clearInterval(b.Z.counterInterval);
          b.Z.counterInterval = "";
        }
        e4(0);
        eD(1);
        eQ(0);
        r([]);
        s("busted");
        eS(false);
        eR(0);
        ed("0%");
        em("0%");
        ek("1.00");
        ep(0);
        h.lA.current_amount = 1;
        ew([]);
        if (b.Z.is_freebet && b.Z.amingame_1) {
          b.Z.is_freebet = false;
          R(false);
        }
        let {
          result: t
        } = e;
        eZ(t.toFixed(2));
        b.Z.bet1_id = 0;
        b.Z.bet2_id = 0;
        if (j) {
          b.Z.holding_1 = true;
          G("Cancel");
          L(N.uo);
        }
        if (k) {
          b.Z.holding_2 = true;
          U("Cancel");
          O(N.uo);
        }
        if (b.Z.amingame_1 && !b.Z.holding_1) {
          b.Z.amingame_1 = false;
          if (1 == b.Z.betTypeTab) {
            G("Over");
          } else if (2 == b.Z.betTypeTab) {
            G("Bet");
            L("bg-mgreen bg-opacity-100");
          } else {
            G("Bet");
            L(N.wF);
          }
        }
        if (b.Z.amingame_2 && !b.Z.holding_2) {
          b.Z.amingame_2 = false;
          if (1 == b.Z.betTypeTab) {
            U("Under");
          } else {
            U("Bet");
            O(N.wF);
          }
        }
      };
      let checkStartedGame = function () {
        let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null;
        if (K) {
          el();
        }
        r(e.players);
        if ("" !== b.Z.counterInterval) {
          clearInterval(b.Z.counterInterval);
          b.Z.counterInterval = "";
        }
        s("started");
        let {
          time: t
        } = e;
        t += 200;
        let l = Date.now() - t;
        ey(l);
        let a = parseInt((l / 1e3).toFixed(1));
        if (a < 9) {
          ep(10 - a);
          ed("".concat(10 * a, "%"));
          em("".concat(10 * a, "%"));
        } else {
          ep(2);
          ed("88%");
          em("84%");
        }
        0;
        let n = parseInt(f.Bs("bet1amount"));
        if (b.Z.amingame_1) {
          if (!(1 === b.Z.betTypeTab || 2 === b.Z.betTypeTab)) {
            L(N.AH);
          }
        } else if (!(1 === b.Z.betTypeTab || 2 === b.Z.betTypeTab)) {
          G("Bet");
          L(N.wF);
        }
        0;
        let i = parseInt(f.Bs("bet2amount"));
        if (b.Z.amingame_2) {
          if (!(1 === b.Z.betTypeTab)) {
            O(N.AH);
          }
        } else if (!(1 === b.Z.betTypeTab)) {
          U("Bet");
          O(N.wF);
        }
        let o = setInterval(() => {
          let e = Date.now() - t;
          eR(parseInt((e / 1e3).toFixed(1)));
          let l = Math.pow(Math.E, 6e-5 * e).toFixed(2);
          if (parseFloat(l) > 50 && !eC) {
            eS(true);
          }
          if (parseFloat(l) > 700) {
            console.log("counter = ", l);
            if ("" !== b.Z.counterInterval) {
              clearInterval(b.Z.counterInterval);
              b.Z.counterInterval = "";
              window.location.reload();
            }
            return;
          }
          ek(l);
          if (parseFloat(l) > 1.02) {
            h.lA.current_amount = l;
            if (b.Z.amingame_1 && 1 !== b.Z.betTypeTab) {
              let e = h.lA.current_amount;
              let t = n * e;
              if (2 === b.Z.betTypeTab) {
                if (e > parseFloat(b.Z.range_values.split("-")[1].trim())) {
                  b.Z.amingame_1 = false;
                  G("Bet");
                  L("bg-mgreen bg-opacity-100");
                }
              } else {
                if (b.Z.is_freebet) {
                  t -= n;
                }
                if (t < 100) {
                  G(N.Cf + " " + parseFloat(t.toString()).toFixed(2) + " ");
                } else {
                  G(N.Cf + " " + parseInt(t.toString()) + " ");
                }
              }
            }
            if (b.Z.amingame_2 && 2 !== b.Z.betTypeTab) {
              let e = h.lA.current_amount;
              let t = i * e;
              if (1 === b.Z.betTypeTab) {
                if ("under" === b.Z.overunder_value.split("-")[0] && e > parseFloat(b.Z.overunder_value.split("-")[1])) {
                  b.Z.amingame_2 = false;
                  U("Under");
                }
              } else if (t < 100) {
                U(N.Cf + " " + parseFloat(t.toString()).toFixed(2) + " ");
              } else {
                U(N.Cf + " " + parseInt(t.toString()) + " ");
              }
            }
          }
        }, 100);
        b.Z.counterInterval = "".concat(o);
      };
      let handleBet = e => {
        if ("button1" === e) {
          if (!("started" === n && b.Z.amingame_1)) {
            if ("waiting" === n) {
              b.Z.holding_1 = true;
              if (!(1 == b.Z.betTypeTab || 2 == b.Z.betTypeTab)) {
                L(N.uo);
                G("Joining");
              }
              setBet();
            } else if (b.Z.holding_1) {
              b.Z.holding_1 = false;
              if (1 == b.Z.betTypeTab) {
                G("Over");
              } else if (2 == b.Z.betTypeTab) {
                L("bg-mgreen");
                G("Bet");
              } else {
                G("Bet");
                L(N.wF);
              }
            } else {
              b.Z.holding_1 = true;
              if (1 == b.Z.betTypeTab) {
                G("Cancel Bet");
              } else if (2 == b.Z.betTypeTab) {
                G("Cancel Bet");
                L("bg-mred ");
              } else {
                G("Cancel");
                L(N.uo);
              }
            }
          }
        } else if ("button2" === e) {
          if (!("started" === n && b.Z.amingame_2)) {
            if ("waiting" === n) {
              b.Z.holding_2 = true;
              if (!(1 == b.Z.betTypeTab)) {
                O(N.uo);
                U("Joining");
              }
              setBet();
            } else if (b.Z.holding_2) {
              b.Z.holding_2 = false;
              if (1 == b.Z.betTypeTab) {
                U("Under");
              } else {
                U("Bet");
                O(N.wF);
              }
            } else {
              b.Z.holding_2 = true;
              if (1 == b.Z.betTypeTab) {
                U("Cancel Bet");
              } else {
                U("Cancel");
                O(N.uo);
              }
            }
          }
        }
      };
      0;
      let [e0, e1] = x.useState("1.5 - 5");
      0;
      let [e2, e3] = x.useState("2");
      0;
      let [e5, e4] = x.useState(0);
      0;
      let [e6, e7] = x.useState(0);
      0;
      let [e8, e9] = x.useState(0);
      0;
      x.useEffect(() => {
        let e = document.getElementById("canvas-container");
        e7(e.clientWidth - 5);
        e9(e.clientHeight - 10);
        return () => {};
      }, [ex]);
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      return a.jsxs("div", {
        className: "flex w-full ".concat(ex ? "lg:w-[70%] " : "lg:w-[75%] ", " flex-col px-1 xl:px-2 relative  "),
        children: [eb && (0, a.jsxs)("div", {
          className: "flex absolute left-0 top-0 w-full flex-col  z-50",
          children: [(0, a.jsxs)("div", {
            className: "flex p-2 justify-between bg-[#1F2128] rounded-t-xl ",
            children: [(0, a.jsx)("p", {
              className: "uppercase",
              children: "Round History"
            }), (0, a.jsxs)("div", {
              onClick: () => {
                eh(!eb);
              },
              className: "flex items-center  space-x-1 rounded-xl font-bold border-[1px] transition-all border-gray-600   text-mred bg-[#252528] px-2 p-1 cursor-pointer",
              children: [(0, a.jsx)(c.zQh, {}), (0, a.jsx)(F.NyY, {})]
            })]
          }), (0, a.jsx)("div", {
            className: "flex p-2 flex-wrap  w-full bg-[#262830] rounded-b-xl ",
            children: eE.slice(0, "mobile" == et ? 40 : (window.innerWidth, 45)).map(e => (0, a.jsxs)("div", {
              className: " my-1 px-3 mx-1 rounded-xl  font-semibold bg-black bg-opacity-100 xl:cursor-pointer  ".concat((0, h.B5)(e.busted), " "),
              children: [parseFloat(e.busted).toFixed(2), "x"]
            }, e.date))
          })]
        }), a.jsxs("div", {
          className: "flex w-full    my-1 items-center",
          children: [a.jsx("div", {
            className: "flex no-wrap overflow-x-clip justify-between w-full ",
            children: eE.slice(0, "mobile" == et ? 5 : window.innerWidth < 1200 ? 12 : 15).map(e => (0, a.jsxs)("div", {
              className: " px-1.5 lg:px-3 mx-1 rounded-xl text-opacity-80 hover:text-opacity-100 font-semibold bg-black bg-opacity-100 xl:cursor-pointer  ".concat((0, h.B5)(e.busted), " "),
              children: [parseFloat(e.busted).toFixed(2), "x"]
            }, e.date))
          }), a.jsxs("div", {
            onClick: () => {
              eh(!eb);
            },
            className: "flex items-center   space-x-1 rounded-xl font-bold  text-gray-400 border-[1px] transition-all border-gray-600  cursor-pointer hover:text-mred bg-[#252528] px-2 p-1 ",
            children: [a.jsx(c.zQh, {}), a.jsx(F.faE, {})]
          })]
        }), a.jsx(actions_header, {}), a.jsxs("div", {
          id: "canvas-container",
          className: "flex h-[38vh] lg:flex-1 border-[1px] border-[#2A2B2E] p-[3px]    mb-2  xl:mb-0   rounded-2xl lg:rounded-xl xl:rounded-2xl 3xl:rounded-3xl items-center justify-center relative",
          children: [a.jsx(T, {
            state: n,
            timePassed: e5,
            width: e6,
            height: e8,
            animationOn: ei
          }), "" == n && (0, a.jsxs)("div", {
            className: " w-full flex-col h-full  absolute top-0 left-0 flex items-center justify-center z-20",
            children: [(0, a.jsx)(u(), {
              width: 100,
              height: 100,
              alt: "image not foung",
              src: m.Z.src,
              className: " h-12  xl:h-16 2xl:h-20 3xl:h-24  animate-spin "
            }), (0, a.jsx)("p", {
              className: "font-semibold text-base lg:text-sm xl:text-base 2xl:text-xl   3xl:my-1",
              children: "Connecting..."
            })]
          }), "busted" === n && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(v.E.div, {
              className: "absolute top-0 right-0 z-30 hidden",
              initial: {
                translateX: 200,
                translateY: 200
              },
              animate: {
                translateX: 0,
                translateY: 0
              },
              transition: {
                duration: 2
              }
            }), (0, a.jsxs)("div", {
              className: " w-full flex-col h-full text-mred absolute top-0 left-0 flex items-center justify-center z-20",
              children: [(0, a.jsx)("p", {
                className: "font-bold tracking-wide  text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-gray-200",
                children: "FLEW AWAY!"
              }), " ", (0, a.jsxs)("p", {
                className: "text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold  ",
                children: [" ", ej, (0, a.jsx)("span", {
                  className: "text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl mb-1",
                  children: "x"
                })]
              })]
            })]
          }), "waiting" === n && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
              className: "w-24 h-12 lg:w-20 xl:w-24 xl:h-16 2xl:w-36 3xl:w-44 3xl:h-24 2xl:h-20  -rotate-12   absolute bottom-1 left-3   z-20 hidden ",
              children: (0, a.jsx)(C.Z, {
                options: {
                  loop: true,
                  autoplay: true,
                  animationData: B
                },
                style: {
                  objectFit: "cover"
                }
              })
            }), (0, a.jsx)("div", {
              className: "absolute top-0 left-0 flex flex-col h-full w-full items-center justify-center z-20",
              children: (0, a.jsxs)("div", {
                className: "w-80 lg:w-64 xl:w-80 2xl:w-96 3xl:w-96   flex flex-col   relative  rounded-md  items-center ",
                children: [(0, a.jsx)(u(), {
                  width: 100,
                  height: 100,
                  alt: "image not foung",
                  src: m.Z.src,
                  className: " h-14  xl:h-16 2xl:h-20 3xl:h-24  3xl:w-40 animate-spin "
                }), (0, a.jsxs)("p", {
                  className: " text-xl lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl uppercase  flex flex-nowrap my-4 lg:my-2 2xl:my-3 3xl:my-4",
                  children: ["Waiting For Next Round", " "]
                }), (0, a.jsx)("div", {
                  className: "w-44 mb-10 xl:mb-0 lg:w-40 xl:w-52 2xl:w-64 3xl:w-72  h-1.5 xl:h-2 bg-gray-200 relative  rounded-md  ",
                  children: (0, a.jsx)(v.E.div, {
                    initial: {
                      width: "100%"
                    },
                    animate: {
                      width: "0%"
                    },
                    transition: {
                      duration: 5.1
                    },
                    className: "bg-mred h-full  rounded-md  "
                  })
                })]
              })
            })]
          }), "started" === n && (0, a.jsx)("div", {
            className: "flex flex-1 absolute top-0 left-0 w-full h-full text-gray-200 pb-10 z-30  ",
            children: (0, a.jsx)("div", {
              className: "flex w-full items-center justify-center",
              children: parseFloat(e_) > 1 && (0, a.jsxs)("p", {
                className: "text-5xl xl:text-7xl 2xl:text-8xl font-bold text-gray-100",
                children: [" ", e_, (0, a.jsx)("span", {
                  className: "text-4xl   xl:text-5xl 2xl:text-6xl mb-1",
                  children: "x"
                })]
              })
            })
          }), " ", a.jsx(y.M, {
            children: eP && (0, a.jsx)("div", {
              className: "flex flex-col absolute top-0 left-0  w-full  h-full justify-start items-center    z-20 ",
              children: (0, a.jsxs)(v.E.div, {
                initial: {
                  opacity: 0,
                  translateY: -10
                },
                animate: {
                  opacity: 1,
                  translateY: 0
                },
                exit: {
                  opacity: 0,
                  translateY: -10
                },
                className: "flex px-8 lg:px-3 xl:px-4 2xl:px-6 3xl:px-8  rounded-2xl border-[1px] border-mgreen/60 bg-mgreen  bg-opacity-40   justfiy-center items-center mt-4 lg:mt-1 xl:mt-2 2xl:mt-3 3xl:mt-4",
                children: [(0, a.jsxs)("div", {
                  className: "flex flex-col items-center",
                  children: [(0, a.jsx)("p", {
                    children: "You have cashed out!"
                  }), (0, a.jsxs)("p", {
                    className: "text-lg lg:text-[10px] xl:text-xs 2xl:text-sm 3xl:text-lg text-gray-100",
                    children: [eH, "x"]
                  })]
                }), (0, a.jsx)("div", {
                  className: "w-4 lg:w-1 xl:w-2 2xl:w-3 3xl:w-4"
                }), (0, a.jsxs)("div", {
                  className: "flex w-24 lg:w-20 2xl:w-24  font-bold text-gray-100 justify-center items-center rounded-3xl  p-0.5 flex-col bg-mgreen",
                  children: [(0, a.jsxs)("p", {
                    children: ["Win,", N.Cf]
                  }), (0, a.jsx)("p", {
                    children: eM
                  })]
                })]
              })
            })
          })]
        }), a.jsxs("div", {
          className: "flex w-full flex-col   lg:h-[30vh] ]  2xl:h-[27vh] 3xl:h-[25vh]  mt-2 lg:mt-1 2xl:mt-2 z-20",
          children: [a.jsx("div", {
            className: "flex w-full justify-center  ",
            children: a.jsx("div", {
              className: " w-min  flex rounded-xl  bg-sblack ",
              children: ["Classic", "Over / Under", "Range"].map((e, t) => (0, a.jsx)("div", {
                onClick: () => {
                  if (t != b.Z.betTypeTab && !b.Z.holding_1 && !b.Z.holding_2 && !b.Z.amingame_1 && !b.Z.amingame_2) {
                    b.Z.betTypeTab = t;
                    W(t);
                    if (0 == t) {
                      L(N.wF);
                      G("Bet");
                      O(N.wF);
                      U("Bet");
                      b.Z.bet_type = "normal";
                      b.Z.range_values = "";
                      b.Z.overunder_value = "";
                      b.Z.bet1multiplier = "777.86";
                      b.Z.bet2multiplier = "777.86";
                      0;
                      f.p0("bet2amount", "200");
                    } else if (1 == t) {
                      0;
                      0;
                      f.p0("bet2amount", f.Bs("bet1amount"));
                      L(N.wF);
                      G("Over");
                      O("bg-red-600");
                      U("Under");
                      e3("2");
                      b.Z.bet_type = "over_under";
                      b.Z.range_values = "";
                      b.Z.overunder_value = "";
                      b.Z.bet1multiplier = "2.01";
                      b.Z.bet2multiplier = "1.70";
                    } else {
                      b.Z.bet_type = "range";
                      b.Z.range_values = "1.5 - 5";
                      e1("1.5 - 5");
                      b.Z.overunder_value = "";
                      L("bg-mgreen bg-opacity-100");
                      G("Bet");
                      b.Z.bet1multiplier = "2.14";
                    }
                  }
                },
                className: "flex w-28 lg:w-20 xl:w-20 2xl:w-24 3xl:w-28 rounded-xl p-1 lg:p-0.5  justify-center cursor-pointer   hover:bg-opacity-100 ".concat(P == t ? "bg-[#2C2D30]" : "", " ").concat(!b.Z.holding_1 && !b.Z.holding_2 && !b.Z.amingame_1 && !b.Z.amingame_2 ? "cursor-pointer" : "cursor-not-allowed"),
                children: e
              }, e))
            })
          }), 0 == P && (0, a.jsx)(bet_controls_component, {
            buttonDisabled: eJ,
            gameStatus: n,
            handleBet: handleBet,
            cashOut: function () {
              let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "normal";
              if (!(h.lA.current_amount < 1.2)) {
                b.Z.button = e;
                if (h.lA.current_amount > 1e3) {
                  M("invalid cashout %error");
                  window.location.reload();
                  return;
                }
                b.Z.finish(h.lA.current_amount);
              }
            },
            button1Classes: I,
            button1Text: A,
            button2Text: V,
            button2Classes: D
          }), 1 == P && (0, a.jsx)(over_under_controls, {
            buttonDisabled: eJ,
            gameStatus: n,
            handleBet: handleBet,
            overUnderValue: e2,
            setOverUnderValue: e3,
            button1Classes: I,
            button1Text: A,
            button2Classes: D,
            button2Text: V,
            updateEngineOverUnderValue: e => {
              b.Z.overunder_value = "".concat(e, "-").concat(e2);
            }
          }), 2 == P && (0, a.jsx)(range_bet_controls, {
            buttonDisabled: eJ,
            gameStatus: n,
            handleBet: handleBet,
            rangeValues: e0,
            setRangeValues: e => {
              e1(e);
              b.Z.range_values = e;
            },
            button1Classes: I,
            button1Text: A
          })]
        }), a.jsx("div", {
          className: "flex w-full lg:hidden mt-2",
          children: a.jsx(i.Z, {})
        }), a.jsx("div", {
          className: "h-6 flex lg:hidden"
        })]
      });
    };
    var I = l(5421);
    function Home() {
      0;
      let e = _.useRouter();
      0;
      let {
        showGlobalChat: t,
        addCustomToast: l,
        setShowVerifyAccountModal: r
      } = x.useContext(g.W);
      0;
      let {
        users: c
      } = x.useContext(p.S);
      0;
      x.useEffect(() => {
        let {
          status: t,
          amount: a
        } = e.query;
        if (t && a) {
          setTimeout(() => {
            if ("success" == t) {
              l("Deposit of  ".concat(N.Cf, " ").concat(a, " Successful %success"));
            } else {
              l("Deposit of ".concat(N.Cf, " ").concat(a, "  Failed %error"));
            }
          }, 1500);
        }
      }, []);
      0;
      x.useEffect(() => {}, [c]);
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      0;
      return a.jsxs(I.Z, {
        children: [a.jsxs(n(), {
          children: [a.jsx("title", {
            children: "Aviata"
          }), a.jsx("meta", {
            name: "description",
            content: "Best crash game in Kenya"
          }), a.jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }), a.jsx("link", {
            rel: "icon",
            href: "/favicon.ico"
          })]
        }), a.jsxs("div", {
          style: {
            fontFamily: "Roboto"
          },
          className: "flex w-screen lg:h-screen  bg-mblack text-sm lg:text-[8px] xl:text-[9px] 2xl:text-xs 3xl:text-sm leading-5 lg:leading-[13px] xl:leading-4 2xl:leading-5 3xl:leading-6 justify-between  text-gray-300",
          children: [a.jsxs("div", {
            className: "flex flex-col  bg-sblack/60 ".concat(t ? "lg:w-[80%]" : "lg:w-[100%]", " "),
            children: [a.jsx(s.Z, {}), a.jsxs("div", {
              className: "m-1 mx-2 flex flex-1 text-gray-300 justify-between ",
              children: [a.jsx("div", {
                className: "lg:flex hidden ".concat(t ? " w-[30%]" : " w-[25%]"),
                children: a.jsx(i.Z, {})
              }), a.jsx(game_area_component, {})]
            })]
          }), t && (0, a.jsx)("div", {
            className: "hidden lg:flex flex-1 h-full",
            children: (0, a.jsx)(o.Z, {})
          })]
        })]
      });
    }
  }
}, function (e) {
  e.O(0, [627, 937, 296, 588, 875, 474, 774, 888, 179], function () {
    return e(e.s = 8312);
  });
  _N_E = e.O();
}]);