// Operator info collection

const cOperator = [
    ['chicago-l', 'Chicago "L"', 'https://www.transitchicago.com'],
    ['mbta-t', 'MBTA Subway (The "T")', 'https://www.mbta.com'],
    ['nyc-subway', 'New York City Subway', 'https://www.mta.info'],
    ['path', 'Port-Authority Trans-Hudson', 'https://www.panynj.gov/port-authority/en/index.html'],
    ['sir', 'Staten Island Railway', 'https://www.mta.info'],
    ['septa-metro', 'SEPTA Metro', 'https://www.septa.org'],
    ['patco', 'PATCO Speedline', 'https://www.ridepatco.org'],
    ['dc-metro', 'Washington Metro', 'https://www.wmata.com'],
    ['marta', 'MARTA Rail', 'https://www.itsmarta.com'],
    ['miami-metro', 'Miami Metrorail', 'https://www.miamidade.gov/global/home.page'],
    ['la-metro', 'Los Angeles Metro Rail', 'https://www.metro.net'],
    ['bart', 'Bay Area Rapid Transit', 'https://www.bart.gov']
];

// Location collection

const cLocation = [
    ['Chicago, Illinois', 'https://www.choosechicago.com'],
    ['Boston, Massachusetts', 'https://www.boston.gov/visiting-boston'],
    ['New York, New York', 'https://www.nyctourism.com'],
    ['New York, New York', 'https://www.nyctourism.com'],
    ['New York, New York', 'https://www.nyctourism.com'],
    ['Philadelphia, Pennsylvania', 'https://www.visitphilly.com'],
    ['Philadelphia, Pennsylvania', 'https://www.visitphilly.com'],
    ['Washington, District of Columbia', 'https://washington.org'],
    ['Atlanta, Georgia', 'https://discoveratlanta.com'],
    ['Miami, Florida', 'https://www.miamiandbeaches.com'],
    ['Los Angeles, California', 'https://www.discoverlosangeles.com'],
    ['San Francisco, California', 'https://www.sftravel.com']
];

// Writings

const writing_chicago_l = ['The Power of the Loop', 'Chicago\'s city center is famously named as "The Loop" after a transit infrastructure surrounding the blocks over the streets. This is another proof that the United States has never always been as car-centric as we know today - our public transit also had their days of prime. The Loop was a smart and efficient method before the through-running idea came along. It allows all trains to easily turn around and access more right-of-ways without building multiple termini or even dedicated turning loops, saving the city precious land area to develop more densely. When a train loops around the city center, it evenly distributes passengers to different sections of the area, avoiding over-crowding a small number of nodes.'];

const writing_mbta_t = ['Between a Train and a Trolley<br>and the Other Way Around', 'The North Station of Boston is infamous for being separated from the U.S.\'s continuous passenger rail network and creating a hassle for those who like to have a one-seat ride through Boston. The "T" station attached to the same complex, however, deserves more praise for adopting a user-friendly design: cross-platform transfer. The method is quite common around the world, but North Station\'s case is unique as it\'s a unidirectional one between the Orange Line\'s high-floor trains and the Green Lines\'s low-floor trolleys. A well-designed cross-platform transfer is a perfect balance for interchanging, eliminating the efforts for passengers to navigate through the station while transfering and the operators to coordinate interlining.'];

const writing_nyc_subway = ['Local or Express?', 'Cities expand over time, and so does their transit. Express services become very handy when transporting people to farther places more quickly. New York was the first city to fully integrate express and local services into a unified urban metro system, aligning with its urban plannings for Manhattan\'s long and narrow shape, as well as the city\'s eastward expansion into Long Island at the turn of the 20th century. Unlike the skip-stop service patterns found elsewhere, the Subway has dedicated express tracks for trains to rush through local stations. A typical local station in New York consists of two side platforms serving the local tracks on the outside, while an express station usually has two island platforms, each serving all trains in the same direction.'];

const writing_path = ['The Forgotten Railroad of New York and Its Crazy Policy', 'Among all rail transit in greater New York, PATH has always been the one with the least public exposure. Many New Yorkers don\'t even know about its existence unless they are traveling across the Hudson. The Port Authority of New York and New Jersey, PATH\'s owner and operator, banishes non-commercial photography across the entire system. Despite not being strictly enforced at all times, this rule creates an obstacle for the public to familiarize themselves with PATH, if not violating the First Amendment altogether. These things also take place in other urban rail infrastructures for "national security." Since when has the war against terrorism turned into the war against artistic creation or even the freedom of the press?'];

const writing_sir = ['I Am Not a "Subway", So Stop Calling Me by That Name', 'The Staten Island Railway has a long-lasting tendency to be misrecognized as a part of the New York City Subway despite its distinctive branding. Indeed, the two systems share countless similarities. They use the same rolling stock, accept the same payment methods, and serve the boroughs of the same city. But, they are very different, too. The SIR does not require a fare if passengers are not traveling to or from the two northernmost stations. It is also completely separated compared to the continuous subway system. Most importantly, the SIR runs its services with a notorious 30-minute headway during the off-peak hours, while the subway can max out with a train coming every 90 seconds at peak on the Lexington Avenue Line.'];

const writing_septa_metro = ['Trains and Trolleys,<br>One Tunnel for All', 'When thinking of a quad-track underground tunnel for rapid transit in Philly, many would picture the section of the Broad Street Subway in North Philadelphia, where express trains blast through local stations at speed. To the west of the City Hall, the Market Street Tunnel achieves the same goal of level separation with a different approach. Despite all four tracks using the same 1,581mm Pennsylvanian trolley gauge, the local tracks are used by the Subway-Surface Trolleys, powered by overhead catenaries, while the third-rail-powered L goes express between City Hall and 30th Street. Together, the combination allows both faster trips in the urban core and more variety for destinations towards the southwest.'];

const writing_patco = ['The Force of Automation', 'PATCO, short for the Port Authority Transit Corporation, is a subsidiary of the Delaware River Port Authority (DRPA). Opened in 1969, the PATCO Speedline inherited the Ben Franklin Bridge right-of-way from the Bridge Line Trolleys and became one of the world\'s earliest fully automated rapid transit systems, following London\'s Victoria Line. PATCO was one of the first U.S. systems to integrate rapid transit with commuter rail operations, serving as a model for future projects. Its automation allowed it to operate with an efficiency and flexibility that most U.S. transit agencies could only aspire to at the time. Within a year of opening, PATCO introduced 24-hour service - a feature still rare among any transit systems today.'];

const writing_dc_metro = ['Brutalism Deep Underground', 'The existence of Metro proves one thing: the United States is more than capable of building and maintaining satisfying rapid transit systems if there is enough funding and public investment. Being a truly world-class system, Metro is famous for its deep underground stations and the iconic "waffle" structure. Wheaton on the Red Line holds the title of the deepest station in the entire system at approximately 46 meters below ground. It is also the home to the longest single escalator in the Western Hemisphere, stretching 70 meters with a ride time of about 3 minutes. Its "waffle" structure, designed by Harry Weese and featuring coffered concrete walls, was influenced by brutalist architecture and helped make the Metro\'s underground stations some of the most visually distinctive ones in the world.'];

const writing_marta = ['The Metro to Become the Best Regional Rail in the U.S.', 'Atlanta has been one of the most severely affected victims of car-centrism in the past few decades. Those 10+ lane highways not only tore the city apart but led this powerhouse of the south to have one of the most horrifying traffic conditions in the country. Unsurprisingly, the sprawling nature of Atlanta caused the local authority to consider building a commuter rail system while completely forgetting that MARTA was originally designed to handle such urban layouts. The real question here should be: why force yourself to get better at building a slow and infrequent traditional commuter rail when your city already has such a distinctive mode of transit that is capable of balancing speed, frequency, and capacity?'];

const writing_miami_metro = ['Transfer or Interline?', 'Like many metro systems in the U.S., Miami Metro advertises its services as if they were separate lines. Metrorail\'s system is a singular line with a one-stop branch. Usually, all trains interline to the south of Earlington Heights before the Orange Line branches off. On weekends, the Orange Line is replaced with a shuttle between the airport and the main line. The weekday strategy is common in the U.S. but not so much anywhere else, as most operators eventually realize how many disruptions can the interlining issues cause. Despite that, in this ever-ongoing debate of transfer vs. interline, the latter will always have some dedicated defenders for the benefits of more destinations with a single-seat ride.'];

const writing_la_metro = ['The Twin Subway Lines<br>in a Family of Light Rails', 'When it comes to downgrading in mass transit, no place would have more authority than Los Angeles. At one point in history, L.A.\'s Pacific Electric Railway was the largest electrified inter-urban railway system in the world. Today, Metrolink, the commuter rail system of L.A., is entirely diesel-powered, while this second largest city of the U.S. continues to struggle against the deeply rooted car-centrism from past urban planning. Similarly issues also affect the local rapid transit network. The A Line may proudly hold the title of the longest light rail line in the world, but the sheer scale of L.A. means so much more than justifying the need for additional fully-grade-separated heavy-rail lines like the B and the D.'];

const writing_bart = ['What Am I?<br>Maybe It Doesn\'t Matter...', 'There has been a long-standing argument about how to categorize the BART. Some say it\'s a rapid transit for its frequency of services, while others believe it\'s a commuter rail for the long distance between adjacent stations. Instead of drawing fixed boundaries for different modes of transit, we really should think of them as collections of spectrums and methods. Transit systems are designed similarly for the commonalities of cities but not the other way around - all details should vary and adapt to the environment. BART\'s planners truly did something visionary by respecting the Bay Area\'s urban layout and initiating this trend of "high-speed metro," which is becoming increasingly popular these days around the globe.'];

// Writings collection

const cWritings = [writing_chicago_l, writing_mbta_t, writing_nyc_subway, writing_path, writing_sir, writing_septa_metro, writing_patco, writing_dc_metro, writing_marta, writing_miami_metro, writing_la_metro, writing_bart];
