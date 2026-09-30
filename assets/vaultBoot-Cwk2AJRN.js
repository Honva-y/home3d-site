import{i as e,l as t,n,o as r,u as i}from"./vault-D8KS5xl9.js";var a=`h3d-vault-session`,o=e=>`${e.slots.view.salt}|${e.slots.edit.salt}`;function s(){try{return JSON.parse(localStorage.getItem(a)||`null`)}catch{return null}}function c(){try{localStorage.removeItem(a)}catch{}i.remembered=!1}async function l(){let e=await fetch(`./vault.json?t=${Date.now()}`,{cache:`no-store`});if(!e.ok)throw Error(`读取数据失败（HTTP ${e.status}）`);let t=await e.text();try{return JSON.parse(t)}catch{throw Error(`找不到数据文件 vault.json，网站可能还没有用 npm run deploy 发布数据`)}}function u(e,t,n){return globalThis.__HOME3D_DATA__={base:t.payload.base,defaultScheme:t.payload.defaultScheme},Object.assign(i,{mode:t.mode,key:t.key,vault:e,remembered:n,repo:t.mode===`edit`?t.repo:null,token:t.mode===`edit`?t.token:null}),t.payload}async function d(e){let t=s();if(!t||t.id!==o(e))return null;try{let i=await r(t.k),a=await n(i,e.payload);return{mode:t.mode,key:i,token:t.token,repo:t.repo,payload:a}}catch{return c(),null}}function f(){let e=document.createElement(`div`);e.className=`h3d-lock`,e.innerHTML=`
    <form class="h3d-card" autocomplete="off">
      <div class="h3d-logo">⌂</div>
      <h1>我的家 · 3D</h1>
      <p class="h3d-sub">请输入访问密码</p>
      <input type="password" name="pw" placeholder="密码" autofocus />
      <label class="h3d-remember"><input type="checkbox" name="remember" /> 在这台设备上记住</label>
      <button type="submit">进入</button>
      <p class="h3d-err" aria-live="polite"></p>
      <p class="h3d-note">查看密码：只能浏览；编辑密码：可以修改并保存</p>
    </form>`;let t=document.createElement(`style`);return t.textContent=`
    .h3d-lock { position: fixed; inset: 0; display: grid; place-items: center; background: #16181c; z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif; color: #e8e8e8; padding: 16px; }
    .h3d-card { width: min(340px, 100%); background: #1f2227; border: 1px solid rgba(255,255,255,.08); border-radius: 14px;
      padding: 28px 24px 20px; box-shadow: 0 20px 60px rgba(0,0,0,.45); display: flex; flex-direction: column; gap: 12px; }
    .h3d-logo { width: 44px; height: 44px; border-radius: 12px; background: #4c8dff; display: grid; place-items: center; font-size: 24px; color: #fff; }
    .h3d-card h1 { margin: 4px 0 0; font-size: 18px; font-weight: 600; }
    .h3d-sub { margin: 0 0 4px; color: #9aa0a6; font-size: 13px; }
    .h3d-card input[type=password] { height: 40px; padding: 0 12px; border-radius: 9px; border: 1px solid #3a3e45; background: #16181c;
      color: #e8e8e8; font-size: 16px; outline: none; }
    .h3d-card input[type=password]:focus { border-color: #4c8dff; }
    .h3d-remember { display: flex; align-items: center; gap: 8px; color: #9aa0a6; font-size: 13px; }
    .h3d-card button { height: 40px; border: 0; border-radius: 9px; background: #4c8dff; color: #fff; font-size: 15px; cursor: pointer; }
    .h3d-card button:disabled { opacity: .6; cursor: progress; }
    .h3d-err { min-height: 18px; margin: 0; color: #ff7b72; font-size: 13px; }
    .h3d-note { margin: 0; color: #6b7178; font-size: 12px; }`,document.head.appendChild(t),document.body.appendChild(e),{root:e,style:t,form:e.querySelector(`form`)}}async function p(){let n;try{n=await l()}catch(e){throw document.body.innerHTML=`<p style="color:#e8e8e8;font:14px sans-serif;padding:24px">无法加载数据：${e.message}</p>`,e}let r=await d(n);if(r)return u(n,r,!0);let i=f(),s=i.form.querySelector(`input[name=pw]`),c=i.form.querySelector(`.h3d-err`),p=i.form.querySelector(`button`);return s.focus(),new Promise(r=>{i.form.addEventListener(`submit`,async l=>{if(l.preventDefault(),!s.value)return;p.disabled=!0,c.textContent=``,p.textContent=`正在解锁…`;let d=null;try{d=await t(n,s.value)}catch(e){c.textContent=e.message}if(p.disabled=!1,p.textContent=`进入`,!d){c.textContent||=`密码不正确`,s.select();return}let f=i.form.querySelector(`input[name=remember]`).checked;if(f)try{localStorage.setItem(a,JSON.stringify({id:o(n),mode:d.mode,k:await e(d.key),...d.mode===`edit`&&{token:d.token,repo:d.repo}}))}catch{}i.root.remove(),i.style.remove(),r(u(n,d,f))})})}function m(){c();try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);n?.startsWith(`home3d.`)&&e.push(n)}e.forEach(e=>localStorage.removeItem(e))}catch{}location.reload()}export{m as n,p as r,c as t};