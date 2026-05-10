interface ProgressBarProps {
  progress: number
  currentQuestion: number
  totalQuestions: number
}

export function ProgressBar({ progress, currentQuestion, totalQuestions }: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Attention Audit</span>
        <span className="text-xs font-medium text-[#f97316]">{Math.round(progress)}% complete</span>
      </div>
      <div className="w-full bg-[#1a1f1b] rounded-full h-1.5 overflow-hidden border border-white/5">
        <div
          className="bg-[#f97316] h-1.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-600">Question {currentQuestion} of {totalQuestions}</span>
        <span className="text-xs text-gray-600">{totalQuestions - currentQuestion} remaining</span>
      </div>
    </div>
  )
}