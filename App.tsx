import React, { useState } from 'react';
import { Download, HeartHandshake, BookOpen } from 'lucide-react';
import { HERO_POEM, SYMBOLS, DONATIONS, WALLPAPER_INTRO } from './constants';
import { DonationCard } from './components/DonationCard';
import { SymbolCard } from './components/SymbolCard';
import { PrayerModeModal } from './components/PrayerModeModal';

const App: React.FC = () => {
  const [isPrayerModeOpen, setIsPrayerModeOpen] = useState(false);

  // Direct link to the Google Drive image for the wallpaper download
  const WALLPAPER_URL = "https://lh3.googleusercontent.com/d/1u8Q9QDJUiDQ6C34qftvQMVmrzGw6VQCu";
  // Direct link to the Google Drive image for the hero background landscape
  const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/d/1rJue281WXjI1qfEUAxTLTaSrIoKUVkEQ";
  // Logo URL
  const LOGO_URL = "https://lh3.googleusercontent.com/d/1-7-4n0TeAifY2oTUFvq6fs1iUyhF2wZp";
  
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sarabun selection:bg-amber-200">
      
      {/* Prayer Mode Modal */}
      <PrayerModeModal 
        isOpen={isPrayerModeOpen} 
        onClose={() => setIsPrayerModeOpen(false)} 
        symbols={SYMBOLS} 
      />

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Header / Hero Section */}
        <header className="text-center mb-16 space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-50 border border-amber-200 rounded-full text-amber-900 text-xl font-bold tracking-wide mb-4 shadow-sm font-maitree">
             <span>ส่งใจไปภาคใต้ มหาอุทกภัย 2568</span>
          </div>

          {/* Landscape Hero Image */}
          <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white mx-auto max-w-2xl mb-8 transform hover:scale-[1.01] transition-transform duration-500">
            <img 
              src={HERO_IMAGE_URL}
              alt="Landscape with Cat and Moons" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight font-maitree">
            ในห้วงเวลา<br />
            <span className="text-amber-700">ที่ยากลำบาก</span>
          </h1>

          <div className="max-w-xl mx-auto space-y-2 py-8 relative">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 text-6xl text-amber-200 opacity-50 font-serif">"</div>
            {HERO_POEM.map((line, idx) => {
                const isHope = line.includes('ความหวัง');
                const isRope = line.includes('เชือกบางๆ');
                
                let className = 'leading-relaxed transition-all duration-500 ';
                
                if (isHope) {
                    className += 'text-4xl md:text-5xl font-maitree font-bold text-amber-600 my-6 drop-shadow-sm';
                } else if (isRope) {
                    className += 'text-2xl md:text-3xl font-maitree font-medium text-stone-800 italic mt-6 mb-2 drop-shadow-sm';
                } else if (line.includes('#')) {
                    className += 'font-bold text-amber-800 text-xl';
                } else {
                    className += 'text-lg md:text-xl text-stone-600';
                }

                return (
                  <p key={idx} className={className}>
                      {line}
                  </p>
                );
            })}
             <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-6xl text-amber-200 opacity-50 font-serif rotate-180">"</div>
          </div>
        </header>

        {/* Wallpaper Preview Section */}
        <section className="mb-20">
            <div className="bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-amber-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Actual Wallpaper Preview */}
                    <div className="relative w-64 md:w-72 shrink-0 mx-auto">
                        <img 
                            src={WALLPAPER_URL}
                            alt="Wall of Hope Wallpaper Preview" 
                            className="w-full h-auto rounded-[2.5rem] shadow-2xl border-8 border-stone-800 object-cover"
                        />
                         {/* Status Bar simulation just for feel */}
                         <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-50"></div>
                    </div>

                    {/* Context & Download */}
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <h2 className="text-3xl font-bold text-stone-800 font-maitree">องค์ประกอบมงคล</h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            {WALLPAPER_INTRO}
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a 
                              href={WALLPAPER_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-amber-50 rounded-2xl shadow-lg hover:bg-stone-800 hover:scale-105 transition-all font-semibold text-lg group cursor-pointer"
                            >
                                <Download className="w-5 h-5 group-hover:animate-bounce" />
                                ดาวน์โหลดวอลล์เปเปอร์
                            </a>
                        </div>
                        <p className="text-xs text-stone-400 text-center md:text-left">*กดปุ่มเพื่อเปิดรูปภาพต้นฉบับและบันทึกลงเครื่อง</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Meaning Cards Grid */}
        <section className="mb-20">
            <div className="text-center mb-12">
                <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Meanings</span>
                <h2 className="text-3xl font-bold text-stone-800 mt-2 font-maitree">ความหมายมงคล 5 ประการ</h2>
                <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {SYMBOLS.map((item) => (
                    <SymbolCard key={item.id} item={item} />
                ))}
            </div>

            {/* Prayer Mode Trigger Button */}
            <div className="flex justify-center">
                <button
                    onClick={() => setIsPrayerModeOpen(true)}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-amber-50 rounded-full shadow-2xl hover:bg-stone-800 hover:-translate-y-1 transition-all duration-300 font-maitree text-xl tracking-wide overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-amber-400" />
                        <span>เข้าสู่โหมดอธิษฐานจิต</span>
                    </div>
                </button>
            </div>
        </section>

        {/* Donation Section */}
        <section className="max-w-3xl mx-auto mb-20">
             <div className="bg-amber-50/50 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-amber-100 shadow-xl text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                    <HeartHandshake className="w-8 h-8 text-amber-600" />
                </div>
                
                <h2 className="text-3xl font-bold text-stone-800 mb-4 font-maitree">กติกามีเพียง...</h2>
                <p className="text-stone-600 mb-10 text-lg">
                    "ค่าครู" สำหรับการใช้วอลล์เปเปอร์นี้ คือการมอบน้ำใจเท่าใดก็ได้ <br className="hidden md:block"/>
                    ให้กับหน่วยงานที่กำลังเข้าช่วยเหลือผู้ประสบภัย
                </p>

                <div className="space-y-4 text-left">
                    {DONATIONS.map((donation) => (
                        <DonationCard key={donation.id} info={donation} />
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-amber-200/50 text-stone-500 text-sm">
                    ✨ จะส่งสลิปหรือไม่ส่งก็ได้ หากลงไว้ในคอมเมนท์ต้นทาง ก็จะเป็นการบันทึกบุญร่วมกัน ✨
                </div>
             </div>
        </section>

        {/* Footer */}
        <footer className="text-center pb-12 text-stone-400 text-sm flex flex-col items-center">
            <p className="mb-4">ด้วยความปรารถนาดีจาก</p>
            
            <a 
              href="https://www.facebook.com/garagayhoro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
            >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-200 shadow-sm p-0.5 bg-white">
                    <img 
                        src={LOGO_URL} 
                        alt="GaragayHoro Logo" 
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <p className="font-bold text-stone-600 text-lg group-hover:text-amber-700 transition-colors font-maitree">
                    การะเกต์พยากรณ์
                </p>
            </a>

            <p className="mt-8 text-xs opacity-50">© 2024 GaragayHoro. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;