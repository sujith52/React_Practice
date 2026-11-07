import React,{useState} from "react"

function Pagination(){
    let [items] = useState([
        "Item 1", "Item 2", "Item 3", "Item 4", 
        "Item 5", "Item 6", "Item 7", "Item 8", 
        "Item 9"
    ])

    let[curpage, setCurpage] = useState(1)
    let itemsperpage = 5
    let indexOfLast = curpage + itemsperpage
    let indexOfFirst = indexOfLast - itemsperpage
    let  currentItems = items.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(items.length / itemsperpage);

  const handleNext = () => {
    if (curpage < totalPages) setCurpage(curpage + 1);
  };

  const handlePrev = () => {
    if (curpage > 1) setCurpage(curpage - 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>React Pagination Example</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index} style={{ padding: "5px 0" }}>{item}</li>
        ))}
      </ul>
      <div style={{ marginTop: "15px", display: "flex", gap: "10px", alignItems: "center" }}>
        <button 
          onClick={handlePrev} 
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button 
          onClick={handleNext} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination
