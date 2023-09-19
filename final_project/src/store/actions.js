// action types
const ACTION_COUNTRY_DELETE = `ACTION_COUNTRY_DELETE`;

// actions
const actionCountryDelete = (payload) => ({
  type: ACTION_COUNTRY_DELETE,
  payload,
});

export { ACTION_COUNTRY_DELETE, actionCountryDelete };
