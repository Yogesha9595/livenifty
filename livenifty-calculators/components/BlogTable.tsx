type Props = {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
};

export default function BlogTable({
  headers,
  rows,
  caption,
}: Props) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">

        {caption && (
          <caption className="text-left text-gray-500 text-sm mb-2">
            {caption}
          </caption>
        )}

        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="even:bg-gray-50 hover:bg-blue-50 transition"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 border-b border-gray-100 text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
