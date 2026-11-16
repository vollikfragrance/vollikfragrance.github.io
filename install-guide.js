/* Vollik — 홈 화면 설치 안내
   - iPhone Safari: "공유 → 홈 화면에 추가" 안내 시트를 띄움
   - Android Chrome: 브라우저 설치 창을 바로 여는 "설치" 버튼
   - 이미 홈 화면 앱으로 열었거나 Xcode 앱(?app=1) 안이면 아무것도 표시하지 않음
   - 닫으면 7일 동안 다시 띄우지 않음 */
(function () {
  var KEY = "vollik-install-dismissed";
  var standalone =
    window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
  var inNativeApp = /[?&]app=1/.test(location.search) && !standalone && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
  if (standalone || inNativeApp) return;

  try {
    var t = Number(localStorage.getItem(KEY) || 0);
    if (t && Date.now() - t < 7 * 864e5) return;
  } catch (e) {}

  var ua = navigator.userAgent;
  var isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var isIOSSafari = isIOS && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|KAKAOTALK|Instagram|FBAN|FBAV|NAVER|Line\//.test(ua);
  var isIOSOther = isIOS && !isIOSSafari;
  var deferred = null;

  var css =
    ".install-link{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:2147483000;" +
    "background:#fff;color:#000;border:1px solid #000;border-radius:18px;padding:18px 18px 16px;" +
    "font:15px/1.45 -apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo',sans-serif;" +
    "box-shadow:0 10px 40px rgba(0,0,0,.12);transform:translateY(140%);transition:transform .45s cubic-bezier(.2,.8,.2,1)}" +
    ".install-link.on{transform:none}" +
    ".install-link .vi-row{display:flex;gap:14px;align-items:center}" +
    ".install-link img{width:52px;height:52px;border-radius:12px;border:1px solid #e5e5e5;flex:none}" +
    ".install-link b{display:block;font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:22px;letter-spacing:-.01em;line-height:1.1}" +
    ".install-link small{color:#666;font-size:13px}" +
    ".install-link ol{margin:14px 0 0;padding:0;list-style:none;counter-reset:s}" +
    ".install-link li{counter-increment:s;display:flex;align-items:center;gap:10px;padding:7px 0;border-top:1px solid #eee}" +
    ".install-link li:before{content:counter(s);width:20px;height:20px;border-radius:50%;border:1px solid #000;font-size:11px;display:grid;place-items:center;flex:none}" +
    ".install-link svg{width:18px;height:18px;vertical-align:-3px}" +
    ".install-link .vi-x{position:absolute;top:10px;right:12px;border:0;background:none;font-size:22px;line-height:1;color:#999;padding:6px;cursor:pointer}" +
    ".install-link .vi-btn{margin-top:14px;width:100%;height:46px;border:0;border-radius:12px;background:#000;color:#fff;font-size:15px;cursor:pointer}" +
    ".install-link .vi-arrow{text-align:center;margin-top:8px;font-size:12px;color:#666}";

  var shareIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>';
  var plusIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>';

  function head(sub) {
    return '<button class="vi-x" aria-label="닫기">×</button>' +
      '<div class="vi-row"><img src="./apple-touch-icon.png" alt=""><div><b>Vollik</b><small>' + sub + "</small></div></div>";
  }

  function build() {
    var el = document.createElement("div");
    el.className = "install-link";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", "Vollik 홈 화면에 추가");
    if (isIOSSafari) {
      el.innerHTML = head("홈 화면에 앱으로 추가하기") +
        "<ol><li><span>하단의 공유 버튼 " + shareIcon + " 을 누르세요</span></li>" +
        "<li><span>'홈 화면에 추가' " + plusIcon + " 를 고르세요</span></li>" +
        "<li><span>오른쪽 위 '추가'를 누르면 완료</span></li></ol>" +
        '<div class="vi-arrow">↓ 공유 버튼은 화면 아래에 있어요</div>';
    } else if (isIOSOther) {
      el.innerHTML = head("Safari에서 열면 앱으로 추가할 수 있어요") +
        "<ol><li><span>메뉴에서 'Safari로 열기' 또는 '기본 브라우저로 열기'</span></li>" +
        "<li><span>Safari에서 공유 " + shareIcon + " → '홈 화면에 추가'</span></li></ol>";
    } else if (deferred) {
      el.innerHTML = head("홈 화면에 앱으로 설치하기") + '<button class="vi-btn">설치</button>';
    } else {
      return null;
    }
    document.body.appendChild(el);
    el.querySelector(".vi-x").onclick = function () { close(el, true); };
    var btn = el.querySelector(".vi-btn");
    if (btn) btn.onclick = function () {
      deferred.prompt();
      deferred.userChoice.then(function () { close(el, false); });
    };
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add("on"); }); });
    return el;
  }

  function close(el, remember) {
    el.classList.remove("on");
    setTimeout(function () { el.remove(); }, 500);
    if (remember) { try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {} }
  }

  function start() {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    if (isIOS) setTimeout(build, 2500);
  }

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    setTimeout(build, 1500);
  });
  window.addEventListener("appinstalled", function () {
    var el = document.querySelector(".install-link");
    if (el) close(el, false);
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
