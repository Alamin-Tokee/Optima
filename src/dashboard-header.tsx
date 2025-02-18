"use client"

import { ChevronLeft, ChevronRight, Settings, SkipForward } from "lucide-react"
import { useEffect, useState } from "react"

export function DashboardHeader() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-16 border-b border-gray-800 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-gray-800 rounded">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-1 hover:bg-gray-800 rounded">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div>
          <div className="text-[10px] uppercase text-gray-400 leading-tight">STATION</div>
          <div className="text-lg font-semibold leading-tight">Valve Plate</div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <div className="text-[10px] uppercase text-gray-400 leading-tight">SHIFT</div>
            <div className="leading-tight">Monday 03.02 - Morning</div>
          </div>
          <div className="flex gap-1">
            <button className="p-1 hover:bg-gray-800 rounded">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-gray-800 rounded">
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-gray-800 rounded">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-mono tabular-nums">
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </span>
          <span className="text-xl text-gray-500">17</span>
        </div>
        <button className="p-1 hover:bg-gray-800 rounded">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

