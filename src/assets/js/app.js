const $=s=>document.querySelector(s);
const MS=['Januari','Februari','Mac','April','Mei','Jun','Julai','Ogos','September','Oktober','November','Disember'],HR=['Ahad','Isnin','Selasa','Rabu','Khamis','Jumaat','Sabtu'];
const AG={1:'PERUTUSAN PENGERUSI',2:'PENGESAHAN MINIT MESYUARAT',3:'PERKARA-PERKARA BERBANGKIT',5:'PEMBENTANGAN KERTAS',6:'HAL-HAL LAIN',7:'PENUTUP'};
const CATS={hadir:'Hadir',tidak:'Tidak Hadir Bersebab',turut:'Turut Hadir'};
const EN=new Set('the and of for with meeting online report update team task school teacher link form google zoom deadline feedback action item workshop training coaching mentoring briefing teams whatsapp softcopy hardcopy template checklist schedule timeline follow up sharing session slide slides email support project'.split(' '));
const DOC_CSS=`.imr{display:flex}.ims{position:relative;flex:none}.ims img{display:block;width:100%;height:100%}.page{width:210mm;height:297mm;background:#fff;color:#000;box-sizing:border-box;padding:25mm 25mm 25mm 30mm;position:relative;margin:0 auto 12px;box-shadow:0 2px 12px rgba(0,0,0,.3);font:12pt/1.25 Arial,Helvetica,sans-serif;text-align:justify;overflow:hidden}
.content{height:247mm}.pn{position:absolute;bottom:12mm;left:0;right:0;text-align:center;font-size:12pt}
.b{padding-bottom:3mm}.nb{padding-bottom:0}.ttl{text-align:center;font-weight:bold;padding-bottom:6mm}
.h{font-weight:bold;padding-top:3mm}.sh{font-weight:bold;padding-top:3mm}.h2{display:flex;margin-left:8mm;font-weight:bold;padding-top:3mm}.h2 .n{width:12mm;flex:none}.l2m{margin-left:34mm}.l2m,.l3m,.l4m,.l5m{text-align:right}.l4,.l5{display:flex}.l4{margin-left:34mm}.l4 .n{width:18mm;flex:none}.l5{margin-left:52mm}.l5 .n{width:22mm;flex:none}.l4i,.l4m{margin-left:52mm}.l5i,.l5m{margin-left:74mm}.sgw{padding-top:12mm}.sg{display:flex;gap:6mm;text-align:left}.sg>div{flex:1;min-width:0}.sp{height:22mm;border-bottom:.5pt solid #000;margin-bottom:2mm}.l3m{margin-left:20mm}.l1,.l2{display:flex}.l1{padding-bottom:1mm}
.l1 .n{width:10mm;flex:none}.l2{margin-left:20mm}.l2 .n{width:14mm;flex:none}.t{flex:1;text-align:justify}.mk{font-weight:bold;padding-bottom:0}.l3{display:flex;margin-left:8mm}.l3 .n{width:12mm;flex:none}.mt{width:45mm;flex:none;text-align:right;padding-left:4mm;box-sizing:border-box}.l2i{margin-left:34mm}.l3i{margin-left:20mm}
.tr{display:flex;border:.5pt solid #000;border-top:0;text-align:left}.tr.th{border-top:.5pt solid #000;font-weight:bold;text-align:center}.tr>span{padding:.8mm 2mm;box-sizing:border-box}.tr .c1{width:14mm;flex:none;text-align:center;border-right:.5pt solid #000}.tr .c2{flex:1;border-right:.5pt solid #000}.tr .c3{width:55mm;flex:none}.tr.last{margin-bottom:3mm}`;
const st=document.createElement('style');st.textContent=DOC_CSS;document.head.appendChild(st);
const COL2={hadir:'Jawatan',tidak:'Sebab',turut:'Jawatan'};let AT='hadir';const SIG=['Disediakan oleh,','Disemak oleh,','Disahkan oleh,'];const newD=()=>({v:2,t:'',mt:'',m:'',im:[]});const blank=()=>({nama:'',bil:'',tahun:String(new Date().getFullYear()),tarikh:'',masa:'',tempat:'',att:{hadir:[],tidak:[],turut:[]},a:{1:{t:'',d:[]},2:{t:'',d:[]},3:{t:'',d:[]},5:{t:'',d:[]},6:{t:'',d:[]},7:{t:'',d:[]}},items:[{t:'',d:[newD()],k:''}],sig:[{n:'',j:''},{n:'',j:''},{n:'',j:''}],sek:''});
let S;const pend={};
function norm(x){x=Object.assign(blank(),x||{});x.att=Object.assign({hadir:[],tidak:[],turut:[]},x.att);for(const k in CATS)x.att[k]=x.att[k].map(v=>typeof v==='string'?{n:v,j:''}:v);
 const mg=v=>{v=typeof v==='string'?{t:v,m:'',mt:'',im:[],v:2}:v;if(!v.v){if(!(v.m||'').trim())v.mt='';v.v=2}v.m=v.m||'';v.mt=v.mt||'';v.im=(v.im||[]).map(m=>({mt:'',m:'',...m}));v.c=(v.c||[]).map(mg);return v};x.a=x.a||{};
 for(const n of [1,2,3,5,6,7]){let v=x.a[n];v=typeof v==='string'?{t:v,d:[]}:(v||{t:'',d:[]});v.d=(v.d||[]).map(mg);x.a[n]=v}
 x.items=x.items&&x.items.length?x.items:blank().items;x.items.forEach(it=>{it.d=(it.d&&it.d.length?it.d:[newD()]).map(mg);if(it.k&&it.k.trim()){const d=it.d[it.d.length-1];d.m=d.m?d.m+'\n'+it.k:it.k}it.k=''});
 x.sig=x.sig&&x.sig.length==3?x.sig:blank().sig;x.sek=x.sek||'';dets(x).forEach(d=>d.im.forEach(m=>{if(!m.id)m.id=newId().replace(/-/g,'')}));return x}
function dets(st){const o=[],w=a=>a.forEach(d=>{o.push(d);w(d.c||[])});[1,2,3,5,6,7].forEach(n=>w(st.a[n].d));st.items.forEach(it=>w(it.d));return o}
S=norm(null);const dirty=()=>JSON.stringify(S)!==JSON.stringify(norm(null));
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function auto(s){return s.split(/(\s+)/).map(w=>!/^\s*$/.test(w)&&EN.has(w.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g,'').toLowerCase())?'<i>'+w+'</i>':w).join('')}
function fmt(t){return esc(t).replace(/\*([^*\n]+)\*/g,'<i>$1</i>').split(/(<i>.*?<\/i>)/).map(s=>s.startsWith('<i>')?s:auto(s)).join('')}
const cleanName=s=>String(s).replace(/^\s*\d+\s*[.)\-]\s*/,'').replace(/\s+/g,' ').trim();
const hasL=s=>/[A-Za-z\u00C0-\u024F]/.test(s);
function parseNames(t){return t.split(/\r?\n/).map(l=>{const c=l.split(/\t|\|/).map(cleanName);const i=c.findIndex(x=>hasL(x)&&x.length>1);if(i<0)return null;return{n:c[i],j:c.slice(i+1).find(x=>hasL(x))||''}}).filter(Boolean)}
/* ---- editor ---- */
function build(){
 const ag=n=>`<div class="card"><h3>${n}.0 ${AG[n]}</h3><div id="ag_${n}"></div></div>`;
 const cat=k=>`<div class="cat" id="cat_${k}"><textarea id="p_${k}" rows="3" placeholder="Tampal senarai nama di sini (boleh 2 lajur: Nama, ${COL2[k]})" onpaste="setTimeout(()=>addPaste('${k}'),0)"></textarea>
 <div class="row"><button onclick="addPaste('${k}')">Tambah dari tampalan</button><label class="btn" style="margin:0;color:var(--tx);font-size:13px">📎 Upload Excel<input type="file" accept=".xlsx,.xls" hidden onchange="upl('${k}',this)"></label><button onclick="addOne('${k}')">+ Tambah Nama</button></div><div id="af_${k}"></div><div id="rv_${k}"></div><ol class="names" id="ls_${k}"></ol></div>`;
 $('#left').innerHTML=`<div class="row"><button onclick="allOp(true)">Buka semua</button><button onclick="allOp(false)">Tutup semua</button><button id="clrb" onclick="clr()">🧹 Kosongkan</button><button class="mo" onclick="pv()">👁 Pratonton</button></div><div class="card"><h3>MAKLUMAT MESYUARAT</h3>
 <label>Nama mesyuarat</label><input data-k="nama" placeholder="cth: Panitia Bahasa Melayu">
 <label>Bilangan mesyuarat</label><div class="bil"><b>Bil.</b><input data-k="bil" placeholder="1" inputmode="numeric"><b>Tahun</b><input data-k="tahun" placeholder="2026" inputmode="numeric"></div>
 <label>Tarikh <span id="hari"></span></label><input type="date" data-k="tarikh">
 <label>Masa</label><input data-k="masa" placeholder="cth: 2.30 petang"><label>Tempat</label><input data-k="tempat" placeholder="cth: Bilik Mesyuarat"></div>
 <div class="card"><h3>SENARAI KEHADIRAN</h3><div class="tabs">${Object.keys(CATS).map(k=>`<button class="tb" id="tb_${k}" onclick="attTab('${k}')">${CATS[k]} <small id="n_${k}"></small></button>`).join('')}</div>${Object.keys(CATS).map(cat).join('')}</div>
 ${ag(1)}${ag(2)}${ag(3)}<div class="card"><h3>4.0 PERBINCANGAN</h3><div id="disc"></div></div>${ag(5)}${ag(6)}${ag(7)}<div class="card"><h3>TANDATANGAN</h3>${SIG.map((l,i)=>`<label><b>${l}</b></label><input placeholder="Nama guru" value="${esc(S.sig[i].n)}" oninput="S.sig[${i}].n=this.value;upd()"><input style="margin-top:4px" placeholder="Jawatan" value="${esc(S.sig[i].j)}" oninput="S.sig[${i}].j=this.value;upd()">`).join('')}<label><b>Nama sekolah</b></label><input placeholder="cth: SK Taman Contoh" value="${esc(S.sek)}" oninput="S.sek=this.value;upd()"></div>`;
 fold();
 document.querySelectorAll('[data-k]').forEach(e=>{e.value=S[e.dataset.k];e.oninput=()=>{S[e.dataset.k]=e.value;upd()}});
 [1,2,3,5,6,7].forEach(renderAg);
 renderAtt();renderDisc();attTab(AT);
}
let OP={};try{OP=JSON.parse(localStorage.getItem('mm1o'))||{}}catch(e){}
function sv(){try{localStorage.setItem('mm1o',JSON.stringify(OP))}catch(e){}}
function fold(){document.querySelectorAll('#left .card').forEach((c,ix)=>{const h=c.querySelector('h3'),k=h.textContent.trim(),b=document.createElement('div');c.dataset.k=k;b.className='cb';while(h.nextSibling)b.appendChild(h.nextSibling);c.appendChild(b);h.className='ch';h.innerHTML='<span class="ar">▸</span>'+h.innerHTML;if(OP[k]===undefined)OP[k]=ix===0;c.classList.toggle('open',OP[k]);h.onclick=()=>{OP[k]=!c.classList.contains('open');c.classList.toggle('open',OP[k]);sv()}})}
function allOp(v){document.querySelectorAll('#left .card').forEach(c=>{OP[c.dataset.k]=v;c.classList.toggle('open',v)});sv()}
function attTab(k){AT=k;for(const c in CATS){$('#cat_'+c).style.display=c===k?'block':'none';$('#tb_'+c).classList.toggle('on',c===k)}}
function renderAtt(){for(const k in CATS){const a=S.att[k];$('#n_'+k).textContent=a.length?'('+a.length+')':'';
 $('#ls_'+k).innerHTML=a.map((n,i)=>`<li><span>${esc(n.n)}${n.j?' <em style="color:var(--mu)">— '+esc(n.j)+'</em>':''}</span><span><button onclick="edN('${k}',${i})">Edit</button> <button onclick="dlN('${k}',${i})">Padam</button></span></li>`).join('')}}
function addPaste(k){const t=$('#p_'+k);const n=parseNames(t.value);if(!n.length)return;S.att[k].push(...n);t.value='';renderAtt();upd()}
function form(k,i){const o=i>=0?S.att[k][i]:{n:'',j:''};$('#af_'+k).innerHTML=`<div class="rv"><label>Nama</label><input id="fn_${k}" value="${esc(o.n)}"><label>${COL2[k]}</label><input id="fj_${k}" value="${esc(o.j)}" onkeydown="if(event.key==='Enter')saveF('${k}',${i})"><div class="row"><button class="pri" onclick="saveF('${k}',${i})">Simpan</button><button onclick="$('#af_${k}').innerHTML=''">Batal</button></div></div>`;$('#fn_'+k).focus()}
function saveF(k,i){const n=cleanName($('#fn_'+k).value);if(!n)return;const j=cleanName($('#fj_'+k).value);if(i>=0)S.att[k][i]={n,j};else S.att[k].push({n,j});$('#af_'+k).innerHTML='';renderAtt();upd()}
function addOne(k){form(k,-1)}
function edN(k,i){form(k,i)}
function dlN(k,i){S.att[k].splice(i,1);renderAtt();upd()}
/* ---- excel ---- */
function bestCol(r){let nc=Math.max(...r.map(x=>x.length),0),best=0,bs=-1;for(let c=0;c<nc;c++){let s=0;if(/nama|name/i.test(String(r[0]?.[c]||'')))s+=1e6;r.forEach(x=>{const v=String(x[c]??'');if(hasL(v)&&v.length>=3&&!/^(bil|no\.?|jawatan|kelas|subjek|jantina|kp|telefon)$/i.test(v.trim()))s++});if(s>bs){bs=s;best=c}}return best}
function jobCol(r,k,nc){const re=k==='tidak'?/sebab|alasan|reason/i:/jawatan|position|jabatan/i,h=(r[0]||[]).findIndex(v=>re.test(String(v)));if(h>=0)return h;const c=nc+1,st=/^\s*(nama|name|bil|no)\b/i.test(String(r[0]?.[nc]??''))?1:0;return r.slice(st).some(y=>hasL(String(y[c]??'')))?c:-1}
function colNames(r,c,jc){const st=/^\s*(nama|name|bil|no)\b/i.test(String(r[0]?.[c]??''))?1:0;return r.slice(st).map(y=>({n:cleanName(y[c]??''),j:jc>=0?cleanName(y[jc]??''):''})).filter(v=>hasL(v.n)&&v.n.length>1)}
function upl(k,inp){const f=inp.files[0];if(!f)return;if(!window.XLSX){$('#rv_'+k).innerHTML='<div class="rv">Pustaka Excel tidak dapat dimuatkan.</div>';return}
 const r=new FileReader();r.onload=e=>{try{const wb=XLSX.read(e.target.result,{type:'array'});const rows=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{header:1,defval:''});const col=bestCol(rows);pend[k]={rows,col,jc:jobCol(rows,k,col)};chCol(k)}catch(x){$('#rv_'+k).innerHTML='<div class="rv">Fail Excel tidak dapat dibaca.</div>'}inp.value=''};r.readAsArrayBuffer(f)}
function chCol(k,c,jc){const p=pend[k];if(c!=null)p.col=+c;if(jc!=null)p.jc=+jc;p.names=colNames(p.rows,p.col,p.jc);p.sel=p.names.map(()=>true);const nc=Math.max(...p.rows.map(x=>x.length),1);
 const opt=(v,none)=>(none?`<option value="-1"${v<0?' selected':''}>— tiada —</option>`:'')+Array.from({length:nc},(_,i)=>`<option value="${i}"${i==v?' selected':''}>Lajur ${i+1}${p.rows[0]&&p.rows[0][i]?' – '+esc(String(p.rows[0][i]).slice(0,25)):''}</option>`).join('');
 $('#rv_'+k).innerHTML=`<div class="rv"><b>✓ ${p.names.length} nama berjaya diekstrak</b><label>Lajur nama</label><select onchange="chCol('${k}',this.value)">${opt(p.col,0)}</select>
 <label>Lajur ${k==='tidak'?'sebab':'jawatan'}</label><select onchange="chCol('${k}',null,this.value)">${opt(p.jc,1)}</select>
 <div class="pv">${p.names.map((n,i)=>`<label><input type="checkbox" checked onchange="pend['${k}'].sel[${i}]=this.checked"> ${esc(n.n)}${n.j?' — '+esc(n.j):''}</label>`).join('')}</div>
 <button class="pri" onclick="useX('${k}')">Guna Senarai Dipilih</button> <button onclick="delete pend['${k}'];$('#rv_${k}').innerHTML=''">Batal</button></div>`}
function useX(k){const p=pend[k];S.att[k].push(...p.names.filter((_,i)=>p.sel[i]));delete pend[k];$('#rv_'+k).innerHTML='';renderAtt();upd()}
/* ---- agenda 1-7 ---- */
function DT(k,i,p){let a=k==='a'?S.a[i].d:S.items[i].d,d;for(const x of p){d=a[x];a=d.c||(d.c=[])}return d}
function DA(k,i,p){let a=k==='a'?S.a[i].d:S.items[i].d;for(const x of p.slice(0,-1))a=a[x].c;return a}
function rr(k,i){k==='a'?renderAg(i):renderDisc()}
const stH=(ex,o,k,i)=>`<select onchange="${ex}.mt=this.value;rr('${k}',${i});upd()"><option value=""${!o.mt?' selected':''}>Tiada status</option><option${o.mt=='Makluman'?' selected':''}>Makluman</option><option${o.mt=='Tindakan'?' selected':''}>Tindakan</option></select>${o.mt=='Tindakan'?`<input placeholder="Isi tindakan" value="${esc(o.m)}" oninput="${ex}.m=this.value;upd()">`:''}`;
function detHtml(k,i,p,lb){const d=DT(k,i,p),a=`'${k}',${i},[${p}]`,deep=k==='i'&&p.length<3;
 return `<div class="dt2"><div class="dt"><b>${lb}</b><textarea rows="2" placeholder="Perincian" oninput="DT(${a}).t=this.value;upd()">${esc(d.t)}</textarea><button onclick="delD(${a})">✕</button></div>
 <div class="sub">${stH(`DT(${a})`,d,k,i)}<label class="btn">📷 Gambar<input type="file" accept="image/*" multiple hidden onchange="addImg(${a},this)"></label>${deep?`<button onclick="addSub(${a})">+ Sub-perincian</button>`:''}</div>
 ${d.im.length?`<div class="thumbs">${d.im.map((m,q)=>`<div class="th"><span><img src="${m.s}"><button onclick="delImg(${a},${q})">✕</button></span>${stH(`DT(${a}).im[${q}]`,m,k,i)}</div>`).join('')}</div>`:''}
 ${(d.c||[]).length?`<div class="kids">${d.c.map((x,q)=>detHtml(k,i,[...p,q],lb+'.'+(q+1))).join('')}<button onclick="addSub(${a})">+ Tambah ${lb}.${d.c.length+1}</button></div>`:''}</div>`}
function addImg(k,i,p,inp){[...inp.files].forEach(f=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const q=Math.min(1,1000/Math.max(im.width,im.height)),w=Math.round(im.width*q),h=Math.round(im.height*q),c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,w,h);x.drawImage(im,0,0,w,h);DT(k,i,p).im.push({id:newId().replace(/-/g,''),s:c.toDataURL('image/jpeg',.8),w,h,mt:'',m:''});rr(k,i);upd()};im.src=r.result};r.readAsDataURL(f)});inp.value=''}
function delImg(k,i,p,q){DT(k,i,p).im.splice(q,1);rr(k,i);upd()}
function addSub(k,i,p){const d=DT(k,i,p);(d.c=d.c||[]).push(newD());rr(k,i);upd()}
function delD(k,i,p){const a=DA(k,i,p),j=p[p.length-1];if(p.length==1&&k==='i'&&a.length==1)a[0]=newD();else a.splice(j,1);rr(k,i);upd()}
function renderAg(n){const A=S.a[n];$('#ag_'+n).innerHTML=(A.d.length?A.d.map((d,j)=>detHtml('a',n,[j],`${n}.${j+1}`)).join(''):`<textarea rows="3" placeholder="Taip terus di sini (tanpa nombor). Guna *teks* untuk huruf condong." oninput="S.a[${n}].t=this.value;upd()">${esc(A.t)}</textarea>`)+`<div class="row"><button onclick="addAg(${n})">+ Tambah Perincian</button></div>`}
function addAg(n){const A=S.a[n];if(!A.d.length&&A.t.trim()){A.d=[{...newD(),t:A.t.trim()}];A.t=''}A.d.push(newD());renderAg(n);upd()}
/* ---- perbincangan ---- */
function renderDisc(){$('#disc').innerHTML=S.items.map((it,i)=>`<div class="item"><div class="hd"><b>4.${i+1}</b><input placeholder="Tajuk perkara" value="${esc(it.t)}" oninput="S.items[${i}].t=this.value;upd()"><button onclick="delItem(${i})">Padam</button></div>${it.d.map((d,j)=>detHtml('i',i,[j],`4.${i+1}.${j+1}`)).join('')}<button onclick="S.items[${i}].d.push(newD());renderDisc();upd()">+ Tambah Perincian</button></div>`).join('')+`<button class="pri" onclick="S.items.push({t:'',d:[newD()],k:''});renderDisc();upd()">+ Tambah Perkara</button>`}
function delItem(i){if(S.items.length>1)S.items.splice(i,1);else S.items=[{t:'',d:[newD()],k:''}];renderDisc();upd()}
/* ---- dokumen ---- */
function tarikh(){if(!S.tarikh)return['……………',''];const[y,m,d]=S.tarikh.split('-').map(Number);const h=HR[new Date(y,m-1,d).getDay()];return[`${d} ${MS[m-1]} ${y} (${h})`,h]}
function blocks(){const B=[],p=(html,keep,cls)=>B.push({html,keep,cls});const dot='……………';
 p(`MINIT MESYUARAT ${esc(S.nama.toUpperCase())||'[NAMA MESYUARAT]'}<br>BIL. ${esc(S.bil)||'…'}/${esc(S.tahun)||'…'}`,1,'ttl');
 p(`<b>Tarikh:</b> ${tarikh()[0]}`,1,'nb');p(`<b>Masa:</b> ${esc(S.masa)||dot}`,1,'nb');p(`<b>Tempat:</b> ${esc(S.tempat)||dot}`,0,'');
 p('SENARAI KEHADIRAN',1,'h');

 for(const k in CATS){const a=S.att[k];if(!a.length)continue;p(CATS[k]+':',1,'nb sh');p(`<span class="c1">Bil.</span><span class="c2">Nama</span><span class="c3">${COL2[k]}</span>`,1,'tr th nb');a.forEach((n,i)=>p(`<span class="c1">${i+1}</span><span class="c2">${fmt(n.n)}</span><span class="c3">${fmt(n.j)}</span>`,0,'tr nb'));B[B.length-1].cls+=' last'}
 const LC=['l2','l4','l5'],MW={l3:110,l2:110,l4:100,l5:80};
 const row=(num,d)=>`<span class="n">${num}</span><span class="t">${fmt(d.t).replace(/\n/g,'<br>')}</span>`;
 const stat=(o,c)=>{if(o.mt==='Makluman')p('<b>Makluman</b>',0,c);else if(o.mt==='Tindakan')p(`<b>Tindakan${o.m.trim()?':':''}</b> ${fmt(o.m).replace(/\n/g,' ')}`,0,c)};
 const det=(num,d,c,lv)=>{p(row(num,d),d.im.length>0||!!d.mt,c);stat(d,c+'m');d.im.forEach(m=>{p(imgHtml(m,c),!!m.mt,c+'i');stat(m,c+'m')});(d.c||[]).forEach((x,k)=>det(`${num}.${k+1}`,x,LC[lv+1]||'l5',lv+1))};
 const ag=n=>{p(`${n}.0 ${AG[n]}`,1,'h');const A=S.a[n];A.t.split(/\n+/).filter(x=>x.trim()).forEach(x=>p(fmt(x),0,''));A.d.forEach((d,j)=>det(`${n}.${j+1}`,d,'l3',9))};
 ag(1);ag(2);ag(3);p('4.0 PERBINCANGAN',1,'h');
 S.items.forEach((it,i)=>{const n=i+1;p(`<span class="n">4.${n}</span><span class="t">${fmt(it.t)||'……'}</span>`,1,'h2');it.d.forEach((d,j)=>det(`4.${n}.${j+1}`,d,'l2',0))});
 ag(5);ag(6);ag(7);
 p(`<div class="sg">${SIG.map((l,i)=>`<div><div>${l}</div><div class="sp"></div><div>${esc(S.sig[i].n.toUpperCase())||'&nbsp;'}</div><div>${fmt(S.sig[i].j)||'&nbsp;'}</div><div>${fmt(S.sek)||'&nbsp;'}</div></div>`).join('')}</div>`,0,'sgw');return B}
function render(){const P=$('#pages');P.style.zoom=1;P.innerHTML='';const pages=[];
 const mk=()=>{const pg=document.createElement('div');pg.className='page';pg.innerHTML='<div class="content"></div><div class="pn"></div>';P.appendChild(pg);const o={pg,c:pg.firstChild,items:[]};pages.push(o);return o};
 let cur=mk();
 for(const b of blocks()){const el=document.createElement('div');el.className='b '+(b.cls||'');el.innerHTML=b.html;b.el=el;cur.items.push(b);cur.c.appendChild(el);
  if(cur.c.scrollHeight>cur.c.clientHeight+1&&cur.items.length>1){const mv=[cur.items.pop()];while(cur.items.length>1&&cur.items[cur.items.length-1].keep)mv.unshift(cur.items.pop());
   cur=mk();mv.forEach(m=>{cur.items.push(m);cur.c.appendChild(m.el)})}}
 pages.forEach((p,i)=>p.pg.lastChild.textContent=i+1);fit();applySel()}
function fit(){$('#pages').style.zoom=Math.min(1,($('#right').clientWidth-24)/794)}
let tm,tsv=0,LOAD=1;function upd(){$('#hari').textContent=tarikh()[1]?'('+tarikh()[1]+')':'';clearTimeout(tm);tm=setTimeout(render,120);if(LOAD||RO)return;setSt('Belum disimpan','no');clearTimeout(tsv);tsv=setTimeout(persist,1500)}
function pv(){$('#right').scrollIntoView({behavior:'smooth'});$('#right').scrollTop=0}
let ck=0;function clr(){if(RO)return;const b=$('#clrb');if(!ck){ck=1;b.textContent='⚠ Sahkan padam?';setTimeout(()=>{ck=0;b.textContent='🧹 Kosongkan'},4000);return}ck=0;b.textContent='🧹 Kosongkan';S=blank();for(const k in pend)delete pend[k];build();upd()}
function cetak(){SEL=null;render();setTimeout(()=>window.print(),150)}
/* ---- simpanan dokumen ---- */
let DB=null,CUR=null,NCB=null,GN=null,dk=null;
const newId=()=>(window.crypto&&crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2,9));
function dbInit(){return new Promise(r=>{try{const q=indexedDB.open('minit',1);q.onupgradeneeded=()=>q.result.createObjectStore('docs',{keyPath:'id'});q.onsuccess=()=>{DB=q.result;r(1)};q.onerror=q.onblocked=()=>r(0)}catch(e){r(0)}})}
const tx=(m,f)=>new Promise((res,rej)=>{const t=DB.transaction('docs',m),q=f(t.objectStore('docs'));t.oncomplete=()=>res(q.result);t.onerror=t.onabort=()=>rej(t.error)});
const lsK=id=>'mmd:'+id;
const dbGet=async id=>DB?(await tx('readonly',s=>s.get(id)))||null:JSON.parse(localStorage.getItem(lsK(id))||'null');
const dbPut=async r=>DB?tx('readwrite',s=>s.put(r)):localStorage.setItem(lsK(r.id),JSON.stringify(r));
const dbDel=async id=>DB?tx('readwrite',s=>s.delete(id)):localStorage.removeItem(lsK(id));
const dbAll=async()=>DB?tx('readonly',s=>s.getAll()):Object.keys(localStorage).filter(k=>k.startsWith('mmd:')).map(k=>JSON.parse(localStorage.getItem(k)));
const setLast=id=>{try{localStorage.setItem('mm1last',id||'')}catch(e){}};
function setSt(t,c){const e=$('#ss');e.textContent=t;e.className=c||''}
function setDn(){$('#dn').textContent=CUR?'📄 '+CUR.name:'Dokumen baharu (belum dinamakan)'}
async function persist(){clearTimeout(tsv);tsv=0;if(RO&&CUR)return;
 if(!CUR&&!dirty()){try{await dbDel('__scratch')}catch(e){}setSt('');return}
 setSt('Menyimpan...');const snap=JSON.parse(JSON.stringify(S)),now=Date.now();
 const rec=CUR?{id:CUR.id,name:CUR.name,created:CUR.created,updated:now,meta:{bil:S.bil,tahun:S.tahun,tarikh:S.tarikh},state:snap}:{id:'__scratch',updated:now,state:snap};
 if(CUR){const o=await dbGet(CUR.id).catch(()=>null);if(o&&o.cloudAt)rec.cloudAt=o.cloudAt}
 try{await dbPut(rec);setSt(CUR?'✓ Semua perubahan telah disimpan':'Draf sementara disimpan (belum dinamakan)','ok');if(CUR)cPushSoon()}catch(e){setSt('Gagal menyimpan','no')}}
async function flush(){if(tsv)await persist()}
function modal(h){let m=$('#md');if(!m){m=document.createElement('div');m.id='md';document.body.appendChild(m)}m.innerHTML='<div class="mdb">'+h+'</div>';m.style.display='flex'}
function unmodal(){$('#md').style.display='none'}
function askName(t,def,cb){NCB=cb;modal(`<h3 style="margin:0 0 8px">${t}</h3><label>Nama dokumen</label><input id="nm" value="${esc(def)}" onkeydown="if(event.key==='Enter')nameOk()"><div class="row"><button class="pri" onclick="nameOk()">Simpan</button><button onclick="unmodal()">Batal</button></div>`);$('#nm').focus();$('#nm').select()}
function nameOk(){const n=$('#nm').value.trim();if(!n){$('#nm').focus();return}unmodal();const f=NCB;NCB=null;f&&f(n)}
const sugg=()=>('Minit Mesyuarat '+S.nama+' Bil. '+(S.bil||'…')+'/'+S.tahun).replace(/\s+/g,' ').trim();
async function createDoc(n){CUR={id:newId(),name:n,created:Date.now()};setDn();await persist();try{await dbDel('__scratch')}catch(e){}setLast(CUR.id);
 if(CL&&CL.canW){try{const r=await dbGet(CUR.id);await pushRec(r);LKM=await takeLock(CUR.id);RO=LKM==='ro';applyRO();if(LKM==='edit')startHB();CS('☁ Dikongsi ✓','ok')}catch(e){LKM='local';CS('☁ Gagal menyegerak','no')}}else LKM='local'}
function saveDraft(){if(RO)return;if(CUR){persist();return}askName('Simpan Draf — beri nama dokumen',sugg(),createDoc)}
function ren(){if(RO)return;askName(CUR?'Tukar nama dokumen':'Simpan Draf — beri nama dokumen',CUR?CUR.name:sugg(),n=>{if(CUR){CUR.name=n;setDn();persist()}else createDoc(n)})}
function guard(next){if(!CUR&&dirty()){GN=next;modal(`<h3 style="margin:0 0 8px">Draf belum dinamakan</h3><p>Draf semasa belum disimpan dengan nama. Apa yang anda mahu buat?</p><div class="row"><button class="pri" onclick="gSave()">Simpan dengan nama</button><button onclick="gDrop()">Buang draf</button><button onclick="unmodal()">Batal</button></div>`)}else next()}
function gSave(){unmodal();askName('Simpan Draf — beri nama dokumen',sugg(),async n=>{await createDoc(n);const f=GN;GN=null;f&&f()})}
function gDrop(){unmodal();dbDel('__scratch').catch(()=>{}).then(()=>{const f=GN;GN=null;f&&f()})}
function resetUI(){for(const k in pend)delete pend[k];LOAD=1;build();setDn();upd();LOAD=0;setSt('');applyRO();showEd()}
function baru(){guard(async()=>{await flush();await releaseCur();CUR=null;RO=false;LKM='none';S=norm(null);try{await dbDel('__scratch')}catch(e){}setLast('');resetUI()})}
async function enter(id){let r=await dbGet(id);const c=CL&&CL.list.get(id);if(c&&(!r||c.updated>r.updated)){try{r=await pullRec(id,c)}catch(e){CS('☁ Gagal memuat turun dokumen','no')}}
 if(!r)return;const m=await takeLock(id);S=norm(r.state);CUR={id:r.id,name:r.name,created:r.created};setLast(id);RO=m==='ro';LKM=m;
 roMsg=CL&&!CL.canW?'Anda hanya boleh melihat dokumen ini (tiada kebenaran edit).':'Dokumen ini sedang diedit oleh pengguna lain. Anda dalam mod baca sahaja dan boleh mengedit apabila pengguna itu selesai.';
 resetUI();
 if(m==='edit'){startHB();setSt('✓ Semua perubahan telah disimpan','ok');if(r.updated>(r.cloudAt||0))cPushSoon()}else if(m==='ro'){setSt('👁 Mod baca sahaja','no');if(CL&&CL.canW)startPoll()}else setSt('✓ Semua perubahan telah disimpan','ok')}
function openDoc(id){guard(async()=>{await flush();if(CUR&&CUR.id===id&&(LKM==='edit'||LKM==='local')){showEd();return}await releaseCur();await enter(id)})}
async function showLib(){await flush();await releaseCur();document.body.classList.add('lib');renderLib()}
function showEd(){document.body.classList.remove('lib');render()}
function ago(t){const d=new Date(t),n=new Date(),p=x=>String(x).padStart(2,'0'),hm=p(d.getHours())+':'+p(d.getMinutes()),dd=x=>new Date(x.getFullYear(),x.getMonth(),x.getDate()).getTime(),df=Math.round((dd(n)-dd(d))/864e5);return df<=0?'Hari ini, '+hm:df==1?'Semalam, '+hm:d.getDate()+' '+MS[d.getMonth()]+' '+d.getFullYear()+', '+hm}
function fdate(t){if(!t)return'—';const[y,m,d]=t.split('-').map(Number);return d+' '+MS[m-1]+' '+y}
async function renderLib(){const m=new Map();
 (await dbAll()).filter(r=>r.id!=='__scratch').forEach(r=>m.set(r.id,{id:r.id,name:r.name,updated:r.updated,meta:r.meta||{},cloud:0}));
 if(CL)CL.list.forEach((b,id)=>{const o=m.get(id);m.set(id,o&&o.updated>b.updated?{...o,cloud:1}:{id,name:b.name,updated:b.updated,meta:b.meta||{},cloud:1})});
 const a=[...m.values()].sort((x,y)=>y.updated-x.updated);
 const ids=[...new Set(a.map(r=>lockActive(r.id)).filter(l=>l&&l.by!==CL.uid).map(l=>l.by))];let ps={};if(ids.length){try{ps=await CL.us.profiles(ids)}catch(e){}}
 $('#lib').innerHTML='<div class="libw"><h2>📁 Dokumen Saya</h2><div class="row"><button class="pri" onclick="baru()">📝 Minit Baharu</button><span class="cs"></span></div>'+(a.length?a.map(r=>{const mt=r.meta||{},l=lockActive(r.id),other=l&&l.by!==CL.uid,mine=l&&l.by===CL.uid;
  const bd=other?`<div class="lk">🔒 Sedang diedit oleh ${esc((ps[l.by]&&ps[l.by].name)||'pengguna lain')}</div>`:mine?`<div class="lk ok">✏️ Anda sedang mengedit${CUR&&CUR.id===r.id&&LKM==='edit'?'':' (tab/peranti lain)'}</div>`:'';
  return `<div class="doc"><div class="dnm">📄 ${esc(r.name)}${CUR&&CUR.id===r.id?' <small>(sedang dibuka)</small>':''}</div>${bd}<div class="mu">Bil. ${esc(mt.bil||'—')}/${esc(mt.tahun||'—')} · ${fdate(mt.tarikh)}<br>Dikemas kini: ${ago(r.updated)} · ${r.cloud?'☁ Dikongsi':'Setempat sahaja'}</div><div class="row"><button class="pri" onclick="openDoc('${r.id}')">${other?'👁 Lihat sahaja':'✏️ Buka &amp; Edit'}</button><button onclick="dup('${r.id}')">📋 Salin</button>${other?'':`<button onclick="delDoc(this,'${r.id}')">🗑 Padam</button>`}</div></div>`}).join(''):'<p class="mu">Belum ada dokumen tersimpan. Tekan 📝 Minit Baharu, isi maklumat, kemudian 💾 Simpan Draf.</p>')+'</div>';CS(lastCS[0],lastCS[1])}
async function dup(id){await flush();const r=await dbGet(id);if(!r)return;const c=JSON.parse(JSON.stringify(r));c.id=newId();c.name=r.name+' (Salinan)';c.created=c.updated=Date.now();delete c.cloudAt;await dbPut(c);if(CL&&CL.canW){try{await pushRec(c)}catch(e){CS('☁ Gagal menyegerak','no')}}renderLib()}
async function delDoc(b,id){if(dk!==id){dk=id;b.textContent='⚠ Sahkan padam?';setTimeout(()=>{if(dk===id){dk=null;b.textContent='🗑 Padam'}},4000);return}dk=null;
 const l=lockActive(id);if(l&&l.by!==CL.uid){CS('Tidak boleh padam: sedang diedit pengguna lain','no');renderLib();return}
 if(CUR&&CUR.id===id){await releaseCur();clearTimeout(tsv);tsv=0;CUR=null;RO=false;LKM='none';S=norm(null);setLast('');resetUI();document.body.classList.add('lib')}
 if(CL&&CL.list.has(id)){try{await cDelete(id)}catch(e){CS('☁ Gagal memadam dari awan','no');return}}
 await dbDel(id);renderLib()}
async function init(){try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}
 await dbInit();let leg=null,last='';try{leg=JSON.parse(localStorage.getItem('mm1'))}catch(e){}try{last=localStorage.getItem('mm1last')||''}catch(e){}
 const r=last?await dbGet(last).catch(()=>null):null;
 if(r){S=norm(r.state);CUR={id:r.id,name:r.name,created:r.created}}
 else{const sc=await dbGet('__scratch').catch(()=>null);if(sc)S=norm(sc.state);else if(leg){S=norm(leg);try{localStorage.removeItem('mm1')}catch(e){}}}
 resetUI();
 if(CUR){RO=true;roMsg='Menyemak kunci dokumen…';applyRO();setSt('Menyemak…','')}else if(dirty())await persist();
 cInit().then(async ok=>{if(!ok){if(CUR){RO=false;LKM='local';applyRO();setSt('✓ Semua perubahan telah disimpan','ok')}return}
  if(CUR){await new Promise(res=>{let n=0;const t=setInterval(()=>{if(CL.ready||++n>50){clearInterval(t);res()}},100)});await enter(CUR.id)}})}
/* ---- saiz & kedudukan gambar (pratonton A4) ---- */
const MAXW={l3:135,l2:121,l4:103,l5:81};let SEL=null,DR=null;
function imgDims(m,c){const r=m.h/m.w;let w=m.mm||Math.min(70,60/r,m.w*.2646);w=Math.max(15,Math.min(w,MAXW[c]||120));if(w*r>230)w=230/r;return[w,w*r]}
function imgHtml(m,c){const[w,h]=imgDims(m,c),j={l:'flex-start',c:'center',r:'flex-end'}[m.al||'l'];return `<div class="imr" style="justify-content:${j}"><div class="ims" data-id="${m.id}" data-c="${c}" style="width:${w.toFixed(1)}mm;height:${h.toFixed(1)}mm"><img src="${m.s}" alt="" draggable="false"></div></div>`}
function findImg(id){for(const d of dets(S))for(const m of d.im)if(m.id===id)return m}
function updLab(e){const l=e.querySelector('.rlab span');if(l)l.textContent=Math.round(parseFloat(e.style.width))+' × '+Math.round(parseFloat(e.style.height))+' mm'}
function applySel(){document.querySelectorAll('#pages .rh,#pages .rlab').forEach(e=>e.remove());document.querySelectorAll('#pages .ims.sel').forEach(e=>e.classList.remove('sel'));
 if(!SEL||RO)return;const e=document.querySelector('#pages .ims[data-id="'+SEL+'"]');if(!e){SEL=null;return}
 e.classList.add('sel');['nw','ne','sw','se'].forEach(k=>{const h=document.createElement('i');h.className='rh '+k;h.dataset.h=k;e.appendChild(h)});
 const l=document.createElement('div');l.className='rlab';l.innerHTML='<span></span><button data-al="l" title="Kiri">⇤</button><button data-al="c" title="Tengah">↔</button><button data-al="r" title="Kanan">⇥</button>';e.appendChild(l);updLab(e)}
function initPrev(){const PG=$('#pages');
 PG.addEventListener('pointerdown',ev=>{if(RO)return;const t=ev.target,hd=t.closest&&t.closest('.rh');
  if(hd){ev.preventDefault();const e=hd.parentNode,m=findImg(e.dataset.id);if(!m)return;DR={e,m,k:hd.dataset.h,x:ev.clientX,w0:parseFloat(e.style.width),r:m.h/m.w,z:parseFloat(PG.style.zoom)||1,max:MAXW[e.dataset.c]||120,w:0};return}
  const b=t.closest&&t.closest('[data-al]');if(b&&SEL){const m=findImg(SEL);if(m){m.al=b.dataset.al;upd()}return}
  const im=t.closest&&t.closest('.ims');if(im){if(SEL!==im.dataset.id){SEL=im.dataset.id;applySel()}return}
  if(SEL){SEL=null;applySel()}});
 addEventListener('pointermove',ev=>{if(!DR)return;const d=(ev.clientX-DR.x)/(3.7795*DR.z);let w=DR.w0+(DR.k[1]==='e'?1:-1)*d;w=Math.max(15,Math.min(w,DR.max,230/DR.r));DR.w=w;DR.e.style.width=w.toFixed(1)+'mm';DR.e.style.height=(w*DR.r).toFixed(1)+'mm';updLab(DR.e)});
 addEventListener('pointerup',()=>{if(!DR)return;const m=DR.m,w=DR.w;DR=null;if(w){m.mm=Math.round(w*10)/10;upd()}});
 addEventListener('keydown',ev=>{if(ev.key==='Escape'&&SEL){SEL=null;applySel()}})}
/* ---- eksport Word (.docx) ---- */
const MM=56.6929,tw=x=>Math.round(x*MM),XE=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function segs(t){const o=[],re=/\*([^*\n]+)\*/g;let l=0,m;const add=(x,it)=>x.split(/(\s+)/).forEach(w=>{if(w)o.push({t:w,i:it||(!/^\s+$/.test(w)&&EN.has(w.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g,'').toLowerCase()))})});
 while(m=re.exec(t)){add(t.slice(l,m.index),0);add(m[1],1);l=re.lastIndex}add(t.slice(l),0);return o}
const runX=(t,b,i)=>String(t).split('\n').map((l,k)=>(k?'<w:r><w:br/></w:r>':'')+(l?`<w:r><w:rPr>${b?'<w:b/>':''}${i?'<w:i/>':''}</w:rPr><w:t xml:space="preserve">${XE(l)}</w:t></w:r>`:'')).join('');
const rn=(t,b)=>segs(t).map(o=>runX(o.t,b,o.i)).join('');
const PX=(inner,o={})=>`<w:p><w:pPr>${o.kn?'<w:keepNext/>':''}${o.bd?'<w:pBdr><w:bottom w:val="single" w:sz="4" w:space="1" w:color="000000"/></w:pBdr>':''}<w:spacing w:before="${o.b||0}" w:after="${o.a===undefined?170:o.a}" w:line="300" w:lineRule="auto"/>${o.l||o.h?`<w:ind w:left="${tw(o.l||0)}"${o.h?` w:hanging="${tw(o.h)}"`:''}/>`:''}<w:jc w:val="${o.j||'both'}"/></w:pPr>${inner}</w:p>`;
const TC=(w,inner)=>`<w:tc><w:tcPr><w:tcW w:w="${tw(w)}" w:type="dxa"/></w:tcPr>${inner}</w:tc>`;
const TBL=(cols,rows,bd)=>`<w:tbl><w:tblPr><w:tblW w:w="${tw(155)}" w:type="dxa"/>${bd?`<w:tblBorders>${['top','left','bottom','right','insideH','insideV'].map(x=>`<w:${x} w:val="single" w:sz="4" w:space="0" w:color="000000"/>`).join('')}</w:tblBorders>`:''}<w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="45" w:type="dxa"/><w:left w:w="113" w:type="dxa"/><w:bottom w:w="45" w:type="dxa"/><w:right w:w="113" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${cols.map(c=>`<w:gridCol w:w="${tw(c)}"/>`).join('')}</w:tblGrid>${rows}</w:tbl>`;
function docxBuild(){const B=[],imgs=[],add=x=>B.push(x),LV={l3:[20,12],l2:[34,14],l4:[52,18],l5:[74,22]},LC=['l2','l4','l5'],AL={l:'left',c:'center',r:'right'};
 const pic=(m,c)=>{const[w,h]=imgDims(m,c),n=imgs.length+1,cx=Math.round(w*36000),cy=Math.round(h*36000);imgs.push(m.s.split(',')[1]);
  return `<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${n}" name="Gambar ${n}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="${n}" name="img${n}.jpg"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="rIdI${n}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`};
 const dot='……………';
 add(PX(runX('MINIT MESYUARAT '+(S.nama.toUpperCase()||'[NAMA MESYUARAT]'),1)+'<w:r><w:br/></w:r>'+runX('BIL. '+(S.bil||'…')+'/'+(S.tahun||'…'),1),{j:'center',a:340}));
 add(PX(runX('Tarikh: ',1)+runX(tarikh()[0]),{j:'left',a:0}));add(PX(runX('Masa: ',1)+runX(S.masa||dot),{j:'left',a:0}));add(PX(runX('Tempat: ',1)+runX(S.tempat||dot),{j:'left'}));
 add(PX(runX('SENARAI KEHADIRAN',1),{kn:1,b:170,j:'left'}));
 for(const k in CATS){const a=S.att[k];if(!a.length)continue;add(PX(runX(CATS[k]+':',1),{kn:1,a:60,j:'left'}));
  const cell=(w,t,b,j)=>TC(w,PX(rn(t,b),{a:0,j:j||'left'})),cs=[14,86,55];
  add(TBL(cs,`<w:tr><w:trPr><w:cantSplit/><w:tblHeader/></w:trPr>${cell(14,'Bil.',1,'center')}${cell(86,'Nama',1,'center')}${cell(55,COL2[k],1,'center')}</w:tr>`+a.map((n,i)=>`<w:tr><w:trPr><w:cantSplit/></w:trPr>${cell(14,String(i+1),0,'center')}${cell(86,n.n)}${cell(55,n.j)}</w:tr>`).join(''),1));add(PX('',{a:120}))}
 const statP=(o,ts)=>o.mt==='Makluman'?PX(runX('Makluman',1),{l:ts,j:'right'}):o.mt==='Tindakan'?PX(runX('Tindakan'+(o.m.trim()?':':''),1)+(o.m.trim()?runX(' ')+rn(o.m.replace(/\n/g,' ')):''),{l:ts,j:'right'}):'';
 const detX=(num,d,c,lv)=>{const[ts,nw]=LV[c];add(PX(runX(num)+'<w:r><w:tab/></w:r>'+rn(d.t),{l:ts,h:nw,kn:d.im.length>0||!!d.mt}));add(statP(d,ts));
  d.im.forEach(m=>{add(PX(pic(m,c),{l:ts,j:AL[m.al||'l'],kn:!!m.mt}));add(statP(m,ts))});(d.c||[]).forEach((x,q)=>detX(`${num}.${q+1}`,x,LC[lv+1]||'l5',lv+1))};
 const ag=n=>{const A=S.a[n];add(PX(runX(`${n}.0 ${AG[n]}`,1),{kn:!!(A.t.trim()||A.d.length),b:170,j:'left'}));A.t.split(/\n+/).filter(x=>x.trim()).forEach(x=>add(PX(rn(x))));A.d.forEach((d,j)=>detX(`${n}.${j+1}`,d,'l3',9))};
 ag(1);ag(2);ag(3);add(PX(runX('4.0 PERBINCANGAN',1),{kn:1,b:170,j:'left'}));
 S.items.forEach((it,i)=>{add(PX(runX('4.'+(i+1),1)+'<w:r><w:tab/></w:r>'+rn(it.t||'……',1),{l:20,h:12,kn:1,b:170,j:'left'}));it.d.forEach((d,j)=>detX(`4.${i+1}.${j+1}`,d,'l2',0))});
 ag(5);ag(6);ag(7);
 add(PX('',{a:680}));const sc=i=>TC(47.67,PX(runX(SIG[i]),{a:0,j:'left'})+PX('',{b:1250,a:0,bd:1,j:'left'})+PX(runX((S.sig[i].n||'').toUpperCase()),{b:60,a:0,j:'left'})+PX(rn(S.sig[i].j||''),{a:0,j:'left'})+PX(rn(S.sek||''),{a:0,j:'left'})),gp=TC(6.5,PX('',{a:0}));
 add(TBL([47.67,6.5,47.67,6.5,47.67],`<w:tr><w:trPr><w:cantSplit/></w:trPr>${sc(0)}${gp}${sc(1)}${gp}${sc(2)}</w:tr>`,0));add(PX('',{a:0}));
 const NS='xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';
 const H='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',RT='http://schemas.openxmlformats.org/officeDocument/2006/relationships/';
 const z=new JSZip();
 z.file('[Content_Types].xml',H+'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="jpg" ContentType="image/jpeg"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>');
 z.file('_rels/.rels',H+`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="${RT}officeDocument" Target="word/document.xml"/></Relationships>`);
 z.file('word/_rels/document.xml.rels',H+`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdS" Type="${RT}styles" Target="styles.xml"/><Relationship Id="rIdF" Type="${RT}footer" Target="footer1.xml"/>${imgs.map((_,i)=>`<Relationship Id="rIdI${i+1}" Type="${RT}image" Target="media/img${i+1}.jpg"/>`).join('')}</Relationships>`);
 z.file('word/styles.xml',H+'<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial" w:eastAsia="Arial"/><w:sz w:val="24"/><w:szCs w:val="24"/><w:lang w:val="ms-MY"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="0" w:line="300" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style></w:styles>');
 z.file('word/footer1.xml',H+`<w:ftr ${NS}><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:t>1</w:t></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r></w:p></w:ftr>`);
 z.file('word/document.xml',H+`<w:document ${NS}><w:body>${B.join('')}<w:sectPr><w:footerReference w:type="default" r:id="rIdF"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1417" w:right="1417" w:bottom="1417" w:left="1701" w:header="709" w:footer="680" w:gutter="0"/></w:sectPr></w:body></w:document>`);
 imgs.forEach((b,i)=>z.file(`word/media/img${i+1}.jpg`,b,{base64:true}));return z}
async function saveBlob(n,b){try{if(window.claude&&claude.use){const dl=await claude.use('downloads');if(dl){await dl.save({filename:n,data:b});return}}}catch(e){if(e&&e.code==='declined')return}
 const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=n;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500)}
async function exportDocx(){if(!window.JSZip){setSt('Pustaka Word tidak dapat dimuatkan','no');return}
 try{const b=await docxBuild().generateAsync({type:'blob',mimeType:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});await saveBlob((CUR?CUR.name:sugg()).replace(/[\\/:*?"<>|]+/g,' ').trim()+'.docx',b)}catch(e){setSt('Gagal menjana fail Word','no')}}
/* ---- kongsi dokumen (awan) + kunci ---- */
const CH=180000,TAB=Math.random().toString(36).slice(2,8);
let CL=null,RO=false,LKM='none',roMsg='',HB=0,PL=0,cT=0,rcT=0,pushing=0,rcBusy=0,lastCS=['',''];
function CS(t,c){lastCS=[t,c||''];document.querySelectorAll('.cs').forEach(e=>{e.textContent=t;e.className='cs '+(c||'')})}
function applyRO(){document.body.classList.toggle('ro',RO);const b=$('#robar');if(b)b.textContent=RO?roMsg:'';document.querySelectorAll('#left .cb input,#left .cb textarea,#left .cb select,#left .cb button').forEach(e=>{e.disabled=RO})}
async function cInit(){try{if(!(window.claude&&claude.use)){CS('💾 Simpanan setempat (dalam pelayar ini)','');return 0}
 const[db,us]=await Promise.all([claude.use('db'),claude.use('user')]);if(!db||!us){CS('Mod setempat (kongsi tidak tersedia)','no');return 0}
 const uid=await us.id();if(!uid){CS('Log masuk claude.ai untuk berkongsi','no');return 0}
 let w=null;try{w=await us.can('data.write')}catch(e){}
 CL={db,us,uid,canW:w!==false,docs:db.collection('minit'),locks:db.collection('minit_lock'),list:new Map(),lk:new Map(),seen:new Set(),known:{},ready:0};
 CL.docs.onSnapshot(sn=>{CL.list=new Map(sn.docs.filter(d=>d.exists).map(d=>[d.id,d.data()]));CL.list.forEach((_,id)=>CL.seen.add(id));CL.ready=1;onCloud()},()=>CS('☁ Sambungan terputus','no'));
 CL.locks.onSnapshot(sn=>{CL.lk=new Map(sn.docs.filter(d=>d.exists).map(d=>[d.id,d.data()]));onCloud()},()=>{});
 CS(CL.canW?'☁ Dikongsi ✓':'☁ Baca sahaja (tiada kebenaran edit)',CL.canW?'ok':'no');return 1}catch(e){CS('Mod setempat (kongsi tidak tersedia)','no');return 0}}
function lockActive(id){const l=CL&&CL.lk.get(id);return l&&l.at&&Date.now()-l.at<60000?l:null}
async function takeLock(id){if(!CL)return'local';if(!CL.canW)return'ro';try{const r=await CL.locks.doc(id).acquire({holder:CL.uid+':'+TAB,ttlMs:45000,data:{by:CL.uid,at:Date.now()}});return r.acquired?'edit':'ro'}catch(e){return'local'}}
function stopHB(){clearInterval(HB);HB=0}function stopPoll(){clearInterval(PL);PL=0}
function toRO(msg){RO=true;LKM='ro';roMsg=msg;stopHB();applyRO();setSt('👁 Mod baca sahaja','no');startPoll()}
async function hbTick(){if(!CL||!CUR||RO||LKM!=='edit')return;const m=await takeLock(CUR.id);if(m==='ro')toRO('Kunci dokumen telah diambil pengguna lain. Anda kini dalam mod baca sahaja.')}
function startHB(){stopHB();stopPoll();HB=setInterval(hbTick,20000)}
function startPoll(){stopPoll();PL=setInterval(pollTick,10000)}
async function pollTick(){if(!CL||!CUR||!RO||!CL.canW||LKM!=='ro'||lockActive(CUR.id))return;const m=await takeLock(CUR.id);if(m!=='edit')return;
 const c=CL.list.get(CUR.id);let r=await dbGet(CUR.id);if(c&&(!r||c.updated>r.updated))r=await pullRec(CUR.id,c);S=norm(r.state);CUR.name=r.name;RO=false;LKM='edit';stopPoll();startHB();resetUI();setSt('✓ Anda kini boleh mengedit dokumen ini','ok')}
async function releaseCur(){stopHB();stopPoll();if(CUR&&CL&&LKM==='edit'){try{await cPushNow()}catch(e){}try{await CL.locks.doc(CUR.id).acquire({holder:CL.uid+':'+TAB,ttlMs:1000,data:{at:0}})}catch(e){}}LKM='none'}
function cPushSoon(){if(!CL||RO||LKM!=='edit')return;clearTimeout(cT);cT=setTimeout(cPushNow,2500)}
async function cPushNow(){clearTimeout(cT);if(!CL||!CUR||RO||LKM!=='edit')return;while(pushing)await new Promise(r=>setTimeout(r,150));pushing=1;CS('☁ Menyegerak...');
 try{const r=await dbGet(CUR.id);if(r)await pushRec(r);CS('☁ Disimpan ke awan ✓','ok')}catch(e){CS('☁ Gagal menyegerak','no')}pushing=0}
async function pushRec(rec){const c=JSON.parse(JSON.stringify(rec.state,(k,v)=>k==='s'?undefined:v)),dl=dets(c),ds=dets(rec.state),cur=new Map();
 let known=CL.known[rec.id];if(!known){const cd=await CL.docs.doc(rec.id).get();known=new Map(cd.exists?(cd.data().imgs||[]).map(x=>[x.id,x.n]):[])}
 ds.forEach((d,i)=>d.im.forEach((m,j)=>{const n=Math.ceil(m.s.length/CH)||1;cur.set(m.id,{n,s:m.s});dl[i].im[j]={...dl[i].im[j],n}}));
 const ic=CL.docs.doc(rec.id).collection('img');
 for(const[id,x]of cur)if(!known.has(id))for(let k=0;k<x.n;k++)await ic.doc(id+'_'+k).set({c:x.s.slice(k*CH,(k+1)*CH)});
 await CL.docs.doc(rec.id).set({name:rec.name,created:rec.created,updated:rec.updated,meta:rec.meta||{},state:c,imgs:[...cur].map(([id,x])=>({id,n:x.n})),by:CL.uid});
 for(const[id,n]of known)if(!cur.has(id))for(let k=0;k<n;k++)await ic.doc(id+'_'+k).delete();
 CL.known[rec.id]=new Map([...cur].map(([id,x])=>[id,x.n]));
 const r=await dbGet(rec.id);if(r&&r.updated===rec.updated){r.cloudAt=rec.updated;await dbPut(r)}}
async function pullRec(id,b){const st=JSON.parse(JSON.stringify(b.state)),ic=CL.docs.doc(id).collection('img');
 for(const d of dets(st))for(const m of d.im){const ps=await Promise.all(Array.from({length:m.n||1},(_,k)=>ic.doc(m.id+'_'+k).get()));m.s=ps.map(p=>p.exists?p.data().c:'').join('')}
 const rec={id,name:b.name,created:b.created,updated:b.updated,meta:b.meta||{},state:norm(st),cloudAt:b.updated};await dbPut(rec);CL.known[id]=new Map((b.imgs||[]).map(x=>[x.id,x.n]));return rec}
async function cDelete(id){const cd=await CL.docs.doc(id).get();if(cd.exists){const ic=CL.docs.doc(id).collection('img');for(const x of cd.data().imgs||[])for(let k=0;k<x.n;k++)await ic.doc(x.id+'_'+k).delete();await CL.docs.doc(id).delete()}try{await CL.locks.doc(id).delete()}catch(e){}delete CL.known[id]}
function onCloud(){clearTimeout(rcT);rcT=setTimeout(reconcile,400)}
async function reconcile(){if(!CL||!CL.ready||rcBusy)return;rcBusy=1;try{
 for(const r of(await dbAll()).filter(r=>r.id!=='__scratch')){const c=CL.list.get(r.id);
  if(!c&&CL.seen.has(r.id)){await dbDel(r.id);if(CUR&&CUR.id===r.id){stopHB();stopPoll();CUR=null;RO=false;LKM='none';S=norm(null);setLast('');resetUI();CS('Dokumen telah dipadam oleh pengguna lain','no')}}
  else if(!c&&!r.cloudAt&&CL.canW){await pushRec(r)}
  else if(c&&CUR&&CUR.id===r.id&&RO&&LKM==='ro'&&c.updated>r.updated){const nr=await pullRec(r.id,c);S=norm(nr.state);CUR.name=nr.name;resetUI();RO=true;applyRO();setSt('👁 Mod baca sahaja','no')}}
 if(document.body.classList.contains('lib'))renderLib()}catch(e){}rcBusy=0}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&tsv)persist()});addEventListener('pagehide',()=>{if(tsv)persist();if(CL&&CUR&&LKM==='edit')CL.locks.doc(CUR.id).acquire({holder:CL.uid+':'+TAB,ttlMs:1000,data:{at:0}}).catch(()=>{})});
addEventListener('resize',fit);build();upd();initPrev();init();
