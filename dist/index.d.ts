declare module 'md3-react'
{
	export * from './componets';

	export * from './buttons';

	import React from 'react';
	interface ButtonProps {
	    title: string;
	}
	export default function Button({ title }: ButtonProps): React.JSX.Element;
	export {};

	export * from './Button';

}