const help = (pushname, prefix, botName, ownerName) => {
        return `
════════════
*〈 BOT INFO 〉*
*➣Prefix* : 「  ${prefix}  」
*➣Creator* : ${ownerName}
*➣Version* : 0.0.1
════════════

╔════════════════════
║──────〘  *ABOUT* 〙──────
╠════════════════════
╠≽ ${prefix}info
╠≽ ${prefix}blocklist
╠≽ ${prefix}owner
╠≽ ${prefix}creator
╠════════════════════
║──────〘  *MAKER* 〙──────
╠════════════════════
`
}
exports.help = help
