interface Props {
  canvas: string
}

const CanvasTip = ({ canvas }: Props) => {
  const tips: { [canvas: string]: string[] } = {
    problem: [
      'List your top 1-3 problem.',
      'Existing alternatives: List how these problems are solved today.',
    ],
    solution: ['Outline a possible solution for each problem.'],
    keyMetrics: ['List the key numbers that tell you how business is doing.'],
    uniqueValueProp: [
      'Single, clear, compelling message that states why you are different and worth paying atention.',
      'High-level concept: List your X for Y analogy e.g Youtube = flickr for videos.',
    ],
    unfairAdvantages: ['Something that cannot be easily brought or copied.'],
    channels: ['List your path to customers (inbound or outbound)'],
    customerSegments: [
      'List your target customer and users.',
      'Early adopters: List the ideal characteristics of your ideal customers.',
    ],
    costStructure: ['List your fixed and variable costs.'],
    revenueStreams: ['List your sources of revenue'],
  }

  return (
    <ul className="">
      {tips[canvas].map((tip) => (
        <li className="text-gray-500 text-sm">{tip}</li>
      ))}
    </ul>
  )
}

export default CanvasTip
