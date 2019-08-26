$('#logout').on('click', function() {
    // alert(confirm('你确定要退出么'));
    if (confirm('你确定要退出么')) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function() {
                location.href = 'login.html';
            }
        })
    }
})