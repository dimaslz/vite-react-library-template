import React, { FC } from 'react';
import { Dummy } from '@dimaslz/dummy-component';
// import { Dummy } from '../../packages/dummy-component/dist';
// import { Dummy } from '../../packages/dummy/src';
// import { Dummy } from '../../packages/dummy/dist';

console.log('Dummy', Dummy);
import './App.css';

export const App: FC = () => (
	<div className="App">
		<div>HOLA</div>
		<Dummy>
			<div>Dummy text</div>
		</Dummy>
		{/* <Demo>
			<div>Demo text</div>
		</Demo> */}
	</div>
);

export default App;
