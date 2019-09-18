App = {

    init: function () {
        App.listen();
        App.getJSONData('../json/movies.json','title','#changeMovie');
        App.getJSONData('../json/music.json','artist', '#changeArtist');
        App.getXMLData('../xml/health.xml');
    },

    listen: function () {
        var collapsibles = $(".collapsible");
        for (let i = 0; i < collapsibles.length; i++) {
            collapsibles[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    },

    getJSONData: function(json, field,span) {
        $.getJSON(json, function (data) {
            App.changeContent(data, field,span);
        });
    },

    changeContent: function(data,field,span) {
        var list = []
        var index = 0;
        $.each(data, function(key, object) {
            list.push(object[field]);
        });
        setInterval(function() {
            $(span).text(function() {
                index++;
                if(index == list.length) index = 1
                return ": " + list[index - 1]
            });
        }, 1000);
    },

    getXMLData: function(xml) {
        var days = new Object();
        var total = 0;
        $.ajax({
            url: xml,
            dataType: 'xml',
            success: function(data) {
                $(data).find('Record[type=HKQuantityTypeIdentifierDistanceWalkingRunning]').each(function() {
                    let day = Date.parse($(this).attr('startDate').substring(0,10)) / 1000 + 86400;
                    let miles = Number($(this).attr('value'))
                    App.categorize(days,day,miles);
                    total += miles;
                });

            },
            error: function() {
                console.log('Could not get health data');
            }
        }).then(function() {
            $("#run_desc").append("<br>I've tracked " + String(total).substring(0,String(total).indexOf('.')) + " miles on my iPhone since April 2016. <br> Data is not completely accurate day to day. <br>Last updated on August 31, 2019");
            App.quickFix(days);
            for(var i = 0; i < 4; i++) {
                App.createCalendarHeatmap(days, new Date('January 1,' + String(2016 + i)), 12, String(2016 + i));
            }
        })
    },

    categorize: function (category, key, value) {
        if (key in category) {
            category[key] += value;
        } else {
            category[key] = value;
        }
    },

    createCalendarHeatmap: function(data, start, range, selector) {
        var itemSelector = "#run_" + selector;
        $(itemSelector).append(selector);
        var calendar = new CalHeatMap();
        calendar.init({
            itemSelector: itemSelector,
            start: start,
            range: range,
            domain: 'month',
            subDomain: 'day',
            itemName: ['mile', 'miles'],
            weekStartOnMonday: false,
            cellPadding: 3,
            cellRadius: 3,
            data: data,
            legend: [1,3,5,7,9],
            // legendColors: {
            //     base: "#ededed",
            //     min: '#ffe6e6',
            //     max: 'red'
            // },
        });
        $(itemSelector).append('<hr>')
    },

    quickFix: function(data) {
        var miles = [1.8, 2.3, 2.3, 2.4, 2.3, 2.3, 2.3, 2.3, 2.8]
        for(var i = 1; i < 10; i++) {
            data[Date.parse('November ' + i + ', 2018') / 1000] = miles[i - 1];
        }
    },

    // createTable: function (data) {
    //     var genre = new Object;
    //     $.each(data, function(key, object) {
    //         App.categorize(genre, object.genre)
    //     });
    //     console.log(genre);
    //     var time = new Object;
    //     $.each(data, function (key, object) {
    //         App.categorize(time, object.year + " " + object.month);
    //     })
    //     var context = $("#movies");
    //     var chart = new Chart(context, {
    //         type: 'bar',
    //         data: {
    //             labels: Object.keys(time),
    //             datasets: [{
    //                 label: "Number of Movies",
    //                 data: Object.values(time),
    //             }],
    //         }
    //         // options: {

    //         // }
    //     })
    // },

    openNav: function () {
        $("#navbar").css("width", "350px");
        $(".nav-content").show(500);
        $("#nav-close").css("visibility", "visible");
        $("#nav-open").css("visibility", "hidden");
    },

    closeNav: function () {
        $("#navbar").css("width", "0px");
        $("#nav-close").css("visibility", "hidden");
        $("#nav-open").css("visibility", "visible");
        $(".nav-content").hide(500);
    },
};

$(function () {
    $(window).on('load', function () {
        App.init();
    });
});