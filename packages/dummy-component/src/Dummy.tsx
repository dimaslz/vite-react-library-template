import React from 'react';

type Props = {
	children: React.ReactNode
};

export const Dummy = ({ children }: Props): React.ReactElement => (<div>
	{children}
</div>);

export default Dummy;
