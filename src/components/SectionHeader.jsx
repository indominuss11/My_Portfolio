export default function SectionHeader({ number, title, centered = false }) {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      <span className="section-num">{number} //</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
}
