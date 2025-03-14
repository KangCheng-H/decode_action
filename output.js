//Fri Mar 14 2025 04:58:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x5d9374 = function () {
  let _0x194338 = true;
  return function (_0xd2f96b, _0x1962a3) {
    const _0x9d06d8 = _0x194338 ? function () {
      if (_0x1962a3) {
        const _0x4e4c11 = _0x1962a3.apply(_0xd2f96b, arguments);
        _0x1962a3 = null;
        return _0x4e4c11;
      }
    } : function () {};
    _0x194338 = false;
    return _0x9d06d8;
  };
}();
(function () {
  _0x5d9374(this, function () {
    const _0x4705a3 = new RegExp("function *\\( *\\)"),
      _0x56bf6a = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x7dbb35 = _0x5773cb("init");
    !_0x4705a3.test(_0x7dbb35 + "chain") || !_0x56bf6a.test(_0x7dbb35 + "input") ? _0x7dbb35("0") : _0x5773cb();
  })();
})();
const _0x4be65f = new _0x52f80d("龙湖U享家"),
  _0x2a8856 = "lhu",
  _0xdaab38 = 1;
let _0x285459 = ["@", "\n"],
  _0xfe0b1e = "",
  _0x13e78c = [],
  _0x389fd7 = 0,
  _0x311ef7;
async function _0x18a519() {
  let _0x12355b = [];
  for (let _0x52ba01 of _0x13e78c) {
    if (_0x52ba01.ckStatus) {
      console.log("\n================ 用户信息 ================\n");
      _0x12355b.push(await _0x52ba01.user_info());
      await _0x4be65f.wait(1000);
      _0x12355b.push(await _0x52ba01.user_balance());
      await _0x4be65f.wait(1000);
      console.log("\n=============== 每日签到 ===============\n");
      _0x12355b.push(await _0x52ba01.sign());
      console.log("\n=============== 每日幸运抽 ===============\n");
      _0x12355b.push(await _0x52ba01.luck_sign());
      await _0x4be65f.wait(1000);
      _0x12355b.push(await _0x52ba01.lottery_luck());
      await _0x4be65f.wait(1000);
      _0x12355b.push(await _0x52ba01.luck_balance());
      await _0x4be65f.wait(1000);
      console.log("\n=============== 金秋礼遇节 ===============\n");
      _0x12355b.push(await _0x52ba01.gold_sign());
      await _0x4be65f.wait(1000);
      _0x12355b.push(await _0x52ba01.lottery_gold());
      await _0x4be65f.wait(1000);
      _0x12355b.push(await _0x52ba01.gold_balance());
      await _0x4be65f.wait(1000);
      _0x12355b.push(await _0x52ba01.user_balance());
      await _0x4be65f.wait(1000);
    }
  }
  await Promise.all(_0x12355b);
}
class _0x2d677e {
  constructor(_0x1b5196) {
    this.index = ++_0x389fd7;
    this.token = _0x1b5196.split("#")[0];
    this.code = _0x1b5196.split("#")[1];
    this.hostname = "https://longzhu.longfor.com/proxy/lmarketing-task-api-mvc-prod/openapi/task/v1";
    this.ckStatus = true;
  }
  async ["user_type"]() {
    try {
      let _0x495a14 = {
          "url": "https://pms-c-api.longfor.com/uhomeMemberApi/memberCenter/mineQuery",
          "headers": {
            "Source": "APP",
            "lmToken": "" + this.token,
            "buCode": "" + this.code,
            "User-Agent": _0x3ba574(),
            "Accept": "*/*",
            "Host": "pms-c-api.longfor.com",
            "Connection": "keep-alive"
          }
        },
        _0x1c5f46 = await _0x5298f3(_0x495a14);
      console.log(_0x1c5f46);
    } catch (_0x510797) {
      console.log(_0x510797);
    }
  }
  async ["user_info"]() {
    try {
      let _0x4f3c44 = {
          "url": "https://pms-c-api.longfor.com/uhomeMemberApi/memberCenter/mineQuery",
          "headers": {
            "Source": "APP",
            "lmToken": "" + this.token,
            "buCode": "" + this.code,
            "User-Agent": _0x3ba574(),
            "Accept": "*/*",
            "Host": "pms-c-api.longfor.com",
            "Connection": "keep-alive"
          }
        },
        _0x127e07 = await _0x5298f3(_0x4f3c44);
      _0x127e07.status == "ok" ? (_0x4be65f.DoubleLog("账号[" + this.index + "]  欢迎用户: " + _0x127e07.data.nickName + "🎉"), this.ckStatus = true) : (_0x4be65f.DoubleLog("账号[" + this.index + "]  用户查询:失败 ❌ 了呢,原因未知！"), this.ckStatus = false);
    } catch (_0x27e8c7) {
      console.log(_0x27e8c7);
    }
  }
  async ["user_balance"]() {
    try {
      let _0x2e259c = {
          "url": "https://pms-c-api.longfor.com/uhomeMemberApi/memberCenter/minePageQuery",
          "headers": {
            "Source": "APP",
            "lmToken": "" + this.token,
            "buCode": "" + this.code,
            "User-Agent": _0x3ba574(),
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Host": "pms-c-api.longfor.com",
            "Connection": "keep-alive"
          },
          "body": JSON.stringify({
            "cityCode": 100000
          })
        },
        _0x18f090 = await _0x5298f3(_0x2e259c);
      _0x18f090.status == "ok" ? (_0x4be65f.DoubleLog("账号[" + this.index + "]  珑珠余额: " + _0x18f090.data.balance + "🎆"), this.ckStatus = true) : (_0x4be65f.DoubleLog("账号[" + this.index + "]  余额查询:失败 ❌ 了呢,原因未知！"), this.ckStatus = false);
    } catch (_0x1a08c7) {
      console.log(_0x1a08c7);
    }
  }
  async ["gold_sign"]() {
    try {
      let _0x1a5c7a = {
          "url": this.hostname + "/lottery/sign",
          "headers": {
            "X-LF-UserToken": "" + this.token,
            "X-LF-DXRisk-Source": "1",
            "X-LF-Bu-Code": "" + this.code,
            "X-GAIA-API-KEY": "c06753f1-3e68-437d-b592-b94656ea5517",
            "X-LF-Channel": "C4",
            "User-Agent": _0x3ba574(),
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "*/*",
            "Host": "longzhu.longfor.com",
            "Connection": "keep-alive"
          },
          "body": JSON.stringify({
            "activity_no": "11111111111695034186217791500000",
            "task_id": "",
            "use_luck": 0
          })
        },
        _0x4263be = await _0x5298f3(_0x1a5c7a);
      _0x4263be.code == "0000" ? (_0x4be65f.DoubleLog("账号[" + this.index + "]  签到成功：抽奖次数+1⭕"), this.ckStatus = true) : (_0x4be65f.DoubleLog("账号[" + this.index + "]  签到失败：" + _0x4263be.message + "❌"), this.ckStatus = false);
    } catch (_0x3a6dca) {
      console.log(_0x3a6dca);
    }
  }
  async ["lottery_gold"]() {
    try {
      let _0x4746e7 = {
          "url": this.hostname + "/lottery/luck",
          "headers": {
            "X-LF-UserToken": "" + this.token,
            "X-LF-DXRisk-Source": "1",
            "X-LF-Bu-Code": "" + this.code,
            "X-GAIA-API-KEY": "c06753f1-3e68-437d-b592-b94656ea5517",
            "X-LF-Channel": "C4",
            "User-Agent": _0x3ba574(),
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "*/*",
            "Host": "longzhu.longfor.com",
            "Connection": "keep-alive"
          },
          "body": JSON.stringify({
            "activity_no": "11111111111695034186217791500000",
            "task_id": "",
            "use_luck": 0
          })
        },
        _0x4d4d50 = await _0x5298f3(_0x4746e7);
      _0x4d4d50.code == "0000" ? (_0x4be65f.DoubleLog("账号[" + this.index + "]  正在抽奖请稍后~~~"), _0x4d4d50.data.is_rewards == true ? _0x4d4d50.data.item_type == 20 ? _0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖获得：" + _0x4d4d50.data.rewards_num + "珑珠🎆") : _0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖获得：" + _0x4d4d50.data + "⭕") : _0x4be65f.DoubleLog("账号[" + this.index + "]  " + _0x4d4d50.data.desc + "❗"), this.ckStatus = true) : (_0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖失败：" + _0x4d4d50.message + "❌"), this.ckStatus = false);
    } catch (_0x23a4f1) {
      console.log(_0x23a4f1);
    }
  }
  async ["gold_balance"]() {
    try {
      let _0x5c87c8 = {
          "url": this.hostname + "/lottery/total-rewards?activity_no=11111111111695034186217791500000&task_id=",
          "headers": {
            "X-LF-UserToken": "" + this.token,
            "X-LF-DXRisk-Source": "1",
            "X-LF-Bu-Code": "" + this.code,
            "X-GAIA-API-KEY": "c06753f1-3e68-437d-b592-b94656ea5517",
            "X-LF-Channel": "C4",
            "User-Agent": _0x3ba574(),
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "*/*",
            "Host": "longzhu.longfor.com",
            "Connection": "keep-alive"
          }
        },
        _0x2f2352 = await _0x5298f3(_0x5c87c8);
      _0x2f2352.code == "0000" ? (_0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖总奖励：" + _0x2f2352.data.total_rewards + "珑珠🎆"), this.ckStatus = true) : (_0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖总奖励查询失败：" + _0x2f2352.message + "❌"), this.ckStatus = false);
    } catch (_0x55f88a) {
      console.log(_0x55f88a);
    }
  }
  async ["luck_sign"]() {
    try {
      let _0x4d2950 = {
          "url": this.hostname + "/lottery/sign",
          "headers": {
            "X-LF-UserToken": "" + this.token,
            "X-LF-DXRisk-Source": "1",
            "X-LF-Bu-Code": "" + this.code,
            "X-GAIA-API-KEY": "c06753f1-3e68-437d-b592-b94656ea5517",
            "X-LF-Channel": "C4",
            "User-Agent": _0x3ba574(),
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "*/*",
            "Host": "longzhu.longfor.com",
            "Connection": "keep-alive"
          },
          "body": JSON.stringify({
            "activity_no": "11111111111691029535309430500000",
            "task_id": "",
            "use_luck": 0
          })
        },
        _0x585443 = await _0x5298f3(_0x4d2950);
      _0x585443.code == "0000" ? (_0x4be65f.DoubleLog("账号[" + this.index + "]  签到成功：抽奖次数+1⭕"), this.ckStatus = true) : (_0x4be65f.DoubleLog("账号[" + this.index + "]  签到失败：" + _0x585443.message + "❌"), this.ckStatus = false);
    } catch (_0x476115) {
      console.log(_0x476115);
    }
  }
  async ["lottery_luck"]() {
    try {
      let _0x279c52 = {
          "url": this.hostname + "/lottery/luck",
          "headers": {
            "X-LF-UserToken": "" + this.token,
            "X-LF-DXRisk-Source": "1",
            "X-LF-Bu-Code": "" + this.code,
            "X-GAIA-API-KEY": "c06753f1-3e68-437d-b592-b94656ea5517",
            "X-LF-Channel": "C4",
            "User-Agent": _0x3ba574(),
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "*/*",
            "Host": "longzhu.longfor.com",
            "Connection": "keep-alive"
          },
          "body": JSON.stringify({
            "activity_no": "11111111111691029535309430500000",
            "task_id": "",
            "use_luck": 0
          })
        },
        _0x8e404a = await _0x5298f3(_0x279c52);
      _0x8e404a.code == "0000" ? (_0x4be65f.DoubleLog("账号[" + this.index + "]  正在抽奖请稍后~~~"), _0x8e404a.data.is_rewards == true ? _0x8e404a.data.item_type == 20 ? _0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖获得：" + _0x8e404a.data.rewards_num + "珑珠🎆") : _0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖获得：" + _0x8e404a.data + "⭕") : _0x4be65f.DoubleLog("账号[" + this.index + "]  " + _0x8e404a.data.desc + "❗"), this.ckStatus = true) : (_0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖失败：" + _0x8e404a.message + "❌"), this.ckStatus = false);
    } catch (_0x36f6af) {
      console.log(_0x36f6af);
    }
  }
  async ["luck_balance"]() {
    try {
      let _0xa49885 = {
          "url": this.hostname + "/lottery/total-rewards?activity_no=11111111111691029535309430500000&task_id=",
          "headers": {
            "X-LF-UserToken": "" + this.token,
            "X-LF-DXRisk-Source": "1",
            "X-LF-Bu-Code": "" + this.code,
            "X-GAIA-API-KEY": "c06753f1-3e68-437d-b592-b94656ea5517",
            "X-LF-Channel": "C4",
            "User-Agent": _0x3ba574(),
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "*/*",
            "Host": "longzhu.longfor.com",
            "Connection": "keep-alive"
          }
        },
        _0x2d5f24 = await _0x5298f3(_0xa49885);
      _0x2d5f24.code == "0000" ? (_0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖总奖励：" + _0x2d5f24.data.total_rewards + "珑珠🎆"), this.ckStatus = true) : (_0x4be65f.DoubleLog("账号[" + this.index + "]  抽奖总奖励查询失败：" + _0x2d5f24.message + "❌"), this.ckStatus = false);
    } catch (_0x5e47a1) {
      console.log(_0x5e47a1);
    }
  }
  async ["sign"]() {
    try {
      let _0x56b54a = {
          "url": this.hostname + "/signature/clock",
          "headers": {
            "X-LF-UserToken": "" + this.token,
            "X-LF-DXRisk-Source": "1",
            "X-LF-Bu-Code": "" + this.code,
            "X-GAIA-API-KEY": "c06753f1-3e68-437d-b592-b94656ea5517",
            "X-LF-Channel": "C4",
            "User-Agent": _0x3ba574(),
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "*/*",
            "Host": "longzhu.longfor.com",
            "Connection": "keep-alive"
          },
          "body": "{\r\n    \"activity_no\":\"11111111111686241863606037740000\"\r\n}"
        },
        _0x2e0601 = await _0x5298f3(_0x56b54a);
      if (_0x2e0601.code != "0000") _0x4be65f.DoubleLog("账号[" + this.index + "]  签到失败： " + _0x2e0601.message + " ❌"), this.ckStatus = false;else {
        if (_0x2e0601.data.is_popup == "0") _0x4be65f.DoubleLog("账号[" + this.index + "]  签到失败：今日已签到❌"), this.ckStatus = true;else {
          const _0x2de4cc = _0x2e0601.data.reward_info,
            _0x5e06d9 = _0x2de4cc.reduce((_0x101b38, _0x5da8ba) => {
              _0x101b38 + _0x5da8ba.reward_num;
            }, 0);
          _0x4be65f.DoubleLog("账号[" + this.index + "]  每日签到获得：" + _0x5e06d9 + " 经验值🎆");
          this.ckStatus = true;
        }
      }
    } catch (_0x5a863a) {
      console.log(_0x5a863a);
    }
  }
}
!(async () => {
  if (!(await _0xac3154())) return;
  _0x13e78c.length > 0 && (await _0x18a519());
  await _0x4be65f.SendMsg(_0xfe0b1e);
})().catch(_0x2ce2ce => console.log(_0x2ce2ce)).finally(() => _0x4be65f.done());
async function _0xac3154() {
  let _0x4503de = (_0x4be65f.isNode() ? process.env[_0x2a8856] : _0x4be65f.getdata(_0x2a8856)) || "",
    _0x2f8b61 = 0;
  if (_0x4503de) {
    let _0x4db795 = _0x285459[0];
    for (let _0x4b0789 of _0x285459) if (_0x4503de.indexOf(_0x4b0789) > -1) {
      _0x4db795 = _0x4b0789;
      break;
    }
    for (let _0x372e41 of _0x4503de.split(_0x4db795)) _0x372e41 && _0x13e78c.push(new _0x2d677e(_0x372e41));
    _0x2f8b61 = _0x13e78c.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x2f8b61 + "个账号");
  return true;
}
function _0x5298f3(_0xc54cb2, _0x35324a) {
  _0x35324a = _0xc54cb2.method ? _0xc54cb2.method.toLowerCase() : _0xc54cb2.body ? "post" : "get";
  return new Promise(_0x397a1b => {
    _0x4be65f[_0x35324a](_0xc54cb2, (_0x5e8388, _0x561bb7, _0x778c6c) => {
      try {
        if (_0x5e8388) {} else {
          if (_0x778c6c) {
            try {
              _0x778c6c = JSON.parse(_0x778c6c);
            } catch (_0x2c0521) {}
            _0x397a1b(_0x778c6c);
          } else console.log("请求api返回数据为空，请检查自身原因");
        }
      } catch (_0x33dd5b) {
        _0x4be65f.logErr(_0x33dd5b, _0x561bb7);
      } finally {
        _0x397a1b();
      }
    });
  });
}
function _0x51558d(_0x328996, _0x3a58a6 = 3000) {
  return new Promise(_0x359511 => {
    let _0x7c54a2 = {
      "url": "https://ghproxy.com/https://raw.githubusercontent.com/" + _0x328996
    };
    _0x4be65f.get(_0x7c54a2, async (_0x1ae73e, _0x584dac, _0x1ba51d) => {
      try {
        let _0x180958 = /scriptVersionNow\s*=\s*(["'`])([\d.]+)\1/,
          _0x38b090 = _0x1ba51d.match(_0x180958);
        _0x311ef7 = _0x38b090 ? _0x38b090[2] : "";
      } catch (_0x3b6b2e) {
        _0x4be65f.logErr(_0x3b6b2e, _0x584dac);
      } finally {
        _0x359511();
      }
    }, _0x3a58a6);
  });
}
async function _0x35718b() {
  try {
    const _0x56cc74 = ["https://ghproxy.com/https://raw.githubusercontent.com/smallfawn/Note/main/Notice.json", "https://fastly.jsdelivr.net/gh/smallfawn/Note@main/Notice.json", "https://cdn.jsdelivr.net/gh/smallfawn/Note@main/Notice.json", "https://ghproxy.net/https://raw.githubusercontent.com/smallfawn/Note/refs/heads/main/Notice.json"];
    let _0x3f5156 = null;
    for (const _0x314b28 of _0x56cc74) {
      const _0xd9fe4f = {
          "url": _0x314b28,
          "headers": {
            "User-Agent": ""
          }
        },
        _0x5019b9 = await _0x5298f3(_0xd9fe4f);
      if (_0x5019b9 && "notice" in _0x5019b9) {
        _0x3f5156 = _0x5019b9.notice.replace(/\\n/g, "\n");
        break;
      }
    }
    _0x3f5156 && _0x4be65f.DoubleLog(_0x3f5156);
  } catch (_0x55521a) {
    console.log(_0x55521a);
  }
}
function _0x3ba574() {
  const _0x16bf91 = (_0x27afbf, _0x234503) => Math.floor(Math.random() * (_0x234503 - _0x27afbf + 1)) + _0x27afbf,
    _0x367ff4 = _0x16bf91(600, 700) + "." + _0x16bf91(1, 4) + "." + _0x16bf91(1, 5),
    _0x4cd79d = _0x16bf91(12, 15) + "." + _0x16bf91(0, 6) + "." + _0x16bf91(0, 9),
    _0x1e1351 = "Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x4cd79d + " like Mac OS X) AppleWebKit/" + _0x367ff4 + " (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x16001422) NetType/WIFI Language/zh_CN";
  return _0x1e1351;
}
function _0x52f80d(_0x418952, _0x29f79d) {
  class _0x1bf93b {
    constructor(_0xc3c416) {
      this.env = _0xc3c416;
    }
    ["send"](_0x1f4252, _0x1305e9 = "GET") {
      _0x1f4252 = "string" == typeof _0x1f4252 ? {
        "url": _0x1f4252
      } : _0x1f4252;
      let _0x7849fe = this.get;
      "POST" === _0x1305e9 && (_0x7849fe = this.post);
      return new Promise((_0xa5fda5, _0x511fb7) => {
        _0x7849fe.call(this, _0x1f4252, (_0x255ce2, _0x64926f, _0x227981) => {
          _0x255ce2 ? _0x511fb7(_0x255ce2) : _0xa5fda5(_0x64926f);
        });
      });
    }
    ["get"](_0x33360b) {
      return this.send.call(this.env, _0x33360b);
    }
    ["post"](_0xb131a8) {
      return this.send.call(this.env, _0xb131a8, "POST");
    }
  }
  return new class {
    constructor(_0x234790, _0x581b60) {
      this.name = _0x234790;
      this.http = new _0x1bf93b(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x581b60);
      this.log("", "🔔" + this.name + ",开始!");
    }
    ["getEnv"]() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    ["isNode"]() {
      return "Node.js" === this.getEnv();
    }
    ["isQuanX"]() {
      return "Quantumult X" === this.getEnv();
    }
    ["isSurge"]() {
      return "Surge" === this.getEnv();
    }
    ["isLoon"]() {
      return "Loon" === this.getEnv();
    }
    ["isShadowrocket"]() {
      return "Shadowrocket" === this.getEnv();
    }
    ["isStash"]() {
      return "Stash" === this.getEnv();
    }
    ["toObj"](_0x23bf2d, _0x39f809 = null) {
      try {
        return JSON.parse(_0x23bf2d);
      } catch {
        return _0x39f809;
      }
    }
    ["toStr"](_0x3aa049, _0xcb0c22 = null) {
      try {
        return JSON.stringify(_0x3aa049);
      } catch {
        return _0xcb0c22;
      }
    }
    ["getjson"](_0x488e51, _0x16e6f8) {
      let _0x22bc9c = _0x16e6f8;
      const _0x43a593 = this.getdata(_0x488e51);
      if (_0x43a593) try {
        _0x22bc9c = JSON.parse(this.getdata(_0x488e51));
      } catch {}
      return _0x22bc9c;
    }
    ["setjson"](_0x4aa18a, _0x11515b) {
      try {
        return this.setdata(JSON.stringify(_0x4aa18a), _0x11515b);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x13e623) {
      return new Promise(_0x343243 => {
        this.get({
          "url": _0x13e623
        }, (_0x4a3dec, _0x3808cb, _0x1306f8) => _0x343243(_0x1306f8));
      });
    }
    ["runScript"](_0x418548, _0x59e136) {
      return new Promise(_0x35de04 => {
        let _0x4dfb81 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4dfb81 = _0x4dfb81 ? _0x4dfb81.replace(/\n/g, "").trim() : _0x4dfb81;
        let _0x3cd759 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x3cd759 = _0x3cd759 ? 1 * _0x3cd759 : 20;
        _0x3cd759 = _0x59e136 && _0x59e136.timeout ? _0x59e136.timeout : _0x3cd759;
        const [_0x290361, _0x392ae0] = _0x4dfb81.split("@"),
          _0x82f991 = {
            "url": "http://" + _0x392ae0 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x418548,
              "mock_type": "cron",
              "timeout": _0x3cd759
            },
            "headers": {
              "X-Key": _0x290361,
              "Accept": "*/*"
            },
            "timeout": _0x3cd759
          };
        this.post(_0x82f991, (_0x6a9e39, _0x313c43, _0xb9b4d0) => _0x35de04(_0xb9b4d0));
      }).catch(_0x405a3c => this.logErr(_0x405a3c));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3ee3df = this.path.resolve(this.dataFile),
          _0x4a0bf2 = this.path.resolve(process.cwd(), this.dataFile),
          _0x374fcf = this.fs.existsSync(_0x3ee3df),
          _0x4d01c5 = !_0x374fcf && this.fs.existsSync(_0x4a0bf2);
        if (!_0x374fcf && !_0x4d01c5) return {};
        {
          const _0x3034ae = _0x374fcf ? _0x3ee3df : _0x4a0bf2;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3034ae));
          } catch (_0x2b7a3a) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xe57866 = this.path.resolve(this.dataFile),
          _0x454ca4 = this.path.resolve(process.cwd(), this.dataFile),
          _0x43339d = this.fs.existsSync(_0xe57866),
          _0x218a52 = !_0x43339d && this.fs.existsSync(_0x454ca4),
          _0x351549 = JSON.stringify(this.data);
        _0x43339d ? this.fs.writeFileSync(_0xe57866, _0x351549) : _0x218a52 ? this.fs.writeFileSync(_0x454ca4, _0x351549) : this.fs.writeFileSync(_0xe57866, _0x351549);
      }
    }
    ["lodash_get"](_0x3ec35c, _0x3e9d9a, _0x4bd615) {
      const _0x5dcde8 = _0x3e9d9a.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x2c6f86 = _0x3ec35c;
      for (const _0x2e78be of _0x5dcde8) if (_0x2c6f86 = Object(_0x2c6f86)[_0x2e78be], undefined === _0x2c6f86) return _0x4bd615;
      return _0x2c6f86;
    }
    ["lodash_set"](_0x5c0ad7, _0x1cc041, _0x1c4d3b) {
      return Object(_0x5c0ad7) !== _0x5c0ad7 ? _0x5c0ad7 : (Array.isArray(_0x1cc041) || (_0x1cc041 = _0x1cc041.toString().match(/[^.[\]]+/g) || []), _0x1cc041.slice(0, -1).reduce((_0x4d4662, _0x414de7, _0x8d9c16) => Object(_0x4d4662[_0x414de7]) === _0x4d4662[_0x414de7] ? _0x4d4662[_0x414de7] : _0x4d4662[_0x414de7] = Math.abs(_0x1cc041[_0x8d9c16 + 1]) >> 0 == +_0x1cc041[_0x8d9c16 + 1] ? [] : {}, _0x5c0ad7)[_0x1cc041[_0x1cc041.length - 1]] = _0x1c4d3b, _0x5c0ad7);
    }
    ["getdata"](_0x314506) {
      let _0x30a17d = this.getval(_0x314506);
      if (/^@/.test(_0x314506)) {
        const [, _0xd9e38b, _0x574717] = /^@(.*?)\.(.*?)$/.exec(_0x314506),
          _0x5e5ed5 = _0xd9e38b ? this.getval(_0xd9e38b) : "";
        if (_0x5e5ed5) try {
          const _0x20d4d3 = JSON.parse(_0x5e5ed5);
          _0x30a17d = _0x20d4d3 ? this.lodash_get(_0x20d4d3, _0x574717, "") : _0x30a17d;
        } catch (_0x146de6) {
          _0x30a17d = "";
        }
      }
      return _0x30a17d;
    }
    ["setdata"](_0xc67c63, _0x3ebc62) {
      let _0x2d5823 = false;
      if (/^@/.test(_0x3ebc62)) {
        const [, _0x363fc8, _0x3d6845] = /^@(.*?)\.(.*?)$/.exec(_0x3ebc62),
          _0x70dafb = this.getval(_0x363fc8),
          _0x25b955 = _0x363fc8 ? "null" === _0x70dafb ? null : _0x70dafb || "{}" : "{}";
        try {
          const _0x1ad52d = JSON.parse(_0x25b955);
          this.lodash_set(_0x1ad52d, _0x3d6845, _0xc67c63);
          _0x2d5823 = this.setval(JSON.stringify(_0x1ad52d), _0x363fc8);
        } catch (_0x8f0c7f) {
          const _0x30537b = {};
          this.lodash_set(_0x30537b, _0x3d6845, _0xc67c63);
          _0x2d5823 = this.setval(JSON.stringify(_0x30537b), _0x363fc8);
        }
      } else _0x2d5823 = this.setval(_0xc67c63, _0x3ebc62);
      return _0x2d5823;
    }
    ["getval"](_0x21c224) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x21c224);
        case "Quantumult X":
          return $prefs.valueForKey(_0x21c224);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x21c224];
        default:
          return this.data && this.data[_0x21c224] || null;
      }
    }
    ["setval"](_0xbe9c51, _0x75e339) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0xbe9c51, _0x75e339);
        case "Quantumult X":
          return $prefs.setValueForKey(_0xbe9c51, _0x75e339);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x75e339] = _0xbe9c51;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0x75e339] || null;
      }
    }
    ["initGotEnv"](_0x5d0b71) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x5d0b71 && (_0x5d0b71.headers = _0x5d0b71.headers ? _0x5d0b71.headers : {}, undefined === _0x5d0b71.headers.Cookie && undefined === _0x5d0b71.cookieJar && (_0x5d0b71.cookieJar = this.ckjar));
    }
    ["get"](_0x145f43, _0x3c243c = () => {}) {
      switch (_0x145f43.headers && (delete _0x145f43.headers["Content-Type"], delete _0x145f43.headers["Content-Length"], delete _0x145f43.headers["content-type"], delete _0x145f43.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x145f43.headers = _0x145f43.headers || {}, Object.assign(_0x145f43.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(_0x145f43, (_0x4f741e, _0xe50259, _0x127c5e) => {
            !_0x4f741e && _0xe50259 && (_0xe50259.body = _0x127c5e, _0xe50259.statusCode = _0xe50259.status ? _0xe50259.status : _0xe50259.statusCode, _0xe50259.status = _0xe50259.statusCode);
            _0x3c243c(_0x4f741e, _0xe50259, _0x127c5e);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x145f43.opts = _0x145f43.opts || {}, Object.assign(_0x145f43.opts, {
            "hints": false
          }));
          $task.fetch(_0x145f43).then(_0x48042e => {
            const {
              statusCode: _0x100a62,
              statusCode: _0x5ad0a0,
              headers: _0x2e869d,
              body: _0x5b435d,
              bodyBytes: _0xb7644c
            } = _0x48042e;
            _0x3c243c(null, {
              "status": _0x100a62,
              "statusCode": _0x5ad0a0,
              "headers": _0x2e869d,
              "body": _0x5b435d,
              "bodyBytes": _0xb7644c
            }, _0x5b435d, _0xb7644c);
          }, _0x38ab80 => _0x3c243c(_0x38ab80 && _0x38ab80.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x37b2bc = require("iconv-lite");
          this.initGotEnv(_0x145f43);
          this.got(_0x145f43).on("redirect", (_0x3e4ee5, _0x8de7f8) => {
            try {
              if (_0x3e4ee5.headers["set-cookie"]) {
                const _0x23f8c0 = _0x3e4ee5.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x23f8c0 && this.ckjar.setCookieSync(_0x23f8c0, null);
                _0x8de7f8.cookieJar = this.ckjar;
              }
            } catch (_0x20d00d) {
              this.logErr(_0x20d00d);
            }
          }).then(_0x5aa156 => {
            const {
                statusCode: _0x617cdb,
                statusCode: _0x1e1110,
                headers: _0x351016,
                rawBody: _0x33ea71
              } = _0x5aa156,
              _0x378517 = _0x37b2bc.decode(_0x33ea71, this.encoding);
            _0x3c243c(null, {
              "status": _0x617cdb,
              "statusCode": _0x1e1110,
              "headers": _0x351016,
              "rawBody": _0x33ea71,
              "body": _0x378517
            }, _0x378517);
          }, _0x3ec108 => {
            const {
              message: _0x88ff6,
              response: _0x2ee293
            } = _0x3ec108;
            _0x3c243c(_0x88ff6, _0x2ee293, _0x2ee293 && _0x37b2bc.decode(_0x2ee293.rawBody, this.encoding));
          });
      }
    }
    ["post"](_0x523536, _0x2f5473 = () => {}) {
      const _0x44dda4 = _0x523536.method ? _0x523536.method.toLocaleLowerCase() : "post";
      switch (_0x523536.body && _0x523536.headers && !_0x523536.headers["Content-Type"] && !_0x523536.headers["content-type"] && (_0x523536.headers["content-type"] = "application/x-www-form-urlencoded"), _0x523536.headers && (delete _0x523536.headers["Content-Length"], delete _0x523536.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x523536.headers = _0x523536.headers || {}, Object.assign(_0x523536.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[_0x44dda4](_0x523536, (_0x566156, _0x4425e1, _0x35e7db) => {
            !_0x566156 && _0x4425e1 && (_0x4425e1.body = _0x35e7db, _0x4425e1.statusCode = _0x4425e1.status ? _0x4425e1.status : _0x4425e1.statusCode, _0x4425e1.status = _0x4425e1.statusCode);
            _0x2f5473(_0x566156, _0x4425e1, _0x35e7db);
          });
          break;
        case "Quantumult X":
          _0x523536.method = _0x44dda4;
          this.isNeedRewrite && (_0x523536.opts = _0x523536.opts || {}, Object.assign(_0x523536.opts, {
            "hints": false
          }));
          $task.fetch(_0x523536).then(_0x278efc => {
            const {
              statusCode: _0x40abf8,
              statusCode: _0x3743bb,
              headers: _0x27e72d,
              body: _0x194f43,
              bodyBytes: _0x12ddf2
            } = _0x278efc;
            _0x2f5473(null, {
              "status": _0x40abf8,
              "statusCode": _0x3743bb,
              "headers": _0x27e72d,
              "body": _0x194f43,
              "bodyBytes": _0x12ddf2
            }, _0x194f43, _0x12ddf2);
          }, _0x5299f9 => _0x2f5473(_0x5299f9 && _0x5299f9.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x1f1a2b = require("iconv-lite");
          this.initGotEnv(_0x523536);
          const {
            url: _0xa28cd8,
            ..._0x669a1c
          } = _0x523536;
          this.got[_0x44dda4](_0xa28cd8, _0x669a1c).then(_0x330805 => {
            const {
                statusCode: _0x3791cc,
                statusCode: _0x1d320e,
                headers: _0x4209fa,
                rawBody: _0x13c1ad
              } = _0x330805,
              _0x5a516a = _0x1f1a2b.decode(_0x13c1ad, this.encoding);
            _0x2f5473(null, {
              "status": _0x3791cc,
              "statusCode": _0x1d320e,
              "headers": _0x4209fa,
              "rawBody": _0x13c1ad,
              "body": _0x5a516a
            }, _0x5a516a);
          }, _0x3c5a0e => {
            const {
              message: _0x1759b0,
              response: _0x4564f3
            } = _0x3c5a0e;
            _0x2f5473(_0x1759b0, _0x4564f3, _0x4564f3 && _0x1f1a2b.decode(_0x4564f3.rawBody, this.encoding));
          });
      }
    }
    ["time"](_0x560b7f, _0x1c5168 = null) {
      const _0x41c7f3 = _0x1c5168 ? new Date(_0x1c5168) : new Date();
      let _0x300ebe = {
        "M+": _0x41c7f3.getMonth() + 1,
        "d+": _0x41c7f3.getDate(),
        "H+": _0x41c7f3.getHours(),
        "m+": _0x41c7f3.getMinutes(),
        "s+": _0x41c7f3.getSeconds(),
        "q+": Math.floor((_0x41c7f3.getMonth() + 3) / 3),
        "S": _0x41c7f3.getMilliseconds()
      };
      /(y+)/.test(_0x560b7f) && (_0x560b7f = _0x560b7f.replace(RegExp.$1, (_0x41c7f3.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x41b195 in _0x300ebe) new RegExp("(" + _0x41b195 + ")").test(_0x560b7f) && (_0x560b7f = _0x560b7f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x300ebe[_0x41b195] : ("00" + _0x300ebe[_0x41b195]).substr(("" + _0x300ebe[_0x41b195]).length)));
      return _0x560b7f;
    }
    ["queryStr"](_0x379b7b) {
      let _0xd3a238 = "";
      for (const _0x11ffd9 in _0x379b7b) {
        let _0x306f1b = _0x379b7b[_0x11ffd9];
        null != _0x306f1b && "" !== _0x306f1b && ("object" == typeof _0x306f1b && (_0x306f1b = JSON.stringify(_0x306f1b)), _0xd3a238 += _0x11ffd9 + "=" + _0x306f1b + "&");
      }
      _0xd3a238 = _0xd3a238.substring(0, _0xd3a238.length - 1);
      return _0xd3a238;
    }
    ["msg"](_0x3a13a0 = _0x418952, _0x55d570 = "", _0x215187 = "", _0x1768db) {
      const _0x1d2d8d = _0x30e75f => {
        switch (typeof _0x30e75f) {
          case undefined:
            return _0x30e75f;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  "url": _0x30e75f
                };
              case "Loon":
              case "Shadowrocket":
                return _0x30e75f;
              case "Quantumult X":
                return {
                  "open-url": _0x30e75f
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let _0x3fece0 = _0x30e75f.url || _0x30e75f.openUrl || _0x30e75f["open-url"];
                  return {
                    "url": _0x3fece0
                  };
                }
              case "Loon":
                {
                  let _0x249f8d = _0x30e75f.openUrl || _0x30e75f.url || _0x30e75f["open-url"],
                    _0x3d7db0 = _0x30e75f.mediaUrl || _0x30e75f["media-url"];
                  return {
                    "openUrl": _0x249f8d,
                    "mediaUrl": _0x3d7db0
                  };
                }
              case "Quantumult X":
                {
                  let _0x4698c0 = _0x30e75f["open-url"] || _0x30e75f.url || _0x30e75f.openUrl,
                    _0xc2a07 = _0x30e75f["media-url"] || _0x30e75f.mediaUrl,
                    _0x427975 = _0x30e75f["update-pasteboard"] || _0x30e75f.updatePasteboard;
                  return {
                    "open-url": _0x4698c0,
                    "media-url": _0xc2a07,
                    "update-pasteboard": _0x427975
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(_0x3a13a0, _0x55d570, _0x215187, _0x1d2d8d(_0x1768db));
          break;
        case "Quantumult X":
          $notify(_0x3a13a0, _0x55d570, _0x215187, _0x1d2d8d(_0x1768db));
          break;
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let _0x38c43a = ["", "==============📣系统通知📣=============="];
        _0x38c43a.push(_0x3a13a0);
        _0x55d570 && _0x38c43a.push(_0x55d570);
        _0x215187 && _0x38c43a.push(_0x215187);
        console.log(_0x38c43a.join("\n"));
        this.logs = this.logs.concat(_0x38c43a);
      }
    }
    ["log"](..._0x403be5) {
      _0x403be5.length > 0 && (this.logs = [...this.logs, ..._0x403be5]);
      console.log(_0x403be5.join(this.logSeparator));
    }
    ["logErr"](_0x1419fa, _0x58cf53) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ",错误!", _0x1419fa);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ",错误!", _0x1419fa.stack);
      }
    }
    ["wait"](_0x5323c5) {
      return new Promise(_0x47eb89 => setTimeout(_0x47eb89, _0x5323c5));
    }
    ["DoubleLog"](_0x3e9d0a) {
      _0x4be65f.isNode() ? _0x3e9d0a && (console.log("" + _0x3e9d0a), _0xfe0b1e += "\n " + _0x3e9d0a) : (console.log("" + _0x3e9d0a), _0xfe0b1e += "\n " + _0x3e9d0a);
    }
    async ["SendMsg"](_0x10f137) {
      if (!_0x10f137) return;
      if (_0xdaab38 > 0) {
        if (_0x4be65f.isNode()) {
          var _0x3f98b8 = require("./sendNotify");
          await _0x3f98b8.sendNotify(_0x4be65f.name, _0x10f137);
        } else _0x4be65f.msg(_0x4be65f.name, "", _0x10f137), console.log(_0x4be65f.name, "", _0x10f137);
      } else console.log(_0x10f137);
    }
    ["done"](_0x38d86f = {}) {
      const _0x3d7d31 = new Date().getTime(),
        _0x3651d2 = (_0x3d7d31 - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ",结束!🕛 " + _0x3651d2 + "秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x38d86f);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x418952, _0x29f79d);
}
function _0x5773cb(_0x25d96c) {
  function _0x55f9a0(_0x44dc31) {
    if (typeof _0x44dc31 === "string") return function (_0x3140bd) {}.constructor("while (true) {}").apply("counter");else ("" + _0x44dc31 / _0x44dc31).length !== 1 || _0x44dc31 % 20 === 0 ? function () {
      return true;
    }.constructor("debugger").call("action") : function () {
      return false;
    }.constructor("debugger").apply("stateObject");
    _0x55f9a0(++_0x44dc31);
  }
  try {
    if (_0x25d96c) return _0x55f9a0;else _0x55f9a0(0);
  } catch (_0x43ad71) {}
}
(function () {
  const _0x38bb79 = function () {
      let _0x42a08a;
      try {
        _0x42a08a = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0xbb8eb7) {
        _0x42a08a = window;
      }
      return _0x42a08a;
    },
    _0x2cc8b4 = _0x38bb79();
  _0x2cc8b4.setInterval(_0x5773cb, 2000);
})();