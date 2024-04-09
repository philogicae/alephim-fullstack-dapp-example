import { useState } from 'react'
import { FaRegPaperPlane, FaSpinner, FaTimes } from 'react-icons/fa'

interface TypeboxProps {
  className?: string
  placeholder: string
  maxLength?: number
  value: string
  onChange: (value: string) => void
  onClick: (setIsFetching: (value: boolean) => void) => void
}

export default function Typebox({
  className,
  placeholder,
  maxLength = 160,
  value,
  onChange,
  onClick,
}: TypeboxProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isFocusing, setIsFocusing] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const action = async () => {
    if (value.trim().length > 0) {
      setIsFocusing(false)
      setIsHovering(false)
      onClick(setIsFetching)
    }
  }
  return (
    <div
      className={`${className} flex flex-row w-full h-full p-1 rounded ring-1 ring-blue-800 ${
        isHovering || isFocusing ? 'ring-opacity-100' : 'ring-opacity-0'
      } ${isFetching ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <textarea
        placeholder={isTyping ? '' : placeholder}
        className={`flex w-full h-full p-2 text-base text-cyan-300 placeholder-white bg-gray-800 resize-none rounded rounded-r-none outline-none overflow-hidden placeholder:text-center placeholder:pt-7 placeholder:text-lg placeholder:text-cyan-300 placeholder:pl-2 ${
          !isTyping && value.length === 0 ? 'pl-4' : ''
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        onFocus={() => {
          setIsTyping(true)
          setIsFocusing(true)
        }}
        onBlur={() => {
          setIsTyping(false)
          setIsFocusing(false)
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        disabled={isFetching}
      />
      <div className="flex flex-col h-full">
        <button
          className="bg-gray-900 rounded-none rounded-tr h-1/2 focus:outline-none focus:bg-blue-800"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={action}
          disabled={isFetching}
        >
          {isFetching ? (
            <FaSpinner className="animate-spin w-8 h-8 p-2" />
          ) : (
            <FaRegPaperPlane className="w-8 h-8 p-2" />
          )}
        </button>
        <button
          className="bg-gray-900 rounded-none rounded-br h-1/2 focus:outline-none focus:bg-blue-800"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => onChange('')}
          disabled={isFetching}
        >
          <FaTimes className="w-8 h-8 p-2" />
        </button>
      </div>
    </div>
  )
}
