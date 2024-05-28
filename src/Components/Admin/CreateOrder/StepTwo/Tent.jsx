import React, { useState, useRef, useEffect } from "react";
import data from "./data";
import icon from "images/icon.png";

const Tent = () => {
  const [formData, setFormData] = useState({
    container_type: "",
    cargoName: "",
    loadingType: "",
    cargoCategory: "",
    cargoType: "",
    dimensions: "",
    weight: "",
    insured: false,
    comments: "",
    file: null,
  });
  
  

  // For the "Type" field
  const [type, setType] = useState("");
  const [dropdownStateType, setDropdownStateType] = useState(false);
  const [searchTermType, setSearchTermType] = useState("");
  const dropdownRefType = useRef(null);
  const [selectedOptionType, setSelectedOptionType] = useState("");

  // For the "Loading type" field
  const [dropdownStateLoading, setDropdownStateLoading] = useState(false);
  const dropdownRefLoading = useRef(null);
  const [selectedOptionLoading, setSelectedOptionLoading] = useState("");

  // For the "Cargo category" field
  const [dropdownStateCategory, setDropdownStateCategory] = useState(false);
  const dropdownRefCategory = useRef(null);
  const [selectedOptionCategory, setSelectedOptionCategory] = useState("");

  // For the "Cargo type" field
  const [dropdownStateCargoType, setDropdownStateCargoType] = useState(false);
  const dropdownRefCargoType = useRef(null);
  const [selectedOptionCargoType, setSelectedOptionCargoType] = useState("");

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      file: event.target.files[0], // Capture the first file
    });
  };

  useEffect(() => {
    const handleClickOutsideType = (event) => {
      if (
        dropdownRefType.current &&
        !dropdownRefType.current.contains(event.target)
      ) {
        setDropdownStateType(false);
      }
    };

    const handleClickOutsideLoading = (event) => {
      if (
        dropdownRefLoading.current &&
        !dropdownRefLoading.current.contains(event.target)
      ) {
        setDropdownStateLoading(false);
      }
    };

    const handleClickOutsideCategory = (event) => {
      if (
        dropdownRefCategory.current &&
        !dropdownRefCategory.current.contains(event.target)
      ) {
        setDropdownStateCategory(false);
      }
    };

    const handleClickOutsideCargoType = (event) => {
      if (
        dropdownRefCargoType.current &&
        !dropdownRefCargoType.current.contains(event.target)
      ) {
        setDropdownStateCargoType(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideType);
    document.addEventListener("mousedown", handleClickOutsideLoading);
    document.addEventListener("mousedown", handleClickOutsideCategory);
    document.addEventListener("mousedown", handleClickOutsideCargoType);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideType);
      document.removeEventListener("mousedown", handleClickOutsideLoading);
      document.removeEventListener("mousedown", handleClickOutsideCategory);
      document.removeEventListener("mousedown", handleClickOutsideCargoType);
    };
  }, []);

  const handleChangeType = (e) => {
    const { value } = e.target;
    setSelectedOptionType(value);
    setFormData({
      ...formData,
      container_type: value,
    });
    setSearchTermType(value);
    setDropdownStateType(true);
  };

  const toggleDropdownType = () => {
    setDropdownStateType(!dropdownStateType);
  };

  const handleSearchInputChangeType = (e) => {
    setSearchTermType(e.target.value);
  };

  const filteredOptionsType = () => {
    return data.filter((option) =>
      option.toLowerCase().includes(searchTermType.toLowerCase())
    );
  };

  const handleOptionClickType = (option) => {
    setSelectedOptionType(option);
    setSearchTermType("");
    setDropdownStateType(false);
    setFormData({
      ...formData,
      type: option,
    });
  };

  const [checked, setChecked] = useState({ yes: false, no: false });

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setFormData({
      ...formData,
      insured: name === "yes",
    });
  };

  const handleOptionClickLoading = (option) => {
    setSelectedOptionLoading(option);
    setFormData({
      ...formData,
      loadingType: option,
    });
    setDropdownStateLoading(false);
  };

  const handleOptionClickCategory = (option) => {
    setSelectedOptionCategory(option);
    setFormData({
      ...formData,
      cargoCategory: option,
    });
    setDropdownStateCategory(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionClickCargoType = (option) => {
    setSelectedOptionCargoType(option);
    setFormData({
      ...formData,
      cargoType: option,
    });
    setDropdownStateCargoType(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row row-dr">
          <div className="col-6 mb-3 position-relative">
            <div className="d-flex flex-column">
              <label htmlFor="type" className="label">
                Type *
              </label>
              <div className="dropdown" ref={dropdownRefType}>
                <input
                  type="text"
                  className="form-control data"
                  id="type"
                  name="type"
                  value={selectedOptionType}
                  onChange={handleChangeType}
                  onClick={toggleDropdownType}
                  aria-haspopup="true"
                  aria-expanded={dropdownStateType ? "true" : "false"}
                />

                <ul
                  className={`dropdown-menu ${dropdownStateType ? "show" : ""}`}
                  aria-labelledby="dropdownMenuButton"
                  style={{ width: "100%" }}
                >
                  <li>
                    <input
                      type="search"
                      className="form-control input search-input"
                      placeholder="&#128269; Search..."
                      value={searchTermType}
                      onChange={handleSearchInputChangeType}
                    />
                  </li>

                  {filteredOptionsType().map((option) => (
                    <li key={option}>
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => handleOptionClickType(option)}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="cargo_name" className="label">
              Cargo name *
            </label>
            <input
              type="text"
              id="cargo_name"
              className="form-control data"
              value={formData.cargoName}
              onChange={(e) =>
                setFormData({ ...formData, cargoName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row row-dr">
          <div className="col-6 mb-3">
            <label htmlFor="loading_type" className="label">
              Loading type
            </label>
            <div className="dropdown" ref={dropdownRefLoading}>
              <input
                type="text"
                className="form-control data"
                id="loading_type"
                name="loading_type"
                value={selectedOptionLoading}
                readOnly
                onClick={() => setDropdownStateLoading(!dropdownStateLoading)}
                aria-haspopup="true"
                aria-expanded={dropdownStateLoading ? "true" : "false"}
              />

              <ul
                className={`dropdown-menu ${
                  dropdownStateLoading ? "show" : ""
                }`}
                aria-labelledby="dropdownMenuButton"
              >
                {data.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => handleOptionClickLoading(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="cargo_category" className="label">
              Cargo category *
            </label>
            <div className="dropdown" ref={dropdownRefCategory}>
              <input
                type="text"
                className="form-control data"
                id="cargo_category"
                name="cargo_category"
                value={selectedOptionCategory}
                readOnly
                onClick={() => setDropdownStateCategory(!dropdownStateCategory)}
                aria-haspopup="true"
                aria-expanded={dropdownStateCategory ? "true" : "false"}
              />

              <ul
                className={`dropdown-menu ${
                  dropdownStateCategory ? "show" : ""
                }`}
                aria-labelledby="dropdownMenuButton"
              >
                {data.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => handleOptionClickCategory(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row row-dr">
          <div className="col-6 mb-3">
            <label htmlFor="cargo_type" className="label">
              Cargo type *
            </label>
            <div className="dropdown" ref={dropdownRefCargoType}>
              <input
                type="text"
                className="form-control data"
                id="cargo_type"
                name="cargo_type"
                value={selectedOptionCargoType}
                readOnly
                onClick={() =>
                  setDropdownStateCargoType(!dropdownStateCargoType)
                }
                aria-haspopup="true"
                aria-expanded={dropdownStateCargoType ? "true" : "false"}
              />

              <ul
                className={`dropdown-menu ${
                  dropdownStateCargoType ? "show" : ""
                }`}
                aria-labelledby="dropdownMenuButton"
              >
                {data.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => handleOptionClickCargoType(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="dimensions" className="label">
              Dimensions (meters)
            </label>
            <input
              type="text"
              id="dimensions"
              className="form-control data"
              value={formData.dimensions}
              onChange={(e) =>
                setFormData({ ...formData, dimensions: e.target.value })
              }
            />
          </div>

          <div className="col-6 mb-3">
            <label htmlFor="weight" className="label">
              Weight *
            </label>
            <input
              type="text"
              id="weight"
              className="form-control data"
              value={formData.weight}
              onChange={(e) =>
                setFormData({ ...formData, weight: e.target.value })
              }
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="weight" className="label">
              Is cargo insured? *
            </label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="yes"
                  checked={formData.insured}
                  onChange={handleCheckboxChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="checkbox"
                  name="no"
                  checked={!formData.insured}
                  onChange={handleCheckboxChange}
                />
                No
              </label>
            </div>
          </div>
          <div className="col-6 mb-3 comments">
            <label htmlFor="weight" className="label">
              Comments
            </label>
            <textarea
              name="comments"
              className="form-control textarea"
              id="comments"
              value={formData.comments}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="create-img file">
            <input className="file" type="file" onChange={handleFileChange} />
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <div className="text">
              <p className="darker">Drag & drop or Choose a file to upload</p>
              <p className="fader">
                DOCX, XLSX, PDF, JPG, and PNG formats up to 50 MB
              </p>
            </div>
            <div className="text-sm-center mt-2">
              <div className="browse">
                <button>Browse</button>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tent;
