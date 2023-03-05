(function(){
  $(".monitor .tabs").on("click","a",function(){
    
    $(this).addClass('active').siblings('a').removeClass('active');

    $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
  });
})();

(function(){
  let myChart = echarts.init(document.querySelector('.pie'));
  let option = {
    tooltip:{
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:[
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: '点位统计',
        type: 'pie',
        radius: ["10%", "80%"],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" }
        ],
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 6,
          // 连接到文字的线长度
          length2: 8
        }
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize',function () {  
    myChart.resize();
  })
})();

(function () {  
  let myChart = echarts.init(document.querySelector('.bar'));
  
  let option = {
    tooltip:{
      trigger:'item'
    },
    // 修改线性渐变色方式 1
  color: new echarts.graphic.LinearGradient(
  // (x1,y2) 点到点 (x2,y2) 之间进行渐变
    0, 0, 0, 1,
  [
       { offset: 0, color: '#00fffb' }, // 0 起始颜色
       { offset: 1, color: '#0061ce' }  // 1 结束颜色
 ]
  ),
  grid : {
    left:'0',
    right:'3%',
    bottom:'3%',
    top:'3%',
    containLabel:true,
    show:true
  },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

  myChart.setOption(option);
})();