import { useEffect, useRef, useState } from "react";

const Search = (props) => {
  const {
    haveSearch = true,
    haveIcon = true,
    label,
    placeholder,
    className,
    data = [],
    onChange = () => {},
    defaultValue = null,
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [dataDropdown, setDropdownData] = useState(data);
  const [value, setValue] = useState(defaultValue);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setDropdownData(data);
  };

  const handleClickItem = (value) => {
    setShowDropdown(false);
    setValue(value);
    onChange(value);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const dataSearch = data.filter((item) =>
      item.text.toLowerCase().includes(value.toLowerCase())
    );
    setDropdownData(dataSearch);
  };
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
        return;
      }
      setShowDropdown(false);
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className={className}>
      <div className={`bg-white w-full  relative shadow-md `} ref={dropdownRef}>
        <div
          className="flex items-center justify-between p-2 border cursor-pointer border-slate-100 z-0"
          onClick={handleToggleDropdown}
        >
          <span className="font-semibold z-0 select-none">
            {data?.find((item) => item.id === value)?.text || label}
          </span>
          {haveIcon && (
            <span>
              {showDropdown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </span>
          )}
        </div>
        {showDropdown && (
          <div
            className="z-30 absolute left-0 right-0 bg-white border 
                dropdown-list top-full border-slate-100 select-none"
          >
            <div className="max-h-60 overflow-y-auto">
              {dataDropdown?.map((item, index) => (
                <span
                  onClick={() => {
                    onChange(item.id);
                    handleClickItem(item.id);
                  }}
                  key={index}
                  className="block p-2  cursor-pointer hover:bg-slate-100"
                >
                  {item.text}
                </span>
              ))}
            </div>
            {haveSearch && (
              <div className="block p-1 bg-white dropdown-search border-t-2">
                <input
                  type="text"
                  name="search"
                  placeholder={placeholder}
                  className="w-full p-2 outline-none"
                  onChange={handleSearch}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
