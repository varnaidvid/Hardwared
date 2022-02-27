import Countries from "./countries"
import React, { useState, useEffect } from "react"
import handleDropAnim from "./handleDropAnim"

const CountrySelector = (props) => {

    const [query, setQuery] = useState("")

    return (
        <div className="p-relative country-selector">
            <button
                type="button"
                className="country-btn"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                onClick={() => {handleDropAnim(props.isOpen ? 2 : 1, "countryDrop"); props.onToggle()}}
            >
            <span className="">
                <img
                alt={`${props.selectedValue.value}`}
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${props.selectedValue.value}.svg`}
                />
                {props.selectedValue.title}
                <i className="fas fa-angle-right" id="countryDrop"/>
            </span>
            </button>

            {props.open && (
            <ul
              className="country-drop"
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              <div className="country-search">
                  <input
                    type="search"
                    name="search"
                    autoComplete={'off'}
                    placeholder="Keresés..."
                    onChange={e => setQuery(e.target.value)}
                  />
              </div>

              <hr />

              <div className='country-content'>
                {Countries.filter(country => country.title.toLowerCase().startsWith(query.toLowerCase())).length ===
                0 ? (
                  <li className="">
                    No countries found
                  </li>
                ) : (
                  Countries.filter(country => country.title.toLowerCase().startsWith(query.toLowerCase())).map(
                    (value, index) => {
                      return (
                        <li
                          key={`${props.id}-${index}`}
                          className="d-flex align-items-center"
                          id="listbox-option-0"
                          role="option"
                          onClick={() => {
                            props.onChange(value.value);
                            setQuery('');
                            props.onToggle();
                          }}
                        >
                          <img
                            alt={`${value.value}`}
                            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value.value}.svg`}
                            className="country-flag"
                          />

                          <span className="font-normal truncate">{value.title}</span>
                          {value.value === props.selectedValue.value ? (
                            <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-8">
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          ) : null}
                        </li>
                      );
                    }
                  )
                )}
              </div>
            </ul>
          )}
        </div>
    )
}

export default CountrySelector