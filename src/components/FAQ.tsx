"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ChevronDown, Plus } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
  iconType?: "chevron" | "plus" | "custom";
  allowMultiple?: boolean;
  animationDuration?: number;
  staggerDelay?: number;
  theme?: "light" | "dark" | "custom";
  customColors?: {
    background?: string;
    questionBg?: string;
    questionText?: string;
    answerBg?: string;
    answerText?: string;
    border?: string;
    accent?: string;
  };
}

const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle,
  items,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  itemClassName = "",
  questionClassName = "",
  answerClassName = "",
  iconType = "plus",
  allowMultiple = false,
  animationDuration = 0.4,
  staggerDelay = 0.1,
  theme = "light",
  customColors = {},
}) => {
  const [activeItems, setActiveItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const answerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const iconRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Themes
  const themes = {
    light: {
      background: "bg-white",
      questionBg: "bg-white",
      questionText: "text-gray-900",
      answerBg: "bg-gray-50",
      answerText: "text-gray-700",
      border: "border-gray-200",
      accent: "text-red-600",
    },
    dark: {
      background: "bg-gray-900",
      questionBg: "bg-gray-800",
      questionText: "text-white",
      answerBg: "bg-gray-800",
      answerText: "text-gray-300",
      border: "border-gray-700",
      accent: "text-blue-400",
    },
    custom: customColors,
  };

  const currentTheme = themes[theme];

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR issues

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power3.out",
        }
      );
    }
  }, [staggerDelay]);

  const toggleItem = (id: string) => {
    const newActive = new Set(activeItems);
    if (newActive.has(id)) {
      newActive.delete(id);
      animateClose(id);
    } else {
      if (!allowMultiple) {
        activeItems.forEach((itemId) => animateClose(itemId));
        newActive.clear();
      }
      newActive.add(id);
      animateOpen(id);
    }
    setActiveItems(newActive);
  };

  const animateOpen = (id: string) => {
    const answer = answerRefs.current[id];
    const icon = iconRefs.current[id];
    const item = itemRefs.current[id];

    if (answer) {
      gsap.set(answer, { height: "auto" });
      const height = answer.offsetHeight;
      gsap.set(answer, { height: 0 });
      gsap.to(answer, {
        height,
        duration: animationDuration,
        ease: "power3.out",
      });
      gsap.fromTo(
        answer.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: animationDuration * 0.8, delay: 0.1 }
      );
    }
    if (icon) {
      gsap.to(icon, {
        rotation: iconType === "chevron" ? 180 : 45,
        scale: 1.1,
        duration: animationDuration,
      });
    }
    if (item) {
      gsap.to(item, { scale: 1.02, duration: 0.2, yoyo: true, repeat: 1 });
    }
  };

  const animateClose = (id: string) => {
    const answer = answerRefs.current[id];
    const icon = iconRefs.current[id];

    if (answer) {
      gsap.to(answer.children, {
        opacity: 0,
        y: -10,
        duration: animationDuration * 0.4,
      });
      gsap.to(answer, {
        height: 0,
        duration: animationDuration,
        delay: animationDuration * 0.2,
      });
    }
    if (icon) {
      gsap.to(icon, { rotation: 0, scale: 1, duration: animationDuration });
    }
  };

  const renderIcon = () => {
    switch (iconType) {
      case "chevron":
        return <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Plus className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`w-full mb-16 max-w-7xl mx-auto p-10 sm:p-10 ${currentTheme.background} ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side Title */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 lg:self-start">
          <div className="text-center lg:text-left">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${currentTheme.questionText} ${titleClassName}`}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={`text-base sm:text-lg lg:text-xl ${currentTheme.answerText} ${subtitleClassName}`}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[item.id] = el;
              }}
              className={`${currentTheme.questionBg} ${currentTheme.border} border rounded-xl overflow-hidden shadow-sm transition-all duration-300 cursor-pointer ${itemClassName}`}
            >
              <div
                onClick={() => toggleItem(item.id)}
                className={`p-4 sm:p-6 flex items-center justify-between hover:${currentTheme.answerBg} transition-colors duration-200 ${questionClassName}`}
              >
                <h3
                  className={`text-base sm:text-lg font-semibold pr-4 ${currentTheme.questionText}`}
                >
                  {item.question}
                </h3>
                <div
                  ref={(el) => {
                    iconRefs.current[item.id] = el;
                  }}
                  className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center ${currentTheme.accent}`}
                >
                  {renderIcon()}
                </div>
              </div>

              <div
                ref={(el) => {
                  answerRefs.current[item.id] = el;
                }}
                className="overflow-hidden"
                style={{ height: 0 }}
              >
                <div
                  className={`px-4 pb-4 sm:px-6 sm:pb-6 ${currentTheme.answerBg} ${currentTheme.answerText} ${answerClassName}`}
                >
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
