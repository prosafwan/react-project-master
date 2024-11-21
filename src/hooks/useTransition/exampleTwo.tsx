import { useEffect, useState, useTransition } from "react";


// Mock API call to fetch items
const fetchItems = async () => {
    // Simulating a network request
    return new Promise((resolve) => {
      setTimeout(() => {
        const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
        resolve(items);
      }, 1000);
    });
  };

const ExampleTwo = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const [page, setPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [isPending, startTransition] = useTransition();


  useEffect(() => {
    const loadItems = async () => {
      const fetchedItems:any = await fetchItems();
      setItems(fetchedItems);
    };

    loadItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  const paginatedItems = filteredItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleInputChange = (event) => {
    const value = event.target.value;
    // Start the transition for filtering items
    startTransition(() => {
      setInput(value);
      setPage(1); // Reset to first page when filtering
    });
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };


  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Filter items..."
      />
      {isPending && <p>Loading...</p>} {/* Loading indicator */}
      <ul>
        {paginatedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span> Page {page} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ExampleTwo
