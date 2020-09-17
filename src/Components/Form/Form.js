import React from 'react'

const Form = props => {
    <form>
       <p>
         <label htmlFor="search">Serach</label>
         <input type="text" name="search"
         value = {props.search}
         onChange= {props.handleInputChange}
         />
       </p>
       <p>
         <button onClick={gifState.handleSearchGIPHY}> Search GIPHY</button>
        </p>
    </form>
}
export default Form