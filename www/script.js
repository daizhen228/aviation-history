const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

const CIVIL_AVIATION_KEYWORDS = [
    '民航', '客机', '航班', '航空公司', '旅客', '乘客', '波音7', '空客A', '麦道', '图-154', '伊尔-62', '协和式', 
    'Airline', 'Airways', 'Flight', 'Passenger', 'Airport', 'Boeing 7', 'Airbus A', 'Douglas DC', 'Lockheed L-1011', 'Comet', 'Caravelle'
];

const GENERAL_AVIATION_KEYWORDS = [
    // CN
    '航空', '飞机', '飞行', '机场', '空军', '飞行员', '宇航员', '太空', '航天', '火箭', '卫星',
    '战斗机', '轰炸机', '直升机', '首飞', '试飞', '空难', '坠毁', '失事', '劫机', '击落', '迫降',
    '客机', '航班', '航空公司', '旅客', '乘客', '波音', '空客', '麥道', '圖-154', '伊爾-62', '協和式',
    // EN
    'aviation', 'aircraft', 'airplane', 'flight', 'pilot', 'astronaut', 'space', 'shuttle', 'rocket', 'satellite',
    'fighter', 'bomber', 'helicopter', 'maiden flight', 'first flight', 'crash', 'accident', 'hijack', 'shootdown',
    'airline', 'airways', 'passenger', 'airport', 'boeing', 'airbus', 'douglas', 'lockheed', 'comet', 'caravelle'
];

const EXCLUSION_KEYWORDS = [
    // CN
    '火车', '列车', '铁路', '汽车', '公交车', '巴士', '相撞', '公路', '高速公路', '车祸', '交通事故',
    // EN
    'train', 'rail', 'railway', 'bus', 'automobile', 'car crash', 'highway', 'collision with a train', 'traffic accident'
];

const AIRLINE_FOUNDING_DATES = [
    { name: '荷兰皇家航空 (KLM)', year: 1919, month: 10, day: 7, desc: '荷兰皇家航空成立，是世界上现存历史最悠久的航空公司（原名运营）。' },
    { name: '哥伦比亚航空 (Avianca)', year: 1919, month: 12, day: 5, desc: '哥伦比亚航空成立（前身为 SCADTA），是美洲历史最悠久的航空公司。' },
    { name: '澳洲航空 (Qantas)', year: 1920, month: 11, day: 16, desc: '澳洲航空 (Qantas) 在昆士兰温顿成立。' },
    { name: '俄罗斯航空 (Aeroflot)', year: 1923, month: 3, day: 17, desc: '俄罗斯航空 (Aeroflot) 成立，曾是苏联的国家航空公司。' },
    { name: '捷克航空 (Czech Airlines)', year: 1923, month: 10, day: 6, desc: '捷克航空成立。' },
    { name: '芬兰航空 (Finnair)', year: 1923, month: 11, day: 1, desc: '芬兰航空成立（前身为 Aero O/Y）。' },
    { name: '达美航空 (Delta Air Lines)', year: 1924, month: 5, day: 30, desc: '达美航空成立（前身为 Huff Daland Dusters）。' },
    { name: '汉莎航空 (Lufthansa)', year: 1926, month: 1, day: 6, desc: '德国汉莎航空 (Deutsche Luft Hansa) 成立。' },
    { name: '联合航空 (United Airlines)', year: 1926, month: 4, day: 6, desc: '联合航空的前身 Varney Air Lines 开始运营。' },
    { name: '美国航空 (American Airlines)', year: 1926, month: 4, day: 15, desc: '美国航空的前身 Robertson Aircraft Corporation 开始运营。' },
    { name: '伊比利亚航空 (Iberia)', year: 1927, month: 6, day: 28, desc: '西班牙伊比利亚航空成立。' },
    { name: '夏威夷航空 (Hawaiian Airlines)', year: 1929, month: 1, day: 30, desc: '夏威夷航空成立（前身为 Inter-Island Airways）。' },
    { name: '智利国家航空 (LATAM/LAN)', year: 1929, month: 3, day: 5, desc: '智利国家航空 (LAN) 成立，现为 LATAM 集团的一部分。' },
    { name: '泛美航空 (Pan Am)', year: 1927, month: 3, day: 14, desc: '泛美航空成立，曾是美国最大的国际航空公司，开创了跨太平洋和跨大西洋航线。' },
    { name: '法国航空 (Air France)', year: 1933, month: 10, day: 7, desc: '法国航空由多家法国航空公司合并成立。' },
    { name: '加拿大航空 (Air Canada)', year: 1937, month: 4, day: 11, desc: '加拿大航空成立（前身为 Trans-Canada Air Lines）。' },
    { name: '北欧航空 (SAS)', year: 1946, month: 8, day: 1, desc: '北欧航空 (SAS) 由丹麦、挪威和瑞典的航空公司合并成立。' },
    { name: '国泰航空 (Cathay Pacific)', year: 1946, month: 9, day: 24, desc: '国泰航空在香港成立。' },
    { name: '新加坡航空 (Singapore Airlines)', year: 1947, month: 5, day: 1, desc: '新加坡航空的前身马来亚航空 (Malayan Airways) 开始运营。' },
    { name: '以色列航空 (El Al)', year: 1948, month: 11, day: 15, desc: '以色列航空 (El Al) 成立。' },
    { name: '日本航空 (JAL)', year: 1951, month: 8, day: 1, desc: '日本航空 (Japan Airlines) 成立。' },
    { name: '全日本空输 (ANA)', year: 1952, month: 12, day: 27, desc: '全日本空输 (ANA) 成立（前身为日本直升机运输）。' },
    { name: '西南航空 (Southwest Airlines)', year: 1967, month: 3, day: 9, desc: '美国西南航空成立，是世界最大的低成本航空公司。' },
    { name: '联邦快递 (FedEx)', year: 1971, month: 6, day: 18, desc: '联邦快递 (FedEx) 成立。' },
    { name: '厦门航空', year: 1984, month: 7, day: 25, desc: '厦门航空成立，是中国首家按现代企业制度运行的航空公司。' },
    { name: '阿联酋航空 (Emirates)', year: 1985, month: 3, day: 25, desc: '阿联酋航空在迪拜成立。' },
    { name: '四川航空', year: 1986, month: 9, day: 19, desc: '四川航空成立。' },
    { name: '中国东方航空', year: 1988, month: 6, day: 25, desc: '中国东方航空正式成立。' },
    { name: '中国国际航空', year: 1988, month: 7, day: 1, desc: '中国国际航空正式成立。' },
    { name: '中国南方航空', year: 1988, month: 7, day: 1, desc: '中国南方航空正式成立。' },
    { name: '海南航空', year: 1989, month: 10, day: 1, desc: '海南航空的前身海南省航空公司成立。' },
    { name: '深圳航空', year: 1992, month: 11, day: 1, desc: '深圳航空成立。' },
    { name: '春秋航空', year: 2004, month: 5, day: 26, desc: '春秋航空成立，是中国首批民营航空公司之一。' }
];

// Translation Queue for auto-translating titles
const translationQueue = [];
let isTranslating = false;
const TRANSLATION_DELAY = 300; // ms between requests

function enqueueTranslation(text, callback) {
    // Check cache first
    const cached = localStorage.getItem(`trans_${text}`);
    if (cached) {
        callback(cached);
        return;
    }
    
    translationQueue.push({ text, callback });
    processQueue();
}

async function processQueue() {
    if (isTranslating || translationQueue.length === 0) return;
    
    isTranslating = true;
    const { text, callback } = translationQueue.shift();
    
    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh-CN`);
        const data = await res.json();
        const translatedText = data.responseData.translatedText;
        
        // Cache result
        try {
            localStorage.setItem(`trans_${text}`, translatedText);
        } catch (e) {
            // Storage full or quota exceeded, clear old items?
            // For simplicity, just ignore or clear all if needed
            if (e.name === 'QuotaExceededError') {
                localStorage.clear(); 
            }
        }
        
        callback(translatedText);
    } catch (error) {
        console.error('Translation error:', error);
        callback(text); // Fallback to original
    }
    
    setTimeout(() => {
        isTranslating = false;
        processQueue();
    }, TRANSLATION_DELAY);
}

// News Fetching Function
async function fetchAviationNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;

    // Use AllOrigins as a CORS proxy to fetch Google News RSS
    // Query: "aviation" OR "airline" OR "flight" (in Chinese context: 航空 OR 航空公司 OR 航班)
    // We use a broad search to get diverse news
    const rssUrl = 'https://news.google.com/rss/search?q=%E8%88%AA%E7%A9%BA+OR+%E6%B0%91%E8%88%AA+OR+%E9%A3%9E%E6%9C%BA&hl=zh-CN&gl=CN&ceid=CN:zh-CN';
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        
        if (data.contents) {
            // Parse XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data.contents, "text/xml");
            const items = xmlDoc.querySelectorAll('item');
            
            if (items.length === 0) {
                newsContainer.innerHTML = '<div class="error-news">暂无最新资讯。</div>';
                return;
            }

            newsContainer.innerHTML = ''; // Clear loading state
            
            // Limit to top 6 news items
            const limit = 6;
            for (let i = 0; i < Math.min(items.length, limit); i++) {
                const item = items[i];
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;
                const pubDate = new Date(item.querySelector('pubDate').textContent);
                
                // Format date: "2月24日 14:30"
                const dateStr = `${pubDate.getMonth() + 1}月${pubDate.getDate()}日 ${pubDate.getHours().toString().padStart(2, '0')}:${pubDate.getMinutes().toString().padStart(2, '0')}`;
                
                // Extract source if possible (usually in title "Title - Source")
                let source = 'Google News';
                let cleanTitle = title;
                if (title.includes(' - ')) {
                    const parts = title.split(' - ');
                    source = parts.pop();
                    cleanTitle = parts.join(' - ');
                }

                const card = document.createElement('div');
                card.className = 'news-card';
                card.innerHTML = `
                    <h3 class="news-title"><a href="${link}" target="_blank" rel="noopener noreferrer">${cleanTitle}</a></h3>
                    <div class="news-meta">
                        <span>${source}</span>
                        <span>${dateStr}</span>
                    </div>
                `;
                newsContainer.appendChild(card);
            }
        } else {
            throw new Error('No content from proxy');
        }
    } catch (error) {
        console.error('News fetch error:', error);
        newsContainer.innerHTML = '<div class="error-news">无法获取最新资讯，请稍后重试。<br><small>可能是网络原因或跨域限制</small></div>';
    }
}

// State
let currentDate = new Date();
let displayMonth = new Date();

// DOM Elements
const calendarGrid = document.getElementById('calendar-grid');
const currentMonthDisplay = document.getElementById('current-month-display');
const currentDateDisplay = document.getElementById('current-date');
const eventsContainer = document.getElementById('events-container');
const loadingIndicator = document.getElementById('loading');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

// Modal Elements removed as we use Accordion now

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    setupCalendar();
    selectDate(new Date());
    updateBackground();
    updateViewCount();
    fetchAviationNews(); // Fetch latest news on load
    
    prevMonthBtn.addEventListener('click', () => {
        displayMonth.setMonth(displayMonth.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        displayMonth.setMonth(displayMonth.getMonth() + 1);
        renderCalendar();
    });
});

function setupCalendar() {
    renderCalendar();
}

function updateBackground() {
    const hour = new Date().getHours();
    const body = document.body;
    
    console.log(`Updating background for hour: ${hour}`);

    // Remove existing bg classes
    body.classList.remove('bg-morning', 'bg-day', 'bg-sunset', 'bg-night');
    
    if (hour >= 6 && hour < 12) {
        body.classList.add('bg-morning');
        console.log('Set background to Morning');
    } else if (hour >= 12 && hour < 17) {
        body.classList.add('bg-day');
        console.log('Set background to Day');
    } else if (hour >= 17 && hour < 20) {
        body.classList.add('bg-sunset');
        console.log('Set background to Sunset');
    } else {
        body.classList.add('bg-night');
        console.log('Set background to Night');
    }
}

function updateViewCount() {
    // 1. Busuanzi handles the global count automatically via the script tag in HTML.
    // 2. We add a simple local storage counter for robustness in local dev environment.
    let localCount = localStorage.getItem('local_view_count') || 0;
    localCount = parseInt(localCount) + 1;
    localStorage.setItem('local_view_count', localCount);
    
    const localCounterEl = document.getElementById('local-view-counter');
    if (localCounterEl) {
        localCounterEl.textContent = localCount;
    }
}

function renderCalendar() {
    calendarGrid.innerHTML = '';
    
    WEEKDAYS.forEach(day => {
        const el = document.createElement('div');
        el.className = 'calendar-day-header';
        el.textContent = day;
        calendarGrid.appendChild(el);
    });

    const year = displayMonth.getFullYear();
    const month = displayMonth.getMonth();

    currentMonthDisplay.textContent = `${year}年 ${month + 1}月`;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    for (let i = 0; i < startDayOfWeek; i++) {
        const el = document.createElement('div');
        el.className = 'calendar-day empty';
        calendarGrid.appendChild(el);
    }

    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = i;
        
        if (today.getDate() === i && today.getMonth() === month && today.getFullYear() === year) {
            dayEl.classList.add('today');
        }

        if (currentDate.getDate() === i && currentDate.getMonth() === month && currentDate.getFullYear() === year) {
            dayEl.classList.add('selected');
        }

        dayEl.addEventListener('click', () => {
            const selected = new Date(year, month, i);
            selectDate(selected);
            renderCalendar(); 
        });

        calendarGrid.appendChild(dayEl);
    }
}

function selectDate(date) {
    currentDate = date;
    if (displayMonth.getMonth() !== date.getMonth() || displayMonth.getFullYear() !== date.getFullYear()) {
        displayMonth = new Date(date);
        renderCalendar();
    }
    
    currentDateDisplay.textContent = `${date.getMonth() + 1}月${date.getDate()}日`;
    fetchEvents(date);
}

async function fetchEvents(date) {
    eventsContainer.innerHTML = '';
    loadingIndicator.style.display = 'block';

    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Fetch from both CN and EN Wikipedia
    const urlCN = `https://zh.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`;
    const urlEN = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`;

    try {
        const [resCN, resEN] = await Promise.all([
            fetch(urlCN).then(r => r.ok ? r.json() : { events: [] }).catch(() => ({ events: [] })),
            fetch(urlEN).then(r => r.ok ? r.json() : { events: [] }).catch(() => ({ events: [] }))
        ]);

        // Process and Merge Events
        const eventsCN = processEvents(resCN.events, 'zh');
        const eventsEN = processEvents(resEN.events, 'en');
        
        // Custom Airline Events
        const airlineEvents = AIRLINE_FOUNDING_DATES.filter(a => a.month === month && a.day === day).map(a => ({
            year: a.year,
            title: `${a.name}成立`,
            description: a.desc,
            type: 'civil', 
            imageUrl: null, 
            pageUrl: null,
            lang: 'zh',
            pages: []
        }));

        // Combine, filter duplicates (simple year check), and sort
        let allEvents = [...eventsCN, ...eventsEN, ...airlineEvents];
        
        // Deduplicate: If same year, prefer CN version
        const uniqueEvents = [];
        const yearMap = new Map();

        // First pass: Add CN events
        eventsCN.forEach(event => {
            uniqueEvents.push(event);
            yearMap.set(event.year, true);
        });

        // Add Custom Airline Events
        airlineEvents.forEach(event => {
            uniqueEvents.push(event);
        });

        // Second pass: Add EN events only if year not present in CN (simple dedupe)
        eventsEN.forEach(event => {
            if (!yearMap.has(event.year)) {
                uniqueEvents.push(event);
            }
        });
        
        uniqueEvents.sort((a, b) => a.year - b.year);
        
        renderEventsList(uniqueEvents);

    } catch (error) {
        console.error('Error fetching events:', error);
        eventsContainer.innerHTML = '<p style="text-align:center; color:red;">获取数据失败，请检查网络连接。</p>';
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

function processEvents(events, lang) {
    if (!events) return [];
    return events.filter(event => {
        const text = event.text;
        
        // Check for exclusion keywords (non-aviation accidents)
        const isExcluded = EXCLUSION_KEYWORDS.some(k => text.toLowerCase().includes(k.toLowerCase()));
        if (isExcluded) return false;

        // Check for inclusion keywords
        const isCivil = CIVIL_AVIATION_KEYWORDS.some(k => text.includes(k));
        const isGeneral = GENERAL_AVIATION_KEYWORDS.some(k => text.toLowerCase().includes(k.toLowerCase()));
        return isCivil || isGeneral;
    }).map(event => {
        // Extract best image
        let imageUrl = null;
        let pageUrl = null;
        
        if (event.pages && event.pages.length > 0) {
            // Find first page with thumbnail
            const pageWithThumb = event.pages.find(p => p.thumbnail && p.thumbnail.source);
            if (pageWithThumb) {
                imageUrl = pageWithThumb.thumbnail.source;
            }
            // Default link to the first page
            if (event.pages[0].content_urls && event.pages[0].content_urls.desktop) {
                pageUrl = event.pages[0].content_urls.desktop.page;
            }
        }

        return {
            year: event.year,
            title: extractTitle(event.text, lang),
            description: event.text,
            type: determineType(event.text, lang),
            imageUrl: imageUrl,
            pageUrl: pageUrl,
            lang: lang,
            pages: event.pages // Keep pages for modal links
        };
    });
}

function extractTitle(text, lang) {
    if (lang === 'zh') {
        const firstSentence = text.split(/[，。]/)[0];
        return firstSentence.length > 40 ? firstSentence.substring(0, 40) + '...' : firstSentence;
    } else {
        // English
        const firstSentence = text.split('.')[0];
        return firstSentence.length > 60 ? firstSentence.substring(0, 60) + '...' : firstSentence;
    }
}

function determineType(text, lang) {
    const t = text.toLowerCase();
    
    // Civil Aviation Priority Check
    const isCivil = CIVIL_AVIATION_KEYWORDS.some(k => t.includes(k.toLowerCase()));
    
    if (lang === 'zh') {
        if (t.includes('空难') || t.includes('坠毁') || t.includes('事故') || t.includes('击落') || t.includes('遇难') || t.includes('劫机')) return 'crash';
        if (t.includes('诞生') || t.includes('出生')) return 'birth';
    } else {
        if (t.includes('crash') || t.includes('accident') || t.includes('shootdown') || t.includes('hijack') || t.includes('disaster')) return 'crash';
        if (t.includes('born') || t.includes('birth')) return 'birth';
    }

    if (isCivil) return 'civil';
    return 'milestone';
}

function renderEventsList(events) {
    if (events.length === 0) {
        eventsContainer.innerHTML = '<p style="text-align:center; color:#666;">历史上这一天似乎没有记录重大的航空事件。</p>';
        return;
    }

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        
        let tagClass = 'tag-milestone';
        let tagName = '里程碑';
        switch(event.type) {
            case 'crash':
                tagClass = 'tag-crash';
                tagName = '空难/事故';
                break;
            case 'civil':
                tagClass = 'tag-civil';
                tagName = '民航';
                break;
            case 'birth':
                tagClass = 'tag-birth';
                tagName = '人物诞生';
                break;
            default:
                tagClass = 'tag-milestone';
                tagName = '里程碑';
        }

        // Calendar Leaf Visual (Replaces Image logic on cover)
        const leaf = document.createElement('div');
        leaf.className = 'calendar-leaf-visual';
        leaf.style.cursor = 'pointer'; // Clickable
        
        // Month/Day string
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const dateStr = `${month}月${day}日`;
        
        // Check if we have an image for the cover
        if (event.imageUrl) {
            leaf.classList.add('has-image');
            leaf.style.backgroundImage = `url(${event.imageUrl})`;
            leaf.style.backgroundSize = 'cover';
            leaf.style.backgroundPosition = 'center';
            
            // Overlay content
            leaf.innerHTML = `
                <div class="leaf-overlay">
                    <div class="calendar-leaf-top-transparent">${dateStr}</div>
                    <div class="calendar-leaf-body-transparent">${event.year}</div>
                    <div class="calendar-leaf-tag ${tagClass}">${tagName}</div>
                </div>
            `;
        } else {
            // Standard Calendar Leaf (No Image)
            leaf.innerHTML = `
                <div class="calendar-leaf-top">${dateStr}</div>
                <div class="calendar-leaf-body">${event.year}</div>
                <div class="calendar-leaf-tag ${tagClass}">${tagName}</div>
            `;
        }

        // Header (Title)
        const header = document.createElement('div');
        header.className = 'event-header';
        header.innerHTML = `
            <h3 class="event-title">${event.title}</h3>
            <div class="expand-hint">点击展开详情 ▼</div>
        `;

        // Content (Hidden by default)
        const content = document.createElement('div');
        content.className = 'event-content';
        content.style.display = 'none';

        // Include original image in content if available
        let imageHTML = '';
        if (event.imageUrl) {
            imageHTML = `<div class="event-image-container" style="margin-bottom:15px; border-radius:4px; overflow:hidden;"><img src="${event.imageUrl}" alt="${event.title}" style="max-width:100%; display:block;" loading="lazy"></div>`;
        }

        // Description & Links
        let linksHTML = '';
        if (event.pages && event.pages.length > 0) {
            linksHTML = '<div class="event-links" style="margin-top:15px; font-size:0.9em;"><strong>相关阅读:</strong> '; 
            event.pages.forEach(page => {
                if (page.content_urls && page.content_urls.desktop) {
                    linksHTML += `<a href="${page.content_urls.desktop.page}" target="_blank" style="margin-right:10px;">${page.title}</a> `;
                }
            });
            linksHTML += '</div>';
        }

        // Translate Button
        let translateBtnHTML = '';
        const uniqueId = `translate-${Math.random().toString(36).substr(2, 9)}`;
        if (event.lang === 'en') {
            translateBtnHTML = `<button id="${uniqueId}" class="translate-btn" style="margin-top:10px; padding:5px 10px; cursor:pointer;">🌍 翻译成中文</button>`;
        }

        content.innerHTML = `
            ${imageHTML}
            <div class="event-description">
                <p style="line-height:1.6;">${event.description}</p>
                ${translateBtnHTML}
                ${linksHTML}
            </div>
        `;

        card.appendChild(leaf);
        card.appendChild(header);
        card.appendChild(content);

        // Toggle Logic
        const toggleCard = () => {
            const isExpanded = content.style.display === 'block';
            content.style.display = isExpanded ? 'none' : 'block';
            header.querySelector('.expand-hint').textContent = isExpanded ? '点击展开详情 ▼' : '收起详情 ▲';
            
            // Optional: Scroll into view if opening? Maybe annoying in grid.
        };

        leaf.addEventListener('click', toggleCard);
        header.addEventListener('click', toggleCard);

        // Bind Translate Event
        if (event.lang === 'en') {
            setTimeout(() => {
                const btn = content.querySelector(`#${uniqueId}`);
                if (btn) {
                    const titleEl = header.querySelector('.event-title');
                    const descEl = content.querySelector('.event-description p');
                    btn.onclick = (e) => {
                        e.stopPropagation();
                        translateEventContent(event.title, event.description, titleEl, descEl, btn);
                    };
                }
            }, 0);
        }

        eventsContainer.appendChild(card);
    });
}


async function translateEventContent(title, desc, titleEl, descEl, btn) {
    btn.textContent = '正在翻译...';
    btn.disabled = true;

    try {
        // Use a free translation API (MyMemory)
        // Note: This has a limit, but works for demo purposes.
        // Split description into chunks if too long (500 chars limit usually)
        
        const translate = async (text) => {
            if (!text) return '';
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh-CN`);
            const data = await res.json();
            return data.responseData.translatedText;
        };

        const translatedTitle = await translate(title);
        // Truncate desc for translation to avoid limits/errors in this simple implementation
        const shortDesc = desc.length > 500 ? desc.substring(0, 500) + '...' : desc;
        const translatedDesc = await translate(shortDesc);

        // Update UI
        // Keep the year prefix
        const yearPrefix = titleEl.querySelector('span') ? titleEl.querySelector('span').outerHTML : '';
        titleEl.innerHTML = yearPrefix + translatedTitle;
        descEl.innerHTML = translatedDesc + (desc.length > 500 ? ' (翻译已截断)' : '');
        
        btn.textContent = '翻译完成 (由 MyMemory 提供)';
        btn.style.backgroundColor = '#4caf50';
        
    } catch (error) {
        console.error('Translation failed:', error);
        btn.textContent = '翻译失败，请点击跳转 Google 翻译';
        btn.style.backgroundColor = '#f44336';
        btn.onclick = () => {
            window.open(`https://translate.google.com/?sl=en&tl=zh-CN&text=${encodeURIComponent(desc)}`, '_blank');
        };
        btn.disabled = false;
    }
}
