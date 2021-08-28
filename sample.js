function postForm(value) {
 
    var form = document.createElement('form');
    var request = document.createElement('input');
 
    form.method = 'POST';
    form.action = 'http://192.168.11.18/apps/test.html';
 
    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;
 
    form.appendChild(request);
    document.body.appendChild(form);
 
    form.submit();

    postForm("Test")
 
}