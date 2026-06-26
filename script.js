// Philippines Air Quality Monitor JavaScript - 2026 Edition

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        document.body.className = `${this.currentTheme}-theme`;
        this.updateThemeIcon();
    }
    
    toggle() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.className = `${this.currentTheme}-theme`;
        localStorage.setItem('theme', this.currentTheme);
        this.updateThemeIcon();
    }
    
    updateThemeIcon() {
        const icon = document.querySelector('#theme-toggle i');
        if (icon) {
            icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Philippine regions, provinces, and cities data - Complete
const philippinesData = {
    "National Capital Region (NCR)": {
        provinces: ["Metro Manila"],
        cities: [
            "Manila", "Quezon City", "Caloocan", "Las Piñas", "Makati",
            "Malabon", "Mandaluyong", "Marikina", "Muntinlupa", "Navotas",
            "Parañaque", "Pasay", "Pasig", "San Juan", "Taguig", "Valenzuela"
        ]
    },
    "Cordillera Administrative Region (CAR)": {
        provinces: ["Abra", "Apayao", "Benguet", "Ifugao", "Kalinga", "Mountain Province"],
        cities: {
            "Abra": ["Bangued"],
            "Apayao": ["Calanasan", "Conner", "Flora", "Kabugao", "Luna", "Pudtol", "Santa Marcela"],
            "Benguet": ["Baguio", "Itogon", "La Trinidad", "Mankayan", "Sablan", "Tuba", "Tublay"],
            "Ifugao": ["Lagawe", "Aguinaldo", "Alfonso Lista", "Asipulo", "Banaue", "Hingyon", "Hungduan", "Kiangan", "Lamut", "Mayoyao", "Potia", "Tinoc"],
            "Kalinga": ["Tabuk", "Balbalan", "Lubuagan", "Pasil", "Pinukpuk", "Rizal", "Tanudan", "Tinglayan"],
            "Mountain Province": ["Bontoc", "Barlig", "Bauko", "Besao", "Natonin", "Paracelis", "Sabangan", "Sagada", "Tadian"]
        }
    },
    "Ilocos Region (Region I)": {
        provinces: ["Ilocos Norte", "Ilocos Sur", "La Union", "Pangasinan"],
        cities: {
            "Ilocos Norte": ["Laoag", "Batac", "Badoc", "Bangui", "Banna", "Burgos", "Carasi", "Currimao", "Dingras", "Dumalneg", "Marcos", "Nueva Era", "Pagudpud", "Paoay", "Pasuquin", "Piddig", "Pinili", "San Nicolas", "Sarrat", "Solsona", "Vintar"],
            "Ilocos Sur": ["Vigan", "Candon", "Alilem", "Banayoyo", "Bantay", "Burgos", "Cabugao", "Caoayan", "Cervantes", "Galimuyod", "Gregorio del Pilar", "Lidlidda", "Magsingal", "Nagbukel", "Narvacan", "Quirino", "Salcedo", "San Emilio", "San Esteban", "San Ildefonso", "San Juan", "San Vicente", "Santa", "Santa Catalina", "Santa Cruz", "Santa Lucia", "Santa Maria", "Santiago", "Santo Domingo", "Sigay", "Sinait", "Suyo", "Tagudin"],
            "La Union": ["San Fernando", "Agoo", "Aringay", "Bacnotan", "Bagulin", "Bauang", "Burgos", "Caba", "Luna", "Naguilian", "Pugo", "Rosario", "San Gabriel", "San Juan", "Santo Tomas", "Santol", "Tubao"],
            "Pangasinan": ["Dagupan", "Urdaneta", "Alaminos", "San Carlos", "Alcala", "Asingan", "Balungao", "Bautista", "Bayambang", "Binalonan", "Binmaley", "Bolinao", "Bugallon", "Burgos", "Calasiao", "Dasol", "Infanta", "Labrador", "Lingayen", "Mabini", "Mangaldan", "Mangatarem", "Mapandan", "Natividad", "Pozzorubio", "Rosales", "San Fabian", "San Jacinto", "San Manuel", "San Quintin", "Santa Barbara", "Santa Maria", "Santo Tomas", "Sison", "Sual", "Tayug", "Umingan", "Urbiztondo", "Villasis"]
        }
    },
    "Cagayan Valley (Region II)": {
        provinces: ["Batanes", "Cagayan", "Isabela", "Nueva Vizcaya", "Quirino"],
        cities: {
            "Batanes": ["Basco", "Itbayat", "Ivana", "Mahatao", "Sabtang", "Uyugan"],
            "Cagayan": ["Tuguegarao", "Calayan", "Aparri", "Baggao", "Ballesteros", "Buguey", "Camalaniugan", "Claveria", "Enrile", "Gattaran", "Gonzaga", "Iguig", "Lal-lo", "Lasam", "Pamplona", "Peñablanca", "Piat", "Rizal", "Sanchez-Mira", "Santa Ana", "Santa Praxedes", "Santa Teresita", "Santo Niño", "Solana", "Tuao"],
            "Isabela": ["Cauayan", "Ilagan", "Santiago", "Alicia", "Angadanan", "Aurora", "Benito Soliven", "Burgos", "Cabagan", "Cabatuan", "Cordon", "Delfin Albano", "Dinapigue", "Divilacan", "Echague", "Gamu", "Jones", "Luna", "Maconacon", "Mallig", "Naguilian", "Palanan", "Quezon", "Quirino", "Ramon", "Reina Mercedes", "Roxas", "San Agustin", "San Guillermo", "San Isidro", "San Manuel", "San Mariano", "San Mateo", "San Pablo", "Santa Maria", "Santo Tomas", "Tumauini"],
            "Nueva Vizcaya": ["Bayombong", "Solano", "Alfonso Castañeda", "Ambaguio", "Aritao", "Bagabag", "Bambang", "Cabiao", "Diadi", "Dupax del Norte", "Dupax del Sur", "Kasibu", "Kayapa", "Quezon", "Santa Fe", "Villaverde"],
            "Quirino": ["Cabarroguis", "Aglipay", "Diffun", "Maddela", "Nagtipunan", "Saguday"]
        }
    },
    "Central Luzon (Region III)": {
        provinces: ["Aurora", "Bataan", "Bulacan", "Nueva Ecija", "Pampanga", "Tarlac", "Zambales"],
        cities: {
            "Aurora": ["Baler", "Casiguran", "Dilasag", "Dinalungan", "Dingalan", "Dipaculao", "Maria Aurora", "San Luis"],
            "Bataan": ["Balanga", "Abucay", "Bagac", "Dinalupihan", "Hermosa", "Limay", "Mariveles", "Morong", "Orani", "Orion", "Pilar", "Samal"],
            "Bulacan": ["Malolos", "Meycauayan", "San Jose del Monte", "Angat", "Balagtas", "Baliuag", "Bocaue", "Bulacan", "Bustos", "Calumpit", "Candaba", "Doña Remedios Trinidad", "Guiguinto", "Hagonoy", "Marilao", "Norzagaray", "Obando", "Pandi", "Paombong", "Plaridel", "Pulilan", "San Ildefonso", "San Miguel", "San Rafael", "Santa Maria"],
            "Nueva Ecija": ["Palayan", "Cabanatuan", "Gapan", "Muñoz", "Science City of Muñoz", "Aliaga", "Bongabon", "Cabiao", "Carranglan", "Cuyapo", "Gabaldon", "General Mamerto Natividad", "Guimba", "Jaen", "Laur", "Licab", "Llanera", "Lupao", "Nampicuan", "Pantabangan", "Peñaranda", "Quezon", "Rizal", "San Antonio", "San Isidro", "San Jose", "San Leonardo", "Santa Rosa", "Santo Domingo", "Talavera", "Talugtug", "Zaragoza"],
            "Pampanga": ["Angeles", "San Fernando", "Mabalacat", "Apalit", "Arayat", "Bacolor", "Candaba", "Floridablanca", "Guagua", "Lubao", "Masantol", "Mexico", "Minalin", "Porac", "San Luis", "San Simon", "Santa Ana", "Santa Rita", "Santo Tomas", "Sasmuan"],
            "Tarlac": ["Tarlac", "Capas", "Concepcion", "Camiling", "Gerona", "La Paz", "Mayantoc", "Moncada", "Paniqui", "Pura", "Ramos", "San Clemente", "San Jose", "San Manuel", "Santa Ignacia", "Victoria"],
            "Zambales": ["Olongapo", "Iba", "Botolan", "Cabangan", "Candelaria", "Castillejos", "Masinloc", "Palauig", "San Antonio", "San Felipe", "San Marcelino", "San Narciso", "Santa Cruz", "Subic"]
        }
    },
    "CALABARZON (Region IV-A)": {
        provinces: ["Batangas", "Cavite", "Laguna", "Quezon", "Rizal"],
        cities: {
            "Batangas": ["Batangas City", "Lipa", "Tanauan", "Agoncillo", "Alitagtag", "Balayan", "Balete", "Bauan", "Calaca", "Calatagan", "Cuenca", "Ibaan", "Laurel", "Lemery", "Lian", "Lobo", "Mabini", "Malvar", "Mataasnakahoy", "Nasugbu", "Padre Garcia", "Rosario", "San Jose", "San Juan", "San Luis", "San Nicolas", "San Pascual", "Santa Teresita", "Santo Tomas", "Taal", "Talisay", "Taysan", "Tingloy", "Tuy"],
            "Cavite": ["Bacoor", "Cavite City", "Dasmariñas", "General Trias", "Imus", "Tagaytay", "Trece Martires", "Alfonso", "Amadeo", "Carmona", "Gen. Mariano Alvarez", "Indang", "Kawit", "Magallanes", "Maragondon", "Mendez", "Naic", "Noveleta", "Rosario", "Silang", "Tanza", "Ternate"],
            "Laguna": ["Calamba", "Cabuyao", "San Pablo", "Santa Rosa", "Biñan", "San Pedro", "Calauan", "Cavinti", "Famy", "Kalayaan", "Liliw", "Los Baños", "Luisiana", "Lumban", "Mabitac", "Magdalena", "Majayjay", "Nagcarlan", "Paete", "Pagsanjan", "Pakil", "Pangil", "Pila", "Rizal", "Santa Cruz", "Santa Maria", "Siniloan", "Victoria"],
            "Quezon": ["Lucena", "Tayabas", "Agdangan", "Alabat", "Atimonan", "Buenavista", "Burdeos", "Calauag", "Candelaria", "Catanauan", "Dolores", "General Luna", "General Nakar", "Guinayangan", "Gumaca", "Infanta", "Jomalig", "Lopez", "Lucban", "Macalelon", "Mauban", "Mulanay", "Padre Burgos", "Pagbilao", "Panukulan", "Perez", "Pitogo", "Plaridel", "Polillo", "Quezon", "Real", "Sampaloc", "San Antonio", "San Andres", "San Francisco", "San Narciso", "Sariaya", "Tagkawayan", "Tiaong", "Unisan"],
            "Rizal": ["Antipolo", "Cainta", "Taytay", "Binangonan", "Angono", "Baras", "Cardona", "Jalajala", "Morong", "Pililla", "Tanay", "Teresa", "Rodriguez", "San Mateo"]
        }
    },
    "MIMAROPA (Region IV-B)": {
        provinces: ["Marinduque", "Occidental Mindoro", "Oriental Mindoro", "Palawan", "Romblon"],
        cities: {
            "Marinduque": ["Boac", "Buenavista", "Gasan", "Mogpog", "Santa Cruz", "Torrijos"],
            "Occidental Mindoro": ["Mamburao", "Abra de Ilog", "Calintaan", "Looc", "Lubang", "Magsaysay", "Mangarin", "Rizal", "Sablayan", "San Jose", "Santa Cruz"],
            "Oriental Mindoro": ["Calapan", "Baco", "Bansud", "Bongabong", "Bulalacao", "Mansalay", "Naujan", "Pinamalayan", "Pola", "Puerto Galera", "Roxas", "San Teodoro", "Socorro", "Victoria"],
            "Palawan": ["Puerto Princesa", "Aborlan", "Agutaya", "Araceli", "Balabac", "Bataraza", "Brooke's Point", "Cagayancillo", "Cuyo", "Dumaran", "El Nido", "Kalayaan", "Linapacan", "Magsaysay", "Narra", "Quezon", "Rizal", "Roxas", "San Vicente", "Sofronio Española", "Taytay"],
            "Romblon": ["Romblon", "Alcantara", "Banton", "Cajidiocan", "Calatrava", "Concepcion", "Corcuera", "Ferrol", "Looc", "Magdiwang", "Odiongan", "San Agustin", "San Andres", "San Fernando", "San Jose", "Santa Fe", "Santa Maria"]
        }
    },
    "Bicol Region (Region V)": {
        provinces: ["Albay", "Camarines Norte", "Camarines Sur", "Catanduanes", "Masbate", "Sorsogon"],
        cities: {
            "Albay": ["Legazpi", "Ligao", "Tabaco", "Bacacay", "Camalig", "Daraga", "Guinobatan", "Jovellar", "Libon", "Malilipot", "Malinao", "Manito", "Oas", "Pio Duran", "Polangui", "Rapu-Rapu", "Santo Domingo", "Tiwi"],
            "Camarines Norte": ["Daet", "Basud", "Capalonga", "Jose Panganiban", "Labo", "Mercedes", "Paracale", "San Lorenzo Ruiz", "San Vicente", "Santa Elena", "Talisay", "Vinzons"],
            "Camarines Sur": ["Naga", "Iriga", "Baao", "Balatan", "Bato", "Bombon", "Buhi", "Bula", "Cabusao", "Calabanga", "Camaligan", "Canaman", "Caramoan", "Del Gallego", "Gainza", "Garchitorena", "Goa", "Lagonoy", "Libmanan", "Lupi", "Magarao", "Milaor", "Minalabac", "Nabua", "Ocampo", "Pamplona", "Pasacao", "Pili", "Ragay", "Sagñay", "San Fernando", "San Jose", "Sipocot", "Siruma", "Tigaon", "Tinambac"],
            "Catanduanes": ["Virac", "Bagamanoc", "Baras", "Bato", "Caramoran", "Gigmoto", "Pandan", "Panganiban", "San Andres", "San Miguel", "Viga"],
            "Masbate": ["Masbate City", "Aroroy", "Baleno", "Balud", "Batuan", "Cawayan", "Claveria", "Dimasalang", "Esperanza", "Mandaon", "Milagros", "Mobo", "Monreal", "Pio V. Corpuz", "Placer", "San Fernando", "San Jacinto", "San Pascual", "Uson"],
            "Sorsogon": ["Sorsogon City", "Barcelona", "Bulan", "Bulusan", "Casiguran", "Donsol", "Gubat", "Irosin", "Juban", "Magallanes", "Matnog", "Pilar", "Prieto Diaz", "Santa Magdalena"]
        }
    },
    "Western Visayas (Region VI)": {
        provinces: ["Aklan", "Antique", "Capiz", "Guimaras", "Iloilo", "Negros Occidental"],
        cities: {
            "Aklan": ["Kalibo", "Balete", "Banga", "Batan", "Buruanga", "Ibajay", "Lezo", "Libacao", "Madalag", "Makato", "Malay", "Malinao", "Nabas", "New Washington", "Numancia", "Tangalan"],
            "Antique": ["San Jose", "Anini-y", "Barbaza", "Belison", "Bugasong", "Caluya", "Culasi", "Hamtic", "Laua-an", "Pandan", "Patnongon", "San Remigio", "Sebaste", "Sibalon", "Tibiao", "Tobias Fornier", "Valderrama"],
            "Capiz": ["Roxas City", "Cuartero", "Dao", "Dumalag", "Ivisan", "Jamindan", "Ma-ayon", "Mambusao", "Panay", "Panitan", "Pilar", "Pontevedra", "President Roxas", "Sapian", "Sigma", "Tapaz"],
            "Guimaras": ["Jordan", "Buenavista", "Nueva Valencia", "San Lorenzo", "Sibunag"],
            "Iloilo": ["Iloilo City", "Passi City", "Alimodian", "Anilao", "Badiangan", "Banate", "Barotac Nuevo", "Barotac Viejo", "Batad", "Bingawan", "Cabatuan", "Calinog", "Carles", "Concepcion", "Dingle", "Duenas", "Dumangas", "Estancia", "Guimbal", "Igbaras", "Janiuay", "Lambunao", "Leganes", "Leon", "Maasin", "Miagao", "Mina", "New Lucena", "Oton", "Pavia", "Pototan", "San Dionisio", "San Enrique", "San Joaquin", "San Miguel", "San Rafael", "Santa Barbara", "Sara", "Tigbauan", "Tubungan", "Zarraga"],
            "Negros Occidental": ["Bacolod City", "Bago City", "Cadiz City", "Escalante City", "Himamaylan City", "Kabankalan City", "La Carlota City", "Sagay City", "San Carlos City", "Silay City", "Sipalay City", "Talisay City", "Victorias City", "Binalbagan", "Calatrava", "Candoni", "Cauayan", "Enrique B. Magalona", "Hinigaran", "Hinoba-an", "Ilog", "Isabela", "La Castellana", "Manapla", "Moises Padilla", "Murcia", "Pontevedra", "Pulupandan", "Salvador Benedicto", "San Enrique", "San Fernando", "Toboso", "Valladolid"]
        }
    },
    "Central Visayas (Region VII)": {
        provinces: ["Bohol", "Cebu", "Negros Oriental", "Siquijor"],
        cities: {
            "Bohol": ["Tagbilaran City", "Alburquerque", "Alicia", "Anda", "Antequera", "Baclayon", "Balilihan", "Batuan", "Bilar", "Buenavista", "Calape", "Candijay", "Clarin", "Corella", "Cortes", "Dagohoy", "Danao", "Dauis", "Dimiao", "Garcia Hernandez", "Getafe", "Guindulman", "Inabanga", "Jagna", "Lila", "Loay", "Loboc", "Loon", "Mabini", "Maribojoc", "Panglao", "Pilar", "President Carlos P. Garcia", "Sagbayan", "San Isidro", "San Miguel", "Sevilla", "Sierra Bullones", "Sikatuna", "Talibon", "Trinidad", "Tubigon", "Ubay", "Valencia"],
            "Cebu": ["Cebu City", "Lapu-Lapu City", "Mandaue City", "Bogo City", "Carcar City", "Danao City", "Naga City", "Talisay City", "Toledo City", "Alcantara", "Alcoy", "Alegria", "Aloguinsan", "Argao", "Asturias", "Badian", "Balamban", "Bantayan", "Barili", "Boljoon", "Borbon", "Carmen", "Catmon", "Compostela", "Consolacion", "Cordoba", "Daanbantayan", "Dalaguete", "Dumanjug", "Ginatilan", "Liloan", "Madridejos", "Malabuyoc", "Minglanilla", "Moalboal", "Oslob", "Pilar", "Pinamungahan", "Poro", "Ronda", "Samboan", "San Fernando", "San Francisco", "San Remigio", "Santa Fe", "Santander", "Sibonga", "Sogod", "Tabogon", "Tabuelan", "Tuburan", "Tudela"],
            "Negros Oriental": ["Dumaguete City", "Bais City", "Bayawan City", "Canlaon City", "Guihulngan City", "Tanjay City", "Amlan", "Ayungon", "Bacong", "Basay", "Bindoy", "Dauin", "Jimalalud", "La Libertad", "Mabinay", "Manjuyod", "Pamplona", "San Jose", "Santa Catalina", "Siaton", "Sibulan", "Tayasan", "Valencia", "Vallehermoso", "Zamboanguita"],
            "Siquijor": ["Siquijor", "Enrique Villanueva", "Larena", "Lazi", "Maria", "San Juan"]
        }
    },
    "Eastern Visayas (Region VIII)": {
        provinces: ["Biliran", "Leyte", "Southern Leyte", "Eastern Samar", "Northern Samar", "Samar"],
        cities: {
            "Biliran": ["Naval", "Almeria", "Biliran", "Cabucgayan", "Caibiran", "Culaba", "Kawayan", "Maripipi"],
            "Leyte": ["Tacloban", "Ormoc", "Baybay", "Abuyog", "Alangalang", "Barugo", "Bato", "Burauen", "Calubian", "Capoocan", "Carigara", "Dagami", "Dulag", "Hilongos", "Hindang", "Inopacan", "Jaro", "Julita", "Kananga", "La Paz", "Leyte", "Liloan", "MacArthur", "Mahaplag", "Matalom", "Matag-ob", "Mayorga", "Merida", "Ormoc", "Palo", "Palompon", "Pastrana", "Pintuyan", "San Isidro", "San Miguel", "Santa Fe", "Tabango", "Tabontabon", "Tanauan", "Tunga", "Villaba"],
            "Southern Leyte": ["Maasin", "Anahawan", "Bontoc", "Hinunangan", "Hinundayan", "Libagon", "Liloan", "Macrohon", "Malitbog", "Padre Burgos", "Pintuyan", "Saint Bernard", "San Francisco", "San Juan", "Silago", "Sogod", "Tomas Oppus"],
            "Eastern Samar": ["Borongan", "Arteche", "Balangiga", "Balangkayan", "Can-avid", "Daram", "General MacArthur", "Giporlos", "Guiuan", "Hernani", "Jipapad", "Lawaan", "Llorente", "Maslog", "Maydolong", "Mercedes", "Oras", "Quinapondan", "San Julian", "San Policarpo", "Sulat", "Taft", "Salcedo"],
            "Northern Samar": ["Catarman", "Allen", "Biri", "Bobon", "Capul", "Catarman", "Gamay", "Juban", "Laoang", "Lavezares", "Las Navas", "Lope de Vega", "Mondragon", "Palapag", "Pambujan", "San Antonio", "San Isidro", "San Jose", "San Roque", "San Vicente", "Silvino Lobos"],
            "Samar": ["Catbalogan", "Almagro", "Basey", "Calbayog", "Calbiga", "Catbalogan", "Daram", "Gandara", "Hinabangan", "Jiabong", "Marabut", "Motiong", "Pinabacdao", "San Jose de Buan", "San Sebastian", "Santa Rita", "Santo Niño", "Tarangnan", "Villareal", "Zumarraga"]
        }
    },
    "Zamboanga Peninsula (Region IX)": {
        provinces: ["Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"],
        cities: {
            "Zamboanga del Norte": ["Dipolog", "Dapitan", "Polanco", "Rizal", "Sergio Osmeña Sr.", "Siayan", "Sindangan", "Kalawit", "La Libertad", "Manukan", "Jose Dalman", "Godod", "Salug", "Baliguian", "Liloy", "Tampilisan", "Gutalac", "Siocon", "Sibuco", "Baliguian"],
            "Zamboanga del Sur": ["Pagadian", "Zamboanga City", "Aurora", "Bayog", "Dimataling", "Dinas", "Don Victoriano Chiongbian", "Dumalinao", "Guipos", "Josefina", "Kumalarang", "Lakewood", "Lapuyan", "Mahayag", "Margosatubig", "Midsalip", "Molave", "Pagadian", "Pitogo", "Ramon Magsaysay", "San Miguel", "San Pablo", "Sominot", "Tigbao", "Tukuran", "Vincenzo A. Sagun"],
            "Zamboanga Sibugay": ["Ipil", "Buug", "Diplahan", "Imelda", "Ipil", "Kabasalan", "Mabuhay", "Malangas", "Naga", "Olutanga", "Payao", "Roseller Lim", "Siay", "Talusan", "Titay", "Tungawan"]
        }
    },
    "Northern Mindanao (Region X)": {
        provinces: ["Bukidnon", "Camiguin", "Lanao del Norte", "Misamis Occidental", "Misamis Oriental"],
        cities: {
            "Bukidnon": ["Malaybalay", "Valencia", "Baungon", "Cabanglasan", "Damulog", "Don Carlos", "Impasugong", "Kadingilan", "Kalilangan", "Kibawe", "Kitaotao", "Lantapan", "Libona", "Malaybalay", "Manolo Fortich", "Maramag", "Pangantucan", "Quezon", "San Fernando", "Sumilao", "Talakag", "Valencia"],
            "Camiguin": ["Mambajao", "Catarman", "Guinsiliban", "Mahinog", "Mambajao", "Sagay"],
            "Lanao del Norte": ["Iligan", "Baroy", "Bacolod", "Baloi", "Kapatagan", "Lala", "Magsaysay", "Matungao", "Munai", "Poona Piagapo", "Sapad", "Sultan Naga Dimaporo", "Tagoloan", "Tangcal", "Tubod"],
            "Misamis Occidental": ["Ozamiz", "Oroquieta", "Tangub", "Aloran", "Baliangao", "Bonifacio", "Calamba", "Clarin", "Concepcion", "Jimenez", "Lopez Jaena", "Oroquieta", "Panaon", "Plaridel", "Sapang Dalaga", "Sinacaban", "Tangub", "Tudela"],
            "Misamis Oriental": ["Cagayan de Oro", "Gingoog", "Alubijid", "Balingasag", "Balingoan", "Binuangan", "Claveria", "El Salvador", "Gingoog", "Initao", "Jasaan", "Lagonglong", "Laguindingan", "Libertad", "Lugait", "Magsaysay", "Manticao", "Medina", "Naawan", "Opol", "Salay", "Sugbongcogon", "Tagoloan", "Talisayan", "Villanueva"]
        }
    },
    "Davao Region (Region XI)": {
        provinces: ["Davao de Oro", "Davao del Norte", "Davao del Sur", "Davao Occidental", "Davao Oriental"],
        cities: {
            "Davao de Oro": ["Nabunturan", "Compostela", "Monkayo", "Maragusan", "Montevista", "New Bataan", "Pantukan", "Mawab", "Maco", "Laak", "Maco", "Mawab", "Nabunturan", "New Bataan", "Pantukan", "Montevista", "Maragusan"],
            "Davao del Norte": ["Tagum", "Panabo", "Samal", "Asuncion", "Braulio E. Dujali", "Carmen", "Kapalong", "Mabini", "New Corella", "Panabo", "Samal", "San Isidro", "Santo Tomas", "Tagum", "Talaingod"],
            "Davao del Sur": ["Davao City", "Digos", "Bansalan", "Digos", "Hagonoy", "Kiblawan", "Magsaysay", "Malalag", "Matanao", "Padada", "Santa Cruz", "Sulop"],
            "Davao Occidental": ["Malita", "Don Marcelino", "Jose Abad Santos", "Malita", "Manay", "Santa Maria", "Sarangani", "Sarangani", "Don Marcelino", "Jose Abad Santos"],
            "Davao Oriental": ["Mati", "Baganga", "Banaybanay", "Boston", "Caraga", "Cateel", "Governor Generoso", "Lupon", "Manay", "Mati", "San Isidro", "Tarragona"]
        }
    },
    "Soccsksargen (Region XII)": {
        provinces: ["Cotabato", "Sarangani", "South Cotabato", "Sultan Kudarat"],
        cities: {
            "Cotabato": ["Kidapawan", "Alamada", "Aleosan", "Antipas", "Arakan", "Banisilan", "Carmen", "Kabacan", "Kidapawan", "Libungan", "Magpet", "M'lang", "Makilala", "Matalam", "Pigcawayan", "President Roxas", "Sarmenio", "Tulunan"],
            "Sarangani": ["Alabel", "Glan", "Kiamba", "Maitum", "Alabel", "Glan", "Kiamba", "Maitum"],
            "South Cotabato": ["General Santos", "Koronadal", "Banga", "Koronadal", "Lake Sebu", "Norala", "Polomolok", "Santo Niño", "Surallah", "Tampakan", "Tantangan", "T'Boli", "General Santos"],
            "Sultan Kudarat": ["Isulan", "Tacurong", "Bagumbayan", "Columbio", "Esperanza", "Isulan", "Kalamansig", "Lambayong", "Lebak", "Lutayan", "Palimbang", "Pres. Quirino", "Sen. Ninoy Aquino", "Sultan Kudarat", "Tacurong"]
        }
    },
    "Caraga (Region XIII)": {
        provinces: ["Agusan del Norte", "Agusan del Sur", "Dinagat Islands", "Surigao del Norte", "Surigao del Sur"],
        cities: {
            "Agusan del Norte": ["Butuan", "Cabadbaran", "Buenavista", "Butuan", "Cabadbaran", "Carmen", "Jabonga", "Kitcharao", "Las Nieves", "Magallanes", "Nasipit", "Remedios T. Romualdez", "Santiago", "Tubay"],
            "Agusan del Sur": ["Bayugan", "Prosperidad", "Bayugan", "Bunawan", "Esperanza", "La Paz", "Loreto", "Prosperidad", "Rosario", "San Francisco", "Santa Josefa", "Sibagat", "Talacogon", "Trento", "Veruela"],
            "Dinagat Islands": ["San Jose", "Basilisa", "Cagdianao", "Dinagat", "Libjo", "Loreto", "San Jose", "Tubajon"],
            "Surigao del Norte": ["Surigao City", "Surigao City", "Alegria", "Bacuag", "Claver", "Gigaquit", "Mainit", "Malimono", "Panaon", "Placer", "San Benito", "San Francisco", "Santa Monica", "Sison", "Tagana-an", "Tubod"],
            "Surigao del Sur": ["Tandag", "Bislig", "Tandag", "Barobo", "Bayabas", "Bislig", "Cantilan", "Carascal", "Cortes", "Hinatuan", "Lianga", "Lingig", "Madrid", "Marihatag", "San Agustin", "San Miguel", "Tagbina", "Tago", "Tandag"]
        }
    },
    "Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)": {
        provinces: ["Basilan", "Lanao del Sur", "Maguindanao del Norte", "Maguindanao del Sur", "Sulu", "Tawi-Tawi"],
        cities: {
            "Basilan": ["Isabela", "Lamitan", "Isabela", "Lamitan", "Akbar", "Al-Barka", "Hadji Mohammad Ajul", "Hadji Muhtamad", "Lantawan", "Maluso", "Sumisip", "Tabuan-Lasa", "Tuburan", "Tipo-Tipo", "Ungkaya Pukan"],
            "Lanao del Sur": ["Marawi", "Baloi", "Butig", "Calanogas", "Ditsaan-Ramain", "Ganassi", "Kapai", "Lumbaca-Unayan", "Lumbatan", "Lumbayanague", "Madamba", "Marantao", "Marawi", "Masiu", "Mulondo", "Pantar", "Piagapo", "Poona Bayabao", "Pualas", "Saguiaran", "Sultan Dumalondong", "Tagoloan II", "Tamparan", "Taraka", "Tubaran"],
            "Maguindanao del Norte": ["Cotabato City", "Barira", "Buldon", "Cotabato City", "Datu Blah T. Sinsuat", "Datu Odin Sinsuat", "Kabuntalan", "Mamasapano", "Pagalungan", "Parang", "Sultan Kudarat", "Sultan Mastura"],
            "Maguindanao del Sur": ["Shariff Aguak", "Ampatuan", "Buluan", "Datu Abdullah Sangki", "Datu Anggal Midtimbang", "Datu Hoffer Ampatuan", "Datu Montawal", "Datu Paglas", "Datu Piang", "Datu Salibo", "Datu Saudi Ampatuan", "Datu Unsay", "General Salipada K. Pendatun", "Guindulungan", "Mangudadatu", "Paglat", "Pandag", "Rajah Buayan", "Shariff Aguak", "Shariff Saydona Mustapha", "Sultan sa Barongis", "Talayan"],
            "Sulu": ["Jolo", "Indanan", "Jolo", "Kalingalan Caluang", "Lugus", "Luuk", "Maimbung", "Omar", "Pandami", "Panglima Estino", "Parang", "Pata", "Patikul", "Siasi", "Talipao", "Tapul", "Tongkil"],
            "Tawi-Tawi": ["Bongao", "Bongao", "Languyan", "Panglima Sugala", "Sapa-Sapa", "Sibutu", "Simunul", "Sitangkai", "Tandubas", "Turtle Islands"]
        }
    }
};

// Pollutant colors and labels
const pollutantConfig = {
    us_aqi: { label: 'AQI', color: '#6366f1' },
    pm2_5: { label: 'PM2.5', color: '#ef4444' },
    pm10: { label: 'PM10', color: '#f97316' },
    ozone: { label: 'O₃', color: '#10b981' },
    nitrogen_dioxide: { label: 'NO₂', color: '#f59e0b' },
    sulphur_dioxide: { label: 'SO₂', color: '#8b5cf6' },
    carbon_monoxide: { label: 'CO', color: '#ec4899' },
    carbon_dioxide: { label: 'CO₂', color: '#0ea5e9' }
};

// Global state to hold current air quality data
let currentAirQualityData = null;
let visiblePollutants = new Set(Object.keys(pollutantConfig));
let tooltip = null;

// Live Air Quality API Integration
class AirQualityAPI {
    constructor() {
        this.airQualityURL = 'https://air-quality-api.open-meteo.com/v1/air-quality';
        this.weatherURL = 'https://api.open-meteo.com/v1/forecast';
        this.cache = new Map();
        this.cacheTimeout = 10 * 60 * 1000; // 10 minutes
    }

    async getAirQuality(city) {
        const cacheKey = city.toLowerCase();
        const cached = this.cache.get(cacheKey);
        
        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            return cached.data;
        }

        try {
            const data = await this.fetchFromPrimaryAPI(city);
            this.cache.set(cacheKey, { data, timestamp: Date.now() });
            return data;
        } catch (error) {
            console.error('Open-Meteo API failed:', error);
            throw error; // No fallback, just throw the error
        }
    }

    async getWeather(city) {
        const cacheKey = `weather_${city.toLowerCase()}`;
        const cached = this.cache.get(cacheKey);
        
        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            return cached.data;
        }

        try {
            const data = await this.fetchWeatherData(city);
            this.cache.set(cacheKey, { data, timestamp: Date.now() });
            return data;
        } catch (error) {
            console.error('Weather API failed:', error);
            throw error;
        }
    }

    async fetchFromPrimaryAPI(city) {
        const cityCoordinates = await this.getCityCoordinates(city);
        
        const url = `${this.airQualityURL}?latitude=${cityCoordinates.lat}&longitude=${cityCoordinates.lng}&current=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,carbon_dioxide&hourly=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,carbon_dioxide&forecast_days=5&timezone=Asia/Manila&domains=cams_global`;
        
        console.log('Fetching Open-Meteo Air Quality data from:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Open-Meteo API failed: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Open-Meteo API response:', data);
        
        return this.transformOpenMeteoData(data, city);
    }

    async fetchWeatherData(city) {
        const cityCoordinates = await this.getCityCoordinates(city);
        
        const url = `${this.weatherURL}?latitude=${cityCoordinates.lat}&longitude=${cityCoordinates.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&forecast_days=5&timezone=Asia/Manila`;
        
        console.log('Fetching Open-Meteo Weather data from:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Weather API failed: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Weather API response:', data);
        
        return this.transformWeatherData(data, city);
    }

    transformOpenMeteoData(data, city) {
        try {
            if (!data || !data.current || !data.hourly) {
                throw new Error('Invalid data from Open-Meteo API');
            }
            
            // Calculate daily summaries (average values per day)
            const dailySummaries = this.calculateDailySummaries(data.hourly);
            
            return {
                aqi: data.current.us_aqi || 0,
                pm25: data.current.pm2_5 || 0,
                pm10: data.current.pm10 || 0,
                o3: data.current.ozone || 0,
                no2: data.current.nitrogen_dioxide || 0,
                so2: data.current.sulphur_dioxide || 0,
                co: data.current.carbon_monoxide || 0,
                co2: data.current.carbon_dioxide || 0,
                timestamp: Math.floor(Date.now() / 1000),
                location: city,
                source: 'Open-Meteo API',
                hourly: data.hourly, // Store all hourly data for detailed view
                dailyForecast: dailySummaries // Store daily summaries for 5-day forecast
            };
        } catch (error) {
            console.error('Error transforming Open-Meteo data:', error);
            throw new Error('Failed to transform Open-Meteo API data');
        }
    }

    transformWeatherData(data, city) {
        try {
            if (!data || !data.current || !data.daily) {
                throw new Error('Invalid weather data from Open-Meteo API');
            }
            
            // Weather code to description mapping
            const weatherCodes = {
                0: 'Clear sky',
                1: 'Mainly clear', 
                2: 'Partly cloudy',
                3: 'Overcast',
                45: 'Fog',
                48: 'Depositing rime fog',
                51: 'Light drizzle',
                53: 'Moderate drizzle',
                55: 'Dense drizzle',
                61: 'Slight rain',
                63: 'Moderate rain',
                65: 'Heavy rain',
                71: 'Slight snow',
                73: 'Moderate snow',
                75: 'Heavy snow',
                77: 'Snow grains',
                80: 'Slight rain showers',
                81: 'Moderate rain showers',
                82: 'Violent rain showers',
                85: 'Slight snow showers',
                86: 'Heavy snow showers',
                95: 'Thunderstorm',
                96: 'Thunderstorm with slight hail',
                99: 'Thunderstorm with heavy hail'
            };
            
            // Get weather icon based on code
            const getWeatherIcon = (code) => {
                if (code <= 1) return 'fa-sun';
                if (code <= 3) return 'fa-cloud-sun';
                if (code <= 48) return 'fa-cloud';
                if (code <= 67) return 'fa-cloud-rain';
                if (code <= 77) return 'fa-snowflake';
                if (code <= 82) return 'fa-cloud-showers-heavy';
                if (code <= 86) return 'fa-snowflake';
                return 'fa-bolt';
            };
            
            // Transform daily forecast
            const dailyForecast = data.daily.time.map((date, index) => ({
                date: new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
                weatherCode: data.daily.weather_code[index],
                weatherDescription: weatherCodes[data.daily.weather_code[index]] || 'Unknown',
                weatherIcon: getWeatherIcon(data.daily.weather_code[index]),
                tempMax: data.daily.temperature_2m_max[index],
                tempMin: data.daily.temperature_2m_min[index],
                precipitation: data.daily.precipitation_sum[index],
                windSpeed: data.daily.wind_speed_10m_max[index]
            }));
            
            return {
                current: {
                    temperature: data.current.temperature_2m,
                    apparentTemperature: data.current.apparent_temperature,
                    humidity: data.current.relative_humidity_2m,
                    weatherCode: data.current.weather_code,
                    weatherDescription: weatherCodes[data.current.weather_code] || 'Unknown',
                    weatherIcon: getWeatherIcon(data.current.weather_code),
                    windSpeed: data.current.wind_speed_10m,
                    windDirection: data.current.wind_direction_10m
                },
                dailyForecast: dailyForecast,
                location: city,
                source: 'Open-Meteo Weather API'
            };
        } catch (error) {
            console.error('Error transforming weather data:', error);
            throw new Error('Failed to transform weather data');
        }
    }
    
    calculateDailySummaries(hourlyData) {
        const summaries = {};
        
        hourlyData.time.forEach((timeStr, index) => {
            const date = new Date(timeStr);
            const dateKey = date.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
            });
            
            if (!summaries[dateKey]) {
                summaries[dateKey] = {
                    date: dateKey,
                    us_aqi: [],
                    pm2_5: [],
                    pm10: [],
                    ozone: [],
                    nitrogen_dioxide: [],
                    sulphur_dioxide: [],
                    carbon_monoxide: [],
                    carbon_dioxide: []
                };
            }
            
            summaries[dateKey].us_aqi.push(hourlyData.us_aqi[index]);
            summaries[dateKey].pm2_5.push(hourlyData.pm2_5[index]);
            summaries[dateKey].pm10.push(hourlyData.pm10[index]);
            summaries[dateKey].ozone.push(hourlyData.ozone[index]);
            summaries[dateKey].nitrogen_dioxide.push(hourlyData.nitrogen_dioxide[index]);
            summaries[dateKey].sulphur_dioxide.push(hourlyData.sulphur_dioxide[index]);
            summaries[dateKey].carbon_monoxide.push(hourlyData.carbon_monoxide[index]);
            summaries[dateKey].carbon_dioxide.push(hourlyData.carbon_dioxide[index]);
        });
        
        // Convert to array and calculate averages
        return Object.values(summaries).map(day => ({
            date: day.date,
            us_aqi: this.arrayAverage(day.us_aqi),
            pm2_5: this.arrayAverage(day.pm2_5),
            pm10: this.arrayAverage(day.pm10),
            ozone: this.arrayAverage(day.ozone),
            nitrogen_dioxide: this.arrayAverage(day.nitrogen_dioxide),
            sulphur_dioxide: this.arrayAverage(day.sulphur_dioxide),
            carbon_monoxide: this.arrayAverage(day.carbon_monoxide),
            carbon_dioxide: this.arrayAverage(day.carbon_dioxide)
        }));
    }
    
    arrayAverage(arr) {
        if (!arr || arr.length === 0) return 0;
        const sum = arr.reduce((acc, val) => acc + (val || 0), 0);
        return sum / arr.length;
    }

    async getCityCoordinates(city) {
        // Check cache first
        const cacheKey = `coords_${city.toLowerCase()}`;
        const cached = this.cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            return cached.data;
        }

        // Try geocoding API for accurate coordinates
        try {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
            const data = await response.json();
            
            if (data.results && data.results.length > 0) {
                const result = data.results[0];
                const coordinates = { lat: result.latitude, lng: result.longitude };
                
                // Cache the result
                this.cache.set(cacheKey, { data: coordinates, timestamp: Date.now() });
                
                console.log(`Geocoded ${city} to:`, coordinates);
                return coordinates;
            }
        } catch (error) {
            console.warn('Geocoding API failed, falling back to hardcoded coordinates:', error);
        }

        // Fallback to hardcoded coordinates for major cities
        const coordinates = {
            'manila': { lat: 14.5995, lng: 120.9842 },
            'quezon city': { lat: 14.6760, lng: 121.0437 },
            'makati': { lat: 14.5547, lng: 121.0244 },
            'baguio': { lat: 16.4023, lng: 120.5960 },
            'cebu city': { lat: 10.3157, lng: 123.8854 },
            'davao city': { lat: 7.0731, lng: 125.6128 },
            'caloocan': { lat: 14.6507, lng: 120.9667 },
            'pasig': { lat: 14.5764, lng: 121.0851 },
            'taguig': { lat: 14.5176, lng: 121.0509 },
            'las pinas': { lat: 14.4378, lng: 120.9768 },
            'paranaque': { lat: 14.4793, lng: 121.0198 },
            'valenzuela': { lat: 14.7000, lng: 120.9833 },
            'marikina': { lat: 14.6507, lng: 121.1029 },
            'mandaluyong': { lat: 14.5794, lng: 121.0359 },
            'san juan': { lat: 14.6019, lng: 121.0362 },
            'pasay': { lat: 14.5378, lng: 121.0017 },
            'muntinlupa': { lat: 14.4091, lng: 121.0256 },
            'tagaytay': { lat: 14.1198, lng: 120.9623 },
            'batangas city': { lat: 13.7565, lng: 121.0583 },
            'lipa city': { lat: 13.9404, lng: 121.1619 },
            'san pablo city': { lat: 14.0675, lng: 121.3238 },
            'cabanatuan': { lat: 15.4845, lng: 120.9679 },
            'angeles city': { lat: 15.1474, lng: 120.5899 },
            'san fernando': { lat: 15.0303, lng: 120.6919 },
            'balanga': { lat: 14.6667, lng: 120.5333 },
            'malolos': { lat: 14.8608, lng: 120.8149 },
            'legazpi': { lat: 13.1391, lng: 123.7438 },
            'naga city': { lat: 13.6218, lng: 123.1948 },
            'iriga': { lat: 13.5047, lng: 123.4217 },
            'tabaco': { lat: 13.3578, lng: 123.6058 },
            'masbate city': { lat: 12.4069, lng: 123.6192 },
            'sorsogon city': { lat: 12.9739, lng: 123.9742 }
        };
        
        const hardcodedCoords = coordinates[city.toLowerCase()];
        if (hardcodedCoords) {
            // Cache the hardcoded result
            this.cache.set(cacheKey, { data: hardcodedCoords, timestamp: Date.now() });
            return hardcodedCoords;
        }
        
        // No coordinates found - throw error to ensure data accuracy
        throw new Error(`Unable to find coordinates for city: "${city}". Please check the city name or try a different location.`);
    }
}

// Initialize API
const airQualityAPI = new AirQualityAPI();

// AQI categories and health recommendations
const aqiCategories = {
    good: { min: 0, max: 50, color: '#10b981', bgClass: 'aqi-bg-good', textClass: 'aqi-good' },
    moderate: { min: 51, max: 100, color: '#f59e0b', bgClass: 'aqi-bg-moderate', textClass: 'aqi-moderate' },
    'unhealthy-sensitive': { min: 101, max: 150, color: '#f97316', bgClass: 'aqi-bg-unhealthy-sensitive', textClass: 'aqi-unhealthy-sensitive' },
    unhealthy: { min: 151, max: 200, color: '#ef4444', bgClass: 'aqi-bg-unhealthy', textClass: 'aqi-unhealthy' },
    'very-unhealthy': { min: 201, max: 300, color: '#991b1b', bgClass: 'aqi-bg-very-unhealthy', textClass: 'aqi-very-unhealthy' },
    hazardous: { min: 301, max: 500, color: '#7f1d1d', bgClass: 'aqi-bg-hazardous', textClass: 'aqi-hazardous' }
};

const healthRecommendations = {
    good: {
        general: "Air quality is satisfactory. Enjoy your outdoor activities!",
        sensitive: "No health impacts expected for sensitive groups."
    },
    moderate: {
        general: "Air quality is acceptable. Unusually sensitive people should consider limiting prolonged outdoor exertion.",
        sensitive: "Sensitive individuals may experience minor symptoms. Consider reducing prolonged outdoor exertion."
    },
    'unhealthy-sensitive': {
        general: "General public not likely to be affected. Sensitive groups may experience symptoms.",
        sensitive: "Sensitive groups should reduce prolonged outdoor exertion. Keep windows closed and use air purifiers."
    },
    unhealthy: {
        general: "Everyone may begin to experience health effects. Limit outdoor activities.",
        sensitive: "Sensitive groups should avoid outdoor exertion. Stay indoors with air conditioning if possible."
    },
    'very-unhealthy': {
        general: "Health warnings of emergency conditions. Everyone should avoid outdoor activities.",
        sensitive: "Sensitive groups should remain indoors and avoid all physical exertion."
    },
    hazardous: {
        general: "Emergency conditions. Everyone should avoid outdoor activities and stay indoors.",
        sensitive: "Sensitive groups should remain indoors and seek medical attention if symptoms occur."
    }
};

// Get AQI category
function getAQICategory(aqi) {
    for (const [category, range] of Object.entries(aqiCategories)) {
        if (aqi >= range.min && aqi <= range.max) {
            return category;
        }
    }
    return 'hazardous';
}

// Initialize the application
function initializeApp() {
    try {
        initializeLocationSelectors();
        updateTime();
        setInterval(updateTime, 1000);
        initializeEventListeners();
        initializeChart();
        handleNavigation();
        
        console.log('SkyPulsePH initialized successfully');
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);

// Add event listeners with error handling
function initializeEventListeners() {
    try {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => themeManager.toggle());
        }
        
        // Logo click to go back to main content
        const logo = document.getElementById('logo');
        if (logo) {
            logo.addEventListener('click', showMainContent);
        }
        
        // Location selectors
        const regionSelect = document.getElementById('region-select');
        const provinceSelect = document.getElementById('province-select');
        const citySelect = document.getElementById('city-select');
        
        if (regionSelect) regionSelect.addEventListener('change', handleRegionChange);
        if (provinceSelect) provinceSelect.addEventListener('change', handleProvinceChange);
        if (citySelect) citySelect.addEventListener('change', handleCityChange);
        
        // Quick location buttons
        document.querySelectorAll('.quick-location-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const city = btn.dataset.city;
                selectQuickLocation(city);
            });
        });
        
        // Pollutant view toggle
        const pollutantsViewToggle = document.getElementById('pollutants-view-toggle');
        if (pollutantsViewToggle) {
            pollutantsViewToggle.addEventListener('click', () => {
                const pollutantsGrid = document.getElementById('pollutants-grid');
                const icon = pollutantsViewToggle.querySelector('i');
                
                if (pollutantsGrid) {
                    pollutantsGrid.classList.toggle('list-view');
                    if (pollutantsGrid.classList.contains('list-view')) {
                        icon.className = 'fas fa-list';
                    } else {
                        icon.className = 'fas fa-th';
                    }
                }
            });
        }
        
        // Action buttons
        const refreshBtn = document.getElementById('refresh-btn');
        const shareBtn = document.getElementById('share-btn');
        const downloadBtn = document.getElementById('download-btn');
        
        if (refreshBtn) refreshBtn.addEventListener('click', refreshData);
        if (shareBtn) shareBtn.addEventListener('click', shareData);
        if (downloadBtn) downloadBtn.addEventListener('click', downloadData);
        
    } catch (error) {
        console.error('Error initializing event listeners:', error);
    }
}

// Consolidated navigation handling
function handleNavigation() {
    const sections = ['about', 'health-guidelines', 'faq', 'privacy', 'terms', 'cookies', 'data-sources'];
    
    // Hide all sections initially
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) section.style.display = 'none';
    });
    
    // Show main content by default
    const mainContent = document.querySelector('.main .container');
    if (mainContent) mainContent.style.display = 'block';
    
    // Add click handlers for all interactive elements
    setupNavigationHandlers();
}

function setupNavigationHandlers() {
    // Handle footer links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
    
    // Handle learn more buttons
    document.querySelectorAll('.learn-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = btn.dataset.section;
            if (sectionId) {
                showSection(sectionId);
            } else {
                const infoCard = btn.closest('.info-card');
                const fallbackSectionId = infoCard?.closest('.info-section')?.id;
                if (fallbackSectionId) showSection(fallbackSectionId);
            }
        });
    });
    
    // Handle back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', showMainContent);
    });
}

// Show main content
function showMainContent() {
    const mainContent = document.querySelector('.main .container');
    const sections = ['about', 'data-sources', 'health-guidelines', 'faq', 'privacy', 'terms', 'cookies'];
    
    // Hide all sections
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.opacity = '0';
            setTimeout(() => section.style.display = 'none', 300);
        }
    });
    
    // Hide weather section when returning to main content
    const weatherSection = document.getElementById('weather-display');
    if (weatherSection) {
        weatherSection.style.display = 'none';
    }
    
    // Show info section again when returning to main content
    const infoSection = document.getElementById('main-info-section');
    if (infoSection) {
        infoSection.style.display = 'block';
        infoSection.style.opacity = '0';
        
        requestAnimationFrame(() => {
            infoSection.style.transition = 'opacity 0.3s ease';
            infoSection.style.opacity = '1';
        });
    }
    
    // Show main content with animation
    if (mainContent) {
        mainContent.style.display = 'block';
        mainContent.style.opacity = '0';
        
        requestAnimationFrame(() => {
            mainContent.style.transition = 'opacity 0.3s ease';
            mainContent.style.opacity = '1';
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Optimized section display with animation
function showSection(sectionId) {
    const mainContent = document.querySelector('.main .container');
    const sections = ['about', 'data-sources', 'health-guidelines', 'faq', 'privacy', 'terms', 'cookies'];
    
    // Hide main content with animation
    if (mainContent) {
        mainContent.style.opacity = '0';
        setTimeout(() => mainContent.style.display = 'none', 300);
    }
    
    // Hide all sections
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'none';
        }
    });
    
    // Show target section with animation
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.style.opacity = '0';
        
        requestAnimationFrame(() => {
            targetSection.style.transition = 'opacity 0.3s ease';
            targetSection.style.opacity = '1';
        });
        
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Quick location selection
function selectQuickLocation(city) {
    // Try to find and select the city in the dropdown first
    const citySelect = document.getElementById('city-select');
    const options = Array.from(citySelect.options);
    const cityOption = options.find(option => option.value === city);
    
    if (cityOption) {
        citySelect.value = city;
        handleCityChange();
    } else {
        // If city not in dropdown, still call displayAirQuality directly
        displayAirQuality(city);
    }
}

// Action button handlers with API integration
async function refreshData() {
    const citySelect = document.getElementById('city-select');
    if (citySelect.value) {
        // Clear cache for fresh data
        airQualityAPI.cache.delete(citySelect.value.toLowerCase());
        await displayAirQuality(citySelect.value);
    }
}

async function shareData() {
    const citySelect = document.getElementById('city-select');
    if (citySelect.value) {
        const aqiValue = document.querySelector('.aqi-value .number')?.textContent || '--';
        const shareText = `Air quality in ${citySelect.value}: ${aqiValue} AQI`;
        
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Air Quality Data',
                    text: shareText,
                    url: window.location.href
                });
            } else {
                await navigator.clipboard.writeText(shareText);
                showNotification('Data copied to clipboard!');
            }
        } catch (error) {
            console.error('Error sharing data:', error);
        }
    }
}

async function downloadData() {
    const citySelect = document.getElementById('city-select');
    if (citySelect.value) {
        try {
            const data = await airQualityAPI.getAirQuality(citySelect.value);
            const csvContent = generateCSV(data, citySelect.value);
            downloadFile(csvContent, `air-quality-${citySelect.value.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.csv`, 'text/csv');
            showNotification('Data downloaded successfully!');
        } catch (error) {
            console.error('Error downloading data:', error);
            showNotification('Failed to download data', 'error');
        }
    }
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'var(--success)' : 'var(--danger)'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function generateCSV(data, city) {
    const headers = ['City', 'AQI', 'PM2.5', 'PM10', 'O3', 'NO2', 'SO2', 'CO', 'Timestamp'];
    const row = [city, data.aqi, data.pm25, data.pm10, data.o3, data.no2, data.so2, data.co, new Date().toISOString()];
    
    return [headers.join(','), row.join(',')].join('\n');
}

function downloadFile(content, filename, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

// Update current time with enhanced display
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Manila'
    });
    
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZone: 'Asia/Manila'
    });
    
    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-date').textContent = dateString;
}

// Global canvas context and reference
let forecastCanvas, forecastCtx;

// Enhanced chart with real data integration
function initializeChart() {
    forecastCanvas = document.getElementById('forecast-canvas');
    if (!forecastCanvas) return;
    
    forecastCtx = forecastCanvas.getContext('2d');
    
    // Create tooltip
    tooltip = document.createElement('div');
    tooltip.id = 'forecast-tooltip';
    tooltip.style.cssText = `
        position: absolute;
        background: var(--bg-primary);
        border: 1px solid var(--border-light);
        border-radius: 8px;
        padding: 0.75rem;
        box-shadow: var(--shadow-lg);
        pointer-events: none;
        display: none;
        z-index: 100;
    `;
    const forecastChart = document.getElementById('forecast-chart');
    forecastChart.appendChild(tooltip);
    
    // Add canvas event listeners
    forecastCanvas.addEventListener('mousemove', handleCanvasMouseMove);
    forecastCanvas.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
    
    window.addEventListener('resize', () => {
        resizeForecastCanvas();
        updateChart();
    });
    
    // Initial chart draw
    updateChart();
}

function resizeForecastCanvas() {
    if (!forecastCanvas || !forecastCtx) return;
    
    const rect = forecastCanvas.getBoundingClientRect();
    // Skip if size is still 0
    if (rect.width === 0 || rect.height === 0) {
        return;
    }
    // Reset scale first
    forecastCtx.setTransform(1, 0, 0, 1, 0, 0);
    forecastCanvas.width = rect.width * window.devicePixelRatio;
    forecastCanvas.height = rect.height * window.devicePixelRatio;
    forecastCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
    forecastCanvas.style.width = rect.width + 'px';
    forecastCanvas.style.height = rect.height + 'px';
}

// Improved forecast data generation with real data
function generateForecastData() {
    if (currentAirQualityData && currentAirQualityData.dailyForecast) {
        const days = currentAirQualityData.dailyForecast.map(day => day.date);
        const pollutants = {};
        
        Object.keys(pollutantConfig).forEach(key => {
            pollutants[key] = currentAirQualityData.dailyForecast.map(day => day[key]);
        });
        
        return { days, pollutants };
    }
    
    // Fallback to empty data if no real data
    return { days: [], pollutants: {} };
}

// Update legend
function updateForecastLegend() {
    const legendEl = document.getElementById('forecast-legend');
    if (!legendEl) return;
    
    legendEl.innerHTML = '';
    
    Object.entries(pollutantConfig).forEach(([key, config]) => {
        const item = document.createElement('div');
        item.className = 'legend-item' + (visiblePollutants.has(key) ? '' : ' hidden');
        item.dataset.pollutant = key;
        item.innerHTML = `
            <span class="legend-color" style="background-color: ${config.color};"></span>
            <span class="legend-label">${config.label}</span>
        `;
        item.addEventListener('click', () => togglePollutant(key));
        legendEl.appendChild(item);
    });
}

// Toggle pollutant visibility
function togglePollutant(key) {
    if (visiblePollutants.has(key)) {
        visiblePollutants.delete(key);
    } else {
        visiblePollutants.add(key);
    }
    updateForecastLegend();
    updateChart();
}

// Handle canvas mouse move
function handleCanvasMouseMove(e) {
    if (!currentAirQualityData || !currentAirQualityData.dailyForecast) return;
    
    const rect = forecastCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const padding = 60;
    const chartWidth = rect.width - padding * 2;
    const numDays = currentAirQualityData.dailyForecast.length;
    
    // Find which day is hovered
    const dayIndex = Math.round((x - padding) / (chartWidth / (numDays - 1)));
    if (dayIndex >= 0 && dayIndex < numDays) {
        const dayData = currentAirQualityData.dailyForecast[dayIndex];
        let tooltipContent = `<strong>${dayData.date}</strong><br>`;
        
        visiblePollutants.forEach(key => {
            const config = pollutantConfig[key];
            const value = dayData[key];
            tooltipContent += `<span style="color: ${config.color};"><strong>${config.label}:</strong> ${value ? value.toFixed(2) : '--'}</span><br>`;
        });
        
        tooltip.innerHTML = tooltipContent;
        tooltip.style.display = 'block';
        
        // Position tooltip
        let tooltipX = e.clientX - rect.left + 10;
        let tooltipY = e.clientY - rect.top + 10;
        
        // Keep tooltip inside canvas
        const tooltipRect = tooltip.getBoundingClientRect();
        if (tooltipX + tooltipRect.width > rect.width) {
            tooltipX = e.clientX - rect.left - tooltipRect.width - 10;
        }
        if (tooltipY + tooltipRect.height > rect.height) {
            tooltipY = e.clientY - rect.top - tooltipRect.height - 10;
        }
        
        tooltip.style.left = `${tooltipX}px`;
        tooltip.style.top = `${tooltipY}px`;
    } else {
        tooltip.style.display = 'none';
    }
}

function drawChart(ctx, data) {
    const width = ctx.canvas.width / window.devicePixelRatio;
    const height = ctx.canvas.height / window.devicePixelRatio;
    const padding = 60;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    if (data.days.length === 0 || Object.keys(data.pollutants).length === 0) {
        return;
    }
    
    // Set styles
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border-light');
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary');
    ctx.font = '12px Inter';
    
    // Find overall max value across visible pollutants
    let allValues = [];
    visiblePollutants.forEach(key => {
        if (data.pollutants[key]) {
            allValues = allValues.concat(data.pollutants[key].filter(v => v !== null && v !== undefined));
        }
    });
    const maxValue = Math.max(...allValues, 10);
    
    // Draw grid lines
    ctx.beginPath();
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
        
        // Y-axis labels
        const label = Math.round((maxValue - (maxValue / 5) * i) * 10) / 10;
        ctx.fillText(label.toString(), padding - 45, y + 4);
    }
    
    // Draw each visible pollutant
    visiblePollutants.forEach(key => {
        if (!data.pollutants[key]) return;
        const values = data.pollutants[key];
        const config = pollutantConfig[key];
        const points = values.map((value, index) => ({
            x: padding + (chartWidth / (data.days.length - 1)) * index,
            y: padding + chartHeight - (value / maxValue) * chartHeight
        }));
        
        // Draw line
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.forEach(point => ctx.lineTo(point.x, point.y));
        ctx.strokeStyle = config.color;
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Draw points
        points.forEach((point, index) => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = config.color;
            ctx.fill();
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    });
    
    // Draw X-axis labels
    data.days.forEach((day, index) => {
        const x = padding + (chartWidth / (data.days.length - 1)) * index;
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary');
        ctx.save();
        ctx.translate(x, height - padding + 15);
        ctx.textAlign = 'center';
        ctx.fillText(day, 0, 0);
        ctx.restore();
    });
}

// Initialize location selectors
function initializeLocationSelectors() {
    const regionSelect = document.getElementById('region-select');
    
    // Populate regions
    Object.keys(philippinesData).forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });
}

// Handle region change
function handleRegionChange() {
    const regionSelect = document.getElementById('region-select');
    const provinceSelect = document.getElementById('province-select');
    const citySelect = document.getElementById('city-select');
    
    // Clear province and city selects
    provinceSelect.innerHTML = '<option value="">Choose a province...</option>';
    citySelect.innerHTML = '<option value="">Choose a city/municipality...</option>';
    
    // Disable city select
    citySelect.disabled = true;
    
    if (regionSelect.value) {
        const region = philippinesData[regionSelect.value];
        
        // Enable and populate province select
        provinceSelect.disabled = false;
        
        region.provinces.forEach(province => {
            const option = document.createElement('option');
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
        });
        
        // If NCR, auto-populate cities
        if (regionSelect.value === 'National Capital Region (NCR)') {
            populateCities(region.cities);
        }
    } else {
        provinceSelect.disabled = true;
        citySelect.disabled = true;
    }
}

// Handle province change
function handleProvinceChange() {
    const regionSelect = document.getElementById('region-select');
    const provinceSelect = document.getElementById('province-select');
    const citySelect = document.getElementById('city-select');
    
    // Clear city select
    citySelect.innerHTML = '<option value="">Choose a city/municipality...</option>';
    
    if (provinceSelect.value && regionSelect.value) {
        const region = philippinesData[regionSelect.value];
        
        // Enable and populate city select
        citySelect.disabled = false;
        
        // Check if cities is an array (NCR) or object (other regions)
        if (Array.isArray(region.cities)) {
            // For NCR and similar regions with direct city array
            populateCities(region.cities);
        } else if (typeof region.cities === 'object') {
            // For regions with province-based city structure
            const provinceCities = region.cities[provinceSelect.value] || [];
            populateCities(provinceCities);
        }
    } else {
        citySelect.disabled = true;
    }
}

// Populate cities
function populateCities(cities) {
    const citySelect = document.getElementById('city-select');
    
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}

// Handle city change
function handleCityChange() {
    const citySelect = document.getElementById('city-select');
    
    if (citySelect.value) {
        displayAirQuality(citySelect.value);
    } else {
        hideAirQualityDisplay();
    }
}

// Display air quality data with live API integration
async function displayAirQuality(city) {
    try {
        // Show loading overlay
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.style.display = 'flex';
        }
        
        // Show loading state
        showLoadingState();
        
        // Fetch both air quality and weather data in parallel
        const [airQualityData, weatherData] = await Promise.all([
            airQualityAPI.getAirQuality(city),
            airQualityAPI.getWeather(city).catch(err => {
                console.warn('Weather data fetch failed:', err);
                return null;
            })
        ]);
        
        currentAirQualityData = airQualityData;
        const category = getAQICategory(airQualityData.aqi);
        const categoryInfo = aqiCategories[category];
        const recommendations = healthRecommendations[category];
        
        // Update body class for animated background
        document.body.className = `${themeManager.currentTheme}-theme aqi-${category}`;
        
        // Show air quality section
        const airQualitySection = document.getElementById('air-quality-display');
        airQualitySection.style.display = 'block';
        
        // Show weather section if data available
        if (weatherData) {
            const weatherSection = document.getElementById('weather-display');
            if (weatherSection) {
                weatherSection.style.display = 'block';
            }
            updateWeatherDisplay(weatherData);
        }
        
        // Hide info section when air quality is displayed
        const infoSection = document.getElementById('main-info-section');
        if (infoSection) {
            infoSection.style.display = 'none';
        }
        
        // Resize canvas now that it's visible
        resizeForecastCanvas();
        
        // Update location name
        document.getElementById('location-name').textContent = city;
        
        // Update AQI value and status
        updateAQIDisplay(airQualityData.aqi, categoryInfo, city);
        
        // Update gauge with SVG animation
        updateAQIGauge(airQualityData.aqi, categoryInfo.color);
        
        // Update gauge center value
        document.getElementById('gauge-value').textContent = airQualityData.aqi;
        
        // Update pollutant values with progress bars
        updatePollutantValues(airQualityData);
        
        // Update health recommendations
        updateHealthRecommendations(recommendations, category);
        
        // Update health indicator
        updateHealthIndicator(category);
        
        // Update last updated time
        updateLastUpdatedTime(airQualityData.timestamp);
        
        // Update forecast legend and chart
        updateForecastLegend();
        updateChart();
        
    } catch (error) {
        console.error('Error displaying air quality:', error);
        showErrorState(city, error);
    } finally {
        // Hide loading overlay
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.style.display = 'none';
        }
    }
}

function showLoadingState() {
    const aqiValue = document.querySelector('.aqi-value .number');
    const statusText = document.querySelector('.status-text');
    
    if (aqiValue) aqiValue.textContent = '...';
    if (statusText) statusText.textContent = 'Loading';
}

function showErrorState(city, error = null) {
    const aqiValue = document.querySelector('.aqi-value .number');
    const statusText = document.querySelector('.status-text');
    const statusDescription = document.querySelector('.status-description');
    
    if (aqiValue) aqiValue.textContent = '--';
    if (statusText) statusText.textContent = 'Error';
    
    if (error && error.message.includes('Unable to find coordinates')) {
        if (statusDescription) {
            statusDescription.textContent = `Location not found: "${city}". Please check the spelling or try a nearby city.`;
            statusDescription.style.color = 'var(--danger)';
        }
    } else {
        if (statusDescription) {
            statusDescription.textContent = `Failed to load data for ${city}`;
            statusDescription.style.color = 'var(--text-secondary)';
        }
    }
}

function updateAQIDisplay(aqi, categoryInfo, city) {
    const aqiValue = document.querySelector('.aqi-value .number');
    const statusText = document.querySelector('.status-text');
    const statusDescription = document.querySelector('.status-description');
    
    if (aqiValue) {
        aqiValue.textContent = aqi;
        aqiValue.style.color = categoryInfo.color;
    }
    
    if (statusText) {
        const category = getAQICategory(aqi);
        statusText.textContent = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
        statusText.style.color = categoryInfo.color;
    }
    
    if (statusDescription) {
        const category = getAQICategory(aqi);
        statusDescription.textContent = `Air quality in ${city} is ${category.replace('-', ' ')}`;
    }
}

function updateLastUpdatedTime(timestamp) {
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const updateTime = timestamp ? new Date(timestamp * 1000) : new Date();
        lastUpdated.innerHTML = `<i class="fas fa-sync-alt"></i> Last updated: ${updateTime.toLocaleTimeString('en-US', { timeZone: 'Asia/Manila' })}`;
    }
}

// Update AQI gauge with SVG
function updateAQIGauge(aqi, color) {
    const gaugeProgress = document.getElementById('gauge-progress');
    if (!gaugeProgress) return;
    
    const percentage = Math.min((aqi / 500) * 100, 100);
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percentage / 100) * circumference;
    
    gaugeProgress.style.stroke = color;
    gaugeProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    gaugeProgress.style.strokeDashoffset = offset;
}

// Update pollutant values with progress bars
function updatePollutantValues(data) {
    const pollutants = {
        pm25: { value: data.pm25, max: 150 },
        pm10: { value: data.pm10, max: 200 },
        o3: { value: data.o3, max: 180 },
        no2: { value: data.no2, max: 200 },
        so2: { value: data.so2, max: 150 },
        co: { value: parseFloat(data.co), max: 10 },
        co2: { value: parseFloat(data.co2), max: 1000 }
    };
    
    Object.keys(pollutants).forEach(pollutant => {
        const element = document.getElementById(`${pollutant}-value`);
        const fillElement = document.getElementById(`${pollutant}-fill`);
        
        if (element) {
            element.textContent = pollutants[pollutant].value;
        }
        
        if (fillElement) {
            const percentage = Math.min((pollutants[pollutant].value / pollutants[pollutant].max) * 100, 100);
            fillElement.style.width = `${percentage}%`;
            
            // Color based on percentage
            if (percentage < 50) {
                fillElement.style.background = 'var(--gradient-success)';
            } else if (percentage < 75) {
                fillElement.style.background = 'var(--gradient-warning)';
            } else {
                fillElement.style.background = 'var(--gradient-danger)';
            }
        }
    });
}

// Update health recommendations with enhanced styling
function updateHealthRecommendations(recommendations, category) {
    const recommendationsContainer = document.getElementById('health-recommendations');
    
    recommendationsContainer.innerHTML = `
        <div class="recommendation-card general">
            <div class="recommendation-icon">
                <i class="fas fa-users"></i>
            </div>
            <div class="recommendation-content">
                <h4>General Public</h4>
                <p>${recommendations.general}</p>
                <div class="recommendation-actions">
                    ${getActionTags(category, 'general')}
                </div>
            </div>
        </div>
        <div class="recommendation-card sensitive">
            <div class="recommendation-icon">
                <i class="fas fa-baby"></i>
            </div>
            <div class="recommendation-content">
                <h4>Sensitive Groups</h4>
                <p>${recommendations.sensitive}</p>
                <div class="recommendation-actions">
                    ${getActionTags(category, 'sensitive')}
                </div>
            </div>
        </div>
    `;
}

// Get action tags based on AQI category
function getActionTags(category, group) {
    const tags = {
        good: {
            general: '<span class="action-tag outdoor">Outdoor Activity</span>',
            sensitive: '<span class="action-tag outdoor">Outdoor Activity</span>'
        },
        moderate: {
            general: '<span class="action-tag outdoor">Outdoor Activity</span><span class="action-tag mask">Mask Optional</span>',
            sensitive: '<span class="action-tag mask">Mask Recommended</span><span class="action-tag indoor">Limit Outdoor</span>'
        },
        'unhealthy-sensitive': {
            general: '<span class="action-tag mask">Mask Recommended</span><span class="action-tag indoor">Reduce Outdoor</span>',
            sensitive: '<span class="action-tag indoor">Stay Indoors</span><span class="action-tag purifier">Use Air Purifier</span>'
        },
        unhealthy: {
            general: '<span class="action-tag indoor">Stay Indoors</span><span class="action-tag mask">Mask Required</span>',
            sensitive: '<span class="action-tag indoor">Stay Indoors</span><span class="action-tag purifier">Use Air Purifier</span>'
        },
        'very-unhealthy': {
            general: '<span class="action-tag indoor">Stay Indoors</span><span class="action-tag purifier">Use Air Purifier</span>',
            sensitive: '<span class="action-tag indoor">Stay Indoors</span><span class="action-tag purifier">Use Air Purifier</span>'
        },
        hazardous: {
            general: '<span class="action-tag indoor">Emergency Stay Indoors</span><span class="action-tag purifier">Use Air Purifier</span>',
            sensitive: '<span class="action-tag indoor">Emergency Stay Indoors</span><span class="action-tag purifier">Use Air Purifier</span>'
        }
    };
    
    return tags[category]?.[group] || '';
}

// Update health indicator
function updateHealthIndicator(category) {
    const indicatorDot = document.getElementById('health-indicator');
    const indicatorText = document.getElementById('health-indicator-text');
    
    if (indicatorDot && indicatorText) {
        const colors = {
            good: 'var(--aqi-good)',
            moderate: 'var(--aqi-moderate)',
            'unhealthy-sensitive': 'var(--aqi-unhealthy-sensitive)',
            unhealthy: 'var(--aqi-unhealthy)',
            'very-unhealthy': 'var(--aqi-very-unhealthy)',
            hazardous: 'var(--aqi-hazardous)'
        };
        
        indicatorDot.style.background = colors[category];
        indicatorText.textContent = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
    }
}

// Update chart with new data
function updateChart() {
    if (!forecastCtx) return;
    const forecastData = generateForecastData();
    drawChart(forecastCtx, forecastData);
}

// Hide air quality display
function hideAirQualityDisplay() {
    const airQualitySection = document.getElementById('air-quality-display');
    airQualitySection.style.display = 'none';
    
    // Hide weather section as well
    const weatherSection = document.getElementById('weather-display');
    if (weatherSection) {
        weatherSection.style.display = 'none';
    }
    
    // Show info section again when air quality display is hidden
    const infoSection = document.getElementById('main-info-section');
    if (infoSection) {
        infoSection.style.display = 'block';
    }
}

// Update weather display with data
function updateWeatherDisplay(weatherData) {
    if (!weatherData || !weatherData.current) return;
    
    const current = weatherData.current;
    
    // Update current weather
    document.getElementById('current-weather-icon').className = `fas ${current.weatherIcon}`;
    document.getElementById('current-temperature').textContent = Math.round(current.temperature);
    document.getElementById('weather-description').textContent = current.weatherDescription;
    document.getElementById('feels-like').textContent = Math.round(current.apparentTemperature);
    document.getElementById('humidity').textContent = `${Math.round(current.humidity)}%`;
    document.getElementById('wind-speed').textContent = `${Math.round(current.windSpeed)} km/h`;
    document.getElementById('wind-direction').textContent = `${Math.round(current.windDirection)}°`;
    
    // Update forecast cards
    updateWeatherForecast(weatherData.dailyForecast);
}

// Update weather forecast cards
function updateWeatherForecast(forecastData) {
    const forecastContainer = document.getElementById('weather-forecast-cards');
    if (!forecastContainer || !forecastData) return;
    
    forecastContainer.innerHTML = '';
    
    forecastData.forEach(day => {
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-date">${day.date}</div>
            <div class="forecast-icon">
                <i class="fas ${day.weatherIcon}"></i>
            </div>
            <div class="forecast-temps">
                <span class="forecast-temp-max">${Math.round(day.tempMax)}°</span>
                <span class="forecast-temp-min">${Math.round(day.tempMin)}°</span>
            </div>
            <div class="forecast-details">
                <span>${day.weatherDescription}</span>
                <span>💧 ${day.precipitation}mm</span>
                <span>💨 ${Math.round(day.windSpeed)}km/h</span>
            </div>
        `;
        forecastContainer.appendChild(card);
    });
}

// Optimized real-time updates with configurable interval
function startRealTimeUpdates(interval = 5 * 60 * 1000) { // Default 5 minutes
    let updateInterval;
    
    function scheduleUpdate() {
        clearInterval(updateInterval);
        updateInterval = setInterval(async () => {
            const citySelect = document.getElementById('city-select');
            if (citySelect.value && document.visibilityState === 'visible') {
                try {
                    await displayAirQuality(citySelect.value);
                } catch (error) {
                    console.error('Real-time update failed:', error);
                }
            }
        }, interval);
    }
    
    scheduleUpdate();
    
    // Pause updates when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(updateInterval);
        } else {
            scheduleUpdate();
        }
    });
    
    return () => clearInterval(updateInterval); // Return cleanup function
}

// Initialize real-time updates (commented out by default)
// const stopRealTimeUpdates = startRealTimeUpdates();
