import { useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface SocialProofItem {
    name: string;
    action: string;
    time: string;
}

const socialProofs: SocialProofItem[] = [
    { name: "Dimas", action: "booked Deep Cleaning", time: "2 mins ago" },
    { name: "Sarah", action: "booked Repaint", time: "5 mins ago" },
    { name: "Budi", action: "booked Unyellowing", time: "12 mins ago" },
    { name: "Putri", action: "booked Repair", time: "Just now" },
    { name: "Rizky", action: "booked Fast Clean", time: "8 mins ago" },
];

const SocialProof = () => {
    const [visible, setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState<SocialProofItem | null>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Min swipe distance
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe || isRightSwipe) {
            setVisible(false);
        }
    };

    useEffect(() => {
        // Initial popup after 5 seconds
        const initialTimer = setTimeout(() => {
            showRandomProof();
        }, 5000);

        // Loop every 30 seconds
        const loopTimer = setInterval(() => {
            showRandomProof();
        }, 30000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(loopTimer);
        };
    }, []);

    const showRandomProof = () => {
        const randomItem = socialProofs[Math.floor(Math.random() * socialProofs.length)];
        setCurrentItem(randomItem);
        setVisible(true);

        // Auto hide after 5 seconds
        setTimeout(() => {
            setVisible(false);
        }, 5000);
    };

    if (!visible || !currentItem) return null;

    return (
        <div
            className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[100] animate-fade-in-up"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-4 flex items-center gap-4 max-w-sm cursor-grab active:cursor-grabbing">
                <div className="bg-green-100 text-green-600 p-2 rounded-full shrink-0">
                    <CheckCircle2 size={24} />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground text-sm truncate">
                        {currentItem.name} <span className="font-normal text-muted-foreground">{currentItem.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{currentItem.time}</p>
                </div>
                <button
                    onClick={() => setVisible(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

export default SocialProof;
