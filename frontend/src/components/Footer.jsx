import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import logo from "../assets/logoicon.png"

// Styles
import { footerStyles as styles } from "../assets/dummystyles"

// Data
import { socialLinks, quickLinks } from "../assets/dummydata"

// Icons (⭐ FIXED ALL MISSING IMPORTS)
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* LOGO */}
                    <div className={styles.logoBlock}>
                        <Link to="/" className={styles.logoLink}>
                            <img src={logo} alt="Logo" className={styles.logoImage} />
                            <h1 className={styles.logoText}>E-BOOK_STORE</h1>
                        </Link>

                        <p className={styles.aboutText}>
                            Your gateway to literary adventures. Discover, explore,
                            and immerse yourself in the world of books.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className={styles.socialWrap}>
                            {socialLinks.map(({ Icon, url }, i) => (
                                <a
                                    href={url}
                                    key={i}
                                    className={styles.socialButton}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className={styles.socialIcon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className={styles.quickLinksBlock}>
                        <h3 className={styles.quickLinksTitle}>Quick Links</h3>

                        <ul className={styles.quickLinksList}>
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.url} className={styles.quickLinkItem}>
                                        <span className={styles.quickLinkDot}></span>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div className={styles.newsletterBlock}>
                        <h3 className={styles.newsletterTitle}>Stay Updated</h3>
                        <p className={styles.newsletterText}>
                            Subscribe to our newsletter for the latest releases and exclusive offers.
                        </p>

                        <form className={styles.formWrap}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.input}
                            />
                            <button type="submit" className={styles.button}>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </form>
                    </div>

                    {/* CONTACT INFO */}
                    <div className={styles.contactBlock}>
                        <h3 className={styles.contactTitle}>Contact Us</h3>

                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <MapPin className={styles.contactIcon} />
                                <span>123 Literary Lane, BookVille, BK 12345</span>
                            </div>

                            <div className={styles.contactRow}>
                                <Phone className={styles.contactIconInline} />
                                <span>+91 7777777777</span>
                            </div>

                            <div className={styles.contactRow}>
                                <Mail className={styles.contactIconInline} />
                                <span>contact@E-BOOK_STORE.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className={styles.copyrightWrap}>
                    <p className={styles.copyrightText}>
                        &copy; {new Date().getFullYear()} E-BOOK_STORE. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
