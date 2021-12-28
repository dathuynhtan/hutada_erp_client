import React, {useState} from 'react';

import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const TopNav = props => {
    let [current, setCurrent] = useState(0);
    const user = {
		roleBase: {
			items: true,
			scm: true,
		}
	}
    const styles = {
        marginLeft: 'auto'
    }
	const goToItemCategoryList = (ev) => {
		window.location.href= '/product-category'
	}
	const goToItemList = ev => {
		window.location.href = '/product';
	}
    return (
        <div>
            <Menu selectedKeys={[current]} mode="horizontal">
            {user.roleBase.items && 
			<SubMenu key="sub1" icon={<MailOutlined />} style={styles} title="Tồn kho">
				<SubMenu key="sub2" title="Sản phẩm">
					<Menu.Item key="1">Thêm mới</Menu.Item>
					<Menu.Item key="2" onClick={e => {goToItemList(e)}}>Danh sách</Menu.Item>
				</SubMenu>
				<SubMenu key="sub3" title="Loại Sản phẩm">
					<Menu.Item key="3">Thêm mới</Menu.Item>
					<Menu.Item key="4" onClick={e => {goToItemCategoryList(e)}}>Danh sách</Menu.Item>
				</SubMenu>
			</SubMenu>}
			{user.roleBase.scm && 
			<SubMenu key="sub4" icon={<AppstoreOutlined />}  title="Sản xuất">
				{/* <Menu.Item key="5">Lệnh sản xuất</Menu.Item>
				<Menu.Item key="6">Option 6</Menu.Item> */}
				<SubMenu key="sub5" title="Lệnh sản xuất">
					<Menu.Item key="5">Tạo lệnh sản xuất</Menu.Item>
					<Menu.Item key="6">Danh sách</Menu.Item>
				</SubMenu>
			</SubMenu>}
            </Menu>
        </div>
    );

    
}

export default TopNav;