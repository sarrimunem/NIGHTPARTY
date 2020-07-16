$.getJSON('https://api.neeko-bot.xyz/servers', response => typeText(response.servers)).catch(o_O => typeText());

function typeText(servers = null) {
    const strings = ["Share your giveaway tastes with your friends."];
    if (servers) strings.push(`NightParty is already on ${servers} servers! 🎉`);
    strings.push(...[
        "Start giveaways with ease.",
        "24/7 Guarenteed Hosting.",
        "Speeds faster than any other music bot..",
        "NightParty is the easiest way to start giveaways in your server."
    ]);

    new TypeIt("#typingtext", {
        breakLines: false,
        strings,
        speed: 93,
        loop: true,
        deletespeed: 1,
        nextStringDelay: 3000,
        waitUntilVisible: true
    });
};
