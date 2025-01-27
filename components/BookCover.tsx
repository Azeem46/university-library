import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import BookCoverSvg from './BookCoverSvg';

type BookCoverVaraint = "extraSmall" | "small" | "medium" | "regular" | "wide";

const varaintStyles: Record<BookCoverVaraint, string> = {
    extraSmall: "book-cover_extra_small",
    small: "book-cover_small",
    medium: "book-cover_medium",
    regular: "book-cover_regular",
    wide: "book-cover_wide",
}
interface Props {
    className?: string;
    varaint?: BookCoverVaraint;
    coverColor?: string;
    coverImage?: string;
}

const BookCover = ({
    className,
    varaint = "regular",
    coverColor = "#012B48",
    coverImage= 'https://placehold.co/400x600.png',
}: Props) => {
  return (
    <div className={cn("relative trasition-all duration-300", varaintStyles[varaint], className)}>
    <BookCoverSvg 
    coverColor={coverColor}
    />
    <div className="absolute z-10"
    style={{left: "12%", width: "87.5%", height: "88%"}}
    >
        <Image 
        src={coverImage} 
        alt="Book cover"
        fill
        className='rounded-sm object-fill'
        />
    </div>
    </div>
  )
}

export default BookCover