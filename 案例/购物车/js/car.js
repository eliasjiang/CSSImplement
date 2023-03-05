$(function(){
    $('.checkall').change(function(){
        // $(this).prop('checked');
        $('.j-checkbox,.checkall').prop('checked',$(this).prop('checked'));
    })
    $('.j-checkbox').change(function(){
        if($('.j-checkbox:checked').length===$('.j-checkbox').length){
            $('.checkall').prop('checked',true);
        }else{
            $('.checkall').prop('checked',false);
        }
    })
    $('.increment').click(function(){
        let n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        let p = $(this).parent().parent().siblings('.p-price').html();
        p = p.substr(1);
        
        $(this).parent().parent().siblings('.p-sum').html('￥'+ (p*n).toFixed(2) );
        getSum();
    })
    $('.decrement').click(function(){
        let n = $(this).siblings('.itxt').val();
        if(n>=1){
            n--;
        }
        
        $(this).siblings('.itxt').val(n);
        let p = $(this).parent().parent().siblings('.p-price').html();
        p = p.substr(1);
        
        $(this).parent().parent().siblings('.p-sum').html('￥'+ (p*n).toFixed(2) );
        getSum();
    })

    $('.itxt').change(function () {  
        let n = $(this).val();
        let p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥'+(p*n).toFixed(2));
        getSum();
    })
    getSum();
    function getSum(){
        let count = 0;
        let money = 0;

        $('.itxt').each(function(i,ele){
            count+=parseInt($(ele).val());
        })
        $('.amount-sum em').text(count);

        $('.p-sum').each(function(i,ele){
            money += parseFloat($(ele).text().substr(1));
            $('.price-sum em').text('￥'+money.toFixed(2));
        })
    }
})