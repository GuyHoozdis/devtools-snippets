//
// Inject jQuery and LoDash into current tab.
//
// This can be installed as a Chrome DevTools Snippet or, with a little modification,
// as a Bookmarklet.
//
// Wishlist:
//  * Use console.assert to verify that libraries were loaded.
//  * Prompt for library versions.  Is that really a good idea?  Maybe just a pain.
//  * Are there other libraries that would be useful?
//  * Refactor the duplicated logic into a method.


(function() {
    var jQueryVersion = '3.1.1';
    var loDashVersion = '4.17.4';

    var jq = document.createElement('script');
    jq.src = `https://cdnjs.cloudflare.com/ajax/libs/jquery/${jQueryVersion}/jquery.min.js`;
    jq.async = false;
    document.getElementsByTagName('head')[0].appendChild(jq);

    var ld = document.createElement('script');
    ld.src = `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/${loDashVersion}/lodash.min.js`;
    document.getElementsByTagName('head')[0].appendChild(ld);

    var defer = function() {
        if (window.jQuery) {
            jQuery.noConflict();
            $ = jQuery;
        } else {
            setTimeout(function() { defer() }, 50);
        }
    };
    defer();

    console.info(`jQuery-${jQueryVersion} ($) and lodash-${loDashVersion} (_) should now be available in your console!`);
    console.info('See https://api.jquery.com and https://lodash.com/docs for documentation.');
})();
