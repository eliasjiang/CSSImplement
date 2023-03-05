function getCommendList(){
    $.ajax({
        method:'GET',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        data:{},
        success:function(res){
            if(res.status !== 200) return alert('Fail');
            let rows = [];
            
            $.each(res.data,function(i,item){
                let str = '<li class="list-group-item"><span class="badge" style="background-color: blue;">评论时间：'+ item.time +'</span><span class="badge" style="background-color:pink">评论人:'+ item.username+'</span>'+item.content+'</li>';
                rows.push(str);

            })
            $('#cmt-list').empty().append(rows.join(''));
        }
        
    })
}

getCommendList();

$(function () {  
    $('#formAddcmt').submit(function (e) {  
        e.preventDefault();
        let data = $(this).serialize();
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function (res) {  
            if(res.status !== 201){
                alert('Fail');
            }
            getCommendList();
            $('#formAddcmt')[0].reset();
        })
        
    })
})