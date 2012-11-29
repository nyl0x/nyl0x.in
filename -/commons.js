var loadEvent = function () {
    // First, load the header and footer.
    var header, footer;
    header = document.getElementsByClassName('common-header')[0];
    footer = document.getElementsByClassName('common-footer')[0];
    // string inject our divs because i'm fucking lazy
    header.innerHTML =  
    '<div class="common-header-top"><h1>nyl0x</h1></div>'+
    '<div class="common-header-bottom" hpos="left"><a href="http://nyl0x.com/">Main Site&nbsp;&nbsp;'+
        '<span class="common-header-sub">nyl0x.com</span></a></div>'+
    '<div class="common-header-bottom" hpos="right"><a href="http://nyl0x.me/">Project Site&nbsp;&nbsp;'+
        '<span class="common-header-sub">nyl0x.me</span></a></div>';
    footer.innerHTML =
    '&copy; 2012 nyl0x<br>All code unless otherwise stated is Public Domain. Read LICENSE in any '+
    'downloaded package for copyright information as per that package. '+
    'I disclaim all copyright on texts unless otherwise stated. Tutorial works are licensed under the '+
    '<a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons BY-NC-SA</a> license.';
};

// bind events
window.onload = loadEvent();
