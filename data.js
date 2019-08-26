const mainTextContent = {
    iotmw: {title: 'Welcome to Indians of the Midwest, Past and Present',
        text: [
            'When the American public is presented with media accounts, public policy, and school curriculum concerning Indian people, the reaction may be curiosity, confusion, and even skepticism. How can we obtain a better understanding of such information? This site addresses this question by highlighting recent research of scholars who have provided new insights about the cultures and histories of Indian peoples in the Midwest. Academic research can show how modern-day issues have roots in regional history and culture and provide necessary background for understanding contemporary issues.',
            'In the Midwest—defined here as Michigan, Wisconsin, Minnesota, Illinois, Indiana, and Ohio — there are 34 federally recognized tribes and others seeking recognition. Members of these communities generously contributed information about contemporary life. On “Indians of the Midwest,” you can explore seven important issues, learn how to do further research, and gain an introduction to the research methods that underlie scholars’ findings.'
        ]
    },
    mm: {title: 'Need a sub title here.',
        text: [
            'Although regions are often determined by boundaries, consider how networks have influenced the distinct history of the Midwest. Waterways and transportation routes connected the interior to broader trade networks and markets for centuries. More recently, the movement of people and resources shaped the evolution of agricultural, extractive, and tourist industries in the Midwest. Navigate the maps below to explore how networks define the region.',
            'Choose a section below and then use arrows to progress through each story map. Click pictures to view them with a magnifying glass; click a second time to open the full image in another tab.',
            'The Newberry Library is located on Indigenous homelands. The Potawatomi, Odawa, Sauk, Ojibwe, Illinois, Kickapoo, Miami, and others resided and traded along Lake Michigan\'s shoreline into the nineteenth century. The Newberry honors and respects Chicago\'s diverse American Indian community.',
            'Maybe we could add more here, too?'
        ]
    }
};
const logoText = {
    iotmw: ['<div class="iotmwLogo">\
            <div>\
                <span class="iotmwBigText" style="font-size: 3rem; line-height: 1.75rem;">indians </span>\
                <span class="iotmwSmallText" style="font-size: 1.5rem; line-height: 1rem;">of </span>\
            </div>\
            <div class="iotmwBottomText">\
                <span class="iotmwSmallText"  style="font-size: 1.5rem; line-height: 1rem;vertical-align: top;">the </span>\
                <span class="iotmwBigText" style="font-size: 3rem; line-height: 1.75rem; vertical-align: top;">midwest </span>\
            </div>\
        </div>',
        '<span class="iotmwLogo" style="font-size: 1rem;">Indians </span>\
        <span class="iotmwLogo"  style="font-size: 0.75rem;">of the</span>\
        <span class="iotmwLogo"  style="font-size: 1rem;"> Midwest</span>'
        ],   
    mm: ['<div class="mmLogo">\
            <h1 style="margin: 0 5rem; padding: 1rem 0; font-size: 4rem; z-index: 1; text-shadow: 1px 1px #444; font-family: \'Bitter\', serif; font-weight: 900;">Mapping the Midwest</h1>\
        </div>',
        '<div class="mmLogo" style="font-size: 1rem;font-family: \'Bitter\', serif;">Mapping the Midwest</div>'
    ]
}
const contentNav = {
    iotmw: [['https://publications.newberry.org/digital/indians-midwest/people-places-time','People, Places & Time'],
        ['https://publications.newberry.org/digital/indians-midwest/the-homeland-its-use','The Homeland & its Use'],
        ['https://publications.newberry.org/digital/indians-midwest/the-marketplace','The Marketplace'],
        ['https://publications.newberry.org/digital/indians-midwest/treaties','Treaties'],
        ['https://publications.newberry.org/digital/indians-midwest/identities','Identities'],
        ['https://publications.newberry.org/digital/indians-midwest/property','Property'],
        ['https://publications.newberry.org/digital/indians-midwest/indian-imagery','Indian Imagery'],
        ['https://publications.newberry.org/digital/indians-midwest/are-midwest-indians-typical','Are Midwest Indians Typical?']],
    // mm: [['draw','Draw the Midwest!','draw.png'],
    mm: [['waterways', 'Waterways','novacco_4f_65_01_o2.jpg'],
        ['agri', 'Agriculture','agri.jpg','55% 60%','125%'],
        ['ei', 'Extractive Industry','cbqgr_photo_602_o2.jpg',"20% 40%"],
        ['infra', 'Infrastructure','graff_1130_o2.jpg'],
        ['wpar66','WPA Route 66','rte66.jpg','40% 45%','300%'],
        ['dp','Dialect Patterns','dialect.jpg','15% 67%',"400%"]]
}
const iotmwQuestions = [
    {
        q: 'What is an Indian tribe or nation and why are there tribes today?',
        a: '"Tribes," in the past and today, are groups of Indians recognized by the United States as sovereign entities, that is, nations within a nation.',
        url: 'people-places-time/',
        article: 'People, Places & Time',
        img: 'mwImg1'
    },
    {
        q: 'What roles have Indian people played in the regional economy?',
        a: 'They were instrumental in the success of the fur trade, played a key role in regional trade in the 18th and 19th centuries, were essential to the tourist trade and commerce in the 20th century, and today own businesses that employ hundreds of people locally.',
        url: 'indians-the-marketplace',
        article: 'The Marketplace',
        img: 'mwImg2'
    },
    {
        q: 'What are treaty rights and why are they relevant today?',
        a: 'A treaty is a contract between two sovereign nations. Treaty rights are the foundation of U. S. law on Indian rights.',
        url: 'treaties',
        article: 'Treaties',
        img: 'mwImg3'
    },
    {
        q: 'What is Indian identity and how is it legally established?',
        a: 'Cultural identity follows from participation in an Indian community, but legal identity is established by meeting certain federal criteria or enrollment criteria of a particular tribe.',
        url: 'identities',
        article: 'Identities',
        img: 'mwImg4'
    },
    {
        q: 'Why did Indian people petition Congress to return objects in museums to tribes?',
        a: 'Indians insist that they have the right to control the disposition of the remains of their ancestors and religious and other objects that have been removed from their homeland.',
        url: 'property',
        article: 'Property',
        img: 'mwImg5'
    },
    {
        q: 'What imagery is associated with Indians and why does it matter?',
        a: 'Stereotypical "Indian" imagery has consistently been used in the United States and this imagery has been harmful to Native people in constious ways, including psychologically, economically, and politically.',
        url: 'indian-imagery',
        article: 'Indian Imagery',
        img: 'mwImg6'
    },
    {
        q: 'What relevance do fishing, ricing, and forestry have for Indian people today?',
        a: 'These activities provide subsistence and commercial opportunities, and also are an expression of cultural identity.',
        url: 'the-homeland-its-use',
        article: 'The Homeland & its Use',
        img: 'mwImg7'
    }
]