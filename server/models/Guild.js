const { Schema, model } = require('mongoose');

const guildSchema = new Schema(
    {

    }
)

const Guild = model('guild', guildSchema);

module.exports = Guild;
