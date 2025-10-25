// Page4.tsx
import React from 'react';
import { features, type Feature } from "./data";

// 1. Import the icon you want from react-icons
import { BsCheck } from "react-icons/bs";

const Page4: React.FC = () => {
  return (
    <section className="p-8 min-h-screen">
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item: Feature) => (
            
            <li 
              className="bg-white p-6  border flex items-start gap-4"
            >
              
              {/* 3. Add the icon wrapper */}
              <div className="flex-shrink-0 bg-gray-100 p-2 rounded-md">
                <BsCheck className="w-6 h-6 text-black" />
              </div>

              {/* 4. This div now holds all your text content */}
              <div>
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <div>
                  <p className="text-2xl font-semibold">{item.description}</p>
                </div>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page4;