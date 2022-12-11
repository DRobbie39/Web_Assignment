function validForm(){

    var name = document.form.name;
    var email = document.form.email;
    var subject = document.form.subject;
    var message = document.form.message;

    //Kiểm tra điều kiện cho trường name
    if(name.value == ""){
        name.nextElementSibling.style.display = "block";
        name.style.border = "1px solid #f00";
        return false;
    }else{
        name.nextElementSibling.style.display = "none";
        name.style.border = "1px solid transparent";
    }

    //Kiểm tra điều kiện cho trường email
    if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || email.value == ""){
        email.nextElementSibling.style.display = "block";
        email.style.border = "1px solid #f00";
        return false;
    }else{
        email.nextElementSibling.style.display = "none";
        email.style.border = "1px solid transparent";
    }

    //Kiểm tra điều kiện cho trường subject
    if(subject.value == ""){
        subject.nextElementSibling.style.display = "block";
        subject.style.border = "1px solid #f00";
        return false;
    }else{
        subject.nextElementSibling.style.display = "none";
        subject.style.border = "1px solid transparent";
    }

    //Kiểm tra điều kiện cho trường message
    if(message.value == ""){
        message.nextElementSibling.style.display = "block";
        message.style.border = "1px solid #f00";
        return false;
    }else{
        message.nextElementSibling.style.display = "none";
        message.style.border = "1px solid transparent";
    }

    //Gửi thông báo khi thành công
    if(validForm != false){
        alert("Successfully sent")
    }
}

