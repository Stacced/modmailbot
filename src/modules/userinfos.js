module.exports = function({ bot, knex, config, commands }) {
  /**
   * Display user informations from provided Discord user ID
   * @param {*} msg 
   * @param {*} args 
   * @param {*} thread 
   */
  function InfosCmd(msg, args, thread) {
    const userIdToGet = args.userId || (thread && thread.user_id);
    if (!userIdToGet) return;
    const user = bot.users.get(userIdToGet);
    msg.channel.createMessage(`**User Informations** ${user.id} (<@${user.id}>): ${user.username}#${user.discriminator}\nhttps://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`)
  }

  commands.addGlobalCommand('infos', '<userId:userId>', InfosCmd);
  commands.addInboxThreadCommand('infos', '[userId:userId]', InfosCmd);
}