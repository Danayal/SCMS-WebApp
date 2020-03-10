$(document).ready(() => {
    console.log("I am there");
    $("#registerBtn").click((e) => {
        $.post("/admin/signUp", {
            admin_email: $("#inputEmail").val(),
            password: $("#inputPassword").val(),
            verificationCode: $("#inputVerification").val()
        }, (data, status) => {
            alert(JSON.stringify(data));
        })
    });

    $("#loginBtn").click(() => {
        console.log("login clicked");
        $.post("/admin/login", {
            admin_email: $("#inputEmailSignIn").val(),
            password: $("#inputPasswordSignIn").val()
        }, (data, status) => {
            if(data == "Login successful"){
                window.location.href = '/index.html'
            }else{
                alert(data);
            }
            
        })
    })

})