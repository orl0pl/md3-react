declare module 'md3-react'
{
	import React from 'react';
	interface ButtonProps {
	    title: string;
	}
	export default function Button({ title }: ButtonProps): React.JSX.Element;
	export {};

	import Button from './Button';
	export { Button };

}