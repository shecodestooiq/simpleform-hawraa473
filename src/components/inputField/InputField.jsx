const InputField = (props) => {
    return ( 
        <div>
              <label htmlFor="userInfo">{props.label}</label>
        <input type={props.type} name="userInfo" value={props.value} required={props.required} 
        onChange={(e)=> props.onChange(e.target.value)} />  
        </div>
    

      );
}
 
export default InputField;