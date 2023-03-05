$(function(){
   
    resetui()

    $('#btnSend').on('click',function () {
        let text = $('#ipt').val().trim()
        if(text.length<=0){
            return $('#ipt').val('')
        }

        $('#talk_list').append('<li class="right_word"><img src="img/person01.png" /> <span>' + text +'</span></li>')
        $('#ipt').val('')
        resetui()
        getMsg(text)
    })


  })


  function getMsg(text) {
    $.ajax({
      method: 'GET',
      url: 'http://api.qingyunke.com/api.php',
      data: {
        key:'free',
        msg:text
      },
      success: function(res) {
        // console.log(res)
        if (res.message === 'success') {
          // 接收聊天消息
          var msg = res.data.info.text
          $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
          // 重置滚动条的位置
          resetui()
          // 调用 getVoice 函数，把文本转化为语音
          
        }
      }
    })
  }