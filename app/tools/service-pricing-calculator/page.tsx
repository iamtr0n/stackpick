'use client'

import { useState } from 'react'

export default function ServicePricingCalculator() {
  const [annualIncome, setAnnualIncome] = useState(75000)
  const [billableHours, setBillableHours] = useState(30)
  const [weeksOff, setWeeksOff] = useState(4)
  const [monthlyOverhead, setMonthlyOverhead] = useState(500)
  const [profitMargin, setProfitMargin] = useState(20)

  const workingWeeks = 52 - weeksOff
  const annualBillableHours = billableHours * workingWeeks
  const annualOverhead = monthlyOverhead * 12
  const totalNeeded = annualIncome + annualOverhead
  const minimumHourlyRate = annualBillableHours > 0 ? totalNeeded / annualBillableHours : 0
  const suggestedHourlyRate = minimumHourlyRate / (1 - profitMargin / 100)
  const monthlyRevenueNeeded = totalNeeded / 12

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">Free Tool</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#111]">Service Pricing Calculator</h1>
        <p className="mt-3 text-gray-500 leading-relaxed">
          Enter your income goals and overhead to calculate the minimum and suggested hourly rate for your service business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-[#111]">Your Numbers</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Desired annual income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-[#111] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                min={0}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Billable hours per week
            </label>
            <input
              type="number"
              value={billableHours}
              onChange={(e) => setBillableHours(Number(e.target.value))}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-[#111] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              min={1}
              max={60}
            />
            <p className="mt-1 text-xs text-gray-400">Hours you can realistically bill — not total working hours</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weeks off per year
            </label>
            <input
              type="number"
              value={weeksOff}
              onChange={(e) => setWeeksOff(Number(e.target.value))}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-[#111] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              min={0}
              max={30}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business overhead per month
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="number"
                value={monthlyOverhead}
                onChange={(e) => setMonthlyOverhead(Number(e.target.value))}
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-[#111] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                min={0}
              />
            </div>
            <p className="mt-1 text-xs text-gray-400">Software, insurance, equipment, etc.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target profit margin: <span className="font-semibold text-[#2563EB]">{profitMargin}%</span>
            </label>
            <input
              type="range"
              value={profitMargin}
              onChange={(e) => setProfitMargin(Number(e.target.value))}
              className="w-full accent-[#2563EB]"
              min={0}
              max={60}
              step={5}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span>
              <span>60%</span>
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div>
          <h2 className="text-lg font-semibold text-[#111] mb-6">Your Results</h2>

          <div className="space-y-4">
            <div className="bg-[#2563EB] text-white rounded-xl p-5">
              <div className="text-sm font-medium opacity-80 mb-1">Suggested Hourly Rate</div>
              <div className="text-4xl font-bold">{fmt(suggestedHourlyRate)}</div>
              <div className="text-sm opacity-70 mt-1">includes {profitMargin}% profit margin</div>
            </div>

            <div className="bg-[#F8F9FA] rounded-xl p-5">
              <div className="text-sm font-medium text-gray-500 mb-1">Minimum Hourly Rate</div>
              <div className="text-2xl font-bold text-[#111]">{fmt(minimumHourlyRate)}</div>
              <div className="text-xs text-gray-400 mt-1">break-even, no profit buffer</div>
            </div>

            <div className="bg-[#F8F9FA] rounded-xl p-5">
              <div className="text-sm font-medium text-gray-500 mb-1">Monthly Revenue Needed</div>
              <div className="text-2xl font-bold text-[#111]">{fmt(monthlyRevenueNeeded)}</div>
              <div className="text-xs text-gray-400 mt-1">income + overhead, before profit margin</div>
            </div>

            <div className="bg-[#F8F9FA] rounded-xl p-5">
              <div className="text-sm font-medium text-gray-500 mb-1">Annual Overhead Cost</div>
              <div className="text-2xl font-bold text-[#111]">{fmt(annualOverhead)}</div>
              <div className="text-xs text-gray-400 mt-1">{fmt(monthlyOverhead)}/mo × 12</div>
            </div>

            <div className="border border-gray-100 rounded-xl p-5 text-sm text-gray-500 space-y-1">
              <div className="flex justify-between">
                <span>Working weeks/year</span>
                <span className="font-medium text-[#111]">{workingWeeks}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual billable hours</span>
                <span className="font-medium text-[#111]">{annualBillableHours.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 bg-[#F8F9FA] rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-[#111]">Ready to send professional quotes?</h3>
        <p className="mt-2 text-gray-500 leading-relaxed max-w-md mx-auto">
          QuoteMe is an AI-powered quoting platform built for service businesses. Turn your hourly rate into polished, conversion-optimized proposals in minutes.
        </p>
        <a
          href="https://quoteme.io"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#2563EB] text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Join the waitlist →
        </a>
      </div>
    </div>
  )
}
