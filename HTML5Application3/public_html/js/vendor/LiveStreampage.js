/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        
        $("#containerpoo").highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        var currentime = 0;
                        var totalcrimes = 0;
                        var timevars = ['7:00', '7:05', '7:10', '7:20', '7:24', '7:30', '7:40', '7:42', '7:45', '7:49', '8:00', '8:15', '8:16', '8:30', '8:45', '8:55', '8:56', '9:00',
                                        '9:20'];
                        var crimes = [1,2,1,2,1,2,1,1,1,1,1,2,2,1,1,1,1,
                                      3,1];
                    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            currentime = (currentime + 1) % 19;
                            totalcrimes = (totalcrimes + 1) % 19;
                            var x = timevars[currentime], // current time
                                y = crimes[totalcrimes];
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Simulation for High Priority Crimes per Minute'
            },
            xAxis: {
                categories:  ['7:00', '7:05', '7:10', '7:20', '7:24', '7:30', '7:40', '7:42', '7:45', '7:49', '8:00', '8:15', '8:16', '8:30', '8:45', '8:55', '8:56', '9:00',
                                        '9:20']
            },
            yAxis: {
                title: {
                    text: 'Crimes at each Minute'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
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
                        timevars =  ['7:00', '7:05', '7:10', '7:20', '7:24', '7:30', '7:40', '7:42', '7:45', '7:49', '8:00', '8:15', '8:16', '8:30', '8:45', '8:55', '8:56', '9:00',
                                        '9:20'];
                        var crimes = [1,2,1,2,1,2,1,1,1,1,1,2,2,1,1,1,1,
                                      3,1];

                    for (i = 0; i <= 18; i += 1) {
                        data.push({
                            x : timevars[currentime],
                            y: crimes[totalcrimes]
                        });
                        currentime = (currentime + 1) % 19;
                        totalcrimes = (totalcrimes + 1) % 19;
                    }
                    return data;
                }())
            }]
        });
    });
});





