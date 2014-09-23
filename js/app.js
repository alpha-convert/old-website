//Find User data json: http://www.reddit.com/user/{user}/about.json

$(document).ready(function(){


    $("#input").on("input", function() {
        var input = $("#input").val();
        if(input != ""){
            var url = "http://www.reddit.com/user/"+input+"/about.json";
            $.getJSON(url, function callback(data){
                var comment_karma = data.data.comment_karma;
                var link_karma = data.data.link_karma;
                var accountage = new Date( data.data.created_utc *1000);
                var readable_account_age = (accountage.toGMTString());

                $(".comment_karma_h2").text(comment_karma);
                $(".username_h2").text(input);
                $(".link_karma_h2").text(link_karma);
                $(".age_h2").text(readable_account_age);
            }).error(function(){
                $(".comment_karma_h2").text("");
                $(".username_h2").text("");
                $(".link_karma_h2").text("");
                $(".age_h2").text("");
            });
        } else {
            $(".comment_karma_h2").text("");
            $(".username_h2").text(input);
            $(".link_karma_h2").text("");
            $(".age_h2").text("");
        }
    });

});