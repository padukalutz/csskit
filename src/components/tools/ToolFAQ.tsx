interface FAQItem {
  question: string;
  answer: string;
}

interface ToolFAQProps {
  items: FAQItem[];
}

export default function ToolFAQ({ items }: ToolFAQProps) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}