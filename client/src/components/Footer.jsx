import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="botanical-footer">
      <div className="footer-content">
        <p>🌱 Botanical Q&A &copy; {new Date().getFullYear()}</p>
        <p>Built with ❤️ for plant lovers</p>
      </div>
    </footer>
  );
}