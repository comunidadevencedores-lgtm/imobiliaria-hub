'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/5541999999999?text=Olá,%20vim%20pelo%20site."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsappFloat"
      aria-label="WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={64}
        height={64}
        priority
      />
    </Link>
  )
}
