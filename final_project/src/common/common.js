const toCapitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const renderArrayList = (arr) => {
  let list = arr.map((item, index) => (
    <li key={index}>
      {Array.isArray(item)
        ? renderArrayList(item)
        : typeof item === `object`
        ? renderObjectList(item)
        : String(item)}
    </li>
  ));
  return <ul>{list}</ul>;
};

const renderObjectList = (obj) => {
  let list = Object.keys(obj).map((key, index) => (
    <li key={index}>
      <strong>{toCapitalize(key)}:</strong>{" "}
      {Array.isArray(obj[key])
        ? renderArrayList(obj[key])
        : typeof obj[key] === `object`
        ? renderObjectList(obj[key])
        : String(obj[key])}
    </li>
  ));

  return <ul>{list}</ul>;
};

export { toCapitalize, renderArrayList, renderObjectList };