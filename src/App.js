import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "what is react",
    content: "react is a front end js framework",
  },
  {
    title: "what use react",
    content: "react is a nice js framework",
  },
  {
    title: "how to use  react",
    content: "npx commance",
  },
];

const options = [
  {
    value: "red",
    label: "The color is Red"
  },
  {
    value: "green",
    label: "Green is fresh"
  },
  {
    value: "blue",
    label: "And the sky is blue"
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}
      {/* <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle Dropdown
      </button>
      {showDropDown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Translate />
    </div>
  );
};
