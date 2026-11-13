const stories = [
  {id:'voter-change', type:'Blog post', date:'12 November 2026', title:'Why voters change their minds', deck:'A closer look at how and why people move between parties.', image:'hero.png', alt:'A woman walking in a British town centre'},
  {id:'attitudes', type:'Report', date:'10 November 2026', title:'Political attitudes in Britain', deck:'A look at political attitudes across Britain.', image:'report.png', alt:'People approaching a polling station'},
  {id:'age-education', type:'Working paper', date:'6 November 2026', title:'Age, education and the vote', deck:'Exploring how age and education relate to voting.', image:'paper.png', alt:'Students walking together on a university campus'},
  {id:'participation', type:'Blog post', date:'2 November 2026', title:'Understanding political participation', deck:'How people take part in politics and elections.', image:'report.png', alt:'The entrance to a polling station'},
  {id:'generations', type:'Report', date:'29 October 2026', title:'Political views across generations', deck:'Exploring political views across different generations.', image:'paper.png', alt:'Students talking outside a university'}
];
const main=document.querySelector('main');
const filename=location.pathname.split('/').pop() || 'index.html';
const pageTitles={'about.html':'About','analysis.html':'Analysis','data.html':'Data'};
if(pageTitles[filename]) document.title=`${pageTitles[filename]} | British Election Study`;
const link=s=>`article.html?id=${encodeURIComponent(s.id)}`;
const metadata=s=>`<div class="small-meta"><span class="type">${s.type}</span><span aria-hidden="true">·</span><time>${s.date}</time></div>`;
const railStory=s=>`<article class="rail-item"><a href="${link(s)}" tabindex="-1" aria-hidden="true"><img src="assets/${s.image}" alt=""></a><div>${metadata(s)}<h2><a href="${link(s)}">${s.title}</a></h2><p class="rail-deck">${s.deck}</p></div></article>`;
const card=s=>`<article class="article-card"><a href="${link(s)}" tabindex="-1" aria-hidden="true"><img src="assets/${s.image}" alt=""></a>${metadata(s)}<h2><a href="${link(s)}">${s.title}</a></h2></article>`;
const arrow=(direction)=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${direction==='left'?'M15 3 6 12l9 9':'M9 3l9 9-9 9'}"/></svg>`;
if(filename==='index.html'){
  const lead=stories[0];
  main.innerHTML=`<section class="hero" aria-label="Featured analysis"><a class="hero-photo" href="${link(lead)}" tabindex="-1" aria-hidden="true"><img class="hero-image" src="assets/${lead.image}" alt=""></a><div class="hero-copy"><div><div class="meta"><span class="type">BLOG POST</span><time>${lead.date}</time></div><h1><a href="${link(lead)}">${lead.title}</a></h1><p class="deck">${lead.deck}</p><p class="byline">BES team</p></div></div></section><section class="story-rail" aria-label="More analysis"><div class="rail-viewport"><div class="stories"></div></div><p class="sr-only" id="carousel-status" aria-live="polite"></p><div class="rail-controls"><button type="button" id="prev" aria-label="Previous stories">${arrow('left')}</button><button type="button" id="next" aria-label="Next stories">${arrow('right')}</button></div><div class="dots" aria-label="Story pages"></div></section>`;
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
  main.innerHTML=`<div class="page"><h1>Analysis</h1><p class="intro">Explore analysis from the British Election Study.</p><form class="form-row" id="search" role="search"><label class="skip" for="query">Search analysis</label><input id="query" name="q" type="search" placeholder="Search analysis"><button>Search</button></form><p class="notice">The stories in this prototype are illustrative examples.</p><p class="status" aria-live="polite"></p><div class="article-grid"></div></div>`;
  const query=document.querySelector('#query'), grid=document.querySelector('.article-grid'), status=document.querySelector('.status');
  function show(){const term=query.value.trim().toLowerCase();const found=stories.filter(s=>`${s.title} ${s.type} ${s.deck||''}`.toLowerCase().includes(term));grid.innerHTML=found.map(card).join('');status.textContent=term?`${found.length} ${found.length===1?'result':'results'}`:'';}
  document.querySelector('#search').addEventListener('submit',e=>{e.preventDefault();show()});query.addEventListener('input',show);show();
} else if(filename==='about.html'){
  main.innerHTML=`<div class="page"><h1>About</h1><p class="intro">The British Election Study is an independent study of elections, voting and political attitudes in Britain.</p><p>Since 1964, the study has collected evidence to help researchers and the public understand political change and electoral behaviour.</p><h2>The study</h2><p>The BES brings together survey data and research about voters, elections and the choices people make.</p><p><a href="https://www.britishelectionstudy.com/">Visit the current British Election Study website</a></p></div>`;
} else if(filename==='data.html'){
  main.innerHTML=`<div class="page"><h1>Data</h1><p class="intro">Explore British Election Study survey data and resources.</p><p>The current BES website provides access to survey data, including cross-sectional and panel studies, and the Data Playground.</p><h2>Data download</h2><p>Find available BES datasets and information on terms of use and citation.</p><p><a href="https://www.britishelectionstudy.com/data/">Go to BES data downloads</a></p><h2>Data Playground</h2><p>Explore data and create charts on the current BES website.</p><p><a href="https://www.britishelectionstudy.com/data/">Open the Data Playground</a></p></div>`;
} else if(filename==='article.html'){
  const story=stories.find(s=>s.id===new URLSearchParams(location.search).get('id'));
  if(!story){main.innerHTML='<div class="page"><h1>Story not found</h1><p><a href="analysis.html">Return to Analysis</a></p></div>'}else{document.title=`${story.title} | British Election Study`;main.innerHTML=`<article class="page"><p><a class="back" href="analysis.html">← Analysis</a></p>${metadata(story)}<h1>${story.title}</h1>${story.deck?`<p class="intro">${story.deck}</p>`:''}<p>BES team</p><img class="article-hero" src="assets/${story.image}" alt="${story.alt}"><p class="notice">This is an illustrative prototype story. The headline, date and image are examples and do not represent a published BES analysis.</p></article>`;}
}
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===filename){a.setAttribute('aria-current','page');a.classList.add('menu-current')}});
