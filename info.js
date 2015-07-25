var handleData = function(data) {
        console.log("Got data");
        if (data == null) {
                return null;
        }
        var motd = data["motd"];
        var players = data["players"]||0;
        var maxplayers = data["maxplayers"]||200;
        var ping = data["ping"];
        var sample = data["sample"];
        var str = "";
        if (sample) {
		sample.sort(function(a,b) {return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0); });
                var plrz = [];
                for (var i = 0; i < sample.length; i++) {
                        plrz.push(sample[i]);
                }

                for (var i = 0; i < plrz.length; i++) {
                        str += '<a data-name="' + plrz[i].name + '"><img src="https://cravatar.eu/helmhead/' + plrz[i].id + '" width=42 height=42></img></a>';
                }
        }
        $("#plist").html(str);

        $("#player-title").text("Online Players: " + players + "/" + maxplayers + " ");
}

var update = function() {
        console.log("Sending POST request");
        $.post("getinfo.php", "address=afteremerald.us&port=25565", handleData, "json");

}

$(document).ready(function() {
        update();
        setInterval(function() {
                update();
        },10000);
});
