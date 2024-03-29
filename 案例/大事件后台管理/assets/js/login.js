$(function(){
    $('#link_reg').on('click',function(){
        $('.login-box').hide();
        $('.reg-box').show();
    });
    $('#link_login').on('click',function(){
        $('.reg-box').hide();
        $('.login-box').show();
    });

    let form = layui.form;
    let layer = layui.layer;
    form.verify({
        pwd:[/^[\S]{6,12}$/,
        '密码必须为6到12位，且不能出现空格']
    });

   $('#form_reg').on('submit',function(e){
        e.preventDefault();
        let data = {username:$('#form_reg [name=username]').val(),password:$('#form_reg [name=password]').val()};
        $.post('/api/reguser',data,
        function(res){
            if(res.status !== 0){
                return layer.msg(res.message);
            }

            layer.msg('注册成功，请登录');
            $('#link_login').click();
        })
   })

   $('#form_login').on('submit',function(e){
        e.preventDefault();
        $.ajax({
            url:'/api/login',
            method:'POST',
            data:$(this).serialize(),
            success:function(res){
                if(res.status !== 0){
                    return layer.msg(res.message);
                }
                layer.msg('登录成功');
                localStorage.setItem('token',res.token);
                console.log(res.token);
                location.href = '/index.html';
            }
        })
   })
})