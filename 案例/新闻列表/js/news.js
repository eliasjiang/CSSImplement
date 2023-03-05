


$(function(){
    function padZero(n) {  
        if(n<10) return '0'+n;
        else return n;
    }
    template.defaults.imports.dateFormat = function (dtStr) {  
        let dt = new Date(dtStr);
        let y = dt.getFullYear();
        let m = padZero(dt.getMonth()+1);
        let d =padZero(dt.getDate());

        let hh = padZero(dt.getHours());
        let mm = padZero(dt.getMinutes());
        let ss = padZero(dt.getSeconds());

        return y + '-' + m + '-' + d+' '+hh+':'+mm+':'+ss;
    };
    function getCommendList() {
        $.get('http://www.liulongbin.top:3006/api/news',function (res) {  
            if(res.status!==200) {return alert('get data Error');}
            for(let i=0;i<res.data.length;i++){
                res.data[i].tags = res.data[i].tags.split(',');
            }
            let htmlStr = template('tpl-news',res);
            
            $('#news-list').html(htmlStr);
        })
    }
    getCommendList();
})

