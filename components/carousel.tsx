'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  products: any[]
}

export default function Carousel({ products }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [products.length])

  const next = () => setCurrent((current + 1) % products.length)
  const prev = () => setCurrent((current - 1 + products.length) % products.length)

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 h-[400px]">
      <div className="relative h-full overflow-hidden rounded-xl">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute w-full h-full transition-all duration-500 ease-out
              ${index === current ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ transform: `translateX(${100 * (index - current)}%)` }}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-2xl font-semibold">{product.name}</h3>
              <p className="text-gray-200 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors
              ${index === current ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}