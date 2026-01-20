import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function PriceDropTimer() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Check if timer exists in localStorage
    const storedEndTime = localStorage.getItem('priceDropEndTime');
    const now = Date.now();
    
    let endTime: number;
    
    if (storedEndTime && parseInt(storedEndTime) > now) {
      // Use existing timer
      endTime = parseInt(storedEndTime);
    } else {
      // Create new timer (30 minutes from now)
      endTime = now + 30 * 60 * 1000;
      localStorage.setItem('priceDropEndTime', endTime.toString());
    }
    
    const updateTimer = () => {
      const remaining = Math.max(0, endTime - Date.now());
      setTimeLeft(remaining);
      
      if (remaining === 0) {
        // Reset timer when it reaches 0
        const newEndTime = Date.now() + 30 * 60 * 1000;
        localStorage.setItem('priceDropEndTime', newEndTime.toString());
      }
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
      <Clock className="w-4 h-4" />
      <span>SUBE A 49.99€ EN {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}
