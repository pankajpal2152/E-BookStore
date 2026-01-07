import React from "react";
import { homeAboutStyles as s } from "../assets/dummystyles";

// Images & Data
import HomeAboutImage from "../assets/HomeAboutImage.png";
import { hastats, featuredBooks } from "../assets/dummydata";

// Icons
import { ArrowRight } from "lucide-react";

// Routing
import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className={s.wrapper}>

            {/* Background Blurs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={s.bgBlur1}></div>
                <div className={s.bgBlur2}></div>
            </div>

            <div className={s.container}>

                {/* ABOUT SECTION */}
                <div className={s.aboutGrid}>

                    {/* IMAGE BLOCK */}
                    <div className={s.imageWrapper}>
                        <div className={s.imageGlow}></div>
                        <div className={s.imageContainer}>
                            <img
                                src={HomeAboutImage}
                                alt="About Section"
                                className={s.aboutImage}
                            />
                        </div>
                    </div>

                    {/* TEXT BLOCK */}
                    <div className="space-y-8">
                        <div>
                            <h2 className={s.aboutHeader}>Our Literary Journey</h2>
                            <div className={s.underline}></div>
                        </div>

                        <p className={s.aboutText}>
                            Founded with a passion for literature, BookShell has evolved into a
                            sanctuary for book lovers. We curate exceptional reading experiences,
                            connecting readers with stories that inspire, educate, and transport
                            them to new worlds.
                        </p>

                        {/* STATS */}
                        <div className={s.statGrid}>
                            {hastats.map((stat, index) => (
                                <div className={s.statCard} key={index}>
                                    <div className={s.statIconWrap}>
                                        <stat.icon className={s.statIcon} />
                                    </div>
                                    <h3 className={s.statValue}>{stat.value}</h3>
                                    <p className={s.statLabel}>{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className={s.aboutButton}>
                            <span>Learn More About Us</span>
                            <ArrowRight className={s.arrowIcon} />
                        </Link>
                    </div>

                </div>

                {/* FEATURED BOOKS HEADER */}
                <div className="mb-12 text-center">
                    <h2 className={s.sectionHeader}>Legendary Volumes</h2>
                    <div className={s.headerUnderline}></div>
                    <p className={s.headerText}>
                        Handpicked recommendations from our literary experts that you won't want to miss.
                    </p>
                </div>

                {/* FEATURED BOOKS GRID */}
                <div className={s.bookGrid}>
                    {featuredBooks.map((book, index) => (
                        <div className={s.bookCardWrap} key={index}>
                            <div className={s.bookCardGlow}></div>

                            <div className={s.bookCard}>
                                <div className={s.bookImageWrapper}>
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className={s.bookImage}
                                    />
                                </div>

                                <div className={s.bookContent}>
                                    <h3 className={s.bookTitle}>{book.title}</h3>
                                    <p className={s.bookAuthor}>{book.author}</p>
                                    <p className={s.bookDesc}>{book.description}</p>

                                    <Link to="/books" className={s.discoverLink}>
                                        <span>
                                            Discover
                                        </span>
                                        <ArrowRight className={s.arrowSmall} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
