import NavButton from "./NavButton";

export default () =>{
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 p-2 bg-slate-700">
        <div className="flex justify-evenly">
          <NavButton link="/home"><i className="bi bi-columns"></i><br/>Home</NavButton>
          <NavButton link="/service"><i className="bi bi-window-fullscreen"></i><br/>Service</NavButton>
          <NavButton link="/mypage"><i className="bi bi-window-fullscreen"></i><br/>MyPage</NavButton>
        </div>
      </header>
    </>
  );
}
