
(() => {
  // ホームボタンを生成
  const homeButton = document.createElement("a");
  homeButton.href = "../index.html";
  homeButton.className = "common-home-button";
  homeButton.setAttribute("aria-label", "ホームに戻る");
  homeButton.title = "ホームに戻る";

  // SVGアイコンを埋め込み
  homeButton.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v12h14V9" />
      <path d="M9 21v-7h6v7" />
    </svg>
  `;

  // 共通スタイルを生成
  const style = document.createElement("style");
  style.textContent = `
    .common-home-button {
      position: fixed;
      top: max(16px, env(safe-area-inset-top));
      left: max(16px, env(safe-area-inset-left));
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      background: rgba(20, 27, 43, 0.9);
      color: #fff;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      transition: background 0.2s, transform 0.2s;
    }

    .common-home-button:hover {
      background: rgba(50, 65, 90, 0.95);
      transform: translateY(-2px);
    }

    .common-home-button:active {
      transform: translateY(0);
    }

    .common-home-button svg {
      display: block;
    }
  `;

  // ページに追加
  document.head.append(style);
  document.body.append(homeButton);
})();