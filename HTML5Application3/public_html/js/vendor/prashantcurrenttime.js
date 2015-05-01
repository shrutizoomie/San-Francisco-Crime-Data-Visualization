/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */$(function () {
    var currenttime = new Date(); 
    var timevars = [];
    var times = "";
    for(var i = 1; i <= 1000; i++)
    {
        var randHour = Math.floor((Math.random() * 23) + 1);
        var randMin = Math.floor((Math.random() * 59) + 1);
        timevars[i] = ((randHour < 10) ? "0" + randHour : randHour);
        timevars[i] += ":";
        timevars[i] += (randMin < 10 ? "0" + randMin : randMin);
    }
    timevars.sort();
    var crimes = [];
    for(var i = 1; i <= 1000; i++)
    {
        crimes[i] = Math.floor((Math.random() * 10) + 1);
        times += timevars[i]+ " => " + crimes[i] + "<br />";
    }

    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        
        $('#containerpoo').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        var currentime = 0;
                        var totalcrimes = 0;
                        
                        document.getElementById('displayTimes').innerHTML = times;
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            currentime = (currentime + 1) % 999;
                            totalcrimes = (totalcrimes + 1) % 999;
                            var curtime = currenttime.getHours() < 10 ? "0" + currenttime.getHours() : currenttime.getHours();
                            curtime += ":";
                            curtime += currenttime.getMinutes() < 10 ? "0" + currenttime.getMinutes() : currenttime.getMinutes();
                            
                            document.getElementById('tempDisplay').innerHTML = curtime + " " + timevars[currentime] + " " + currentime + "<br />";
                            //if(curtime == timevars[currentime])
                            {
                                //alert("Here");
                                var x = timevars[currentime], // current time
                                y = crimes[totalcrimes];
                                series.addPoint([x, y], true, true);
                            }
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Simulation for High Priority Crimes per Minute'
            },
            xAxis: {
                categories:  timevars
            },
            yAxis: {
                title: {
                    text: 'Crimes at each Minute'
                },
                plotLines: [{
                    value: 0,
                    width: 100,
                    color: '#808080'
                }]
            },
            tooltip: {
                /*formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }*/
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Crimes',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        i,
                        currentime = 0,
                        totalcrimes = 0;

                    for (i = 0; i < 1000; i += 1) {
                        //alert(timevars[currentime]);
                        data.push({
                            x : timevars[currentime],
                            y: crimes[totalcrimes]
                        });
                        currentime = (currentime + 1) % 1000;
                        totalcrimes = (totalcrimes + 1) % 1000;
                    } 
                    return data;
                }())
            }]
        });
    });
});


