const stories = [
  {id:'voter-change', tags:['Voting behaviour', 'Elections'], type:'Blog post', date:'12 November 2026', title:'Why voters change their minds', deck:'A closer look at how and why people move between parties.', image:'hero.png', alt:'A woman walking in a British town centre'},
  {id:'attitudes', tags:['Political attitudes', 'Elections'], type:'Report', date:'10 November 2026', title:'Political attitudes in Britain', deck:'A look at political attitudes across Britain.', image:'report.png', alt:'People approaching a polling station'},
  {id:'age-education', tags:['Voting behaviour', 'Demographics'], type:'Working paper', date:'6 November 2026', title:'Age, education and the vote', deck:'Exploring how age and education relate to voting.', image:'paper.png', alt:'Students walking together on a university campus'},
  {id:'participation', tags:['Political participation', 'Elections'], type:'Blog post', date:'2 November 2026', title:'Understanding political participation', deck:'How people take part in politics and elections.', image:'participation.png', alt:'People listening at a community meeting'},
  {id:'generations', tags:['Political attitudes', 'Demographics'], type:'Report', date:'29 October 2026', title:'Political views across generations', deck:'Exploring political views across different generations.', image:'generations.png', alt:'Two people of different generations talking on a residential street'}
];
// Illustrative copy for testing article length and typography; replace before publication.
const sampleSections = [
  { paragraphs: [
    `Elections bring together millions of individual decisions, each made in its own circumstances. People encounter politics at work and at home, through conversations with friends, and in the stories they see and hear. Some follow events closely, while others pay attention only when an issue touches their lives. Looking across these experiences can help us think about the many routes through which people form and express political views.`,
    `A useful starting point is to ask what a simple description leaves out. An election result tells us how votes add up, but it cannot by itself explain the reasons behind every choice. Two people who make the same decision may have very different priorities, and someone who chooses the same party twice may have arrived there for a different reason on each occasion. Survey research can help explore those distinctions.`,
    `The questions asked in a survey matter as much as the answers. A carefully worded question gives people a shared starting point, but it cannot capture every detail of their lives. Researchers must also consider when a question was asked and what was happening at the time. The answers offer a window into political attitudes, not a complete account of everything a person believes or might do.`,
    `It is tempting to explain an election through a single event or a single group of voters. In practice, political change can involve several processes at once. Some people may become more interested in an issue; others may reconsider a party, respond to a leader, or decide whether to vote at all. These possibilities can overlap, and their relative importance is an empirical question rather than an assumption.`
  ]},
  { heading: 'Looking beyond the headline', paragraphs: [
    `One way to examine change is to look at people over time. Following the same respondents across more than one survey can show how answers move, rather than relying only on a comparison between separate snapshots. This approach also brings challenges: people may miss a survey, questions may change, and the circumstances in which an answer is given may differ. Careful interpretation is essential at every stage.`,
    `Comparisons between groups can be useful too, provided that the groups are treated as starting points for inquiry rather than as fixed descriptions of individuals. Age, education and place can be related to many other experiences. A broad average may conceal differences within a group, just as a striking contrast between two groups may change when researchers consider the wider context in which people live.`,
    `The language used to describe evidence should reflect what the evidence can support. An observed association does not automatically tell us which factor came first or whether one caused the other. Researchers can use different designs and measures to investigate competing explanations, but uncertainty remains part of the picture. Making that uncertainty visible helps readers judge what a finding means and what questions remain open.`,
    `There is also value in asking whose voices are represented. Surveys are designed to learn about a wider population from a smaller set of responses, and researchers use sampling and weighting to improve that connection. Even so, not everyone has the same chance of taking part or answering every question. Thinking about those gaps is part of understanding both the strengths and the limits of the evidence.`
  ]},
  { heading: 'The wider picture', paragraphs: [
    `Political attitudes do not exist in isolation from everyday life. People may interpret the same news through different experiences, and the issues they consider most pressing can change over time. Friends, family, workplaces and communities offer settings in which ideas are discussed and challenged. These influences do not point in one inevitable direction, but they provide useful context for thinking about political choices.`,
    `For readers, the most useful account is often one that combines a clear headline with enough detail to see how it was reached. That means explaining the question, the people included and the limits of the comparison, as well as presenting the result. Charts and tables can make patterns easier to follow, while the surrounding text can show why those patterns matter and where interpretation needs caution.`,
    `The questions raised here are not confined to a single election. They are part of a broader effort to understand how people engage with politics, how views develop, and how institutions respond to a changing society. Each new piece of research can add another perspective. Taken together, these perspectives help build a richer account than any single result or headline could provide on its own.`,
    `A good discussion leaves room for further questions. Which patterns persist when we look at another period, and which depend on a particular moment? How might different ways of asking a question change the answers? What additional information would help us understand the people behind the numbers? These are invitations to keep investigating, and reminders that useful research is a conversation between evidence, interpretation and the questions we choose to ask.`
  ]}
];
const sampleBody=sampleSections.map(section=>`${section.heading?`<h2>${section.heading}</h2>`:''}${section.paragraphs.map(paragraph=>`<p>${paragraph}</p>`).join('')}`).join('');
const main=document.querySelector('main');
const filename=location.pathname.split('/').pop() || 'index.html';
const pageTitles={'about.html':'About','analysis.html':'News','data.html':'Data'};
if(pageTitles[filename]) document.title=`${pageTitles[filename]} | British Election Study`;
const link=s=>`article.html?id=${encodeURIComponent(s.id)}`;
const metadata=s=>`<div class="small-meta"><span class="type">${s.type}</span><span aria-hidden="true">·</span><time>${s.date}</time></div>`;
const railStory=s=>`<article class="rail-item"><a href="${link(s)}" tabindex="-1" aria-hidden="true"><img src="assets/${s.image}" alt=""></a><div>${metadata(s)}<h2><a href="${link(s)}">${s.title}</a></h2><p class="rail-deck">${s.deck}</p></div></article>`;
const topicLink=tag=>`analysis.html?topic=${encodeURIComponent(tag)}`;
const card=s=>`<article class="news-item"><a class="news-item-image" href="${link(s)}" tabindex="-1" aria-hidden="true"><img src="assets/${s.image}" alt=""></a><div class="news-item-copy"><a class="news-topic" href="${topicLink(s.tags[0])}">${s.tags[0]}</a><h2><a href="${link(s)}">${s.title}</a></h2>${metadata(s)}<p>${s.deck}</p></div></article>`;
const arrow=(direction)=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${direction==='left'?'M15 3 6 12l9 9':'M9 3l9 9-9 9'}"/></svg>`;
if(filename==='index.html'){
  document.body.classList.add('home');
  const lead=stories[0];
  main.innerHTML=`<section class="hero" aria-label="Featured news"><a class="hero-photo" href="${link(lead)}" tabindex="-1" aria-hidden="true"><img class="hero-image" src="assets/${lead.image}" alt=""></a><div class="hero-copy"><div><div class="meta"><span class="type">BLOG POST</span><time>${lead.date}</time></div><h1><a href="${link(lead)}">${lead.title}</a></h1><p class="deck">${lead.deck}</p><p class="byline">BES team</p></div></div></section><section class="story-rail" aria-label="More news"><div class="rail-body"><div class="rail-viewport"><div class="stories"></div></div><div class="rail-controls"><button type="button" id="prev" aria-label="Previous stories">${arrow('left')}</button><button type="button" id="next" aria-label="Next stories">${arrow('right')}</button></div></div><p class="sr-only" id="carousel-status" aria-live="polite"></p><div class="dots" aria-label="Story pages"></div></section>`;
  let page=0;
  const lower=stories.slice(1), pages=Math.ceil(lower.length/2);
  const track=document.querySelector('.stories');
  const dots=document.querySelector('.dots');
  track.innerHTML=Array.from({length:pages},(_,i)=>`<div class="rail-page">${lower.slice(i*2,i*2+2).map(railStory).join('')}</div>`).join('');
  dots.innerHTML=Array.from({length:pages},(_,i)=>`<button type="button" aria-label="Show story page ${i+1}" data-page="${i}"></button>`).join('');
  function showPage(next, announce=false){
    page=next;
    track.style.transform=`translateX(-${page*100}%)`;
    track.querySelectorAll('.rail-page').forEach((slide,i)=>{slide.inert=i!==page;slide.setAttribute('aria-hidden',String(i!==page))});
    dots.querySelectorAll('button').forEach((button,i)=>button.setAttribute('aria-current',String(i===page)));
    document.querySelector('#prev').disabled=page===0;
    document.querySelector('#next').disabled=page===pages-1;
    if(announce) document.querySelector('#carousel-status').textContent=`Showing stories ${page*2+1} to ${Math.min(page*2+2,lower.length)} of ${lower.length}`;
  }
  document.querySelector('#prev').addEventListener('click',()=>{if(page>0)showPage(page-1,true)});
  document.querySelector('#next').addEventListener('click',()=>{if(page<pages-1)showPage(page+1,true)});
  dots.addEventListener('click',event=>{if(event.target.dataset.page!==undefined)showPage(Number(event.target.dataset.page),true)});
  showPage(0);
} else if(filename==='analysis.html'){
  const topics=[...new Set(stories.flatMap(story=>story.tags))];
  const params=new URLSearchParams(location.search);
  let selectedTopic=topics.includes(params.get('topic'))?params.get('topic'):'';
  main.innerHTML=`<div class="page news-page"><div class="news-layout"><div class="news-heading"><h1>Latest News</h1><p class="news-count" aria-live="polite"></p></div><form class="news-search" id="search" role="search"><label class="sr-only" for="query">Search news</label><span aria-hidden="true">⌕</span><input id="query" name="q" type="search" placeholder="Search news" autocomplete="off"></form><div class="news-results"><p class="notice">The stories in this prototype are illustrative examples.</p><div class="news-list"></div><div class="news-empty" hidden><h2>No stories found</h2><p>Try another search or topic.</p><button type="button" id="clear-filters">Clear filters</button></div></div><aside class="news-sidebar"><h2>Explore Topics</h2><ul>${topics.map(tag=>`<li><a href="${topicLink(tag)}">${tag}<span>${stories.filter(story=>story.tags.includes(tag)).length}</span></a></li>`).join('')}</ul><a class="all-topics" href="analysis.html">All news</a></aside></div></div>`;
  const query=document.querySelector('#query'), list=document.querySelector('.news-list'), count=document.querySelector('.news-count');
  query.value=params.get('q')||'';
  function show(){
    const term=query.value.trim().toLowerCase();
    const found=stories.filter(s=>(!selectedTopic||s.tags.includes(selectedTopic))&&`${s.title} ${s.type} ${s.deck} ${s.tags.join(' ')}`.toLowerCase().includes(term));
    list.innerHTML=found.map(card).join('');
    count.textContent=`${found.length} ${found.length===1?'story':'stories'}`;
    document.querySelector('.news-empty').hidden=found.length>0;
    document.querySelector('.news-heading h1').textContent=selectedTopic||'Latest News';
    document.querySelectorAll('.news-sidebar li a').forEach(a=>{if(new URL(a.href).searchParams.get('topic')===selectedTopic)a.setAttribute('aria-current','true');});
  }
  document.querySelector('#search').addEventListener('submit',event=>{event.preventDefault();show()});
  query.addEventListener('input',show);
  document.querySelector('#clear-filters').addEventListener('click',()=>{selectedTopic='';query.value='';history.replaceState(null,'','analysis.html');document.querySelectorAll('.news-sidebar a').forEach(a=>a.removeAttribute('aria-current'));show()});
  show();
} else if(filename==='about.html'){
  main.innerHTML=`<div class="page"><h1>About</h1><p class="intro">The British Election Study is an independent study of elections, voting and political attitudes in Britain.</p><p>Since 1964, the study has collected evidence to help researchers and the public understand political change and electoral behaviour.</p><h2>The study</h2><p>The BES brings together survey data and research about voters, elections and the choices people make.</p><p><a href="https://www.britishelectionstudy.com/">Visit the current British Election Study website</a></p></div>`;
} else if(filename==='data.html'){
  main.innerHTML=`<div class="page"><h1>Data</h1><p class="intro">Explore British Election Study survey data and resources.</p><p>The current BES website provides access to survey data, including cross-sectional and panel studies.</p><h2>Data download</h2><p>Find available BES datasets and information on terms of use and citation.</p><p><a href="https://www.britishelectionstudy.com/data/">Go to BES data downloads</a></p></div>`;
} else if(filename==='article.html'){
  const story=stories.find(s=>s.id===new URLSearchParams(location.search).get('id'));
  if(!story){main.innerHTML='<div class="page"><h1>Story not found</h1><p><a href="analysis.html">Return to News</a></p></div>'}else{document.title=`${story.title} | British Election Study`;main.innerHTML=`<article class="page"><p><a class="back" href="analysis.html">← News</a></p>${metadata(story)}<h1>${story.title}</h1>${story.deck?`<p class="intro">${story.deck}</p>`:''}<p>BES team</p><img class="article-hero" src="assets/${story.image}" alt="${story.alt}"><p class="notice">This is an illustrative prototype story. The headline, date, image and body text are placeholders, not published BES research.</p><div class="article-reading"><aside class="article-topics" aria-labelledby="topics-title"><h2 id="topics-title">Topics</h2><ul>${story.tags.map(tag=>`<li><a href="${topicLink(tag)}">${tag}</a></li>`).join('')}</ul></aside><div class="article-body">${sampleBody}</div><aside class="article-share" aria-labelledby="share-title"><h2 id="share-title">Share</h2><ul><li><a class="share-icon" href="https://bsky.app/intent/compose?text=${encodeURIComponent(`${story.title}\n${location.href}`)}" aria-label="Share by Bluesky" title="Share by Bluesky"><span class="social-icon bluesky-icon" aria-hidden="true"></span></a></li><li><a class="share-icon" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}" aria-label="Share by LinkedIn" title="Share by LinkedIn"><span class="social-icon linkedin-icon" aria-hidden="true"></span></a></li><li><a class="share-icon" href="mailto:?subject=${encodeURIComponent(story.title)}&amp;body=${encodeURIComponent(location.href)}" aria-label="Share by email" title="Share by email"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="1"></rect><path d="m3 6 9 7 9-7"></path></svg></a></li><li><button class="share-icon" type="button" id="copy-link" aria-label="Copy link" title="Copy link"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1 0l2.8-2.8a5 5 0 0 0-7.1-7.1l-1.6 1.6M14 11a5 5 0 0 0-7.1 0l-2.8 2.8a5 5 0 0 0 7.1 7.1l1.6-1.6"></path></svg></button></li></ul><p class="copy-status" role="status"></p></aside></div></article>`;}
}
const copyLink=document.querySelector('#copy-link');
if(copyLink)copyLink.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);document.querySelector('.copy-status').textContent='Link copied';}catch{document.querySelector('.copy-status').textContent='Copy the link from your browser address bar.';}});
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===filename){a.setAttribute('aria-current','page');a.classList.add('menu-current')}});
