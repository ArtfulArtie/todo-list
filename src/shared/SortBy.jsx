function SortBy({
  sortBy,
  sortDirection,
  onSortByChange,
  onSortDirectionChange,
}) {
  return (
    <div>
      <label htmlFor="sort-by">Sort by</label>
      <select
        id="sort-by"
        value={sortBy}
        onChange={onSortByChange}
      >
        <option value="createdAt">Created At</option>
        <option value="title">Title</option>
      </select>

      <label htmlFor="sort-direction">Order</label>
      <select
        id="sort-direction"
        value={sortDirection}
        onChange={onSortDirectionChange}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
}

export default SortBy;