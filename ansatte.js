//------------------------------------------Kontaktliste for ----------------------------------
//------------------Lager objekter for ekstravakter---------------------------------------



//------------------------------------------------------------------------------------------
//------------------------------------------Kontaktliste----------------------------------
//Lager objekter for alle ansatte---------------------------------------
const ansatte = [

    {navn:"Sara", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Sara.jpg", dag: 5, måned: 9},

    {navn:"Anna", gruppe: "Fysioterapeuter", rolle:"", telefon:"", epost:"", bilde:"bilder/AnneEliasson.jpg", dag: 14, måned: 1},

    {navn:"Cathy", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Cathy.jpg", dag: 23, måned: 12},

    {navn:"Mathias", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Mathias.jpg", dag: 23, måned: 12},

    {navn:"Carolina",gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Carolina.jpg", dag: 22, måned: 6},

    {navn:"Marte", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Marte.jpg", dag: 20, måned: 5},

    {navn:"Cecilie", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Cecilie.jpg", dag: 5, måned: 4},

    {navn:"Kristine", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Kristine.jpg",dag: 30, måned: 3},

    {navn:"Fadumo", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Fadumo.jpg", dag: 1, måned: 3},

    {navn:"Xaviera", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Xaviera.jpg", dag: 2, måned: 2},

    {navn:"Sakineh", gruppe: "Sykepleiere", rolle:"", telefon:"93674937", epost:"zareiisakineh@gmail.com", bilde:"bilder/Sakineh.jpg", dag: 20, måned: 4 },

    {navn:"Neda", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Neda.jpg"},

    {navn:"Sumaya", gruppe: "Sykepleiere", rolle:"", telefon:"", epost:"", bilde:"bilder/Sumaya.jpg", dag: 6, måned: 5},

    {navn:"Hamid", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Hamid.jpg", dag: 27, måned: 11},

    {navn:"Noh", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Noh.jpg", dag: 8, måned: 3},

    {navn:"Sakti", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Sakti.jpg", dag: 28, måned: 1},

    {navn:"Linda", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Linda.jpg", dag: 17, måned: 6},

    {navn:"Chandranitti", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Chandranitti.jpg", dag: 7, måned: 6},

    {navn:"AnaMarie", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/AnaMarie.jpg", dag: 25, måned: 8},

    {navn:"Tigist", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Tigist.jpg", dag: 16, måned: 7},

    {navn:"JoAn", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/JoAn.jpg", dag: 6, måned: 2},

    {navn:"Robiel", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Robiel.jpg", dag: 19, måned: 9},

    {navn:"Ibrahim", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Ibrahim.jpg", dag: 28, måned: 8},

    {navn:"Nabina", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Nabina.jpg", dag: 7, måned: 12},

    {navn:"Preenaphan", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Preenaphan.jpg"},

    {navn:"Gliceria", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Gliceria.jpg"},

    {navn:"Miguel", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Miguel.jpg", dag: 11, måned: 2},

    {navn:"Dessery", gruppe: "Helsefagarbeidere", rolle:"", telefon:"", epost:"", bilde:"bilder/Dessery.jpg", dag: 25, måned: 10},

    {navn:"Ravi", gruppe: "PraktiskBistand", rolle:"", telefon:"", epost:"", bilde:"bilder/Ravi.jpg", dag: 12, måned: 5},

    {navn:"Sussie", gruppe: "PraktiskBistand", rolle:"", telefon:"", epost:"", bilde:"bilder/Sussie.jpg", dag: 9, måned: 6},

    {navn:"Ebyan", gruppe: "PraktiskBistand", rolle:"", telefon:"", epost:"", bilde:"bilder/Ebyan.jpg", dag: 4, måned: 4},

    { navn:"Abdisaalam Saeed", gruppe: "Ekstravakter", rolle:"", telefon:"92258951", epost:"", bilde:"bilder/Abdisaalam.jpg", dag: 27, måned: 12 },

    { navn:"Ibrahim Ahmednoor(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"99105994", epost:"", bilde:"bilder/Ibahim.jpg", dag: 28, måned: 8 },

    { navn:"Albana", gruppe: "Ekstravakter", rolle:"", telefon:"90011223", epost:"", bilde:"bilder/Albana.jpg" },

    { navn:"Amalie(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"91742740", epost:"", bilde:"bilder/Amalie.jpg", dag: 18, måned: 9 },

    { navn:"Carlette", gruppe: "Ekstravakter", rolle:"", telefon:"96689375", epost:"", bilde:"bilder/Carlette.jpg", dag: 13, måned: 9 },

    { navn:"Dessery(30%)", gruppe: "Ekstravakter", rolle:"", telefon:"99860102", epost:"", bilde:"bilder/Dessery.jpg" },

    { navn:"Fekerte(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"97097023", epost:"", bilde:"bilder/Fekerte.jpeg", dag: 2, måned: 12},

    { navn:"Gale-Ane", gruppe: "Ekstravakter", rolle:"", telefon:"93956855", epost:"", bilde:"bilder/Gale-Ane.jpg", dag: 19, måned: 7},

    { navn:"Gliceria(20%)", gruppe: "Ekstravakter", rolle:"", telefon:"92541182", epost:"", bilde:"bilder/Gliceria.jpg"},

    { navn:"Glen(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"96669748", epost:"", bilde:"bilder/Glen.jpg", dag: 15, måned: 6},

    { navn:"Guen(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"45147657", epost:"", bilde:"bilder/Guen.jpg"},

    { navn:"Helene", gruppe: "Ekstravakter", rolle:"", telefon:"41339278", epost:"", bilde:"bilder/Helene.jpg",  dag: 15, måned: 12},

    { navn:"John James", gruppe: "Ekstravakter", rolle:"", telefon:"45586388", epost:"", bilde:"bilder/JohnJames.jpg", dag: 20, måned: 6 },

    { navn:"Judelyn", gruppe: "Ekstravakter", rolle:"", telefon:"96656132", epost:"", bilde:"bilder/Judelyn.jpg" },

    { navn:"Khirad", gruppe: "Ekstravakter", rolle:"", telefon:"99350304", epost:"", bilde:"bilder/Khirad.jpg" },

    { navn:"Khadra(VPL)", gruppe: "Ekstravakter", rolle:"", telefon:"92953974", epost:"", bilde:"bilder/Khadra.jpg" },

    { navn:"Khadija", gruppe: "Ekstravakter", rolle:"", telefon:"40077048", epost:"", bilde:"bilder/Khadija.jpg" },

     { navn:"Kristine(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"48626825", epost:"", bilde:"bilder/Kristine.jpg", dag: 30, måned: 3 },
    
    { navn:"Malele(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"93809596", epost:"", bilde:"bilder/Malele.jpg" },

    { navn:"Malyuun(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"40954865", epost:"", bilde:"bilder/Malyuun.jpg", dag: 6, måned: 6 },

    { navn:"Marthe Sukkestad(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"95990136", epost:"", bilde:"bilder/MartheS.jpg", dag: 2, måned: 4 },

    { navn:"Mostopha", rolle:"", gruppe: "Ekstravakter", telefon:"98774382", epost:"", bilde:"bilder/Mostopha.jpg" },

    { navn:"Neda(SPL 20%)", gruppe: "Ekstravakter", rolle:" ", telefon:"90653331", epost:"", bilde:"bilder/Neda.jpg" },

    { navn:"Nica", gruppe: "Ekstravakter", rolle:"", telefon:"93971207", epost:"", bilde:"bilder/Nica.jpg" },

    { navn:"Nabina(30%)", gruppe: "Ekstravakter", rolle:"", telefon:"46397430", epost:"", bilde:"bilder/Nabina.jpg" },

    { navn:"Preenaphan", gruppe: "Ekstravakter", rolle:"", telefon:"93476165", epost:"", bilde:"bilder/Preenaphan.jpg" },

    { navn:"Robiel(80%)", gruppe: "Ekstravakter", rolle:"", telefon:"97367760", epost:"", bilde:"bilder/Robiel.jpg", dag: 19, måned: 9 },

    { navn:"Silje Antonsen", gruppe: "Ekstravakter", rolle:"", telefon:"45179522", epost:"", bilde:"" },

    { navn:"Svetlana", gruppe: "Ekstravakter", rolle:"", telefon:"40571544", epost:"", bilde:"bilder/Svetlana.jpg" },

    { navn:"Senait", gruppe: "Ekstravakter", rolle:"", telefon:"20451826", epost:"", bilde:"bilder/Senait.jpg", dag: 9, måned: 11 },

    { navn:"Sevinch", gruppe: "Ekstravakter", rolle:"", telefon:"96685552", epost:"", bilde:"bilder/Sevinch.jpg" },

    { navn:"Theresa(PB)", gruppe: "Ekstravakter", rolle:"", telefon:"41307331", epost:"", bilde:"bilder/Theresa.jpg"},

    { navn:"Tomina", gruppe: "Ekstravakter", rolle:"", telefon:"48173455", epost:"", bilde:"bilder/Tomina.jpg" },

    { navn:"Tuku", gruppe: "Ekstravakter", rolle:"", telefon:"94481168", epost:"", bilde:"bilder/Tuku.jpg" },

    { navn:"Valentina", gruppe: "Ekstravakter", rolle:"", telefon:"91147851", epost:"", bilde:"bilder/Valentina.jpeg", dag: 22, måned: 11},

    { navn:"Vilde", gruppe: "Ekstravakter", rolle:"", telefon:"93869136", epost:"", bilde:"bilder/Vilde.jpg" },

    { navn:"Yusuf", gruppe: "Ekstravakter", rolle:"", telefon:"45524866", epost:"", bilde:"bilder/Yusuf.jpg", dag: 2, måned: 10 },

    { navn:"Zemene(SPL)", gruppe: "Ekstravakter", rolle:"", telefon:"45248560", epost:"", bilde:"bilder/Zemene.jpg", dag: 29, måned: 3 },

    { navn:"Zohra Dellaa", gruppe: "Ekstravakter", rolle:"", telefon:"45911765", epost:"", bilde:"bilder/ZohraDellaa.jpg" },

    { navn:"Aase", rolle:"", gruppe: "Ekstravakter", telefon:"45228091", epost:"", bilde:"bilder/Aase.jpg", dag: 2, måned: 10 },

   

    ];