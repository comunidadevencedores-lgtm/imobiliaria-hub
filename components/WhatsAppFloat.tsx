'use client'

import Link from 'next/link'

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/5541999999999?text=Olá,%20vim%20pelo%20site."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsappFloat"
      aria-label="Falar no WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
      >
        <path d="M19.11 17.44c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.45-.86-.76-1.44-1.69-1.61-1.98-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.17-.24-.58-.49-.49-.66-.49h-.56c-.19 0-.49.07-.75.37-.26.29-.98.95-.98 2.32s1 2.68 1.14 2.88c.15.19 1.96 2.98 4.75 4.18.66.29 1.17.46 1.57.59.66.2 1.25.17 1.72.1.53-.08 1.72-.71 1.96-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.56-.34z"/>
      </svg>
    </Link>
  )
}
