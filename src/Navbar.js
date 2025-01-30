function Navbar({ children }) {
  return (
    <>
      <nav className={`flex bg-violet-800 w-full py-5 px-6 h-[10%]`}>
        {children}
      </nav>
    </>
  );
}

export default Navbar;
