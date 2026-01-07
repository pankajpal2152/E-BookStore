import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    container,
    formContainer,
    geometricOverlay,
    glassBox,
    headerText,
    imageSection,
    imageStyle,
    imageWrapper,
    inputField,
    inputWrapper,
    overlayEffect,
    paragraphText,
    scrollText,
    scrollTextSection,
    subHeader,
    statsContainer,
    statBox,
    statLabel,
    statNumber
} from '../assets/dummystyles'
import { Search } from 'lucide-react'
import { words } from '../assets/dummydata'
import img from "../assets/banner1.png"

const Banner = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [currentWord, setCurrentWord] = useState(0)
    const navigate = useNavigate()

    // Rotate words
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/books?query=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    return (
        <div className={container}>
            <div className={glassBox}>
                <div className={geometricOverlay}>
                    <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-96 md:h-96 bg-[#F8FFAE]/10 rounded-full blur-xl md:blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-40 h-40 md:w-80 md:h-80 bg-[#43C6AC]/10 rounded-full blur-xl md:blur-3xl" />
                </div>

                <div className="grid lg:grid-cols-2 gap-3 md:gap-12 items-center">

                    {/* TEXT SECTION */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-4 md:space-y-6">

                            <h1 className={headerText}>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B5876] to-[#43C6AC]">
                                    {words[currentWord]}
                                </span>
                                <br />
                                <span className={subHeader}>Reading Experience</span>
                            </h1>

                            <p className={paragraphText}>
                                Curated knowledge journeys that challenge perceptions and inspire growth.
                                Discover transformative content crafted for the modern intellect.
                            </p>
                        </div>

                        {/* SEARCH BAR (FIXED & VISIBLE) */}
                        <form onSubmit={handleSearch} className="space-y-6 md:space-y-8">
                            <div className={formContainer}>
                                <div className={`${inputWrapper} relative flex items-center`}>

                                    {/* Background */}
                                    <div className="absolute inset-0 bg-white/90 rounded-lg md:rounded-xl shadow-sm z-0"></div>

                                    {/* Input + Icon */}
                                    <div className="relative z-10 flex items-center w-full">
                                        <Search className="ml-4 md:ml-5 h-5 w-5 md:w-6 md:h-6 text-gray-600" />

                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search Authors, Titles, or Concepts..."
                                            className={`${inputField} bg-transparent z-10`}
                                        />
                                    </div>

                                    {/* SEARCH BUTTON (VISIBLE + HIGH CONTRAST) */}
                                    <button
                                        type="submit"
                                        className="
                                            absolute right-2 top-1/2 -translate-y-1/2
                                            z-20 flex items-center justify-center
                                            px-4 py-2 md:px-5 md:py-2.5
                                            bg-gradient-to-r from-[#2B5876] to-[#43C6AC]
                                            text-white font-semibold
                                            rounded-lg md:rounded-xl
                                            shadow-md hover:shadow-lg
                                            transition-all duration-200
                                        "
                                    >
                                        <Search className="h-4 w-4 md:h-5 md:w-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* STATS */}
                        <div className={statsContainer}>
                            {[
                                { number: "50k+", label: "Titles" },
                                { number: "1.2M", label: "Readers" },
                                { number: "240+", label: "Topics" }
                            ].map((stat, i) => (
                                <div className={statBox} key={i}>
                                    <div className={statNumber}>{stat.number}</div>
                                    <div className={statLabel}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* IMAGE SECTION */}
                    <div className={imageSection}>
                        <div className={imageWrapper}>
                            <img src={img} alt="Image Banner" className={imageStyle} />
                            <div className={overlayEffect} />
                        </div>
                    </div>
                </div>

                {/* FOOTER SCROLL TEXT */}
                <div className={scrollTextSection}>
                    <div className={scrollText}>
                        Curated Collections | Award-Winning Authors | Critical Analysis | Cultural Perspective
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
