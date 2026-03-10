'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function WhatsAppButton() {
  const phoneNumber = '+998933333333'
  const message = 'Assalomualaikum! Compass School haqida ma\'lumot olib sinab ko\'rmayapsizmi?'
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}
