$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#containerpoo2').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        var currentime = 0;
                        var totalcrimes = 0;
                        var timevars = ['9:01', '9:02', '9:03', '9:04', '9:05', '9:06', '9:07', '9:08', '9:09', '9:10', '9:11', '9:12', '9:13', '9:14', '9:15', '9:16', '9:17', '9:18',
                                       '9:19'];
                        var crimes = [1,2,1,5,4,2,3,1,1,1,1,2,2,1,1,3,1,
                                      3,4];
                    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            currentime = (currentime + 1) % 19;
                            totalcrimes = (totalcrimes + 1) % 19;
                            var x = timevars[currentime], // current time
                                y = crimes[totalcrimes];
                            series.addPoint([x, y], true, true);
                        }, 1500);
                    }
                }
            },
            title: {
                text: 'Real time Crime Report | Low Risk'
            },
            xAxis: {
                categories:  ['9:01', '9:02', '9:03', '9:04', '9:05', '9:06', '9:07', '9:08', '9:09', '9:10', '9:11', '9:12', '9:13', '9:14', '9:15', '9:16', '9:17', '9:18',
                                       '9:19']
            },
            yAxis: {
                title: {
                    text: 'Crimes '
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
                        timevars =  ['9:01', '9:02', '9:03', '9:04', '9:05', '9:06', '9:07', '9:08', '9:09', '9:10', '9:11', '9:12', '9:13', '9:14', '9:15', '9:16', '9:17', '9:18',
                                       '9:19'];
                      var crimes = [1,2,1,5,4,2,3,1,1,1,1,2,2,1,1,3,1,
                                      3,4];
                    

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