import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Button({ ...props }) {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<button type="button" {...props}>
			Save
		</button>
	);
}

export default Button;

Button.propTypes = {
	className: PropTypes.string,
};

Button.defaultProps = {
	className: 'btn btn-sm',
};
