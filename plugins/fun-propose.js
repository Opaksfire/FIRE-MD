/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(`https://github.com/Opaksfire/FIRE-MD *╔═══════════════════════════*\n➢ *"${pickRandom(global.piropo)}"*\n*╚═══════════════════════════*`)
}
handler.tags = ['frases']
handler.command = ['propose']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piropo = ["I would like to be paper so I could wrap that chocolate.", "You are like wifi without a password, everyone is looking for you", "Who would be a bus to walk through the curves of your heart.", "I want to fly without wings and get out of this universe, enter yours and love you in silence.", "I would like to be butter to melt in your arepa.", "If beauty were a sin you would already be in hell.", "I would like to be a cat to spend 7 lives.", "By your side.", "Stealing is wrong but a kiss from your mouth would steal it from me.", "How beautiful the sky is when it's clear but love is more beautiful when I have you by my side.", "Pretty, Walk in the shade, the sun melts the chocolates. Whats your name when I ask Santa Claus for a gift?", "There are many stars in the sky, but the brightest one is on Earth and its you.", "Has the sun just risen or is it the smile youre giving me today?", "Its not the rum or the beer, its you who has gone to my head", "If we talk about mathematics you are the sum of all my desires.", "You look like Google because you have everything Im looking for.", "My favorite coffee is the one in your eyes.", "I want to be Photoshop to touch up your whole body.", "I would like you to be cereal, to spoon in the morning.", "Whoever is hungry, to give you three times a day."]
