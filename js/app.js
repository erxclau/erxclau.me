App = {

    init: function () {
        App.listen();
        App.getData('./json/movies.json','title','#changeMovie');
        App.getData('./json/music.json','artist', '#changeArtist');
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

    getData: function(json, field,span) {
        $.getJSON(json, function (data) {
            App.changeMovie(data, field,span);
        });
    },

    changeMovie: function(data,field,span) {
        var list = []
        var index = 0;
        $.each(data, function(key, object) {
            list.push(object[field]);
        });
        setInterval(function() {
            $(span).text(function() {
                index++;
                if(index == list.length) index = 1
                return list[index - 1]
            });
        }, 1000);
    },

    // categorize: function (category, key) {
    //     if (key in category) {
    //         category[key]++;
    //     } else {
    //         category[key] = 1;
    //     }
    // },

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
        $("#navbar").css("width", "400px");
        $(".nav-content").show();
        $("#nav-close").css("visibility", "visible");
        $("#nav-open").css("visibility", "hidden");
        $(".main").css("margin-left", "425px");
    },

    closeNav: function () {
        $("#navbar").css("width", "75px");
        $(".nav-content").hide();
        $("#nav-close").css("visibility", "hidden");
        $("#nav-open").css("visibility", "visible");
        $(".main").css("margin-left", "80px");
    },
};

$(function () {
    $(window).on('load', function () {
        App.init();
    });
});