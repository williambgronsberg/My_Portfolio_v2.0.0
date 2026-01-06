<div id="wbg-bot-host"></div>

<script>
(function() {
  const host   = document.getElementById('wbg-bot-host');
  const shadow = host.attachShadow({ mode: 'open' });

  shadow.innerHTML = `
    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      #wbg-fab {
        position: fixed;
        bottom: 28px;
        left: 28px;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: #fff;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 0 1px rgba(255,255,255,0.12), 0 4px 24px rgba(0,0,0,0.6);
        transition: transform 0.2s, box-shadow 0.2s, opacity 0.25s, left 0.25s;
        z-index: 99999;
      }
      #wbg-fab:hover {
        transform: scale(1.07);
        box-shadow: 0 0 0 2px rgba(255,255,255,0.3), 0 6px 30px rgba(0,0,0,0.7);
      }
      #wbg-fab.hidden { left: -80px; opacity: 0; pointer-events: none; }
      #wbg-fab svg { transition: transform 0.3s ease; }
      #wbg-fab.open svg { transform: rotate(45deg); }

      #wbg-window {
        position: fixed;
        bottom: 28px;
        left: 92px;
        width: 350px;
        max-height: 500px;
        background: #111;
        border: 1px solid #222;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 12px 50px rgba(0,0,0,0.7);
        overflow: hidden;
        transform: scale(0.95);
        transform-origin: bottom left;
        opacity: 0;
        pointer-events: none;
        transition: transform 0.22s ease, opacity 0.22s ease;
        z-index: 99998;
        font-family: 'Courier New', monospace;
      }
      #wbg-window.open {
        transform: scale(1);
        opacity: 1;
        pointer-events: all;
      }
      #wbg-window.fullscreen {
        bottom: 0; left: 0; right: 0;
        width: 100%; max-height: 100vh; height: 100vh;
        border-radius: 0;
        transform: none !important;
        opacity: 1 !important;
        pointer-events: all !important;
      }

      .wbg-header {
        padding: 12px 14px;
        border-bottom: 1px solid #222;
        display: flex;
        align-items: center;
        gap: 8px;
        background: #0a0a0a;
        flex-shrink: 0;
      }
      .wbg-dots { display: flex; gap: 6px; align-items: center; }
      .wbg-dot {
        width: 12px; height: 12px; border-radius: 50%;
        cursor: pointer; position: relative;
        transition: filter 0.15s; flex-shrink: 0;
      }
      .wbg-dot:hover { filter: brightness(1.2); }
      .wbg-dot.close-dot { background: #ff5f57; }
      .wbg-dot.min-dot   { background: #ffbd2e; }
      .wbg-dot.full-dot  { background: #28c840; }
      .wbg-dot::after {
        content: '';
        position: absolute; inset: 0;
        display: flex; align-items: center; justify-content: center;
        opacity: 0; transition: opacity 0.15s;
        font-size: 9px; line-height: 12px;
        text-align: center; color: rgba(0,0,0,0.65); font-weight: 900;
      }
      .wbg-dot.close-dot::after { content: '✕'; }
      .wbg-dot.min-dot::after   { content: '−'; }
      .wbg-dot.full-dot::after  { content: '⤢'; }
      .wbg-dots:hover .wbg-dot::after { opacity: 1; }

      .wbg-title {
        font-size: 11px; color: #e0e0e0;
        letter-spacing: 0.08em; margin-left: 4px;
      }
      .wbg-model-label {
        margin-left: auto; font-size: 10px;
        color: #bbb; letter-spacing: 0.06em;
      }

      .wbg-cfg {
        padding: 6px 12px; border-bottom: 1px solid #1a1a1a;
        display: flex; align-items: center;
        gap: 6px; font-size: 10px;
        color: #bbb; letter-spacing: 0.05em; flex-shrink: 0;
      }
      .wbg-cfg input {
        all: unset;
        border-bottom: 1px solid #555;
        color: #ddd; font-family: 'Courier New', monospace;
        font-size: 10px; padding: 1px 4px; width: 110px;
      }
      .wbg-cfg input:focus { border-bottom-color: #aaa; color: #fff; }
      .wbg-cfg input.model-input { width: 80px; }

      #wbg-msgs {
        flex: 1; overflow-y: auto;
        padding: 14px 12px; display: flex;
        flex-direction: column; gap: 12px; scroll-behavior: smooth;
      }
      #wbg-msgs::-webkit-scrollbar { width: 3px; }
      #wbg-msgs::-webkit-scrollbar-thumb { background: #222; }

      .wbg-msg { display: flex; flex-direction: column; gap: 2px; }
      .wbg-msg.user { align-items: flex-end; }
      .wbg-msg.bot  { align-items: flex-start; }

      .wbg-label {
        font-size: 9px; color: #777;
        letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 2px;
      }
      .wbg-msg.user .wbg-label { color: #999; }

      .wbg-bubble {
        padding: 8px 12px; border-radius: 2px;
        font-size: 12px; line-height: 1.6;
        word-break: break-word; white-space: pre-wrap; max-width: 72%;
      }
      .wbg-msg.user .wbg-bubble { background: #fff; color: #000; }
      .wbg-msg.bot  .wbg-bubble { background: #1a1a1a; color: #eee; border-left: 2px solid #333; }
      .wbg-bubble code {
        background: #0a0a0a; color: #ddd;
        padding: 1px 5px; border-radius: 2px;
        font-family: 'Courier New', monospace; font-size: 11px;
      }
      .wbg-bubble pre {
        background: #0a0a0a; border-left: 2px solid #2a2a2a;
        padding: 10px; margin-top: 8px;
        overflow-x: auto; border-radius: 2px;
      }
      .wbg-bubble pre code { background: none; padding: 0; color: #00cc33; }

      .wbg-typing .wbg-bubble { display: flex; gap: 5px; align-items: center; padding: 12px; }
      .wbg-dot-anim {
        width: 5px; height: 5px; background: #aaa; border-radius: 50%;
        animation: wbg-bounce 1.2s infinite;
      }
      .wbg-dot-anim:nth-child(2) { animation-delay: 0.2s; }
      .wbg-dot-anim:nth-child(3) { animation-delay: 0.4s; }
      @keyframes wbg-bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }

      .wbg-error {
        font-size: 11px; color: #ff4444;
        border-left: 2px solid #ff4444;
        padding: 6px 10px; background: #1a0000; border-radius: 2px;
      }
      .wbg-error code { color: #ff8888; background: none; }

      .wbg-input-row {
        padding: 10px 12px; border-top: 1px solid #1a1a1a;
        display: flex; gap: 8px; align-items: flex-end;
        background: #0a0a0a; flex-shrink: 0;
      }
      #wbg-input {
        all: unset;
        flex: 1; border-bottom: 1px solid #444;
        color: #eee; font-family: 'Courier New', monospace;
        font-size: 12px; resize: none;
        padding: 4px 0; max-height: 80px; line-height: 1.5;
        transition: border-color 0.2s;
      }
      #wbg-input:focus { border-bottom-color: #888; }
      #wbg-input::placeholder { color: #555; }

      #wbg-send {
        all: unset;
        background: #fff; border-radius: 2px;
        padding: 5px 10px; font-family: 'Courier New', monospace;
        font-size: 11px; color: #000; cursor: pointer;
        letter-spacing: 0.05em; transition: opacity 0.2s;
        height: 26px; display: flex; align-items: center;
      }
      #wbg-send:disabled { opacity: 0.3; cursor: not-allowed; }
      #wbg-send:not(:disabled):hover { opacity: 0.8; }

      .contact-link {
        all: unset;
        display: flex; align-items: center; gap: 8px;
        padding: 8px 12px; color: #ccc;
        border-bottom: 1px solid #222; font-size: 11px; cursor: pointer;
      }
      .contact-link:last-child { border-bottom: none; }
      .contact-link:hover { color: #fff; }
    </style>

    <button id="wbg-fab" title="Ask something">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </button>

    <div id="wbg-window">
      <div class="wbg-header">
        <div class="wbg-dots">
          <div class="wbg-dot close-dot" id="wbg-close"></div>
          <div class="wbg-dot min-dot"   id="wbg-min"></div>
          <div class="wbg-dot full-dot"  id="wbg-full"></div>
        </div>
        <span class="wbg-title">ask_bot — W.B.G</span>
        <span class="wbg-model-label" id="wbg-model-label">AI</span>
      </div>
      <div id="wbg-msgs"></div>
      <div class="wbg-input-row">
        <textarea id="wbg-input" rows="1" placeholder="> ask anything_"></textarea>
        <button id="wbg-send">send ↵</button>
      </div>
    </div>
  `;

  const fab     = shadow.getElementById('wbg-fab');
  const win     = shadow.getElementById('wbg-window');
  const msgs    = shadow.getElementById('wbg-msgs');
  const input   = shadow.getElementById('wbg-input');
  const sendBtn = shadow.getElementById('wbg-send');
  const modelInput = shadow.getElementById('wbg-model');

  modelInput.addEventListener('input', () => {
    shadow.getElementById('wbg-model-label').textContent = modelInput.value;
  });

  let open = false, streaming = false, history = [], isFullscreen = false;
  let inputHistory = [], inputHistoryIndex = -1;
  const API_HOST = 'https://untriumphantly-nonsiliceous-latosha.ngrok-free.dev';

  fab.addEventListener('click', () => {
    open = !open;
    fab.classList.toggle('open', open);
    win.classList.toggle('open', open);
    if (open && !msgs.children.length) addBot("Hey — ask me anything about William, his projects, or how to reach him.");
    if (open) setTimeout(() => input.focus(), 220);
  });

  shadow.getElementById('wbg-close').addEventListener('click', () => {
    open = false; isFullscreen = false;
    fab.classList.remove('open', 'hidden');
    win.classList.remove('open', 'fullscreen');
  });

  shadow.getElementById('wbg-full').addEventListener('click', () => {
    if (!isFullscreen) {
      isFullscreen = true;
      win.classList.add('fullscreen');
      fab.classList.add('hidden');
    }
  });

  shadow.getElementById('wbg-min').addEventListener('click', () => {
    if (isFullscreen) {
      isFullscreen = false;
      win.classList.remove('fullscreen');
      win.classList.add('open');
      fab.classList.remove('hidden');
    }
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 80) + 'px';
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); return; }
    if (e.key === 'ArrowUp' && input.value === '') {
      e.preventDefault();
      if (inputHistory.length === 0) return;
      inputHistoryIndex = inputHistoryIndex < inputHistory.length - 1 ? inputHistoryIndex + 1 : inputHistory.length - 1;
      input.value = inputHistory[inputHistoryIndex];
      input.dispatchEvent(new Event('input'));
    }
    if (e.key === 'ArrowDown' && inputHistoryIndex >= 0) {
      e.preventDefault();
      if (inputHistoryIndex <= 0) { inputHistoryIndex = -1; input.value = ''; input.dispatchEvent(new Event('input')); return; }
      inputHistoryIndex--;
      input.value = inputHistory[inputHistoryIndex];
      input.dispatchEvent(new Event('input'));
    }
  });
  sendBtn.addEventListener('click', send);

  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function md(text) {
    text = text.replace(/```(\w*)\n?([\s\S]*?)```/g, (_,l,c) =>
      `<pre><code>${escHtml(c.trim())}</code></pre>`);
    text = text.replace(/`([^`]+)`/g, (_,c) => `<code>${escHtml(c)}</code>`);
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\n/g, '<br>');
    return text;
  }

  function addBot(text) {
    const el = document.createElement('div');
    el.className = 'wbg-msg bot';
    el.innerHTML = `<span class="wbg-label">bot</span><div class="wbg-bubble">${md(text)}</div>`;
    msgs.appendChild(el); scroll();
  }

  function addUser(text) {
    const el = document.createElement('div');
    el.className = 'wbg-msg user';
    el.innerHTML = `<span class="wbg-label">you</span><div class="wbg-bubble">${escHtml(text)}</div>`;
    msgs.appendChild(el); scroll();
  }

  function addTyping() {
    const el = document.createElement('div');
    el.className = 'wbg-msg bot wbg-typing'; el.id = 'wbg-typing';
    el.innerHTML = `<span class="wbg-label">bot</span><div class="wbg-bubble"><span class="wbg-dot-anim"></span><span class="wbg-dot-anim"></span><span class="wbg-dot-anim"></span></div>`;
    msgs.appendChild(el); scroll();
  }

  function removeTyping() { shadow.getElementById('wbg-typing')?.remove(); }

  function addError(msg) {
    const el = document.createElement('div');
    el.className = 'wbg-msg bot';
    el.innerHTML = `<span class="wbg-label">error</span><div class="wbg-error">${msg}</div>`;
    msgs.appendChild(el); scroll();
  }

  function addContactCard() {
    const el = document.createElement('div');
    el.className = 'wbg-msg bot';
    el.innerHTML = `
      <span class="wbg-label">contact</span>
      <div class="wbg-bubble" style="padding:0;overflow:hidden;min-width:220px;">
        <a href="mailto:william.berge.gronsberg27@gmail.com" target="_blank" class="contact-link">✉ william.berge.gronsberg27@gmail.com</a>
        <a href="https://github.com/sneakyturtle270508/" target="_blank" class="contact-link">⌥ github.com/sneakyturtle270508</a>
        <a href="https://im24wil27051.imporsgrunn.no/" target="_blank" class="contact-link">◈ im24wil27051.imporsgrunn.no</a>
      </div>`;
    msgs.appendChild(el); scroll();
  }

  function scroll() { msgs.scrollTop = msgs.scrollHeight; }

  async function send() {
    const text = input.value.trim();
    if (!text || streaming) return;

    if (text.toLowerCase().includes('contact')) {
      inputHistory.unshift(text);
      inputHistoryIndex = -1;
      addUser(text);
      addContactCard();
      input.value = ''; input.style.height = 'auto';
      return;
    }

    addUser(text);
    history.push({ role:'user', content:text });
    input.value = ''; input.style.height = 'auto';
    streaming = true; sendBtn.disabled = true;
    addTyping();

    try {
      const res = await fetch(`${API_HOST}/chat`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ message: text })
      });

      if (!res.ok) throw new Error(`API error ${res.status}`);
      removeTyping();

      const responseText = await res.text();
      addBot(responseText);
      history.push({ role:'assistant', content: responseText });

    } catch(err) {
      removeTyping();
      addError(`Can't reach API. Make sure the server is running.`);
    } finally {
      streaming = false; sendBtn.disabled = false; input.focus();
    }
  }
})();
</script>