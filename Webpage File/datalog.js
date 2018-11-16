//const countertext = document.getElementById('counter-text');
let hrc =0;
var lastarray;
var lastarray1;
var yes1;
//var hrc=0;
var count;
    var yes3;
    var yes2;

window.localStorage
//localStorage.clear();

$(function() {
    var x_values = [];
    var  y_values = [];
    var yes;
    
    var switch1 = true;
   
    $.get('data.php', function(data) {
        console.log(data);
        data = data.split('/');
        for (var i in data)
        {
            if (switch1 == true)
            {
                x_values.push(parseFloat(data[i]));
              //yes = parseFloat(data[9]) ;
                switch1 = false;
            }
            else
            {
                y_values.push(parseFloat(data[i]));
                switch1 = true;
            }
        }
    
        x_values.pop();

setInterval(function(){
        var yes3 = localStorage.getItem("last");
        yes1 = y_values.length;
        yes3 =parseFloat(yes3);
   // window.alert(yes3);    
        if(yes3)
        {yes3 = yes3 +220;
            if(yes3>=yes1)
                {
                yes3=yes1-250;
                }
            else{yes3 = yes3;}
        }
        else{yes3 = 88;}
        hrc = 0;
        for (i = yes3; i<=yes3+220; i += 8) {
            count= parseFloat(y_values[i]);
          
            if(count > 160){
              //window.alert(count);
            hrc  +=1;
            }
            else{}
            }
            hrc = hrc * 6 ;
            localStorage.setItem("heart", hrc.toString());
//countertext.textContent = hrc;
//window.alert(hrc);
}, 10000);

        $('#chart').highcharts({
            chart : {
                type : 'spline',
                animation: Highcharts.svg,
                marginRight:10,
                events: {
                    load: function (){
                        var series = this.series[0];
                        var lastarray = localStorage.getItem("lastarray");
                        var yes3 = localStorage.getItem("last");
                            yes1 = y_values.length ;
     
                       lastarray1 =parseFloat(lastarray);
                            yes3 = parseFloat(yes3);

                      if(lastarray1){}
else
{lastarray1=88;}
                        if(yes1 != lastarray1)   
                        {
                                              
                        yes2 = lastarray1;
                        //window.alert(yes2);
                        }
                        else 
                        {
                            //window.alert(yes3);
                            if (yes3)
                            {yes2 = lastarray1-220;}
                            else
                            {yes2 = 88;}
                            
                        
                        
                            
                
                        }
                        localStorage.setItem("input",yes2.toString());
                        setInterval(function() {
                            var x = x_values;
yes1 = y_values.length ;
//yes2 = parseFloat(localStorage.getItem("input"));
                           yes2 = yes2 +1;
                      if (yes2>yes1)
                      {yes2 = yes1-220;}
                      
                      else{}
                     // window.alert(yes2);
                            if (yes2 != yes1)
                                { yes= parseFloat(y_values[yes2]);
                                localStorage.setItem("last",yes2.toString());
                           //     localStorage.setItem("lastarray", yes1.toString());
                                }
                                else
                                  { 
                                   // yes2 = lastarray1-220;
                                    localStorage.setItem("lastarray", yes1.toString());
window.alert('refreshing database');
                                    window.location.reload(1);
                                   //localStorage.clear();
                                    
                                                                   }
                                y= yes;
                               
                               //y = y_values;
                              //y= Math.random();
                            series.addPoint([x, y], true, true);

                        }, 100);
                    }
                }
            },
            credits:{
                enabled: false,
            },
            exporting:{
                    enabled: false,
            },
            title: {
                text: null
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                visible: {
                    enabled: false
                },
            },
            yAxis : {
                title : {
                    text : ''
                },
                labels : {
                    enabled: false
                }
            },
            tooltip : {
                crosshairs : true,
                shared : true,
                valueSuffix : ''
            },
            plotOptions : {
                spline : {
                    marker : {
                        radius : 4,
                        lineColor : '#666666',
                        lineWidth : 1,
                        enabled: false
                    }
                }
            },
            series : [{
                showInLegend: false,
                name : null,
                data : (function (){
                    
                    var data = [],
                        time = x_values, i;
                        
                    for (i = -499; i<=0; i += 2) {
                        data.push({
                            x: time,
                            y: y_values,
                           //y: time,
                        })
                    }
                    return data;
                }())
            }]
        });
    });
   
});

