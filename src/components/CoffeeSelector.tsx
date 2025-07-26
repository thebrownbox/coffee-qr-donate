import { useState } from 'react';
import coffeeCup from '@/assets/coffee-cup.png';

const CoffeeSelector = () => {
  const [selectedCoffeeCount, setSelectedCoffeeCount] = useState(5);

  // Placeholder QR codes - in a real implementation, these would be different QR codes for different amounts
  const qrCodes = Object.fromEntries(
    Array.from({ length: 10 }, (_, i) => {
      const count = i + 1;
      const amount = count * 10000;
      return [
        count,
        `https://img.vietqr.io/image/970432-153561796-qr_only.png?amount=${amount}&addInfo=Donate`
      ];
    })
  );

  const calculatePrice = (coffeeCount: number) => {
    return (coffeeCount * 10).toFixed(3);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-4">The Brown Box</h1>
        <p className="text-xl text-muted-foreground">Thank you for your support!</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-16">
        {/* QR Code Section */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 bg-card border-2 border-border rounded-lg p-4 flex items-center justify-center">
            <img
              src={qrCodes[selectedCoffeeCount as keyof typeof qrCodes]}
              alt={`QR Code for ${selectedCoffeeCount} coffee${selectedCoffeeCount > 1 ? 's' : ''}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Coffee Count Section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-8 mb-6">
            <img
              src={coffeeCup}
              alt="Coffee cup"
              className="w-20 h-20 object-contain"
            />
            <span className="text-6xl font-bold text-foreground">×</span>
            <span className="text-6xl font-bold text-foreground">{selectedCoffeeCount}</span>
          </div>
          <p className="text-2xl text-muted-foreground font-medium">
            {calculatePrice(selectedCoffeeCount)} đ
          </p>
        </div>
      </div>

      {/* Number Selector */}
      <div className="flex gap-4 flex-wrap justify-center">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => setSelectedCoffeeCount(number)}
            className={`w-16 h-16 rounded-full border-2 text-xl font-semibold transition-all duration-200 hover:scale-105 ${selectedCoffeeCount === number
              ? 'bg-warm-accent text-white border-warm-accent shadow-lg'
              : 'bg-background text-foreground border-border hover:border-muted-foreground'
              }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoffeeSelector;