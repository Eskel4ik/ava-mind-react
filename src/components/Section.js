import '../css/Section.css';

function Section({ children }) {
  return (
    <div className="section">
      {children}
    </div>
  );
}

export default Section;
