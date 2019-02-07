$( document ).ready(function() {
   $("#button").click(function () {
       var user = {};
       user.username = $("#email").val();
       user.password =  $("#password2").val();
       $.ajax({
           method: "GET",
           url: "https://mainacademydemo1.azurewebsites.net/api/User/Login",
           data: user
       })
           .done(function( msg ) {
          console.log(msg);
           });
   });
   // RUSER REGISTER
    $("#register").click(function () {
        var globalObject={};
        let username = $("#username").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let addressLine1 = $("#addressLine1").val();
        let password = $("#password1").val();
        let conPassword = $("#confirmpassword").val();
        // let username = "khrystyna rymar";
        // let phone = "123-456-7890";
        // let email = "reyerry@hmai.yu";
        // let addressLine1 = "Bandery 33";
        // let password ="Kh2ertyu";

        
        validate(username, email, phone,addressLine1, password,conPassword);
        //var currentUser = JSON.stringify(globalObject.user);
        //\r currentPasword = JSON.stringify(globalObject.password);
        // url: 'superman',
        //     type: 'POST',
        //     data: jQuery.param({ field1: "hello", field2 : "hello2"}) ,
        //     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        //     success: function (response) {
        //     alert(response.status);
        // },
        // error: function () {
        //     alert("error");
        // }
        url: 'superman?' + jQuery.param({ f1: "hello1", f2 : "hello2"})

        $.ajax({
            method: "POST",
            url: "https://mainacademydemo1.azurewebsites.net/api/User/Register?" + jQuery.param({password:globalObject.password}),
            contentType: 'application/json; charset=UTF-8',
            data:JSON.stringify(globalObject.user),
        })
            .done(function (msg) {
                console.log(msg);
            });
        function validate(username, email, phone,addressLine1, password, conPassword){
            if(valPassword(password) &&  valNumber(phone) && confValidate (password, conPassword)){
                globalObject.user = {} ;
                globalObject.user.username = username;
                globalObject.user.email = email;
                globalObject.user.phone = phone;    
                globalObject.user.addressLine1 = addressLine1;
                globalObject.user.addressLine2 = addressLine1;
                
                globalObject.password = password;
                globalObject.conPassword = conPassword;
            } else{
                return false;
            }
        }
        function valPassword(pasw) {
            let patt = new RegExp("^(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{8,}$");
            let res = patt.test(pasw);
            if (res !==true){
                 $("#danger-pasword").text("Pasword should contain at least one figure and upper case letter");
            return true;
            } else{
                return false;
            }
        }

        function confValidate (password, conPassword) {
            if(password == conPassword) {
                $("#confirm-pasword").text("valid");
            }
            else {
                $("#confirm-pasword").text("invalid");
            }


        }

        function valNumber(phone){
            let patt = new RegExp(/^\d{3}-\d{3}-\d{4}$/);
            let res = patt.test(phone);
            if (res !==true){
                $("#phone-span").text("Your phone number is ivalid");
                return false;
            }
            return true;
        }
    });

    //Get All Users

    $("#allUsers").click(function(){
        $.ajax({
            method: "GET",
            url: "https://mainacademydemo1.azurewebsites.net/api/User",
           
        })
        .done(function( users ) {
            if(users === [] || users === null || users.length ===0){
                return;
            } else
            var tableBody = $("#usersTable");
            tableBody.empty();
            for(var i=0; i<users.length; i++){
                tableBody.append("<tr><td>" + users[i].username + "</td><td>"+
                    users[i].email+"</td><td>"+
                    users[i].phone+"</td><td><button class='adressBtn' id='"+users[i].addressLine1+"'>Show Adress</button></td></tr>");
            }
            var allButtons = $(".adressBtn");
            for(var j=0; j<allButtons.length; j++){
                allButtons[j].addEventListener("click", getBtn);
            }
            function getBtn(){
                alert (this.id);
            }
        });
    });
});

