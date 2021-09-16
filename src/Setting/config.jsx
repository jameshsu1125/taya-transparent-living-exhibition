import UserAgent from 'lesca-user-agent';

const device = UserAgent.get();

export default {};
export const HASHTAG = '大亞電線電纜_透明生活展';
export const EXHIBITION_DATE_LINE = new Date(2021, 9, 4, 23, 59, 59);
export const TARGETINDEX = {
	motorcycle: 0,
	ricecooker: 1,
	earphone: 2,
	pump: 3,
	mobile: 4,
	evcharger: 5,
	cable: 6,
};

export const ITEMS_SELECT = [
	{ title: '電動機車', subtitle: 'Electric Motorcycle', category: '奈米煩惱' },
	{ title: '電飯鍋', subtitle: 'Electric Rice Cooker', category: '溫熱的支持' },
	{ title: '無線耳機', subtitle: 'Wireless Earphone', category: '上班前的儀式' },
	{ title: '泵浦', subtitle: 'Pump', category: '深夜的熱水澡' },
	{ title: '手機', subtitle: 'Mobile Phone', category: '我愛你' },
	{ title: '充電樁', subtitle: 'EV Charger', category: '去海裡呼吸' },
	{ title: '高壓電纜', subtitle: 'High-Voltage Cable', category: '再讓我試試' },
];

export const INTRO_TITLE = [
	'在我們熟悉的日常裡',
	'大亞電線電纜隱身其中',
	'',
	'它串連生活的需求',
	'維繫人們情感的交流',
	'讓生活得以連結',
];

const r = { mobile: { b: 60 }, desktop: { b: 35 } };
const p = { mobile: { b: 40 }, desktop: { b: 35 } };

// Motorcycle 0
export const STORY_MOTORCYCLE_PAGE0 = [
	{
		text: '大家是這麼調侃我的工作',
		mobile: { x: -220, y: -350 },
		desktop: { x: -190, y: -170 },
		delay: 5000,
	},
	{
		text: '擅長為不是自己的錯道歉',
		mobile: { x: -200 + 70, y: -350 + r[device].b },
		desktop: { x: -130, y: -170 + r[device].b },
		delay: 4000,
	},
	{
		text: '說來諷刺但又真實',
		mobile: { x: -30, y: -350 + r[device].b * 2 },
		desktop: { x: -100, y: -170 + r[device].b * 2 },
		delay: 4500,
	},
	{
		text: '我告訴自己不用太在意',
		mobile: { x: 30, y: -350 + r[device].b * 3 },
		desktop: { x: -60, y: -170 + r[device].b * 3 },
		delay: 3000,
	},

	{
		text: '下班從二段到五段的距離',
		mobile: { x: -290, y: -50 + r[device].b * 0 },
		desktop: { x: -180, y: 20 + r[device].b * 0 },
		delay: 3500,
	},
	{
		text: '表定三十分鐘，一定會被我拉到五十',
		mobile: { x: -190, y: -50 + r[device].b * 1 },
		desktop: { x: -120, y: 20 + r[device].b * 1 },
		delay: 4000,
	},

	{
		text: '我在車上看著高樓大廈閃過',
		mobile: { x: -150, y: 150 + r[device].b * 0 },
		desktop: { x: 0, y: 150 + r[device].b * 0 },
		delay: 5000,
	},
	{
		text: '停紅綠燈時抬頭望著天空，放空',
		mobile: { x: -70, y: 150 + r[device].b * 1 },
		desktop: { x: 60, y: 150 + r[device].b * 1 },
		delay: 4000,
	},
	{
		text: '我的思緒開始漫遊',
		mobile: { x: 80, y: 150 + r[device].b * 2 },
		desktop: { x: 170, y: 150 + r[device].b * 2 },
		delay: 3500,
	},
];

export const STORY_MOTORCYCLE_PAGE1 = [
	{
		text: '這個世界好大',
		mobile: { x: -290, y: -430 },
		desktop: { x: -80, y: -240 },
		delay: 0,
	},
	{
		text: '好多事還沒做過，好多地方還沒去過',
		mobile: { x: -290, y: -430 + r[device].b },
		desktop: { x: -80, y: -240 + r[device].b },
		delay: 3000,
	},

	{
		text: '這個世界好大',
		mobile: { x: -140, y: -280 },
		desktop: { x: 20, y: -240 + r[device].b * 2 },
		delay: 7500,
	},
	{
		text: '我好小，在我裡面的煩惱又更小',
		mobile: { x: -140, y: -280 + r[device].b },
		desktop: { x: 20, y: -240 + r[device].b * 3 },
		delay: 2200,
	},

	{
		text: '比起這棟高樓、這座城市、這個世界',
		mobile: { x: -290, y: 70 },
		desktop: { x: -110, y: 70 },
		delay: 6300,
	},
	{
		text: '我的煩惱是奈米煩惱',
		mobile: { x: -10, y: 70 + r[device].b },
		desktop: { x: 70, y: 70 + r[device].b },
		delay: 5500,
	},

	{
		text: '想了一想',
		mobile: { x: -70, y: 420 + r[device].b * 0 },
		desktop: { x: 150, y: 180 + r[device].b * 0 },
		delay: 3000,
	},
	{
		text: '有些事真的不是那麼重要',
		mobile: { x: 10, y: 420 + r[device].b * 1 },
		desktop: { x: 200, y: 180 + r[device].b * 1 },
		delay: 1500,
	},
];

export const STORY_MOTORCYCLE_PAGE2 = [
	{
		text: '然後我開始往家的方向騎',
		mobile: { x: -140, y: -430 },
		desktop: { x: -80, y: -240 },
		delay: 1000,
	},

	{
		text: '剛剛與街景交換的心底秘密',
		mobile: { x: -230, y: -340 },
		desktop: { x: 10, y: -165 + r[device].b * 0 },
		delay: 5000,
	},
	{
		text: '洗滌我的身心、充電',
		mobile: { x: -50, y: -340 + r[device].b * 1 },
		desktop: { x: 120, y: -165 + r[device].b * 1 },
		delay: 3900,
	},

	{
		text: '然後回家',
		mobile: { x: 180, y: -190 + r[device].b * 0 },
		desktop: { x: 250, y: -30 },
		delay: 2000,
	},
];
// x: -82, y: -280,
export const STORY_MOTORCYCLE_PAGE3 = [
	{
		text: 'EAIW、IFDW',
		mobile: { x: -93, y: -440 + p[device].b * 0 },
		desktop: { x: -490, y: -210 + p[device].b * 0 },
		delay: 0,
	},
	{
		text: '不只是電動機車裡的漆包線線圈',
		mobile: { x: -186, y: -440 + p[device].b * 1.5 },
		desktop: { x: -490, y: -210 + p[device].b * 1.5 },
		delay: 3400,
	},
	{
		text: '也將疲憊的自己推動向前',
		mobile: { x: -146, y: -440 + p[device].b * 3 },
		desktop: { x: -490, y: -210 + p[device].b * 3 },
		delay: 3500,
	},
	{
		text: '連結每個日常',
		mobile: { x: -82, y: -440 + p[device].b * 4.5 },
		desktop: { x: -490, y: -210 + p[device].b * 4.5 },
		delay: 4000,
	},
];

// rice cooker 1

export const STORY_RICECOOKER_PAGE0 = [
	{
		text: '我不被諒解，但我理解',
		mobile: { x: -70, y: -330 + r[device].b * 0 },
		desktop: { x: 260, y: -240 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '誰願意讓寶貝女兒冒這種風險',
		mobile: { x: -70, y: -330 + r[device].b * 1 },
		desktop: { x: 260, y: -240 + r[device].b * 1 },
		delay: 3500,
	},
	{
		text: '簡單安全的不做，非要奔往前線',
		mobile: { x: -70, y: -330 + r[device].b * 2 },
		desktop: { x: 260, y: -240 + r[device].b * 2 },
		delay: 3800,
	},
	{
		text: '不管兔寶寶裝有多悶多熱都得穿著',
		mobile: { x: -90, y: 50 + r[device].b * 0 },
		desktop: { x: 80, y: 30 + r[device].b * 0 },
		delay: 6000,
	},
	{
		text: '不管口罩壓痕有多深都要繼續',
		mobile: { x: -120, y: 50 + r[device].b * 1 },
		desktop: { x: 70, y: 30 + r[device].b * 1 },
		delay: 6500,
	},
	{
		text: '感受每個繃緊神經奮鬥的壓力',
		mobile: { x: -40, y: 50 + r[device].b * 2 },
		desktop: { x: 140, y: 30 + r[device].b * 2 },
		delay: 6000,
	},
	{
		text: '因為我明白多一個人分擔',
		mobile: { x: -60, y: 330 + r[device].b * 0 },
		desktop: { x: 190, y: 190 + r[device].b * 0 },
		delay: 4500,
	},
	{
		text: '就少一個人崩潰',
		mobile: { x: 110, y: 330 + r[device].b * 1 },
		desktop: { x: 300, y: 190 + r[device].b * 1 },
		delay: 4500,
	},
];

export const STORY_RICECOOKER_PAGE1 = [
	{
		text: '冷戰兩週後回家的那天',
		mobile: { x: -250, y: -280 + r[device].b * 0 },
		desktop: { x: 100, y: -240 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '看見爸爸站在電飯鍋前',
		mobile: { x: -250, y: -280 + r[device].b * 1 },
		desktop: { x: 100, y: -240 + r[device].b * 1 },
		delay: 3500,
	},
	{
		text: '把飯匙舀下的第一勺，放進了我的碗',
		mobile: { x: -250, y: -280 + r[device].b * 2 },
		desktop: { x: 100, y: -240 + r[device].b * 2 },
		delay: 3500,
	},
	{
		text: '因為最上層的飯',
		mobile: { x: -230, y: 50 + r[device].b * 0 },
		desktop: { x: 110, y: 50 + r[device].b * 0 },
		delay: 6000,
	},
	{
		text: '是從小到大喜歡的偏硬口感',
		mobile: { x: -150, y: 50 + r[device].b * 1 },
		desktop: { x: 147, y: 50 + r[device].b * 1 },
		delay: 2000,
	},
];

export const STORY_RICECOOKER_PAGE2 = [
	{
		text: '還是沒人開口',
		mobile: { x: -290, y: -60 + r[device].b * 0 },
		desktop: { x: -250, y: -160 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '但我知道',
		mobile: { x: -230, y: -60 + r[device].b * 1 },
		desktop: { x: -210, y: -160 + r[device].b * 1 },
		delay: 2500,
	},
	{
		text: '桌上的那碗熱白飯',
		mobile: { x: -270, y: -60 + r[device].b * 2 },
		desktop: { x: -187, y: -160 + r[device].b * 2 },
		delay: 3000,
	},
	{
		text: '就是有他支持的證明',
		mobile: { x: -210, y: -60 + r[device].b * 3 },
		desktop: { x: -150, y: -160 + r[device].b * 3 },
		delay: 2200,
	},
];

export const STORY_RICECOOKER_PAGE3 = [
	{
		text: 'CCAW',
		mobile: { x: -42, y: -440 + p[device].b * 0 },
		desktop: { x: -490, y: -210 + p[device].b * 0 },
		delay: 0,
	},
	{
		text: '不只是電飯鍋裡的漆包線線圈',
		mobile: { x: -175, y: -440 + p[device].b * 1.5 },
		desktop: { x: -490, y: -210 + p[device].b * 1.5 },
		delay: 2500,
	},
	{
		text: '也乘載溫熱的支持',
		mobile: { x: -108, y: -440 + p[device].b * 3 },
		desktop: { x: -490, y: -210 + p[device].b * 3 },
		delay: 3500,
	},
	{
		text: '連結每個日常',
		mobile: { x: -82, y: -440 + p[device].b * 4.5 },
		desktop: { x: -490, y: -210 + p[device].b * 4.5 },
		delay: 2500,
	},
];

// ear phone 2
export const STORY_EARPHONE_PAGE0 = [
	{
		text: '「手機、鑰匙、錢包」',
		mobile: { x: -120, y: -260 + r[device].b * 0 },
		desktop: { x: -400, y: -30 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '在心裡默念完邁向門口後',
		mobile: { x: -40, y: -260 + r[device].b * 1 },
		desktop: { x: -350, y: -30 + r[device].b * 1 },
		delay: 4000,
	},
	{
		text: '又轉了一圈回頭',
		mobile: { x: 110, y: -260 + r[device].b * 2 },
		desktop: { x: -260, y: -30 + r[device].b * 2 },
		delay: 3500,
	},

	{
		text: '「耳機。耳機，還好有想起來」',
		mobile: { x: -290, y: 160 + r[device].b * 0 },
		desktop: { x: -200, y: 190 + r[device].b * 0 },
		delay: 2800,
	},
];

export const STORY_EARPHONE_PAGE1 = [
	{
		text: '習慣在心理跟生理都不算輕鬆的上班路程',
		mobile: { x: -290, y: -300 + r[device].b * 0 },
		desktop: { x: -50, y: -180 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '為自己準備一個小小的儀式',
		mobile: { x: -110, y: -300 + r[device].b * 1 },
		desktop: { x: 60, y: -180 + r[device].b * 1 },
		delay: 5000,
	},
	{
		text: '零四分的公車',
		mobile: { x: -40, y: -300 + r[device].b * 2 },
		desktop: { x: 100, y: -180 + r[device].b * 2 },
		delay: 4000,
	},
	{
		text: '我會準時在零零分就抵達',
		mobile: { x: 10, y: -300 + r[device].b * 3 },
		desktop: { x: 140, y: -180 + r[device].b * 3 },
		delay: 2000,
	},

	{
		text: '在那四分鐘的時間戴上耳機',
		mobile: { x: -290, y: 210 + r[device].b * 0 },
		desktop: { x: 80, y: 60 + r[device].b * 0 },
		delay: 3500,
	},
	{
		text: '綜合評估心境',
		mobile: { x: -100, y: 210 + r[device].b * 1 },
		desktop: { x: 200, y: 60 + r[device].b * 1 },
		delay: 3000,
	},

	{
		text: '慎重地選擇最符合的一首',
		mobile: { x: 10, y: 410 + r[device].b * 0 },
		desktop: { x: 230, y: 180 + r[device].b * 0 },
		delay: 2000,
	},
];

export const STORY_EARPHONE_PAGE2 = [
	{
		text: '從煩雜的狀態抽離',
		mobile: { x: -290, y: -440 + r[device].b * 0 },
		desktop: { x: -350, y: -230 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '讓音樂傳進耳朵，歌詞佔據思緒',
		mobile: { x: -230, y: -440 + r[device].b * 1 },
		desktop: { x: -350, y: -230 + r[device].b * 1 },
		delay: 3000,
	},

	{
		text: '隔絕外界聲音，進入一個只有自己的空間裡',
		mobile: { x: -190, y: -280 + r[device].b * 0 },
		desktop: { x: -50, y: -100 + r[device].b * 0 },
		delay: 5000,
	},
	{
		text: '隔絕腦內還沒被整理的想法',
		mobile: { x: -190, y: -280 + r[device].b * 1 },
		desktop: { x: -50, y: -100 + r[device].b * 1 },
		delay: 5000,
	},
	{
		text: '隔絕老闆，又或是隔絕自己對自己的期待',
		mobile: { x: -190, y: -280 + r[device].b * 2 },
		desktop: { x: -50, y: -100 + r[device].b * 2 },
		delay: 4000,
	},

	{
		text: '在上班之前，再逃離一下',
		mobile: { x: -290, y: -30 + r[device].b * 0 },
		desktop: { x: -100, y: 160 + r[device].b * 0 },
		delay: 6500,
	},
	{
		text: '隨著音樂的遞進',
		mobile: { x: -140, y: -30 + r[device].b * 1 },
		desktop: { x: -10, y: 160 + r[device].b * 1 },
		delay: 4000,
	},
	{
		text: '慢慢、好好地開啟新的一天',
		mobile: { x: -50, y: -30 + r[device].b * 2 },
		desktop: { x: 40, y: 160 + r[device].b * 2 },
		delay: 2000,
	},
];

export const STORY_EARPHONE_PAGE3 = [
	{
		text: 'UEW',
		mobile: { x: -34, y: -440 + p[device].b * 0 },
		desktop: { x: -490, y: -210 + p[device].b * 0 },
		delay: 0,
	},
	{
		text: '不只是無線耳機裡的漆包線線圈',
		mobile: { x: -175, y: -440 + p[device].b * 1.5 },
		desktop: { x: -490, y: -210 + p[device].b * 1.5 },
		delay: 2000,
	},
	{
		text: '更讓每次播放傳遞好的開始',
		mobile: { x: -146, y: -440 + p[device].b * 3 },
		desktop: { x: -490, y: -210 + p[device].b * 3 },
		delay: 3500,
	},
	{
		text: '連結每個日常',
		mobile: { x: -82, y: -440 + p[device].b * 4.5 },
		desktop: { x: -490, y: -210 + p[device].b * 4.5 },
		delay: 3500,
	},
];

// pump 3
export const STORY_PUMP_PAGE0 = [
	{
		text: '架設浪貓照護站的計畫開始至今',
		mobile: { x: -130, y: -320 + r[device].b * 0 },
		desktop: { x: 7, y: -170 + r[device].b * 0 },
		delay: 1500,
	},
	{
		text: '她總是台中台北兩地跑',
		mobile: { x: 30, y: -320 + r[device].b * 1 },
		desktop: { x: 112, y: -170 + r[device].b * 1 },
		delay: 4000,
	},

	{
		text: '在街頭與抗議居民處久了',
		mobile: { x: -240, y: -100 + r[device].b * 0 },
		desktop: { x: 7, y: -80 + r[device].b * 0 },
		delay: 3000,
	},
	{
		text: '終於有機會回到西屯家裡',
		mobile: { x: -120, y: -100 + r[device].b * 1 },
		desktop: { x: 67, y: -80 + r[device].b * 1 },
		delay: 3300,
	},
	{
		text: '她小心翼翼地拿出包包裡的鑰匙',
		mobile: { x: -290, y: -100 + r[device].b * 2 },
		desktop: { x: -3, y: -80 + r[device].b * 2 },
		delay: 3500,
	},
	{
		text: '輕輕插入鑰匙孔',
		mobile: { x: -290, y: -100 + r[device].b * 3 },
		desktop: { x: -3, y: -80 + r[device].b * 3 },
		delay: 5000,
	},
	{
		text: '盡量將動作放到最小',
		mobile: { x: -240, y: -100 + r[device].b * 4 },
		desktop: { x: -37, y: -80 + r[device].b * 4 },
		delay: 2800,
	},

	{
		text: '深怕把家人吵醒，又是一陣沒完沒了的關心',
		mobile: { x: -220, y: 420 + r[device].b * 0 },
		desktop: { x: -67, y: 170 + r[device].b * 0 },
		delay: 4200,
	},
];

export const STORY_PUMP_PAGE1 = [
	{
		text: '這時天還未亮',
		mobile: { x: -200, y: -440 + r[device].b * 0 },
		desktop: { x: -380, y: -190 + r[device].b * 0 },
		delay: 500,
	},
	{
		text: '隔壁賣菜的一家子已經擠在發財車上',
		mobile: { x: -170, y: -440 + r[device].b * 1 },
		desktop: { x: -360, y: -190 + r[device].b * 1 },
		delay: 3500,
	},
	{
		text: '準備前往市場',
		mobile: { x: 100, y: -440 + r[device].b * 2 },
		desktop: { x: -200, y: -190 + r[device].b * 2 },
		delay: 4500,
	},

	{
		text: '車的引擎發動轟隆轟隆',
		mobile: { x: 30, y: -50 + r[device].b * 0 },
		desktop: { x: -180, y: -50 + r[device].b * 0 },
		delay: 4000,
	},
	{
		text: '她有時挺羨慕那種擁擠',
		mobile: { x: -50, y: -50 + r[device].b * 1 },
		desktop: { x: -130, y: -50 + r[device].b * 1 },
		delay: 3800,
	},

	{
		text: '或許真的太常一個人面對了',
		mobile: { x: -290, y: 140 + r[device].b * 0 },
		desktop: { x: -270, y: 70 + r[device].b * 0 },
		delay: 4500,
	},
	{
		text: '不論是理想上的還是生活',
		mobile: { x: -220, y: 140 + r[device].b * 1 },
		desktop: { x: -220, y: 70 + r[device].b * 1 },
		delay: 3500,
	},

	{
		text: '「一起扛著總比一個人扛著還要容易一點吧」',
		mobile: { x: -220, y: 310 + r[device].b * 0 },
		desktop: { x: -290, y: 200 + r[device].b * 0 },
		delay: 4200,
	},
	{
		text: '她看著發愣',
		mobile: { x: 160, y: 310 + r[device].b * 1 },
		desktop: { x: -50, y: 200 + r[device].b * 1 },
		delay: 5000,
	},
];

export const STORY_PUMP_PAGE2 = [
	{
		text: '撐到天快亮時，她才去洗澡',
		mobile: { x: -200, y: -440 + r[device].b * 0 },
		desktop: { x: -130, y: -190 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '泵浦馬達運轉響起陣陣抽水聲',
		mobile: { x: -80, y: -440 + r[device].b * 1 },
		desktop: { x: -60, y: -190 + r[device].b * 1 },
		delay: 4500,
	},

	{
		text: '當熱水沖向肩膀時',
		mobile: { x: -100, y: -100 + r[device].b * 0 },
		desktop: { x: 20, y: -100 + r[device].b * 0 },
		delay: 5000,
	},
	{
		text: '無力的感受',
		mobile: { x: -100, y: -100 + r[device].b * 1 },
		desktop: { x: 50, y: -100 + r[device].b * 1 },
		delay: 3000,
	},
	{
		text: '隨著洗澡水流進排水孔裡',
		mobile: { x: 0, y: -100 + r[device].b * 2 },
		desktop: { x: 80, y: -100 + r[device].b * 2 },
		delay: 2000,
	},

	{
		text: '洗完澡，又是全新的一個人',
		mobile: { x: -270, y: 220 + r[device].b * 0 },
		desktop: { x: -20, y: 90 + r[device].b * 0 },
		delay: 4500,
	},

	{
		text: '明天，繼續回到街上',
		mobile: { x: -210, y: 420 + r[device].b * 0 },
		desktop: { x: 100, y: 170 + r[device].b * 0 },
		delay: 5000,
	},
	{
		text: '為動物的生存權努力',
		mobile: { x: -210, y: 420 + r[device].b * 1 },
		desktop: { x: 180, y: 170 + r[device].b * 1 },
		delay: 3500,
	},
];

export const STORY_PUMP_PAGE3 = [
	{
		text: 'PEW',
		mobile: { x: -34, y: -440 + p[device].b * 0 },
		desktop: { x: -490, y: -210 + p[device].b * 0 },
		delay: 0,
	},
	{
		text: '不只是家用泵浦裡的漆包線線圈',
		mobile: { x: -187, y: -440 + p[device].b * 1.5 },
		desktop: { x: -490, y: -210 + p[device].b * 1.5 },
		delay: 2000,
	},
	{
		text: '也為勞累的身心注滿力量',
		mobile: { x: -146, y: -440 + p[device].b * 3 },
		desktop: { x: -490, y: -210 + p[device].b * 3 },
		delay: 3000,
	},
	{
		text: '連結每個日常',
		mobile: { x: -82, y: -440 + p[device].b * 4.5 },
		desktop: { x: -490, y: -210 + p[device].b * 4.5 },
		delay: 3500,
	},
];

// mobile 4
export const STORY_MOBILE_PAGE0 = [
	{
		text: '開口說我愛你的時候',
		mobile: { x: -240, y: -330 + r[device].b * 0 },
		desktop: { x: -110, y: -110 + r[device].b * 0 },
		delay: 5200,
	},
	{
		text: '總會有點想哭',
		mobile: { x: -120, y: -330 + r[device].b * 1 },
		desktop: { x: -40, y: -110 + r[device].b * 1 },
		delay: 2200,
	},

	{
		text: '或許是習慣台北的冷久了',
		mobile: { x: -10, y: -50 + r[device].b * 0 },
		desktop: { x: -20, y: -110 + r[device].b * 2 },
		delay: 3500,
	},
	{
		text: '這樣的情感實在炙熱',
		mobile: { x: -40, y: -50 + r[device].b * 1 },
		desktop: { x: 20, y: -110 + r[device].b * 3 },
		delay: 3300,
	},

	{
		text: '冷熱相遇產生的水氣',
		mobile: { x: -70, y: 190 + r[device].b * 0 },
		desktop: { x: 50, y: 110 + r[device].b * 0 },
		delay: 4000,
	},
	{
		text: '從眼裡溢出',
		mobile: { x: 100, y: 190 + r[device].b * 1 },
		desktop: { x: 150, y: 110 + r[device].b * 1 },
		delay: 3000,
	},
];

export const STORY_MOBILE_PAGE1 = [
	{
		text: '「三八啦，剛剛再見的時候不講，現在打來說」',
		mobile: { x: -290, y: -440 + r[device].b * 0 },
		desktop: { x: -430, y: -240 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '媽媽不好意思地說道',
		mobile: { x: -250, y: -440 + r[device].b * 1 },
		desktop: { x: -410, y: -240 + r[device].b * 1 },
		delay: 5500,
	},

	{
		text: '「有些話不隔著手機，還是會有點難說出口嘛」',
		mobile: { x: -210, y: -290 + r[device].b * 0 },
		desktop: { x: 20, y: -110 + r[device].b * 0 },
		delay: 3500,
	},
	{
		text: '我壓低聲音，希望她沒有發現我正在哽咽',
		mobile: { x: -170, y: -290 + r[device].b * 1 },
		desktop: { x: 70, y: -110 + r[device].b * 1 },
		delay: 7000,
	},

	{
		text: '「好啦好啦，再講下去妳又要開始哭了，臉還會漲紅」',
		mobile: { x: -300, y: -10 + r[device].b * 0 },
		desktop: { x: -170, y: 0 + r[device].b * 0 },
		delay: 6500,
	},

	{
		text: '「妳又知道」我抹去淚水',
		mobile: { x: -120, y: 190 + r[device].b * 0 },
		desktop: { x: -70, y: 110 + r[device].b * 0 },
		delay: 6500,
	},
	{
		text: '也為她驚人的直覺感到驚訝',
		mobile: { x: -20, y: 190 + r[device].b * 1 },
		desktop: { x: -10, y: 110 + r[device].b * 1 },
		delay: 4800,
	},

	{
		text: '「妳媽媽我喔，可是你肚子裡的蛔蟲餒」',
		mobile: { x: -220, y: 380 + r[device].b * 0 },
		desktop: { x: -30, y: 230 + r[device].b * 0 },
		delay: 4200,
	},
	{
		text: '「妳很愛哭跟很愛我們，我都知道啦」',
		mobile: { x: -180, y: 380 + r[device].b * 1 },
		desktop: { x: 0, y: 230 + r[device].b * 1 },
		delay: 3500,
	},
];

export const STORY_MOBILE_PAGE2 = [
	{
		text: '掛上電話',
		mobile: { x: -290, y: -440 + r[device].b * 0 },
		desktop: { x: 0, y: -200 + r[device].b * 0 },
		delay: 1000,
	},
	{
		text: '高鐵也正好進入隧道',
		mobile: { x: -240, y: -440 + r[device].b * 1 },
		desktop: { x: 30, y: -200 + r[device].b * 1 },
		delay: 2200,
	},

	{
		text: '我看著自己在窗戶裡的倒影覺得好笑',
		mobile: { x: -260, y: -90 + r[device].b * 0 },
		desktop: { x: 110, y: -50 + r[device].b * 0 },
		delay: 4000,
	},
	{
		text: '漲紅的臉還有哭花了的眼妝',
		mobile: { x: -60, y: -90 + r[device].b * 1 },
		desktop: { x: 230, y: -50 + r[device].b * 1 },
		delay: 5000,
	},

	{
		text: '但也很感謝自己',
		mobile: { x: -170, y: 260 + r[device].b * 0 },
		desktop: { x: 0, y: 140 + r[device].b * 0 },
		delay: 4500,
	},
	{
		text: '有辦法好好說出心底話',
		mobile: { x: -80, y: 260 + r[device].b * 1 },
		desktop: { x: 50, y: 140 + r[device].b * 1 },
		delay: 2300,
	},
];

export const STORY_MOBILE_PAGE3 = [
	{
		text: 'UEW + SB',
		mobile: { x: -67, y: -440 + p[device].b * 0 },
		desktop: { x: -490, y: -210 + p[device].b * 0 },
		delay: 1200,
	},
	{
		text: '不只是手機裡的漆包線線圈',
		mobile: { x: -160, y: -440 + p[device].b * 1.5 },
		desktop: { x: -490, y: -210 + p[device].b * 1.5 },
		delay: 3700,
	},
	{
		text: '更讓想說的話能被傳達',
		mobile: { x: -134, y: -440 + p[device].b * 3 },
		desktop: { x: -490, y: -210 + p[device].b * 3 },
		delay: 3000,
	},
	{
		text: '連結每個日常',
		mobile: { x: -82, y: -440 + p[device].b * 4.5 },
		desktop: { x: -490, y: -210 + p[device].b * 4.5 },
		delay: 3200,
	},
];

// ev charager 5

export const STORY_EVCHARAGER_PAGE0 = [
	{
		text: '呼吸，是主要生命徵象之一',
		mobile: { x: -290, y: -340 + r[device].b * 0 },
		desktop: { x: -100, y: -230 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '對多數城市人來說，生存，向來是撐著一口氣',
		mobile: { x: -290, y: -340 + r[device].b * 1 },
		desktop: { x: -100, y: -230 + r[device].b * 1 },
		delay: 4000,
	},

	{
		text: '天才正要亮，他早早起床',
		mobile: { x: -290, y: -190 + r[device].b * 0 },
		desktop: { x: -140, y: -120 + r[device].b * 0 },
		delay: 7500,
	},
	{
		text: '不像其他人的週末日常',
		mobile: { x: -240, y: -190 + r[device].b * 1 },
		desktop: { x: -110, y: -120 + r[device].b * 1 },
		delay: 4500,
	},
	{
		text: '睡到飽從來就不是一個好好休息的選項',
		mobile: { x: -140, y: -190 + r[device].b * 2 },
		desktop: { x: -30, y: -120 + r[device].b * 2 },
		delay: 3000,
	},
	{
		text: '開往七十二公里外的目的地',
		mobile: { x: -80, y: -190 + r[device].b * 3 },
		desktop: { x: 0, y: -120 + r[device].b * 3 },
		delay: 5000,
	},

	{
		text: '車安靜地行駛著',
		mobile: { x: -10, y: 140 + r[device].b * 0 },
		desktop: { x: -170, y: 80 + r[device].b * 0 },
		delay: 3000,
	},
	{
		text: '他搖下車窗，將冷氣轉小',
		mobile: { x: 10, y: 140 + r[device].b * 1 },
		desktop: { x: -150, y: 80 + r[device].b * 1 },
		delay: 3500,
	},
	{
		text: '任春風透進車內',
		mobile: { x: -40, y: 140 + r[device].b * 2 },
		desktop: { x: -180, y: 80 + r[device].b * 2 },
		delay: 3200,
	},
	{
		text: '溫溫的打在臉上，已經不覺得那麼冷',
		mobile: { x: -270, y: 430 + r[device].b * 0 },
		desktop: { x: -60, y: 230 + r[device].b * 0 },
		delay: 4000,
	},
	{
		text: '海潮的氣味慢慢滲進鼻腔裡，到海邊了',
		mobile: { x: -180, y: 430 + r[device].b * 1 },
		desktop: { x: -10, y: 230 + r[device].b * 1 },
		delay: 4500,
	},
];

export const STORY_EVCHARAGER_PAGE1 = [
	{
		text: '朋友總笑他「又下海啊」',
		mobile: { x: -290, y: -440 + r[device].b * 0 },
		desktop: { x: -350, y: -240 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '這是今年第二十次',
		mobile: { x: 0, y: -70 + r[device].b * 0 },
		desktop: { x: -300, y: -100 + r[device].b * 0 },
		delay: 3500,
	},
	{
		text: '只要有空，他一定下海',
		mobile: { x: 30, y: -70 + r[device].b * 1 },
		desktop: { x: -260, y: -100 + r[device].b * 1 },
		delay: 3000,
	},
	{
		text: '清理人們留下的垃圾',
		mobile: { x: -290, y: 180 + r[device].b * 0 },
		desktop: { x: 150, y: 50 + r[device].b * 0 },
		delay: 3000,
	},
	{
		text: '抱著我不下海誰下海的心情',
		mobile: { x: -290, y: 180 + r[device].b * 1 },
		desktop: { x: 150, y: 50 + r[device].b * 1 },
		delay: 3000,
	},
	{
		text: '對自己真正在意的事，費點力也不算什麼',
		mobile: { x: -290, y: 180 + r[device].b * 2 },
		desktop: { x: 150, y: 50 + r[device].b * 2 },
		delay: 4000,
	},
	{
		text: '「比起在陸地，我在海裡更能呼吸」',
		mobile: { x: -130, y: 460 + r[device].b * 0 },
		desktop: { x: 60, y: 200 + r[device].b * 0 },
		delay: 6500,
	},
];

export const STORY_EVCHARAGER_PAGE2 = [
	{
		text: '上岸後，順著原路回到家裡',
		mobile: { x: -290, y: -440 + r[device].b * 0 },
		desktop: { x: -350, y: -240 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '仍然得撐著一口氣面對自己的人生',
		mobile: { x: -230, y: -440 + r[device].b * 1 },
		desktop: { x: -320, y: -240 + r[device].b * 1 },
		delay: 4000,
	},
	{
		text: '但還好',
		x: 50,
		mobile: { x: 30, y: -440 + r[device].b * 2 },
		desktop: { x: -160, y: -240 + r[device].b * 2 },
		delay: 4000,
	},
	{
		text: '車開了，海就到了',
		mobile: { x: 60, y: -440 + r[device].b * 3 },
		desktop: { x: -145, y: -240 + r[device].b * 3 },
		delay: 2000,
	},

	{
		text: '他為車子掛上充電樁',
		mobile: { x: -210, y: -90 + r[device].b * 0 },
		desktop: { x: -170, y: 0 + r[device].b * 0 },
		delay: 3000,
	},
	{
		text: '謝謝它',
		mobile: { x: -210, y: -90 + r[device].b * 1 },
		desktop: { x: -170, y: 0 + r[device].b * 1 },
		delay: 3000,
	},
	{
		text: '帶自己出發去「呼吸」了一下',
		mobile: { x: -210, y: 290 + r[device].b * 0 },
		desktop: { x: -80, y: 200 + r[device].b * 0 },
		delay: 1200,
	},
];

export const STORY_EVCHARAGER_PAGE3 = [
	{
		text: 'EAIW、Mainly',
		mobile: { x: -93, y: -440 + p[device].b * 0 },
		desktop: { x: -490, y: -210 + p[device].b * 0 },
		delay: 0,
	},
	{
		text: '不只是充電樁裡的漆包線線圈',
		mobile: { x: -175, y: -440 + p[device].b * 1.5 },
		desktop: { x: -490, y: -210 + p[device].b * 1.5 },
		delay: 3500,
	},
	{
		text: '更讓每一次出發充滿能量',
		mobile: { x: -146, y: -440 + p[device].b * 3 },
		desktop: { x: -490, y: -210 + p[device].b * 3 },
		delay: 3500,
	},
	{
		text: '連結每個日常',
		mobile: { x: -82, y: -440 + p[device].b * 4.5 },
		desktop: { x: -490, y: -210 + p[device].b * 4.5 },
		delay: 3800,
	},
];

// cable 6
export const STORY_CABLE_PAGE0 = [
	{
		text: '在全校都走後',
		mobile: { x: -240, y: -320 + r[device].b * 0 },
		desktop: { x: -450, y: -170 + r[device].b * 0 },
		delay: 5000,
	},
	{
		text: '亮著燈的那間是我的教室',
		mobile: { x: -190, y: -320 + r[device].b * 1 },
		desktop: { x: -410, y: -170 + r[device].b * 1 },
		delay: 2000,
	},
	{
		text: '數學跟不太上的巴奈坐在第一排的座位',
		mobile: { x: -150, y: -320 + r[device].b * 2 },
		desktop: { x: -380, y: -170 + r[device].b * 2 },
		delay: 4000,
	},

	{
		text: '「老師，你是不是很累了？」他抬頭問我',
		mobile: { x: -260, y: 120 + r[device].b * 0 },
		desktop: { x: -390, y: 60 + r[device].b * 0 },
		delay: 4100,
	},

	{
		text: '「你慢慢寫沒關係」我答道',
		mobile: { x: -170, y: 320 + r[device].b * 0 },
		desktop: { x: -110, y: 190 + r[device].b * 0 },
		delay: 5700,
	},
	{
		text: '一邊為了他的懂事感到心疼',
		mobile: { x: -20, y: 320 + r[device].b * 1 },
		desktop: { x: -20, y: 190 + r[device].b * 1 },
		delay: 4500,
	},
];

export const STORY_CABLE_PAGE1 = [
	{
		text: '但是，累嗎？',
		mobile: { x: -250, y: -440 + r[device].b * 0 },
		desktop: { x: -500, y: -250 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '不必多問自己，內心也早有答案',
		mobile: { x: -190, y: -440 + r[device].b * 1 },
		desktop: { x: -470, y: -250 + r[device].b * 1 },
		delay: 2500,
	},
	{
		text: '跟在都市不同',
		mobile: { x: 70, y: -440 + r[device].b * 2 },
		desktop: { x: -310, y: -250 + r[device].b * 2 },
		delay: 4500,
	},

	{
		text: '他們確實比同齡的孩子辛苦許多',
		mobile: { x: -110, y: -230 + r[device].b * 0 },
		desktop: { x: -390, y: -130 + r[device].b * 0 },
		delay: 3000,
	},
	{
		text: '要在寫數學跟洗衣服中間做選擇',
		mobile: { x: -70, y: -230 + r[device].b * 1 },
		desktop: { x: -370, y: -130 + r[device].b * 1 },
		delay: 4000,
	},
	{
		text: '靠自己的力量補足天生家庭功能較弱的缺欠',
		mobile: { x: -230, y: -230 + r[device].b * 2 },
		desktop: { x: -480, y: -130 + r[device].b * 2 },
		delay: 4400,
	},
	{
		text: '也表示，需要老師們花上更多心力教育與陪伴',
		mobile: { x: -220, y: -230 + r[device].b * 3 },
		desktop: { x: -440, y: -130 + r[device].b * 3 },
		delay: 5000,
	},

	{
		text: '我常常懷疑自己「做這麼多究竟是為了什麼？」',
		mobile: { x: -290, y: 80 + r[device].b * 0 },
		desktop: { x: -500, y: 30 + r[device].b * 0 },
		delay: 7300,
	},
	{
		text: '也不會否認腦中出現「就回家吧」的聲音',
		mobile: { x: -170, y: 80 + r[device].b * 1 },
		desktop: { x: -420, y: 30 + r[device].b * 1 },
		delay: 6500,
	},

	{
		text: '但在抬頭看到巴奈',
		mobile: { x: -290, y: 260 + r[device].b * 0 },
		desktop: { x: -140, y: 130 + r[device].b * 0 },
		delay: 5000,
	},
	{
		text: '那麼努力的嘗試解出那道數學題',
		mobile: { x: -290, y: 260 + r[device].b * 1 },
		desktop: { x: -140, y: 130 + r[device].b * 1 },
		delay: 2000,
	},

	{
		text: '並在我問他「要不要我幫幫你？」時',
		mobile: { x: -290, y: 420 + r[device].b * 0 },
		desktop: { x: -140, y: 220 + r[device].b * 0 },
		delay: 3500,
	},
	{
		text: '他回答我「再讓我試試」',
		mobile: { x: -100, y: 420 + r[device].b * 1 },
		desktop: { x: -30, y: 220 + r[device].b * 1 },
		delay: 4000,
	},
	{
		text: '我就知道，這些都只是非常一時的念頭',
		mobile: { x: -290, y: 420 + r[device].b * 2 },
		desktop: { x: -140, y: 220 + r[device].b * 2 },
		delay: 4500,
	},
];

export const STORY_CABLE_PAGE2 = [
	{
		text: '即使不容易',
		mobile: { x: -220, y: -410 + r[device].b * 0 },
		desktop: { x: -500, y: -170 + r[device].b * 0 },
		delay: 0,
	},
	{
		text: '他的堅持還是像頭上的日光燈一般炙熱',
		mobile: { x: -170, y: -410 + r[device].b * 1 },
		desktop: { x: -500, y: -170 + r[device].b * 1 },
		delay: 2000,
	},

	{
		text: '即使不容易',
		mobile: { x: -220, y: 40 + r[device].b * 0 },
		desktop: { x: -410, y: 30 + r[device].b * 0 },
		delay: 5000,
	},
	{
		text: '也讓我對於自己想改善教育不平等的念頭更堅定',
		mobile: { x: -260, y: 40 + r[device].b * 1 },
		desktop: { x: -390, y: 30 + r[device].b * 1 },
		delay: 2000,
	},
];

export const STORY_CABLE_PAGE3 = [
	{
		text: '高壓電纜',
		mobile: { x: -57, y: -440 + p[device].b * 0 },
		desktop: { x: -490, y: -210 + p[device].b * 0 },
		delay: 800,
	},
	{
		text: '不只是串聯電廠的一條傳輸線',
		mobile: { x: -175, y: -440 + p[device].b * 1.5 },
		desktop: { x: -490, y: -210 + p[device].b * 1.5 },
		delay: 2000,
	},
	{
		text: '為偏鄉供電也穩定了信念',
		mobile: { x: -146, y: -440 + p[device].b * 3 },
		desktop: { x: -490, y: -210 + p[device].b * 3 },
		delay: 3000,
	},
	{
		text: '連結每個日常',
		mobile: { x: -82, y: -440 + p[device].b * 4.5 },
		desktop: { x: -490, y: -210 + p[device].b * 4.5 },
		delay: 3500,
	},
];
