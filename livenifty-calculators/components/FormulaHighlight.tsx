type Props = {
  formula: string;
};

export default function FormulaHighlight({
  formula,
}: Props) {
  return (
    <div className="my-8 p-6 rounded-xl border border-gray-200 bg-gray-50 text-center">
      <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
        Formula
      </p>

      <div className="font-mono text-lg sm:text-xl font-semibold text-gray-900">
        {formula}
      </div>
    </div>
  );
}
