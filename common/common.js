if (typeof window !== "undefined") {
    window.COMMON = {};
} else {
    global.COMMON = {};
}
COMMON.TEAM_COLORS = {
    0: {
        light: 0x8f563b,
        dark: 0x663931
    },
    1: {
        light: 0x9badb7,
        dark: 0x847e87
    },
    2: {
        light: 0x696a6a,
        dark: 0x595652
    },
    3: {
        light: 0xeec39a,
        dark: 0xd9a066
    },
    4: {
        light: 0xac3232,
        dark: 0x663931
    }
}
COMMON.MINER_MIN = 0.8;
COMMON.MINER_MAX = 0.5;
COMMON.INTERACTION_DISTANCE = 80;
COMMON.CITIZEN_SCALE = 0;
COMMON.FRIEND_COLOR = 0x37946e;
COMMON.ENEMY_COLOR = 0xaa0000;
COMMON.GOLD_CAP = 12000;
COMMON.SHARE_INTERVAL = 1 / 20;
COMMON.TWEEN_DURATION = COMMON.SHARE_INTERVAL * 1.5;
COMMON.MMR_PER_LEVEL = 30;
COMMON.OPERATE_TIMEOUT = 1.0;
COMMON.FALL_THRESHOLD = 0.3;
COMMON.FALLEN_PROTECTION = 0.0;
COMMON.TILE_WIDTH = 64;
COMMON.TILE_HEIGHT = 44;
COMMON.SUBTILE_WIDTH = COMMON.TILE_WIDTH / 4;
COMMON.SUBTILE_HEIGHT = COMMON.TILE_HEIGHT / 4;
COMMON.TILE_OFFSET_Y = 4;
COMMON.TILE_SOURCE_HEIGHT = 132;
COMMON.TORSO_LIMIT = Math.HPI - 0.1;
COMMON.TORSO_LIMIT = Math.PI;
COMMON.PLAYERS_PER_TEAM = 3;
COMMON.GAME_TIME = 10 * 60;
COMMON.innerBorder = 1400;
COMMON.outerBorder = 2000;
COMMON.FLAG_RIGHT = 1;
COMMON.FLAG_DOWN = 2;
COMMON.FLAG_LEFT = 4;
COMMON.FLAG_UP = 8;
COMMON.CAN_MOVE = 1;
COMMON.CAN_ROTATE = 2;
COMMON.CAN_ROLL = 4;
COMMON.CAN_USE_ITEMS = 8;
COMMON.RESPAWN_TIME = 1;
COMMON.COUNTRIES = ["ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "catalonia", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cs", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "england", "er", "es", "et", "europeanunion", "fam", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "in", "io", "iq", "ir", "is", "it", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "scotland", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "sv", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wales", "wf", "ws", "ye", "yt", "za", "zm", "zw", "xx"];
COMMON.SHOP_COUNTRIES = ["US", "CA", "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "TR", "JP", "KR", "RU", "BR"];
COMMON.ATTACK_NORMAL = 1;
COMMON.ATTACK_KICK = 3;
COMMON.ATTACK_ROLL = 4;
COMMON.facingOffset = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1]
];
COMMON.CW4 = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1]
];
COMMON.P2 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536];
COMMON.SPECIAL_VERIFIED = 1;
COMMON.SPECIAL_ADMIN = 2;
COMMON.SPECIAL_BUILDER = 4;
COMMON.SPECIAL_PATRON = 8;
COMMON.MAX_LINKED_PLAYERS = 10;
COMMON.MAX_ARMOR = 6;
COMMON.RANKED_DAILY_REWARD = 100;
COMMON.RANKED_MAX_REWARD = 100;
COMMON.expTable = [0];
for (let i = 1; i < 100; i++) {
    COMMON.expTable.push(COMMON.expTable[i - 1] + i * (5 + i * 0.25) | 0);
}
COMMON.levelToExp = function(level) {
    return COMMON.expTable[level]
};
COMMON.expToLevel = function(exp) {
    for (let i = 0; i < 100; i++) {
        if (this.expTable[i] > exp) return i - 1;
    }
};
COMMON.modes = {};
COMMON.legsZ = [0, 0, 0.12697569202151154, 0.5555609039391696, 0.9148130001424937, 0.9759662767057457, 0.9759662767057457, 0.8774320490518326, 0.6621635047624876, 0.3537538161691129, 0.04154450834523172, 0, 0, 0.29563636715257974, 0.8015852396513293, 1, 1, 0.839389527701953, 0.4204586086644027, 0, 0];
COMMON.coinValue = {
    "gold_coin": 3,
    "silver_coin": 2,
    "bronze_coin": 1
};
COMMON.boneValue = {
    "bone_1": 1,
    "bone_2": 2,
    "bone_3": 3,
    "bone_4": 4
};
COMMON.modes.winter = {
    gameOverOnDeath: true,
    dropWeapons: true,
    houseMusic: "house_music",
    respawnNPC: true,
    countBones: true,
    removeDeadHeroBots: true,
    weather: ["snowing", "default"],
    temperature: true,
    king: true,
    background: "tile_snow",
    scoreKey: "bones",
    allowTeamChange: 2,
    allowGameLinks: true,
    bonesToScore: true,
    speed: 1.0,
    addKills: true,
    name: "Winter Sandbox",
    description: "It's a TEAM ARENA server. Folks of the same color are your team.",
    allowRespawn: true,
    fun: true,
    showRespawnWindow: true,
    pedestals: false,
    quicksands: false,
    sandworms: 0,
    list: true,
    maxPlayers: 30,
    grow: true,
    resetScoreOnRespawn: true,
    controller: "Survival",
    eclipse: true,
    mapGenerator: true,
    mapGeneratorConfig: {
        padding: 3,
        width: 5400 / COMMON.TILE_WIDTH | 0,
        height: 5400 / COMMON.TILE_HEIGHT | 0,
        mainMap: "small_fort.json",
        max: 2,
        prefixToQuantity: {
            "_respawn": 8,
            "random_barbarian_settlement": 1,
        },
        fixedLocations: {
            "small_fort": {
                x: 0.5,
                y: 0.5,
                alignX: 0.5,
                alignY: 0.5
            },
            "dm_respawn_0": {
                x: 0.1,
                y: 0.1
            },
            "dm_respawn_1": {
                x: 0.9,
                y: 0.9,
                alignX: 1.0,
                alignY: 1.0
            },
            "barbarian_quary_1": {
                quantity: 1
            },
            "mini_marketplace": {
                quantity: 1
            }
        }
    }
};
COMMON.modes.battle_royale = {
    showRespawnWindow: true,
    secrets: true,
    fun: false,
    fifo: true,
    maxPlayers: 30,
    minPlayers: 10,
    houseMusic: "desert_house",
    removeDeadHeroBots: true,
    enemyMode: "ffa",
    weather: ["desert"],
    eclipse: true,
    temperature: false,
    background: "tile_desert",
    scoreKey: "bones",
    allowTeamChange: 2,
    bonesToScore: false,
    speed: 1.0,
    addKills: true,
    name: "Desert Royale",
    description: "It's a TEAM ARENA server. Folks of the same color are your team.",
    mapGenerator: true,
    mapGeneratorConfig: {
        padding: 6,
        width: 5000 / COMMON.TILE_WIDTH | 0,
        height: 5000 / COMMON.TILE_HEIGHT | 0,
        prefix: "br_",
        prefixToQuantity: {
            "_respawn": 8,
            "_weapon": 24
        }
    },
    dropWeapons: true,
    pedestals: false,
    quicksands: false,
    sandworms: 0,
    list: true,
    grow: true,
    resetScoreOnRespawn: true,
    controller: "BattleRoyale",
    expMultiplier: 2,
    ffa: true,
    spawnNearFriends: true,
    fixedRespawnTeam: 2,
    respawnWindow: "playAgain",
    replacePickups: {
        "key": "potion_health"
    }
};
COMMON.modes.soccer = {
    teamScore: true,
    duration: 10 * 60,
    weather: ["raining", "default", "desert"],
    clock: true,
    crowdLoop: true,
    stompLoop: true,
    addKills: false,
    scoreKey: "goals",
    respawnTime: 9,
    autoRespawn: true,
    name: "football",
    background: "tile_desert",
    map: false,
    playersPerTeam: 4,
    fun: false,
    innerWidth: 400,
    innerHeight: 600,
    soccer: true,
    scoreToWin: 3,
    goblins: 0,
    bots: 0,
    sandworms: 0,
    kills: true,
    secrets: true,
    list: true,
    rankedGold: true,
    controller: "Soccer"
};
COMMON.modes.graveyard = {
    background: "tile_pavement",
    speed: 1.0,
    controller: "Graveyard",
    scoreKey: "graveyard_score",
    name: "GRAVEYARD",
    map: "graveyard",
    visibility: 1,
    fun: true,
    kills: true,
    list: true,
    maxPlayers: 30
};
COMMON.modes.fun = {
    houseMusic: "house_music",
    respawnNPC: true,
    countBones: true,
    removeDeadHeroBots: true,
    weather: ["default", "desert"],
    temperature: false,
    king: true,
    background: "tile_desert",
    scoreKey: "bones",
    allowTeamChange: 2,
    allowGameLinks: true,
    bonesToScore: true,
    speed: 1.0,
    addKills: true,
    name: "Desert Fort",
    description: "It's a TEAM ARENA server. Folks of the same color are your team.",
    allowRespawn: true,
    fun: true,
    pedestals: false,
    quicksands: false,
    sandworms: 0,
    list: true,
    maxPlayers: 30,
    grow: true,
    resetScoreOnRespawn: true,
    controller: "Survival",
    eclipse: true,
    mapGenerator: true,
    mapGeneratorConfig: {
        prefix: ["dm_"],
        padding: 3,
        max: 1,
        width: 4000 / COMMON.TILE_WIDTH | 0,
        height: 3000 / COMMON.TILE_HEIGHT | 0,
        prefixToQuantity: {
            "dm_respawn_2": 4,
            "dm_barbarians_1": 1,
            "dm_barbarians_2": 1,
            "dm_orc_sentry": 2,
            "dm_woods_1": 1,
            "dm_woods_2": 1
        },
        fixedLocations: {
            "mini_fort": {
                x: 0.5,
                y: 0.5,
                alignX: 0.5,
                alignY: 0.5
            },
            "dm_respawn_0": {
                x: 0.1,
                y: 0.1,
                quart: 0,
                alignX: 0.5,
                alignY: 0.5
            },
            "dm_respawn_1": {
                x: 0.9,
                y: 0.9,
                quart: 2,
                alignX: 0.5,
                alignY: 0.5
            },
            "barbarian_quary_1": {
                quantity: 1
            },
            "dm_barbarians_1": {
                quantity: 1
            },
            "dm_barbarians_2": {
                quantity: 1
            },
            "dm_barbarians_3": {
                quantity: 1
            },
            "mini_marketplace": {
                quantity: 1,
                x: 0.9,
                y: 0.1,
                alignX: 1.0,
                alignY: 0.0
            }
        }
    }
};
COMMON.modes.fort = {
    houseMusic: "desert_house",
    respawnNPC: true,
    countBones: true,
    removeDeadHeroBots: true,
    weather: ["desert"],
    king: true,
    background: "tile_desert",
    scoreKey: "bones",
    allowTeamChange: 2,
    allowGameLinks: true,
    bonesToScore: true,
    speed: 1.0,
    addKills: true,
    name: "Fort",
    description: "It's a TEAM ARENA server. Folks of the same color are your team.",
    allowRespawn: true,
    fun: true,
    pedestals: false,
    quicksands: false,
    sandworms: 0,
    list: true,
    maxPlayers: 30,
    grow: true,
    resetScoreOnRespawn: true,
    eclipse: true,
    map: "fort",
    replacePickups: {
        "key": "potion_health",
        "wood": "potion_health"
    }
};
COMMON.modes.hell = {
    meleeOnly: true,
    background: "tile_hell",
    autoRespawn: true,
    respawnTime: 0.5,
    pvm: true,
    scoreKey: "bones",
    meleeOnly: true,
    allowTeamChange: 0,
    speed: 1.25,
    name: "HELL",
    description: "KILL HUMAN TO BECOME A HUMAN. ONLY HUMAN CAN SCORE",
    fun: true,
    innerWidth: 800,
    innerHeight: 800,
    pedestals: 4,
    quicksands: 0,
    sandworms: 0,
    yeti: 0,
    bots: 3,
    shadows: 12,
    goblins: 0,
    list: true,
    stones: 0,
    impacts: true,
    maxPlayers: 20
};
COMMON.modes.ctf = {
    scoreKey: "flags",
    allowTeamChange: 1,
    addKills: true,
    maxPlayers: 14,
    visibility: 1,
    name: "CTF",
    list: true,
    description: "Capture the flag.",
    randomShit: true,
    map: "ctf",
    fun: true,
    bots: 14
};
COMMON.modes.practice = {
    removeDeadHeroBots: true,
    name: "Practice",
    weather: ["default", "raining"],
    background: "tile_desert",
    ffa: true,
    private: true,
    map: false,
    fun: true,
    practice: true,
    allowGameLinks: true,
    innerWidth: 400,
    innerHeight: 400,
    pedestals: 2,
    quicksands: false,
    bots: 2,
    yeti: false,
    sandworms: 0,
    goblins: false,
    list: true
};
COMMON.modes.arena1 = {
    weather: ["raining", "default", "desert"],
    teamScore: true,
    duration: 5 * 60,
    removeDeadHeroBots: false,
    background: "tile_desert",
    weather: ["snowing"],
    clock: true,
    scoreKey: "arena_mmr",
    speed: 1.0,
    addKills: true,
    respawnTime: 10,
    hideNames: false,
    hideScore: true,
    name: "arena",
    map: ["arena_1", "arena_2", "arena_3", "arena_4"],
    eclipse: false,
    playersPerTeam: 1,
    fun: false,
    scoreToWin: 3,
    goblins: 0,
    bots: 0,
    sandworms: 0,
    kills: true,
    secrets: true,
    list: true,
    rankedGold: true,
    controller: "Arena"
};
COMMON.modes.arena2 = {
    weather: ["raining", "default", "desert"],
    teamScore: true,
    duration: 5 * 60,
    stompLoop: true,
    crowdLoop: true,
    removeDeadHeroBots: false,
    clock: true,
    background: "tile_desert",
    scoreKey: "arena_mmr",
    speed: 1.0,
    clock: true,
    addKills: true,
    respawnTime: 99999,
    autoRespawn: 99999,
    hideNames: false,
    hideScore: true,
    name: "Browars",
    map: ["arena_1", "arena_2", "arena_3", "arena_4"],
    playersPerTeam: 2,
    fun: false,
    scoreToWin: 3,
    goblins: 0,
    bots: 0,
    sandworms: 0,
    kills: true,
    secrets: true,
    list: true,
    rankedGold: true,
    controller: "Arena2"
};
COMMON.modes.tutorial = {
    background: "tile_desert",
    autoRespawn: true,
    respawnTime: 3,
    name: "tutorial",
    ffa: true,
    private: true,
    fun: true,
    practice: true,
    innerWidth: 400,
    innerHeight: 400,
    pedestals: 2,
    hideScore: true,
};
COMMON.slashRotation = {
    "fx/slash_horizontal": 0.5,
    "fx/slash_vertical": 0,
    "fx/slash_claws": 0,
    "fx/slash_claws2": 0,
    "fx/slash_punch": 0,
    "fx/slash_punch2": 0,
    "fx/slash_dual_left": 0,
    "fx/slash_dual_right": 0,
    "fx/vertical_slash": 0
};
COMMON.emptyObject = {};
COMMON.weaponData = {
    attackDuration: 0.4,
    meleeDamage: 1.0,
    meleeRange: 40,
    meleeForce: 220,
    meleeArc: Math.PI,
    speed: 0,
    slashColor: "#fff" || "#c1defb",
    attackAnimations: ["attack_horizontal", "attack_vertical", "dual_wield_attack_1"],
    meleeSlash: ["fx/slash_horizontal", "fx/slash_vertical", "fx/slash_dual_right"]
};
COMMON.armory = {
    "default_voice": {
        price: 0,
        type: "voice",
        rate: 1.3,
        rateRange: 0.5
    },
    "angrybrai_voice": {
        price: 8000,
        type: "voice",
        rate: 1.0,
        rateRange: 0.0
    },
    "jacqueline_voice": {
        price: 8000,
        type: "voice",
        rate: 1.0,
        rateRange: 0.0
    },
    "bow": {
        price: 2400,
        type: "weapon",
        subtype: "bow",
        material: "wood",
        spell_one: "piercingArrow",
        onDischarge: "launchArrow",
        video: "videos/bow.mp4",
        ranged: true,
        attack: "bow",
        chargeTime: 0.65,
        chargeStaminaUsage: 0.35,
        meleeDamage: 1,
        meleeRange: 40,
        meleeArc: Math.PI,
        attackDuration: 0.6
    },
    "club": {
        price: 0,
        type: "weapon",
        material: "wood",
        onCharged: "spin",
        spell_one: "stun",
        video: "videos/axe.mp4",
        chargeTime: 0.6,
        meleeDamage: 1,
        subtype: "melee",
        chargeStaminaUsage: 0.5,
        attackDuration: 0.5,
        meleeRange: 40,
        meleeArc: Math.PI,
        slashColor: "#8f563b",
        stunChance: 0.1
    },
    "axe": {
        cut: 1,
        price: 0,
        type: "weapon",
        material: "metal",
        onCharged: "spin",
        spell_one: "gust",
        video: "videos/axe.mp4",
        chargeTime: 0.6,
        meleeDamage: 2,
        subtype: "melee",
        chargeStaminaUsage: 0.5,
        attackDuration: 0.5,
        meleeRange: 40,
        meleeArc: Math.PI
    },
    "golden_axe": {
        golden: true,
        fixedPalette: 25,
        cut: 1,
        price: 999990,
        type: "weapon",
        material: "metal",
        onCharged: "spin",
        spell_one: "gust",
        video: "videos/axe.mp4",
        chargeTime: 0.6,
        meleeDamage: 3,
        subtype: "melee",
        chargeStaminaUsage: 0.5,
        attackDuration: 0.45,
        meleeRange: 50,
        meleeArc: Math.PI,
        sprite: "axe",
        slashColor: "#fbf236"
    },
    "scythe": {
        cut: 1,
        price: 999999999,
        type: "weapon",
        material: "metal",
        spell_one: "massPull",
        onCharged: "spin",
        video: "videos/axe.mp4",
        chargeTime: 0.75,
        meleeDamage: 5,
        subtype: "melee",
        chargeStaminaUsage: 0.5,
        attackDuration: 0.5,
        meleeRange: 60,
        meleeArc: Math.PI,
        soundRate: 1.0,
        sound: "weapons/scythe_swing",
        attackAnimations: ["attack_horizontal"],
        meleeSlash: ["fx/slash_horizontal"],
        cooldowns: {
            gust: 0.6
        }
    },
    "spear": {
        price: 2400,
        type: "weapon",
        material: "metal",
        spell_one: "poleVault",
        onCharged: "lunge",
        video: "videos/spear.mp4",
        chargeTime: 0.6,
        meleeDamage: 1.25,
        subtype: "melee",
        attackAnimations: ["spear_attack"],
        meleeSlash: ["fx/slash_vertical"],
        chargeStaminaUsage: 0.6,
        attackDuration: 0.4,
        meleeRange: 60,
        meleeArc: Math.PI * 0.3,
        throwAnimation: {
            sprite: "spear_throw",
            duration: 0.5,
            timeout: 0.25,
            sound: "weapons/throw_spear"
        }
    },
    "no_weapon": {
        price: 3000,
        type: "weapon",
        material: "metal",
        onCharged: "spin",
        chargeTime: 0.6,
        meleeDamage: 0.5,
        subtype: "melee",
        attackAnimations: ["punch1", "punch2"],
        meleeSlash: ["fx/slash_punch", "fx/slash_punch2"],
        sound: "martial/punch",
        chargeStaminaUsage: 0.5,
        attackDuration: 0.25,
        speed: 10,
        meleeRange: 30,
        meleeForce: 100,
        meleeArc: Math.PI * 0.5
    },
    "claws": {
        price: 3000,
        type: "weapon",
        material: "metal",
        spell_one: "tear",
        onCharged: "spin",
        video: "videos/claws.mp4",
        chargeTime: 0.6,
        meleeDamage: 1.25,
        subtype: "melee",
        attackAnimations: ["punch1", "punch2"],
        meleeSlash: ["fx/slash_claws", "fx/slash_claws2"],
        chargeStaminaUsage: 0.5,
        attackDuration: 0.35,
        speed: 10,
        meleeRange: 30,
        meleeForce: 100,
        meleeArc: Math.PI * 0.5
    },
    "double_axe": {
        cut: 1,
        price: 300000,
        type: "weapon",
        material: "metal",
        spell_one: "focus",
        onCharged: "spin",
        video: "videos/claws.mp4",
        chargeTime: 0.6,
        meleeDamage: 1.25,
        subtype: "melee",
        attackAnimations: ["dual_wield_attack_1", "dual_wield_attack_2"],
        meleeSlash: ["fx/slash_dual_right", "fx/slash_dual_left"],
        chargeStaminaUsage: 0.5,
        attackDuration: 0.4,
        slashDelay: 0.25,
        speed: 10,
        meleeRange: 30,
        meleeForce: 100,
        meleeArc: Math.PI * 0.5
    },
    "hammer": {
        demolish: 1,
        price: 1000,
        type: "weapon",
        material: "metal",
        spell_one: "powerHit",
        onCharged: "spin",
        video: "videos/hammer.mp4",
        chargeTime: 0.6,
        meleeDamage: 2,
        subtype: "melee",
        chargeStaminaUsage: 0.5,
        attackDuration: 0.5,
        meleeRange: 40,
        meleeArc: Math.PI,
        stunChance: 0.15
    },
    "sword": {
        price: 2400,
        type: "weapon",
        material: "metal",
        spell_one: "swirl",
        onCharged: "spin",
        video: "videos/sword.mp4",
        chargeTime: 0.6,
        meleeDamage: 1.5,
        attackDuration: 0.4,
        subtype: "melee",
        chargeStaminaUsage: 0.5,
        meleeRange: 40,
        meleeArc: Math.PI,
        sound: "weapons/sword_swing"
    },
    "ice_staff": {
        price: 2400,
        type: "weapon",
        subtype: "staff",
        material: "wood",
        spell_one: "iceBolt",
        onCharged: "launchBolts",
        video: "videos/ice_staff.mp4",
        ranged: true,
        chargeTime: 0.3,
        chargeStaminaUsage: 0.4,
        meleeDamage: 1,
        attackDuration: 0.6,
        meleeRange: 40,
        meleeArc: Math.PI,
    },
    "no_helmet": {
        price: 0,
        type: "helmet",
        material: "metal"
    },
    "mohawk_hair": {
        price: 0,
        type: "cape",
        material: "wood"
    },
    "no_shield": {
        price: 0,
        type: "shield",
        material: "metal"
    },
    "hood": {
        price: 100,
        type: "helmet",
        material: "wood"
    },
    "pumpkin_head": {
        fixedPalette: 0,
        price: 20000,
        type: "helmet",
        material: "wood"
    },
    "elf_ears": {
        price: 1000,
        type: "helmet",
        material: "wood"
    },
    "demon_horns": {
        price: 1000,
        type: "helmet",
        material: "wood"
    },
    "crusader_helmet": {
        price: 5000,
        type: "helmet",
        material: "wood",
        palettes: {
            0: false,
            1: false,
            2: false
        }
    },
    "santa_hat": {
        fixedPalette: 0,
        price: 500,
        type: "helmet",
        material: "wood",
        palettes: {
            0: false,
            1: {
                "#ac3232": "#480"
            },
            2: {
                "#ac3232": "#595652"
            },
        }
    },
    "viking_helmet": {
        price: 1000,
        type: "helmet",
        material: "wood"
    },
    "observer_eye": {
        fixedPalette: 0,
        price: 10000000,
        type: "helmet",
        material: "wood"
    },
    "wizard_hat": {
        price: 5000,
        type: "helmet",
        material: "wood"
    },
    "fox_head": {
        price: 2000,
        type: "helmet",
        material: "wood",
        kind: "fox"
    },
    "legion_helmet": {
        price: 2400,
        type: "helmet",
        material: "metal"
    },
    "crown": {
        fixedPalette: 0,
        price: 50000,
        type: "helmet",
        material: "metal",
        palettes: {
            0: false,
            1: false,
            2: {
                "#fbf236": "#222034"
            }
        }
    },
    "no_cape": {
        price: 0,
        type: "cape",
        material: "cloth"
    },
    "noble_cape": {
        fixedPalette: 0,
        price: 8000,
        type: "cape",
        material: "cloth"
    },
    "backpack": {
        fixedPalette: 0,
        price: 800000,
        type: "cape",
        material: "cloth"
    },
    "barbarian_cape": {
        fixedPalette: 0,
        price: 8000,
        type: "cape",
        material: "cloth"
    },
    "white_cape": {
        fixedPalette: 0,
        price: 12000,
        type: "cape",
        material: "cloth"
    },
    "angel_wings": {
        fixedPalette: 0,
        price: 20000,
        type: "cape",
        material: "cloth"
    },
    "demon_wings": {
        fixedPalette: 0,
        price: 14000,
        type: "cape",
        material: "cloth"
    },
    "fedora": {
        price: 3000,
        type: "helmet",
        material: "wood"
    },
    "skull": {
        price: 10000,
        type: "helmet",
        material: "bone"
    },
    "shield_wooden": {
        price: 0,
        type: "shield",
        material: "wood"
    },
    "shield_usa": {
        price: 5000,
        type: "shield",
        material: "metal"
    },
    "shield_heavy": {
        price: 5000,
        type: "shield",
        material: "metal"
    }
};
for (var key in COMMON.armory) {
    let item = COMMON.armory[key];
    if (item.type !== "weapon") continue;
    COMMON.armory[key] = Object.assign({}, COMMON.weaponData, COMMON.armory[key]);
}
COMMON.ARENA_RANKS = [
    [7, 124, 9, 4],
    [18, 124, 9, 7],
    [29, 124, 9, 10],
    [7, 136, 9, 7],
    [18, 136, 9, 11],
    [29, 136, 9, 15],
    [8, 153, 7, 7],
    [19, 153, 7, 13],
    [27, 153, 13, 11],
    [8, 169, 7, 11],
    [19, 169, 7, 11],
    [30, 169, 9, 11],
    [41, 169, 12, 11]
];
COMMON.KILL_RANKS = [
    [13, 10, 6, 7],
    [24, 10, 10, 7],
    [37, 10, 14, 7],
    [11, 24, 10, 10],
    [25, 24, 11, 12],
    [39, 24, 15, 12],
    [7, 42, 14, 11],
    [23, 43, 15, 13],
    [40, 43, 19, 13],
    [6, 59, 18, 12],
    [27, 60, 19, 14],
    [48, 61, 23, 14],
    [9, 77, 10, 10],
    [23, 77, 13, 13],
    [39, 77, 15, 15],
    [5, 96, 15, 15],
    [24, 96, 15, 19],
    [42, 96, 15, 19]
];
COMMON.CTF_RANKS = [
    [4, 186, 11, 10],
    [16, 186, 11, 10],
    [28, 186, 11, 10],
    [40, 186, 11, 10],
    [52, 186, 11, 10],
    [64, 186, 11, 10],
    [4, 197, 12, 10],
    [17, 197, 12, 10],
    [30, 197, 12, 10],
    [4, 208, 13, 11],
    [18, 208, 13, 11],
    [32, 208, 13, 11]
]
COMMON.SOCCER_RANKS = [
    [4, 221, 14, 11],
    [1, 233, 17, 10],
    [2, 245, 13, 13],
    [3, 260, 12, 15],
    [19, 221, 14, 11],
    [19, 233, 17, 10],
    [16, 245, 13, 13],
    [17, 260, 12, 15],
    [34, 221, 14, 11],
    [37, 233, 17, 10],
    [30, 245, 13, 13],
    [30, 260, 12, 15]
];
COMMON.RANK_ICONS = [];
COMMON.RANK_ICONS["bones"] = COMMON.KILL_RANKS;
COMMON.RANK_ICONS["arena_mmr"] = COMMON.ARENA_RANKS;
COMMON.RANK_ICONS["flags"] = COMMON.CTF_RANKS;
COMMON.RANK_ICONS["goals"] = COMMON.SOCCER_RANKS;
COMMON.RANK_ICONS["graveyard_score"] = [
    [68, 121, 9, 11],
    [79, 121, 9, 11],
    [90, 121, 9, 11],
    [68, 133, 9, 14],
    [79, 133, 9, 14],
    [90, 133, 9, 14],
    [68, 148, 9, 14],
    [79, 148, 9, 14],
    [90, 148, 9, 14],
    [68, 163, 9, 14],
    [79, 163, 9, 14],
    [90, 163, 9, 14]
];
COMMON.SPECTATE_EMOTE_COOLDOWN = 8;
COMMON.SPECTATE_EMOTE_COOLDOWNS = {
    default: 5.0,
    clap: 1.0
}
COMMON.SPECTATE_EMOTE_MAX = {
    angry: 2,
    happy: 2,
    haha: 2,
    clap: 6
}
COMMON.edges = {
    11: {
        offset: [-1, 0],
        direction: Math.PI
    },
    12: {
        offset: [1, 0],
        direction: 0
    },
    13: {
        offset: [0, -1],
        direction: Math.PI * 1.5
    },
    14: {
        offset: [0, 1],
        direction: Math.PI * 0.5
    }
};
COMMON.quests = {
    "kill_orcs_easy": {
        "text": "Kill 10 orcs",
        "trigger": "kill",
        "minion_prefix": "orc_",
        "count": 10,
        "reward": 100,
        "icon": [243, 3, 33, 30],
        "playMode": "fun"
    },
    "kill_orcs_medium": {
        "text": "Kill 3 orc commanders",
        "trigger": "kill",
        "minion": "orc_commander",
        "count": 3,
        "reward": 150,
        "icon": [243, 3, 33, 30],
        "playMode": "fun"
    },
    "win_soccer_easy": {
        "text": "Win a football match",
        "trigger": "win_soccer",
        "count": 1,
        "reward": 100,
        "icon": [73, 2, 28, 28],
        "playMode": "soccer"
    },
    "soccer_score_goal": {
        "text": "Score a goal in football match",
        "trigger": "soccer_score_goal",
        "count": 1,
        "reward": 100,
        "icon": [73, 2, 28, 28],
        "playMode": "soccer"
    },
    "soccer_score_goal_hard": {
        "text": "Score two goals in one football match",
        "trigger": "soccer_score_goal",
        "count": 2,
        "reward": 150,
        "icon": [73, 2, 28, 28],
        "playMode": "soccer"
    },
    "heal_someone": {
        "text": "Heal another person (throw healing potion at them)",
        "count": 1,
        "trigger": "pass_pickup",
        "pickup": "potion_health",
        "reward": 75,
        "playMode": 0,
        "icon": [106, 0, 28, 32]
    },
    "win_arena_easy": {
        "text": "Win any arena match",
        "maxDeaths": 2,
        "trigger": "win_arena",
        "reward": 50,
        "playMode": 4,
        "icon": [137, 6, 20, 24]
    },
    "win_arena_medium": {
        "text": "Win arena match - you can die once",
        "maxDeaths": 1,
        "trigger": "win_arena",
        "reward": 100,
        "playMode": 4,
        "icon": [137, 6, 20, 24]
    },
    "win_arena_hard": {
        "text": "Win arena match without losing",
        "maxDeaths": 0,
        "trigger": "win_arena",
        "reward": 200,
        "playMode": 4,
        "icon": [137, 6, 20, 24]
    },
    "kill_easy": {
        "text": "Kill 10 enemies",
        "count": 10,
        "trigger": "kill",
        "reward": 50,
        "playMode": 0,
        "icon": [162, 3, 30, 30]
    },
    "kill_medium": {
        "text": "Kill 3 enemies without dying",
        "count": 3,
        "trigger": "kill",
        "reward": 100,
        "playMode": 0,
        "resetOnDeath": true,
        "icon": [162, 3, 30, 30]
    },
    "kill_hard": {
        "text": "Kill 6 enemies without dying",
        "count": 6,
        "trigger": "kill",
        "reward": 200,
        "playMode": 0,
        "resetOnDeath": true,
        "icon": [162, 3, 30, 30]
    },
    "block_easy": {
        "text": "Successfully block 3 times",
        "count": 3,
        "trigger": "block",
        "reward": 75,
        "playMode": 0,
        "icon": [195, 4, 30, 30]
    },
    "block_medium": {
        "text": "Successfully block 6 times without dying",
        "count": 6,
        "trigger": "block",
        "reward": 100,
        "playMode": 0,
        "resetOnDeath": true,
        "icon": [195, 4, 30, 30]
    },
    "block_hard": {
        "text": "Successfully block 10 times without dying",
        "count": 10,
        "trigger": "block",
        "reward": 200,
        "playMode": 0,
        "resetOnDeath": true,
        "icon": [195, 4, 30, 30]
    },
    "fuel_campfire_easy": {
        "text": "Throw 4 pieces of wood into campfire",
        "count": 4,
        "trigger": "fuel_campfire",
        "reward": 50,
        "playMode": 0,
        "icon": [30, 0, 36, 32]
    },
    "rebuild_gate_easy": {
        "text": "Repair fort gate using 4 pieces of wood",
        "count": 4,
        "trigger": "rebuild_gate",
        "reward": 100,
        "playMode": 0,
        "icon": [30, 0, 36, 32]
    },
    "rebuild_gate_medium": {
        "text": "Repair fort gate using 16 pieces of wood",
        "count": 16,
        "trigger": "rebuild_gate",
        "reward": 150,
        "playMode": 0,
        "icon": [30, 0, 36, 32]
    },
    "rebuild_gate_hard": {
        "text": "Repair fort gate using 16 pieces of wood without dying",
        "count": 16,
        "trigger": "rebuild_gate",
        "reward": 200,
        "playMode": 0,
        "resetOnDeath": true,
        "icon": [30, 0, 36, 32]
    },
    "cut_down_trees": {
        "text": "Cut down 10 trees",
        "count": 10,
        "trigger": "cut_down_tree",
        "reward": 50,
        "playMode": 0,
        "icon": [30, 0, 36, 32]
    },
    "cut_down_trees_medium": {
        "text": "Cut down 20 trees",
        "count": 20,
        "trigger": "cut_down_tree",
        "reward": 100,
        "playMode": 0,
        "icon": [30, 0, 36, 32]
    },
    "destroy_gate": {
        "text": "Destroy the fort gate",
        "count": 1,
        "trigger": "destroy_gate",
        "reward": 100,
        "playMode": 0,
        "icon": [0, 0, 30, 30]
    },
    "kill_with_mine": {
        "text": "Kill anyone with a mine",
        "count": 1,
        "trigger": "kill_with_mine",
        "reward": 100,
        "playMode": 0,
        "icon": [0, 0, 30, 30]
    },
    "kill_with_mine_hard": {
        "text": "Kill 3 enemies with a mine",
        "count": 3,
        "trigger": "kill_with_mine",
        "reward": 250,
        "playMode": 0,
        "icon": [0, 0, 30, 30]
    },
    "kill_with_thrown_weapon_easy": {
        "text": "Kill someone throwing your weapon",
        "count": 1,
        "trigger": "kill_with_thrown_weapon",
        "reward": 100,
        "playMode": 0,
        "icon": [231, 3, 9, 29]
    },
    "kill_with_throwing_knife": {
        "text": "Kill someone with a throwing knife",
        "count": 1,
        "trigger": "kill_with_throwing_knife",
        "reward": 100,
        "playMode": 0,
        "icon": [231, 3, 9, 29]
    }
};
COMMON.countryNames = {
    "ad": "Andorra | Andorra",
    "ae": "دولة الإمارات العربية المتحدة | United Arab Emirates",
    "af": "افغانستان | Afghanistan",
    "ag": "Antigua and Barbuda | Antigua and Barbuda",
    "ai": "Anguilla | Anguilla",
    "al": "Shqipëria | Albania",
    "am": "Հայաստան | Armenia",
    "ao": "Angola | Angola",
    "aq": "Antarctica | Antarctica",
    "ar": "Argentina | Argentina",
    "as": "American Samoa | American Samoa",
    "at": "Österreich | Austria",
    "au": "Australia | Australia",
    "aw": "Aruba | Aruba",
    "ax": "Åland | Åland",
    "az": "Azərbaycan | Azerbaijan",
    "ba": "Bosna i Hercegovina | Bosnia and Herzegovina",
    "bb": "Barbados | Barbados",
    "bd": "Bangladesh | Bangladesh",
    "be": "België | Belgium",
    "bf": "Burkina Faso | Burkina Faso",
    "bg": "България | Bulgaria",
    "bh": "‏البحرين | Bahrain",
    "bi": "Burundi | Burundi",
    "bj": "Bénin | Benin",
    "bl": "Saint-Barthélemy | Saint Barthélemy",
    "bm": "Bermuda | Bermuda",
    "bn": "Negara Brunei Darussalam | Brunei",
    "bo": "Bolivia | Bolivia",
    "bq": "Bonaire | Bonaire",
    "br": "Brasil | Brazil",
    "bs": "Bahamas | Bahamas",
    "bt": "ʼbrug-yul | Bhutan",
    "bv": "Bouvetøya | Bouvet Island",
    "bw": "Botswana | Botswana",
    "by": "Белару́сь | Belarus",
    "bz": "Belize | Belize",
    "ca": "Canada | Canada",
    "cc": "Cocos (Keeling) Islands | Cocos [Keeling] Islands",
    "cd": "République démocratique du Congo | Democratic Republic of the Congo",
    "cf": "Ködörösêse tî Bêafrîka | Central African Republic",
    "cg": "République du Congo | Republic of the Congo",
    "ch": "Schweiz | Switzerland",
    "ci": "Côte d'Ivoire | Ivory Coast",
    "ck": "Cook Islands | Cook Islands",
    "cl": "Chile | Chile",
    "cm": "Cameroon | Cameroon",
    "cn": "中国 | China",
    "co": "Colombia | Colombia",
    "cr": "Costa Rica | Costa Rica",
    "cu": "Cuba | Cuba",
    "cv": "Cabo Verde | Cape Verde",
    "cw": "Curaçao | Curacao",
    "cx": "Christmas Island | Christmas Island",
    "cy": "Κύπρος | Cyprus",
    "cz": "Česká republika | Czech Republic",
    "de": "Deutschland | Germany",
    "dj": "Djibouti | Djibouti",
    "dk": "Danmark | Denmark",
    "dm": "Dominica | Dominica",
    "do": "República Dominicana | Dominican Republic",
    "dz": "الجزائر | Algeria",
    "ec": "Ecuador | Ecuador",
    "ee": "Eesti | Estonia",
    "eg": "مصر‎ | Egypt",
    "eh": "الصحراء الغربية | Western Sahara",
    "er": "ኤርትራ | Eritrea",
    "es": "España | Spain",
    "et": "ኢትዮጵያ | Ethiopia",
    "fi": "Suomi | Finland",
    "fj": "Fiji | Fiji",
    "fk": "Falkland Islands | Falkland Islands",
    "fm": "Micronesia | Micronesia",
    "fo": "Føroyar | Faroe Islands",
    "fr": "France | France",
    "ga": "Gabon | Gabon",
    "gb": "United Kingdom | United Kingdom",
    "gd": "Grenada | Grenada",
    "ge": "საქართველო | Georgia",
    "gf": "Guyane française | French Guiana",
    "gg": "Guernsey | Guernsey",
    "gh": "Ghana | Ghana",
    "gi": "Gibraltar | Gibraltar",
    "gl": "Kalaallit Nunaat | Greenland",
    "gm": "Gambia | Gambia",
    "gn": "Guinée | Guinea",
    "gp": "Guadeloupe | Guadeloupe",
    "gq": "Guinea Ecuatorial | Equatorial Guinea",
    "gr": "Ελλάδα | Greece",
    "gs": "South Georgia | South Georgia and the South Sandwich Islands",
    "gt": "Guatemala | Guatemala",
    "gu": "Guam | Guam",
    "gw": "Guiné-Bissau | Guinea-Bissau",
    "gy": "Guyana | Guyana",
    "hk": "香港 | Hong Kong",
    "hm": "Heard Island and McDonald Islands | Heard Island and McDonald Islands",
    "hn": "Honduras | Honduras",
    "hr": "Hrvatska | Croatia",
    "ht": "Haïti | Haiti",
    "hu": "Magyarország | Hungary",
    "id": "Indonesia | Indonesia",
    "ie": "Éire | Ireland",
    "il": "יִשְׂרָאֵל | Israel",
    "im": "Isle of Man | Isle of Man",
    "in": "भारत | India",
    "io": "British Indian Ocean Territory | British Indian Ocean Territory",
    "iq": "العراق | Iraq",
    "ir": "ایران | Iran",
    "is": "Ísland | Iceland",
    "it": "Italia | Italy",
    "je": "Jersey | Jersey",
    "jm": "Jamaica | Jamaica",
    "jo": "الأردن | Jordan",
    "jp": "日本 | Japan",
    "ke": "Kenya | Kenya",
    "kg": "Кыргызстан | Kyrgyzstan",
    "kh": "Kâmpŭchéa | Cambodia",
    "ki": "Kiribati | Kiribati",
    "km": "Komori | Comoros",
    "kn": "Saint Kitts and Nevis | Saint Kitts and Nevis",
    "kp": "북한 | North Korea",
    "kr": "대한민국 | South Korea",
    "kw": "الكويت | Kuwait",
    "ky": "Cayman Islands | Cayman Islands",
    "kz": "Қазақстан | Kazakhstan",
    "la": "ສປປລາວ | Laos",
    "lb": "لبنان | Lebanon",
    "lc": "Saint Lucia | Saint Lucia",
    "li": "Liechtenstein | Liechtenstein",
    "lk": "śrī laṃkāva | Sri Lanka",
    "lr": "Liberia | Liberia",
    "ls": "Lesotho | Lesotho",
    "lt": "Lietuva | Lithuania",
    "lu": "Luxembourg | Luxembourg",
    "lv": "Latvija | Latvia",
    "ly": "‏ليبيا | Libya",
    "ma": "المغرب | Morocco",
    "mc": "Monaco | Monaco",
    "md": "Moldova | Moldova",
    "me": "Црна Гора | Montenegro",
    "mf": "Saint-Martin | Saint Martin",
    "mg": "Madagasikara | Madagascar",
    "mh": "M̧ajeļ | Marshall Islands",
    "mk": "Македонија | Macedonia",
    "ml": "Mali | Mali",
    "mm": "Myanma | Myanmar [Burma]",
    "mn": "Монгол улс | Mongolia",
    "mo": "澳門 | Macao",
    "mp": "Northern Mariana Islands | Northern Mariana Islands",
    "mq": "Martinique | Martinique",
    "mr": "موريتانيا | Mauritania",
    "ms": "Montserrat | Montserrat",
    "mt": "Malta | Malta",
    "mu": "Maurice | Mauritius",
    "mv": "Maldives | Maldives",
    "mw": "Malawi | Malawi",
    "mx": "México | Mexico",
    "my": "Malaysia | Malaysia",
    "mz": "Moçambique | Mozambique",
    "na": "Namibia | Namibia",
    "nc": "Nouvelle-Calédonie | New Caledonia",
    "ne": "Niger | Niger",
    "nf": "Norfolk Island | Norfolk Island",
    "ng": "Nigeria | Nigeria",
    "ni": "Nicaragua | Nicaragua",
    "nl": "Nederland | Netherlands",
    "no": "Norge | Norway",
    "np": "नपल | Nepal",
    "nr": "Nauru | Nauru",
    "nu": "Niuē | Niue",
    "nz": "New Zealand | New Zealand",
    "om": "عمان | Oman",
    "pa": "Panamá | Panama",
    "pe": "Perú | Peru",
    "pf": "Polynésie française | French Polynesia",
    "pg": "Papua Niugini | Papua New Guinea",
    "ph": "Pilipinas | Philippines",
    "pk": "Pakistan | Pakistan",
    "pl": "Polska | Poland",
    "pm": "Saint-Pierre-et-Miquelon | Saint Pierre and Miquelon",
    "pn": "Pitcairn Islands | Pitcairn Islands",
    "pr": "Puerto Rico | Puerto Rico",
    "ps": "فلسطين | Palestine",
    "pt": "Portugal | Portugal",
    "pw": "Palau | Palau",
    "py": "Paraguay | Paraguay",
    "qa": "قطر | Qatar",
    "re": "La Réunion | Réunion",
    "ro": "România | Romania",
    "rs": "Србија | Serbia",
    "ru": "Россия | Russia",
    "rw": "Rwanda | Rwanda",
    "sa": "العربية السعودية | Saudi Arabia",
    "sb": "Solomon Islands | Solomon Islands",
    "sc": "Seychelles | Seychelles",
    "sd": "السودان | Sudan",
    "se": "Sverige | Sweden",
    "sg": "Singapore | Singapore",
    "sh": "Saint Helena | Saint Helena",
    "si": "Slovenija | Slovenia",
    "sj": "Svalbard og Jan Mayen | Svalbard and Jan Mayen",
    "sk": "Slovensko | Slovakia",
    "sl": "Sierra Leone | Sierra Leone",
    "sm": "San Marino | San Marino",
    "sn": "Sénégal | Senegal",
    "so": "Soomaaliya | Somalia",
    "sr": "Suriname | Suriname",
    "ss": "South Sudan | South Sudan",
    "st": "São Tomé e Príncipe | São Tomé and Príncipe",
    "sv": "El Salvador | El Salvador",
    "sx": "Sint Maarten | Sint Maarten",
    "sy": "سوريا | Syria",
    "sz": "Swaziland | Swaziland",
    "tc": "Turks and Caicos Islands | Turks and Caicos Islands",
    "td": "Tchad | Chad",
    "tf": "Territoire des Terres australes et antarctiques fr | French Southern Territories",
    "tg": "Togo | Togo",
    "th": "ประเทศไทย | Thailand",
    "tj": "Тоҷикистон | Tajikistan",
    "tk": "Tokelau | Tokelau",
    "tl": "Timor-Leste | East Timor",
    "tm": "Türkmenistan | Turkmenistan",
    "tn": "تونس | Tunisia",
    "to": "Tonga | Tonga",
    "tr": "Türkiye | Turkey",
    "tt": "Trinidad and Tobago | Trinidad and Tobago",
    "tv": "Tuvalu | Tuvalu",
    "tw": "臺灣 | Taiwan",
    "tz": "Tanzania | Tanzania",
    "ua": "Україна | Ukraine",
    "ug": "Uganda | Uganda",
    "um": "United States Minor Outlying Islands | U.S. Minor Outlying Islands",
    "us": "United States | United States",
    "uy": "Uruguay | Uruguay",
    "uz": "O‘zbekiston | Uzbekistan",
    "va": "Vaticano | Vatican City",
    "vc": "Saint Vincent and the Grenadines | Saint Vincent and the Grenadines",
    "ve": "Venezuela | Venezuela",
    "vg": "British Virgin Islands | British Virgin Islands",
    "vi": "United States Virgin Islands | U.S. Virgin Islands",
    "vn": "Việt Nam | Vietnam",
    "vu": "Vanuatu | Vanuatu",
    "wf": "Wallis et Futuna | Wallis and Futuna",
    "ws": "Samoa | Samoa",
    "ye": "اليَمَن | Yemen",
    "yt": "Mayotte | Mayotte",
    "za": "South Africa | South Africa",
    "zm": "Zambia | Zambia",
    "zw": "Zimbabwe | Zimbabwe",
    "xx": "Unknown"
};