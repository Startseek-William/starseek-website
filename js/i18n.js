/* ============================================================
   i18n Dictionary - Chinese / English Translations
   中英文翻译字典 - 星索导航科技
   ============================================================ */

const I18N = {
  zh: {
    // --- Site Meta ---
    siteName: '星索导航科技',
    siteNameFull: '深圳市星索导航科技有限公司',
    siteTagline: '精准导航 · 守护低空',
    siteTaglineEn: 'Precision Navigation · Low-Altitude Protection',

    // --- Navigation ---
    navHome: '首页',
    navProducts: '产品中心',
    navSolutions: '解决方案',
    navAbout: '关于我们',
    navContact: '联系我们',

    // --- Footer ---
    footerDesc: '深圳市星索导航科技有限公司，专注于无人机抗干扰天线、无人机侦测反制及低空防护产品的研发与制造，致力于为全球客户提供可靠的低空安全解决方案。',
    footerProducts: '产品导航',
    footerSolutions: '解决方案',
    footerAbout: '关于我们',
    footerRights: '© 2025 深圳市星索导航科技有限公司 版权所有',

    // --- Home Hero ---
    heroBadge: '专业无人机低空防护',
    heroTitle: '精准抗干扰<br>守护低空安全',
    heroSubtitle: '专注无人机抗干扰天线与侦测反制系统研发，为关键基础设施和敏感区域提供全天候低空防护解决方案',
    heroBtnProducts: '查看产品',
    heroBtnContact: '联系我们',

    // --- Home: Core Business ---
    coreLabel: '核心业务',
    coreTitle: '三大核心业务',
    coreDesc: '覆盖无人机抗干扰、侦测反制、低空防护全链路，提供一站式解决方案',
    core1Title: '无人机抗干扰天线',
    core1Desc: '自主研发多频段 GNSS 抗干扰天线，采用自适应调零技术，有效对抗多种干扰源，保障无人机导航定位安全。',
    core2Title: '无人机侦测反制',
    core2Desc: '集成雷达探测、无线电侦测、光电跟踪等多维侦测手段，配合智能反制设备，实现快速发现与精准处置。',
    core3Title: '低空防护系统',
    core3Desc: '提供固定式与移动式低空防护整体方案，覆盖机场、军事基地、关键基础设施等多场景应用需求。',

    // --- Home: Advantages ---
    advLabel: '技术优势',
    advTitle: '为什么选择我们',
    adv1Title: '自主研发',
    adv1Desc: '核心算法与硬件自主研发，拥有多项专利技术',
    adv2Title: '军工品质',
    adv2Desc: '严格遵循军工标准，产品经过严苛环境测试',
    adv3Title: '快速交付',
    adv3Desc: '标准化生产流程，支持快速定制与批量交付',
    adv4Title: '全天候服务',
    adv4Desc: '7×24小时技术支持，全球客户服务网络',

    // --- Home: Scenes ---
    sceneLabel: '应用场景',
    sceneTitle: '多场景全面覆盖',
    scene1: '民用机场',
    scene2: '军事基地',
    scene3: '关键设施',
    scene4: '大型活动',

    // --- Home: Stats ---
    stat1Value: '50+',
    stat1Label: '专利技术',
    stat2Value: '200+',
    stat2Label: '服务客户',
    stat3Value: '15+',
    stat3Label: '行业经验(年)',
    stat4Value: '30+',
    stat4Label: '覆盖国家',

    // --- Home: CTA ---
    ctaTitle: '为您的低空安全保驾护航',
    ctaDesc: '无论是无人机抗干扰天线，还是完整的低空防护方案，我们都能为您量身定制',
    ctaBtn: '立即咨询',

    // --- Products Page ---
    productsLabel: '产品中心',
    productsTitle: '专业产品 · 卓越性能',
    productsDesc: '涵盖无人机抗干扰天线、侦测反制设备、低空防护系统三大产品线',

    catAll: '全部产品',
    catAntenna: 'GNSS抗干扰单元',
    catDetection: '侦测反制',
    catProtection: '低空防护',

    // Product: Antenna Category
    prodA1Name: 'GNSS 抗干扰天线 SS-GA01',
    prodA1Desc: '支持 GPS/GLONASS/北斗多星座，自适应调零，抗干扰能力达 80dB',
    prodA1Freq: '频率范围',
    prodA1FreqVal: '1.1-1.6 GHz',
    prodA1Gain: '抗干扰',
    prodA1GainVal: '≥80 dB',
    prodA1Channels: '通道数',
    prodA1ChannelsVal: '4/8 通道',

    prodA2Name: '多频段抗干扰阵列 SS-MA02',
    prodA2Desc: '多阵元自适应阵列天线，同时抑制多个宽带干扰源',
    prodA2Freq: '频率范围',
    prodA2FreqVal: '0.8-2.5 GHz',
    prodA2Gain: '阵元数',
    prodA2GainVal: '8-16 阵元',
    prodA2Channels: '抑制比',
    prodA2ChannelsVal: '≥90 dB',

    prodA3Name: '机载微型抗干扰天线 SS-AA03',
    prodA3Desc: '轻量化设计，专为小型无人机平台优化，功耗低可靠性高',
    prodA3Freq: '频率范围',
    prodA3FreqVal: '1.1-1.6 GHz',
    prodA3Gain: '重量',
    prodA3GainVal: '≤120g',
    prodA3Channels: '功耗',
    prodA3ChannelsVal: '≤2W',

    // Product: Detection Category
    prodD1Name: '无人机探测雷达 SS-DR10',
    prodD1Desc: 'X波段相控阵雷达，可探测8km内微型无人机，支持多目标跟踪',
    prodD1Freq: '探测距离',
    prodD1FreqVal: '≥8 km',
    prodD1Gain: '频段',
    prodD1GainVal: 'X波段',
    prodD1Channels: '跟踪目标',
    prodD1ChannelsVal: '≥100个',

    prodD2Name: '无线电侦测设备 SS-RD20',
    prodD2Desc: '全频段无线电侦测，实时识别无人机图传与遥控信号',
    prodD2Freq: '侦测频段',
    prodD2FreqVal: '20MHz-6GHz',
    prodD2Gain: '识别距离',
    prodD2GainVal: '≥5 km',
    prodD2Channels: '响应时间',
    prodD2ChannelsVal: '≤1s',

    prodD3Name: '光电跟踪反制系统 SS-EO30',
    prodD3Desc: '可见光+红外双光跟踪，集成定向干扰，全天候自动反制',
    prodD3Freq: '跟踪距离',
    prodD3FreqVal: '≥3 km',
    prodD3Gain: '红外分辨率',
    prodD3GainVal: '640×512',
    prodD3Channels: '干扰距离',
    prodD3ChannelsVal: '≥2 km',

    // Product: Protection Category
    prodP1Name: '固定式低空防护系统 SS-FP100',
    prodP1Desc: '模块化部署，雷达+侦测+反制一体化，支持多站点组网协同',
    prodP1Freq: '防护半径',
    prodP1FreqVal: '≥5 km',
    prodP1Gain: '组网能力',
    prodP1GainVal: '支持16站点',
    prodP1Channels: '工作模式',
    prodP1ChannelsVal: '7×24自动',

    prodP2Name: '移动式反无人机平台 SS-MP200',
    prodP2Desc: '车载/便携式设计，快速部署，适用于临时安保和机动巡逻',
    prodP2Freq: '部署时间',
    prodP2FreqVal: '≤10 min',
    prodP2Gain: '防护半径',
    prodP2GainVal: '≥3 km',
    prodP2Channels: '续航',
    prodP2ChannelsVal: '≥8 h',

    // --- Solutions Page ---
    solLabel: '解决方案',
    solTitle: '行业解决方案',
    solDesc: '针对不同行业和应用场景，提供定制化的无人机低空防护整体方案',

    sol1Title: '机场低空安全保障',
    sol1Desc: '针对机场净空区无人机入侵风险，部署多层级侦测反制体系，实现从发现、跟踪到处置的全流程闭环管理。雷达+无线电+光电复合探测，确保零漏报、低误报。',

    sol2Title: '关键基础设施防护',
    sol2Desc: '为电力枢纽、石油石化、通信基站等关键基础设施提供全天候无人机防护。抗干扰天线保障自身无人机巡检作业安全，反制设备防止非法无人机入侵破坏。',

    sol3Title: '军事/国防要地防护',
    sol3Desc: '面向军事基地、边境防线、指挥中心等高安全等级场景，提供军用级抗干扰天线和察打一体反无人机系统，支持与现有防空体系集成。',

    sol4Title: '大型活动/赛事安保',
    sol4Desc: '针对体育赛事、政治集会、大型演出等临时安保需求，提供移动式快速部署方案。车载反无人机平台10分钟内完成部署，活动结束后快速撤收。',

    sol5Title: '监狱/敏感区域防护',
    sol5Desc: '防止无人机向监狱等敏感区域投送违禁品，或进行非法侦查拍摄。部署固定式低空防护系统，实现对"低慢小"目标的全天候自动预警与处置。',

    // --- About Page ---
    aboutLabel: '关于我们',
    aboutTitle: '星索导航 · 守护低空安全',
    aboutDesc: '深圳市星索导航科技有限公司成立于2010年，是一家专注于无人机导航抗干扰与低空安全防护的高新技术企业',

    aboutIntroTitle: '公司简介',
    aboutIntroP1: '深圳市星索导航科技有限公司（Shenzhen Starseek Navigation Technology Co., Ltd.）成立于2010年，总部位于深圳市南山区科技园。公司致力于无人机抗干扰天线、无人机侦测反制设备及低空防护系统的研发、生产与销售。',
    aboutIntroP2: '经过十余年发展，公司已建立完整的研发体系和生产能力，产品广泛应用于民用航空、公共安全、国防军事、能源电力等领域。公司拥有多项核心专利技术，先后获得国家高新技术企业、军工质量管理体系等资质认证。',

    aboutVision: '愿景与使命',
    aboutVisionTitle: '成为全球领先的低空安全解决方案提供商',
    aboutVisionDesc: '以技术创新为核心驱动力，持续深耕无人机导航抗干扰与低空安全领域，为全球客户提供可靠、高效、智能的产品与服务，守护每一片天空的安全。',

    aboutTimelineTitle: '发展历程',
    tl2010Title: '公司成立',
    tl2010Desc: '星索导航在深圳成立，专注卫星导航抗干扰技术研发',
    tl2014Title: '首款产品发布',
    tl2014Desc: '推出首款 GNSS 抗干扰天线，获得市场认可',
    tl2017Title: '拓展低空安全',
    tl2017Desc: '进军无人机侦测反制领域，发布首款探测雷达',
    tl2020Title: '获高新企业认证',
    tl2020Desc: '通过国家高新技术企业认定，研发团队突破50人',
    tl2023Title: '低空防护体系成型',
    tl2023Desc: '完成"侦测-识别-反制"全链路产品布局，服务全球200+客户',
    tl2025Title: '持续创新',
    tl2025Desc: '推出新一代AI智能低空防护平台，拓展国际市场',

    aboutCertTitle: '资质荣誉',
    cert1: '国家高新技术企业',
    cert2: 'ISO 9001 质量管理体系',
    cert3: 'GJB 9001C 军工质量体系',
    cert4: '多项国家发明专利',
    cert5: 'CE / FCC 国际认证',

    aboutRndTitle: '研发实力',
    aboutRndDesc: '公司拥有超过50人的研发团队，核心成员来自航天、电子、通信等领域，具有丰富的射频微波、信号处理、人工智能技术积累。公司设有天线设计与测试实验室、系统集成测试中心，配备先进的矢量网络分析仪、微波暗室、环境试验箱等研发测试设备。',

    // --- Contact Page ---
    contactLabel: '联系我们',
    contactTitle: '期待与您合作',
    contactDesc: '如有产品咨询、技术需求或合作意向，欢迎随时与我们联系',

    contactAddrTitle: '公司地址',
    contactAddr: '深圳市龙华区大浪街道陶元鹊山忠信路9号康瑞智慧谷1栋7B',
    contactPhoneTitle: '联系人',
    contactPhone: '18123769551',
    contactEmailTitle: '电子邮箱',
    contactEmail: 'william.liu2025@outlook.com',
    contactBizTitle: '联系人',
    contactBizEmail: 'william.liu2025@outlook.com',

    formName: '姓名',
    formNamePlaceholder: '请输入您的姓名',
    formCompany: '公司',
    formCompanyPlaceholder: '请输入您的公司名称',
    formEmail: '邮箱',
    formEmailPlaceholder: '请输入您的电子邮箱',
    formPhone: '电话',
    formPhonePlaceholder: '请输入您的联系电话',
    formSubject: '主题',
    formSubjectPlaceholder: '请选择或输入咨询主题',
    formMessage: '留言',
    formMessagePlaceholder: '请描述您的需求或问题，我们将尽快回复',
    formSubmit: '提交留言',
    formSuccess: '感谢您的留言，我们将尽快与您联系！',

    // --- Common ---
    btnLearnMore: '了解更多',
    btnViewAll: '查看全部',
    btnSend: '发送',
    loading: '加载中...',
    noData: '暂无数据',
  },

  // =============================================================
  // ENGLISH
  // =============================================================
  en: {
    // --- Site Meta ---
    siteName: 'Starseek Navigation',
    siteNameFull: 'Shenzhen Starseek Navigation Technology Co., Ltd.',
    siteTagline: 'Precision Navigation · Low-Altitude Protection',
    siteTaglineEn: 'Precision Navigation · Low-Altitude Protection',

    // --- Navigation ---
    navHome: 'Home',
    navProducts: 'Products',
    navSolutions: 'Solutions',
    navAbout: 'About',
    navContact: 'Contact',

    // --- Footer ---
    footerDesc: 'Shenzhen Starseek Navigation Technology Co., Ltd. specializes in R&D and manufacturing of drone anti-jamming antennas, drone detection & countermeasure systems, and low-altitude protection solutions, committed to providing reliable low-altitude security for global clients.',
    footerProducts: 'Products',
    footerSolutions: 'Solutions',
    footerAbout: 'About Us',
    footerRights: '© 2025 Shenzhen Starseek Navigation Technology Co., Ltd. All Rights Reserved',

    // --- Home Hero ---
    heroBadge: 'Professional Drone Low-Altitude Protection',
    heroTitle: 'Precision Anti-Jamming<br>Low-Altitude Security',
    heroSubtitle: 'Specializing in drone anti-jamming antennas and detection & countermeasure systems, providing 24/7 low-altitude protection for critical infrastructure and sensitive areas',
    heroBtnProducts: 'View Products',
    heroBtnContact: 'Contact Us',

    // --- Home: Core Business ---
    coreLabel: 'CORE BUSINESS',
    coreTitle: 'Three Core Businesses',
    coreDesc: 'Full-chain coverage of drone anti-jamming, detection & countermeasure, and low-altitude protection — one-stop solutions',
    core1Title: 'Drone Anti-Jamming Antennas',
    core1Desc: 'Independently developed multi-band GNSS anti-jamming antennas with adaptive nulling technology, effectively countering multiple jamming sources to ensure drone navigation and positioning safety.',
    core2Title: 'Drone Detection & Countermeasure',
    core2Desc: 'Integrating radar detection, radio surveillance, and electro-optical tracking with intelligent countermeasure devices for rapid discovery and precise neutralization.',
    core3Title: 'Low-Altitude Protection Systems',
    core3Desc: 'Fixed and mobile low-altitude protection solutions covering airports, military bases, critical infrastructure, and various application scenarios.',

    // --- Home: Advantages ---
    advLabel: 'ADVANTAGES',
    advTitle: 'Why Choose Us',
    adv1Title: 'Independent R&D',
    adv1Desc: 'Core algorithms and hardware developed in-house with multiple patented technologies',
    adv2Title: 'Military-Grade Quality',
    adv2Desc: 'Strict military standards, products tested in harsh environments',
    adv3Title: 'Fast Delivery',
    adv3Desc: 'Standardized production, rapid customization and batch delivery',
    adv4Title: '24/7 Support',
    adv4Desc: 'Round-the-clock technical support with global service network',

    // --- Home: Scenes ---
    sceneLabel: 'APPLICATION SCENARIOS',
    sceneTitle: 'Comprehensive Multi-Scenario Coverage',
    scene1: 'Civil Airports',
    scene2: 'Military Bases',
    scene3: 'Critical Infrastructure',
    scene4: 'Major Events',

    // --- Home: Stats ---
    stat1Value: '50+',
    stat1Label: 'Patents',
    stat2Value: '200+',
    stat2Label: 'Clients Served',
    stat3Value: '15+',
    stat3Label: 'Years Experience',
    stat4Value: '30+',
    stat4Label: 'Countries Covered',

    // --- Home: CTA ---
    ctaTitle: 'Safeguard Your Low-Altitude Security',
    ctaDesc: 'From anti-jamming antennas to complete low-altitude protection solutions — tailored to your needs',
    ctaBtn: 'Contact Us Now',

    // --- Products Page ---
    productsLabel: 'PRODUCTS',
    productsTitle: 'Professional Products · Superior Performance',
    productsDesc: 'Covering three product lines: anti-jamming antennas, detection & countermeasure equipment, and low-altitude protection systems',

    catAll: 'All Products',
    catAntenna: 'GNSS Anti-Jamming Units',
    catDetection: 'Detection & Countermeasure',
    catProtection: 'Low-Altitude Protection',

    // Product: Antenna Category
    prodA1Name: 'GNSS Anti-Jamming Antenna SS-GA01',
    prodA1Desc: 'Supports GPS/GLONASS/BeiDou multi-constellation, adaptive nulling, anti-jamming capability up to 80dB',
    prodA1Freq: 'Frequency',
    prodA1FreqVal: '1.1-1.6 GHz',
    prodA1Gain: 'Anti-Jamming',
    prodA1GainVal: '≥80 dB',
    prodA1Channels: 'Channels',
    prodA1ChannelsVal: '4/8 channels',

    prodA2Name: 'Multi-Band Anti-Jamming Array SS-MA02',
    prodA2Desc: 'Multi-element adaptive array antenna, simultaneously suppressing multiple wideband jammers',
    prodA2Freq: 'Frequency',
    prodA2FreqVal: '0.8-2.5 GHz',
    prodA2Gain: 'Elements',
    prodA2GainVal: '8-16 elements',
    prodA2Channels: 'Rejection',
    prodA2ChannelsVal: '≥90 dB',

    prodA3Name: 'Miniature Airborne Anti-Jamming Antenna SS-AA03',
    prodA3Desc: 'Lightweight design optimized for small UAV platforms, low power, high reliability',
    prodA3Freq: 'Frequency',
    prodA3FreqVal: '1.1-1.6 GHz',
    prodA3Gain: 'Weight',
    prodA3GainVal: '≤120g',
    prodA3Channels: 'Power',
    prodA3ChannelsVal: '≤2W',

    // Product: Detection Category
    prodD1Name: 'Drone Detection Radar SS-DR10',
    prodD1Desc: 'X-band phased array radar detecting micro UAVs within 8km, multi-target tracking',
    prodD1Freq: 'Detection Range',
    prodD1FreqVal: '≥8 km',
    prodD1Gain: 'Band',
    prodD1GainVal: 'X-band',
    prodD1Channels: 'Track Targets',
    prodD1ChannelsVal: '≥100',

    prodD2Name: 'Radio Surveillance Device SS-RD20',
    prodD2Desc: 'Full-band radio surveillance, real-time identification of drone video and control signals',
    prodD2Freq: 'Frequency Range',
    prodD2FreqVal: '20MHz-6GHz',
    prodD2Gain: 'Detection Range',
    prodD2GainVal: '≥5 km',
    prodD2Channels: 'Response Time',
    prodD2ChannelsVal: '≤1s',

    prodD3Name: 'EO Tracking & Countermeasure System SS-EO30',
    prodD3Desc: 'Visible + IR dual-channel tracking, integrated directional jamming, all-weather auto-countermeasure',
    prodD3Freq: 'Tracking Range',
    prodD3FreqVal: '≥3 km',
    prodD3Gain: 'IR Resolution',
    prodD3GainVal: '640×512',
    prodD3Channels: 'Jamming Range',
    prodD3ChannelsVal: '≥2 km',

    // Product: Protection Category
    prodP1Name: 'Fixed Low-Altitude Protection System SS-FP100',
    prodP1Desc: 'Modular deployment, integrated radar + detection + countermeasure, multi-site networking',
    prodP1Freq: 'Protection Radius',
    prodP1FreqVal: '≥5 km',
    prodP1Gain: 'Networking',
    prodP1GainVal: 'Up to 16 sites',
    prodP1Channels: 'Mode',
    prodP1ChannelsVal: '7×24 Auto',

    prodP2Name: 'Mobile Anti-Drone Platform SS-MP200',
    prodP2Desc: 'Vehicle-mounted / portable design, rapid deployment for temporary security and mobile patrols',
    prodP2Freq: 'Deployment',
    prodP2FreqVal: '≤10 min',
    prodP2Gain: 'Protection Radius',
    prodP2GainVal: '≥3 km',
    prodP2Channels: 'Endurance',
    prodP2ChannelsVal: '≥8 h',

    // --- Solutions Page ---
    solLabel: 'SOLUTIONS',
    solTitle: 'Industry Solutions',
    solDesc: 'Customized drone low-altitude protection solutions tailored to different industries and application scenarios',

    sol1Title: 'Airport Low-Altitude Security',
    sol1Desc: 'Deploy multi-layered detection and countermeasure systems targeting drone intrusions in airport restricted zones, achieving full closed-loop management from discovery to tracking to neutralization. Radar + Radio + EO composite detection ensures zero missed alarms and low false alarms.',

    sol2Title: 'Critical Infrastructure Protection',
    sol2Desc: 'Provide 24/7 drone protection for power hubs, oil & gas facilities, communication base stations, and other critical infrastructure. Anti-jamming antennas ensure safe drone inspection operations, while countermeasure equipment prevents malicious drone intrusions.',

    sol3Title: 'Military / Defense Site Protection',
    sol3Desc: 'Military-grade anti-jamming antennas and integrated detection-strike counter-drone systems for military bases, border lines, command centers, and other high-security scenarios. Supports integration with existing air defense systems.',

    sol4Title: 'Major Event / Sports Security',
    sol4Desc: 'Rapid deployment solutions for temporary security needs at sports events, political gatherings, and large-scale performances. Vehicle-mounted counter-drone platform deploys within 10 minutes and can be quickly withdrawn after the event.',

    sol5Title: 'Prison / Sensitive Area Protection',
    sol5Desc: 'Prevent drones from delivering contraband to prisons and other sensitive areas, or conducting illegal surveillance. Deploy fixed low-altitude protection systems for 24/7 automatic alerting and neutralization of "low, slow, small" targets.',

    // --- About Page ---
    aboutLabel: 'ABOUT US',
    aboutTitle: 'Starseek Navigation · Guarding Low-Altitude Safety',
    aboutDesc: 'Founded in 2010, Shenzhen Starseek Navigation Technology Co., Ltd. is a high-tech enterprise specializing in drone navigation anti-jamming and low-altitude security protection',

    aboutIntroTitle: 'Company Profile',
    aboutIntroP1: 'Shenzhen Starseek Navigation Technology Co., Ltd., founded in 2010 and headquartered in the Nanshan Science & Technology Park in Shenzhen, is dedicated to the R&D, manufacturing, and sales of drone anti-jamming antennas, drone detection & countermeasure equipment, and low-altitude protection systems.',
    aboutIntroP2: 'After over a decade of development, the company has established a comprehensive R&D system and manufacturing capabilities. Our products are widely used in civil aviation, public security, national defense, energy, and power sectors. We hold numerous core patented technologies and have received certifications including National High-Tech Enterprise and military quality management systems.',

    aboutVision: 'Vision & Mission',
    aboutVisionTitle: 'To become the world\'s leading provider of low-altitude security solutions',
    aboutVisionDesc: 'Driven by technological innovation, we continue to deepen our expertise in drone navigation anti-jamming and low-altitude security, delivering reliable, efficient, and intelligent products and services to global clients — safeguarding every piece of sky.',

    aboutTimelineTitle: 'Development Timeline',
    tl2010Title: 'Company Founded',
    tl2010Desc: 'Starseek Navigation established in Shenzhen, focusing on satellite navigation anti-jamming technology R&D',
    tl2014Title: 'First Product Launch',
    tl2014Desc: 'Launched first GNSS anti-jamming antenna, gaining market recognition',
    tl2017Title: 'Expansion into Low-Altitude Security',
    tl2017Desc: 'Entered the drone detection & countermeasure field, released first detection radar',
    tl2020Title: 'High-Tech Enterprise Certification',
    tl2020Desc: 'Certified as National High-Tech Enterprise, R&D team grew to 50+',
    tl2023Title: 'Complete Protection System',
    tl2023Desc: 'Completed full "Detect-Identify-Neutralize" product line, serving 200+ global clients',
    tl2025Title: 'Continuous Innovation',
    tl2025Desc: 'Launched next-gen AI intelligent low-altitude protection platform, expanding international markets',

    aboutCertTitle: 'Certifications & Qualifications',
    cert1: 'National High-Tech Enterprise',
    cert2: 'ISO 9001 Quality Management',
    cert3: 'GJB 9001C Military Quality',
    cert4: 'Multiple National Patents',
    cert5: 'CE / FCC International Certification',

    aboutRndTitle: 'R&D Capabilities',
    aboutRndDesc: 'Our R&D team of over 50 engineers includes core members from aerospace, electronics, and communications fields, with deep expertise in RF/microwave, signal processing, and AI technologies. The company operates antenna design and testing laboratories, a system integration test center equipped with advanced vector network analyzers, microwave anechoic chambers, environmental test chambers, and other R&D and testing equipment.',

    // --- Contact Page ---
    contactLabel: 'CONTACT',
    contactTitle: 'Looking Forward to Cooperation',
    contactDesc: 'For product inquiries, technical requirements, or partnership opportunities, please feel free to contact us',

    contactAddrTitle: 'Address',
    contactAddr: '7B, Building 1, Kangrui Smart Valley, No.9 Zhongxin Road, Taoyuan Queshan, Dalang Street, Longhua District, Shenzhen, Guangdong, China',
    contactPhoneTitle: 'Contact',
    contactPhone: '+86 18123769551',
    contactEmailTitle: 'Email',
    contactEmail: 'william.liu2025@outlook.com',
    contactBizTitle: 'Contact',
    contactBizEmail: 'william.liu2025@outlook.com',

    formName: 'Name',
    formNamePlaceholder: 'Enter your name',
    formCompany: 'Company',
    formCompanyPlaceholder: 'Enter your company name',
    formEmail: 'Email',
    formEmailPlaceholder: 'Enter your email address',
    formPhone: 'Phone',
    formPhonePlaceholder: 'Enter your phone number',
    formSubject: 'Subject',
    formSubjectPlaceholder: 'Select or enter inquiry subject',
    formMessage: 'Message',
    formMessagePlaceholder: 'Describe your needs or questions, we will respond promptly',
    formSubmit: 'Submit Message',
    formSuccess: 'Thank you for your message! We will contact you shortly.',

    // --- Common ---
    btnLearnMore: 'Learn More',
    btnViewAll: 'View All',
    btnSend: 'Send',
    loading: 'Loading...',
    noData: 'No Data',
  }
};
