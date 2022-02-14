import './Navbar.css';


function Navbar() {
  return (
    <main className="main-layout">

    <section className="navbar">
      <h1> nav </h1>
      <h2 to="/"> Home </h2> 
      <h2 to="/allowances"> Allowances </h2>
      <h2 to="/expenses"> Expense History </h2>
    </section>


  </main>
  );
}

export default Navbar;
