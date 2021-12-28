


import { Switch } from 'react-router';

import LeftNav from './components/LeftNav';
import TopNav from './components/TopNav';

import Category from './components/inventory/productCategory';
import CategoryEdit from './components/inventory/productCategory/edit';

import Product from './components/inventory/product';
import ProductEdit from './components/inventory/product/edit';

import AppRoute from './utils/AppRoute';
function App() {
	
	return (
		<Switch>
			<AppRoute exact path="/" LeftNav={LeftNav} Header={TopNav} Content={TopNav}/>
			<AppRoute exact path="/product-category" LeftNav={LeftNav} Header={TopNav} Content={Category}/>
			<AppRoute exact path="/product-category/edit" LeftNav={LeftNav} Header={TopNav} Content={CategoryEdit}/>
			<AppRoute exact path="/product" LeftNav={LeftNav} Header={TopNav} Content={Product}/>
			<AppRoute exact path="/product/edit" LeftNav={LeftNav} Header={TopNav} Content={ProductEdit}/>
			{/* <AppRoute exact path="/documents" component={LeftNav} layout={LeftNav} />
			<AppRoute exact path="/login" component={Login} layout={LayoutDefault} />
			<AppRoute exact path="/login/:recEmail/:recToken" component={Login} layout={LayoutDefault} />
			<AppRoute exact path="/workorders" component={WorkOrder} layout={LayoutDefault} /> */}
		</Switch>
	);
}

export default App;
