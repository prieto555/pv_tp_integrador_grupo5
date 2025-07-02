
export const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © {new Date().getFullYear()} Copyright:{' '}
        <a className="text-body" href="https://virtual.unju.edu.ar/course/view.php?id=2540/">
          Programacion Visual
        </a>
      </div>
    </footer>
  );
};