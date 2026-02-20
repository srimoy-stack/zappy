'use client';

import { useEffect, useState, type MouseEvent, type TouchEvent } from 'react';
import { useKioskStore } from '@/store/kioskStore';
import { menuService } from '@/services/kiosk/menuService';

const HERO_IMAGES = [
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1080',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1080',
    'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=1080',
    'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=1080',
];

export function StartScreen() {
    const { startSession, resetSession, navigateTo } = useKioskStore();
    const [currentImage, setCurrentImage] = useState(0);
    const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        resetSession();
        // Background pre-fetch
        menuService.getMenu('default');

        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleStart = (e: MouseEvent | TouchEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const touch = 'touches' in e && e.touches.length > 0 ? e.touches[0] : null;
        const clientX = touch ? touch.clientX : (e as MouseEvent).clientX;
        const clientY = touch ? touch.clientY : (e as MouseEvent).clientY;
        setRipple({ x: clientX - rect.left, y: clientY - rect.top });

        setTimeout(() => {
            startSession();
            navigateTo('identity');
        }, 300);
    };

    return (
        <div
            className="kiosk-start-screen"
            onClick={handleStart}
        >
            {/* Hero Carousel */}
            {HERO_IMAGES.map((img, idx) => (
                <div
                    key={idx}
                    className="kiosk-start-hero-image"
                    style={{ opacity: idx === currentImage ? 0.5 : 0 }}
                >
                    <img src={img} alt="Food" loading="eager" />
                </div>
            ))}

            {/* Gradient overlay */}
            <div className="kiosk-start-gradient" />

            {/* Content */}
            <div className="kiosk-start-content">
                {/* Brand logo */}
                <div className="kiosk-start-brand">
                    <div className="kiosk-start-logo">
                        <span>Z</span>
                    </div>
                    <h2 className="kiosk-start-brand-name">ZYAPPY</h2>
                </div>

                {/* Hero text */}
                <div className="kiosk-start-hero-text">
                    <h1>
                        Order &<br />
                        Pay <span className="accent">Here</span>
                    </h1>
                </div>

                {/* CTA */}
                <div className="kiosk-start-cta">
                    <div className="kiosk-start-cta-inner">
                        <span>Tap anywhere to start</span>
                        <div className="kiosk-start-cta-arrow">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Bottom indicators */}
                <div className="kiosk-start-indicators">
                    {HERO_IMAGES.map((_, idx) => (
                        <div
                            key={idx}
                            className={`kiosk-start-indicator ${idx === currentImage ? 'active' : ''}`}
                        />
                    ))}
                </div>

                {/* New: Trending Items Preview to make UX more efficient */}
                <div className="kiosk-start-trending">
                    <h3>Trending Today</h3>
                    <div className="kiosk-start-trending-list">
                        <div className="kiosk-start-trending-item">
                            <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200" alt="Pizza" />
                            <span>Pepperoni Feast</span>
                        </div>
                        <div className="kiosk-start-trending-item">
                            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200" alt="Pizza" />
                            <span>Veggie Supreme</span>
                        </div>
                        <div className="kiosk-start-trending-item">
                            <img src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=200" alt="Wings" />
                            <span>Buffalo Wings</span>
                        </div>
                        <div className="kiosk-start-trending-item">
                            <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200" alt="Drink" />
                            <span>Large Cola</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ripple effect */}
            {ripple && (
                <div
                    className="kiosk-start-ripple"
                    style={{ left: ripple.x, top: ripple.y }}
                />
            )}

            {/* Decorative blurs */}
            <div className="kiosk-start-blur kiosk-start-blur--1" />
            <div className="kiosk-start-blur kiosk-start-blur--2" />
        </div>
    );
}
