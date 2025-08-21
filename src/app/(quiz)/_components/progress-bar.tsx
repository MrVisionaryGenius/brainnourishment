interface ProgressBarProps {
  progress: number
  currentQuestion: number
  totalQuestions: number
}

export function ProgressBar({ progress, currentQuestion, totalQuestions }: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#1b201c] opacity-80">Progress</span>
        <span className="text-sm font-medium text-[#1b201c] opacity-80">{Math.round(progress)}% Complete</span>
      </div>

      <div className="w-full bg-[#f1eada] rounded-full h-3 overflow-hidden border border-[#ca6e3f]/20">
        <div
          className="bg-gradient-to-r from-[#ca6e3f] to-[#ca6d41] h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-[#1b201c] opacity-70">
          Question {currentQuestion} of {totalQuestions}
        </span>
        <span className="text-xs text-[#1b201c] opacity-70">{totalQuestions - currentQuestion} remaining</span>
      </div>
    </div>
  )
}
