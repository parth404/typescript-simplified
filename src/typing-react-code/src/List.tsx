type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
