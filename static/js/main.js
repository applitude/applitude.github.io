/**
 * Created by fabiomadeira on 25/02/15.
 */
// jQuery for page scrolling feature
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    })
});
document.addEventListener('DOMContentLoaded', function(){
    $("#norwegian-link").click(function(){
        if(window.location.href.indexOf("/no/") !== -1){
            return;
        }
        var newUrl = window.location.href.replace("\/en\/", "\/no\/");
        if(newUrl === window.location.href){
            newUrl = "/";
        }
        $.ajax({
            type: "HEAD",
            url: newUrl,
            success: function(){
                window.location.href = newUrl;
            },
            error: function(){
                window.location.href = "/";
            }
        })
    })
    $("#english-link").click(function(){
        if(window.location.href.indexOf("/en/") !== -1){
            return;
        }
        var newUrl = window.location.href.replace("\/no\/", "\/en\/");
        if(newUrl === window.location.href){
            newUrl = "/en/";
        }
        $.ajax({
            type: "HEAD",
            url: newUrl,
            success: function(){
                window.location.href = newUrl;
            },
            error: function(){
                window.location.href = "/en/";
            }
        })
    })
});
