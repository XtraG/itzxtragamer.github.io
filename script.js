const userID = "670392927024840714";

lanyard({
    userId: userID,
    socket: true,
    onPresenceUpdate: function(data) {
        if (data.discord_status !== undefined) {
            var status = data.discord_status;
            var element = document.getElementById('status');
            element.innerHTML = status;

            switch (status.toLowerCase()) {
                case 'online':
                    element.textContent = "";
                    document.getElementById('status').style.backgroundColor = "lightgreen"
                    document.getElementById('status-text').textContent = "Online";
                    document.getElementById('status-text').style.marginLeft = "-15px"
                    break;
                case 'idle':
                    element.textContent = "";
                    document.getElementById('status').style.backgroundColor = "#fff53b"
                    document.getElementById('status-text').textContent = "Idle";
                    document.getElementById('status-text').style.marginLeft = "-5px"
                    break;
                case 'dnd':
                    element.textContent = "";
                    document.getElementById('status').style.backgroundColor = "#ff2626"
                    document.getElementById('status-text').textContent = "Do Not Disturb";
                    document.getElementById('status-text').style.marginLeft = "-45px"
                    break;
                case 'offline':
                    element.textContent = "";
                    document.getElementById('status').style.backgroundColor = "#fff"
                    document.getElementById('status-text').textContent = "Offline";
                    document.getElementById('status-text').style.marginLeft = "-15px"
                    break;
            }
        }
    }
});
