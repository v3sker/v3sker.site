'use client';

import { useTheme } from "next-themes";

import { HyperText } from "@/components/ui/hyper-text";
import { TextEffect } from "@/components/ui/text-effect";
import { Waves } from "@/components/ui/waves-background";

export default function Landing() {
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-full lg:w-[80%] lg:h-[400px] max-w-[1400px] bg-background/80 rounded-lg overflow-hidden">
      <div className="absolute inset-0">
        <Waves
          lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"}
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <div className="relative z-10 p-4 md:p-8 h-full flex flex-col justify-between">
        <div className="mt-10 md:mt-0">
          <HyperText
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-black dark:text-white"
            text="DANIIL GYNGA"
          />

          <div className="flex gap-2 items-center lg:text-xl lg:font-medium font-mono">
            <TextEffect per='word' preset='fade'>
              Founder of
            </TextEffect>

            <a href="https://btw.md" target='_blank'>
              <TextEffect per='char' preset='fade' className={`lg:text-xl font-medium font-mono text-blue-700 hover:text-purple-500 w-fit`}>
                btw.md
              </TextEffect>
            </a>
          </div>
          
          <TextEffect per='word' preset='fade' className={`lg:text-xl lg:font-medium font-mono`}>
            Full-Stack Engineer
          </TextEffect>
        </div>

        <div className={'mb-16 lg:mb-0 flex flex-col md:flex-row gap-4 md:gap-8'}>
          <a href="https://github.com/v3sKer" target='_blank'>
            <TextEffect per='char' preset='fade' className={`lg:text-xl font-medium font-mono text-blue-700 hover:text-purple-500 w-fit`}>
              Github
            </TextEffect>
          </a>

          <a href="https://www.linkedin.com/in/v3skerrrrr/" target='_blank'>
            <TextEffect per='char' preset='fade' className={`lg:text-xl font-medium font-mono text-blue-700 hover:text-purple-500 w-fit`}>
              LinkedIn
            </TextEffect>
          </a>

          <a href="https://t.me/reKs3v" target='_blank'>
            <TextEffect per='char' preset='fade' className={`lg:text-xl font-medium font-mono text-blue-700 hover:text-purple-500 w-fit`}>
              Telegram
            </TextEffect>
          </a>
        </div>
      </div>
    </div>
  )
}
