import React from 'react';
import './graph.css';

const Graph = () => {
    return (
      <div className="container">
          <div className="graph-container">
        <div className="graph-day-container">
            <div id="date">01</div> 
            <div className="box">
                
                <div className="fromTo">C</div>
                <div className="input">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>    
                <div className="fromTo">По</div>
                <div className="input">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </div>        
        </div>

        <div className="graph-day-container">
            <div id="date">02</div> 
            <div className="box">
                
                <div className="fromTo">C</div>
                <div className="input">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>    
                <div className="fromTo">По</div>
                <div className="input">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </div>        
        </div>

            <div className="graph-day-container">
                <div id="date">03</div> 
                <div className="box">
                    
                    <div className="fromTo">C</div>
                    <div className="input">
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                    </div>    
                    <div className="fromTo">По</div>
                    <div className="input">
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                </div>        
            </div>

            <div className="graph-day-container">
            <div id="date">04</div> 
            <div className="box">
                
                <div className="fromTo">C</div>
                <div className="input">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>    
                <div className="fromTo">По</div>
                <div className="input">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </div>        
        </div>
        
       
        </div>
        <button type="submit" class="btn btn-primary mb-2">Сохранить</button>
      </div>  
      

    
        
    );
};

export default Graph;