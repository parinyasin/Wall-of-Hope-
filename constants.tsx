import React from 'react';
import { SymbolItem, DonationInfo } from './types';
import { CloudRain, Shield, Coins, Star, RefreshCcw } from 'lucide-react';

export const HERO_POEM = [
  "ในห้วงเวลาที่ยากลำบาก",
  "ยามมีภัยพิบัติเกิดขึ้น",
  "สิ่งหนึ่งที่สำคัญมาก จะละทิ้งเสียมิได้",
  "คือ ความหวัง",
  "ไม่ว่าจะอยู่ในสถานะใด เป็นผู้เดือดร้อนประสบภัย",
  "หรืออยู่ห่างไกลเหตุการณ์",
  "แต่โลกเรานี้ก็มักจะดำเนินไป ด้วยความเห็นอกเห็นใจกัน",
  "ด้วยการเกื้อกูล ด้วยการเอาใจเขามาใส่ใจเรา",
  "ในบางห้วงเวลา เชือกบางๆ สักเส้น อาจเป็นสิ่งที่พาให้ได้ข้ามฝั่ง"
];

export const WALLPAPER_INTRO = "วันนี้ จึงทำวอลล์เปเปอร์มาให้อีกใบหนึ่ง เพื่อเป็นขวัญและกำลังใจ ให้คุ้มครองป้องกันภัย และดลบันดาลให้ผ่านพ้นวิกฤตไปได้ด้วยดี";

export const SYMBOLS: SymbolItem[] = [
  {
    id: 'naga',
    title: 'เปิดทางช่วยเหลือ',
    description: 'อัญเชิญพญานาคผู้เป็นใหญ่ในแผ่นน้ำและแผ่นดิน มาช่วยคุ้มครองป้องกันภัย และเปิดทางให้ผู้ประสบเหตุเภทภัย ให้ได้รับความช่วยเหลือ',
    imageUrl: 'https://lh3.googleusercontent.com/d/1kHVdSMldVIv0gr3BUtTDbHsKtDXKwsMM', 
    icon: <CloudRain className="w-6 h-6 text-blue-500" />
  },
  {
    id: 'cat',
    title: 'ชีวิตที่ฆ่าไม่ตาย',
    description: 'อัญเชิญยันต์แมวดำเก้าชีวิต มาช่วยดลบันดาลให้ชีวิตที่ตกในที่คับขัน อันตราย ได้ผ่านพ้นสู่แสงสว่างของวันใหม่ เรียกหาผู้ที่ช่วยเหลือมาให้เร็วไว',
    imageUrl: 'https://lh3.googleusercontent.com/d/15sT3Xt1-ImsybsEamPWuvCXnCxXC8Bwj', 
    icon: <Shield className="w-6 h-6 text-slate-800" />
  },
  {
    id: 'giant',
    title: 'ปกปักรักษา',
    description: 'อัญเชิญท้าวเวสสุวรรณ ผู้ปกครองภูติผี และปกปักรักษาทรัพย์สินเงินทอง ตลอดจนคุ้มครองป้องกันบ้านเรือนที่อยู่อาศัย ให้มาช่วยอีกชั้น',
    imageUrl: 'https://lh3.googleusercontent.com/d/1HqZEJ22yLUUOi-2_jSjGCw7LHBigZLG_', 
    icon: <Shield className="w-6 h-6 text-red-600" />
  },
  {
    id: 'star',
    title: 'แสงแห่งความหวัง',
    description: 'อัญเชิญไพ่ The Star ดวงดาวแห่งคำอธิษฐาน มาร่วมมอบขวัญ กำลังใจ ให้ผู้ป่วยไข้ บาดเจ็บ ประสบเคราะห์กรรมใด ให้ได้รับการเยียวยารักษา ฟื้นฟูทันเวลา จนถึงแข็งแรงหายดี',
    imageUrl: 'https://lh3.googleusercontent.com/d/1LV3trsKe2EvUTYbHtWGRCsDqYh7N0_Fu', 
    icon: <Star className="w-6 h-6 text-amber-500" />
  },
  {
    id: 'wheel',
    title: 'พลิกร้ายกลายเป็นดี',
    description: 'อัญเชิญไพ่ Wheel of Fortune กงล้อแห่งโชคชะตา จงเคลื่อนเหนือมหานที เพื่อนำสิ่งร้ายๆ ออกไป นำสิ่งดีๆ เข้ามา นำพาชีวิตหมุนไปหาแสงสว่าง',
    imageUrl: 'https://lh3.googleusercontent.com/d/1YRbX3oQTOvC20b8DEu4mgCe_4MncvG6r', 
    icon: <RefreshCcw className="w-6 h-6 text-orange-600" />
  }
];

export const DONATIONS: DonationInfo[] = [
  {
    id: 'rescue',
    name: 'กู้ชีพกู้ภัยพร้าววังหิน',
    bankName: 'ธนาคารกสิกรไทย',
    accountNumber: '792-210247-8',
    description: '(พระครูปรีชาภิวัฒน์) ศูนย์กู้ภัยเมืองพร้าว เดินทางไปช่วยเหลือชาวหาดใหญ่และภาคใต้',
    colorClass: 'bg-green-50 text-green-900 border-green-200',
    imageUrl: 'https://lh3.googleusercontent.com/d/19aoDlInDrRRJ2gR2mqF_1nXOzfwN4DHs'
  },
  {
    id: 'mirror',
    name: 'มูลนิธิกระจกเงา',
    bankName: 'ธนาคารไทยพาณิชย์',
    accountNumber: '507-410183-8',
    description: 'กองทุนภัยพิบัติ (ช่วยเหลือน้ำท่วมภาคใต้)',
    colorClass: 'bg-purple-50 text-purple-900 border-purple-200',
    imageUrl: 'https://lh3.googleusercontent.com/d/1_KzjQa9hmmHsWFQinDi8PnaW9oeKrXsD'
  }
];