import"./modulepreload-polyfill.c7c6310f.js";const a=new Set;function o(){const e=Math.random().toString(36).substring(2);return a.has(e)?o():(a.add(e),`css-${e}`)}function l(e){const n=document.createElement("style");n.innerHTML=e,document.head.appendChild(n)}function d(e,...n){const t=o(),c=e.map((r,m)=>{var s;return r+((s=n[m])!=null?s:"")}).join("").replace(/&/g,`.${t}`);return l(c),t}const g="/magic/assets/mana.939f84be.png",p=d`
      & {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        gap: 1rem;
      }

      & > .icon {
        box-sizing: border-box;
        width: 4rem;
        height: 4rem;
        border-radius: .5rem;
        background-color: #fff;
        position: relative;
        bottom: 12.5%;
        user-select: none;
        box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
      }

      & > .icon > img {
        user-select: none;
        max-width: 100%;
      }

      & > .title {
        font-size: 1.875rem;
        line-height: 2.25rem;
        letter-spacing: .025em;
        font-weight: 700;
        color: #000;
        user-select: none;
        position: relative;
        bottom: 12.5%;
      }
    `,u=`
        <div class="${p}" >
            <span class="icon">
                <img src="${g}" alt="mana">
            </span>
            <span class="title">Magic</span>
        </div>
    `,i=document.createElement("div");i.innerHTML=u;document.body.appendChild(i);