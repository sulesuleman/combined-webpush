var PromptClient = function(){

  var c = this;

  c.add_prompt_sdk_css = function(){
        var head = document.head;
        var styleElement1 = document.createElement('link');
        styleElement1.rel = 'stylesheet';
        styleElement1.type = 'text/css';
        styleElement1.href = "https://s3.amazonaws.com/dev.chirpyweb.com/prompt_component.css";
        head.appendChild(styleElement1);

        var head = document.head;
        var styleElement2 = document.createElement('link');
        styleElement2.rel = 'stylesheet';
        styleElement2.type = 'text/css';
        styleElement2.href = "https://s3.amazonaws.com/dev.chirpyweb.com/prompt_materialized.css";
        head.appendChild(styleElement2);
    }

  c.desktop = function(desktop_prompt_container, allow_func, deny_func, type) {
        switch (type) {
            case 'DO': //dialog-box
                 desktop_prompt_container.insertAdjacentHTML("afterbegin",`
                    <div id="chirpyweb-desktop-obj-0" class="chirpyweb-w-auto chirpyweb-mx-auto chirpyweb-px-md-0 chirpyweb-px-3">
                        <div class="chirpyweb-d-flex chirpyweb-flex-row chirpyweb-card chirpyweb-shadow chirpyweb-p-2" style="margin-top: 0px" >
                            <img style="width : 50px; height: 50px; margin-right: 15px" src="{{logo32}}"
                                alt="jambo" title="jambo" />
                            <div class="chirpyweb-description">
                                <h5 class="chirpyweb-mb-1">{{desktop_prompt.title}}</h5>
                                <p class="chirpyweb-text-muted mb-1">{{desktop_prompt.message}}</p>
                                <div class="chirpyweb-d-flex chirpyweb-flex-row chirpyweb-justify-content-end chirpyweb-align-items-center">
                                    <a class="chirpyweb-allow-btn btn-flat" style="color: blue !important; cursor: pointer!important;">{{desktop_prompt.allow_btn_text}}</a>
                                    <a class="chirpyweb-deny-btn btn-flat" style="color: #ff4081 !important;">{{desktop_prompt.deny_btn_text}}</a>
                                </div>
                            </div>
                        </div>
                    </div>`);

                 return;

            case 'CM': // central-mode
                desktop_prompt_container.insertAdjacentHTML("afterbegin",`
                <div id="chirpyweb-desktop-obj-1" class="chirpyweb-d-flex chirpyweb-justify-content-center chirpyweb-align-items-center chirpyweb-h-100 chirpyweb-w-100 chirpyweb-mx-auto chirpyweb-px-3">
                        <div class="chirpyweb-w-auto chirpyweb-d-flex chirpyweb-flex-row chirpyweb-card chirpyweb-shadow chirpyweb-p-2 chirpyweb-mx-auto">
                            <div class="chirpyweb-description">
                                <h4 class="chirpyweb-mb-1">{{desktop_prompt.title}}</h4>
                                <p class="chirpyweb-text-muted chirpyweb-mb-1">{{desktop_prompt.message}}</p>
                                <div class="chirpyweb-d-flex chirpyweb-flex-row chirpyweb-justify-content-end chirpyweb-align-items-center">
                                    <a class="chirpyweb-allow-btn btn-flat" style="color: blue !important; cursor: pointer!important;">{{desktop_prompt.allow_btn_text}}</a>
                                    <a class="chirpyweb-deny-btn btn-flat" style="color: #ff4081 !important;">{{desktop_prompt.deny_btn_text}}</a>
                                </div>
                            </div>
                        </div>
                    </div>`);
                return;
            case 'FS': // full-screen
                desktop_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-desktop-obj-2" style="background: #337ab7" class="chirpyweb-d-flex chirpyweb-justify-content-center chirpyweb-align-items-center chirpyweb-h-100 chirpyweb-w-100 chirpyweb-p-1 chirpyweb-d-flex chirpyweb-flex-row chirpyweb-card shadow">
                        <div class="chirpyweb-description chirpyweb-px-3 chirpyweb-mx-auto">
                            <h3 class="chirpyweb-mb-1 chirpyweb-text-white">{{desktop_prompt.title}}</h3>
                            <p class="chirpyweb-mb-2 chirpyweb-text-white">{{desktop_prompt.message}}</p>
                            <div class="chirpyweb-d-flex chirpyweb-flex-row chirpyweb-justify-content-center chirpyweb-align-items-center">

                                    <a class="chirpyweb-allow-btn waves-effect waves-light btn-small" style="margin-right: 10px; background: #d5d5d5 !important;">{{desktop_prompt.allow_btn_text}}</a>

                                    <a class="chirpyweb-deny-btn waves-effect waves-light btn-small" style="background: #fb4681 !important;">{{desktop_prompt.deny_btn_text}}</a>
                            </div>
                        </div>
                    </div>`);
                return
            case 'RS': // right side-bar
                desktop_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-desktop-obj-3" class="chirpyweb-pl-lg-0 chirpyweb-pl-5 chirpyweb-w-auto chirpyweb-ml-auto chirpyweb-h-100">
                        <div style="justify-content: center; margin-top: 0px" class="chirpyweb-h-100 chirpyweb-d-flex chirpyweb-flex-column chirpyweb-justify-content-center chirpyweb-align-items-center chirpyweb-card shadow">
                            <img style="width: 100px; height: 100px" src="{{logo32}}"
                                alt="jambo" title="jambo" />
                            <div class="chirpyweb-description chirpyweb-mt-4 chirpyweb-px-3 chirpyweb-p-2">
                                <h4 class="chirpyweb-mb-2">{{desktop_prompt.title}}</h4>
                                <p class="chirpyweb-text-muted mb-3">{{desktop_prompt.message}}</p>
                                <div style="justify-content: center"  class="chirpyweb-d-flex chirpyweb-flex-row chirpyweb-justify-content-center chirpyweb-align-items-center">
                                    <a class="chirpyweb-allow-btn btn-flat" style="color: blue !important; cursor: pointer!important;">{{desktop_prompt.allow_btn_text}}</a>
                                    <a class="chirpyweb-deny-btn btn-flat" style="color: #ff4081 !important;">{{desktop_prompt.deny_btn_text}}</a>
                                </div>
                            </div>
                        </div>
                    </div>`);
                return
            case 'SH': // Sticky header
                desktop_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-desktop-obj-4" style="background: #0d7bdb; margin-top: 0px" class="chirpyweb-sticky-header chirpyweb-w-100 chirpyweb-d-flex chirpyweb-flex-row chirpyweb-justify-content-between chirpyweb-card chirpyweb-align-items-center shadow chirpyweb-px-2 chirpyweb-py-3">
                        <img class="chirpyweb-mr-2" src="{{logo32}}" alt="jambo" title="jambo" />
                        <div class="chirpyweb-description">
                            <h3 class="chirpyweb-text-white chirpyweb-mb-2">{{desktop_prompt.title}}</h3>
                            <p class="chirpyweb-text-white chirpyweb-mb-1">{{desktop_prompt.message}}</p>
                        </div>
                        <div>
                            <a class="chirpyweb-allow-btn btn-flat" style="color: white !important; cursor: pointer!important;">{{desktop_prompt.allow_btn_text}}</a>
                            <a class="chirpyweb-deny-btn btn-flat" style="color: white !important;">{{desktop_prompt.deny_btn_text}}</a>
                        </div>
                    </div>`)
                return
            case 'SUB': // Side up box
                desktop_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-desktop-obj-5" class="chirpyweb-w-100 chirpyweb-h-100 chirpyweb-pl-3 chirpyweb-pl-md-5">
                        <div class="chirpyweb-slide-up chirpyweb-w-100 chirpyweb-h-100 chirpyweb-d-flex chirpyweb-flex-row chirpyweb-justify-content-end chirpyweb-align-items-end chirpyweb-pl-5">
                            <div style="background: #515047" class="chirpyweb-d-flex chirpyweb-flex-row chirpyweb-card shadow chirpyweb-p-2">
                                <img style="width: 50px;height: 50px;margin-right: 15px" src="{{logo32}}" alt="jambo" title="jambo" />
                                <div class="chirpyweb-description">
                                    <h5 class="chirpyweb-text-white chirpyweb-mb-2">{{desktop_prompt.title}}</h5>
                                    <p style="font-size: 13px" class="chirpyweb-text-white chirpyweb-mb-1">{{desktop_prompt.message}}</p>
                                    <div class="chirpyweb-d-flex chirpyweb-flex-row chirpyweb-justify-content-start chirpyweb-align-items-center">
                                        <a class="chirpyweb-allow-btn btn-flat" style="color: white !important; cursor: pointer!important;">{{desktop_prompt.allow_btn_text}}</a>
                                        <a class="chirpyweb-deny-btn btn-flat" style="color: white !important;">{{desktop_prompt.deny_btn_text}}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`);
                return

            case 'B': // Bell
                desktop_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-desktop-obj-6" class="chirpyweb-allow-btn chirpyweb-w-100 chirpyweb-h-100 chirpyweb-d-flex chirpyweb-justify-content-end chirpyweb-align-items-end chirpyweb-pb-3 chirpyweb-pr-3">
                    <img style="width: 70px; height: 70px" src="https://s3.amazonaws.com/dev.chirpyweb.com/alarm.png" alt="jambo" title="jambo" />
                </div>`);
                return

            case 'SB': // Side bar
                desktop_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-desktop-obj-7" class="chirpyweb-allow-btn chirpyweb-w-100 chirpyweb-h-100 chirpyweb-d-flex chirpyweb-flex-row chirpyweb-justify-content-end">
                    <div class="chirpyweb-sticky-content" id="iz-sticky-text" style="width: 130px; height: 30px; margin-right: -45px; margin-top: 30%; color: white; font-weight: 800; padding: 5px; background: rgb(18, 115, 219); transform: rotate(-90deg)">Get Notifications</div>
                </div>`);
                return

            default:
                return
        }
    }

  c.mobile = function(mobile_prompt_container, allow_func, deny_func, type) {
        for(let i=0; i<=6 ; i++) {
            var myobj = document.getElementById("chirpyweb-mobile-obj-" + i);
            if (myobj)
                myobj.remove();
        }
        switch (type) {
            case 'DO': // dialog-box
                mobile_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-mobile-obj-0" style="height: 230px;width: 100%;margin-left:auto; margin-top: auto" class="chirpyweb-user-list chirpyweb-d-flex chirpyweb-flex-row chirpyweb-card shadow">
                        <img style="width: 20%;height:80%;margin-right:20px" src="{{logo32}}" alt="jambo" title="jambo" />
                        <div class="chirpy-mobile-description chirpyweb-description">
                            <h1>{{mobile_prompt.title}}</h1>
                            <p class="chirpyweb-mobile-text chirpyweb-text-muted" style="font-size: 25px">{{mobile_prompt.message}}</p>
                            <ul style="justify-content: flex-end" class="chirpyweb-list-inline chirpyweb-d-flex chirpyweb-flex-row chirpyweb-jr-mbtn-list chirpyweb-mb-0">
                                <li><a class="chirpyweb-mobile-text chirpyweb-allow-btn btn-flat" style="font-size: 25px;color: blue !important; cursor: pointer!important;">{{mobile_prompt.allow_btn_text}}</a></li>
                                <li><a class="chirpyweb-mobile-text chirpyweb-deny-btn btn-flat" style="font-size: 25px; color: #ff4081 !important;">{{mobile_prompt.deny_btn_text}}</a></li>
                            </ul>
                        </div>
                    </div>`);
                return

            case 'CM': // Central Mode
                mobile_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-mobile-obj-1" style="height: 210px; width: 100%; margin-left: auto; margin-top: 50%" class="chirpyweb-user-list chirpyweb-d-flex chirpyweb-flex-row chirpyweb-card shadow">

                        <div class="chirpy-mobile-description chirpyweb-description">
                            <h1 style="font-size:25px;font-weight: 1000">{{mobile_prompt.title}}</h1>
                            <p style="width: 70%; font-size: 25px" class="chirpyweb-text-muted chirpyweb-mobile-p">{{mobile_prompt.message}}</p>
                            <ul style="justify-content: center" class="list-inline chirpyweb-d-flex chirpyweb-flex-row chirpyweb-jr-mbtn-list chirpyweb-mb-0">
                                <li><a class="chirpyweb-mobile-p chirpyweb-allow-btn btn-flat" style="font-size: 25px; color: blue !important; cursor: pointer!important;">{{mobile_prompt.allow_btn_text}}</a></li>
                                <li><a class="chirpyweb-mobile-p chirpyweb-deny-btn btn-flat" style="font-size: 25px; color: #ff4081 !important;">{{mobile_prompt.deny_btn_text}}</a></li>
                            </ul>
                        </div>
                    </div>`);
                return

            case 'FS': // full screen
                mobile_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-mobile-obj-2" style="background: #337ab7; height:100%; width: 100%; margin-left: auto ;align-items: center; padding: 15px, text-align: center" class="chirpyweb-user-list chirpyweb-d-flex chirpyweb-flex-row chirpyweb-card shadow">
                        <div class="chirpy-mobile-description chirpyweb-description">
                            <h1 style="text-align:center, color: white; font-size: 25px; font-weight: 1000">{{mobile_prompt.title}}</h1>
                            <p style="font-size: 25px; text-align:center, color: white">{{mobile_prompt.message}}</p>
                            <ul style="justify-content: center" class="list-inline chirpyweb-d-flex chirpyweb-flex-row chirpyweb-jr-mbtn-list chirpyweb-mb-0">

                                <li> <a class="chirpyweb-allow-btn waves-effect waves-light btn-small" style="font-size: 25px; margin-right: 10px; background: #d5d5d5 !important;">{{mobile_prompt.allow_btn_text}}</a></li>
                                <li><a class="chirpyweb-deny-btn waves-effect waves-light btn-small" style="font-size: 25px; background: #fb4681 !important;">{{mobile_prompt.deny_btn_text}}</a></li>
                            </ul>
                        </div>
                    </div>`);
                return

            case 'SH': // sticky header
               mobile_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-mobile-obj-3" style="background: #337ab7; height: 210px, width: 100%" class="chirpyweb-user-list chirpyweb-d-flex chirpyweb-flex-row chirpyweb-card shadow">
                        <img style="width: 20%; height: 80%; margin-right: 20px" src="{{logo32}}" alt="jambo" title="jambo" />
                        <div class="chirpy-mobile-description chirpyweb-description">
                            <h1 style="color: white">{{mobile_prompt.title}}</h1>
                            <p style=" font-size: 25px; font-size: 18px;color: white">{{mobile_prompt.message}}</p>
                            <ul style="justify-content: flex-end" class="list-inline chirpyweb-d-flex chirpyweb-flex-row chirpyweb-jr-mbtn-list chirpyweb-mb-0">
                                <li><a class="chirpyweb-allow-btn btn-flat" style="font-size: 25px; color: white !important; cursor: pointer!important;">{{mobile_prompt.allow_btn_text}}</a> </li>
                                <li><a class="chirpyweb-deny-btn btn-flat" style="font-size: 25px; color: white !important;">{{mobile_prompt.deny_btn_text}}</a></li>
                            </ul>
                        </div>
                    </div>`);
               return

            case 'SUB': // slide up box
                mobile_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-mobile-obj-4" style="background:#515047; height: 230px; width: 100%; margin-left: auto; margin-top: auto" class="chirpyweb-user-list chirpyweb-d-flex chirpyweb-flex-row chirpyweb-card shadow">
                        <img style="width: 20%; height: 80%; margin-right: 20px" src="{{logo32}}" alt="jambo" title="jambo" />
                        <div class="chirpy-mobile-description chirpyweb-description">
                            <h1 style="color: white">{{mobile_prompt.title}}</h1>
                            <p style="font-size: 25px;color: white">{{mobile_prompt.message}}</p>
                            <ul style="justify-content: flex-end" class="list-inline chirpyweb-d-flex chirpyweb-flex-row chirpyweb-jr-mbtn-list chirpyweb-mb-0">
                                 <li>><a class="chirpyweb-allow-btn btn-flat" style="font-size: 25px; color: white !important; cursor: pointer!important;">{{mobile_prompt.allow_btn_text}}</a></li>
                                <li> <a class="chirpyweb-deny-btn btn-flat" style="font-size: 25px; color: white !important;">{{mobile_prompt.deny_btn_text}}</a> </li>
                            </ul>
                        </div>
                    </div>`);
                return

            case 'B': // bell
                mobile_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-mobile-obj-5" class="chirpyweb-allow-btn chirpyweb-mobile-bell w-100 h-100 chirpyweb-d-flex justify-content-end align-items-end pb-3 pr-3">
                        <img style="width: 150px;height:150px" src="https://s3.amazonaws.com/dev.chirpyweb.com/alarm.png" alt="jambo" title="jambo" />
                    </div>`);
                return

            case 'SB': // sticky bar
                mobile_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-mobile-obj-6" style="width: 310px;margin-left:auto; margin-top:100%;margin-right: -115px;flex-direction: column"
                        class="chirpyweb-allow-btn chirpyweb-user-list chirpyweb-d-flex">
                        <div class="sticky-content" id="iz-sticky-text" style="color:white; font-size: 35px; font-weight: 800; padding: 10px; background: rgb(18, 115, 219); transform: rotate(-90deg)">Get
                        Notifications
                        </div>
                    </div>`);
                return

            default:
                return
        }
    }

  c.gdrp = function(gdpr_prompt_container, allow_func, deny_func, type) {
        for(let i=0; i<=1 ; i++) {
            var myobj = document.getElementById("chirpyweb-gdpr-obj-" + i);
            if (myobj)
                myobj.remove();
        }
        switch (type) {
            case 'SH': // Sticky Header
                gdpr_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-gdpr-obj-0" id="sticky-header" class="chirpyweb-sticky-header chirpyweb-w-100 chirpyweb-h-100 chirpyweb-d-flex chirpyweb-flex-row chirpyweb-align-items-start">
                    <div class="chirpyweb-d-flex chirpyweb-flex-column chirpyweb-flex-lg-row chirpyweb-justify-content-between chirpyweb-align-items-center chirpyweb-px-4" style="width: 100%; height: 50px; background-color: #383b75">
                        <p class="chirpyweb-text-white chirpyweb-mb-0">
                            {{gdpr_prompt.title}} {{gdpr_prompt.message}}                        </p>
                        <div class="chirpyweb-d-flex chirpyweb-flex-row chirpyweb-align-items-center">
                            <a class="chirpyweb-allow-btn btn-flat" style="color: white !important; cursor: pointer!important;">{{gdpr_prompt.allow_btn_text}}</a>
                            <a class="chirpyweb-deny-btn btn-flat" style="color: white !important;">{{gdpr_prompt.deny_btn_text}}</a>
                        </div>
                    </div>
                </div>`);
                return

            case 'SF': // Sticky Footer
                gdpr_prompt_container.insertAdjacentHTML("afterbegin", `
                <div id="chirpyweb-gdpr-obj-1" class="chirpyweb-sticky-header chirpyweb-w-100 chirpyweb-h-100 chirpyweb-d-flex chirpyweb-flex-row chirpyweb-align-items-end">
                    <div class="chirpyweb-d-flex chirpyweb-flex-column chirpyweb-flex-lg-row chirpyweb-justify-content-between chirpyweb-align-items-center chirpyweb-px-4" style="width: 100%; height: 50px; background-color: #383b75">
                        <p class="chirpyweb-text-white chirpyweb-mb-0">
                            {{gdpr_prompt.title}} {{gdpr_prompt.message}}
                        </p>
                        <div class="chirpyweb-d-flex chirpyweb-flex-row chirpyweb-align-items-center">
                            <a class="chirpyweb-allow-btn btn-flat" style="color: white !important; cursor: pointer!important;">{{gdpr_prompt.allow_btn_text}}</a>
                            <a class="chirpyweb-deny-btn btn-flat" style="color: white !important;">{{gdpr_prompt.deny_btn_text}}</a>
                        </div>
                    </div>
                </div>`);
                return

            default:
                return

        }
    }

}

