import "./SideNav.css";

const SideNav = () => {
  return (
    <aside
      id="drawer-navigation"
      className="w-1/4 bg-white border-gray-200 border-r dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
    >
      <div className="p-4 w-full">
        <div className="flex items-center justify-center overflow-hidden profile-img-container rounded-lg sm:rounded-l-lg mb-4">
          <img src="/images/profile-image.png" alt="profile image" />
        </div>
        <div className="bg-green-500 progress-bar-striped rounded-md text-center text-white w-full">
          23***
        </div>
        <div className="p-2.5">
          <p className="text-center">Robert Brown</p>
          <button
            type="button"
            className="transition ease-in-out delay-150 bg-green-500 dark:bg-green-400 dark:focus:ring-green-600 dark:hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium hover:bg-green-300 mt-2 px-3 py-1 rounded-md text-center text-white text-xs w-full"
          >
            Add friend
          </button>
          <button
            type="button"
            className="transition ease-in-out delay-150 bg-green-500 dark:bg-green-400 dark:focus:ring-green-600 dark:hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium hover:bg-green-300 mt-2 px-3 py-1 rounded-md text-center text-white text-xs w-full"
          >
            Follow
          </button>
          <button
            type="button"
            className="transition ease-in-out delay-150 bg-red-500 dark:bg-red-400 dark:focus:ring-red-600 dark:hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium hover:bg-red-300 mt-2 px-3 py-1 rounded-md text-center text-white text-xs w-full"
          >
            Block
          </button>
          <button
            type="button"
            className="transition ease-in-out delay-150 bg-red-500 dark:bg-red-400 dark:focus:ring-red-600 dark:hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium hover:bg-red-300 mt-2 px-3 py-1 rounded-md text-center text-white text-xs w-full"
          >
            Ignore
          </button>
        </div>
        <div className="pt-2.5 px-2.5">
          <p class="font-bold text-sm">About</p>
          <p class="leading-1 pt-2 text-gray-900 text-xs">
            I tell them when I teach the law - “live, you saints, hiding your
            good deeds and exposing your sins.” (c)
          </p>
        </div>
        <div className="p-2.5">
          <p class="font-bold text-sm">Your attitude</p>
          <span class="leading-1 pt-2 text-gray-900 text-xs">positive</span>
          <span class="leading-1 pt-2 text-gray-900 text-xs">/</span>
          <span class="leading-1 pt-2 text-gray-900 text-xs">negative</span>
        </div>
        <div className="p-2.5">
          <p class="font-bold text-sm">Karma</p>
          <p class="leading-1 pt-2 text-gray-900 text-xs">positive [+25]</p>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
