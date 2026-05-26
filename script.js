const slides = [
  {
    type:'cover',
    title:'DETEKTIF SOSIAL',
    subtitle:'Mengungkap Masyarakat Secara Ilmiah',
    body:'Selamat datang, Detektif Sosial! Hari ini kamu akan menyelidiki kehidupan masyarakat dengan cara berpikir sosiologis. Selesaikan setiap misi untuk membuka lencana Ilmuwan Sosial Muda.',
    emoji:'🕵️‍♂️'
  },
  {
    type:'instruction',
    title:'Cara Bermain',
    body:'Bacalah petunjuk, klik objek atau kartu, jawab tantangan, lalu kumpulkan kode rahasia. Kode yang harus kamu temukan adalah:',
    codes:['SOS','IO','LO','GI']
  },
  {
    type:'cardsQuiz',
    title:'Misi 1: Mengenal Sosiologi',
    intro:'Seorang detektif sosial harus memahami apa yang sedang ia selidiki. Sosiologi bukan sekadar membicarakan masyarakat, tetapi mempelajari kehidupan sosial secara ilmiah.',
    cards:[
      ['👥','Masyarakat','Sekumpulan manusia yang hidup bersama, berinteraksi, serta memiliki aturan atau nilai tertentu.'],
      ['🤝','Interaksi Sosial','Hubungan timbal balik antara individu dengan individu, individu dengan kelompok, atau kelompok dengan kelompok.'],
      ['🏙️','Gejala Sosial','Peristiwa atau fenomena yang muncul akibat hubungan sosial dalam masyarakat.']
    ],
    question:'Objek utama kajian sosiologi adalah...',
    answers:['Struktur bumi dan batuan','Hubungan manusia dalam masyarakat','Organ tubuh manusia','Reaksi zat kimia','Pergerakan planet'],
    correct:1,
    code:'SOS',
    correctMsg:'Tepat! Sosiologi mempelajari hubungan manusia dalam masyarakat. Kode pertama: SOS',
    wrongMsg:'Belum tepat. Sosiologi berfokus pada masyarakat dan hubungan sosial antarmanusia.'
  },
  {
    type:'tf',
    title:'Misi 2: Membuka Empat Kunci Ilmu',
    intro:'Agar disebut sebagai ilmu, sosiologi memiliki ciri-ciri tertentu. Klik setiap kunci untuk membaca penjelasannya, lalu jawab benar atau salah.',
    cards:[
      ['🔍','Empiris','Berdasarkan pengamatan terhadap kenyataan sosial, bukan dugaan semata.'],
      ['📚','Teoretis','Menyusun teori atau konsep berdasarkan hasil pengamatan dan analisis.'],
      ['🧩','Kumulatif','Teori dapat berkembang dari teori-teori sebelumnya.'],
      ['⚖️','Nonetis','Tidak menilai baik atau buruk, tetapi menjelaskan mengapa gejala sosial terjadi.']
    ],
    statements:[
      ['Sosiologi bersifat empiris karena berdasarkan pengamatan terhadap kenyataan sosial.', true],
      ['Sosiologi disebut nonetis karena bertugas menentukan siapa yang baik dan siapa yang buruk.', false],
      ['Sosiologi bersifat kumulatif karena teorinya dapat berkembang dari teori sebelumnya.', true]
    ],
    code:'IO'
  },
  {
    type:'match',
    title:'Misi 3: Pasangkan Bukti Sosial',
    intro:'Cocokkan ciri sosiologi dengan contoh yang tepat. Klik satu ciri di kiri, lalu klik contoh yang sesuai di kanan.',
    left:['Empiris','Teoretis','Kumulatif','Nonetis'],
    right:['Peneliti menjelaskan fenomena tawuran tanpa langsung menghakimi pelakunya','Peneliti mengamati perilaku siswa saat kerja kelompok','Teori baru dikembangkan dari teori konflik sebelumnya','Peneliti menyusun penjelasan tentang penyebab konflik sosial'],
    pairs:{'Empiris':'Peneliti mengamati perilaku siswa saat kerja kelompok','Teoretis':'Peneliti menyusun penjelasan tentang penyebab konflik sosial','Kumulatif':'Teori baru dikembangkan dari teori konflik sebelumnya','Nonetis':'Peneliti menjelaskan fenomena tawuran tanpa langsung menghakimi pelakunya'},
    code:'LO'
  },
  {
    type:'caseQuiz',
    title:'Misi 4: Analisis Kasus Sekolah',
    caseText:'Di sebuah sekolah, beberapa siswa membentuk kelompok pertemanan berdasarkan kesamaan hobi. Lama-kelamaan, muncul jarak antara kelompok satu dengan kelompok lain. Beberapa siswa merasa sulit bergabung karena dianggap tidak memiliki minat yang sama.',
    question:'Sebagai ilmu, sosiologi dapat digunakan untuk menganalisis kasus tersebut dengan cara...',
    answers:['Menyalahkan kelompok yang paling tertutup','Mengamati pola interaksi dan hubungan antarkelompok siswa','Menghapus semua kelompok pertemanan','Menganggap perbedaan hobi sebagai masalah pribadi','Mengabaikan kasus karena bukan gejala sosial'],
    correct:1,
    correctMsg:'Tepat! Sosiologi membantu memahami pola interaksi, hubungan sosial, dan gejala sosial secara objektif.',
    wrongMsg:'Belum tepat. Sosiologi tidak langsung menyalahkan, tetapi menganalisis pola hubungan sosial yang terjadi.'
  },
  {
    type:'multiQuiz',
    title:'Misi 5: Pecahkan Kode Istilah',
    intro:'Baca petunjuk berikut, lalu pilih istilah yang tepat.',
    questions:[
      {q:'Ciri sosiologi yang berarti berdasarkan pengamatan terhadap kenyataan sosial.', a:['Nonetis','Empiris','Kumulatif','Teoretis','Imajinatif'], c:1},
      {q:'Ciri sosiologi yang berarti tidak menilai baik atau buruk suatu gejala sosial.', a:['Nonetis','Biologis','Spekulatif','Normatif','Historis'], c:0},
      {q:'Ciri sosiologi yang berarti teori dapat dikembangkan dari teori sebelumnya.', a:['Empiris','Kumulatif','Nonetis','Individualis','Praktis'], c:1}
    ],
    code:'GI'
  },
  {
    type:'finalCode',
    title:'Misi 6: Susun Kode Rahasia',
    intro:'Gabungkan semua kode yang sudah kamu dapatkan: SOS + IO + LO + GI',
    question:'Jika digabungkan, kode rahasianya menjadi...',
    answers:['SOSIOLOGI','SOSIALISASI','GEJALA SOSIAL','INTERAKSI','MASYARAKAT'],
    correct:0
  },
  {
    type:'reflection',
    title:'Refleksi Detektif Sosial',
    questions:['Mengapa sosiologi disebut sebagai ilmu?','Apa contoh gejala sosial yang pernah kamu lihat di sekolah?','Mengapa sosiologi perlu bersifat nonetis?','Apa manfaat mempelajari sosiologi dalam kehidupan sehari-hari?']
  },
  {
    type:'finish',
    title:'Misi Selesai!',
    body:'Selamat, kamu berhasil menyelesaikan seluruh misi. Sekarang kamu memahami bahwa sosiologi adalah ilmu yang mempelajari masyarakat, interaksi sosial, dan gejala sosial secara ilmiah.',
    emoji:'🏅'
  }
];

let current = 0;
let answered = new Set();
let selectedLeft = null;
let matchDone = new Set();
const screen = document.getElementById('screen');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const slideLabel = document.getElementById('slideLabel');
const toast = document.getElementById('toast');

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 2400);
}
function esc(s){return String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));}
function render(){
  selectedLeft = null;
  matchDone = current === 4 ? matchDone : new Set();
  const s = slides[current];
  slideLabel.textContent = `Halaman ${current+1}/${slides.length}`;
  progressBar.style.width = `${((current+1)/slides.length)*100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === slides.length-1 ? 'Main Lagi ↻' : 'Lanjut →';
  screen.innerHTML = renderSlide(s);
  bindEvents(s);
}
function renderSlide(s){
  if(s.type==='cover') return `<div class="hero"><div><span class="badge">Game Edukasi Sosiologi</span><h1>${s.title}</h1><p>${s.subtitle}</p><div class="panel"><p>${s.body}</p></div></div><div class="big-emoji">${s.emoji}</div></div>`;
  if(s.type==='instruction') return `<h2>${s.title}</h2><p>${s.body}</p><div class="code-box">${s.codes.map(c=>`<span class="code">${c}</span>`).join('')}</div><div class="panel"><p><b>Misi utama:</b> pahami pengertian sosiologi, ciri-ciri sosiologi sebagai ilmu, objek kajian, dan manfaatnya.</p></div>`;
  if(s.type==='cardsQuiz') return `<h2>${s.title}</h2><p>${s.intro}</p><div class="grid">${cards(s.cards)}</div>${quizHTML(s)}`;
  if(s.type==='tf') return `<h2>${s.title}</h2><p>${s.intro}</p><div class="grid four">${cards(s.cards)}</div><div class="quiz">${s.statements.map((st,i)=>`<div class="panel"><div class="question">${i+1}. ${st[0]}</div><div class="answers two-buttons"><button class="ghost tfbtn" data-i="${i}" data-val="true">Benar</button><button class="ghost tfbtn" data-i="${i}" data-val="false">Salah</button></div></div>`).join('')}</div>`;
  if(s.type==='match') return `<h2>${s.title}</h2><p>${s.intro}</p><div class="match-wrap"><div><h3>Ciri Sosiologi</h3><div class="match-col">${s.left.map(x=>`<div class="match-item left" data-value="${esc(x)}">${x}</div>`).join('')}</div></div><div><h3>Contoh</h3><div class="match-col">${s.right.map(x=>`<div class="match-item right" data-value="${esc(x)}">${x}</div>`).join('')}</div></div></div><div class="panel"><p>Pasangan benar akan berubah menjadi hijau. Selesaikan semua pasangan untuk membuka kode <b>LO</b>.</p></div>`;
  if(s.type==='caseQuiz') return `<h2>${s.title}</h2><div class="panel"><h3>Kasus</h3><p>${s.caseText}</p></div>${quizHTML(s)}`;
  if(s.type==='multiQuiz') return `<h2>${s.title}</h2><p>${s.intro}</p>${s.questions.map((q,qi)=>`<div class="quiz panel"><div class="question">${qi+1}. ${q.q}</div><div class="answers">${q.a.map((a,i)=>`<button class="answer multi" data-q="${qi}" data-i="${i}"><span class="letter">${'ABCDE'[i]}</span><span>${a}</span></button>`).join('')}</div></div>`).join('')}`;
  if(s.type==='finalCode') return `<h2>${s.title}</h2><p>${s.intro}</p><div class="code-box"><span class="code">SOS</span><span class="code">IO</span><span class="code">LO</span><span class="code">GI</span></div>${quizHTML(s)}`;
  if(s.type==='reflection') return `<h2>${s.title}</h2><p>Jawablah secara singkat. Jawaban dapat didiskusikan bersama guru di kelas.</p><div class="reflection">${s.questions.map((q,i)=>`<div class="panel"><h3>${i+1}. ${q}</h3><textarea placeholder="Tulis jawabanmu di sini..."></textarea></div>`).join('')}</div>`;
  if(s.type==='finish') return `<div class="certificate"><div class="big-emoji">${s.emoji}</div><h2 class="final-title">${s.title}</h2><p>${s.body}</p><h3>Lencana: Ilmuwan Sosial Muda</h3><p><b>Pesan:</b> Jadilah pengamat sosial yang objektif, kritis, dan bijaksana.</p></div>`;
}
function cards(arr){ return arr.map(c=>`<div class="card"><div class="icon">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join(''); }
function quizHTML(s){ return `<div class="quiz"><div class="question">${s.question}</div><div class="answers">${s.answers.map((a,i)=>`<button class="answer single" data-i="${i}"><span class="letter">${'ABCDE'[i]}</span><span>${a}</span></button>`).join('')}</div></div>`; }
function bindEvents(s){
  document.querySelectorAll('.single').forEach(btn=>btn.addEventListener('click',()=>{
    const i = Number(btn.dataset.i);
    document.querySelectorAll('.single').forEach(b=>b.disabled=true);
    if(i === s.correct){ btn.classList.add('correct'); answered.add(current); showToast(s.correctMsg || 'Benar! Misi berhasil diselesaikan.'); }
    else { btn.classList.add('wrong'); showToast(s.wrongMsg || 'Belum tepat. Coba perhatikan kembali petunjuknya.'); setTimeout(()=>{document.querySelectorAll('.single').forEach(b=>{b.disabled=false;b.classList.remove('wrong')})},900); }
  }));
  if(s.type==='tf'){
    const tfAns = {};
    document.querySelectorAll('.tfbtn').forEach(btn=>btn.addEventListener('click',()=>{
      const i = Number(btn.dataset.i); const val = btn.dataset.val === 'true'; tfAns[i]=val;
      btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('primary'));
      btn.classList.add('primary');
      if(Object.keys(tfAns).length===s.statements.length){
        const ok = s.statements.every((st,i)=>tfAns[i]===st[1]);
        if(ok){answered.add(current); showToast('Hebat! Semua jawaban benar. Kode kedua: IO');}
        else showToast('Masih ada yang belum tepat. Periksa kembali konsep empiris, kumulatif, dan nonetis.');
      }
    }));
  }
  if(s.type==='match'){
    matchDone = new Set();
    document.querySelectorAll('.left').forEach(item=>item.addEventListener('click',()=>{
      if(item.classList.contains('done')) return;
      document.querySelectorAll('.left').forEach(x=>x.classList.remove('selected'));
      item.classList.add('selected'); selectedLeft = item.dataset.value;
    }));
    document.querySelectorAll('.right').forEach(item=>item.addEventListener('click',()=>{
      if(!selectedLeft || item.classList.contains('done')) return;
      const expected = s.pairs[selectedLeft];
      if(expected === item.dataset.value){
        item.classList.add('done');
        const leftEl = [...document.querySelectorAll('.left')].find(x=>x.dataset.value===selectedLeft);
        leftEl.classList.add('done'); leftEl.classList.remove('selected');
        matchDone.add(selectedLeft); selectedLeft=null;
        showToast('Benar! Pasangan sesuai.');
        if(matchDone.size===s.left.length){answered.add(current); showToast('Semua pasangan benar! Kode ketiga: LO');}
      } else showToast('Coba lagi. Pasangan itu belum sesuai.');
    }));
  }
  if(s.type==='multiQuiz'){
    const done = {};
    document.querySelectorAll('.multi').forEach(btn=>btn.addEventListener('click',()=>{
      const qi=Number(btn.dataset.q), i=Number(btn.dataset.i), q=s.questions[qi];
      if(done[qi]) return;
      if(i===q.c){ btn.classList.add('correct'); done[qi]=true; showToast('Benar!'); }
      else { btn.classList.add('wrong'); showToast('Belum tepat. Pilih istilah yang paling sesuai.'); setTimeout(()=>btn.classList.remove('wrong'),900); }
      if(Object.keys(done).length===s.questions.length){answered.add(current); showToast('Keren! Kode keempat: GI');}
    }));
  }
}
prevBtn.addEventListener('click',()=>{ if(current>0){current--; render();} });
nextBtn.addEventListener('click',()=>{ if(current===slides.length-1){current=0; answered.clear(); render(); return;} current++; render(); });
render();
