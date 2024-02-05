const mockData = [
    {
      "title": "Republicans Pass Tax Reform Bill",
      "description": "In a historic move, Republicans in Congress have passed a tax reform bill that promises significant cuts for businesses and middle-class families.",
      "category": "republic"
    },
    {
      "title": "Democrats Propose Healthcare Overhaul",
      "description": "Leading Democrats unveil a comprehensive healthcare reform plan aimed at providing affordable healthcare for all Americans.",
      "category": "democrat"
    },
    {
      "title": "Neutral Fact-Checking of Recent Political Claims",
      "description": "An unbiased analysis of recent political statements from both sides of the aisle reveals the truth behind the claims.",
      "category": "neutral"
    },
    {
      "title": "Republicans Celebrate Supreme Court Nomination",
      "description": "Republicans express their delight as a new Supreme Court nominee aligned with their values is announced.",
      "category": "republic"
    },
    {
      "title": "Democrats Call for Climate Change Action",
      "description": "Prominent Democrats rally for immediate action to combat climate change and reduce carbon emissions.",
      "category": "democrat"
    },
    {
      "title": "Neutral Analysis of Economic Trends",
      "description": "An in-depth analysis of the economy, examining the impact of recent policies without political bias.",
      "category": "neutral"
    },
    {
      "title": "Republican Senator Defends Immigration Policy",
      "description": "A Republican senator explains and defends the party's stance on immigration reform.",
      "category": "republic"
    },
    {
      "title": "Democrats Push for Gun Control Legislation",
      "description": "Democratic leaders call for stricter gun control measures in the wake of recent mass shootings.",
      "category": "democrat"
    },
    {
      "title": "Neutral Examination of Education Reforms",
      "description": "An objective look at recent education reform proposals from both parties to assess their potential impact.",
      "category": "neutral"
    },
    {
      "title": "Republican Governor Announces Infrastructure Plan",
      "description": "A Republican governor reveals a comprehensive infrastructure plan to boost job growth and development.",
      "category": "republic"
    },
    {
      "title": "Democrats Seek Criminal Justice Reform",
      "description": "Leading Democrats advocate for criminal justice reform to address issues of mass incarceration and racial disparities.",
      "category": "democrat"
    },
    {
      "title": "Neutral Assessment of Foreign Policy Decisions",
      "description": "An impartial analysis of recent foreign policy decisions and their potential consequences.",
      "category": "neutral"
    },
    {
      "title": "Republicans Rally for Second Amendment Rights",
      "description": "Republicans gather to defend and preserve Second Amendment rights in the face of proposed gun control legislation.",
      "category": "republic"
    },
    {
      "title": "Democrats Propose Green Energy Initiative",
      "description": "Prominent Democrats unveil a green energy initiative to combat climate change and create jobs in the renewable energy sector.",
      "category": "democrat"
    },
    {
      "title": "Neutral Analysis of Healthcare Costs",
      "description": "An unbiased examination of the factors contributing to rising healthcare costs in the United States.",
      "category": "neutral"
    },
    {
      "title": "Republican Congressman Discusses Immigration Reform",
      "description": "A Republican congressman shares insights into the party's approach to immigration reform and border security.",
      "category": "republic"
    },
    {
      "title": "Democrats Advocate for LGBTQ+ Rights",
      "description": "Leading Democrats push for legislative measures to protect and advance LGBTQ+ rights.",
      "category": "democrat"
    },
    {
      "title": "Neutral Evaluation of Tax Policy",
      "description": "An objective assessment of recent tax policies and their impact on individuals and businesses.",
      "category": "neutral"
    },
    {
      "title": "Republicans Respond to Economic Downturn",
      "description": "Republican leaders outline their plans to address economic challenges and stimulate job growth.",
      "category": "republic"
    },
    {
      "title": "Democrats Call for Police Reform",
      "description": "Prominent Democrats advocate for police reform to address issues of brutality and accountability.",
      "category": "democrat"
    },
    {
      "title": "Neutral Analysis of National Security Policies",
      "description": "An impartial analysis of national security policies and their effectiveness in safeguarding the country.",
      "category": "neutral"
    },
    {
      "title": "Republican Senator Urges Healthcare Repeal",
      "description": "A Republican senator makes a passionate case for the repeal of a major healthcare policy passed by Democrats.",
      "category": "republic"
    },
    {
      "title": "Democrats Push for Affordable Housing",
      "description": "Leading Democrats unveil a plan to address the affordable housing crisis and provide stable housing for all.",
      "category": "democrat"
    },
    {
      "title": "Neutral Evaluation of Environmental Regulations",
      "description": "An objective assessment of environmental regulations and their impact on industry and conservation.",
      "category": "neutral"
    },
    {
      "title": "Republican Governor Tackles Opioid Crisis",
      "description": "A Republican governor announces a comprehensive strategy to combat the opioid epidemic and provide addiction treatment.",
      "category": "republic"
    },
    {
      "title": "Democrats Advocate for Immigration Reform",
      "description": "Prominent Democrats push for immigration reform to provide a path to citizenship for undocumented immigrants.",
      "category": "democrat"
    },
    {
      "title": "Neutral Analysis of Trade Policies",
      "description": "An unbiased examination of trade policies and their impact on domestic and international trade.",
      "category": "neutral"
    },
    {
      "title": "Republicans Call for Education Choice",
      "description": "Republicans advocate for school choice policies to empower parents in their children's education.",
      "category": "republic"
    },
    {
      "title": "Democrats Propose Criminal Justice Reforms",
      "description": "Leading Democrats unveil a comprehensive plan for criminal justice reforms to address systemic issues.",
      "category": "democrat"
    },
    {
      "title": "Neutral Assessment of Technology Regulations",
      "description": "An objective assessment of recent technology regulations and their implications for innovation and privacy.",
      "category": "neutral"
    },
    {
      "title": "Republican Senator Addresses Healthcare Concerns",
      "description": "A Republican senator discusses the party's approach to addressing healthcare concerns and improving access.",
      "category": "republic"
    },
    {
      "title": "Democrats Advocate for Racial Equity",
      "description": "Prominent Democrats push for policies aimed at achieving racial equity and addressing systemic racism.",
      "category": "democrat"
    },
    {
      "title": "Neutral Evaluation of Economic Stimulus Packages",
      "description": "An impartial analysis of economic stimulus packages and their impact on economic recovery.",
      "category": "neutral"
    },
    {
      "title": "Republicans Call for Border Security Measures",
      "description": "Republicans emphasize the importance of border security measures to protect national sovereignty.",
      "category": "republic"
    },
    {
      "title": "Democrats Promote Renewable Energy Investment",
      "description": "Leading Democrats propose incentives and investments in renewable energy to combat climate change.",
      "category": "democrat"
    },
    {
      "title": "Neutral Assessment of Healthcare Access",
      "description": "An objective examination of healthcare access and disparities in healthcare coverage.",
      "category": "neutral"
    },
    {
      "title": "Republican Congressman Discusses Tax Reform",
      "description": "A Republican congressman outlines the party's plans for tax reform and simplification.",
      "category": "republic"
    },
    {
      "title": "Democrats Advocate for Women's Rights",
      "description": "Prominent Democrats push for policies that promote women's rights and gender equality.",
      "category": "democrat"
    },
    {
      "title": "Neutral Analysis of Foreign Aid Policies",
      "description": "An unbiased analysis of foreign aid policies and their effectiveness in achieving diplomatic goals.",
      "category": "neutral"
    },
    {
      "title": "Republicans Push for Healthcare Deregulation",
      "description": "Republicans call for the deregulation of healthcare to increase competition and reduce costs.",
      "category": "republic"
    },
    {
      "title": "Democrats Address Climate Crisis",
      "description": "Leading Democrats propose a comprehensive plan to combat the climate crisis and reduce greenhouse gas emissions.",
      "category": "democrat"
    },
    {
      "title": "Neutral Assessment of Infrastructure Investment",
      "description": "An objective analysis of infrastructure investment proposals and their potential benefits for the economy.",
      "category": "neutral"
    }
  ]
  
  export default mockData;
