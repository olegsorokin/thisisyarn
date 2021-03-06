export const state = () => ({
  item: {
    name: '',
    manufacturer: '',
    id: null,
    cost: null,
    packSize: null,
    balance: null,
    img: '',
    thumbs: [],
    content: '',
    ballWeightGr: null,
    ballWeightOz: null,
    yarnLengthMt: null,
    yarnLengthYd: null,
    yarnWeight: '',
    knittingNeedle: '',
    crochetNeedle: '',
    variations: []
  },
  itemsList: [
    {
      name: 'ANGORA GOLD',
      manufacturer: 'Alize',
      id: 108,
      cost: 2.5,
      packSize: 5,
      balance: 13,
      img: 'http://www.alize.gen.tr/images/154822446410800152.jpg',
      thumbs: ['http://www.alize.gen.tr/images/154822446410800152.jpg'],
      content: '20% Wool - 80% Acrylic',
      ballWeightGr: 100,
      ballWeightOz: 3.5,
      yarnLengthMt: 550,
      yarnLengthYd: 601.5,
      yarnWeight: '1: Fingering-Sock',
      knittingNeedle: '3-6',
      crochetNeedle: '2-4',
      variations: [
        { number: '1', image: 'images/tn/1544690682angoragold_01.jpg', color: 'Cream' },
        { number: '2', image: 'images/tn/154822827702.jpg', color: 'Saffron' },
        { number: '17', image: 'images/tn/1374761553angoragold_17.jpg', color: 'Petrol' },
        { number: '21', image: 'images/tn/1548162596angoragold_21.jpg', color: 'Grey' },
        { number: '27', image: 'images/tn/1534494347angoragold_27.jpg', color: 'Lilac' },
        { number: '28', image: 'images/tn/1343459086angoragold_28.jpg', color: 'Rose' },
        { number: '33', image: 'images/tn/153449469533.jpg', color: 'Mussel shell' },
        { number: '39', image: 'images/tn/137475958639.jpg', color: 'Candy Pink' },
        { number: '40', image: 'images/tn/1343461888angoragold_40.jpg', color: 'Blue' },
        { number: '46', image: 'images/tn/1471270315angoragold_46.jpg', color: 'Dark Pink' },
        { number: '50', image: 'images/tn/1471270171angoragold_50.jpg', color: 'Fushia' },
        { number: '55', image: 'images/tn/1343458480angoragold_55.jpg', color: 'White' },
        { number: '57', image: 'images/tn/1471270045angoragold_57.jpg', color: 'Bordeaux' },
        { number: '58', image: 'images/tn/137475944558.jpg', color: 'Navy' },
        { number: '60', image: 'images/tn/1343458626angoragold_60.jpg', color: 'Black' },
        { number: '62', image: 'images/tn/1544690234angoragold_62.jpg', color: 'Light Cream' },
        { number: '67', image: 'images/tn/1380710920angoragold_67.jpg', color: 'Candle Light' },
        { number: '87', image: 'images/tn/154470447387.jpg', color: 'Medium Grey' },
        { number: '95', image: 'images/tn/1375428991angoragold_95.jpg', color: 'Camel' },
        { number: '106', image: 'images/tn/1374760217angoragold_106.jpg', color: 'Red' },
        { number: '111', image: 'images/tn/1374760143angoragold_111.jpg', color: 'Plum' },
        { number: '114', image: 'images/tn/1375429200angoragold_114.jpg', color: 'Light Aqua' },
        { number: '118', image: 'images/tn/1548228164118.jpg', color: 'Green' },
        { number: '127', image: 'images/tn/1343458987angoragold_127.jpg', color: 'Caramel' },
        { number: '144', image: 'images/tn/1375429421angoragold_144.jpg', color: 'Salmon Pink' },
        { number: '152', image: 'images/tn/1548224447152.jpg', color: 'Beige Melange' },
        { number: '160', image: 'images/tn/1405427838160.jpg', color: 'Honey' },
        { number: '161', image: 'images/tn/1343458586angoragold_161.jpg', color: 'Powder' },
        { number: '163', image: 'images/tn/1437742147163.jpg', color: 'Rose Grey' },
        { number: '164', image: 'images/tn/1471272059angoragold_164.jpg', color: 'Azure' },
        { number: '168', image: 'images/tn/1437741795168.jpg', color: 'Winter White' },
        { number: '190', image: 'images/tn/1375429271angoragold_190.jpg', color: 'Beige' },
        { number: '208', image: 'images/tn/1471268500angoragold_208.jpg', color: 'Light Grey Melange' },
        { number: '221', image: 'images/tn/1374759437221.jpg', color: 'Denim Melange' },
        { number: '226', image: 'images/tn/1502971047226.jpg', color: 'Violet' },
        { number: '245', image: 'images/tn/1374759466245.jpg', color: 'Turquoise' },
        { number: '257', image: 'images/tn/1548227666257.jpg', color: 'Lavender' },
        { number: '267', image: 'images/tn/1502971055267.jpg', color: 'Pastel Green' },
        { number: '271', image: 'images/tn/1471269675angoragold_271.jpg', color: 'Pink Pearl' },
        { number: '295', image: 'images/tn/1548227491295.jpg', color: 'Pink' },
        { number: '312', image: 'images/tn/1437742238312.jpg', color: 'Puce' },
        { number: '345', image: 'images/tn/1532507773345.jpg', color: 'Khaki' },
        { number: '363', image: 'images/tn/1405423485363.jpg', color: 'Wedding Pink' },
        { number: '381', image: 'images/tn/1544703374381.jpg', color: 'Indigo' },
        { number: '391', image: 'images/tn/1532507630391.jpg', color: 'Lilac' },
        { number: '398', image: 'images/tn/1532507859398.jpg', color: 'Light Green' },
        { number: '402', image: 'images/tn/1502971061402.jpg', color: 'Winter Sky' },
        { number: '404', image: 'images/tn/1375429103angoragold_404.jpg', color: 'Powder' },
        { number: '450', image: 'images/tn/1471263977angoragold_450.jpg', color: 'Pearl' },
        { number: '506', image: 'images/tn/1544698025angoragold_506.jpg', color: 'Stone' },
        { number: '514', image: 'images/tn/1471271967angoragold_514.jpg', color: 'Winter Sky' },
        { number: '515', image: 'images/tn/1405424505515.jpg', color: 'Green Almond' },
        { number: '541', image: 'images/tn/1548224195541.jpg', color: 'Mink' },
        { number: '542', image: 'images/tn/1374760199angoragold_542.jpg', color: 'Bark' },
        { number: '543', image: 'images/tn/1548224685543.jpg', color: 'Fog' },
        { number: '599', image: 'images/tn/1405427735599.jpg', color: 'Bone' },
        { number: '614', image: 'images/tn/1548160579614.jpg', color: 'Grey Melange' },
        { number: '636', image: 'images/tn/1405425131636.jpg', color: 'Royal Blue' },
        { number: '644', image: 'images/tn/1548227929644.jpg', color: 'Amethyst' },
        { number: '649', image: 'images/tn/1374759555649.jpg', color: 'Ruby' },
        { number: '652', image: 'images/tn/1548162714652.jpg', color: 'Smoky' },
        { number: '656', image: 'images/tn/1380714296647.jpg', color: 'Light Coral' },
        { number: '665', image: 'images/tn/1532507926665.jpg', color: 'Light Denim' },
        { number: '681', image: 'images/tn/1405424012681.jpg', color: 'Light Salmon' },
        { number: '700', image: 'images/tn/1443687303700.jpg', color: 'Mouline Gray' },
        { number: '701', image: 'images/tn/1437742371701.jpg', color: 'Mouline Anthracite' },
        { number: '703', image: 'images/tn/1437742597703.jpg', color: 'Mouline Brown' }
      ],
    },
    // {
    //   name: 'DİVA',
    //   manufacturer: 'Alize',
    //   id: 178,
    //   cost: 2.2,
    //   packSize: 5,
    //   balance: 17,
    //   img: 'http://www.alize.gen.tr/images/155050134117800463.jpg',
    //   thumbs: ['http://www.alize.gen.tr/images/155050134117800463.jpg'],
    //   content: '100% Microfiber Acrylic',
    //   ballWeightGr: 100,
    //   ballWeightOz: 3.5,
    //   yarnLengthMt: 350,
    //   yarnLengthYd: 383,
    //   yarnWeight: '1: Fingering-Sock',
    //   knittingNeedle: '2,5-3,5',
    //   crochetNeedle: '1-3',
    //   variations: [
    //     { number: '1', image: 'images/tn/15502396771343911928diva_01.jpg', color: 'Cream' },
    //     { number: '26', image: 'images/tn/1343912825diva_26.jpg', color: 'Brown' },
    //     { number: '55', image: 'images/tn/1343911886diva_55.jpg', color: 'White' },
    //     { number: '57', image: 'images/tn/1343912808diva_57.jpg', color: 'Bordeaux' },
    //     { number: '60', image: 'images/tn/1343912841diva_60.jpg', color: 'Black' },
    //     { number: '62', image: 'images/tn/15502397791343911912diva_62.jpg', color: 'Light Cream' },
    //     { number: '83', image: 'images/tn/151964532083.jpg', color: 'Pumpkin' },
    //     { number: '106', image: 'images/tn/1343912792diva_106.jpg', color: 'Red' },
    //     { number: '109', image: 'images/tn/1519645368109.jpg', color: 'Lime' },
    //     { number: '110', image: 'images/tn/1360137434diva_110.jpg', color: 'Yellow' },
    //     { number: '123', image: 'images/tn/1550497548123.jpg', color: 'Emerald' },
    //     { number: '130', image: 'images/tn/1343912562diva_130.jpg', color: 'Fuchsia' },
    //     { number: '131', image: 'images/tn/1550501912131.jpg', color: 'Khaki' },
    //     { number: '132', image: 'images/tn/15505629831343912220diva_132.jpg', color: 'Royal Blue' },
    //     { number: '145', image: 'images/tn/1486561013diva_145.jpg', color: 'Powder' },
    //     { number: '158', image: 'images/tn/1343912618diva_158.jpg', color: 'Lavander' },
    //     { number: '167', image: 'images/tn/1343912023diva_167.jpg', color: 'Beige' },
    //     { number: '168', image: 'images/tn/1451304807168.jpg', color: 'Light Grey' },
    //     { number: '178', image: 'images/tn/1343912540diva_178.jpg', color: 'Dark Pink' },
    //     { number: '185', image: 'images/tn/1486560818diva_185.jpg', color: 'Baby Pink' },
    //     { number: '210', image: 'images/tn/1343912410diva_210.jpg', color: 'Green' },
    //     { number: '245', image: 'images/tn/15505636261375255014diva_245.jpg', color: 'Sochi Blue' },
    //     { number: '252', image: 'images/tn/1548656648252.jpg', color: 'Blue Purple' },
    //     { number: '261', image: 'images/tn/1550221119261.jpg', color: 'Red Brown' },
    //     { number: '273', image: 'images/tn/1550495223273.jpg', color: 'Camouflage' },
    //     { number: '279', image: 'images/tn/15505624511451305025279_2.jpg', color: 'Midnight Blue' },
    //     { number: '291', image: 'images/tn/1343912493diva_291.jpg', color: 'Pink' },
    //     { number: '297', image: 'images/tn/1550584657297.jpg', color: 'Plum' },
    //     { number: '346', image: 'images/tn/15505633201343912173diva_346.jpg', color: 'Sky Blue' },
    //     { number: '348', image: 'images/tn/1343912061diva_348.jpg', color: 'Smoky' },
    //     { number: '350', image: 'images/tn/1343912195diva_350.jpg', color: 'Sea Blue' },
    //     { number: '353', image: 'images/tn/15505621321451305025353.jpg', color: 'Indigo' },
    //     { number: '354', image: 'images/tn/1343912519diva_354.jpg', color: 'Rose' },
    //     { number: '355', image: 'images/tn/1343912004diva_355.jpg', color: 'Grey' },
    //     { number: '361', image: 'images/tn/1390479165diva_361.jpg', color: 'Navy' },
    //     { number: '363', image: 'images/tn/1451304919363.jpg', color: 'Wedding Pink' },
    //     { number: '368', image: 'images/tn/1375254989diva_368.jpg', color: 'Camel' },
    //     { number: '369', image: 'images/tn/1343912109diva_369.jpg', color: 'Caramel' },
    //     { number: '376', image: 'images/tn/1550497978376.jpg', color: 'Cyan' },
    //     { number: '378', image: 'images/tn/1421394551diva_378.jpg', color: 'Orchid' },
    //     { number: '382', image: 'images/tn/1343911973diva_382.jpg', color: 'Powder' },
    //     { number: '383', image: 'images/tn/15502394931405952785diva_383.jpg', color: 'Stone' },
    //     { number: '393', image: 'images/tn/1545390288393.jpg', color: 'Powder Pink' },
    //     { number: '396', image: 'images/tn/1421394404diva_396.jpg', color: 'Poppy' },
    //     { number: '450', image: 'images/tn/1343911898diva_450.jpg', color: 'Pearl' },
    //     { number: '453', image: 'images/tn/1550236786453.jpg', color: 'North Sea' },
    //     { number: '463', image: 'images/tn/1451303945463.jpg', color: 'Light Aqua' },
    //     { number: '488', image: 'images/tn/1360138195diva_488.jpg', color: 'Saffron' },
    //     { number: '561', image: 'images/tn/1390388640diva_561.jpg', color: 'Hot Pink' },
    //     { number: '610', image: 'images/tn/1550496994610_copy.jpg', color: 'Jade' },
    //     { number: '619', image: 'images/tn/1360138046diva_619.jpg', color: 'Coral' },
    //     { number: '622', image: 'images/tn/1360137958diva_622.jpg', color: 'Violet' },
    //     { number: '646', image: 'images/tn/15505639551421394609diva_646.jpg', color: 'Mykonos Blue' },
    //     { number: '661', image: 'images/tn/1390388556diva_661.jpg', color: 'Carnation' },
    //     { number: '1055', image: 'images/tn/14714212471055.jpg', color: 'Sugar White' }
    //   ],
    // },
    // {
    //   name: 'HAPPY BABY',
    //   manufacturer: 'Alize',
    //   id: 224,
    //   cost: 3,
    //   packSize: 5,
    //   balance: 8,
    //   img: 'http://www.alize.gen.tr/images/151783032122400672.jpg',
    //   thumbs: ['http://www.alize.gen.tr/images/151783032122400672.jpg'],
    //   content: '65% Acrylic -  35% Polyamide',
    //   ballWeightGr: 100,
    //   ballWeightOz: 3.5,
    //   yarnLengthMt: 350,
    //   yarnLengthYd: 361,
    //   yarnWeight: '2: Fine-Sport',
    //   knittingNeedle: '3-4',
    //   crochetNeedle: '3-4',
    //   variations: [
    //     { number: '1', image: 'images/tn/143834416101.jpg', color: 'Cream' },
    //     { number: '27', image: 'images/tn/150348439627_happy.jpg', color: 'Lilac' },
    //     { number: '41', image: 'images/tn/1380807163happy_baby_41.jpg', color: 'Light Green' },
    //     { number: '43', image: 'images/tn/153252839443.jpg', color: 'Lavender' },
    //     { number: '55', image: 'images/tn/1380807169happy_baby_55.jpg', color: 'White' },
    //     { number: '56', image: 'images/tn/1380807174happy_baby_56.jpg', color: 'Red' },
    //     { number: '58', image: 'images/tn/1406024938happy_baby_58.jpg', color: 'Navy' },
    //     { number: '60', image: 'images/tn/1406024850happy_baby_60.jpg', color: 'Black' },
    //     { number: '62', image: 'images/tn/1380807180happy_baby_62.jpg', color: 'Light Cream' },
    //     { number: '119', image: 'images/tn/1406024876happy_baby_119.jpg', color: 'Grey' },
    //     { number: '128', image: 'images/tn/1380807186happy_baby_128.jpg', color: 'Sky Blue' },
    //     { number: '141', image: 'images/tn/1438344881141.jpg', color: 'Royal Blue' },
    //     { number: '149', image: 'images/tn/1438351172149.jpg', color: 'Fuchsia' },
    //     { number: '183', image: 'images/tn/1380807198happy_baby_183.jpg', color: 'Light Blue' },
    //     { number: '185', image: 'images/tn/1380807203happy_baby_185.jpg', color: 'Powder Pink' },
    //     { number: '187', image: 'images/tn/1380807209happy_baby_187.jpg', color: 'Yellow' },
    //     { number: '191', image: 'images/tn/1380807216happy_baby_191.jpg', color: 'Pink' },
    //     { number: '216', image: 'images/tn/1380807221happy_baby_216.jpg', color: 'Dark Yellow' },
    //     { number: '218', image: 'images/tn/1380807226happy_baby_218.jpg', color: 'Baby Blue' },
    //     { number: '249', image: 'images/tn/1380807239happy_baby_249.jpg', color: 'Water Green' },
    //     { number: '282', image: 'images/tn/1532528209282.jpg', color: 'Peach' },
    //     { number: '310', image: 'images/tn/1406024901happy_baby_310.jpg', color: 'Honey' },
    //     { number: '340', image: 'images/tn/1380807244happy_baby_340.jpg', color: 'Powder Pink' },
    //     { number: '371', image: 'images/tn/1380807266happy_baby_371.jpg', color: 'Powder' },
    //     { number: '374', image: 'images/tn/1532528295374.jpg', color: 'Blue' },
    //     { number: '402', image: 'images/tn/1471425095402.jpg', color: 'Winter Sky' },
    //     { number: '450', image: 'images/tn/1380807271happy_baby_450.jpg', color: 'Pearl' },
    //     { number: '483', image: 'images/tn/1380807279happy_baby_483.jpg', color: 'Orange' },
    //     { number: '556', image: 'images/tn/1438350860556.jpg', color: 'Pinkish Orange' },
    //     { number: '669', image: 'images/tn/1380807289happy_baby_669.jpg', color: 'Light Turquoise' },
    //     { number: '670', image: 'images/tn/1380807296happy_baby_670.jpg', color: 'Coral' },
    //     { number: '672', image: 'images/tn/1380807305happy_baby_672.jpg', color: 'Judas Tree' }
    //   ],
    // }
  ]
});

export const mutations = {
  preloadItem(state, id) {
    const item = state.itemsList.find(item => item.id === id);

    if (item) {
      state.item = item;
    }
  }
};
export const actions = {};
export const getters = {
  getById: state => id => {
    return state.itemsList.find(item => item.id === id);
  }
};
