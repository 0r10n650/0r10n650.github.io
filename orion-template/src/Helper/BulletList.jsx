export default function BulletList({ items }) {
  return (
    <ul className="list-disc pl-6 space-y-1">
      {items.map((item, i) => (
        <li className="pt-2" key={i}>{item}</li>
      ))}
    </ul>
  );
}