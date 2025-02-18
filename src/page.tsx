import { DashboardHeader } from "./dashboard-header"
import { PerformanceChart } from "./performance-chart"
import { ProductionTimeline } from "./production-timeline"
import { StatusBar } from "./status-bar"
import { BatchInfo } from "./batch-info"

export default function Page() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <DashboardHeader />
      <div className="flex-1 grid grid-cols-12 gap-4 p-4">
        <div className="col-span-5 border border-indigo-600">
          <BatchInfo />
        </div>
        <div className="col-span-7 border border-indigo-600">
          <PerformanceChart />
        </div>
        <div className="col-span-12 border border-indigo-600">
          <ProductionTimeline />
        </div>
      </div>
      <StatusBar />
    </div>
  )
}

