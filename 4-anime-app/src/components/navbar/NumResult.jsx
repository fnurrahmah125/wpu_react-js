function NumResult({ animesData }) {
  return (
    <p className="search-results">
      Found <strong>{animesData.length}</strong> results
    </p>
  );
}

export default NumResult;
