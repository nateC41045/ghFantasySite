
const playerImages = {

    //ARI
    'James Conner': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/rtvys5j7sxjrlbpy5iim',
    'Marvin Harrison Jr.': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432708.png&w=350&h=254',
    'Trey McBride': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361307.png&w=350&h=254',
    'Trey Benson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/iu0gbspz3kjdqlazvtkn',
    'Kyler Murray': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3917315.png&w=350&h=254',
    'Micheal Wilson': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360761.png&w=350&h=254',


    //ATL
    'Bijan Robinson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/rydwvaod6ethdjap41l6',
    'Darnell Mooney': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/c1ixyspw0eshl3a2qrly',
    'Drake London': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/wikjazqtt3uunjufgqrf',
    'Michael Penix Jr.': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/ono6a9myuvmgmfz1y43t',
    'Kyle Pitts': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/t8ymqyhvv8i1r80jyhy2',
    'Tyler Allgeier': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/yosaj2anmqoujqrgzecd',

    // BAL
    'Lamar Jackson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/cruqs6qpbykh7a2whd7p',
    'Derrick Henry': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/m7bv3lv9puapabltvykk',
    'Zay Flowers': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/oidhqwg0fjvanyk57nc1',
    'Mark Andrews': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/y5maejm3puruskwc344y',
    'Isaiah Likely': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/xmikfnklnpjmzjhbjrur',
    'Rashod Bateman': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/jkcapzvd65fxivefjv8l',

    //BUF
    'Josh Allen': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/lq4ezafbszwwt2qsvhqv',
    'James Cook': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/bzdvrarxum9zate4te4b',
    'Khalil Shakir': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/ch2yarhiobqlvr9ls2yw',
    'Dalton Kincaid': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/rsimqxdfwlb1n9qd4w3g',
    'Keon Coleman': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/ipwpdgb0cm3xy3d8zu1l',
    'Amari Cooper': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/zmtzqznqui37unmo5xv9',
    'Ray Davis': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/xm8csnleyxsop4pldyby',

    //CAR
    'Chuba Hubbard': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/oyis5zooijf0xfme9csj',
    'Bryce Young': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/gdmtmmviwadpobyjogal',
    'Xavier Legette': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/a3etuvp3kqtwmtkioq8g',
    'Jalen Coker': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/wk9xewrixauh09f71pqh',
    'Jatavion Sanders': '', 
    'Adam Thielen': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/pxehgo0l9xl03n7dronf',


    //CHI
    'DJ Moore': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/hqb9xnzm9brx79zl6wve',
    'Rome Odunze': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/labs8tstecnehvzfmrs5',
    'Caleb Williams': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/idewrhb7kngpdtrvku31',
    'DAndre Swift': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/xlqznrxbapcjhxxazkbx',
    'Cole Kmet': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/fdxpctcmwjupassg9g9d',
    'Roschon Johnson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/skajjk8i3zdrvzqmucww',


    //CIN 
    'Joe Burrow': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/jzzqz5ubkilrn9dpxtlp',
    'Chase Brown': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/rxzzjpgjgjsmmkekp6zu',
    'Jamaar Chase': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/qkcb3qt2fhasfgtfuprd',
    'Tee Higgins': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/swqgkrdmjecz3vumrex5',
    'Mike Geiseki': '',
    'Andrei Iosivas': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/pgbqgzrxmbnmpcnkhsya',

    //CLE
    'Jerome Ford': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/djggmwo5v8osoboiseo2',
    'David Njoku': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ilvxwdllivrvwbuj69cm',
    'Jerry Jeudy': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/szca1v9butuqkjs7ekpm',
    'Cedric Tillman': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/fp371fgk45btt01uvucq',
    'Jordan Akins': '',

    //DAL
    'CeeDee Lamb': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/tfuj9njqdw2dovkwhryc',
    'Jalen Tolbert': '',
    'Jake Ferguson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/lbvrn1ibwszd6tzgh6o1',
    'Dak Prescott': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/xmtaggdnhuyl4pdwtv8j',
    'Rico Dowdle': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/fe8ge4f6vvtyihou5czu',

    //DEN
    'Bo Nix': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/zibtvsprpauxnytis229',
    'Courtland Sutton': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/qts95gbd6hv65s9eiseq',
    'Marvin Mims Jr.': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/trvilnckw7nprw1gkghl',



    // DET  ** FIX 
    'Jahmyr Gibbs': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/f5y3osxxtov5rgfv4ra5',
    'Amon-Ra St. Brown': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4374302.png&w=350&h=254',
    'Jameson Williams': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/kt6xzcnjbe9affdfsayt',
    'Sam Laporta': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/ucw8cfj5t5nwkx670wzu',
    'David Montgomery': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4035538.png&w=350&h=254',
    'Jared Goff': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/jxyaiwwkabzmmphouxil',


    // GB
    'Josh Jacobs': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4047365.png&w=350&h=254',
    'Jayden Reed': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362249.png&w=350&h=254',
    'Romeo Doubs': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361432.png&w=350&h=254',
    'Jordan Love': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4036378.png&w=350&h=254',
    'Dontayvion Wicks': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4428850.png&w=350&h=254',
    'Tucker Kraft': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4572680.png&w=350&h=254',


    // HOU
    'Nico Collins': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/q7c9aq8rpremfygslmya',
    'Joe Mixon': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/gwyhozfhjgedwdmmjjcf',
    'C.J. Stroud': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/fbk2eqpo54lawppgetjn',
    'Tank Dell': '',
    'Dalton Shultz': '',
    'Stefon Diggs': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/to2qwuffjnjlouctglsl',



    // IND
    'Jonathan Taylor': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4242335.png&w=350&h=254',
    'Anthony Richardson': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429084.png&w=350&h=254',
    'Josh Downs': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4688813.png&w=350&h=254',
    'Alec Pierce': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360078.png&w=350&h=254',
    'Adonai Mitchell': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4597500.png&w=350&h=254',
    'Micheal Pittman': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4035687.png&w=350&h=254',


    // JAX
    'Brian Thomas Jr.': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/gsz15iz0ppibhslzzgch',
    'Trevor Lawrence': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360310.png&w=350&h=254',
    'Travis Etienne Jr.': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ne5lyv8n6elqw77yrz9w',
    'Gabe Davis': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4243537.png&w=350&h=254',
    'Tank Bigsby': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/vwl0kijb59dp20m3hs3u',
    'Evan Engram': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/sea0atk2feif4n75dvq8',
    'Christian Kirk': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/ersmmtjmjlpsy9lmjvde',

    // KC
    'Patrick Mahomes': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/qrdbvu4iqy7wkqg8jq8d',
    'Rashee Rice': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/zjgi60dvmj5ogvanp201',
    'Xavier Worthy': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/fvzbx5gpiqkogglyoo1w',
    'Travis Kelce': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/ilk4qbxxs6mt3v9zfvtg',
    'Noah Grey': '',
    'Isiah Pacheco':'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/rzr8nxjunjeiv8bjir59',
    'Marquise Brown':'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/ixuddegcphzmvjn4jq6r',
    'Kareem Hunt': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/mm0t1ghvbpdhy6m5utcq',


    // MIA
    'DeVon Achane': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/zqfkz3hbyurjcwhw7xoi',
    'Tyreek Hill': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/gdwjlpbkenmnsibawkht',
    'Jaylen Waddle': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/qjsz2h6shbdnksctzeka',
    'Tua Tagovailoa': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/xzdbwt2ezmxk3pjcsr1n',
    'Malik Washington': '',
    'Jaylen Wright': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/ib9s3nvt4i1i5wh11t4f',
    'Jonnu Smith': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/p8uldtljkzb6sile3wgx',



   



    // MIN
    'Jordan Addison': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/tmyckmignrvy8truccwm',
    'Justin Jefferson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/vrftbpzwk6qmv0zjcysg',
    'Sam Darnold': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3912547.png&w=350&h=254',
    'T.J. Hockenson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/n9zhffstwzae8i5di6tk',
    'Aaron Jones': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3042519.png&w=350&h=254',
    'Jalen Nailor': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4382466.png&w=350&h=254',
    'J.J. McCarthy': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4433970.png&w=350&h=254',
    'Cam Akers': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4240021.png&w=350&h=254',

    // NE

    'Drake Maye': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431452.png&w=350&h=254',
    'Rhamondre Stevenson': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4569173.png&w=350&h=254',
    'DeMario Douglas': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4427095.png&w=350&h=254',
    'Hunter Henry': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3046439.png&w=350&h=254',

    // NO
    'Chris Olave': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/riiwbow7zphqmomiazph',
    'Alvin Kamara': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3054850.png&w=350&h=254',
    'Rashid Shaheed': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4032473.png&w=350&h=254',
    'Derek Carr': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16757.png&w=350&h=254',
    'Juwan Johnson': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3929645.png&w=350&h=254',


    // NYG
    'Malik Nabers': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/w3edoyyuomqlovvp9ixc',
    'Tyrone Tracy Jr.': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/hc2uk0xrbc6qizrerwxd',
    'Theo Johnson': '',
    'Wandale Robinson': '',
    'Jalin Hyatt': '',
    

    // NYJ
    'Garret Wilson': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4569618.png&w=350&h=254',
    'Davante Adams': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16800.png&w=350&h=254',
    'Breece Hall': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4427366.png&w=350&h=254',
    'Aaron Rodgers': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8439.png&w=350&h=254',
    'Braelon Allen': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/p0fylkec7poarrjosefz',


    // LV
    'Brock Bowers': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/mjy86xh8munoiur4hejf',
    'Jakobi Meyers': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/p1abjttm5pu8gev0gwea',
    'Gardner Minshew': '',

    // PHI
    'A.J. Brown': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/a014sgzctarbvhwb35lw',
    'Devonta Smith': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/bmdflwy52nsk7zpnfhwb',
    'Jalen Hurts': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/k2p5yb4qmqwoo3qcapgt',
    'Dallas Goedert': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/wfj54vhw1zxwwb3vdi61',
    'Saquon Barkley': 'https://static.clubs.nfl.com/image/upload/t_landscape_tablet/f_png/eagles/z4ekl4msgtokunjwjnom.png',
    'Jahan Dotson': '',
    'Will Shipley': '',


    // PIT
    'Russell Wilson': '',
    'Justin Fields': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/vqcvybvs1vlqhkjvujbg',
    'Jaylen Warren': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/aaw4yacm6azisxqy273i',
    'Calvin Austin III': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/qlt6ztqcbu0uzad6aavt',
    'George Pickens': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/klxzcb6p7ekngcognpiy',
    'Najee Harris': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/pdyv1dfyb1w0tmvnkp3v',
    'Pat Freiermuth': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/sozfjyy3bmntjv8tmqah',

    //LAC
    'Justin Herbert': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/vvwim9hpgq1zs3bufmr0',
    'Ladd McConkey': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/wcx39ialovvxxnvs2bke',
    'J.K. Dobbins': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/rbuyzj3kv10xrq1rfy2l',
    'Quentin Johnston': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/jbxlvsbokf9qdqtet1qr',

    // SF
    'Christian McCaffrey': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/umiv5sn2xxrjdjwjtkqm',
    'George Kittle': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/ivkrikewqqdllzvano8h',
    'Brock Purdy': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/myvg8siij2bn9ecx7btm',
    'Brandon Aiyuk': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/qnfyhqxbppevv28hd3rx',
    'Ricky Pearsall': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/akwepvt6qxwbgankljmv',
    'Deebo Samuel': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/shqoqpjwwoiexzy6cmgb',
    'Jauan Jennings': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/fqyzagb57zrtegmw69eb',
    'Isaac Guerendo': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/vi0oa4oajc6ecgzr8l08',

    //SEA
    'Kenneth Walker': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4567048.png&w=350&h=254',
    'Jaxon Smith Njigba': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430878.png&w=350&h=254',
    'DK Metcalf': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4047650.png&w=350&h=254',
    'Zach Charbonnet': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/eaaj5vbfmk08wvwelyqt',
    'Geno Smith': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15864.png&w=350&h=254',
    'Noah Fant': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4036131.png&w=350&h=254',
    'Tyler Lockett': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2577327.png&w=350&h=254',

    //LAR
    'Puka Nacua': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/i1pmrhua5gpvwgsqphxa',
    'Kyren Williams': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/vcvstwywz6iufk7iul3x',
    'Jordan Whittington': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/x5j7yvx4iheje5vw4tek',
    'Blake Corum': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/ehpbxs9iiosm4xs7nhnl',
    'Matthew Stafford': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/xdlnnbapdbk8trxqlasu',
    'Cooper Kupp': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/sq7zwzcgrajuk0hwwph2',

    //TB
    'Bucky Irving': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4596448.png&w=350&h=254',
    'Mike Evans': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16737.png&w=350&h=254',
    'Chris Godwin': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3116165.png&w=350&h=254',
    'Cade Otton': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4243331.png&w=350&h=254',
    'Rachaad White': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4697815.png&w=350&h=254',
    'Baker Mayfield': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3052587.png&w=350&h=254',
    'Jalen McMillan': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430834.png&w=350&h=254',

    //TEN
    'Tony Pollard': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3916148.png&w=350&h=254',
    'Tyjae Spears': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4428557.png&w=350&h=254',
    'Calvin Ridley': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3925357.png&w=350&h=254',
    'Chig Okonkwo': 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360635.png&w=350&h=254',

    //WAS
    'Terry McLaurin': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/wokz1etv1wj1vhbmvxgs',
    'Dyami Brown': '',
    'Jayden Daniels': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/mh9rkwpmq1rgfarg9rpm',
    'Brian Robinson': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/gxcfbuvmooytbn45kvxf',
    'Austin Ekeler': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/sldndpn2zwt4uhkj2zks',
    'Zach Ertz': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/xktmmeumuoglbuam75iz',
   
    // Rookies
    'Shaduer Sanders': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4432762.png&w=350&h=254',
    'Travis Hunter': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4685415.png&w=350&h=254',
    'Cam Ward': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4688380.png&w=350&h=254',
    'Tetairoa McMillan': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4685472.png&w=350&h=254',
    'Luther Burden III': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4685278.png&w=350&h=254',
    'Omarion Hampton': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4685382.png&w=350&h=254',
    'Kaleb Johnson': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4819231.png&w=350&h=254',
    'TreVeyon Henderson': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4432710.png&w=350&h=254',
    'Emeka Egbuka': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4567750.png&w=350&h=254',
    'Quinshon Judkins': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4685702.png&w=350&h=254',
    'Elic Ayomanor': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4883647.png&w=350&h=254',
    'Xavier Restrepo': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4431353.png&w=350&h=254',
    'Jaylen Royals': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/5082630.png&w=350&h=254',
    
    'Isaiah Bond': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4808839.png&w=350&h=254',
    'Ashton Jeanty': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4890973.png&w=350&h=254',
    'Tyler Warren': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4431459.png&w=350&h=254',
    'Matthew Golden': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4701936.png&w=350&h=254',
    'Cam Skattebo': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4696981.png&w=350&h=254',
    'Tre Harris': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4686612.png&w=350&h=254',
    'Devin Neal': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4682652.png&w=350&h=254',
    'Colston Loveland': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4723086.png&w=350&h=254',
    'Ollie Gordon II': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4711533.png&w=350&h=254',
    'Dylan Sampson': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/5081397.png&w=350&h=254',
    'Jaxson Dart': 'https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4689114.png&w=350&h=254',
    'Jack Bech': '',
    'Jaylin Noel': '',
    'Jayden Higgins': '',
    'Damien Martinez': '',
    'LeQuint Allen Jr.': '',
    'Kaden Prather': '',
    'Brashard Smith': '',
    'Kalel Mullings': '',
    'Trevor Etienne': '',
    'Mason Taylor': '',
    'Luke Lachey': '',
    'Ricky White': '',
    'Jalen Milroe': '',
    'Woody Marks': '',
    'Savion Williams': '',
    'Harold Fannin Jr.': '',
    'DJ Giddens': '',
    'RJ Harvey': '',
    'Bhayshul Tuten': '',
    'Gunnar Helm': '',
    'Kyle Monangai': '',
    'Jordon James': '',
    'Tory Horton Jr.': '',
    'Tez Johnson': '',
    'Elijah Arroyo': '',


    
    
    
    

    

    

    
    

    

};

export function getPlayerImage(playerName) {
    return playerImages[playerName] || "https://example.com/images/default-player.png"; // Default fallback image
}