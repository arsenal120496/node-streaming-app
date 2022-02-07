var spawn = require('child_process').spawn,
    config = require('../config/config'),
    cmd = config.rtmp_server.trans.ffmpeg;

const config_port = require('../../env')

const generateStreamThumbnail = (stream_key) => {
    const args = [
        '-i', 'rtmp://localhost:' + config_port.port_rtmp + '/live/' + stream_key,
        '-ss', '00:00:01',
        '-vframes', '1',
        '-f', 'image2',
        './server/thumbnails/' + stream_key + '.png',
    ];

    spawn(cmd, args, {
        detached: true,
        stdio: "ignore"
    }).unref();
};

module.exports = {
    generateStreamThumbnail : generateStreamThumbnail
};