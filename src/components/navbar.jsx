const Navbar = () => {
  return (
    <header className="h-20 w-full flex justify-between items-center container lg:px-44">
      <span className="text-gray-900 inline-flex items-center lg:font-bold lg:text-2xl text-xl font-normal">
        <svg
          className="text-sky-500 stroke-current mr-1"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none"></path>
          <rect x="3" y="12" width="6" height="8" rx="1"></rect>
          <rect x="9" y="8" width="6" height="12" rx="1"></rect>
          <rect x="15" y="4" width="6" height="16" rx="1"></rect>
          <path d="M4 20h14"></path>
        </svg>
        landing
      </span>
      <ul className="flex items-center gap-4">
        <li  className="hover:text-sky-500 lg:text-xl"><a target="_blank" href="https://github.com/Arash2oo4/">Github</a></li>
        <li className="hover:text-sky-500 lg:text-xl"><a  target="_blank" href="https://arashlatifi.ir/">website</a></li>
      </ul>
    </header>
  );
};

export default Navbar;
