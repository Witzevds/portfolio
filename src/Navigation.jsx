function Navigation() {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <div className="navigation__left">
            <li className="navigation__left--logo">
              <a href="/">Witze</a>
            </li>
          </div>
          <div className="navigation__right">
            <li className="navigation__right--text"> <a href="/"> Contact</a></li>
            <li className="navigation__right--text"> <a href="/">Projects</a> </li>
            <li className="navigation__right--text"> <a href="/">About</a> </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
