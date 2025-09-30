import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import {Button} from '@/components/ui/button'
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 5
  });

  return (
    <div className="flex outline-gray-300 border  items-center justify-center min-h-[80vh] text-center p-8 bg-white dark:bg-gray-950">
      <div>
         <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
        Modern Shopping, <br />
        <span className="text-gray-600 dark:text-gray-400">Simplified</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8 font-normal leading-relaxed">
        Discover thoughtfully crafted products for your everyday needs. Simple, elegant, and functional.
      </p>
      <Button asChild size="lg" className="rounded-full">
        <Link href="/products">
          Browse Collection
        </Link>
      </Button>
      </div>
   
      
      <Image
      alt="image"
      width={350} 
      height={350}
      src={products.data[0].images[0]}/>
    </div>
  );
}

