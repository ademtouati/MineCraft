//CONFIG DATA EXPLANATION - https://docs.petyxbron.cz/config/config-info
module.exports = {
    //Your bot data
    bot: {
        token: "MTAxOTk0MDk0Mzg5NTQ2MTk0MQ.GKyAu-.ak_ebzpPrlHDeeFPky7pbtgNeof1ntBj5Ec5mQ", //Your bot token - https://tinyurl.com/discordbot-token
        prefix: "!", //Your custom prefix of the bot, like "!" or "."
        status: "DND",  //You can choose: ONLINE, IDLE, DND (do not disturb), INVISIBLE
        activity: "WATCHING", //You can choose: PLAYING, LISTENING, WATCHING, COMPETING
        guildID: "1020997735874318346", //Your Discord server guild ID
    },

    //Your Minecraft server data
    server: {
        name: "ZedarMC", //Your server name
        type: "bedrock", //"java" or "bedrock"
        ip: "play.zedarmc.com", //IP of your server - do not include port - e.g. "mc.hypixel.net"
        port: "19132", //PORT of your server - empty => default port (JA 25565, BE 19132)
        icon: "https://website.com/icon.png", //Link to icon - like "https://website.com/icon.png"
        version: "1.19", //Minecraft version of sever
        vote: "https://minecraftpocket-servers.com/server/80103/vote/" //Vote link - like "https://minecraftpocket-servers.com/server/80103/vote/"
    },

    //Basic code settings
    //All settings are boolean wanted - Use "true" for enabling, "false" for disabling setting.
    settings: {
        warns: true, //Show warns?
        debug: false, //Log most of the changes and updates (pretty spam)?
        inviteLink: true, //Show bot invite link on bot start?
        readyScan: true, //On bot's start, send to console server's basic info?
        split: false, //Advanced - Extract only the version like "1.17" or "1.12" etc.
        randomColor: false, //Enable random hex color generator for embeds? Overwrites embeds settings!
        statusCH: false, //Enable auto-changing status message?
        votingCH: false, //Enable voting channel?
        countingCH: false //Enable counting channel?
    },

    //Period of auto changing status if you are using {onlinePlayers} or {maxPlayers} in bot's presence
    autoStatus: {
        time: "10min", //Period of auto changing status - like "3min", "20s" or "1min" etc.
        offline: "Offline" //Changes bot's presence to this text if the server is offline / not found
    },

    //Auto changing status message
    statusCH: {
        channelID: "1021490432363987014",
        time: "30s" //Period of updating status message - like "3min", "20s" or "1min" etc.
    },

    //Voting channel - https://docs.petyxbron.cz/config/config-info#voting-ch
    votingCH: {
        channelID: "1021490437661405214",
        time: "30s", //Time for how long the cancel reaction should be deleted.
        threads: {
            enable: false, //Create discussion threads for each votingCH message
            nameSyntax: "Voting {ID}", //Thread name ("{ID}" = ID of voting/suggestion)
            idSyntax: "001", //ID syntax - choose how many zeros should IDs show (DON'T REMOVE INTEGER "1")
            archiveTime: 1440 //Minutes after which the thread should archive in case of no recent activity
        },
        reactions: {
            first: "👍", //First added reaction (the positive one)
            second: "👎", //Second added reaction (the negative one)
            cancel: "❌" //Third added reaction (cancel/remove button)
        }
    },

    //Counting channel - auto updating channel name
    countingCH: {
        channelID: "1021490440626782298",
        time: "1min", //Period of updating channel name - like "3min", "20s" or "1min" etc.
        name: "{onlinePlayers} players online!", //Name of the channel
        offline: "Server is offline!" //Name of the channel if the server is offline / not found
    },

    //Embeds settings
    embeds: {
        colors: {
            normal: "#29F708",  //Main/successful color of embeds - choose HEX color here: https://htmlcolorcodes.com
            error: "#F70808", //Error/unsuccessful color of embeds - choose HEX color here: https://htmlcolorcodes.com
        }
    },

    //Program process console logging
    console: {
        emojis: {
            success: "💚",
            info: "💙",
            warn: "💛",
            error: "🛑"
        }
    },

    //All commands settings
    commands: {
        enableSlashes: true, //If you want to disable only specific slashes, leave this true and go down
        //List of all commands:
        help: {
            enableNormal: true, //Enables normal command
            enableSlash: true, //Enables slash command
            aliases: [ //Only for normal commands
                "commands", "menu"
            ],
            text: { //Custom text settings (for translating or customization)
                title: "{serverName} bot commands:",
                description: "> **Prefix:** \`{prefix}\`\n> **Commands:**\n{commands}",
                errorTitle: "Error! Command \"{arg0}\" doesn't exist.",
                errorDescription: "Command `{arg0}` was not found.\nYou are entering the wrong alias or the command is disabled."
            }
        },
        ip: {
            enableNormal: true, //Enables normal command
            enableSlash: true, //Enables slash command
            aliases: [ //Only for normal commands
                "i", "ip-address", "address", "connect", "join"
            ],
            text: { //Custom text settings (for translating or customization)
                title: "IP address:",
                description: "\`{serverIp}\`:\`{serverPort}\`"
            }
        },
        list: {
            enableNormal: true, //Enables normal command
            enableSlash: true, //Enables slash command
            aliases: [ //Only for normal commands
                "l", "players", "plist"
            ],
            text: { //Custom text settings (for translating or customization)
                title: "Online player list:",
                description: "**{playersOnline}**/**{playersMax}**",
                listFormat: "```{playersList}```"
            }
        },
        status: {
            enableNormal: true, //Enables normal command
            enableSlash: true, //Enables slash command
            aliases: [ //Only for normal commands
                "s", "info", "server", "overview", "ov"
            ],
            text: { //Custom text settings (for translating or customization)
                title: "Server status:",
                description:
                    `{status}
                    
                    **Description**
                    {motd}
                    
                    **IP Address**
                    \`{serverIp}\`:\`{serverPort}\`
                    
                    **Version**
                    {serverType} {serverVersion}
                    
                    **Players**
                    **{playersOnline}**/**{playersMax}**`,
            }
        },
        test: {
            enableNormal: true, //Enables normal command
            //Test command doesn't have slash type. Is it really necessary?
            aliases: [ //Only for normal commands
                "t", "try", "testing"
            ],
            text: { //Custom text settings (for translating or customization)
                content: "Test message reply."
            }
        },
        version: {
            enableNormal: true, //Enables normal command
            enableSlash: true, //Enables slash command
            aliases: [ //Only for normal commands
                "v", "ver"
            ],
            text: { //Custom text settings (for translating or customization)
                title: "Minecraft version:",
                description: "{serverType} {serverVersion}"
            }
        },
        vote: {
            enableNormal: true, //Enables normal command
            enableSlash: true, //Enables slash command
            aliases: [ //Only for normal commands
                "votelink"
            ],
            text: { //Custom text settings (for translating or customization)
                title: "Server list vote link:",
                description: "[Here]({voteLink}) you can vote for {serverName}."
            }
        },
    }
};

//CONFIG DATA EXPLANATION - https://docs.petyxbron.cz/config/config-info