$(document).ready(() => {
$("#registerBtn").click(()=> {
    $.post("/admin/signUp", {
        admin_email: $("#inputEmail").val(),
        password: $("#inputPassword").val(),
        verificationCode: $("#inputVerification").val()
    }, (data, status) => {
        alert(JSON.stringify(data));
    })
}
})