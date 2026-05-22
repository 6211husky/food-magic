// restaurants.js
const data = [
    // ================= 早餐類 =================
    // 【距離 5 分鐘】
    {name:"華陽豆漿", price:"100以下", time:"早", dist:5, type:"無"}, 
    {name:"白鳥餐點店", price:"100以下", time:"早", dist:5, type:"無"},
    {name:"長江早餐店", price:"100以下", time:"早", dist:5, type:"無"},
    {name:"Q Burger", price:"100以下", time:"早", dist:5, type:"無"},
    {name:"阿寶 A-Bao", price:"100以下", time:"早", dist:5, type:"無"},
    {name:"維亞歐式早餐", price:"100~200", time:"早", dist:5, type:"無"},
    // 【距離 10 分鐘】
    {name:"街口飯糰", price:"100以下", time:"早", dist:10, type:"無"},
    {name:"三豆二麥", price:"100以下", time:"早", dist:10, type:"無"},
    {name:"巴特手作晨食", price:"100~200", time:"早", dist:10, type:"無"},
    // 【距離 15 分鐘】
    {name:"餅霸天下", price:"100以下", time:"早晚", dist:15, type:"中式"},

    // ================= 正餐類 (午/晚) =================
    // 【距離 5 分鐘】
    {name:"東方滷味", price:"100以下", time:"午晚點", dist:5, type:"中式"},
    {name:"宮本武丼", price:"100~200", time:"午晚", dist:5, type:"日式"},
    {name:"飽米便當", price:"100以下", time:"午晚", dist:5, type:"中式"},
    {name:"鲁肉擔仔麵", price:"100以下", time:"午晚", dist:5, type:"中式"},
    {name:"麵屋三金", price:"100以下", time:"午晚", dist:5, type:"日式"},
    {name:"九湯屋拉麵", price:"100~200", time:"晚", dist:5, type:"日式"},
    {name:"紅嬌炸粿", price:"100以下", time:"晚點", dist:5, type:"中式"},
    {name:"彰化美香牛哥", price:"100~200", time:"午晚", dist:5, type:"中式"},
    {name:"異式義式麵食", price:"100~200", time:"午晚", dist:5, type:"西式"},
    {name:"老夫子牛排", price:"100~200", time:"午晚", dist:5, type:"西式"},
    {name:"帕司咖啡Pass", price:"100~200", time:"早午點", dist:5, type:"西式"},
    {name:"牛太郎燒肉丼", price:"100~200", time:"午晚", dist:5, type:"日式"},
    {name:"原山拉麵", price:"100~200", time:"午晚", dist:5, type:"日式"},
    {name:"大思鄉臭臭鍋", price:"100~200", time:"午晚", dist:5, type:"中式"},
    {name:"狐狸工頭", price:"200以上", time:"午晚", dist:5, type:"日式"},
    {name:"火鍋世家", price:"200以上", time:"午晚", dist:5, type:"中式"},
    {name:"天皇日式烤肉飯", price:"100以下", time:"午晚", dist:10, type:"日式"},
    {name:"釜山韓式料理", price:"100~200", time:"午晚", dist:10, type:"韓式"},
    {name:"Ruby日式廚房", price:"100~200", time:"午晚", dist:10, type:"日式"},
    {name:"黃燜雞米飯", price:"100~200", time:"午晚", dist:10, type:"中式"},
    // 【距離 10 分鐘】
    {name:"千菊丸拉麵", price:"100~200", time:"晚", dist:10, type:"日式"},
    {name:"丸盛拉麵屋", price:"100~200", time:"午晚", dist:10, type:"日式"},
    {name:"四海豆漿", price:"100以下", time:"早晚", dist:10, type:"中式"}, 
    {name:"拉麵小徑", price:"200以上", time:"晚", dist:10, type:"日式"},
    {name:"雁歸雞湯拉麵", price:"200以上", time:"午晚", dist:10, type:"日式"},
    {name:"BVKcurry", price:"200以上", time:"午晚", dist:10, type:"日式"},
    {name:"億品鍋", price:"200以上", time:"午晚", dist:10, type:"中式"},
    {name:"食鮮森鐵板燒", price:"200以上", time:"午晚", dist:10, type:"中式"},
    // 【距離 15 分鐘】
    {name:"寶記港式麵館", price:"100以下", time:"午晚", dist:15, type:"中式"}, 
    {name:"八方雲集", price:"100以下", time:"午晚", dist:15, type:"中式"},
    {name:"蓋飯家族", price:"100~200", time:"午晚", dist:15, type:"中式"},
    {name:"聞香牛肉麵", price:"100~200", time:"午晚", dist:15, type:"中式"},
    {name:"大王牛肉麵", price:"100~200", time:"午晚", dist:15, type:"中式"},
    {name:"福田家咖哩", price:"100~200", time:"午晚", dist:5, type:"日式"},
    {name:"雲南小吃", price:"100~200", time:"午晚", dist:15, type:"中式"},
    {name:"微笑冰果室", price:"100~200", time:"午晚", dist:15, type:"中式"},
    {name:"中山豆漿", price:"100以下", time:"早晚", dist:10, type:"中式"},

    // ================= 點心與下午茶/宵夜 (點) =================
    // 【距離 5 分鐘】
    {name:"阿璋肉圓", price:"100以下", time:"午晚", dist:10, type:"中式"},
    {name:"徐媽媽蔥油餅", price:"100以下", time:"點", dist:5, type:"無"},
    {name:"珍北平餡餅", price:"100以下", time:"點", dist:5, type:"無"},
    {name:"炸職人", price:"100~200", time:"點", dist:5, type:"無"},
    {name:"南郭鹹酥雞", price:"100~200", time:"點", dist:5, type:"無"},
    // 【距離 10 分鐘】
    {name:"龍哥雞排", price:"100~200", time:"點", dist:5, type:"無"},
    // 【距離 15 分鐘】
    {name:"鼎豆芋圓", price:"100以下", time:"點", dist:15, type:"無"},
    {name:"精誠夜市", price:"100~200", time:"晚點", dist:15, type:"中式"}
];
