const TextAreaField = () => {
    return ( 
<div>
    <label htmlFor="userMessage">{props.label}</label>
    <textarea name="userMessage"  cols="30" rows="10"  value={props.value} required={props.required} 
        onChange={(e)=> props.onChange(e.target.value)}></textarea>
</div>

     );
}
 
export default TextAreaField;

