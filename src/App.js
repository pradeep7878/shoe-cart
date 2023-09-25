import { useRef, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header.js';
import Recommended from './Components/Recommended';
import Sidebar from './Components/Sidebar';

import Data from './Components/Data.js';

function App() {

    const [input,setInput] = useState("");
    const [products,setProducts] = useState(Data);

    const inputRef  = useRef();

    // FOR INPUT FILTER======================
    const handleChange = (e) => {
      setInput(e.target.value);
    }

    //FOR RECOMMENDED BUTTONS================
    const filterResult = (brand) => {
      const result = Data.filter(data => {
          return data.company === brand;
      })
      setProducts(result); 
    }

    //FOR CATEGORY RADIO=====================
    const handleCategoryChange = (categoryItem) => {
        const result2 = Data.filter((data) => {
          return data.category === categoryItem;
        })
        setProducts(result2);
        // console.log(result2.length)
    }

    //FOR PRICE RADIO========================
    const handlePriceChange = (price1,price2) => {
         const result3 = Data.filter(data => {
         return data.newPrice >= price1 && data.newPrice <= price2;
      })
        setProducts(result3);
    }

    //FOR COLOR RADIO========================
    const handleColorChange = (color) => {
        const result4 = Data.filter(data => {
          return data.color === color;
        })
        setProducts(result4);
    }



  return (
    <>
      <Header
        input={input}
        setInput={setInput}
        handleChange={handleChange}
        inputRef={inputRef} />
      <Recommended
        filterResult={filterResult}
        products={products}
        setProducts={setProducts}
        Data={Data}
        />

      <div className="card-container">
        {products.filter(product => {
            return product.title.toLowerCase().includes(input.toLowerCase());
        }).map((product) => {
            return( 
                  <Card 
                     key={product.id}
                     product={product}
                       />
            )
        })}
      </div>
      <Sidebar 
        products={products}
        setProducts={setProducts}
        Data={Data}
        handleCategoryChange={handleCategoryChange}
        handlePriceChange={handlePriceChange}
        handleColorChange={handleColorChange}/>
    </>
  );
}

export default App;
