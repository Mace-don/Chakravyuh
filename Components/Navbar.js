const Navbar = () => {
  return (
    <div className="flex px-5 font-olden text-xl text-white">
      <div className="flex flex-1 space-x-10 py-2 ">
        <div>Chakravyuh</div>
        <div>About</div>
        <div>Rules</div>
        <div>Developer Team</div>
      </div>
      <div className="flex grow-[0.25] justify-end">
        <div className="py-2">Sign Up/ Sign In</div>
      </div>
    </div>
  )
}

export default Navbar
