

const playerImages = {

    'Lamar Jackson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/cruqs6qpbykh7a2whd7p',
    'Derrick Henry': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/m7bv3lv9puapabltvykk',
    'Zay Flowers': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/oidhqwg0fjvanyk57nc1',
    'Mark Andrews': '',
    'Isaiah Likely': '',

    'Joe Burrow': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/jzzqz5ubkilrn9dpxtlp',
    'Chase Brown': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/rxzzjpgjgjsmmkekp6zu',
    'Jamaar Chase': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/qkcb3qt2fhasfgtfuprd',
    'Saquon Barkley': 'https://static.clubs.nfl.com/image/upload/t_landscape_tablet/f_png/eagles/z4ekl4msgtokunjwjnom.png',
    'Bijan Robinson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/rydwvaod6ethdjap41l6',
    'Darnell Mooney': 'https://static.clubs.nfl.com/image/upload/t_landscape_tablet/f_auto/falcons/cc30bcmhl2tibal97txi.jpg',
    'Drake London': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/wikjazqtt3uunjufgqrf',
    'Michael Penix Jr.': 'https://static.clubs.nfl.com/image/upload/t_landscape_tablet/f_auto/falcons/c0mawkxxeaseokeydgzm.jpg',
    'Kyle Pitts': 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/f_auto/falcons/kjxlpg5qlhgwtl6lju0d.jpg',
    'Jahmyr Gibbs': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/f5y3osxxtov5rgfv4ra5',
    'Amon-Ra St. Brown': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/jmfuamqblg8jag0stpnq',
    'Jared Goff': 'https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/lions/wtdt0g0vfx0i2cdyuyu8.jpg',
    'Jameson Williams': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/kt6xzcnjbe9affdfsayt',
    'Sam Laporta': 'https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/lions/ljpdtmvh0tx7n1qium2w.jpg',
    'David Montgomery': 'https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/lions/pysu0uc0m5ppvrcql0mi.jpg',
    'Davante Adams': '',
    'Jordan Addison': 'https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/vikings/g8m9it1pxqc212tz9477.jpg',
    'Justin Jefferson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/vrftbpzwk6qmv0zjcysg',
    'Puka Nacua': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/i1pmrhua5gpvwgsqphxa',
    'CeeDee Lamb': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/tfuj9njqdw2dovkwhryc',
    'Jalen Tolbert': '',
    'Ashton Jeanty': 'https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fbroncosports.com%2Fimages%2F2024%2F8%2F1%2FJeanty_Ashton_2024.jpg&width=180&height=270&type=webp',
    'Jake Ferguson': 'https://static.clubs.nfl.com/image/private/t_thumb_squared/f_auto/cowboys/odaj9tgr2tbds1l3cd43.jpg',
    'Dak Prescott': 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/f_auto/cowboys/rtwaqxgsuw6nhxc9sgfa.jpg',
    'Rico Dowdle': 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/f_auto/cowboys/ry8tguubckvwmihqitf4.jpg',
    'Brandon Aiyuk': '',
    'Cam Akers': '',
    'Jordan Akins': '',
    
    'Nico Collins': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/q7c9aq8rpremfygslmya',
    'Brian Thomas Jr.': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/gsz15iz0ppibhslzzgch',
    'A.J. Brown': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/a014sgzctarbvhwb35lw',
    'Devonta Smith': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/bmdflwy52nsk7zpnfhwb',
    'Jalen Hurts': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/k2p5yb4qmqwoo3qcapgt',
    'Malik Nabers': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/w3edoyyuomqlovvp9ixc',
    'Tyrone Tracy Jr.': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/hc2uk0xrbc6qizrerwxd',
    
    'Terry McLaurin': '',
    'Dyami Brown': '',
    'Jayden Daniels': '',
    'Brian Robinson Jr.': '',
    'Austin Ekeler': '',
    'Zach Ertz': '',

    'Devon Achane': '',
    'Tyreek Hill': '',
    'Jaylen Waddle': '',
    'Tua Tagovailoa': '',

    'Josh Allen': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/lq4ezafbszwwt2qsvhqv',
    'James Cook': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/bzdvrarxum9zate4te4b',
    'Khalil Shakir': '',
    'Dalton Kincaid': ' ',
    'Keon Coleman': '',
    


};

export function getPlayerImage(playerName) {
    return playerImages[playerName] || "https://example.com/images/default-player.png"; // Default fallback image
}