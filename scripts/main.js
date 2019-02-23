$( document ).ready(function() {
        //Get All Users

    $(".page").click(function(){
        var currentPage = this.innerHTML;
        getColors();
    });
    // function getUsers(page){
    //     $.ajax({
    //         url: "https://reqres.in/api/users?page="+page,
    //         type: "GET",
    //         success: function(users){
    //             $("#main-container").empty();
    //             var currentUsers = users.data;
    //             for (var i=0; i < currentUsers.length; i++){
    //                 $("#main-container").append("<div class=\"card\">\n" +
    //                 "            <img src=\""+currentUsers[i].avatar+"\" class=\"card-img-top\" alt=\"...\">\n" +
    //                 "            <div class=\"card-body\">\n" +
    //                 "                <p class=\"card-text\">"+currentUsers[i].first_name+"</p>\n" +
    //                 "                <p class=\"card-text\">"+currentUsers[i].last_name+"</p>\n" +
    //                 "            </div>\n" +
    //                 "        </div>");
    //             }
               
    //         }
    //     });
    // }
    function getColors(){
        $.ajax({
            url: "https://reqres.in/api/unknown",
            type: "GET",
            success: function(users){
                $("#main-container").empty();
                var currentUsers = users.data;
                for(var i=0; i<currentUsers.length; i++){
                    $("#main-container").append("<div class='cont' style='background-color:"+currentUsers[i].color+"'></div>" +
                        "<div class='cont'>Name: "+currentUsers[i].name+"</div>" +
                        "<div class='cont'>"+currentUsers[i].pantone_value+"</div>" +
                        "<div class='cont'>"+currentUsers[i].year+"</div>" )
                }

            }
        });
    }
});




