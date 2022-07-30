import React from 'react';
import LoaderContainer from './loader.elements.js';

 const Loader = ({ size, alignSelf, className, marginT }) => (
	<LoaderContainer
		className={className}
		size={size}
		alignSelf={alignSelf}
		marginT={marginT}
	>
		<div />
		<div />
		<div />
		<div />
	</LoaderContainer>
);

export default Loader;

