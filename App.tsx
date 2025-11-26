import React, { useState } from 'react';
import { Download, HeartHandshake, Sparkles } from 'lucide-react';
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

      {/* Hero Section with Background Image */}
      <header className="relative w-full min-h-[95vh] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE_URL} 
            alt="Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* White Overlay for text readability */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
          {/* Gradient fade at bottom to blend with the rest of the page */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#FDFBF7] to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 flex flex-col items-center">
            
            {/* Main Header Title - Prominent */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-amber-900 leading-tight font-maitree mb-8 drop-shadow-md animate-in fade-in zoom-in duration-1000 tracking-tight">
                ส่งใจไปภาคใต้ <br className="lg:hidden" />
                <span className="text-stone-800">มหาอุทกภัย 2568</span>
            </h1>
            
            {/* Divider */}
            <div className="w-32 h-1.5 bg-amber-500 rounded-full mb-12 shadow-sm animate-in fade-in width-0 duration-1000 delay-300"></div>

            {/* Poem */}
            <div className="max-w-xl mx-auto space-y-4 relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                {/* Decorative Quotes */}
                <div className="absolute -left-4 md:-left-12 -top-6 text-8xl text-amber-900/10 font-serif select-none">"</div>
                
                {HERO_POEM.map((line, idx) => {
                    const isHope = line.includes('ความหวัง');
                    const isRope = line.includes('เชือกบางๆ');
                    
                    let className = 'leading-relaxed transition-all duration-500 ';
                    
                    // Specific styling for the first line to act as a sub-header
                    if (idx === 0) {
                        className += 'text-2xl md:text-4xl font-maitree font-bold text-stone-700 mb-6 block';
                    } else if (isHope) {
                        className += 'text-3xl md:text-5xl font-maitree font-bold text-amber-700 my-8 drop-shadow-sm block scale-105 transform';
                    } else if (isRope) {
                        className += 'text-xl md:text-3xl font-maitree font-bold text-stone-800 italic mt-8 mb-6 block border-l-4 border-amber-400 pl-4 md:pl-0 md:border-none';
                    } else if (line.includes('#')) {
                        className += 'font-bold text-amber-800 text-xl';
                    } else {
                        className += 'text-lg md:text-xl text-stone-700 font-medium';
                    }

                    return (
                    <p key={idx} className={className}>
                        {line}
                    </p>
                    );
                })}
                <div className="absolute -right-4 md:-right-12 -bottom-6 text-8xl text-amber-900/10 font-serif rotate-180 select-none">"</div>
            </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12 sm:px-6 lg:px-8 -mt-12 md:-mt-20">
        
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
                         {/* Status Bar simulation */}
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
            <div className="flex justify-center py-4">
                <button
                    onClick={() => setIsPrayerModeOpen(true)}
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-stone-900 text-amber-50 rounded-full shadow-2xl hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all duration-300 font-maitree text-2xl font-bold tracking-wide overflow-hidden border border-amber-500/30"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Sparkle animations */}
                    <div className="absolute inset-0 pointer-events-none">
                        <Sparkles className="absolute top-2 left-6 w-4 h-4 text-amber-200 opacity-0 group-hover:opacity-100 animate-ping duration-1000" />
                        <Sparkles className="absolute bottom-3 right-6 w-3 h-3 text-amber-100 opacity-0 group-hover:opacity-100 animate-bounce delay-300" />
                    </div>

                    <div className="relative flex items-center gap-4 z-10">
                        <Sparkles className="w-6 h-6 text-amber-400 group-hover:animate-pulse" />
                        <span className="bg-gradient-to-r from-amber-100 to-white bg-clip-text text-transparent group-hover:text-white drop-shadow-sm">เข้าสู่โหมดร่วมอธิษฐาน</span>
                        <Sparkles className="w-6 h-6 text-amber-400 group-hover:animate-pulse delay-150" />
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