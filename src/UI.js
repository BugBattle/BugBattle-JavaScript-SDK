export const applyBugbattleBaseCSS = () => {
  const colorStyleSheet = `
    .bugbattle--feedback-dialog-container input, .bugbattle--feedback-dialog-container label {
      margin: 0;
      padding: 0;
      border: none;
      background-color: #fff;
    }
    
    .bugbattle--feedback-button {
      padding: 0px;
      margin: 0px;
      position: fixed;
      top: calc(50% - 58px);
      right: 0px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      cursor: pointer;
      background-color: #398cfe;
      color: #fff;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
      z-index: 916777260;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
    }
    
    .bugbattle--feedback-button:hover {
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    }
    
    .bugbattle--feedback-button-inner {
      position: relative;
      width: 38px;
      height: 116px;
      padding: 0px;
      margin: 0px;
      position: relative;
    }
    
    .bugbattle--feedback-button-inner-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(-90deg);
      background: none;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
    }
    
    .bugbattle--feedback-dialog-container {
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100vw;
      height: 100vh;
      height: -webkit-fill-available;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 916777282;
      background-color: rgba(105, 117, 129, 0.5);
    }
    
    .bugbattle--feedback-dialog {
      width: 90%;
      max-width: 400px;
      background-color: #fff;
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3);
      border-radius: 12px;
      box-sizing: border-box;
      position: relative;
    }
    
    .bugbattle--feedback-dialog-header {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 25px;
      padding-top: 35px;
      box-sizing: border-box;
      flex-direction: column;
    }
    
    .bugbattle--feedback-dialog-header-button-cancel {
      width: 26px;
      height: 26px;
      cursor: pointer;
      position: absolute;
      top: -13px;
      right: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #398cfe;
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
      border-radius: 100%;
    }
    
    .bugbattle--feedback-dialog-header-button-cancel svg {
      width: 10px;
      height: 10px;
    }
    
    .bugbattle--feedback-dialog-header-button-cancel:hover svg {
      opacity: 0.6;
    }
    
    .bugbattle--feedback-dialog-header-title {
      font-weight: normal;
      text-align: center;
      color: #192027;
      font-size: 16px;
      text-align: center;
      margin-top: 35px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    
    .bugbattle--feedback-dialog-header-logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .bugbattle--feedback-dialog-header-logo svg, .bugbattle--feedback-dialog-header-logo img {
      height: 40px;
      width: 100%;
      max-width: 65%;
      object-fit: contain;
      text-align: center;
    }

    .bugbattle--feedback-types {
      margin: 40px 0px;
      border-top: 1px solid #e9f1fd;
    }
    
    .bugbattle--feedback-type {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 20px;
      cursor: pointer;
      border-bottom: 1px solid #e9f1fd;
    }

    .bugbattle--feedback-type:hover {
      background-color: #e9f1fd;
    }

    .bugbattle--feedback-type-icon {
      width: 44px;
      height: 44px;
      background-color: #398cfe;
      border-radius: 44px;
      margin-right: 20px;
      padding: 10px;
      box-sizing: border-box;
    }

    .bugbattle--feedback-type-text {
      flex-grow: 1;
    }
    
    .bugbattle--feedback-type-title {
      font-weight: bold;
      font-size: 16px;
    }

    .bugbattle--feedback-elementtitle {
      font-size: 15px;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    
    .bugbattle--feedback-type-description {
      color: #666;
      font-size: 15px;
    }
    
    .bugbattle--feedback-dialog-info-text {
      color: #666;
      font-size: 16px;
      padding-top: 20px;
      text-align: center;
    }
    
    .bugbattle--feedback-dialog-success {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 50px;
      display: none;
    }
    
    .bugbattle--feedback-dialog-success svg {
      width: 30px;
      height: auto;
    }
    
    .bugbattle--feedback-dialog-loading {
      display: none;
    }
    
    .bugbattle--feedback-dialog-body {
      display: block;
    }
    
    .bugbattle--feedback-inputgroup {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      padding: 0px 32px;
      flex-direction: column;
    }
    
    .bugbattle--feedback-inputgroup.bugbattle--feedback-showafter {
      display: none;
    }

    .bugbattle--feedback-inputgroup-button {
      display: flex;
      align-items: center;
    }
    
    .bugbattle--feedback-inputgroup-text {
      color: #192027;
      font-size: 16px;
      font-weight: normal;
    }
    
    .bugbattle--feedback-inputgroup-label {
      padding: 0px;
      margin-bottom: 5px;
      color: #192027;
      font-size: 14px;
      font-weight: 600;
    }
    
    .bugbattle--feedback-send-button {
      background-color: #398cfe;
      border-radius: 8px;
      box-sizing: border-box;
      padding: 12px 19px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      width: auto;
      margin-top: 5px;
      margin-bottom: 20px;
      cursor: pointer;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
    }
    
    .bugbattle--feedback-send-button:hover {
      opacity: 0.9;
    }
    
    .bugbattle--feedback-inputgroup>input, .bugbattle--feedback-inputgroup input {
      width: auto;
      padding: 15px 12px;
      font-size: 15px;
      outline: none;
      border: 1px solid #e9f1fd;
      background-color: #fafbfd;
      border-radius: 8px;
      box-sizing: border-box;
      color: #000;
    }

    input.bugbattle--feedback-required {
      border: 1px solid #da0e07;
      background-color: #da0e0710;
    }

    .bugbattle--feedback-emojigroup {
      --normal: #eceaf3;
      --normal-shadow: #d9d8e3;
      --normal-mouth: #9795a4;
      --normal-eye: #595861;
      --active: #f8da69;
      --active-shadow: #f4b555;
      --active-mouth: #f05136;
      --active-eye: #313036;
      --active-tear: #76b5e7;
      --active-shadow-angry: #e94f1d;
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    
    .bugbattle--feedback-required .bugbattle--feedback-emojigroup {
      --normal: #fde6e6;
      --normal-shadow: #ffbdbd;
    }

    .bugbattle--feedback-emojigroup li {
      position: relative;
      border-radius: 50%;
      background: var(--sb, var(--normal));
      box-shadow: inset 3px -3px 4px var(--sh, var(--normal-shadow));
      transition: background 0.4s, box-shadow 0.4s, transform 0.3s;
      -webkit-tap-highlight-color: transparent;
    }
    
    .bugbattle--feedback-emojigroup li:not(:last-child) {
      margin-right: 10px;
    }
    
    .bugbattle--feedback-emojigroup li div {
      width: 45px;
      height: 45px;
      position: relative;
      transform: perspective(240px) translateZ(4px);
    }
    
    .bugbattle--feedback-emojigroup li div svg,
    .bugbattle--feedback-emojigroup li div:before,
    .bugbattle--feedback-emojigroup li div:after {
      display: block;
      position: absolute;
      left: var(--l, 9px);
      top: var(--t, 13px);
      width: var(--w, 8px);
      height: var(--h, 2px);
      transform: rotate(var(--r, 0deg)) scale(var(--sc, 1)) translateZ(0);
    }
    
    .bugbattle--feedback-emojigroup li div svg {
      fill: none;
      stroke: var(--s);
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: stroke 0.4s;
    }
    
    .bugbattle--feedback-emojigroup li div svg.bugbattle--feedback-eye {
      --s: var(--e, var(--normal-eye));
      --t: 17px;
      --w: 10px;
      --h: 4px;
    }
    
    .bugbattle--feedback-emojigroup li div svg.bugbattle--feedback-eye.bugbattle--feedback-right {
      --l: 28px;
    }
    
    .bugbattle--feedback-emojigroup li div svg.bugbattle--feedback-mouth {
      --s: var(--m, var(--normal-mouth));
      --l: 14px;
      --t: 25px;
      --w: 18px;
      --h: 10px;
    }
    
    .bugbattle--feedback-emojigroup li div:before,
    .bugbattle--feedback-emojigroup li div:after {
      content: '';
      z-index: var(--zi, 1);
      border-radius: var(--br, 1px);
      background: var(--b, var(--e, var(--normal-eye)));
      transition: background 0.4s;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry {
      --step-1-rx: -24deg;
      --step-1-ry: 20deg;
      --step-2-rx: -24deg;
      --step-2-ry: -20deg;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry div:before {
      --r: 20deg;
      top: 12px;
      left: 11px;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry div:after {
      --l: 23px;
      --r: -20deg;
      top: 12px;
      left: 28px;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry div svg.bugbattle--feedback-eye {
      stroke-dasharray: 4.55;
      stroke-dashoffset: 8.15;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry:hover,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry.bugbattle--feedback-active {
      animation: angry 1s linear;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry:hover div:before,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry.bugbattle--feedback-active div:before {
      --middle-y: -2px;
      --middle-r: 22deg;
      animation: toggle 0.8s linear forwards;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry:hover div:after,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-angry.bugbattle--feedback-active div:after {
      --middle-y: 1px;
      --middle-r: -18deg;
      animation: toggle 0.8s linear forwards;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad {
      --step-1-rx: 20deg;
      --step-1-ry: -12deg;
      --step-2-rx: -18deg;
      --step-2-ry: 14deg;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad div:before,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad div:after {
      --b: var(--active-tear);
      --sc: 0;
      --w: 5px;
      --h: 5px;
      --t: 15px;
      --br: 50%;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad div:after {
      --l: 25px;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad div svg.bugbattle--feedback-eye {
      --t: 16px;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad div svg.bugbattle--feedback-mouth {
      --t: 25px;
      stroke-dasharray: 9.5;
      stroke-dashoffset: 33.25;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad:hover div:before,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad:hover div:after,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad.bugbattle--feedback-active div:before,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-sad.bugbattle--feedback-active div:after {
      animation: tear 0.6s linear forwards;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-ok {
      --step-1-rx: 4deg;
      --step-1-ry: -22deg;
      --step-1-rz: 6deg;
      --step-2-rx: 4deg;
      --step-2-ry: 22deg;
      --step-2-rz: -6deg;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-ok div:before {
      --l: 15px;
      --t: 15px;
      --h: 4px;
      --w: 4px;
      --br: 50%;
      box-shadow: 12px 0 0 var(--e, var(--normal-eye));
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-ok div:after {
      --l: 16px;
      --t: 27px;
      --w: 14px;
      --h: 2px;
      --br: 1px;
      --b: var(--m, var(--normal-mouth));
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-ok:hover div:before,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-ok.bugbattle--feedback-active div:before {
      --middle-s-y: 0.35;
      animation: toggle 0.2s linear forwards;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-ok:hover div:after,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-ok.bugbattle--feedback-active div:after {
      --middle-s-x: 0.5;
      animation: toggle 0.7s linear forwards;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-good {
      --step-1-rx: -14deg;
      --step-1-rz: 10deg;
      --step-2-rx: 10deg;
      --step-2-rz: -8deg;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-good div:before {
      --b: var(--m, var(--normal-mouth));
      --w: 5px;
      --h: 5px;
      --br: 50%;
      --t: 22px;
      --zi: 0;
      opacity: 0.5;
      box-shadow: 16px 0 0 var(--b);
      filter: blur(2px);
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-good div:after {
      --sc: 0;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-good div svg.bugbattle--feedback-eye {
      --t: 15px;
      --sc: -1;
      stroke-dasharray: 4.55;
      stroke-dashoffset: 8.15;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-good div svg.bugbattle--feedback-mouth {
      --t: 22px;
      --sc: -1;
      stroke-dasharray: 13.3;
      stroke-dashoffset: 23.75;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-good:hover div svg.bugbattle--feedback-mouth,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-good.bugbattle--feedback-active div svg.bugbattle--feedback-mouth {
      --middle-y: 1px;
      --middle-s: -1;
      animation: toggle 0.8s linear forwards;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-happy div {
      --step-1-rx: 18deg;
      --step-1-ry: 24deg;
      --step-2-rx: 18deg;
      --step-2-ry: -24deg;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-happy div:before {
      --sc: 0;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-happy div:after {
      --b: var(--m, var(--normal-mouth));
      --l: 14px;
      --t: 25px;
      --w: 18px;
      --h: 8px;
      --br: 0 0 8px 8px;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-happy div svg.bugbattle--feedback-eye {
      --t: 14px;
      --sc: -1;
    }
    
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-happy:hover div:after,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-happy.bugbattle--feedback-active div:after {
      --middle-s-x: 0.95;
      --middle-s-y: 0.75;
      animation: toggle 0.8s linear forwards;
    }
    
    .bugbattle--feedback-emojigroup li:not(.active) {
      cursor: pointer;
    }
    
    .bugbattle--feedback-emojigroup li:not(.active):active {
      transform: scale(0.925);
    }
    
    .bugbattle--feedback-emojigroup li:hover,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-active {
      --sb: var(--active);
      --sh: var(--active-shadow);
      --m: var(--active-mouth);
      --e: var(--active-eye);
    }
    
    .bugbattle--feedback-emojigroup li:hover div,
    .bugbattle--feedback-emojigroup li.bugbattle--feedback-active div {
      animation: shake 0.8s linear forwards;
    }
    
    @keyframes shake {
      30% {
        transform: perspective(240px) rotateX(var(--step-1-rx, 0deg)) rotateY(var(--step-1-ry, 0deg)) rotateZ(var(--step-1-rz, 0deg)) translateZ(10px);
      }
      60% {
        transform: perspective(240px) rotateX(var(--step-2-rx, 0deg)) rotateY(var(--step-2-ry, 0deg)) rotateZ(var(--step-2-rz, 0deg)) translateZ(10px);
      }
      100% {
        transform: perspective(240px) translateZ(4px);
      }
    }
    
    @keyframes tear {
      0% {
        opacity: 0;
        transform: translateY(-2px) scale(0) translateZ(0);
      }
      50% {
        transform: translateY(12px) scale(0.6, 1.2) translateZ(0);
      }
      20%,
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translateY(24px) translateX(4px) rotateZ(-30deg) scale(0.7, 1.1) translateZ(0);
      }
    }
    
    @keyframes toggle {
      50% {
        transform: translateY(var(--middle-y, 0)) scale(var(--middle-s-x, var(--middle-s, 1)), var(--middle-s-y, var(--middle-s, 1))) rotate(var(--middle-r, 0deg));
      }
    }
    
    @keyframes angry {
      40% {
        background: var(--active);
      }
      45% {
        box-shadow: inset 3px -3px 4px var(--active-shadow), inset 0 8px 10px var(--active-shadow-angry);
      }
    }
    
    .bugbattle--feedback-inputgroup textarea {
      outline: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      resize: none;
      width: auto;
      padding: 12px;
      font-size: 15px;
      line-height: 17px;
      margin: 0px;
      box-sizing: border-box;
      border: 1px solid #e9f1fd;
      background-color: #fafbfd;
      border-radius: 8px;
      box-sizing: border-box;
      color: #000;
    }
    
    .bugbattle--feedback-inputgroup--privacy-policy {
      padding: 8px 32px;
      font-size: 14px;
      flex-direction: row;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
    }
    
    .bugbattle--feedback-inputgroup--privacy-policy-label {
      cursor: pointer;
      align-items: center;
      margin-left: 10px;
    }
    
    .bugbattle--feedback-inputgroup--privacy-policy a {
      color: #398cfe;
      margin-top: 0px;
      margin-bottom: 0px;
      display: inline;
    }
    
    .bugbattle--feedback-inputgroup--privacy-policy input {
      width: auto;
      border: none;
      font-size: 15px;
      outline: none;
    }
    
    .bugbattle-feedback-importance {
      margin: 20px;
      margin-bottom: -8px;
      font-weight: bold;
      color: #222426;
      font-size: 14px;
    }
    
    .bugbattle--feedback-image {
      position: relative;
    }
    
    .bugbattle--feedback-poweredbycontainer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
      margin-bottom: 25px;
      cursor: pointer;
    }
    
    .bugbattle--feedback-poweredbycontainer span {
      font-weight: normal;
      font-size: 14px;
      color: #aaa;
    }
    
    .bugbattle--feedback-poweredbycontainer svg {
      height: 18px;
      width: auto;
      margin-left: 5px;
    }
    
    .bugbattle--edit-button {
      position: absolute;
      top: calc(50% - 25px);
      left: 100px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.45);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .bugbattle--feedback-dialog-loading {
      padding: 20px;
      display: none;
      justify-content: center;
      align-items: center;
    }

    .bugbattle--progress-ring__circle {
      transition: 0.35s stroke-dashoffset;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
    
    .bugbattle--edit-button svg {
      width: 60%;
    }
    
    .bugbattle-screenshot-editor-container {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      height: -webkit-fill-available;
      z-index: 916777263;
    }
    
    .bugbattle-screenshot-editor-container-inner {
      position: relative;
      width: 100vw;
      height: 100vh;
      height: -webkit-fill-available;
    }
    
    .bugbattle-screenshot-editor-canvas {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      height: -webkit-fill-available;
      cursor: crosshair;
      z-index: 916777267;
    }
    
    .bugbattle-screenshot-editor-borderlayer {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      height: -webkit-fill-available;
      border: 12px solid #398cfe;
      cursor: crosshair;
      z-index: 916777272;
      box-sizing: border-box;
    }
    
    .bugbattle-screenshot-editor-dot {
      position: absolute;
      top: -16px;
      left: -16px;
      width: 16px;
      height: 16px;
      background-color: #398cfe;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 100%;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
      z-index: 916777270;
      box-sizing: border-box;
    }
    
    .bugbattle-screenshot-editor-drag-info {
      position: absolute;
      top: -100px;
      left: -100px;
      background-color: #398cfe;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      box-sizing: border-box;
      padding: 8px 10px;
      font-size: 16px;
      color: #fff;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
      z-index: 916777271;
      min-width: 270px;
      text-align: center;
    }
    
    .bugbattle-screenshot-editor-rectangle {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 0px;
      height: 0px;
      border: 5px solid #398cfe;
      box-sizing: border-box;
      z-index: 916777269;
    }
    
    @media only screen and (max-width: 600px) {
      .bugbattle--feedback-dialog {
        width: 100%;
        border-radius: 0px;
        box-sizing: border-box;
        max-width: inherit;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .bugbattle--feedback-dialog-header {
        border-radius: 0px;
      }
      .bugbattle--feedback-button-inner {
        width: 32px;
        height: 100px;
      }
      .bugbattle--feedback-button-inner-text {
        font-size: 15px;
      }
      .bugbattle-screenshot-editor-drag-info {
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
      }
      .bugbattle-screenshot-editor-borderlayer {
        border-width: 5px;
      }  
    }
    `;

  const node = document.createElement("style");
  node.innerHTML = colorStyleSheet;
  document.body.appendChild(node);
};

export const setColor = (color) => {
  const colorStyleSheet = `
    .bugbattle--feedback-button {
        background-color: ${color};
    }
    .bugbattle--feedback-dialog-header-button {
        color: ${color};
    }
    .bugbattle-screenshot-editor-borderlayer {
        border-color: ${color};
    }
    .bugbattle-screenshot-editor-dot {
      background-color: ${color};
    }
    .bugbattle-screenshot-editor-rectangle {
      border-color: ${color};
    }
    .bugbattle--feedback-send-button {
      background-color: ${color};
    }
    .bugbattle--feedback-inputgroup--privacy-policy a {
      color: ${color};
    }
    .bugbattle-screenshot-editor-drag-info {
      background-color: ${color};
    }
    .bugbattle-double-bounce1,
    .bugbattle-double-bounce2 {
      background-color: ${color};
    }
    .bugbattle--feedback-dialog-header-button-cancel {
      background-color: ${color};
    }
    .bugbattle--feedback-type-icon {
      background-color: ${color};
    }
    .bugbattle--feedback-type:hover {
      background-color: ${color}10;
      border-bottom: 1px solid ${color}10;
    }
    `;

  const node = document.createElement("style");
  node.innerHTML = colorStyleSheet;
  document.body.appendChild(node);
};
