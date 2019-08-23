App = {

    init: function () {
        App.listen();
        // App.getData();
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

    // getData: function () {
    //     $.getJSON('./json/movies.json', function (data) {
    //         App.createTable(data);
    //     });
    // },

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