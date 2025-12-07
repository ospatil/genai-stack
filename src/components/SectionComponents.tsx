import { type ReactNode } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  description?: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
  headerClassName?: string;
  containerClassName?: string;
}

export const CollapsibleSection = ({
  title,
  description,
  isExpanded,
  onToggle,
  children,
  headerClassName = "p-6 cursor-pointer flex items-center justify-between hover:bg-gray-50",
  containerClassName = "bg-white rounded-lg shadow-lg overflow-hidden mb-8"
}: CollapsibleSectionProps) => {
  return (
    <div className={containerClassName}>
      <div className={headerClassName} onClick={onToggle}>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          {description && <p className="text-gray-600 mt-1">{description}</p>}
        </div>
        {isExpanded ? (
          <ChevronDown className="w-6 h-6 text-gray-600" />
        ) : (
          <ChevronRight className="w-6 h-6 text-gray-600" />
        )}
      </div>
      {isExpanded && children}
    </div>
  );
};

interface TechnologyOptionProps {
  name: string;
  pros: string[];
  cons: string[];
  when: string;
}

export const TechnologyOption = ({ name, pros, cons, when }: TechnologyOptionProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg text-gray-800 mb-2">{name}</h3>

      <div className="grid md:grid-cols-2 gap-3 mb-2">
        <div>
          <p className="text-sm font-semibold text-green-700 mb-1">✓ Pros:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {pros.map((pro, i) => (
              <li key={i}>• {pro}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-red-700 mb-1">✗ Cons:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {cons.map((con, i) => (
              <li key={i}>• {con}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded p-2 mt-2">
        <p className="text-sm text-gray-700">
          <strong className="text-blue-700">When to use:</strong> {when}
        </p>
      </div>
    </div>
  );
};

interface GlossaryItemProps {
  title: string;
  description: string;
  alternatives: string[];
  badge?: string;
  color: string;
  titleColor: string;
}

export const GlossaryItem = ({
  title,
  description,
  alternatives,
  badge,
  color,
  titleColor
}: GlossaryItemProps) => {
  return (
    <div className={`border-2 ${color} rounded-lg p-4`}>
      <h3 className={`font-bold text-xl mb-2 ${titleColor}`}>
        {title}
        {badge && (
          <span className={`text-sm px-2 py-1 rounded ml-2 ${color.replace('border-', 'bg-').replace('-200', '-200')}`}>
            {badge}
          </span>
        )}
      </h3>
      <p className="text-sm text-gray-700 mb-3">{description}</p>
      <div className="bg-white rounded p-3">
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Competitive Alternatives:
        </p>
        <ul className="text-sm text-gray-600 space-y-1">
          {alternatives.map((alt, i) => (
            <li key={i}>• {alt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
