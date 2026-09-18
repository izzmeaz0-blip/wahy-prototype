// ================= i18n =================
const STR = {
  ar:{splashTag:'دليلك إلى المسجد والصلاة',notifTitle:'الإشعارات',demoNote:'هذا نموذج أولي تجريبي. بيانات المساجد ومواقيت الصلاة هنا لأغراض العرض فقط، وستُعتمد لاحقًا من مصدر رسمي.',greeting:'السلام عليكم',nextPrayerLabel:'الصلاة القادمة',nearestMosque:'🕌 أقرب مسجد إليك',locating:'جارٍ تحديد الموقع…',navHome:'الرئيسية',navMosques:'المساجد',navPrayer:'الصلاة',favorites:'المفضلة',more:'المزيد',qibla:'القبلة',mosquesTitle:'المساجد',searchPh:'ابحث باسم المسجد أو المنطقة',listView:'القائمة',mapView:'الخريطة',mapNote:'خريطة تجريبية لقطر — تحديد مواقع المساجد الفردية سيُضاف في النسخة القادمة.',backToMosques:'رجوع للمساجد',directions:'الاتجاهات',todayTimes:'مواقيت الصلاة اليوم',fridaySermon:'خطبة الجمعة القادمة',sample:'تجريبي',facilities:'المرافق',lastUpdated:'آخر تحديث للمعلومات',reportWrongInfo:'الإبلاغ عن معلومة غير صحيحة',prayerDemoNote:'المواقيت محسوبة تلقائيًا لأغراض العرض. النسخة الحكومية تعتمد بيانات وزارة الأوقاف الرسمية.',todayTimes2:'مواقيت اليوم',lastThird:'الثلث الأخير من الليل',midnight:'منتصف الليل',thirdStart:'يبدأ الثلث الأخير',thirdEnd:'ينتهي (الفجر)',nightAlert:'تنبيه الثلث الأخير',qiblaDir:'اتجاه القبلة',north:'شمال',back:'رجوع',reportTitle:'الإبلاغ عن خطأ',reportWhat:'ما المشكلة؟',r1:'موقع المسجد غير صحيح',r2:'معلومات المسجد غير محدثة',r3:'مرفق غير متوفر فعليًا',r4:'مشكلة أخرى',reportDetails:'تفاصيل إضافية (اختياري)',reportPh:'اكتب وصفًا مختصرًا للمشكلة',sendReport:'إرسال البلاغ',language:'اللغة',prayerNotif:'إشعارات الصلاة',darkMode:'الوضع الليلي',reportGeneral:'⚠️ الإبلاغ عن مشكلة عامة',aboutTitle:'عن «وحي»',aboutBody:'نموذج أولي مستقل، غير رسمي، لاستكشاف فكرة منصة موحدة لخدمات المساجد. غير تابع لوزارة الأوقاف والشؤون الإسلامية.',noFav:'لا توجد مساجد في المفضلة بعد',noFavSub:'اضغط ♥ على أي مسجد لإضافته هنا',km:'كم',m:'م',remaining:'متبقي',h:'س',min:'د',openPage:'فتح صفحة المسجد',generalReport:'بلاغ عام (بدون مسجد محدد)',regarding:'بخصوص',reportReceived:'تم استلام البلاغ — رقم البلاغ #',noResults:'لا توجد نتائج',fajr:'الفجر',sunrise:'الشروق',dhuhr:'الظهر',asr:'العصر',maghrib:'المغرب',isha:'العشاء',cap_small:'سعة صغيرة',cap_medium:'سعة متوسطة',cap_large:'سعة كبيرة',mapNote2:'اضغط أي علامة لعرض معلومات المسجد.',retry:'إعادة المحاولة',locDenied:'📍 لم يُسمح بالوصول للموقع — تُعرض المسافات من مركز الدوحة كموقع افتراضي.',prayerFailedCached:'تعذر الاتصال بمصدر المواقيت — تُعرض آخر بيانات محفوظة.',prayerFailedNoCache:'تعذر تحميل مواقيت الصلاة. تحقق من اتصال الإنترنت.',navContent:'المحتوى',contentSub:'دروس ومحاضرات قادمة من مساجد مختلفة (بيانات تجريبية)',upcomingLessons:'الدروس والمحاضرات القادمة',sermonArchive:'أرشيف خطب الجمعة السابقة',noLessons:'لا توجد دروس مجدولة حاليًا',noArchive:'لا يوجد أرشيف متاح بعد',favoritesMenuItem:'❤️ مساجدي المفضلة',officialLinksTitle:'روابط رسمية',ministrySiteLink:'🔗 الموقع الرسمي لوزارة الأوقاف والشؤون الإسلامية',quranMenuItem:'📖 المصحف',quranSourceNote:'النص من مصحف عثماني موثوق عبر alquran.cloud — نص حقيقي وليس بيانات تجريبية.',backToSurahs:'رجوع لقائمة السور',ayahsLabel:'آية',quranListFailed:'تعذر تحميل قائمة السور. تحقق من اتصال الإنترنت.',quranReadFailed:'تعذر تحميل نص السورة. تحقق من اتصال الإنترنت.',hadithOfDay:'حديث اليوم',hadithNo:'رقم',anotherHadith:'حديث آخر',hadithFailed:'تعذر تحميل الحديث.',quranTile:'المصحف',azkarTile:'الأذكار',azkarMenuItem:'🤲 الأذكار',azkarSourceNote:'من كتاب "حصن المسلم" للشيخ سعيد بن علي بن وهف القحطاني — كل ذكر موثّق بمصدره.',azkarMorning:'أذكار الصباح',azkarEvening:'أذكار المساء',azkarFailed:'تعذر تحميل الأذكار. تحقق من اتصال الإنترنت.',noAzkar:'لا توجد أذكار في هذا القسم.',sourceLabel:'المصدر',repeatLabel:'يُقال'},
  en:{splashTag:'Your guide to the mosque & prayer',notifTitle:'Notifications',demoNote:'This is a demo prototype. Mosque data and prayer times are for demonstration only and will later be sourced officially.',greeting:'Peace be upon you',nextPrayerLabel:'Next Prayer',nearestMosque:'🕌 Nearest mosque to you',locating:'Locating…',navHome:'Home',navMosques:'Mosques',navPrayer:'Prayer',favorites:'Favorites',more:'More',qibla:'Qibla',mosquesTitle:'Mosques',searchPh:'Search by mosque name or area',listView:'List',mapView:'Map',mapNote:'Demo map of Qatar — individual mosque pins coming in the next version.',backToMosques:'Back to Mosques',directions:'Directions',todayTimes:'Today\'s Prayer Times',fridaySermon:'Upcoming Friday Sermon',sample:'Sample',facilities:'Facilities',lastUpdated:'Last updated',reportWrongInfo:'Report incorrect information',prayerDemoNote:'Times are auto-calculated for demo purposes. The government version will use official Ministry of Awqaf data.',todayTimes2:'Today\'s Times',lastThird:'Last Third of the Night',midnight:'Midnight',thirdStart:'Last third begins',thirdEnd:'Ends (Fajr)',nightAlert:'Last-third alert',qiblaDir:'Qibla Direction',north:'North',back:'Back',reportTitle:'Report an Issue',reportWhat:'What\'s the problem?',r1:'Mosque location is incorrect',r2:'Mosque info is outdated',r3:'A listed facility is unavailable',r4:'Other issue',reportDetails:'Additional details (optional)',reportPh:'Briefly describe the issue',sendReport:'Submit Report',language:'Language',prayerNotif:'Prayer notifications',darkMode:'Dark mode',reportGeneral:'⚠️ Report a general issue',aboutTitle:'About "Wahy"',aboutBody:'An independent, unofficial prototype exploring a unified mosque-services platform idea. Not affiliated with the Ministry of Awqaf and Islamic Affairs.',noFav:'No favorite mosques yet',noFavSub:'Tap ♥ on any mosque to add it here',km:'km',m:'m',remaining:'Remaining',h:'h',min:'min',openPage:'Open mosque page',generalReport:'General report (no mosque specified)',regarding:'Regarding',reportReceived:'Report received — ticket #',noResults:'No results',fajr:'Fajr',sunrise:'Sunrise',dhuhr:'Dhuhr',asr:'Asr',maghrib:'Maghrib',isha:'Isha',cap_small:'Small capacity',cap_medium:'Medium capacity',cap_large:'Large capacity',mapNote2:'Tap any marker to view mosque info.',retry:'Retry',locDenied:'📍 Location access was not granted — distances are shown from central Doha as a default.',prayerFailedCached:'Could not reach the timings source — showing last saved data.',prayerFailedNoCache:'Could not load prayer times. Check your internet connection.',navContent:'Content',contentSub:'Upcoming lessons and lectures from various mosques (sample data)',upcomingLessons:'Upcoming Lessons & Lectures',sermonArchive:'Past Friday Sermons Archive',noLessons:'No lessons currently scheduled',noArchive:'No archive available yet',favoritesMenuItem:'❤️ My Favorite Mosques',officialLinksTitle:'Official Links',ministrySiteLink:'🔗 Official website of the Ministry of Awqaf and Islamic Affairs',quranMenuItem:'📖 Mus\'haf (Quran)',quranSourceNote:'Text from a verified Uthmani mushaf via alquran.cloud — real text, not sample data.',backToSurahs:'Back to Surah list',ayahsLabel:'verses',quranListFailed:'Could not load the surah list. Check your internet connection.',quranReadFailed:'Could not load the surah text. Check your internet connection.',hadithOfDay:'Hadith of the Day',hadithNo:'No.',anotherHadith:'Another hadith',hadithFailed:'Could not load the hadith.',quranTile:'Mus\'haf',azkarTile:'Azkar',azkarMenuItem:'🤲 Azkar',azkarSourceNote:'From "Hisn al-Muslim" by Sheikh Sa\'id ibn Ali ibn Wahf Al-Qahtani — every dhikr is cited to its source.',azkarMorning:'Morning Azkar',azkarEvening:'Evening Azkar',azkarFailed:'Could not load the azkar. Check your internet connection.',noAzkar:'No azkar in this section.',sourceLabel:'Source',repeatLabel:'Repeat'}
};
let currentLang='ar';
function t(k){ return STR[currentLang][k] || k; }

// ================= Mock data (fictional, for demo only) =================
const MOSQUES = [
  {id:1,name:{ar:'مسجد الفردوس',en:'Al Firdous Mosque'},area:{ar:'الدوحة — الدفنة',en:'Doha — Dafna'},lat:25.3210,lon:51.5310,fac:['women','parking','toilets','ac'],cap:'large',sermon:{ar:'فضل الصبر عند البلاء',en:'The Virtue of Patience in Hardship'},updated:'2026-09-12',lessons:[{ar:{t:'شرح كتاب الأربعين النووية', speaker:'الشيخ محمد العطية', when:'كل ثلاثاء بعد المغرب'}, en:{t:'Commentary on the 40 Hadith of An-Nawawi', speaker:'Sheikh Mohammed Al-Attiyah', when:'Every Tuesday after Maghrib'}}],archive:[{ar:'الصبر مفتاح الفرج',en:'Patience is the Key to Relief',date:'2026-09-05'},{ar:'حسن الظن بالله',en:'Having Good Faith in God',date:'2026-08-29'}]},
  {id:2,name:{ar:'مسجد النور',en:'Al Noor Mosque'},area:{ar:'الريان',en:'Al Rayyan'},lat:25.2919,lon:51.4244,fac:['women','accessibility','ac'],cap:'medium',sermon:{ar:'حسن الجوار وأثره في المجتمع',en:'Good Neighborliness and its Social Impact'},updated:'2026-09-08',lessons:[{ar:{t:'دورة في أحكام الزكاة', speaker:'الشيخ عبدالله الكواري', when:'كل خميس بعد العشاء'}, en:{t:'Course on Zakat Rulings', speaker:'Sheikh Abdullah Al-Kuwari', when:'Every Thursday after Isha'}}],archive:[{ar:'الأمانة في العمل',en:'Trustworthiness at Work',date:'2026-09-01'}]},
  {id:3,name:{ar:'مسجد السلام',en:'Al Salam Mosque'},area:{ar:'الوكرة',en:'Al Wakrah'},lat:25.1650,lon:51.6032,fac:['parking','toilets'],cap:'small',sermon:{ar:'آداب طلب العلم',en:'Etiquette of Seeking Knowledge'},updated:'2026-09-01',lessons:[],archive:[{ar:'فضل طلب العلم',en:'The Virtue of Seeking Knowledge',date:'2026-08-25'}]},
  {id:4,name:{ar:'مسجد الهداية',en:'Al Hidaya Mosque'},area:{ar:'الخور',en:'Al Khor'},lat:25.6809,lon:51.4972,fac:['women','parking','ac','accessibility'],cap:'large',sermon:{ar:'بر الوالدين',en:'Kindness to Parents'},updated:'2026-08-15',lessons:[{ar:{t:'تفسير جزء عمّ', speaker:'الشيخ سالم المري', when:'كل سبت بعد الفجر'}, en:{t:'Tafsir of Juz Amma', speaker:'Sheikh Salem Al-Marri', when:'Every Saturday after Fajr'}}],archive:[{ar:'رحمة الوالدين',en:'Compassion for Parents',date:'2026-08-08'},{ar:'صلة الأرحام',en:'Maintaining Family Ties',date:'2026-08-01'}]},
  {id:5,name:{ar:'مسجد التقوى',en:'Al Taqwa Mosque'},area:{ar:'الدوحة — الوست باي',en:'Doha — West Bay'},lat:25.3196,lon:51.5262,fac:['women','ac'],cap:'medium',sermon:{ar:'شكر النعم',en:'Gratitude for Blessings'},updated:'2026-09-14',lessons:[],archive:[{ar:'شكر النعمة',en:'Gratitude for Blessings',date:'2026-09-07'}]},
  {id:6,name:{ar:'مسجد الإيمان',en:'Al Iman Mosque'},area:{ar:'لوسيل',en:'Lusail'},lat:25.4100,lon:51.4900,fac:['women','parking','toilets','ac','accessibility'],cap:'large',sermon:{ar:'الوسطية في الإسلام',en:'Moderation in Islam'},updated:'2026-09-10',lessons:[{ar:{t:'السيرة النبوية دروس وعبر', speaker:'الشيخ خالد النعيمي', when:'كل اثنين بعد المغرب'}, en:{t:'Lessons from the Prophetic Biography', speaker:'Sheikh Khaled Al-Naimi', when:'Every Monday after Maghrib'}}],archive:[{ar:'الاعتدال في الدين',en:'Moderation in Faith',date:'2026-09-03'}]},
  {id:7,name:{ar:'مسجد الرحمة',en:'Al Rahma Mosque'},area:{ar:'الشمال',en:'Al Shamal'},lat:26.1200,lon:51.2100,fac:['parking','ac'],cap:'small',sermon:{ar:'حفظ اللسان',en:'Guarding the Tongue'},updated:'2026-08-28',lessons:[],archive:[{ar:'حفظ اللسان',en:'Guarding the Tongue',date:'2026-08-21'}]},
  {id:8,name:{ar:'مسجد الفتح',en:'Al Fath Mosque'},area:{ar:'أم صلال',en:'Umm Salal'},lat:25.4100,lon:51.4050,fac:['women','parking','toilets'],cap:'medium',sermon:{ar:'الإخلاص في العمل',en:'Sincerity in Work'},updated:'2026-09-05',lessons:[{ar:{t:'آداب المعاملة في الإسلام', speaker:'الشيخ حمد السليطي', when:'كل أربعاء بعد العصر'}, en:{t:'Etiquette of Conduct in Islam', speaker:'Sheikh Hamad Al-Sulaiti', when:'Every Wednesday after Asr'}}],archive:[{ar:'الإخلاص',en:'Sincerity',date:'2026-08-29'}]},
];
const FAC_LABELS={women:{ar:'مصلى نساء',en:'Women\'s prayer area'},parking:{ar:'مواقف سيارات',en:'Parking'},toilets:{ar:'دورات مياه',en:'Restrooms'},ac:{ar:'تكييف',en:'Air conditioning'},accessibility:{ar:'وصول ذوي الإعاقة',en:'Accessibility access'}};
const NOTIFS=[
  {ar:{t:'الصلاة القادمة العصر بعد 20 دقيقة',time:'اليوم'},en:{t:'Next prayer Asr in 20 minutes',time:'Today'}},
  {ar:{t:'🌙 الثلث الأخير يبدأ الليلة 02:41 ص',time:'اليوم'},en:{t:'🌙 Last third of night begins tonight 2:41 AM',time:'Today'}},
  {ar:{t:'تم تحديث بيانات مسجد الفردوس',time:'أمس'},en:{t:'Al Firdous Mosque info was updated',time:'Yesterday'}},
];

let userLoc={lat:25.2854,lon:51.5310};
let currentMosque=null, prevScreen='home';
let todayTimings=null, tomorrowTimings=null;
let favorites=JSON.parse(localStorage.getItem('wahy-favs')||'[]');

function toRad(d){return d*Math.PI/180;}
function haversine(lat1,lon1,lat2,lon2){const R=6371;const dLat=toRad(lat2-lat1),dLon=toRad(lon2-lon1);const a=Math.sin(dLat/2)**2+Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));}
function distanceLabel(m){const d=haversine(userLoc.lat,userLoc.lon,m.lat,m.lon);return d<1?Math.round(d*1000)+' '+t('m'):d.toFixed(1)+' '+t('km');}
function sortedMosques(){return [...MOSQUES].sort((a,b)=>haversine(userLoc.lat,userLoc.lon,a.lat,a.lon)-haversine(userLoc.lat,userLoc.lon,b.lat,b.lon));}

// ================= Navigation =================
function go(screen){
  document.querySelectorAll('.screen').forEach(s=>s.hidden=true);
  document.getElementById('screen-'+screen).hidden=false;
  document.querySelectorAll('nav.bottom-nav button').forEach(b=>b.classList.toggle('active', b.dataset.s===screen));
  prevScreen=screen;
  if(screen==='mosques') renderMosqueList();
  if(screen==='favorites') renderFavorites();
  if(screen==='content') renderContentList();
}
// ================= Hadith of the day (Sahih Bukhari / Sahih Muslim only) =================
// Curated list of verified hadith numbers (book + absolute number) — kept short and
// deliberately limited to the two most rigorously authenticated collections in Islam.
const HADITH_POOL=[
  {book:'bukhari',num:1,bookLabel:{ar:'صحيح البخاري',en:'Sahih al-Bukhari'}},
  {book:'bukhari',num:6,bookLabel:{ar:'صحيح البخاري',en:'Sahih al-Bukhari'}},
  {book:'muslim',num:1,bookLabel:{ar:'صحيح مسلم',en:'Sahih Muslim'}},
  {book:'bukhari',num:13,bookLabel:{ar:'صحيح البخاري',en:'Sahih al-Bukhari'}},
];
function loadHadithOfDay(){
  const pick=HADITH_POOL[Math.floor(Math.random()*HADITH_POOL.length)];
  const el=document.getElementById('hadith-body');
  el.innerHTML=`<div class="muted">…</div>`;
  const arEdition=pick.book==='bukhari'?'ara-bukhari':'ara-muslim';
  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${arEdition}/${pick.num}.json`)
    .then(r=>{ if(!r.ok) throw new Error('bad-response'); return r.json(); })
    .then(data=>{
      const h=data.hadiths[0];
      el.innerHTML=`
        <div style="font-size:15px;line-height:2;margin-bottom:8px;">${h.text}</div>
        <div class="pill">${pick.bookLabel[currentLang]} · ${t('hadithNo')} ${pick.num}</div>
        <button class="btn small" style="margin-top:8px;" onclick="loadHadithOfDay()">${t('anotherHadith')}</button>`;
    })
    .catch(()=>{
      el.innerHTML=`<div class="muted">${t('hadithFailed')}</div><button class="btn small" style="margin-top:8px;" onclick="loadHadithOfDay()">${t('retry')}</button>`;
    });
}
// ================= Azkar (osamayy/azkar-db, verified by direct fetch — category/zekr/description/count/reference) =================
let azkarCache=null, azkarTab='morning';
const AZKAR_CATS={morning:'أذكار الصباح', evening:'أذكار المساء'};
function openAzkar(){
  go('azkar');
  if(!azkarCache) loadAzkar();
}
function setAzkarTab(tab){
  azkarTab=tab;
  document.getElementById('tab-azkar-morning').classList.toggle('active', tab==='morning');
  document.getElementById('tab-azkar-evening').classList.toggle('active', tab==='evening');
  renderAzkar();
}
async function loadAzkar(){
  const errEl=document.getElementById('azkar-error');
  errEl.hidden=true;
  document.getElementById('azkar-list').innerHTML=`<div class="muted">…</div>`;
  try{
    const res=await fetch('https://cdn.jsdelivr.net/gh/osamayy/azkar-db@master/azkar.json');
    if(!res.ok) throw new Error('bad-response');
    const data=await res.json();
    azkarCache=data.rows; // each row: [category, zekr, description, count, reference, search]
    renderAzkar();
  }catch(e){
    document.getElementById('azkar-list').innerHTML='';
    document.getElementById('azkar-error-text').textContent=t('azkarFailed');
    errEl.hidden=false;
  }
}
function renderAzkar(){
  if(!azkarCache) return;
  const wantCat=AZKAR_CATS[azkarTab];
  const items=azkarCache.filter(r=>r[0]===wantCat);
  document.getElementById('azkar-list').innerHTML = items.map(r=>{
    const [,zekr,description,count,reference]=r;
    return `
    <div class="azkar-card">
      <div class="content">${zekr}</div>
      ${count ? `<div class="meta-row">🔁 ${t('repeatLabel')} ${count}</div>` : ''}
      ${description ? `<div class="fadl">${description}</div>` : ''}
      ${reference ? `<div class="source">${t('sourceLabel')}: ${reference}</div>` : ''}
    </div>`;
  }).join('') || `<div class="muted">${t('noAzkar')}</div>`;
}

let surahListCache=[], currentSurahNumber=null;
function openQuranList(){
  go('quran-list');
  if(!surahListCache.length) loadSurahList();
}
function hideQuranListError(){ document.getElementById('quran-list-error').hidden=true; }
function showQuranListError(){
  document.getElementById('quran-list-error-text').textContent=t('quranListFailed');
  document.getElementById('quran-list-error').hidden=false;
}
async function loadSurahList(){
  hideQuranListError();
  document.getElementById('quran-surah-list').innerHTML=`<div class="muted">…</div>`;
  try{
    const res=await fetch('https://api.alquran.cloud/v1/surah');
    if(!res.ok) throw new Error('bad-response');
    const data=await res.json();
    surahListCache=data.data;
    renderSurahList();
  }catch(e){
    document.getElementById('quran-surah-list').innerHTML='';
    showQuranListError();
  }
}
function renderSurahList(){
  const el=document.getElementById('quran-surah-list');
  el.innerHTML = surahListCache.map(s=>`
    <div class="surah-row" onclick="openSurah(${s.number})" role="button" tabindex="0">
      <div class="num">${s.number}</div>
      <div class="info">
        <div class="sname">${s.name}</div>
        <div class="smeta">${currentLang==='en' ? s.englishName+' — '+s.englishNameTranslation+' · ' : ''}${s.numberOfAyahs} ${t('ayahsLabel')} · ${revLabel(s.revelationType)}</div>
      </div>
      <div class="muted">›</div>
    </div>`).join('');
}
function revLabel(type){
  if(currentLang==='ar') return type==='Meccan' ? 'مكية' : 'مدنية';
  return type;
}
async function openSurah(number){
  currentSurahNumber=number;
  go('quran-read');
  const surahMeta=surahListCache.find(s=>s.number===number);
  document.getElementById('qr-surah-title').textContent = surahMeta ? `${surahMeta.number}. ${surahMeta.name}` : '—';
  document.getElementById('qr-surah-meta').textContent = surahMeta ? `${surahMeta.englishName} · ${surahMeta.numberOfAyahs} ${t('ayahsLabel')} · ${revLabel(surahMeta.revelationType)}` : '';
  document.getElementById('quran-read-retry').onclick=()=>openSurah(number);
  await loadSurahText(number);
}
async function loadSurahText(number){
  const errEl=document.getElementById('quran-read-error');
  errEl.hidden=true;
  document.getElementById('qr-ayat').innerHTML=`<div class="muted">…</div>`;
  try{
    const arRes=await fetch(`https://api.alquran.cloud/v1/surah/${number}/quran-uthmani`);
    if(!arRes.ok) throw new Error('bad-response');
    const arData=(await arRes.json()).data;
    let translationAyat=null;
    if(currentLang==='en'){
      try{
        const enRes=await fetch(`https://api.alquran.cloud/v1/surah/${number}/en.sahih`);
        if(enRes.ok) translationAyat=(await enRes.json()).data.ayahs;
      }catch(e2){ /* translation is a bonus; Arabic text still shown without it */ }
    }
    const el=document.getElementById('qr-ayat');
    el.innerHTML = arData.ayahs.map((a,i)=>`
      <span class="ayah">${a.text}</span><span class="ayah-num">${a.numberInSurah}</span>
      ${translationAyat ? `<span class="quran-translation">${translationAyat[i].text}</span>` : ''}
    `).join(' ');
  }catch(e){
    document.getElementById('qr-ayat').innerHTML='';
    document.getElementById('quran-read-error-text').textContent=t('quranReadFailed');
    errEl.hidden=false;
  }
}
function renderContentList(){
  const items=[];
  MOSQUES.forEach(m=>{ m.lessons.forEach(l=>items.push({mosque:m,lesson:l})); });
  const el=document.getElementById('content-list');
  if(!items.length){ el.innerHTML=`<div class="empty-state"><span class="ic">📖</span><div>${t('noLessons')}</div></div>`; return; }
  el.innerHTML = items.map(it=>`
    <div class="card">
      <div style="font-weight:700;font-size:14px;margin-bottom:2px;">${it.lesson[currentLang].t}</div>
      <div class="muted" style="font-size:12px;margin-bottom:6px;">${it.lesson[currentLang].speaker} · ${it.lesson[currentLang].when}</div>
      <div class="pill">${it.mosque.name[currentLang]}</div>
    </div>`).join('');
}
function goBack(){ go(prevScreen==='report'?'home':prevScreen); }
function scrollToQibla(){ setTimeout(()=>document.getElementById('qibla-card').scrollIntoView({behavior:'smooth'}),150); }

// ================= Notifications =================
function renderNotifs(){
  document.getElementById('notif-list').innerHTML = NOTIFS.map(n=>`<div class="notif-item"><div class="t">${n[currentLang].t}</div><div class="time">${n[currentLang].time}</div></div>`).join('');
}
function toggleNotif(){
  document.getElementById('notif-panel').classList.toggle('show');
  document.getElementById('notif-dot').style.display='none';
}

// ================= Favorites =================
function saveFavs(){ localStorage.setItem('wahy-favs', JSON.stringify(favorites)); }
function isFav(id){ return favorites.includes(id); }
function toggleFavorite(id, el){
  if(isFav(id)) favorites=favorites.filter(x=>x!==id); else favorites.push(id);
  saveFavs();
  document.querySelectorAll('.heart-btn').forEach(b=>{
    if(b.dataset.mid==id){ b.classList.toggle('active', isFav(id)); b.setAttribute('aria-pressed', isFav(id)); }
  });
  if(el){ el.classList.toggle('active', isFav(id)); el.setAttribute('aria-pressed', isFav(id)); }
  if(!document.getElementById('screen-favorites').hidden) renderFavorites();
}
function renderFavorites(){
  const items=MOSQUES.filter(m=>favorites.includes(m.id));
  const el=document.getElementById('fav-list');
  if(!items.length){
    el.innerHTML=`<div class="empty-state"><span class="ic">🤍</span><div>${t('noFav')}</div><div class="muted" style="margin-top:6px;">${t('noFavSub')}</div></div>`;
    return;
  }
  el.innerHTML = items.map(m=>mosqueCardHTML(m)).join('');
}

// ================= Mosques list =================
function mosqueCardHTML(m){
  const fav=isFav(m.id);
  return `<div class="card mosque-card pressable" onclick="openMosque(${m.id})">
    <button class="heart-btn ${fav?'active':''}" data-mid="${m.id}" onclick="event.stopPropagation();toggleFavorite(${m.id})">♥</button>
    <div class="mname">${m.name[currentLang]}</div>
    <div class="mmeta">${m.area[currentLang]} · 📍 ${distanceLabel(m)}</div>
    <div class="fac-list">${m.fac.slice(0,3).map(f=>`<span class="fac-chip">${FAC_LABELS[f][currentLang]}</span>`).join('')}</div>
  </div>`;
}
let leafletMap=null, mosqueMarkers=[], userMarker=null;
function setMosqueView(v){
  document.getElementById('tab-list').classList.toggle('active', v==='list');
  document.getElementById('tab-map').classList.toggle('active', v==='map');
  document.getElementById('mosque-list-view').hidden = v!=='list';
  document.getElementById('mosque-map-view').hidden = v!=='map';
  if(v==='map') initRealMap();
}
function initRealMap(){
  if(leafletMap){ setTimeout(()=>leafletMap.invalidateSize(),50); return; }
  leafletMap=L.map('real-map',{zoomControl:true}).setView([userLoc.lat,userLoc.lon],11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:18, attribution:'&copy; OpenStreetMap contributors'
  }).addTo(leafletMap);
  renderMapMarkers();
  setTimeout(()=>leafletMap.invalidateSize(),80);
}
function renderMapMarkers(){
  if(!leafletMap) return;
  mosqueMarkers.forEach(m=>leafletMap.removeLayer(m));
  mosqueMarkers=[];
  MOSQUES.forEach(m=>{
    const marker=L.marker([m.lat,m.lon]).addTo(leafletMap);
    const popupEl=document.createElement('div');
    popupEl.className='map-popup';
    popupEl.innerHTML=`<div class="mname">${m.name[currentLang]}</div><div class="muted">${m.area[currentLang]} · ${distanceLabel(m)}</div><button>${t('openPage')}</button>`;
    popupEl.querySelector('button').onclick=()=>{ leafletMap.closePopup(); openMosque(m.id); };
    marker.bindPopup(popupEl);
    mosqueMarkers.push(marker);
  });
  if(userMarker){ leafletMap.removeLayer(userMarker); }
  userMarker=L.circleMarker([userLoc.lat,userLoc.lon],{radius:7,color:'#0E3B36',fillColor:'#1C6158',fillOpacity:1}).addTo(leafletMap);
}
function renderMosqueList(){
  const q=(document.getElementById('mosque-search').value||'').trim();
  const list=sortedMosques().filter(m=>!q || m.name[currentLang].includes(q) || m.area[currentLang].includes(q) || m.name.ar.includes(q) || m.area.ar.includes(q));
  document.getElementById('mosque-list-view').innerHTML = list.map(mosqueCardHTML).join('') || `<div class="muted">${t('noResults')}</div>`;
}

// ================= Detail =================
function openMosque(id){
  currentMosque=MOSQUES.find(m=>m.id===id);
  document.getElementById('d-name').textContent=currentMosque.name[currentLang];
  document.getElementById('d-meta').textContent=currentMosque.area[currentLang]+' · '+distanceLabel(currentMosque);
  document.getElementById('d-updated').textContent=currentMosque.updated;
  document.getElementById('d-facilities').innerHTML=currentMosque.fac.map(f=>`<span class="fac-chip">${FAC_LABELS[f][currentLang]}</span>`).join('');
  document.getElementById('d-capacity').textContent='🪑 '+t('cap_'+currentMosque.cap);
  document.getElementById('d-sermon-title').textContent='«'+currentMosque.sermon[currentLang]+'»';
  document.getElementById('d-sermon-time').textContent=(currentLang==='ar'?'الجمعة — 12:15 م':'Friday — 12:15 PM');
  const lessonsEl=document.getElementById('d-lessons');
  lessonsEl.innerHTML = currentMosque.lessons.length
    ? currentMosque.lessons.map(l=>`<div style="padding:8px 0;border-bottom:1px solid var(--border);"><div style="font-weight:500;font-size:13px;">${l[currentLang].t}</div><div class="muted" style="font-size:12px;">${l[currentLang].speaker} · ${l[currentLang].when}</div></div>`).join('')
    : `<div class="muted">${t('noLessons')}</div>`;
  const archiveEl=document.getElementById('d-sermon-archive');
  archiveEl.innerHTML = currentMosque.archive.length
    ? currentMosque.archive.map(a=>`<div style="padding:6px 0;border-bottom:1px solid var(--border);font-size:13px;"><span>«${a[currentLang]}»</span> <span class="muted" style="font-size:11px;">— ${a.date}</span></div>`).join('')
    : `<div class="muted">${t('noArchive')}</div>`;
  const heart=document.getElementById('detail-heart');
  heart.dataset.mid=currentMosque.id;
  heart.classList.toggle('active', isFav(currentMosque.id));
  heart.setAttribute('aria-pressed', isFav(currentMosque.id));
  if(todayTimings) renderTimesTable('d-times', todayTimings);
  go('detail');
}
function openDirections(){ if(currentMosque) window.open(`https://www.google.com/maps/dir/?api=1&destination=${currentMosque.lat},${currentMosque.lon}`,'_blank'); }

// ================= Report =================
function openReport(mosque){
  document.getElementById('report-mosque-label').textContent = mosque ? (t('regarding')+': '+mosque.name[currentLang]) : t('generalReport');
  prevScreen = document.querySelector('.screen:not([hidden])').id.replace('screen-','');
  go('report');
}
function submitReport(){
  const id=Math.floor(10000+Math.random()*89999);
  showToast(t('reportReceived')+id);
  setTimeout(()=>go(currentMosque?'detail':'home'), 900);
}
function showToast(msg){ const el=document.getElementById('toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2600); }
function toggleSwitch(el){ el.classList.toggle('on'); }

// ================= Dark mode =================
function toggleDark(el){
  const isDark = document.documentElement.getAttribute('data-theme')==='dark';
  setTheme(!isDark);
}
function setTheme(dark){
  document.documentElement.setAttribute('data-theme', dark?'dark':'light');
  document.getElementById('dark-switch').classList.toggle('on', dark);
  localStorage.setItem('wahy-theme', dark?'dark':'light');
}

// ================= Language =================
function applyLanguage(lang){
  currentLang=lang;
  localStorage.setItem('wahy-lang', lang);
  document.documentElement.lang=lang;
  document.documentElement.dir = lang==='ar'?'rtl':'ltr';
  document.getElementById('lang-ar').classList.toggle('active', lang==='ar');
  document.getElementById('lang-en').classList.toggle('active', lang==='en');
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.placeholder=t(el.dataset.i18nPh); });
  document.getElementById('back-arrow').textContent = lang==='ar'?'→':'←';
  document.getElementById('back-arrow2').textContent = lang==='ar'?'→':'←';
  document.querySelectorAll('.qr-back').forEach(el=>{ el.textContent = lang==='ar'?'→':'←'; });
  renderNotifs();
  renderNearest();
  loadHadithOfDay();
  if(locationDenied) showLocationNote();
  if(!document.getElementById('screen-mosques').hidden){ renderMosqueList(); renderMapMarkers(); }
  if(!document.getElementById('screen-favorites').hidden) renderFavorites();
  if(!document.getElementById('screen-content').hidden) renderContentList();
  if(!document.getElementById('screen-quran-list').hidden && surahListCache.length) renderSurahList();
  if(!document.getElementById('screen-quran-read').hidden && currentSurahNumber) openSurah(currentSurahNumber);
  if(!document.getElementById('screen-azkar').hidden && azkarCache){
    renderAzkar();
  }
  if(currentMosque && !document.getElementById('screen-detail').hidden) openMosque(currentMosque.id);
  if(todayTimings){ renderTimesTable('p-times', todayTimings); updateNextPrayer(); }
}

// ================= Prayer times =================
function fmtTime(hhmm){ const [h,m]=hhmm.split(':').map(Number); const d=new Date(); d.setHours(h,m,0,0); return d.toLocaleTimeString(currentLang==='ar'?'ar-EG':'en-US',{hour:'2-digit',minute:'2-digit',hour12:true}); }
function renderTimesTable(elId,tm){
  const rows=[[t('fajr'),tm.Fajr],[t('sunrise'),tm.Sunrise],[t('dhuhr'),tm.Dhuhr],[t('asr'),tm.Asr],[t('maghrib'),tm.Maghrib],[t('isha'),tm.Isha]];
  document.getElementById(elId).innerHTML=rows.map(r=>`<tr><td>${r[0]}</td><td>${fmtTime(r[1])}</td></tr>`).join('');
}
function parseTimeToday(hhmm,offset){ const [h,m]=hhmm.split(':').map(Number); const d=new Date(); d.setDate(d.getDate()+(offset||0)); d.setHours(h,m,0,0); return d; }
function updateNextPrayer(){
  if(!todayTimings) return;
  const order=[[t('fajr'),todayTimings.Fajr],[t('dhuhr'),todayTimings.Dhuhr],[t('asr'),todayTimings.Asr],[t('maghrib'),todayTimings.Maghrib],[t('isha'),todayTimings.Isha]];
  const now=new Date(); let next=null;
  for(const [name,tm] of order){ const dt=parseTimeToday(tm,0); if(dt>now){ next=[name,dt]; break; } }
  if(!next) next=[t('fajr'), parseTimeToday(tomorrowTimings?tomorrowTimings.Fajr:todayTimings.Fajr,1)];
  const diffMs=next[1]-now; const hh=Math.floor(diffMs/3600000), mm=Math.floor((diffMs%3600000)/60000);
  const timeStr=next[1].toLocaleTimeString(currentLang==='ar'?'ar-EG':'en-US',{hour:'2-digit',minute:'2-digit',hour12:true});
  const cdStr=`${t('remaining')} ${hh>0?hh+' '+t('h')+' ':''}${mm} ${t('min')}`;
  document.getElementById('home-next-name').textContent=next[0];
  document.getElementById('home-next-time').textContent=timeStr;
  document.getElementById('home-countdown').textContent=cdStr;
  document.getElementById('p-next-name').textContent=next[0];
  document.getElementById('p-next-time').textContent=timeStr;
  document.getElementById('p-countdown').textContent=cdStr;
}
function computeNight(){
  if(!todayTimings||!tomorrowTimings) return;
  const maghrib=parseTimeToday(todayTimings.Maghrib,0);
  const fajrTomorrow=parseTimeToday(tomorrowTimings.Fajr,1);
  const durationMs=fajrTomorrow-maghrib;
  const midnight=new Date(maghrib.getTime()+durationMs/2);
  const thirdStart=new Date(maghrib.getTime()+durationMs*2/3);
  const opt={hour:'2-digit',minute:'2-digit',hour12:true};
  const loc=currentLang==='ar'?'ar-EG':'en-US';
  document.getElementById('p-midnight').textContent=midnight.toLocaleTimeString(loc,opt);
  document.getElementById('p-third-start').textContent=thirdStart.toLocaleTimeString(loc,opt);
  document.getElementById('p-third-end').textContent=fajrTomorrow.toLocaleTimeString(loc,opt);
}
function dateStr(offset){ const d=new Date(); d.setDate(d.getDate()+(offset||0)); const dd=String(d.getDate()).padStart(2,'0'),mm=String(d.getMonth()+1).padStart(2,'0'),yyyy=d.getFullYear(); return `${dd}-${mm}-${yyyy}`; }
function hidePrayerError(){ document.getElementById('prayer-error-banner').hidden=true; }
function showPrayerError(key){
  document.getElementById('prayer-error-text').textContent=t(key);
  document.getElementById('prayer-error-banner').hidden=false;
}
async function loadPrayerTimes(){
  hidePrayerError();
  try{
    const base='https://api.aladhan.com/v1/timings/';
    const [r1,r2]=await Promise.all([
      fetch(`${base}${dateStr(0)}?latitude=${userLoc.lat}&longitude=${userLoc.lon}&method=4`),
      fetch(`${base}${dateStr(1)}?latitude=${userLoc.lat}&longitude=${userLoc.lon}&method=4`)
    ]);
    if(!r1.ok || !r2.ok) throw new Error('bad-response');
    const j1=await r1.json(), j2=await r2.json();
    todayTimings=j1.data.timings; tomorrowTimings=j2.data.timings;
    localStorage.setItem('wahy-timings-cache', JSON.stringify({date:dateStr(0), today:todayTimings, tomorrow:tomorrowTimings}));
    renderTimesTable('p-times', todayTimings);
    if(currentMosque) renderTimesTable('d-times', todayTimings);
    updateNextPrayer(); computeNight();
    setInterval(updateNextPrayer,60000);
  }catch(e){
    const cachedRaw=localStorage.getItem('wahy-timings-cache');
    if(cachedRaw){
      try{
        const cached=JSON.parse(cachedRaw);
        todayTimings=cached.today; tomorrowTimings=cached.tomorrow;
        renderTimesTable('p-times', todayTimings);
        if(currentMosque) renderTimesTable('d-times', todayTimings);
        updateNextPrayer(); computeNight();
        showPrayerError('prayerFailedCached');
        return;
      }catch(e2){/* fall through */}
    }
    document.getElementById('p-times').innerHTML=`<tr><td colspan="2" class="muted">—</td></tr>`;
    showPrayerError('prayerFailedNoCache');
  }
}

// ================= Qibla =================
function computeQibla(){
  const kLat=toRad(21.4225), kLon=toRad(39.8262);
  const lat=toRad(userLoc.lat), lon=toRad(userLoc.lon);
  const dLon=kLon-lon;
  const y=Math.sin(dLon)*Math.cos(kLat);
  const x=Math.cos(lat)*Math.sin(kLat)-Math.sin(lat)*Math.cos(kLat)*Math.cos(dLon);
  let brng=Math.atan2(y,x)*180/Math.PI; brng=(brng+360)%360;
  document.getElementById('qibla-needle').style.transform=`translate(-50%,-100%) rotate(${brng}deg)`;
  document.getElementById('qibla-deg').textContent=`${Math.round(brng)}°`;
}

// ================= Home nearest =================
function renderNearest(){
  const m=sortedMosques()[0];
  document.getElementById('home-nearest-body').innerHTML=`
    <div class="mname">${m.name[currentLang]}</div>
    <div class="mmeta">📍 ${distanceLabel(m)} · ${m.area[currentLang]}</div>
    <button class="btn small" style="margin-top:8px;" onclick="openMosque(${m.id})">${t('openPage')}</button>`;
}

// ================= Init =================
let locationDenied=false;
function initLocationAndLoad(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      pos=>{ userLoc={lat:pos.coords.latitude, lon:pos.coords.longitude}; afterLocation(); },
      ()=>{ locationDenied=true; showLocationNote(); afterLocation(); }, {timeout:4000});
  } else { locationDenied=true; showLocationNote(); afterLocation(); }
}
function showLocationNote(){
  const el=document.getElementById('location-note');
  el.textContent=t('locDenied'); el.hidden=false;
}
function afterLocation(){
  renderNearest(); computeQibla(); loadPrayerTimes();
  if(leafletMap){ leafletMap.setView([userLoc.lat,userLoc.lon],11); renderMapMarkers(); }
}

(function init(){
  const savedTheme = localStorage.getItem('wahy-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
  setTheme(savedTheme==='dark');
  const savedLang = localStorage.getItem('wahy-lang') || 'ar';
  applyLanguage(savedLang);
  renderNotifs();
  loadHadithOfDay();
  initLocationAndLoad();
  setTimeout(()=>document.getElementById('splash').classList.add('hide'), 1600);
  document.getElementById('splash').addEventListener('click', ()=>document.getElementById('splash').classList.add('hide'));
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('./sw.js').catch(()=>{ /* offline support unavailable, app still works online */ });
    });
  }
})();
