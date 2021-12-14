import React, { useState } from "react";  
import axios from 'axios';

function GooglePexel() {  
    const [search, setsearch] = useState("");  
    const [each_page, seteach_page] = useState("");  
    const [result, setResult] = useState([]);  
  
    function handleChange(event) {  
        const search = event.target.value;  
        setsearch(search);  
    }  
    function quant_img(event) {  
        const each_page = event.target.value;  
        seteach_page(each_page);  
    }  
  
    function handleSubmit(event) {  
        event.preventDefault();  
        const url = "https://api.pexels.com/v1/search?query="+search+"&per_page="+each_page;  
        const chave_api =
          "563492ad6f917000010000010fef2c692ae0420087dbfdb49acf5d71";  
        axios.get(url, {  
            headers: {  
                'Authorization': `${chave_api}`  
            }  
        }).then(data => {  
            console.log(data);  
            setResult(data.data.photos);  
        })  
  
    }  
    return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 mb-2">
            <label>Digite o que você quer ver:</label>
            <input
              onChange={handleChange}
              className="AutoFocus form-control"
              placeholder="O que você quer ver?"
              type="text"
            />
          </div>
          <div className="col-12 col-md-4 col-lg-4 mb-2">
            <label>E com quantas imagens?</label>
            <input
              onChange={quant_img}
              name="deliveryNumber"
              className="AutoFocus form-control"
              placeholder="E com quantas imagens nesse álbum?"
              type="text"
            />
          </div>
          <div className="col-md-4 col-lg-3 text-center mt-4 mb-2">
            <button type="submit" value="Search">
              Buscar álbum
            </button>
          </div>
        </div>
        <div class="row">
          {result.map((search) => (
            <div className="col-sm-4">
              <div class="mt-2">
                <img
                  class="col-lg-10 mt-2 mb-2"
                  variant="top"
                  src={search.src.landscape}
                  alt={search.photographer}
                />
              </div>
            </div>
          ))}
        </div>
      </form>
    );  
}  
  
export default GooglePexel  