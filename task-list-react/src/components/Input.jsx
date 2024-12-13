import PropTypes from 'prop-types';

function Input(props) {
    return (
        <input
        type={props.type}
        placeholder={props.placeholder}
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={props.value}
        onChange={props.onChange}
      />
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Input;