function isMobileWidth(){return window.innerWidth<550}function isMobileBrowser(){var o=/mobi/gi;return o.test(window.navigator.userAgent)}!function(){"use strict";function o(){isMobileWidth()?window.open(d.mobile,"_blank"):(w=w||$(c.body),h=h||$(c.modal),h.length||t(),setTimeout(i,u),e(),w.addClass(r))}function t(){var o=(window.innerWidth,window.innerHeight),t=Math.round(o*s),i=Math.round(t*f);h=$('<div class="modal" />'),m=$('<a href="#" id="close-video">close video</a>'),b=$('<iframe frameborder="0" allowfullscreen></iframe>'),b.attr("width",i),b.attr("height",t),h.html(b),h.append(m),w.append(h)}function i(){h.on("click",l),m.on("click",l)}function n(){h.off("click",l),m.off("click",l)}function e(){b=b||h.find(c.iframe),b.attr("src",d.desktop),h.css("top",window.scrollY)}function l(o){o.preventDefault(),h.fadeOut(function(){n(),a(),w.removeClass(r)})}function a(){b.attr("src","")}var c={body:"body",modal:".modal",iframe:"iframe"},r="show-modal",d={desktop:"https://www.youtube.com/embed/jzKjtUTWcwc?autoplay=1",mobile:"https://www.youtube.com/watch?v=jzKjtUTWcwc"},u=250,s=.8,f=16/9,w=null,m=null,h=null,b=null;$.fn.videoModal=function(){return $(this).on("click",o),this}}();